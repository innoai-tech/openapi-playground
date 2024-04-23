import { g as e, F as t, j as n, k as r } from "./lib--nodepkg-vue-jsx-runtime.BN22WHLF.chunk.js";
import { f as i, r as l, c as o } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
import { h as a, r as u, i as c, g as s } from "./lib--nodepkg-vuekit.UMOgsAuw.chunk.js";
let f = {};
function p(e10, t10, n10) {
  if (e10 && "object" == typeof e10) {
    if ("value" in e10)
      return "html" !== e10.type || n10 ? e10.value : "";
    if (t10 && "alt" in e10 && e10.alt)
      return e10.alt;
    if ("children" in e10)
      return d(e10.children, t10, n10);
  }
  return Array.isArray(e10) ? d(e10, t10, n10) : "";
}
function d(e10, t10, n10) {
  let r2 = [], i2 = -1;
  for (; ++i2 < e10.length; )
    r2[i2] = p(e10[i2], t10, n10);
  return r2.join("");
}
let h = document.createElement("i");
function m(e10) {
  let t10 = "&" + e10 + ";";
  h.innerHTML = t10;
  let n10 = h.textContent;
  return (59 !== n10.charCodeAt(n10.length - 1) || "semi" === e10) && n10 !== t10 && n10;
}
function g(e10, t10, n10, r2) {
  let i2;
  let l2 = e10.length, o2 = 0;
  if (t10 = t10 < 0 ? -t10 > l2 ? 0 : l2 + t10 : t10 > l2 ? l2 : t10, n10 = n10 > 0 ? n10 : 0, r2.length < 1e4)
    (i2 = Array.from(r2)).unshift(t10, n10), e10.splice(...i2);
  else
    for (n10 && e10.splice(t10, n10); o2 < r2.length; )
      (i2 = r2.slice(o2, o2 + 1e4)).unshift(t10, 0), e10.splice(...i2), o2 += 1e4, t10 += 1e4;
}
function y(e10, t10) {
  return e10.length > 0 ? (g(e10, e10.length, 0, t10), e10) : t10;
}
let x = {}.hasOwnProperty;
function k(e10) {
  let t10 = {}, n10 = -1;
  for (; ++n10 < e10.length; )
    !function(e11, t11) {
      let n11;
      for (n11 in t11) {
        let r2;
        let i2 = (x.call(e11, n11) ? e11[n11] : void 0) || (e11[n11] = {}), l2 = t11[n11];
        if (l2)
          for (r2 in l2) {
            x.call(i2, r2) || (i2[r2] = []);
            let e12 = l2[r2];
            !function(e13, t12) {
              let n12 = -1, r3 = [];
              for (; ++n12 < t12.length; )
                ("after" === t12[n12].add ? e13 : r3).push(t12[n12]);
              g(e13, 0, 0, r3);
            }(i2[r2], Array.isArray(e12) ? e12 : e12 ? [e12] : []);
          }
      }
    }(t10, e10[n10]);
  return t10;
}
function v(e10, t10) {
  let n10 = Number.parseInt(e10, t10);
  return n10 < 9 || 11 === n10 || n10 > 13 && n10 < 32 || n10 > 126 && n10 < 160 || n10 > 55295 && n10 < 57344 || n10 > 64975 && n10 < 65008 || (65535 & n10) == 65535 || (65535 & n10) == 65534 || n10 > 1114111 ? "�" : String.fromCodePoint(n10);
}
function b(e10) {
  return e10.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let S = z(/[A-Za-z]/), C = z(/[\dA-Za-z]/), w = z(/[#-'*+\--9=?A-Z^-~]/);
function A(e10) {
  return null !== e10 && (e10 < 32 || 127 === e10);
}
let T = z(/\d/), I = z(/[\dA-Fa-f]/), L = z(/[!-/:-@[-`{-~]/);
function D(e10) {
  return null !== e10 && e10 < -2;
}
function E(e10) {
  return null !== e10 && (e10 < 0 || 32 === e10);
}
function M(e10) {
  return -2 === e10 || -1 === e10 || 32 === e10;
}
let O = z(new RegExp("\\p{P}|\\p{S}", "u")), F = z(/\s/);
function z(e10) {
  return function(t10) {
    return null !== t10 && t10 > -1 && e10.test(String.fromCharCode(t10));
  };
}
function P(e10) {
  let t10 = [], n10 = -1, r2 = 0, i2 = 0;
  for (; ++n10 < e10.length; ) {
    let l2 = e10.charCodeAt(n10), o2 = "";
    if (37 === l2 && C(e10.charCodeAt(n10 + 1)) && C(e10.charCodeAt(n10 + 2)))
      i2 = 2;
    else if (l2 < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l2)) || (o2 = String.fromCharCode(l2));
    else if (l2 > 55295 && l2 < 57344) {
      let t11 = e10.charCodeAt(n10 + 1);
      l2 < 56320 && t11 > 56319 && t11 < 57344 ? (o2 = String.fromCharCode(l2, t11), i2 = 1) : o2 = "�";
    } else
      o2 = String.fromCharCode(l2);
    o2 && (t10.push(e10.slice(r2, n10), encodeURIComponent(o2)), r2 = n10 + i2 + 1, o2 = ""), i2 && (n10 += i2, i2 = 0);
  }
  return t10.join("") + e10.slice(r2);
}
function N(e10, t10, n10, r2) {
  let i2 = r2 ? r2 - 1 : Number.POSITIVE_INFINITY, l2 = 0;
  return function(r3) {
    return M(r3) ? (e10.enter(n10), function r4(o2) {
      return M(o2) && l2++ < i2 ? (e10.consume(o2), r4) : (e10.exit(n10), t10(o2));
    }(r3)) : t10(r3);
  };
}
let j = { tokenize: function(e10) {
  let t10;
  let n10 = e10.attempt(this.parser.constructs.contentInitial, function(t11) {
    if (null === t11) {
      e10.consume(t11);
      return;
    }
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), N(e10, n10, "linePrefix");
  }, function(n11) {
    return e10.enter("paragraph"), function n12(r2) {
      let i2 = e10.enter("chunkText", { contentType: "text", previous: t10 });
      return t10 && (t10.next = i2), t10 = i2, function t11(r3) {
        if (null === r3) {
          e10.exit("chunkText"), e10.exit("paragraph"), e10.consume(r3);
          return;
        }
        return D(r3) ? (e10.consume(r3), e10.exit("chunkText"), n12) : (e10.consume(r3), t11);
      }(r2);
    }(n11);
  });
  return n10;
} }, R = { tokenize: function(e10) {
  let t10, n10, r2;
  let i2 = this, l2 = [], o2 = 0;
  return a2;
  function a2(t11) {
    if (o2 < l2.length) {
      let n11 = l2[o2];
      return i2.containerState = n11[1], e10.attempt(n11[0].continuation, u2, c2)(t11);
    }
    return c2(t11);
  }
  function u2(e11) {
    if (o2++, i2.containerState._closeFlow) {
      let n11;
      i2.containerState._closeFlow = void 0, t10 && x2();
      let r3 = i2.events.length, l3 = r3;
      for (; l3--; )
        if ("exit" === i2.events[l3][0] && "chunkFlow" === i2.events[l3][1].type) {
          n11 = i2.events[l3][1].end;
          break;
        }
      y2(o2);
      let a3 = r3;
      for (; a3 < i2.events.length; )
        i2.events[a3][1].end = Object.assign({}, n11), a3++;
      return g(i2.events, l3 + 1, 0, i2.events.slice(r3)), i2.events.length = a3, c2(e11);
    }
    return a2(e11);
  }
  function c2(n11) {
    if (o2 === l2.length) {
      if (!t10)
        return p2(n11);
      if (t10.currentConstruct && t10.currentConstruct.concrete)
        return h2(n11);
      i2.interrupt = !!(t10.currentConstruct && !t10._gfmTableDynamicInterruptHack);
    }
    return i2.containerState = {}, e10.check(_, s2, f2)(n11);
  }
  function s2(e11) {
    return t10 && x2(), y2(o2), p2(e11);
  }
  function f2(e11) {
    return i2.parser.lazy[i2.now().line] = o2 !== l2.length, r2 = i2.now().offset, h2(e11);
  }
  function p2(t11) {
    return i2.containerState = {}, e10.attempt(_, d2, h2)(t11);
  }
  function d2(e11) {
    return o2++, l2.push([i2.currentConstruct, i2.containerState]), p2(e11);
  }
  function h2(r3) {
    if (null === r3) {
      t10 && x2(), y2(0), e10.consume(r3);
      return;
    }
    return t10 = t10 || i2.parser.flow(i2.now()), e10.enter("chunkFlow", { contentType: "flow", previous: n10, _tokenizer: t10 }), function t11(n11) {
      if (null === n11) {
        m2(e10.exit("chunkFlow"), true), y2(0), e10.consume(n11);
        return;
      }
      return D(n11) ? (e10.consume(n11), m2(e10.exit("chunkFlow")), o2 = 0, i2.interrupt = void 0, a2) : (e10.consume(n11), t11);
    }(r3);
  }
  function m2(e11, l3) {
    let a3 = i2.sliceStream(e11);
    if (l3 && a3.push(null), e11.previous = n10, n10 && (n10.next = e11), n10 = e11, t10.defineSkip(e11.start), t10.write(a3), i2.parser.lazy[e11.start.line]) {
      let e12, n11, l4 = t10.events.length;
      for (; l4--; )
        if (t10.events[l4][1].start.offset < r2 && (!t10.events[l4][1].end || t10.events[l4][1].end.offset > r2))
          return;
      let a4 = i2.events.length, u3 = a4;
      for (; u3--; )
        if ("exit" === i2.events[u3][0] && "chunkFlow" === i2.events[u3][1].type) {
          if (e12) {
            n11 = i2.events[u3][1].end;
            break;
          }
          e12 = true;
        }
      for (y2(o2), l4 = a4; l4 < i2.events.length; )
        i2.events[l4][1].end = Object.assign({}, n11), l4++;
      g(i2.events, u3 + 1, 0, i2.events.slice(a4)), i2.events.length = l4;
    }
  }
  function y2(t11) {
    let n11 = l2.length;
    for (; n11-- > t11; ) {
      let t12 = l2[n11];
      i2.containerState = t12[1], t12[0].exit.call(i2, e10);
    }
    l2.length = t11;
  }
  function x2() {
    t10.write([null]), n10 = void 0, t10 = void 0, i2.containerState._closeFlow = void 0;
  }
} }, _ = { tokenize: function(e10, t10, n10) {
  return N(e10, e10.attempt(this.parser.constructs.document, t10, n10), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function B(e10) {
  return null === e10 || E(e10) || F(e10) ? 1 : O(e10) ? 2 : void 0;
}
function V(e10, t10, n10) {
  let r2 = [], i2 = -1;
  for (; ++i2 < e10.length; ) {
    let l2 = e10[i2].resolveAll;
    l2 && !r2.includes(l2) && (t10 = l2(t10, n10), r2.push(l2));
  }
  return t10;
}
let H = { name: "attention", tokenize: function(e10, t10) {
  let n10;
  let r2 = this.parser.constructs.attentionMarkers.null, i2 = this.previous, l2 = B(i2);
  return function(o2) {
    return n10 = o2, e10.enter("attentionSequence"), function o3(a2) {
      if (a2 === n10)
        return e10.consume(a2), o3;
      let u2 = e10.exit("attentionSequence"), c2 = B(a2), s2 = !c2 || 2 === c2 && l2 || r2.includes(a2), f2 = !l2 || 2 === l2 && c2 || r2.includes(i2);
      return u2._open = !!(42 === n10 ? s2 : s2 && (l2 || !f2)), u2._close = !!(42 === n10 ? f2 : f2 && (c2 || !s2)), t10(a2);
    }(o2);
  };
}, resolveAll: function(e10, t10) {
  let n10, r2, i2, l2, o2, a2, u2, c2, s2 = -1;
  for (; ++s2 < e10.length; )
    if ("enter" === e10[s2][0] && "attentionSequence" === e10[s2][1].type && e10[s2][1]._close) {
      for (n10 = s2; n10--; )
        if ("exit" === e10[n10][0] && "attentionSequence" === e10[n10][1].type && e10[n10][1]._open && t10.sliceSerialize(e10[n10][1]).charCodeAt(0) === t10.sliceSerialize(e10[s2][1]).charCodeAt(0)) {
          if ((e10[n10][1]._close || e10[s2][1]._open) && (e10[s2][1].end.offset - e10[s2][1].start.offset) % 3 && !((e10[n10][1].end.offset - e10[n10][1].start.offset + e10[s2][1].end.offset - e10[s2][1].start.offset) % 3))
            continue;
          a2 = e10[n10][1].end.offset - e10[n10][1].start.offset > 1 && e10[s2][1].end.offset - e10[s2][1].start.offset > 1 ? 2 : 1;
          let f2 = Object.assign({}, e10[n10][1].end), p2 = Object.assign({}, e10[s2][1].start);
          U(f2, -a2), U(p2, a2), l2 = { type: a2 > 1 ? "strongSequence" : "emphasisSequence", start: f2, end: Object.assign({}, e10[n10][1].end) }, o2 = { type: a2 > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, e10[s2][1].start), end: p2 }, i2 = { type: a2 > 1 ? "strongText" : "emphasisText", start: Object.assign({}, e10[n10][1].end), end: Object.assign({}, e10[s2][1].start) }, r2 = { type: a2 > 1 ? "strong" : "emphasis", start: Object.assign({}, l2.start), end: Object.assign({}, o2.end) }, e10[n10][1].end = Object.assign({}, l2.start), e10[s2][1].start = Object.assign({}, o2.end), u2 = [], e10[n10][1].end.offset - e10[n10][1].start.offset && (u2 = y(u2, [["enter", e10[n10][1], t10], ["exit", e10[n10][1], t10]])), u2 = y(u2, [["enter", r2, t10], ["enter", l2, t10], ["exit", l2, t10], ["enter", i2, t10]]), u2 = y(u2, V(t10.parser.constructs.insideSpan.null, e10.slice(n10 + 1, s2), t10)), u2 = y(u2, [["exit", i2, t10], ["enter", o2, t10], ["exit", o2, t10], ["exit", r2, t10]]), e10[s2][1].end.offset - e10[s2][1].start.offset ? (c2 = 2, u2 = y(u2, [["enter", e10[s2][1], t10], ["exit", e10[s2][1], t10]])) : c2 = 0, g(e10, n10 - 1, s2 - n10 + 3, u2), s2 = n10 + u2.length - c2 - 2;
          break;
        }
    }
  for (s2 = -1; ++s2 < e10.length; )
    "attentionSequence" === e10[s2][1].type && (e10[s2][1].type = "data");
  return e10;
} };
function U(e10, t10) {
  e10.column += t10, e10.offset += t10, e10._bufferIndex += t10;
}
let q = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return M(t11) ? N(e10, r2, "linePrefix")(t11) : r2(t11);
  };
  function r2(e11) {
    return null === e11 || D(e11) ? t10(e11) : n10(e11);
  }
}, partial: true }, W = { name: "blockQuote", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    if (62 === t11) {
      let n11 = r2.containerState;
      return n11.open || (e10.enter("blockQuote", { _container: true }), n11.open = true), e10.enter("blockQuotePrefix"), e10.enter("blockQuoteMarker"), e10.consume(t11), e10.exit("blockQuoteMarker"), i2;
    }
    return n10(t11);
  };
  function i2(n11) {
    return M(n11) ? (e10.enter("blockQuotePrefixWhitespace"), e10.consume(n11), e10.exit("blockQuotePrefixWhitespace"), e10.exit("blockQuotePrefix"), t10) : (e10.exit("blockQuotePrefix"), t10(n11));
  }
}, continuation: { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return M(t11) ? N(e10, i2, "linePrefix", r2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t11) : i2(t11);
  };
  function i2(r3) {
    return e10.attempt(W, t10, n10)(r3);
  }
} }, exit: function(e10) {
  e10.exit("blockQuote");
} }, Y = { name: "characterEscape", tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("characterEscape"), e10.enter("escapeMarker"), e10.consume(t11), e10.exit("escapeMarker"), r2;
  };
  function r2(r3) {
    return L(r3) ? (e10.enter("characterEscapeValue"), e10.consume(r3), e10.exit("characterEscapeValue"), e10.exit("characterEscape"), t10) : n10(r3);
  }
} }, Q = { name: "characterReference", tokenize: function(e10, t10, n10) {
  let r2, i2;
  let l2 = this, o2 = 0;
  return function(t11) {
    return e10.enter("characterReference"), e10.enter("characterReferenceMarker"), e10.consume(t11), e10.exit("characterReferenceMarker"), a2;
  };
  function a2(t11) {
    return 35 === t11 ? (e10.enter("characterReferenceMarkerNumeric"), e10.consume(t11), e10.exit("characterReferenceMarkerNumeric"), u2) : (e10.enter("characterReferenceValue"), r2 = 31, i2 = C, c2(t11));
  }
  function u2(t11) {
    return 88 === t11 || 120 === t11 ? (e10.enter("characterReferenceMarkerHexadecimal"), e10.consume(t11), e10.exit("characterReferenceMarkerHexadecimal"), e10.enter("characterReferenceValue"), r2 = 6, i2 = I, c2) : (e10.enter("characterReferenceValue"), r2 = 7, i2 = T, c2(t11));
  }
  function c2(a3) {
    if (59 === a3 && o2) {
      let r3 = e10.exit("characterReferenceValue");
      return i2 !== C || m(l2.sliceSerialize(r3)) ? (e10.enter("characterReferenceMarker"), e10.consume(a3), e10.exit("characterReferenceMarker"), e10.exit("characterReference"), t10) : n10(a3);
    }
    return i2(a3) && o2++ < r2 ? (e10.consume(a3), c2) : n10(a3);
  }
} }, $ = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return null === t11 ? n10(t11) : (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2);
  };
  function i2(e11) {
    return r2.parser.lazy[r2.now().line] ? n10(e11) : t10(e11);
  }
}, partial: true }, K = { name: "codeFenced", tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = { tokenize: function(e11, t11, n11) {
    let l3 = 0;
    return function(t12) {
      return e11.enter("lineEnding"), e11.consume(t12), e11.exit("lineEnding"), o3;
    };
    function o3(t12) {
      return e11.enter("codeFencedFence"), M(t12) ? N(e11, u3, "linePrefix", i2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t12) : u3(t12);
    }
    function u3(t12) {
      return t12 === r2 ? (e11.enter("codeFencedFenceSequence"), function t13(i3) {
        return i3 === r2 ? (l3++, e11.consume(i3), t13) : l3 >= a2 ? (e11.exit("codeFencedFenceSequence"), M(i3) ? N(e11, c3, "whitespace")(i3) : c3(i3)) : n11(i3);
      }(t12)) : n11(t12);
    }
    function c3(r3) {
      return null === r3 || D(r3) ? (e11.exit("codeFencedFence"), t11(r3)) : n11(r3);
    }
  }, partial: true }, o2 = 0, a2 = 0;
  return function(t11) {
    return function(t12) {
      let l3 = i2.events[i2.events.length - 1];
      return o2 = l3 && "linePrefix" === l3[1].type ? l3[2].sliceSerialize(l3[1], true).length : 0, r2 = t12, e10.enter("codeFenced"), e10.enter("codeFencedFence"), e10.enter("codeFencedFenceSequence"), function t13(i3) {
        return i3 === r2 ? (a2++, e10.consume(i3), t13) : a2 < 3 ? n10(i3) : (e10.exit("codeFencedFenceSequence"), M(i3) ? N(e10, u2, "whitespace")(i3) : u2(i3));
      }(t12);
    }(t11);
  };
  function u2(l3) {
    return null === l3 || D(l3) ? (e10.exit("codeFencedFence"), i2.interrupt ? t10(l3) : e10.check($, s2, h2)(l3)) : (e10.enter("codeFencedFenceInfo"), e10.enter("chunkString", { contentType: "string" }), function t11(i3) {
      return null === i3 || D(i3) ? (e10.exit("chunkString"), e10.exit("codeFencedFenceInfo"), u2(i3)) : M(i3) ? (e10.exit("chunkString"), e10.exit("codeFencedFenceInfo"), N(e10, c2, "whitespace")(i3)) : 96 === i3 && i3 === r2 ? n10(i3) : (e10.consume(i3), t11);
    }(l3));
  }
  function c2(t11) {
    return null === t11 || D(t11) ? u2(t11) : (e10.enter("codeFencedFenceMeta"), e10.enter("chunkString", { contentType: "string" }), function t12(i3) {
      return null === i3 || D(i3) ? (e10.exit("chunkString"), e10.exit("codeFencedFenceMeta"), u2(i3)) : 96 === i3 && i3 === r2 ? n10(i3) : (e10.consume(i3), t12);
    }(t11));
  }
  function s2(t11) {
    return e10.attempt(l2, h2, f2)(t11);
  }
  function f2(t11) {
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), p2;
  }
  function p2(t11) {
    return o2 > 0 && M(t11) ? N(e10, d2, "linePrefix", o2 + 1)(t11) : d2(t11);
  }
  function d2(t11) {
    return null === t11 || D(t11) ? e10.check($, s2, h2)(t11) : (e10.enter("codeFlowValue"), function t12(n11) {
      return null === n11 || D(n11) ? (e10.exit("codeFlowValue"), d2(n11)) : (e10.consume(n11), t12);
    }(t11));
  }
  function h2(n11) {
    return e10.exit("codeFenced"), t10(n11);
  }
}, concrete: true }, X = { name: "codeIndented", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("codeIndented"), N(e10, i2, "linePrefix", 5)(t11);
  };
  function i2(t11) {
    let i3 = r2.events[r2.events.length - 1];
    return i3 && "linePrefix" === i3[1].type && i3[2].sliceSerialize(i3[1], true).length >= 4 ? function t12(n11) {
      return null === n11 ? l2(n11) : D(n11) ? e10.attempt(Z, t12, l2)(n11) : (e10.enter("codeFlowValue"), function n12(r3) {
        return null === r3 || D(r3) ? (e10.exit("codeFlowValue"), t12(r3)) : (e10.consume(r3), n12);
      }(n11));
    }(t11) : n10(t11);
  }
  function l2(n11) {
    return e10.exit("codeIndented"), t10(n11);
  }
} }, Z = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return i2;
  function i2(t11) {
    return r2.parser.lazy[r2.now().line] ? n10(t11) : D(t11) ? (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2) : N(e10, l2, "linePrefix", 5)(t11);
  }
  function l2(e11) {
    let l3 = r2.events[r2.events.length - 1];
    return l3 && "linePrefix" === l3[1].type && l3[2].sliceSerialize(l3[1], true).length >= 4 ? t10(e11) : D(e11) ? i2(e11) : n10(e11);
  }
}, partial: true };
class J {
  constructor(e10) {
    this.left = e10 ? [...e10] : [], this.right = [];
  }
  get(e10) {
    if (e10 < 0 || e10 >= this.left.length + this.right.length)
      throw RangeError("Cannot access index `" + e10 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return e10 < this.left.length ? this.left[e10] : this.right[this.right.length - e10 + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(e10, t10) {
    let n10 = null == t10 ? Number.POSITIVE_INFINITY : t10;
    return n10 < this.left.length ? this.left.slice(e10, n10) : e10 > this.left.length ? this.right.slice(this.right.length - n10 + this.left.length, this.right.length - e10 + this.left.length).reverse() : this.left.slice(e10).concat(this.right.slice(this.right.length - n10 + this.left.length).reverse());
  }
  splice(e10, t10, n10) {
    this.setCursor(Math.trunc(e10));
    let r2 = this.right.splice(this.right.length - (t10 || 0), Number.POSITIVE_INFINITY);
    return n10 && G(this.left, n10), r2.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(e10) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e10);
  }
  pushMany(e10) {
    this.setCursor(Number.POSITIVE_INFINITY), G(this.left, e10);
  }
  unshift(e10) {
    this.setCursor(0), this.right.push(e10);
  }
  unshiftMany(e10) {
    this.setCursor(0), G(this.right, e10.reverse());
  }
  setCursor(e10) {
    if (e10 !== this.left.length && (!(e10 > this.left.length) || 0 !== this.right.length) && (!(e10 < 0) || 0 !== this.left.length)) {
      if (e10 < this.left.length) {
        let t10 = this.left.splice(e10, Number.POSITIVE_INFINITY);
        G(this.right, t10.reverse());
      } else {
        let t10 = this.right.splice(this.left.length + this.right.length - e10, Number.POSITIVE_INFINITY);
        G(this.left, t10.reverse());
      }
    }
  }
}
function G(e10, t10) {
  let n10 = 0;
  if (t10.length < 1e4)
    e10.push(...t10);
  else
    for (; n10 < t10.length; )
      e10.push(...t10.slice(n10, n10 + 1e4)), n10 += 1e4;
}
function ee(e10) {
  let t10, n10, r2, i2, l2, o2, a2;
  let u2 = {}, c2 = -1, s2 = new J(e10);
  for (; ++c2 < s2.length; ) {
    for (; c2 in u2; )
      c2 = u2[c2];
    if (t10 = s2.get(c2), c2 && "chunkFlow" === t10[1].type && "listItemPrefix" === s2.get(c2 - 1)[1].type && ((r2 = 0) < (o2 = t10[1]._tokenizer.events).length && "lineEndingBlank" === o2[r2][1].type && (r2 += 2), r2 < o2.length && "content" === o2[r2][1].type))
      for (; ++r2 < o2.length && "content" !== o2[r2][1].type; )
        "chunkText" === o2[r2][1].type && (o2[r2][1]._isInFirstContentOfListItem = true, r2++);
    if ("enter" === t10[0])
      t10[1].contentType && (Object.assign(u2, function(e11, t11) {
        let n11, r3;
        let i3 = e11.get(t11)[1], l3 = e11.get(t11)[2], o3 = t11 - 1, a3 = [], u3 = i3._tokenizer || l3.parser[i3.contentType](i3.start), c3 = u3.events, s3 = [], f2 = {}, p2 = -1, d2 = i3, h2 = 0, m2 = 0, g2 = [0];
        for (; d2; ) {
          for (; e11.get(++o3)[1] !== d2; )
            ;
          a3.push(o3), !d2._tokenizer && (n11 = l3.sliceStream(d2), d2.next || n11.push(null), r3 && u3.defineSkip(d2.start), d2._isInFirstContentOfListItem && (u3._gfmTasklistFirstContentOfListItem = true), u3.write(n11), d2._isInFirstContentOfListItem && (u3._gfmTasklistFirstContentOfListItem = void 0)), r3 = d2, d2 = d2.next;
        }
        for (d2 = i3; ++p2 < c3.length; )
          "exit" === c3[p2][0] && "enter" === c3[p2 - 1][0] && c3[p2][1].type === c3[p2 - 1][1].type && c3[p2][1].start.line !== c3[p2][1].end.line && (m2 = p2 + 1, g2.push(m2), d2._tokenizer = void 0, d2.previous = void 0, d2 = d2.next);
        for (u3.events = [], d2 ? (d2._tokenizer = void 0, d2.previous = void 0) : g2.pop(), p2 = g2.length; p2--; ) {
          let t12 = c3.slice(g2[p2], g2[p2 + 1]), n12 = a3.pop();
          s3.push([n12, n12 + t12.length - 1]), e11.splice(n12, 2, t12);
        }
        for (s3.reverse(), p2 = -1; ++p2 < s3.length; )
          f2[h2 + s3[p2][0]] = h2 + s3[p2][1], h2 += s3[p2][1] - s3[p2][0] - 1;
        return f2;
      }(s2, c2)), c2 = u2[c2], a2 = true);
    else if (t10[1]._container) {
      for (r2 = c2, n10 = void 0; r2--; )
        if ("lineEnding" === (i2 = s2.get(r2))[1].type || "lineEndingBlank" === i2[1].type)
          "enter" === i2[0] && (n10 && (s2.get(n10)[1].type = "lineEndingBlank"), i2[1].type = "lineEnding", n10 = r2);
        else
          break;
      n10 && (t10[1].end = Object.assign({}, s2.get(n10)[1].start), (l2 = s2.slice(n10, c2)).unshift(t10), s2.splice(n10, c2 - n10 + 1, l2));
    }
  }
  return g(e10, 0, Number.POSITIVE_INFINITY, s2.slice(0)), !a2;
}
let et = { tokenize: function(e10, t10) {
  let n10;
  return function(t11) {
    return e10.enter("content"), n10 = e10.enter("chunkContent", { contentType: "content" }), r2(t11);
  };
  function r2(t11) {
    return null === t11 ? i2(t11) : D(t11) ? e10.check(en, l2, i2)(t11) : (e10.consume(t11), r2);
  }
  function i2(n11) {
    return e10.exit("chunkContent"), e10.exit("content"), t10(n11);
  }
  function l2(t11) {
    return e10.consume(t11), e10.exit("chunkContent"), n10.next = e10.enter("chunkContent", { contentType: "content", previous: n10 }), n10 = n10.next, r2;
  }
}, resolve: function(e10) {
  return ee(e10), e10;
} }, en = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.exit("chunkContent"), e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), N(e10, i2, "linePrefix");
  };
  function i2(i3) {
    if (null === i3 || D(i3))
      return n10(i3);
    let l2 = r2.events[r2.events.length - 1];
    return !r2.parser.constructs.disable.null.includes("codeIndented") && l2 && "linePrefix" === l2[1].type && l2[2].sliceSerialize(l2[1], true).length >= 4 ? t10(i3) : e10.interrupt(r2.parser.constructs.flow, n10, t10)(i3);
  }
}, partial: true };
function er(e10, t10, n10, r2, i2, l2, o2, a2, u2) {
  let c2 = u2 || Number.POSITIVE_INFINITY, s2 = 0;
  return function(t11) {
    return 60 === t11 ? (e10.enter(r2), e10.enter(i2), e10.enter(l2), e10.consume(t11), e10.exit(l2), f2) : null === t11 || 32 === t11 || 41 === t11 || A(t11) ? n10(t11) : (e10.enter(r2), e10.enter(o2), e10.enter(a2), e10.enter("chunkString", { contentType: "string" }), h2(t11));
  };
  function f2(n11) {
    return 62 === n11 ? (e10.enter(l2), e10.consume(n11), e10.exit(l2), e10.exit(i2), e10.exit(r2), t10) : (e10.enter(a2), e10.enter("chunkString", { contentType: "string" }), p2(n11));
  }
  function p2(t11) {
    return 62 === t11 ? (e10.exit("chunkString"), e10.exit(a2), f2(t11)) : null === t11 || 60 === t11 || D(t11) ? n10(t11) : (e10.consume(t11), 92 === t11 ? d2 : p2);
  }
  function d2(t11) {
    return 60 === t11 || 62 === t11 || 92 === t11 ? (e10.consume(t11), p2) : p2(t11);
  }
  function h2(i3) {
    return !s2 && (null === i3 || 41 === i3 || E(i3)) ? (e10.exit("chunkString"), e10.exit(a2), e10.exit(o2), e10.exit(r2), t10(i3)) : s2 < c2 && 40 === i3 ? (e10.consume(i3), s2++, h2) : 41 === i3 ? (e10.consume(i3), s2--, h2) : null === i3 || 32 === i3 || 40 === i3 || A(i3) ? n10(i3) : (e10.consume(i3), 92 === i3 ? m2 : h2);
  }
  function m2(t11) {
    return 40 === t11 || 41 === t11 || 92 === t11 ? (e10.consume(t11), h2) : h2(t11);
  }
}
function ei(e10, t10, n10, r2, i2, l2) {
  let o2;
  let a2 = this, u2 = 0;
  return function(t11) {
    return e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), e10.enter(l2), c2;
  };
  function c2(f3) {
    return u2 > 999 || null === f3 || 91 === f3 || 93 === f3 && !o2 || 94 === f3 && !u2 && "_hiddenFootnoteSupport" in a2.parser.constructs ? n10(f3) : 93 === f3 ? (e10.exit(l2), e10.enter(i2), e10.consume(f3), e10.exit(i2), e10.exit(r2), t10) : D(f3) ? (e10.enter("lineEnding"), e10.consume(f3), e10.exit("lineEnding"), c2) : (e10.enter("chunkString", { contentType: "string" }), s2(f3));
  }
  function s2(t11) {
    return null === t11 || 91 === t11 || 93 === t11 || D(t11) || u2++ > 999 ? (e10.exit("chunkString"), c2(t11)) : (e10.consume(t11), o2 || (o2 = !M(t11)), 92 === t11 ? f2 : s2);
  }
  function f2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), u2++, s2) : s2(t11);
  }
}
function el(e10, t10, n10, r2, i2, l2) {
  let o2;
  return function(t11) {
    return 34 === t11 || 39 === t11 || 40 === t11 ? (e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), o2 = 40 === t11 ? 41 : t11, a2) : n10(t11);
  };
  function a2(n11) {
    return n11 === o2 ? (e10.enter(i2), e10.consume(n11), e10.exit(i2), e10.exit(r2), t10) : (e10.enter(l2), u2(n11));
  }
  function u2(t11) {
    return t11 === o2 ? (e10.exit(l2), a2(o2)) : null === t11 ? n10(t11) : D(t11) ? (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), N(e10, u2, "linePrefix")) : (e10.enter("chunkString", { contentType: "string" }), c2(t11));
  }
  function c2(t11) {
    return t11 === o2 || null === t11 || D(t11) ? (e10.exit("chunkString"), u2(t11)) : (e10.consume(t11), 92 === t11 ? s2 : c2);
  }
  function s2(t11) {
    return t11 === o2 || 92 === t11 ? (e10.consume(t11), c2) : c2(t11);
  }
}
function eo(e10, t10) {
  let n10;
  return function r2(i2) {
    return D(i2) ? (e10.enter("lineEnding"), e10.consume(i2), e10.exit("lineEnding"), n10 = true, r2) : M(i2) ? N(e10, r2, n10 ? "linePrefix" : "lineSuffix")(i2) : t10(i2);
  };
}
let ea = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return E(t11) ? eo(e10, r2)(t11) : n10(t11);
  };
  function r2(t11) {
    return el(e10, i2, n10, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t11);
  }
  function i2(t11) {
    return M(t11) ? N(e10, l2, "whitespace")(t11) : l2(t11);
  }
  function l2(e11) {
    return null === e11 || D(e11) ? t10(e11) : n10(e11);
  }
}, partial: true }, eu = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], ec = ["pre", "script", "style", "textarea"], es = { tokenize: function(e10, t10, n10) {
  return function(r2) {
    return e10.enter("lineEnding"), e10.consume(r2), e10.exit("lineEnding"), e10.attempt(q, t10, n10);
  };
}, partial: true }, ef = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return D(t11) ? (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2) : n10(t11);
  };
  function i2(e11) {
    return r2.parser.lazy[r2.now().line] ? n10(e11) : t10(e11);
  }
}, partial: true }, ep = { name: "labelEnd", tokenize: function(e10, t10, n10) {
  let r2, i2;
  let l2 = this, o2 = l2.events.length;
  for (; o2--; )
    if (("labelImage" === l2.events[o2][1].type || "labelLink" === l2.events[o2][1].type) && !l2.events[o2][1]._balanced) {
      r2 = l2.events[o2][1];
      break;
    }
  return function(t11) {
    return r2 ? r2._inactive ? s2(t11) : (i2 = l2.parser.defined.includes(b(l2.sliceSerialize({ start: r2.end, end: l2.now() }))), e10.enter("labelEnd"), e10.enter("labelMarker"), e10.consume(t11), e10.exit("labelMarker"), e10.exit("labelEnd"), a2) : n10(t11);
  };
  function a2(t11) {
    return 40 === t11 ? e10.attempt(ed, c2, i2 ? c2 : s2)(t11) : 91 === t11 ? e10.attempt(eh, c2, i2 ? u2 : s2)(t11) : i2 ? c2(t11) : s2(t11);
  }
  function u2(t11) {
    return e10.attempt(em, c2, s2)(t11);
  }
  function c2(e11) {
    return t10(e11);
  }
  function s2(e11) {
    return r2._balanced = true, n10(e11);
  }
}, resolveTo: function(e10, t10) {
  let n10, r2, i2, l2, o2 = e10.length, a2 = 0;
  for (; o2--; )
    if (n10 = e10[o2][1], r2) {
      if ("link" === n10.type || "labelLink" === n10.type && n10._inactive)
        break;
      "enter" === e10[o2][0] && "labelLink" === n10.type && (n10._inactive = true);
    } else if (i2) {
      if ("enter" === e10[o2][0] && ("labelImage" === n10.type || "labelLink" === n10.type) && !n10._balanced && (r2 = o2, "labelLink" !== n10.type)) {
        a2 = 2;
        break;
      }
    } else
      "labelEnd" === n10.type && (i2 = o2);
  let u2 = { type: "labelLink" === e10[r2][1].type ? "link" : "image", start: Object.assign({}, e10[r2][1].start), end: Object.assign({}, e10[e10.length - 1][1].end) }, c2 = { type: "label", start: Object.assign({}, e10[r2][1].start), end: Object.assign({}, e10[i2][1].end) }, s2 = { type: "labelText", start: Object.assign({}, e10[r2 + a2 + 2][1].end), end: Object.assign({}, e10[i2 - 2][1].start) };
  return l2 = y(l2 = [["enter", u2, t10], ["enter", c2, t10]], e10.slice(r2 + 1, r2 + a2 + 3)), l2 = y(l2, [["enter", s2, t10]]), l2 = y(l2, V(t10.parser.constructs.insideSpan.null, e10.slice(r2 + a2 + 4, i2 - 3), t10)), l2 = y(l2, [["exit", s2, t10], e10[i2 - 2], e10[i2 - 1], ["exit", c2, t10]]), l2 = y(l2, e10.slice(i2 + 1)), l2 = y(l2, [["exit", u2, t10]]), g(e10, r2, e10.length, l2), e10;
}, resolveAll: function(e10) {
  let t10 = -1;
  for (; ++t10 < e10.length; ) {
    let n10 = e10[t10][1];
    ("labelImage" === n10.type || "labelLink" === n10.type || "labelEnd" === n10.type) && (e10.splice(t10 + 1, "labelImage" === n10.type ? 4 : 2), n10.type = "data", t10++);
  }
  return e10;
} }, ed = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("resource"), e10.enter("resourceMarker"), e10.consume(t11), e10.exit("resourceMarker"), r2;
  };
  function r2(t11) {
    return E(t11) ? eo(e10, i2)(t11) : i2(t11);
  }
  function i2(t11) {
    return 41 === t11 ? c2(t11) : er(e10, l2, o2, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t11);
  }
  function l2(t11) {
    return E(t11) ? eo(e10, a2)(t11) : c2(t11);
  }
  function o2(e11) {
    return n10(e11);
  }
  function a2(t11) {
    return 34 === t11 || 39 === t11 || 40 === t11 ? el(e10, u2, n10, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t11) : c2(t11);
  }
  function u2(t11) {
    return E(t11) ? eo(e10, c2)(t11) : c2(t11);
  }
  function c2(r3) {
    return 41 === r3 ? (e10.enter("resourceMarker"), e10.consume(r3), e10.exit("resourceMarker"), e10.exit("resource"), t10) : n10(r3);
  }
} }, eh = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return ei.call(r2, e10, i2, l2, "reference", "referenceMarker", "referenceString")(t11);
  };
  function i2(e11) {
    return r2.parser.defined.includes(b(r2.sliceSerialize(r2.events[r2.events.length - 1][1]).slice(1, -1))) ? t10(e11) : n10(e11);
  }
  function l2(e11) {
    return n10(e11);
  }
} }, em = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("reference"), e10.enter("referenceMarker"), e10.consume(t11), e10.exit("referenceMarker"), r2;
  };
  function r2(r3) {
    return 93 === r3 ? (e10.enter("referenceMarker"), e10.consume(r3), e10.exit("referenceMarker"), e10.exit("reference"), t10) : n10(r3);
  }
} }, eg = { name: "labelStartImage", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("labelImage"), e10.enter("labelImageMarker"), e10.consume(t11), e10.exit("labelImageMarker"), i2;
  };
  function i2(t11) {
    return 91 === t11 ? (e10.enter("labelMarker"), e10.consume(t11), e10.exit("labelMarker"), e10.exit("labelImage"), l2) : n10(t11);
  }
  function l2(e11) {
    return 94 === e11 && "_hiddenFootnoteSupport" in r2.parser.constructs ? n10(e11) : t10(e11);
  }
}, resolveAll: ep.resolveAll }, ey = { name: "labelStartLink", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("labelLink"), e10.enter("labelMarker"), e10.consume(t11), e10.exit("labelMarker"), e10.exit("labelLink"), i2;
  };
  function i2(e11) {
    return 94 === e11 && "_hiddenFootnoteSupport" in r2.parser.constructs ? n10(e11) : t10(e11);
  }
}, resolveAll: ep.resolveAll }, ex = { name: "lineEnding", tokenize: function(e10, t10) {
  return function(n10) {
    return e10.enter("lineEnding"), e10.consume(n10), e10.exit("lineEnding"), N(e10, t10, "linePrefix");
  };
} }, ek = { name: "thematicBreak", tokenize: function(e10, t10, n10) {
  let r2, i2 = 0;
  return function(l2) {
    return e10.enter("thematicBreak"), r2 = l2, function l3(o2) {
      return o2 === r2 ? (e10.enter("thematicBreakSequence"), function t11(n11) {
        return n11 === r2 ? (e10.consume(n11), i2++, t11) : (e10.exit("thematicBreakSequence"), M(n11) ? N(e10, l3, "whitespace")(n11) : l3(n11));
      }(o2)) : i2 >= 3 && (null === o2 || D(o2)) ? (e10.exit("thematicBreak"), t10(o2)) : n10(o2);
    }(l2);
  };
} }, ev = { name: "list", tokenize: function(e10, t10, n10) {
  let r2 = this, i2 = r2.events[r2.events.length - 1], l2 = i2 && "linePrefix" === i2[1].type ? i2[2].sliceSerialize(i2[1], true).length : 0, o2 = 0;
  return function(t11) {
    let i3 = r2.containerState.type || (42 === t11 || 43 === t11 || 45 === t11 ? "listUnordered" : "listOrdered");
    if ("listUnordered" === i3 ? !r2.containerState.marker || t11 === r2.containerState.marker : T(t11)) {
      if (r2.containerState.type || (r2.containerState.type = i3, e10.enter(i3, { _container: true })), "listUnordered" === i3)
        return e10.enter("listItemPrefix"), 42 === t11 || 45 === t11 ? e10.check(ek, n10, a2)(t11) : a2(t11);
      if (!r2.interrupt || 49 === t11)
        return e10.enter("listItemPrefix"), e10.enter("listItemValue"), function t12(i4) {
          return T(i4) && ++o2 < 10 ? (e10.consume(i4), t12) : (!r2.interrupt || o2 < 2) && (r2.containerState.marker ? i4 === r2.containerState.marker : 41 === i4 || 46 === i4) ? (e10.exit("listItemValue"), a2(i4)) : n10(i4);
        }(t11);
    }
    return n10(t11);
  };
  function a2(t11) {
    return e10.enter("listItemMarker"), e10.consume(t11), e10.exit("listItemMarker"), r2.containerState.marker = r2.containerState.marker || t11, e10.check(q, r2.interrupt ? n10 : u2, e10.attempt(eb, s2, c2));
  }
  function u2(e11) {
    return r2.containerState.initialBlankLine = true, l2++, s2(e11);
  }
  function c2(t11) {
    return M(t11) ? (e10.enter("listItemPrefixWhitespace"), e10.consume(t11), e10.exit("listItemPrefixWhitespace"), s2) : n10(t11);
  }
  function s2(n11) {
    return r2.containerState.size = l2 + r2.sliceSerialize(e10.exit("listItemPrefix"), true).length, t10(n11);
  }
}, continuation: { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return r2.containerState._closeFlow = void 0, e10.check(q, function(n11) {
    return r2.containerState.furtherBlankLines = r2.containerState.furtherBlankLines || r2.containerState.initialBlankLine, N(e10, t10, "listItemIndent", r2.containerState.size + 1)(n11);
  }, function(n11) {
    return r2.containerState.furtherBlankLines || !M(n11) ? (r2.containerState.furtherBlankLines = void 0, r2.containerState.initialBlankLine = void 0, i2(n11)) : (r2.containerState.furtherBlankLines = void 0, r2.containerState.initialBlankLine = void 0, e10.attempt(eS, t10, i2)(n11));
  });
  function i2(i3) {
    return r2.containerState._closeFlow = true, r2.interrupt = void 0, N(e10, e10.attempt(ev, t10, n10), "linePrefix", r2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i3);
  }
} }, exit: function(e10) {
  e10.exit(this.containerState.type);
} }, eb = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return N(e10, function(e11) {
    let i2 = r2.events[r2.events.length - 1];
    return !M(e11) && i2 && "listItemPrefixWhitespace" === i2[1].type ? t10(e11) : n10(e11);
  }, "listItemPrefixWhitespace", r2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
}, partial: true }, eS = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return N(e10, function(e11) {
    let i2 = r2.events[r2.events.length - 1];
    return i2 && "listItemIndent" === i2[1].type && i2[2].sliceSerialize(i2[1], true).length === r2.containerState.size ? t10(e11) : n10(e11);
  }, "listItemIndent", r2.containerState.size + 1);
}, partial: true }, eC = { name: "setextUnderline", tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this;
  return function(t11) {
    let o2, a2 = i2.events.length;
    for (; a2--; )
      if ("lineEnding" !== i2.events[a2][1].type && "linePrefix" !== i2.events[a2][1].type && "content" !== i2.events[a2][1].type) {
        o2 = "paragraph" === i2.events[a2][1].type;
        break;
      }
    return !i2.parser.lazy[i2.now().line] && (i2.interrupt || o2) ? (e10.enter("setextHeadingLine"), r2 = t11, e10.enter("setextHeadingLineSequence"), function t12(n11) {
      return n11 === r2 ? (e10.consume(n11), t12) : (e10.exit("setextHeadingLineSequence"), M(n11) ? N(e10, l2, "lineSuffix")(n11) : l2(n11));
    }(t11)) : n10(t11);
  };
  function l2(r3) {
    return null === r3 || D(r3) ? (e10.exit("setextHeadingLine"), t10(r3)) : n10(r3);
  }
}, resolveTo: function(e10, t10) {
  let n10, r2, i2, l2 = e10.length;
  for (; l2--; )
    if ("enter" === e10[l2][0]) {
      if ("content" === e10[l2][1].type) {
        n10 = l2;
        break;
      }
      "paragraph" === e10[l2][1].type && (r2 = l2);
    } else
      "content" === e10[l2][1].type && e10.splice(l2, 1), i2 || "definition" !== e10[l2][1].type || (i2 = l2);
  let o2 = { type: "setextHeading", start: Object.assign({}, e10[r2][1].start), end: Object.assign({}, e10[e10.length - 1][1].end) };
  return e10[r2][1].type = "setextHeadingText", i2 ? (e10.splice(r2, 0, ["enter", o2, t10]), e10.splice(i2 + 1, 0, ["exit", e10[n10][1], t10]), e10[n10][1].end = Object.assign({}, e10[i2][1].end)) : e10[n10][1] = o2, e10.push(["exit", o2, t10]), e10;
} }, ew = { tokenize: function(e10) {
  let t10 = this, n10 = e10.attempt(q, function(r3) {
    if (null === r3) {
      e10.consume(r3);
      return;
    }
    return e10.enter("lineEndingBlank"), e10.consume(r3), e10.exit("lineEndingBlank"), t10.currentConstruct = void 0, n10;
  }, e10.attempt(this.parser.constructs.flowInitial, r2, N(e10, e10.attempt(this.parser.constructs.flow, r2, e10.attempt(et, r2)), "linePrefix")));
  return n10;
  function r2(r3) {
    if (null === r3) {
      e10.consume(r3);
      return;
    }
    return e10.enter("lineEnding"), e10.consume(r3), e10.exit("lineEnding"), t10.currentConstruct = void 0, n10;
  }
} }, eA = { resolveAll: eD() }, eT = eL("string"), eI = eL("text");
function eL(e10) {
  return { tokenize: function(t10) {
    let n10 = this, r2 = this.parser.constructs[e10], i2 = t10.attempt(r2, l2, o2);
    return l2;
    function l2(e11) {
      return u2(e11) ? i2(e11) : o2(e11);
    }
    function o2(e11) {
      if (null === e11) {
        t10.consume(e11);
        return;
      }
      return t10.enter("data"), t10.consume(e11), a2;
    }
    function a2(e11) {
      return u2(e11) ? (t10.exit("data"), i2(e11)) : (t10.consume(e11), a2);
    }
    function u2(e11) {
      if (null === e11)
        return true;
      let t11 = r2[e11], i3 = -1;
      if (t11)
        for (; ++i3 < t11.length; ) {
          let e12 = t11[i3];
          if (!e12.previous || e12.previous.call(n10, n10.previous))
            return true;
        }
      return false;
    }
  }, resolveAll: eD("text" === e10 ? eE : void 0) };
}
function eD(e10) {
  return function(t10, n10) {
    let r2, i2 = -1;
    for (; ++i2 <= t10.length; )
      void 0 === r2 ? t10[i2] && "data" === t10[i2][1].type && (r2 = i2, i2++) : t10[i2] && "data" === t10[i2][1].type || (i2 !== r2 + 2 && (t10[r2][1].end = t10[i2 - 1][1].end, t10.splice(r2 + 2, i2 - r2 - 2), i2 = r2 + 2), r2 = void 0);
    return e10 ? e10(t10, n10) : t10;
  };
}
function eE(e10, t10) {
  let n10 = 0;
  for (; ++n10 <= e10.length; )
    if ((n10 === e10.length || "lineEnding" === e10[n10][1].type) && "data" === e10[n10 - 1][1].type) {
      let r2;
      let i2 = e10[n10 - 1][1], l2 = t10.sliceStream(i2), o2 = l2.length, a2 = -1, u2 = 0;
      for (; o2--; ) {
        let e11 = l2[o2];
        if ("string" == typeof e11) {
          for (a2 = e11.length; 32 === e11.charCodeAt(a2 - 1); )
            u2++, a2--;
          if (a2)
            break;
          a2 = -1;
        } else if (-2 === e11)
          r2 = true, u2++;
        else if (-1 === e11)
          ;
        else {
          o2++;
          break;
        }
      }
      if (u2) {
        let l3 = { type: n10 === e10.length || r2 || u2 < 2 ? "lineSuffix" : "hardBreakTrailing", start: { line: i2.end.line, column: i2.end.column - u2, offset: i2.end.offset - u2, _index: i2.start._index + o2, _bufferIndex: o2 ? a2 : i2.start._bufferIndex + a2 }, end: Object.assign({}, i2.end) };
        i2.end = Object.assign({}, l3.start), i2.start.offset === i2.end.offset ? Object.assign(i2, l3) : (e10.splice(n10, 0, ["enter", l3, t10], ["exit", l3, t10]), n10 += 2);
      }
      n10++;
    }
  return e10;
}
let eM = Object.freeze(Object.defineProperty({ __proto__: null, attentionMarkers: { null: [42, 95] }, contentInitial: { 91: { name: "definition", tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this;
  return function(t11) {
    return e10.enter("definition"), ei.call(i2, e10, l2, n10, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t11);
  };
  function l2(t11) {
    return (r2 = b(i2.sliceSerialize(i2.events[i2.events.length - 1][1]).slice(1, -1)), 58 === t11) ? (e10.enter("definitionMarker"), e10.consume(t11), e10.exit("definitionMarker"), o2) : n10(t11);
  }
  function o2(t11) {
    return E(t11) ? eo(e10, a2)(t11) : a2(t11);
  }
  function a2(t11) {
    return er(e10, u2, n10, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t11);
  }
  function u2(t11) {
    return e10.attempt(ea, c2, c2)(t11);
  }
  function c2(t11) {
    return M(t11) ? N(e10, s2, "whitespace")(t11) : s2(t11);
  }
  function s2(l3) {
    return null === l3 || D(l3) ? (e10.exit("definition"), i2.parser.defined.push(r2), t10(l3)) : n10(l3);
  }
} } }, disable: { null: [] }, document: { 42: ev, 43: ev, 45: ev, 48: ev, 49: ev, 50: ev, 51: ev, 52: ev, 53: ev, 54: ev, 55: ev, 56: ev, 57: ev, 62: W }, flow: { 35: { name: "headingAtx", tokenize: function(e10, t10, n10) {
  let r2 = 0;
  return function(i2) {
    return e10.enter("atxHeading"), e10.enter("atxHeadingSequence"), function i3(l2) {
      return 35 === l2 && r2++ < 6 ? (e10.consume(l2), i3) : null === l2 || E(l2) ? (e10.exit("atxHeadingSequence"), function n11(r3) {
        return 35 === r3 ? (e10.enter("atxHeadingSequence"), function t11(r4) {
          return 35 === r4 ? (e10.consume(r4), t11) : (e10.exit("atxHeadingSequence"), n11(r4));
        }(r3)) : null === r3 || D(r3) ? (e10.exit("atxHeading"), t10(r3)) : M(r3) ? N(e10, n11, "whitespace")(r3) : (e10.enter("atxHeadingText"), function t11(r4) {
          return null === r4 || 35 === r4 || E(r4) ? (e10.exit("atxHeadingText"), n11(r4)) : (e10.consume(r4), t11);
        }(r3));
      }(l2)) : n10(l2);
    }(i2);
  };
}, resolve: function(e10, t10) {
  let n10, r2, i2 = e10.length - 2, l2 = 3;
  return "whitespace" === e10[3][1].type && (l2 += 2), i2 - 2 > l2 && "whitespace" === e10[i2][1].type && (i2 -= 2), "atxHeadingSequence" === e10[i2][1].type && (l2 === i2 - 1 || i2 - 4 > l2 && "whitespace" === e10[i2 - 2][1].type) && (i2 -= l2 + 1 === i2 ? 2 : 4), i2 > l2 && (n10 = { type: "atxHeadingText", start: e10[l2][1].start, end: e10[i2][1].end }, r2 = { type: "chunkText", start: e10[l2][1].start, end: e10[i2][1].end, contentType: "text" }, g(e10, l2, i2 - l2 + 1, [["enter", n10, t10], ["enter", r2, t10], ["exit", r2, t10], ["exit", n10, t10]])), e10;
} }, 42: ek, 45: [eC, ek], 60: { name: "htmlFlow", tokenize: function(e10, t10, n10) {
  let r2, i2, l2, o2, a2;
  let u2 = this;
  return function(t11) {
    return e10.enter("htmlFlow"), e10.enter("htmlFlowData"), e10.consume(t11), c2;
  };
  function c2(o3) {
    return 33 === o3 ? (e10.consume(o3), s2) : 47 === o3 ? (e10.consume(o3), i2 = true, d2) : 63 === o3 ? (e10.consume(o3), r2 = 3, u2.interrupt ? t10 : j2) : S(o3) ? (e10.consume(o3), l2 = String.fromCharCode(o3), h2) : n10(o3);
  }
  function s2(i3) {
    return 45 === i3 ? (e10.consume(i3), r2 = 2, f2) : 91 === i3 ? (e10.consume(i3), r2 = 5, o2 = 0, p2) : S(i3) ? (e10.consume(i3), r2 = 4, u2.interrupt ? t10 : j2) : n10(i3);
  }
  function f2(r3) {
    return 45 === r3 ? (e10.consume(r3), u2.interrupt ? t10 : j2) : n10(r3);
  }
  function p2(r3) {
    let i3 = "CDATA[";
    return r3 === i3.charCodeAt(o2++) ? (e10.consume(r3), o2 === i3.length) ? u2.interrupt ? t10 : T2 : p2 : n10(r3);
  }
  function d2(t11) {
    return S(t11) ? (e10.consume(t11), l2 = String.fromCharCode(t11), h2) : n10(t11);
  }
  function h2(o3) {
    if (null === o3 || 47 === o3 || 62 === o3 || E(o3)) {
      let a3 = 47 === o3, c3 = l2.toLowerCase();
      return !a3 && !i2 && ec.includes(c3) ? (r2 = 1, u2.interrupt ? t10(o3) : T2(o3)) : eu.includes(l2.toLowerCase()) ? (r2 = 6, a3) ? (e10.consume(o3), m2) : u2.interrupt ? t10(o3) : T2(o3) : (r2 = 7, u2.interrupt && !u2.parser.lazy[u2.now().line] ? n10(o3) : i2 ? function t11(n11) {
        return M(n11) ? (e10.consume(n11), t11) : w2(n11);
      }(o3) : g2(o3));
    }
    return 45 === o3 || C(o3) ? (e10.consume(o3), l2 += String.fromCharCode(o3), h2) : n10(o3);
  }
  function m2(r3) {
    return 62 === r3 ? (e10.consume(r3), u2.interrupt ? t10 : T2) : n10(r3);
  }
  function g2(t11) {
    return 47 === t11 ? (e10.consume(t11), w2) : 58 === t11 || 95 === t11 || S(t11) ? (e10.consume(t11), y2) : M(t11) ? (e10.consume(t11), g2) : w2(t11);
  }
  function y2(t11) {
    return 45 === t11 || 46 === t11 || 58 === t11 || 95 === t11 || C(t11) ? (e10.consume(t11), y2) : x2(t11);
  }
  function x2(t11) {
    return 61 === t11 ? (e10.consume(t11), k2) : M(t11) ? (e10.consume(t11), x2) : g2(t11);
  }
  function k2(t11) {
    return null === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 ? n10(t11) : 34 === t11 || 39 === t11 ? (e10.consume(t11), a2 = t11, v2) : M(t11) ? (e10.consume(t11), k2) : function t12(n11) {
      return null === n11 || 34 === n11 || 39 === n11 || 47 === n11 || 60 === n11 || 61 === n11 || 62 === n11 || 96 === n11 || E(n11) ? x2(n11) : (e10.consume(n11), t12);
    }(t11);
  }
  function v2(t11) {
    return t11 === a2 ? (e10.consume(t11), a2 = null, b2) : null === t11 || D(t11) ? n10(t11) : (e10.consume(t11), v2);
  }
  function b2(e11) {
    return 47 === e11 || 62 === e11 || M(e11) ? g2(e11) : n10(e11);
  }
  function w2(t11) {
    return 62 === t11 ? (e10.consume(t11), A2) : n10(t11);
  }
  function A2(t11) {
    return null === t11 || D(t11) ? T2(t11) : M(t11) ? (e10.consume(t11), A2) : n10(t11);
  }
  function T2(t11) {
    return 45 === t11 && 2 === r2 ? (e10.consume(t11), F2) : 60 === t11 && 1 === r2 ? (e10.consume(t11), z2) : 62 === t11 && 4 === r2 ? (e10.consume(t11), R2) : 63 === t11 && 3 === r2 ? (e10.consume(t11), j2) : 93 === t11 && 5 === r2 ? (e10.consume(t11), N2) : D(t11) && (6 === r2 || 7 === r2) ? (e10.exit("htmlFlowData"), e10.check(es, _2, I2)(t11)) : null === t11 || D(t11) ? (e10.exit("htmlFlowData"), I2(t11)) : (e10.consume(t11), T2);
  }
  function I2(t11) {
    return e10.check(ef, L2, _2)(t11);
  }
  function L2(t11) {
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), O2;
  }
  function O2(t11) {
    return null === t11 || D(t11) ? I2(t11) : (e10.enter("htmlFlowData"), T2(t11));
  }
  function F2(t11) {
    return 45 === t11 ? (e10.consume(t11), j2) : T2(t11);
  }
  function z2(t11) {
    return 47 === t11 ? (e10.consume(t11), l2 = "", P2) : T2(t11);
  }
  function P2(t11) {
    if (62 === t11) {
      let n11 = l2.toLowerCase();
      return ec.includes(n11) ? (e10.consume(t11), R2) : T2(t11);
    }
    return S(t11) && l2.length < 8 ? (e10.consume(t11), l2 += String.fromCharCode(t11), P2) : T2(t11);
  }
  function N2(t11) {
    return 93 === t11 ? (e10.consume(t11), j2) : T2(t11);
  }
  function j2(t11) {
    return 62 === t11 ? (e10.consume(t11), R2) : 45 === t11 && 2 === r2 ? (e10.consume(t11), j2) : T2(t11);
  }
  function R2(t11) {
    return null === t11 || D(t11) ? (e10.exit("htmlFlowData"), _2(t11)) : (e10.consume(t11), R2);
  }
  function _2(n11) {
    return e10.exit("htmlFlow"), t10(n11);
  }
}, resolveTo: function(e10) {
  let t10 = e10.length;
  for (; t10-- && ("enter" !== e10[t10][0] || "htmlFlow" !== e10[t10][1].type); )
    ;
  return t10 > 1 && "linePrefix" === e10[t10 - 2][1].type && (e10[t10][1].start = e10[t10 - 2][1].start, e10[t10 + 1][1].start = e10[t10 - 2][1].start, e10.splice(t10 - 2, 2)), e10;
}, concrete: true }, 61: eC, 95: ek, 96: K, 126: K }, flowInitial: { [-2]: X, [-1]: X, 32: X }, insideSpan: { null: [H, eA] }, string: { 38: Q, 92: Y }, text: { [-5]: ex, [-4]: ex, [-3]: ex, 33: eg, 38: Q, 42: H, 60: [{ name: "autolink", tokenize: function(e10, t10, n10) {
  let r2 = 0;
  return function(t11) {
    return e10.enter("autolink"), e10.enter("autolinkMarker"), e10.consume(t11), e10.exit("autolinkMarker"), e10.enter("autolinkProtocol"), i2;
  };
  function i2(t11) {
    return S(t11) ? (e10.consume(t11), l2) : a2(t11);
  }
  function l2(t11) {
    return 43 === t11 || 45 === t11 || 46 === t11 || C(t11) ? (r2 = 1, function t12(n11) {
      return 58 === n11 ? (e10.consume(n11), r2 = 0, o2) : (43 === n11 || 45 === n11 || 46 === n11 || C(n11)) && r2++ < 32 ? (e10.consume(n11), t12) : (r2 = 0, a2(n11));
    }(t11)) : a2(t11);
  }
  function o2(r3) {
    return 62 === r3 ? (e10.exit("autolinkProtocol"), e10.enter("autolinkMarker"), e10.consume(r3), e10.exit("autolinkMarker"), e10.exit("autolink"), t10) : null === r3 || 32 === r3 || 60 === r3 || A(r3) ? n10(r3) : (e10.consume(r3), o2);
  }
  function a2(t11) {
    return 64 === t11 ? (e10.consume(t11), u2) : w(t11) ? (e10.consume(t11), a2) : n10(t11);
  }
  function u2(i3) {
    return C(i3) ? function i4(l3) {
      return 46 === l3 ? (e10.consume(l3), r2 = 0, u2) : 62 === l3 ? (e10.exit("autolinkProtocol").type = "autolinkEmail", e10.enter("autolinkMarker"), e10.consume(l3), e10.exit("autolinkMarker"), e10.exit("autolink"), t10) : function t11(l4) {
        if ((45 === l4 || C(l4)) && r2++ < 63) {
          let n11 = 45 === l4 ? t11 : i4;
          return e10.consume(l4), n11;
        }
        return n10(l4);
      }(l3);
    }(i3) : n10(i3);
  }
} }, { name: "htmlText", tokenize: function(e10, t10, n10) {
  let r2, i2, l2;
  let o2 = this;
  return function(t11) {
    return e10.enter("htmlText"), e10.enter("htmlTextData"), e10.consume(t11), a2;
  };
  function a2(t11) {
    return 33 === t11 ? (e10.consume(t11), u2) : 47 === t11 ? (e10.consume(t11), v2) : 63 === t11 ? (e10.consume(t11), x2) : S(t11) ? (e10.consume(t11), w2) : n10(t11);
  }
  function u2(t11) {
    return 45 === t11 ? (e10.consume(t11), c2) : 91 === t11 ? (e10.consume(t11), i2 = 0, d2) : S(t11) ? (e10.consume(t11), y2) : n10(t11);
  }
  function c2(t11) {
    return 45 === t11 ? (e10.consume(t11), p2) : n10(t11);
  }
  function s2(t11) {
    return null === t11 ? n10(t11) : 45 === t11 ? (e10.consume(t11), f2) : D(t11) ? (l2 = s2, P2(t11)) : (e10.consume(t11), s2);
  }
  function f2(t11) {
    return 45 === t11 ? (e10.consume(t11), p2) : s2(t11);
  }
  function p2(e11) {
    return 62 === e11 ? z2(e11) : 45 === e11 ? f2(e11) : s2(e11);
  }
  function d2(t11) {
    let r3 = "CDATA[";
    return t11 === r3.charCodeAt(i2++) ? (e10.consume(t11), i2 === r3.length ? h2 : d2) : n10(t11);
  }
  function h2(t11) {
    return null === t11 ? n10(t11) : 93 === t11 ? (e10.consume(t11), m2) : D(t11) ? (l2 = h2, P2(t11)) : (e10.consume(t11), h2);
  }
  function m2(t11) {
    return 93 === t11 ? (e10.consume(t11), g2) : h2(t11);
  }
  function g2(t11) {
    return 62 === t11 ? z2(t11) : 93 === t11 ? (e10.consume(t11), g2) : h2(t11);
  }
  function y2(t11) {
    return null === t11 || 62 === t11 ? z2(t11) : D(t11) ? (l2 = y2, P2(t11)) : (e10.consume(t11), y2);
  }
  function x2(t11) {
    return null === t11 ? n10(t11) : 63 === t11 ? (e10.consume(t11), k2) : D(t11) ? (l2 = x2, P2(t11)) : (e10.consume(t11), x2);
  }
  function k2(e11) {
    return 62 === e11 ? z2(e11) : x2(e11);
  }
  function v2(t11) {
    return S(t11) ? (e10.consume(t11), b2) : n10(t11);
  }
  function b2(t11) {
    return 45 === t11 || C(t11) ? (e10.consume(t11), b2) : function t12(n11) {
      return D(n11) ? (l2 = t12, P2(n11)) : M(n11) ? (e10.consume(n11), t12) : z2(n11);
    }(t11);
  }
  function w2(t11) {
    return 45 === t11 || C(t11) ? (e10.consume(t11), w2) : 47 === t11 || 62 === t11 || E(t11) ? A2(t11) : n10(t11);
  }
  function A2(t11) {
    return 47 === t11 ? (e10.consume(t11), z2) : 58 === t11 || 95 === t11 || S(t11) ? (e10.consume(t11), T2) : D(t11) ? (l2 = A2, P2(t11)) : M(t11) ? (e10.consume(t11), A2) : z2(t11);
  }
  function T2(t11) {
    return 45 === t11 || 46 === t11 || 58 === t11 || 95 === t11 || C(t11) ? (e10.consume(t11), T2) : function t12(n11) {
      return 61 === n11 ? (e10.consume(n11), I2) : D(n11) ? (l2 = t12, P2(n11)) : M(n11) ? (e10.consume(n11), t12) : A2(n11);
    }(t11);
  }
  function I2(t11) {
    return null === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 ? n10(t11) : 34 === t11 || 39 === t11 ? (e10.consume(t11), r2 = t11, L2) : D(t11) ? (l2 = I2, P2(t11)) : M(t11) ? (e10.consume(t11), I2) : (e10.consume(t11), O2);
  }
  function L2(t11) {
    return t11 === r2 ? (e10.consume(t11), r2 = void 0, F2) : null === t11 ? n10(t11) : D(t11) ? (l2 = L2, P2(t11)) : (e10.consume(t11), L2);
  }
  function O2(t11) {
    return null === t11 || 34 === t11 || 39 === t11 || 60 === t11 || 61 === t11 || 96 === t11 ? n10(t11) : 47 === t11 || 62 === t11 || E(t11) ? A2(t11) : (e10.consume(t11), O2);
  }
  function F2(e11) {
    return 47 === e11 || 62 === e11 || E(e11) ? A2(e11) : n10(e11);
  }
  function z2(r3) {
    return 62 === r3 ? (e10.consume(r3), e10.exit("htmlTextData"), e10.exit("htmlText"), t10) : n10(r3);
  }
  function P2(t11) {
    return e10.exit("htmlTextData"), e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), j2;
  }
  function j2(t11) {
    return M(t11) ? N(e10, R2, "linePrefix", o2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t11) : R2(t11);
  }
  function R2(t11) {
    return e10.enter("htmlTextData"), l2(t11);
  }
} }], 91: ey, 92: [{ name: "hardBreakEscape", tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("hardBreakEscape"), e10.consume(t11), r2;
  };
  function r2(r3) {
    return D(r3) ? (e10.exit("hardBreakEscape"), t10(r3)) : n10(r3);
  }
} }, Y], 93: ep, 95: H, 96: { name: "codeText", tokenize: function(e10, t10, n10) {
  let r2, i2, l2 = 0;
  return function(t11) {
    return e10.enter("codeText"), e10.enter("codeTextSequence"), function t12(n11) {
      return 96 === n11 ? (e10.consume(n11), l2++, t12) : (e10.exit("codeTextSequence"), o2(n11));
    }(t11);
  };
  function o2(u2) {
    return null === u2 ? n10(u2) : 32 === u2 ? (e10.enter("space"), e10.consume(u2), e10.exit("space"), o2) : 96 === u2 ? (i2 = e10.enter("codeTextSequence"), r2 = 0, function n11(o3) {
      return 96 === o3 ? (e10.consume(o3), r2++, n11) : r2 === l2 ? (e10.exit("codeTextSequence"), e10.exit("codeText"), t10(o3)) : (i2.type = "codeTextData", a2(o3));
    }(u2)) : D(u2) ? (e10.enter("lineEnding"), e10.consume(u2), e10.exit("lineEnding"), o2) : (e10.enter("codeTextData"), a2(u2));
  }
  function a2(t11) {
    return null === t11 || 32 === t11 || 96 === t11 || D(t11) ? (e10.exit("codeTextData"), o2(t11)) : (e10.consume(t11), a2);
  }
}, resolve: function(e10) {
  let t10, n10, r2 = e10.length - 4, i2 = 3;
  if (("lineEnding" === e10[3][1].type || "space" === e10[i2][1].type) && ("lineEnding" === e10[r2][1].type || "space" === e10[r2][1].type)) {
    for (t10 = i2; ++t10 < r2; )
      if ("codeTextData" === e10[t10][1].type) {
        e10[i2][1].type = "codeTextPadding", e10[r2][1].type = "codeTextPadding", i2 += 2, r2 -= 2;
        break;
      }
  }
  for (t10 = i2 - 1, r2++; ++t10 <= r2; )
    void 0 === n10 ? t10 !== r2 && "lineEnding" !== e10[t10][1].type && (n10 = t10) : (t10 === r2 || "lineEnding" === e10[t10][1].type) && (e10[n10][1].type = "codeTextData", t10 !== n10 + 2 && (e10[n10][1].end = e10[t10 - 1][1].end, e10.splice(n10 + 2, t10 - n10 - 2), r2 -= t10 - n10 - 2, t10 = n10 + 2), n10 = void 0);
  return e10;
}, previous: function(e10) {
  return 96 !== e10 || "characterEscape" === this.events[this.events.length - 1][1].type;
} } } }, Symbol.toStringTag, { value: "Module" })), eO = /[\0\t\n\r]/g, eF = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ez(e10, t10, n10) {
  if (t10)
    return t10;
  if (35 === n10.charCodeAt(0)) {
    let e11 = n10.charCodeAt(1), t11 = 120 === e11 || 88 === e11;
    return v(n10.slice(t11 ? 2 : 1), t11 ? 16 : 10);
  }
  return m(n10) || e10;
}
function eP(e10) {
  return e10 && "object" == typeof e10 ? "position" in e10 || "type" in e10 ? ej(e10.position) : "start" in e10 || "end" in e10 ? ej(e10) : "line" in e10 || "column" in e10 ? eN(e10) : "" : "";
}
function eN(e10) {
  return eR(e10 && e10.line) + ":" + eR(e10 && e10.column);
}
function ej(e10) {
  return eN(e10 && e10.start) + "-" + eN(e10 && e10.end);
}
function eR(e10) {
  return e10 && "number" == typeof e10 ? e10 : 1;
}
let e_ = {}.hasOwnProperty;
function eB(e10) {
  return { line: e10.line, column: e10.column, offset: e10.offset };
}
function eV(e10, t10) {
  if (e10)
    throw Error("Cannot close `" + e10.type + "` (" + eP({ start: e10.start, end: e10.end }) + "): a different token (`" + t10.type + "`, " + eP({ start: t10.start, end: t10.end }) + ") is open");
  throw Error("Cannot close document, a token (`" + t10.type + "`, " + eP({ start: t10.start, end: t10.end }) + ") is still open");
}
function eH(e10, t10) {
  let n10 = String(e10);
  if ("string" != typeof t10)
    throw TypeError("Expected character");
  let r2 = 0, i2 = n10.indexOf(t10);
  for (; -1 !== i2; )
    r2++, i2 = n10.indexOf(t10, i2 + t10.length);
  return r2;
}
let eU = function(e10) {
  if (null == e10)
    return eW;
  if ("function" == typeof e10)
    return eq(e10);
  if ("object" == typeof e10)
    return Array.isArray(e10) ? function(e11) {
      let t10 = [], n10 = -1;
      for (; ++n10 < e11.length; )
        t10[n10] = eU(e11[n10]);
      return eq(function() {
        for (var e12 = arguments.length, n11 = Array(e12), r2 = 0; r2 < e12; r2++)
          n11[r2] = arguments[r2];
        let i2 = -1;
        for (; ++i2 < t10.length; )
          if (t10[i2].apply(this, n11))
            return true;
        return false;
      });
    }(e10) : eq(function(t10) {
      let n10;
      for (n10 in e10)
        if (t10[n10] !== e10[n10])
          return false;
      return true;
    });
  if ("string" == typeof e10)
    return eq(function(t10) {
      return t10 && t10.type === e10;
    });
  throw Error("Expected function, string, or object as test");
};
function eq(e10) {
  return function(t10, n10, r2) {
    return !!(null !== t10 && "object" == typeof t10 && "type" in t10 && e10.call(this, t10, "number" == typeof n10 ? n10 : void 0, r2 || void 0));
  };
}
function eW() {
  return true;
}
let eY = [];
function eQ(e10, t10, n10, r2) {
  let i2;
  "function" == typeof t10 && "function" != typeof n10 ? (r2 = n10, n10 = t10) : i2 = t10;
  let l2 = eU(i2), o2 = r2 ? -1 : 1;
  (function e11(i3, a2, u2) {
    let c2 = i3 && "object" == typeof i3 ? i3 : {};
    if ("string" == typeof c2.type) {
      let e12 = "string" == typeof c2.tagName ? c2.tagName : "string" == typeof c2.name ? c2.name : void 0;
      Object.defineProperty(s2, "name", { value: "node (" + i3.type + (e12 ? "<" + e12 + ">" : "") + ")" });
    }
    return s2;
    function s2() {
      var c3;
      let s3, f2, p2, d2 = eY;
      if ((!t10 || l2(i3, a2, u2[u2.length - 1] || void 0)) && false === (d2 = Array.isArray(c3 = n10(i3, u2)) ? c3 : "number" == typeof c3 ? [true, c3] : null == c3 ? eY : [c3])[0])
        return d2;
      if ("children" in i3 && i3.children && i3.children && "skip" !== d2[0])
        for (f2 = (r2 ? i3.children.length : -1) + o2, p2 = u2.concat(i3); f2 > -1 && f2 < i3.children.length; ) {
          if (false === (s3 = e11(i3.children[f2], f2, p2)())[0])
            return s3;
          f2 = "number" == typeof s3[1] ? s3[1] : f2 + o2;
        }
      return d2;
    }
  })(e10, void 0, [])();
}
function e$(e10) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e10);
}
function eK(e10) {
  this.config.enter.autolinkProtocol.call(this, e10);
}
function eX(e10) {
  this.config.exit.autolinkProtocol.call(this, e10);
}
function eZ(e10) {
  this.config.exit.data.call(this, e10);
  let t10 = this.stack[this.stack.length - 1];
  t10.type, t10.url = "http://" + this.sliceSerialize(e10);
}
function eJ(e10) {
  this.config.exit.autolinkEmail.call(this, e10);
}
function eG(e10) {
  this.exit(e10);
}
function e1(e10) {
  !function(e11, t10, n10) {
    let r2 = eU((n10 || {}).ignore || []), i2 = function(e12) {
      let t11 = [];
      if (!Array.isArray(e12))
        throw TypeError("Expected find and replace tuple or list of tuples");
      let n11 = !e12[0] || Array.isArray(e12[0]) ? e12 : [e12], r3 = -1;
      for (; ++r3 < n11.length; ) {
        var i3;
        let e13 = n11[r3];
        t11.push(["string" == typeof (i3 = e13[0]) ? RegExp(function(e14) {
          if ("string" != typeof e14)
            throw TypeError("Expected a string");
          return e14.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }(i3), "g") : i3, /* @__PURE__ */ function(e14) {
          return "function" == typeof e14 ? e14 : function() {
            return e14;
          };
        }(e13[1])]);
      }
      return t11;
    }(t10), l2 = -1;
    for (; ++l2 < i2.length; )
      eQ(e11, "text", o2);
    function o2(e12, t11) {
      let n11, o3 = -1;
      for (; ++o3 < t11.length; ) {
        let e13 = t11[o3], i3 = n11 ? n11.children : void 0;
        if (r2(e13, i3 ? i3.indexOf(e13) : void 0, n11))
          return;
        n11 = e13;
      }
      if (n11)
        return function(e13, t12) {
          let n12 = t12[t12.length - 1], r3 = i2[l2][0], o4 = i2[l2][1], a2 = 0, u2 = n12.children.indexOf(e13), c2 = false, s2 = [];
          r3.lastIndex = 0;
          let f2 = r3.exec(e13.value);
          for (; f2; ) {
            let n13 = f2.index, i3 = { index: f2.index, input: f2.input, stack: [...t12, e13] }, l3 = o4(...f2, i3);
            if ("string" == typeof l3 && (l3 = l3.length > 0 ? { type: "text", value: l3 } : void 0), false === l3 ? r3.lastIndex = n13 + 1 : (a2 !== n13 && s2.push({ type: "text", value: e13.value.slice(a2, n13) }), Array.isArray(l3) ? s2.push(...l3) : l3 && s2.push(l3), a2 = n13 + f2[0].length, c2 = true), !r3.global)
              break;
            f2 = r3.exec(e13.value);
          }
          return c2 ? (a2 < e13.value.length && s2.push({ type: "text", value: e13.value.slice(a2) }), n12.children.splice(u2, 1, ...s2)) : s2 = [e13], u2 + s2.length;
        }(e12, t11);
    }
  }(e10, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, e0], [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, e2]], { ignore: ["link", "linkReference"] });
}
function e0(e10, t10, n10, r2, i2) {
  let l2 = "";
  if (!e4(i2) || (/^w/i.test(t10) && (n10 = t10 + n10, t10 = "", l2 = "http://"), !function(e11) {
    let t11 = e11.split(".");
    return !(t11.length < 2 || t11[t11.length - 1] && (/_/.test(t11[t11.length - 1]) || !/[a-zA-Z\d]/.test(t11[t11.length - 1])) || t11[t11.length - 2] && (/_/.test(t11[t11.length - 2]) || !/[a-zA-Z\d]/.test(t11[t11.length - 2])));
  }(n10)))
    return false;
  let o2 = function(e11) {
    let t11 = /[!"&'),.:;<>?\]}]+$/.exec(e11);
    if (!t11)
      return [e11, void 0];
    e11 = e11.slice(0, t11.index);
    let n11 = t11[0], r3 = n11.indexOf(")"), i3 = eH(e11, "("), l3 = eH(e11, ")");
    for (; -1 !== r3 && i3 > l3; )
      e11 += n11.slice(0, r3 + 1), r3 = (n11 = n11.slice(r3 + 1)).indexOf(")"), l3++;
    return [e11, n11];
  }(n10 + r2);
  if (!o2[0])
    return false;
  let a2 = { type: "link", title: null, url: l2 + t10 + o2[0], children: [{ type: "text", value: t10 + o2[0] }] };
  return o2[1] ? [a2, { type: "text", value: o2[1] }] : a2;
}
function e2(e10, t10, n10, r2) {
  return !(!e4(r2, true) || /[-\d_]$/.test(n10)) && { type: "link", title: null, url: "mailto:" + t10 + "@" + n10, children: [{ type: "text", value: t10 + "@" + n10 }] };
}
function e4(e10, t10) {
  let n10 = e10.input.charCodeAt(e10.index - 1);
  return (0 === e10.index || F(n10) || O(n10)) && (!t10 || 47 !== n10);
}
function e3(e10) {
  this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, e10);
}
function e5() {
  this.buffer();
}
function e9(e10) {
  let t10 = this.resume(), n10 = this.stack[this.stack.length - 1];
  n10.type, n10.label = t10, n10.identifier = b(this.sliceSerialize(e10)).toLowerCase();
}
function e6(e10) {
  this.exit(e10);
}
function e8(e10) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e10);
}
function e7() {
  this.buffer();
}
function te(e10) {
  let t10 = this.resume(), n10 = this.stack[this.stack.length - 1];
  n10.type, n10.label = t10, n10.identifier = b(this.sliceSerialize(e10)).toLowerCase();
}
function tt(e10) {
  this.exit(e10);
}
function tn(e10) {
  this.enter({ type: "delete", children: [] }, e10);
}
function tr(e10) {
  this.exit(e10);
}
function ti(e10) {
  let t10 = e10._align;
  this.enter({ type: "table", align: t10.map(function(e11) {
    return "none" === e11 ? null : e11;
  }), children: [] }, e10), this.data.inTable = true;
}
function tl(e10) {
  this.exit(e10), this.data.inTable = void 0;
}
function to(e10) {
  this.enter({ type: "tableRow", children: [] }, e10);
}
function ta(e10) {
  this.exit(e10);
}
function tu(e10) {
  this.enter({ type: "tableCell", children: [] }, e10);
}
function tc(e10) {
  let t10 = this.resume();
  this.data.inTable && (t10 = t10.replace(/\\([\\|])/g, ts));
  let n10 = this.stack[this.stack.length - 1];
  n10.type, n10.value = t10, this.exit(e10);
}
function ts(e10, t10) {
  return "|" === t10 ? t10 : e10;
}
function tf(e10) {
  let t10 = this.stack[this.stack.length - 2];
  t10.type, t10.checked = "taskListCheckValueChecked" === e10.type;
}
function tp(e10) {
  let t10 = this.stack[this.stack.length - 2];
  if (t10 && "listItem" === t10.type && "boolean" == typeof t10.checked) {
    let e11 = this.stack[this.stack.length - 1];
    e11.type;
    let n10 = e11.children[0];
    if (n10 && "text" === n10.type) {
      let r2;
      let i2 = t10.children, l2 = -1;
      for (; ++l2 < i2.length; ) {
        let e12 = i2[l2];
        if ("paragraph" === e12.type) {
          r2 = e12;
          break;
        }
      }
      r2 === e11 && (n10.value = n10.value.slice(1), 0 === n10.value.length ? e11.children.shift() : e11.position && n10.position && "number" == typeof n10.position.start.offset && (n10.position.start.column++, n10.position.start.offset++, e11.position.start = Object.assign({}, n10.position.start)));
    }
  }
  this.exit(e10);
}
let td = { tokenize: function(e10, t10, n10) {
  let r2 = 0;
  return function t11(l2) {
    return (87 === l2 || 119 === l2) && r2 < 3 ? (r2++, e10.consume(l2), t11) : 46 === l2 && 3 === r2 ? (e10.consume(l2), i2) : n10(l2);
  };
  function i2(e11) {
    return null === e11 ? n10(e11) : t10(e11);
  }
}, partial: true }, th = { tokenize: function(e10, t10, n10) {
  let r2, i2, l2;
  return o2;
  function o2(t11) {
    return 46 === t11 || 95 === t11 ? e10.check(tg, u2, a2)(t11) : null === t11 || E(t11) || F(t11) || 45 !== t11 && O(t11) ? u2(t11) : (l2 = true, e10.consume(t11), o2);
  }
  function a2(t11) {
    return 95 === t11 ? r2 = true : (i2 = r2, r2 = void 0), e10.consume(t11), o2;
  }
  function u2(e11) {
    return i2 || r2 || !l2 ? n10(e11) : t10(e11);
  }
}, partial: true }, tm = { tokenize: function(e10, t10) {
  let n10 = 0, r2 = 0;
  return i2;
  function i2(o2) {
    return 40 === o2 ? (n10++, e10.consume(o2), i2) : 41 === o2 && r2 < n10 ? l2(o2) : 33 === o2 || 34 === o2 || 38 === o2 || 39 === o2 || 41 === o2 || 42 === o2 || 44 === o2 || 46 === o2 || 58 === o2 || 59 === o2 || 60 === o2 || 63 === o2 || 93 === o2 || 95 === o2 || 126 === o2 ? e10.check(tg, t10, l2)(o2) : null === o2 || E(o2) || F(o2) ? t10(o2) : (e10.consume(o2), i2);
  }
  function l2(t11) {
    return 41 === t11 && r2++, e10.consume(t11), i2;
  }
}, partial: true }, tg = { tokenize: function(e10, t10, n10) {
  return r2;
  function r2(o2) {
    return 33 === o2 || 34 === o2 || 39 === o2 || 41 === o2 || 42 === o2 || 44 === o2 || 46 === o2 || 58 === o2 || 59 === o2 || 63 === o2 || 95 === o2 || 126 === o2 ? (e10.consume(o2), r2) : 38 === o2 ? (e10.consume(o2), l2) : 93 === o2 ? (e10.consume(o2), i2) : 60 === o2 || null === o2 || E(o2) || F(o2) ? t10(o2) : n10(o2);
  }
  function i2(e11) {
    return null === e11 || 40 === e11 || 91 === e11 || E(e11) || F(e11) ? t10(e11) : r2(e11);
  }
  function l2(t11) {
    return S(t11) ? function t12(i3) {
      return 59 === i3 ? (e10.consume(i3), r2) : S(i3) ? (e10.consume(i3), t12) : n10(i3);
    }(t11) : n10(t11);
  }
}, partial: true }, ty = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.consume(t11), r2;
  };
  function r2(e11) {
    return C(e11) ? n10(e11) : t10(e11);
  }
}, partial: true }, tx = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return 87 !== t11 && 119 !== t11 || !tC.call(r2, r2.previous) || tI(r2.events) ? n10(t11) : (e10.enter("literalAutolink"), e10.enter("literalAutolinkWww"), e10.check(td, e10.attempt(th, e10.attempt(tm, i2), n10), n10)(t11));
  };
  function i2(n11) {
    return e10.exit("literalAutolinkWww"), e10.exit("literalAutolink"), t10(n11);
  }
}, previous: tC }, tk = { tokenize: function(e10, t10, n10) {
  let r2 = this, i2 = "", l2 = false;
  return function(t11) {
    return (72 === t11 || 104 === t11) && tw.call(r2, r2.previous) && !tI(r2.events) ? (e10.enter("literalAutolink"), e10.enter("literalAutolinkHttp"), i2 += String.fromCodePoint(t11), e10.consume(t11), o2) : n10(t11);
  };
  function o2(t11) {
    if (S(t11) && i2.length < 5)
      return i2 += String.fromCodePoint(t11), e10.consume(t11), o2;
    if (58 === t11) {
      let n11 = i2.toLowerCase();
      if ("http" === n11 || "https" === n11)
        return e10.consume(t11), a2;
    }
    return n10(t11);
  }
  function a2(t11) {
    return 47 === t11 ? (e10.consume(t11), l2) ? u2 : (l2 = true, a2) : n10(t11);
  }
  function u2(t11) {
    return null === t11 || A(t11) || E(t11) || F(t11) || O(t11) ? n10(t11) : e10.attempt(th, e10.attempt(tm, c2), n10)(t11);
  }
  function c2(n11) {
    return e10.exit("literalAutolinkHttp"), e10.exit("literalAutolink"), t10(n11);
  }
}, previous: tw }, tv = { tokenize: function(e10, t10, n10) {
  let r2, i2;
  let l2 = this;
  return function(t11) {
    return !tT(t11) || !tA.call(l2, l2.previous) || tI(l2.events) ? n10(t11) : (e10.enter("literalAutolink"), e10.enter("literalAutolinkEmail"), function t12(r3) {
      return tT(r3) ? (e10.consume(r3), t12) : 64 === r3 ? (e10.consume(r3), o2) : n10(r3);
    }(t11));
  };
  function o2(t11) {
    return 46 === t11 ? e10.check(ty, u2, a2)(t11) : 45 === t11 || 95 === t11 || C(t11) ? (i2 = true, e10.consume(t11), o2) : u2(t11);
  }
  function a2(t11) {
    return e10.consume(t11), r2 = true, o2;
  }
  function u2(o3) {
    return i2 && r2 && S(l2.previous) ? (e10.exit("literalAutolinkEmail"), e10.exit("literalAutolink"), t10(o3)) : n10(o3);
  }
}, previous: tA }, tb = {}, tS = 48;
for (; tS < 123; )
  tb[tS] = tv, 58 == ++tS ? tS = 65 : 91 === tS && (tS = 97);
function tC(e10) {
  return null === e10 || 40 === e10 || 42 === e10 || 95 === e10 || 91 === e10 || 93 === e10 || 126 === e10 || E(e10);
}
function tw(e10) {
  return !S(e10);
}
function tA(e10) {
  return !(47 === e10 || tT(e10));
}
function tT(e10) {
  return 43 === e10 || 45 === e10 || 46 === e10 || 95 === e10 || C(e10);
}
function tI(e10) {
  let t10 = e10.length, n10 = false;
  for (; t10--; ) {
    let r2 = e10[t10][1];
    if (("labelLink" === r2.type || "labelImage" === r2.type) && !r2._balanced) {
      n10 = true;
      break;
    }
    if (r2._gfmAutolinkLiteralWalkedInto) {
      n10 = false;
      break;
    }
  }
  return e10.length > 0 && !n10 && (e10[e10.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), n10;
}
tb[43] = tv, tb[45] = tv, tb[46] = tv, tb[95] = tv, tb[72] = [tv, tk], tb[104] = [tv, tk], tb[87] = [tv, tx], tb[119] = [tv, tx];
let tL = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return N(e10, function(e11) {
    let i2 = r2.events[r2.events.length - 1];
    return i2 && "gfmFootnoteDefinitionIndent" === i2[1].type && 4 === i2[2].sliceSerialize(i2[1], true).length ? t10(e11) : n10(e11);
  }, "gfmFootnoteDefinitionIndent", 5);
}, partial: true };
function tD(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = i2.events.length, o2 = i2.parser.gfmFootnotes || (i2.parser.gfmFootnotes = []);
  for (; l2--; ) {
    let e11 = i2.events[l2][1];
    if ("labelImage" === e11.type) {
      r2 = e11;
      break;
    }
    if ("gfmFootnoteCall" === e11.type || "labelLink" === e11.type || "label" === e11.type || "image" === e11.type || "link" === e11.type)
      break;
  }
  return function(l3) {
    if (!r2 || !r2._balanced)
      return n10(l3);
    let a2 = b(i2.sliceSerialize({ start: r2.end, end: i2.now() }));
    return 94 === a2.codePointAt(0) && o2.includes(a2.slice(1)) ? (e10.enter("gfmFootnoteCallLabelMarker"), e10.consume(l3), e10.exit("gfmFootnoteCallLabelMarker"), t10(l3)) : n10(l3);
  };
}
function tE(e10, t10) {
  let n10 = e10.length;
  for (; n10--; )
    if ("labelImage" === e10[n10][1].type && "enter" === e10[n10][0]) {
      e10[n10][1];
      break;
    }
  e10[n10 + 1][1].type = "data", e10[n10 + 3][1].type = "gfmFootnoteCallLabelMarker";
  let r2 = { type: "gfmFootnoteCall", start: Object.assign({}, e10[n10 + 3][1].start), end: Object.assign({}, e10[e10.length - 1][1].end) }, i2 = { type: "gfmFootnoteCallMarker", start: Object.assign({}, e10[n10 + 3][1].end), end: Object.assign({}, e10[n10 + 3][1].end) };
  i2.end.column++, i2.end.offset++, i2.end._bufferIndex++;
  let l2 = { type: "gfmFootnoteCallString", start: Object.assign({}, i2.end), end: Object.assign({}, e10[e10.length - 1][1].start) }, o2 = { type: "chunkString", contentType: "string", start: Object.assign({}, l2.start), end: Object.assign({}, l2.end) }, a2 = [e10[n10 + 1], e10[n10 + 2], ["enter", r2, t10], e10[n10 + 3], e10[n10 + 4], ["enter", i2, t10], ["exit", i2, t10], ["enter", l2, t10], ["enter", o2, t10], ["exit", o2, t10], ["exit", l2, t10], e10[e10.length - 2], e10[e10.length - 1], ["exit", r2, t10]];
  return e10.splice(n10, e10.length - n10 + 1, ...a2), e10;
}
function tM(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = i2.parser.gfmFootnotes || (i2.parser.gfmFootnotes = []), o2 = 0;
  return function(t11) {
    return e10.enter("gfmFootnoteCall"), e10.enter("gfmFootnoteCallLabelMarker"), e10.consume(t11), e10.exit("gfmFootnoteCallLabelMarker"), a2;
  };
  function a2(t11) {
    return 94 !== t11 ? n10(t11) : (e10.enter("gfmFootnoteCallMarker"), e10.consume(t11), e10.exit("gfmFootnoteCallMarker"), e10.enter("gfmFootnoteCallString"), e10.enter("chunkString").contentType = "string", u2);
  }
  function u2(a3) {
    if (o2 > 999 || 93 === a3 && !r2 || null === a3 || 91 === a3 || E(a3))
      return n10(a3);
    if (93 === a3) {
      e10.exit("chunkString");
      let r3 = e10.exit("gfmFootnoteCallString");
      return l2.includes(b(i2.sliceSerialize(r3))) ? (e10.enter("gfmFootnoteCallLabelMarker"), e10.consume(a3), e10.exit("gfmFootnoteCallLabelMarker"), e10.exit("gfmFootnoteCall"), t10) : n10(a3);
    }
    return E(a3) || (r2 = true), o2++, e10.consume(a3), 92 === a3 ? c2 : u2;
  }
  function c2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), o2++, u2) : u2(t11);
  }
}
function tO(e10, t10, n10) {
  let r2, i2;
  let l2 = this, o2 = l2.parser.gfmFootnotes || (l2.parser.gfmFootnotes = []), a2 = 0;
  return function(t11) {
    return e10.enter("gfmFootnoteDefinition")._container = true, e10.enter("gfmFootnoteDefinitionLabel"), e10.enter("gfmFootnoteDefinitionLabelMarker"), e10.consume(t11), e10.exit("gfmFootnoteDefinitionLabelMarker"), u2;
  };
  function u2(t11) {
    return 94 === t11 ? (e10.enter("gfmFootnoteDefinitionMarker"), e10.consume(t11), e10.exit("gfmFootnoteDefinitionMarker"), e10.enter("gfmFootnoteDefinitionLabelString"), e10.enter("chunkString").contentType = "string", c2) : n10(t11);
  }
  function c2(t11) {
    if (a2 > 999 || 93 === t11 && !i2 || null === t11 || 91 === t11 || E(t11))
      return n10(t11);
    if (93 === t11) {
      e10.exit("chunkString");
      let n11 = e10.exit("gfmFootnoteDefinitionLabelString");
      return r2 = b(l2.sliceSerialize(n11)), e10.enter("gfmFootnoteDefinitionLabelMarker"), e10.consume(t11), e10.exit("gfmFootnoteDefinitionLabelMarker"), e10.exit("gfmFootnoteDefinitionLabel"), f2;
    }
    return E(t11) || (i2 = true), a2++, e10.consume(t11), 92 === t11 ? s2 : c2;
  }
  function s2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), a2++, c2) : c2(t11);
  }
  function f2(t11) {
    return 58 === t11 ? (e10.enter("definitionMarker"), e10.consume(t11), e10.exit("definitionMarker"), o2.includes(r2) || o2.push(r2), N(e10, p2, "gfmFootnoteDefinitionWhitespace")) : n10(t11);
  }
  function p2(e11) {
    return t10(e11);
  }
}
function tF(e10, t10, n10) {
  return e10.check(q, t10, e10.attempt(tL, t10, n10));
}
function tz(e10) {
  e10.exit("gfmFootnoteDefinition");
}
class tP {
  constructor() {
    this.map = [];
  }
  add(e10, t10, n10) {
    !function(e11, t11, n11, r2) {
      let i2 = 0;
      if (0 !== n11 || 0 !== r2.length) {
        for (; i2 < e11.map.length; ) {
          if (e11.map[i2][0] === t11) {
            e11.map[i2][1] += n11, e11.map[i2][2].push(...r2);
            return;
          }
          i2 += 1;
        }
        e11.map.push([t11, n11, r2]);
      }
    }(this, e10, t10, n10);
  }
  consume(e10) {
    if (this.map.sort(function(e11, t11) {
      return e11[0] - t11[0];
    }), 0 === this.map.length)
      return;
    let t10 = this.map.length, n10 = [];
    for (; t10 > 0; )
      t10 -= 1, n10.push(e10.slice(this.map[t10][0] + this.map[t10][1]), this.map[t10][2]), e10.length = this.map[t10][0];
    n10.push([...e10]), e10.length = 0;
    let r2 = n10.pop();
    for (; r2; )
      e10.push(...r2), r2 = n10.pop();
    this.map.length = 0;
  }
}
function tN(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = 0, o2 = 0;
  return function(e11) {
    let t11 = i2.events.length - 1;
    for (; t11 > -1; ) {
      let e12 = i2.events[t11][1].type;
      if ("lineEnding" === e12 || "linePrefix" === e12)
        t11--;
      else
        break;
    }
    let r3 = t11 > -1 ? i2.events[t11][1].type : null, l3 = "tableHead" === r3 || "tableRow" === r3 ? x2 : a2;
    return l3 === x2 && i2.parser.lazy[i2.now().line] ? n10(e11) : l3(e11);
  };
  function a2(t11) {
    return e10.enter("tableHead"), e10.enter("tableRow"), 124 === t11 || (r2 = true, o2 += 1), u2(t11);
  }
  function u2(t11) {
    return null === t11 ? n10(t11) : D(t11) ? o2 > 1 ? (o2 = 0, i2.interrupt = true, e10.exit("tableRow"), e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), f2) : n10(t11) : M(t11) ? N(e10, u2, "whitespace")(t11) : (o2 += 1, r2 && (r2 = false, l2 += 1), 124 === t11) ? (e10.enter("tableCellDivider"), e10.consume(t11), e10.exit("tableCellDivider"), r2 = true, u2) : (e10.enter("data"), c2(t11));
  }
  function c2(t11) {
    return null === t11 || 124 === t11 || E(t11) ? (e10.exit("data"), u2(t11)) : (e10.consume(t11), 92 === t11 ? s2 : c2);
  }
  function s2(t11) {
    return 92 === t11 || 124 === t11 ? (e10.consume(t11), c2) : c2(t11);
  }
  function f2(t11) {
    return (i2.interrupt = false, i2.parser.lazy[i2.now().line]) ? n10(t11) : (e10.enter("tableDelimiterRow"), r2 = false, M(t11)) ? N(e10, p2, "linePrefix", i2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t11) : p2(t11);
  }
  function p2(t11) {
    return 45 === t11 || 58 === t11 ? h2(t11) : 124 === t11 ? (r2 = true, e10.enter("tableCellDivider"), e10.consume(t11), e10.exit("tableCellDivider"), d2) : n10(t11);
  }
  function d2(t11) {
    return M(t11) ? N(e10, h2, "whitespace")(t11) : h2(t11);
  }
  function h2(t11) {
    return 58 === t11 ? (o2 += 1, r2 = true, e10.enter("tableDelimiterMarker"), e10.consume(t11), e10.exit("tableDelimiterMarker"), m2) : 45 === t11 ? (o2 += 1, m2(t11)) : null === t11 || D(t11) ? y2(t11) : n10(t11);
  }
  function m2(t11) {
    return 45 === t11 ? (e10.enter("tableDelimiterFiller"), function t12(n11) {
      return 45 === n11 ? (e10.consume(n11), t12) : 58 === n11 ? (r2 = true, e10.exit("tableDelimiterFiller"), e10.enter("tableDelimiterMarker"), e10.consume(n11), e10.exit("tableDelimiterMarker"), g2) : (e10.exit("tableDelimiterFiller"), g2(n11));
    }(t11)) : n10(t11);
  }
  function g2(t11) {
    return M(t11) ? N(e10, y2, "whitespace")(t11) : y2(t11);
  }
  function y2(i3) {
    return 124 === i3 ? p2(i3) : null === i3 || D(i3) ? r2 && l2 === o2 ? (e10.exit("tableDelimiterRow"), e10.exit("tableHead"), t10(i3)) : n10(i3) : n10(i3);
  }
  function x2(t11) {
    return e10.enter("tableRow"), k2(t11);
  }
  function k2(n11) {
    return 124 === n11 ? (e10.enter("tableCellDivider"), e10.consume(n11), e10.exit("tableCellDivider"), k2) : null === n11 || D(n11) ? (e10.exit("tableRow"), t10(n11)) : M(n11) ? N(e10, k2, "whitespace")(n11) : (e10.enter("data"), v2(n11));
  }
  function v2(t11) {
    return null === t11 || 124 === t11 || E(t11) ? (e10.exit("data"), k2(t11)) : (e10.consume(t11), 92 === t11 ? b2 : v2);
  }
  function b2(t11) {
    return 92 === t11 || 124 === t11 ? (e10.consume(t11), v2) : v2(t11);
  }
}
function tj(e10, t10) {
  let n10, r2, i2, l2 = -1, o2 = true, a2 = 0, u2 = [0, 0, 0, 0], c2 = [0, 0, 0, 0], s2 = false, f2 = 0, p2 = new tP();
  for (; ++l2 < e10.length; ) {
    let d2 = e10[l2], h2 = d2[1];
    "enter" === d2[0] ? "tableHead" === h2.type ? (s2 = false, 0 !== f2 && (t_(p2, t10, f2, n10, r2), r2 = void 0, f2 = 0), n10 = { type: "table", start: Object.assign({}, h2.start), end: Object.assign({}, h2.end) }, p2.add(l2, 0, [["enter", n10, t10]])) : "tableRow" === h2.type || "tableDelimiterRow" === h2.type ? (o2 = true, i2 = void 0, u2 = [0, 0, 0, 0], c2 = [0, l2 + 1, 0, 0], s2 && (s2 = false, r2 = { type: "tableBody", start: Object.assign({}, h2.start), end: Object.assign({}, h2.end) }, p2.add(l2, 0, [["enter", r2, t10]])), a2 = "tableDelimiterRow" === h2.type ? 2 : r2 ? 3 : 1) : a2 && ("data" === h2.type || "tableDelimiterMarker" === h2.type || "tableDelimiterFiller" === h2.type) ? (o2 = false, 0 === c2[2] && (0 !== u2[1] && (c2[0] = c2[1], i2 = tR(p2, t10, u2, a2, void 0, i2), u2 = [0, 0, 0, 0]), c2[2] = l2)) : "tableCellDivider" === h2.type && (o2 ? o2 = false : (0 !== u2[1] && (c2[0] = c2[1], i2 = tR(p2, t10, u2, a2, void 0, i2)), c2 = [(u2 = c2)[1], l2, 0, 0])) : "tableHead" === h2.type ? (s2 = true, f2 = l2) : "tableRow" === h2.type || "tableDelimiterRow" === h2.type ? (f2 = l2, 0 !== u2[1] ? (c2[0] = c2[1], i2 = tR(p2, t10, u2, a2, l2, i2)) : 0 !== c2[1] && (i2 = tR(p2, t10, c2, a2, l2, i2)), a2 = 0) : a2 && ("data" === h2.type || "tableDelimiterMarker" === h2.type || "tableDelimiterFiller" === h2.type) && (c2[3] = l2);
  }
  for (0 !== f2 && t_(p2, t10, f2, n10, r2), p2.consume(t10.events), l2 = -1; ++l2 < t10.events.length; ) {
    let e11 = t10.events[l2];
    "enter" === e11[0] && "table" === e11[1].type && (e11[1]._align = function(e12, t11) {
      let n11 = false, r3 = [];
      for (; t11 < e12.length; ) {
        let i3 = e12[t11];
        if (n11) {
          if ("enter" === i3[0])
            "tableContent" === i3[1].type && r3.push("tableDelimiterMarker" === e12[t11 + 1][1].type ? "left" : "none");
          else if ("tableContent" === i3[1].type) {
            if ("tableDelimiterMarker" === e12[t11 - 1][1].type) {
              let e13 = r3.length - 1;
              r3[e13] = "left" === r3[e13] ? "center" : "right";
            }
          } else if ("tableDelimiterRow" === i3[1].type)
            break;
        } else
          "enter" === i3[0] && "tableDelimiterRow" === i3[1].type && (n11 = true);
        t11 += 1;
      }
      return r3;
    }(t10.events, l2));
  }
  return e10;
}
function tR(e10, t10, n10, r2, i2, l2) {
  0 !== n10[0] && (l2.end = Object.assign({}, tB(t10.events, n10[0])), e10.add(n10[0], 0, [["exit", l2, t10]]));
  let o2 = tB(t10.events, n10[1]);
  if (l2 = { type: 1 === r2 ? "tableHeader" : 2 === r2 ? "tableDelimiter" : "tableData", start: Object.assign({}, o2), end: Object.assign({}, o2) }, e10.add(n10[1], 0, [["enter", l2, t10]]), 0 !== n10[2]) {
    let i3 = tB(t10.events, n10[2]), l3 = tB(t10.events, n10[3]), o3 = { type: "tableContent", start: Object.assign({}, i3), end: Object.assign({}, l3) };
    if (e10.add(n10[2], 0, [["enter", o3, t10]]), 2 !== r2) {
      let r3 = t10.events[n10[2]], i4 = t10.events[n10[3]];
      if (r3[1].end = Object.assign({}, i4[1].end), r3[1].type = "chunkText", r3[1].contentType = "text", n10[3] > n10[2] + 1) {
        let t11 = n10[2] + 1, r4 = n10[3] - n10[2] - 1;
        e10.add(t11, r4, []);
      }
    }
    e10.add(n10[3] + 1, 0, [["exit", o3, t10]]);
  }
  return void 0 !== i2 && (l2.end = Object.assign({}, tB(t10.events, i2)), e10.add(i2, 0, [["exit", l2, t10]]), l2 = void 0), l2;
}
function t_(e10, t10, n10, r2, i2) {
  let l2 = [], o2 = tB(t10.events, n10);
  i2 && (i2.end = Object.assign({}, o2), l2.push(["exit", i2, t10])), r2.end = Object.assign({}, o2), l2.push(["exit", r2, t10]), e10.add(n10 + 1, 0, l2);
}
function tB(e10, t10) {
  let n10 = e10[t10], r2 = "enter" === n10[0] ? "start" : "end";
  return n10[1][r2];
}
let tV = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return null === r2.previous && r2._gfmTasklistFirstContentOfListItem ? (e10.enter("taskListCheck"), e10.enter("taskListCheckMarker"), e10.consume(t11), e10.exit("taskListCheckMarker"), i2) : n10(t11);
  };
  function i2(t11) {
    return E(t11) ? (e10.enter("taskListCheckValueUnchecked"), e10.consume(t11), e10.exit("taskListCheckValueUnchecked"), l2) : 88 === t11 || 120 === t11 ? (e10.enter("taskListCheckValueChecked"), e10.consume(t11), e10.exit("taskListCheckValueChecked"), l2) : n10(t11);
  }
  function l2(t11) {
    return 93 === t11 ? (e10.enter("taskListCheckMarker"), e10.consume(t11), e10.exit("taskListCheckMarker"), e10.exit("taskListCheck"), o2) : n10(t11);
  }
  function o2(r3) {
    return D(r3) ? t10(r3) : M(r3) ? e10.check({ tokenize: tH }, t10, n10)(r3) : n10(r3);
  }
} };
function tH(e10, t10, n10) {
  return N(e10, function(e11) {
    return null === e11 ? n10(e11) : t10(e11);
  }, "whitespace");
}
function tU(e10, t10, n10, r2, i2, l2, o2, a2, u2, c2, s2, f2, p2, d2, h2) {
  let m2, g2;
  return function(t11) {
    return e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), y2;
  };
  function y2(t11) {
    return 35 === t11 ? (m2 = o2, x2(t11)) : 46 === t11 ? (m2 = a2, x2(t11)) : 58 === t11 || 95 === t11 || S(t11) ? (e10.enter(l2), e10.enter(u2), e10.consume(t11), b2) : h2 && M(t11) ? N(e10, y2, "whitespace")(t11) : !h2 && E(t11) ? eo(e10, y2)(t11) : z2(t11);
  }
  function x2(t11) {
    let n11 = m2 + "Marker";
    return e10.enter(l2), e10.enter(m2), e10.enter(n11), e10.consume(t11), e10.exit(n11), k2;
  }
  function k2(t11) {
    if (null === t11 || 34 === t11 || 35 === t11 || 39 === t11 || 46 === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 || 125 === t11 || E(t11))
      return n10(t11);
    let r3 = m2 + "Value";
    return e10.enter(r3), e10.consume(t11), v2;
  }
  function v2(t11) {
    if (null === t11 || 34 === t11 || 39 === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11)
      return n10(t11);
    if (35 === t11 || 46 === t11 || 125 === t11 || E(t11)) {
      let n11 = m2 + "Value";
      return e10.exit(n11), e10.exit(m2), e10.exit(l2), y2(t11);
    }
    return e10.consume(t11), v2;
  }
  function b2(t11) {
    return 45 === t11 || 46 === t11 || 58 === t11 || 95 === t11 || C(t11) ? (e10.consume(t11), b2) : (e10.exit(u2), h2 && M(t11)) ? N(e10, w2, "whitespace")(t11) : !h2 && E(t11) ? eo(e10, w2)(t11) : w2(t11);
  }
  function w2(t11) {
    return 61 === t11 ? (e10.enter(c2), e10.consume(t11), e10.exit(c2), A2) : (e10.exit(l2), y2(t11));
  }
  function A2(t11) {
    return null === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 || 125 === t11 || h2 && D(t11) ? n10(t11) : 34 === t11 || 39 === t11 ? (e10.enter(s2), e10.enter(p2), e10.consume(t11), e10.exit(p2), g2 = t11, I2) : h2 && M(t11) ? N(e10, A2, "whitespace")(t11) : !h2 && E(t11) ? eo(e10, A2)(t11) : (e10.enter(f2), e10.enter(d2), e10.consume(t11), g2 = void 0, T2);
  }
  function T2(t11) {
    return null === t11 || 34 === t11 || 39 === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 ? n10(t11) : 125 === t11 || E(t11) ? (e10.exit(d2), e10.exit(f2), e10.exit(l2), y2(t11)) : (e10.consume(t11), T2);
  }
  function I2(t11) {
    return t11 === g2 ? (e10.enter(p2), e10.consume(t11), e10.exit(p2), e10.exit(s2), e10.exit(l2), F2) : (e10.enter(f2), L2(t11));
  }
  function L2(t11) {
    return t11 === g2 ? (e10.exit(f2), I2(t11)) : null === t11 ? n10(t11) : D(t11) ? h2 ? n10(t11) : eo(e10, L2)(t11) : (e10.enter(d2), e10.consume(t11), O2);
  }
  function O2(t11) {
    return t11 === g2 || null === t11 || D(t11) ? (e10.exit(d2), L2(t11)) : (e10.consume(t11), O2);
  }
  function F2(e11) {
    return 125 === e11 || E(e11) ? y2(e11) : z2(e11);
  }
  function z2(l3) {
    return 125 === l3 ? (e10.enter(i2), e10.consume(l3), e10.exit(i2), e10.exit(r2), t10) : n10(l3);
  }
}
function tq(e10, t10, n10, r2, i2, l2, o2) {
  let a2, u2 = 0, c2 = 0;
  return function(t11) {
    return e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), s2;
  };
  function s2(n11) {
    return 93 === n11 ? (e10.enter(i2), e10.consume(n11), e10.exit(i2), e10.exit(r2), t10) : (e10.enter(l2), f2(n11));
  }
  function f2(t11) {
    if (93 === t11 && !c2)
      return h2(t11);
    let n11 = e10.enter("chunkText", { contentType: "text", previous: a2 });
    return a2 && (a2.next = n11), a2 = n11, p2(t11);
  }
  function p2(t11) {
    return null === t11 || u2 > 999 || 91 === t11 && ++c2 > 32 ? n10(t11) : 93 !== t11 || c2-- ? D(t11) ? o2 ? n10(t11) : (e10.consume(t11), e10.exit("chunkText"), f2) : (e10.consume(t11), 92 === t11 ? d2 : p2) : (e10.exit("chunkText"), h2(t11));
  }
  function d2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), u2++, p2) : p2(t11);
  }
  function h2(n11) {
    return e10.exit(l2), e10.enter(i2), e10.consume(n11), e10.exit(i2), e10.exit(r2), t10;
  }
}
function tW(e10, t10, n10, r2) {
  let i2 = this;
  return function(t11) {
    return S(t11) ? (e10.enter(r2), e10.consume(t11), l2) : n10(t11);
  };
  function l2(o2) {
    return 45 === o2 || 95 === o2 || C(o2) ? (e10.consume(o2), l2) : (e10.exit(r2), 45 === i2.previous || 95 === i2.previous ? n10(o2) : t10(o2));
  }
}
let tY = { tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = i2.events[i2.events.length - 1], o2 = l2 && "linePrefix" === l2[1].type ? l2[2].sliceSerialize(l2[1], true).length : 0, a2 = 0;
  return function(t11) {
    return e10.enter("directiveContainer"), e10.enter("directiveContainerFence"), e10.enter("directiveContainerSequence"), function t12(r3) {
      return 58 === r3 ? (e10.consume(r3), a2++, t12) : a2 < 3 ? n10(r3) : (e10.exit("directiveContainerSequence"), tW.call(i2, e10, u2, n10, "directiveContainerName")(r3));
    }(t11);
  };
  function u2(t11) {
    return 91 === t11 ? e10.attempt(tQ, c2, c2)(t11) : c2(t11);
  }
  function c2(t11) {
    return 123 === t11 ? e10.attempt(t$, s2, s2)(t11) : s2(t11);
  }
  function s2(t11) {
    return N(e10, f2, "whitespace")(t11);
  }
  function f2(r3) {
    return (e10.exit("directiveContainerFence"), null === r3) ? p2(r3) : D(r3) ? i2.interrupt ? t10(r3) : e10.attempt(tK, d2, p2)(r3) : n10(r3);
  }
  function p2(n11) {
    return e10.exit("directiveContainer"), t10(n11);
  }
  function d2(n11) {
    return null === n11 ? (e10.exit("directiveContainer"), t10(n11)) : (e10.enter("directiveContainerContent"), h2(n11));
  }
  function h2(t11) {
    return null === t11 ? x2(t11) : e10.attempt({ tokenize: k2, partial: true }, x2, o2 ? N(e10, m2, "linePrefix", o2 + 1) : m2)(t11);
  }
  function m2(t11) {
    if (null === t11)
      return x2(t11);
    let n11 = e10.enter("chunkDocument", { contentType: "document", previous: r2 });
    return r2 && (r2.next = n11), r2 = n11, function t12(n12) {
      if (null === n12) {
        let t13 = e10.exit("chunkDocument");
        return i2.parser.lazy[t13.start.line] = false, x2(n12);
      }
      return D(n12) ? e10.check(tK, g2, y2)(n12) : (e10.consume(n12), t12);
    }(t11);
  }
  function g2(t11) {
    e10.consume(t11);
    let n11 = e10.exit("chunkDocument");
    return i2.parser.lazy[n11.start.line] = false, h2;
  }
  function y2(t11) {
    let n11 = e10.exit("chunkDocument");
    return i2.parser.lazy[n11.start.line] = false, x2(t11);
  }
  function x2(n11) {
    return e10.exit("directiveContainerContent"), e10.exit("directiveContainer"), t10(n11);
  }
  function k2(e11, t11, n11) {
    let r3 = 0;
    return N(e11, function(t12) {
      return e11.enter("directiveContainerFence"), e11.enter("directiveContainerSequence"), function t13(l3) {
        return 58 === l3 ? (e11.consume(l3), r3++, t13) : r3 < a2 ? n11(l3) : (e11.exit("directiveContainerSequence"), N(e11, i3, "whitespace")(l3));
      }(t12);
    }, "linePrefix", 4);
    function i3(r4) {
      return null === r4 || D(r4) ? (e11.exit("directiveContainerFence"), t11(r4)) : n11(r4);
    }
  }
}, concrete: true }, tQ = { tokenize: function(e10, t10, n10) {
  return tq(e10, t10, n10, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", true);
}, partial: true }, t$ = { tokenize: function(e10, t10, n10) {
  return tU(e10, t10, n10, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", true);
}, partial: true }, tK = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2;
  };
  function i2(e11) {
    return r2.parser.lazy[r2.now().line] ? n10(e11) : t10(e11);
  }
}, partial: true }, tX = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("directiveLeaf"), e10.enter("directiveLeafSequence"), e10.consume(t11), i2;
  };
  function i2(t11) {
    return 58 === t11 ? (e10.consume(t11), e10.exit("directiveLeafSequence"), tW.call(r2, e10, l2, n10, "directiveLeafName")) : n10(t11);
  }
  function l2(t11) {
    return 91 === t11 ? e10.attempt(tZ, o2, o2)(t11) : o2(t11);
  }
  function o2(t11) {
    return 123 === t11 ? e10.attempt(tJ, a2, a2)(t11) : a2(t11);
  }
  function a2(t11) {
    return N(e10, u2, "whitespace")(t11);
  }
  function u2(r3) {
    return null === r3 || D(r3) ? (e10.exit("directiveLeaf"), t10(r3)) : n10(r3);
  }
} }, tZ = { tokenize: function(e10, t10, n10) {
  return tq(e10, t10, n10, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", true);
}, partial: true }, tJ = { tokenize: function(e10, t10, n10) {
  return tU(e10, t10, n10, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", true);
}, partial: true }, tG = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("directiveText"), e10.enter("directiveTextMarker"), e10.consume(t11), e10.exit("directiveTextMarker"), tW.call(r2, e10, i2, n10, "directiveTextName");
  };
  function i2(t11) {
    return 58 === t11 ? n10(t11) : 91 === t11 ? e10.attempt(t1, l2, l2)(t11) : l2(t11);
  }
  function l2(t11) {
    return 123 === t11 ? e10.attempt(t0, o2, o2)(t11) : o2(t11);
  }
  function o2(n11) {
    return e10.exit("directiveText"), t10(n11);
  }
}, previous: function(e10) {
  return 58 !== e10 || "characterEscape" === this.events[this.events.length - 1][1].type;
} }, t1 = { tokenize: function(e10, t10, n10) {
  return tq(e10, t10, n10, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
}, partial: true }, t0 = { tokenize: function(e10, t10, n10) {
  return tU(e10, t10, n10, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
}, partial: true }, t2 = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"], t4 = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
function t3(e10) {
  let t10 = "string" == typeof e10 ? e10.charCodeAt(0) : e10;
  return t10 >= 48 && t10 <= 57;
}
function t5(e10) {
  let t10 = "string" == typeof e10 ? e10.charCodeAt(0) : e10;
  return t10 >= 97 && t10 <= 102 || t10 >= 65 && t10 <= 70 || t10 >= 48 && t10 <= 57;
}
function t9(e10) {
  return function(e11) {
    let t10 = "string" == typeof e11 ? e11.charCodeAt(0) : e11;
    return t10 >= 97 && t10 <= 122 || t10 >= 65 && t10 <= 90;
  }(e10) || t3(e10);
}
let t6 = String.fromCharCode, t8 = ["", "Named character references must be terminated by a semicolon", "Numeric character references must be terminated by a semicolon", "Named character references cannot be empty", "Numeric character references cannot be empty", "Named character references must be known", "Numeric character references cannot be disallowed", "Numeric character references cannot be outside the permissible Unicode range"];
function t7(e10) {
  let t10, n10, r2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l2 = "string" == typeof i2.additional ? i2.additional.charCodeAt(0) : i2.additional, o2 = [], a2 = 0, u2 = -1, c2 = "";
  i2.position && ("start" in i2.position || "indent" in i2.position ? (n10 = i2.position.indent, t10 = i2.position.start) : t10 = i2.position);
  let s2 = (t10 ? t10.line : 0) || 1, f2 = (t10 ? t10.column : 0) || 1, p2 = g2();
  for (a2--; ++a2 <= e10.length; )
    if (10 === r2 && (f2 = (n10 ? n10[u2] : 0) || 1), 38 === (r2 = e10.charCodeAt(a2))) {
      let t11;
      let n11 = e10.charCodeAt(a2 + 1);
      if (9 === n11 || 10 === n11 || 12 === n11 || 32 === n11 || 38 === n11 || 60 === n11 || Number.isNaN(n11) || l2 && n11 === l2) {
        c2 += t6(r2), f2++;
        continue;
      }
      let u3 = a2 + 1, s3 = u3, k2 = u3;
      if (35 === n11) {
        k2 = ++s3;
        let n12 = e10.charCodeAt(k2);
        88 === n12 || 120 === n12 ? (t11 = "hexadecimal", k2 = ++s3) : t11 = "decimal";
      } else
        t11 = "named";
      let v2 = "", b2 = "", S2 = "", C2 = "named" === t11 ? t9 : "decimal" === t11 ? t3 : t5;
      for (k2--; ++k2 <= e10.length; ) {
        let n12 = e10.charCodeAt(k2);
        if (!C2(n12))
          break;
        S2 += t6(n12), "named" === t11 && t2.includes(S2) && (v2 = S2, b2 = m(S2));
      }
      let w2 = 59 === e10.charCodeAt(k2);
      if (w2) {
        k2++;
        let e11 = "named" === t11 && m(S2);
        e11 && (v2 = S2, b2 = e11);
      }
      let A2 = 1 + k2 - u3, T2 = "";
      if (w2 || false !== i2.nonTerminated) {
        if (S2) {
          if ("named" === t11) {
            if (w2 && !b2)
              y2(5, 1);
            else if (v2 !== S2 && (A2 = 1 + (k2 = s3 + v2.length) - s3, w2 = false), !w2) {
              let t12 = v2 ? 1 : 3;
              if (i2.attribute) {
                let n12 = e10.charCodeAt(k2);
                61 === n12 ? (y2(t12, A2), b2 = "") : t9(n12) ? b2 = "" : y2(t12, A2);
              } else
                y2(t12, A2);
            }
            T2 = b2;
          } else {
            var d2, h2;
            w2 || y2(2, A2);
            let e11 = Number.parseInt(S2, "hexadecimal" === t11 ? 16 : 10);
            if ((d2 = e11) >= 55296 && d2 <= 57343 || d2 > 1114111)
              y2(7, A2), T2 = t6(65533);
            else if (e11 in t4)
              y2(6, A2), T2 = t4[e11];
            else {
              let t12 = "";
              ((h2 = e11) >= 1 && h2 <= 8 || 11 === h2 || h2 >= 13 && h2 <= 31 || h2 >= 127 && h2 <= 159 || h2 >= 64976 && h2 <= 65007 || (65535 & h2) == 65535 || (65535 & h2) == 65534) && y2(6, A2), e11 > 65535 && (e11 -= 65536, t12 += t6(e11 >>> 10 | 55296), e11 = 56320 | 1023 & e11), T2 = t12 + t6(e11);
            }
          }
        } else
          "named" !== t11 && y2(4, A2);
      }
      if (T2) {
        x2(), p2 = g2(), a2 = k2 - 1, f2 += k2 - u3 + 1, o2.push(T2);
        let t12 = g2();
        t12.offset++, i2.reference && i2.reference.call(i2.referenceContext, T2, { start: p2, end: t12 }, e10.slice(u3 - 1, k2)), p2 = t12;
      } else
        S2 = e10.slice(u3 - 1, k2), c2 += S2, f2 += S2.length, a2 = k2 - 1;
    } else
      10 === r2 && (s2++, u2++, f2 = 0), Number.isNaN(r2) ? x2() : (c2 += t6(r2), f2++);
  return o2.join("");
  function g2() {
    return { line: s2, column: f2, offset: a2 + ((t10 ? t10.offset : 0) || 0) };
  }
  function y2(e11, t11) {
    let n11;
    i2.warning && (n11 = g2(), n11.column += t11, n11.offset += t11, i2.warning.call(i2.warningContext, t8[e11], n11, e11));
  }
  function x2() {
    c2 && (o2.push(c2), i2.text && i2.text.call(i2.textContext, c2, { start: p2, end: g2() }), c2 = "");
  }
}
function ne(e10) {
  nr.call(this, "containerDirective", e10);
}
function nt(e10) {
  nr.call(this, "leafDirective", e10);
}
function nn(e10) {
  nr.call(this, "textDirective", e10);
}
function nr(e10, t10) {
  this.enter({ type: e10, name: "", attributes: {}, children: [] }, t10);
}
function ni(e10) {
  let t10 = this.stack[this.stack.length - 1];
  "containerDirective" === t10.type || "leafDirective" === t10.type || t10.type, t10.name = this.sliceSerialize(e10);
}
function nl(e10) {
  this.enter({ type: "paragraph", data: { directiveLabel: true }, children: [] }, e10);
}
function no(e10) {
  this.exit(e10);
}
function na() {
  this.data.directiveAttributes = [], this.buffer();
}
function nu(e10) {
  this.data.directiveAttributes.push(["id", t7(this.sliceSerialize(e10), { attribute: true })]);
}
function nc(e10) {
  this.data.directiveAttributes.push(["class", t7(this.sliceSerialize(e10), { attribute: true })]);
}
function ns(e10) {
  let t10 = this.data.directiveAttributes;
  t10[t10.length - 1][1] = t7(this.sliceSerialize(e10), { attribute: true });
}
function nf(e10) {
  this.data.directiveAttributes.push([this.sliceSerialize(e10), ""]);
}
function np() {
  let e10 = this.data.directiveAttributes, t10 = {}, n10 = -1;
  for (; ++n10 < e10.length; ) {
    let r3 = e10[n10];
    "class" === r3[0] && t10.class ? t10.class += " " + r3[1] : t10[r3[0]] = r3[1];
  }
  this.data.directiveAttributes = void 0, this.resume();
  let r2 = this.stack[this.stack.length - 1];
  "containerDirective" === r2.type || "leafDirective" === r2.type || r2.type, r2.attributes = t10;
}
function nd(e10) {
  this.exit(e10);
}
let nh = (e10) => {
  var t10, n10;
  let r2, i2, l2, o2;
  return "string" != typeof (t10 = { extensions: [k([{ text: tb }, { document: { 91: { tokenize: tO, continuation: { tokenize: tF }, exit: tz } }, text: { 91: { tokenize: tM }, 93: { add: "after", tokenize: tD, resolveTo: tE } } }, function(e11) {
    let t11 = (e11 || {}).singleTilde, n11 = { tokenize: function(e12, n12, r3) {
      let i3 = this.previous, l3 = this.events, o3 = 0;
      return function(a2) {
        return 126 === i3 && "characterEscape" !== l3[l3.length - 1][1].type ? r3(a2) : (e12.enter("strikethroughSequenceTemporary"), function l4(a3) {
          let u2 = B(i3);
          if (126 === a3)
            return o3 > 1 ? r3(a3) : (e12.consume(a3), o3++, l4);
          if (o3 < 2 && !t11)
            return r3(a3);
          let c2 = e12.exit("strikethroughSequenceTemporary"), s2 = B(a3);
          return c2._open = !s2 || 2 === s2 && !!u2, c2._close = !u2 || 2 === u2 && !!s2, n12(a3);
        }(a2));
      };
    }, resolveAll: function(e12, t12) {
      let n12 = -1;
      for (; ++n12 < e12.length; )
        if ("enter" === e12[n12][0] && "strikethroughSequenceTemporary" === e12[n12][1].type && e12[n12][1]._close) {
          let r3 = n12;
          for (; r3--; )
            if ("exit" === e12[r3][0] && "strikethroughSequenceTemporary" === e12[r3][1].type && e12[r3][1]._open && e12[n12][1].end.offset - e12[n12][1].start.offset == e12[r3][1].end.offset - e12[r3][1].start.offset) {
              e12[n12][1].type = "strikethroughSequence", e12[r3][1].type = "strikethroughSequence";
              let i3 = { type: "strikethrough", start: Object.assign({}, e12[r3][1].start), end: Object.assign({}, e12[n12][1].end) }, l3 = { type: "strikethroughText", start: Object.assign({}, e12[r3][1].end), end: Object.assign({}, e12[n12][1].start) }, o3 = [["enter", i3, t12], ["enter", e12[r3][1], t12], ["exit", e12[r3][1], t12], ["enter", l3, t12]], a2 = t12.parser.constructs.insideSpan.null;
              a2 && g(o3, o3.length, 0, V(a2, e12.slice(r3 + 1, n12), t12)), g(o3, o3.length, 0, [["exit", l3, t12], ["enter", e12[n12][1], t12], ["exit", e12[n12][1], t12], ["exit", i3, t12]]), g(e12, r3 - 1, n12 - r3 + 3, o3), n12 = r3 + o3.length - 2;
              break;
            }
        }
      for (n12 = -1; ++n12 < e12.length; )
        "strikethroughSequenceTemporary" === e12[n12][1].type && (e12[n12][1].type = "data");
      return e12;
    } };
    return null == t11 && (t11 = true), { text: { 126: n11 }, insideSpan: { null: [n11] }, attentionMarkers: { null: [126] } };
  }(void 0), { flow: { null: { tokenize: tN, resolveAll: tj } } }, { text: { 91: tV } }]), { text: { 58: tG }, flow: { 58: [tY, tX] } }], mdastExtensions: [[{ transforms: [e1], enter: { literalAutolink: e$, literalAutolinkEmail: eK, literalAutolinkHttp: eK, literalAutolinkWww: eK }, exit: { literalAutolink: eG, literalAutolinkEmail: eJ, literalAutolinkHttp: eX, literalAutolinkWww: eZ } }, { enter: { gfmFootnoteDefinition: e3, gfmFootnoteDefinitionLabelString: e5, gfmFootnoteCall: e8, gfmFootnoteCallString: e7 }, exit: { gfmFootnoteDefinition: e6, gfmFootnoteDefinitionLabelString: e9, gfmFootnoteCall: tt, gfmFootnoteCallString: te } }, { canContainEols: ["delete"], enter: { strikethrough: tn }, exit: { strikethrough: tr } }, { enter: { table: ti, tableData: tu, tableHeader: tu, tableRow: to }, exit: { codeText: tc, table: tl, tableData: ta, tableHeader: ta, tableRow: ta } }, { exit: { taskListCheckValueChecked: tf, taskListCheckValueUnchecked: tf, paragraph: tp } }], { canContainEols: ["textDirective"], enter: { directiveContainer: ne, directiveContainerAttributes: na, directiveContainerLabel: nl, directiveLeaf: nt, directiveLeafAttributes: na, directiveText: nn, directiveTextAttributes: na }, exit: { directiveContainer: nd, directiveContainerAttributeClassValue: nc, directiveContainerAttributeIdValue: nu, directiveContainerAttributeName: nf, directiveContainerAttributeValue: ns, directiveContainerAttributes: np, directiveContainerLabel: no, directiveContainerName: ni, directiveLeaf: nd, directiveLeafAttributeClassValue: nc, directiveLeafAttributeIdValue: nu, directiveLeafAttributeName: nf, directiveLeafAttributeValue: ns, directiveLeafAttributes: np, directiveLeafName: ni, directiveText: nd, directiveTextAttributeClassValue: nc, directiveTextAttributeIdValue: nu, directiveTextAttributeName: nf, directiveTextAttributeValue: ns, directiveTextAttributes: np, directiveTextName: ni } }] }) && (n10 = t10, t10 = void 0), function(e11) {
    let t11 = { transforms: [], canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"], enter: { autolink: r3(S2), autolinkProtocol: c2, autolinkEmail: c2, atxHeading: r3(y2), blockQuote: r3(function() {
      return { type: "blockquote", children: [] };
    }), characterEscape: c2, characterReference: c2, codeFenced: r3(g2), codeFencedFenceInfo: i3, codeFencedFenceMeta: i3, codeIndented: r3(g2, i3), codeText: r3(function() {
      return { type: "inlineCode", value: "" };
    }, i3), codeTextData: c2, data: c2, codeFlowValue: c2, definition: r3(function() {
      return { type: "definition", identifier: "", label: null, title: null, url: "" };
    }), definitionDestinationString: i3, definitionLabelString: i3, definitionTitleString: i3, emphasis: r3(function() {
      return { type: "emphasis", children: [] };
    }), hardBreakEscape: r3(x2), hardBreakTrailing: r3(x2), htmlFlow: r3(k2, i3), htmlFlowData: c2, htmlText: r3(k2, i3), htmlTextData: c2, image: r3(function() {
      return { type: "image", title: null, url: "", alt: null };
    }), label: i3, link: r3(S2), listItem: r3(function(e12) {
      return { type: "listItem", spread: e12._spread, checked: null, children: [] };
    }), listItemValue: function(e12) {
      this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e12), 10), this.data.expectingFirstListItemValue = void 0);
    }, listOrdered: r3(C2, function() {
      this.data.expectingFirstListItemValue = true;
    }), listUnordered: r3(C2), paragraph: r3(function() {
      return { type: "paragraph", children: [] };
    }), reference: function() {
      this.data.referenceType = "collapsed";
    }, referenceString: i3, resourceDestinationString: i3, resourceTitleString: i3, setextHeading: r3(y2), strong: r3(function() {
      return { type: "strong", children: [] };
    }), thematicBreak: r3(function() {
      return { type: "thematicBreak" };
    }) }, exit: { atxHeading: o3(), atxHeadingSequence: function(e12) {
      let t12 = this.stack[this.stack.length - 1];
      if (!t12.depth) {
        let n12 = this.sliceSerialize(e12).length;
        t12.depth = n12;
      }
    }, autolink: o3(), autolinkEmail: function(e12) {
      s2.call(this, e12), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e12);
    }, autolinkProtocol: function(e12) {
      s2.call(this, e12), this.stack[this.stack.length - 1].url = this.sliceSerialize(e12);
    }, blockQuote: o3(), characterEscapeValue: s2, characterReferenceMarkerHexadecimal: h2, characterReferenceMarkerNumeric: h2, characterReferenceValue: function(e12) {
      let t12;
      let n12 = this.sliceSerialize(e12), r4 = this.data.characterReferenceType;
      r4 ? (t12 = v(n12, "characterReferenceMarkerNumeric" === r4 ? 10 : 16), this.data.characterReferenceType = void 0) : t12 = m(n12);
      let i4 = this.stack.pop();
      i4.value += t12, i4.position.end = eB(e12.end);
    }, codeFenced: o3(function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }), codeFencedFence: function() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }, codeFencedFenceInfo: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].lang = e12;
    }, codeFencedFenceMeta: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].meta = e12;
    }, codeFlowValue: s2, codeIndented: o3(function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12.replace(/(\r?\n|\r)$/g, "");
    }), codeText: o3(function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12;
    }), codeTextData: s2, data: s2, definition: o3(), definitionDestinationString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].url = e12;
    }, definitionLabelString: function(e12) {
      let t12 = this.resume(), n12 = this.stack[this.stack.length - 1];
      n12.label = t12, n12.identifier = b(this.sliceSerialize(e12)).toLowerCase();
    }, definitionTitleString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].title = e12;
    }, emphasis: o3(), hardBreakEscape: o3(d2), hardBreakTrailing: o3(d2), htmlFlow: o3(function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12;
    }), htmlFlowData: s2, htmlText: o3(function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12;
    }), htmlTextData: s2, image: o3(function() {
      let e12 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        let t12 = this.data.referenceType || "shortcut";
        e12.type += "Reference", e12.referenceType = t12, delete e12.url, delete e12.title;
      } else
        delete e12.identifier, delete e12.label;
      this.data.referenceType = void 0;
    }), label: function() {
      let e12 = this.stack[this.stack.length - 1], t12 = this.resume(), n12 = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, "link" === n12.type) {
        let t13 = e12.children;
        n12.children = t13;
      } else
        n12.alt = t12;
    }, labelText: function(e12) {
      let t12 = this.sliceSerialize(e12), n12 = this.stack[this.stack.length - 2];
      n12.label = t12.replace(eF, ez), n12.identifier = b(t12).toLowerCase();
    }, lineEnding: function(e12) {
      let n12 = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        n12.children[n12.children.length - 1].position.end = eB(e12.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && t11.canContainEols.includes(n12.type) && (c2.call(this, e12), s2.call(this, e12));
    }, link: o3(function() {
      let e12 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        let t12 = this.data.referenceType || "shortcut";
        e12.type += "Reference", e12.referenceType = t12, delete e12.url, delete e12.title;
      } else
        delete e12.identifier, delete e12.label;
      this.data.referenceType = void 0;
    }), listItem: o3(), listOrdered: o3(), listUnordered: o3(), paragraph: o3(), referenceString: function(e12) {
      let t12 = this.resume(), n12 = this.stack[this.stack.length - 1];
      n12.label = t12, n12.identifier = b(this.sliceSerialize(e12)).toLowerCase(), this.data.referenceType = "full";
    }, resourceDestinationString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].url = e12;
    }, resourceTitleString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].title = e12;
    }, resource: function() {
      this.data.inReference = void 0;
    }, setextHeading: o3(function() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }), setextHeadingLineSequence: function(e12) {
      this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e12).codePointAt(0) ? 1 : 2;
    }, setextHeadingText: function() {
      this.data.setextHeadingSlurpLineEnding = true;
    }, strong: o3(), thematicBreak: o3() } };
    (function e12(t12, n12) {
      let r4 = -1;
      for (; ++r4 < n12.length; ) {
        let i4 = n12[r4];
        Array.isArray(i4) ? e12(t12, i4) : function(e13, t13) {
          let n13;
          for (n13 in t13)
            if (e_.call(t13, n13))
              switch (n13) {
                case "canContainEols": {
                  let r5 = t13[n13];
                  r5 && e13[n13].push(...r5);
                  break;
                }
                case "transforms": {
                  let r5 = t13[n13];
                  r5 && e13[n13].push(...r5);
                  break;
                }
                case "enter":
                case "exit": {
                  let r5 = t13[n13];
                  r5 && Object.assign(e13[n13], r5);
                }
              }
        }(t12, i4);
      }
    })(t11, (e11 || {}).mdastExtensions || []);
    let n11 = {};
    return function(e12) {
      let r4 = { type: "root", children: [] }, o4 = { stack: [r4], tokenStack: [], config: t11, enter: l3, exit: a2, buffer: i3, resume: u2, data: n11 }, c3 = [], s3 = -1;
      for (; ++s3 < e12.length; )
        ("listOrdered" === e12[s3][1].type || "listUnordered" === e12[s3][1].type) && ("enter" === e12[s3][0] ? c3.push(s3) : s3 = function(e13, t12, n12) {
          let r5, i4, l4, o5, a3 = t12 - 1, u3 = -1, c4 = false;
          for (; ++a3 <= n12; ) {
            let t13 = e13[a3];
            switch (t13[1].type) {
              case "listUnordered":
              case "listOrdered":
              case "blockQuote":
                "enter" === t13[0] ? u3++ : u3--, o5 = void 0;
                break;
              case "lineEndingBlank":
                "enter" === t13[0] && (!r5 || o5 || u3 || l4 || (l4 = a3), o5 = void 0);
                break;
              case "linePrefix":
              case "listItemValue":
              case "listItemMarker":
              case "listItemPrefix":
              case "listItemPrefixWhitespace":
                break;
              default:
                o5 = void 0;
            }
            if (!u3 && "enter" === t13[0] && "listItemPrefix" === t13[1].type || -1 === u3 && "exit" === t13[0] && ("listUnordered" === t13[1].type || "listOrdered" === t13[1].type)) {
              if (r5) {
                let o6 = a3;
                for (i4 = void 0; o6--; ) {
                  let t14 = e13[o6];
                  if ("lineEnding" === t14[1].type || "lineEndingBlank" === t14[1].type) {
                    if ("exit" === t14[0])
                      continue;
                    i4 && (e13[i4][1].type = "lineEndingBlank", c4 = true), t14[1].type = "lineEnding", i4 = o6;
                  } else if ("linePrefix" === t14[1].type || "blockQuotePrefix" === t14[1].type || "blockQuotePrefixWhitespace" === t14[1].type || "blockQuoteMarker" === t14[1].type || "listItemIndent" === t14[1].type)
                    ;
                  else
                    break;
                }
                l4 && (!i4 || l4 < i4) && (r5._spread = true), r5.end = Object.assign({}, i4 ? e13[i4][1].start : t13[1].end), e13.splice(i4 || a3, 0, ["exit", r5, t13[2]]), a3++, n12++;
              }
              if ("listItemPrefix" === t13[1].type) {
                let i5 = { type: "listItem", _spread: false, start: Object.assign({}, t13[1].start), end: void 0 };
                r5 = i5, e13.splice(a3, 0, ["enter", i5, t13[2]]), a3++, n12++, l4 = void 0, o5 = true;
              }
            }
          }
          return e13[t12][1]._spread = c4, n12;
        }(e12, c3.pop(), s3));
      for (s3 = -1; ++s3 < e12.length; ) {
        let n12 = t11[e12[s3][0]];
        e_.call(n12, e12[s3][1].type) && n12[e12[s3][1].type].call(Object.assign({ sliceSerialize: e12[s3][2].sliceSerialize }, o4), e12[s3][1]);
      }
      if (o4.tokenStack.length > 0) {
        let e13 = o4.tokenStack[o4.tokenStack.length - 1];
        (e13[1] || eV).call(o4, void 0, e13[0]);
      }
      for (r4.position = { start: eB(e12.length > 0 ? e12[0][1].start : { line: 1, column: 1, offset: 0 }), end: eB(e12.length > 0 ? e12[e12.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, s3 = -1; ++s3 < t11.transforms.length; )
        r4 = t11.transforms[s3](r4) || r4;
      return r4;
    };
    function r3(e12, t12) {
      return function(n12) {
        l3.call(this, e12(n12), n12), t12 && t12.call(this, n12);
      };
    }
    function i3() {
      this.stack.push({ type: "fragment", children: [] });
    }
    function l3(e12, t12, n12) {
      this.stack[this.stack.length - 1].children.push(e12), this.stack.push(e12), this.tokenStack.push([t12, n12]), e12.position = { start: eB(t12.start), end: void 0 };
    }
    function o3(e12) {
      return function(t12) {
        e12 && e12.call(this, t12), a2.call(this, t12);
      };
    }
    function a2(e12, t12) {
      let n12 = this.stack.pop(), r4 = this.tokenStack.pop();
      if (r4)
        r4[0].type !== e12.type && (t12 ? t12.call(this, e12, r4[0]) : (r4[1] || eV).call(this, e12, r4[0]));
      else
        throw Error("Cannot close `" + e12.type + "` (" + eP({ start: e12.start, end: e12.end }) + "): it’s not open");
      n12.position.end = eB(e12.end);
    }
    function u2() {
      return p(this.stack.pop(), "boolean" != typeof f.includeImageAlt || f.includeImageAlt, "boolean" != typeof f.includeHtml || f.includeHtml);
    }
    function c2(e12) {
      let t12 = this.stack[this.stack.length - 1].children, n12 = t12[t12.length - 1];
      n12 && "text" === n12.type || ((n12 = { type: "text", value: "" }).position = { start: eB(e12.start), end: void 0 }, t12.push(n12)), this.stack.push(n12);
    }
    function s2(e12) {
      let t12 = this.stack.pop();
      t12.value += this.sliceSerialize(e12), t12.position.end = eB(e12.end);
    }
    function d2() {
      this.data.atHardBreak = true;
    }
    function h2(e12) {
      this.data.characterReferenceType = e12.type;
    }
    function g2() {
      return { type: "code", lang: null, meta: null, value: "" };
    }
    function y2() {
      return { type: "heading", depth: 0, children: [] };
    }
    function x2() {
      return { type: "break" };
    }
    function k2() {
      return { type: "html", value: "" };
    }
    function S2() {
      return { type: "link", title: null, url: "", children: [] };
    }
    function C2(e12) {
      return { type: "list", ordered: "listOrdered" === e12.type, start: null, spread: e12._spread, children: [] };
    }
  }(n10)(function(e11) {
    for (; !ee(e11); )
      ;
    return e11;
  }(function(e11) {
    let t11 = { defined: [], lazy: {}, constructs: k([eM, ...(e11 || {}).extensions || []]), content: n11(j), document: n11(R), flow: n11(ew), string: n11(eT), text: n11(eI) };
    return t11;
    function n11(e12) {
      return function(n12) {
        return function(e13, t12, n13) {
          let r3 = Object.assign(n13 ? Object.assign({}, n13) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), i3 = {}, l3 = [], o3 = [], a2 = [], u2 = { consume: function(e14) {
            D(e14) ? (r3.line++, r3.column = 1, r3.offset += -3 === e14 ? 2 : 1, x2()) : -1 !== e14 && (r3.column++, r3.offset++), r3._bufferIndex < 0 ? r3._index++ : (r3._bufferIndex++, r3._bufferIndex === o3[r3._index].length && (r3._bufferIndex = -1, r3._index++)), c2.previous = e14;
          }, enter: function(e14, t13) {
            let n14 = t13 || {};
            return n14.type = e14, n14.start = p2(), c2.events.push(["enter", n14, c2]), a2.push(n14), n14;
          }, exit: function(e14) {
            let t13 = a2.pop();
            return t13.end = p2(), c2.events.push(["exit", t13, c2]), t13;
          }, attempt: h2(function(e14, t13) {
            m2(e14, t13.from);
          }), check: h2(d2), interrupt: h2(d2, { interrupt: true }) }, c2 = { previous: null, code: null, containerState: {}, events: [], parser: e13, sliceStream: f2, sliceSerialize: function(e14, t13) {
            return function(e15, t14) {
              let n14, r4 = -1, i4 = [];
              for (; ++r4 < e15.length; ) {
                let l4;
                let o4 = e15[r4];
                if ("string" == typeof o4)
                  l4 = o4;
                else
                  switch (o4) {
                    case -5:
                      l4 = "\r";
                      break;
                    case -4:
                      l4 = "\n";
                      break;
                    case -3:
                      l4 = "\r\n";
                      break;
                    case -2:
                      l4 = t14 ? " " : "	";
                      break;
                    case -1:
                      if (!t14 && n14)
                        continue;
                      l4 = " ";
                      break;
                    default:
                      l4 = String.fromCharCode(o4);
                  }
                n14 = -2 === o4, i4.push(l4);
              }
              return i4.join("");
            }(f2(e14), t13);
          }, now: p2, defineSkip: function(e14) {
            i3[e14.line] = e14.column, x2();
          }, write: function(e14) {
            return (o3 = y(o3, e14), function() {
              let e15;
              for (; r3._index < o3.length; ) {
                let n14 = o3[r3._index];
                if ("string" == typeof n14)
                  for (e15 = r3._index, r3._bufferIndex < 0 && (r3._bufferIndex = 0); r3._index === e15 && r3._bufferIndex < n14.length; ) {
                    var t13;
                    t13 = n14.charCodeAt(r3._bufferIndex), s2 = s2(t13);
                  }
                else
                  s2 = s2(n14);
              }
            }(), null !== o3[o3.length - 1]) ? [] : (m2(t12, 0), c2.events = V(l3, c2.events, c2), c2.events);
          } }, s2 = t12.tokenize.call(c2, u2);
          return t12.resolveAll && l3.push(t12), c2;
          function f2(e14) {
            return function(e15, t13) {
              let n14;
              let r4 = t13.start._index, i4 = t13.start._bufferIndex, l4 = t13.end._index, o4 = t13.end._bufferIndex;
              if (r4 === l4)
                n14 = [e15[r4].slice(i4, o4)];
              else {
                if (n14 = e15.slice(r4, l4), i4 > -1) {
                  let e16 = n14[0];
                  "string" == typeof e16 ? n14[0] = e16.slice(i4) : n14.shift();
                }
                o4 > 0 && n14.push(e15[l4].slice(0, o4));
              }
              return n14;
            }(o3, e14);
          }
          function p2() {
            let { line: e14, column: t13, offset: n14, _index: i4, _bufferIndex: l4 } = r3;
            return { line: e14, column: t13, offset: n14, _index: i4, _bufferIndex: l4 };
          }
          function d2(e14, t13) {
            t13.restore();
          }
          function h2(e14, t13) {
            return function(n14, i4, l4) {
              let o4, s3, f3, d3;
              return Array.isArray(n14) ? h3(n14) : "tokenize" in n14 ? h3([n14]) : function(e15) {
                let t14 = null !== e15 && n14[e15], r4 = null !== e15 && n14.null;
                return h3([...Array.isArray(t14) ? t14 : t14 ? [t14] : [], ...Array.isArray(r4) ? r4 : r4 ? [r4] : []])(e15);
              };
              function h3(e15) {
                return (o4 = e15, s3 = 0, 0 === e15.length) ? l4 : m3(e15[s3]);
              }
              function m3(e15) {
                return function(n15) {
                  return (d3 = function() {
                    let e16 = p2(), t14 = c2.previous, n16 = c2.currentConstruct, i5 = c2.events.length, l5 = Array.from(a2);
                    return { restore: function() {
                      r3 = e16, c2.previous = t14, c2.currentConstruct = n16, c2.events.length = i5, a2 = l5, x2();
                    }, from: i5 };
                  }(), f3 = e15, e15.partial || (c2.currentConstruct = e15), e15.name && c2.parser.constructs.disable.null.includes(e15.name)) ? y2() : e15.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, u2, g2, y2)(n15);
                };
              }
              function g2(t14) {
                return e14(f3, d3), i4;
              }
              function y2(e15) {
                return (d3.restore(), ++s3 < o4.length) ? m3(o4[s3]) : l4;
              }
            };
          }
          function m2(e14, t13) {
            e14.resolveAll && !l3.includes(e14) && l3.push(e14), e14.resolve && g(c2.events, t13, c2.events.length - t13, e14.resolve(c2.events.slice(t13), c2)), e14.resolveTo && (c2.events = e14.resolveTo(c2.events, c2));
          }
          function x2() {
            r3.line in i3 && r3.column < 2 && (r3.column = i3[r3.line], r3.offset += i3[r3.line] - 1);
          }
        }(t11, e12, n12);
      };
    }
  }(n10).document().write((i2 = 1, l2 = "", o2 = true, function(e11, t11, n11) {
    let a2, u2, c2, s2, f2;
    let p2 = [];
    for (e11 = l2 + ("string" == typeof e11 ? e11.toString() : new TextDecoder(t11 || void 0).decode(e11)), c2 = 0, l2 = "", o2 && (65279 === e11.charCodeAt(0) && c2++, o2 = void 0); c2 < e11.length; ) {
      if (eO.lastIndex = c2, s2 = (a2 = eO.exec(e11)) && void 0 !== a2.index ? a2.index : e11.length, f2 = e11.charCodeAt(s2), !a2) {
        l2 = e11.slice(c2);
        break;
      }
      if (10 === f2 && c2 === s2 && r2)
        p2.push(-3), r2 = void 0;
      else
        switch (r2 && (p2.push(-5), r2 = void 0), c2 < s2 && (p2.push(e11.slice(c2, s2)), i2 += s2 - c2), f2) {
          case 0:
            p2.push(65533), i2++;
            break;
          case 9:
            for (u2 = 4 * Math.ceil(i2 / 4), p2.push(-2); i2++ < u2; )
              p2.push(-1);
            break;
          case 10:
            p2.push(-4), i2 = 1;
            break;
          default:
            r2 = true, i2 = 1;
        }
      c2 = s2 + 1;
    }
    return n11 && (r2 && p2.push(-5), l2 && p2.push(l2), p2.push(null)), p2;
  })(e10, t10, true))));
}, nm = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ng = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ny = {};
function nx(e10, t10) {
  return ((t10 || ny).jsx ? ng : nm).test(e10);
}
let nk = /[ \t\n\f\r]/g;
function nv(e10) {
  return "" === e10.replace(nk, "");
}
class nb {
  constructor(e10, t10, n10) {
    this.property = e10, this.normal = t10, n10 && (this.space = n10);
  }
}
function nS(e10, t10) {
  let n10 = {}, r2 = {}, i2 = -1;
  for (; ++i2 < e10.length; )
    Object.assign(n10, e10[i2].property), Object.assign(r2, e10[i2].normal);
  return new nb(n10, r2, t10);
}
function nC(e10) {
  return e10.toLowerCase();
}
nb.prototype.property = {}, nb.prototype.normal = {}, nb.prototype.space = null;
class nw {
  constructor(e10, t10) {
    this.property = e10, this.attribute = t10;
  }
}
nw.prototype.space = null, nw.prototype.boolean = false, nw.prototype.booleanish = false, nw.prototype.overloadedBoolean = false, nw.prototype.number = false, nw.prototype.commaSeparated = false, nw.prototype.spaceSeparated = false, nw.prototype.commaOrSpaceSeparated = false, nw.prototype.mustUseProperty = false, nw.prototype.defined = false;
let nA = 0, nT = nF(), nI = nF(), nL = nF(), nD = nF(), nE = nF(), nM = nF(), nO = nF();
function nF() {
  return 2 ** ++nA;
}
let nz = Object.freeze(Object.defineProperty({ __proto__: null, boolean: nT, booleanish: nI, commaOrSpaceSeparated: nO, commaSeparated: nM, number: nD, overloadedBoolean: nL, spaceSeparated: nE }, Symbol.toStringTag, { value: "Module" })), nP = Object.keys(nz);
class nN extends nw {
  constructor(e10, t10, n10, r2) {
    var i2, l2;
    let o2 = -1;
    if (super(e10, t10), r2 && (this.space = r2), "number" == typeof n10)
      for (; ++o2 < nP.length; ) {
        let e11 = nP[o2];
        i2 = nP[o2], (l2 = (n10 & nz[e11]) === nz[e11]) && (this[i2] = l2);
      }
  }
}
nN.prototype.defined = true;
let nj = {}.hasOwnProperty;
function nR(e10) {
  let t10;
  let n10 = {}, r2 = {};
  for (t10 in e10.properties)
    if (nj.call(e10.properties, t10)) {
      let i2 = e10.properties[t10], l2 = new nN(t10, e10.transform(e10.attributes || {}, t10), i2, e10.space);
      e10.mustUseProperty && e10.mustUseProperty.includes(t10) && (l2.mustUseProperty = true), n10[t10] = l2, r2[nC(t10)] = t10, r2[nC(l2.attribute)] = t10;
    }
  return new nb(n10, r2, e10.space);
}
let n_ = nR({ space: "xlink", transform: (e10, t10) => "xlink:" + t10.slice(5).toLowerCase(), properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } }), nB = nR({ space: "xml", transform: (e10, t10) => "xml:" + t10.slice(3).toLowerCase(), properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
function nV(e10, t10) {
  return t10 in e10 ? e10[t10] : t10;
}
function nH(e10, t10) {
  return nV(e10, t10.toLowerCase());
}
let nU = nR({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: nH, properties: { xmlns: null, xmlnsXLink: null } }), nq = nR({ transform: (e10, t10) => "role" === t10 ? t10 : "aria-" + t10.slice(4).toLowerCase(), properties: { ariaActiveDescendant: null, ariaAtomic: nI, ariaAutoComplete: null, ariaBusy: nI, ariaChecked: nI, ariaColCount: nD, ariaColIndex: nD, ariaColSpan: nD, ariaControls: nE, ariaCurrent: null, ariaDescribedBy: nE, ariaDetails: null, ariaDisabled: nI, ariaDropEffect: nE, ariaErrorMessage: null, ariaExpanded: nI, ariaFlowTo: nE, ariaGrabbed: nI, ariaHasPopup: null, ariaHidden: nI, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: nE, ariaLevel: nD, ariaLive: null, ariaModal: nI, ariaMultiLine: nI, ariaMultiSelectable: nI, ariaOrientation: null, ariaOwns: nE, ariaPlaceholder: null, ariaPosInSet: nD, ariaPressed: nI, ariaReadOnly: nI, ariaRelevant: null, ariaRequired: nI, ariaRoleDescription: nE, ariaRowCount: nD, ariaRowIndex: nD, ariaRowSpan: nD, ariaSelected: nI, ariaSetSize: nD, ariaSort: null, ariaValueMax: nD, ariaValueMin: nD, ariaValueNow: nD, ariaValueText: null, role: null } }), nW = nR({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: nH, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: nM, acceptCharset: nE, accessKey: nE, action: null, allow: null, allowFullScreen: nT, allowPaymentRequest: nT, allowUserMedia: nT, alt: null, as: null, async: nT, autoCapitalize: null, autoComplete: nE, autoFocus: nT, autoPlay: nT, blocking: nE, capture: null, charSet: null, checked: nT, cite: null, className: nE, cols: nD, colSpan: null, content: null, contentEditable: nI, controls: nT, controlsList: nE, coords: nD | nM, crossOrigin: null, data: null, dateTime: null, decoding: null, default: nT, defer: nT, dir: null, dirName: null, disabled: nT, download: nL, draggable: nI, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: nT, formTarget: null, headers: nE, height: nD, hidden: nT, high: nD, href: null, hrefLang: null, htmlFor: nE, httpEquiv: nE, id: null, imageSizes: null, imageSrcSet: null, inert: nT, inputMode: null, integrity: null, is: null, isMap: nT, itemId: null, itemProp: nE, itemRef: nE, itemScope: nT, itemType: nE, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: nT, low: nD, manifest: null, max: null, maxLength: nD, media: null, method: null, min: null, minLength: nD, multiple: nT, muted: nT, name: null, nonce: null, noModule: nT, noValidate: nT, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: nT, optimum: nD, pattern: null, ping: nE, placeholder: null, playsInline: nT, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: nT, referrerPolicy: null, rel: nE, required: nT, reversed: nT, rows: nD, rowSpan: nD, sandbox: nE, scope: null, scoped: nT, seamless: nT, selected: nT, shadowRootClonable: nT, shadowRootDelegatesFocus: nT, shadowRootMode: null, shape: null, size: nD, sizes: null, slot: null, span: nD, spellCheck: nI, src: null, srcDoc: null, srcLang: null, srcSet: null, start: nD, step: null, style: null, tabIndex: nD, target: null, title: null, translate: null, type: null, typeMustMatch: nT, useMap: null, value: nI, width: nD, wrap: null, writingSuggestions: null, align: null, aLink: null, archive: nE, axis: null, background: null, bgColor: null, border: nD, borderColor: null, bottomMargin: nD, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: nT, declare: nT, event: null, face: null, frame: null, frameBorder: null, hSpace: nD, leftMargin: nD, link: null, longDesc: null, lowSrc: null, marginHeight: nD, marginWidth: nD, noResize: nT, noHref: nT, noShade: nT, noWrap: nT, object: null, profile: null, prompt: null, rev: null, rightMargin: nD, rules: null, scheme: null, scrolling: nI, standby: null, summary: null, text: null, topMargin: nD, valueType: null, version: null, vAlign: null, vLink: null, vSpace: nD, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: nT, disableRemotePlayback: nT, prefix: null, property: null, results: nD, security: null, unselectable: null } }), nY = nR({ space: "svg", attributes: { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", crossOrigin: "crossorigin", dataType: "datatype", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", hrefLang: "hreflang", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", horizOriginY: "horiz-origin-y", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", navDown: "nav-down", navDownLeft: "nav-down-left", navDownRight: "nav-down-right", navLeft: "nav-left", navNext: "nav-next", navPrev: "nav-prev", navRight: "nav-right", navUp: "nav-up", navUpLeft: "nav-up-left", navUpRight: "nav-up-right", onAbort: "onabort", onActivate: "onactivate", onAfterPrint: "onafterprint", onBeforePrint: "onbeforeprint", onBegin: "onbegin", onCancel: "oncancel", onCanPlay: "oncanplay", onCanPlayThrough: "oncanplaythrough", onChange: "onchange", onClick: "onclick", onClose: "onclose", onCopy: "oncopy", onCueChange: "oncuechange", onCut: "oncut", onDblClick: "ondblclick", onDrag: "ondrag", onDragEnd: "ondragend", onDragEnter: "ondragenter", onDragExit: "ondragexit", onDragLeave: "ondragleave", onDragOver: "ondragover", onDragStart: "ondragstart", onDrop: "ondrop", onDurationChange: "ondurationchange", onEmptied: "onemptied", onEnd: "onend", onEnded: "onended", onError: "onerror", onFocus: "onfocus", onFocusIn: "onfocusin", onFocusOut: "onfocusout", onHashChange: "onhashchange", onInput: "oninput", onInvalid: "oninvalid", onKeyDown: "onkeydown", onKeyPress: "onkeypress", onKeyUp: "onkeyup", onLoad: "onload", onLoadedData: "onloadeddata", onLoadedMetadata: "onloadedmetadata", onLoadStart: "onloadstart", onMessage: "onmessage", onMouseDown: "onmousedown", onMouseEnter: "onmouseenter", onMouseLeave: "onmouseleave", onMouseMove: "onmousemove", onMouseOut: "onmouseout", onMouseOver: "onmouseover", onMouseUp: "onmouseup", onMouseWheel: "onmousewheel", onOffline: "onoffline", onOnline: "ononline", onPageHide: "onpagehide", onPageShow: "onpageshow", onPaste: "onpaste", onPause: "onpause", onPlay: "onplay", onPlaying: "onplaying", onPopState: "onpopstate", onProgress: "onprogress", onRateChange: "onratechange", onRepeat: "onrepeat", onReset: "onreset", onResize: "onresize", onScroll: "onscroll", onSeeked: "onseeked", onSeeking: "onseeking", onSelect: "onselect", onShow: "onshow", onStalled: "onstalled", onStorage: "onstorage", onSubmit: "onsubmit", onSuspend: "onsuspend", onTimeUpdate: "ontimeupdate", onToggle: "ontoggle", onUnload: "onunload", onVolumeChange: "onvolumechange", onWaiting: "onwaiting", onZoom: "onzoom", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", referrerPolicy: "referrerpolicy", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDashArray: "stroke-dasharray", strokeDashOffset: "stroke-dashoffset", strokeLineCap: "stroke-linecap", strokeLineJoin: "stroke-linejoin", strokeMiterLimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", tabIndex: "tabindex", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", transformOrigin: "transform-origin", typeOf: "typeof", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", playbackOrder: "playbackorder", timelineBegin: "timelinebegin" }, transform: nV, properties: { about: nO, accentHeight: nD, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: nD, amplitude: nD, arabicForm: null, ascent: nD, attributeName: null, attributeType: null, azimuth: nD, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: nD, by: null, calcMode: null, capHeight: nD, className: nE, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: nD, diffuseConstant: nD, direction: null, display: null, dur: null, divisor: nD, dominantBaseline: null, download: nT, dx: null, dy: null, edgeMode: null, editable: null, elevation: nD, enableBackground: null, end: null, event: null, exponent: nD, externalResourcesRequired: null, fill: null, fillOpacity: nD, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: nM, g2: nM, glyphName: nM, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: nD, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: nD, horizOriginX: nD, horizOriginY: nD, id: null, ideographic: nD, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: nD, k: nD, k1: nD, k2: nD, k3: nD, k4: nD, kernelMatrix: nO, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: nD, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: nD, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: nD, overlineThickness: nD, paintOrder: null, panose1: null, path: null, pathLength: nD, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: nE, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: nD, pointsAtY: nD, pointsAtZ: nD, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: nO, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: nO, rev: nO, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: nO, requiredFeatures: nO, requiredFonts: nO, requiredFormats: nO, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: nD, specularExponent: nD, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: nD, strikethroughThickness: nD, string: null, stroke: null, strokeDashArray: nO, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: nD, strokeOpacity: nD, strokeWidth: null, style: null, surfaceScale: nD, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: nO, tabIndex: nD, tableValues: null, target: null, targetX: nD, targetY: nD, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: nO, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: nD, underlineThickness: nD, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: nD, values: null, vAlphabetic: nD, vMathematical: nD, vectorEffect: null, vHanging: nD, vIdeographic: nD, version: null, vertAdvY: nD, vertOriginX: nD, vertOriginY: nD, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: nD, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null } }), nQ = /^data[-\w.:]+$/i, n$ = /-[a-z]/g, nK = /[A-Z]/g;
function nX(e10) {
  return "-" + e10.toLowerCase();
}
function nZ(e10) {
  return e10.charAt(1).toUpperCase();
}
let nJ = { classId: "classID", dataType: "datatype", itemId: "itemID", strokeDashArray: "strokeDasharray", strokeDashOffset: "strokeDashoffset", strokeLineCap: "strokeLinecap", strokeLineJoin: "strokeLinejoin", strokeMiterLimit: "strokeMiterlimit", typeOf: "typeof", xLinkActuate: "xlinkActuate", xLinkArcRole: "xlinkArcrole", xLinkHref: "xlinkHref", xLinkRole: "xlinkRole", xLinkShow: "xlinkShow", xLinkTitle: "xlinkTitle", xLinkType: "xlinkType", xmlnsXLink: "xmlnsXlink" }, nG = nS([nB, n_, nU, nq, nW], "html"), n1 = nS([nB, n_, nU, nq, nY], "svg");
var n0 = {}, n2 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n4 = /\n/g, n3 = /^\s*/, n5 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, n9 = /^:\s*/, n6 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, n8 = /^[;\s]*/, n7 = /^\s+|\s+$/g;
function re(e10) {
  return e10 ? e10.replace(n7, "") : "";
}
var rt = e && e.__importDefault || function(e10) {
  return e10 && e10.__esModule ? e10 : { default: e10 };
};
Object.defineProperty(n0, "__esModule", { value: true });
var rn = rt(function(e10, t10) {
  if ("string" != typeof e10)
    throw TypeError("First argument must be a string");
  if (!e10)
    return [];
  t10 = t10 || {};
  var n10 = 1, r2 = 1;
  function i2(e11) {
    var t11 = e11.match(n4);
    t11 && (n10 += t11.length);
    var i3 = e11.lastIndexOf("\n");
    r2 = ~i3 ? e11.length - i3 : r2 + e11.length;
  }
  function l2() {
    var e11 = { line: n10, column: r2 };
    return function(t11) {
      return t11.position = new o2(e11), u2(n3), t11;
    };
  }
  function o2(e11) {
    this.start = e11, this.end = { line: n10, column: r2 }, this.source = t10.source;
  }
  function a2(i3) {
    var l3 = Error(t10.source + ":" + n10 + ":" + r2 + ": " + i3);
    if (l3.reason = i3, l3.filename = t10.source, l3.line = n10, l3.column = r2, l3.source = e10, t10.silent)
      ;
    else
      throw l3;
  }
  function u2(t11) {
    var n11 = t11.exec(e10);
    if (n11) {
      var r3 = n11[0];
      return i2(r3), e10 = e10.slice(r3.length), n11;
    }
  }
  function c2(e11) {
    var t11;
    for (e11 = e11 || []; t11 = s2(); )
      false !== t11 && e11.push(t11);
    return e11;
  }
  function s2() {
    var t11 = l2();
    if ("/" == e10.charAt(0) && "*" == e10.charAt(1)) {
      for (var n11 = 2; "" != e10.charAt(n11) && ("*" != e10.charAt(n11) || "/" != e10.charAt(n11 + 1)); )
        ++n11;
      if (n11 += 2, "" === e10.charAt(n11 - 1))
        return a2("End of comment missing");
      var o3 = e10.slice(2, n11 - 2);
      return r2 += 2, i2(o3), e10 = e10.slice(n11), r2 += 2, t11({ type: "comment", comment: o3 });
    }
  }
  return o2.prototype.content = e10, u2(n3), function() {
    var e11, t11 = [];
    for (c2(t11); e11 = function() {
      var e12 = l2(), t12 = u2(n5);
      if (t12) {
        if (s2(), !u2(n9))
          return a2("property missing ':'");
        var n11 = u2(n6), r3 = e12({ type: "declaration", property: re(t12[0].replace(n2, "")), value: n11 ? re(n11[0].replace(n2, "")) : "" });
        return u2(n8), r3;
      }
    }(); )
      false !== e11 && (t11.push(e11), c2(t11));
    return t11;
  }();
}), rr = n0.default = function(e10, t10) {
  var n10 = null;
  if (!e10 || "string" != typeof e10)
    return n10;
  var r2 = (0, rn.default)(e10), i2 = "function" == typeof t10;
  return r2.forEach(function(e11) {
    if ("declaration" === e11.type) {
      var r3 = e11.property, l2 = e11.value;
      i2 ? t10(r3, l2, e11) : l2 && ((n10 = n10 || {})[r3] = l2);
    }
  }), n10;
};
let ri = rr.default || rr, rl = ra("end"), ro = ra("start");
function ra(e10) {
  return function(t10) {
    let n10 = t10 && t10.position && t10.position[e10] || {};
    if ("number" == typeof n10.line && n10.line > 0 && "number" == typeof n10.column && n10.column > 0)
      return { line: n10.line, column: n10.column, offset: "number" == typeof n10.offset && n10.offset > -1 ? n10.offset : void 0 };
  };
}
class ru extends Error {
  constructor(e10, t10, n10) {
    super(), "string" == typeof t10 && (n10 = t10, t10 = void 0);
    let r2 = "", i2 = {}, l2 = false;
    if (t10 && (i2 = "line" in t10 && "column" in t10 ? { place: t10 } : "start" in t10 && "end" in t10 ? { place: t10 } : "type" in t10 ? { ancestors: [t10], place: t10.position } : { ...t10 }), "string" == typeof e10 ? r2 = e10 : !i2.cause && e10 && (l2 = true, r2 = e10.message, i2.cause = e10), !i2.ruleId && !i2.source && "string" == typeof n10) {
      let e11 = n10.indexOf(":");
      -1 === e11 ? i2.ruleId = n10 : (i2.source = n10.slice(0, e11), i2.ruleId = n10.slice(e11 + 1));
    }
    if (!i2.place && i2.ancestors && i2.ancestors) {
      let e11 = i2.ancestors[i2.ancestors.length - 1];
      e11 && (i2.place = e11.position);
    }
    let o2 = i2.place && "start" in i2.place ? i2.place.start : i2.place;
    this.ancestors = i2.ancestors || void 0, this.cause = i2.cause || void 0, this.column = o2 ? o2.column : void 0, this.fatal = void 0, this.file, this.message = r2, this.line = o2 ? o2.line : void 0, this.name = eP(i2.place) || "1:1", this.place = i2.place || void 0, this.reason = this.message, this.ruleId = i2.ruleId || void 0, this.source = i2.source || void 0, this.stack = l2 && i2.cause && "string" == typeof i2.cause.stack ? i2.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
ru.prototype.file = "", ru.prototype.name = "", ru.prototype.reason = "", ru.prototype.message = "", ru.prototype.stack = "", ru.prototype.column = void 0, ru.prototype.line = void 0, ru.prototype.ancestors = void 0, ru.prototype.cause = void 0, ru.prototype.fatal = void 0, ru.prototype.place = void 0, ru.prototype.ruleId = void 0, ru.prototype.source = void 0;
let rc = {}.hasOwnProperty, rs = /* @__PURE__ */ new Map(), rf = /[A-Z]/g, rp = /-([a-z])/g, rd = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), rh = /* @__PURE__ */ new Set(["td", "th"]), rm = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function rg(e10, t10, n10) {
  return "element" === t10.type ? function(e11, t11, n11) {
    let r2 = e11.schema, i2 = r2;
    "svg" === t11.tagName.toLowerCase() && "html" === r2.space && (i2 = n1, e11.schema = i2), e11.ancestors.push(t11);
    let l2 = rv(e11, t11.tagName, false), o2 = function(e12, t12) {
      let n12, r3;
      let i3 = {};
      for (r3 in t12.properties)
        if ("children" !== r3 && rc.call(t12.properties, r3)) {
          let l3 = function(e13, t13, n13) {
            let r4 = function(e14, t14) {
              let n14 = nC(t14), r5 = t14, i4 = nw;
              if (n14 in e14.normal)
                return e14.property[e14.normal[n14]];
              if (n14.length > 4 && "data" === n14.slice(0, 4) && nQ.test(t14)) {
                if ("-" === t14.charAt(4)) {
                  let e15 = t14.slice(5).replace(n$, nZ);
                  r5 = "data" + e15.charAt(0).toUpperCase() + e15.slice(1);
                } else {
                  let e15 = t14.slice(4);
                  if (!n$.test(e15)) {
                    let n15 = e15.replace(nK, nX);
                    "-" !== n15.charAt(0) && (n15 = "-" + n15), t14 = "data" + n15;
                  }
                }
                i4 = nN;
              }
              return new i4(r5, t14);
            }(e13.schema, t13);
            if (!(null == n13 || "number" == typeof n13 && Number.isNaN(n13))) {
              if (Array.isArray(n13) && (n13 = r4.commaSeparated ? function(e14, t14) {
                let n14 = {};
                return ("" === e14[e14.length - 1] ? [...e14, ""] : e14).join((n14.padRight ? " " : "") + "," + (false === n14.padLeft ? "" : " ")).trim();
              }(n13) : n13.join(" ").trim()), "style" === r4.property) {
                let t14 = "object" == typeof n13 ? n13 : function(e14, t15) {
                  let n14 = {};
                  try {
                    ri(t15, function(e15, t16) {
                      let r5 = e15;
                      "--" !== r5.slice(0, 2) && ("-ms-" === r5.slice(0, 4) && (r5 = "ms-" + r5.slice(4)), r5 = r5.replace(rp, rS)), n14[r5] = t16;
                    });
                  } catch (t16) {
                    if (!e14.ignoreInvalidStyle) {
                      let n15 = new ru("Cannot parse `style` attribute", { ancestors: e14.ancestors, cause: t16, ruleId: "style", source: "hast-util-to-jsx-runtime" });
                      throw n15.file = e14.filePath || void 0, n15.url = rm + "#cannot-parse-style-attribute", n15;
                    }
                  }
                  return n14;
                }(e13, String(n13));
                return "css" === e13.stylePropertyNameCase && (t14 = function(e14) {
                  let t15;
                  let n14 = {};
                  for (t15 in e14)
                    rc.call(e14, t15) && (n14[function(e15) {
                      let t16 = e15.replace(rf, rC);
                      return "ms-" === t16.slice(0, 3) && (t16 = "-" + t16), t16;
                    }(t15)] = e14[t15]);
                  return n14;
                }(t14)), ["style", t14];
              }
              return ["react" === e13.elementAttributeNameCase && r4.space ? nJ[r4.property] || r4.property : r4.attribute, n13];
            }
          }(e12, r3, t12.properties[r3]);
          if (l3) {
            let [r4, o3] = l3;
            e12.tableCellAlignToStyle && "align" === r4 && "string" == typeof o3 && rh.has(t12.tagName) ? n12 = o3 : i3[r4] = o3;
          }
        }
      return n12 && ((i3.style || (i3.style = {}))["css" === e12.stylePropertyNameCase ? "text-align" : "textAlign"] = n12), i3;
    }(e11, t11), a2 = rk(e11, t11);
    return rd.has(t11.tagName) && (a2 = a2.filter(function(e12) {
      return "string" != typeof e12 || !("object" == typeof e12 ? "text" === e12.type && nv(e12.value) : nv(e12));
    })), ry(e11, o2, l2, t11), rx(o2, a2), e11.ancestors.pop(), e11.schema = r2, e11.create(t11, l2, o2, n11);
  }(e10, t10, n10) : "mdxFlowExpression" === t10.type || "mdxTextExpression" === t10.type ? function(e11, t11) {
    if (t11.data && t11.data.estree && e11.evaluater) {
      let n11 = t11.data.estree.body[0];
      return n11.type, e11.evaluater.evaluateExpression(n11.expression);
    }
    rb(e11, t11.position);
  }(e10, t10) : "mdxJsxFlowElement" === t10.type || "mdxJsxTextElement" === t10.type ? function(e11, t11, n11) {
    let r2 = e11.schema, i2 = r2;
    "svg" === t11.name && "html" === r2.space && (i2 = n1, e11.schema = i2), e11.ancestors.push(t11);
    let l2 = null === t11.name ? e11.Fragment : rv(e11, t11.name, true), o2 = function(e12, t12) {
      let n12 = {};
      for (let r3 of t12.attributes)
        if ("mdxJsxExpressionAttribute" === r3.type) {
          if (r3.data && r3.data.estree && e12.evaluater) {
            let t13 = r3.data.estree.body[0];
            t13.type;
            let i3 = t13.expression;
            i3.type;
            let l3 = i3.properties[0];
            l3.type, Object.assign(n12, e12.evaluater.evaluateExpression(l3.argument));
          } else
            rb(e12, t12.position);
        } else {
          let i3;
          let l3 = r3.name;
          if (r3.value && "object" == typeof r3.value) {
            if (r3.value.data && r3.value.data.estree && e12.evaluater) {
              let t13 = r3.value.data.estree.body[0];
              t13.type, i3 = e12.evaluater.evaluateExpression(t13.expression);
            } else
              rb(e12, t12.position);
          } else
            i3 = null === r3.value || r3.value;
          n12[l3] = i3;
        }
      return n12;
    }(e11, t11), a2 = rk(e11, t11);
    return ry(e11, o2, l2, t11), rx(o2, a2), e11.ancestors.pop(), e11.schema = r2, e11.create(t11, l2, o2, n11);
  }(e10, t10, n10) : "mdxjsEsm" === t10.type ? function(e11, t11) {
    if (t11.data && t11.data.estree && e11.evaluater)
      return e11.evaluater.evaluateProgram(t11.data.estree);
    rb(e11, t11.position);
  }(e10, t10) : "root" === t10.type ? function(e11, t11, n11) {
    let r2 = {};
    return rx(r2, rk(e11, t11)), e11.create(t11, e11.Fragment, r2, n11);
  }(e10, t10, n10) : "text" === t10.type ? t10.value : void 0;
}
function ry(e10, t10, n10, r2) {
  "string" != typeof n10 && n10 !== e10.Fragment && e10.passNode && (t10.node = r2);
}
function rx(e10, t10) {
  if (t10.length > 0) {
    let n10 = t10.length > 1 ? t10 : t10[0];
    n10 && (e10.children = n10);
  }
}
function rk(e10, t10) {
  let n10 = [], r2 = -1, i2 = e10.passKeys ? /* @__PURE__ */ new Map() : rs;
  for (; ++r2 < t10.children.length; ) {
    let l2;
    let o2 = t10.children[r2];
    if (e10.passKeys) {
      let e11 = "element" === o2.type ? o2.tagName : "mdxJsxFlowElement" === o2.type || "mdxJsxTextElement" === o2.type ? o2.name : void 0;
      if (e11) {
        let t11 = i2.get(e11) || 0;
        l2 = e11 + "-" + t11, i2.set(e11, t11 + 1);
      }
    }
    let a2 = rg(e10, o2, l2);
    void 0 !== a2 && n10.push(a2);
  }
  return n10;
}
function rv(e10, t10, n10) {
  let r2;
  if (n10) {
    if (t10.includes(".")) {
      let e11;
      let n11 = t10.split("."), i2 = -1;
      for (; ++i2 < n11.length; ) {
        let t11 = nx(n11[i2]) ? { type: "Identifier", name: n11[i2] } : { type: "Literal", value: n11[i2] };
        e11 = e11 ? { type: "MemberExpression", object: e11, property: t11, computed: !!(i2 && "Literal" === t11.type), optional: false } : t11;
      }
      r2 = e11;
    } else
      r2 = nx(t10) && !/^[a-z]/.test(t10) ? { type: "Identifier", name: t10 } : { type: "Literal", value: t10 };
  } else
    r2 = { type: "Literal", value: t10 };
  if ("Literal" === r2.type) {
    let t11 = r2.value;
    return rc.call(e10.components, t11) ? e10.components[t11] : t11;
  }
  if (e10.evaluater)
    return e10.evaluater.evaluateExpression(r2);
  rb(e10);
}
function rb(e10, t10) {
  let n10 = new ru("Cannot handle MDX estrees without `createEvaluater`", { ancestors: e10.ancestors, place: t10, ruleId: "mdx-estree", source: "hast-util-to-jsx-runtime" });
  throw n10.file = e10.filePath || void 0, n10.url = rm + "#cannot-handle-mdx-estrees-without-createevaluater", n10;
}
function rS(e10, t10) {
  return t10.toUpperCase();
}
function rC(e10) {
  return "-" + e10.toLowerCase();
}
function rw(e10, t10) {
  let n10 = t10.referenceType, r2 = "]";
  if ("collapsed" === n10 ? r2 += "[]" : "full" === n10 && (r2 += "[" + (t10.label || t10.identifier) + "]"), "imageReference" === t10.type)
    return [{ type: "text", value: "![" + t10.alt + r2 }];
  let i2 = e10.all(t10), l2 = i2[0];
  l2 && "text" === l2.type ? l2.value = "[" + l2.value : i2.unshift({ type: "text", value: "[" });
  let o2 = i2[i2.length - 1];
  return o2 && "text" === o2.type ? o2.value += r2 : i2.push({ type: "text", value: r2 }), i2;
}
function rA(e10) {
  let t10 = e10.spread;
  return null == t10 ? e10.children.length > 1 : t10;
}
function rT(e10, t10, n10) {
  let r2 = 0, i2 = e10.length;
  if (t10) {
    let t11 = e10.codePointAt(r2);
    for (; 9 === t11 || 32 === t11; )
      r2++, t11 = e10.codePointAt(r2);
  }
  if (n10) {
    let t11 = e10.codePointAt(i2 - 1);
    for (; 9 === t11 || 32 === t11; )
      i2--, t11 = e10.codePointAt(i2 - 1);
  }
  return i2 > r2 ? e10.slice(r2, i2) : "";
}
let rI = { blockquote: function(e10, t10) {
  let n10 = { type: "element", tagName: "blockquote", properties: {}, children: e10.wrap(e10.all(t10), true) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, break: function(e10, t10) {
  let n10 = { type: "element", tagName: "br", properties: {}, children: [] };
  return e10.patch(t10, n10), [e10.applyData(t10, n10), { type: "text", value: "\n" }];
}, code: function(e10, t10) {
  let n10 = t10.value ? t10.value + "\n" : "", r2 = {};
  t10.lang && (r2.className = ["language-" + t10.lang]);
  let i2 = { type: "element", tagName: "code", properties: r2, children: [{ type: "text", value: n10 }] };
  return t10.meta && (i2.data = { meta: t10.meta }), e10.patch(t10, i2), i2 = { type: "element", tagName: "pre", properties: {}, children: [i2 = e10.applyData(t10, i2)] }, e10.patch(t10, i2), i2;
}, delete: function(e10, t10) {
  let n10 = { type: "element", tagName: "del", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, emphasis: function(e10, t10) {
  let n10 = { type: "element", tagName: "em", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, footnoteReference: function(e10, t10) {
  let n10;
  let r2 = "string" == typeof e10.options.clobberPrefix ? e10.options.clobberPrefix : "user-content-", i2 = String(t10.identifier).toUpperCase(), l2 = P(i2.toLowerCase()), o2 = e10.footnoteOrder.indexOf(i2), a2 = e10.footnoteCounts.get(i2);
  void 0 === a2 ? (a2 = 0, e10.footnoteOrder.push(i2), n10 = e10.footnoteOrder.length) : n10 = o2 + 1, a2 += 1, e10.footnoteCounts.set(i2, a2);
  let u2 = { type: "element", tagName: "a", properties: { href: "#" + r2 + "fn-" + l2, id: r2 + "fnref-" + l2 + (a2 > 1 ? "-" + a2 : ""), dataFootnoteRef: true, ariaDescribedBy: ["footnote-label"] }, children: [{ type: "text", value: String(n10) }] };
  e10.patch(t10, u2);
  let c2 = { type: "element", tagName: "sup", properties: {}, children: [u2] };
  return e10.patch(t10, c2), e10.applyData(t10, c2);
}, heading: function(e10, t10) {
  let n10 = { type: "element", tagName: "h" + t10.depth, properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, html: function(e10, t10) {
  if (e10.options.allowDangerousHtml) {
    let n10 = { type: "raw", value: t10.value };
    return e10.patch(t10, n10), e10.applyData(t10, n10);
  }
}, imageReference: function(e10, t10) {
  let n10 = String(t10.identifier).toUpperCase(), r2 = e10.definitionById.get(n10);
  if (!r2)
    return rw(e10, t10);
  let i2 = { src: P(r2.url || ""), alt: t10.alt };
  null !== r2.title && void 0 !== r2.title && (i2.title = r2.title);
  let l2 = { type: "element", tagName: "img", properties: i2, children: [] };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, image: function(e10, t10) {
  let n10 = { src: P(t10.url) };
  null !== t10.alt && void 0 !== t10.alt && (n10.alt = t10.alt), null !== t10.title && void 0 !== t10.title && (n10.title = t10.title);
  let r2 = { type: "element", tagName: "img", properties: n10, children: [] };
  return e10.patch(t10, r2), e10.applyData(t10, r2);
}, inlineCode: function(e10, t10) {
  let n10 = { type: "text", value: t10.value.replace(/\r?\n|\r/g, " ") };
  e10.patch(t10, n10);
  let r2 = { type: "element", tagName: "code", properties: {}, children: [n10] };
  return e10.patch(t10, r2), e10.applyData(t10, r2);
}, linkReference: function(e10, t10) {
  let n10 = String(t10.identifier).toUpperCase(), r2 = e10.definitionById.get(n10);
  if (!r2)
    return rw(e10, t10);
  let i2 = { href: P(r2.url || "") };
  null !== r2.title && void 0 !== r2.title && (i2.title = r2.title);
  let l2 = { type: "element", tagName: "a", properties: i2, children: e10.all(t10) };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, link: function(e10, t10) {
  let n10 = { href: P(t10.url) };
  null !== t10.title && void 0 !== t10.title && (n10.title = t10.title);
  let r2 = { type: "element", tagName: "a", properties: n10, children: e10.all(t10) };
  return e10.patch(t10, r2), e10.applyData(t10, r2);
}, listItem: function(e10, t10, n10) {
  let r2 = e10.all(t10), i2 = n10 ? function(e11) {
    let t11 = false;
    if ("list" === e11.type) {
      t11 = e11.spread || false;
      let n11 = e11.children, r3 = -1;
      for (; !t11 && ++r3 < n11.length; )
        t11 = rA(n11[r3]);
    }
    return t11;
  }(n10) : rA(t10), l2 = {}, o2 = [];
  if ("boolean" == typeof t10.checked) {
    let e11;
    let n11 = r2[0];
    n11 && "element" === n11.type && "p" === n11.tagName ? e11 = n11 : (e11 = { type: "element", tagName: "p", properties: {}, children: [] }, r2.unshift(e11)), e11.children.length > 0 && e11.children.unshift({ type: "text", value: " " }), e11.children.unshift({ type: "element", tagName: "input", properties: { type: "checkbox", checked: t10.checked, disabled: true }, children: [] }), l2.className = ["task-list-item"];
  }
  let a2 = -1;
  for (; ++a2 < r2.length; ) {
    let e11 = r2[a2];
    (i2 || 0 !== a2 || "element" !== e11.type || "p" !== e11.tagName) && o2.push({ type: "text", value: "\n" }), "element" !== e11.type || "p" !== e11.tagName || i2 ? o2.push(e11) : o2.push(...e11.children);
  }
  let u2 = r2[r2.length - 1];
  u2 && (i2 || "element" !== u2.type || "p" !== u2.tagName) && o2.push({ type: "text", value: "\n" });
  let c2 = { type: "element", tagName: "li", properties: l2, children: o2 };
  return e10.patch(t10, c2), e10.applyData(t10, c2);
}, list: function(e10, t10) {
  let n10 = {}, r2 = e10.all(t10), i2 = -1;
  for ("number" == typeof t10.start && 1 !== t10.start && (n10.start = t10.start); ++i2 < r2.length; ) {
    let e11 = r2[i2];
    if ("element" === e11.type && "li" === e11.tagName && e11.properties && Array.isArray(e11.properties.className) && e11.properties.className.includes("task-list-item")) {
      n10.className = ["contains-task-list"];
      break;
    }
  }
  let l2 = { type: "element", tagName: t10.ordered ? "ol" : "ul", properties: n10, children: e10.wrap(r2, true) };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, paragraph: function(e10, t10) {
  let n10 = { type: "element", tagName: "p", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, root: function(e10, t10) {
  let n10 = { type: "root", children: e10.wrap(e10.all(t10)) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, strong: function(e10, t10) {
  let n10 = { type: "element", tagName: "strong", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, table: function(e10, t10) {
  let n10 = e10.all(t10), r2 = n10.shift(), i2 = [];
  if (r2) {
    let n11 = { type: "element", tagName: "thead", properties: {}, children: e10.wrap([r2], true) };
    e10.patch(t10.children[0], n11), i2.push(n11);
  }
  if (n10.length > 0) {
    let r3 = { type: "element", tagName: "tbody", properties: {}, children: e10.wrap(n10, true) }, l3 = ro(t10.children[1]), o2 = rl(t10.children[t10.children.length - 1]);
    l3 && o2 && (r3.position = { start: l3, end: o2 }), i2.push(r3);
  }
  let l2 = { type: "element", tagName: "table", properties: {}, children: e10.wrap(i2, true) };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, tableCell: function(e10, t10) {
  let n10 = { type: "element", tagName: "td", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, tableRow: function(e10, t10, n10) {
  let r2 = n10 ? n10.children : void 0, i2 = 0 === (r2 ? r2.indexOf(t10) : 1) ? "th" : "td", l2 = n10 && "table" === n10.type ? n10.align : void 0, o2 = l2 ? l2.length : t10.children.length, a2 = -1, u2 = [];
  for (; ++a2 < o2; ) {
    let n11 = t10.children[a2], r3 = {}, o3 = l2 ? l2[a2] : void 0;
    o3 && (r3.align = o3);
    let c3 = { type: "element", tagName: i2, properties: r3, children: [] };
    n11 && (c3.children = e10.all(n11), e10.patch(n11, c3), c3 = e10.applyData(n11, c3)), u2.push(c3);
  }
  let c2 = { type: "element", tagName: "tr", properties: {}, children: e10.wrap(u2, true) };
  return e10.patch(t10, c2), e10.applyData(t10, c2);
}, text: function(e10, t10) {
  let n10 = { type: "text", value: function(e11) {
    let t11 = String(e11), n11 = /\r?\n|\r/g, r2 = n11.exec(t11), i2 = 0, l2 = [];
    for (; r2; )
      l2.push(rT(t11.slice(i2, r2.index), i2 > 0, true), r2[0]), i2 = r2.index + r2[0].length, r2 = n11.exec(t11);
    return l2.push(rT(t11.slice(i2), i2 > 0, false)), l2.join("");
  }(String(t10.value)) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, thematicBreak: function(e10, t10) {
  let n10 = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, toml: rL, yaml: rL, definition: rL, footnoteDefinition: rL };
function rL() {
}
let rD = "object" == typeof self ? self : globalThis, rE = (e10, t10) => {
  let n10 = (t11, n11) => (e10.set(n11, t11), t11), r2 = (i2) => {
    if (e10.has(i2))
      return e10.get(i2);
    let [l2, o2] = t10[i2];
    switch (l2) {
      case 0:
      case -1:
        return n10(o2, i2);
      case 1: {
        let e11 = n10([], i2);
        for (let t11 of o2)
          e11.push(r2(t11));
        return e11;
      }
      case 2: {
        let e11 = n10({}, i2);
        for (let [t11, n11] of o2)
          e11[r2(t11)] = r2(n11);
        return e11;
      }
      case 3:
        return n10(new Date(o2), i2);
      case 4: {
        let { source: e11, flags: t11 } = o2;
        return n10(new RegExp(e11, t11), i2);
      }
      case 5: {
        let e11 = n10(/* @__PURE__ */ new Map(), i2);
        for (let [t11, n11] of o2)
          e11.set(r2(t11), r2(n11));
        return e11;
      }
      case 6: {
        let e11 = n10(/* @__PURE__ */ new Set(), i2);
        for (let t11 of o2)
          e11.add(r2(t11));
        return e11;
      }
      case 7: {
        let { name: e11, message: t11 } = o2;
        return n10(new rD[e11](t11), i2);
      }
      case 8:
        return n10(BigInt(o2), i2);
      case "BigInt":
        return n10(Object(BigInt(o2)), i2);
    }
    return n10(new rD[l2](o2), i2);
  };
  return r2;
}, rM = (e10) => rE(/* @__PURE__ */ new Map(), e10)(0), { toString: rO } = {}, { keys: rF } = Object, rz = (e10) => {
  let t10 = typeof e10;
  if ("object" !== t10 || !e10)
    return [0, t10];
  let n10 = rO.call(e10).slice(8, -1);
  switch (n10) {
    case "Array":
      return [1, ""];
    case "Object":
      return [2, ""];
    case "Date":
      return [3, ""];
    case "RegExp":
      return [4, ""];
    case "Map":
      return [5, ""];
    case "Set":
      return [6, ""];
  }
  return n10.includes("Array") ? [1, n10] : n10.includes("Error") ? [7, n10] : [2, n10];
}, rP = (e10) => {
  let [t10, n10] = e10;
  return 0 === t10 && ("function" === n10 || "symbol" === n10);
}, rN = (e10, t10, n10, r2) => {
  let i2 = (e11, t11) => {
    let i3 = r2.push(e11) - 1;
    return n10.set(t11, i3), i3;
  }, l2 = (r3) => {
    if (n10.has(r3))
      return n10.get(r3);
    let [o2, a2] = rz(r3);
    switch (o2) {
      case 0: {
        let t11 = r3;
        switch (a2) {
          case "bigint":
            o2 = 8, t11 = r3.toString();
            break;
          case "function":
          case "symbol":
            if (e10)
              throw TypeError("unable to serialize " + a2);
            t11 = null;
            break;
          case "undefined":
            return i2([-1], r3);
        }
        return i2([o2, t11], r3);
      }
      case 1: {
        if (a2)
          return i2([a2, [...r3]], r3);
        let e11 = [], t11 = i2([o2, e11], r3);
        for (let t12 of r3)
          e11.push(l2(t12));
        return t11;
      }
      case 2: {
        if (a2)
          switch (a2) {
            case "BigInt":
              return i2([a2, r3.toString()], r3);
            case "Boolean":
            case "Number":
            case "String":
              return i2([a2, r3.valueOf()], r3);
          }
        if (t10 && "toJSON" in r3)
          return l2(r3.toJSON());
        let n11 = [], u3 = i2([o2, n11], r3);
        for (let t11 of rF(r3))
          (e10 || !rP(rz(r3[t11]))) && n11.push([l2(t11), l2(r3[t11])]);
        return u3;
      }
      case 3:
        return i2([o2, r3.toISOString()], r3);
      case 4: {
        let { source: e11, flags: t11 } = r3;
        return i2([o2, { source: e11, flags: t11 }], r3);
      }
      case 5: {
        let t11 = [], n11 = i2([o2, t11], r3);
        for (let [n12, i3] of r3)
          (e10 || !(rP(rz(n12)) || rP(rz(i3)))) && t11.push([l2(n12), l2(i3)]);
        return n11;
      }
      case 6: {
        let t11 = [], n11 = i2([o2, t11], r3);
        for (let n12 of r3)
          (e10 || !rP(rz(n12))) && t11.push(l2(n12));
        return n11;
      }
    }
    let { message: u2 } = r3;
    return i2([o2, { name: a2, message: u2 }], r3);
  };
  return l2;
}, rj = function(e10) {
  let { json: t10, lossy: n10 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = [];
  return rN(!(t10 || n10), !!t10, /* @__PURE__ */ new Map(), r2)(e10), r2;
}, rR = "function" == typeof structuredClone ? (e10, t10) => t10 && ("json" in t10 || "lossy" in t10) ? rM(rj(e10, t10)) : structuredClone(e10) : (e10, t10) => rM(rj(e10, t10));
function r_(e10, t10) {
  let n10 = [{ type: "text", value: "↩" }];
  return t10 > 1 && n10.push({ type: "element", tagName: "sup", properties: {}, children: [{ type: "text", value: String(t10) }] }), n10;
}
function rB(e10, t10) {
  return "Back to reference " + (e10 + 1) + (t10 > 1 ? "-" + t10 : "");
}
let rV = {}.hasOwnProperty, rH = {};
function rU(e10, t10) {
  e10.position && (t10.position = function(e11) {
    let t11 = ro(e11), n10 = rl(e11);
    if (t11 && n10)
      return { start: t11, end: n10 };
  }(e10));
}
function rq(e10, t10) {
  let n10 = t10;
  if (e10 && e10.data) {
    let t11 = e10.data.hName, r2 = e10.data.hChildren, i2 = e10.data.hProperties;
    "string" == typeof t11 && ("element" === n10.type ? n10.tagName = t11 : n10 = { type: "element", tagName: t11, properties: {}, children: "children" in n10 ? n10.children : [n10] }), "element" === n10.type && i2 && Object.assign(n10.properties, rR(i2)), "children" in n10 && n10.children && null != r2 && (n10.children = r2);
  }
  return n10;
}
function rW(e10, t10) {
  let n10 = [], r2 = -1;
  for (t10 && n10.push({ type: "text", value: "\n" }); ++r2 < e10.length; )
    r2 && n10.push({ type: "text", value: "\n" }), n10.push(e10[r2]);
  return t10 && e10.length > 0 && n10.push({ type: "text", value: "\n" }), n10;
}
function rY(e10) {
  let t10 = 0, n10 = e10.charCodeAt(t10);
  for (; 9 === n10 || 32 === n10; )
    t10++, n10 = e10.charCodeAt(t10);
  return e10.slice(t10);
}
let rQ = Object.assign(a({ text: i(), components: l(i(), o()).optional() }, (e10, i2) => {
  let {} = i2;
  return u(e10.text$, s(), c((i3) => {
    var l2;
    let o2 = function(e11, t10) {
      let n10 = function(e12, t11) {
        var n11, r3;
        let i5, l4, o3;
        let a2 = t11 || rH, u2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map(), s2 = { all: function(e13) {
          let t12 = [];
          if ("children" in e13) {
            let n12 = e13.children, r4 = -1;
            for (; ++r4 < n12.length; ) {
              let i6 = s2.one(n12[r4], e13);
              if (i6) {
                if (r4 && "break" === n12[r4 - 1].type && (Array.isArray(i6) || "text" !== i6.type || (i6.value = rY(i6.value)), !Array.isArray(i6) && "element" === i6.type)) {
                  let e14 = i6.children[0];
                  e14 && "text" === e14.type && (e14.value = rY(e14.value));
                }
                Array.isArray(i6) ? t12.push(...i6) : t12.push(i6);
              }
            }
          }
          return t12;
        }, applyData: rq, definitionById: u2, footnoteById: c2, footnoteCounts: /* @__PURE__ */ new Map(), footnoteOrder: [], handlers: { ...rI, ...a2.handlers }, one: function(e13, t12) {
          let n12 = e13.type, r4 = s2.handlers[n12];
          if (rV.call(s2.handlers, n12) && r4)
            return r4(s2, e13, t12);
          if (s2.options.passThrough && s2.options.passThrough.includes(n12)) {
            if ("children" in e13) {
              let { children: t13, ...n13 } = e13, r5 = rR(n13);
              return r5.children = s2.all(e13), r5;
            }
            return rR(e13);
          }
          return (s2.options.unknownHandler || function(e14, t13) {
            let n13 = t13.data || {}, r5 = "value" in t13 && !(rV.call(n13, "hProperties") || rV.call(n13, "hChildren")) ? { type: "text", value: t13.value } : { type: "element", tagName: "div", properties: {}, children: e14.all(t13) };
            return e14.patch(t13, r5), e14.applyData(t13, r5);
          })(s2, e13, t12);
        }, options: a2, patch: rU, wrap: rW };
        return "function" == typeof (n11 = function(e13) {
          if ("definition" === e13.type || "footnoteDefinition" === e13.type) {
            let t12 = "definition" === e13.type ? u2 : c2, n12 = String(e13.identifier).toUpperCase();
            t12.has(n12) || t12.set(n12, e13);
          }
        }) ? (l4 = void 0, o3 = n11, i5 = r3) : (l4 = n11, o3 = r3, i5 = void 0), eQ(e12, l4, function(e13, t12) {
          let n12 = t12[t12.length - 1], r4 = n12 ? n12.children.indexOf(e13) : void 0;
          return o3(e13, r4, n12);
        }, i5), s2;
      }(e11, void 0), r2 = n10.one(e11, void 0), i4 = function(e12) {
        let t11 = "string" == typeof e12.options.clobberPrefix ? e12.options.clobberPrefix : "user-content-", n11 = e12.options.footnoteBackContent || r_, r3 = e12.options.footnoteBackLabel || rB, i5 = e12.options.footnoteLabel || "Footnotes", l4 = e12.options.footnoteLabelTagName || "h2", o3 = e12.options.footnoteLabelProperties || { className: ["sr-only"] }, a2 = [], u2 = -1;
        for (; ++u2 < e12.footnoteOrder.length; ) {
          let i6 = e12.footnoteById.get(e12.footnoteOrder[u2]);
          if (!i6)
            continue;
          let l5 = e12.all(i6), o4 = String(i6.identifier).toUpperCase(), c2 = P(o4.toLowerCase()), s2 = 0, f2 = [], p2 = e12.footnoteCounts.get(o4);
          for (; void 0 !== p2 && ++s2 <= p2; ) {
            f2.length > 0 && f2.push({ type: "text", value: " " });
            let e13 = "string" == typeof n11 ? n11 : n11(u2, s2);
            "string" == typeof e13 && (e13 = { type: "text", value: e13 }), f2.push({ type: "element", tagName: "a", properties: { href: "#" + t11 + "fnref-" + c2 + (s2 > 1 ? "-" + s2 : ""), dataFootnoteBackref: "", ariaLabel: "string" == typeof r3 ? r3 : r3(u2, s2), className: ["data-footnote-backref"] }, children: Array.isArray(e13) ? e13 : [e13] });
          }
          let d2 = l5[l5.length - 1];
          if (d2 && "element" === d2.type && "p" === d2.tagName) {
            let e13 = d2.children[d2.children.length - 1];
            e13 && "text" === e13.type ? e13.value += " " : d2.children.push({ type: "text", value: " " }), d2.children.push(...f2);
          } else
            l5.push(...f2);
          let h2 = { type: "element", tagName: "li", properties: { id: t11 + "fn-" + c2 }, children: e12.wrap(l5, true) };
          e12.patch(i6, h2), a2.push(h2);
        }
        if (0 !== a2.length)
          return { type: "element", tagName: "section", properties: { dataFootnotes: true, className: ["footnotes"] }, children: [{ type: "element", tagName: l4, properties: { ...rR(o3), id: "footnote-label" }, children: [{ type: "text", value: i5 }] }, { type: "text", value: "\n" }, { type: "element", tagName: "ol", properties: {}, children: e12.wrap(a2, true) }, { type: "text", value: "\n" }] };
      }(n10), l3 = Array.isArray(r2) ? { type: "root", children: r2 } : r2 || { type: "root", children: [] };
      return i4 && l3.children.push({ type: "text", value: "\n" }, i4), l3;
    }(nh(i3));
    return function(e11) {
      let { components: i4 } = e11;
      return function(e12) {
        return function(e13, t10) {
          var n10, r2, i5;
          let l3;
          if (!t10 || void 0 === t10.Fragment)
            throw TypeError("Expected `Fragment` in options");
          let o3 = t10.filePath || void 0;
          if (t10.development) {
            if ("function" != typeof t10.jsxDEV)
              throw TypeError("Expected `jsxDEV` in options when `development: true`");
            n10 = t10.jsxDEV, l3 = function(e14, t11, r3, i6) {
              let l4 = Array.isArray(r3.children), a3 = ro(e14);
              return n10(t11, r3, i6, l4, { columnNumber: a3 ? a3.column - 1 : void 0, fileName: o3, lineNumber: a3 ? a3.line : void 0 }, void 0);
            };
          } else {
            if ("function" != typeof t10.jsx)
              throw TypeError("Expected `jsx` in production options");
            if ("function" != typeof t10.jsxs)
              throw TypeError("Expected `jsxs` in production options");
            r2 = t10.jsx, i5 = t10.jsxs, l3 = function(e14, t11, n11, l4) {
              let o4 = Array.isArray(n11.children) ? i5 : r2;
              return l4 ? o4(t11, n11, l4) : o4(t11, n11);
            };
          }
          let a2 = { Fragment: t10.Fragment, ancestors: [], components: t10.components || {}, create: l3, elementAttributeNameCase: t10.elementAttributeNameCase || "react", evaluater: t10.createEvaluater ? t10.createEvaluater() : void 0, filePath: o3, ignoreInvalidStyle: t10.ignoreInvalidStyle || false, passKeys: false !== t10.passKeys, passNode: t10.passNode || false, schema: "svg" === t10.space ? n1 : nG, stylePropertyNameCase: t10.stylePropertyNameCase || "dom", tableCellAlignToStyle: false !== t10.tableCellAlignToStyle }, u2 = rg(a2, e13, void 0);
          return u2 && "string" != typeof u2 ? u2 : a2.create(e13, a2.Fragment, { children: u2 || void 0 }, void 0);
        }(e12, { Fragment: t, jsx: n, jsxs: r, components: i4 });
      };
    }({ components: null !== (l2 = e10.components) && void 0 !== l2 ? l2 : {} })(o2);
  }));
}), { displayName: "Markdown" });
export {
  rQ as M
};
