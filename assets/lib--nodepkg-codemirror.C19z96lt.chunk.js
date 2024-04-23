let t, e;
import { j as i } from "./lib--nodepkg-vue-jsx-runtime.BN22WHLF.chunk.js";
import { c as n, o as s, a as r, m as o, b as l, s as h, t as a, r as c, d, e as u, f } from "./lib--nodepkg-vuekit.UMOgsAuw.chunk.js";
import { s as p, v as g, a as m } from "./lib--nodepkg-vueuikit.xfULGfyQ.chunk.js";
class v {
  lineAt(t6) {
    if (t6 < 0 || t6 > this.length)
      throw RangeError(`Invalid position ${t6} in document of length ${this.length}`);
    return this.lineInner(t6, false, 1, 0);
  }
  line(t6) {
    if (t6 < 1 || t6 > this.lines)
      throw RangeError(`Invalid line number ${t6} in ${this.lines}-line document`);
    return this.lineInner(t6, true, 1, 0);
  }
  replace(t6, e10, i10) {
    [t6, e10] = A(this, t6, e10);
    let n10 = [];
    return this.decompose(0, t6, n10, 2), i10.length && i10.decompose(0, i10.length, n10, 3), this.decompose(e10, this.length, n10, 1), y.from(n10, this.length - (e10 - t6) + i10.length);
  }
  append(t6) {
    return this.replace(this.length, this.length, t6);
  }
  slice(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
    [t6, e10] = A(this, t6, e10);
    let i10 = [];
    return this.decompose(t6, e10, i10, 0), y.from(i10, e10 - t6);
  }
  eq(t6) {
    if (t6 == this)
      return true;
    if (t6.length != this.length || t6.lines != this.lines)
      return false;
    let e10 = this.scanIdentical(t6, 1), i10 = this.length - this.scanIdentical(t6, -1), n10 = new x(this), s10 = new x(t6);
    for (let t7 = e10, r10 = e10; ; ) {
      if (n10.next(t7), s10.next(t7), t7 = 0, n10.lineBreak != s10.lineBreak || n10.done != s10.done || n10.value != s10.value)
        return false;
      if (r10 += n10.value.length, n10.done || r10 >= i10)
        return true;
    }
  }
  iter() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return new x(this, t6);
  }
  iterRange(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
    return new k(this, t6, e10);
  }
  iterLines(t6, e10) {
    let i10;
    if (null == t6)
      i10 = this.iter();
    else {
      null == e10 && (e10 = this.lines + 1);
      let n10 = this.line(t6).from;
      i10 = this.iterRange(n10, Math.max(n10, e10 == this.lines + 1 ? this.length : e10 <= 1 ? 0 : this.line(e10 - 1).to));
    }
    return new S(i10);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let t6 = [];
    return this.flatten(t6), t6;
  }
  constructor() {
  }
  static of(t6) {
    if (0 == t6.length)
      throw RangeError("A document must have at least one line");
    return 1 != t6.length || t6[0] ? t6.length <= 32 ? new w(t6) : y.from(w.split(t6, [])) : v.empty;
  }
}
class w extends v {
  constructor(t6, e10 = function(t7) {
    let e11 = -1;
    for (let i10 of t7)
      e11 += i10.length + 1;
    return e11;
  }(t6)) {
    super(), this.text = t6, this.length = e10;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t6, e10, i10, n10) {
    for (let s10 = 0; ; s10++) {
      let r10 = this.text[s10], o10 = n10 + r10.length;
      if ((e10 ? i10 : o10) >= t6)
        return new C(n10, o10, i10, r10);
      n10 = o10 + 1, i10++;
    }
  }
  decompose(t6, e10, i10, n10) {
    let s10 = t6 <= 0 && e10 >= this.length ? this : new w(b(this.text, [""], t6, e10), Math.min(e10, this.length) - Math.max(0, t6));
    if (1 & n10) {
      let t7 = i10.pop(), e11 = b(s10.text, t7.text.slice(), 0, s10.length);
      if (e11.length <= 32)
        i10.push(new w(e11, t7.length + s10.length));
      else {
        let t10 = e11.length >> 1;
        i10.push(new w(e11.slice(0, t10)), new w(e11.slice(t10)));
      }
    } else
      i10.push(s10);
  }
  replace(t6, e10, i10) {
    if (!(i10 instanceof w))
      return super.replace(t6, e10, i10);
    [t6, e10] = A(this, t6, e10);
    let n10 = b(this.text, b(i10.text, b(this.text, [""], 0, t6)), e10), s10 = this.length + i10.length - (e10 - t6);
    return n10.length <= 32 ? new w(n10, s10) : y.from(w.split(n10, []), s10);
  }
  sliceString(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
    [t6, e10] = A(this, t6, e10);
    let n10 = "";
    for (let s10 = 0, r10 = 0; s10 <= e10 && r10 < this.text.length; r10++) {
      let o10 = this.text[r10], l10 = s10 + o10.length;
      s10 > t6 && r10 && (n10 += i10), t6 < l10 && e10 > s10 && (n10 += o10.slice(Math.max(0, t6 - s10), e10 - s10)), s10 = l10 + 1;
    }
    return n10;
  }
  flatten(t6) {
    for (let e10 of this.text)
      t6.push(e10);
  }
  scanIdentical() {
    return 0;
  }
  static split(t6, e10) {
    let i10 = [], n10 = -1;
    for (let s10 of t6)
      i10.push(s10), n10 += s10.length + 1, 32 == i10.length && (e10.push(new w(i10, n10)), i10 = [], n10 = -1);
    return n10 > -1 && e10.push(new w(i10, n10)), e10;
  }
}
class y extends v {
  constructor(t6, e10) {
    for (let i10 of (super(), this.children = t6, this.length = e10, this.lines = 0, t6))
      this.lines += i10.lines;
  }
  lineInner(t6, e10, i10, n10) {
    for (let s10 = 0; ; s10++) {
      let r10 = this.children[s10], o10 = n10 + r10.length, l10 = i10 + r10.lines - 1;
      if ((e10 ? l10 : o10) >= t6)
        return r10.lineInner(t6, e10, i10, n10);
      n10 = o10 + 1, i10 = l10 + 1;
    }
  }
  decompose(t6, e10, i10, n10) {
    for (let s10 = 0, r10 = 0; r10 <= e10 && s10 < this.children.length; s10++) {
      let o10 = this.children[s10], l10 = r10 + o10.length;
      if (t6 <= l10 && e10 >= r10) {
        let s11 = n10 & ((r10 <= t6 ? 1 : 0) | (l10 >= e10 ? 2 : 0));
        r10 >= t6 && l10 <= e10 && !s11 ? i10.push(o10) : o10.decompose(t6 - r10, e10 - r10, i10, s11);
      }
      r10 = l10 + 1;
    }
  }
  replace(t6, e10, i10) {
    if ([t6, e10] = A(this, t6, e10), i10.lines < this.lines)
      for (let n10 = 0, s10 = 0; n10 < this.children.length; n10++) {
        let r10 = this.children[n10], o10 = s10 + r10.length;
        if (t6 >= s10 && e10 <= o10) {
          let l10 = r10.replace(t6 - s10, e10 - s10, i10), h10 = this.lines - r10.lines + l10.lines;
          if (l10.lines < h10 >> 4 && l10.lines > h10 >> 6) {
            let s11 = this.children.slice();
            return s11[n10] = l10, new y(s11, this.length - (e10 - t6) + i10.length);
          }
          return super.replace(s10, o10, l10);
        }
        s10 = o10 + 1;
      }
    return super.replace(t6, e10, i10);
  }
  sliceString(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
    [t6, e10] = A(this, t6, e10);
    let n10 = "";
    for (let s10 = 0, r10 = 0; s10 < this.children.length && r10 <= e10; s10++) {
      let o10 = this.children[s10], l10 = r10 + o10.length;
      r10 > t6 && s10 && (n10 += i10), t6 < l10 && e10 > r10 && (n10 += o10.sliceString(t6 - r10, e10 - r10, i10)), r10 = l10 + 1;
    }
    return n10;
  }
  flatten(t6) {
    for (let e10 of this.children)
      e10.flatten(t6);
  }
  scanIdentical(t6, e10) {
    if (!(t6 instanceof y))
      return 0;
    let i10 = 0, [n10, s10, r10, o10] = e10 > 0 ? [0, 0, this.children.length, t6.children.length] : [this.children.length - 1, t6.children.length - 1, -1, -1];
    for (; ; n10 += e10, s10 += e10) {
      if (n10 == r10 || s10 == o10)
        return i10;
      let l10 = this.children[n10], h10 = t6.children[s10];
      if (l10 != h10)
        return i10 + l10.scanIdentical(h10, e10);
      i10 += l10.length + 1;
    }
  }
  static from(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6.reduce((t7, e11) => t7 + e11.length + 1, -1), i10 = 0;
    for (let e11 of t6)
      i10 += e11.lines;
    if (i10 < 32) {
      let i11 = [];
      for (let e11 of t6)
        e11.flatten(i11);
      return new w(i11, e10);
    }
    let n10 = Math.max(32, i10 >> 5), s10 = n10 << 1, r10 = n10 >> 1, o10 = [], l10 = 0, h10 = -1, a5 = [];
    function c2() {
      0 != l10 && (o10.push(1 == a5.length ? a5[0] : y.from(a5, h10)), h10 = -1, l10 = a5.length = 0);
    }
    for (let e11 of t6)
      !function t7(e12) {
        let i11;
        if (e12.lines > s10 && e12 instanceof y)
          for (let i12 of e12.children)
            t7(i12);
        else
          e12.lines > r10 && (l10 > r10 || !l10) ? (c2(), o10.push(e12)) : e12 instanceof w && l10 && (i11 = a5[a5.length - 1]) instanceof w && e12.lines + i11.lines <= 32 ? (l10 += e12.lines, h10 += e12.length + 1, a5[a5.length - 1] = new w(i11.text.concat(e12.text), i11.length + 1 + e12.length)) : (l10 + e12.lines > n10 && c2(), l10 += e12.lines, h10 += e12.length + 1, a5.push(e12));
      }(e11);
    return c2(), 1 == o10.length ? o10[0] : new y(o10, e10);
  }
}
function b(t6, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
  for (let s10 = 0, r10 = 0, o10 = true; r10 < t6.length && s10 <= n10; r10++) {
    let l10 = t6[r10], h10 = s10 + l10.length;
    h10 >= i10 && (h10 > n10 && (l10 = l10.slice(0, n10 - s10)), s10 < i10 && (l10 = l10.slice(i10 - s10)), o10 ? (e10[e10.length - 1] += l10, o10 = false) : e10.push(l10)), s10 = h10 + 1;
  }
  return e10;
}
v.empty = new w([""], 0);
class x {
  constructor(t6, e10 = 1) {
    this.dir = e10, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [t6], this.offsets = [e10 > 0 ? 1 : (t6 instanceof w ? t6.text.length : t6.children.length) << 1];
  }
  nextInner(t6, e10) {
    for (this.done = this.lineBreak = false; ; ) {
      let i10 = this.nodes.length - 1, n10 = this.nodes[i10], s10 = this.offsets[i10], r10 = s10 >> 1, o10 = n10 instanceof w ? n10.text.length : n10.children.length;
      if (r10 == (e10 > 0 ? o10 : 0)) {
        if (0 == i10)
          return this.done = true, this.value = "", this;
        e10 > 0 && this.offsets[i10 - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((1 & s10) == (e10 > 0 ? 0 : 1)) {
        if (this.offsets[i10] += e10, 0 == t6)
          return this.lineBreak = true, this.value = "\n", this;
        t6--;
      } else if (n10 instanceof w) {
        let s11 = n10.text[r10 + (e10 < 0 ? -1 : 0)];
        if (this.offsets[i10] += e10, s11.length > Math.max(0, t6))
          return this.value = 0 == t6 ? s11 : e10 > 0 ? s11.slice(t6) : s11.slice(0, s11.length - t6), this;
        t6 -= s11.length;
      } else {
        let s11 = n10.children[r10 + (e10 < 0 ? -1 : 0)];
        t6 > s11.length ? (t6 -= s11.length, this.offsets[i10] += e10) : (e10 < 0 && this.offsets[i10]--, this.nodes.push(s11), this.offsets.push(e10 > 0 ? 1 : (s11 instanceof w ? s11.text.length : s11.children.length) << 1));
      }
    }
  }
  next() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return t6 < 0 && (this.nextInner(-t6, -this.dir), t6 = this.value.length), this.nextInner(t6, this.dir);
  }
}
class k {
  constructor(t6, e10, i10) {
    this.value = "", this.done = false, this.cursor = new x(t6, e10 > i10 ? -1 : 1), this.pos = e10 > i10 ? t6.length : 0, this.from = Math.min(e10, i10), this.to = Math.max(e10, i10);
  }
  nextInner(t6, e10) {
    if (e10 < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = true, this;
    t6 += Math.max(0, e10 < 0 ? this.pos - this.to : this.from - this.pos);
    let i10 = e10 < 0 ? this.pos - this.from : this.to - this.pos;
    t6 > i10 && (t6 = i10), i10 -= t6;
    let { value: n10 } = this.cursor.next(t6);
    return this.pos += (n10.length + t6) * e10, this.value = n10.length <= i10 ? n10 : e10 < 0 ? n10.slice(n10.length - i10) : n10.slice(0, i10), this.done = !this.value, this;
  }
  next() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return t6 < 0 ? t6 = Math.max(t6, this.from - this.pos) : t6 > 0 && (t6 = Math.min(t6, this.to - this.pos)), this.nextInner(t6, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && "" != this.value;
  }
}
class S {
  constructor(t6) {
    this.inner = t6, this.afterBreak = true, this.value = "", this.done = false;
  }
  next() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, { done: e10, lineBreak: i10, value: n10 } = this.inner.next(t6);
    return e10 && this.afterBreak ? (this.value = "", this.afterBreak = false) : e10 ? (this.done = true, this.value = "") : i10 ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = n10, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
}
"undefined" != typeof Symbol && (v.prototype[Symbol.iterator] = function() {
  return this.iter();
}, x.prototype[Symbol.iterator] = k.prototype[Symbol.iterator] = S.prototype[Symbol.iterator] = function() {
  return this;
});
class C {
  constructor(t6, e10, i10, n10) {
    this.from = t6, this.to = e10, this.number = i10, this.text = n10;
  }
  get length() {
    return this.to - this.from;
  }
}
function A(t6, e10, i10) {
  return [e10 = Math.max(0, Math.min(t6.length, e10)), Math.max(e10, Math.min(t6.length, i10))];
}
let M = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t6) => t6 ? parseInt(t6, 36) : 1);
for (let t6 = 1; t6 < M.length; t6++)
  M[t6] += M[t6 - 1];
function O(t6) {
  return t6 >= 127462 && t6 <= 127487;
}
function D(t6, e10) {
  let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], n10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  return (i10 ? T : function(t7, e11, i11) {
    for (; e11 > 0; ) {
      let n11 = T(t7, e11 - 2, i11);
      if (n11 < e11)
        return n11;
      e11--;
    }
    return 0;
  })(t6, e10, n10);
}
function T(t6, e10, i10) {
  if (e10 == t6.length)
    return e10;
  e10 && E(t6.charCodeAt(e10)) && R(t6.charCodeAt(e10 - 1)) && e10--;
  let n10 = B(t6, e10);
  for (e10 += L(n10); e10 < t6.length; ) {
    let s10 = B(t6, e10);
    if (8205 == n10 || 8205 == s10 || i10 && function(t7) {
      for (let e11 = 1; e11 < M.length; e11 += 2)
        if (M[e11] > t7)
          return M[e11 - 1] <= t7;
      return false;
    }(s10))
      e10 += L(s10), n10 = s10;
    else if (O(s10)) {
      let i11 = 0, n11 = e10 - 2;
      for (; n11 >= 0 && O(B(t6, n11)); )
        i11++, n11 -= 2;
      if (i11 % 2 == 0)
        break;
      e10 += 2;
    } else
      break;
  }
  return e10;
}
function E(t6) {
  return t6 >= 56320 && t6 < 57344;
}
function R(t6) {
  return t6 >= 55296 && t6 < 56320;
}
function B(t6, e10) {
  let i10 = t6.charCodeAt(e10);
  if (!R(i10) || e10 + 1 == t6.length)
    return i10;
  let n10 = t6.charCodeAt(e10 + 1);
  return E(n10) ? (i10 - 55296 << 10) + (n10 - 56320) + 65536 : i10;
}
function P(t6) {
  return t6 <= 65535 ? String.fromCharCode(t6) : String.fromCharCode(((t6 -= 65536) >> 10) + 55296, (1023 & t6) + 56320);
}
function L(t6) {
  return t6 < 65536 ? 1 : 2;
}
let N = /\r\n?|\n/;
var I, V, H, W, F, z, _, j, q = ((z = q || (q = {}))[z.Simple = 0] = "Simple", z[z.TrackDel = 1] = "TrackDel", z[z.TrackBefore = 2] = "TrackBefore", z[z.TrackAfter = 3] = "TrackAfter", z);
class K {
  constructor(t6) {
    this.sections = t6;
  }
  get length() {
    let t6 = 0;
    for (let e10 = 0; e10 < this.sections.length; e10 += 2)
      t6 += this.sections[e10];
    return t6;
  }
  get newLength() {
    let t6 = 0;
    for (let e10 = 0; e10 < this.sections.length; e10 += 2) {
      let i10 = this.sections[e10 + 1];
      t6 += i10 < 0 ? this.sections[e10] : i10;
    }
    return t6;
  }
  get empty() {
    return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0;
  }
  iterGaps(t6) {
    for (let e10 = 0, i10 = 0, n10 = 0; e10 < this.sections.length; ) {
      let s10 = this.sections[e10++], r10 = this.sections[e10++];
      r10 < 0 ? (t6(i10, n10, s10), n10 += s10) : n10 += r10, i10 += s10;
    }
  }
  iterChangedRanges(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    J(this, t6, e10);
  }
  get invertedDesc() {
    let t6 = [];
    for (let e10 = 0; e10 < this.sections.length; ) {
      let i10 = this.sections[e10++], n10 = this.sections[e10++];
      n10 < 0 ? t6.push(i10, n10) : t6.push(n10, i10);
    }
    return new K(t6);
  }
  composeDesc(t6) {
    return this.empty ? t6 : t6.empty ? this : X(this, t6);
  }
  mapDesc(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t6.empty ? this : Y(this, t6, e10);
  }
  mapPos(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : q.Simple, n10 = 0, s10 = 0;
    for (let r10 = 0; r10 < this.sections.length; ) {
      let o10 = this.sections[r10++], l10 = this.sections[r10++], h10 = n10 + o10;
      if (l10 < 0) {
        if (h10 > t6)
          return s10 + (t6 - n10);
        s10 += o10;
      } else {
        if (i10 != q.Simple && h10 >= t6 && (i10 == q.TrackDel && n10 < t6 && h10 > t6 || i10 == q.TrackBefore && n10 < t6 || i10 == q.TrackAfter && h10 > t6))
          return null;
        if (h10 > t6 || h10 == t6 && e10 < 0 && !o10)
          return t6 == n10 || e10 < 0 ? s10 : s10 + l10;
        s10 += l10;
      }
      n10 = h10;
    }
    if (t6 > n10)
      throw RangeError(`Position ${t6} is out of range for changeset of length ${n10}`);
    return s10;
  }
  touchesRange(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6;
    for (let i10 = 0, n10 = 0; i10 < this.sections.length && n10 <= e10; ) {
      let s10 = this.sections[i10++], r10 = this.sections[i10++], o10 = n10 + s10;
      if (r10 >= 0 && n10 <= e10 && o10 >= t6)
        return !(n10 < t6) || !(o10 > e10) || "cover";
      n10 = o10;
    }
    return false;
  }
  toString() {
    let t6 = "";
    for (let e10 = 0; e10 < this.sections.length; ) {
      let i10 = this.sections[e10++], n10 = this.sections[e10++];
      t6 += (t6 ? " " : "") + i10 + (n10 >= 0 ? ":" + n10 : "");
    }
    return t6;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(t6) {
    if (!Array.isArray(t6) || t6.length % 2 || t6.some((t7) => "number" != typeof t7))
      throw RangeError("Invalid JSON representation of ChangeDesc");
    return new K(t6);
  }
  static create(t6) {
    return new K(t6);
  }
}
class $ extends K {
  constructor(t6, e10) {
    super(t6), this.inserted = e10;
  }
  apply(t6) {
    if (this.length != t6.length)
      throw RangeError("Applying change set to a document with the wrong length");
    return J(this, (e10, i10, n10, s10, r10) => t6 = t6.replace(n10, n10 + (i10 - e10), r10), false), t6;
  }
  mapDesc(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return Y(this, t6, e10, true);
  }
  invert(t6) {
    let e10 = this.sections.slice(), i10 = [];
    for (let n10 = 0, s10 = 0; n10 < e10.length; n10 += 2) {
      let r10 = e10[n10], o10 = e10[n10 + 1];
      if (o10 >= 0) {
        e10[n10] = o10, e10[n10 + 1] = r10;
        let l10 = n10 >> 1;
        for (; i10.length < l10; )
          i10.push(v.empty);
        i10.push(r10 ? t6.slice(s10, s10 + r10) : v.empty);
      }
      s10 += r10;
    }
    return new $(e10, i10);
  }
  compose(t6) {
    return this.empty ? t6 : t6.empty ? this : X(this, t6, true);
  }
  map(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t6.empty ? this : Y(this, t6, e10, true);
  }
  iterChanges(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    J(this, t6, e10);
  }
  get desc() {
    return K.create(this.sections);
  }
  filter(t6) {
    let e10 = [], i10 = [], n10 = [], s10 = new Q(this);
    t:
      for (let r10 = 0, o10 = 0; ; ) {
        let l10 = r10 == t6.length ? 1e9 : t6[r10++];
        for (; o10 < l10 || o10 == l10 && 0 == s10.len; ) {
          if (s10.done)
            break t;
          let t7 = Math.min(s10.len, l10 - o10);
          U(n10, t7, -1);
          let r11 = -1 == s10.ins ? -1 : 0 == s10.off ? s10.ins : 0;
          U(e10, t7, r11), r11 > 0 && G(i10, e10, s10.text), s10.forward(t7), o10 += t7;
        }
        let h10 = t6[r10++];
        for (; o10 < h10; ) {
          if (s10.done)
            break t;
          let t7 = Math.min(s10.len, h10 - o10);
          U(e10, t7, -1), U(n10, t7, -1 == s10.ins ? -1 : 0 == s10.off ? s10.ins : 0), s10.forward(t7), o10 += t7;
        }
      }
    return { changes: new $(e10, i10), filtered: K.create(n10) };
  }
  toJSON() {
    let t6 = [];
    for (let e10 = 0; e10 < this.sections.length; e10 += 2) {
      let i10 = this.sections[e10], n10 = this.sections[e10 + 1];
      n10 < 0 ? t6.push(i10) : 0 == n10 ? t6.push([i10]) : t6.push([i10].concat(this.inserted[e10 >> 1].toJSON()));
    }
    return t6;
  }
  static of(t6, e10, i10) {
    let n10 = [], s10 = [], r10 = 0, o10 = null;
    function l10() {
      let t7 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!t7 && !n10.length)
        return;
      r10 < e10 && U(n10, e10 - r10, -1);
      let i11 = new $(n10, s10);
      o10 = o10 ? o10.compose(i11.map(o10)) : i11, n10 = [], s10 = [], r10 = 0;
    }
    return !function t7(h10) {
      if (Array.isArray(h10))
        for (let e11 of h10)
          t7(e11);
      else if (h10 instanceof $) {
        if (h10.length != e10)
          throw RangeError(`Mismatched change set length (got ${h10.length}, expected ${e10})`);
        l10(), o10 = o10 ? o10.compose(h10.map(o10)) : h10;
      } else {
        let { from: t10, to: o11 = t10, insert: a5 } = h10;
        if (t10 > o11 || t10 < 0 || o11 > e10)
          throw RangeError(`Invalid change range ${t10} to ${o11} (in doc of length ${e10})`);
        let c2 = a5 ? "string" == typeof a5 ? v.of(a5.split(i10 || N)) : a5 : v.empty, d2 = c2.length;
        if (t10 == o11 && 0 == d2)
          return;
        t10 < r10 && l10(), t10 > r10 && U(n10, t10 - r10, -1), U(n10, o11 - t10, d2), G(s10, n10, c2), r10 = o11;
      }
    }(t6), l10(!o10), o10;
  }
  static empty(t6) {
    return new $(t6 ? [t6, -1] : [], []);
  }
  static fromJSON(t6) {
    if (!Array.isArray(t6))
      throw RangeError("Invalid JSON representation of ChangeSet");
    let e10 = [], i10 = [];
    for (let n10 = 0; n10 < t6.length; n10++) {
      let s10 = t6[n10];
      if ("number" == typeof s10)
        e10.push(s10, -1);
      else if (!Array.isArray(s10) || "number" != typeof s10[0] || s10.some((t7, e11) => e11 && "string" != typeof t7))
        throw RangeError("Invalid JSON representation of ChangeSet");
      else if (1 == s10.length)
        e10.push(s10[0], 0);
      else {
        for (; i10.length < n10; )
          i10.push(v.empty);
        i10[n10] = v.of(s10.slice(1)), e10.push(s10[0], i10[n10].length);
      }
    }
    return new $(e10, i10);
  }
  static createSet(t6, e10) {
    return new $(t6, e10);
  }
}
function U(t6, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (0 == e10 && i10 <= 0)
    return;
  let s10 = t6.length - 2;
  s10 >= 0 && i10 <= 0 && i10 == t6[s10 + 1] ? t6[s10] += e10 : 0 == e10 && 0 == t6[s10] ? t6[s10 + 1] += i10 : n10 ? (t6[s10] += e10, t6[s10 + 1] += i10) : t6.push(e10, i10);
}
function G(t6, e10, i10) {
  if (0 == i10.length)
    return;
  let n10 = e10.length - 2 >> 1;
  if (n10 < t6.length)
    t6[t6.length - 1] = t6[t6.length - 1].append(i10);
  else {
    for (; t6.length < n10; )
      t6.push(v.empty);
    t6.push(i10);
  }
}
function J(t6, e10, i10) {
  let n10 = t6.inserted;
  for (let s10 = 0, r10 = 0, o10 = 0; o10 < t6.sections.length; ) {
    let l10 = t6.sections[o10++], h10 = t6.sections[o10++];
    if (h10 < 0)
      s10 += l10, r10 += l10;
    else {
      let a5 = s10, c2 = r10, d2 = v.empty;
      for (; a5 += l10, c2 += h10, h10 && n10 && (d2 = d2.append(n10[o10 - 2 >> 1])), !i10 && o10 != t6.sections.length && !(t6.sections[o10 + 1] < 0); )
        l10 = t6.sections[o10++], h10 = t6.sections[o10++];
      e10(s10, a5, r10, c2, d2), s10 = a5, r10 = c2;
    }
  }
}
function Y(t6, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], s10 = [], r10 = n10 ? [] : null, o10 = new Q(t6), l10 = new Q(e10);
  for (let t7 = -1; ; )
    if (-1 == o10.ins && -1 == l10.ins) {
      let t10 = Math.min(o10.len, l10.len);
      U(s10, t10, -1), o10.forward(t10), l10.forward(t10);
    } else if (l10.ins >= 0 && (o10.ins < 0 || t7 == o10.i || 0 == o10.off && (l10.len < o10.len || l10.len == o10.len && !i10))) {
      let e11 = l10.len;
      for (U(s10, l10.ins, -1); e11; ) {
        let i11 = Math.min(o10.len, e11);
        o10.ins >= 0 && t7 < o10.i && o10.len <= i11 && (U(s10, 0, o10.ins), r10 && G(r10, s10, o10.text), t7 = o10.i), o10.forward(i11), e11 -= i11;
      }
      l10.next();
    } else if (o10.ins >= 0) {
      let e11 = 0, i11 = o10.len;
      for (; i11; )
        if (-1 == l10.ins) {
          let t10 = Math.min(i11, l10.len);
          e11 += t10, i11 -= t10, l10.forward(t10);
        } else if (0 == l10.ins && l10.len < i11)
          i11 -= l10.len, l10.next();
        else
          break;
      U(s10, e11, t7 < o10.i ? o10.ins : 0), r10 && t7 < o10.i && G(r10, s10, o10.text), t7 = o10.i, o10.forward(o10.len - i11);
    } else if (o10.done && l10.done)
      return r10 ? $.createSet(s10, r10) : K.create(s10);
    else
      throw Error("Mismatched change set lengths");
}
function X(t6, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = [], s10 = i10 ? [] : null, r10 = new Q(t6), o10 = new Q(e10);
  for (let t7 = false; ; ) {
    if (r10.done && o10.done)
      return s10 ? $.createSet(n10, s10) : K.create(n10);
    if (0 == r10.ins)
      U(n10, r10.len, 0, t7), r10.next();
    else if (0 != o10.len || o10.done) {
      if (r10.done || o10.done)
        throw Error("Mismatched change set lengths");
      {
        let e11 = Math.min(r10.len2, o10.len), i11 = n10.length;
        if (-1 == r10.ins) {
          let i12 = -1 == o10.ins ? -1 : o10.off ? 0 : o10.ins;
          U(n10, e11, i12, t7), s10 && i12 && G(s10, n10, o10.text);
        } else
          -1 == o10.ins ? (U(n10, r10.off ? 0 : r10.len, e11, t7), s10 && G(s10, n10, r10.textBit(e11))) : (U(n10, r10.off ? 0 : r10.len, o10.off ? 0 : o10.ins, t7), s10 && !o10.off && G(s10, n10, o10.text));
        t7 = (r10.ins > e11 || o10.ins >= 0 && o10.len > e11) && (t7 || n10.length > i11), r10.forward2(e11), o10.forward(e11);
      }
    } else
      U(n10, 0, o10.ins, t7), s10 && G(s10, n10, o10.text), o10.next();
  }
}
class Q {
  constructor(t6) {
    this.set = t6, this.i = 0, this.next();
  }
  next() {
    let { sections: t6 } = this.set;
    this.i < t6.length ? (this.len = t6[this.i++], this.ins = t6[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return -2 == this.ins;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t6 } = this.set, e10 = this.i - 2 >> 1;
    return e10 >= t6.length ? v.empty : t6[e10];
  }
  textBit(t6) {
    let { inserted: e10 } = this.set, i10 = this.i - 2 >> 1;
    return i10 >= e10.length && !t6 ? v.empty : e10[i10].slice(this.off, null == t6 ? void 0 : this.off + t6);
  }
  forward(t6) {
    t6 == this.len ? this.next() : (this.len -= t6, this.off += t6);
  }
  forward2(t6) {
    -1 == this.ins ? this.forward(t6) : t6 == this.ins ? this.next() : (this.ins -= t6, this.off += t6);
  }
}
class Z {
  constructor(t6, e10, i10) {
    this.from = t6, this.to = e10, this.flags = i10;
  }
  get anchor() {
    return 32 & this.flags ? this.to : this.from;
  }
  get head() {
    return 32 & this.flags ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0;
  }
  get bidiLevel() {
    let t6 = 7 & this.flags;
    return 7 == t6 ? null : t6;
  }
  get goalColumn() {
    let t6 = this.flags >> 6;
    return 16777215 == t6 ? void 0 : t6;
  }
  map(t6) {
    let e10, i10, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
    return this.empty ? e10 = i10 = t6.mapPos(this.from, n10) : (e10 = t6.mapPos(this.from, 1), i10 = t6.mapPos(this.to, -1)), e10 == this.from && i10 == this.to ? this : new Z(e10, i10, this.flags);
  }
  extend(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6;
    if (t6 <= this.anchor && e10 >= this.anchor)
      return tt.range(t6, e10);
    let i10 = Math.abs(t6 - this.anchor) > Math.abs(e10 - this.anchor) ? t6 : e10;
    return tt.range(this.anchor, i10);
  }
  eq(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.anchor == t6.anchor && this.head == t6.head && (!e10 || !this.empty || this.assoc == t6.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(t6) {
    if (!t6 || "number" != typeof t6.anchor || "number" != typeof t6.head)
      throw RangeError("Invalid JSON representation for SelectionRange");
    return tt.range(t6.anchor, t6.head);
  }
  static create(t6, e10, i10) {
    return new Z(t6, e10, i10);
  }
}
class tt {
  constructor(t6, e10) {
    this.ranges = t6, this.mainIndex = e10;
  }
  map(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
    return t6.empty ? this : tt.create(this.ranges.map((i10) => i10.map(t6, e10)), this.mainIndex);
  }
  eq(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.ranges.length != t6.ranges.length || this.mainIndex != t6.mainIndex)
      return false;
    for (let i10 = 0; i10 < this.ranges.length; i10++)
      if (!this.ranges[i10].eq(t6.ranges[i10], e10))
        return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return 1 == this.ranges.length ? this : new tt([this.main], 0);
  }
  addRange(t6) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return tt.create([t6].concat(this.ranges), e10 ? 0 : this.mainIndex + 1);
  }
  replaceRange(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex, i10 = this.ranges.slice();
    return i10[e10] = t6, tt.create(i10, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((t6) => t6.toJSON()), main: this.mainIndex };
  }
  static fromJSON(t6) {
    if (!t6 || !Array.isArray(t6.ranges) || "number" != typeof t6.main || t6.main >= t6.ranges.length)
      throw RangeError("Invalid JSON representation for EditorSelection");
    return new tt(t6.ranges.map((t7) => Z.fromJSON(t7)), t6.main);
  }
  static single(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6;
    return new tt([tt.range(t6, e10)], 0);
  }
  static create(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (0 == t6.length)
      throw RangeError("A selection needs at least one range");
    for (let i10 = 0, n10 = 0; n10 < t6.length; n10++) {
      let s10 = t6[n10];
      if (s10.empty ? s10.from <= i10 : s10.from < i10)
        return tt.normalized(t6.slice(), e10);
      i10 = s10.to;
    }
    return new tt(t6, e10);
  }
  static cursor(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 ? arguments[2] : void 0, n10 = arguments.length > 3 ? arguments[3] : void 0;
    return Z.create(t6, t6, (0 == e10 ? 0 : e10 < 0 ? 8 : 16) | (null == i10 ? 7 : Math.min(6, i10)) | (null != n10 ? n10 : 16777215) << 6);
  }
  static range(t6, e10, i10, n10) {
    let s10 = (null != i10 ? i10 : 16777215) << 6 | (null == n10 ? 7 : Math.min(6, n10));
    return e10 < t6 ? Z.create(e10, t6, 48 | s10) : Z.create(t6, e10, (e10 > t6 ? 8 : 0) | s10);
  }
  static normalized(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = t6[e10];
    t6.sort((t7, e11) => t7.from - e11.from), e10 = t6.indexOf(i10);
    for (let i11 = 1; i11 < t6.length; i11++) {
      let n10 = t6[i11], s10 = t6[i11 - 1];
      if (n10.empty ? n10.from <= s10.to : n10.from < s10.to) {
        let r10 = s10.from, o10 = Math.max(n10.to, s10.to);
        i11 <= e10 && e10--, t6.splice(--i11, 2, n10.anchor > n10.head ? tt.range(o10, r10) : tt.range(r10, o10));
      }
    }
    return new tt(t6, e10);
  }
}
function te(t6, e10) {
  for (let i10 of t6.ranges)
    if (i10.to > e10)
      throw RangeError("Selection points outside of document");
}
let ti = 0;
class tn {
  constructor(t6, e10, i10, n10, s10) {
    this.combine = t6, this.compareInput = e10, this.compare = i10, this.isStatic = n10, this.id = ti++, this.default = t6([]), this.extensions = "function" == typeof s10 ? s10(this) : s10;
  }
  get reader() {
    return this;
  }
  static define() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new tn(t6.combine || ((t7) => t7), t6.compareInput || ((t7, e10) => t7 === e10), t6.compare || (t6.combine ? (t7, e10) => t7 === e10 : ts), !!t6.static, t6.enables);
  }
  of(t6) {
    return new tr([], this, 0, t6);
  }
  compute(t6, e10) {
    if (this.isStatic)
      throw Error("Can't compute a static facet");
    return new tr(t6, this, 1, e10);
  }
  computeN(t6, e10) {
    if (this.isStatic)
      throw Error("Can't compute a static facet");
    return new tr(t6, this, 2, e10);
  }
  from(t6, e10) {
    return e10 || (e10 = (t7) => t7), this.compute([t6], (i10) => e10(i10.field(t6)));
  }
}
function ts(t6, e10) {
  return t6 == e10 || t6.length == e10.length && t6.every((t7, i10) => t7 === e10[i10]);
}
class tr {
  constructor(t6, e10, i10, n10) {
    this.dependencies = t6, this.facet = e10, this.type = i10, this.value = n10, this.id = ti++;
  }
  dynamicSlot(t6) {
    var e10;
    let i10 = this.value, n10 = this.facet.compareInput, s10 = this.id, r10 = t6[s10] >> 1, o10 = 2 == this.type, l10 = false, h10 = false, a5 = [];
    for (let i11 of this.dependencies)
      "doc" == i11 ? l10 = true : "selection" == i11 ? h10 = true : ((null !== (e10 = t6[i11.id]) && void 0 !== e10 ? e10 : 1) & 1) == 0 && a5.push(t6[i11.id]);
    return { create: (t7) => (t7.values[r10] = i10(t7), 1), update(t7, e11) {
      if (l10 && e11.docChanged || h10 && (e11.docChanged || e11.selection) || tl(t7, a5)) {
        let e12 = i10(t7);
        if (o10 ? !to(e12, t7.values[r10], n10) : !n10(e12, t7.values[r10]))
          return t7.values[r10] = e12, 1;
      }
      return 0;
    }, reconfigure: (t7, e11) => {
      let l11, h11 = e11.config.address[s10];
      if (null != h11) {
        let s11 = tw(e11, h11);
        if (this.dependencies.every((i11) => i11 instanceof tn ? e11.facet(i11) === t7.facet(i11) : !(i11 instanceof ta) || e11.field(i11, false) == t7.field(i11, false)) || (o10 ? to(l11 = i10(t7), s11, n10) : n10(l11 = i10(t7), s11)))
          return t7.values[r10] = s11, 0;
      } else
        l11 = i10(t7);
      return t7.values[r10] = l11, 1;
    } };
  }
}
function to(t6, e10, i10) {
  if (t6.length != e10.length)
    return false;
  for (let n10 = 0; n10 < t6.length; n10++)
    if (!i10(t6[n10], e10[n10]))
      return false;
  return true;
}
function tl(t6, e10) {
  let i10 = false;
  for (let n10 of e10)
    1 & tv(t6, n10) && (i10 = true);
  return i10;
}
let th = tn.define({ static: true });
class ta {
  constructor(t6, e10, i10, n10, s10) {
    this.id = t6, this.createF = e10, this.updateF = i10, this.compareF = n10, this.spec = s10, this.provides = void 0;
  }
  static define(t6) {
    let e10 = new ta(ti++, t6.create, t6.update, t6.compare || ((t7, e11) => t7 === e11), t6);
    return t6.provide && (e10.provides = t6.provide(e10)), e10;
  }
  create(t6) {
    let e10 = t6.facet(th).find((t7) => t7.field == this);
    return ((null == e10 ? void 0 : e10.create) || this.createF)(t6);
  }
  slot(t6) {
    let e10 = t6[this.id] >> 1;
    return { create: (t7) => (t7.values[e10] = this.create(t7), 1), update: (t7, i10) => {
      let n10 = t7.values[e10], s10 = this.updateF(n10, i10);
      return this.compareF(n10, s10) ? 0 : (t7.values[e10] = s10, 1);
    }, reconfigure: (t7, i10) => null != i10.config.address[this.id] ? (t7.values[e10] = i10.field(this), 0) : (t7.values[e10] = this.create(t7), 1) };
  }
  init(t6) {
    return [this, th.of({ field: this, create: t6 })];
  }
  get extension() {
    return this;
  }
}
let tc = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function td(t6) {
  return (e10) => new tf(e10, t6);
}
let tu = { highest: td(tc.highest), high: td(tc.high), default: td(tc.default), low: td(tc.low), lowest: td(tc.lowest) };
class tf {
  constructor(t6, e10) {
    this.inner = t6, this.prec = e10;
  }
}
class tp {
  of(t6) {
    return new tg(this, t6);
  }
  reconfigure(t6) {
    return tp.reconfigure.of({ compartment: this, extension: t6 });
  }
  get(t6) {
    return t6.config.compartments.get(this);
  }
}
class tg {
  constructor(t6, e10) {
    this.compartment = t6, this.inner = e10;
  }
}
class tm {
  constructor(t6, e10, i10, n10, s10, r10) {
    for (this.base = t6, this.compartments = e10, this.dynamicSlots = i10, this.address = n10, this.staticValues = s10, this.facets = r10, this.statusTemplate = []; this.statusTemplate.length < i10.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(t6) {
    let e10 = this.address[t6.id];
    return null == e10 ? t6.default : this.staticValues[e10 >> 1];
  }
  static resolve(t6, e10, i10) {
    let n10, s10, r10 = [], o10 = /* @__PURE__ */ Object.create(null), l10 = /* @__PURE__ */ new Map();
    for (let i11 of (n10 = [[], [], [], [], []], s10 = /* @__PURE__ */ new Map(), !function t7(i12, r11) {
      let o11 = s10.get(i12);
      if (null != o11) {
        if (o11 <= r11)
          return;
        let t10 = n10[o11].indexOf(i12);
        t10 > -1 && n10[o11].splice(t10, 1), i12 instanceof tg && l10.delete(i12.compartment);
      }
      if (s10.set(i12, r11), Array.isArray(i12))
        for (let e11 of i12)
          t7(e11, r11);
      else if (i12 instanceof tg) {
        if (l10.has(i12.compartment))
          throw RangeError("Duplicate use of compartment in extensions");
        let n11 = e10.get(i12.compartment) || i12.inner;
        l10.set(i12.compartment, n11), t7(n11, r11);
      } else if (i12 instanceof tf)
        t7(i12.inner, i12.prec);
      else if (i12 instanceof ta)
        n10[r11].push(i12), i12.provides && t7(i12.provides, r11);
      else if (i12 instanceof tr)
        n10[r11].push(i12), i12.facet.extensions && t7(i12.facet.extensions, tc.default);
      else {
        let e11 = i12.extension;
        if (!e11)
          throw Error(`Unrecognized extension value in extension set (${i12}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
        t7(e11, r11);
      }
    }(t6, tc.default), n10.reduce((t7, e11) => t7.concat(e11))))
      i11 instanceof ta ? r10.push(i11) : (o10[i11.facet.id] || (o10[i11.facet.id] = [])).push(i11);
    let h10 = /* @__PURE__ */ Object.create(null), a5 = [], c2 = [];
    for (let t7 of r10)
      h10[t7.id] = c2.length << 1, c2.push((e11) => t7.slot(e11));
    let d2 = null == i10 ? void 0 : i10.config.facets;
    for (let t7 in o10) {
      let e11 = o10[t7], n11 = e11[0].facet, s11 = d2 && d2[t7] || [];
      if (e11.every((t10) => 0 == t10.type)) {
        if (h10[n11.id] = a5.length << 1 | 1, ts(s11, e11))
          a5.push(i10.facet(n11));
        else {
          let t10 = n11.combine(e11.map((t11) => t11.value));
          a5.push(i10 && n11.compare(t10, i10.facet(n11)) ? i10.facet(n11) : t10);
        }
      } else {
        for (let t10 of e11)
          0 == t10.type ? (h10[t10.id] = a5.length << 1 | 1, a5.push(t10.value)) : (h10[t10.id] = c2.length << 1, c2.push((e12) => t10.dynamicSlot(e12)));
        h10[n11.id] = c2.length << 1, c2.push((t10) => function(t11, e12, i11) {
          let n12 = i11.map((e13) => t11[e13.id]), s12 = i11.map((t12) => t12.type), r11 = n12.filter((t12) => !(1 & t12)), o11 = t11[e12.id] >> 1;
          function l11(t12) {
            let i12 = [];
            for (let e13 = 0; e13 < n12.length; e13++) {
              let r12 = tw(t12, n12[e13]);
              if (2 == s12[e13])
                for (let t13 of r12)
                  i12.push(t13);
              else
                i12.push(r12);
            }
            return e12.combine(i12);
          }
          return { create(t12) {
            for (let e13 of n12)
              tv(t12, e13);
            return t12.values[o11] = l11(t12), 1;
          }, update(t12, i12) {
            if (!tl(t12, r11))
              return 0;
            let n13 = l11(t12);
            return e12.compare(n13, t12.values[o11]) ? 0 : (t12.values[o11] = n13, 1);
          }, reconfigure(t12, s13) {
            let r12 = tl(t12, n12), h11 = s13.config.facets[e12.id], a6 = s13.facet(e12);
            if (h11 && !r12 && ts(i11, h11))
              return t12.values[o11] = a6, 0;
            let c3 = l11(t12);
            return e12.compare(c3, a6) ? (t12.values[o11] = a6, 0) : (t12.values[o11] = c3, 1);
          } };
        }(t10, n11, e11));
      }
    }
    return new tm(t6, l10, c2.map((t7) => t7(h10)), h10, a5, o10);
  }
}
function tv(t6, e10) {
  if (1 & e10)
    return 2;
  let i10 = e10 >> 1, n10 = t6.status[i10];
  if (4 == n10)
    throw Error("Cyclic dependency between fields and/or facets");
  if (2 & n10)
    return n10;
  t6.status[i10] = 4;
  let s10 = t6.computeSlot(t6, t6.config.dynamicSlots[i10]);
  return t6.status[i10] = 2 | s10;
}
function tw(t6, e10) {
  return 1 & e10 ? t6.config.staticValues[e10 >> 1] : t6.values[e10 >> 1];
}
let ty = tn.define(), tb = tn.define({ combine: (t6) => t6.some((t7) => t7), static: true }), tx = tn.define({ combine: (t6) => t6.length ? t6[0] : void 0, static: true }), tk = tn.define(), tS = tn.define(), tC = tn.define(), tA = tn.define({ combine: (t6) => !!t6.length && t6[0] });
class tM {
  constructor(t6, e10) {
    this.type = t6, this.value = e10;
  }
  static define() {
    return new tO();
  }
}
class tO {
  of(t6) {
    return new tM(this, t6);
  }
}
class tD {
  constructor(t6) {
    this.map = t6;
  }
  of(t6) {
    return new tT(this, t6);
  }
}
class tT {
  constructor(t6, e10) {
    this.type = t6, this.value = e10;
  }
  map(t6) {
    let e10 = this.type.map(this.value, t6);
    return void 0 === e10 ? void 0 : e10 == this.value ? this : new tT(this.type, e10);
  }
  is(t6) {
    return this.type == t6;
  }
  static define() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new tD(t6.map || ((t7) => t7));
  }
  static mapEffects(t6, e10) {
    if (!t6.length)
      return t6;
    let i10 = [];
    for (let n10 of t6) {
      let t7 = n10.map(e10);
      t7 && i10.push(t7);
    }
    return i10;
  }
}
tT.reconfigure = tT.define(), tT.appendConfig = tT.define();
class tE {
  constructor(t6, e10, i10, n10, s10, r10) {
    this.startState = t6, this.changes = e10, this.selection = i10, this.effects = n10, this.annotations = s10, this.scrollIntoView = r10, this._doc = null, this._state = null, i10 && te(i10, e10.newLength), s10.some((t7) => t7.type == tE.time) || (this.annotations = s10.concat(tE.time.of(Date.now())));
  }
  static create(t6, e10, i10, n10, s10, r10) {
    return new tE(t6, e10, i10, n10, s10, r10);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(t6) {
    for (let e10 of this.annotations)
      if (e10.type == t6)
        return e10.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(t6) {
    let e10 = this.annotation(tE.userEvent);
    return !!(e10 && (e10 == t6 || e10.length > t6.length && e10.slice(0, t6.length) == t6 && "." == e10[t6.length]));
  }
}
function tR(t6, e10, i10) {
  var n10;
  let s10, r10, o10;
  return i10 ? (s10 = e10.changes, r10 = $.empty(e10.changes.length), o10 = t6.changes.compose(e10.changes)) : (s10 = e10.changes.map(t6.changes), r10 = t6.changes.mapDesc(e10.changes, true), o10 = t6.changes.compose(s10)), { changes: o10, selection: e10.selection ? e10.selection.map(r10) : null === (n10 = t6.selection) || void 0 === n10 ? void 0 : n10.map(s10), effects: tT.mapEffects(t6.effects, s10).concat(tT.mapEffects(e10.effects, r10)), annotations: t6.annotations.length ? t6.annotations.concat(e10.annotations) : e10.annotations, scrollIntoView: t6.scrollIntoView || e10.scrollIntoView };
}
function tB(t6, e10, i10) {
  let n10 = e10.selection, s10 = tL(e10.annotations);
  return e10.userEvent && (s10 = s10.concat(tE.userEvent.of(e10.userEvent))), { changes: e10.changes instanceof $ ? e10.changes : $.of(e10.changes || [], i10, t6.facet(tx)), selection: n10 && (n10 instanceof tt ? n10 : tt.single(n10.anchor, n10.head)), effects: tL(e10.effects), annotations: s10, scrollIntoView: !!e10.scrollIntoView };
}
tE.time = tM.define(), tE.userEvent = tM.define(), tE.addToHistory = tM.define(), tE.remote = tM.define();
let tP = [];
function tL(t6) {
  return null == t6 ? tP : Array.isArray(t6) ? t6 : [t6];
}
var tN = ((I = tN || (tN = {}))[I.Word = 0] = "Word", I[I.Space = 1] = "Space", I[I.Other = 2] = "Other", I);
let tI = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
try {
  t = RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch (t6) {
}
class tV {
  constructor(t6, e10, i10, n10, s10, r10) {
    this.config = t6, this.doc = e10, this.selection = i10, this.values = n10, this.status = t6.statusTemplate.slice(), this.computeSlot = s10, r10 && (r10._state = this);
    for (let t7 = 0; t7 < this.config.dynamicSlots.length; t7++)
      tv(this, t7 << 1);
    this.computeSlot = null;
  }
  field(t6) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], i10 = this.config.address[t6.id];
    if (null == i10) {
      if (e10)
        throw RangeError("Field is not present in this state");
      return;
    }
    return tv(this, i10), tw(this, i10);
  }
  update() {
    for (var t6 = arguments.length, e10 = Array(t6), i10 = 0; i10 < t6; i10++)
      e10[i10] = arguments[i10];
    return function t7(e11, i11, n10) {
      let s10 = tB(e11, i11.length ? i11[0] : {}, e11.doc.length);
      i11.length && false === i11[0].filter && (n10 = false);
      for (let t10 = 1; t10 < i11.length; t10++) {
        false === i11[t10].filter && (n10 = false);
        let r11 = !!i11[t10].sequential;
        s10 = tR(s10, tB(e11, i11[t10], r11 ? s10.changes.newLength : e11.doc.length), r11);
      }
      let r10 = tE.create(e11, s10.changes, s10.selection, s10.effects, s10.annotations, s10.scrollIntoView);
      return function(t10) {
        let e12 = t10.startState, i12 = e12.facet(tC), n11 = t10;
        for (let s11 = i12.length - 1; s11 >= 0; s11--) {
          let r11 = i12[s11](t10);
          r11 && Object.keys(r11).length && (n11 = tR(n11, tB(e12, r11, t10.changes.newLength), true));
        }
        return n11 == t10 ? t10 : tE.create(e12, t10.changes, t10.selection, n11.effects, n11.annotations, n11.scrollIntoView);
      }(n10 ? function(e12) {
        let i12 = e12.startState, n11 = true;
        for (let t10 of i12.facet(tk)) {
          let i13 = t10(e12);
          if (false === i13) {
            n11 = false;
            break;
          }
          Array.isArray(i13) && (n11 = true === n11 ? i13 : function(t11, e13) {
            let i14 = [];
            for (let n12 = 0, s12 = 0; ; ) {
              let r11, o10;
              if (n12 < t11.length && (s12 == e13.length || e13[s12] >= t11[n12]))
                r11 = t11[n12++], o10 = t11[n12++];
              else {
                if (!(s12 < e13.length))
                  return i14;
                r11 = e13[s12++], o10 = e13[s12++];
              }
              !i14.length || i14[i14.length - 1] < r11 ? i14.push(r11, o10) : i14[i14.length - 1] < o10 && (i14[i14.length - 1] = o10);
            }
          }(n11, i13));
        }
        if (true !== n11) {
          let t10, s12;
          if (false === n11)
            s12 = e12.changes.invertedDesc, t10 = $.empty(i12.doc.length);
          else {
            let i13 = e12.changes.filter(n11);
            t10 = i13.changes, s12 = i13.filtered.mapDesc(i13.changes).invertedDesc;
          }
          e12 = tE.create(i12, t10, e12.selection && e12.selection.map(s12), tT.mapEffects(e12.effects, s12), e12.annotations, e12.scrollIntoView);
        }
        let s11 = i12.facet(tS);
        for (let n12 = s11.length - 1; n12 >= 0; n12--) {
          let r11 = s11[n12](e12);
          e12 = r11 instanceof tE ? r11 : Array.isArray(r11) && 1 == r11.length && r11[0] instanceof tE ? r11[0] : t7(i12, tL(r11), false);
        }
        return e12;
      }(r10) : r10);
    }(this, e10, true);
  }
  applyTransaction(t6) {
    let e10, i10 = this.config, { base: n10, compartments: s10 } = i10;
    for (let e11 of t6.effects)
      e11.is(tp.reconfigure) ? (i10 && (s10 = /* @__PURE__ */ new Map(), i10.compartments.forEach((t7, e12) => s10.set(e12, t7)), i10 = null), s10.set(e11.value.compartment, e11.value.extension)) : e11.is(tT.reconfigure) ? (i10 = null, n10 = e11.value) : e11.is(tT.appendConfig) && (i10 = null, n10 = tL(n10).concat(e11.value));
    e10 = i10 ? t6.startState.values.slice() : new tV(i10 = tm.resolve(n10, s10, this), this.doc, this.selection, i10.dynamicSlots.map(() => null), (t7, e11) => e11.reconfigure(t7, this), null).values;
    let r10 = t6.startState.facet(tb) ? t6.newSelection : t6.newSelection.asSingle();
    new tV(i10, t6.newDoc, r10, e10, (e11, i11) => i11.update(e11, t6), t6);
  }
  replaceSelection(t6) {
    return "string" == typeof t6 && (t6 = this.toText(t6)), this.changeByRange((e10) => ({ changes: { from: e10.from, to: e10.to, insert: t6 }, range: tt.cursor(e10.from + t6.length) }));
  }
  changeByRange(t6) {
    let e10 = this.selection, i10 = t6(e10.ranges[0]), n10 = this.changes(i10.changes), s10 = [i10.range], r10 = tL(i10.effects);
    for (let i11 = 1; i11 < e10.ranges.length; i11++) {
      let o10 = t6(e10.ranges[i11]), l10 = this.changes(o10.changes), h10 = l10.map(n10);
      for (let t7 = 0; t7 < i11; t7++)
        s10[t7] = s10[t7].map(h10);
      let a5 = n10.mapDesc(l10, true);
      s10.push(o10.range.map(a5)), n10 = n10.compose(h10), r10 = tT.mapEffects(r10, h10).concat(tT.mapEffects(tL(o10.effects), a5));
    }
    return { changes: n10, selection: tt.create(s10, e10.mainIndex), effects: r10 };
  }
  changes() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return t6 instanceof $ ? t6 : $.of(t6, this.doc.length, this.facet(tV.lineSeparator));
  }
  toText(t6) {
    return v.of(t6.split(this.facet(tV.lineSeparator) || N));
  }
  sliceDoc() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
    return this.doc.sliceString(t6, e10, this.lineBreak);
  }
  facet(t6) {
    let e10 = this.config.address[t6.id];
    return null == e10 ? t6.default : (tv(this, e10), tw(this, e10));
  }
  toJSON(t6) {
    let e10 = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (t6)
      for (let i10 in t6) {
        let n10 = t6[i10];
        n10 instanceof ta && null != this.config.address[n10.id] && (e10[i10] = n10.spec.toJSON(this.field(t6[i10]), this));
      }
    return e10;
  }
  static fromJSON(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i10 = arguments.length > 2 ? arguments[2] : void 0;
    if (!t6 || "string" != typeof t6.doc)
      throw RangeError("Invalid JSON representation for EditorState");
    let n10 = [];
    if (i10) {
      for (let e11 in i10)
        if (Object.prototype.hasOwnProperty.call(t6, e11)) {
          let s10 = i10[e11], r10 = t6[e11];
          n10.push(s10.init((t7) => s10.spec.fromJSON(r10, t7)));
        }
    }
    return tV.create({ doc: t6.doc, selection: tt.fromJSON(t6.selection), extensions: e10.extensions ? n10.concat([e10.extensions]) : n10 });
  }
  static create() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e10 = tm.resolve(t6.extensions || [], /* @__PURE__ */ new Map()), i10 = t6.doc instanceof v ? t6.doc : v.of((t6.doc || "").split(e10.staticFacet(tV.lineSeparator) || N)), n10 = t6.selection ? t6.selection instanceof tt ? t6.selection : tt.single(t6.selection.anchor, t6.selection.head) : tt.single(0);
    return te(n10, i10.length), e10.staticFacet(tb) || (n10 = n10.asSingle()), new tV(e10, i10, n10, e10.dynamicSlots.map(() => null), (t7, e11) => e11.create(t7), null);
  }
  get tabSize() {
    return this.facet(tV.tabSize);
  }
  get lineBreak() {
    return this.facet(tV.lineSeparator) || "\n";
  }
  get readOnly() {
    return this.facet(tA);
  }
  phrase(t6) {
    for (var e10 = arguments.length, i10 = Array(e10 > 1 ? e10 - 1 : 0), n10 = 1; n10 < e10; n10++)
      i10[n10 - 1] = arguments[n10];
    for (let e11 of this.facet(tV.phrases))
      if (Object.prototype.hasOwnProperty.call(e11, t6)) {
        t6 = e11[t6];
        break;
      }
    return i10.length && (t6 = t6.replace(/\$(\$|\d*)/g, (t7, e11) => {
      if ("$" == e11)
        return "$";
      let n11 = +(e11 || 1);
      return !n11 || n11 > i10.length ? t7 : i10[n11 - 1];
    })), t6;
  }
  languageDataAt(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1, n10 = [];
    for (let s10 of this.facet(ty))
      for (let r10 of s10(this, e10, i10))
        Object.prototype.hasOwnProperty.call(r10, t6) && n10.push(r10[t6]);
    return n10;
  }
  charCategorizer(e10) {
    var i10;
    return i10 = this.languageDataAt("wordChars", e10).join(""), (e11) => {
      if (!/\S/.test(e11))
        return tN.Space;
      if (function(e12) {
        if (t)
          return t.test(e12);
        for (let t6 = 0; t6 < e12.length; t6++) {
          let i11 = e12[t6];
          if (/\w/.test(i11) || i11 > "" && (i11.toUpperCase() != i11.toLowerCase() || tI.test(i11)))
            return true;
        }
        return false;
      }(e11))
        return tN.Word;
      for (let t6 = 0; t6 < i10.length; t6++)
        if (e11.indexOf(i10[t6]) > -1)
          return tN.Word;
      return tN.Other;
    };
  }
  wordAt(t6) {
    let { text: e10, from: i10, length: n10 } = this.doc.lineAt(t6), s10 = this.charCategorizer(t6), r10 = t6 - i10, o10 = t6 - i10;
    for (; r10 > 0; ) {
      let t7 = D(e10, r10, false);
      if (s10(e10.slice(t7, r10)) != tN.Word)
        break;
      r10 = t7;
    }
    for (; o10 < n10; ) {
      let t7 = D(e10, o10);
      if (s10(e10.slice(o10, t7)) != tN.Word)
        break;
      o10 = t7;
    }
    return r10 == o10 ? null : tt.range(r10 + i10, o10 + i10);
  }
}
function tH(t6, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n10 = {};
  for (let e11 of t6)
    for (let t7 of Object.keys(e11)) {
      let s10 = e11[t7], r10 = n10[t7];
      if (void 0 === r10)
        n10[t7] = s10;
      else if (r10 === s10 || void 0 === s10)
        ;
      else if (Object.hasOwnProperty.call(i10, t7))
        n10[t7] = i10[t7](r10, s10);
      else
        throw Error("Config merge conflict for field " + t7);
    }
  for (let t7 in e10)
    void 0 === n10[t7] && (n10[t7] = e10[t7]);
  return n10;
}
tV.allowMultipleSelections = tb, tV.tabSize = tn.define({ combine: (t6) => t6.length ? t6[0] : 4 }), tV.lineSeparator = tx, tV.readOnly = tA, tV.phrases = tn.define({ compare(t6, e10) {
  let i10 = Object.keys(t6), n10 = Object.keys(e10);
  return i10.length == n10.length && i10.every((i11) => t6[i11] == e10[i11]);
} }), tV.languageData = ty, tV.changeFilter = tk, tV.transactionFilter = tS, tV.transactionExtender = tC, tp.reconfigure = tT.define();
class tW {
  eq(t6) {
    return this == t6;
  }
  range(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6;
    return tF.create(t6, e10, this);
  }
}
tW.prototype.startSide = tW.prototype.endSide = 0, tW.prototype.point = false, tW.prototype.mapMode = q.TrackDel;
let tF = class t2 {
  constructor(t6, e10, i10) {
    this.from = t6, this.to = e10, this.value = i10;
  }
  static create(e10, i10, n10) {
    return new t2(e10, i10, n10);
  }
};
function tz(t6, e10) {
  return t6.from - e10.from || t6.value.startSide - e10.value.startSide;
}
class t_ {
  constructor(t6, e10, i10, n10) {
    this.from = t6, this.to = e10, this.value = i10, this.maxPoint = n10;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(t6, e10, i10) {
    let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s10 = i10 ? this.to : this.from;
    for (let r10 = n10, o10 = s10.length; ; ) {
      if (r10 == o10)
        return r10;
      let n11 = r10 + o10 >> 1, l10 = s10[n11] - t6 || (i10 ? this.value[n11].endSide : this.value[n11].startSide) - e10;
      if (n11 == r10)
        return l10 >= 0 ? r10 : o10;
      l10 >= 0 ? o10 = n11 : r10 = n11 + 1;
    }
  }
  between(t6, e10, i10, n10) {
    for (let s10 = this.findIndex(e10, -1e9, true), r10 = this.findIndex(i10, 1e9, false, s10); s10 < r10; s10++)
      if (false === n10(this.from[s10] + t6, this.to[s10] + t6, this.value[s10]))
        return false;
  }
  map(t6, e10) {
    let i10 = [], n10 = [], s10 = [], r10 = -1, o10 = -1;
    for (let l10 = 0; l10 < this.value.length; l10++) {
      let h10 = this.value[l10], a5 = this.from[l10] + t6, c2 = this.to[l10] + t6, d2, u2;
      if (a5 == c2) {
        let t7 = e10.mapPos(a5, h10.startSide, h10.mapMode);
        if (null == t7 || (d2 = u2 = t7, h10.startSide != h10.endSide && (u2 = e10.mapPos(a5, h10.endSide)) < d2))
          continue;
      } else if ((d2 = e10.mapPos(a5, h10.startSide)) > (u2 = e10.mapPos(c2, h10.endSide)) || d2 == u2 && h10.startSide > 0 && h10.endSide <= 0)
        continue;
      0 > (u2 - d2 || h10.endSide - h10.startSide) || (r10 < 0 && (r10 = d2), h10.point && (o10 = Math.max(o10, u2 - d2)), i10.push(h10), n10.push(d2 - r10), s10.push(u2 - r10));
    }
    return { mapped: i10.length ? new t_(n10, s10, i10, o10) : null, pos: r10 };
  }
}
class tj {
  constructor(t6, e10, i10, n10) {
    this.chunkPos = t6, this.chunk = e10, this.nextLayer = i10, this.maxPoint = n10;
  }
  static create(t6, e10, i10, n10) {
    return new tj(t6, e10, i10, n10);
  }
  get length() {
    let t6 = this.chunk.length - 1;
    return t6 < 0 ? 0 : Math.max(this.chunkEnd(t6), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let t6 = this.nextLayer.size;
    for (let e10 of this.chunk)
      t6 += e10.value.length;
    return t6;
  }
  chunkEnd(t6) {
    return this.chunkPos[t6] + this.chunk[t6].length;
  }
  update(t6) {
    let { add: e10 = [], sort: i10 = false, filterFrom: n10 = 0, filterTo: s10 = this.length } = t6, r10 = t6.filter;
    if (0 == e10.length && !r10)
      return this;
    if (i10 && (e10 = e10.slice().sort(tz)), this.isEmpty)
      return e10.length ? tj.of(e10) : this;
    let o10 = new t$(this, null, -1).goto(0), l10 = 0, h10 = [], a5 = new tq();
    for (; o10.value || l10 < e10.length; )
      if (l10 < e10.length && (o10.from - e10[l10].from || o10.startSide - e10[l10].value.startSide) >= 0) {
        let t7 = e10[l10++];
        a5.addInner(t7.from, t7.to, t7.value) || h10.push(t7);
      } else
        1 == o10.rangeIndex && o10.chunkIndex < this.chunk.length && (l10 == e10.length || this.chunkEnd(o10.chunkIndex) < e10[l10].from) && (!r10 || n10 > this.chunkEnd(o10.chunkIndex) || s10 < this.chunkPos[o10.chunkIndex]) && a5.addChunk(this.chunkPos[o10.chunkIndex], this.chunk[o10.chunkIndex]) ? o10.nextChunk() : ((!r10 || n10 > o10.to || s10 < o10.from || r10(o10.from, o10.to, o10.value)) && !a5.addInner(o10.from, o10.to, o10.value) && h10.push(tF.create(o10.from, o10.to, o10.value)), o10.next());
    return a5.finishInner(this.nextLayer.isEmpty && !h10.length ? tj.empty : this.nextLayer.update({ add: h10, filter: r10, filterFrom: n10, filterTo: s10 }));
  }
  map(t6) {
    if (t6.empty || this.isEmpty)
      return this;
    let e10 = [], i10 = [], n10 = -1;
    for (let s11 = 0; s11 < this.chunk.length; s11++) {
      let r10 = this.chunkPos[s11], o10 = this.chunk[s11], l10 = t6.touchesRange(r10, r10 + o10.length);
      if (false === l10)
        n10 = Math.max(n10, o10.maxPoint), e10.push(o10), i10.push(t6.mapPos(r10));
      else if (true === l10) {
        let { mapped: s12, pos: l11 } = o10.map(r10, t6);
        s12 && (n10 = Math.max(n10, s12.maxPoint), e10.push(s12), i10.push(l11));
      }
    }
    let s10 = this.nextLayer.map(t6);
    return 0 == e10.length ? s10 : new tj(i10, e10, s10 || tj.empty, n10);
  }
  between(t6, e10, i10) {
    if (!this.isEmpty) {
      for (let n10 = 0; n10 < this.chunk.length; n10++) {
        let s10 = this.chunkPos[n10], r10 = this.chunk[n10];
        if (e10 >= s10 && t6 <= s10 + r10.length && false === r10.between(s10, t6 - s10, e10 - s10, i10))
          return;
      }
      this.nextLayer.between(t6, e10, i10);
    }
  }
  iter() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return tU.from([this]).goto(t6);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return tU.from(t6).goto(e10);
  }
  static compare(t6, e10, i10, n10) {
    let s10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1, r10 = t6.filter((t7) => t7.maxPoint > 0 || !t7.isEmpty && t7.maxPoint >= s10), o10 = e10.filter((t7) => t7.maxPoint > 0 || !t7.isEmpty && t7.maxPoint >= s10), l10 = tK(r10, o10, i10), h10 = new tJ(r10, l10, s10), a5 = new tJ(o10, l10, s10);
    i10.iterGaps((t7, e11, i11) => tY(h10, t7, a5, e11, i11, n10)), i10.empty && 0 == i10.length && tY(h10, 0, a5, 0, 0, n10);
  }
  static eq(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = arguments.length > 3 ? arguments[3] : void 0;
    null == n10 && (n10 = 999999999);
    let s10 = t6.filter((t7) => !t7.isEmpty && 0 > e10.indexOf(t7)), r10 = e10.filter((e11) => !e11.isEmpty && 0 > t6.indexOf(e11));
    if (s10.length != r10.length)
      return false;
    if (!s10.length)
      return true;
    let o10 = tK(s10, r10), l10 = new tJ(s10, o10, 0).goto(i10), h10 = new tJ(r10, o10, 0).goto(i10);
    for (; ; ) {
      if (l10.to != h10.to || !tX(l10.active, h10.active) || l10.point && (!h10.point || !l10.point.eq(h10.point)))
        return false;
      if (l10.to > n10)
        return true;
      l10.next(), h10.next();
    }
  }
  static spans(t6, e10, i10, n10) {
    let s10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1, r10 = new tJ(t6, null, s10).goto(e10), o10 = e10, l10 = r10.openStart;
    for (; ; ) {
      let t7 = Math.min(r10.to, i10);
      if (r10.point) {
        let i11 = r10.activeForPoint(r10.to), s11 = r10.pointFrom < e10 ? i11.length + 1 : r10.point.startSide < 0 ? i11.length : Math.min(i11.length, l10);
        n10.point(o10, t7, r10.point, i11, s11, r10.pointRank), l10 = Math.min(r10.openEnd(t7), i11.length);
      } else
        t7 > o10 && (n10.span(o10, t7, r10.active, l10), l10 = r10.openEnd(t7));
      if (r10.to > i10)
        return l10 + (r10.point && r10.to > i10 ? 1 : 0);
      o10 = r10.to, r10.next();
    }
  }
  static of(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i10 = new tq();
    for (let n10 of t6 instanceof tF ? [t6] : e10 ? function(t7) {
      if (t7.length > 1)
        for (let e11 = t7[0], i11 = 1; i11 < t7.length; i11++) {
          let n11 = t7[i11];
          if (tz(e11, n11) > 0)
            return t7.slice().sort(tz);
          e11 = n11;
        }
      return t7;
    }(t6) : t6)
      i10.add(n10.from, n10.to, n10.value);
    return i10.finish();
  }
  static join(t6) {
    if (!t6.length)
      return tj.empty;
    let e10 = t6[t6.length - 1];
    for (let i10 = t6.length - 2; i10 >= 0; i10--)
      for (let n10 = t6[i10]; n10 != tj.empty; n10 = n10.nextLayer)
        e10 = new tj(n10.chunkPos, n10.chunk, e10, Math.max(n10.maxPoint, e10.maxPoint));
    return e10;
  }
}
tj.empty = new tj([], [], null, -1), tj.empty.nextLayer = tj.empty;
class tq {
  finishChunk(t6) {
    this.chunks.push(new t_(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t6 && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(t6, e10, i10) {
    this.addInner(t6, e10, i10) || (this.nextLayer || (this.nextLayer = new tq())).add(t6, e10, i10);
  }
  addInner(t6, e10, i10) {
    let n10 = t6 - this.lastTo || i10.startSide - this.last.endSide;
    if (n10 <= 0 && 0 > (t6 - this.lastFrom || i10.startSide - this.last.startSide))
      throw Error("Ranges must be added sorted by `from` position and `startSide`");
    return !(n10 < 0) && (250 == this.from.length && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = t6), this.from.push(t6 - this.chunkStart), this.to.push(e10 - this.chunkStart), this.last = i10, this.lastFrom = t6, this.lastTo = e10, this.value.push(i10), i10.point && (this.maxPoint = Math.max(this.maxPoint, e10 - t6)), true);
  }
  addChunk(t6, e10) {
    if (0 > (t6 - this.lastTo || e10.value[0].startSide - this.last.endSide))
      return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, e10.maxPoint), this.chunks.push(e10), this.chunkPos.push(t6);
    let i10 = e10.value.length - 1;
    return this.last = e10.value[i10], this.lastFrom = e10.from[i10] + t6, this.lastTo = e10.to[i10] + t6, true;
  }
  finish() {
    return this.finishInner(tj.empty);
  }
  finishInner(t6) {
    if (this.from.length && this.finishChunk(false), 0 == this.chunks.length)
      return t6;
    let e10 = tj.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t6) : t6, this.setMaxPoint);
    return this.from = null, e10;
  }
}
function tK(t6, e10, i10) {
  let n10 = /* @__PURE__ */ new Map();
  for (let e11 of t6)
    for (let t7 = 0; t7 < e11.chunk.length; t7++)
      e11.chunk[t7].maxPoint <= 0 && n10.set(e11.chunk[t7], e11.chunkPos[t7]);
  let s10 = /* @__PURE__ */ new Set();
  for (let t7 of e10)
    for (let e11 = 0; e11 < t7.chunk.length; e11++) {
      let r10 = n10.get(t7.chunk[e11]);
      null == r10 || (i10 ? i10.mapPos(r10) : r10) != t7.chunkPos[e11] || (null == i10 ? void 0 : i10.touchesRange(r10, r10 + t7.chunk[e11].length)) || s10.add(t7.chunk[e11]);
    }
  return s10;
}
class t$ {
  constructor(t6, e10, i10, n10 = 0) {
    this.layer = t6, this.skip = e10, this.minPoint = i10, this.rank = n10;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t6, e10, false), this;
  }
  gotoInner(t6, e10, i10) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let e11 = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(e11) || this.layer.chunkEnd(this.chunkIndex) < t6 || e11.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i10 = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n10 = this.layer.chunk[this.chunkIndex].findIndex(t6 - this.layer.chunkPos[this.chunkIndex], e10, true);
      (!i10 || this.rangeIndex < n10) && this.setRangeIndex(n10);
    }
    this.next();
  }
  forward(t6, e10) {
    0 > (this.to - t6 || this.endSide - e10) && this.gotoInner(t6, e10, true);
  }
  next() {
    for (; ; ) {
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      }
      {
        let t6 = this.layer.chunkPos[this.chunkIndex], e10 = this.layer.chunk[this.chunkIndex], i10 = t6 + e10.from[this.rangeIndex];
        if (this.from = i10, this.to = t6 + e10.to[this.rangeIndex], this.value = e10.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
    }
  }
  setRangeIndex(t6) {
    if (t6 == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = t6;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t6) {
    return this.from - t6.from || this.startSide - t6.startSide || this.rank - t6.rank || this.to - t6.to || this.endSide - t6.endSide;
  }
}
class tU {
  constructor(t6) {
    this.heap = t6;
  }
  static from(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1, n10 = [];
    for (let s10 = 0; s10 < t6.length; s10++)
      for (let r10 = t6[s10]; !r10.isEmpty; r10 = r10.nextLayer)
        r10.maxPoint >= i10 && n10.push(new t$(r10, e10, i10, s10));
    return 1 == n10.length ? n10[0] : new tU(n10);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
    for (let i10 of this.heap)
      i10.goto(t6, e10);
    for (let t7 = this.heap.length >> 1; t7 >= 0; t7--)
      tG(this.heap, t7);
    return this.next(), this;
  }
  forward(t6, e10) {
    for (let i10 of this.heap)
      i10.forward(t6, e10);
    for (let t7 = this.heap.length >> 1; t7 >= 0; t7--)
      tG(this.heap, t7);
    0 > (this.to - t6 || this.value.endSide - e10) && this.next();
  }
  next() {
    if (0 == this.heap.length)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t6 = this.heap[0];
      this.from = t6.from, this.to = t6.to, this.value = t6.value, this.rank = t6.rank, t6.value && t6.next(), tG(this.heap, 0);
    }
  }
}
function tG(t6, e10) {
  for (let i10 = t6[e10]; ; ) {
    let n10 = (e10 << 1) + 1;
    if (n10 >= t6.length)
      break;
    let s10 = t6[n10];
    if (n10 + 1 < t6.length && s10.compare(t6[n10 + 1]) >= 0 && (s10 = t6[n10 + 1], n10++), 0 > i10.compare(s10))
      break;
    t6[n10] = i10, t6[e10] = s10, e10 = n10;
  }
}
class tJ {
  constructor(t6, e10, i10) {
    this.minPoint = i10, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = tU.from(t6, e10, i10);
  }
  goto(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
    return this.cursor.goto(t6, e10), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t6, this.endSide = e10, this.openStart = -1, this.next(), this;
  }
  forward(t6, e10) {
    for (; this.minActive > -1 && 0 > (this.activeTo[this.minActive] - t6 || this.active[this.minActive].endSide - e10); )
      this.removeActive(this.minActive);
    this.cursor.forward(t6, e10);
  }
  removeActive(t6) {
    tQ(this.active, t6), tQ(this.activeTo, t6), tQ(this.activeRank, t6), this.minActive = t0(this.active, this.activeTo);
  }
  addActive(t6) {
    let e10 = 0, { value: i10, to: n10, rank: s10 } = this.cursor;
    for (; e10 < this.activeRank.length && (s10 - this.activeRank[e10] || n10 - this.activeTo[e10]) > 0; )
      e10++;
    tZ(this.active, e10, i10), tZ(this.activeTo, e10, n10), tZ(this.activeRank, e10, s10), t6 && tZ(t6, e10, this.cursor.from), this.minActive = t0(this.active, this.activeTo);
  }
  next() {
    let t6 = this.to, e10 = this.point;
    this.point = null;
    let i10 = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n10 = this.minActive;
      if (n10 > -1 && 0 > (this.activeTo[n10] - this.cursor.from || this.active[n10].endSide - this.cursor.startSide)) {
        if (this.activeTo[n10] > t6) {
          this.to = this.activeTo[n10], this.endSide = this.active[n10].endSide;
          break;
        }
        this.removeActive(n10), i10 && tQ(i10, n10);
      } else if (this.cursor.value) {
        if (this.cursor.from > t6) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        }
        {
          let t7 = this.cursor.value;
          if (t7.point) {
            if (e10 && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
              this.cursor.next();
            else {
              this.point = t7, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = t7.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
              break;
            }
          } else
            this.addActive(i10), this.cursor.next();
        }
      } else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i10) {
      this.openStart = 0;
      for (let e11 = i10.length - 1; e11 >= 0 && i10[e11] < t6; e11--)
        this.openStart++;
    }
  }
  activeForPoint(t6) {
    if (!this.active.length)
      return this.active;
    let e10 = [];
    for (let i10 = this.active.length - 1; i10 >= 0 && !(this.activeRank[i10] < this.pointRank); i10--)
      (this.activeTo[i10] > t6 || this.activeTo[i10] == t6 && this.active[i10].endSide >= this.point.endSide) && e10.push(this.active[i10]);
    return e10.reverse();
  }
  openEnd(t6) {
    let e10 = 0;
    for (let i10 = this.activeTo.length - 1; i10 >= 0 && this.activeTo[i10] > t6; i10--)
      e10++;
    return e10;
  }
}
function tY(t6, e10, i10, n10, s10, r10) {
  t6.goto(e10), i10.goto(n10);
  let o10 = n10 + s10, l10 = n10, h10 = n10 - e10;
  for (; ; ) {
    let e11 = t6.to + h10 - i10.to || t6.endSide - i10.endSide, n11 = e11 < 0 ? t6.to + h10 : i10.to, s11 = Math.min(n11, o10);
    if (t6.point || i10.point ? t6.point && i10.point && (t6.point == i10.point || t6.point.eq(i10.point)) && tX(t6.activeForPoint(t6.to), i10.activeForPoint(i10.to)) || r10.comparePoint(l10, s11, t6.point, i10.point) : s11 > l10 && !tX(t6.active, i10.active) && r10.compareRange(l10, s11, t6.active, i10.active), n11 > o10)
      break;
    l10 = n11, e11 <= 0 && t6.next(), e11 >= 0 && i10.next();
  }
}
function tX(t6, e10) {
  if (t6.length != e10.length)
    return false;
  for (let i10 = 0; i10 < t6.length; i10++)
    if (t6[i10] != e10[i10] && !t6[i10].eq(e10[i10]))
      return false;
  return true;
}
function tQ(t6, e10) {
  for (let i10 = e10, n10 = t6.length - 1; i10 < n10; i10++)
    t6[i10] = t6[i10 + 1];
  t6.pop();
}
function tZ(t6, e10, i10) {
  for (let i11 = t6.length - 1; i11 >= e10; i11--)
    t6[i11 + 1] = t6[i11];
  t6[e10] = i10;
}
function t0(t6, e10) {
  let i10 = -1, n10 = 1e9;
  for (let s10 = 0; s10 < e10.length; s10++)
    0 > (e10[s10] - n10 || t6[s10].endSide - t6[i10].endSide) && (i10 = s10, n10 = e10[s10]);
  return i10;
}
function t1(t6, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t6.length, n10 = 0;
  for (let s10 = 0; s10 < i10; )
    9 == t6.charCodeAt(s10) ? (n10 += e10 - n10 % e10, s10++) : (n10++, s10 = D(t6, s10));
  return n10;
}
let t22 = "undefined" == typeof Symbol ? "__ͼ" : Symbol.for("ͼ"), t3 = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"), t8 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
class t4 {
  constructor(t6, e10) {
    this.rules = [];
    let { finish: i10 } = e10 || {};
    function n10(t7) {
      return /^@/.test(t7) ? [t7] : t7.split(/,\s*/);
    }
    for (let e11 in t6)
      !function t7(e12, s10, r10, o10) {
        let l10 = [], h10 = /^@(\w+)\b/.exec(e12[0]), a5 = h10 && "keyframes" == h10[1];
        if (h10 && null == s10)
          return r10.push(e12[0] + ";");
        for (let i11 in s10) {
          let o11 = s10[i11];
          if (/&/.test(i11))
            t7(i11.split(/,\s*/).map((t10) => e12.map((e13) => t10.replace(/&/, e13))).reduce((t10, e13) => t10.concat(e13)), o11, r10);
          else if (o11 && "object" == typeof o11) {
            if (!h10)
              throw RangeError("The value of a property (" + i11 + ") should be a primitive value.");
            t7(n10(i11), o11, l10, a5);
          } else
            null != o11 && l10.push(i11.replace(/_.*/, "").replace(/[A-Z]/g, (t10) => "-" + t10.toLowerCase()) + ": " + o11 + ";");
        }
        (l10.length || a5) && r10.push((!i10 || h10 || o10 ? e12 : e12.map(i10)).join(", ") + " {" + l10.join(" ") + "}");
      }(n10(e11), t6[e11], this.rules);
  }
  getRules() {
    return this.rules.join("\n");
  }
  static newName() {
    let t6 = t8[t22] || 1;
    return t8[t22] = t6 + 1, "ͼ" + t6.toString(36);
  }
  static mount(t6, e10, i10) {
    let n10 = t6[t3], s10 = i10 && i10.nonce;
    n10 ? s10 && n10.setNonce(s10) : n10 = new t9(t6, s10), n10.mount(Array.isArray(e10) ? e10 : [e10], t6);
  }
}
let t5 = /* @__PURE__ */ new Map();
class t9 {
  constructor(t6, e10) {
    let i10 = t6.ownerDocument || t6, n10 = i10.defaultView;
    if (!t6.head && t6.adoptedStyleSheets && n10.CSSStyleSheet) {
      let e11 = t5.get(i10);
      if (e11)
        return t6[t3] = e11;
      this.sheet = new n10.CSSStyleSheet(), t5.set(i10, this);
    } else
      this.styleTag = i10.createElement("style"), e10 && this.styleTag.setAttribute("nonce", e10);
    this.modules = [], t6[t3] = this;
  }
  mount(t6, e10) {
    let i10 = this.sheet, n10 = 0, s10 = 0;
    for (let e11 = 0; e11 < t6.length; e11++) {
      let r10 = t6[e11], o10 = this.modules.indexOf(r10);
      if (o10 < s10 && o10 > -1 && (this.modules.splice(o10, 1), s10--, o10 = -1), -1 == o10) {
        if (this.modules.splice(s10++, 0, r10), i10)
          for (let t7 = 0; t7 < r10.rules.length; t7++)
            i10.insertRule(r10.rules[t7], n10++);
      } else {
        for (; s10 < o10; )
          n10 += this.modules[s10++].rules.length;
        n10 += r10.rules.length, s10++;
      }
    }
    if (i10)
      0 > e10.adoptedStyleSheets.indexOf(this.sheet) && (e10.adoptedStyleSheets = [this.sheet, ...e10.adoptedStyleSheets]);
    else {
      let t7 = "";
      for (let e11 = 0; e11 < this.modules.length; e11++)
        t7 += this.modules[e11].getRules() + "\n";
      this.styleTag.textContent = t7;
      let i11 = e10.head || e10;
      this.styleTag.parentNode != i11 && i11.insertBefore(this.styleTag, i11.firstChild);
    }
  }
  setNonce(t6) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t6 && this.styleTag.setAttribute("nonce", t6);
  }
}
for (var t6 = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, t7 = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, et = "undefined" != typeof navigator && /Mac/.test(navigator.platform), ee = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), ei = 0; ei < 10; ei++)
  t6[48 + ei] = t6[96 + ei] = String(ei);
for (var ei = 1; ei <= 24; ei++)
  t6[ei + 111] = "F" + ei;
for (var ei = 65; ei <= 90; ei++)
  t6[ei] = String.fromCharCode(ei + 32), t7[ei] = String.fromCharCode(ei);
for (var en in t6)
  t7.hasOwnProperty(en) || (t7[en] = t6[en]);
function es(t6) {
  return (11 == t6.nodeType ? t6.getSelection ? t6 : t6.ownerDocument : t6).getSelection();
}
function er(t6, e10) {
  return !!e10 && (t6 == e10 || t6.contains(1 != e10.nodeType ? e10.parentNode : e10));
}
function eo(t6, e10) {
  if (!e10.anchorNode)
    return false;
  try {
    return er(t6, e10.anchorNode);
  } catch (t7) {
    return false;
  }
}
function el(t6) {
  return 3 == t6.nodeType ? ew(t6, 0, t6.nodeValue.length).getClientRects() : 1 == t6.nodeType ? t6.getClientRects() : [];
}
function eh(t6, e10, i10, n10) {
  return !!i10 && (ed(t6, e10, i10, n10, -1) || ed(t6, e10, i10, n10, 1));
}
function ea(t6) {
  for (var e10 = 0; ; e10++)
    if (!(t6 = t6.previousSibling))
      return e10;
}
function ec(t6) {
  return 1 == t6.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t6.nodeName);
}
function ed(t6, e10, i10, n10, s10) {
  for (; ; ) {
    if (t6 == i10 && e10 == n10)
      return true;
    if (e10 == (s10 < 0 ? 0 : eu(t6))) {
      if ("DIV" == t6.nodeName)
        return false;
      let i11 = t6.parentNode;
      if (!i11 || 1 != i11.nodeType)
        return false;
      e10 = ea(t6) + (s10 < 0 ? 0 : 1), t6 = i11;
    } else {
      if (1 != t6.nodeType || 1 == (t6 = t6.childNodes[e10 + (s10 < 0 ? -1 : 0)]).nodeType && "false" == t6.contentEditable)
        return false;
      e10 = s10 < 0 ? eu(t6) : 0;
    }
  }
}
function eu(t6) {
  return 3 == t6.nodeType ? t6.nodeValue.length : t6.childNodes.length;
}
function ef(t6, e10) {
  let i10 = e10 ? t6.left : t6.right;
  return { left: i10, right: i10, top: t6.top, bottom: t6.bottom };
}
function ep(t6, e10) {
  let i10 = e10.width / t6.offsetWidth, n10 = e10.height / t6.offsetHeight;
  return (i10 > 0.995 && i10 < 1.005 || !isFinite(i10) || 1 > Math.abs(e10.width - t6.offsetWidth)) && (i10 = 1), (n10 > 0.995 && n10 < 1.005 || !isFinite(n10) || 1 > Math.abs(e10.height - t6.offsetHeight)) && (n10 = 1), { scaleX: i10, scaleY: n10 };
}
class eg {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t6) {
    return this.anchorNode == t6.anchorNode && this.anchorOffset == t6.anchorOffset && this.focusNode == t6.focusNode && this.focusOffset == t6.focusOffset;
  }
  setRange(t6) {
    let { anchorNode: e10, focusNode: i10 } = t6;
    this.set(e10, Math.min(t6.anchorOffset, e10 ? eu(e10) : 0), i10, Math.min(t6.focusOffset, i10 ? eu(i10) : 0));
  }
  set(t6, e10, i10, n10) {
    this.anchorNode = t6, this.anchorOffset = e10, this.focusNode = i10, this.focusOffset = n10;
  }
}
let em = null;
function ev(t6) {
  if (t6.setActive)
    return t6.setActive();
  if (em)
    return t6.focus(em);
  let e10 = [];
  for (let i10 = t6; i10 && (e10.push(i10, i10.scrollTop, i10.scrollLeft), i10 != i10.ownerDocument); i10 = i10.parentNode)
    ;
  if (t6.focus(null == em ? { get preventScroll() {
    return em = { preventScroll: true }, true;
  } } : void 0), !em) {
    em = false;
    for (let t7 = 0; t7 < e10.length; ) {
      let i10 = e10[t7++], n10 = e10[t7++], s10 = e10[t7++];
      i10.scrollTop != n10 && (i10.scrollTop = n10), i10.scrollLeft != s10 && (i10.scrollLeft = s10);
    }
  }
}
function ew(t6, i10) {
  let n10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i10, s10 = e || (e = document.createRange());
  return s10.setEnd(t6, n10), s10.setStart(t6, i10), s10;
}
function ey(t6, e10, i10, n10) {
  let s10 = { key: e10, code: e10, keyCode: i10, which: i10, cancelable: true };
  n10 && ({ altKey: s10.altKey, ctrlKey: s10.ctrlKey, shiftKey: s10.shiftKey, metaKey: s10.metaKey } = n10);
  let r10 = new KeyboardEvent("keydown", s10);
  r10.synthetic = true, t6.dispatchEvent(r10);
  let o10 = new KeyboardEvent("keyup", s10);
  return o10.synthetic = true, t6.dispatchEvent(o10), r10.defaultPrevented || o10.defaultPrevented;
}
function eb(t6) {
  for (; t6.attributes.length; )
    t6.removeAttributeNode(t6.attributes[0]);
}
function ex(t6) {
  return t6.scrollTop > Math.max(1, t6.scrollHeight - t6.clientHeight - 4);
}
function ek(t6, e10) {
  for (let i10 = t6, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 > 0)
      return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 > 0) {
      if ("false" == i10.contentEditable)
        return null;
      n10 = eu(i10 = i10.childNodes[n10 - 1]);
    } else {
      if (!i10.parentNode || ec(i10))
        return null;
      n10 = ea(i10), i10 = i10.parentNode;
    }
  }
}
function eS(t6, e10) {
  for (let i10 = t6, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 < i10.nodeValue.length)
      return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 < i10.childNodes.length) {
      if ("false" == i10.contentEditable)
        return null;
      i10 = i10.childNodes[n10], n10 = 0;
    } else {
      if (!i10.parentNode || ec(i10))
        return null;
      n10 = ea(i10) + 1, i10 = i10.parentNode;
    }
  }
}
class eC {
  constructor(t6, e10, i10 = true) {
    this.node = t6, this.offset = e10, this.precise = i10;
  }
  static before(t6, e10) {
    return new eC(t6.parentNode, ea(t6), e10);
  }
  static after(t6, e10) {
    return new eC(t6.parentNode, ea(t6) + 1, e10);
  }
}
let eA = [];
class eM {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t6) {
    let e10 = this.posAtStart;
    for (let i10 of this.children) {
      if (i10 == t6)
        return e10;
      e10 += i10.length + i10.breakAfter;
    }
    throw RangeError("Invalid child in posBefore");
  }
  posAfter(t6) {
    return this.posBefore(t6) + t6.length;
  }
  sync(t6, e10) {
    if (2 & this.flags) {
      let i10 = this.dom, n10 = null, s10;
      for (let r10 of this.children) {
        if (7 & r10.flags) {
          if (!r10.dom && (s10 = n10 ? n10.nextSibling : i10.firstChild)) {
            let t7 = eM.get(s10);
            (!t7 || !t7.parent && t7.canReuseDOM(r10)) && r10.reuseDOM(s10);
          }
          r10.sync(t6, e10), r10.flags &= -8;
        }
        if (s10 = n10 ? n10.nextSibling : i10.firstChild, e10 && !e10.written && e10.node == i10 && s10 != r10.dom && (e10.written = true), r10.dom.parentNode == i10)
          for (; s10 && s10 != r10.dom; )
            s10 = eO(s10);
        else
          i10.insertBefore(r10.dom, s10);
        n10 = r10.dom;
      }
      for ((s10 = n10 ? n10.nextSibling : i10.firstChild) && e10 && e10.node == i10 && (e10.written = true); s10; )
        s10 = eO(s10);
    } else if (1 & this.flags)
      for (let i10 of this.children)
        7 & i10.flags && (i10.sync(t6, e10), i10.flags &= -8);
  }
  reuseDOM(t6) {
  }
  localPosFromDOM(t6, e10) {
    let i10;
    if (t6 == this.dom)
      i10 = this.dom.childNodes[e10];
    else {
      let n10 = 0 == eu(t6) ? 0 : 0 == e10 ? -1 : 1;
      for (; ; ) {
        let e11 = t6.parentNode;
        if (e11 == this.dom)
          break;
        0 == n10 && e11.firstChild != e11.lastChild && (n10 = t6 == e11.firstChild ? -1 : 1), t6 = e11;
      }
      i10 = n10 < 0 ? t6 : t6.nextSibling;
    }
    if (i10 == this.dom.firstChild)
      return 0;
    for (; i10 && !eM.get(i10); )
      i10 = i10.nextSibling;
    if (!i10)
      return this.length;
    for (let t7 = 0, e11 = 0; ; t7++) {
      let n10 = this.children[t7];
      if (n10.dom == i10)
        return e11;
      e11 += n10.length + n10.breakAfter;
    }
  }
  domBoundsAround(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = -1, s10 = -1, r10 = -1, o10 = -1;
    for (let l10 = 0, h10 = i10, a5 = i10; l10 < this.children.length; l10++) {
      let i11 = this.children[l10], c2 = h10 + i11.length;
      if (h10 < t6 && c2 > e10)
        return i11.domBoundsAround(t6, e10, h10);
      if (c2 >= t6 && -1 == n10 && (n10 = l10, s10 = h10), h10 > e10 && i11.dom.parentNode == this.dom) {
        r10 = l10, o10 = a5;
        break;
      }
      a5 = c2, h10 = c2 + i11.breakAfter;
    }
    return { from: s10, to: o10 < 0 ? i10 + this.length : o10, startDOM: (n10 ? this.children[n10 - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: r10 < this.children.length && r10 >= 0 ? this.children[r10].dom : null };
  }
  markDirty() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.flags |= 2, this.markParentsDirty(t6);
  }
  markParentsDirty(t6) {
    for (let e10 = this.parent; e10; e10 = e10.parent) {
      if (t6 && (e10.flags |= 2), 1 & e10.flags)
        return;
      e10.flags |= 1, t6 = false;
    }
  }
  setParent(t6) {
    this.parent != t6 && (this.parent = t6, 7 & this.flags && this.markParentsDirty(true));
  }
  setDOM(t6) {
    this.dom != t6 && (this.dom && (this.dom.cmView = null), this.dom = t6, t6.cmView = this);
  }
  get rootView() {
    for (let t6 = this; ; ) {
      let e10 = t6.parent;
      if (!e10)
        return t6;
      t6 = e10;
    }
  }
  replaceChildren(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eA;
    this.markDirty();
    for (let n10 = t6; n10 < e10; n10++) {
      let t7 = this.children[n10];
      t7.parent == this && 0 > i10.indexOf(t7) && t7.destroy();
    }
    this.children.splice(t6, e10 - t6, ...i10);
    for (let t7 = 0; t7 < i10.length; t7++)
      i10[t7].setParent(this);
  }
  ignoreMutation(t6) {
    return false;
  }
  ignoreEvent(t6) {
    return false;
  }
  childCursor() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length;
    return new eD(this.children, t6, this.children.length);
  }
  childPos(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return this.childCursor().findPos(t6, e10);
  }
  toString() {
    let t6 = this.constructor.name.replace("View", "");
    return t6 + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == t6 ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t6) {
    return t6.cmView;
  }
  get isEditable() {
    return true;
  }
  get isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  merge(t6, e10, i10, n10, s10, r10) {
    return false;
  }
  become(t6) {
    return false;
  }
  canReuseDOM(t6) {
    return t6.constructor == this.constructor && !((this.flags | t6.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t6 of this.children)
      t6.parent == this && t6.destroy();
    this.parent = null;
  }
}
function eO(t6) {
  let e10 = t6.nextSibling;
  return t6.parentNode.removeChild(t6), e10;
}
eM.prototype.breakAfter = 0;
class eD {
  constructor(t6, e10, i10) {
    this.children = t6, this.pos = e10, this.i = i10, this.off = 0;
  }
  findPos(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    for (; ; ) {
      if (t6 > this.pos || t6 == this.pos && (e10 > 0 || 0 == this.i || this.children[this.i - 1].breakAfter))
        return this.off = t6 - this.pos, this;
      let i10 = this.children[--this.i];
      this.pos -= i10.length + i10.breakAfter;
    }
  }
}
function eT(t6, e10, i10, n10, s10, r10, o10, l10, h10) {
  let { children: a5 } = t6, c2 = a5.length ? a5[e10] : null, d2 = r10.length ? r10[r10.length - 1] : null, u2 = d2 ? d2.breakAfter : o10;
  if (!(e10 == n10 && c2 && !o10 && !u2 && r10.length < 2 && c2.merge(i10, s10, r10.length ? d2 : null, 0 == i10, l10, h10))) {
    if (n10 < a5.length) {
      let t7 = a5[n10];
      t7 && (s10 < t7.length || t7.breakAfter && (null == d2 ? void 0 : d2.breakAfter)) ? (e10 == n10 && (t7 = t7.split(s10), s10 = 0), !u2 && d2 && t7.merge(0, s10, d2, true, 0, h10) ? r10[r10.length - 1] = t7 : ((s10 || t7.children.length && !t7.children[0].length) && t7.merge(0, s10, null, false, 0, h10), r10.push(t7))) : (null == t7 ? void 0 : t7.breakAfter) && (d2 ? d2.breakAfter = 1 : o10 = 1), n10++;
    }
    for (c2 && (c2.breakAfter = o10, i10 > 0 && (!o10 && r10.length && c2.merge(i10, c2.length, r10[0], false, l10, 0) ? c2.breakAfter = r10.shift().breakAfter : (i10 < c2.length || c2.children.length && 0 == c2.children[c2.children.length - 1].length) && c2.merge(i10, c2.length, null, false, l10, 0), e10++)); e10 < n10 && r10.length; )
      if (a5[n10 - 1].become(r10[r10.length - 1]))
        n10--, r10.pop(), h10 = r10.length ? 0 : l10;
      else if (a5[e10].become(r10[0]))
        e10++, r10.shift(), l10 = r10.length ? 0 : h10;
      else
        break;
    !r10.length && e10 && n10 < a5.length && !a5[e10 - 1].breakAfter && a5[n10].merge(0, 0, a5[e10 - 1], false, l10, h10) && e10--, (e10 < n10 || r10.length) && t6.replaceChildren(e10, n10, r10);
  }
}
function eE(t6, e10, i10, n10, s10, r10) {
  let o10 = t6.childCursor(), { i: l10, off: h10 } = o10.findPos(i10, 1), { i: a5, off: c2 } = o10.findPos(e10, -1), d2 = e10 - i10;
  for (let t7 of n10)
    d2 += t7.length;
  t6.length += d2, eT(t6, a5, c2, l10, h10, n10, 0, s10, r10);
}
let eR = "undefined" != typeof navigator ? navigator : { userAgent: "", vendor: "", platform: "" }, eB = "undefined" != typeof document ? document : { documentElement: { style: {} } }, eP = /Edge\/(\d+)/.exec(eR.userAgent), eL = /MSIE \d/.test(eR.userAgent), eN = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(eR.userAgent), eI = !!(eL || eN || eP), eV = !eI && /gecko\/(\d+)/i.test(eR.userAgent), eH = !eI && /Chrome\/(\d+)/.exec(eR.userAgent), eW = "webkitFontSmoothing" in eB.documentElement.style, eF = !eI && /Apple Computer/.test(eR.vendor), ez = eF && (/Mobile\/\w+/.test(eR.userAgent) || eR.maxTouchPoints > 2);
var e_ = { mac: ez || /Mac/.test(eR.platform), windows: /Win/.test(eR.platform), linux: /Linux|X11/.test(eR.platform), ie: eI, ie_version: eL ? eB.documentMode || 6 : eN ? +eN[1] : eP ? +eP[1] : 0, gecko: eV, gecko_version: eV ? +(/Firefox\/(\d+)/.exec(eR.userAgent) || [0, 0])[1] : 0, chrome: !!eH, chrome_version: eH ? +eH[1] : 0, ios: ez, android: /Android\b/.test(eR.userAgent), webkit: eW, safari: eF, webkit_version: eW ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0, tabSize: null != eB.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size" };
class ej extends eM {
  constructor(t6) {
    super(), this.text = t6;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t6) {
    this.setDOM(t6 || document.createTextNode(this.text));
  }
  sync(t6, e10) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e10 && e10.node == this.dom && (e10.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(t6) {
    3 == t6.nodeType && this.createDOM(t6);
  }
  merge(t6, e10, i10) {
    return !(8 & this.flags) && (!i10 || i10 instanceof ej && !(this.length - (e10 - t6) + i10.length > 256) && !(8 & i10.flags)) && (this.text = this.text.slice(0, t6) + (i10 ? i10.text : "") + this.text.slice(e10), this.markDirty(), true);
  }
  split(t6) {
    let e10 = new ej(this.text.slice(t6));
    return this.text = this.text.slice(0, t6), this.markDirty(), e10.flags |= 8 & this.flags, e10;
  }
  localPosFromDOM(t6, e10) {
    return t6 == this.dom ? e10 : e10 ? this.text.length : 0;
  }
  domAtPos(t6) {
    return new eC(this.dom, t6);
  }
  domBoundsAround(t6, e10, i10) {
    return { from: i10, to: i10 + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t6, e10) {
    return function(t7, e11, i10) {
      let n10 = t7.nodeValue.length;
      e11 > n10 && (e11 = n10);
      let s10 = e11, r10 = e11, o10 = 0;
      0 == e11 && i10 < 0 || e11 == n10 && i10 >= 0 ? !(e_.chrome || e_.gecko) && (e11 ? (s10--, o10 = 1) : r10 < n10 && (r10++, o10 = -1)) : i10 < 0 ? s10-- : r10 < n10 && r10++;
      let l10 = ew(t7, s10, r10).getClientRects();
      if (!l10.length)
        return null;
      let h10 = l10[(o10 ? o10 < 0 : i10 >= 0) ? 0 : l10.length - 1];
      return e_.safari && !o10 && 0 == h10.width && (h10 = Array.prototype.find.call(l10, (t10) => t10.width) || h10), o10 ? ef(h10, o10 < 0) : h10 || null;
    }(this.dom, t6, e10);
  }
}
class eq extends eM {
  constructor(t6, e10 = [], i10 = 0) {
    for (let n10 of (super(), this.mark = t6, this.children = e10, this.length = i10, e10))
      n10.setParent(this);
  }
  setAttrs(t6) {
    if (eb(t6), this.mark.class && (t6.className = this.mark.class), this.mark.attrs)
      for (let e10 in this.mark.attrs)
        t6.setAttribute(e10, this.mark.attrs[e10]);
    return t6;
  }
  canReuseDOM(t6) {
    return super.canReuseDOM(t6) && !((this.flags | t6.flags) & 8);
  }
  reuseDOM(t6) {
    t6.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t6), this.flags |= 6);
  }
  sync(t6, e10) {
    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t6, e10);
  }
  merge(t6, e10, i10, n10, s10, r10) {
    return (!i10 || !!(i10 instanceof eq && i10.mark.eq(this.mark)) && (!t6 || !(s10 <= 0)) && (!(e10 < this.length) || !(r10 <= 0))) && (eE(this, t6, e10, i10 ? i10.children.slice() : [], s10 - 1, r10 - 1), this.markDirty(), true);
  }
  split(t6) {
    let e10 = [], i10 = 0, n10 = -1, s10 = 0;
    for (let r11 of this.children) {
      let o10 = i10 + r11.length;
      o10 > t6 && e10.push(i10 < t6 ? r11.split(t6 - i10) : r11), n10 < 0 && i10 >= t6 && (n10 = s10), i10 = o10, s10++;
    }
    let r10 = this.length - t6;
    return this.length = t6, n10 > -1 && (this.children.length = n10, this.markDirty()), new eq(this.mark, e10, r10);
  }
  domAtPos(t6) {
    return eU(this, t6);
  }
  coordsAt(t6, e10) {
    return eG(this, t6, e10);
  }
}
class eK extends eM {
  static create(t6, e10, i10) {
    return new eK(t6, e10, i10);
  }
  constructor(t6, e10, i10) {
    super(), this.widget = t6, this.length = e10, this.side = i10, this.prevWidget = null;
  }
  split(t6) {
    let e10 = eK.create(this.widget, this.length - t6, this.side);
    return this.length -= t6, e10;
  }
  sync(t6) {
    this.dom && this.widget.updateDOM(this.dom, t6) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t6)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(t6, e10, i10, n10, s10, r10) {
    return (!i10 || i10 instanceof eK && !!this.widget.compare(i10.widget) && (!(t6 > 0) || !(s10 <= 0)) && (!(e10 < this.length) || !(r10 <= 0))) && (this.length = t6 + (i10 ? i10.length : 0) + (this.length - e10), true);
  }
  become(t6) {
    return t6 instanceof eK && t6.side == this.side && this.widget.constructor == t6.widget.constructor && (this.widget.compare(t6.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t6.widget, this.length = t6.length, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t6) {
    return this.widget.ignoreEvent(t6);
  }
  get overrideDOMText() {
    if (0 == this.length)
      return v.empty;
    let t6 = this;
    for (; t6.parent; )
      t6 = t6.parent;
    let { view: e10 } = t6, i10 = e10 && e10.state.doc, n10 = this.posAtStart;
    return i10 ? i10.slice(n10, n10 + this.length) : v.empty;
  }
  domAtPos(t6) {
    return (this.length ? 0 == t6 : this.side > 0) ? eC.before(this.dom) : eC.after(this.dom, t6 == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t6, e10) {
    let i10 = this.widget.coordsAt(this.dom, t6, e10);
    if (i10)
      return i10;
    let n10 = this.dom.getClientRects(), s10 = null;
    if (!n10.length)
      return null;
    let r10 = this.side ? this.side < 0 : t6 > 0;
    for (let e11 = r10 ? n10.length - 1 : 0; s10 = n10[e11], t6 > 0 ? 0 != e11 : e11 != n10.length - 1 && !(s10.top < s10.bottom); e11 += r10 ? -1 : 1)
      ;
    return ef(s10, !r10);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class e$ extends eM {
  constructor(t6) {
    super(), this.side = t6;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(t6) {
    return t6 instanceof e$ && t6.side == this.side;
  }
  split() {
    return new e$(this.side);
  }
  sync() {
    if (!this.dom) {
      let t6 = document.createElement("img");
      t6.className = "cm-widgetBuffer", t6.setAttribute("aria-hidden", "true"), this.setDOM(t6);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t6) {
    return this.side > 0 ? eC.before(this.dom) : eC.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t6) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return v.empty;
  }
  get isHidden() {
    return true;
  }
}
function eU(t6, e10) {
  let i10 = t6.dom, { children: n10 } = t6, s10 = 0;
  for (let t7 = 0; s10 < n10.length; s10++) {
    let r10 = n10[s10], o10 = t7 + r10.length;
    if (!(o10 == t7 && 0 >= r10.getSide())) {
      if (e10 > t7 && e10 < o10 && r10.dom.parentNode == i10)
        return r10.domAtPos(e10 - t7);
      if (e10 <= t7)
        break;
      t7 = o10;
    }
  }
  for (let t7 = s10; t7 > 0; t7--) {
    let e11 = n10[t7 - 1];
    if (e11.dom.parentNode == i10)
      return e11.domAtPos(e11.length);
  }
  for (let t7 = s10; t7 < n10.length; t7++) {
    let e11 = n10[t7];
    if (e11.dom.parentNode == i10)
      return e11.domAtPos(0);
  }
  return new eC(i10, 0);
}
function eG(t6, e10, i10) {
  let n10 = null, s10 = -1, r10 = null, o10 = -1;
  !function t7(e11, l11) {
    for (let h10 = 0, a5 = 0; h10 < e11.children.length && a5 <= l11; h10++) {
      let c2 = e11.children[h10], d2 = a5 + c2.length;
      d2 >= l11 && (c2.children.length ? t7(c2, l11 - a5) : (!r10 || r10.isHidden && i10 > 0) && (d2 > l11 || a5 == d2 && c2.getSide() > 0) ? (r10 = c2, o10 = l11 - a5) : (a5 < l11 || a5 == d2 && 0 > c2.getSide() && !c2.isHidden) && (n10 = c2, s10 = l11 - a5)), a5 = d2;
    }
  }(t6, e10);
  let l10 = (i10 < 0 ? n10 : r10) || n10 || r10;
  return l10 ? l10.coordsAt(Math.max(0, l10 == n10 ? s10 : o10), i10) : function(t7) {
    let e11 = t7.dom.lastChild;
    if (!e11)
      return t7.dom.getBoundingClientRect();
    let i11 = el(e11);
    return i11[i11.length - 1] || null;
  }(t6);
}
function eJ(t6, e10) {
  for (let i10 in t6)
    "class" == i10 && e10.class ? e10.class += " " + t6.class : "style" == i10 && e10.style ? e10.style += ";" + t6.style : e10[i10] = t6[i10];
  return e10;
}
ej.prototype.children = eK.prototype.children = e$.prototype.children = eA;
let eY = /* @__PURE__ */ Object.create(null);
function eX(t6, e10, i10) {
  if (t6 == e10)
    return true;
  t6 || (t6 = eY), e10 || (e10 = eY);
  let n10 = Object.keys(t6), s10 = Object.keys(e10);
  if (n10.length - (i10 && n10.indexOf(i10) > -1 ? 1 : 0) != s10.length - (i10 && s10.indexOf(i10) > -1 ? 1 : 0))
    return false;
  for (let r10 of n10)
    if (r10 != i10 && (-1 == s10.indexOf(r10) || t6[r10] !== e10[r10]))
      return false;
  return true;
}
function eQ(t6, e10, i10) {
  let n10 = false;
  if (e10)
    for (let s10 in e10)
      i10 && s10 in i10 || (n10 = true, "style" == s10 ? t6.style.cssText = "" : t6.removeAttribute(s10));
  if (i10)
    for (let s10 in i10)
      e10 && e10[s10] == i10[s10] || (n10 = true, "style" == s10 ? t6.style.cssText = i10[s10] : t6.setAttribute(s10, i10[s10]));
  return n10;
}
class eZ extends eM {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(t6, e10, i10, n10, s10, r10) {
    if (i10) {
      if (!(i10 instanceof eZ))
        return false;
      this.dom || i10.transferDOM(this);
    }
    return n10 && this.setDeco(i10 ? i10.attrs : null), eE(this, t6, e10, i10 ? i10.children.slice() : [], s10, r10), true;
  }
  split(t6) {
    let e10 = new eZ();
    if (e10.breakAfter = this.breakAfter, 0 == this.length)
      return e10;
    let { i: i10, off: n10 } = this.childPos(t6);
    n10 && (e10.append(this.children[i10].split(n10), 0), this.children[i10].merge(n10, this.children[i10].length, null, false, 0, 0), i10++);
    for (let t7 = i10; t7 < this.children.length; t7++)
      e10.append(this.children[t7], 0);
    for (; i10 > 0 && 0 == this.children[i10 - 1].length; )
      this.children[--i10].destroy();
    return this.children.length = i10, this.markDirty(), this.length = t6, e10;
  }
  transferDOM(t6) {
    this.dom && (this.markDirty(), t6.setDOM(this.dom), t6.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t6) {
    eX(this.attrs, t6) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t6);
  }
  append(t6, e10) {
    !function t7(e11, i10, n10) {
      let s10, { children: r10 } = e11;
      n10 > 0 && i10 instanceof eq && r10.length && (s10 = r10[r10.length - 1]) instanceof eq && s10.mark.eq(i10.mark) ? t7(s10, i10.children[0], n10 - 1) : (r10.push(i10), i10.setParent(e11)), e11.length += i10.length;
    }(this, t6, e10);
  }
  addLineDeco(t6) {
    let e10 = t6.spec.attributes, i10 = t6.spec.class;
    e10 && (this.attrs = eJ(e10, this.attrs || {})), i10 && (this.attrs = eJ({ class: i10 }, this.attrs || {}));
  }
  domAtPos(t6) {
    return eU(this, t6);
  }
  reuseDOM(t6) {
    "DIV" == t6.nodeName && (this.setDOM(t6), this.flags |= 6);
  }
  sync(t6, e10) {
    var i10;
    this.dom ? 4 & this.flags && (eb(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), void 0 !== this.prevAttrs && (eQ(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t6, e10);
    let n10 = this.dom.lastChild;
    for (; n10 && eM.get(n10) instanceof eq; )
      n10 = n10.lastChild;
    if (!n10 || !this.length || "BR" != n10.nodeName && (null === (i10 = eM.get(n10)) || void 0 === i10 ? void 0 : i10.isEditable) == false && (!e_.ios || !this.children.some((t7) => t7 instanceof ej))) {
      let t7 = document.createElement("BR");
      t7.cmIgnore = true, this.dom.appendChild(t7);
    }
  }
  measureTextSize() {
    if (0 == this.children.length || this.length > 20)
      return null;
    let t6 = 0, e10;
    for (let i10 of this.children) {
      if (!(i10 instanceof ej) || /[^ -~]/.test(i10.text))
        return null;
      let n10 = el(i10.dom);
      if (1 != n10.length)
        return null;
      t6 += n10[0].width, e10 = n10[0].height;
    }
    return t6 ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t6 / this.length, textHeight: e10 } : null;
  }
  coordsAt(t6, e10) {
    let i10 = eG(this, t6, e10);
    if (!this.children.length && i10 && this.parent) {
      let { heightOracle: t7 } = this.parent.view.viewState, e11 = i10.bottom - i10.top;
      if (2 > Math.abs(e11 - t7.lineHeight) && t7.textHeight < e11) {
        let n10 = (e11 - t7.textHeight) / 2;
        return { top: i10.top + n10, bottom: i10.bottom - n10, left: i10.left, right: i10.left };
      }
    }
    return i10;
  }
  become(t6) {
    return false;
  }
  covers() {
    return true;
  }
  static find(t6, e10) {
    for (let i10 = 0, n10 = 0; i10 < t6.children.length; i10++) {
      let s10 = t6.children[i10], r10 = n10 + s10.length;
      if (r10 >= e10) {
        if (s10 instanceof eZ)
          return s10;
        if (r10 > e10)
          break;
      }
      n10 = r10 + s10.breakAfter;
    }
    return null;
  }
}
class e0 extends eM {
  constructor(t6, e10, i10) {
    super(), this.widget = t6, this.length = e10, this.deco = i10, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t6, e10, i10, n10, s10, r10) {
    return (!i10 || i10 instanceof e0 && !!this.widget.compare(i10.widget) && (!(t6 > 0) || !(s10 <= 0)) && (!(e10 < this.length) || !(r10 <= 0))) && (this.length = t6 + (i10 ? i10.length : 0) + (this.length - e10), true);
  }
  domAtPos(t6) {
    return 0 == t6 ? eC.before(this.dom) : eC.after(this.dom, t6 == this.length);
  }
  split(t6) {
    let e10 = this.length - t6;
    this.length = t6;
    let i10 = new e0(this.widget, e10, this.deco);
    return i10.breakAfter = this.breakAfter, i10;
  }
  get children() {
    return eA;
  }
  sync(t6) {
    this.dom && this.widget.updateDOM(this.dom, t6) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t6)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : v.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t6) {
    return t6 instanceof e0 && t6.widget.constructor == this.widget.constructor && (t6.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t6.widget, this.length = t6.length, this.deco = t6.deco, this.breakAfter = t6.breakAfter, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t6) {
    return this.widget.ignoreEvent(t6);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(t6, e10) {
    return this.widget.coordsAt(this.dom, t6, e10);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t6) {
    let { startSide: e10, endSide: i10 } = this.deco;
    return e10 != i10 && (t6 < 0 ? e10 < 0 : i10 > 0);
  }
}
class e1 {
  eq(t6) {
    return false;
  }
  updateDOM(t6, e10) {
    return false;
  }
  compare(t6) {
    return this == t6 || this.constructor == t6.constructor && this.eq(t6);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t6) {
    return true;
  }
  coordsAt(t6, e10, i10) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(t6) {
  }
}
var e2 = ((V = e2 || (e2 = {}))[V.Text = 0] = "Text", V[V.WidgetBefore = 1] = "WidgetBefore", V[V.WidgetAfter = 2] = "WidgetAfter", V[V.WidgetRange = 3] = "WidgetRange", V);
class e3 extends tW {
  constructor(t6, e10, i10, n10) {
    super(), this.startSide = t6, this.endSide = e10, this.widget = i10, this.spec = n10;
  }
  get heightRelevant() {
    return false;
  }
  static mark(t6) {
    return new e8(t6);
  }
  static widget(t6) {
    let e10 = Math.max(-1e4, Math.min(1e4, t6.side || 0)), i10 = !!t6.block;
    return e10 += i10 && !t6.inlineOrder ? e10 > 0 ? 3e8 : -4e8 : e10 > 0 ? 1e8 : -1e8, new e5(t6, e10, e10, i10, t6.widget || null, false);
  }
  static replace(t6) {
    let e10 = !!t6.block, i10, n10;
    if (t6.isBlockGap)
      i10 = -5e8, n10 = 4e8;
    else {
      let { start: s10, end: r10 } = e9(t6, e10);
      i10 = (s10 ? e10 ? -3e8 : -1 : 5e8) - 1, n10 = (r10 ? e10 ? 2e8 : 1 : -6e8) + 1;
    }
    return new e5(t6, i10, n10, e10, t6.widget || null, true);
  }
  static line(t6) {
    return new e4(t6);
  }
  static set(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return tj.of(t6, e10);
  }
  hasHeight() {
    return !!this.widget && this.widget.estimatedHeight > -1;
  }
}
e3.none = tj.empty;
class e8 extends e3 {
  constructor(t6) {
    let { start: e10, end: i10 } = e9(t6);
    super(e10 ? -1 : 5e8, i10 ? 1 : -6e8, null, t6), this.tagName = t6.tagName || "span", this.class = t6.class || "", this.attrs = t6.attributes || null;
  }
  eq(t6) {
    var e10, i10;
    return this == t6 || t6 instanceof e8 && this.tagName == t6.tagName && (this.class || (null === (e10 = this.attrs) || void 0 === e10 ? void 0 : e10.class)) == (t6.class || (null === (i10 = t6.attrs) || void 0 === i10 ? void 0 : i10.class)) && eX(this.attrs, t6.attrs, "class");
  }
  range(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6;
    if (t6 >= e10)
      throw RangeError("Mark decorations may not be empty");
    return super.range(t6, e10);
  }
}
e8.prototype.point = false;
class e4 extends e3 {
  constructor(t6) {
    super(-2e8, -2e8, null, t6);
  }
  eq(t6) {
    return t6 instanceof e4 && this.spec.class == t6.spec.class && eX(this.spec.attributes, t6.spec.attributes);
  }
  range(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6;
    if (e10 != t6)
      throw RangeError("Line decoration ranges must be zero-length");
    return super.range(t6, e10);
  }
}
e4.prototype.mapMode = q.TrackBefore, e4.prototype.point = true;
class e5 extends e3 {
  constructor(t6, e10, i10, n10, s10, r10) {
    super(e10, i10, s10, t6), this.block = n10, this.isReplace = r10, this.mapMode = n10 ? e10 <= 0 ? q.TrackBefore : q.TrackAfter : q.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? e2.WidgetRange : this.startSide <= 0 ? e2.WidgetBefore : e2.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t6) {
    var e10, i10;
    return t6 instanceof e5 && ((e10 = this.widget) == (i10 = t6.widget) || !!(e10 && i10 && e10.compare(i10))) && this.block == t6.block && this.startSide == t6.startSide && this.endSide == t6.endSide;
  }
  range(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6;
    if (this.isReplace && (t6 > e10 || t6 == e10 && this.startSide > 0 && this.endSide <= 0))
      throw RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e10 != t6)
      throw RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t6, e10);
  }
}
function e9(t6) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], { inclusiveStart: i10, inclusiveEnd: n10 } = t6;
  return null == i10 && (i10 = t6.inclusive), null == n10 && (n10 = t6.inclusive), { start: null != i10 ? i10 : e10, end: null != n10 ? n10 : e10 };
}
function e6(t6, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s10 = i10.length - 1;
  s10 >= 0 && i10[s10] + n10 >= t6 ? i10[s10] = Math.max(i10[s10], e10) : i10.push(t6, e10);
}
e5.prototype.point = true;
class e7 {
  constructor(t6, e10, i10, n10) {
    this.doc = t6, this.pos = e10, this.end = i10, this.disallowBlockEffectsFor = n10, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t6.iter(), this.skip = e10;
  }
  posCovered() {
    if (0 == this.content.length)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t6 = this.content[this.content.length - 1];
    return !(t6.breakAfter || t6 instanceof e0 && t6.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new eZ()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.bufferMarks;
    this.pendingBuffer && (this.curLine.append(it(new e$(-1), t6), t6.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t6) {
    this.flushBuffer(), this.curLine = null, this.content.push(t6);
  }
  finish(t6) {
    this.pendingBuffer && t6 <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || t6 && this.content.length && this.content[this.content.length - 1] instanceof e0 || this.getLine();
  }
  buildText(t6, e10, i10) {
    for (; t6 > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: e11, lineBreak: i11, done: n11 } = this.cursor.next(this.skip);
        if (this.skip = 0, n11)
          throw Error("Ran out of text content when drawing inline views");
        if (i11) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t6--;
          continue;
        }
        this.text = e11, this.textOff = 0;
      }
      let n10 = Math.min(this.text.length - this.textOff, t6, 512);
      this.flushBuffer(e10.slice(e10.length - i10)), this.getLine().append(it(new ej(this.text.slice(this.textOff, this.textOff + n10)), e10), i10), this.atCursorPos = true, this.textOff += n10, t6 -= n10, i10 = 0;
    }
  }
  span(t6, e10, i10, n10) {
    this.buildText(e10 - t6, i10, n10), this.pos = e10, this.openStart < 0 && (this.openStart = n10);
  }
  point(t6, e10, i10, n10, s10, r10) {
    if (this.disallowBlockEffectsFor[r10] && i10 instanceof e5) {
      if (i10.block)
        throw RangeError("Block decorations may not be specified via plugins");
      if (e10 > this.doc.lineAt(this.pos).to)
        throw RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let o10 = e10 - t6;
    if (i10 instanceof e5) {
      if (i10.block)
        i10.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new e0(i10.widget || ie.block, o10, i10));
      else {
        let r11 = eK.create(i10.widget || ie.inline, o10, o10 ? 0 : i10.startSide), l10 = this.atCursorPos && !r11.isEditable && s10 <= n10.length && (t6 < e10 || i10.startSide > 0), h10 = !r11.isEditable && (t6 < e10 || s10 > n10.length || i10.startSide <= 0), a5 = this.getLine();
        2 != this.pendingBuffer || l10 || r11.isEditable || (this.pendingBuffer = 0), this.flushBuffer(n10), l10 && (a5.append(it(new e$(1), n10), s10), s10 = n10.length + Math.max(0, s10 - n10.length)), a5.append(it(r11, n10), s10), this.atCursorPos = h10, this.pendingBuffer = h10 ? t6 < e10 || s10 > n10.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n10.slice());
      }
    } else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i10);
    o10 && (this.textOff + o10 <= this.text.length ? this.textOff += o10 : (this.skip += o10 - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e10), this.openStart < 0 && (this.openStart = s10);
  }
  static build(t6, e10, i10, n10, s10) {
    let r10 = new e7(t6, e10, i10, s10);
    return r10.openEnd = tj.spans(n10, e10, i10, r10), r10.openStart < 0 && (r10.openStart = r10.openEnd), r10.finish(r10.openEnd), r10;
  }
}
function it(t6, e10) {
  for (let i10 of e10)
    t6 = new eq(i10, [t6], t6.length);
  return t6;
}
class ie extends e1 {
  constructor(t6) {
    super(), this.tag = t6;
  }
  eq(t6) {
    return t6.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t6) {
    return t6.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
ie.inline = new ie("span"), ie.block = new ie("div");
var ii = ((H = ii || (ii = {}))[H.LTR = 0] = "LTR", H[H.RTL = 1] = "RTL", H);
let is = ii.LTR, ir = ii.RTL;
function io(t6) {
  let e10 = [];
  for (let i10 = 0; i10 < t6.length; i10++)
    e10.push(1 << +t6[i10]);
  return e10;
}
let il = io("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ih = io("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ia = /* @__PURE__ */ Object.create(null), ic = [];
for (let t6 of ["()", "[]", "{}"]) {
  let e10 = t6.charCodeAt(0), i10 = t6.charCodeAt(1);
  ia[e10] = i10, ia[i10] = -e10;
}
function id(t6) {
  return t6 <= 247 ? il[t6] : 1424 <= t6 && t6 <= 1524 ? 2 : 1536 <= t6 && t6 <= 1785 ? ih[t6 - 1536] : 1774 <= t6 && t6 <= 2220 ? 4 : 8192 <= t6 && t6 <= 8204 ? 256 : 64336 <= t6 && t6 <= 65023 ? 4 : 1;
}
let iu = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ip {
  get dir() {
    return this.level % 2 ? ir : is;
  }
  constructor(t6, e10, i10) {
    this.from = t6, this.to = e10, this.level = i10;
  }
  side(t6, e10) {
    return this.dir == e10 == t6 ? this.to : this.from;
  }
  forward(t6, e10) {
    return t6 == (this.dir == e10);
  }
  static find(t6, e10, i10, n10) {
    let s10 = -1;
    for (let r10 = 0; r10 < t6.length; r10++) {
      let o10 = t6[r10];
      if (o10.from <= e10 && o10.to >= e10) {
        if (o10.level == i10)
          return r10;
        (s10 < 0 || (0 != n10 ? n10 < 0 ? o10.from < e10 : o10.to > e10 : t6[s10].level > o10.level)) && (s10 = r10);
      }
    }
    if (s10 < 0)
      throw RangeError("Index out of range");
    return s10;
  }
}
let ig = [];
function im(t6) {
  return [new ip(0, t6, 0)];
}
let iv = "", iw = tn.define(), iy = tn.define(), ib = tn.define(), ix = tn.define(), ik = tn.define(), iS = tn.define(), iC = tn.define(), iA = tn.define({ combine: (t6) => t6.some((t7) => t7) }), iM = tn.define({ combine: (t6) => t6.some((t7) => t7) }), iO = tn.define();
class iD {
  constructor(t6, e10 = "nearest", i10 = "nearest", n10 = 5, s10 = 5, r10 = false) {
    this.range = t6, this.y = e10, this.x = i10, this.yMargin = n10, this.xMargin = s10, this.isSnapshot = r10;
  }
  map(t6) {
    return t6.empty ? this : new iD(this.range.map(t6), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t6) {
    return this.range.to <= t6.doc.length ? this : new iD(tt.cursor(t6.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
let iT = tT.define({ map: (t6, e10) => t6.map(e10) });
function iE(t6, e10, i10) {
  let n10 = t6.facet(ix);
  n10.length ? n10[0](e10) : window.onerror ? window.onerror(String(e10), i10, void 0, void 0, e10) : i10 ? console.error(i10 + ":", e10) : console.error(e10);
}
let iR = tn.define({ combine: (t6) => !t6.length || t6[0] }), iB = 0, iP = tn.define();
class iL {
  constructor(t6, e10, i10, n10, s10) {
    this.id = t6, this.create = e10, this.domEventHandlers = i10, this.domEventObservers = n10, this.extension = s10(this);
  }
  static define(t6, e10) {
    let { eventHandlers: i10, eventObservers: n10, provide: s10, decorations: r10 } = e10 || {};
    return new iL(iB++, t6, i10, n10, (t7) => {
      let e11 = [iP.of(t7)];
      return r10 && e11.push(iH.of((e12) => {
        let i11 = e12.plugin(t7);
        return i11 ? r10(i11) : e3.none;
      })), s10 && e11.push(s10(t7)), e11;
    });
  }
  static fromClass(t6, e10) {
    return iL.define((e11) => new t6(e11), e10);
  }
}
class iN {
  constructor(t6) {
    this.spec = t6, this.mustUpdate = null, this.value = null;
  }
  update(t6) {
    if (this.value) {
      if (this.mustUpdate) {
        let t7 = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t7);
          } catch (e10) {
            if (iE(t7.state, e10, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch (t10) {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(t6);
      } catch (e10) {
        iE(t6.state, e10, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t6) {
    var e10;
    if (null === (e10 = this.value) || void 0 === e10 ? void 0 : e10.destroy)
      try {
        this.value.destroy();
      } catch (e11) {
        iE(t6.state, e11, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
let iI = tn.define(), iV = tn.define(), iH = tn.define(), iW = tn.define(), iF = tn.define(), iz = tn.define();
function i_(t6, e10) {
  let i10 = t6.state.facet(iz);
  if (!i10.length)
    return i10;
  let n10 = i10.map((e11) => e11 instanceof Function ? e11(t6) : e11), s10 = [];
  return tj.spans(n10, e10.from, e10.to, { point() {
  }, span(t7, i11, n11, r10) {
    let o10 = t7 - e10.from, l10 = i11 - e10.from, h10 = s10;
    for (let t10 = n11.length - 1; t10 >= 0; t10--, r10--) {
      let i12 = n11[t10].spec.bidiIsolate, s11;
      if (null == i12 && (i12 = function(t11, e11, i13) {
        for (let n12 = e11; n12 < i13; n12++) {
          let e12 = id(t11.charCodeAt(n12));
          if (1 == e12)
            break;
          if (2 == e12 || 4 == e12)
            return ir;
        }
        return is;
      }(e10.text, o10, l10)), r10 > 0 && h10.length && (s11 = h10[h10.length - 1]).to == o10 && s11.direction == i12)
        s11.to = l10, h10 = s11.inner;
      else {
        let t11 = { from: o10, to: l10, direction: i12, inner: [] };
        h10.push(t11), h10 = t11.inner;
      }
    }
  } }), s10;
}
let ij = tn.define();
function iq(t6) {
  let e10 = 0, i10 = 0, n10 = 0, s10 = 0;
  for (let r10 of t6.state.facet(ij)) {
    let o10 = r10(t6);
    o10 && (null != o10.left && (e10 = Math.max(e10, o10.left)), null != o10.right && (i10 = Math.max(i10, o10.right)), null != o10.top && (n10 = Math.max(n10, o10.top)), null != o10.bottom && (s10 = Math.max(s10, o10.bottom)));
  }
  return { left: e10, right: i10, top: n10, bottom: s10 };
}
let iK = tn.define();
class i$ {
  constructor(t6, e10, i10, n10) {
    this.fromA = t6, this.toA = e10, this.fromB = i10, this.toB = n10;
  }
  join(t6) {
    return new i$(Math.min(this.fromA, t6.fromA), Math.max(this.toA, t6.toA), Math.min(this.fromB, t6.fromB), Math.max(this.toB, t6.toB));
  }
  addToSet(t6) {
    let e10 = t6.length, i10 = this;
    for (; e10 > 0; e10--) {
      let n10 = t6[e10 - 1];
      if (!(n10.fromA > i10.toA)) {
        if (n10.toA < i10.fromA)
          break;
        i10 = i10.join(n10), t6.splice(e10 - 1, 1);
      }
    }
    return t6.splice(e10, 0, i10), t6;
  }
  static extendWithRanges(t6, e10) {
    if (0 == e10.length)
      return t6;
    let i10 = [];
    for (let n10 = 0, s10 = 0, r10 = 0, o10 = 0; ; n10++) {
      let l10 = n10 == t6.length ? null : t6[n10], h10 = r10 - o10, a5 = l10 ? l10.fromB : 1e9;
      for (; s10 < e10.length && e10[s10] < a5; ) {
        let t7 = e10[s10], n11 = e10[s10 + 1], r11 = Math.max(o10, t7), l11 = Math.min(a5, n11);
        if (r11 <= l11 && new i$(r11 + h10, l11 + h10, r11, l11).addToSet(i10), n11 > a5)
          break;
        s10 += 2;
      }
      if (!l10)
        return i10;
      new i$(l10.fromA, l10.toA, l10.fromB, l10.toB).addToSet(i10), r10 = l10.toA, o10 = l10.toB;
    }
  }
}
class iU {
  constructor(t6, e10, i10) {
    for (let n11 of (this.view = t6, this.state = e10, this.transactions = i10, this.flags = 0, this.startState = t6.state, this.changes = $.empty(this.startState.doc.length), i10))
      this.changes = this.changes.compose(n11.changes);
    let n10 = [];
    this.changes.iterChangedRanges((t7, e11, i11, s10) => n10.push(new i$(t7, e11, i11, s10))), this.changedRanges = n10;
  }
  static create(t6, e10, i10) {
    return new iU(t6, e10, i10);
  }
  get viewportChanged() {
    return (4 & this.flags) > 0;
  }
  get heightChanged() {
    return (2 & this.flags) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (10 & this.flags) > 0;
  }
  get focusChanged() {
    return (1 & this.flags) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((t6) => t6.selection);
  }
  get empty() {
    return 0 == this.flags && 0 == this.transactions.length;
  }
}
class iG extends eM {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t6) {
    super(), this.view = t6, this.decorations = [], this.dynamicDecorationMap = [], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t6.contentDOM), this.children = [new eZ()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new i$(0, 0, 0, t6.state.doc.length)], 0, null);
  }
  update(t6) {
    var e10, i10, n10, s10, r10, o10;
    let l10, h10;
    let a5 = t6.changedRanges;
    this.minWidth > 0 && a5.length && (a5.every((t7) => {
      let { fromA: e11, toA: i11 } = t7;
      return i11 < this.minWidthFrom || e11 > this.minWidthTo;
    }) ? (this.minWidthFrom = t6.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t6.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let c2 = -1;
    !(this.view.inputState.composing >= 0) || ((null === (e10 = this.domChanged) || void 0 === e10 ? void 0 : e10.newSel) ? c2 = this.domChanged.newSel.head : (i10 = t6.changes, n10 = this.hasComposition, l10 = false, n10 && i10.iterChangedRanges((t7, e11) => {
      t7 < n10.to && e11 > n10.from && (l10 = true);
    }), l10 || t6.selectionSet || (c2 = t6.state.selection.main.head)));
    let d2 = c2 > -1 ? function(t7, e11, i11) {
      let n11 = iY(t7, i11);
      if (!n11)
        return null;
      let { node: s11, from: r11, to: o11 } = n11, l11 = s11.nodeValue;
      if (/[\n\r]/.test(l11) || t7.state.doc.sliceString(n11.from, n11.to) != l11)
        return null;
      let h11 = e11.invertedDesc, a6 = new i$(h11.mapPos(r11), h11.mapPos(o11), r11, o11), c3 = [];
      for (let e12 = s11.parentNode; ; e12 = e12.parentNode) {
        let i12 = eM.get(e12);
        if (i12 instanceof eq)
          c3.push({ node: e12, deco: i12.mark });
        else {
          if (i12 instanceof eZ || "DIV" == e12.nodeName && e12.parentNode == t7.contentDOM)
            return { range: a6, text: s11, marks: c3, line: e12 };
          if (e12 == t7.contentDOM)
            return null;
          c3.push({ node: e12, deco: new e8({ inclusive: true, attributes: function(t10) {
            let e13 = /* @__PURE__ */ Object.create(null);
            for (let i13 = 0; i13 < t10.attributes.length; i13++) {
              let n12 = t10.attributes[i13];
              e13[n12.name] = n12.value;
            }
            return e13;
          }(e12), tagName: e12.tagName.toLowerCase() }) });
        }
      }
    }(this.view, t6.changes, c2) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: e11, to: i11 } = this.hasComposition;
      a5 = new i$(e11, i11, t6.changes.mapPos(e11, -1), t6.changes.mapPos(i11, 1)).addToSet(a5.slice());
    }
    this.hasComposition = d2 ? { from: d2.range.fromB, to: d2.range.toB } : null, (e_.ie || e_.chrome) && !d2 && t6 && t6.state.doc.lines != t6.startState.doc.lines && (this.forceSelection = true);
    let u2 = (s10 = this.decorations, r10 = this.updateDeco(), o10 = t6.changes, h10 = new iX(), tj.compare(s10, r10, o10, h10), h10.changes);
    return a5 = i$.extendWithRanges(a5, u2), (!!(7 & this.flags) || 0 != a5.length) && (this.updateInner(a5, t6.startState.doc.length, d2), t6.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(t6, e10, i10) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(t6, e10, i10);
    let { observer: n10 } = this.view;
    n10.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let t7 = e_.chrome || e_.ios ? { node: n10.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, t7), this.flags &= -8, t7 && (t7.written || n10.selectionRange.focusNode != t7.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((t7) => t7.flags &= -9);
    let s10 = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let t7 of this.children)
        t7 instanceof e0 && t7.widget instanceof iJ && s10.push(t7.dom);
    n10.updateGaps(s10);
  }
  updateChildren(t6, e10, i10) {
    let n10 = i10 ? i10.range.addToSet(t6.slice()) : t6, s10 = this.childCursor(e10);
    for (let t7 = n10.length - 1; ; t7--) {
      let e11 = t7 >= 0 ? n10[t7] : null;
      if (!e11)
        break;
      let { fromA: r10, toA: o10, fromB: l10, toB: h10 } = e11, a5, c2, d2, u2;
      if (i10 && i10.range.fromB < h10 && i10.range.toB > l10) {
        let t10 = e7.build(this.view.state.doc, l10, i10.range.fromB, this.decorations, this.dynamicDecorationMap), e12 = e7.build(this.view.state.doc, i10.range.toB, h10, this.decorations, this.dynamicDecorationMap);
        c2 = t10.breakAtStart, d2 = t10.openStart, u2 = e12.openEnd;
        let n11 = this.compositionView(i10);
        e12.breakAtStart ? n11.breakAfter = 1 : e12.content.length && n11.merge(n11.length, n11.length, e12.content[0], false, e12.openStart, 0) && (n11.breakAfter = e12.content[0].breakAfter, e12.content.shift()), t10.content.length && n11.merge(0, 0, t10.content[t10.content.length - 1], true, 0, t10.openEnd) && t10.content.pop(), a5 = t10.content.concat(n11).concat(e12.content);
      } else
        ({ content: a5, breakAtStart: c2, openStart: d2, openEnd: u2 } = e7.build(this.view.state.doc, l10, h10, this.decorations, this.dynamicDecorationMap));
      let { i: f2, off: p2 } = s10.findPos(o10, 1), { i: g2, off: m2 } = s10.findPos(r10, -1);
      eT(this, g2, m2, f2, p2, a5, c2, d2, u2);
    }
    i10 && this.fixCompositionDOM(i10);
  }
  compositionView(t6) {
    let e10 = new ej(t6.text.nodeValue);
    for (let { deco: i11 } of (e10.flags |= 8, t6.marks))
      e10 = new eq(i11, [e10], e10.length);
    let i10 = new eZ();
    return i10.append(e10, 0), i10;
  }
  fixCompositionDOM(t6) {
    let e10 = (t7, e11) => {
      e11.flags |= 8 | (e11.children.some((t10) => 7 & t10.flags) ? 1 : 0), this.markedForComposition.add(e11);
      let i11 = eM.get(t7);
      i11 && i11 != e11 && (i11.dom = null), e11.setDOM(t7);
    }, i10 = this.childPos(t6.range.fromB, 1), n10 = this.children[i10.i];
    e10(t6.line, n10);
    for (let s10 = t6.marks.length - 1; s10 >= -1; s10--)
      i10 = n10.childPos(i10.off, 1), n10 = n10.children[i10.i], e10(s10 >= 0 ? t6.marks[s10].node : t6.text, n10);
  }
  updateSelection() {
    var t6;
    let e10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (e10 || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n10 = this.view.root.activeElement, s10 = n10 == this.dom, r10 = !s10 && eo(this.dom, this.view.observer.selectionRange) && !(n10 && this.dom.contains(n10));
    if (!(s10 || i10 || r10))
      return;
    let o10 = this.forceSelection;
    this.forceSelection = false;
    let l10 = this.view.state.selection.main, h10 = this.moveToLine(this.domAtPos(l10.anchor)), a5 = l10.empty ? h10 : this.moveToLine(this.domAtPos(l10.head));
    if (e_.gecko && l10.empty && !this.hasComposition && 1 == (t6 = h10).node.nodeType && t6.node.firstChild && (0 == t6.offset || "false" == t6.node.childNodes[t6.offset - 1].contentEditable) && (t6.offset == t6.node.childNodes.length || "false" == t6.node.childNodes[t6.offset].contentEditable)) {
      let t7 = document.createTextNode("");
      this.view.observer.ignore(() => h10.node.insertBefore(t7, h10.node.childNodes[h10.offset] || null)), h10 = a5 = new eC(t7, 0), o10 = true;
    }
    let c2 = this.view.observer.selectionRange;
    !o10 && c2.focusNode && (eh(h10.node, h10.offset, c2.anchorNode, c2.anchorOffset) && eh(a5.node, a5.offset, c2.focusNode, c2.focusOffset) || this.suppressWidgetCursorChange(c2, l10)) || (this.view.observer.ignore(() => {
      e_.android && e_.chrome && this.dom.contains(c2.focusNode) && function(t10, e12) {
        for (let i12 = t10; i12 && i12 != e12; i12 = i12.assignedSlot || i12.parentNode)
          if (1 == i12.nodeType && "false" == i12.contentEditable)
            return true;
        return false;
      }(c2.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let t7 = es(this.view.root);
      if (t7) {
        if (l10.empty) {
          if (e_.gecko) {
            var e11, i11;
            let t10 = (e11 = h10.node, i11 = h10.offset, 1 != e11.nodeType ? 0 : (i11 && "false" == e11.childNodes[i11 - 1].contentEditable ? 1 : 0) | (i11 < e11.childNodes.length && "false" == e11.childNodes[i11].contentEditable ? 2 : 0));
            if (t10 && 3 != t10) {
              let e12 = (1 == t10 ? ek : eS)(h10.node, h10.offset);
              e12 && (h10 = new eC(e12.node, e12.offset));
            }
          }
          t7.collapse(h10.node, h10.offset), null != l10.bidiLevel && void 0 !== t7.caretBidiLevel && (t7.caretBidiLevel = l10.bidiLevel);
        } else if (t7.extend) {
          t7.collapse(h10.node, h10.offset);
          try {
            t7.extend(a5.node, a5.offset);
          } catch (t10) {
          }
        } else {
          let e12 = document.createRange();
          l10.anchor > l10.head && ([h10, a5] = [a5, h10]), e12.setEnd(a5.node, a5.offset), e12.setStart(h10.node, h10.offset), t7.removeAllRanges(), t7.addRange(e12);
        }
      }
      r10 && this.view.root.activeElement == this.dom && (this.dom.blur(), n10 && n10.focus());
    }), this.view.observer.setSelectionRange(h10, a5)), this.impreciseAnchor = h10.precise ? null : new eC(c2.anchorNode, c2.anchorOffset), this.impreciseHead = a5.precise ? null : new eC(c2.focusNode, c2.focusOffset);
  }
  suppressWidgetCursorChange(t6, e10) {
    return this.hasComposition && e10.empty && eh(t6.focusNode, t6.focusOffset, t6.anchorNode, t6.anchorOffset) && this.posFromDOM(t6.focusNode, t6.focusOffset) == e10.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t6 } = this, e10 = t6.state.selection.main, i10 = es(t6.root), { anchorNode: n10, anchorOffset: s10 } = t6.observer.selectionRange;
    if (!i10 || !e10.empty || !e10.assoc || !i10.modify)
      return;
    let r10 = eZ.find(this, e10.head);
    if (!r10)
      return;
    let o10 = r10.posAtStart;
    if (e10.head == o10 || e10.head == o10 + r10.length)
      return;
    let l10 = this.coordsAt(e10.head, -1), h10 = this.coordsAt(e10.head, 1);
    if (!l10 || !h10 || l10.bottom > h10.top)
      return;
    let a5 = this.domAtPos(e10.head + e10.assoc);
    i10.collapse(a5.node, a5.offset), i10.modify("move", e10.assoc < 0 ? "forward" : "backward", "lineboundary"), t6.observer.readSelectionRange();
    let c2 = t6.observer.selectionRange;
    t6.docView.posFromDOM(c2.anchorNode, c2.anchorOffset) != e10.from && i10.collapse(n10, s10);
  }
  moveToLine(t6) {
    let e10 = this.dom, i10;
    if (t6.node != e10)
      return t6;
    for (let n10 = t6.offset; !i10 && n10 < e10.childNodes.length; n10++) {
      let t7 = eM.get(e10.childNodes[n10]);
      t7 instanceof eZ && (i10 = t7.domAtPos(0));
    }
    for (let n10 = t6.offset - 1; !i10 && n10 >= 0; n10--) {
      let t7 = eM.get(e10.childNodes[n10]);
      t7 instanceof eZ && (i10 = t7.domAtPos(t7.length));
    }
    return i10 ? new eC(i10.node, i10.offset, true) : t6;
  }
  nearest(t6) {
    for (let e10 = t6; e10; ) {
      let t7 = eM.get(e10);
      if (t7 && t7.rootView == this)
        return t7;
      e10 = e10.parentNode;
    }
    return null;
  }
  posFromDOM(t6, e10) {
    let i10 = this.nearest(t6);
    if (!i10)
      throw RangeError("Trying to find position for a DOM position outside of the document");
    return i10.localPosFromDOM(t6, e10) + i10.posAtStart;
  }
  domAtPos(t6) {
    let { i: e10, off: i10 } = this.childCursor().findPos(t6, -1);
    for (; e10 < this.children.length - 1; ) {
      let t7 = this.children[e10];
      if (i10 < t7.length || t7 instanceof eZ)
        break;
      e10++, i10 = 0;
    }
    return this.children[e10].domAtPos(i10);
  }
  coordsAt(t6, e10) {
    let i10 = null, n10 = 0;
    for (let s10 = this.length, r10 = this.children.length - 1; r10 >= 0; r10--) {
      let o10 = this.children[r10], l10 = s10 - o10.breakAfter, h10 = l10 - o10.length;
      if (l10 < t6)
        break;
      h10 <= t6 && (h10 < t6 || o10.covers(-1)) && (l10 > t6 || o10.covers(1)) && (!i10 || o10 instanceof eZ && !(i10 instanceof eZ && e10 >= 0)) && (i10 = o10, n10 = h10), s10 = h10;
    }
    return i10 ? i10.coordsAt(t6 - n10, e10) : null;
  }
  coordsForChar(t6) {
    let { i: e10, off: i10 } = this.childPos(t6, 1), n10 = this.children[e10];
    if (!(n10 instanceof eZ))
      return null;
    for (; n10.children.length; ) {
      let { i: t7, off: e11 } = n10.childPos(i10, 1);
      for (; ; t7++) {
        if (t7 == n10.children.length)
          return null;
        if ((n10 = n10.children[t7]).length)
          break;
      }
      i10 = e11;
    }
    if (!(n10 instanceof ej))
      return null;
    let s10 = D(n10.text, i10);
    if (s10 == i10)
      return null;
    let r10 = ew(n10.dom, i10, s10).getClientRects();
    for (let t7 = 0; t7 < r10.length; t7++) {
      let e11 = r10[t7];
      if (t7 == r10.length - 1 || e11.top < e11.bottom && e11.left < e11.right)
        return e11;
    }
    return null;
  }
  measureVisibleLineHeights(t6) {
    let e10 = [], { from: i10, to: n10 } = t6, s10 = this.view.contentDOM.clientWidth, r10 = s10 > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o10 = -1, l10 = this.view.textDirection == ii.LTR;
    for (let t7 = 0, h10 = 0; h10 < this.children.length; h10++) {
      let a5 = this.children[h10], c2 = t7 + a5.length;
      if (c2 > n10)
        break;
      if (t7 >= i10) {
        let i11 = a5.dom.getBoundingClientRect();
        if (e10.push(i11.height), r10) {
          let e11 = a5.dom.lastChild, n11 = e11 ? el(e11) : [];
          if (n11.length) {
            let e12 = n11[n11.length - 1], r11 = l10 ? e12.right - i11.left : i11.right - e12.left;
            r11 > o10 && (o10 = r11, this.minWidth = s10, this.minWidthFrom = t7, this.minWidthTo = c2);
          }
        }
      }
      t7 = c2 + a5.breakAfter;
    }
    return e10;
  }
  textDirectionAt(t6) {
    let { i: e10 } = this.childPos(t6, 1);
    return "rtl" == getComputedStyle(this.children[e10].dom).direction ? ii.RTL : ii.LTR;
  }
  measureTextSize() {
    for (let t7 of this.children)
      if (t7 instanceof eZ) {
        let e11 = t7.measureTextSize();
        if (e11)
          return e11;
      }
    let t6 = document.createElement("div"), e10, i10, n10;
    return t6.className = "cm-line", t6.style.width = "99999px", t6.style.position = "absolute", t6.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t6);
      let s10 = el(t6.firstChild)[0];
      e10 = t6.getBoundingClientRect().height, i10 = s10 ? s10.width / 27 : 7, n10 = s10 ? s10.height : e10, t6.remove();
    }), { lineHeight: e10, charWidth: i10, textHeight: n10 };
  }
  childCursor() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length, e10 = this.children.length;
    return e10 && (t6 -= this.children[--e10].length), new eD(this.children, t6, e10);
  }
  computeBlockGapDeco() {
    let t6 = [], e10 = this.view.viewState;
    for (let i10 = 0, n10 = 0; ; n10++) {
      let s10 = n10 == e10.viewports.length ? null : e10.viewports[n10], r10 = s10 ? s10.from - 1 : this.length;
      if (r10 > i10) {
        let n11 = (e10.lineBlockAt(r10).bottom - e10.lineBlockAt(i10).top) / this.view.scaleY;
        t6.push(e3.replace({ widget: new iJ(n11), block: true, inclusive: true, isBlockGap: true }).range(i10, r10));
      }
      if (!s10)
        break;
      i10 = s10.to + 1;
    }
    return e3.set(t6);
  }
  updateDeco() {
    let t6 = 0, e10 = this.view.state.facet(iH).map((e11) => (this.dynamicDecorationMap[t6++] = "function" == typeof e11) ? e11(this.view) : e11), i10 = false, n10 = this.view.state.facet(iW).map((t7, e11) => {
      let n11 = "function" == typeof t7;
      return n11 && (i10 = true), n11 ? t7(this.view) : t7;
    });
    for (n10.length && (this.dynamicDecorationMap[t6++] = i10, e10.push(tj.join(n10))), this.decorations = [...e10, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t6 < this.decorations.length; )
      this.dynamicDecorationMap[t6++] = false;
    return this.decorations;
  }
  scrollIntoView(t6) {
    if (t6.isSnapshot) {
      let e11 = this.view.viewState.lineBlockAt(t6.range.head);
      this.view.scrollDOM.scrollTop = e11.top - t6.yMargin, this.view.scrollDOM.scrollLeft = t6.xMargin;
      return;
    }
    for (let e11 of this.view.state.facet(iO))
      try {
        if (e11(this.view, t6.range, t6))
          return true;
      } catch (t7) {
        iE(this.view.state, t7, "scroll handler");
      }
    let { range: e10 } = t6, i10 = this.coordsAt(e10.head, e10.empty ? e10.assoc : e10.head > e10.anchor ? -1 : 1), n10;
    if (!i10)
      return;
    !e10.empty && (n10 = this.coordsAt(e10.anchor, e10.anchor > e10.head ? -1 : 1)) && (i10 = { left: Math.min(i10.left, n10.left), top: Math.min(i10.top, n10.top), right: Math.max(i10.right, n10.right), bottom: Math.max(i10.bottom, n10.bottom) });
    let s10 = iq(this.view), r10 = { left: i10.left - s10.left, top: i10.top - s10.top, right: i10.right + s10.right, bottom: i10.bottom + s10.bottom }, { offsetWidth: o10, offsetHeight: l10 } = this.view.scrollDOM;
    !function(t7, e11, i11, n11, s11, r11, o11, l11) {
      let h10 = t7.ownerDocument, a5 = h10.defaultView || window;
      for (let c2 = t7, d2 = false; c2 && !d2; )
        if (1 == c2.nodeType) {
          let t10, u2 = c2 == h10.body, f2 = 1, p2 = 1;
          if (u2)
            t10 = function(t11) {
              let e12 = t11.visualViewport;
              return e12 ? { left: 0, right: e12.width, top: 0, bottom: e12.height } : { left: 0, right: t11.innerWidth, top: 0, bottom: t11.innerHeight };
            }(a5);
          else {
            if (/^(fixed|sticky)$/.test(getComputedStyle(c2).position) && (d2 = true), c2.scrollHeight <= c2.clientHeight && c2.scrollWidth <= c2.clientWidth) {
              c2 = c2.assignedSlot || c2.parentNode;
              continue;
            }
            let e12 = c2.getBoundingClientRect();
            ({ scaleX: f2, scaleY: p2 } = ep(c2, e12)), t10 = { left: e12.left, right: e12.left + c2.clientWidth * f2, top: e12.top, bottom: e12.top + c2.clientHeight * p2 };
          }
          let g2 = 0, m2 = 0;
          if ("nearest" == s11)
            e11.top < t10.top ? (m2 = -(t10.top - e11.top + o11), i11 > 0 && e11.bottom > t10.bottom + m2 && (m2 = e11.bottom - t10.bottom + m2 + o11)) : e11.bottom > t10.bottom && (m2 = e11.bottom - t10.bottom + o11, i11 < 0 && e11.top - m2 < t10.top && (m2 = -(t10.top + m2 - e11.top + o11)));
          else {
            let n12 = e11.bottom - e11.top, r12 = t10.bottom - t10.top;
            m2 = ("center" == s11 && n12 <= r12 ? e11.top + n12 / 2 - r12 / 2 : "start" == s11 || "center" == s11 && i11 < 0 ? e11.top - o11 : e11.bottom - r12 + o11) - t10.top;
          }
          if ("nearest" == n11 ? e11.left < t10.left ? (g2 = -(t10.left - e11.left + r11), i11 > 0 && e11.right > t10.right + g2 && (g2 = e11.right - t10.right + g2 + r11)) : e11.right > t10.right && (g2 = e11.right - t10.right + r11, i11 < 0 && e11.left < t10.left + g2 && (g2 = -(t10.left + g2 - e11.left + r11))) : g2 = ("center" == n11 ? e11.left + (e11.right - e11.left) / 2 - (t10.right - t10.left) / 2 : "start" == n11 == l11 ? e11.left - r11 : e11.right - (t10.right - t10.left) + r11) - t10.left, g2 || m2) {
            if (u2)
              a5.scrollBy(g2, m2);
            else {
              let t11 = 0, i12 = 0;
              if (m2) {
                let t12 = c2.scrollTop;
                c2.scrollTop += m2 / p2, i12 = (c2.scrollTop - t12) * p2;
              }
              if (g2) {
                let e12 = c2.scrollLeft;
                c2.scrollLeft += g2 / f2, t11 = (c2.scrollLeft - e12) * f2;
              }
              e11 = { left: e11.left - t11, top: e11.top - i12, right: e11.right - t11, bottom: e11.bottom - i12 }, t11 && 1 > Math.abs(t11 - g2) && (n11 = "nearest"), i12 && 1 > Math.abs(i12 - m2) && (s11 = "nearest");
            }
          }
          if (u2)
            break;
          c2 = c2.assignedSlot || c2.parentNode;
        } else if (11 == c2.nodeType)
          c2 = c2.host;
        else
          break;
    }(this.view.scrollDOM, r10, e10.head < e10.anchor ? -1 : 1, t6.x, t6.y, Math.max(Math.min(t6.xMargin, o10), -o10), Math.max(Math.min(t6.yMargin, l10), -l10), this.view.textDirection == ii.LTR);
  }
}
class iJ extends e1 {
  constructor(t6) {
    super(), this.height = t6;
  }
  toDOM() {
    let t6 = document.createElement("div");
    return t6.className = "cm-gap", this.updateDOM(t6), t6;
  }
  eq(t6) {
    return t6.height == this.height;
  }
  updateDOM(t6) {
    return t6.style.height = this.height + "px", true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
}
function iY(t6, e10) {
  let i10 = t6.observer.selectionRange;
  if (!i10.focusNode)
    return null;
  let n10 = ek(i10.focusNode, i10.focusOffset), s10 = eS(i10.focusNode, i10.focusOffset), r10 = n10 || s10;
  if (s10 && n10 && s10.node != n10.node) {
    let e11 = eM.get(s10.node);
    if (!e11 || e11 instanceof ej && e11.text != s10.node.nodeValue)
      r10 = s10;
    else if (t6.docView.lastCompositionAfterCursor) {
      let t7 = eM.get(n10.node);
      !t7 || t7 instanceof ej && t7.text != n10.node.nodeValue || (r10 = s10);
    }
  }
  if (t6.docView.lastCompositionAfterCursor = r10 != n10, !r10)
    return null;
  let o10 = e10 - r10.offset;
  return { from: o10, to: o10 + r10.node.nodeValue.length, node: r10.node };
}
let iX = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t6, e10) {
    e6(t6, e10, this.changes);
  }
  comparePoint(t6, e10) {
    e6(t6, e10, this.changes);
  }
};
function iQ(t6, e10) {
  return t6.top < e10.bottom - 1 && t6.bottom > e10.top + 1;
}
function iZ(t6, e10) {
  return e10 < t6.top ? { top: e10, left: t6.left, right: t6.right, bottom: t6.bottom } : t6;
}
function i0(t6, e10) {
  return e10 > t6.bottom ? { top: t6.top, left: t6.left, right: t6.right, bottom: e10 } : t6;
}
function i1(t6, e10, i10) {
  let n10 = t6.nodeValue.length, s10 = -1, r10 = 1e9, o10 = 0;
  for (let l10 = 0; l10 < n10; l10++) {
    let n11 = ew(t6, l10, l10 + 1).getClientRects();
    for (let h10 = 0; h10 < n11.length; h10++) {
      let a5 = n11[h10];
      if (a5.top == a5.bottom)
        continue;
      o10 || (o10 = e10 - a5.left);
      let c2 = (a5.top > i10 ? a5.top - i10 : i10 - a5.bottom) - 1;
      if (a5.left - 1 <= e10 && a5.right + 1 >= e10 && c2 < r10) {
        let i11 = e10 >= (a5.left + a5.right) / 2, n12 = i11;
        if ((e_.chrome || e_.gecko) && ew(t6, l10).getBoundingClientRect().left == a5.right && (n12 = !i11), c2 <= 0)
          return { node: t6, offset: l10 + (n12 ? 1 : 0) };
        s10 = l10 + (n12 ? 1 : 0), r10 = c2;
      }
    }
  }
  return { node: t6, offset: s10 > -1 ? s10 : o10 > 0 ? t6.nodeValue.length : 0 };
}
function i2(t6, e10, i10) {
  var n10, s10;
  let r10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, o10 = t6.contentDOM.getBoundingClientRect(), l10 = o10.top + t6.viewState.paddingTop, h10, { docHeight: a5 } = t6.viewState, { x: c2, y: d2 } = e10, u2 = d2 - l10;
  if (u2 < 0)
    return 0;
  if (u2 > a5)
    return t6.state.doc.length;
  for (let e11 = t6.viewState.heightOracle.textHeight / 2, n11 = false; (h10 = t6.elementAtHeight(u2)).type != e2.Text; )
    for (; !((u2 = r10 > 0 ? h10.bottom + e11 : h10.top - e11) >= 0) || !(u2 <= a5); ) {
      if (n11)
        return i10 ? null : 0;
      n11 = true, r10 = -r10;
    }
  d2 = l10 + u2;
  let f2 = h10.from;
  if (f2 < t6.viewport.from)
    return 0 == t6.viewport.from ? 0 : i10 ? null : i3(t6, o10, h10, c2, d2);
  if (f2 > t6.viewport.to)
    return t6.viewport.to == t6.state.doc.length ? t6.state.doc.length : i10 ? null : i3(t6, o10, h10, c2, d2);
  let p2 = t6.dom.ownerDocument, g2 = t6.root.elementFromPoint ? t6.root : p2, m2 = g2.elementFromPoint(c2, d2);
  m2 && !t6.contentDOM.contains(m2) && (m2 = null), !m2 && (c2 = Math.max(o10.left + 1, Math.min(o10.right - 1, c2)), (m2 = g2.elementFromPoint(c2, d2)) && !t6.contentDOM.contains(m2) && (m2 = null));
  let v2, w2 = -1;
  if (m2 && (null === (n10 = t6.docView.nearest(m2)) || void 0 === n10 ? void 0 : n10.isEditable) != false) {
    if (p2.caretPositionFromPoint) {
      let t7 = p2.caretPositionFromPoint(c2, d2);
      t7 && ({ offsetNode: v2, offset: w2 } = t7);
    } else if (p2.caretRangeFromPoint) {
      let e11 = p2.caretRangeFromPoint(c2, d2);
      e11 && ({ startContainer: v2, startOffset: w2 } = e11, (!t6.contentDOM.contains(v2) || e_.safari && function(t7, e12, i11) {
        let n11;
        if (3 != t7.nodeType || e12 != (n11 = t7.nodeValue.length))
          return false;
        for (let e13 = t7.nextSibling; e13; e13 = e13.nextSibling)
          if (1 != e13.nodeType || "BR" != e13.nodeName)
            return false;
        return ew(t7, n11 - 1, n11).getBoundingClientRect().left > i11;
      }(v2, w2, c2) || e_.chrome && function(t7, e12, i11) {
        if (0 != e12)
          return false;
        for (let e13 = t7; ; ) {
          let t10 = e13.parentNode;
          if (!t10 || 1 != t10.nodeType || t10.firstChild != e13)
            return false;
          if (t10.classList.contains("cm-line"))
            break;
          e13 = t10;
        }
        return i11 - (1 == t7.nodeType ? t7.getBoundingClientRect() : ew(t7, 0, Math.max(t7.nodeValue.length, 1)).getBoundingClientRect()).left > 5;
      }(v2, w2, c2)) && (v2 = void 0));
    }
  }
  if (!v2 || !t6.docView.dom.contains(v2)) {
    let e11 = eZ.find(t6.docView, f2);
    if (!e11)
      return u2 > h10.top + h10.height / 2 ? h10.to : h10.from;
    ({ node: v2, offset: w2 } = function t7(e12, i11, n11) {
      let s11, r11, o11, l11, h11, a6, c3, d3, u3 = false;
      for (let g4 = e12.firstChild; g4; g4 = g4.nextSibling) {
        let e13 = el(g4);
        for (let m4 = 0; m4 < e13.length; m4++) {
          var f3, p3;
          let v3 = e13[m4];
          a6 && iQ(a6, v3) && (v3 = iZ(i0(v3, a6.bottom), a6.top));
          let w3 = (f3 = v3).left > i11 ? f3.left - i11 : Math.max(0, i11 - f3.right), y3 = (p3 = v3).top > n11 ? p3.top - n11 : Math.max(0, n11 - p3.bottom);
          if (0 == w3 && 0 == y3)
            return 3 == g4.nodeType ? i1(g4, i11, n11) : t7(g4, i11, n11);
          if (!h11 || d3 > y3 || d3 == y3 && c3 > w3) {
            h11 = g4, a6 = v3, c3 = w3, d3 = y3;
            let t10 = y3 ? n11 < v3.top ? -1 : 1 : w3 ? i11 < v3.left ? -1 : 1 : 0;
            u3 = !t10 || (t10 > 0 ? m4 < e13.length - 1 : m4 > 0);
          }
          0 == w3 ? n11 > v3.bottom && (!o11 || o11.bottom < v3.bottom) ? (s11 = g4, o11 = v3) : n11 < v3.top && (!l11 || l11.top > v3.top) && (r11 = g4, l11 = v3) : o11 && iQ(o11, v3) ? o11 = i0(o11, v3.bottom) : l11 && iQ(l11, v3) && (l11 = iZ(l11, v3.top));
        }
      }
      if (o11 && o11.bottom >= n11 ? (h11 = s11, a6 = o11) : l11 && l11.top <= n11 && (h11 = r11, a6 = l11), !h11)
        return { node: e12, offset: 0 };
      let g3 = Math.max(a6.left, Math.min(a6.right, i11));
      if (3 == h11.nodeType)
        return i1(h11, g3, n11);
      if (u3 && "false" != h11.contentEditable)
        return t7(h11, g3, n11);
      let m3 = Array.prototype.indexOf.call(e12.childNodes, h11) + (i11 >= (a6.left + a6.right) / 2 ? 1 : 0);
      return { node: e12, offset: m3 };
    }(e11.dom, c2, d2));
  }
  let y2 = t6.docView.nearest(v2);
  if (!y2)
    return null;
  if (!y2.isWidget || (null === (s10 = y2.dom) || void 0 === s10 ? void 0 : s10.nodeType) != 1)
    return y2.localPosFromDOM(v2, w2) + y2.posAtStart;
  {
    let t7 = y2.dom.getBoundingClientRect();
    return e10.y < t7.top || e10.y <= t7.bottom && e10.x <= (t7.left + t7.right) / 2 ? y2.posAtStart : y2.posAtEnd;
  }
}
function i3(t6, e10, i10, n10, s10) {
  let r10 = Math.round((n10 - e10.left) * t6.defaultCharacterWidth);
  if (t6.lineWrapping && i10.height > 1.5 * t6.defaultLineHeight) {
    let e11 = t6.viewState.heightOracle.textHeight;
    r10 += Math.floor((s10 - i10.top - (t6.defaultLineHeight - e11) * 0.5) / e11) * t6.viewState.heightOracle.lineLength;
  }
  let o10 = t6.state.sliceDoc(i10.from, i10.to);
  return i10.from + function(t7, e11, i11, n11) {
    for (let n12 = 0, s11 = 0; ; ) {
      if (s11 >= e11)
        return n12;
      if (n12 == t7.length)
        break;
      s11 += 9 == t7.charCodeAt(n12) ? i11 - s11 % i11 : 1, n12 = D(t7, n12);
    }
    return t7.length;
  }(o10, r10, t6.state.tabSize);
}
function i8(t6, e10, i10, n10) {
  let s10 = t6.state.doc.lineAt(e10.head), r10 = t6.bidiSpans(s10), o10 = t6.textDirectionAt(s10.from);
  for (let l10 = e10, h10 = null; ; ) {
    let e11 = function(t7, e12, i11, n11, s11) {
      var r11;
      let o11 = n11.head - t7.from, l11 = ip.find(e12, o11, null !== (r11 = n11.bidiLevel) && void 0 !== r11 ? r11 : -1, n11.assoc), h11 = e12[l11], a6 = h11.side(s11, i11);
      if (o11 == a6) {
        let t10 = l11 += s11 ? 1 : -1;
        if (t10 < 0 || t10 >= e12.length)
          return null;
        o11 = (h11 = e12[l11 = t10]).side(!s11, i11), a6 = h11.side(s11, i11);
      }
      let c2 = D(t7.text, o11, h11.forward(s11, i11));
      (c2 < h11.from || c2 > h11.to) && (c2 = a6), iv = t7.text.slice(Math.min(o11, c2), Math.max(o11, c2));
      let d2 = l11 == (s11 ? e12.length - 1 : 0) ? null : e12[l11 + (s11 ? 1 : -1)];
      return d2 && c2 == a6 && d2.level + (s11 ? 0 : 1) < h11.level ? tt.cursor(d2.side(!s11, i11) + t7.from, d2.forward(s11, i11) ? 1 : -1, d2.level) : tt.cursor(c2 + t7.from, h11.forward(s11, i11) ? -1 : 1, h11.level);
    }(s10, r10, o10, l10, i10), a5 = iv;
    if (!e11) {
      if (s10.number == (i10 ? t6.state.doc.lines : 1))
        return l10;
      a5 = "\n", s10 = t6.state.doc.line(s10.number + (i10 ? 1 : -1)), r10 = t6.bidiSpans(s10), e11 = t6.visualLineSide(s10, !i10);
    }
    if (h10) {
      if (!h10(a5))
        return l10;
    } else {
      if (!n10)
        return e11;
      h10 = n10(a5);
    }
    l10 = e11;
  }
}
function i4(t6, e10, i10) {
  for (; ; ) {
    let n10 = 0;
    for (let s10 of t6)
      s10.between(e10 - 1, e10 + 1, (t7, s11, r10) => {
        if (e10 > t7 && e10 < s11) {
          let r11 = n10 || i10 || (e10 - t7 < s11 - e10 ? -1 : 1);
          e10 = r11 < 0 ? t7 : s11, n10 = r11;
        }
      });
    if (!n10)
      return e10;
  }
}
function i5(t6, e10, i10) {
  let n10 = i4(t6.state.facet(iF).map((e11) => e11(t6)), i10.from, e10.head > i10.from ? -1 : 1);
  return n10 == i10.from ? i10 : tt.cursor(n10, n10 < i10.from ? 1 : -1);
}
class i9 {
  setSelectionOrigin(t6) {
    this.lastSelectionOrigin = t6, this.lastSelectionTime = Date.now();
  }
  constructor(t6) {
    var e10;
    this.view = t6, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t6.hasFocus, e_.safari && t6.contentDOM.addEventListener("input", () => null), e_.gecko && (e10 = t6.contentDOM.ownerDocument, nk.has(e10) || (nk.add(e10), e10.addEventListener("copy", () => {
    }), e10.addEventListener("cut", () => {
    })));
  }
  handleEvent(t6) {
    !(!function(t7, e10) {
      if (!e10.bubbles)
        return true;
      if (e10.defaultPrevented)
        return false;
      for (let i10 = e10.target, n10; i10 != t7.contentDOM; i10 = i10.parentNode)
        if (!i10 || 11 == i10.nodeType || (n10 = eM.get(i10)) && n10.ignoreEvent(e10))
          return false;
      return true;
    }(this.view, t6) || this.ignoreDuringComposition(t6)) && ("keydown" == t6.type && this.keydown(t6) || this.runHandlers(t6.type, t6));
  }
  runHandlers(t6, e10) {
    let i10 = this.handlers[t6];
    if (i10) {
      for (let t7 of i10.observers)
        t7(this.view, e10);
      for (let t7 of i10.handlers) {
        if (e10.defaultPrevented)
          break;
        if (t7(this.view, e10)) {
          e10.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t6) {
    let e10 = function(t7) {
      let e11 = /* @__PURE__ */ Object.create(null);
      function i11(t10) {
        return e11[t10] || (e11[t10] = { observers: [], handlers: [] });
      }
      for (let e12 of t7) {
        let t10 = e12.spec;
        if (t10 && t10.domEventHandlers)
          for (let n11 in t10.domEventHandlers) {
            let s10 = t10.domEventHandlers[n11];
            s10 && i11(n11).handlers.push(i6(e12.value, s10));
          }
        if (t10 && t10.domEventObservers)
          for (let n11 in t10.domEventObservers) {
            let s10 = t10.domEventObservers[n11];
            s10 && i11(n11).observers.push(i6(e12.value, s10));
          }
      }
      for (let t10 in ns)
        i11(t10).handlers.push(ns[t10]);
      for (let t10 in nr)
        i11(t10).observers.push(nr[t10]);
      return e11;
    }(t6), i10 = this.handlers, n10 = this.view.contentDOM;
    for (let t7 in e10)
      if ("scroll" != t7) {
        let s10 = !e10[t7].handlers.length, r10 = i10[t7];
        r10 && !r10.handlers.length != s10 && (n10.removeEventListener(t7, this.handleEvent), r10 = null), r10 || n10.addEventListener(t7, this.handleEvent, { passive: s10 });
      }
    for (let t7 in i10)
      "scroll" == t7 || e10[t7] || n10.removeEventListener(t7, this.handleEvent);
    this.handlers = e10;
  }
  keydown(t6) {
    let e10;
    return this.lastKeyCode = t6.keyCode, this.lastKeyTime = Date.now(), !!(9 == t6.keyCode && Date.now() < this.lastEscPress + 2e3) || ((27 != t6.keyCode && 0 > ne.indexOf(t6.keyCode) && (this.view.inputState.lastEscPress = 0), e_.android && e_.chrome && !t6.synthetic && (13 == t6.keyCode || 8 == t6.keyCode)) ? (this.view.observer.delayAndroidKey(t6.key, t6.keyCode), true) : e_.ios && !t6.synthetic && !t6.altKey && !t6.metaKey && ((e10 = i7.find((e11) => e11.keyCode == t6.keyCode)) && !t6.ctrlKey || nt.indexOf(t6.key) > -1 && t6.ctrlKey && !t6.shiftKey) ? (this.pendingIOSKey = e10 || t6, setTimeout(() => this.flushIOSKey(), 250), true) : (229 != t6.keyCode && this.view.observer.forceFlush(), false));
  }
  flushIOSKey(t6) {
    let e10 = this.pendingIOSKey;
    return !(!e10 || "Enter" == e10.key && t6 && t6.from < t6.to && /^\S+$/.test(t6.insert.toString())) && (this.pendingIOSKey = void 0, ey(this.view.contentDOM, e10.key, e10.keyCode, e10 instanceof KeyboardEvent ? e10 : void 0));
  }
  ignoreDuringComposition(t6) {
    return !!/^key/.test(t6.type) && (this.composing > 0 || !!(e_.safari && !e_.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = false, true));
  }
  startMouseSelection(t6) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t6;
  }
  update(t6) {
    this.mouseSelection && this.mouseSelection.update(t6), this.draggedContent && t6.docChanged && (this.draggedContent = this.draggedContent.map(t6.changes)), t6.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function i6(t6, e10) {
  return (i10, n10) => {
    try {
      return e10.call(t6, n10, i10);
    } catch (t7) {
      iE(i10.state, t7);
    }
  };
}
let i7 = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], nt = "dthko", ne = [16, 17, 18, 20, 91, 92, 224, 225];
function ni(t6) {
  return 0.7 * Math.max(0, t6) + 8;
}
class nn {
  constructor(t6, e10, i10, n10) {
    let s10;
    this.view = t6, this.startEvent = e10, this.style = i10, this.mustSelect = n10, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e10, this.scrollParent = function(t7) {
      let e11 = t7.ownerDocument;
      for (let i11 = t7.parentNode; i11 && i11 != e11.body; )
        if (1 == i11.nodeType) {
          if (i11.scrollHeight > i11.clientHeight || i11.scrollWidth > i11.clientWidth)
            return i11;
          i11 = i11.assignedSlot || i11.parentNode;
        } else if (11 == i11.nodeType)
          i11 = i11.host;
        else
          break;
      return null;
    }(t6.contentDOM), this.atoms = t6.state.facet(iF).map((e11) => e11(t6));
    let r10 = t6.contentDOM.ownerDocument;
    r10.addEventListener("mousemove", this.move = this.move.bind(this)), r10.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e10.shiftKey, this.multiple = t6.state.facet(tV.allowMultipleSelections) && ((s10 = t6.state.facet(iw)).length ? s10[0](e10) : e_.mac ? e10.metaKey : e10.ctrlKey), this.dragging = !!function(t7, e11) {
      let { main: i11 } = t7.state.selection;
      if (i11.empty)
        return false;
      let n11 = es(t7.root);
      if (!n11 || 0 == n11.rangeCount)
        return true;
      let s11 = n11.getRangeAt(0).getClientRects();
      for (let t10 = 0; t10 < s11.length; t10++) {
        let i12 = s11[t10];
        if (i12.left <= e11.clientX && i12.right >= e11.clientX && i12.top <= e11.clientY && i12.bottom >= e11.clientY)
          return true;
      }
      return false;
    }(t6, e10) && 1 == nm(e10) && null;
  }
  start(t6) {
    false === this.dragging && this.select(t6);
  }
  move(t6) {
    var e10, i10;
    if (0 == t6.buttons)
      return this.destroy();
    if (this.dragging || null == this.dragging && 10 > Math.max(Math.abs((i10 = this.startEvent).clientX - t6.clientX), Math.abs(i10.clientY - t6.clientY)))
      return;
    this.select(this.lastEvent = t6);
    let n10 = 0, s10 = 0, r10 = (null === (e10 = this.scrollParent) || void 0 === e10 ? void 0 : e10.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, o10 = iq(this.view);
    t6.clientX - o10.left <= r10.left + 6 ? n10 = -ni(r10.left - t6.clientX) : t6.clientX + o10.right >= r10.right - 6 && (n10 = ni(t6.clientX - r10.right)), t6.clientY - o10.top <= r10.top + 6 ? s10 = -ni(r10.top - t6.clientY) : t6.clientY + o10.bottom >= r10.bottom - 6 && (s10 = ni(t6.clientY - r10.bottom)), this.setScrollSpeed(n10, s10);
  }
  up(t6) {
    null == this.dragging && this.select(this.lastEvent), this.dragging || t6.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t6 = this.view.contentDOM.ownerDocument;
    t6.removeEventListener("mousemove", this.move), t6.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t6, e10) {
    this.scrollSpeed = { x: t6, y: e10 }, t6 || e10 ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), false === this.dragging && this.select(this.lastEvent);
  }
  skipAtoms(t6) {
    let e10 = null;
    for (let i10 = 0; i10 < t6.ranges.length; i10++) {
      let n10 = t6.ranges[i10], s10 = null;
      if (n10.empty) {
        let t7 = i4(this.atoms, n10.from, 0);
        t7 != n10.from && (s10 = tt.cursor(t7, -1));
      } else {
        let t7 = i4(this.atoms, n10.from, -1), e11 = i4(this.atoms, n10.to, 1);
        (t7 != n10.from || e11 != n10.to) && (s10 = tt.range(n10.from == n10.anchor ? t7 : e11, n10.from == n10.head ? t7 : e11));
      }
      s10 && (e10 || (e10 = t6.ranges.slice()), e10[i10] = s10);
    }
    return e10 ? tt.create(e10, t6.mainIndex) : t6;
  }
  select(t6) {
    let { view: e10 } = this, i10 = this.skipAtoms(this.style.get(t6, this.extend, this.multiple));
    (this.mustSelect || !i10.eq(e10.state.selection, false === this.dragging)) && this.view.dispatch({ selection: i10, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(t6) {
    this.style.update(t6) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
let ns = /* @__PURE__ */ Object.create(null), nr = /* @__PURE__ */ Object.create(null), no = e_.ie && e_.ie_version < 15 || e_.ios && e_.webkit_version < 604;
function nl(t6, e10) {
  let { state: i10 } = t6, n10, s10 = 1, r10 = i10.toText(e10), o10 = r10.lines == i10.selection.ranges.length;
  if (null != nw && i10.selection.ranges.every((t7) => t7.empty) && nw == r10.toString()) {
    let t7 = -1;
    n10 = i10.changeByRange((n11) => {
      let l10 = i10.doc.lineAt(n11.from);
      if (l10.from == t7)
        return { range: n11 };
      t7 = l10.from;
      let h10 = i10.toText((o10 ? r10.line(s10++).text : e10) + i10.lineBreak);
      return { changes: { from: l10.from, insert: h10 }, range: tt.cursor(n11.from + h10.length) };
    });
  } else
    n10 = o10 ? i10.changeByRange((t7) => {
      let e11 = r10.line(s10++);
      return { changes: { from: t7.from, to: t7.to, insert: e11.text }, range: tt.cursor(t7.from + e11.length) };
    }) : i10.replaceSelection(r10);
  t6.dispatch(n10, { userEvent: "input.paste", scrollIntoView: true });
}
function nh(t6, e10, i10, n10) {
  if (1 == n10)
    return tt.cursor(e10, i10);
  if (2 == n10)
    return function(t7, e11) {
      let i11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n11 = t7.charCategorizer(e11), s10 = t7.doc.lineAt(e11), r10 = e11 - s10.from;
      if (0 == s10.length)
        return tt.cursor(e11);
      0 == r10 ? i11 = 1 : r10 == s10.length && (i11 = -1);
      let o10 = r10, l10 = r10;
      i11 < 0 ? o10 = D(s10.text, r10, false) : l10 = D(s10.text, r10);
      let h10 = n11(s10.text.slice(o10, l10));
      for (; o10 > 0; ) {
        let t10 = D(s10.text, o10, false);
        if (n11(s10.text.slice(t10, o10)) != h10)
          break;
        o10 = t10;
      }
      for (; l10 < s10.length; ) {
        let t10 = D(s10.text, l10);
        if (n11(s10.text.slice(l10, t10)) != h10)
          break;
        l10 = t10;
      }
      return tt.range(o10 + s10.from, l10 + s10.from);
    }(t6.state, e10, i10);
  {
    let i11 = eZ.find(t6.docView, e10), n11 = t6.state.doc.lineAt(i11 ? i11.posAtEnd : e10), s10 = i11 ? i11.posAtStart : n11.from, r10 = i11 ? i11.posAtEnd : n11.to;
    return r10 < t6.state.doc.length && r10 == n11.to && r10++, tt.range(s10, r10);
  }
}
nr.scroll = (t6) => {
  t6.inputState.lastScrollTop = t6.scrollDOM.scrollTop, t6.inputState.lastScrollLeft = t6.scrollDOM.scrollLeft;
}, ns.keydown = (t6, e10) => (t6.inputState.setSelectionOrigin("select"), 27 == e10.keyCode && (t6.inputState.lastEscPress = Date.now()), false), nr.touchstart = (t6, e10) => {
  t6.inputState.lastTouchTime = Date.now(), t6.inputState.setSelectionOrigin("select.pointer");
}, nr.touchmove = (t6) => {
  t6.inputState.setSelectionOrigin("select.pointer");
}, ns.mousedown = (t6, e10) => {
  let i10, n10, s10;
  if (t6.observer.flush(), t6.inputState.lastTouchTime > Date.now() - 2e3)
    return false;
  let r10 = null;
  for (let i11 of t6.state.facet(ib))
    if (r10 = i11(t6, e10))
      break;
  if (r10 || 0 != e10.button || (i10 = nd(t6, e10), n10 = nm(e10), s10 = t6.state.selection, r10 = { update(t7) {
    t7.docChanged && (i10.pos = t7.changes.mapPos(i10.pos), s10 = s10.map(t7.changes));
  }, get(e11, r11, o10) {
    let l10 = nd(t6, e11), h10, a5 = nh(t6, l10.pos, l10.bias, n10);
    if (i10.pos != l10.pos && !r11) {
      let e12 = nh(t6, i10.pos, i10.bias, n10), s11 = Math.min(e12.from, a5.from), r12 = Math.max(e12.to, a5.to);
      a5 = s11 < a5.from ? tt.range(s11, r12) : tt.range(r12, s11);
    }
    return r11 ? s10.replaceRange(s10.main.extend(a5.from, a5.to)) : o10 && 1 == n10 && s10.ranges.length > 1 && (h10 = function(t7, e12) {
      for (let i11 = 0; i11 < t7.ranges.length; i11++) {
        let { from: n11, to: s11 } = t7.ranges[i11];
        if (n11 <= e12 && s11 >= e12)
          return tt.create(t7.ranges.slice(0, i11).concat(t7.ranges.slice(i11 + 1)), t7.mainIndex == i11 ? 0 : t7.mainIndex - (t7.mainIndex > i11 ? 1 : 0));
      }
      return null;
    }(s10, l10.pos)) ? h10 : o10 ? s10.addRange(a5) : tt.create([a5]);
  } }), r10) {
    let i11 = !t6.hasFocus;
    t6.inputState.startMouseSelection(new nn(t6, e10, r10, i11)), i11 && t6.observer.ignore(() => ev(t6.contentDOM));
    let n11 = t6.inputState.mouseSelection;
    if (n11)
      return n11.start(e10), false === n11.dragging;
  }
  return false;
};
let na = (t6, e10) => t6 >= e10.top && t6 <= e10.bottom, nc = (t6, e10, i10) => na(e10, i10) && t6 >= i10.left && t6 <= i10.right;
function nd(t6, e10) {
  let i10 = t6.posAtCoords({ x: e10.clientX, y: e10.clientY }, false);
  return { pos: i10, bias: function(t7, e11, i11, n10) {
    let s10 = eZ.find(t7.docView, e11);
    if (!s10)
      return 1;
    let r10 = e11 - s10.posAtStart;
    if (0 == r10)
      return 1;
    if (r10 == s10.length)
      return -1;
    let o10 = s10.coordsAt(r10, -1);
    if (o10 && nc(i11, n10, o10))
      return -1;
    let l10 = s10.coordsAt(r10, 1);
    return l10 && nc(i11, n10, l10) ? 1 : o10 && na(n10, o10) ? -1 : 1;
  }(t6, i10, e10.clientX, e10.clientY) };
}
let nu = e_.ie && e_.ie_version <= 11, nf = null, np = 0, ng = 0;
function nm(t6) {
  if (!nu)
    return t6.detail;
  let e10 = nf, i10 = ng;
  return nf = t6, ng = Date.now(), np = !e10 || i10 > Date.now() - 400 && 2 > Math.abs(e10.clientX - t6.clientX) && 2 > Math.abs(e10.clientY - t6.clientY) ? (np + 1) % 3 : 1;
}
function nv(t6, e10, i10, n10) {
  let s10;
  if (!i10)
    return;
  let r10 = t6.posAtCoords({ x: e10.clientX, y: e10.clientY }, false), { draggedContent: o10 } = t6.inputState, l10 = n10 && o10 && ((s10 = t6.state.facet(iy)).length ? s10[0](e10) : e_.mac ? !e10.altKey : !e10.ctrlKey) ? { from: o10.from, to: o10.to } : null, h10 = { from: r10, insert: i10 }, a5 = t6.state.changes(l10 ? [l10, h10] : h10);
  t6.focus(), t6.dispatch({ changes: a5, selection: { anchor: a5.mapPos(r10, -1), head: a5.mapPos(r10, 1) }, userEvent: l10 ? "move.drop" : "input.drop" }), t6.inputState.draggedContent = null;
}
ns.dragstart = (t6, e10) => {
  let { selection: { main: i10 } } = t6.state;
  if (e10.target.draggable) {
    let n11 = t6.docView.nearest(e10.target);
    if (n11 && n11.isWidget) {
      let t7 = n11.posAtStart, e11 = t7 + n11.length;
      (t7 >= i10.to || e11 <= i10.from) && (i10 = tt.range(t7, e11));
    }
  }
  let { inputState: n10 } = t6;
  return n10.mouseSelection && (n10.mouseSelection.dragging = true), n10.draggedContent = i10, e10.dataTransfer && (e10.dataTransfer.setData("Text", t6.state.sliceDoc(i10.from, i10.to)), e10.dataTransfer.effectAllowed = "copyMove"), false;
}, ns.dragend = (t6) => (t6.inputState.draggedContent = null, false), ns.drop = (t6, e10) => {
  if (!e10.dataTransfer)
    return false;
  if (t6.state.readOnly)
    return true;
  let i10 = e10.dataTransfer.files;
  if (i10 && i10.length) {
    let n10 = Array(i10.length), s10 = 0, r10 = () => {
      ++s10 == i10.length && nv(t6, e10, n10.filter((t7) => null != t7).join(t6.state.lineBreak), false);
    };
    for (let t7 = 0; t7 < i10.length; t7++) {
      let e11 = new FileReader();
      e11.onerror = r10, e11.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(e11.result) || (n10[t7] = e11.result), r10();
      }, e11.readAsText(i10[t7]);
    }
    return true;
  }
  {
    let i11 = e10.dataTransfer.getData("Text");
    if (i11)
      return nv(t6, e10, i11, true), true;
  }
  return false;
}, ns.paste = (t6, e10) => {
  if (t6.state.readOnly)
    return true;
  t6.observer.flush();
  let i10 = no ? null : e10.clipboardData;
  return i10 ? (nl(t6, i10.getData("text/plain") || i10.getData("text/uri-list")), true) : (function(t7) {
    let e11 = t7.dom.parentNode;
    if (!e11)
      return;
    let i11 = e11.appendChild(document.createElement("textarea"));
    i11.style.cssText = "position: fixed; left: -10000px; top: 10px", i11.focus(), setTimeout(() => {
      t7.focus(), i11.remove(), nl(t7, i11.value);
    }, 50);
  }(t6), false);
};
let nw = null;
ns.copy = ns.cut = (t6, e10) => {
  let { text: i10, ranges: n10, linewise: s10 } = function(t7) {
    let e11 = [], i11 = [], n11 = false;
    for (let n12 of t7.selection.ranges)
      n12.empty || (e11.push(t7.sliceDoc(n12.from, n12.to)), i11.push(n12));
    if (!e11.length) {
      let s11 = -1;
      for (let { from: n12 } of t7.selection.ranges) {
        let r11 = t7.doc.lineAt(n12);
        r11.number > s11 && (e11.push(r11.text), i11.push({ from: r11.from, to: Math.min(t7.doc.length, r11.to + 1) })), s11 = r11.number;
      }
      n11 = true;
    }
    return { text: e11.join(t7.lineBreak), ranges: i11, linewise: n11 };
  }(t6.state);
  if (!i10 && !s10)
    return false;
  nw = s10 ? i10 : null, "cut" != e10.type || t6.state.readOnly || t6.dispatch({ changes: n10, scrollIntoView: true, userEvent: "delete.cut" });
  let r10 = no ? null : e10.clipboardData;
  return r10 ? (r10.clearData(), r10.setData("text/plain", i10), true) : (!function(t7, e11) {
    let i11 = t7.dom.parentNode;
    if (!i11)
      return;
    let n11 = i11.appendChild(document.createElement("textarea"));
    n11.style.cssText = "position: fixed; left: -10000px; top: 10px", n11.value = e11, n11.focus(), n11.selectionEnd = e11.length, n11.selectionStart = 0, setTimeout(() => {
      n11.remove(), t7.focus();
    }, 50);
  }(t6, i10), false);
};
let ny = tM.define();
function nb(t6, e10) {
  let i10 = [];
  for (let n10 of t6.facet(iC)) {
    let s10 = n10(t6, e10);
    s10 && i10.push(s10);
  }
  return i10 ? t6.update({ effects: i10, annotations: ny.of(true) }) : null;
}
function nx(t6) {
  setTimeout(() => {
    let e10 = t6.hasFocus;
    if (e10 != t6.inputState.notifiedFocused) {
      let i10 = nb(t6.state, e10);
      i10 ? t6.dispatch(i10) : t6.update([]);
    }
  }, 10);
}
nr.focus = (t6) => {
  t6.inputState.lastFocusTime = Date.now(), !t6.scrollDOM.scrollTop && (t6.inputState.lastScrollTop || t6.inputState.lastScrollLeft) && (t6.scrollDOM.scrollTop = t6.inputState.lastScrollTop, t6.scrollDOM.scrollLeft = t6.inputState.lastScrollLeft), nx(t6);
}, nr.blur = (t6) => {
  t6.observer.clearSelectionRange(), nx(t6);
}, nr.compositionstart = nr.compositionupdate = (t6) => {
  null == t6.inputState.compositionFirstChange && (t6.inputState.compositionFirstChange = true), t6.inputState.composing < 0 && (t6.inputState.composing = 0);
}, nr.compositionend = (t6) => {
  t6.inputState.composing = -1, t6.inputState.compositionEndedAt = Date.now(), t6.inputState.compositionPendingKey = true, t6.inputState.compositionPendingChange = t6.observer.pendingRecords().length > 0, t6.inputState.compositionFirstChange = null, e_.chrome && e_.android ? t6.observer.flushSoon() : t6.inputState.compositionPendingChange ? Promise.resolve().then(() => t6.observer.flush()) : setTimeout(() => {
    t6.inputState.composing < 0 && t6.docView.hasComposition && t6.update([]);
  }, 50);
}, nr.contextmenu = (t6) => {
  t6.inputState.lastContextMenu = Date.now();
}, ns.beforeinput = (t6, e10) => {
  var i10;
  let n10;
  if (e_.chrome && e_.android && (n10 = i7.find((t7) => t7.inputType == e10.inputType)) && (t6.observer.delayAndroidKey(n10.key, n10.keyCode), "Backspace" == n10.key || "Delete" == n10.key)) {
    let e11 = (null === (i10 = window.visualViewport) || void 0 === i10 ? void 0 : i10.height) || 0;
    setTimeout(() => {
      var i11;
      ((null === (i11 = window.visualViewport) || void 0 === i11 ? void 0 : i11.height) || 0) > e11 + 10 && t6.hasFocus && (t6.contentDOM.blur(), t6.focus());
    }, 100);
  }
  return e_.ios && "deleteContentForward" == e10.inputType && t6.observer.flushSoon(), e_.safari && "insertText" == e10.inputType && t6.inputState.composing >= 0 && setTimeout(() => nr.compositionend(t6, e10), 20), false;
};
let nk = /* @__PURE__ */ new Set(), nS = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class nC {
  constructor(t6) {
    this.lineWrapping = t6, this.doc = v.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = false;
  }
  heightForGap(t6, e10) {
    let i10 = this.doc.lineAt(e10).number - this.doc.lineAt(t6).number + 1;
    return this.lineWrapping && (i10 += Math.max(0, Math.ceil((e10 - t6 - i10 * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i10;
  }
  heightForLine(t6) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t6 - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t6) {
    return this.doc = t6, this;
  }
  mustRefreshForWrapping(t6) {
    return nS.indexOf(t6) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t6) {
    let e10 = false;
    for (let i10 = 0; i10 < t6.length; i10++) {
      let n10 = t6[i10];
      n10 < 0 ? i10++ : this.heightSamples[Math.floor(10 * n10)] || (e10 = true, this.heightSamples[Math.floor(10 * n10)] = true);
    }
    return e10;
  }
  refresh(t6, e10, i10, n10, s10, r10) {
    let o10 = nS.indexOf(t6) > -1, l10 = Math.round(e10) != Math.round(this.lineHeight) || this.lineWrapping != o10;
    if (this.lineWrapping = o10, this.lineHeight = e10, this.charWidth = i10, this.textHeight = n10, this.lineLength = s10, l10) {
      this.heightSamples = {};
      for (let t7 = 0; t7 < r10.length; t7++) {
        let e11 = r10[t7];
        e11 < 0 ? t7++ : this.heightSamples[Math.floor(10 * e11)] = true;
      }
    }
    return l10;
  }
}
class nA {
  constructor(t6, e10) {
    this.from = t6, this.heights = e10, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class nM {
  constructor(t6, e10, i10, n10, s10) {
    this.from = t6, this.length = e10, this.top = i10, this.height = n10, this._content = s10;
  }
  get type() {
    return "number" == typeof this._content ? e2.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof e5 ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return "number" == typeof this._content ? this._content : 0;
  }
  join(t6) {
    let e10 = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t6._content) ? t6._content : [t6]);
    return new nM(this.from, this.length + t6.length, this.top, this.height + t6.height, e10);
  }
}
var nO = ((W = nO || (nO = {}))[W.ByPos = 0] = "ByPos", W[W.ByHeight = 1] = "ByHeight", W[W.ByPosNoHeight = 2] = "ByPosNoHeight", W);
class nD {
  constructor(t6, e10, i10 = 2) {
    this.length = t6, this.height = e10, this.flags = i10;
  }
  get outdated() {
    return (2 & this.flags) > 0;
  }
  set outdated(t6) {
    this.flags = (t6 ? 2 : 0) | -3 & this.flags;
  }
  setHeight(t6, e10) {
    this.height != e10 && (Math.abs(this.height - e10) > 1e-3 && (t6.heightChanged = true), this.height = e10);
  }
  replace(t6, e10, i10) {
    return nD.of(i10);
  }
  decomposeLeft(t6, e10) {
    e10.push(this);
  }
  decomposeRight(t6, e10) {
    e10.push(this);
  }
  applyChanges(t6, e10, i10, n10) {
    let s10 = this, r10 = i10.doc;
    for (let o10 = n10.length - 1; o10 >= 0; o10--) {
      let { fromA: l10, toA: h10, fromB: a5, toB: c2 } = n10[o10], d2 = s10.lineAt(l10, nO.ByPosNoHeight, i10.setDoc(e10), 0, 0), u2 = d2.to >= h10 ? d2 : s10.lineAt(h10, nO.ByPosNoHeight, i10, 0, 0);
      for (c2 += u2.to - h10, h10 = u2.to; o10 > 0 && d2.from <= n10[o10 - 1].toA; )
        l10 = n10[o10 - 1].fromA, a5 = n10[o10 - 1].fromB, o10--, l10 < d2.from && (d2 = s10.lineAt(l10, nO.ByPosNoHeight, i10, 0, 0));
      a5 += d2.from - l10, l10 = d2.from;
      let f2 = nL.build(i10.setDoc(r10), t6, a5, c2);
      s10 = s10.replace(l10, h10, f2);
    }
    return s10.updateHeight(i10, 0);
  }
  static empty() {
    return new nE(0, 0);
  }
  static of(t6) {
    if (1 == t6.length)
      return t6[0];
    let e10 = 0, i10 = t6.length, n10 = 0, s10 = 0;
    for (; ; )
      if (e10 == i10) {
        if (n10 > 2 * s10) {
          let s11 = t6[e10 - 1];
          s11.break ? t6.splice(--e10, 1, s11.left, null, s11.right) : t6.splice(--e10, 1, s11.left, s11.right), i10 += 1 + s11.break, n10 -= s11.size;
        } else if (s10 > 2 * n10) {
          let e11 = t6[i10];
          e11.break ? t6.splice(i10, 1, e11.left, null, e11.right) : t6.splice(i10, 1, e11.left, e11.right), i10 += 2 + e11.break, s10 -= e11.size;
        } else
          break;
      } else if (n10 < s10) {
        let i11 = t6[e10++];
        i11 && (n10 += i11.size);
      } else {
        let e11 = t6[--i10];
        e11 && (s10 += e11.size);
      }
    let r10 = 0;
    return null == t6[e10 - 1] ? (r10 = 1, e10--) : null == t6[e10] && (r10 = 1, i10++), new nB(nD.of(t6.slice(0, e10)), r10, nD.of(t6.slice(i10)));
  }
}
nD.prototype.size = 1;
class nT extends nD {
  constructor(t6, e10, i10) {
    super(t6, e10), this.deco = i10;
  }
  blockAt(t6, e10, i10, n10) {
    return new nM(n10, this.length, i10, this.height, this.deco || 0);
  }
  lineAt(t6, e10, i10, n10, s10) {
    return this.blockAt(0, i10, n10, s10);
  }
  forEachLine(t6, e10, i10, n10, s10, r10) {
    t6 <= s10 + this.length && e10 >= s10 && r10(this.blockAt(0, i10, n10, s10));
  }
  updateHeight(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0);
    return i10 && i10.from <= e10 && i10.more && this.setHeight(t6, i10.heights[i10.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class nE extends nT {
  constructor(t6, e10) {
    super(t6, e10, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t6, e10, i10, n10) {
    return new nM(n10, this.length, i10, this.height, this.breaks);
  }
  replace(t6, e10, i10) {
    let n10 = i10[0];
    return 1 == i10.length && (n10 instanceof nE || n10 instanceof nR && 4 & n10.flags) && 10 > Math.abs(this.length - n10.length) ? (n10 instanceof nR ? n10 = new nE(n10.length, this.height) : n10.height = this.height, this.outdated || (n10.outdated = false), n10) : nD.of(i10);
  }
  updateHeight(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0;
    return n10 && n10.from <= e10 && n10.more ? this.setHeight(t6, n10.heights[n10.index++]) : (i10 || this.outdated) && this.setHeight(t6, Math.max(this.widgetHeight, t6.heightForLine(this.length - this.collapsed)) + this.breaks * t6.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class nR extends nD {
  constructor(t6) {
    super(t6, 0);
  }
  heightMetrics(t6, e10) {
    let i10 = t6.doc.lineAt(e10).number, n10 = t6.doc.lineAt(e10 + this.length).number, s10 = n10 - i10 + 1, r10, o10 = 0;
    if (t6.lineWrapping) {
      let e11 = Math.min(this.height, t6.lineHeight * s10);
      r10 = e11 / s10, this.length > s10 + 1 && (o10 = (this.height - e11) / (this.length - s10 - 1));
    } else
      r10 = this.height / s10;
    return { firstLine: i10, lastLine: n10, perLine: r10, perChar: o10 };
  }
  blockAt(t6, e10, i10, n10) {
    let { firstLine: s10, lastLine: r10, perLine: o10, perChar: l10 } = this.heightMetrics(e10, n10);
    if (e10.lineWrapping) {
      let s11 = n10 + (t6 < e10.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t6 - i10) / this.height)) * this.length)), r11 = e10.doc.lineAt(s11), h10 = o10 + r11.length * l10;
      return new nM(r11.from, r11.length, Math.max(i10, t6 - h10 / 2), h10, 0);
    }
    {
      let n11 = Math.max(0, Math.min(r10 - s10, Math.floor((t6 - i10) / o10))), { from: l11, length: h10 } = e10.doc.line(s10 + n11);
      return new nM(l11, h10, i10 + o10 * n11, o10, 0);
    }
  }
  lineAt(t6, e10, i10, n10, s10) {
    if (e10 == nO.ByHeight)
      return this.blockAt(t6, i10, n10, s10);
    if (e10 == nO.ByPosNoHeight) {
      let { from: e11, to: n11 } = i10.doc.lineAt(t6);
      return new nM(e11, n11 - e11, 0, 0, 0);
    }
    let { firstLine: r10, perLine: o10, perChar: l10 } = this.heightMetrics(i10, s10), h10 = i10.doc.lineAt(t6), a5 = o10 + h10.length * l10, c2 = h10.number - r10, d2 = n10 + o10 * c2 + l10 * (h10.from - s10 - c2);
    return new nM(h10.from, h10.length, Math.max(n10, Math.min(d2, n10 + this.height - a5)), a5, 0);
  }
  forEachLine(t6, e10, i10, n10, s10, r10) {
    t6 = Math.max(t6, s10), e10 = Math.min(e10, s10 + this.length);
    let { firstLine: o10, perLine: l10, perChar: h10 } = this.heightMetrics(i10, s10);
    for (let a5 = t6, c2 = n10; a5 <= e10; ) {
      let e11 = i10.doc.lineAt(a5);
      if (a5 == t6) {
        let i11 = e11.number - o10;
        c2 += l10 * i11 + h10 * (t6 - s10 - i11);
      }
      let n11 = l10 + h10 * e11.length;
      r10(new nM(e11.from, e11.length, c2, n11, 0)), c2 += n11, a5 = e11.to + 1;
    }
  }
  replace(t6, e10, i10) {
    let n10 = this.length - e10;
    if (n10 > 0) {
      let t7 = i10[i10.length - 1];
      t7 instanceof nR ? i10[i10.length - 1] = new nR(t7.length + n10) : i10.push(null, new nR(n10 - 1));
    }
    if (t6 > 0) {
      let e11 = i10[0];
      e11 instanceof nR ? i10[0] = new nR(t6 + e11.length) : i10.unshift(new nR(t6 - 1), null);
    }
    return nD.of(i10);
  }
  decomposeLeft(t6, e10) {
    e10.push(new nR(t6 - 1), null);
  }
  decomposeRight(t6, e10) {
    e10.push(null, new nR(this.length - t6 - 1));
  }
  updateHeight(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0, s10 = e10 + this.length;
    if (n10 && n10.from <= e10 + this.length && n10.more) {
      let i11 = [], r10 = Math.max(e10, n10.from), o10 = -1;
      for (n10.from > e10 && i11.push(new nR(n10.from - e10 - 1).updateHeight(t6, e10)); r10 <= s10 && n10.more; ) {
        let e11 = t6.doc.lineAt(r10).length;
        i11.length && i11.push(null);
        let s11 = n10.heights[n10.index++];
        -1 == o10 ? o10 = s11 : Math.abs(s11 - o10) >= 1e-3 && (o10 = -2);
        let l11 = new nE(e11, s11);
        l11.outdated = false, i11.push(l11), r10 += e11 + 1;
      }
      r10 <= s10 && i11.push(null, new nR(s10 - r10).updateHeight(t6, r10));
      let l10 = nD.of(i11);
      return (o10 < 0 || Math.abs(l10.height - this.height) >= 1e-3 || Math.abs(o10 - this.heightMetrics(t6, e10).perLine) >= 1e-3) && (t6.heightChanged = true), l10;
    }
    return (i10 || this.outdated) && (this.setHeight(t6, t6.heightForGap(e10, e10 + this.length)), this.outdated = false), this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class nB extends nD {
  constructor(t6, e10, i10) {
    super(t6.length + e10 + i10.length, t6.height + i10.height, e10 | (t6.outdated || i10.outdated ? 2 : 0)), this.left = t6, this.right = i10, this.size = t6.size + i10.size;
  }
  get break() {
    return 1 & this.flags;
  }
  blockAt(t6, e10, i10, n10) {
    let s10 = i10 + this.left.height;
    return t6 < s10 ? this.left.blockAt(t6, e10, i10, n10) : this.right.blockAt(t6, e10, s10, n10 + this.left.length + this.break);
  }
  lineAt(t6, e10, i10, n10, s10) {
    let r10 = n10 + this.left.height, o10 = s10 + this.left.length + this.break, l10 = e10 == nO.ByHeight ? t6 < r10 : t6 < o10, h10 = l10 ? this.left.lineAt(t6, e10, i10, n10, s10) : this.right.lineAt(t6, e10, i10, r10, o10);
    if (this.break || (l10 ? h10.to < o10 : h10.from > o10))
      return h10;
    let a5 = e10 == nO.ByPosNoHeight ? nO.ByPosNoHeight : nO.ByPos;
    return l10 ? h10.join(this.right.lineAt(o10, a5, i10, r10, o10)) : this.left.lineAt(o10, a5, i10, n10, s10).join(h10);
  }
  forEachLine(t6, e10, i10, n10, s10, r10) {
    let o10 = n10 + this.left.height, l10 = s10 + this.left.length + this.break;
    if (this.break)
      t6 < l10 && this.left.forEachLine(t6, e10, i10, n10, s10, r10), e10 >= l10 && this.right.forEachLine(t6, e10, i10, o10, l10, r10);
    else {
      let h10 = this.lineAt(l10, nO.ByPos, i10, n10, s10);
      t6 < h10.from && this.left.forEachLine(t6, h10.from - 1, i10, n10, s10, r10), h10.to >= t6 && h10.from <= e10 && r10(h10), e10 > h10.to && this.right.forEachLine(h10.to + 1, e10, i10, o10, l10, r10);
    }
  }
  replace(t6, e10, i10) {
    let n10 = this.left.length + this.break;
    if (e10 < n10)
      return this.balanced(this.left.replace(t6, e10, i10), this.right);
    if (t6 > this.left.length)
      return this.balanced(this.left, this.right.replace(t6 - n10, e10 - n10, i10));
    let s10 = [];
    t6 > 0 && this.decomposeLeft(t6, s10);
    let r10 = s10.length;
    for (let t7 of i10)
      s10.push(t7);
    if (t6 > 0 && nP(s10, r10 - 1), e10 < this.length) {
      let t7 = s10.length;
      this.decomposeRight(e10, s10), nP(s10, t7);
    }
    return nD.of(s10);
  }
  decomposeLeft(t6, e10) {
    let i10 = this.left.length;
    if (t6 <= i10)
      return this.left.decomposeLeft(t6, e10);
    e10.push(this.left), this.break && t6 >= ++i10 && e10.push(null), t6 > i10 && this.right.decomposeLeft(t6 - i10, e10);
  }
  decomposeRight(t6, e10) {
    let i10 = this.left.length, n10 = i10 + this.break;
    if (t6 >= n10)
      return this.right.decomposeRight(t6 - n10, e10);
    t6 < i10 && this.left.decomposeRight(t6, e10), this.break && t6 < n10 && e10.push(null), e10.push(this.right);
  }
  balanced(t6, e10) {
    return t6.size > 2 * e10.size || e10.size > 2 * t6.size ? nD.of(this.break ? [t6, null, e10] : [t6, e10]) : (this.left = t6, this.right = e10, this.height = t6.height + e10.height, this.outdated = t6.outdated || e10.outdated, this.size = t6.size + e10.size, this.length = t6.length + this.break + e10.length, this);
  }
  updateHeight(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0, { left: s10, right: r10 } = this, o10 = e10 + s10.length + this.break, l10 = null;
    return (n10 && n10.from <= e10 + s10.length && n10.more ? l10 = s10 = s10.updateHeight(t6, e10, i10, n10) : s10.updateHeight(t6, e10, i10), n10 && n10.from <= o10 + r10.length && n10.more ? l10 = r10 = r10.updateHeight(t6, o10, i10, n10) : r10.updateHeight(t6, o10, i10), l10) ? this.balanced(s10, r10) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function nP(t6, e10) {
  let i10, n10;
  null == t6[e10] && (i10 = t6[e10 - 1]) instanceof nR && (n10 = t6[e10 + 1]) instanceof nR && t6.splice(e10 - 1, 3, new nR(i10.length + 1 + n10.length));
}
class nL {
  constructor(t6, e10) {
    this.pos = t6, this.oracle = e10, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t6;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t6, e10) {
    if (this.lineStart > -1) {
      let t7 = Math.min(e10, this.lineEnd), i10 = this.nodes[this.nodes.length - 1];
      i10 instanceof nE ? i10.length += t7 - this.pos : (t7 > this.pos || !this.isCovered) && this.nodes.push(new nE(t7 - this.pos, -1)), this.writtenTo = t7, e10 > t7 && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e10;
  }
  point(t6, e10, i10) {
    if (t6 < e10 || i10.heightRelevant) {
      let n10 = i10.widget ? i10.widget.estimatedHeight : 0, s10 = i10.widget ? i10.widget.lineBreaks : 0;
      n10 < 0 && (n10 = this.oracle.lineHeight);
      let r10 = e10 - t6;
      i10.block ? this.addBlock(new nT(r10, n10, i10)) : (r10 || s10 || n10 >= 5) && this.addLineDeco(n10, s10, r10);
    } else
      e10 > t6 && this.span(t6, e10);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t6, to: e10 } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t6, this.lineEnd = e10, this.writtenTo < t6 && ((this.writtenTo < t6 - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, t6 - 1)), this.nodes.push(null)), this.pos > t6 && this.nodes.push(new nE(this.pos - t6, -1)), this.writtenTo = this.pos;
  }
  blankContent(t6, e10) {
    let i10 = new nR(e10 - t6);
    return this.oracle.doc.lineAt(t6).to == e10 && (i10.flags |= 4), i10;
  }
  ensureLine() {
    this.enterLine();
    let t6 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t6 instanceof nE)
      return t6;
    let e10 = new nE(0, -1);
    return this.nodes.push(e10), e10;
  }
  addBlock(t6) {
    this.enterLine();
    let e10 = t6.deco;
    e10 && e10.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t6), this.writtenTo = this.pos = this.pos + t6.length, e10 && e10.endSide > 0 && (this.covering = t6);
  }
  addLineDeco(t6, e10, i10) {
    let n10 = this.ensureLine();
    n10.length += i10, n10.collapsed += i10, n10.widgetHeight = Math.max(n10.widgetHeight, t6), n10.breaks += e10, this.writtenTo = this.pos = this.pos + i10;
  }
  finish(t6) {
    let e10 = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
    !(this.lineStart > -1) || e10 instanceof nE || this.isCovered ? (this.writtenTo < this.pos || null == e10) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new nE(0, -1));
    let i10 = t6;
    for (let t7 of this.nodes)
      t7 instanceof nE && t7.updateHeight(this.oracle, i10), i10 += t7 ? t7.length : 1;
    return this.nodes;
  }
  static build(t6, e10, i10, n10) {
    let s10 = new nL(i10, t6);
    return tj.spans(e10, i10, n10, s10, 0), s10.finish(i10);
  }
}
class nN {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t6, e10, i10, n10) {
    (t6 < e10 || i10 && i10.heightRelevant || n10 && n10.heightRelevant) && e6(t6, e10, this.changes, 5);
  }
}
class nI {
  constructor(t6, e10, i10) {
    this.from = t6, this.to = e10, this.size = i10;
  }
  static same(t6, e10) {
    if (t6.length != e10.length)
      return false;
    for (let i10 = 0; i10 < t6.length; i10++) {
      let n10 = t6[i10], s10 = e10[i10];
      if (n10.from != s10.from || n10.to != s10.to || n10.size != s10.size)
        return false;
    }
    return true;
  }
  draw(t6, e10) {
    return e3.replace({ widget: new nV(this.size * (e10 ? t6.scaleY : t6.scaleX), e10) }).range(this.from, this.to);
  }
}
class nV extends e1 {
  constructor(t6, e10) {
    super(), this.size = t6, this.vertical = e10;
  }
  eq(t6) {
    return t6.size == this.size && t6.vertical == this.vertical;
  }
  toDOM() {
    let t6 = document.createElement("div");
    return this.vertical ? t6.style.height = this.size + "px" : (t6.style.width = this.size + "px", t6.style.height = "2px", t6.style.display = "inline-block"), t6;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class nH {
  constructor(t6) {
    this.state = t6, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = n_, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = ii.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let e10 = t6.facet(iV).some((t7) => "function" != typeof t7 && "cm-lineWrapping" == t7.class);
    this.heightOracle = new nC(e10), this.stateDeco = t6.facet(iH).filter((t7) => "function" != typeof t7), this.heightMap = nD.empty().applyChanges(this.stateDeco, v.empty, this.heightOracle.setDoc(t6.doc), [new i$(0, 0, 0, t6.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = e3.set(this.lineGaps.map((t7) => t7.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t6 = [this.viewport], { main: e10 } = this.state.selection;
    for (let i10 = 0; i10 <= 1; i10++) {
      let n10 = i10 ? e10.head : e10.anchor;
      if (!t6.some((t7) => {
        let { from: e11, to: i11 } = t7;
        return n10 >= e11 && n10 <= i11;
      })) {
        let { from: e11, to: i11 } = this.lineBlockAt(n10);
        t6.push(new nW(e11, i11));
      }
    }
    this.viewports = t6.sort((t7, e11) => t7.from - e11.from), this.scaler = this.heightMap.height <= 7e6 ? n_ : new nj(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t6) => {
      this.viewportLines.push(1 == this.scaler.scale ? t6 : nq(t6, this.scaler));
    });
  }
  update(t6) {
    var e10, i10;
    let n10, s10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    this.state = t6.state;
    let r10 = this.stateDeco;
    this.stateDeco = this.state.facet(iH).filter((t7) => "function" != typeof t7);
    let o10 = t6.changedRanges, l10 = i$.extendWithRanges(o10, (e10 = this.stateDeco, i10 = t6 ? t6.changes : $.empty(this.state.doc.length), n10 = new nN(), tj.compare(r10, e10, i10, n10, 0), n10.changes)), h10 = this.heightMap.height, a5 = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, t6.startState.doc, this.heightOracle.setDoc(this.state.doc), l10), this.heightMap.height != h10 && (t6.flags |= 2), a5 ? (this.scrollAnchorPos = t6.changes.mapPos(a5.from, -1), this.scrollAnchorHeight = a5.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let c2 = l10.length ? this.mapViewport(this.viewport, t6.changes) : this.viewport;
    (s10 && (s10.range.head < c2.from || s10.range.head > c2.to) || !this.viewportIsAppropriate(c2)) && (c2 = this.getViewport(0, s10));
    let d2 = !t6.changes.empty || 2 & t6.flags || c2.from != this.viewport.from || c2.to != this.viewport.to;
    this.viewport = c2, this.updateForViewport(), d2 && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t6.changes))), t6.flags |= this.computeVisibleRanges(), s10 && (this.scrollTarget = s10), !this.mustEnforceCursorAssoc && t6.selectionSet && t6.view.lineWrapping && t6.state.selection.main.empty && t6.state.selection.main.assoc && !t6.state.facet(iM) && (this.mustEnforceCursorAssoc = true);
  }
  measure(t6) {
    let e10 = t6.contentDOM, i10 = window.getComputedStyle(e10), n10 = this.heightOracle, s10 = i10.whiteSpace;
    this.defaultTextDirection = "rtl" == i10.direction ? ii.RTL : ii.LTR;
    let r10 = this.heightOracle.mustRefreshForWrapping(s10), o10 = e10.getBoundingClientRect(), l10 = r10 || this.mustMeasureContent || this.contentDOMHeight != o10.height;
    this.contentDOMHeight = o10.height, this.mustMeasureContent = false;
    let h10 = 0, a5 = 0;
    if (o10.width && o10.height) {
      let { scaleX: t7, scaleY: i11 } = ep(e10, o10);
      (t7 > 5e-3 && Math.abs(this.scaleX - t7) > 5e-3 || i11 > 5e-3 && Math.abs(this.scaleY - i11) > 5e-3) && (this.scaleX = t7, this.scaleY = i11, h10 |= 8, r10 = l10 = true);
    }
    let c2 = (parseInt(i10.paddingTop) || 0) * this.scaleY, d2 = (parseInt(i10.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != c2 || this.paddingBottom != d2) && (this.paddingTop = c2, this.paddingBottom = d2, h10 |= 10), this.editorWidth != t6.scrollDOM.clientWidth && (n10.lineWrapping && (l10 = true), this.editorWidth = t6.scrollDOM.clientWidth, h10 |= 8);
    let u2 = t6.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != u2 && (this.scrollAnchorHeight = -1, this.scrollTop = u2), this.scrolledToBottom = ex(t6.scrollDOM);
    let f2 = (this.printing ? function(t7, e11) {
      let i11 = t7.getBoundingClientRect();
      return { left: 0, right: i11.right - i11.left, top: e11, bottom: i11.bottom - (i11.top + e11) };
    } : function(t7, e11) {
      let i11 = t7.getBoundingClientRect(), n11 = t7.ownerDocument, s11 = n11.defaultView || window, r11 = Math.max(0, i11.left), o11 = Math.min(s11.innerWidth, i11.right), l11 = Math.max(0, i11.top), h11 = Math.min(s11.innerHeight, i11.bottom);
      for (let e12 = t7.parentNode; e12 && e12 != n11.body; )
        if (1 == e12.nodeType) {
          let i12 = e12, n12 = window.getComputedStyle(i12);
          if ((i12.scrollHeight > i12.clientHeight || i12.scrollWidth > i12.clientWidth) && "visible" != n12.overflow) {
            let n13 = i12.getBoundingClientRect();
            r11 = Math.max(r11, n13.left), o11 = Math.min(o11, n13.right), l11 = Math.max(l11, n13.top), h11 = e12 == t7.parentNode ? n13.bottom : Math.min(h11, n13.bottom);
          }
          e12 = "absolute" == n12.position || "fixed" == n12.position ? i12.offsetParent : i12.parentNode;
        } else if (11 == e12.nodeType)
          e12 = e12.host;
        else
          break;
      return { left: r11 - i11.left, right: Math.max(r11, o11) - i11.left, top: l11 - (i11.top + e11), bottom: Math.max(l11, h11) - (i11.top + e11) };
    })(e10, this.paddingTop), p2 = f2.top - this.pixelViewport.top, g2 = f2.bottom - this.pixelViewport.bottom;
    this.pixelViewport = f2;
    let m2 = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (m2 != this.inView && (this.inView = m2, m2 && (l10 = true)), !this.inView && !this.scrollTarget)
      return 0;
    let w2 = o10.width;
    if ((this.contentDOMWidth != w2 || this.editorHeight != t6.scrollDOM.clientHeight) && (this.contentDOMWidth = o10.width, this.editorHeight = t6.scrollDOM.clientHeight, h10 |= 8), l10) {
      let e11 = t6.docView.measureVisibleLineHeights(this.viewport);
      if (n10.mustRefreshForHeights(e11) && (r10 = true), r10 || n10.lineWrapping && Math.abs(w2 - this.contentDOMWidth) > n10.charWidth) {
        let { lineHeight: i11, charWidth: o11, textHeight: l11 } = t6.docView.measureTextSize();
        (r10 = i11 > 0 && n10.refresh(s10, i11, o11, l11, w2 / o11, e11)) && (t6.docView.minWidth = 0, h10 |= 8);
      }
      for (let i11 of (p2 > 0 && g2 > 0 ? a5 = Math.max(p2, g2) : p2 < 0 && g2 < 0 && (a5 = Math.min(p2, g2)), n10.heightChanged = false, this.viewports)) {
        let s11 = i11.from == this.viewport.from ? e11 : t6.docView.measureVisibleLineHeights(i11);
        this.heightMap = (r10 ? nD.empty().applyChanges(this.stateDeco, v.empty, this.heightOracle, [new i$(0, 0, 0, t6.state.doc.length)]) : this.heightMap).updateHeight(n10, 0, r10, new nA(i11.from, s11));
      }
      n10.heightChanged && (h10 |= 2);
    }
    let y2 = !this.viewportIsAppropriate(this.viewport, a5) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return y2 && (this.viewport = this.getViewport(a5, this.scrollTarget)), this.updateForViewport(), (2 & h10 || y2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r10 ? [] : this.lineGaps, t6)), h10 |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t6.docView.enforceCursorAssoc()), h10;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t6, e10) {
    let i10 = 0.5 - Math.max(-0.5, Math.min(0.5, t6 / 1e3 / 2)), n10 = this.heightMap, s10 = this.heightOracle, { visibleTop: r10, visibleBottom: o10 } = this, l10 = new nW(n10.lineAt(r10 - 1e3 * i10, nO.ByHeight, s10, 0, 0).from, n10.lineAt(o10 + (1 - i10) * 1e3, nO.ByHeight, s10, 0, 0).to);
    if (e10) {
      let { head: t7 } = e10.range;
      if (t7 < l10.from || t7 > l10.to) {
        let i11 = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), r11 = n10.lineAt(t7, nO.ByPos, s10, 0, 0), o11;
        o11 = "center" == e10.y ? (r11.top + r11.bottom) / 2 - i11 / 2 : "start" == e10.y || "nearest" == e10.y && t7 < l10.from ? r11.top : r11.bottom - i11, l10 = new nW(n10.lineAt(o11 - 500, nO.ByHeight, s10, 0, 0).from, n10.lineAt(o11 + i11 + 500, nO.ByHeight, s10, 0, 0).to);
      }
    }
    return l10;
  }
  mapViewport(t6, e10) {
    let i10 = e10.mapPos(t6.from, -1), n10 = e10.mapPos(t6.to, 1);
    return new nW(this.heightMap.lineAt(i10, nO.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n10, nO.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate(t6) {
    let { from: e10, to: i10 } = t6, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (!this.inView)
      return true;
    let { top: s10 } = this.heightMap.lineAt(e10, nO.ByPos, this.heightOracle, 0, 0), { bottom: r10 } = this.heightMap.lineAt(i10, nO.ByPos, this.heightOracle, 0, 0), { visibleTop: o10, visibleBottom: l10 } = this;
    return (0 == e10 || s10 <= o10 - Math.max(10, Math.min(-n10, 250))) && (i10 == this.state.doc.length || r10 >= l10 + Math.max(10, Math.min(n10, 250))) && s10 > o10 - 2e3 && r10 < l10 + 2e3;
  }
  mapLineGaps(t6, e10) {
    if (!t6.length || e10.empty)
      return t6;
    let i10 = [];
    for (let n10 of t6)
      e10.touchesRange(n10.from, n10.to) || i10.push(new nI(e10.mapPos(n10.from), e10.mapPos(n10.to), n10.size));
    return i10;
  }
  ensureLineGaps(t6, e10) {
    let i10 = this.heightOracle.lineWrapping, n10 = i10 ? 1e4 : 2e3, s10 = n10 >> 1, r10 = n10 << 1;
    if (this.defaultTextDirection != ii.LTR && !i10)
      return [];
    let o10 = [], l10 = (n11, r11, h10, a5) => {
      if (r11 - n11 < s10)
        return;
      let c2 = this.state.selection.main, d2 = [c2.from];
      for (let t7 of (c2.empty || d2.push(c2.to), d2))
        if (t7 > n11 && t7 < r11) {
          l10(n11, t7 - 10, h10, a5), l10(t7 + 10, r11, h10, a5);
          return;
        }
      let u2 = function(t7, e11) {
        for (let i11 of t7)
          if (e11(i11))
            return i11;
      }(t6, (t7) => t7.from >= h10.from && t7.to <= h10.to && Math.abs(t7.from - n11) < s10 && Math.abs(t7.to - r11) < s10 && !d2.some((e11) => t7.from < e11 && t7.to > e11));
      if (!u2) {
        if (r11 < h10.to && e10 && i10 && e10.visibleRanges.some((t7) => t7.from <= r11 && t7.to >= r11)) {
          let t7 = e10.moveToLineBoundary(tt.cursor(r11), false, true).head;
          t7 > n11 && (r11 = t7);
        }
        u2 = new nI(n11, r11, this.gapSize(h10, n11, r11, a5));
      }
      o10.push(u2);
    };
    for (let t7 of this.viewportLines) {
      let e11, s11;
      if (t7.length < r10)
        continue;
      let o11 = function(t10, e12, i11) {
        let n11 = [], s12 = t10, r11 = 0;
        return tj.spans(i11, t10, e12, { span() {
        }, point(t11, e13) {
          t11 > s12 && (n11.push({ from: s12, to: t11 }), r11 += t11 - s12), s12 = e13;
        } }, 20), s12 < e12 && (n11.push({ from: s12, to: e12 }), r11 += e12 - s12), { total: r11, ranges: n11 };
      }(t7.from, t7.to, this.stateDeco);
      if (o11.total < r10)
        continue;
      let h10 = this.scrollTarget ? this.scrollTarget.range.head : null;
      if (i10) {
        let i11, r11, l11 = n10 / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        if (null != h10) {
          let e12 = nz(o11, h10), n11 = ((this.visibleBottom - this.visibleTop) / 2 + l11) / t7.height;
          i11 = e12 - n11, r11 = e12 + n11;
        } else
          i11 = (this.visibleTop - t7.top - l11) / t7.height, r11 = (this.visibleBottom - t7.top + l11) / t7.height;
        e11 = nF(o11, i11), s11 = nF(o11, r11);
      } else {
        let t10, i11, r11 = o11.total * this.heightOracle.charWidth, l11 = n10 * this.heightOracle.charWidth;
        if (null != h10) {
          let e12 = nz(o11, h10), n11 = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + l11) / r11;
          t10 = e12 - n11, i11 = e12 + n11;
        } else
          t10 = (this.pixelViewport.left - l11) / r11, i11 = (this.pixelViewport.right + l11) / r11;
        e11 = nF(o11, t10), s11 = nF(o11, i11);
      }
      e11 > t7.from && l10(t7.from, e11, t7, o11), s11 < t7.to && l10(s11, t7.to, t7, o11);
    }
    return o10;
  }
  gapSize(t6, e10, i10, n10) {
    let s10 = nz(n10, i10) - nz(n10, e10);
    return this.heightOracle.lineWrapping ? t6.height * s10 : n10.total * this.heightOracle.charWidth * s10;
  }
  updateLineGaps(t6) {
    nI.same(t6, this.lineGaps) || (this.lineGaps = t6, this.lineGapDeco = e3.set(t6.map((t7) => t7.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let t6 = this.stateDeco;
    this.lineGaps.length && (t6 = t6.concat(this.lineGapDeco));
    let e10 = [];
    tj.spans(t6, this.viewport.from, this.viewport.to, { span(t7, i11) {
      e10.push({ from: t7, to: i11 });
    }, point() {
    } }, 20);
    let i10 = e10.length != this.visibleRanges.length || this.visibleRanges.some((t7, i11) => t7.from != e10[i11].from || t7.to != e10[i11].to);
    return this.visibleRanges = e10, i10 ? 4 : 0;
  }
  lineBlockAt(t6) {
    return t6 >= this.viewport.from && t6 <= this.viewport.to && this.viewportLines.find((e10) => e10.from <= t6 && e10.to >= t6) || nq(this.heightMap.lineAt(t6, nO.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t6) {
    return nq(this.heightMap.lineAt(this.scaler.fromDOM(t6), nO.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t6) {
    let e10 = this.lineBlockAtHeight(t6 + 8);
    return e10.from >= this.viewport.from || this.viewportLines[0].top - t6 > 200 ? e10 : this.viewportLines[0];
  }
  elementAtHeight(t6) {
    return nq(this.heightMap.blockAt(this.scaler.fromDOM(t6), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class nW {
  constructor(t6, e10) {
    this.from = t6, this.to = e10;
  }
}
function nF(t6, e10) {
  let { total: i10, ranges: n10 } = t6;
  if (e10 <= 0)
    return n10[0].from;
  if (e10 >= 1)
    return n10[n10.length - 1].to;
  let s10 = Math.floor(i10 * e10);
  for (let t7 = 0; ; t7++) {
    let { from: e11, to: i11 } = n10[t7], r10 = i11 - e11;
    if (s10 <= r10)
      return e11 + s10;
    s10 -= r10;
  }
}
function nz(t6, e10) {
  let i10 = 0;
  for (let { from: n10, to: s10 } of t6.ranges) {
    if (e10 <= s10) {
      i10 += e10 - n10;
      break;
    }
    i10 += s10 - n10;
  }
  return i10 / t6.total;
}
let n_ = { toDOM: (t6) => t6, fromDOM: (t6) => t6, scale: 1 };
class nj {
  constructor(t6, e10, i10) {
    let n10 = 0, s10 = 0, r10 = 0;
    for (let o10 of (this.viewports = i10.map((i11) => {
      let { from: s11, to: r11 } = i11, o11 = e10.lineAt(s11, nO.ByPos, t6, 0, 0).top, l10 = e10.lineAt(r11, nO.ByPos, t6, 0, 0).bottom;
      return n10 += l10 - o11, { from: s11, to: r11, top: o11, bottom: l10, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n10) / (e10.height - n10), this.viewports))
      o10.domTop = r10 + (o10.top - s10) * this.scale, r10 = o10.domBottom = o10.domTop + (o10.bottom - o10.top), s10 = o10.bottom;
  }
  toDOM(t6) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t6 < s10.top)
        return n10 + (t6 - i10) * this.scale;
      if (t6 <= s10.bottom)
        return s10.domTop + (t6 - s10.top);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
  fromDOM(t6) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t6 < s10.domTop)
        return i10 + (t6 - n10) / this.scale;
      if (t6 <= s10.domBottom)
        return s10.top + (t6 - s10.domTop);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
}
function nq(t6, e10) {
  if (1 == e10.scale)
    return t6;
  let i10 = e10.toDOM(t6.top), n10 = e10.toDOM(t6.bottom);
  return new nM(t6.from, t6.length, i10, n10 - i10, Array.isArray(t6._content) ? t6._content.map((t7) => nq(t7, e10)) : t6._content);
}
let nK = tn.define({ combine: (t6) => t6.join(" ") }), n$ = tn.define({ combine: (t6) => t6.indexOf(true) > -1 }), nU = t4.newName(), nG = t4.newName(), nJ = t4.newName(), nY = { "&light": "." + nG, "&dark": "." + nJ };
function nX(t6, e10, i10) {
  return new t4(e10, { finish: (e11) => /&/.test(e11) ? e11.replace(/&\w*/, (e12) => {
    if ("&" == e12)
      return t6;
    if (!i10 || !i10[e12])
      throw RangeError(`Unsupported selector: ${e12}`);
    return i10[e12];
  }) : t6 + " " + e11 });
}
let nQ = nX("." + nU, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0 }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#444" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" }, ".cm-highlightSpace:before": { content: "attr(data-display)", position: "absolute", pointerEvents: "none", color: "#888" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, nY);
class nZ {
  constructor(t6, e10) {
    this.points = t6, this.text = "", this.lineSeparator = e10.facet(tV.lineSeparator);
  }
  append(t6) {
    this.text += t6;
  }
  lineBreak() {
    this.text += "￿";
  }
  readRange(t6, e10) {
    if (!t6)
      return this;
    let i10 = t6.parentNode;
    for (let n10 = t6; ; ) {
      this.findPointBefore(i10, n10);
      let t7 = this.text.length;
      this.readNode(n10);
      let s10 = n10.nextSibling;
      if (s10 == e10)
        break;
      let r10 = eM.get(n10), o10 = eM.get(s10);
      (r10 && o10 ? r10.breakAfter : (r10 ? r10.breakAfter : ec(n10)) || ec(s10) && ("BR" != n10.nodeName || n10.cmIgnore) && this.text.length > t7) && this.lineBreak(), n10 = s10;
    }
    return this.findPointBefore(i10, e10), this;
  }
  readTextNode(t6) {
    let e10 = t6.nodeValue;
    for (let i10 of this.points)
      i10.node == t6 && (i10.pos = this.text.length + Math.min(i10.offset, e10.length));
    for (let i10 = 0, n10 = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s10 = -1, r10 = 1, o10;
      if (this.lineSeparator ? (s10 = e10.indexOf(this.lineSeparator, i10), r10 = this.lineSeparator.length) : (o10 = n10.exec(e10)) && (s10 = o10.index, r10 = o10[0].length), this.append(e10.slice(i10, s10 < 0 ? e10.length : s10)), s10 < 0)
        break;
      if (this.lineBreak(), r10 > 1)
        for (let e11 of this.points)
          e11.node == t6 && e11.pos > this.text.length && (e11.pos -= r10 - 1);
      i10 = s10 + r10;
    }
  }
  readNode(t6) {
    if (t6.cmIgnore)
      return;
    let e10 = eM.get(t6), i10 = e10 && e10.overrideDOMText;
    if (null != i10) {
      this.findPointInside(t6, i10.length);
      for (let t7 = i10.iter(); !t7.next().done; )
        t7.lineBreak ? this.lineBreak() : this.append(t7.value);
    } else
      3 == t6.nodeType ? this.readTextNode(t6) : "BR" == t6.nodeName ? t6.nextSibling && this.lineBreak() : 1 == t6.nodeType && this.readRange(t6.firstChild, null);
  }
  findPointBefore(t6, e10) {
    for (let i10 of this.points)
      i10.node == t6 && t6.childNodes[i10.offset] == e10 && (i10.pos = this.text.length);
  }
  findPointInside(t6, e10) {
    for (let i10 of this.points)
      (3 == t6.nodeType ? i10.node == t6 : t6.contains(i10.node)) && (i10.pos = this.text.length + (!function(t7, e11, i11) {
        for (; ; ) {
          if (!e11 || i11 < eu(e11))
            return false;
          if (e11 == t7)
            return true;
          i11 = ea(e11) + 1, e11 = e11.parentNode;
        }
      }(t6, i10.node, i10.offset) ? 0 : e10));
  }
}
class n0 {
  constructor(t6, e10) {
    this.node = t6, this.offset = e10, this.pos = -1;
  }
}
class n1 {
  constructor(t6, e10, i10, n10) {
    this.typeOver = n10, this.bounds = null, this.text = "";
    let { impreciseHead: s10, impreciseAnchor: r10 } = t6.docView;
    if (t6.state.readOnly && e10 > -1)
      this.newSel = null;
    else if (e10 > -1 && (this.bounds = t6.docView.domBoundsAround(e10, i10, 0))) {
      let e11 = s10 || r10 ? [] : function(t7) {
        let e12 = [];
        if (t7.root.activeElement != t7.contentDOM)
          return e12;
        let { anchorNode: i12, anchorOffset: n11, focusNode: s11, focusOffset: r11 } = t7.observer.selectionRange;
        return i12 && (e12.push(new n0(i12, n11)), (s11 != i12 || r11 != n11) && e12.push(new n0(s11, r11))), e12;
      }(t6), i11 = new nZ(e11, t6.state);
      i11.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = i11.text, this.newSel = function(t7, e12) {
        if (0 == t7.length)
          return null;
        let i12 = t7[0].pos, n11 = 2 == t7.length ? t7[1].pos : i12;
        return i12 > -1 && n11 > -1 ? tt.single(i12 + e12, n11 + e12) : null;
      }(e11, this.bounds.from);
    } else {
      let e11 = t6.observer.selectionRange, i11 = s10 && s10.node == e11.focusNode && s10.offset == e11.focusOffset || !er(t6.contentDOM, e11.focusNode) ? t6.state.selection.main.head : t6.docView.posFromDOM(e11.focusNode, e11.focusOffset), n11 = r10 && r10.node == e11.anchorNode && r10.offset == e11.anchorOffset || !er(t6.contentDOM, e11.anchorNode) ? t6.state.selection.main.anchor : t6.docView.posFromDOM(e11.anchorNode, e11.anchorOffset), o10 = t6.viewport;
      if ((e_.ios || e_.chrome) && t6.state.selection.main.empty && i11 != n11 && (o10.from > 0 || o10.to < t6.state.doc.length)) {
        let e12 = Math.min(i11, n11), s11 = Math.max(i11, n11), r11 = o10.from - e12, l10 = o10.to - s11;
        (0 == r11 || 1 == r11 || 0 == e12) && (0 == l10 || -1 == l10 || s11 == t6.state.doc.length) && (i11 = 0, n11 = t6.state.doc.length);
      }
      this.newSel = tt.single(n11, i11);
    }
  }
}
function n2(t6, e10) {
  let i10;
  let { newSel: n10 } = e10, s10 = t6.state.selection.main, r10 = t6.inputState.lastKeyTime > Date.now() - 100 ? t6.inputState.lastKeyCode : -1;
  if (e10.bounds) {
    let { from: n11, to: o10 } = e10.bounds, l10 = s10.from, h10 = null;
    (8 === r10 || e_.android && e10.text.length < o10 - n11) && (l10 = s10.to, h10 = "end");
    let a5 = function(t7, e11, i11, n12) {
      let s11 = Math.min(t7.length, e11.length), r11 = 0;
      for (; r11 < s11 && t7.charCodeAt(r11) == e11.charCodeAt(r11); )
        r11++;
      if (r11 == s11 && t7.length == e11.length)
        return null;
      let o11 = t7.length, l11 = e11.length;
      for (; o11 > 0 && l11 > 0 && t7.charCodeAt(o11 - 1) == e11.charCodeAt(l11 - 1); )
        o11--, l11--;
      if ("end" == n12) {
        let t10 = Math.max(0, r11 - Math.min(o11, l11));
        i11 -= o11 + t10 - r11;
      }
      if (o11 < r11 && t7.length < e11.length) {
        let t10 = i11 <= r11 && i11 >= o11 ? r11 - i11 : 0;
        r11 -= t10, l11 = r11 + (l11 - o11), o11 = r11;
      } else if (l11 < r11) {
        let t10 = i11 <= r11 && i11 >= l11 ? r11 - i11 : 0;
        r11 -= t10, o11 = r11 + (o11 - l11), l11 = r11;
      }
      return { from: r11, toA: o11, toB: l11 };
    }(t6.state.doc.sliceString(n11, o10, "￿"), e10.text, l10 - n11, h10);
    a5 && (e_.chrome && 13 == r10 && a5.toB == a5.from + 2 && "￿￿" == e10.text.slice(a5.from, a5.toB) && a5.toB--, i10 = { from: n11 + a5.from, to: n11 + a5.toA, insert: v.of(e10.text.slice(a5.from, a5.toB).split("￿")) });
  } else
    n10 && (!t6.hasFocus && t6.state.facet(iR) || n10.main.eq(s10)) && (n10 = null);
  if (!i10 && !n10)
    return false;
  if (!i10 && e10.typeOver && !s10.empty && n10 && n10.main.empty ? i10 = { from: s10.from, to: s10.to, insert: t6.state.doc.slice(s10.from, s10.to) } : i10 && i10.from >= s10.from && i10.to <= s10.to && (i10.from != s10.from || i10.to != s10.to) && s10.to - s10.from - (i10.to - i10.from) <= 4 ? i10 = { from: s10.from, to: s10.to, insert: t6.state.doc.slice(s10.from, i10.from).append(i10.insert).append(t6.state.doc.slice(i10.to, s10.to)) } : (e_.mac || e_.android) && i10 && i10.from == i10.to && i10.from == s10.head - 1 && /^\. ?$/.test(i10.insert.toString()) && "off" == t6.contentDOM.getAttribute("autocorrect") ? (n10 && 2 == i10.insert.length && (n10 = tt.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: s10.from, to: s10.to, insert: v.of([" "]) }) : e_.chrome && i10 && i10.from == i10.to && i10.from == s10.head && "\n " == i10.insert.toString() && t6.lineWrapping && (n10 && (n10 = tt.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: s10.from, to: s10.to, insert: v.of([" "]) }), i10) {
    let e11;
    if (e_.ios && t6.inputState.flushIOSKey(i10) || e_.android && (i10.to == s10.to && (i10.from == s10.from || i10.from == s10.from - 1 && " " == t6.state.sliceDoc(i10.from, s10.from)) && 1 == i10.insert.length && 2 == i10.insert.lines && ey(t6.contentDOM, "Enter", 13) || (i10.from == s10.from - 1 && i10.to == s10.to && 0 == i10.insert.length || 8 == r10 && i10.insert.length < i10.to - i10.from && i10.to > s10.head) && ey(t6.contentDOM, "Backspace", 8) || i10.from == s10.from && i10.to == s10.to + 1 && 0 == i10.insert.length && ey(t6.contentDOM, "Delete", 46)))
      return true;
    let o10 = i10.insert.toString();
    t6.inputState.composing >= 0 && t6.inputState.composing++;
    let l10 = () => e11 || (e11 = function(t7, e12, i11) {
      let n11, s11 = t7.state, r11 = s11.selection.main;
      if (e12.from >= r11.from && e12.to <= r11.to && e12.to - e12.from >= (r11.to - r11.from) / 3 && (!i11 || i11.main.empty && i11.main.from == e12.from + e12.insert.length) && t7.inputState.composing < 0) {
        let i12 = r11.from < e12.from ? s11.sliceDoc(r11.from, e12.from) : "", o12 = r11.to > e12.to ? s11.sliceDoc(e12.to, r11.to) : "";
        n11 = s11.replaceSelection(t7.state.toText(i12 + e12.insert.sliceString(0, void 0, t7.state.lineBreak) + o12));
      } else {
        let o12 = s11.changes(e12), l11 = i11 && i11.main.to <= o12.newLength ? i11.main : void 0;
        if (s11.selection.ranges.length > 1 && t7.inputState.composing >= 0 && e12.to <= r11.to && e12.to >= r11.to - 10) {
          let h10 = t7.state.sliceDoc(e12.from, e12.to), a5, c2 = i11 && iY(t7, i11.main.head);
          if (c2) {
            let t10 = e12.insert.length - (e12.to - e12.from);
            a5 = { from: c2.from, to: c2.to - t10 };
          } else
            a5 = t7.state.doc.lineAt(r11.head);
          let d2 = r11.to - e12.to, u2 = r11.to - r11.from;
          n11 = s11.changeByRange((i12) => {
            if (i12.from == r11.from && i12.to == r11.to)
              return { changes: o12, range: l11 || i12.map(o12) };
            let n12 = i12.to - d2, c3 = n12 - h10.length;
            if (i12.to - i12.from != u2 || t7.state.sliceDoc(c3, n12) != h10 || i12.to >= a5.from && i12.from <= a5.to)
              return { range: i12 };
            let f2 = s11.changes({ from: c3, to: n12, insert: e12.insert }), p2 = i12.to - r11.to;
            return { changes: f2, range: l11 ? tt.range(Math.max(0, l11.anchor + p2), Math.max(0, l11.head + p2)) : i12.map(f2) };
          });
        } else
          n11 = { changes: o12, selection: l11 && s11.selection.replaceRange(l11) };
      }
      let o11 = "input.type";
      return (t7.composing || t7.inputState.compositionPendingChange && t7.inputState.compositionEndedAt > Date.now() - 50) && (t7.inputState.compositionPendingChange = false, o11 += ".compose", t7.inputState.compositionFirstChange && (o11 += ".start", t7.inputState.compositionFirstChange = false)), s11.update(n11, { userEvent: o11, scrollIntoView: true });
    }(t6, i10, n10));
    return t6.state.facet(iS).some((e12) => e12(t6, i10.from, i10.to, o10, l10)) || t6.dispatch(l10()), true;
  }
  if (!n10 || n10.main.eq(s10))
    return false;
  {
    let e11 = false, i11 = "select";
    return t6.inputState.lastSelectionTime > Date.now() - 50 && ("select" == t6.inputState.lastSelectionOrigin && (e11 = true), i11 = t6.inputState.lastSelectionOrigin), t6.dispatch({ selection: n10, scrollIntoView: e11, userEvent: i11 }), true;
  }
}
let n3 = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, n8 = e_.ie && e_.ie_version <= 11;
class n4 {
  constructor(t6) {
    this.view = t6, this.active = false, this.selectionRange = new eg(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t6.contentDOM, this.observer = new MutationObserver((e10) => {
      for (let t7 of e10)
        this.queue.push(t7);
      (e_.ie && e_.ie_version <= 11 || e_.ios && t6.composing) && e10.some((t7) => "childList" == t7.type && t7.removedNodes.length || "characterData" == t7.type && t7.oldValue.length > t7.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), n8 && (this.onCharData = (t7) => {
      this.queue.push({ target: t7.target, type: "characterData", oldValue: t7.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver(() => {
      var t7;
      (null === (t7 = this.view.docView) || void 0 === t7 ? void 0 : t7.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t6.scrollDOM)), this.addWindowListeners(this.win = t6.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((t7) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t7.length > 0 && t7[t7.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t7) => {
      t7.length > 0 && t7[t7.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t6) {
    this.view.inputState.runHandlers("scroll", t6), this.intersecting && this.view.measure();
  }
  onScroll(t6) {
    this.intersecting && this.flush(false), this.onScrollChanged(t6);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t6) {
    ("change" != t6.type || t6.matches) && (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t6) {
    if (this.gapIntersection && (t6.length != this.gaps.length || this.gaps.some((e10, i10) => e10 != t6[i10]))) {
      for (let e10 of (this.gapIntersection.disconnect(), t6))
        this.gapIntersection.observe(e10);
      this.gaps = t6;
    }
  }
  onSelectionChange(t6) {
    let e10 = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i10 } = this, n10 = this.selectionRange;
    if (i10.state.facet(iR) ? i10.root.activeElement != this.dom : !eo(i10.dom, n10))
      return;
    let s10 = n10.anchorNode && i10.docView.nearest(n10.anchorNode);
    if (s10 && s10.ignoreEvent(t6)) {
      e10 || (this.selectionChanged = false);
      return;
    }
    (e_.ie && e_.ie_version <= 11 || e_.android && e_.chrome) && !i10.state.selection.main.empty && n10.focusNode && eh(n10.focusNode, n10.focusOffset, n10.anchorNode, n10.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: t6 } = this, e10 = es(t6.root);
    if (!e10)
      return false;
    let i10 = e_.safari && 11 == t6.root.nodeType && function(t7) {
      let e11 = t7.activeElement;
      for (; e11 && e11.shadowRoot; )
        e11 = e11.shadowRoot.activeElement;
      return e11;
    }(this.dom.ownerDocument) == this.dom && function(t7, e11) {
      if (e11.getComposedRanges) {
        let i12 = e11.getComposedRanges(t7.root)[0];
        if (i12)
          return n9(t7, i12);
      }
      let i11 = null;
      function n11(t10) {
        t10.preventDefault(), t10.stopImmediatePropagation(), i11 = t10.getTargetRanges()[0];
      }
      return t7.contentDOM.addEventListener("beforeinput", n11, true), t7.dom.ownerDocument.execCommand("indent"), t7.contentDOM.removeEventListener("beforeinput", n11, true), i11 ? n9(t7, i11) : null;
    }(this.view, e10) || e10;
    if (!i10 || this.selectionRange.eq(i10))
      return false;
    let n10 = eo(this.dom, i10);
    return n10 && !this.selectionChanged && t6.inputState.lastFocusTime > Date.now() - 200 && t6.inputState.lastTouchTime < Date.now() - 300 && function(t7, e11) {
      let i11 = e11.focusNode, n11 = e11.focusOffset;
      if (!i11 || e11.anchorNode != i11 || e11.anchorOffset != n11)
        return false;
      for (n11 = Math.min(n11, eu(i11)); ; )
        if (n11) {
          if (1 != i11.nodeType)
            return false;
          let t10 = i11.childNodes[n11 - 1];
          "false" == t10.contentEditable ? n11-- : n11 = eu(i11 = t10);
        } else {
          if (i11 == t7)
            return true;
          n11 = ea(i11), i11 = i11.parentNode;
        }
    }(this.dom, i10) ? (this.view.inputState.lastFocusTime = 0, t6.docView.updateSelection(), false) : (this.selectionRange.setRange(i10), n10 && (this.selectionChanged = true), true);
  }
  setSelectionRange(t6, e10) {
    this.selectionRange.set(t6.node, t6.offset, e10.node, e10.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t6 = 0, e10 = null;
    for (let i10 = this.dom; i10; )
      if (1 == i10.nodeType)
        !e10 && t6 < this.scrollTargets.length && this.scrollTargets[t6] == i10 ? t6++ : e10 || (e10 = this.scrollTargets.slice(0, t6)), e10 && e10.push(i10), i10 = i10.assignedSlot || i10.parentNode;
      else if (11 == i10.nodeType)
        i10 = i10.host;
      else
        break;
    if (t6 < this.scrollTargets.length && !e10 && (e10 = this.scrollTargets.slice(0, t6)), e10) {
      for (let t7 of this.scrollTargets)
        t7.removeEventListener("scroll", this.onScroll);
      for (let t7 of this.scrollTargets = e10)
        t7.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t6) {
    if (!this.active)
      return t6();
    try {
      return this.stop(), t6();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, n3), n8 && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), n8 && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(t6, e10) {
    var i10;
    this.delayedAndroidKey || (this.flushingAndroidKey = this.view.win.requestAnimationFrame(() => {
      let t7 = this.delayedAndroidKey;
      t7 && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = t7.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && t7.force && ey(this.dom, t7.key, t7.keyCode));
    })), this.delayedAndroidKey && "Enter" != t6 || (this.delayedAndroidKey = { key: t6, keyCode: e10, force: this.lastChange < Date.now() - 50 || !!(null === (i10 = this.delayedAndroidKey) || void 0 === i10 ? void 0 : i10.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t6 of this.observer.takeRecords())
      this.queue.push(t6);
    return this.queue;
  }
  processRecords() {
    let t6 = this.pendingRecords();
    t6.length && (this.queue = []);
    let e10 = -1, i10 = -1, n10 = false;
    for (let s10 of t6) {
      let t7 = this.readMutation(s10);
      t7 && (t7.typeOver && (n10 = true), -1 == e10 ? { from: e10, to: i10 } = t7 : (e10 = Math.min(t7.from, e10), i10 = Math.max(t7.to, i10)));
    }
    return { from: e10, to: i10, typeOver: n10 };
  }
  readChange() {
    let { from: t6, to: e10, typeOver: i10 } = this.processRecords(), n10 = this.selectionChanged && eo(this.dom, this.selectionRange);
    if (t6 < 0 && !n10)
      return null;
    t6 > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let s10 = new n1(this.view, t6, e10, i10);
    return this.view.docView.domChanged = { newSel: s10.newSel ? s10.newSel.main : null }, s10;
  }
  flush() {
    let t6 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return false;
    t6 && this.readSelectionRange();
    let e10 = this.readChange();
    if (!e10)
      return this.view.requestMeasure(), false;
    let i10 = this.view.state, n10 = n2(this.view, e10);
    return this.view.state == i10 && this.view.update([]), n10;
  }
  readMutation(t6) {
    let e10 = this.view.docView.nearest(t6.target);
    if (!e10 || e10.ignoreMutation(t6))
      return null;
    if (e10.markDirty("attributes" == t6.type), "attributes" == t6.type && (e10.flags |= 4), "childList" == t6.type) {
      let i10 = n5(e10, t6.previousSibling || t6.target.previousSibling, -1), n10 = n5(e10, t6.nextSibling || t6.target.nextSibling, 1);
      return { from: i10 ? e10.posAfter(i10) : e10.posAtStart, to: n10 ? e10.posBefore(n10) : e10.posAtEnd, typeOver: false };
    }
    return "characterData" == t6.type ? { from: e10.posAtStart, to: e10.posAtEnd, typeOver: t6.target.nodeValue == t6.oldValue } : null;
  }
  setWindow(t6) {
    t6 != this.win && (this.removeWindowListeners(this.win), this.win = t6, this.addWindowListeners(this.win));
  }
  addWindowListeners(t6) {
    t6.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener("change", this.onPrint) : t6.addEventListener("beforeprint", this.onPrint), t6.addEventListener("scroll", this.onScroll), t6.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t6) {
    t6.removeEventListener("scroll", this.onScroll), t6.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener("change", this.onPrint) : t6.removeEventListener("beforeprint", this.onPrint), t6.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var t6, e10, i10;
    for (let n10 of (this.stop(), null === (t6 = this.intersection) || void 0 === t6 || t6.disconnect(), null === (e10 = this.gapIntersection) || void 0 === e10 || e10.disconnect(), null === (i10 = this.resizeScroll) || void 0 === i10 || i10.disconnect(), this.scrollTargets))
      n10.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function n5(t6, e10, i10) {
  for (; e10; ) {
    let n10 = eM.get(e10);
    if (n10 && n10.parent == t6)
      return n10;
    let s10 = e10.parentNode;
    e10 = s10 != t6.dom ? s10 : i10 > 0 ? e10.nextSibling : e10.previousSibling;
  }
  return null;
}
function n9(t6, e10) {
  let i10 = e10.startContainer, n10 = e10.startOffset, s10 = e10.endContainer, r10 = e10.endOffset, o10 = t6.docView.domAtPos(t6.state.selection.main.anchor);
  return eh(o10.node, o10.offset, s10, r10) && ([i10, n10, s10, r10] = [s10, r10, i10, n10]), { anchorNode: i10, anchorOffset: n10, focusNode: s10, focusOffset: r10 };
}
class n6 {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(t6 = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t6.parent && t6.parent.appendChild(this.dom);
    let { dispatch: e10 } = t6;
    for (let i10 of (this.dispatchTransactions = t6.dispatchTransactions || e10 && ((t7) => t7.forEach((t10) => e10(t10, this))) || ((t7) => this.update(t7)), this.dispatch = this.dispatch.bind(this), this._root = t6.root || function(t7) {
      for (; t7; ) {
        if (t7 && (9 == t7.nodeType || 11 == t7.nodeType && t7.host))
          return t7;
        t7 = t7.assignedSlot || t7.parentNode;
      }
      return null;
    }(t6.parent) || document, this.viewState = new nH(t6.state || tV.create(t6)), t6.scrollTo && t6.scrollTo.is(iT) && (this.viewState.scrollTarget = t6.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(iP).map((t7) => new iN(t7)), this.plugins))
      i10.update(this);
    this.observer = new n4(this), this.inputState = new i9(this), this.inputState.ensureHandlers(this.plugins), this.docView = new iG(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure();
  }
  dispatch() {
    for (var t6 = arguments.length, e10 = Array(t6), i10 = 0; i10 < t6; i10++)
      e10[i10] = arguments[i10];
    let n10 = 1 == e10.length && e10[0] instanceof tE ? e10 : 1 == e10.length && Array.isArray(e10[0]) ? e10[0] : [this.state.update(...e10)];
    this.dispatchTransactions(n10, this);
  }
  update(t6) {
    if (0 != this.updateState)
      throw Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e10 = false, i10 = false, n10, s10 = this.state;
    for (let e11 of t6) {
      if (e11.startState != s10)
        throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s10 = e11.state;
    }
    if (this.destroyed) {
      this.viewState.state = s10;
      return;
    }
    let r10 = this.hasFocus, o10 = 0, l10 = null;
    t6.some((t7) => t7.annotation(ny)) ? (this.inputState.notifiedFocused = r10, o10 = 1) : r10 == this.inputState.notifiedFocused || (this.inputState.notifiedFocused = r10, (l10 = nb(s10, r10)) || (o10 = 1));
    let h10 = this.observer.delayedAndroidKey, a5 = null;
    if (h10 ? (this.observer.clearDelayedAndroidKey(), ((a5 = this.observer.readChange()) && !this.state.doc.eq(s10.doc) || !this.state.selection.eq(s10.selection)) && (a5 = null)) : this.observer.clear(), s10.facet(tV.phrases) != this.state.facet(tV.phrases))
      return this.setState(s10);
    n10 = iU.create(this, s10, t6), n10.flags |= o10;
    let c2 = this.viewState.scrollTarget;
    try {
      for (let e11 of (this.updateState = 2, t6)) {
        if (c2 && (c2 = c2.map(e11.changes)), e11.scrollIntoView) {
          let { main: t7 } = e11.state.selection;
          c2 = new iD(t7.empty ? t7 : tt.cursor(t7.head, t7.head > t7.anchor ? -1 : 1));
        }
        for (let t7 of e11.effects)
          t7.is(iT) && (c2 = t7.value.clip(this.state));
      }
      this.viewState.update(n10, c2), this.bidiCache = se.update(this.bidiCache, n10.changes), n10.empty || (this.updatePlugins(n10), this.inputState.update(n10)), e10 = this.docView.update(n10), this.state.facet(iK) != this.styleModules && this.mountStyles(), i10 = this.updateAttrs(), this.showAnnouncements(t6), this.docView.updateSelection(e10, t6.some((t7) => t7.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n10.startState.facet(nK) != n10.state.facet(nK) && (this.viewState.mustMeasureContent = true), (e10 || i10 || c2 || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e10 && this.docViewUpdate(), !n10.empty)
      for (let t7 of this.state.facet(ik))
        try {
          t7(n10);
        } catch (t10) {
          iE(this.state, t10, "update listener");
        }
    (l10 || a5) && Promise.resolve().then(() => {
      l10 && this.state == l10.startState && this.dispatch(l10), a5 && !n2(this, a5) && h10.force && ey(this.contentDOM, h10.key, h10.keyCode);
    });
  }
  setState(t6) {
    if (0 != this.updateState)
      throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t6;
      return;
    }
    this.updateState = 2;
    let e10 = this.hasFocus;
    try {
      for (let t7 of this.plugins)
        t7.destroy(this);
      for (let e11 of (this.viewState = new nH(t6), this.plugins = t6.facet(iP).map((t7) => new iN(t7)), this.pluginMap.clear(), this.plugins))
        e11.update(this);
      this.docView.destroy(), this.docView = new iG(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e10 && this.focus(), this.requestMeasure();
  }
  updatePlugins(t6) {
    let e10 = t6.startState.facet(iP), i10 = t6.state.facet(iP);
    if (e10 != i10) {
      let n10 = [];
      for (let s10 of i10) {
        let i11 = e10.indexOf(s10);
        if (i11 < 0)
          n10.push(new iN(s10));
        else {
          let e11 = this.plugins[i11];
          e11.mustUpdate = t6, n10.push(e11);
        }
      }
      for (let e11 of this.plugins)
        e11.mustUpdate != t6 && e11.destroy(this);
      this.plugins = n10, this.pluginMap.clear();
    } else
      for (let e11 of this.plugins)
        e11.mustUpdate = t6;
    for (let t7 = 0; t7 < this.plugins.length; t7++)
      this.plugins[t7].update(this);
    e10 != i10 && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t6 of this.plugins) {
      let e10 = t6.value;
      if (e10 && e10.docViewUpdate)
        try {
          e10.docViewUpdate(this);
        } catch (t7) {
          iE(this.state, t7, "doc view update listener");
        }
    }
  }
  measure() {
    let t6 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t6 && this.observer.forceFlush();
    let e10 = null, i10 = this.scrollDOM, n10 = i10.scrollTop * this.scaleY, { scrollAnchorPos: s10, scrollAnchorHeight: r10 } = this.viewState;
    Math.abs(n10 - this.viewState.scrollTop) > 1 && (r10 = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let t7 = 0; ; t7++) {
        if (r10 < 0) {
          if (ex(i10))
            s10 = -1, r10 = this.viewState.heightMap.height;
          else {
            let t10 = this.viewState.scrollAnchorAt(n10);
            s10 = t10.from, r10 = t10.top;
          }
        }
        this.updateState = 1;
        let o10 = this.viewState.measure(this);
        if (!o10 && !this.measureRequests.length && null == this.viewState.scrollTarget)
          break;
        if (t7 > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let l10 = [];
        4 & o10 || ([this.measureRequests, l10] = [l10, this.measureRequests]);
        let h10 = l10.map((t10) => {
          try {
            return t10.read(this);
          } catch (t11) {
            return iE(this.state, t11), st;
          }
        }), a5 = iU.create(this, this.state, []), c2 = false;
        a5.flags |= o10, e10 ? e10.flags |= o10 : e10 = a5, this.updateState = 2, !a5.empty && (this.updatePlugins(a5), this.inputState.update(a5), this.updateAttrs(), (c2 = this.docView.update(a5)) && this.docViewUpdate());
        for (let t10 = 0; t10 < l10.length; t10++)
          if (h10[t10] != st)
            try {
              let e11 = l10[t10];
              e11.write && e11.write(h10[t10], this);
            } catch (t11) {
              iE(this.state, t11);
            }
        if (c2 && this.docView.updateSelection(true), !a5.viewportChanged && 0 == this.measureRequests.length) {
          if (this.viewState.editorHeight) {
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, r10 = -1;
              continue;
            }
            {
              let t10 = (s10 < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s10).top) - r10;
              if (t10 > 1 || t10 < -1) {
                n10 += t10, i10.scrollTop = n10 / this.scaleY, r10 = -1;
                continue;
              }
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e10 && !e10.empty)
      for (let t7 of this.state.facet(ik))
        t7(e10);
  }
  get themeClasses() {
    return nU + " " + (this.state.facet(n$) ? nJ : nG) + " " + this.state.facet(nK);
  }
  updateAttrs() {
    let t6 = si(this, iI, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), e10 = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", translate: "no", contenteditable: this.state.facet(iR) ? "true" : "false", class: "cm-content", style: `${e_.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (e10["aria-readonly"] = "true"), si(this, iV, e10);
    let i10 = this.observer.ignore(() => {
      let i11 = eQ(this.contentDOM, this.contentAttrs, e10), n10 = eQ(this.dom, this.editorAttrs, t6);
      return i11 || n10;
    });
    return this.editorAttrs = t6, this.contentAttrs = e10, i10;
  }
  showAnnouncements(t6) {
    let e10 = true;
    for (let i10 of t6)
      for (let t7 of i10.effects)
        t7.is(n6.announce) && (e10 && (this.announceDOM.textContent = ""), e10 = false, this.announceDOM.appendChild(document.createElement("div")).textContent = t7.value);
  }
  mountStyles() {
    this.styleModules = this.state.facet(iK);
    let t6 = this.state.facet(n6.cspNonce);
    t4.mount(this.root, this.styleModules.concat(nQ).reverse(), t6 ? { nonce: t6 } : void 0);
  }
  readMeasured() {
    if (2 == this.updateState)
      throw Error("Reading the editor layout isn't allowed during an update");
    0 == this.updateState && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(t6) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t6 && !(this.measureRequests.indexOf(t6) > -1)) {
      if (null != t6.key) {
        for (let e10 = 0; e10 < this.measureRequests.length; e10++)
          if (this.measureRequests[e10].key === t6.key) {
            this.measureRequests[e10] = t6;
            return;
          }
      }
      this.measureRequests.push(t6);
    }
  }
  plugin(t6) {
    let e10 = this.pluginMap.get(t6);
    return (void 0 === e10 || e10 && e10.spec != t6) && this.pluginMap.set(t6, e10 = this.plugins.find((e11) => e11.spec == t6) || null), e10 && e10.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(t6) {
    return this.readMeasured(), this.viewState.elementAtHeight(t6);
  }
  lineBlockAtHeight(t6) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t6);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t6) {
    return this.viewState.lineBlockAt(t6);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t6, e10, i10) {
    return i5(this, t6, i8(this, t6, e10, i10));
  }
  moveByGroup(t6, e10) {
    return i5(this, t6, i8(this, t6, e10, (e11) => {
      var i10;
      let n10, s10;
      return i10 = t6.head, s10 = (n10 = this.state.charCategorizer(i10))(e11), (t7) => {
        let e12 = n10(t7);
        return s10 == tN.Space && (s10 = e12), s10 == e12;
      };
    }));
  }
  visualLineSide(t6, e10) {
    let i10 = this.bidiSpans(t6), n10 = this.textDirectionAt(t6.from), s10 = i10[e10 ? i10.length - 1 : 0];
    return tt.cursor(s10.side(e10, n10) + t6.from, s10.forward(!e10, n10) ? 1 : -1);
  }
  moveToLineBoundary(t6, e10) {
    let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return function(t7, e11, i11, n10) {
      let s10 = function(t10, e12) {
        let i12 = t10.lineBlockAt(e12);
        if (Array.isArray(i12.type)) {
          for (let t11 of i12.type)
            if (t11.to > e12 || t11.to == e12 && (t11.to == i12.to || t11.type == e2.Text))
              return t11;
        }
        return i12;
      }(t7, e11.head), r10 = n10 && s10.type == e2.Text && (t7.lineWrapping || s10.widgetLineBreaks) ? t7.coordsAtPos(e11.assoc < 0 && e11.head > s10.from ? e11.head - 1 : e11.head) : null;
      if (r10) {
        let e12 = t7.dom.getBoundingClientRect(), n11 = t7.textDirectionAt(s10.from), o10 = t7.posAtCoords({ x: i11 == (n11 == ii.LTR) ? e12.right - 1 : e12.left + 1, y: (r10.top + r10.bottom) / 2 });
        if (null != o10)
          return tt.cursor(o10, i11 ? -1 : 1);
      }
      return tt.cursor(i11 ? s10.to : s10.from, i11 ? -1 : 1);
    }(this, t6, e10, i10);
  }
  moveVertically(t6, e10, i10) {
    return i5(this, t6, function(t7, e11, i11, n10) {
      let s10 = e11.head, r10 = i11 ? 1 : -1;
      if (s10 == (i11 ? t7.state.doc.length : 0))
        return tt.cursor(s10, e11.assoc);
      let o10 = e11.goalColumn, l10, h10 = t7.contentDOM.getBoundingClientRect(), a5 = t7.coordsAtPos(s10, e11.assoc || -1), c2 = t7.documentTop;
      if (a5)
        null == o10 && (o10 = a5.left - h10.left), l10 = r10 < 0 ? a5.top : a5.bottom;
      else {
        let e12 = t7.viewState.lineBlockAt(s10);
        null == o10 && (o10 = Math.min(h10.right - h10.left, t7.defaultCharacterWidth * (s10 - e12.from))), l10 = (r10 < 0 ? e12.top : e12.bottom) + c2;
      }
      let d2 = h10.left + o10, u2 = null != n10 ? n10 : t7.viewState.heightOracle.textHeight >> 1;
      for (let e12 = 0; ; e12 += 10) {
        let i12 = l10 + (u2 + e12) * r10, n11 = i2(t7, { x: d2, y: i12 }, false, r10);
        if (i12 < h10.top || i12 > h10.bottom || (r10 < 0 ? n11 < s10 : n11 > s10)) {
          let e13 = t7.docView.coordsForChar(n11), s11 = !e13 || i12 < e13.top ? -1 : 1;
          return tt.cursor(n11, s11, void 0, o10);
        }
      }
    }(this, t6, e10, i10));
  }
  domAtPos(t6) {
    return this.docView.domAtPos(t6);
  }
  posAtDOM(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this.docView.posFromDOM(t6, e10);
  }
  posAtCoords(t6) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.readMeasured(), i2(this, t6, e10);
  }
  coordsAtPos(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    this.readMeasured();
    let i10 = this.docView.coordsAt(t6, e10);
    if (!i10 || i10.left == i10.right)
      return i10;
    let n10 = this.state.doc.lineAt(t6), s10 = this.bidiSpans(n10);
    return ef(i10, s10[ip.find(s10, t6 - n10.from, -1, e10)].dir == ii.LTR == e10 > 0);
  }
  coordsForChar(t6) {
    return this.readMeasured(), this.docView.coordsForChar(t6);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(t6) {
    return !this.state.facet(iA) || t6 < this.viewport.from || t6 > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t6));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t6) {
    if (t6.length > n7)
      return im(t6.length);
    let e10 = this.textDirectionAt(t6.from), i10;
    for (let n11 of this.bidiCache)
      if (n11.from == t6.from && n11.dir == e10 && (n11.fresh || function t7(e11, i11) {
        if (e11.length != i11.length)
          return false;
        for (let n12 = 0; n12 < e11.length; n12++) {
          let s10 = e11[n12], r10 = i11[n12];
          if (s10.from != r10.from || s10.to != r10.to || s10.direction != r10.direction || !t7(s10.inner, r10.inner))
            return false;
        }
        return true;
      }(n11.isolates, i10 = i_(this, t6))))
        return n11.order;
    i10 || (i10 = i_(this, t6));
    let n10 = function(t7, e11, i11) {
      if (!t7)
        return [new ip(0, 0, e11 == ir ? 1 : 0)];
      if (e11 == is && !i11.length && !iu.test(t7))
        return im(t7.length);
      if (i11.length)
        for (; t7.length > ig.length; )
          ig[ig.length] = 256;
      let n11 = [], s10 = e11 == is ? 0 : 1;
      return function t10(e12, i12, n12, s11, r10, o10, l10) {
        let h10 = i12 % 2 ? 2 : 1;
        (function(t11, e13, i13, n13, s12) {
          for (let r11 = 0; r11 <= n13.length; r11++) {
            let o11 = r11 ? n13[r11 - 1].to : e13, l11 = r11 < n13.length ? n13[r11].from : i13, h11 = r11 ? 256 : s12;
            for (let e14 = o11, i14 = h11, n14 = h11; e14 < l11; e14++) {
              let s13 = id(t11.charCodeAt(e14));
              512 == s13 ? s13 = i14 : 8 == s13 && 4 == n14 && (s13 = 16), ig[e14] = 4 == s13 ? 2 : s13, 7 & s13 && (n14 = s13), i14 = s13;
            }
            for (let t12 = o11, e14 = h11, n14 = h11; t12 < l11; t12++) {
              let s13 = ig[t12];
              if (128 == s13)
                t12 < l11 - 1 && e14 == ig[t12 + 1] && 24 & e14 ? s13 = ig[t12] = e14 : ig[t12] = 256;
              else if (64 == s13) {
                let s14 = t12 + 1;
                for (; s14 < l11 && 64 == ig[s14]; )
                  s14++;
                let r12 = t12 && 8 == e14 || s14 < i13 && 8 == ig[s14] ? 1 == n14 ? 1 : 8 : 256;
                for (let e15 = t12; e15 < s14; e15++)
                  ig[e15] = r12;
                t12 = s14 - 1;
              } else
                8 == s13 && 1 == n14 && (ig[t12] = 1);
              e14 = s13, 7 & s13 && (n14 = s13);
            }
          }
        })(e12, r10, o10, s11, h10), function(t11, e13, i13, n13, s12) {
          let r11 = 1 == s12 ? 2 : 1;
          for (let o11 = 0, l11 = 0, h11 = 0; o11 <= n13.length; o11++) {
            let a5 = o11 ? n13[o11 - 1].to : e13, c2 = o11 < n13.length ? n13[o11].from : i13;
            for (let e14 = a5, i14, n14, o12; e14 < c2; e14++)
              if (n14 = ia[i14 = t11.charCodeAt(e14)]) {
                if (n14 < 0) {
                  for (let t12 = l11 - 3; t12 >= 0; t12 -= 3)
                    if (ic[t12 + 1] == -n14) {
                      let i15 = ic[t12 + 2], n15 = 2 & i15 ? s12 : 4 & i15 ? 1 & i15 ? r11 : s12 : 0;
                      n15 && (ig[e14] = ig[ic[t12]] = n15), l11 = t12;
                      break;
                    }
                } else if (189 == ic.length)
                  break;
                else
                  ic[l11++] = e14, ic[l11++] = i14, ic[l11++] = h11;
              } else if (2 == (o12 = ig[e14]) || 1 == o12) {
                let t12 = o12 == s12;
                h11 = t12 ? 0 : 1;
                for (let e15 = l11 - 3; e15 >= 0; e15 -= 3) {
                  let i15 = ic[e15 + 2];
                  if (2 & i15)
                    break;
                  if (t12)
                    ic[e15 + 2] |= 2;
                  else {
                    if (4 & i15)
                      break;
                    ic[e15 + 2] |= 4;
                  }
                }
              }
          }
        }(e12, r10, o10, s11, h10), function(t11, e13, i13, n13) {
          for (let s12 = 0, r11 = n13; s12 <= i13.length; s12++) {
            let o11 = s12 ? i13[s12 - 1].to : t11, l11 = s12 < i13.length ? i13[s12].from : e13;
            for (let h11 = o11; h11 < l11; ) {
              let o12 = ig[h11];
              if (256 == o12) {
                let o13 = h11 + 1;
                for (; ; )
                  if (o13 == l11) {
                    if (s12 == i13.length)
                      break;
                    o13 = i13[s12++].to, l11 = s12 < i13.length ? i13[s12].from : e13;
                  } else if (256 == ig[o13])
                    o13++;
                  else
                    break;
                let a5 = 1 == r11, c2 = a5 == ((o13 < e13 ? ig[o13] : n13) == 1) ? a5 ? 1 : 2 : n13;
                for (let e14 = o13, n14 = s12, r12 = n14 ? i13[n14 - 1].to : t11; e14 > h11; )
                  e14 == r12 && (e14 = i13[--n14].from, r12 = n14 ? i13[n14 - 1].to : t11), ig[--e14] = c2;
                h11 = o13;
              } else
                r11 = o12, h11++;
            }
          }
        }(r10, o10, s11, h10), function e13(i13, n13, s12, r11, o11, l11, h11) {
          let a5 = r11 % 2 ? 2 : 1;
          if (r11 % 2 == o11 % 2)
            for (let c2 = n13, d2 = 0; c2 < s12; ) {
              let n14 = true, u2 = false;
              if (d2 == l11.length || c2 < l11[d2].from) {
                let t11 = ig[c2];
                t11 != a5 && (n14 = false, u2 = 16 == t11);
              }
              let f2 = n14 || 1 != a5 ? null : [], p2 = n14 ? r11 : r11 + 1, g2 = c2;
              e:
                for (; ; )
                  if (d2 < l11.length && g2 == l11[d2].from) {
                    if (u2)
                      break;
                    let e14 = l11[d2];
                    if (!n14)
                      for (let t11 = e14.to, i14 = d2 + 1; ; ) {
                        if (t11 == s12)
                          break e;
                        if (i14 < l11.length && l11[i14].from == t11)
                          t11 = l11[i14++].to;
                        else if (ig[t11] == a5)
                          break e;
                        else
                          break;
                      }
                    d2++, f2 ? f2.push(e14) : (e14.from > c2 && h11.push(new ip(c2, e14.from, p2)), t10(i13, e14.direction == is != !(p2 % 2) ? r11 + 1 : r11, o11, e14.inner, e14.from, e14.to, h11), c2 = e14.to), g2 = e14.to;
                  } else if (g2 == s12 || (n14 ? ig[g2] != a5 : ig[g2] == a5))
                    break;
                  else
                    g2++;
              f2 ? e13(i13, c2, g2, r11 + 1, o11, f2, h11) : c2 < g2 && h11.push(new ip(c2, g2, p2)), c2 = g2;
            }
          else
            for (let c2 = s12, d2 = l11.length; c2 > n13; ) {
              let s13 = true, u2 = false;
              if (!d2 || c2 > l11[d2 - 1].to) {
                let t11 = ig[c2 - 1];
                t11 != a5 && (s13 = false, u2 = 16 == t11);
              }
              let f2 = s13 || 1 != a5 ? null : [], p2 = s13 ? r11 : r11 + 1, g2 = c2;
              e:
                for (; ; )
                  if (d2 && g2 == l11[d2 - 1].to) {
                    if (u2)
                      break;
                    let e14 = l11[--d2];
                    if (!s13)
                      for (let t11 = e14.from, i14 = d2; ; ) {
                        if (t11 == n13)
                          break e;
                        if (i14 && l11[i14 - 1].to == t11)
                          t11 = l11[--i14].from;
                        else if (ig[t11 - 1] == a5)
                          break e;
                        else
                          break;
                      }
                    f2 ? f2.push(e14) : (e14.to < c2 && h11.push(new ip(e14.to, c2, p2)), t10(i13, e14.direction == is != !(p2 % 2) ? r11 + 1 : r11, o11, e14.inner, e14.from, e14.to, h11), c2 = e14.from), g2 = e14.from;
                  } else if (g2 == n13 || (s13 ? ig[g2 - 1] != a5 : ig[g2 - 1] == a5))
                    break;
                  else
                    g2--;
              f2 ? e13(i13, g2, c2, r11 + 1, o11, f2, h11) : g2 < c2 && h11.push(new ip(g2, c2, p2)), c2 = g2;
            }
        }(e12, r10, o10, i12, n12, s11, l10);
      }(t7, s10, s10, i11, 0, t7.length, n11), n11;
    }(t6.text, e10, i10);
    return this.bidiCache.push(new se(t6.from, t6.to, e10, i10, true, n10)), n10;
  }
  get hasFocus() {
    var t6;
    return (this.dom.ownerDocument.hasFocus() || e_.safari && (null === (t6 = this.inputState) || void 0 === t6 ? void 0 : t6.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      ev(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t6) {
    this._root != t6 && (this._root = t6, this.observer.setWindow((9 == t6.nodeType ? t6 : t6.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    for (let t6 of this.plugins)
      t6.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return iT.of(new iD("number" == typeof t6 ? tt.cursor(t6) : t6, e10.y, e10.x, e10.yMargin, e10.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t6, scrollLeft: e10 } = this.scrollDOM, i10 = this.viewState.scrollAnchorAt(t6);
    return iT.of(new iD(tt.cursor(i10.from), "start", "start", i10.top - t6, e10, true));
  }
  static domEventHandlers(t6) {
    return iL.define(() => ({}), { eventHandlers: t6 });
  }
  static domEventObservers(t6) {
    return iL.define(() => ({}), { eventObservers: t6 });
  }
  static theme(t6, e10) {
    let i10 = t4.newName(), n10 = [nK.of(i10), iK.of(nX(`.${i10}`, t6))];
    return e10 && e10.dark && n10.push(n$.of(true)), n10;
  }
  static baseTheme(t6) {
    return tu.lowest(iK.of(nX("." + nU, t6, nY)));
  }
  static findFromDOM(t6) {
    var e10;
    let i10 = t6.querySelector(".cm-content"), n10 = i10 && eM.get(i10) || eM.get(t6);
    return (null === (e10 = null == n10 ? void 0 : n10.rootView) || void 0 === e10 ? void 0 : e10.view) || null;
  }
}
n6.styleModule = iK, n6.inputHandler = iS, n6.scrollHandler = iO, n6.focusChangeEffect = iC, n6.perLineTextDirection = iA, n6.exceptionSink = ix, n6.updateListener = ik, n6.editable = iR, n6.mouseSelectionStyle = ib, n6.dragMovesSelection = iy, n6.clickAddsSelectionRange = iw, n6.decorations = iH, n6.outerDecorations = iW, n6.atomicRanges = iF, n6.bidiIsolatedRanges = iz, n6.scrollMargins = ij, n6.darkTheme = n$, n6.cspNonce = tn.define({ combine: (t6) => t6.length ? t6[0] : "" }), n6.contentAttributes = iV, n6.editorAttributes = iI, n6.lineWrapping = n6.contentAttributes.of({ class: "cm-lineWrapping" }), n6.announce = tT.define();
let n7 = 4096, st = {};
class se {
  constructor(t6, e10, i10, n10, s10, r10) {
    this.from = t6, this.to = e10, this.dir = i10, this.isolates = n10, this.fresh = s10, this.order = r10;
  }
  static update(t6, e10) {
    if (e10.empty && !t6.some((t7) => t7.fresh))
      return t6;
    let i10 = [], n10 = t6.length ? t6[t6.length - 1].dir : ii.LTR;
    for (let s10 = Math.max(0, t6.length - 10); s10 < t6.length; s10++) {
      let r10 = t6[s10];
      r10.dir != n10 || e10.touchesRange(r10.from, r10.to) || i10.push(new se(e10.mapPos(r10.from, 1), e10.mapPos(r10.to, -1), r10.dir, r10.isolates, false, r10.order));
    }
    return i10;
  }
}
function si(t6, e10, i10) {
  for (let n10 = t6.state.facet(e10), s10 = n10.length - 1; s10 >= 0; s10--) {
    let e11 = n10[s10], r10 = "function" == typeof e11 ? e11(t6) : e11;
    r10 && eJ(r10, i10);
  }
  return i10;
}
let sn = e_.mac ? "mac" : e_.windows ? "win" : e_.linux ? "linux" : "key";
function ss(t6, e10, i10) {
  return e10.altKey && (t6 = "Alt-" + t6), e10.ctrlKey && (t6 = "Ctrl-" + t6), e10.metaKey && (t6 = "Meta-" + t6), false !== i10 && e10.shiftKey && (t6 = "Shift-" + t6), t6;
}
let sr = tu.default(n6.domEventHandlers({ keydown: (t6, e10) => {
  var i10, n10, s10, r10, o10;
  let l10, h10, a5, c2, d2, u2, f2, p2, g2, m2, v2, w2, y2;
  return i10 = (l10 = e10.state.facet(so), (h10 = sl.get(l10)) || sl.set(l10, h10 = function(t7) {
    let e11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sn, i11 = /* @__PURE__ */ Object.create(null), n11 = /* @__PURE__ */ Object.create(null), s11 = (t10, e12) => {
      let i12 = n11[t10];
      if (null == i12)
        n11[t10] = e12;
      else if (i12 != e12)
        throw Error("Key binding " + t10 + " is used both as a regular binding and as a multi-stroke prefix");
    }, r11 = (t10, n12, r12, o11, l11) => {
      var h11, a6;
      let c3 = i11[t10] || (i11[t10] = /* @__PURE__ */ Object.create(null)), d3 = n12.split(/ (?!$)/).map((t11) => function(t12, e12) {
        let i12, n13, s12, r13;
        let o12 = t12.split(/-(?!$)/), l12 = o12[o12.length - 1];
        "Space" == l12 && (l12 = " ");
        for (let t13 = 0; t13 < o12.length - 1; ++t13) {
          let l13 = o12[t13];
          if (/^(cmd|meta|m)$/i.test(l13))
            r13 = true;
          else if (/^a(lt)?$/i.test(l13))
            i12 = true;
          else if (/^(c|ctrl|control)$/i.test(l13))
            n13 = true;
          else if (/^s(hift)?$/i.test(l13))
            s12 = true;
          else if (/^mod$/i.test(l13))
            "mac" == e12 ? r13 = true : n13 = true;
          else
            throw Error("Unrecognized modifier name: " + l13);
        }
        return i12 && (l12 = "Alt-" + l12), n13 && (l12 = "Ctrl-" + l12), r13 && (l12 = "Meta-" + l12), s12 && (l12 = "Shift-" + l12), l12;
      }(t11, e11));
      for (let e12 = 1; e12 < d3.length; e12++) {
        let i12 = d3.slice(0, e12).join(" ");
        s11(i12, true), c3[i12] || (c3[i12] = { preventDefault: true, stopPropagation: false, run: [(e13) => {
          let n13 = sh = { view: e13, prefix: i12, scope: t10 };
          return setTimeout(() => {
            sh == n13 && (sh = null);
          }, 4e3), true;
        }] });
      }
      let u3 = d3.join(" ");
      s11(u3, false);
      let f3 = c3[u3] || (c3[u3] = { preventDefault: false, stopPropagation: false, run: (null === (a6 = null === (h11 = c3._any) || void 0 === h11 ? void 0 : h11.run) || void 0 === a6 ? void 0 : a6.slice()) || [] });
      r12 && f3.run.push(r12), o11 && (f3.preventDefault = true), l11 && (f3.stopPropagation = true);
    };
    for (let n12 of t7) {
      let t10 = n12.scope ? n12.scope.split(" ") : ["editor"];
      if (n12.any)
        for (let e12 of t10) {
          let t11 = i11[e12] || (i11[e12] = /* @__PURE__ */ Object.create(null));
          for (let e13 in t11._any || (t11._any = { preventDefault: false, stopPropagation: false, run: [] }), t11)
            t11[e13].run.push(n12.any);
        }
      let s12 = n12[e11] || n12.key;
      if (s12)
        for (let e12 of t10)
          r11(e12, s12, n12.run, n12.preventDefault, n12.stopPropagation), n12.shift && r11(e12, "Shift-" + s12, n12.shift, n12.preventDefault, n12.stopPropagation);
    }
    return i11;
  }(l10.reduce((t7, e11) => t7.concat(e11), []))), h10), n10 = t6, s10 = e10, r10 = "editor", c2 = L(B(a5 = ("Esc" == (o10 = !(et && n10.metaKey && n10.shiftKey && !n10.ctrlKey && !n10.altKey || ee && n10.shiftKey && n10.key && 1 == n10.key.length || "Unidentified" == n10.key) && n10.key || (n10.shiftKey ? t7 : t6)[n10.keyCode] || n10.key || "Unidentified") && (o10 = "Escape"), "Del" == o10 && (o10 = "Delete"), "Left" == o10 && (o10 = "ArrowLeft"), "Up" == o10 && (o10 = "ArrowUp"), "Right" == o10 && (o10 = "ArrowRight"), "Down" == o10 && (o10 = "ArrowDown"), o10), 0)) == a5.length && " " != a5, d2 = "", u2 = false, f2 = false, p2 = false, sh && sh.view == s10 && sh.scope == r10 && (d2 = sh.prefix + " ", 0 > ne.indexOf(n10.keyCode) && (f2 = true, sh = null)), g2 = /* @__PURE__ */ new Set(), m2 = (t7) => {
    if (t7) {
      for (let e11 of t7.run)
        if (!g2.has(e11) && (g2.add(e11), e11(s10, n10)))
          return t7.stopPropagation && (p2 = true), true;
      t7.preventDefault && (t7.stopPropagation && (p2 = true), f2 = true);
    }
    return false;
  }, (v2 = i10[r10]) && (m2(v2[d2 + ss(a5, n10, !c2)]) ? u2 = true : c2 && (n10.altKey || n10.metaKey || n10.ctrlKey) && !(e_.windows && n10.ctrlKey && n10.altKey) && (w2 = t6[n10.keyCode]) && w2 != a5 ? m2(v2[d2 + ss(w2, n10, true)]) ? u2 = true : n10.shiftKey && (y2 = t7[n10.keyCode]) != a5 && y2 != w2 && m2(v2[d2 + ss(y2, n10, false)]) && (u2 = true) : c2 && n10.shiftKey && m2(v2[d2 + ss(a5, n10, true)]) && (u2 = true), !u2 && m2(v2._any) && (u2 = true)), f2 && (u2 = true), u2 && p2 && n10.stopPropagation(), u2;
} })), so = tn.define({ enables: sr }), sl = /* @__PURE__ */ new WeakMap(), sh = null, sa = !e_.ios, sc = { ".cm-line": { "& ::selection": { backgroundColor: "transparent !important" }, "&::selection": { backgroundColor: "transparent !important" } } };
function sd(t6, e10, i10, n10, s10) {
  e10.lastIndex = 0;
  for (let r10 = t6.iterRange(i10, n10), o10 = i10, l10; !r10.next().done; o10 += r10.value.length)
    if (!r10.lineBreak)
      for (; l10 = e10.exec(r10.value); )
        s10(o10 + l10.index, l10);
}
sa && (sc[".cm-line"].caretColor = "transparent !important", sc[".cm-content"] = { caretColor: "transparent !important" });
class su {
  constructor(t6) {
    let { regexp: e10, decoration: i10, decorate: n10, boundary: s10, maxLength: r10 = 1e3 } = t6;
    if (!e10.global)
      throw RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e10, n10)
      this.addMatch = (t7, e11, i11, s11) => n10(s11, i11, i11 + t7[0].length, t7, e11);
    else if ("function" == typeof i10)
      this.addMatch = (t7, e11, n11, s11) => {
        let r11 = i10(t7, e11, n11);
        r11 && s11(n11, n11 + t7[0].length, r11);
      };
    else if (i10)
      this.addMatch = (t7, e11, n11, s11) => s11(n11, n11 + t7[0].length, i10);
    else
      throw RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s10, this.maxLength = r10;
  }
  createDeco(t6) {
    let e10 = new tq(), i10 = e10.add.bind(e10);
    for (let { from: e11, to: n10 } of function(t7, e12) {
      let i11 = t7.visibleRanges;
      if (1 == i11.length && i11[0].from == t7.viewport.from && i11[0].to == t7.viewport.to)
        return i11;
      let n11 = [];
      for (let { from: s10, to: r10 } of i11)
        s10 = Math.max(t7.state.doc.lineAt(s10).from, s10 - e12), r10 = Math.min(t7.state.doc.lineAt(r10).to, r10 + e12), n11.length && n11[n11.length - 1].to >= s10 ? n11[n11.length - 1].to = r10 : n11.push({ from: s10, to: r10 });
      return n11;
    }(t6, this.maxLength))
      sd(t6.state.doc, this.regexp, e11, n10, (e12, n11) => this.addMatch(n11, t6, e12, i10));
    return e10.finish();
  }
  updateDeco(t6, e10) {
    let i10 = 1e9, n10 = -1;
    return (t6.docChanged && t6.changes.iterChanges((e11, s10, r10, o10) => {
      o10 > t6.view.viewport.from && r10 < t6.view.viewport.to && (i10 = Math.min(r10, i10), n10 = Math.max(o10, n10));
    }), t6.viewportChanged || n10 - i10 > 1e3) ? this.createDeco(t6.view) : n10 > -1 ? this.updateRange(t6.view, e10.map(t6.changes), i10, n10) : e10;
  }
  updateRange(t6, e10, i10, n10) {
    for (let s10 of t6.visibleRanges) {
      let r10 = Math.max(s10.from, i10), o10 = Math.min(s10.to, n10);
      if (o10 > r10) {
        let i11 = t6.state.doc.lineAt(r10), n11 = i11.to < o10 ? t6.state.doc.lineAt(o10) : i11, l10 = Math.max(s10.from, i11.from), h10 = Math.min(s10.to, n11.to);
        if (this.boundary) {
          for (; r10 > i11.from; r10--)
            if (this.boundary.test(i11.text[r10 - 1 - i11.from])) {
              l10 = r10;
              break;
            }
          for (; o10 < n11.to; o10++)
            if (this.boundary.test(n11.text[o10 - n11.from])) {
              h10 = o10;
              break;
            }
        }
        let a5 = [], c2, d2 = (t7, e11, i12) => a5.push(i12.range(t7, e11));
        if (i11 == n11)
          for (this.regexp.lastIndex = l10 - i11.from; (c2 = this.regexp.exec(i11.text)) && c2.index < h10 - i11.from; )
            this.addMatch(c2, t6, c2.index + i11.from, d2);
        else
          sd(t6.state.doc, this.regexp, l10, h10, (e11, i12) => this.addMatch(i12, t6, e11, d2));
        e10 = e10.update({ filterFrom: l10, filterTo: h10, filter: (t7, e11) => t7 < l10 || e11 > h10, add: a5 });
      }
    }
    return e10;
  }
}
let sf = null != /x/.unicode ? "gu" : "g", sp = RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]", sf), sg = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" }, sm = null, sv = tn.define({ combine(t6) {
  let e10 = tH(t6, { render: null, specialChars: sp, addSpecialChars: null });
  return (e10.replaceTabs = !function() {
    var t7;
    if (null == sm && "undefined" != typeof document && document.body) {
      let e11 = document.body.style;
      sm = (null !== (t7 = e11.tabSize) && void 0 !== t7 ? t7 : e11.MozTabSize) != null;
    }
    return sm || false;
  }()) && (e10.specialChars = RegExp("	|" + e10.specialChars.source, sf)), e10.addSpecialChars && (e10.specialChars = RegExp(e10.specialChars.source + "|" + e10.addSpecialChars.source, sf)), e10;
} }), sw = null;
class sy extends e1 {
  constructor(t6, e10) {
    super(), this.options = t6, this.code = e10;
  }
  eq(t6) {
    return t6.code == this.code;
  }
  toDOM(t6) {
    var e10;
    let i10 = (e10 = this.code) >= 32 ? "•" : 10 == e10 ? "␤" : String.fromCharCode(9216 + e10), n10 = t6.state.phrase("Control character") + " " + (sg[this.code] || "0x" + this.code.toString(16)), s10 = this.options.render && this.options.render(this.code, n10, i10);
    if (s10)
      return s10;
    let r10 = document.createElement("span");
    return r10.textContent = i10, r10.title = n10, r10.setAttribute("aria-label", n10), r10.className = "cm-specialChar", r10;
  }
  ignoreEvent() {
    return false;
  }
}
class sb extends e1 {
  constructor(t6) {
    super(), this.width = t6;
  }
  eq(t6) {
    return t6.width == this.width;
  }
  toDOM() {
    let t6 = document.createElement("span");
    return t6.textContent = "	", t6.className = "cm-tab", t6.style.width = this.width + "px", t6;
  }
  ignoreEvent() {
    return false;
  }
}
let sx = e3.line({ class: "cm-activeLine" }), sk = iL.fromClass(class {
  constructor(t6) {
    this.decorations = this.getDeco(t6);
  }
  update(t6) {
    (t6.docChanged || t6.selectionSet) && (this.decorations = this.getDeco(t6.view));
  }
  getDeco(t6) {
    let e10 = -1, i10 = [];
    for (let n10 of t6.state.selection.ranges) {
      let s10 = t6.lineBlockAt(n10.head);
      s10.from > e10 && (i10.push(sx.range(s10.from)), e10 = s10.from);
    }
    return e3.set(i10);
  }
}, { decorations: (t6) => t6.decorations }), sS = "-10000px";
class sC {
  constructor(t6, e10, i10, n10) {
    this.facet = e10, this.createTooltipView = i10, this.removeTooltipView = n10, this.input = t6.state.facet(e10), this.tooltips = this.input.filter((t7) => t7);
    let s10 = null;
    this.tooltipViews = this.tooltips.map((t7) => s10 = i10(t7, s10));
  }
  update(t6, e10) {
    var i10;
    let n10 = t6.state.facet(this.facet), s10 = n10.filter((t7) => t7);
    if (n10 === this.input) {
      for (let e11 of this.tooltipViews)
        e11.update && e11.update(t6);
      return false;
    }
    let r10 = [], o10 = e10 ? [] : null;
    for (let i11 = 0; i11 < s10.length; i11++) {
      let n11 = s10[i11], l10 = -1;
      if (n11) {
        for (let t7 = 0; t7 < this.tooltips.length; t7++) {
          let e11 = this.tooltips[t7];
          e11 && e11.create == n11.create && (l10 = t7);
        }
        if (l10 < 0)
          r10[i11] = this.createTooltipView(n11, i11 ? r10[i11 - 1] : null), o10 && (o10[i11] = !!n11.above);
        else {
          let n12 = r10[i11] = this.tooltipViews[l10];
          o10 && (o10[i11] = e10[l10]), n12.update && n12.update(t6);
        }
      }
    }
    for (let t7 of this.tooltipViews)
      0 > r10.indexOf(t7) && (this.removeTooltipView(t7), null === (i10 = t7.destroy) || void 0 === i10 || i10.call(t7));
    return e10 && (o10.forEach((t7, i11) => e10[i11] = t7), e10.length = o10.length), this.input = n10, this.tooltips = s10, this.tooltipViews = r10, true;
  }
}
function sA(t6) {
  let { win: e10 } = t6;
  return { top: 0, left: 0, bottom: e10.innerHeight, right: e10.innerWidth };
}
let sM = tn.define({ combine: (t6) => {
  var e10, i10, n10;
  return { position: e_.ios ? "absolute" : (null === (e10 = t6.find((t7) => t7.position)) || void 0 === e10 ? void 0 : e10.position) || "fixed", parent: (null === (i10 = t6.find((t7) => t7.parent)) || void 0 === i10 ? void 0 : i10.parent) || null, tooltipSpace: (null === (n10 = t6.find((t7) => t7.tooltipSpace)) || void 0 === n10 ? void 0 : n10.tooltipSpace) || sA };
} }), sO = /* @__PURE__ */ new WeakMap(), sD = iL.fromClass(class {
  constructor(t6) {
    this.view = t6, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let e10 = t6.state.facet(sM);
    this.position = e10.position, this.parent = e10.parent, this.classes = t6.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new sC(t6, sR, (t7, e11) => this.createTooltip(t7, e11), (t7) => {
      this.resizeObserver && this.resizeObserver.unobserve(t7.dom), t7.dom.remove();
    }), this.above = this.manager.tooltips.map((t7) => !!t7.above), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((t7) => {
      Date.now() > this.lastTransaction - 50 && t7.length > 0 && t7[t7.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), t6.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver)
      for (let t6 of (this.intersectionObserver.disconnect(), this.manager.tooltipViews))
        this.intersectionObserver.observe(t6.dom);
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(t6) {
    t6.transactions.length && (this.lastTransaction = Date.now());
    let e10 = this.manager.update(t6, this.above);
    e10 && this.observeIntersection();
    let i10 = e10 || t6.geometryChanged, n10 = t6.state.facet(sM);
    if (n10.position != this.position && !this.madeAbsolute) {
      for (let t7 of (this.position = n10.position, this.manager.tooltipViews))
        t7.dom.style.position = this.position;
      i10 = true;
    }
    if (n10.parent != this.parent) {
      for (let t7 of (this.parent && this.container.remove(), this.parent = n10.parent, this.createContainer(), this.manager.tooltipViews))
        this.container.appendChild(t7.dom);
      i10 = true;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    i10 && this.maybeMeasure();
  }
  createTooltip(t6, e10) {
    let i10 = t6.create(this.view), n10 = e10 ? e10.dom : null;
    if (i10.dom.classList.add("cm-tooltip"), t6.arrow && !i10.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let t7 = document.createElement("div");
      t7.className = "cm-tooltip-arrow", i10.dom.appendChild(t7);
    }
    return i10.dom.style.position = this.position, i10.dom.style.top = sS, i10.dom.style.left = "0px", this.container.insertBefore(i10.dom, n10), i10.mount && i10.mount(this.view), this.resizeObserver && this.resizeObserver.observe(i10.dom), i10;
  }
  destroy() {
    var t6, e10, i10;
    for (let e11 of (this.view.win.removeEventListener("resize", this.measureSoon), this.manager.tooltipViews))
      e11.dom.remove(), null === (t6 = e11.destroy) || void 0 === t6 || t6.call(e11);
    this.parent && this.container.remove(), null === (e10 = this.resizeObserver) || void 0 === e10 || e10.disconnect(), null === (i10 = this.intersectionObserver) || void 0 === i10 || i10.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let t6 = this.view.dom.getBoundingClientRect(), e10 = 1, i10 = 1, n10 = false;
    if ("fixed" == this.position && this.manager.tooltipViews.length) {
      let { dom: t7 } = this.manager.tooltipViews[0];
      if (e_.gecko)
        n10 = t7.offsetParent != this.container.ownerDocument.body;
      else if (t7.style.top == sS && "0px" == t7.style.left) {
        let e11 = t7.getBoundingClientRect();
        n10 = Math.abs(e11.top + 1e4) > 1 || Math.abs(e11.left) > 1;
      }
    }
    if (n10 || "absolute" == this.position) {
      if (this.parent) {
        let t7 = this.parent.getBoundingClientRect();
        t7.width && t7.height && (e10 = t7.width / this.parent.offsetWidth, i10 = t7.height / this.parent.offsetHeight);
      } else
        ({ scaleX: e10, scaleY: i10 } = this.view.viewState);
    }
    return { editor: t6, parent: this.parent ? this.container.getBoundingClientRect() : t6, pos: this.manager.tooltips.map((t7, e11) => {
      let i11 = this.manager.tooltipViews[e11];
      return i11.getCoords ? i11.getCoords(t7.pos) : this.view.coordsAtPos(t7.pos);
    }), size: this.manager.tooltipViews.map((t7) => {
      let { dom: e11 } = t7;
      return e11.getBoundingClientRect();
    }), space: this.view.state.facet(sM).tooltipSpace(this.view), scaleX: e10, scaleY: i10, makeAbsolute: n10 };
  }
  writeMeasure(t6) {
    var e10;
    if (t6.makeAbsolute)
      for (let t7 of (this.madeAbsolute = true, this.position = "absolute", this.manager.tooltipViews))
        t7.dom.style.position = "absolute";
    let { editor: i10, space: n10, scaleX: s10, scaleY: r10 } = t6, o10 = [];
    for (let l10 = 0; l10 < this.manager.tooltips.length; l10++) {
      let h10 = this.manager.tooltips[l10], a5 = this.manager.tooltipViews[l10], { dom: c2 } = a5, d2 = t6.pos[l10], u2 = t6.size[l10];
      if (!d2 || d2.bottom <= Math.max(i10.top, n10.top) || d2.top >= Math.min(i10.bottom, n10.bottom) || d2.right < Math.max(i10.left, n10.left) - 0.1 || d2.left > Math.min(i10.right, n10.right) + 0.1) {
        c2.style.top = sS;
        continue;
      }
      let f2 = h10.arrow ? a5.dom.querySelector(".cm-tooltip-arrow") : null, p2 = f2 ? 7 : 0, g2 = u2.right - u2.left, m2 = null !== (e10 = sO.get(a5)) && void 0 !== e10 ? e10 : u2.bottom - u2.top, v2 = a5.offset || sE, w2 = this.view.textDirection == ii.LTR, y2 = u2.width > n10.right - n10.left ? w2 ? n10.left : n10.right - u2.width : w2 ? Math.min(d2.left - (f2 ? 14 : 0) + v2.x, n10.right - g2) : Math.max(n10.left, d2.left - g2 + (f2 ? 14 : 0) - v2.x), b2 = this.above[l10];
      !h10.strictSide && (b2 ? d2.top - (u2.bottom - u2.top) - v2.y < n10.top : d2.bottom + (u2.bottom - u2.top) + v2.y > n10.bottom) && b2 == n10.bottom - d2.bottom > d2.top - n10.top && (b2 = this.above[l10] = !b2);
      let x2 = (b2 ? d2.top - n10.top : n10.bottom - d2.bottom) - p2;
      if (x2 < m2 && false !== a5.resize) {
        if (x2 < this.view.defaultLineHeight) {
          c2.style.top = sS;
          continue;
        }
        sO.set(a5, m2), c2.style.height = (m2 = x2) / r10 + "px";
      } else
        c2.style.height && (c2.style.height = "");
      let k2 = b2 ? d2.top - m2 - p2 - v2.y : d2.bottom + p2 + v2.y, S2 = y2 + g2;
      if (true !== a5.overlap)
        for (let t7 of o10)
          t7.left < S2 && t7.right > y2 && t7.top < k2 + m2 && t7.bottom > k2 && (k2 = b2 ? t7.top - m2 - 2 - p2 : t7.bottom + p2 + 2);
      if ("absolute" == this.position ? (c2.style.top = (k2 - t6.parent.top) / r10 + "px", c2.style.left = (y2 - t6.parent.left) / s10 + "px") : (c2.style.top = k2 / r10 + "px", c2.style.left = y2 / s10 + "px"), f2) {
        let t7 = d2.left + (w2 ? v2.x : -v2.x) - (y2 + 14 - 7);
        f2.style.left = t7 / s10 + "px";
      }
      true !== a5.overlap && o10.push({ left: y2, top: k2, right: S2, bottom: k2 + m2 }), c2.classList.toggle("cm-tooltip-above", b2), c2.classList.toggle("cm-tooltip-below", !b2), a5.positioned && a5.positioned(t6.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let t6 of this.manager.tooltipViews)
        t6.dom.style.top = sS;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } }), sT = n6.baseTheme({ ".cm-tooltip": { zIndex: 100, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), sE = { x: 0, y: 0 }, sR = tn.define({ enables: [sD, sT] }), sB = tn.define({ combine: (t6) => t6.reduce((t7, e10) => t7.concat(e10), []) });
class sP {
  static create(t6) {
    return new sP(t6);
  }
  constructor(t6) {
    this.view = t6, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new sC(t6, sB, (t7, e10) => this.createHostedView(t7, e10), (t7) => t7.dom.remove());
  }
  createHostedView(t6, e10) {
    let i10 = t6.create(this.view);
    return i10.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i10.dom, e10 ? e10.dom.nextSibling : this.dom.firstChild), this.mounted && i10.mount && i10.mount(this.view), i10;
  }
  mount(t6) {
    for (let e10 of this.manager.tooltipViews)
      e10.mount && e10.mount(t6);
    this.mounted = true;
  }
  positioned(t6) {
    for (let e10 of this.manager.tooltipViews)
      e10.positioned && e10.positioned(t6);
  }
  update(t6) {
    this.manager.update(t6);
  }
  destroy() {
    var t6;
    for (let e10 of this.manager.tooltipViews)
      null === (t6 = e10.destroy) || void 0 === t6 || t6.call(e10);
  }
  passProp(t6) {
    let e10;
    for (let i10 of this.manager.tooltipViews) {
      let n10 = i10[t6];
      if (void 0 !== n10) {
        if (void 0 === e10)
          e10 = n10;
        else if (e10 !== n10)
          return;
      }
    }
    return e10;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
let sL = sR.compute([sB], (t6) => {
  let e10 = t6.facet(sB);
  return 0 === e10.length ? null : { pos: Math.min(...e10.map((t7) => t7.pos)), end: Math.max(...e10.map((t7) => {
    var e11;
    return null !== (e11 = t7.end) && void 0 !== e11 ? e11 : t7.pos;
  })), create: sP.create, above: e10[0].above, arrow: e10.some((t7) => t7.arrow) };
});
class sN {
  constructor(t6, e10, i10, n10, s10) {
    this.view = t6, this.source = e10, this.field = i10, this.setHover = n10, this.hoverTime = s10, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t6.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t6.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t6.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let t6 = Date.now() - this.lastMove.time;
    t6 < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t6) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t6, lastMove: e10 } = this, i10 = t6.docView.nearest(e10.target);
    if (!i10)
      return;
    let n10, s10 = 1;
    if (i10 instanceof eK)
      n10 = i10.posAtStart;
    else {
      if (null == (n10 = t6.posAtCoords(e10)))
        return;
      let i11 = t6.coordsAtPos(n10);
      if (!i11 || e10.y < i11.top || e10.y > i11.bottom || e10.x < i11.left - t6.defaultCharacterWidth || e10.x > i11.right + t6.defaultCharacterWidth)
        return;
      let r11 = t6.bidiSpans(t6.state.doc.lineAt(n10)).find((t7) => t7.from <= n10 && t7.to >= n10), o10 = r11 && r11.dir == ii.RTL ? -1 : 1;
      s10 = e10.x < i11.left ? -o10 : o10;
    }
    let r10 = this.source(t6, n10, s10);
    if (null == r10 ? void 0 : r10.then) {
      let e11 = this.pending = { pos: n10 };
      r10.then((i11) => {
        this.pending == e11 && (this.pending = null, i11 && !(Array.isArray(i11) && !i11.length) && t6.dispatch({ effects: this.setHover.of(Array.isArray(i11) ? i11 : [i11]) }));
      }, (e12) => iE(t6.state, e12, "hover tooltip"));
    } else
      r10 && !(Array.isArray(r10) && !r10.length) && t6.dispatch({ effects: this.setHover.of(Array.isArray(r10) ? r10 : [r10]) });
  }
  get tooltip() {
    let t6 = this.view.plugin(sD), e10 = t6 ? t6.manager.tooltips.findIndex((t7) => t7.create == sP.create) : -1;
    return e10 > -1 ? t6.manager.tooltipViews[e10] : null;
  }
  mousemove(t6) {
    var e10, i10;
    let n10;
    this.lastMove = { x: t6.clientX, y: t6.clientY, target: t6.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s10, tooltip: r10 } = this;
    if (s10.length && r10 && (n10 = r10.dom.getBoundingClientRect(), !(t6.clientX >= n10.left - 4) || !(t6.clientX <= n10.right + 4) || !(t6.clientY >= n10.top - 4) || !(t6.clientY <= n10.bottom + 4)) || this.pending) {
      let { pos: n11 } = s10[0] || this.pending, r11 = null !== (i10 = null === (e10 = s10[0]) || void 0 === e10 ? void 0 : e10.end) && void 0 !== i10 ? i10 : n11;
      (n11 == r11 ? this.view.posAtCoords(this.lastMove) != n11 : !function(t7, e11, i11, n12, s11, r12) {
        let o10 = t7.scrollDOM.getBoundingClientRect(), l10 = t7.documentTop + t7.documentPadding.top + t7.contentHeight;
        if (o10.left > n12 || o10.right < n12 || o10.top > s11 || Math.min(o10.bottom, l10) < s11)
          return false;
        let h10 = t7.posAtCoords({ x: n12, y: s11 }, false);
        return h10 >= e11 && h10 <= i11;
      }(this.view, n11, r11, t6.clientX, t6.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t6) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e10 } = this;
    if (e10.length) {
      let { tooltip: e11 } = this;
      e11 && e11.dom.contains(t6.relatedTarget) ? this.watchTooltipLeave(e11.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t6) {
    let e10 = (i10) => {
      t6.removeEventListener("mouseleave", e10), this.active.length && !this.view.dom.contains(i10.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t6.addEventListener("mouseleave", e10);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function sI(t6, e10) {
  let i10 = t6.plugin(sD);
  if (!i10)
    return null;
  let n10 = i10.manager.tooltips.indexOf(e10);
  return n10 < 0 ? null : i10.manager.tooltipViews[n10];
}
let sV = tT.define(), sH = tn.define({ combine(t6) {
  let e10, i10;
  for (let n10 of t6)
    e10 = e10 || n10.topContainer, i10 = i10 || n10.bottomContainer;
  return { topContainer: e10, bottomContainer: i10 };
} }), sW = iL.fromClass(class {
  constructor(t6) {
    this.input = t6.state.facet(s_), this.specs = this.input.filter((t7) => t7), this.panels = this.specs.map((e11) => e11(t6));
    let e10 = t6.state.facet(sH);
    for (let i10 of (this.top = new sF(t6, true, e10.topContainer), this.bottom = new sF(t6, false, e10.bottomContainer), this.top.sync(this.panels.filter((t7) => t7.top)), this.bottom.sync(this.panels.filter((t7) => !t7.top)), this.panels))
      i10.dom.classList.add("cm-panel"), i10.mount && i10.mount();
  }
  update(t6) {
    let e10 = t6.state.facet(sH);
    this.top.container != e10.topContainer && (this.top.sync([]), this.top = new sF(t6.view, true, e10.topContainer)), this.bottom.container != e10.bottomContainer && (this.bottom.sync([]), this.bottom = new sF(t6.view, false, e10.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let i10 = t6.state.facet(s_);
    if (i10 != this.input) {
      let e11 = i10.filter((t7) => t7), n10 = [], s10 = [], r10 = [], o10 = [];
      for (let i11 of e11) {
        let e12 = this.specs.indexOf(i11), l10;
        e12 < 0 ? (l10 = i11(t6.view), o10.push(l10)) : (l10 = this.panels[e12]).update && l10.update(t6), n10.push(l10), (l10.top ? s10 : r10).push(l10);
      }
      for (let t7 of (this.specs = e11, this.panels = n10, this.top.sync(s10), this.bottom.sync(r10), o10))
        t7.dom.classList.add("cm-panel"), t7.mount && t7.mount();
    } else
      for (let e11 of this.panels)
        e11.update && e11.update(t6);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (t6) => n6.scrollMargins.of((e10) => {
  let i10 = e10.plugin(t6);
  return i10 && { top: i10.top.scrollMargin(), bottom: i10.bottom.scrollMargin() };
}) });
class sF {
  constructor(t6, e10, i10) {
    this.view = t6, this.top = e10, this.container = i10, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t6) {
    for (let e10 of this.panels)
      e10.destroy && 0 > t6.indexOf(e10) && e10.destroy();
    this.panels = t6, this.syncDOM();
  }
  syncDOM() {
    if (0 == this.panels.length) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t7 = this.container || this.view.dom;
      t7.insertBefore(this.dom, this.top ? t7.firstChild : null);
    }
    let t6 = this.dom.firstChild;
    for (let e10 of this.panels)
      if (e10.dom.parentNode == this.dom) {
        for (; t6 != e10.dom; )
          t6 = sz(t6);
        t6 = t6.nextSibling;
      } else
        this.dom.insertBefore(e10.dom, t6);
    for (; t6; )
      t6 = sz(t6);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (this.container && this.classes != this.view.themeClasses) {
      for (let t6 of this.classes.split(" "))
        t6 && this.container.classList.remove(t6);
      for (let t6 of (this.classes = this.view.themeClasses).split(" "))
        t6 && this.container.classList.add(t6);
    }
  }
}
function sz(t6) {
  let e10 = t6.nextSibling;
  return t6.remove(), e10;
}
let s_ = tn.define({ enables: sW });
class sj extends tW {
  compare(t6) {
    return this == t6 || this.constructor == t6.constructor && this.eq(t6);
  }
  eq(t6) {
    return false;
  }
  destroy(t6) {
  }
}
sj.prototype.elementClass = "", sj.prototype.toDOM = void 0, sj.prototype.mapMode = q.TrackBefore, sj.prototype.startSide = sj.prototype.endSide = -1, sj.prototype.point = true;
let sq = tn.define(), sK = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => tj.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {} }, s$ = tn.define();
function sU(t6) {
  return [sJ(), s$.of(Object.assign(Object.assign({}, sK), t6))];
}
let sG = tn.define({ combine: (t6) => t6.some((t7) => t7) });
function sJ(t6) {
  let e10 = [sY];
  return t6 && false === t6.fixed && e10.push(sG.of(true)), e10;
}
let sY = iL.fromClass(class {
  constructor(t6) {
    for (let e10 of (this.view = t6, this.prevViewport = t6.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = t6.state.facet(s$).map((e11) => new s0(t6, e11)), this.gutters))
      this.dom.appendChild(e10.dom);
    this.fixed = !t6.state.facet(sG), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), t6.scrollDOM.insertBefore(this.dom, t6.contentDOM);
  }
  update(t6) {
    if (this.updateGutters(t6)) {
      let e10 = this.prevViewport, i10 = t6.view.viewport, n10 = Math.min(e10.to, i10.to) - Math.max(e10.from, i10.from);
      this.syncGutters(n10 < (i10.to - i10.from) * 0.8);
    }
    t6.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(sG) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t6.view.viewport;
  }
  syncGutters(t6) {
    let e10 = this.dom.nextSibling;
    t6 && this.dom.remove();
    let i10 = tj.iter(this.view.state.facet(sq), this.view.viewport.from), n10 = [], s10 = this.gutters.map((t7) => new sZ(t7, this.view.viewport, -this.view.documentPadding.top));
    for (let t7 of this.view.viewportLineBlocks)
      if (n10.length && (n10 = []), Array.isArray(t7.type)) {
        let e11 = true;
        for (let r10 of t7.type)
          if (r10.type == e2.Text && e11) {
            for (let t10 of (sQ(i10, n10, r10.from), s10))
              t10.line(this.view, r10, n10);
            e11 = false;
          } else if (r10.widget)
            for (let t10 of s10)
              t10.widget(this.view, r10);
      } else if (t7.type == e2.Text)
        for (let e11 of (sQ(i10, n10, t7.from), s10))
          e11.line(this.view, t7, n10);
      else if (t7.widget)
        for (let e11 of s10)
          e11.widget(this.view, t7);
    for (let t7 of s10)
      t7.finish();
    t6 && this.view.scrollDOM.insertBefore(this.dom, e10);
  }
  updateGutters(t6) {
    let e10 = t6.startState.facet(s$), i10 = t6.state.facet(s$), n10 = t6.docChanged || t6.heightChanged || t6.viewportChanged || !tj.eq(t6.startState.facet(sq), t6.state.facet(sq), t6.view.viewport.from, t6.view.viewport.to);
    if (e10 == i10)
      for (let e11 of this.gutters)
        e11.update(t6) && (n10 = true);
    else {
      n10 = true;
      let s10 = [];
      for (let n11 of i10) {
        let i11 = e10.indexOf(n11);
        i11 < 0 ? s10.push(new s0(this.view, n11)) : (this.gutters[i11].update(t6), s10.push(this.gutters[i11]));
      }
      for (let t7 of this.gutters)
        t7.dom.remove(), 0 > s10.indexOf(t7) && t7.destroy();
      for (let t7 of s10)
        this.dom.appendChild(t7.dom);
      this.gutters = s10;
    }
    return n10;
  }
  destroy() {
    for (let t6 of this.gutters)
      t6.destroy();
    this.dom.remove();
  }
}, { provide: (t6) => n6.scrollMargins.of((e10) => {
  let i10 = e10.plugin(t6);
  return i10 && 0 != i10.gutters.length && i10.fixed ? e10.textDirection == ii.LTR ? { left: i10.dom.offsetWidth * e10.scaleX } : { right: i10.dom.offsetWidth * e10.scaleX } : null;
}) });
function sX(t6) {
  return Array.isArray(t6) ? t6 : [t6];
}
function sQ(t6, e10, i10) {
  for (; t6.value && t6.from <= i10; )
    t6.from == i10 && e10.push(t6.value), t6.next();
}
class sZ {
  constructor(t6, e10, i10) {
    this.gutter = t6, this.height = i10, this.i = 0, this.cursor = tj.iter(t6.markers, e10.from);
  }
  addElement(t6, e10, i10) {
    let { gutter: n10 } = this, s10 = (e10.top - this.height) / t6.scaleY, r10 = e10.height / t6.scaleY;
    if (this.i == n10.elements.length) {
      let e11 = new s1(t6, r10, s10, i10);
      n10.elements.push(e11), n10.dom.appendChild(e11.dom);
    } else
      n10.elements[this.i].update(t6, r10, s10, i10);
    this.height = e10.bottom, this.i++;
  }
  line(t6, e10, i10) {
    let n10 = [];
    sQ(this.cursor, n10, e10.from), i10.length && (n10 = n10.concat(i10));
    let s10 = this.gutter.config.lineMarker(t6, e10, n10);
    s10 && n10.unshift(s10);
    let r10 = this.gutter;
    (0 != n10.length || r10.config.renderEmptyElements) && this.addElement(t6, e10, n10);
  }
  widget(t6, e10) {
    let i10 = this.gutter.config.widgetMarker(t6, e10.widget, e10);
    i10 && this.addElement(t6, e10, [i10]);
  }
  finish() {
    let t6 = this.gutter;
    for (; t6.elements.length > this.i; ) {
      let e10 = t6.elements.pop();
      t6.dom.removeChild(e10.dom), e10.destroy();
    }
  }
}
class s0 {
  constructor(t6, e10) {
    for (let i10 in this.view = t6, this.config = e10, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : ""), e10.domEventHandlers)
      this.dom.addEventListener(i10, (n10) => {
        let s10 = n10.target, r10;
        if (s10 != this.dom && this.dom.contains(s10)) {
          for (; s10.parentNode != this.dom; )
            s10 = s10.parentNode;
          let t7 = s10.getBoundingClientRect();
          r10 = (t7.top + t7.bottom) / 2;
        } else
          r10 = n10.clientY;
        let o10 = t6.lineBlockAtHeight(r10 - t6.documentTop);
        e10.domEventHandlers[i10](t6, o10, n10) && n10.preventDefault();
      });
    this.markers = sX(e10.markers(t6)), e10.initialSpacer && (this.spacer = new s1(t6, 0, 0, [e10.initialSpacer(t6)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t6) {
    let e10 = this.markers;
    if (this.markers = sX(this.config.markers(t6.view)), this.spacer && this.config.updateSpacer) {
      let e11 = this.config.updateSpacer(this.spacer.markers[0], t6);
      e11 != this.spacer.markers[0] && this.spacer.update(t6.view, 0, 0, [e11]);
    }
    let i10 = t6.view.viewport;
    return !tj.eq(this.markers, e10, i10.from, i10.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(t6);
  }
  destroy() {
    for (let t6 of this.elements)
      t6.destroy();
  }
}
class s1 {
  constructor(t6, e10, i10, n10) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t6, e10, i10, n10);
  }
  update(t6, e10, i10, n10) {
    this.height != e10 && (this.height = e10, this.dom.style.height = e10 + "px"), this.above != i10 && (this.dom.style.marginTop = (this.above = i10) ? i10 + "px" : ""), !function(t7, e11) {
      if (t7.length != e11.length)
        return false;
      for (let i11 = 0; i11 < t7.length; i11++)
        if (!t7[i11].compare(e11[i11]))
          return false;
      return true;
    }(this.markers, n10) && this.setMarkers(t6, n10);
  }
  setMarkers(t6, e10) {
    let i10 = "cm-gutterElement", n10 = this.dom.firstChild;
    for (let s10 = 0, r10 = 0; ; ) {
      let o10 = r10, l10 = s10 < e10.length ? e10[s10++] : null, h10 = false;
      if (l10) {
        let t7 = l10.elementClass;
        t7 && (i10 += " " + t7);
        for (let t10 = r10; t10 < this.markers.length; t10++)
          if (this.markers[t10].compare(l10)) {
            o10 = t10, h10 = true;
            break;
          }
      } else
        o10 = this.markers.length;
      for (; r10 < o10; ) {
        let t7 = this.markers[r10++];
        if (t7.toDOM) {
          t7.destroy(n10);
          let e11 = n10.nextSibling;
          n10.remove(), n10 = e11;
        }
      }
      if (!l10)
        break;
      l10.toDOM && (h10 ? n10 = n10.nextSibling : this.dom.insertBefore(l10.toDOM(t6), n10)), h10 && r10++;
    }
    this.dom.className = i10, this.markers = e10;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
let s2 = tn.define(), s3 = tn.define({ combine: (t6) => tH(t6, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(t7, e10) {
  let i10 = Object.assign({}, t7);
  for (let t10 in e10) {
    let n10 = i10[t10], s10 = e10[t10];
    i10[t10] = n10 ? (t11, e11, i11) => n10(t11, e11, i11) || s10(t11, e11, i11) : s10;
  }
  return i10;
} }) });
class s8 extends sj {
  constructor(t6) {
    super(), this.number = t6;
  }
  eq(t6) {
    return this.number == t6.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function s4(t6, e10) {
  return t6.state.facet(s3).formatNumber(e10, t6.state);
}
let s5 = s$.compute([s3], (t6) => ({ class: "cm-lineNumbers", renderEmptyElements: false, markers: (t7) => t7.state.facet(s2), lineMarker: (t7, e10, i10) => i10.some((t10) => t10.toDOM) ? null : new s8(s4(t7, t7.state.doc.lineAt(e10.from).number)), widgetMarker: () => null, lineMarkerChange: (t7) => t7.startState.facet(s3) != t7.state.facet(s3), initialSpacer: (t7) => new s8(s4(t7, s9(t7.state.doc.lines))), updateSpacer(t7, e10) {
  let i10 = s4(e10.view, s9(e10.view.state.doc.lines));
  return i10 == t7.number ? t7 : new s8(i10);
}, domEventHandlers: t6.facet(s3).domEventHandlers }));
function s9(t6) {
  let e10 = 9;
  for (; e10 < t6; )
    e10 = 10 * e10 + 9;
  return e10;
}
let s6 = new class extends sj {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), s7 = sq.compute(["selection"], (t6) => {
  let e10 = [], i10 = -1;
  for (let n10 of t6.selection.ranges) {
    let s10 = t6.doc.lineAt(n10.head).from;
    s10 > i10 && (i10 = s10, e10.push(s6.range(s10)));
  }
  return tj.of(e10);
});
function rt() {
  var t6 = arguments[0];
  "string" == typeof t6 && (t6 = document.createElement(t6));
  var e10 = 1, i10 = arguments[1];
  if (i10 && "object" == typeof i10 && null == i10.nodeType && !Array.isArray(i10)) {
    for (var n10 in i10)
      if (Object.prototype.hasOwnProperty.call(i10, n10)) {
        var s10 = i10[n10];
        "string" == typeof s10 ? t6.setAttribute(n10, s10) : null != s10 && (t6[n10] = s10);
      }
    e10++;
  }
  for (; e10 < arguments.length; e10++)
    !function t7(e11, i11) {
      if ("string" == typeof i11)
        e11.appendChild(document.createTextNode(i11));
      else if (null == i11)
        ;
      else if (null != i11.nodeType)
        e11.appendChild(i11);
      else if (Array.isArray(i11))
        for (var n11 = 0; n11 < i11.length; n11++)
          t7(e11, i11[n11]);
      else
        throw RangeError("Unsupported child node: " + i11);
    }(t6, arguments[e10]);
  return t6;
}
class re {
  constructor(t6, e10, i10) {
    this.from = t6, this.to = e10, this.diagnostic = i10;
  }
}
class ri {
  constructor(t6, e10, i10) {
    this.diagnostics = t6, this.panel = e10, this.selected = i10;
  }
  static init(t6, e10, i10) {
    let n10 = t6, s10 = i10.facet(rm).markerFilter;
    s10 && (n10 = s10(n10, i10));
    let r10 = e3.set(n10.map((t7) => t7.from == t7.to || t7.from == t7.to - 1 && i10.doc.lineAt(t7.from).to == t7.from ? e3.widget({ widget: new rx(t7), diagnostic: t7 }).range(t7.from) : e3.mark({ attributes: { class: "cm-lintRange cm-lintRange-" + t7.severity + (t7.markClass ? " " + t7.markClass : "") }, diagnostic: t7, inclusive: true }).range(t7.from, t7.to)), true);
    return new ri(r10, e10, rn(r10));
  }
}
function rn(t6) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = null;
  return t6.between(i10, 1e9, (t7, i11, s10) => {
    let { spec: r10 } = s10;
    if (!e10 || r10.diagnostic == e10)
      return n10 = new re(t7, i11, r10.diagnostic), false;
  }), n10;
}
function rs(t6, e10) {
  let i10 = t6.startState.doc.lineAt(e10.pos);
  return !!(t6.effects.some((t7) => t7.is(ro)) || t6.changes.touchesRange(i10.from, i10.to));
}
function rr(t6, e10) {
  return t6.field(ra, false) ? e10 : e10.concat(tT.appendConfig.of(rL));
}
let ro = tT.define(), rl = tT.define(), rh = tT.define(), ra = ta.define({ create: () => new ri(e3.none, null, null), update(t6, e10) {
  if (e10.docChanged) {
    let i10 = t6.diagnostics.map(e10.changes), n10 = null;
    if (t6.selected) {
      let s10 = e10.changes.mapPos(t6.selected.from, 1);
      n10 = rn(i10, t6.selected.diagnostic, s10) || rn(i10, null, s10);
    }
    t6 = new ri(i10, t6.panel, n10);
  }
  for (let i10 of e10.effects)
    i10.is(ro) ? t6 = ri.init(i10.value, t6.panel, e10.state) : i10.is(rl) ? t6 = new ri(t6.diagnostics, i10.value ? rS.open : null, t6.selected) : i10.is(rh) && (t6 = new ri(t6.diagnostics, t6.panel, i10.value));
  return t6;
}, provide: (t6) => [s_.from(t6, (t7) => t7.panel), n6.decorations.from(t6, (t7) => t7.diagnostics)] });
function rc(t6) {
  let e10 = t6.field(ra, false);
  return e10 ? e10.diagnostics.size : 0;
}
let rd = e3.mark({ class: "cm-lintRange cm-lintRange-active", inclusive: true });
function ru(t6, e10) {
  return rt("ul", { class: "cm-tooltip-lint" }, e10.map((e11) => rb(t6, e11, false)));
}
let rf = (t6) => {
  let e10 = t6.state.field(ra, false);
  return !!e10 && !!e10.panel && (t6.dispatch({ effects: rl.of(false) }), true);
}, rp = [{ key: "Mod-Shift-m", run: (t6) => {
  var e10;
  let i10, n10, s10 = t6.state.field(ra, false);
  s10 && s10.panel || t6.dispatch({ effects: rr(t6.state, [rl.of(true)]) });
  let r10 = (e10 = rS.open, (n10 = (i10 = t6.plugin(sW)) ? i10.specs.indexOf(e10) : -1) > -1 ? i10.panels[n10] : null);
  return r10 && r10.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, preventDefault: true }, { key: "F8", run: (t6) => {
  let e10 = t6.state.field(ra, false);
  if (!e10)
    return false;
  let i10 = t6.state.selection.main, n10 = e10.diagnostics.iter(i10.to + 1);
  return (!!n10.value || !!(n10 = e10.diagnostics.iter(0)).value && (n10.from != i10.from || n10.to != i10.to)) && (t6.dispatch({ selection: { anchor: n10.from, head: n10.to }, scrollIntoView: true }), true);
} }], rg = iL.fromClass(class {
  constructor(t6) {
    this.view = t6, this.timeout = -1, this.set = true;
    let { delay: e10 } = t6.state.facet(rm);
    this.lintTime = Date.now() + e10, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e10);
  }
  run() {
    let t6 = Date.now();
    if (t6 < this.lintTime - 10)
      this.timeout = setTimeout(this.run, this.lintTime - t6);
    else {
      this.set = false;
      let { state: t7 } = this.view, { sources: e10 } = t7.facet(rm);
      e10.length && Promise.all(e10.map((t10) => Promise.resolve(t10(this.view)))).then((e11) => {
        let i10 = e11.reduce((t10, e12) => t10.concat(e12));
        this.view.state.doc == t7.doc && this.view.dispatch({ effects: rr(this.view.state, [ro.of(i10)]) });
      }, (t10) => {
        iE(this.view.state, t10);
      });
    }
  }
  update(t6) {
    let e10 = t6.state.facet(rm);
    (t6.docChanged || e10 != t6.startState.facet(rm) || e10.needsRefresh && e10.needsRefresh(t6)) && (this.lintTime = Date.now() + e10.delay, this.set || (this.set = true, this.timeout = setTimeout(this.run, e10.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
}), rm = tn.define({ combine: (t6) => Object.assign({ sources: t6.map((t7) => t7.source).filter((t7) => null != t7) }, tH(t6.map((t7) => t7.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null }, { needsRefresh: (t7, e10) => t7 ? e10 ? (i10) => t7(i10) || e10(i10) : t7 : e10 })) });
function rv(t6) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return [rm.of({ source: t6, config: e10 }), rg, rL];
}
function rw(t6) {
  let e10 = t6.plugin(rg);
  e10 && e10.force();
}
function ry(t6) {
  let e10 = [];
  if (t6)
    i:
      for (let { name: i10 } of t6) {
        for (let t7 = 0; t7 < i10.length; t7++) {
          let n10 = i10[t7];
          if (/[a-zA-Z]/.test(n10) && !e10.some((t10) => t10.toLowerCase() == n10.toLowerCase())) {
            e10.push(n10);
            continue i;
          }
        }
        e10.push("");
      }
  return e10;
}
function rb(t6, e10, i10) {
  var n10;
  let s10 = i10 ? ry(e10.actions) : [];
  return rt("li", { class: "cm-diagnostic cm-diagnostic-" + e10.severity }, rt("span", { class: "cm-diagnosticText" }, e10.renderMessage ? e10.renderMessage() : e10.message), null === (n10 = e10.actions) || void 0 === n10 ? void 0 : n10.map((i11, n11) => {
    let r10 = false, o10 = (n12) => {
      if (n12.preventDefault(), r10)
        return;
      r10 = true;
      let s11 = rn(t6.state.field(ra).diagnostics, e10);
      s11 && i11.apply(t6, s11.from, s11.to);
    }, { name: l10 } = i11, h10 = s10[n11] ? l10.indexOf(s10[n11]) : -1, a5 = h10 < 0 ? l10 : [l10.slice(0, h10), rt("u", l10.slice(h10, h10 + 1)), l10.slice(h10 + 1)];
    return rt("button", { type: "button", class: "cm-diagnosticAction", onclick: o10, onmousedown: o10, "aria-label": ` Action: ${l10}${h10 < 0 ? "" : ` (access key "${s10[n11]})"`}.` }, a5);
  }), e10.source && rt("div", { class: "cm-diagnosticSource" }, e10.source));
}
class rx extends e1 {
  constructor(t6) {
    super(), this.diagnostic = t6;
  }
  eq(t6) {
    return t6.diagnostic == this.diagnostic;
  }
  toDOM() {
    return rt("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class rk {
  constructor(t6, e10) {
    this.diagnostic = e10, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = rb(t6, e10, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class rS {
  constructor(t6) {
    this.view = t6, this.items = [], this.list = rt("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: (e10) => {
      if (27 == e10.keyCode)
        rf(this.view), this.view.focus();
      else if (38 == e10.keyCode || 33 == e10.keyCode)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (40 == e10.keyCode || 34 == e10.keyCode)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (36 == e10.keyCode)
        this.moveSelection(0);
      else if (35 == e10.keyCode)
        this.moveSelection(this.items.length - 1);
      else if (13 == e10.keyCode)
        this.view.focus();
      else {
        if (!(e10.keyCode >= 65) || !(e10.keyCode <= 90) || !(this.selectedIndex >= 0))
          return;
        let { diagnostic: i10 } = this.items[this.selectedIndex], n10 = ry(i10.actions);
        for (let s10 = 0; s10 < n10.length; s10++)
          if (n10[s10].toUpperCase().charCodeAt(0) == e10.keyCode) {
            let e11 = rn(this.view.state.field(ra).diagnostics, i10);
            e11 && i10.actions[s10].apply(t6, e11.from, e11.to);
          }
      }
      e10.preventDefault();
    }, onclick: (t7) => {
      for (let e10 = 0; e10 < this.items.length; e10++)
        this.items[e10].dom.contains(t7.target) && this.moveSelection(e10);
    } }), this.dom = rt("div", { class: "cm-panel-lint" }, this.list, rt("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => rf(this.view) }, "×")), this.update();
  }
  get selectedIndex() {
    let t6 = this.view.state.field(ra).selected;
    if (!t6)
      return -1;
    for (let e10 = 0; e10 < this.items.length; e10++)
      if (this.items[e10].diagnostic == t6.diagnostic)
        return e10;
    return -1;
  }
  update() {
    let { diagnostics: t6, selected: e10 } = this.view.state.field(ra), i10 = 0, n10 = false, s10 = null;
    for (t6.between(0, this.view.state.doc.length, (t7, r10, o10) => {
      let { spec: l10 } = o10, h10 = -1, a5;
      for (let t10 = i10; t10 < this.items.length; t10++)
        if (this.items[t10].diagnostic == l10.diagnostic) {
          h10 = t10;
          break;
        }
      h10 < 0 ? (a5 = new rk(this.view, l10.diagnostic), this.items.splice(i10, 0, a5), n10 = true) : (a5 = this.items[h10], h10 > i10 && (this.items.splice(i10, h10 - i10), n10 = true)), e10 && a5.diagnostic == e10.diagnostic ? a5.dom.hasAttribute("aria-selected") || (a5.dom.setAttribute("aria-selected", "true"), s10 = a5) : a5.dom.hasAttribute("aria-selected") && a5.dom.removeAttribute("aria-selected"), i10++;
    }); i10 < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0); )
      n10 = true, this.items.pop();
    0 == this.items.length && (this.items.push(new rk(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), n10 = true), s10 ? (this.list.setAttribute("aria-activedescendant", s10.id), this.view.requestMeasure({ key: this, read: () => ({ sel: s10.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: (t7) => {
      let { sel: e11, panel: i11 } = t7, n11 = i11.height / this.list.offsetHeight;
      e11.top < i11.top ? this.list.scrollTop -= (i11.top - e11.top) / n11 : e11.bottom > i11.bottom && (this.list.scrollTop += (e11.bottom - i11.bottom) / n11);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), n10 && this.sync();
  }
  sync() {
    let t6 = this.list.firstChild;
    function e10() {
      let e11 = t6;
      t6 = e11.nextSibling, e11.remove();
    }
    for (let i10 of this.items)
      if (i10.dom.parentNode == this.list) {
        for (; t6 != i10.dom; )
          e10();
        t6 = i10.dom.nextSibling;
      } else
        this.list.insertBefore(i10.dom, t6);
    for (; t6; )
      e10();
  }
  moveSelection(t6) {
    if (this.selectedIndex < 0)
      return;
    let e10 = rn(this.view.state.field(ra).diagnostics, this.items[t6].diagnostic);
    e10 && this.view.dispatch({ selection: { anchor: e10.from, head: e10.to }, scrollIntoView: true, effects: rh.of(e10) });
  }
  static open(t6) {
    return new rS(t6);
  }
}
function rC(t6) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'viewBox="0 0 40 40"';
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e10}>${encodeURIComponent(t6)}</svg>')`;
}
function rA(t6) {
  return rC(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t6}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
let rM = n6.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: rA("#d11") }, ".cm-lintRange-warning": { backgroundImage: rA("orange") }, ".cm-lintRange-info": { backgroundImage: rA("#999") }, ".cm-lintRange-hint": { backgroundImage: rA("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } });
function rO(t6) {
  return "error" == t6 ? 4 : "warning" == t6 ? 3 : "info" == t6 ? 2 : 1;
}
class rD extends sj {
  constructor(t6) {
    super(), this.diagnostics = t6, this.severity = t6.reduce((t7, e10) => rO(t7) < rO(e10.severity) ? e10.severity : t7, "hint");
  }
  toDOM(t6) {
    let e10 = document.createElement("div");
    e10.className = "cm-lint-marker cm-lint-marker-" + this.severity;
    let i10 = this.diagnostics, n10 = t6.state.facet(rN).tooltipFilter;
    return n10 && (i10 = n10(i10, t6.state)), i10.length && (e10.onmouseover = () => function(t7, e11, i11) {
      function n11() {
        let n12, s11 = t7.elementAtHeight(e11.getBoundingClientRect().top + 5 - t7.documentTop);
        t7.coordsAtPos(s11.from) && t7.dispatch({ effects: rR.of({ pos: s11.from, above: false, create: () => ({ dom: ru(t7, i11), getCoords: () => e11.getBoundingClientRect() }) }) }), e11.onmouseout = e11.onmousemove = null, n12 = (i12) => {
          let s12 = e11.getBoundingClientRect();
          if (!(i12.clientX > s12.left - 10) || !(i12.clientX < s12.right + 10) || !(i12.clientY > s12.top - 10) || !(i12.clientY < s12.bottom + 10)) {
            for (let t10 = i12.target; t10; t10 = t10.parentNode)
              if (1 == t10.nodeType && t10.classList.contains("cm-tooltip-lint"))
                return;
            window.removeEventListener("mousemove", n12), t7.state.field(rB) && t7.dispatch({ effects: rR.of(null) });
          }
        }, window.addEventListener("mousemove", n12);
      }
      let { hoverTime: s10 } = t7.state.facet(rN), r10 = setTimeout(n11, s10);
      e11.onmouseout = () => {
        clearTimeout(r10), e11.onmouseout = e11.onmousemove = null;
      }, e11.onmousemove = () => {
        clearTimeout(r10), r10 = setTimeout(n11, s10);
      };
    }(t6, e10, i10)), e10;
  }
}
let rT = sU({ class: "cm-gutter-lint", markers: (t6) => t6.state.field(rE) }), rE = ta.define({ create: () => tj.empty, update(t6, e10) {
  t6 = t6.map(e10.changes);
  let i10 = e10.state.facet(rN).markerFilter;
  for (let n10 of e10.effects)
    if (n10.is(ro)) {
      let s10 = n10.value;
      i10 && (s10 = i10(s10 || [], e10.state)), t6 = function(t7, e11) {
        let i11 = /* @__PURE__ */ Object.create(null);
        for (let n12 of e11) {
          let e12 = t7.lineAt(n12.from);
          (i11[e12.from] || (i11[e12.from] = [])).push(n12);
        }
        let n11 = [];
        for (let t10 in i11)
          n11.push(new rD(i11[t10]).range(+t10));
        return tj.of(n11, true);
      }(e10.state.doc, s10.slice(0));
    }
  return t6;
} }), rR = tT.define(), rB = ta.define({ create: () => null, update: (t6, e10) => (t6 && e10.docChanged && (t6 = rs(e10, t6) ? null : Object.assign(Object.assign({}, t6), { pos: e10.changes.mapPos(t6.pos) })), e10.effects.reduce((t7, e11) => e11.is(rR) ? e11.value : t7, t6)), provide: (t6) => sR.from(t6) }), rP = n6.baseTheme({ ".cm-gutter-lint": { width: "1.4em", "& .cm-gutterElement": { padding: ".2em" } }, ".cm-lint-marker": { width: "1em", height: "1em" }, ".cm-lint-marker-info": { content: rC('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>') }, ".cm-lint-marker-warning": { content: rC('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>') }, ".cm-lint-marker-error": { content: rC('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>') } }), rL = [ra, n6.decorations.compute([ra], (t6) => {
  let { selected: e10, panel: i10 } = t6.field(ra);
  return e10 && i10 && e10.from != e10.to ? e3.set([rd.range(e10.from, e10.to)]) : e3.none;
}), function(t6) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i10 = tT.define(), n10 = ta.define({ create: () => [], update(t7, n11) {
    if (t7.length && (e10.hideOnChange && (n11.docChanged || n11.selection) ? t7 = [] : e10.hideOn && (t7 = t7.filter((t10) => !e10.hideOn(n11, t10))), n11.docChanged)) {
      let e11 = [];
      for (let i11 of t7) {
        let t10 = n11.changes.mapPos(i11.pos, -1, q.TrackDel);
        if (null != t10) {
          let s10 = Object.assign(/* @__PURE__ */ Object.create(null), i11);
          s10.pos = t10, null != s10.end && (s10.end = n11.changes.mapPos(s10.end)), e11.push(s10);
        }
      }
      t7 = e11;
    }
    for (let e11 of n11.effects)
      e11.is(i10) && (t7 = e11.value), e11.is(sV) && (t7 = []);
    return t7;
  }, provide: (t7) => sB.from(t7) });
  return [n10, iL.define((s10) => new sN(s10, t6, n10, i10, e10.hoverTime || 300)), sL];
}(function(t6, e10, i10) {
  let { diagnostics: n10 } = t6.state.field(ra), s10 = [], r10 = 2e8, o10 = 0;
  n10.between(e10 - (i10 < 0 ? 1 : 0), e10 + (i10 > 0 ? 1 : 0), (t7, n11, l11) => {
    let { spec: h10 } = l11;
    e10 >= t7 && e10 <= n11 && (t7 == n11 || (e10 > t7 || i10 > 0) && (e10 < n11 || i10 < 0)) && (s10.push(h10.diagnostic), r10 = Math.min(t7, r10), o10 = Math.max(n11, o10));
  });
  let l10 = t6.state.facet(rm).tooltipFilter;
  return (l10 && (s10 = l10(s10, t6.state)), s10.length) ? { pos: r10, end: o10, above: t6.state.doc.lineAt(r10).to < o10, create: () => ({ dom: ru(t6, s10) }) } : null;
}, { hideOn: rs }), rM], rN = tn.define({ combine: (t6) => tH(t6, { hoverTime: 300, markerFilter: null, tooltipFilter: null }) }), rI = 1024, rV = 0;
class rH {
  constructor(t6, e10) {
    this.from = t6, this.to = e10;
  }
}
class rW {
  constructor(t6 = {}) {
    this.id = rV++, this.perNode = !!t6.perNode, this.deserialize = t6.deserialize || (() => {
      throw Error("This node type doesn't define a deserialize function");
    });
  }
  add(t6) {
    if (this.perNode)
      throw RangeError("Can't add per-node props to node types");
    return "function" != typeof t6 && (t6 = r_.match(t6)), (e10) => {
      let i10 = t6(e10);
      return void 0 === i10 ? null : [this, i10];
    };
  }
}
rW.closedBy = new rW({ deserialize: (t6) => t6.split(" ") }), rW.openedBy = new rW({ deserialize: (t6) => t6.split(" ") }), rW.group = new rW({ deserialize: (t6) => t6.split(" ") }), rW.isolate = new rW({ deserialize: (t6) => {
  if (t6 && "rtl" != t6 && "ltr" != t6 && "auto" != t6)
    throw RangeError("Invalid value for isolate: " + t6);
  return t6 || "auto";
} }), rW.contextHash = new rW({ perNode: true }), rW.lookAhead = new rW({ perNode: true }), rW.mounted = new rW({ perNode: true });
class rF {
  constructor(t6, e10, i10) {
    this.tree = t6, this.overlay = e10, this.parser = i10;
  }
  static get(t6) {
    return t6 && t6.props && t6.props[rW.mounted.id];
  }
}
let rz = /* @__PURE__ */ Object.create(null);
class r_ {
  constructor(t6, e10, i10, n10 = 0) {
    this.name = t6, this.props = e10, this.id = i10, this.flags = n10;
  }
  static define(t6) {
    let e10 = t6.props && t6.props.length ? /* @__PURE__ */ Object.create(null) : rz, i10 = (t6.top ? 1 : 0) | (t6.skipped ? 2 : 0) | (t6.error ? 4 : 0) | (null == t6.name ? 8 : 0), n10 = new r_(t6.name || "", e10, t6.id, i10);
    if (t6.props) {
      for (let i11 of t6.props)
        if (Array.isArray(i11) || (i11 = i11(n10)), i11) {
          if (i11[0].perNode)
            throw RangeError("Can't store a per-node prop on a node type");
          e10[i11[0].id] = i11[1];
        }
    }
    return n10;
  }
  prop(t6) {
    return this.props[t6.id];
  }
  get isTop() {
    return (1 & this.flags) > 0;
  }
  get isSkipped() {
    return (2 & this.flags) > 0;
  }
  get isError() {
    return (4 & this.flags) > 0;
  }
  get isAnonymous() {
    return (8 & this.flags) > 0;
  }
  is(t6) {
    if ("string" == typeof t6) {
      if (this.name == t6)
        return true;
      let e10 = this.prop(rW.group);
      return !!e10 && e10.indexOf(t6) > -1;
    }
    return this.id == t6;
  }
  static match(t6) {
    let e10 = /* @__PURE__ */ Object.create(null);
    for (let i10 in t6)
      for (let n10 of i10.split(" "))
        e10[n10] = t6[i10];
    return (t7) => {
      for (let i10 = t7.prop(rW.group), n10 = -1; n10 < (i10 ? i10.length : 0); n10++) {
        let s10 = e10[n10 < 0 ? t7.name : i10[n10]];
        if (s10)
          return s10;
      }
    };
  }
}
r_.none = new r_("", /* @__PURE__ */ Object.create(null), 0, 8);
class rj {
  constructor(t6) {
    this.types = t6;
    for (let e10 = 0; e10 < t6.length; e10++)
      if (t6[e10].id != e10)
        throw RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  extend() {
    for (var t6 = arguments.length, e10 = Array(t6), i10 = 0; i10 < t6; i10++)
      e10[i10] = arguments[i10];
    let n10 = [];
    for (let t7 of this.types) {
      let i11 = null;
      for (let n11 of e10) {
        let e11 = n11(t7);
        e11 && (i11 || (i11 = Object.assign({}, t7.props)), i11[e11[0].id] = e11[1]);
      }
      n10.push(i11 ? new r_(t7.name, i11, t7.id, t7.flags) : t7);
    }
    return new rj(n10);
  }
}
let rq = /* @__PURE__ */ new WeakMap(), rK = /* @__PURE__ */ new WeakMap();
(F = _ || (_ = {}))[F.ExcludeBuffers = 1] = "ExcludeBuffers", F[F.IncludeAnonymous = 2] = "IncludeAnonymous", F[F.IgnoreMounts = 4] = "IgnoreMounts", F[F.IgnoreOverlays = 8] = "IgnoreOverlays";
class r$ {
  constructor(t6, e10, i10, n10, s10) {
    if (this.type = t6, this.children = e10, this.positions = i10, this.length = n10, this.props = null, s10 && s10.length)
      for (let [t7, e11] of (this.props = /* @__PURE__ */ Object.create(null), s10))
        this.props["number" == typeof t7 ? t7 : t7.id] = e11;
  }
  toString() {
    let t6 = rF.get(this);
    if (t6 && !t6.overlay)
      return t6.tree.toString();
    let e10 = "";
    for (let t7 of this.children) {
      let i10 = t7.toString();
      i10 && (e10 && (e10 += ","), e10 += i10);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e10.length ? "(" + e10 + ")" : "") : e10;
  }
  cursor() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return new r4(this.topNode, t6);
  }
  cursorAt(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    let i10 = new r4(rq.get(this) || this.topNode);
    return i10.moveTo(t6, e10), rq.set(this, i10._tree), i10;
  }
  get topNode() {
    return new rQ(this, 0, 0, null);
  }
  resolve(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = rY(rq.get(this) || this.topNode, t6, e10, false);
    return rq.set(this, i10), i10;
  }
  resolveInner(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = rY(rK.get(this) || this.topNode, t6, e10, true);
    return rK.set(this, i10), i10;
  }
  resolveStack(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return function(t7, e11, i10) {
      let n10 = t7.resolveInner(e11, i10), s10 = null;
      for (let t10 = n10 instanceof rQ ? n10 : n10.context.parent; t10; t10 = t10.parent)
        if (t10.index < 0) {
          let r10 = t10.parent;
          (s10 || (s10 = [n10])).push(r10.resolve(e11, i10)), t10 = r10;
        } else {
          let r10 = rF.get(t10.tree);
          if (r10 && r10.overlay && r10.overlay[0].from <= e11 && r10.overlay[r10.overlay.length - 1].to >= e11) {
            let o10 = new rQ(r10.tree, r10.overlay[0].from + t10.from, -1, t10);
            (s10 || (s10 = [n10])).push(rY(o10, e11, i10, false));
          }
        }
      return s10 ? r3(s10) : n10;
    }(this, t6, e10);
  }
  iterate(t6) {
    let { enter: e10, leave: i10, from: n10 = 0, to: s10 = this.length } = t6, r10 = t6.mode || 0, o10 = (r10 & _.IncludeAnonymous) > 0;
    for (let t7 = this.cursor(r10 | _.IncludeAnonymous); ; ) {
      let r11 = false;
      if (t7.from <= s10 && t7.to >= n10 && (!o10 && t7.type.isAnonymous || false !== e10(t7))) {
        if (t7.firstChild())
          continue;
        r11 = true;
      }
      for (; r11 && i10 && (o10 || !t7.type.isAnonymous) && i10(t7), !t7.nextSibling(); ) {
        if (!t7.parent())
          return;
        r11 = true;
      }
    }
  }
  prop(t6) {
    return t6.perNode ? this.props ? this.props[t6.id] : void 0 : this.type.prop(t6);
  }
  get propValues() {
    let t6 = [];
    if (this.props)
      for (let e10 in this.props)
        t6.push([+e10, this.props[e10]]);
    return t6;
  }
  balance() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return this.children.length <= 8 ? this : r7(r_.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t7, e10, i10) => new r$(this.type, t7, e10, i10, this.propValues), t6.makeTree || ((t7, e10, i10) => new r$(r_.none, t7, e10, i10)));
  }
  static build(t6) {
    return function(t7) {
      var e10;
      let { buffer: i10, nodeSet: n10, maxBufferLength: s10 = rI, reused: r10 = [], minRepeatType: o10 = n10.types.length } = t7, l10 = Array.isArray(i10) ? new rU(i10, i10.length) : i10, h10 = n10.types, a5 = 0, c2 = 0;
      function d2(t10, e11, i11, s11, r11, o11, l11, h11) {
        let a6 = [], c3 = [];
        for (; t10.length > s11; )
          a6.push(t10.pop()), c3.push(e11.pop() + i11 - r11);
        t10.push(u2(n10.types[l11], a6, c3, o11 - r11, h11 - o11)), e11.push(r11 - i11);
      }
      function u2(t10, e11, i11, n11) {
        let s11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r11 = arguments.length > 5 ? arguments[5] : void 0;
        if (a5) {
          let t11 = [rW.contextHash, a5];
          r11 = r11 ? [t11].concat(r11) : [t11];
        }
        if (s11 > 25) {
          let t11 = [rW.lookAhead, s11];
          r11 = r11 ? [t11].concat(r11) : [t11];
        }
        return new r$(t10, e11, i11, n11, r11);
      }
      let f2 = [], p2 = [];
      for (; l10.pos > 0; )
        !function t10(e11, i11, f3, p3, g3, m2) {
          let { id: v2, start: w2, end: y2, size: b2 } = l10, x2 = c2;
          for (; b2 < 0; ) {
            if (l10.next(), -1 == b2) {
              let t11 = r10[v2];
              f3.push(t11), p3.push(w2 - e11);
              return;
            }
            if (-3 == b2) {
              a5 = v2;
              return;
            }
            if (-4 == b2) {
              c2 = v2;
              return;
            }
            throw RangeError(`Unrecognized record size: ${b2}`);
          }
          let k2 = h10[v2], S2, C2, A2 = w2 - e11;
          if (y2 - w2 <= s10 && (C2 = function(t11, e12) {
            let i12 = l10.fork(), n11 = 0, r11 = 0, h11 = 0, a6 = i12.end - s10, c3 = { size: 0, start: 0, skip: 0 };
            n:
              for (let s11 = i12.pos - t11; i12.pos > s11; ) {
                let t12 = i12.size;
                if (i12.id == e12 && t12 >= 0) {
                  c3.size = n11, c3.start = r11, c3.skip = h11, h11 += 4, n11 += 4, i12.next();
                  continue;
                }
                let l11 = i12.pos - t12;
                if (t12 < 0 || l11 < s11 || i12.start < a6)
                  break;
                let d3 = i12.id >= o10 ? 4 : 0, u3 = i12.start;
                for (i12.next(); i12.pos > l11; ) {
                  if (i12.size < 0) {
                    if (-3 == i12.size)
                      d3 += 4;
                    else
                      break n;
                  } else
                    i12.id >= o10 && (d3 += 4);
                  i12.next();
                }
                r11 = u3, n11 += t12, h11 += d3;
              }
            return (e12 < 0 || n11 == t11) && (c3.size = n11, c3.start = r11, c3.skip = h11), c3.size > 4 ? c3 : void 0;
          }(l10.pos - i11, g3))) {
            let t11 = new Uint16Array(C2.size - C2.skip), i12 = l10.pos - C2.size, s11 = t11.length;
            for (; l10.pos > i12; )
              s11 = function t12(e12, i13, n11) {
                let { id: s12, start: r11, end: h11, size: d3 } = l10;
                if (l10.next(), d3 >= 0 && s12 < o10) {
                  let o11 = n11;
                  if (d3 > 4) {
                    let s13 = l10.pos - (d3 - 4);
                    for (; l10.pos > s13; )
                      n11 = t12(e12, i13, n11);
                  }
                  i13[--n11] = o11, i13[--n11] = h11 - e12, i13[--n11] = r11 - e12, i13[--n11] = s12;
                } else
                  -3 == d3 ? a5 = s12 : -4 == d3 && (c2 = s12);
                return n11;
              }(C2.start, t11, s11);
            S2 = new rG(t11, y2 - C2.start, n10), A2 = C2.start - e11;
          } else {
            let e12 = l10.pos - b2;
            l10.next();
            let i12 = [], r11 = [], h11 = v2 >= o10 ? v2 : -1, a6 = 0, c3 = y2;
            for (; l10.pos > e12; )
              h11 >= 0 && l10.id == h11 && l10.size >= 0 ? (l10.end <= c3 - s10 && (d2(i12, r11, w2, a6, l10.end, c3, h11, x2), a6 = i12.length, c3 = l10.end), l10.next()) : m2 > 2500 ? function(t11, e13, i13, r12) {
                let o11 = [], h12 = 0, a7 = -1;
                for (; l10.pos > e13; ) {
                  let { id: t12, start: e14, end: i14, size: n11 } = l10;
                  if (n11 > 4)
                    l10.next();
                  else if (a7 > -1 && e14 < a7)
                    break;
                  else
                    a7 < 0 && (a7 = i14 - s10), o11.push(t12, e14, i14), h12++, l10.next();
                }
                if (h12) {
                  let e14 = new Uint16Array(4 * h12), s11 = o11[o11.length - 2];
                  for (let t12 = o11.length - 3, i14 = 0; t12 >= 0; t12 -= 3)
                    e14[i14++] = o11[t12], e14[i14++] = o11[t12 + 1] - s11, e14[i14++] = o11[t12 + 2] - s11, e14[i14++] = i14;
                  i13.push(new rG(e14, o11[2] - s11, n10)), r12.push(s11 - t11);
                }
              }(w2, e12, i12, r11) : t10(w2, e12, i12, r11, h11, m2 + 1);
            if (h11 >= 0 && a6 > 0 && a6 < i12.length && d2(i12, r11, w2, a6, w2, c3, h11, x2), i12.reverse(), r11.reverse(), h11 > -1 && a6 > 0) {
              let t11 = /* @__PURE__ */ function(t12) {
                return (e13, i13, n11) => {
                  let s11 = 0, r12 = e13.length - 1, o11, l11;
                  if (r12 >= 0 && (o11 = e13[r12]) instanceof r$) {
                    if (!r12 && o11.type == t12 && o11.length == n11)
                      return o11;
                    (l11 = o11.prop(rW.lookAhead)) && (s11 = i13[r12] + o11.length + l11);
                  }
                  return u2(t12, e13, i13, n11, s11);
                };
              }(k2);
              S2 = r7(k2, i12, r11, 0, i12.length, 0, y2 - w2, t11, t11);
            } else
              S2 = u2(k2, i12, r11, y2 - w2, x2 - y2);
          }
          f3.push(S2), p3.push(A2);
        }(t7.start || 0, t7.bufferStart || 0, f2, p2, -1, 0);
      let g2 = null !== (e10 = t7.length) && void 0 !== e10 ? e10 : f2.length ? p2[0] + f2[0].length : 0;
      return new r$(h10[t7.topID], f2.reverse(), p2.reverse(), g2);
    }(t6);
  }
}
r$.empty = new r$(r_.none, [], [], 0);
class rU {
  constructor(t6, e10) {
    this.buffer = t6, this.index = e10;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new rU(this.buffer, this.index);
  }
}
class rG {
  constructor(t6, e10, i10) {
    this.buffer = t6, this.length = e10, this.set = i10;
  }
  get type() {
    return r_.none;
  }
  toString() {
    let t6 = [];
    for (let e10 = 0; e10 < this.buffer.length; )
      t6.push(this.childString(e10)), e10 = this.buffer[e10 + 3];
    return t6.join(",");
  }
  childString(t6) {
    let e10 = this.buffer[t6], i10 = this.buffer[t6 + 3], n10 = this.set.types[e10], s10 = n10.name;
    if (/\W/.test(s10) && !n10.isError && (s10 = JSON.stringify(s10)), i10 == (t6 += 4))
      return s10;
    let r10 = [];
    for (; t6 < i10; )
      r10.push(this.childString(t6)), t6 = this.buffer[t6 + 3];
    return s10 + "(" + r10.join(",") + ")";
  }
  findChild(t6, e10, i10, n10, s10) {
    let { buffer: r10 } = this, o10 = -1;
    for (let l10 = t6; l10 != e10 && (!rJ(s10, n10, r10[l10 + 1], r10[l10 + 2]) || (o10 = l10, !(i10 > 0))); l10 = r10[l10 + 3])
      ;
    return o10;
  }
  slice(t6, e10, i10) {
    let n10 = this.buffer, s10 = new Uint16Array(e10 - t6), r10 = 0;
    for (let o10 = t6, l10 = 0; o10 < e10; ) {
      s10[l10++] = n10[o10++], s10[l10++] = n10[o10++] - i10;
      let e11 = s10[l10++] = n10[o10++] - i10;
      s10[l10++] = n10[o10++] - t6, r10 = Math.max(r10, e11);
    }
    return new rG(s10, r10, this.set);
  }
}
function rJ(t6, e10, i10, n10) {
  switch (t6) {
    case -2:
      return i10 < e10;
    case -1:
      return n10 >= e10 && i10 < e10;
    case 0:
      return i10 < e10 && n10 > e10;
    case 1:
      return i10 <= e10 && n10 > e10;
    case 2:
      return n10 > e10;
    case 4:
      return true;
  }
}
function rY(t6, e10, i10, n10) {
  for (var s10; t6.from == t6.to || (i10 < 1 ? t6.from >= e10 : t6.from > e10) || (i10 > -1 ? t6.to <= e10 : t6.to < e10); ) {
    let e11 = !n10 && t6 instanceof rQ && t6.index < 0 ? null : t6.parent;
    if (!e11)
      return t6;
    t6 = e11;
  }
  let r10 = n10 ? 0 : _.IgnoreOverlays;
  if (n10)
    for (let n11 = t6, o10 = n11.parent; o10; o10 = (n11 = o10).parent)
      n11 instanceof rQ && n11.index < 0 && (null === (s10 = o10.enter(e10, i10, r10)) || void 0 === s10 ? void 0 : s10.from) != n11.from && (t6 = o10);
  for (; ; ) {
    let n11 = t6.enter(e10, i10, r10);
    if (!n11)
      return t6;
    t6 = n11;
  }
}
class rX {
  cursor() {
    let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return new r4(this, t6);
  }
  getChild(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n10 = rZ(this, t6, e10, i10);
    return n10.length ? n10[0] : null;
  }
  getChildren(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return rZ(this, t6, e10, i10);
  }
  resolve(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return rY(this, t6, e10, false);
  }
  resolveInner(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return rY(this, t6, e10, true);
  }
  matchContext(t6) {
    return r0(this, t6);
  }
  enterUnfinishedNodesBefore(t6) {
    let e10 = this.childBefore(t6), i10 = this;
    for (; e10; ) {
      let t7 = e10.lastChild;
      if (!t7 || t7.to != e10.to)
        break;
      t7.type.isError && t7.from == t7.to ? (i10 = e10, e10 = t7.prevSibling) : e10 = t7;
    }
    return i10;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class rQ extends rX {
  constructor(t6, e10, i10, n10) {
    super(), this._tree = t6, this.from = e10, this.index = i10, this._parent = n10;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t6, e10, i10, n10) {
    let s10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    for (let r10 = this; ; ) {
      for (let { children: o10, positions: l10 } = r10._tree, h10 = e10 > 0 ? o10.length : -1; t6 != h10; t6 += e10) {
        let h11 = o10[t6], a5 = l10[t6] + r10.from;
        if (rJ(n10, i10, a5, a5 + h11.length)) {
          if (h11 instanceof rG) {
            if (s10 & _.ExcludeBuffers)
              continue;
            let o11 = h11.findChild(0, h11.buffer.length, e10, i10 - a5, n10);
            if (o11 > -1)
              return new r2(new r1(r10, h11, t6, a5), null, o11);
          } else if (s10 & _.IncludeAnonymous || !h11.type.isAnonymous || r5(h11)) {
            let o11;
            if (!(s10 & _.IgnoreMounts) && (o11 = rF.get(h11)) && !o11.overlay)
              return new rQ(o11.tree, a5, t6, r10);
            let l11 = new rQ(h11, a5, t6, r10);
            return s10 & _.IncludeAnonymous || !l11.type.isAnonymous ? l11 : l11.nextChild(e10 < 0 ? h11.children.length - 1 : 0, e10, i10, n10);
          }
        }
      }
      if (s10 & _.IncludeAnonymous || !r10.type.isAnonymous || (t6 = r10.index >= 0 ? r10.index + e10 : e10 < 0 ? -1 : r10._parent._tree.children.length, !(r10 = r10._parent)))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(t6) {
    return this.nextChild(0, 1, t6, 2);
  }
  childBefore(t6) {
    return this.nextChild(this._tree.children.length - 1, -1, t6, -2);
  }
  enter(t6, e10) {
    let i10, n10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    if (!(n10 & _.IgnoreOverlays) && (i10 = rF.get(this._tree)) && i10.overlay) {
      let n11 = t6 - this.from;
      for (let { from: t7, to: s10 } of i10.overlay)
        if ((e10 > 0 ? t7 <= n11 : t7 < n11) && (e10 < 0 ? s10 >= n11 : s10 > n11))
          return new rQ(i10.tree, i10.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t6, e10, n10);
  }
  nextSignificantParent() {
    let t6 = this;
    for (; t6.type.isAnonymous && t6._parent; )
      t6 = t6._parent;
    return t6;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function rZ(t6, e10, i10, n10) {
  let s10 = t6.cursor(), r10 = [];
  if (!s10.firstChild())
    return r10;
  if (null != i10) {
    for (let t7 = false; !t7; )
      if (t7 = s10.type.is(i10), !s10.nextSibling())
        return r10;
  }
  for (; ; ) {
    if (null != n10 && s10.type.is(n10))
      return r10;
    if (s10.type.is(e10) && r10.push(s10.node), !s10.nextSibling())
      return null == n10 ? r10 : [];
  }
}
function r0(t6, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10.length - 1;
  for (let n10 = t6.parent; i10 >= 0; n10 = n10.parent) {
    if (!n10)
      return false;
    if (!n10.type.isAnonymous) {
      if (e10[i10] && e10[i10] != n10.name)
        return false;
      i10--;
    }
  }
  return true;
}
class r1 {
  constructor(t6, e10, i10, n10) {
    this.parent = t6, this.buffer = e10, this.index = i10, this.start = n10;
  }
}
class r2 extends rX {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t6, e10, i10) {
    super(), this.context = t6, this._parent = e10, this.index = i10, this.type = t6.buffer.set.types[t6.buffer.buffer[i10]];
  }
  child(t6, e10, i10) {
    let { buffer: n10 } = this.context, s10 = n10.findChild(this.index + 4, n10.buffer[this.index + 3], t6, e10 - this.context.start, i10);
    return s10 < 0 ? null : new r2(this.context, this, s10);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(t6) {
    return this.child(1, t6, 2);
  }
  childBefore(t6) {
    return this.child(-1, t6, -2);
  }
  enter(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    if (i10 & _.ExcludeBuffers)
      return null;
    let { buffer: n10 } = this.context, s10 = n10.findChild(this.index + 4, n10.buffer[this.index + 3], e10 > 0 ? 1 : -1, t6 - this.context.start, e10);
    return s10 < 0 ? null : new r2(this.context, this, s10);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t6) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + t6, t6, 0, 4);
  }
  get nextSibling() {
    let { buffer: t6 } = this.context, e10 = t6.buffer[this.index + 3];
    return e10 < (this._parent ? t6.buffer[this._parent.index + 3] : t6.buffer.length) ? new r2(this.context, this._parent, e10) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t6 } = this.context, e10 = this._parent ? this._parent.index + 4 : 0;
    return this.index == e10 ? this.externalSibling(-1) : new r2(this.context, this._parent, t6.findChild(e10, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let t6 = [], e10 = [], { buffer: i10 } = this.context, n10 = this.index + 4, s10 = i10.buffer[this.index + 3];
    if (s10 > n10) {
      let r10 = i10.buffer[this.index + 1];
      t6.push(i10.slice(n10, s10, r10)), e10.push(0);
    }
    return new r$(this.type, t6, e10, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function r3(t6) {
  if (!t6.length)
    return null;
  let e10 = 0, i10 = t6[0];
  for (let n11 = 1; n11 < t6.length; n11++) {
    let s11 = t6[n11];
    (s11.from > i10.from || s11.to < i10.to) && (i10 = s11, e10 = n11);
  }
  let n10 = i10 instanceof rQ && i10.index < 0 ? null : i10.parent, s10 = t6.slice();
  return n10 ? s10[e10] = n10 : s10.splice(e10, 1), new r8(s10, i10);
}
class r8 {
  constructor(t6, e10) {
    this.heads = t6, this.node = e10;
  }
  get next() {
    return r3(this.heads);
  }
}
class r4 {
  get name() {
    return this.type.name;
  }
  constructor(t6, e10 = 0) {
    if (this.mode = e10, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t6 instanceof rQ)
      this.yieldNode(t6);
    else {
      this._tree = t6.context.parent, this.buffer = t6.context;
      for (let e11 = t6._parent; e11; e11 = e11._parent)
        this.stack.unshift(e11.index);
      this.bufferNode = t6, this.yieldBuf(t6.index);
    }
  }
  yieldNode(t6) {
    return !!t6 && (this._tree = t6, this.type = t6.type, this.from = t6.from, this.to = t6.to, true);
  }
  yieldBuf(t6, e10) {
    this.index = t6;
    let { start: i10, buffer: n10 } = this.buffer;
    return this.type = e10 || n10.set.types[n10.buffer[t6]], this.from = i10 + n10.buffer[t6 + 1], this.to = i10 + n10.buffer[t6 + 2], true;
  }
  yield(t6) {
    return !!t6 && (t6 instanceof rQ ? (this.buffer = null, this.yieldNode(t6)) : (this.buffer = t6.context, this.yieldBuf(t6.index, t6.type)));
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(t6, e10, i10) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(t6 < 0 ? this._tree._tree.children.length - 1 : 0, t6, e10, i10, this.mode));
    let { buffer: n10 } = this.buffer, s10 = n10.findChild(this.index + 4, n10.buffer[this.index + 3], t6, e10 - this.buffer.start, i10);
    return !(s10 < 0) && (this.stack.push(this.index), this.yieldBuf(s10));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(t6) {
    return this.enterChild(1, t6, 2);
  }
  childBefore(t6) {
    return this.enterChild(-1, t6, -2);
  }
  enter(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
    return this.buffer ? !(i10 & _.ExcludeBuffers) && this.enterChild(1, t6, e10) : this.yield(this._tree.enter(t6, e10, i10));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & _.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let t6 = this.mode & _.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t6);
  }
  sibling(t6) {
    if (!this.buffer)
      return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t6, t6, 0, 4, this.mode));
    let { buffer: e10 } = this.buffer, i10 = this.stack.length - 1;
    if (t6 < 0) {
      let t7 = i10 < 0 ? 0 : this.stack[i10] + 4;
      if (this.index != t7)
        return this.yieldBuf(e10.findChild(t7, this.index, -1, 0, 4));
    } else {
      let t7 = e10.buffer[this.index + 3];
      if (t7 < (i10 < 0 ? e10.buffer.length : e10.buffer[this.stack[i10] + 3]))
        return this.yieldBuf(t7);
    }
    return i10 < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + t6, t6, 0, 4, this.mode));
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t6) {
    let e10, i10, { buffer: n10 } = this;
    if (n10) {
      if (t6 > 0) {
        if (this.index < n10.buffer.buffer.length)
          return false;
      } else
        for (let t7 = 0; t7 < this.index; t7++)
          if (n10.buffer.buffer[t7 + 3] < this.index)
            return false;
      ({ index: e10, parent: i10 } = n10);
    } else
      ({ index: e10, _parent: i10 } = this._tree);
    for (; i10; { index: e10, _parent: i10 } = i10)
      if (e10 > -1)
        for (let n11 = e10 + t6, s10 = t6 < 0 ? -1 : i10._tree.children.length; n11 != s10; n11 += t6) {
          let t7 = i10._tree.children[n11];
          if (this.mode & _.IncludeAnonymous || t7 instanceof rG || !t7.type.isAnonymous || r5(t7))
            return false;
        }
    return true;
  }
  move(t6, e10) {
    if (e10 && this.enterChild(t6, 0, 4))
      return true;
    for (; ; ) {
      if (this.sibling(t6))
        return true;
      if (this.atLastNode(t6) || !this.parent())
        return false;
    }
  }
  next() {
    let t6 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return this.move(1, t6);
  }
  prev() {
    let t6 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return this.move(-1, t6);
  }
  moveTo(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    for (; (this.from == this.to || (e10 < 1 ? this.from >= t6 : this.from > t6) || (e10 > -1 ? this.to <= t6 : this.to < t6)) && this.parent(); )
      ;
    for (; this.enterChild(1, t6, e10); )
      ;
    return this;
  }
  get node() {
    if (!this.buffer)
      return this._tree;
    let t6 = this.bufferNode, e10 = null, i10 = 0;
    if (t6 && t6.context == this.buffer)
      n:
        for (let n10 = this.index, s10 = this.stack.length; s10 >= 0; ) {
          for (let r10 = t6; r10; r10 = r10._parent)
            if (r10.index == n10) {
              if (n10 == this.index)
                return r10;
              e10 = r10, i10 = s10 + 1;
              break n;
            }
          n10 = this.stack[--s10];
        }
    for (let t7 = i10; t7 < this.stack.length; t7++)
      e10 = new r2(this.buffer, e10, this.stack[t7]);
    return this.bufferNode = new r2(this.buffer, e10, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(t6, e10) {
    for (let i10 = 0; ; ) {
      let n10 = false;
      if (this.type.isAnonymous || false !== t6(this)) {
        if (this.firstChild()) {
          i10++;
          continue;
        }
        this.type.isAnonymous || (n10 = true);
      }
      for (; n10 && e10 && e10(this), n10 = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!i10)
          return;
        this.parent(), i10--, n10 = true;
      }
    }
  }
  matchContext(t6) {
    if (!this.buffer)
      return r0(this.node, t6);
    let { buffer: e10 } = this.buffer, { types: i10 } = e10.set;
    for (let n10 = t6.length - 1, s10 = this.stack.length - 1; n10 >= 0; s10--) {
      if (s10 < 0)
        return r0(this.node, t6, n10);
      let r10 = i10[e10.buffer[this.stack[s10]]];
      if (!r10.isAnonymous) {
        if (t6[n10] && t6[n10] != r10.name)
          return false;
        n10--;
      }
    }
    return true;
  }
}
function r5(t6) {
  return t6.children.some((t7) => t7 instanceof rG || !t7.type.isAnonymous || r5(t7));
}
let r9 = /* @__PURE__ */ new WeakMap();
function r6(t6, e10) {
  if (!t6.isAnonymous || e10 instanceof rG || e10.type != t6)
    return 1;
  let i10 = r9.get(e10);
  if (null == i10) {
    for (let n10 of (i10 = 1, e10.children)) {
      if (n10.type != t6 || !(n10 instanceof r$)) {
        i10 = 1;
        break;
      }
      i10 += r6(t6, n10);
    }
    r9.set(e10, i10);
  }
  return i10;
}
function r7(t6, e10, i10, n10, s10, r10, o10, l10, h10) {
  let a5 = 0;
  for (let i11 = n10; i11 < s10; i11++)
    a5 += r6(t6, e10[i11]);
  let c2 = Math.ceil(1.5 * a5 / 8), d2 = [], u2 = [];
  return !function e11(i11, n11, s11, o11, l11) {
    for (let a6 = s11; a6 < o11; ) {
      let s12 = a6, f2 = n11[a6], p2 = r6(t6, i11[a6]);
      for (a6++; a6 < o11; a6++) {
        let e12 = r6(t6, i11[a6]);
        if (p2 + e12 >= c2)
          break;
        p2 += e12;
      }
      if (a6 == s12 + 1) {
        if (p2 > c2) {
          let t7 = i11[s12];
          e11(t7.children, t7.positions, 0, t7.children.length, n11[s12] + l11);
          continue;
        }
        d2.push(i11[s12]);
      } else {
        let e12 = n11[a6 - 1] + i11[a6 - 1].length - f2;
        d2.push(r7(t6, i11, n11, s12, a6, f2, e12, null, h10));
      }
      u2.push(f2 + l11 - r10);
    }
  }(e10, i10, n10, s10, 0), (l10 || h10)(d2, u2, o10);
}
class ot {
  constructor(t6, e10, i10, n10, s10 = false, r10 = false) {
    this.from = t6, this.to = e10, this.tree = i10, this.offset = n10, this.open = (s10 ? 1 : 0) | (r10 ? 2 : 0);
  }
  get openStart() {
    return (1 & this.open) > 0;
  }
  get openEnd() {
    return (2 & this.open) > 0;
  }
  static addTree(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = [new ot(0, t6.length, t6, 0, false, i10)];
    for (let i11 of e10)
      i11.to > t6.length && n10.push(i11);
    return n10;
  }
  static applyChanges(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
    if (!e10.length)
      return t6;
    let n10 = [], s10 = 1, r10 = t6.length ? t6[0] : null;
    for (let o10 = 0, l10 = 0, h10 = 0; ; o10++) {
      let a5 = o10 < e10.length ? e10[o10] : null, c2 = a5 ? a5.fromA : 1e9;
      if (c2 - l10 >= i10)
        for (; r10 && r10.from < c2; ) {
          let e11 = r10;
          if (l10 >= e11.from || c2 <= e11.to || h10) {
            let t7 = Math.max(e11.from, l10) - h10, i11 = Math.min(e11.to, c2) - h10;
            e11 = t7 >= i11 ? null : new ot(t7, i11, e11.tree, e11.offset + h10, o10 > 0, !!a5);
          }
          if (e11 && n10.push(e11), r10.to > c2)
            break;
          r10 = s10 < t6.length ? t6[s10++] : null;
        }
      if (!a5)
        break;
      l10 = a5.toA, h10 = a5.toA - a5.toB;
    }
    return n10;
  }
}
class oe {
  startParse(t6, e10, i10) {
    return "string" == typeof t6 && (t6 = new oi(t6)), i10 = i10 ? i10.length ? i10.map((t7) => new rH(t7.from, t7.to)) : [new rH(0, 0)] : [new rH(0, t6.length)], this.createParse(t6, e10 || [], i10);
  }
  parse(t6, e10, i10) {
    let n10 = this.startParse(t6, e10, i10);
    for (; ; ) {
      let t7 = n10.advance();
      if (t7)
        return t7;
    }
  }
}
class oi {
  constructor(t6) {
    this.string = t6;
  }
  get length() {
    return this.string.length;
  }
  chunk(t6) {
    return this.string.slice(t6);
  }
  get lineChunks() {
    return false;
  }
  read(t6, e10) {
    return this.string.slice(t6, e10);
  }
}
new rW({ perNode: true });
let on = 0;
class os {
  constructor(t6, e10, i10) {
    this.set = t6, this.base = e10, this.modified = i10, this.id = on++;
  }
  static define(t6) {
    if (null == t6 ? void 0 : t6.base)
      throw Error("Can not derive from a modified tag");
    let e10 = new os([], null, []);
    if (e10.set.push(e10), t6)
      for (let i10 of t6.set)
        e10.set.push(i10);
    return e10;
  }
  static defineModifier() {
    let t6 = new oo();
    return (e10) => e10.modified.indexOf(t6) > -1 ? e10 : oo.get(e10.base || e10, e10.modified.concat(t6).sort((t7, e11) => t7.id - e11.id));
  }
}
let or = 0;
class oo {
  constructor() {
    this.instances = [], this.id = or++;
  }
  static get(t6, e10) {
    if (!e10.length)
      return t6;
    let i10 = e10[0].instances.find((i11) => {
      var n11;
      return i11.base == t6 && (n11 = i11.modified, e10.length == n11.length && e10.every((t7, e11) => t7 == n11[e11]));
    });
    if (i10)
      return i10;
    let n10 = [], s10 = new os(n10, t6, e10);
    for (let t7 of e10)
      t7.instances.push(s10);
    let r10 = function(t7) {
      let e11 = [[]];
      for (let i11 = 0; i11 < t7.length; i11++)
        for (let n11 = 0, s11 = e11.length; n11 < s11; n11++)
          e11.push(e11[n11].concat(t7[i11]));
      return e11.sort((t10, e12) => e12.length - t10.length);
    }(e10);
    for (let e11 of t6.set)
      if (!e11.modified.length)
        for (let t7 of r10)
          n10.push(oo.get(e11, t7));
    return s10;
  }
}
function ol(t6) {
  let e10 = /* @__PURE__ */ Object.create(null);
  for (let i10 in t6) {
    let n10 = t6[i10];
    for (let t7 of (Array.isArray(n10) || (n10 = [n10]), i10.split(" ")))
      if (t7) {
        let i11 = [], s10 = 2, r10 = t7;
        for (let e11 = 0; ; ) {
          if ("..." == r10 && e11 > 0 && e11 + 3 == t7.length) {
            s10 = 1;
            break;
          }
          let n11 = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r10);
          if (!n11)
            throw RangeError("Invalid path: " + t7);
          if (i11.push("*" == n11[0] ? "" : '"' == n11[0][0] ? JSON.parse(n11[0]) : n11[0]), (e11 += n11[0].length) == t7.length)
            break;
          let o11 = t7[e11++];
          if (e11 == t7.length && "!" == o11) {
            s10 = 0;
            break;
          }
          if ("/" != o11)
            throw RangeError("Invalid path: " + t7);
          r10 = t7.slice(e11);
        }
        let o10 = i11.length - 1, l10 = i11[o10];
        if (!l10)
          throw RangeError("Invalid path: " + t7);
        let h10 = new oa(n10, s10, o10 > 0 ? i11.slice(0, o10) : null);
        e10[l10] = h10.sort(e10[l10]);
      }
  }
  return oh.add(e10);
}
let oh = new rW();
class oa {
  constructor(t6, e10, i10, n10) {
    this.tags = t6, this.mode = e10, this.context = i10, this.next = n10;
  }
  get opaque() {
    return 0 == this.mode;
  }
  get inherit() {
    return 1 == this.mode;
  }
  sort(t6) {
    return !t6 || t6.depth < this.depth ? (this.next = t6, this) : (t6.next = this.sort(t6.next), t6);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
function oc(t6, e10) {
  let i10 = /* @__PURE__ */ Object.create(null);
  for (let e11 of t6)
    if (Array.isArray(e11.tag))
      for (let t7 of e11.tag)
        i10[t7.id] = e11.class;
    else
      i10[e11.tag.id] = e11.class;
  let { scope: n10, all: s10 = null } = e10 || {};
  return { style: (t7) => {
    let e11 = s10;
    for (let n11 of t7)
      for (let t10 of n11.set) {
        let n12 = i10[t10.id];
        if (n12) {
          e11 = e11 ? e11 + " " + n12 : n12;
          break;
        }
      }
    return e11;
  }, scope: n10 };
}
oa.empty = new oa([], 2, null);
class od {
  constructor(t6, e10, i10) {
    this.at = t6, this.highlighters = e10, this.span = i10, this.class = "";
  }
  startSpan(t6, e10) {
    e10 != this.class && (this.flush(t6), t6 > this.at && (this.at = t6), this.class = e10);
  }
  flush(t6) {
    t6 > this.at && this.class && this.span(this.at, t6, this.class);
  }
  highlightRange(t6, e10, i10, n10, s10) {
    let { type: r10, from: o10, to: l10 } = t6;
    if (o10 >= i10 || l10 <= e10)
      return;
    r10.isTop && (s10 = this.highlighters.filter((t7) => !t7.scope || t7.scope(r10)));
    let h10 = n10, a5 = function(t7) {
      let e11 = t7.type.prop(oh);
      for (; e11 && e11.context && !t7.matchContext(e11.context); )
        e11 = e11.next;
      return e11 || null;
    }(t6) || oa.empty, c2 = function(t7, e11) {
      let i11 = null;
      for (let n11 of t7) {
        let t10 = n11.style(e11);
        t10 && (i11 = i11 ? i11 + " " + t10 : t10);
      }
      return i11;
    }(s10, a5.tags);
    if (c2 && (h10 && (h10 += " "), h10 += c2, 1 == a5.mode && (n10 += (n10 ? " " : "") + c2)), this.startSpan(Math.max(e10, o10), h10), a5.opaque)
      return;
    let d2 = t6.tree && t6.tree.prop(rW.mounted);
    if (d2 && d2.overlay) {
      let r11 = t6.node.enter(d2.overlay[0].from + o10, 1), a6 = this.highlighters.filter((t7) => !t7.scope || t7.scope(d2.tree.type)), c3 = t6.firstChild();
      for (let u2 = 0, f2 = o10; ; u2++) {
        let p2 = u2 < d2.overlay.length ? d2.overlay[u2] : null, g2 = p2 ? p2.from + o10 : l10, m2 = Math.max(e10, f2), v2 = Math.min(i10, g2);
        if (m2 < v2 && c3)
          for (; t6.from < v2 && (this.highlightRange(t6, m2, v2, n10, s10), this.startSpan(Math.min(v2, t6.to), h10), !(t6.to >= g2) && t6.nextSibling()); )
            ;
        if (!p2 || g2 > i10)
          break;
        (f2 = p2.to + o10) > e10 && (this.highlightRange(r11.cursor(), Math.max(e10, p2.from + o10), Math.min(i10, f2), "", a6), this.startSpan(Math.min(i10, f2), h10));
      }
      c3 && t6.parent();
    } else if (t6.firstChild()) {
      d2 && (n10 = "");
      do {
        if (t6.to <= e10)
          continue;
        if (t6.from >= i10)
          break;
        this.highlightRange(t6, e10, i10, n10, s10), this.startSpan(Math.min(i10, t6.to), h10);
      } while (t6.nextSibling());
      t6.parent();
    }
  }
}
let ou = os.define, of = ou(), op = ou(), og = ou(op), om = ou(op), ov = ou(), ow = ou(ov), oy = ou(ov), ob = ou(), ox = ou(ob), ok = ou(), oS = ou(), oC = ou(), oA = ou(oC), oM = ou(), oO = { comment: of, lineComment: ou(of), blockComment: ou(of), docComment: ou(of), name: op, variableName: ou(op), typeName: og, tagName: ou(og), propertyName: om, attributeName: ou(om), className: ou(op), labelName: ou(op), namespace: ou(op), macroName: ou(op), literal: ov, string: ow, docString: ou(ow), character: ou(ow), attributeValue: ou(ow), number: oy, integer: ou(oy), float: ou(oy), bool: ou(ov), regexp: ou(ov), escape: ou(ov), color: ou(ov), url: ou(ov), keyword: ok, self: ou(ok), null: ou(ok), atom: ou(ok), unit: ou(ok), modifier: ou(ok), operatorKeyword: ou(ok), controlKeyword: ou(ok), definitionKeyword: ou(ok), moduleKeyword: ou(ok), operator: oS, derefOperator: ou(oS), arithmeticOperator: ou(oS), logicOperator: ou(oS), bitwiseOperator: ou(oS), compareOperator: ou(oS), updateOperator: ou(oS), definitionOperator: ou(oS), typeOperator: ou(oS), controlOperator: ou(oS), punctuation: oC, separator: ou(oC), bracket: oA, angleBracket: ou(oA), squareBracket: ou(oA), paren: ou(oA), brace: ou(oA), content: ob, heading: ox, heading1: ou(ox), heading2: ou(ox), heading3: ou(ox), heading4: ou(ox), heading5: ou(ox), heading6: ou(ox), contentSeparator: ou(ob), list: ou(ob), quote: ou(ob), emphasis: ou(ob), strong: ou(ob), link: ou(ob), monospace: ou(ob), strikethrough: ou(ob), inserted: ou(), deleted: ou(), changed: ou(), invalid: ou(), meta: oM, documentMeta: ou(oM), annotation: ou(oM), processingInstruction: ou(oM), definition: os.defineModifier(), constant: os.defineModifier(), function: os.defineModifier(), standard: os.defineModifier(), local: os.defineModifier(), special: os.defineModifier() }, oD = oc([{ tag: oO.link, class: "tok-link" }, { tag: oO.heading, class: "tok-heading" }, { tag: oO.emphasis, class: "tok-emphasis" }, { tag: oO.strong, class: "tok-strong" }, { tag: oO.keyword, class: "tok-keyword" }, { tag: oO.atom, class: "tok-atom" }, { tag: oO.bool, class: "tok-bool" }, { tag: oO.url, class: "tok-url" }, { tag: oO.labelName, class: "tok-labelName" }, { tag: oO.inserted, class: "tok-inserted" }, { tag: oO.deleted, class: "tok-deleted" }, { tag: oO.literal, class: "tok-literal" }, { tag: oO.string, class: "tok-string" }, { tag: oO.number, class: "tok-number" }, { tag: [oO.regexp, oO.escape, oO.special(oO.string)], class: "tok-string2" }, { tag: oO.variableName, class: "tok-variableName" }, { tag: oO.local(oO.variableName), class: "tok-variableName tok-local" }, { tag: oO.definition(oO.variableName), class: "tok-variableName tok-definition" }, { tag: oO.special(oO.variableName), class: "tok-variableName2" }, { tag: oO.definition(oO.propertyName), class: "tok-propertyName tok-definition" }, { tag: oO.typeName, class: "tok-typeName" }, { tag: oO.namespace, class: "tok-namespace" }, { tag: oO.className, class: "tok-className" }, { tag: oO.macroName, class: "tok-macroName" }, { tag: oO.propertyName, class: "tok-propertyName" }, { tag: oO.operator, class: "tok-operator" }, { tag: oO.comment, class: "tok-comment" }, { tag: oO.meta, class: "tok-meta" }, { tag: oO.invalid, class: "tok-invalid" }, { tag: oO.punctuation, class: "tok-punctuation" }]), oT = new rW(), oE = new rW();
class oR {
  constructor(t6, e10, i10 = [], n10 = "") {
    this.data = t6, this.name = n10, tV.prototype.hasOwnProperty("tree") || Object.defineProperty(tV.prototype, "tree", { get() {
      return oL(this);
    } }), this.parser = e10, this.extension = [oj.of(this), tV.languageData.of((t7, e11, i11) => {
      let n11 = oB(t7, e11, i11), s10 = n11.type.prop(oT);
      if (!s10)
        return [];
      let r10 = t7.facet(s10), o10 = n11.type.prop(oE);
      if (o10) {
        let s11 = n11.resolve(e11 - n11.from, i11);
        for (let e12 of o10)
          if (e12.test(s11, t7)) {
            let i12 = t7.facet(e12.facet);
            return "replace" == e12.type ? i12 : i12.concat(r10);
          }
      }
      return r10;
    })].concat(i10);
  }
  isActiveAt(t6, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
    return oB(t6, e10, i10).type.prop(oT) == this.data;
  }
  findRegions(t6) {
    let e10 = t6.facet(oj);
    if ((null == e10 ? void 0 : e10.data) == this.data)
      return [{ from: 0, to: t6.doc.length }];
    if (!e10 || !e10.allowsNesting)
      return [];
    let i10 = [], n10 = (t7, e11) => {
      if (t7.prop(oT) == this.data) {
        i10.push({ from: e11, to: e11 + t7.length });
        return;
      }
      let s10 = t7.prop(rW.mounted);
      if (s10) {
        if (s10.tree.prop(oT) == this.data) {
          if (s10.overlay)
            for (let t10 of s10.overlay)
              i10.push({ from: t10.from + e11, to: t10.to + e11 });
          else
            i10.push({ from: e11, to: e11 + t7.length });
          return;
        }
        if (s10.overlay) {
          let t10 = i10.length;
          if (n10(s10.tree, s10.overlay[0].from + e11), i10.length > t10)
            return;
        }
      }
      for (let i11 = 0; i11 < t7.children.length; i11++) {
        let s11 = t7.children[i11];
        s11 instanceof r$ && n10(s11, t7.positions[i11] + e11);
      }
    };
    return n10(oL(t6), 0), i10;
  }
  get allowsNesting() {
    return true;
  }
}
function oB(t6, e10, i10) {
  let n10 = t6.facet(oj), s10 = oL(t6).topNode;
  if (!n10 || n10.allowsNesting)
    for (let t7 = s10; t7; t7 = t7.enter(e10, i10, _.ExcludeBuffers))
      t7.type.isTop && (s10 = t7);
  return s10;
}
oR.setState = tT.define();
class oP extends oR {
  constructor(t6, e10, i10) {
    super(t6, e10, [], i10), this.parser = e10;
  }
  static define(t6) {
    var e10;
    let i10 = (e10 = t6.languageData, tn.define({ combine: e10 ? (t7) => t7.concat(e10) : void 0 }));
    return new oP(i10, t6.parser.configure({ props: [oT.add((t7) => t7.isTop ? i10 : void 0)] }), t6.name);
  }
  configure(t6, e10) {
    return new oP(this.data, this.parser.configure(t6), e10 || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function oL(t6) {
  let e10 = t6.field(oR.state, false);
  return e10 ? e10.tree : r$.empty;
}
class oN {
  constructor(t6) {
    this.doc = t6, this.cursorPos = 0, this.string = "", this.cursor = t6.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t6) {
    return this.string = this.cursor.next(t6 - this.cursorPos).value, this.cursorPos = t6 + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t6) {
    return this.syncTo(t6), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(t6, e10) {
    let i10 = this.cursorPos - this.string.length;
    return t6 < i10 || e10 >= this.cursorPos ? this.doc.sliceString(t6, e10) : this.string.slice(t6 - i10, e10 - i10);
  }
}
let oI = null;
class oV {
  constructor(t6, e10, i10 = [], n10, s10, r10, o10, l10) {
    this.parser = t6, this.state = e10, this.fragments = i10, this.tree = n10, this.treeLen = s10, this.viewport = r10, this.skipped = o10, this.scheduleOn = l10, this.parse = null, this.tempSkipped = [];
  }
  static create(t6, e10, i10) {
    return new oV(t6, e10, [], r$.empty, 0, i10, [], null);
  }
  startParse() {
    return this.parser.startParse(new oN(this.state.doc), this.fragments);
  }
  work(t6, e10) {
    return (null != e10 && e10 >= this.state.doc.length && (e10 = void 0), this.tree != r$.empty && this.isDone(null != e10 ? e10 : this.state.doc.length)) ? (this.takeTree(), true) : this.withContext(() => {
      var i10;
      if ("number" == typeof t6) {
        let e11 = Date.now() + t6;
        t6 = () => Date.now() > e11;
      }
      for (this.parse || (this.parse = this.startParse()), null != e10 && (null == this.parse.stoppedAt || this.parse.stoppedAt > e10) && e10 < this.state.doc.length && this.parse.stopAt(e10); ; ) {
        let n10 = this.parse.advance();
        if (n10) {
          if (this.fragments = this.withoutTempSkipped(ot.addTree(n10, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (i10 = this.parse.stoppedAt) && void 0 !== i10 ? i10 : this.state.doc.length, this.tree = n10, this.parse = null, !(this.treeLen < (null != e10 ? e10 : this.state.doc.length)))
            return true;
          this.parse = this.startParse();
        }
        if (t6())
          return false;
      }
    });
  }
  takeTree() {
    let t6, e10;
    this.parse && (t6 = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > t6) && this.parse.stopAt(t6), this.withContext(() => {
      for (; !(e10 = this.parse.advance()); )
        ;
    }), this.treeLen = t6, this.tree = e10, this.fragments = this.withoutTempSkipped(ot.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(t6) {
    let e10 = oI;
    oI = this;
    try {
      return t6();
    } finally {
      oI = e10;
    }
  }
  withoutTempSkipped(t6) {
    for (let e10; e10 = this.tempSkipped.pop(); )
      t6 = oH(t6, e10.from, e10.to);
    return t6;
  }
  changes(t6, e10) {
    let { fragments: i10, tree: n10, treeLen: s10, viewport: r10, skipped: o10 } = this;
    if (this.takeTree(), !t6.empty) {
      let e11 = [];
      if (t6.iterChangedRanges((t7, i11, n11, s11) => e11.push({ fromA: t7, toA: i11, fromB: n11, toB: s11 })), i10 = ot.applyChanges(i10, e11), n10 = r$.empty, s10 = 0, r10 = { from: t6.mapPos(r10.from, -1), to: t6.mapPos(r10.to, 1) }, this.skipped.length)
        for (let e12 of (o10 = [], this.skipped)) {
          let i11 = t6.mapPos(e12.from, 1), n11 = t6.mapPos(e12.to, -1);
          i11 < n11 && o10.push({ from: i11, to: n11 });
        }
    }
    return new oV(this.parser, e10, i10, n10, s10, r10, o10, this.scheduleOn);
  }
  updateViewport(t6) {
    if (this.viewport.from == t6.from && this.viewport.to == t6.to)
      return false;
    this.viewport = t6;
    let e10 = this.skipped.length;
    for (let e11 = 0; e11 < this.skipped.length; e11++) {
      let { from: i10, to: n10 } = this.skipped[e11];
      i10 < t6.to && n10 > t6.from && (this.fragments = oH(this.fragments, i10, n10), this.skipped.splice(e11--, 1));
    }
    return !(this.skipped.length >= e10) && (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(t6, e10) {
    this.skipped.push({ from: t6, to: e10 });
  }
  static getSkippingParser(t6) {
    return new class extends oe {
      createParse(e10, i10, n10) {
        let s10 = n10[0].from, r10 = n10[n10.length - 1].to;
        return { parsedPos: s10, advance() {
          let e11 = oI;
          if (e11) {
            for (let t7 of n10)
              e11.tempSkipped.push(t7);
            t6 && (e11.scheduleOn = e11.scheduleOn ? Promise.all([e11.scheduleOn, t6]) : t6);
          }
          return this.parsedPos = r10, new r$(r_.none, [], [], r10 - s10);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(t6) {
    t6 = Math.min(t6, this.state.doc.length);
    let e10 = this.fragments;
    return this.treeLen >= t6 && e10.length && 0 == e10[0].from && e10[0].to >= t6;
  }
  static get() {
    return oI;
  }
}
function oH(t6, e10, i10) {
  return ot.applyChanges(t6, [{ fromA: e10, toA: i10, fromB: e10, toB: i10 }]);
}
class oW {
  constructor(t6) {
    this.context = t6, this.tree = t6.tree;
  }
  apply(t6) {
    if (!t6.docChanged && this.tree == this.context.tree)
      return this;
    let e10 = this.context.changes(t6.changes, t6.state), i10 = this.context.treeLen == t6.startState.doc.length ? void 0 : Math.max(t6.changes.mapPos(this.context.treeLen), e10.viewport.to);
    return e10.work(20, i10) || e10.takeTree(), new oW(e10);
  }
  static init(t6) {
    let e10 = Math.min(3e3, t6.doc.length), i10 = oV.create(t6.facet(oj).parser, t6, { from: 0, to: e10 });
    return i10.work(20, e10) || i10.takeTree(), new oW(i10);
  }
}
oR.state = ta.define({ create: oW.init, update(t6, e10) {
  for (let t7 of e10.effects)
    if (t7.is(oR.setState))
      return t7.value;
  return e10.startState.facet(oj) != e10.state.facet(oj) ? oW.init(e10.state) : t6.apply(e10);
} });
let oF = (t6) => {
  let e10 = setTimeout(() => t6(), 500);
  return () => clearTimeout(e10);
};
"undefined" != typeof requestIdleCallback && (oF = (t6) => {
  let e10 = -1, i10 = setTimeout(() => {
    e10 = requestIdleCallback(t6, { timeout: 400 });
  }, 100);
  return () => e10 < 0 ? clearTimeout(i10) : cancelIdleCallback(e10);
});
let oz = "undefined" != typeof navigator && (null === (j = navigator.scheduling) || void 0 === j ? void 0 : j.isInputPending) ? () => navigator.scheduling.isInputPending() : null, o_ = iL.fromClass(class {
  constructor(t6) {
    this.view = t6, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t6) {
    let e10 = this.view.state.field(oR.state).context;
    (e10.updateViewport(t6.view.viewport) || this.view.viewport.to > e10.treeLen) && this.scheduleWork(), (t6.docChanged || t6.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e10);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t6 } = this.view, e10 = t6.field(oR.state);
    e10.tree == e10.context.tree && e10.context.isDone(t6.doc.length) || (this.working = oF(this.work));
  }
  work(t6) {
    this.working = null;
    let e10 = Date.now();
    if (this.chunkEnd < e10 && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e10 + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i10, viewport: { to: n10 } } = this.view, s10 = i10.field(oR.state);
    if (s10.tree == s10.context.tree && s10.context.isDone(n10 + 1e5))
      return;
    let r10 = Date.now() + Math.min(this.chunkBudget, 100, t6 && !oz ? Math.max(25, t6.timeRemaining() - 5) : 1e9), o10 = s10.context.treeLen < n10 && i10.doc.length > n10 + 1e3, l10 = s10.context.work(() => oz && oz() || Date.now() > r10, n10 + (o10 ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e10, (l10 || this.chunkBudget <= 0) && (s10.context.takeTree(), this.view.dispatch({ effects: oR.setState.of(new oW(s10.context)) })), this.chunkBudget > 0 && !(l10 && !o10) && this.scheduleWork(), this.checkAsyncSchedule(s10.context);
  }
  checkAsyncSchedule(t6) {
    t6.scheduleOn && (this.workScheduled++, t6.scheduleOn.then(() => this.scheduleWork()).catch((t7) => iE(this.view.state, t7)).then(() => this.workScheduled--), t6.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), oj = tn.define({ combine: (t6) => t6.length ? t6[0] : null, enables: (t6) => [oR.state, o_, n6.contentAttributes.compute([t6], (e10) => {
  let i10 = e10.facet(t6);
  return i10 && i10.name ? { "data-language": i10.name } : {};
})] });
class oq {
  constructor(t6, e10 = []) {
    this.language = t6, this.support = e10, this.extension = [t6, e10];
  }
}
let oK = tn.define(), o$ = tn.define({ combine: (t6) => {
  if (!t6.length)
    return "  ";
  let e10 = t6[0];
  if (!e10 || /\S/.test(e10) || Array.from(e10).some((t7) => t7 != e10[0]))
    throw Error("Invalid indent unit: " + JSON.stringify(t6[0]));
  return e10;
} });
function oU(t6) {
  let e10 = t6.facet(o$);
  return 9 == e10.charCodeAt(0) ? t6.tabSize * e10.length : e10.length;
}
function oG(t6, e10) {
  let i10 = "", n10 = t6.tabSize, s10 = t6.facet(o$)[0];
  if ("	" == s10) {
    for (; e10 >= n10; )
      i10 += "	", e10 -= n10;
    s10 = " ";
  }
  for (let t7 = 0; t7 < e10; t7++)
    i10 += s10;
  return i10;
}
function oJ(t6, e10) {
  for (let i11 of (t6 instanceof tV && (t6 = new oY(t6)), t6.state.facet(oK))) {
    let n10 = i11(t6, e10);
    if (void 0 !== n10)
      return n10;
  }
  let i10 = oL(t6.state);
  return i10.length >= e10 ? function(t7, e11, i11) {
    let n10 = e11.resolveStack(i11), s10 = n10.node.enterUnfinishedNodesBefore(i11);
    if (s10 != n10.node) {
      let t10 = [];
      for (let e12 = s10; e12 != n10.node; e12 = e12.parent)
        t10.push(e12);
      for (let e12 = t10.length - 1; e12 >= 0; e12--)
        n10 = { node: t10[e12], next: n10 };
    }
    return oQ(n10, t7, i11);
  }(t6, i10, e10) : null;
}
class oY {
  constructor(t6, e10 = {}) {
    this.state = t6, this.options = e10, this.unit = oU(t6);
  }
  lineAt(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i10 = this.state.doc.lineAt(t6), { simulateBreak: n10, simulateDoubleBreak: s10 } = this.options;
    return null != n10 && n10 >= i10.from && n10 <= i10.to ? s10 && n10 == t6 ? { text: "", from: t6 } : (e10 < 0 ? n10 < t6 : n10 <= t6) ? { text: i10.text.slice(n10 - i10.from), from: n10 } : { text: i10.text.slice(0, n10 - i10.from), from: i10.from } : i10;
  }
  textAfterPos(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (this.options.simulateDoubleBreak && t6 == this.options.simulateBreak)
      return "";
    let { text: i10, from: n10 } = this.lineAt(t6, e10);
    return i10.slice(t6 - n10, Math.min(i10.length, t6 + 100 - n10));
  }
  column(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, { text: i10, from: n10 } = this.lineAt(t6, e10), s10 = this.countColumn(i10, t6 - n10), r10 = this.options.overrideIndentation ? this.options.overrideIndentation(n10) : -1;
    return r10 > -1 && (s10 += r10 - this.countColumn(i10, i10.search(/\S|$/))), s10;
  }
  countColumn(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6.length;
    return t1(t6, this.state.tabSize, e10);
  }
  lineIndent(t6) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, { text: i10, from: n10 } = this.lineAt(t6, e10), s10 = this.options.overrideIndentation;
    if (s10) {
      let t7 = s10(n10);
      if (t7 > -1)
        return t7;
    }
    return this.countColumn(i10, i10.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
let oX = new rW();
function oQ(t6, e10, i10) {
  for (let n10 = t6; n10; n10 = n10.next) {
    let t7 = function(t10) {
      let e11 = t10.type.prop(oX);
      if (e11)
        return e11;
      let i11 = t10.firstChild, n11;
      if (i11 && (n11 = i11.type.prop(rW.closedBy))) {
        let e12 = t10.lastChild, i12 = e12 && n11.indexOf(e12.name) > -1;
        return (t11) => function(t12, e13, i13, n12, s10) {
          let r10 = t12.textAfter, o10 = r10.match(/^\s*/)[0].length, l10 = n12 && r10.slice(o10, o10 + n12.length) == n12 || s10 == t12.pos + o10, h10 = e13 ? function(t13) {
            let e14 = t13.node, i14 = e14.childAfter(e14.from), n13 = e14.lastChild;
            if (!i14)
              return null;
            let s11 = t13.options.simulateBreak, r11 = t13.state.doc.lineAt(i14.from), o11 = null == s11 || s11 <= r11.from ? r11.to : Math.min(r11.to, s11);
            for (let t14 = i14.to; ; ) {
              let s12 = e14.childAfter(t14);
              if (!s12 || s12 == n13)
                return null;
              if (!s12.type.isSkipped)
                return s12.from < o11 ? i14 : null;
              t14 = s12.to;
            }
          }(t12) : null;
          return h10 ? l10 ? t12.column(h10.from) : t12.column(h10.to) : t12.baseIndent + (l10 ? 0 : 1 * t12.unit);
        }(t11, true, 0, void 0, i12 && !(t11.pos == t11.options.simulateBreak && t11.options.simulateDoubleBreak) ? e12.from : void 0);
      }
      return null == t10.parent ? oZ : null;
    }(n10.node);
    if (t7)
      return t7(o0.create(e10, i10, n10));
  }
  return 0;
}
function oZ() {
  return 0;
}
class o0 extends oY {
  constructor(t6, e10, i10) {
    super(t6.state, t6.options), this.base = t6, this.pos = e10, this.context = i10;
  }
  get node() {
    return this.context.node;
  }
  static create(t6, e10, i10) {
    return new o0(t6, e10, i10);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(t6) {
    let e10 = this.state.doc.lineAt(t6.from);
    for (; ; ) {
      let i10 = t6.resolve(e10.from);
      for (; i10.parent && i10.parent.from == i10.from; )
        i10 = i10.parent;
      if (function(t7, e11) {
        for (let i11 = e11; i11; i11 = i11.parent)
          if (t7 == i11)
            return true;
        return false;
      }(i10, t6))
        break;
      e10 = this.state.doc.lineAt(i10.from);
    }
    return this.lineIndent(e10.from);
  }
  continue() {
    return oQ(this.context.next, this.base, this.pos);
  }
}
function o1() {
  let { except: t6, units: e10 = 1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return (i10) => {
    let n10 = t6 && t6.test(i10.textAfter);
    return i10.baseIndent + (n10 ? 0 : e10 * i10.unit);
  };
}
let o2 = tn.define(), o3 = new rW();
function o8(t6) {
  let e10 = t6.firstChild, i10 = t6.lastChild;
  return e10 && e10.to < i10.from ? { from: e10.to, to: i10.type.isError ? t6.to : i10.from } : null;
}
function o4(t6, e10, i10) {
  for (let n10 of t6.facet(o2)) {
    let s10 = n10(t6, e10, i10);
    if (s10)
      return s10;
  }
  return function(t7, e11, i11) {
    let n10 = oL(t7);
    if (n10.length < i11)
      return null;
    let s10 = n10.resolveStack(i11, 1), r10 = null;
    for (let o10 = s10; o10; o10 = o10.next) {
      let s11 = o10.node;
      if (s11.to <= i11 || s11.from > i11)
        continue;
      if (r10 && s11.from < e11)
        break;
      let l10 = s11.type.prop(o3);
      if (l10 && (s11.to < n10.length - 50 || n10.length == t7.doc.length || !function(t10) {
        let e12 = t10.lastChild;
        return e12 && e12.to == t10.to && e12.type.isError;
      }(s11))) {
        let n11 = l10(s11, t7);
        n11 && n11.from <= i11 && n11.from >= e11 && n11.to > i11 && (r10 = n11);
      }
    }
    return r10;
  }(t6, e10, i10);
}
function o5(t6, e10) {
  let i10 = e10.mapPos(t6.from, 1), n10 = e10.mapPos(t6.to, -1);
  return i10 >= n10 ? void 0 : { from: i10, to: n10 };
}
let o9 = tT.define({ map: o5 }), o6 = tT.define({ map: o5 });
function o7(t6) {
  let e10 = [];
  for (let { head: i10 } of t6.state.selection.ranges)
    e10.some((t7) => t7.from <= i10 && t7.to >= i10) || e10.push(t6.lineBlockAt(i10));
  return e10;
}
let lt = ta.define({ create: () => e3.none, update(t6, e10) {
  for (let i10 of (t6 = t6.map(e10.changes), e10.effects))
    if (i10.is(o9) && !function(t7, e11, i11) {
      let n10 = false;
      return t7.between(e11, e11, (t10, s10) => {
        t10 == e11 && s10 == i11 && (n10 = true);
      }), n10;
    }(t6, i10.value.from, i10.value.to)) {
      let { preparePlaceholder: n10 } = e10.state.facet(lo), s10 = n10 ? e3.replace({ widget: new lc(n10(e10.state, i10.value)) }) : la;
      t6 = t6.update({ add: [s10.range(i10.value.from, i10.value.to)] });
    } else
      i10.is(o6) && (t6 = t6.update({ filter: (t7, e11) => i10.value.from != t7 || i10.value.to != e11, filterFrom: i10.value.from, filterTo: i10.value.to }));
  if (e10.selection) {
    let i10 = false, { head: n10 } = e10.selection.main;
    t6.between(n10, n10, (t7, e11) => {
      t7 < n10 && e11 > n10 && (i10 = true);
    }), i10 && (t6 = t6.update({ filterFrom: n10, filterTo: n10, filter: (t7, e11) => e11 <= n10 || t7 >= n10 }));
  }
  return t6;
}, provide: (t6) => n6.decorations.from(t6), toJSON(t6, e10) {
  let i10 = [];
  return t6.between(0, e10.doc.length, (t7, e11) => {
    i10.push(t7, e11);
  }), i10;
}, fromJSON(t6) {
  if (!Array.isArray(t6) || t6.length % 2)
    throw RangeError("Invalid JSON for fold state");
  let e10 = [];
  for (let i10 = 0; i10 < t6.length; ) {
    let n10 = t6[i10++], s10 = t6[i10++];
    if ("number" != typeof n10 || "number" != typeof s10)
      throw RangeError("Invalid JSON for fold state");
    e10.push(la.range(n10, s10));
  }
  return e3.set(e10, true);
} });
function le(t6, e10, i10) {
  var n10;
  let s10 = null;
  return null === (n10 = t6.field(lt, false)) || void 0 === n10 || n10.between(e10, i10, (t7, e11) => {
    (!s10 || s10.from > t7) && (s10 = { from: t7, to: e11 });
  }), s10;
}
function li(t6, e10) {
  return t6.field(lt, false) ? e10 : e10.concat(tT.appendConfig.of(ll()));
}
function ln(t6, e10) {
  let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], n10 = t6.state.doc.lineAt(e10.from).number, s10 = t6.state.doc.lineAt(e10.to).number;
  return n6.announce.of(`${t6.state.phrase(i10 ? "Folded lines" : "Unfolded lines")} ${n10} ${t6.state.phrase("to")} ${s10}.`);
}
let ls = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: (t6) => {
  for (let e10 of o7(t6)) {
    let i10 = o4(t6.state, e10.from, e10.to);
    if (i10)
      return t6.dispatch({ effects: li(t6.state, [o9.of(i10), ln(t6, i10)]) }), true;
  }
  return false;
} }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: (t6) => {
  if (!t6.state.field(lt, false))
    return false;
  let e10 = [];
  for (let i10 of o7(t6)) {
    let n10 = le(t6.state, i10.from, i10.to);
    n10 && e10.push(o6.of(n10), ln(t6, n10, false));
  }
  return e10.length && t6.dispatch({ effects: e10 }), e10.length > 0;
} }, { key: "Ctrl-Alt-[", run: (t6) => {
  let { state: e10 } = t6, i10 = [];
  for (let n10 = 0; n10 < e10.doc.length; ) {
    let s10 = t6.lineBlockAt(n10), r10 = o4(e10, s10.from, s10.to);
    r10 && i10.push(o9.of(r10)), n10 = (r10 ? t6.lineBlockAt(r10.to) : s10).to + 1;
  }
  return i10.length && t6.dispatch({ effects: li(t6.state, i10) }), !!i10.length;
} }, { key: "Ctrl-Alt-]", run: (t6) => {
  let e10 = t6.state.field(lt, false);
  if (!e10 || !e10.size)
    return false;
  let i10 = [];
  return e10.between(0, t6.state.doc.length, (t7, e11) => {
    i10.push(o6.of({ from: t7, to: e11 }));
  }), t6.dispatch({ effects: i10 }), true;
} }], lr = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "…" }, lo = tn.define({ combine: (t6) => tH(t6, lr) });
function ll(t6) {
  let e10 = [lt, lf];
  return t6 && e10.push(lo.of(t6)), e10;
}
function lh(t6, e10) {
  let { state: i10 } = t6, n10 = i10.facet(lo), s10 = (e11) => {
    let i11 = t6.lineBlockAt(t6.posAtDOM(e11.target)), n11 = le(t6.state, i11.from, i11.to);
    n11 && t6.dispatch({ effects: o6.of(n11) }), e11.preventDefault();
  };
  if (n10.placeholderDOM)
    return n10.placeholderDOM(t6, s10, e10);
  let r10 = document.createElement("span");
  return r10.textContent = n10.placeholderText, r10.setAttribute("aria-label", i10.phrase("folded code")), r10.title = i10.phrase("unfold"), r10.className = "cm-foldPlaceholder", r10.onclick = s10, r10;
}
let la = e3.replace({ widget: new class extends e1 {
  toDOM(t6) {
    return lh(t6, null);
  }
}() });
class lc extends e1 {
  constructor(t6) {
    super(), this.value = t6;
  }
  eq(t6) {
    return this.value == t6.value;
  }
  toDOM(t6) {
    return lh(t6, this.value);
  }
}
let ld = { openText: "⌄", closedText: "›", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class lu extends sj {
  constructor(t6, e10) {
    super(), this.config = t6, this.open = e10;
  }
  eq(t6) {
    return this.config == t6.config && this.open == t6.open;
  }
  toDOM(t6) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let e10 = document.createElement("span");
    return e10.textContent = this.open ? this.config.openText : this.config.closedText, e10.title = t6.state.phrase(this.open ? "Fold line" : "Unfold line"), e10;
  }
}
let lf = n6.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class lp {
  constructor(t6, e10) {
    let i10;
    function n10(t7) {
      let e11 = t4.newName();
      return (i10 || (i10 = /* @__PURE__ */ Object.create(null)))["." + e11] = t7, e11;
    }
    this.specs = t6;
    let s10 = "string" == typeof e10.all ? e10.all : e10.all ? n10(e10.all) : void 0, r10 = e10.scope;
    this.scope = r10 instanceof oR ? (t7) => t7.prop(oT) == r10.data : r10 ? (t7) => t7 == r10 : void 0, this.style = oc(t6.map((t7) => ({ tag: t7.tag, class: t7.class || n10(Object.assign({}, t7, { tag: null })) })), { all: s10 }).style, this.module = i10 ? new t4(i10) : null, this.themeType = e10.themeType;
  }
  static define(t6, e10) {
    return new lp(t6, e10 || {});
  }
}
let lg = tn.define(), lm = tn.define({ combine: (t6) => t6.length ? [t6[0]] : null });
function lv(t6) {
  let e10 = t6.facet(lg);
  return e10.length ? e10 : t6.facet(lm);
}
let lw = tu.high(iL.fromClass(class {
  constructor(t6) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = oL(t6.state), this.decorations = this.buildDeco(t6, lv(t6.state)), this.decoratedTo = t6.viewport.to;
  }
  update(t6) {
    let e10 = oL(t6.state), i10 = lv(t6.state), n10 = i10 != lv(t6.startState), { viewport: s10 } = t6.view, r10 = t6.changes.mapPos(this.decoratedTo, 1);
    e10.length < s10.to && !n10 && e10.type == this.tree.type && r10 >= s10.to ? (this.decorations = this.decorations.map(t6.changes), this.decoratedTo = r10) : (e10 != this.tree || t6.viewportChanged || n10) && (this.tree = e10, this.decorations = this.buildDeco(t6.view, i10), this.decoratedTo = s10.to);
  }
  buildDeco(t6, e10) {
    if (!e10 || !this.tree.length)
      return e3.none;
    let i10 = new tq();
    for (let { from: n10, to: s10 } of t6.visibleRanges)
      !function(t7, e11, i11) {
        let n11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t7.length, r10 = new od(n11, Array.isArray(e11) ? e11 : [e11], i11);
        r10.highlightRange(t7.cursor(), n11, s11, "", r10.highlighters), r10.flush(s11);
      }(this.tree, e10, (t7, e11, n11) => {
        i10.add(t7, e11, this.markCache[n11] || (this.markCache[n11] = e3.mark({ class: n11 })));
      }, n10, s10);
    return i10.finish();
  }
}, { decorations: (t6) => t6.decorations })), ly = n6.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), lb = "()[]{}", lx = tn.define({ combine: (t6) => tH(t6, { afterCursor: true, brackets: lb, maxScanDistance: 1e4, renderMatch: lC }) }), lk = e3.mark({ class: "cm-matchingBracket" }), lS = e3.mark({ class: "cm-nonmatchingBracket" });
function lC(t6) {
  let e10 = [], i10 = t6.matched ? lk : lS;
  return e10.push(i10.range(t6.start.from, t6.start.to)), t6.end && e10.push(i10.range(t6.end.from, t6.end.to)), e10;
}
let lA = [ta.define({ create: () => e3.none, update(t6, e10) {
  if (!e10.docChanged && !e10.selection)
    return t6;
  let i10 = [], n10 = e10.state.facet(lx);
  for (let t7 of e10.state.selection.ranges) {
    if (!t7.empty)
      continue;
    let s10 = lT(e10.state, t7.head, -1, n10) || t7.head > 0 && lT(e10.state, t7.head - 1, 1, n10) || n10.afterCursor && (lT(e10.state, t7.head, 1, n10) || t7.head < e10.state.doc.length && lT(e10.state, t7.head + 1, -1, n10));
    s10 && (i10 = i10.concat(n10.renderMatch(s10, e10.state)));
  }
  return e3.set(i10, true);
}, provide: (t6) => n6.decorations.from(t6) }), ly], lM = new rW();
function lO(t6, e10, i10) {
  let n10 = t6.prop(e10 < 0 ? rW.openedBy : rW.closedBy);
  if (n10)
    return n10;
  if (1 == t6.name.length) {
    let n11 = i10.indexOf(t6.name);
    if (n11 > -1 && n11 % 2 == (e10 < 0 ? 1 : 0))
      return [i10[n11 + e10]];
  }
  return null;
}
function lD(t6) {
  let e10 = t6.type.prop(lM);
  return e10 ? e10(t6.node) : t6;
}
function lT(t6, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s10 = n10.maxScanDistance || 1e4, r10 = n10.brackets || lb, o10 = oL(t6), l10 = o10.resolveInner(e10, i10);
  for (let t7 = l10; t7; t7 = t7.parent) {
    let n11 = lO(t7.type, i10, r10);
    if (n11 && t7.from < t7.to) {
      let s11 = lD(t7);
      if (s11 && (i10 > 0 ? e10 >= s11.from && e10 < s11.to : e10 > s11.from && e10 <= s11.to))
        return function(t10, e11, i11, n12, s12, r11, o11) {
          let l11 = n12.parent, h10 = { from: s12.from, to: s12.to }, a5 = 0, c2 = null == l11 ? void 0 : l11.cursor();
          if (c2 && (i11 < 0 ? c2.childBefore(n12.from) : c2.childAfter(n12.to)))
            do
              if (i11 < 0 ? c2.to <= n12.from : c2.from >= n12.to) {
                if (0 == a5 && r11.indexOf(c2.type.name) > -1 && c2.from < c2.to) {
                  let t11 = lD(c2);
                  return { start: h10, end: t11 ? { from: t11.from, to: t11.to } : void 0, matched: true };
                }
                if (lO(c2.type, i11, o11))
                  a5++;
                else if (lO(c2.type, -i11, o11)) {
                  if (0 == a5) {
                    let t11 = lD(c2);
                    return { start: h10, end: t11 && t11.from < t11.to ? { from: t11.from, to: t11.to } : void 0, matched: false };
                  }
                  a5--;
                }
              }
            while (i11 < 0 ? c2.prevSibling() : c2.nextSibling());
          return { start: h10, matched: false };
        }(0, 0, i10, t7, s11, n11, r10);
    }
  }
  return function(t7, e11, i11, n11, s11, r11, o11) {
    let l11 = i11 < 0 ? t7.sliceDoc(e11 - 1, e11) : t7.sliceDoc(e11, e11 + 1), h10 = o11.indexOf(l11);
    if (h10 < 0 || h10 % 2 == 0 != i11 > 0)
      return null;
    let a5 = { from: i11 < 0 ? e11 - 1 : e11, to: i11 > 0 ? e11 + 1 : e11 }, c2 = t7.doc.iterRange(e11, i11 > 0 ? t7.doc.length : 0), d2 = 0;
    for (let t10 = 0; !c2.next().done && t10 <= r11; ) {
      let r12 = c2.value;
      i11 < 0 && (t10 += r12.length);
      let l12 = e11 + t10 * i11;
      for (let t11 = i11 > 0 ? 0 : r12.length - 1, e12 = i11 > 0 ? r12.length : -1; t11 != e12; t11 += i11) {
        let e13 = o11.indexOf(r12[t11]);
        if (!(e13 < 0) && n11.resolveInner(l12 + t11, 1).type == s11) {
          if (e13 % 2 == 0 == i11 > 0)
            d2++;
          else {
            if (1 == d2)
              return { start: a5, end: { from: l12 + t11, to: l12 + t11 + 1 }, matched: e13 >> 1 == h10 >> 1 };
            d2--;
          }
        }
      }
      i11 > 0 && (t10 += r12.length);
    }
    return c2.done ? { start: a5, matched: false } : null;
  }(t6, e10, i10, o10, l10.type, s10, r10);
}
let lE = /* @__PURE__ */ Object.create(null), lR = [r_.none], lB = [], lP = /* @__PURE__ */ Object.create(null), lL = /* @__PURE__ */ Object.create(null);
for (let [t6, e10] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]])
  lL[t6] = function(t7, e11) {
    let i10 = [];
    for (let n11 of e11.split(" ")) {
      let e12 = [];
      for (let i11 of n11.split(".")) {
        let n12 = t7[i11] || oO[i11];
        n12 ? "function" == typeof n12 ? e12.length ? e12 = e12.map(n12) : lN(i11, `Modifier ${i11} used at start of tag`) : e12.length ? lN(i11, `Tag ${i11} used as modifier`) : e12 = Array.isArray(n12) ? n12 : [n12] : lN(i11, `Unknown highlighting tag ${i11}`);
      }
      for (let t10 of e12)
        i10.push(t10);
    }
    if (!i10.length)
      return 0;
    let n10 = e11.replace(/ /g, "_"), s10 = n10 + " " + i10.map((t10) => t10.id), r10 = lP[s10];
    if (r10)
      return r10.id;
    let o10 = lP[s10] = r_.define({ id: lR.length, name: n10, props: [ol({ [n10]: i10 })] });
    return lR.push(o10), o10.id;
  }(lE, e10);
function lN(t6, e10) {
  lB.indexOf(t6) > -1 || (lB.push(t6), console.warn(e10));
}
ii.RTL, ii.LTR;
class lI {
  constructor(t6, e10, i10) {
    this.state = t6, this.pos = e10, this.explicit = i10, this.abortListeners = [];
  }
  tokenBefore(t6) {
    let e10 = oL(this.state).resolveInner(this.pos, -1);
    for (; e10 && 0 > t6.indexOf(e10.name); )
      e10 = e10.parent;
    return e10 ? { from: e10.from, to: this.pos, text: this.state.sliceDoc(e10.from, this.pos), type: e10.type } : null;
  }
  matchBefore(t6) {
    let e10 = this.state.doc.lineAt(this.pos), i10 = Math.max(e10.from, this.pos - 250), n10 = e10.text.slice(i10 - e10.from, this.pos - e10.from), s10 = n10.search(lF(t6, false));
    return s10 < 0 ? null : { from: i10 + s10, to: this.pos, text: n10.slice(s10) };
  }
  get aborted() {
    return null == this.abortListeners;
  }
  addEventListener(t6, e10) {
    "abort" == t6 && this.abortListeners && this.abortListeners.push(e10);
  }
}
function lV(t6) {
  let e10 = Object.keys(t6).join(""), i10 = /\w/.test(e10);
  return i10 && (e10 = e10.replace(/\w/g, "")), `[${i10 ? "\\w" : ""}${e10.replace(/[^\w\s]/g, "\\$&")}]`;
}
class lH {
  constructor(t6, e10, i10, n10) {
    this.completion = t6, this.source = e10, this.match = i10, this.score = n10;
  }
}
function lW(t6) {
  return t6.selection.main.from;
}
function lF(t6, e10) {
  var i10;
  let { source: n10 } = t6, s10 = e10 && "^" != n10[0], r10 = "$" != n10[n10.length - 1];
  return s10 || r10 ? RegExp(`${s10 ? "^" : ""}(?:${n10})${r10 ? "$" : ""}`, null !== (i10 = t6.flags) && void 0 !== i10 ? i10 : t6.ignoreCase ? "i" : "") : t6;
}
let lz = tM.define(), l_ = /* @__PURE__ */ new WeakMap();
function lj(t6) {
  if (!Array.isArray(t6))
    return t6;
  let e10 = l_.get(t6);
  return e10 || l_.set(t6, e10 = function(t7) {
    let e11 = t7.map((t10) => "string" == typeof t10 ? { label: t10 } : t10), [i10, n10] = e11.every((t10) => /^\w+$/.test(t10.label)) ? [/\w*$/, /\w+$/] : function(t10) {
      let e12 = /* @__PURE__ */ Object.create(null), i11 = /* @__PURE__ */ Object.create(null);
      for (let { label: n12 } of t10) {
        e12[n12[0]] = true;
        for (let t11 = 1; t11 < n12.length; t11++)
          i11[n12[t11]] = true;
      }
      let n11 = lV(e12) + lV(i11) + "*$";
      return [RegExp("^" + n11), new RegExp(n11)];
    }(e11);
    return (t10) => {
      let s10 = t10.matchBefore(n10);
      return s10 || t10.explicit ? { from: s10 ? s10.from : t10.pos, options: e11, validFor: i10 } : null;
    };
  }(t6)), e10;
}
let lq = tT.define(), lK = tT.define();
class l$ {
  constructor(t6) {
    this.pattern = t6, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e10 = 0; e10 < t6.length; ) {
      let i10 = B(t6, e10), n10 = L(i10);
      this.chars.push(i10);
      let s10 = t6.slice(e10, e10 + n10), r10 = s10.toUpperCase();
      this.folded.push(B(r10 == s10 ? s10.toLowerCase() : r10, 0)), e10 += n10;
    }
    this.astral = t6.length != this.chars.length;
  }
  ret(t6, e10) {
    return this.score = t6, this.matched = e10, this;
  }
  match(t6) {
    if (0 == this.pattern.length)
      return this.ret(-100, []);
    if (t6.length < this.pattern.length)
      return null;
    let { chars: e10, folded: i10, any: n10, precise: s10, byWord: r10 } = this;
    if (1 == e10.length) {
      let n11 = B(t6, 0), s11 = L(n11), r11 = s11 == t6.length ? 0 : -100;
      if (n11 == e10[0])
        ;
      else {
        if (n11 != i10[0])
          return null;
        r11 += -200;
      }
      return this.ret(r11, [0, s11]);
    }
    let o10 = t6.indexOf(this.pattern);
    if (0 == o10)
      return this.ret(t6.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let l10 = e10.length, h10 = 0;
    if (o10 < 0) {
      for (let s11 = 0, r11 = Math.min(t6.length, 200); s11 < r11 && h10 < l10; ) {
        let r12 = B(t6, s11);
        (r12 == e10[h10] || r12 == i10[h10]) && (n10[h10++] = s11), s11 += L(r12);
      }
      if (h10 < l10)
        return null;
    }
    let a5 = 0, c2 = 0, d2 = false, u2 = 0, f2 = -1, p2 = -1, g2 = /[a-z]/.test(t6), m2 = true;
    for (let n11 = 0, h11 = Math.min(t6.length, 200), v2 = 0; n11 < h11 && c2 < l10; ) {
      let h12 = B(t6, n11);
      o10 < 0 && (a5 < l10 && h12 == e10[a5] && (s10[a5++] = n11), u2 < l10 && (h12 == e10[u2] || h12 == i10[u2] ? (0 == u2 && (f2 = n11), p2 = n11 + 1, u2++) : u2 = 0));
      let w2, y2 = h12 < 255 ? h12 >= 48 && h12 <= 57 || h12 >= 97 && h12 <= 122 ? 2 : h12 >= 65 && h12 <= 90 ? 1 : 0 : (w2 = P(h12)) != w2.toLowerCase() ? 1 : w2 != w2.toUpperCase() ? 2 : 0;
      (!n11 || 1 == y2 && g2 || 0 == v2 && 0 != y2) && (e10[c2] == h12 || i10[c2] == h12 && (d2 = true) ? r10[c2++] = n11 : r10.length && (m2 = false)), v2 = y2, n11 += L(h12);
    }
    return c2 == l10 && 0 == r10[0] && m2 ? this.result(-100 + (d2 ? -200 : 0), r10, t6) : u2 == l10 && 0 == f2 ? this.ret(-200 - t6.length + (p2 == t6.length ? 0 : -100), [0, p2]) : o10 > -1 ? this.ret(-700 - t6.length, [o10, o10 + this.pattern.length]) : u2 == l10 ? this.ret(-900 - t6.length, [f2, p2]) : c2 == l10 ? this.result(-100 + (d2 ? -200 : 0) + -700 + (m2 ? 0 : -1100), r10, t6) : 2 == e10.length ? null : this.result((n10[0] ? -700 : 0) + -200 + -1100, n10, t6);
  }
  result(t6, e10, i10) {
    let n10 = [], s10 = 0;
    for (let t7 of e10) {
      let e11 = t7 + (this.astral ? L(B(i10, t7)) : 1);
      s10 && n10[s10 - 1] == t7 ? n10[s10 - 1] = e11 : (n10[s10++] = t7, n10[s10++] = e11);
    }
    return this.ret(t6 - i10.length, n10);
  }
}
class lU {
  constructor(t6) {
    this.pattern = t6, this.matched = [], this.score = 0, this.folded = t6.toLowerCase();
  }
  match(t6) {
    if (t6.length < this.pattern.length)
      return null;
    let e10 = t6.slice(0, this.pattern.length), i10 = e10 == this.pattern ? 0 : e10.toLowerCase() == this.folded ? -200 : null;
    return null == i10 ? null : (this.matched = [0, e10.length], this.score = i10 + (t6.length == this.pattern.length ? 0 : -100), this);
  }
}
let lG = tn.define({ combine: (t6) => tH(t6, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: lY, filterStrict: false, compareCompletions: (t7, e10) => t7.label.localeCompare(e10.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (t7, e10) => t7 && e10, closeOnBlur: (t7, e10) => t7 && e10, icons: (t7, e10) => t7 && e10, tooltipClass: (t7, e10) => (i10) => lJ(t7(i10), e10(i10)), optionClass: (t7, e10) => (i10) => lJ(t7(i10), e10(i10)), addToOptions: (t7, e10) => t7.concat(e10), filterStrict: (t7, e10) => t7 || e10 }) });
function lJ(t6, e10) {
  return t6 ? e10 ? t6 + " " + e10 : t6 : e10;
}
function lY(t6, e10, i10, n10, s10, r10) {
  let o10 = t6.textDirection == ii.RTL, l10 = o10, h10 = false, a5 = "top", c2, d2, u2 = e10.left - s10.left, f2 = s10.right - e10.right, p2 = n10.right - n10.left, g2 = n10.bottom - n10.top;
  if (l10 && u2 < Math.min(p2, f2) ? l10 = false : !l10 && f2 < Math.min(p2, u2) && (l10 = true), p2 <= (l10 ? u2 : f2))
    c2 = Math.max(s10.top, Math.min(i10.top, s10.bottom - g2)) - e10.top, d2 = Math.min(400, l10 ? u2 : f2);
  else {
    h10 = true, d2 = Math.min(400, (o10 ? e10.right : s10.right - e10.left) - 30);
    let t7 = s10.bottom - e10.bottom;
    t7 >= g2 || t7 > e10.top ? c2 = i10.bottom - e10.top : (a5 = "bottom", c2 = e10.bottom - i10.top);
  }
  let m2 = (e10.bottom - e10.top) / r10.offsetHeight, v2 = (e10.right - e10.left) / r10.offsetWidth;
  return { style: `${a5}: ${c2 / m2}px; max-width: ${d2 / v2}px`, class: "cm-completionInfo-" + (h10 ? o10 ? "left-narrow" : "right-narrow" : l10 ? "left" : "right") };
}
function lX(t6, e10, i10) {
  if (t6 <= i10)
    return { from: 0, to: t6 };
  if (e10 < 0 && (e10 = 0), e10 <= t6 >> 1) {
    let t7 = Math.floor(e10 / i10);
    return { from: t7 * i10, to: (t7 + 1) * i10 };
  }
  let n10 = Math.floor((t6 - e10) / i10);
  return { from: t6 - (n10 + 1) * i10, to: t6 - n10 * i10 };
}
class lQ {
  constructor(t6, e10, i10) {
    let n10;
    this.view = t6, this.stateField = e10, this.applyCompletion = i10, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (t7) => this.placeInfo(t7), key: this }, this.space = null, this.currentClass = "";
    let s10 = t6.state.field(e10), { options: r10, selected: o10 } = s10.open, l10 = t6.state.facet(lG);
    this.optionContent = (n10 = l10.addToOptions.slice(), l10.icons && n10.push({ render(t7) {
      let e11 = document.createElement("div");
      return e11.classList.add("cm-completionIcon"), t7.type && e11.classList.add(...t7.type.split(/\s+/g).map((t10) => "cm-completionIcon-" + t10)), e11.setAttribute("aria-hidden", "true"), e11;
    }, position: 20 }), n10.push({ render(t7, e11, i11, n11) {
      let s11 = document.createElement("span");
      s11.className = "cm-completionLabel";
      let r11 = t7.displayLabel || t7.label, o11 = 0;
      for (let t10 = 0; t10 < n11.length; ) {
        let e12 = n11[t10++], i12 = n11[t10++];
        e12 > o11 && s11.appendChild(document.createTextNode(r11.slice(o11, e12)));
        let l11 = s11.appendChild(document.createElement("span"));
        l11.appendChild(document.createTextNode(r11.slice(e12, i12))), l11.className = "cm-completionMatchedText", o11 = i12;
      }
      return o11 < r11.length && s11.appendChild(document.createTextNode(r11.slice(o11))), s11;
    }, position: 50 }, { render(t7) {
      if (!t7.detail)
        return null;
      let e11 = document.createElement("span");
      return e11.className = "cm-completionDetail", e11.textContent = t7.detail, e11;
    }, position: 80 }), n10.sort((t7, e11) => t7.position - e11.position).map((t7) => t7.render)), this.optionClass = l10.optionClass, this.tooltipClass = l10.tooltipClass, this.range = lX(r10.length, o10, l10.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t6.state), this.dom.addEventListener("mousedown", (i11) => {
      let { options: n11 } = t6.state.field(e10).open;
      for (let e11 = i11.target, s11; e11 && e11 != this.dom; e11 = e11.parentNode)
        if ("LI" == e11.nodeName && (s11 = /-(\d+)$/.exec(e11.id)) && +s11[1] < n11.length) {
          this.applyCompletion(t6, n11[+s11[1]]), i11.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (e11) => {
      let i11 = t6.state.field(this.stateField, false);
      i11 && i11.tooltip && t6.state.facet(lG).closeOnBlur && e11.relatedTarget != t6.contentDOM && t6.dispatch({ effects: lK.of(null) });
    }), this.showOptions(r10, s10.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t6, e10) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t6, e10, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t6) {
    var e10;
    let i10 = t6.state.field(this.stateField), n10 = t6.startState.field(this.stateField);
    if (this.updateTooltipClass(t6.state), i10 != n10) {
      let { options: s10, selected: r10, disabled: o10 } = i10.open;
      n10.open && n10.open.options == s10 || (this.range = lX(s10.length, r10, t6.state.facet(lG).maxRenderedOptions), this.showOptions(s10, i10.id)), this.updateSel(), o10 != (null === (e10 = n10.open) || void 0 === e10 ? void 0 : e10.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!o10);
    }
  }
  updateTooltipClass(t6) {
    let e10 = this.tooltipClass(t6);
    if (e10 != this.currentClass) {
      for (let t7 of this.currentClass.split(" "))
        t7 && this.dom.classList.remove(t7);
      for (let t7 of e10.split(" "))
        t7 && this.dom.classList.add(t7);
      this.currentClass = e10;
    }
  }
  positioned(t6) {
    this.space = t6, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t6 = this.view.state.field(this.stateField), e10 = t6.open;
    if ((e10.selected > -1 && e10.selected < this.range.from || e10.selected >= this.range.to) && (this.range = lX(e10.options.length, e10.selected, this.view.state.facet(lG).maxRenderedOptions), this.showOptions(e10.options, t6.id)), this.updateSelectedOption(e10.selected)) {
      this.destroyInfo();
      let { completion: i10 } = e10.options[e10.selected], { info: n10 } = i10;
      if (!n10)
        return;
      let s10 = "string" == typeof n10 ? document.createTextNode(n10) : n10(i10);
      if (!s10)
        return;
      "then" in s10 ? s10.then((e11) => {
        e11 && this.view.state.field(this.stateField, false) == t6 && this.addInfoPane(e11, i10);
      }).catch((t7) => iE(this.view.state, t7, "completion info")) : this.addInfoPane(s10, i10);
    }
  }
  addInfoPane(t6, e10) {
    this.destroyInfo();
    let i10 = this.info = document.createElement("div");
    if (i10.className = "cm-tooltip cm-completionInfo", null != t6.nodeType)
      i10.appendChild(t6), this.infoDestroy = null;
    else {
      let { dom: e11, destroy: n10 } = t6;
      i10.appendChild(e11), this.infoDestroy = n10 || null;
    }
    this.dom.appendChild(i10), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t6) {
    var e10, i10;
    let n10, s10, r10, o10 = null;
    for (let e11 = this.list.firstChild, i11 = this.range.from; e11; e11 = e11.nextSibling, i11++)
      "LI" == e11.nodeName && e11.id ? i11 == t6 ? e11.hasAttribute("aria-selected") || (e11.setAttribute("aria-selected", "true"), o10 = e11) : e11.hasAttribute("aria-selected") && e11.removeAttribute("aria-selected") : i11--;
    return o10 && (e10 = this.list, i10 = o10, n10 = e10.getBoundingClientRect(), s10 = i10.getBoundingClientRect(), r10 = n10.height / e10.offsetHeight, s10.top < n10.top ? e10.scrollTop -= (n10.top - s10.top) / r10 : s10.bottom > n10.bottom && (e10.scrollTop += (s10.bottom - n10.bottom) / r10)), o10;
  }
  measureInfo() {
    let t6 = this.dom.querySelector("[aria-selected]");
    if (!t6 || !this.info)
      return null;
    let e10 = this.dom.getBoundingClientRect(), i10 = this.info.getBoundingClientRect(), n10 = t6.getBoundingClientRect(), s10 = this.space;
    if (!s10) {
      let t7 = this.dom.ownerDocument.defaultView || window;
      s10 = { left: 0, top: 0, right: t7.innerWidth, bottom: t7.innerHeight };
    }
    return n10.top > Math.min(s10.bottom, e10.bottom) - 10 || n10.bottom < Math.max(s10.top, e10.top) + 10 ? null : this.view.state.facet(lG).positionInfo(this.view, e10, n10, i10, s10, this.dom);
  }
  placeInfo(t6) {
    this.info && (t6 ? (t6.style && (this.info.style.cssText = t6.style), this.info.className = "cm-tooltip cm-completionInfo " + (t6.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t6, e10, i10) {
    let n10 = document.createElement("ul");
    n10.id = e10, n10.setAttribute("role", "listbox"), n10.setAttribute("aria-expanded", "true"), n10.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let s10 = null;
    for (let r10 = i10.from; r10 < i10.to; r10++) {
      let { completion: o10, match: l10 } = t6[r10], { section: h10 } = o10;
      if (h10) {
        let t7 = "string" == typeof h10 ? h10 : h10.name;
        t7 != s10 && (r10 > i10.from || 0 == i10.from) && (s10 = t7, "string" != typeof h10 && h10.header ? n10.appendChild(h10.header(h10)) : n10.appendChild(document.createElement("completion-section")).textContent = t7);
      }
      let a5 = n10.appendChild(document.createElement("li"));
      a5.id = e10 + "-" + r10, a5.setAttribute("role", "option");
      let c2 = this.optionClass(o10);
      for (let t7 of (c2 && (a5.className = c2), this.optionContent)) {
        let e11 = t7(o10, this.view.state, this.view, l10);
        e11 && a5.appendChild(e11);
      }
    }
    return i10.from && n10.classList.add("cm-completionListIncompleteTop"), i10.to < t6.length && n10.classList.add("cm-completionListIncompleteBottom"), n10;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function lZ(t6) {
  return 100 * (t6.boost || 0) + (t6.apply ? 10 : 0) + (t6.info ? 5 : 0) + (t6.type ? 1 : 0);
}
class l0 {
  constructor(t6, e10, i10, n10, s10, r10) {
    this.options = t6, this.attrs = e10, this.tooltip = i10, this.timestamp = n10, this.selected = s10, this.disabled = r10;
  }
  setSelected(t6, e10) {
    return t6 == this.selected || t6 >= this.options.length ? this : new l0(this.options, l3(e10, t6), this.tooltip, this.timestamp, t6, this.disabled);
  }
  static build(t6, e10, i10, n10, s10) {
    let r10 = function(t7, e11) {
      let i11 = [], n11 = null, s11 = (t10) => {
        i11.push(t10);
        let { section: e12 } = t10.completion;
        if (e12) {
          n11 || (n11 = []);
          let t11 = "string" == typeof e12 ? e12 : e12.name;
          n11.some((e13) => e13.name == t11) || n11.push("string" == typeof e12 ? { name: t11 } : e12);
        }
      }, r11 = e11.facet(lG);
      for (let n12 of t7)
        if (n12.hasResult()) {
          let t10 = n12.result.getMatch;
          if (false === n12.result.filter)
            for (let e12 of n12.result.options)
              s11(new lH(e12, n12.source, t10 ? t10(e12) : [], 1e9 - i11.length));
          else {
            let i12 = e11.sliceDoc(n12.from, n12.to), o12, l11 = r11.filterStrict ? new lU(i12) : new l$(i12);
            for (let e12 of n12.result.options)
              if (o12 = l11.match(e12.label)) {
                let i13 = e12.displayLabel ? t10 ? t10(e12, o12.matched) : [] : o12.matched;
                s11(new lH(e12, n12.source, i13, o12.score + (e12.boost || 0)));
              }
          }
        }
      if (n11) {
        let t10 = /* @__PURE__ */ Object.create(null), e12 = 0;
        for (let i12 of n11.sort((t11, e13) => {
          var i13, n12;
          return (null !== (i13 = t11.rank) && void 0 !== i13 ? i13 : 1e9) - (null !== (n12 = e13.rank) && void 0 !== n12 ? n12 : 1e9) || (t11.name < e13.name ? -1 : 1);
        }))
          e12 -= 1e5, t10[i12.name] = e12;
        for (let e13 of i11) {
          let { section: i12 } = e13.completion;
          i12 && (e13.score += t10["string" == typeof i12 ? i12 : i12.name]);
        }
      }
      let o11 = [], l10 = null, h10 = r11.compareCompletions;
      for (let t10 of i11.sort((t11, e12) => e12.score - t11.score || h10(t11.completion, e12.completion))) {
        let e12 = t10.completion;
        l10 && l10.label == e12.label && l10.detail == e12.detail && (null == l10.type || null == e12.type || l10.type == e12.type) && l10.apply == e12.apply && l10.boost == e12.boost ? lZ(t10.completion) > lZ(l10) && (o11[o11.length - 1] = t10) : o11.push(t10), l10 = t10.completion;
      }
      return o11;
    }(t6, e10);
    if (!r10.length)
      return n10 && t6.some((t7) => 1 == t7.state) ? new l0(n10.options, n10.attrs, n10.tooltip, n10.timestamp, n10.selected, true) : null;
    let o10 = e10.facet(lG).selectOnOpen ? 0 : -1;
    if (n10 && n10.selected != o10 && -1 != n10.selected) {
      let t7 = n10.options[n10.selected].completion;
      for (let e11 = 0; e11 < r10.length; e11++)
        if (r10[e11].completion == t7) {
          o10 = e11;
          break;
        }
    }
    return new l0(r10, l3(i10, o10), { pos: t6.reduce((t7, e11) => e11.hasResult() ? Math.min(t7, e11.from) : t7, 1e8), create: hi, above: s10.aboveCursor }, n10 ? n10.timestamp : Date.now(), o10, false);
  }
  map(t6) {
    return new l0(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: t6.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class l1 {
  constructor(t6, e10, i10) {
    this.active = t6, this.id = e10, this.open = i10;
  }
  static start() {
    return new l1(l8, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null);
  }
  update(t6) {
    let { state: e10 } = t6, i10 = e10.facet(lG), n10 = (i10.override || e10.languageDataAt("autocomplete", lW(e10)).map(lj)).map((e11) => (this.active.find((t7) => t7.source == e11) || new l5(e11, this.active.some((t7) => 0 != t7.state) ? 1 : 0)).update(t6, i10));
    n10.length == this.active.length && n10.every((t7, e11) => t7 == this.active[e11]) && (n10 = this.active);
    let s10 = this.open;
    for (let r10 of (s10 && t6.docChanged && (s10 = s10.map(t6.changes)), t6.selection || n10.some((e11) => e11.hasResult() && t6.changes.touchesRange(e11.from, e11.to)) || !function(t7, e11) {
      if (t7 == e11)
        return true;
      for (let i11 = 0, n11 = 0; ; ) {
        for (; i11 < t7.length && !t7[i11].hasResult; )
          i11++;
        for (; n11 < e11.length && !e11[n11].hasResult; )
          n11++;
        let s11 = i11 == t7.length, r11 = n11 == e11.length;
        if (s11 || r11)
          return s11 == r11;
        if (t7[i11++].result != e11[n11++].result)
          return false;
      }
    }(n10, this.active) ? s10 = l0.build(n10, e10, this.id, s10, i10) : s10 && s10.disabled && !n10.some((t7) => 1 == t7.state) && (s10 = null), !s10 && n10.every((t7) => 1 != t7.state) && n10.some((t7) => t7.hasResult()) && (n10 = n10.map((t7) => t7.hasResult() ? new l5(t7.source, 0) : t7)), t6.effects))
      r10.is(l7) && (s10 = s10 && s10.setSelected(r10.value, this.id));
    return n10 == this.active && s10 == this.open ? this : new l1(n10, this.id, s10);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : l2;
  }
}
let l2 = { "aria-autocomplete": "list" };
function l3(t6, e10) {
  let i10 = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": t6 };
  return e10 > -1 && (i10["aria-activedescendant"] = t6 + "-" + e10), i10;
}
let l8 = [];
function l4(t6, e10) {
  if (t6.isUserEvent("input.complete")) {
    let i10 = t6.annotation(lz);
    if (i10 && e10.activateOnCompletion(i10))
      return "input";
  }
  return t6.isUserEvent("input.type") ? "input" : t6.isUserEvent("delete.backward") ? "delete" : null;
}
class l5 {
  constructor(t6, e10, i10 = -1) {
    this.source = t6, this.state = e10, this.explicitPos = i10;
  }
  hasResult() {
    return false;
  }
  update(t6, e10) {
    let i10 = l4(t6, e10), n10 = this;
    for (let s10 of (i10 ? n10 = n10.handleUserEvent(t6, i10, e10) : t6.docChanged ? n10 = n10.handleChange(t6) : t6.selection && 0 != n10.state && (n10 = new l5(n10.source, 0)), t6.effects))
      if (s10.is(lq))
        n10 = new l5(n10.source, 1, s10.value ? lW(t6.state) : -1);
      else if (s10.is(lK))
        n10 = new l5(n10.source, 0);
      else if (s10.is(l6))
        for (let t7 of s10.value)
          t7.source == n10.source && (n10 = t7);
    return n10;
  }
  handleUserEvent(t6, e10, i10) {
    return "delete" != e10 && i10.activateOnTyping ? new l5(this.source, 1) : this.map(t6.changes);
  }
  handleChange(t6) {
    return t6.changes.touchesRange(lW(t6.startState)) ? new l5(this.source, 0) : this.map(t6.changes);
  }
  map(t6) {
    return t6.empty || this.explicitPos < 0 ? this : new l5(this.source, this.state, t6.mapPos(this.explicitPos));
  }
}
class l9 extends l5 {
  constructor(t6, e10, i10, n10, s10) {
    super(t6, 2, e10), this.result = i10, this.from = n10, this.to = s10;
  }
  hasResult() {
    return true;
  }
  handleUserEvent(t6, e10, i10) {
    var n10;
    let s10 = this.result;
    s10.map && !t6.changes.empty && (s10 = s10.map(s10, t6.changes));
    let r10 = t6.changes.mapPos(this.from), o10 = t6.changes.mapPos(this.to, 1), l10 = lW(t6.state);
    if ((this.explicitPos < 0 ? l10 <= r10 : l10 < this.from) || l10 > o10 || !s10 || "delete" == e10 && lW(t6.startState) == this.from)
      return new l5(this.source, "input" == e10 && i10.activateOnTyping ? 1 : 0);
    let h10 = this.explicitPos < 0 ? -1 : t6.changes.mapPos(this.explicitPos);
    return !function(t7, e11, i11, n11) {
      if (!t7)
        return false;
      let s11 = e11.sliceDoc(i11, n11);
      return "function" == typeof t7 ? t7(s11, i11, n11, e11) : lF(t7, true).test(s11);
    }(s10.validFor, t6.state, r10, o10) ? s10.update && (s10 = s10.update(s10, r10, o10, new lI(t6.state, l10, h10 >= 0))) ? new l9(this.source, h10, s10, s10.from, null !== (n10 = s10.to) && void 0 !== n10 ? n10 : lW(t6.state)) : new l5(this.source, 1, h10) : new l9(this.source, h10, s10, r10, o10);
  }
  handleChange(t6) {
    return t6.changes.touchesRange(this.from, this.to) ? new l5(this.source, 0) : this.map(t6.changes);
  }
  map(t6) {
    return t6.empty ? this : (this.result.map ? this.result.map(this.result, t6) : this.result) ? new l9(this.source, this.explicitPos < 0 ? -1 : t6.mapPos(this.explicitPos), this.result, t6.mapPos(this.from), t6.mapPos(this.to, 1)) : new l5(this.source, 0);
  }
}
let l6 = tT.define({ map: (t6, e10) => t6.map((t7) => t7.map(e10)) }), l7 = tT.define(), ht = ta.define({ create: () => l1.start(), update: (t6, e10) => t6.update(e10), provide: (t6) => [sR.from(t6, (t7) => t7.tooltip), n6.contentAttributes.from(t6, (t7) => t7.attrs)] });
function he(t6, e10) {
  let i10 = e10.completion.apply || e10.completion.label, n10 = t6.state.field(ht).active.find((t7) => t7.source == e10.source);
  return n10 instanceof l9 && ("string" == typeof i10 ? t6.dispatch(Object.assign(Object.assign({}, function(t7, e11, i11, n11) {
    let { main: s10 } = t7.selection, r10 = i11 - s10.from, o10 = n11 - s10.from;
    return Object.assign(Object.assign({}, t7.changeByRange((l10) => l10 != s10 && i11 != n11 && t7.sliceDoc(l10.from + r10, l10.from + o10) != t7.sliceDoc(i11, n11) ? { range: l10 } : { changes: { from: l10.from + r10, to: n11 == s10.from ? l10.to : l10.from + o10, insert: e11 }, range: tt.cursor(l10.from + r10 + e11.length) })), { scrollIntoView: true, userEvent: "input.complete" });
  }(t6.state, i10, n10.from, n10.to)), { annotations: lz.of(e10.completion) })) : i10(t6, e10.completion, n10.from, n10.to), true);
}
let hi = (t6) => new lQ(t6, ht, he);
function hn(t6) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
  return (i10) => {
    let n10 = i10.state.field(ht, false);
    if (!n10 || !n10.open || n10.open.disabled || Date.now() - n10.open.timestamp < i10.state.facet(lG).interactionDelay)
      return false;
    let s10 = 1, r10;
    "page" == e10 && (r10 = sI(i10, n10.open.tooltip)) && (s10 = Math.max(2, Math.floor(r10.dom.offsetHeight / r10.dom.querySelector("li").offsetHeight) - 1));
    let { length: o10 } = n10.open.options, l10 = n10.open.selected > -1 ? n10.open.selected + s10 * (t6 ? 1 : -1) : t6 ? 0 : o10 - 1;
    return l10 < 0 ? l10 = "page" == e10 ? 0 : o10 - 1 : l10 >= o10 && (l10 = "page" == e10 ? o10 - 1 : 0), i10.dispatch({ effects: l7.of(l10) }), true;
  };
}
let hs = (t6) => !!t6.state.field(ht, false) && (t6.dispatch({ effects: lq.of(true) }), true);
class hr {
  constructor(t6, e10) {
    this.active = t6, this.context = e10, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
let ho = iL.fromClass(class {
  constructor(t6) {
    for (let e10 of (this.view = t6, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0, t6.state.field(ht).active))
      1 == e10.state && this.startQuery(e10);
  }
  update(t6) {
    let e10 = t6.state.field(ht), i10 = t6.state.facet(lG);
    if (!t6.selectionSet && !t6.docChanged && t6.startState.field(ht) == e10)
      return;
    let n10 = t6.transactions.some((t7) => (t7.selection || t7.docChanged) && !l4(t7, i10));
    for (let e11 = 0; e11 < this.running.length; e11++) {
      let i11 = this.running[e11];
      if (n10 || i11.updates.length + t6.transactions.length > 50 && Date.now() - i11.time > 1e3) {
        for (let t7 of i11.context.abortListeners)
          try {
            t7();
          } catch (t10) {
            iE(this.view.state, t10);
          }
        i11.context.abortListeners = null, this.running.splice(e11--, 1);
      } else
        i11.updates.push(...t6.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), t6.transactions.some((t7) => t7.effects.some((t10) => t10.is(lq))) && (this.pendingStart = true);
    let s10 = this.pendingStart ? 50 : i10.activateOnTypingDelay;
    if (this.debounceUpdate = e10.active.some((t7) => 1 == t7.state && !this.running.some((e11) => e11.active.source == t7.source)) ? setTimeout(() => this.startUpdate(), s10) : -1, 0 != this.composing)
      for (let e11 of t6.transactions)
        "input" == l4(e11, i10) ? this.composing = 2 : 2 == this.composing && e11.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: t6 } = this.view;
    for (let e10 of t6.field(ht).active)
      1 != e10.state || this.running.some((t7) => t7.active.source == e10.source) || this.startQuery(e10);
  }
  startQuery(t6) {
    let { state: e10 } = this.view, i10 = lW(e10), n10 = new lI(e10, i10, t6.explicitPos == i10), s10 = new hr(t6, n10);
    this.running.push(s10), Promise.resolve(t6.source(n10)).then((t7) => {
      s10.context.aborted || (s10.done = t7 || null, this.scheduleAccept());
    }, (t7) => {
      this.view.dispatch({ effects: lK.of(null) }), iE(this.view.state, t7);
    });
  }
  scheduleAccept() {
    this.running.every((t6) => void 0 !== t6.done) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(lG).updateSyncTime));
  }
  accept() {
    var t6;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e10 = [], i10 = this.view.state.facet(lG);
    for (let n10 = 0; n10 < this.running.length; n10++) {
      let s10 = this.running[n10];
      if (void 0 === s10.done)
        continue;
      if (this.running.splice(n10--, 1), s10.done) {
        let n11 = new l9(s10.active.source, s10.active.explicitPos, s10.done, s10.done.from, null !== (t6 = s10.done.to) && void 0 !== t6 ? t6 : lW(s10.updates.length ? s10.updates[0].startState : this.view.state));
        for (let t7 of s10.updates)
          n11 = n11.update(t7, i10);
        if (n11.hasResult()) {
          e10.push(n11);
          continue;
        }
      }
      let r10 = this.view.state.field(ht).active.find((t7) => t7.source == s10.active.source);
      if (r10 && 1 == r10.state) {
        if (null == s10.done) {
          let t7 = new l5(s10.active.source, 0);
          for (let e11 of s10.updates)
            t7 = t7.update(e11, i10);
          1 != t7.state && e10.push(t7);
        } else
          this.startQuery(r10);
      }
    }
    e10.length && this.view.dispatch({ effects: l6.of(e10) });
  }
}, { eventHandlers: { blur(t6) {
  let e10 = this.view.state.field(ht, false);
  if (e10 && e10.tooltip && this.view.state.facet(lG).closeOnBlur) {
    let i10 = e10.open && sI(this.view, e10.open.tooltip);
    i10 && i10.dom.contains(t6.relatedTarget) || setTimeout(() => this.view.dispatch({ effects: lK.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  3 == this.composing && setTimeout(() => this.view.dispatch({ effects: lq.of(false) }), 20), this.composing = 0;
} } }), hl = "object" == typeof navigator && /Win/.test(navigator.platform), hh = tu.highest(n6.domEventHandlers({ keydown(t6, e10) {
  let i10 = e10.state.field(ht, false);
  if (!i10 || !i10.open || i10.open.disabled || i10.open.selected < 0 || t6.key.length > 1 || t6.ctrlKey && !(hl && t6.altKey) || t6.metaKey)
    return false;
  let n10 = i10.open.options[i10.open.selected], s10 = i10.active.find((t7) => t7.source == n10.source), r10 = n10.completion.commitCharacters || s10.result.commitCharacters;
  return r10 && r10.indexOf(t6.key) > -1 && he(e10, n10), false;
} })), ha = n6.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"···"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } }, ".cm-completionIcon-class": { "&:after": { content: "'○'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'◌'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } }, ".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'∪'" } }, ".cm-completionIcon-property": { "&:after": { content: "'□'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } });
class hc {
  constructor(t6, e10, i10, n10) {
    this.field = t6, this.line = e10, this.from = i10, this.to = n10;
  }
}
class hd {
  constructor(t6, e10, i10) {
    this.field = t6, this.from = e10, this.to = i10;
  }
  map(t6) {
    let e10 = t6.mapPos(this.from, -1, q.TrackDel), i10 = t6.mapPos(this.to, 1, q.TrackDel);
    return null == e10 || null == i10 ? null : new hd(this.field, e10, i10);
  }
}
class hu {
  constructor(t6, e10) {
    this.lines = t6, this.fieldPositions = e10;
  }
  instantiate(t6, e10) {
    let i10 = [], n10 = [e10], s10 = t6.doc.lineAt(e10), r10 = /^\s*/.exec(s10.text)[0];
    for (let s11 of this.lines) {
      if (i10.length) {
        let i11 = r10, o10 = /^\t*/.exec(s11)[0].length;
        for (let e11 = 0; e11 < o10; e11++)
          i11 += t6.facet(o$);
        n10.push(e10 + i11.length - o10), s11 = i11 + s11.slice(o10);
      }
      i10.push(s11), e10 += s11.length + 1;
    }
    return { text: i10, ranges: this.fieldPositions.map((t7) => new hd(t7.field, n10[t7.line] + t7.from, n10[t7.line] + t7.to)) };
  }
  static parse(t6) {
    let e10 = [], i10 = [], n10 = [], s10;
    for (let r10 of t6.split(/\r\n?|\n/)) {
      for (; s10 = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(r10); ) {
        let t7 = s10[1] ? +s10[1] : null, o10 = s10[2] || s10[3] || "", l10 = -1;
        for (let i11 = 0; i11 < e10.length; i11++)
          (null != t7 ? e10[i11].seq == t7 : o10 && e10[i11].name == o10) && (l10 = i11);
        if (l10 < 0) {
          let i11 = 0;
          for (; i11 < e10.length && (null == t7 || null != e10[i11].seq && e10[i11].seq < t7); )
            i11++;
          for (let s11 of (e10.splice(i11, 0, { seq: t7, name: o10 }), l10 = i11, n10))
            s11.field >= l10 && s11.field++;
        }
        n10.push(new hc(l10, i10.length, s10.index, s10.index + o10.length)), r10 = r10.slice(0, s10.index) + o10 + r10.slice(s10.index + s10[0].length);
      }
      for (let t7; t7 = /\\([{}])/.exec(r10); )
        for (let e11 of (r10 = r10.slice(0, t7.index) + t7[1] + r10.slice(t7.index + t7[0].length), n10))
          e11.line == i10.length && e11.from > t7.index && (e11.from--, e11.to--);
      i10.push(r10);
    }
    return new hu(i10, n10);
  }
}
let hf = e3.widget({ widget: new class extends e1 {
  toDOM() {
    let t6 = document.createElement("span");
    return t6.className = "cm-snippetFieldPosition", t6;
  }
  ignoreEvent() {
    return false;
  }
}() }), hp = e3.mark({ class: "cm-snippetField" });
class hg {
  constructor(t6, e10) {
    this.ranges = t6, this.active = e10, this.deco = e3.set(t6.map((t7) => (t7.from == t7.to ? hf : hp).range(t7.from, t7.to)));
  }
  map(t6) {
    let e10 = [];
    for (let i10 of this.ranges) {
      let n10 = i10.map(t6);
      if (!n10)
        return null;
      e10.push(n10);
    }
    return new hg(e10, this.active);
  }
  selectionInsideField(t6) {
    return t6.ranges.every((t7) => this.ranges.some((e10) => e10.field == this.active && e10.from <= t7.from && e10.to >= t7.to));
  }
}
let hm = tT.define({ map: (t6, e10) => t6 && t6.map(e10) }), hv = tT.define(), hw = ta.define({ create: () => null, update(t6, e10) {
  for (let i10 of e10.effects) {
    if (i10.is(hm))
      return i10.value;
    if (i10.is(hv) && t6)
      return new hg(t6.ranges, i10.value);
  }
  return t6 && e10.docChanged && (t6 = t6.map(e10.changes)), t6 && e10.selection && !t6.selectionInsideField(e10.selection) && (t6 = null), t6;
}, provide: (t6) => n6.decorations.from(t6, (t7) => t7 ? t7.deco : e3.none) });
function hy(t6, e10) {
  return tt.create(t6.filter((t7) => t7.field == e10).map((t7) => tt.range(t7.from, t7.to)));
}
function hb(t6) {
  return (e10) => {
    let { state: i10, dispatch: n10 } = e10, s10 = i10.field(hw, false);
    if (!s10 || t6 < 0 && 0 == s10.active)
      return false;
    let r10 = s10.active + t6, o10 = t6 > 0 && !s10.ranges.some((e11) => e11.field == r10 + t6);
    return n10(i10.update({ selection: hy(s10.ranges, r10), effects: hm.of(o10 ? null : new hg(s10.ranges, r10)), scrollIntoView: true })), true;
  };
}
let hx = [{ key: "Tab", run: hb(1), shift: hb(-1) }, { key: "Escape", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return !!e10.field(hw, false) && (i10(e10.update({ effects: hm.of(null) })), true);
} }], hk = tn.define({ combine: (t6) => t6.length ? t6[0] : hx }), hS = tu.highest(so.compute([hk], (t6) => t6.facet(hk)));
function hC(t6, e10) {
  let i10;
  return Object.assign(Object.assign({}, e10), { apply: (i10 = hu.parse(t6), (t7, e11, n10, s10) => {
    let { text: r10, ranges: o10 } = i10.instantiate(t7.state, n10), l10 = { changes: { from: n10, to: s10, insert: v.of(r10) }, scrollIntoView: true, annotations: e11 ? [lz.of(e11), tE.userEvent.of("input.complete")] : void 0 };
    if (o10.length && (l10.selection = hy(o10, 0)), o10.some((t10) => t10.field > 0)) {
      let e12 = new hg(o10, 0), i11 = l10.effects = [hm.of(e12)];
      void 0 === t7.state.field(hw, false) && i11.push(tT.appendConfig.of([hw, hS, hA, ha]));
    }
    t7.dispatch(t7.state.update(l10));
  }) });
}
let hA = n6.domEventHandlers({ mousedown(t6, e10) {
  let i10 = e10.state.field(hw, false), n10;
  if (!i10 || null == (n10 = e10.posAtCoords({ x: t6.clientX, y: t6.clientY })))
    return false;
  let s10 = i10.ranges.find((t7) => t7.from <= n10 && t7.to >= n10);
  return !!s10 && s10.field != i10.active && (e10.dispatch({ selection: hy(i10.ranges, s10.field), effects: hm.of(i10.ranges.some((t7) => t7.field > s10.field) ? new hg(i10.ranges, s10.field) : null), scrollIntoView: true }), true);
} }), hM = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, hO = tT.define({ map(t6, e10) {
  let i10 = e10.mapPos(t6, -1, q.TrackAfter);
  return null == i10 ? void 0 : i10;
} }), hD = new class extends tW {
}();
hD.startSide = 1, hD.endSide = -1;
let hT = ta.define({ create: () => tj.empty, update(t6, e10) {
  if (t6 = t6.map(e10.changes), e10.selection) {
    let i10 = e10.state.doc.lineAt(e10.selection.main.head);
    t6 = t6.update({ filter: (t7) => t7 >= i10.from && t7 <= i10.to });
  }
  for (let i10 of e10.effects)
    i10.is(hO) && (t6 = t6.update({ add: [hD.range(i10.value, i10.value + 1)] }));
  return t6;
} }), hE = "()[]{}<>";
function hR(t6) {
  for (let e10 = 0; e10 < hE.length; e10 += 2)
    if (hE.charCodeAt(e10) == t6)
      return hE.charAt(e10 + 1);
  return P(t6 < 128 ? t6 : t6 + 1);
}
function hB(t6, e10) {
  return t6.languageDataAt("closeBrackets", e10)[0] || hM;
}
let hP = "object" == typeof navigator && /Android\b/.test(navigator.userAgent), hL = n6.inputHandler.of((t6, e10, i10, n10) => {
  if ((hP ? t6.composing : t6.compositionStarted) || t6.state.readOnly)
    return false;
  let s10 = t6.state.selection.main;
  if (n10.length > 2 || 2 == n10.length && 1 == L(B(n10, 0)) || e10 != s10.from || i10 != s10.to)
    return false;
  let r10 = function(t7, e11) {
    let i11 = hB(t7, t7.selection.main.head), n11 = i11.brackets || hM.brackets;
    for (let s11 of n11) {
      let r11 = hR(B(s11, 0));
      if (e11 == s11)
        return r11 == s11 ? function(t10, e12, i12, n12) {
          let s12 = n12.stringPrefixes || hM.stringPrefixes, r12 = null, o10 = t10.changeByRange((n13) => {
            if (!n13.empty)
              return { changes: [{ insert: e12, from: n13.from }, { insert: e12, from: n13.to }], effects: hO.of(n13.to + e12.length), range: tt.range(n13.anchor + e12.length, n13.head + e12.length) };
            let o11 = n13.head, l10 = hV(t10.doc, o11), h10;
            if (l10 == e12) {
              if (hH(t10, o11))
                return { changes: { insert: e12 + e12, from: o11 }, effects: hO.of(o11 + e12.length), range: tt.cursor(o11 + e12.length) };
              if (hI(t10, o11)) {
                let n14 = i12 && t10.sliceDoc(o11, o11 + 3 * e12.length) == e12 + e12 + e12 ? e12 + e12 + e12 : e12;
                return { changes: { from: o11, to: o11 + n14.length, insert: n14 }, range: tt.cursor(o11 + n14.length) };
              }
            } else if (i12 && t10.sliceDoc(o11 - 2 * e12.length, o11) == e12 + e12 && (h10 = hW(t10, o11 - 2 * e12.length, s12)) > -1 && hH(t10, h10))
              return { changes: { insert: e12 + e12 + e12 + e12, from: o11 }, effects: hO.of(o11 + e12.length), range: tt.cursor(o11 + e12.length) };
            else if (t10.charCategorizer(o11)(l10) != tN.Word && hW(t10, o11, s12) > -1 && !function(t11, e13, i13, n14) {
              let s13 = oL(t11).resolveInner(e13, -1), r13 = n14.reduce((t12, e14) => Math.max(t12, e14.length), 0);
              for (let o12 = 0; o12 < 5; o12++) {
                let o13 = t11.sliceDoc(s13.from, Math.min(s13.to, s13.from + i13.length + r13)), l11 = o13.indexOf(i13);
                if (!l11 || l11 > -1 && n14.indexOf(o13.slice(0, l11)) > -1) {
                  let e14 = s13.firstChild;
                  for (; e14 && e14.from == s13.from && e14.to - e14.from > i13.length + l11; ) {
                    if (t11.sliceDoc(e14.to - i13.length, e14.to) == i13)
                      return false;
                    e14 = e14.firstChild;
                  }
                  return true;
                }
                let h11 = s13.to == e13 && s13.parent;
                if (!h11)
                  break;
                s13 = h11;
              }
              return false;
            }(t10, o11, e12, s12))
              return { changes: { insert: e12 + e12, from: o11 }, effects: hO.of(o11 + e12.length), range: tt.cursor(o11 + e12.length) };
            return { range: r12 = n13 };
          });
          return r12 ? null : t10.update(o10, { scrollIntoView: true, userEvent: "input.type" });
        }(t7, s11, n11.indexOf(s11 + s11 + s11) > -1, i11) : function(t10, e12, i12, n12) {
          let s12 = null, r12 = t10.changeByRange((r13) => {
            if (!r13.empty)
              return { changes: [{ insert: e12, from: r13.from }, { insert: i12, from: r13.to }], effects: hO.of(r13.to + e12.length), range: tt.range(r13.anchor + e12.length, r13.head + e12.length) };
            let o10 = hV(t10.doc, r13.head);
            return !o10 || /\s/.test(o10) || n12.indexOf(o10) > -1 ? { changes: { insert: e12 + i12, from: r13.head }, effects: hO.of(r13.head + e12.length), range: tt.cursor(r13.head + e12.length) } : { range: s12 = r13 };
          });
          return s12 ? null : t10.update(r12, { scrollIntoView: true, userEvent: "input.type" });
        }(t7, s11, r11, i11.before || hM.before);
      if (e11 == r11 && hI(t7, t7.selection.main.from))
        return function(t10, e12, i12) {
          let n12 = null, s12 = t10.changeByRange((e13) => e13.empty && hV(t10.doc, e13.head) == i12 ? { changes: { from: e13.head, to: e13.head + i12.length, insert: i12 }, range: tt.cursor(e13.head + i12.length) } : n12 = { range: e13 });
          return n12 ? null : t10.update(s12, { scrollIntoView: true, userEvent: "input.type" });
        }(t7, 0, r11);
    }
    return null;
  }(t6.state, n10);
  return !!r10 && (t6.dispatch(r10), true);
}), hN = [{ key: "Backspace", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  if (e10.readOnly)
    return false;
  let n10 = hB(e10, e10.selection.main.head).brackets || hM.brackets, s10 = null, r10 = e10.changeByRange((t7) => {
    if (t7.empty) {
      var i11, r11;
      let s11;
      let o10 = (i11 = e10.doc, r11 = t7.head, L(B(s11 = i11.sliceString(r11 - 2, r11), 0)) == s11.length ? s11 : s11.slice(1));
      for (let i12 of n10)
        if (i12 == o10 && hV(e10.doc, t7.head) == hR(B(i12, 0)))
          return { changes: { from: t7.head - i12.length, to: t7.head + i12.length }, range: tt.cursor(t7.head - i12.length) };
    }
    return { range: s10 = t7 };
  });
  return s10 || i10(e10.update(r10, { scrollIntoView: true, userEvent: "delete.backward" })), !s10;
} }];
function hI(t6, e10) {
  let i10 = false;
  return t6.field(hT).between(0, t6.doc.length, (t7) => {
    t7 == e10 && (i10 = true);
  }), i10;
}
function hV(t6, e10) {
  let i10 = t6.sliceString(e10, e10 + 2);
  return i10.slice(0, L(B(i10, 0)));
}
function hH(t6, e10) {
  let i10 = oL(t6).resolveInner(e10 + 1);
  return i10.parent && i10.from == e10;
}
function hW(t6, e10, i10) {
  let n10 = t6.charCategorizer(e10);
  if (n10(t6.sliceDoc(e10 - 1, e10)) != tN.Word)
    return e10;
  for (let s10 of i10) {
    let i11 = e10 - s10.length;
    if (t6.sliceDoc(i11, e10) == s10 && n10(t6.sliceDoc(i11 - 1, i11)) != tN.Word)
      return i11;
  }
  return -1;
}
function hF() {
  let t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return [hh, ht, lG.of(t6), ho, h_, ha];
}
let hz = [{ key: "Ctrl-Space", run: hs }, { key: "Escape", run: (t6) => {
  let e10 = t6.state.field(ht, false);
  return !!(e10 && e10.active.some((t7) => 0 != t7.state)) && (t6.dispatch({ effects: lK.of(null) }), true);
} }, { key: "ArrowDown", run: hn(true) }, { key: "ArrowUp", run: hn(false) }, { key: "PageDown", run: hn(true, "page") }, { key: "PageUp", run: hn(false, "page") }, { key: "Enter", run: (t6) => {
  let e10 = t6.state.field(ht, false);
  return !(t6.state.readOnly || !e10 || !e10.open || e10.open.selected < 0 || e10.open.disabled || Date.now() - e10.open.timestamp < t6.state.facet(lG).interactionDelay) && he(t6, e10.open.options[e10.open.selected]);
} }], h_ = tu.highest(so.computeN([lG], (t6) => t6.facet(lG).defaultKeymap ? [hz] : []));
function hj(t6, e10) {
  return (i10) => {
    let { state: n10, dispatch: s10 } = i10;
    if (n10.readOnly)
      return false;
    let r10 = t6(e10, n10);
    return !!r10 && (s10(n10.update(r10)), true);
  };
}
let hq = hj(function(t6, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10.selection.ranges, n10 = [], s10 = -1;
  for (let { from: t7, to: r10 } of i10) {
    let i11 = n10.length, o10 = 1e9, l10 = hU(e10, t7).line;
    if (l10) {
      for (let i12 = t7; i12 <= r10; ) {
        let h10 = e10.doc.lineAt(i12);
        if (h10.from > s10 && (t7 == r10 || r10 > h10.from)) {
          s10 = h10.from;
          let t10 = /^\s*/.exec(h10.text)[0].length, e11 = t10 == h10.length, i13 = h10.text.slice(t10, t10 + l10.length) == l10 ? t10 : -1;
          t10 < h10.text.length && t10 < o10 && (o10 = t10), n10.push({ line: h10, comment: i13, token: l10, indent: t10, empty: e11, single: false });
        }
        i12 = h10.to + 1;
      }
      if (o10 < 1e9)
        for (let t10 = i11; t10 < n10.length; t10++)
          n10[t10].indent < n10[t10].line.text.length && (n10[t10].indent = o10);
      n10.length == i11 + 1 && (n10[i11].single = true);
    }
  }
  if (2 != t6 && n10.some((t7) => t7.comment < 0 && (!t7.empty || t7.single))) {
    let t7 = [];
    for (let { line: e11, token: i12, indent: s11, empty: r10, single: o10 } of n10)
      (o10 || !r10) && t7.push({ from: e11.from + s11, insert: i12 + " " });
    let i11 = e10.changes(t7);
    return { changes: i11, selection: e10.selection.map(i11, 1) };
  }
  if (1 != t6 && n10.some((t7) => t7.comment >= 0)) {
    let t7 = [];
    for (let { line: e11, comment: i11, token: s11 } of n10)
      if (i11 >= 0) {
        let n11 = e11.from + i11, r10 = n11 + s11.length;
        " " == e11.text[r10 - e11.from] && r10++, t7.push({ from: n11, to: r10 });
      }
    return { changes: t7 };
  }
  return null;
}, 0), hK = hj(hG, 0), h$ = hj((t6, e10) => hG(t6, e10, function(t7) {
  let e11 = [];
  for (let i10 of t7.selection.ranges) {
    let n10 = t7.doc.lineAt(i10.from), s10 = i10.to <= n10.to ? n10 : t7.doc.lineAt(i10.to), r10 = e11.length - 1;
    r10 >= 0 && e11[r10].to > n10.from ? e11[r10].to = s10.to : e11.push({ from: n10.from + /^\s*/.exec(n10.text)[0].length, to: s10.to });
  }
  return e11;
}(e10)), 0);
function hU(t6, e10) {
  let i10 = t6.languageDataAt("commentTokens", e10);
  return i10.length ? i10[0] : {};
}
function hG(t6, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10.selection.ranges, n10 = i10.map((t7) => hU(e10, t7.from).block);
  if (!n10.every((t7) => t7))
    return null;
  let s10 = i10.map((t7, i11) => function(t10, e11, i12, n11) {
    let s11, r10, { open: o10, close: l10 } = e11, h10 = t10.sliceDoc(i12 - 50, i12), a5 = t10.sliceDoc(n11, n11 + 50), c2 = /\s*$/.exec(h10)[0].length, d2 = /^\s*/.exec(a5)[0].length, u2 = h10.length - c2;
    if (h10.slice(u2 - o10.length, u2) == o10 && a5.slice(d2, d2 + l10.length) == l10)
      return { open: { pos: i12 - c2, margin: c2 && 1 }, close: { pos: n11 + d2, margin: d2 && 1 } };
    n11 - i12 <= 100 ? s11 = r10 = t10.sliceDoc(i12, n11) : (s11 = t10.sliceDoc(i12, i12 + 50), r10 = t10.sliceDoc(n11 - 50, n11));
    let f2 = /^\s*/.exec(s11)[0].length, p2 = /\s*$/.exec(r10)[0].length, g2 = r10.length - p2 - l10.length;
    return s11.slice(f2, f2 + o10.length) == o10 && r10.slice(g2, g2 + l10.length) == l10 ? { open: { pos: i12 + f2 + o10.length, margin: /\s/.test(s11.charAt(f2 + o10.length)) ? 1 : 0 }, close: { pos: n11 - p2 - l10.length, margin: /\s/.test(r10.charAt(g2 - 1)) ? 1 : 0 } } : null;
  }(e10, n10[i11], t7.from, t7.to));
  if (2 != t6 && !s10.every((t7) => t7))
    return { changes: e10.changes(i10.map((t7, e11) => s10[e11] ? [] : [{ from: t7.from, insert: n10[e11].open + " " }, { from: t7.to, insert: " " + n10[e11].close }])) };
  if (1 != t6 && s10.some((t7) => t7)) {
    let t7 = [];
    for (let e11 = 0, i11; e11 < s10.length; e11++)
      if (i11 = s10[e11]) {
        let s11 = n10[e11], { open: r10, close: o10 } = i11;
        t7.push({ from: r10.pos - s11.open.length, to: r10.pos + r10.margin }, { from: o10.pos - o10.margin, to: o10.pos + s11.close.length });
      }
    return { changes: t7 };
  }
  return null;
}
let hJ = tM.define(), hY = tM.define(), hX = tn.define(), hQ = tn.define({ combine: (t6) => tH(t6, { minDepth: 100, newGroupDelay: 500, joinToEvent: (t7, e10) => e10 }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (t7, e10) => (i10, n10) => t7(i10, n10) || e10(i10, n10) }) }), hZ = ta.define({ create: () => ai.empty, update(t6, e10) {
  let i10 = e10.state.facet(hQ), n10 = e10.annotation(hJ);
  if (n10) {
    let s11 = h4.fromTransaction(e10, n10.selection), r11 = n10.side, o11 = 0 == r11 ? t6.undone : t6.done;
    return o11 = s11 ? h5(o11, o11.length, i10.minDepth, s11) : h7(o11, e10.startState.selection), new ai(0 == r11 ? n10.rest : o11, 0 == r11 ? o11 : n10.rest);
  }
  let s10 = e10.annotation(hY);
  if (("full" == s10 || "before" == s10) && (t6 = t6.isolate()), false === e10.annotation(tE.addToHistory))
    return e10.changes.empty ? t6 : t6.addMapping(e10.changes.desc);
  let r10 = h4.fromTransaction(e10), o10 = e10.annotation(tE.time), l10 = e10.annotation(tE.userEvent);
  return r10 ? t6 = t6.addChanges(r10, o10, l10, i10, e10) : e10.selection && (t6 = t6.addSelection(e10.startState.selection, o10, l10, i10.newGroupDelay)), ("full" == s10 || "after" == s10) && (t6 = t6.isolate()), t6;
}, toJSON: (t6) => ({ done: t6.done.map((t7) => t7.toJSON()), undone: t6.undone.map((t7) => t7.toJSON()) }), fromJSON: (t6) => new ai(t6.done.map(h4.fromJSON), t6.undone.map(h4.fromJSON)) });
function h0(t6, e10) {
  return function(i10) {
    let { state: n10, dispatch: s10 } = i10;
    if (!e10 && n10.readOnly)
      return false;
    let r10 = n10.field(hZ, false);
    if (!r10)
      return false;
    let o10 = r10.pop(t6, n10, e10);
    return !!o10 && (s10(o10), true);
  };
}
let h1 = h0(0, false), h2 = h0(1, false), h3 = h0(0, true), h8 = h0(1, true);
class h4 {
  constructor(t6, e10, i10, n10, s10) {
    this.changes = t6, this.effects = e10, this.mapped = i10, this.startSelection = n10, this.selectionsAfter = s10;
  }
  setSelAfter(t6) {
    return new h4(this.changes, this.effects, this.mapped, this.startSelection, t6);
  }
  toJSON() {
    var t6, e10, i10;
    return { changes: null === (t6 = this.changes) || void 0 === t6 ? void 0 : t6.toJSON(), mapped: null === (e10 = this.mapped) || void 0 === e10 ? void 0 : e10.toJSON(), startSelection: null === (i10 = this.startSelection) || void 0 === i10 ? void 0 : i10.toJSON(), selectionsAfter: this.selectionsAfter.map((t7) => t7.toJSON()) };
  }
  static fromJSON(t6) {
    return new h4(t6.changes && $.fromJSON(t6.changes), [], t6.mapped && K.fromJSON(t6.mapped), t6.startSelection && tt.fromJSON(t6.startSelection), t6.selectionsAfter.map(tt.fromJSON));
  }
  static fromTransaction(t6, e10) {
    let i10 = h6;
    for (let e11 of t6.startState.facet(hX)) {
      let n10 = e11(t6);
      n10.length && (i10 = i10.concat(n10));
    }
    return !i10.length && t6.changes.empty ? null : new h4(t6.changes.invert(t6.startState.doc), i10, void 0, e10 || t6.startState.selection, h6);
  }
  static selection(t6) {
    return new h4(void 0, h6, void 0, void 0, t6);
  }
}
function h5(t6, e10, i10, n10) {
  let s10 = t6.slice(e10 + 1 > i10 + 20 ? e10 - i10 - 1 : 0, e10);
  return s10.push(n10), s10;
}
function h9(t6, e10) {
  return t6.length ? e10.length ? t6.concat(e10) : t6 : e10;
}
let h6 = [];
function h7(t6, e10) {
  if (!t6.length)
    return [h4.selection([e10])];
  {
    let i10 = t6[t6.length - 1], n10 = i10.selectionsAfter.slice(Math.max(0, i10.selectionsAfter.length - 200));
    return n10.length && n10[n10.length - 1].eq(e10) ? t6 : (n10.push(e10), h5(t6, t6.length - 1, 1e9, i10.setSelAfter(n10)));
  }
}
function at(t6, e10) {
  if (!t6.length)
    return t6;
  let i10 = t6.length, n10 = h6;
  for (; i10; ) {
    let s10 = function(t7, e11, i11) {
      let n11 = h9(t7.selectionsAfter.length ? t7.selectionsAfter.map((t10) => t10.map(e11)) : h6, i11);
      if (!t7.changes)
        return h4.selection(n11);
      let s11 = t7.changes.map(e11), r10 = e11.mapDesc(t7.changes, true), o10 = t7.mapped ? t7.mapped.composeDesc(r10) : r10;
      return new h4(s11, tT.mapEffects(t7.effects, e11), o10, t7.startSelection.map(r10), n11);
    }(t6[i10 - 1], e10, n10);
    if (s10.changes && !s10.changes.empty || s10.effects.length) {
      let e11 = t6.slice(0, i10);
      return e11[i10 - 1] = s10, e11;
    }
    e10 = s10.mapped, i10--, n10 = s10.selectionsAfter;
  }
  return n10.length ? [h4.selection(n10)] : h6;
}
let ae = /^(input\.type|delete)($|\.)/;
class ai {
  constructor(t6, e10, i10 = 0, n10) {
    this.done = t6, this.undone = e10, this.prevTime = i10, this.prevUserEvent = n10;
  }
  isolate() {
    return this.prevTime ? new ai(this.done, this.undone) : this;
  }
  addChanges(t6, e10, i10, n10, s10) {
    var r10, o10;
    let l10, h10, a5 = this.done, c2 = a5[a5.length - 1];
    return new ai(a5 = c2 && c2.changes && !c2.changes.empty && t6.changes && (!i10 || ae.test(i10)) && (!c2.selectionsAfter.length && e10 - this.prevTime < n10.newGroupDelay && n10.joinToEvent(s10, (r10 = c2.changes, o10 = t6.changes, l10 = [], h10 = false, r10.iterChangedRanges((t7, e11) => l10.push(t7, e11)), o10.iterChangedRanges((t7, e11, i11, n11) => {
      for (let t10 = 0; t10 < l10.length; ) {
        let e12 = l10[t10++], s11 = l10[t10++];
        n11 >= e12 && i11 <= s11 && (h10 = true);
      }
    }), h10)) || "input.type.compose" == i10) ? h5(a5, a5.length - 1, n10.minDepth, new h4(t6.changes.compose(c2.changes), h9(t6.effects, c2.effects), c2.mapped, c2.startSelection, h6)) : h5(a5, a5.length, n10.minDepth, t6), h6, e10, i10);
  }
  addSelection(t6, e10, i10, n10) {
    var s10;
    let r10 = this.done.length ? this.done[this.done.length - 1].selectionsAfter : h6;
    return r10.length > 0 && e10 - this.prevTime < n10 && i10 == this.prevUserEvent && i10 && /^select($|\.)/.test(i10) && (s10 = r10[r10.length - 1]).ranges.length == t6.ranges.length && 0 === s10.ranges.filter((e11, i11) => e11.empty != t6.ranges[i11].empty).length ? this : new ai(h7(this.done, t6), this.undone, e10, i10);
  }
  addMapping(t6) {
    return new ai(at(this.done, t6), at(this.undone, t6), this.prevTime, this.prevUserEvent);
  }
  pop(t6, e10, i10) {
    let n10 = 0 == t6 ? this.done : this.undone;
    if (0 == n10.length)
      return null;
    let s10 = n10[n10.length - 1], r10 = s10.selectionsAfter[0] || e10.selection;
    if (i10 && s10.selectionsAfter.length) {
      let i11, o10;
      return e10.update({ selection: s10.selectionsAfter[s10.selectionsAfter.length - 1], annotations: hJ.of({ side: t6, rest: (i11 = n10[n10.length - 1], (o10 = n10.slice())[n10.length - 1] = i11.setSelAfter(i11.selectionsAfter.slice(0, i11.selectionsAfter.length - 1)), o10), selection: r10 }), userEvent: 0 == t6 ? "select.undo" : "select.redo", scrollIntoView: true });
    }
    if (!s10.changes)
      return null;
    {
      let i11 = 1 == n10.length ? h6 : n10.slice(0, n10.length - 1);
      return s10.mapped && (i11 = at(i11, s10.mapped)), e10.update({ changes: s10.changes, selection: s10.startSelection, effects: s10.effects, annotations: hJ.of({ side: t6, rest: i11, selection: r10 }), filter: false, userEvent: 0 == t6 ? "undo" : "redo", scrollIntoView: true });
    }
  }
}
ai.empty = new ai(h6, h6);
let an = [{ key: "Mod-z", run: h1, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: h2, preventDefault: true }, { linux: "Ctrl-Shift-z", run: h2, preventDefault: true }, { key: "Mod-u", run: h3, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: h8, preventDefault: true }];
function as(t6, e10) {
  return tt.create(t6.ranges.map(e10), t6.mainIndex);
}
function ar(t6, e10) {
  return t6.update({ selection: e10, scrollIntoView: true, userEvent: "select" });
}
function ao(t6, e10) {
  let { state: i10, dispatch: n10 } = t6, s10 = as(i10.selection, e10);
  return !s10.eq(i10.selection, true) && (n10(ar(i10, s10)), true);
}
function al(t6, e10) {
  return tt.cursor(e10 ? t6.to : t6.from);
}
function ah(t6, e10) {
  return ao(t6, (i10) => i10.empty ? t6.moveByChar(i10, e10) : al(i10, e10));
}
function aa(t6) {
  return t6.textDirectionAt(t6.state.selection.main.head) == ii.LTR;
}
let ac = (t6) => ah(t6, !aa(t6)), ad = (t6) => ah(t6, aa(t6));
function au(t6, e10) {
  return ao(t6, (i10) => i10.empty ? t6.moveByGroup(i10, e10) : al(i10, e10));
}
function af(t6, e10, i10) {
  let n10, s10, r10 = oL(t6).resolveInner(e10.head), o10 = i10 ? rW.closedBy : rW.openedBy;
  for (let n11 = e10.head; ; ) {
    let e11 = i10 ? r10.childAfter(n11) : r10.childBefore(n11);
    if (!e11)
      break;
    !function(t7, e12, i11) {
      if (e12.type.prop(i11))
        return true;
      let n12 = e12.to - e12.from;
      return n12 && (n12 > 2 || /[^\s,.;:]/.test(t7.sliceDoc(e12.from, e12.to))) || e12.firstChild;
    }(t6, e11, o10) ? n11 = i10 ? e11.to : e11.from : r10 = e11;
  }
  return s10 = r10.type.prop(o10) && (n10 = i10 ? lT(t6, r10.from, 1) : lT(t6, r10.to, -1)) && n10.matched ? i10 ? n10.end.to : n10.end.from : i10 ? r10.to : r10.from, tt.cursor(s10, i10 ? -1 : 1);
}
function ap(t6, e10) {
  return ao(t6, (i10) => {
    if (!i10.empty)
      return al(i10, e10);
    let n10 = t6.moveVertically(i10, e10);
    return n10.head != i10.head ? n10 : t6.moveToLineBoundary(i10, e10);
  });
}
let ag = (t6) => ap(t6, false), am = (t6) => ap(t6, true);
function av(t6) {
  let e10 = t6.scrollDOM.clientHeight < t6.scrollDOM.scrollHeight - 2, i10 = 0, n10 = 0, s10;
  if (e10) {
    for (let e11 of t6.state.facet(n6.scrollMargins)) {
      let s11 = e11(t6);
      (null == s11 ? void 0 : s11.top) && (i10 = Math.max(null == s11 ? void 0 : s11.top, i10)), (null == s11 ? void 0 : s11.bottom) && (n10 = Math.max(null == s11 ? void 0 : s11.bottom, n10));
    }
    s10 = t6.scrollDOM.clientHeight - i10 - n10;
  } else
    s10 = (t6.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: i10, marginBottom: n10, selfScroll: e10, height: Math.max(t6.defaultLineHeight, s10 - 5) };
}
function aw(t6, e10) {
  let i10, n10 = av(t6), { state: s10 } = t6, r10 = as(s10.selection, (i11) => i11.empty ? t6.moveVertically(i11, e10, n10.height) : al(i11, e10));
  if (r10.eq(s10.selection))
    return false;
  if (n10.selfScroll) {
    let e11 = t6.coordsAtPos(s10.selection.main.head), o10 = t6.scrollDOM.getBoundingClientRect(), l10 = o10.top + n10.marginTop, h10 = o10.bottom - n10.marginBottom;
    e11 && e11.top > l10 && e11.bottom < h10 && (i10 = n6.scrollIntoView(r10.main.head, { y: "start", yMargin: e11.top - l10 }));
  }
  return t6.dispatch(ar(s10, r10), { effects: i10 }), true;
}
let ay = (t6) => aw(t6, false), ab = (t6) => aw(t6, true);
function ax(t6, e10, i10) {
  let n10 = t6.lineBlockAt(e10.head), s10 = t6.moveToLineBoundary(e10, i10);
  if (s10.head == e10.head && s10.head != (i10 ? n10.to : n10.from) && (s10 = t6.moveToLineBoundary(e10, i10, false)), !i10 && s10.head == n10.from && n10.length) {
    let i11 = /^\s*/.exec(t6.state.sliceDoc(n10.from, Math.min(n10.from + 100, n10.to)))[0].length;
    i11 && e10.head != n10.from + i11 && (s10 = tt.cursor(n10.from + i11));
  }
  return s10;
}
function ak(t6, e10) {
  let i10 = as(t6.state.selection, (t7) => {
    let i11 = e10(t7);
    return tt.range(t7.anchor, i11.head, i11.goalColumn, i11.bidiLevel || void 0);
  });
  return !i10.eq(t6.state.selection) && (t6.dispatch(ar(t6.state, i10)), true);
}
function aS(t6, e10) {
  return ak(t6, (i10) => t6.moveByChar(i10, e10));
}
let aC = (t6) => aS(t6, !aa(t6)), aA = (t6) => aS(t6, aa(t6));
function aM(t6, e10) {
  return ak(t6, (i10) => t6.moveByGroup(i10, e10));
}
function aO(t6, e10) {
  return ak(t6, (i10) => t6.moveVertically(i10, e10));
}
let aD = (t6) => aO(t6, false), aT = (t6) => aO(t6, true);
function aE(t6, e10) {
  return ak(t6, (i10) => t6.moveVertically(i10, e10, av(t6).height));
}
let aR = (t6) => aE(t6, false), aB = (t6) => aE(t6, true), aP = (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return i10(ar(e10, { anchor: 0 })), true;
}, aL = (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return i10(ar(e10, { anchor: e10.doc.length })), true;
}, aN = (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return i10(ar(e10, { anchor: e10.selection.main.anchor, head: 0 })), true;
}, aI = (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return i10(ar(e10, { anchor: e10.selection.main.anchor, head: e10.doc.length })), true;
};
function aV(t6, e10) {
  if (t6.state.readOnly)
    return false;
  let i10 = "delete.selection", { state: n10 } = t6, s10 = n10.changeByRange((n11) => {
    let { from: s11, to: r10 } = n11;
    if (s11 == r10) {
      let o10 = e10(n11);
      o10 < s11 ? (i10 = "delete.backward", o10 = aH(t6, o10, false)) : o10 > s11 && (i10 = "delete.forward", o10 = aH(t6, o10, true)), s11 = Math.min(s11, o10), r10 = Math.max(r10, o10);
    } else
      s11 = aH(t6, s11, false), r10 = aH(t6, r10, true);
    return s11 == r10 ? { range: n11 } : { changes: { from: s11, to: r10 }, range: tt.cursor(s11, s11 < n11.head ? -1 : 1) };
  });
  return !s10.changes.empty && (t6.dispatch(n10.update(s10, { scrollIntoView: true, userEvent: i10, effects: "delete.selection" == i10 ? n6.announce.of(n10.phrase("Selection deleted")) : void 0 })), true);
}
function aH(t6, e10, i10) {
  if (t6 instanceof n6)
    for (let n10 of t6.state.facet(n6.atomicRanges).map((e11) => e11(t6)))
      n10.between(e10, e10, (t7, n11) => {
        t7 < e10 && n11 > e10 && (e10 = i10 ? n11 : t7);
      });
  return e10;
}
let aW = (t6, e10, i10) => aV(t6, (n10) => {
  let s10 = n10.from, { state: r10 } = t6, o10 = r10.doc.lineAt(s10), l10, h10;
  if (i10 && !e10 && s10 > o10.from && s10 < o10.from + 200 && !/[^ \t]/.test(l10 = o10.text.slice(0, s10 - o10.from))) {
    if ("	" == l10[l10.length - 1])
      return s10 - 1;
    let t7 = t1(l10, r10.tabSize) % oU(r10) || oU(r10);
    for (let e11 = 0; e11 < t7 && " " == l10[l10.length - 1 - e11]; e11++)
      s10--;
    h10 = s10;
  } else
    (h10 = D(o10.text, s10 - o10.from, e10, e10) + o10.from) == s10 && o10.number != (e10 ? r10.doc.lines : 1) ? h10 += e10 ? 1 : -1 : !e10 && /[\ufe00-\ufe0f]/.test(o10.text.slice(h10 - o10.from, s10 - o10.from)) && (h10 = D(o10.text, h10 - o10.from, false, false) + o10.from);
  return h10;
}), aF = (t6) => aW(t6, false, true), az = (t6) => aW(t6, true, false), a_ = (t6, e10) => aV(t6, (i10) => {
  let n10 = i10.head, { state: s10 } = t6, r10 = s10.doc.lineAt(n10), o10 = s10.charCategorizer(n10);
  for (let t7 = null; ; ) {
    if (n10 == (e10 ? r10.to : r10.from)) {
      n10 == i10.head && r10.number != (e10 ? s10.doc.lines : 1) && (n10 += e10 ? 1 : -1);
      break;
    }
    let l10 = D(r10.text, n10 - r10.from, e10) + r10.from, h10 = r10.text.slice(Math.min(n10, l10) - r10.from, Math.max(n10, l10) - r10.from), a5 = o10(h10);
    if (null != t7 && a5 != t7)
      break;
    (" " != h10 || n10 != i10.head) && (t7 = a5), n10 = l10;
  }
  return n10;
}), aj = (t6) => a_(t6, false);
function aq(t6) {
  let e10 = [], i10 = -1;
  for (let n10 of t6.selection.ranges) {
    let s10 = t6.doc.lineAt(n10.from), r10 = t6.doc.lineAt(n10.to);
    if (n10.empty || n10.to != r10.from || (r10 = t6.doc.lineAt(n10.to - 1)), i10 >= s10.number) {
      let t7 = e10[e10.length - 1];
      t7.to = r10.to, t7.ranges.push(n10);
    } else
      e10.push({ from: s10.from, to: r10.to, ranges: [n10] });
    i10 = r10.number + 1;
  }
  return e10;
}
function aK(t6, e10, i10) {
  if (t6.readOnly)
    return false;
  let n10 = [], s10 = [];
  for (let e11 of aq(t6)) {
    if (i10 ? e11.to == t6.doc.length : 0 == e11.from)
      continue;
    let r10 = t6.doc.lineAt(i10 ? e11.to + 1 : e11.from - 1), o10 = r10.length + 1;
    if (i10)
      for (let i11 of (n10.push({ from: e11.to, to: r10.to }, { from: e11.from, insert: r10.text + t6.lineBreak }), e11.ranges))
        s10.push(tt.range(Math.min(t6.doc.length, i11.anchor + o10), Math.min(t6.doc.length, i11.head + o10)));
    else
      for (let i11 of (n10.push({ from: r10.from, to: e11.from }, { from: e11.to, insert: t6.lineBreak + r10.text }), e11.ranges))
        s10.push(tt.range(i11.anchor - o10, i11.head - o10));
  }
  return !!n10.length && (e10(t6.update({ changes: n10, scrollIntoView: true, selection: tt.create(s10, t6.selection.mainIndex), userEvent: "move.line" })), true);
}
function a$(t6, e10, i10) {
  if (t6.readOnly)
    return false;
  let n10 = [];
  for (let e11 of aq(t6))
    i10 ? n10.push({ from: e11.from, insert: t6.doc.slice(e11.from, e11.to) + t6.lineBreak }) : n10.push({ from: e11.to, insert: t6.lineBreak + t6.doc.slice(e11.from, e11.to) });
  return e10(t6.update({ changes: n10, scrollIntoView: true, userEvent: "input.copyline" })), true;
}
let aU = aJ(false), aG = aJ(true);
function aJ(t6) {
  return (e10) => {
    let { state: i10, dispatch: n10 } = e10;
    if (i10.readOnly)
      return false;
    let s10 = i10.changeByRange((e11) => {
      let { from: n11, to: s11 } = e11, r10 = i10.doc.lineAt(n11), o10 = !t6 && n11 == s11 && function(t7, e12) {
        if (/\(\)|\[\]|\{\}/.test(t7.sliceDoc(e12 - 1, e12 + 1)))
          return { from: e12, to: e12 };
        let i11 = oL(t7).resolveInner(e12), n12 = i11.childBefore(e12), s12 = i11.childAfter(e12), r11;
        return n12 && s12 && n12.to <= e12 && s12.from >= e12 && (r11 = n12.type.prop(rW.closedBy)) && r11.indexOf(s12.name) > -1 && t7.doc.lineAt(n12.to).from == t7.doc.lineAt(s12.from).from && !/\S/.test(t7.sliceDoc(n12.to, s12.from)) ? { from: n12.to, to: s12.from } : null;
      }(i10, n11);
      t6 && (n11 = s11 = (s11 <= r10.to ? r10 : i10.doc.lineAt(s11)).to);
      let l10 = new oY(i10, { simulateBreak: n11, simulateDoubleBreak: !!o10 }), h10 = oJ(l10, n11);
      for (null == h10 && (h10 = t1(/^\s*/.exec(i10.doc.lineAt(n11).text)[0], i10.tabSize)); s11 < r10.to && /\s/.test(r10.text[s11 - r10.from]); )
        s11++;
      o10 ? { from: n11, to: s11 } = o10 : n11 > r10.from && n11 < r10.from + 100 && !/\S/.test(r10.text.slice(0, n11)) && (n11 = r10.from);
      let a5 = ["", oG(i10, h10)];
      return o10 && a5.push(oG(i10, l10.lineIndent(r10.from, -1))), { changes: { from: n11, to: s11, insert: v.of(a5) }, range: tt.cursor(n11 + 1 + a5[1].length) };
    });
    return n10(i10.update(s10, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function aY(t6, e10) {
  let i10 = -1;
  return t6.changeByRange((n10) => {
    let s10 = [];
    for (let r11 = n10.from; r11 <= n10.to; ) {
      let o10 = t6.doc.lineAt(r11);
      o10.number > i10 && (n10.empty || n10.to > o10.from) && (e10(o10, s10, n10), i10 = o10.number), r11 = o10.to + 1;
    }
    let r10 = t6.changes(s10);
    return { changes: s10, range: tt.range(r10.mapPos(n10.anchor, 1), r10.mapPos(n10.head, 1)) };
  });
}
let aX = (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return !e10.readOnly && (i10(e10.update(aY(e10, (t7, i11) => {
    i11.push({ from: t7.from, insert: e10.facet(o$) });
  }), { userEvent: "input.indent" })), true);
}, aQ = (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return !e10.readOnly && (i10(e10.update(aY(e10, (t7, i11) => {
    let n10 = /^\s*/.exec(t7.text)[0];
    if (!n10)
      return;
    let s10 = t1(n10, e10.tabSize), r10 = 0, o10 = oG(e10, Math.max(0, s10 - oU(e10)));
    for (; r10 < n10.length && r10 < o10.length && n10.charCodeAt(r10) == o10.charCodeAt(r10); )
      r10++;
    i11.push({ from: t7.from + r10, to: t7.from + n10.length, insert: o10.slice(r10) });
  }), { userEvent: "delete.dedent" })), true);
}, aZ = [{ key: "Ctrl-b", run: ac, shift: aC, preventDefault: true }, { key: "Ctrl-f", run: ad, shift: aA }, { key: "Ctrl-p", run: ag, shift: aD }, { key: "Ctrl-n", run: am, shift: aT }, { key: "Ctrl-a", run: (t6) => ao(t6, (e10) => tt.cursor(t6.lineBlockAt(e10.head).from, 1)), shift: (t6) => ak(t6, (e10) => tt.cursor(t6.lineBlockAt(e10.head).from)) }, { key: "Ctrl-e", run: (t6) => ao(t6, (e10) => tt.cursor(t6.lineBlockAt(e10.head).to, -1)), shift: (t6) => ak(t6, (e10) => tt.cursor(t6.lineBlockAt(e10.head).to)) }, { key: "Ctrl-d", run: az }, { key: "Ctrl-h", run: aF }, { key: "Ctrl-k", run: (t6) => aV(t6, (e10) => {
  let i10 = t6.lineBlockAt(e10.head).to;
  return e10.head < i10 ? i10 : Math.min(t6.state.doc.length, e10.head + 1);
}) }, { key: "Ctrl-Alt-h", run: aj }, { key: "Ctrl-o", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  if (e10.readOnly)
    return false;
  let n10 = e10.changeByRange((t7) => ({ changes: { from: t7.from, to: t7.to, insert: v.of(["", ""]) }, range: tt.cursor(t7.from) }));
  return i10(e10.update(n10, { scrollIntoView: true, userEvent: "input" })), true;
} }, { key: "Ctrl-t", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  if (e10.readOnly)
    return false;
  let n10 = e10.changeByRange((t7) => {
    if (!t7.empty || 0 == t7.from || t7.from == e10.doc.length)
      return { range: t7 };
    let i11 = t7.from, n11 = e10.doc.lineAt(i11), s10 = i11 == n11.from ? i11 - 1 : D(n11.text, i11 - n11.from, false) + n11.from, r10 = i11 == n11.to ? i11 + 1 : D(n11.text, i11 - n11.from, true) + n11.from;
    return { changes: { from: s10, to: r10, insert: e10.doc.slice(i11, r10).append(e10.doc.slice(s10, i11)) }, range: tt.cursor(r10) };
  });
  return !n10.changes.empty && (i10(e10.update(n10, { scrollIntoView: true, userEvent: "move.character" })), true);
} }, { key: "Ctrl-v", run: ab }], a0 = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: (t6) => ao(t6, (e10) => af(t6.state, e10, !aa(t6))), shift: (t6) => ak(t6, (e10) => af(t6.state, e10, !aa(t6))) }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: (t6) => ao(t6, (e10) => af(t6.state, e10, aa(t6))), shift: (t6) => ak(t6, (e10) => af(t6.state, e10, aa(t6))) }, { key: "Alt-ArrowUp", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return aK(e10, i10, false);
} }, { key: "Shift-Alt-ArrowUp", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return a$(e10, i10, false);
} }, { key: "Alt-ArrowDown", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return aK(e10, i10, true);
} }, { key: "Shift-Alt-ArrowDown", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return a$(e10, i10, true);
} }, { key: "Escape", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6, n10 = e10.selection, s10 = null;
  return n10.ranges.length > 1 ? s10 = tt.create([n10.main]) : n10.main.empty || (s10 = tt.create([tt.cursor(n10.main.head)])), !!s10 && (i10(ar(e10, s10)), true);
} }, { key: "Mod-Enter", run: aG }, { key: "Alt-l", mac: "Ctrl-l", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6, n10 = aq(e10).map((t7) => {
    let { from: i11, to: n11 } = t7;
    return tt.range(i11, Math.min(n11 + 1, e10.doc.length));
  });
  return i10(e10.update({ selection: tt.create(n10), userEvent: "select" })), true;
} }, { key: "Mod-i", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6, n10 = as(e10.selection, (t7) => {
    var i11;
    let n11 = oL(e10).resolveStack(t7.from, 1);
    for (let e11 = n11; e11; e11 = e11.next) {
      let { node: n12 } = e11;
      if ((n12.from < t7.from && n12.to >= t7.to || n12.to > t7.to && n12.from <= t7.from) && (null === (i11 = n12.parent) || void 0 === i11 ? void 0 : i11.parent))
        return tt.range(n12.to, n12.from);
    }
    return t7;
  });
  return i10(ar(e10, n10)), true;
}, preventDefault: true }, { key: "Mod-[", run: aQ }, { key: "Mod-]", run: aX }, { key: "Mod-Alt-\\", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  if (e10.readOnly)
    return false;
  let n10 = /* @__PURE__ */ Object.create(null), s10 = new oY(e10, { overrideIndentation: (t7) => {
    let e11 = n10[t7];
    return null == e11 ? -1 : e11;
  } }), r10 = aY(e10, (t7, i11, r11) => {
    let o10 = oJ(s10, t7.from);
    if (null == o10)
      return;
    /\S/.test(t7.text) || (o10 = 0);
    let l10 = /^\s*/.exec(t7.text)[0], h10 = oG(e10, o10);
    (l10 != h10 || r11.from < t7.from + l10.length) && (n10[t7.from] = o10, i11.push({ from: t7.from, to: t7.from + l10.length, insert: h10 }));
  });
  return r10.changes.empty || i10(e10.update(r10, { userEvent: "indent" })), true;
} }, { key: "Shift-Mod-k", run: (t6) => {
  if (t6.state.readOnly)
    return false;
  let { state: e10 } = t6, i10 = e10.changes(aq(e10).map((t7) => {
    let { from: i11, to: n11 } = t7;
    return i11 > 0 ? i11-- : n11 < e10.doc.length && n11++, { from: i11, to: n11 };
  })), n10 = as(e10.selection, (e11) => {
    let i11;
    if (t6.lineWrapping) {
      let n11 = t6.lineBlockAt(e11.head), s10 = t6.coordsAtPos(e11.head, e11.assoc || 1);
      s10 && (i11 = n11.bottom + t6.documentTop - s10.bottom + t6.defaultLineHeight / 2);
    }
    return t6.moveVertically(e11, true, i11);
  }).map(i10);
  return t6.dispatch({ changes: i10, selection: n10, scrollIntoView: true, userEvent: "delete.line" }), true;
} }, { key: "Shift-Mod-\\", run: (t6) => {
  let e10, i10, { state: n10, dispatch: s10 } = t6;
  return e10 = false, i10 = as(n10.selection, (t7) => {
    let i11 = lT(n10, t7.head, -1) || lT(n10, t7.head, 1) || t7.head > 0 && lT(n10, t7.head - 1, 1) || t7.head < n10.doc.length && lT(n10, t7.head + 1, -1);
    if (!i11 || !i11.end)
      return t7;
    e10 = true;
    let s11 = i11.start.from == t7.head ? i11.end.to : i11.end.from;
    return tt.cursor(s11);
  }), !!e10 && (s10(ar(n10, i10)), true);
} }, { key: "Mod-/", run: (t6) => {
  let { state: e10 } = t6, i10 = e10.doc.lineAt(e10.selection.main.from), n10 = hU(t6.state, i10.from);
  return n10.line ? hq(t6) : !!n10.block && h$(t6);
} }, { key: "Alt-A", run: hK }].concat([{ key: "ArrowLeft", run: ac, shift: aC, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: (t6) => au(t6, !aa(t6)), shift: (t6) => aM(t6, !aa(t6)), preventDefault: true }, { mac: "Cmd-ArrowLeft", run: (t6) => ao(t6, (e10) => ax(t6, e10, !aa(t6))), shift: (t6) => ak(t6, (e10) => ax(t6, e10, !aa(t6))), preventDefault: true }, { key: "ArrowRight", run: ad, shift: aA, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: (t6) => au(t6, aa(t6)), shift: (t6) => aM(t6, aa(t6)), preventDefault: true }, { mac: "Cmd-ArrowRight", run: (t6) => ao(t6, (e10) => ax(t6, e10, aa(t6))), shift: (t6) => ak(t6, (e10) => ax(t6, e10, aa(t6))), preventDefault: true }, { key: "ArrowUp", run: ag, shift: aD, preventDefault: true }, { mac: "Cmd-ArrowUp", run: aP, shift: aN }, { mac: "Ctrl-ArrowUp", run: ay, shift: aR }, { key: "ArrowDown", run: am, shift: aT, preventDefault: true }, { mac: "Cmd-ArrowDown", run: aL, shift: aI }, { mac: "Ctrl-ArrowDown", run: ab, shift: aB }, { key: "PageUp", run: ay, shift: aR }, { key: "PageDown", run: ab, shift: aB }, { key: "Home", run: (t6) => ao(t6, (e10) => ax(t6, e10, false)), shift: (t6) => ak(t6, (e10) => ax(t6, e10, false)), preventDefault: true }, { key: "Mod-Home", run: aP, shift: aN }, { key: "End", run: (t6) => ao(t6, (e10) => ax(t6, e10, true)), shift: (t6) => ak(t6, (e10) => ax(t6, e10, true)), preventDefault: true }, { key: "Mod-End", run: aL, shift: aI }, { key: "Enter", run: aU }, { key: "Mod-a", run: (t6) => {
  let { state: e10, dispatch: i10 } = t6;
  return i10(e10.update({ selection: { anchor: 0, head: e10.doc.length }, userEvent: "select" })), true;
} }, { key: "Backspace", run: aF, shift: aF }, { key: "Delete", run: az }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: aj }, { key: "Mod-Delete", mac: "Alt-Delete", run: (t6) => a_(t6, true) }, { mac: "Mod-Backspace", run: (t6) => aV(t6, (e10) => {
  let i10 = t6.moveToLineBoundary(e10, false).head;
  return e10.head > i10 ? i10 : Math.max(0, e10.head - 1);
}) }, { mac: "Mod-Delete", run: (t6) => aV(t6, (e10) => {
  let i10 = t6.moveToLineBoundary(e10, true).head;
  return e10.head < i10 ? i10 : Math.min(t6.state.doc.length, e10.head + 1);
}) }].concat(aZ.map((t6) => ({ mac: t6.key, run: t6.run, shift: t6.shift })))), a1 = { key: "Tab", run: aX, shift: aQ }, a2 = (t6) => {
  let e10 = () => [function() {
    let t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return [rN.of(t7), rE, rT, rP, rB];
  }(), so.of(rp), function() {
    let t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return [s3.of(t7), sJ(), s5];
  }(), function() {
    let t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e11 = Object.assign(Object.assign({}, ld), t7), i11 = new lu(e11, true), n11 = new lu(e11, false), s10 = iL.fromClass(class {
      constructor(t10) {
        this.from = t10.viewport.from, this.markers = this.buildMarkers(t10);
      }
      update(t10) {
        (t10.docChanged || t10.viewportChanged || t10.startState.facet(oj) != t10.state.facet(oj) || t10.startState.field(lt, false) != t10.state.field(lt, false) || oL(t10.startState) != oL(t10.state) || e11.foldingChanged(t10)) && (this.markers = this.buildMarkers(t10.view));
      }
      buildMarkers(t10) {
        let e12 = new tq();
        for (let s11 of t10.viewportLineBlocks) {
          let r11 = le(t10.state, s11.from, s11.to) ? n11 : o4(t10.state, s11.from, s11.to) ? i11 : null;
          r11 && e12.add(s11.from, s11.from, r11);
        }
        return e12.finish();
      }
    }), { domEventHandlers: r10 } = e11;
    return [s10, sU({ class: "cm-foldGutter", markers(t10) {
      var e12;
      return (null === (e12 = t10.plugin(s10)) || void 0 === e12 ? void 0 : e12.markers) || tj.empty;
    }, initialSpacer: () => new lu(e11, false), domEventHandlers: Object.assign(Object.assign({}, r10), { click: (t10, e12, i12) => {
      if (r10.click && r10.click(t10, e12, i12))
        return true;
      let n12 = le(t10.state, e12.from, e12.to);
      if (n12)
        return t10.dispatch({ effects: o6.of(n12) }), true;
      let s11 = o4(t10.state, e12.from, e12.to);
      return !!s11 && (t10.dispatch({ effects: o9.of(s11) }), true);
    } }) }), ll()];
  }({ openText: String.fromCharCode(9662), closedText: String.fromCharCode(9656) }), so.of(ls), function() {
    let t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return [lx.of(t7), lA];
  }(), [hL, hT], so.of(hN), s7, sk, function() {
    let t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return [sv.of(t7), sw || (sw = iL.fromClass(class {
      constructor(t10) {
        this.view = t10, this.decorations = e3.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(t10.state.facet(sv)), this.decorations = this.decorator.createDeco(t10);
      }
      makeDecorator(t10) {
        return new su({ regexp: t10.specialChars, decoration: (e11, i11, n11) => {
          let { doc: s10 } = i11.state, r10 = B(e11[0], 0);
          if (9 == r10) {
            let t11 = s10.lineAt(n11), e12 = i11.state.tabSize, r11 = t1(t11.text, e12, n11 - t11.from);
            return e3.replace({ widget: new sb((e12 - r11 % e12) * this.view.defaultCharacterWidth / this.view.scaleX) });
          }
          return this.decorationCache[r10] || (this.decorationCache[r10] = e3.replace({ widget: new sy(t10, r10) }));
        }, boundary: t10.replaceTabs ? void 0 : /[^]/ });
      }
      update(t10) {
        let e11 = t10.state.facet(sv);
        t10.startState.facet(sv) != e11 ? (this.decorator = this.makeDecorator(e11), this.decorations = this.decorator.createDeco(t10.view)) : this.decorations = this.decorator.updateDeco(t10, this.decorations);
      }
    }, { decorations: (t10) => t10.decorations }))];
  }(), function() {
    let t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return [hZ, hQ.of(t7), n6.domEventHandlers({ beforeinput(t10, e11) {
      let i11 = "historyUndo" == t10.inputType ? h1 : "historyRedo" == t10.inputType ? h2 : null;
      return !!i11 && (t10.preventDefault(), i11(e11));
    } })];
  }(), so.of(an), so.of(a0)], i10 = s([]), n10 = s(t6 || ""), c2 = s(null), d2 = s(null), f2 = r([n10, i10]).pipe(o((t7) => {
    let [i11, n11] = t7;
    return tV.create({ doc: i11, extensions: [...n11, e10].map((t10) => t10()) });
  }));
  return { initial$: n10, state$: f2, dom$: c2, view$: d2, use: (t7) => (i10.next([...i10.value, t7]), () => {
    i10.next(i10.value.filter((e11) => e11 !== t7));
  }), serve: () => l(f2, r([c2, f2]).pipe(h((t7) => {
    let [e11, i11] = t7;
    return null == e11 ? u(null) : u(new n6({ parent: e11, state: i11 }));
  }), a((t7) => (d2.next(t7), () => null == t7 ? void 0 : t7.destroy())))) };
}, a3 = n(() => a2(), { name: "EditorContext" }), a8 = (t6) => {
  let e10 = a3.use();
  c(e10.dom$, a(() => e10.use(() => t6())), d());
}, a4 = Object.assign(p("div", () => {
  let t6 = a3.use();
  return a8(() => {
    var t7;
    let e10, i10;
    return t7 = { fallback: true }, e10 = [lw], oD instanceof lp && (oD.module && e10.push(n6.styleModule.of(oD.module)), i10 = oD.themeType), (null == t7 ? void 0 : t7.fallback) ? e10.push(lm.of(oD)) : i10 ? e10.push(lg.computeN([n6.darkTheme], (t10) => t10.facet(n6.darkTheme) == ("dark" == i10) ? [oD] : [])) : e10.push(lg.of(oD)), e10;
  }), c(t6.serve(), f()), (e10) => i(e10, { ref: t6.dom$ });
})({ width: "100%", height: "100%", fontSize: 12, "& .cm-editor": { outline: "none", height: "100%", "& .cm-gutterElement": { color: "sys.secondary" }, "& [aria-readonly=true]": { opacity: 0.7 }, "& .cm-activeLineGutter": { backgroundColor: g("sys.primary", m(0.08)) }, "& .cm-activeLine": { backgroundColor: g("sys.primary", m(0.08)) }, "& .diffLineGutter": { backgroundColor: g("sys.error", m(0.08)) }, "& .diffLine": { backgroundColor: g("sys.error", m(0.08)) }, "& .cm-tooltip-autocomplete ul li[aria-selected]": { containerStyle: "sys.primary" }, "& .cm-gutters": { border: "none", containerStyle: "sys.surface-container-lowest" }, "& .cm-tooltip": { border: "none", boxShadow: "2", borderRadius: "xs", containerStyle: "sys.surface-container-lowest", fontFamily: "code" }, "& .cm-tooltip-lint": { overflow: "hidden" }, "& .cm-tooltip-hover": { overflow: "hidden" } }, "& .tok-propertyName": { color: "sys.primary" }, "& .tok-number": { color: "sys.error" }, "& .tok-keyword": { color: "sys.error" }, "& .tok-string": { color: "sys.tertiary" }, "& .cm-lint-marker": { width: "0.7em", height: "0.7em" }, "& .tok-punctuation": { color: g("sys.primary", m(0.38)) } }), { displayName: "EditorContainer" });
export {
  rI as D,
  tV as E,
  _ as I,
  oP as L,
  rj as N,
  oe as P,
  r$ as T,
  r_ as a,
  rW as b,
  o1 as c,
  o8 as d,
  oq as e,
  o3 as f,
  oL as g,
  hC as h,
  oX as i,
  a2 as j,
  a3 as k,
  a4 as l,
  n6 as m,
  rw as n,
  rc as o,
  hF as p,
  so as q,
  hs as r,
  ol as s,
  oO as t,
  a8 as u,
  rv as v,
  a1 as w
};
