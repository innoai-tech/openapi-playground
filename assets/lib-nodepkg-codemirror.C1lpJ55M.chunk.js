let t, e, i, n;
class s {
  lineAt(t53) {
    if (t53 < 0 || t53 > this.length) throw RangeError(`Invalid position ${t53} in document of length ${this.length}`);
    return this.lineInner(t53, false, 1, 0);
  }
  line(t53) {
    if (t53 < 1 || t53 > this.lines) throw RangeError(`Invalid line number ${t53} in ${this.lines}-line document`);
    return this.lineInner(t53, true, 1, 0);
  }
  replace(t53, e10, i10) {
    [t53, e10] = u(this, t53, e10);
    let n10 = [];
    return this.decompose(0, t53, n10, 2), i10.length && i10.decompose(0, i10.length, n10, 3), this.decompose(e10, this.length, n10, 1), r.from(n10, this.length - (e10 - t53) + i10.length);
  }
  append(t53) {
    return this.replace(this.length, this.length, t53);
  }
  slice(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
    [t53, e10] = u(this, t53, e10);
    let i10 = [];
    return this.decompose(t53, e10, i10, 0), r.from(i10, e10 - t53);
  }
  eq(t53) {
    if (t53 == this) return true;
    if (t53.length != this.length || t53.lines != this.lines) return false;
    let e10 = this.scanIdentical(t53, 1), i10 = this.length - this.scanIdentical(t53, -1), n10 = new h(this), s10 = new h(t53);
    for (let t54 = e10, o10 = e10; ; ) {
      if (n10.next(t54), s10.next(t54), t54 = 0, n10.lineBreak != s10.lineBreak || n10.done != s10.done || n10.value != s10.value) return false;
      if (o10 += n10.value.length, n10.done || o10 >= i10) return true;
    }
  }
  iter() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return new h(this, t53);
  }
  iterRange(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
    return new a(this, t53, e10);
  }
  iterLines(t53, e10) {
    let i10;
    if (null == t53) i10 = this.iter();
    else {
      null == e10 && (e10 = this.lines + 1);
      let n10 = this.line(t53).from;
      i10 = this.iterRange(n10, Math.max(n10, e10 == this.lines + 1 ? this.length : e10 <= 1 ? 0 : this.line(e10 - 1).to));
    }
    return new c(i10);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let t53 = [];
    return this.flatten(t53), t53;
  }
  constructor() {
  }
  static of(t53) {
    if (0 == t53.length) throw RangeError("A document must have at least one line");
    return 1 != t53.length || t53[0] ? t53.length <= 32 ? new o(t53) : r.from(o.split(t53, [])) : s.empty;
  }
}
class o extends s {
  constructor(t53, e10 = function(t54) {
    let e11 = -1;
    for (let i10 of t54) e11 += i10.length + 1;
    return e11;
  }(t53)) {
    super(), this.text = t53, this.length = e10;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t53, e10, i10, n10) {
    for (let s10 = 0; ; s10++) {
      let o10 = this.text[s10], r10 = n10 + o10.length;
      if ((e10 ? i10 : r10) >= t53) return new d(n10, r10, i10, o10);
      n10 = r10 + 1, i10++;
    }
  }
  decompose(t53, e10, i10, n10) {
    let s10 = t53 <= 0 && e10 >= this.length ? this : new o(l(this.text, [""], t53, e10), Math.min(e10, this.length) - Math.max(0, t53));
    if (1 & n10) {
      let t54 = i10.pop(), e11 = l(s10.text, t54.text.slice(), 0, s10.length);
      if (e11.length <= 32) i10.push(new o(e11, t54.length + s10.length));
      else {
        let t55 = e11.length >> 1;
        i10.push(new o(e11.slice(0, t55)), new o(e11.slice(t55)));
      }
    } else i10.push(s10);
  }
  replace(t53, e10, i10) {
    if (!(i10 instanceof o)) return super.replace(t53, e10, i10);
    [t53, e10] = u(this, t53, e10);
    let n10 = l(this.text, l(i10.text, l(this.text, [""], 0, t53)), e10), s10 = this.length + i10.length - (e10 - t53);
    return n10.length <= 32 ? new o(n10, s10) : r.from(o.split(n10, []), s10);
  }
  sliceString(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
    [t53, e10] = u(this, t53, e10);
    let n10 = "";
    for (let s10 = 0, o10 = 0; s10 <= e10 && o10 < this.text.length; o10++) {
      let r10 = this.text[o10], l10 = s10 + r10.length;
      s10 > t53 && o10 && (n10 += i10), t53 < l10 && e10 > s10 && (n10 += r10.slice(Math.max(0, t53 - s10), e10 - s10)), s10 = l10 + 1;
    }
    return n10;
  }
  flatten(t53) {
    for (let e10 of this.text) t53.push(e10);
  }
  scanIdentical() {
    return 0;
  }
  static split(t53, e10) {
    let i10 = [], n10 = -1;
    for (let s10 of t53) i10.push(s10), n10 += s10.length + 1, 32 == i10.length && (e10.push(new o(i10, n10)), i10 = [], n10 = -1);
    return n10 > -1 && e10.push(new o(i10, n10)), e10;
  }
}
class r extends s {
  constructor(t53, e10) {
    for (let i10 of (super(), this.children = t53, this.length = e10, this.lines = 0, t53)) this.lines += i10.lines;
  }
  lineInner(t53, e10, i10, n10) {
    for (let s10 = 0; ; s10++) {
      let o10 = this.children[s10], r10 = n10 + o10.length, l10 = i10 + o10.lines - 1;
      if ((e10 ? l10 : r10) >= t53) return o10.lineInner(t53, e10, i10, n10);
      n10 = r10 + 1, i10 = l10 + 1;
    }
  }
  decompose(t53, e10, i10, n10) {
    for (let s10 = 0, o10 = 0; o10 <= e10 && s10 < this.children.length; s10++) {
      let r10 = this.children[s10], l10 = o10 + r10.length;
      if (t53 <= l10 && e10 >= o10) {
        let s11 = n10 & ((o10 <= t53 ? 1 : 0) | (l10 >= e10 ? 2 : 0));
        o10 >= t53 && l10 <= e10 && !s11 ? i10.push(r10) : r10.decompose(t53 - o10, e10 - o10, i10, s11);
      }
      o10 = l10 + 1;
    }
  }
  replace(t53, e10, i10) {
    if ([t53, e10] = u(this, t53, e10), i10.lines < this.lines) for (let n10 = 0, s10 = 0; n10 < this.children.length; n10++) {
      let o10 = this.children[n10], l10 = s10 + o10.length;
      if (t53 >= s10 && e10 <= l10) {
        let h10 = o10.replace(t53 - s10, e10 - s10, i10), a10 = this.lines - o10.lines + h10.lines;
        if (h10.lines < a10 >> 4 && h10.lines > a10 >> 6) {
          let s11 = this.children.slice();
          return s11[n10] = h10, new r(s11, this.length - (e10 - t53) + i10.length);
        }
        return super.replace(s10, l10, h10);
      }
      s10 = l10 + 1;
    }
    return super.replace(t53, e10, i10);
  }
  sliceString(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
    [t53, e10] = u(this, t53, e10);
    let n10 = "";
    for (let s10 = 0, o10 = 0; s10 < this.children.length && o10 <= e10; s10++) {
      let r10 = this.children[s10], l10 = o10 + r10.length;
      o10 > t53 && s10 && (n10 += i10), t53 < l10 && e10 > o10 && (n10 += r10.sliceString(t53 - o10, e10 - o10, i10)), o10 = l10 + 1;
    }
    return n10;
  }
  flatten(t53) {
    for (let e10 of this.children) e10.flatten(t53);
  }
  scanIdentical(t53, e10) {
    if (!(t53 instanceof r)) return 0;
    let i10 = 0, [n10, s10, o10, l10] = e10 > 0 ? [0, 0, this.children.length, t53.children.length] : [this.children.length - 1, t53.children.length - 1, -1, -1];
    for (; ; n10 += e10, s10 += e10) {
      if (n10 == o10 || s10 == l10) return i10;
      let r10 = this.children[n10], h10 = t53.children[s10];
      if (r10 != h10) return i10 + r10.scanIdentical(h10, e10);
      i10 += r10.length + 1;
    }
  }
  static from(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53.reduce((t54, e11) => t54 + e11.length + 1, -1), i10 = 0;
    for (let e11 of t53) i10 += e11.lines;
    if (i10 < 32) {
      let i11 = [];
      for (let e11 of t53) e11.flatten(i11);
      return new o(i11, e10);
    }
    let n10 = Math.max(32, i10 >> 5), s10 = n10 << 1, l10 = n10 >> 1, h10 = [], a10 = 0, c10 = -1, d10 = [];
    function u10() {
      0 != a10 && (h10.push(1 == d10.length ? d10[0] : r.from(d10, c10)), c10 = -1, a10 = d10.length = 0);
    }
    for (let e11 of t53) !function t54(e12) {
      let i11;
      if (e12.lines > s10 && e12 instanceof r) for (let i12 of e12.children) t54(i12);
      else e12.lines > l10 && (a10 > l10 || !a10) ? (u10(), h10.push(e12)) : e12 instanceof o && a10 && (i11 = d10[d10.length - 1]) instanceof o && e12.lines + i11.lines <= 32 ? (a10 += e12.lines, c10 += e12.length + 1, d10[d10.length - 1] = new o(i11.text.concat(e12.text), i11.length + 1 + e12.length)) : (a10 + e12.lines > n10 && u10(), a10 += e12.lines, c10 += e12.length + 1, d10.push(e12));
    }(e11);
    return u10(), 1 == h10.length ? h10[0] : new r(h10, e10);
  }
}
function l(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
  for (let s10 = 0, o10 = 0, r10 = true; o10 < t53.length && s10 <= n10; o10++) {
    let l10 = t53[o10], h10 = s10 + l10.length;
    h10 >= i10 && (h10 > n10 && (l10 = l10.slice(0, n10 - s10)), s10 < i10 && (l10 = l10.slice(i10 - s10)), r10 ? (e10[e10.length - 1] += l10, r10 = false) : e10.push(l10)), s10 = h10 + 1;
  }
  return e10;
}
s.empty = new o([""], 0);
class h {
  constructor(t53, e10 = 1) {
    this.dir = e10, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [t53], this.offsets = [e10 > 0 ? 1 : (t53 instanceof o ? t53.text.length : t53.children.length) << 1];
  }
  nextInner(t53, e10) {
    for (this.done = this.lineBreak = false; ; ) {
      let i10 = this.nodes.length - 1, n10 = this.nodes[i10], s10 = this.offsets[i10], r10 = s10 >> 1, l10 = n10 instanceof o ? n10.text.length : n10.children.length;
      if (r10 == (e10 > 0 ? l10 : 0)) {
        if (0 == i10) return this.done = true, this.value = "", this;
        e10 > 0 && this.offsets[i10 - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((1 & s10) == (e10 > 0 ? 0 : 1)) {
        if (this.offsets[i10] += e10, 0 == t53) return this.lineBreak = true, this.value = "\n", this;
        t53--;
      } else if (n10 instanceof o) {
        let s11 = n10.text[r10 + (e10 < 0 ? -1 : 0)];
        if (this.offsets[i10] += e10, s11.length > Math.max(0, t53)) return this.value = 0 == t53 ? s11 : e10 > 0 ? s11.slice(t53) : s11.slice(0, s11.length - t53), this;
        t53 -= s11.length;
      } else {
        let s11 = n10.children[r10 + (e10 < 0 ? -1 : 0)];
        t53 > s11.length ? (t53 -= s11.length, this.offsets[i10] += e10) : (e10 < 0 && this.offsets[i10]--, this.nodes.push(s11), this.offsets.push(e10 > 0 ? 1 : (s11 instanceof o ? s11.text.length : s11.children.length) << 1));
      }
    }
  }
  next() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return t53 < 0 && (this.nextInner(-t53, -this.dir), t53 = this.value.length), this.nextInner(t53, this.dir);
  }
}
class a {
  constructor(t53, e10, i10) {
    this.value = "", this.done = false, this.cursor = new h(t53, e10 > i10 ? -1 : 1), this.pos = e10 > i10 ? t53.length : 0, this.from = Math.min(e10, i10), this.to = Math.max(e10, i10);
  }
  nextInner(t53, e10) {
    if (e10 < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = true, this;
    t53 += Math.max(0, e10 < 0 ? this.pos - this.to : this.from - this.pos);
    let i10 = e10 < 0 ? this.pos - this.from : this.to - this.pos;
    t53 > i10 && (t53 = i10), i10 -= t53;
    let { value: n10 } = this.cursor.next(t53);
    return this.pos += (n10.length + t53) * e10, this.value = n10.length <= i10 ? n10 : e10 < 0 ? n10.slice(n10.length - i10) : n10.slice(0, i10), this.done = !this.value, this;
  }
  next() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return t53 < 0 ? t53 = Math.max(t53, this.from - this.pos) : t53 > 0 && (t53 = Math.min(t53, this.to - this.pos)), this.nextInner(t53, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && "" != this.value;
  }
}
class c {
  constructor(t53) {
    this.inner = t53, this.afterBreak = true, this.value = "", this.done = false;
  }
  next() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, { done: e10, lineBreak: i10, value: n10 } = this.inner.next(t53);
    return e10 && this.afterBreak ? (this.value = "", this.afterBreak = false) : e10 ? (this.done = true, this.value = "") : i10 ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = n10, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
}
"undefined" != typeof Symbol && (s.prototype[Symbol.iterator] = function() {
  return this.iter();
}, h.prototype[Symbol.iterator] = a.prototype[Symbol.iterator] = c.prototype[Symbol.iterator] = function() {
  return this;
});
class d {
  constructor(t53, e10, i10, n10) {
    this.from = t53, this.to = e10, this.number = i10, this.text = n10;
  }
  get length() {
    return this.to - this.from;
  }
}
function u(t53, e10, i10) {
  return [e10 = Math.max(0, Math.min(t53.length, e10)), Math.max(e10, Math.min(t53.length, i10))];
}
let f = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t53) => t53 ? parseInt(t53, 36) : 1);
for (let t53 = 1; t53 < f.length; t53++) f[t53] += f[t53 - 1];
function g(t53) {
  return t53 >= 127462 && t53 <= 127487;
}
function p(t53, e10) {
  let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], n10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  return (i10 ? m : function(t54, e11, i11) {
    for (; e11 > 0; ) {
      let n11 = m(t54, e11 - 2, i11);
      if (n11 < e11) return n11;
      e11--;
    }
    return 0;
  })(t53, e10, n10);
}
function m(t53, e10, i10) {
  if (e10 == t53.length) return e10;
  e10 && v(t53.charCodeAt(e10)) && w(t53.charCodeAt(e10 - 1)) && e10--;
  let n10 = b(t53, e10);
  for (e10 += x(n10); e10 < t53.length; ) {
    let s10 = b(t53, e10);
    if (8205 == n10 || 8205 == s10 || i10 && function(t54) {
      for (let e11 = 1; e11 < f.length; e11 += 2) if (f[e11] > t54) return f[e11 - 1] <= t54;
      return false;
    }(s10)) e10 += x(s10), n10 = s10;
    else if (g(s10)) {
      let i11 = 0, n11 = e10 - 2;
      for (; n11 >= 0 && g(b(t53, n11)); ) i11++, n11 -= 2;
      if (i11 % 2 == 0) break;
      e10 += 2;
    } else break;
  }
  return e10;
}
function v(t53) {
  return t53 >= 56320 && t53 < 57344;
}
function w(t53) {
  return t53 >= 55296 && t53 < 56320;
}
function b(t53, e10) {
  let i10 = t53.charCodeAt(e10);
  if (!w(i10) || e10 + 1 == t53.length) return i10;
  let n10 = t53.charCodeAt(e10 + 1);
  return v(n10) ? (i10 - 55296 << 10) + (n10 - 56320) + 65536 : i10;
}
function y(t53) {
  return t53 <= 65535 ? String.fromCharCode(t53) : String.fromCharCode(((t53 -= 65536) >> 10) + 55296, (1023 & t53) + 56320);
}
function x(t53) {
  return t53 < 65536 ? 1 : 2;
}
let S = /\r\n?|\n/;
var k, M, A, C, D, O, T, E, B, R, L, P, N, H, V, I = ((N = I || (I = {}))[N.Simple = 0] = "Simple", N[N.TrackDel = 1] = "TrackDel", N[N.TrackBefore = 2] = "TrackBefore", N[N.TrackAfter = 3] = "TrackAfter", N);
class F {
  constructor(t53) {
    this.sections = t53;
  }
  get length() {
    let t53 = 0;
    for (let e10 = 0; e10 < this.sections.length; e10 += 2) t53 += this.sections[e10];
    return t53;
  }
  get newLength() {
    let t53 = 0;
    for (let e10 = 0; e10 < this.sections.length; e10 += 2) {
      let i10 = this.sections[e10 + 1];
      t53 += i10 < 0 ? this.sections[e10] : i10;
    }
    return t53;
  }
  get empty() {
    return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0;
  }
  iterGaps(t53) {
    for (let e10 = 0, i10 = 0, n10 = 0; e10 < this.sections.length; ) {
      let s10 = this.sections[e10++], o10 = this.sections[e10++];
      o10 < 0 ? (t53(i10, n10, s10), n10 += s10) : n10 += o10, i10 += s10;
    }
  }
  iterChangedRanges(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    q(this, t53, e10);
  }
  get invertedDesc() {
    let t53 = [];
    for (let e10 = 0; e10 < this.sections.length; ) {
      let i10 = this.sections[e10++], n10 = this.sections[e10++];
      n10 < 0 ? t53.push(i10, n10) : t53.push(n10, i10);
    }
    return new F(t53);
  }
  composeDesc(t53) {
    return this.empty ? t53 : t53.empty ? this : j(this, t53);
  }
  mapDesc(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t53.empty ? this : _(this, t53, e10);
  }
  mapPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.Simple, n10 = 0, s10 = 0;
    for (let o10 = 0; o10 < this.sections.length; ) {
      let r10 = this.sections[o10++], l10 = this.sections[o10++], h10 = n10 + r10;
      if (l10 < 0) {
        if (h10 > t53) return s10 + (t53 - n10);
        s10 += r10;
      } else {
        if (i10 != I.Simple && h10 >= t53 && (i10 == I.TrackDel && n10 < t53 && h10 > t53 || i10 == I.TrackBefore && n10 < t53 || i10 == I.TrackAfter && h10 > t53)) return null;
        if (h10 > t53 || h10 == t53 && e10 < 0 && !r10) return t53 == n10 || e10 < 0 ? s10 : s10 + l10;
        s10 += l10;
      }
      n10 = h10;
    }
    if (t53 > n10) throw RangeError(`Position ${t53} is out of range for changeset of length ${n10}`);
    return s10;
  }
  touchesRange(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    for (let i10 = 0, n10 = 0; i10 < this.sections.length && n10 <= e10; ) {
      let s10 = this.sections[i10++], o10 = this.sections[i10++], r10 = n10 + s10;
      if (o10 >= 0 && n10 <= e10 && r10 >= t53) return !(n10 < t53) || !(r10 > e10) || "cover";
      n10 = r10;
    }
    return false;
  }
  toString() {
    let t53 = "";
    for (let e10 = 0; e10 < this.sections.length; ) {
      let i10 = this.sections[e10++], n10 = this.sections[e10++];
      t53 += (t53 ? " " : "") + i10 + (n10 >= 0 ? ":" + n10 : "");
    }
    return t53;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(t53) {
    if (!Array.isArray(t53) || t53.length % 2 || t53.some((t54) => "number" != typeof t54)) throw RangeError("Invalid JSON representation of ChangeDesc");
    return new F(t53);
  }
  static create(t53) {
    return new F(t53);
  }
}
class W extends F {
  constructor(t53, e10) {
    super(t53), this.inserted = e10;
  }
  apply(t53) {
    if (this.length != t53.length) throw RangeError("Applying change set to a document with the wrong length");
    return q(this, (e10, i10, n10, s10, o10) => t53 = t53.replace(n10, n10 + (i10 - e10), o10), false), t53;
  }
  mapDesc(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return _(this, t53, e10, true);
  }
  invert(t53) {
    let e10 = this.sections.slice(), i10 = [];
    for (let n10 = 0, o10 = 0; n10 < e10.length; n10 += 2) {
      let r10 = e10[n10], l10 = e10[n10 + 1];
      if (l10 >= 0) {
        e10[n10] = l10, e10[n10 + 1] = r10;
        let h10 = n10 >> 1;
        for (; i10.length < h10; ) i10.push(s.empty);
        i10.push(r10 ? t53.slice(o10, o10 + r10) : s.empty);
      }
      o10 += r10;
    }
    return new W(e10, i10);
  }
  compose(t53) {
    return this.empty ? t53 : t53.empty ? this : j(this, t53, true);
  }
  map(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t53.empty ? this : _(this, t53, e10, true);
  }
  iterChanges(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    q(this, t53, e10);
  }
  get desc() {
    return F.create(this.sections);
  }
  filter(t53) {
    let e10 = [], i10 = [], n10 = [], s10 = new G(this);
    t: for (let o10 = 0, r10 = 0; ; ) {
      let l10 = o10 == t53.length ? 1e9 : t53[o10++];
      for (; r10 < l10 || r10 == l10 && 0 == s10.len; ) {
        if (s10.done) break t;
        let t54 = Math.min(s10.len, l10 - r10);
        z(n10, t54, -1);
        let o11 = -1 == s10.ins ? -1 : 0 == s10.off ? s10.ins : 0;
        z(e10, t54, o11), o11 > 0 && K(i10, e10, s10.text), s10.forward(t54), r10 += t54;
      }
      let h10 = t53[o10++];
      for (; r10 < h10; ) {
        if (s10.done) break t;
        let t54 = Math.min(s10.len, h10 - r10);
        z(e10, t54, -1), z(n10, t54, -1 == s10.ins ? -1 : 0 == s10.off ? s10.ins : 0), s10.forward(t54), r10 += t54;
      }
    }
    return { changes: new W(e10, i10), filtered: F.create(n10) };
  }
  toJSON() {
    let t53 = [];
    for (let e10 = 0; e10 < this.sections.length; e10 += 2) {
      let i10 = this.sections[e10], n10 = this.sections[e10 + 1];
      n10 < 0 ? t53.push(i10) : 0 == n10 ? t53.push([i10]) : t53.push([i10].concat(this.inserted[e10 >> 1].toJSON()));
    }
    return t53;
  }
  static of(t53, e10, i10) {
    let n10 = [], o10 = [], r10 = 0, l10 = null;
    function h10() {
      let t54 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!t54 && !n10.length) return;
      r10 < e10 && z(n10, e10 - r10, -1);
      let i11 = new W(n10, o10);
      l10 = l10 ? l10.compose(i11.map(l10)) : i11, n10 = [], o10 = [], r10 = 0;
    }
    return !function t54(a10) {
      if (Array.isArray(a10)) for (let e11 of a10) t54(e11);
      else if (a10 instanceof W) {
        if (a10.length != e10) throw RangeError(`Mismatched change set length (got ${a10.length}, expected ${e10})`);
        h10(), l10 = l10 ? l10.compose(a10.map(l10)) : a10;
      } else {
        let { from: t55, to: l11 = t55, insert: c10 } = a10;
        if (t55 > l11 || t55 < 0 || l11 > e10) throw RangeError(`Invalid change range ${t55} to ${l11} (in doc of length ${e10})`);
        let d10 = c10 ? "string" == typeof c10 ? s.of(c10.split(i10 || S)) : c10 : s.empty, u10 = d10.length;
        if (t55 == l11 && 0 == u10) return;
        t55 < r10 && h10(), t55 > r10 && z(n10, t55 - r10, -1), z(n10, l11 - t55, u10), K(o10, n10, d10), r10 = l11;
      }
    }(t53), h10(!l10), l10;
  }
  static empty(t53) {
    return new W(t53 ? [t53, -1] : [], []);
  }
  static fromJSON(t53) {
    if (!Array.isArray(t53)) throw RangeError("Invalid JSON representation of ChangeSet");
    let e10 = [], i10 = [];
    for (let n10 = 0; n10 < t53.length; n10++) {
      let o10 = t53[n10];
      if ("number" == typeof o10) e10.push(o10, -1);
      else if (!Array.isArray(o10) || "number" != typeof o10[0] || o10.some((t54, e11) => e11 && "string" != typeof t54)) throw RangeError("Invalid JSON representation of ChangeSet");
      else if (1 == o10.length) e10.push(o10[0], 0);
      else {
        for (; i10.length < n10; ) i10.push(s.empty);
        i10[n10] = s.of(o10.slice(1)), e10.push(o10[0], i10[n10].length);
      }
    }
    return new W(e10, i10);
  }
  static createSet(t53, e10) {
    return new W(t53, e10);
  }
}
function z(t53, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (0 == e10 && i10 <= 0) return;
  let s10 = t53.length - 2;
  s10 >= 0 && i10 <= 0 && i10 == t53[s10 + 1] ? t53[s10] += e10 : 0 == e10 && 0 == t53[s10] ? t53[s10 + 1] += i10 : n10 ? (t53[s10] += e10, t53[s10 + 1] += i10) : t53.push(e10, i10);
}
function K(t53, e10, i10) {
  if (0 == i10.length) return;
  let n10 = e10.length - 2 >> 1;
  if (n10 < t53.length) t53[t53.length - 1] = t53[t53.length - 1].append(i10);
  else {
    for (; t53.length < n10; ) t53.push(s.empty);
    t53.push(i10);
  }
}
function q(t53, e10, i10) {
  let n10 = t53.inserted;
  for (let o10 = 0, r10 = 0, l10 = 0; l10 < t53.sections.length; ) {
    let h10 = t53.sections[l10++], a10 = t53.sections[l10++];
    if (a10 < 0) o10 += h10, r10 += h10;
    else {
      let c10 = o10, d10 = r10, u10 = s.empty;
      for (; c10 += h10, d10 += a10, a10 && n10 && (u10 = u10.append(n10[l10 - 2 >> 1])), !i10 && l10 != t53.sections.length && !(t53.sections[l10 + 1] < 0); ) h10 = t53.sections[l10++], a10 = t53.sections[l10++];
      e10(o10, c10, r10, d10, u10), o10 = c10, r10 = d10;
    }
  }
}
function _(t53, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], s10 = [], o10 = n10 ? [] : null, r10 = new G(t53), l10 = new G(e10);
  for (let t54 = -1; ; ) if (-1 == r10.ins && -1 == l10.ins) {
    let t55 = Math.min(r10.len, l10.len);
    z(s10, t55, -1), r10.forward(t55), l10.forward(t55);
  } else if (l10.ins >= 0 && (r10.ins < 0 || t54 == r10.i || 0 == r10.off && (l10.len < r10.len || l10.len == r10.len && !i10))) {
    let e11 = l10.len;
    for (z(s10, l10.ins, -1); e11; ) {
      let i11 = Math.min(r10.len, e11);
      r10.ins >= 0 && t54 < r10.i && r10.len <= i11 && (z(s10, 0, r10.ins), o10 && K(o10, s10, r10.text), t54 = r10.i), r10.forward(i11), e11 -= i11;
    }
    l10.next();
  } else if (r10.ins >= 0) {
    let e11 = 0, i11 = r10.len;
    for (; i11; ) if (-1 == l10.ins) {
      let t55 = Math.min(i11, l10.len);
      e11 += t55, i11 -= t55, l10.forward(t55);
    } else if (0 == l10.ins && l10.len < i11) i11 -= l10.len, l10.next();
    else break;
    z(s10, e11, t54 < r10.i ? r10.ins : 0), o10 && t54 < r10.i && K(o10, s10, r10.text), t54 = r10.i, r10.forward(r10.len - i11);
  } else if (r10.done && l10.done) return o10 ? W.createSet(s10, o10) : F.create(s10);
  else throw Error("Mismatched change set lengths");
}
function j(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = [], s10 = i10 ? [] : null, o10 = new G(t53), r10 = new G(e10);
  for (let t54 = false; ; ) {
    if (o10.done && r10.done) return s10 ? W.createSet(n10, s10) : F.create(n10);
    if (0 == o10.ins) z(n10, o10.len, 0, t54), o10.next();
    else if (0 != r10.len || r10.done) {
      if (o10.done || r10.done) throw Error("Mismatched change set lengths");
      {
        let e11 = Math.min(o10.len2, r10.len), i11 = n10.length;
        if (-1 == o10.ins) {
          let i12 = -1 == r10.ins ? -1 : r10.off ? 0 : r10.ins;
          z(n10, e11, i12, t54), s10 && i12 && K(s10, n10, r10.text);
        } else -1 == r10.ins ? (z(n10, o10.off ? 0 : o10.len, e11, t54), s10 && K(s10, n10, o10.textBit(e11))) : (z(n10, o10.off ? 0 : o10.len, r10.off ? 0 : r10.ins, t54), s10 && !r10.off && K(s10, n10, r10.text));
        t54 = (o10.ins > e11 || r10.ins >= 0 && r10.len > e11) && (t54 || n10.length > i11), o10.forward2(e11), r10.forward(e11);
      }
    } else z(n10, 0, r10.ins, t54), s10 && K(s10, n10, r10.text), r10.next();
  }
}
class G {
  constructor(t53) {
    this.set = t53, this.i = 0, this.next();
  }
  next() {
    let { sections: t53 } = this.set;
    this.i < t53.length ? (this.len = t53[this.i++], this.ins = t53[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return -2 == this.ins;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t53 } = this.set, e10 = this.i - 2 >> 1;
    return e10 >= t53.length ? s.empty : t53[e10];
  }
  textBit(t53) {
    let { inserted: e10 } = this.set, i10 = this.i - 2 >> 1;
    return i10 >= e10.length && !t53 ? s.empty : e10[i10].slice(this.off, null == t53 ? void 0 : this.off + t53);
  }
  forward(t53) {
    t53 == this.len ? this.next() : (this.len -= t53, this.off += t53);
  }
  forward2(t53) {
    -1 == this.ins ? this.forward(t53) : t53 == this.ins ? this.next() : (this.ins -= t53, this.off += t53);
  }
}
class U {
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.flags = i10;
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
    let t53 = 7 & this.flags;
    return 7 == t53 ? null : t53;
  }
  get goalColumn() {
    let t53 = this.flags >> 6;
    return 16777215 == t53 ? void 0 : t53;
  }
  map(t53) {
    let e10, i10, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
    return this.empty ? e10 = i10 = t53.mapPos(this.from, n10) : (e10 = t53.mapPos(this.from, 1), i10 = t53.mapPos(this.to, -1)), e10 == this.from && i10 == this.to ? this : new U(e10, i10, this.flags);
  }
  extend(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (t53 <= this.anchor && e10 >= this.anchor) return $.range(t53, e10);
    let i10 = Math.abs(t53 - this.anchor) > Math.abs(e10 - this.anchor) ? t53 : e10;
    return $.range(this.anchor, i10);
  }
  eq(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.anchor == t53.anchor && this.head == t53.head && (!e10 || !this.empty || this.assoc == t53.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(t53) {
    if (!t53 || "number" != typeof t53.anchor || "number" != typeof t53.head) throw RangeError("Invalid JSON representation for SelectionRange");
    return $.range(t53.anchor, t53.head);
  }
  static create(t53, e10, i10) {
    return new U(t53, e10, i10);
  }
}
class $ {
  constructor(t53, e10) {
    this.ranges = t53, this.mainIndex = e10;
  }
  map(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
    return t53.empty ? this : $.create(this.ranges.map((i10) => i10.map(t53, e10)), this.mainIndex);
  }
  eq(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.ranges.length != t53.ranges.length || this.mainIndex != t53.mainIndex) return false;
    for (let i10 = 0; i10 < this.ranges.length; i10++) if (!this.ranges[i10].eq(t53.ranges[i10], e10)) return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return 1 == this.ranges.length ? this : new $([this.main], 0);
  }
  addRange(t53) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return $.create([t53].concat(this.ranges), e10 ? 0 : this.mainIndex + 1);
  }
  replaceRange(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex, i10 = this.ranges.slice();
    return i10[e10] = t53, $.create(i10, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((t53) => t53.toJSON()), main: this.mainIndex };
  }
  static fromJSON(t53) {
    if (!t53 || !Array.isArray(t53.ranges) || "number" != typeof t53.main || t53.main >= t53.ranges.length) throw RangeError("Invalid JSON representation for EditorSelection");
    return new $(t53.ranges.map((t54) => U.fromJSON(t54)), t53.main);
  }
  static single(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    return new $([$.range(t53, e10)], 0);
  }
  static create(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (0 == t53.length) throw RangeError("A selection needs at least one range");
    for (let i10 = 0, n10 = 0; n10 < t53.length; n10++) {
      let s10 = t53[n10];
      if (s10.empty ? s10.from <= i10 : s10.from < i10) return $.normalized(t53.slice(), e10);
      i10 = s10.to;
    }
    return new $(t53, e10);
  }
  static cursor(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 ? arguments[2] : void 0, n10 = arguments.length > 3 ? arguments[3] : void 0;
    return U.create(t53, t53, (0 == e10 ? 0 : e10 < 0 ? 8 : 16) | (null == i10 ? 7 : Math.min(6, i10)) | (null != n10 ? n10 : 16777215) << 6);
  }
  static range(t53, e10, i10, n10) {
    let s10 = (null != i10 ? i10 : 16777215) << 6 | (null == n10 ? 7 : Math.min(6, n10));
    return e10 < t53 ? U.create(e10, t53, 48 | s10) : U.create(t53, e10, (e10 > t53 ? 8 : 0) | s10);
  }
  static normalized(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = t53[e10];
    t53.sort((t54, e11) => t54.from - e11.from), e10 = t53.indexOf(i10);
    for (let i11 = 1; i11 < t53.length; i11++) {
      let n10 = t53[i11], s10 = t53[i11 - 1];
      if (n10.empty ? n10.from <= s10.to : n10.from < s10.to) {
        let o10 = s10.from, r10 = Math.max(n10.to, s10.to);
        i11 <= e10 && e10--, t53.splice(--i11, 2, n10.anchor > n10.head ? $.range(r10, o10) : $.range(o10, r10));
      }
    }
    return new $(t53, e10);
  }
}
function Y(t53, e10) {
  for (let i10 of t53.ranges) if (i10.to > e10) throw RangeError("Selection points outside of document");
}
let X = 0;
class J {
  constructor(t53, e10, i10, n10, s10) {
    this.combine = t53, this.compareInput = e10, this.compare = i10, this.isStatic = n10, this.id = X++, this.default = t53([]), this.extensions = "function" == typeof s10 ? s10(this) : s10;
  }
  get reader() {
    return this;
  }
  static define() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new J(t53.combine || ((t54) => t54), t53.compareInput || ((t54, e10) => t54 === e10), t53.compare || (t53.combine ? (t54, e10) => t54 === e10 : Q), !!t53.static, t53.enables);
  }
  of(t53) {
    return new Z([], this, 0, t53);
  }
  compute(t53, e10) {
    if (this.isStatic) throw Error("Can't compute a static facet");
    return new Z(t53, this, 1, e10);
  }
  computeN(t53, e10) {
    if (this.isStatic) throw Error("Can't compute a static facet");
    return new Z(t53, this, 2, e10);
  }
  from(t53, e10) {
    return e10 || (e10 = (t54) => t54), this.compute([t53], (i10) => e10(i10.field(t53)));
  }
}
function Q(t53, e10) {
  return t53 == e10 || t53.length == e10.length && t53.every((t54, i10) => t54 === e10[i10]);
}
class Z {
  constructor(t53, e10, i10, n10) {
    this.dependencies = t53, this.facet = e10, this.type = i10, this.value = n10, this.id = X++;
  }
  dynamicSlot(t53) {
    var e10;
    let i10 = this.value, n10 = this.facet.compareInput, s10 = this.id, o10 = t53[s10] >> 1, r10 = 2 == this.type, l10 = false, h10 = false, a10 = [];
    for (let i11 of this.dependencies) "doc" == i11 ? l10 = true : "selection" == i11 ? h10 = true : ((null !== (e10 = t53[i11.id]) && void 0 !== e10 ? e10 : 1) & 1) == 0 && a10.push(t53[i11.id]);
    return { create: (t54) => (t54.values[o10] = i10(t54), 1), update(t54, e11) {
      if (l10 && e11.docChanged || h10 && (e11.docChanged || e11.selection) || te(t54, a10)) {
        let e12 = i10(t54);
        if (r10 ? !tt(e12, t54.values[o10], n10) : !n10(e12, t54.values[o10])) return t54.values[o10] = e12, 1;
      }
      return 0;
    }, reconfigure: (t54, e11) => {
      let l11, h11 = e11.config.address[s10];
      if (null != h11) {
        let s11 = tu(e11, h11);
        if (this.dependencies.every((i11) => i11 instanceof J ? e11.facet(i11) === t54.facet(i11) : !(i11 instanceof tn) || e11.field(i11, false) == t54.field(i11, false)) || (r10 ? tt(l11 = i10(t54), s11, n10) : n10(l11 = i10(t54), s11))) return t54.values[o10] = s11, 0;
      } else l11 = i10(t54);
      return t54.values[o10] = l11, 1;
    } };
  }
}
function tt(t53, e10, i10) {
  if (t53.length != e10.length) return false;
  for (let n10 = 0; n10 < t53.length; n10++) if (!i10(t53[n10], e10[n10])) return false;
  return true;
}
function te(t53, e10) {
  let i10 = false;
  for (let n10 of e10) 1 & td(t53, n10) && (i10 = true);
  return i10;
}
let ti = J.define({ static: true });
class tn {
  constructor(t53, e10, i10, n10, s10) {
    this.id = t53, this.createF = e10, this.updateF = i10, this.compareF = n10, this.spec = s10, this.provides = void 0;
  }
  static define(t53) {
    let e10 = new tn(X++, t53.create, t53.update, t53.compare || ((t54, e11) => t54 === e11), t53);
    return t53.provide && (e10.provides = t53.provide(e10)), e10;
  }
  create(t53) {
    let e10 = t53.facet(ti).find((t54) => t54.field == this);
    return ((null == e10 ? void 0 : e10.create) || this.createF)(t53);
  }
  slot(t53) {
    let e10 = t53[this.id] >> 1;
    return { create: (t54) => (t54.values[e10] = this.create(t54), 1), update: (t54, i10) => {
      let n10 = t54.values[e10], s10 = this.updateF(n10, i10);
      return this.compareF(n10, s10) ? 0 : (t54.values[e10] = s10, 1);
    }, reconfigure: (t54, i10) => null != i10.config.address[this.id] ? (t54.values[e10] = i10.field(this), 0) : (t54.values[e10] = this.create(t54), 1) };
  }
  init(t53) {
    return [this, ti.of({ field: this, create: t53 })];
  }
  get extension() {
    return this;
  }
}
let ts = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function to(t53) {
  return (e10) => new tl(e10, t53);
}
let tr = { highest: to(ts.highest), high: to(ts.high), default: to(ts.default), low: to(ts.low), lowest: to(ts.lowest) };
class tl {
  constructor(t53, e10) {
    this.inner = t53, this.prec = e10;
  }
}
class th {
  of(t53) {
    return new ta(this, t53);
  }
  reconfigure(t53) {
    return th.reconfigure.of({ compartment: this, extension: t53 });
  }
  get(t53) {
    return t53.config.compartments.get(this);
  }
}
class ta {
  constructor(t53, e10) {
    this.compartment = t53, this.inner = e10;
  }
}
class tc {
  constructor(t53, e10, i10, n10, s10, o10) {
    for (this.base = t53, this.compartments = e10, this.dynamicSlots = i10, this.address = n10, this.staticValues = s10, this.facets = o10, this.statusTemplate = []; this.statusTemplate.length < i10.length; ) this.statusTemplate.push(0);
  }
  staticFacet(t53) {
    let e10 = this.address[t53.id];
    return null == e10 ? t53.default : this.staticValues[e10 >> 1];
  }
  static resolve(t53, e10, i10) {
    let n10, s10, o10 = [], r10 = /* @__PURE__ */ Object.create(null), l10 = /* @__PURE__ */ new Map();
    for (let i11 of (n10 = [[], [], [], [], []], s10 = /* @__PURE__ */ new Map(), !function t54(i12, o11) {
      let r11 = s10.get(i12);
      if (null != r11) {
        if (r11 <= o11) return;
        let t55 = n10[r11].indexOf(i12);
        t55 > -1 && n10[r11].splice(t55, 1), i12 instanceof ta && l10.delete(i12.compartment);
      }
      if (s10.set(i12, o11), Array.isArray(i12)) for (let e11 of i12) t54(e11, o11);
      else if (i12 instanceof ta) {
        if (l10.has(i12.compartment)) throw RangeError("Duplicate use of compartment in extensions");
        let n11 = e10.get(i12.compartment) || i12.inner;
        l10.set(i12.compartment, n11), t54(n11, o11);
      } else if (i12 instanceof tl) t54(i12.inner, i12.prec);
      else if (i12 instanceof tn) n10[o11].push(i12), i12.provides && t54(i12.provides, o11);
      else if (i12 instanceof Z) n10[o11].push(i12), i12.facet.extensions && t54(i12.facet.extensions, ts.default);
      else {
        let e11 = i12.extension;
        if (!e11) throw Error(`Unrecognized extension value in extension set (${i12}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
        t54(e11, o11);
      }
    }(t53, ts.default), n10.reduce((t54, e11) => t54.concat(e11)))) i11 instanceof tn ? o10.push(i11) : (r10[i11.facet.id] || (r10[i11.facet.id] = [])).push(i11);
    let h10 = /* @__PURE__ */ Object.create(null), a10 = [], c10 = [];
    for (let t54 of o10) h10[t54.id] = c10.length << 1, c10.push((e11) => t54.slot(e11));
    let d10 = null == i10 ? void 0 : i10.config.facets;
    for (let t54 in r10) {
      let e11 = r10[t54], n11 = e11[0].facet, s11 = d10 && d10[t54] || [];
      if (e11.every((t55) => 0 == t55.type)) {
        if (h10[n11.id] = a10.length << 1 | 1, Q(s11, e11)) a10.push(i10.facet(n11));
        else {
          let t55 = n11.combine(e11.map((t56) => t56.value));
          a10.push(i10 && n11.compare(t55, i10.facet(n11)) ? i10.facet(n11) : t55);
        }
      } else {
        for (let t55 of e11) 0 == t55.type ? (h10[t55.id] = a10.length << 1 | 1, a10.push(t55.value)) : (h10[t55.id] = c10.length << 1, c10.push((e12) => t55.dynamicSlot(e12)));
        h10[n11.id] = c10.length << 1, c10.push((t55) => function(t56, e12, i11) {
          let n12 = i11.map((e13) => t56[e13.id]), s12 = i11.map((t57) => t57.type), o11 = n12.filter((t57) => !(1 & t57)), r11 = t56[e12.id] >> 1;
          function l11(t57) {
            let i12 = [];
            for (let e13 = 0; e13 < n12.length; e13++) {
              let o12 = tu(t57, n12[e13]);
              if (2 == s12[e13]) for (let t58 of o12) i12.push(t58);
              else i12.push(o12);
            }
            return e12.combine(i12);
          }
          return { create(t57) {
            for (let e13 of n12) td(t57, e13);
            return t57.values[r11] = l11(t57), 1;
          }, update(t57, i12) {
            if (!te(t57, o11)) return 0;
            let n13 = l11(t57);
            return e12.compare(n13, t57.values[r11]) ? 0 : (t57.values[r11] = n13, 1);
          }, reconfigure(t57, s13) {
            let o12 = te(t57, n12), h11 = s13.config.facets[e12.id], a11 = s13.facet(e12);
            if (h11 && !o12 && Q(i11, h11)) return t57.values[r11] = a11, 0;
            let c11 = l11(t57);
            return e12.compare(c11, a11) ? (t57.values[r11] = a11, 0) : (t57.values[r11] = c11, 1);
          } };
        }(t55, n11, e11));
      }
    }
    return new tc(t53, l10, c10.map((t54) => t54(h10)), h10, a10, r10);
  }
}
function td(t53, e10) {
  if (1 & e10) return 2;
  let i10 = e10 >> 1, n10 = t53.status[i10];
  if (4 == n10) throw Error("Cyclic dependency between fields and/or facets");
  if (2 & n10) return n10;
  t53.status[i10] = 4;
  let s10 = t53.computeSlot(t53, t53.config.dynamicSlots[i10]);
  return t53.status[i10] = 2 | s10;
}
function tu(t53, e10) {
  return 1 & e10 ? t53.config.staticValues[e10 >> 1] : t53.values[e10 >> 1];
}
let tf = J.define(), tg = J.define({ combine: (t53) => t53.some((t54) => t54), static: true }), tp = J.define({ combine: (t53) => t53.length ? t53[0] : void 0, static: true }), tm = J.define(), tv = J.define(), tw = J.define(), tb = J.define({ combine: (t53) => !!t53.length && t53[0] });
class ty {
  constructor(t53, e10) {
    this.type = t53, this.value = e10;
  }
  static define() {
    return new tx();
  }
}
class tx {
  of(t53) {
    return new ty(this, t53);
  }
}
class tS {
  constructor(t53) {
    this.map = t53;
  }
  of(t53) {
    return new tk(this, t53);
  }
}
class tk {
  constructor(t53, e10) {
    this.type = t53, this.value = e10;
  }
  map(t53) {
    let e10 = this.type.map(this.value, t53);
    return void 0 === e10 ? void 0 : e10 == this.value ? this : new tk(this.type, e10);
  }
  is(t53) {
    return this.type == t53;
  }
  static define() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new tS(t53.map || ((t54) => t54));
  }
  static mapEffects(t53, e10) {
    if (!t53.length) return t53;
    let i10 = [];
    for (let n10 of t53) {
      let t54 = n10.map(e10);
      t54 && i10.push(t54);
    }
    return i10;
  }
}
tk.reconfigure = tk.define(), tk.appendConfig = tk.define();
class tM {
  constructor(t53, e10, i10, n10, s10, o10) {
    this.startState = t53, this.changes = e10, this.selection = i10, this.effects = n10, this.annotations = s10, this.scrollIntoView = o10, this._doc = null, this._state = null, i10 && Y(i10, e10.newLength), s10.some((t54) => t54.type == tM.time) || (this.annotations = s10.concat(tM.time.of(Date.now())));
  }
  static create(t53, e10, i10, n10, s10, o10) {
    return new tM(t53, e10, i10, n10, s10, o10);
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
  annotation(t53) {
    for (let e10 of this.annotations) if (e10.type == t53) return e10.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(t53) {
    let e10 = this.annotation(tM.userEvent);
    return !!(e10 && (e10 == t53 || e10.length > t53.length && e10.slice(0, t53.length) == t53 && "." == e10[t53.length]));
  }
}
function tA(t53, e10, i10) {
  var n10;
  let s10, o10, r10;
  return i10 ? (s10 = e10.changes, o10 = W.empty(e10.changes.length), r10 = t53.changes.compose(e10.changes)) : (s10 = e10.changes.map(t53.changes), o10 = t53.changes.mapDesc(e10.changes, true), r10 = t53.changes.compose(s10)), { changes: r10, selection: e10.selection ? e10.selection.map(o10) : null === (n10 = t53.selection) || void 0 === n10 ? void 0 : n10.map(s10), effects: tk.mapEffects(t53.effects, s10).concat(tk.mapEffects(e10.effects, o10)), annotations: t53.annotations.length ? t53.annotations.concat(e10.annotations) : e10.annotations, scrollIntoView: t53.scrollIntoView || e10.scrollIntoView };
}
function tC(t53, e10, i10) {
  let n10 = e10.selection, s10 = tO(e10.annotations);
  return e10.userEvent && (s10 = s10.concat(tM.userEvent.of(e10.userEvent))), { changes: e10.changes instanceof W ? e10.changes : W.of(e10.changes || [], i10, t53.facet(tp)), selection: n10 && (n10 instanceof $ ? n10 : $.single(n10.anchor, n10.head)), effects: tO(e10.effects), annotations: s10, scrollIntoView: !!e10.scrollIntoView };
}
tM.time = ty.define(), tM.userEvent = ty.define(), tM.addToHistory = ty.define(), tM.remote = ty.define();
let tD = [];
function tO(t53) {
  return null == t53 ? tD : Array.isArray(t53) ? t53 : [t53];
}
var tT = ((k = tT || (tT = {}))[k.Word = 0] = "Word", k[k.Space = 1] = "Space", k[k.Other = 2] = "Other", k);
let tE = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
try {
  t = RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch (t53) {
}
class tB {
  constructor(t53, e10, i10, n10, s10, o10) {
    this.config = t53, this.doc = e10, this.selection = i10, this.values = n10, this.status = t53.statusTemplate.slice(), this.computeSlot = s10, o10 && (o10._state = this);
    for (let t54 = 0; t54 < this.config.dynamicSlots.length; t54++) td(this, t54 << 1);
    this.computeSlot = null;
  }
  field(t53) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], i10 = this.config.address[t53.id];
    if (null == i10) {
      if (e10) throw RangeError("Field is not present in this state");
      return;
    }
    return td(this, i10), tu(this, i10);
  }
  update() {
    for (var t53 = arguments.length, e10 = Array(t53), i10 = 0; i10 < t53; i10++) e10[i10] = arguments[i10];
    return function t54(e11, i11, n10) {
      let s10 = tC(e11, i11.length ? i11[0] : {}, e11.doc.length);
      i11.length && false === i11[0].filter && (n10 = false);
      for (let t55 = 1; t55 < i11.length; t55++) {
        false === i11[t55].filter && (n10 = false);
        let o11 = !!i11[t55].sequential;
        s10 = tA(s10, tC(e11, i11[t55], o11 ? s10.changes.newLength : e11.doc.length), o11);
      }
      let o10 = tM.create(e11, s10.changes, s10.selection, s10.effects, s10.annotations, s10.scrollIntoView);
      return function(t55) {
        let e12 = t55.startState, i12 = e12.facet(tw), n11 = t55;
        for (let s11 = i12.length - 1; s11 >= 0; s11--) {
          let o11 = i12[s11](t55);
          o11 && Object.keys(o11).length && (n11 = tA(n11, tC(e12, o11, t55.changes.newLength), true));
        }
        return n11 == t55 ? t55 : tM.create(e12, t55.changes, t55.selection, n11.effects, n11.annotations, n11.scrollIntoView);
      }(n10 ? function(e12) {
        let i12 = e12.startState, n11 = true;
        for (let t55 of i12.facet(tm)) {
          let i13 = t55(e12);
          if (false === i13) {
            n11 = false;
            break;
          }
          Array.isArray(i13) && (n11 = true === n11 ? i13 : function(t56, e13) {
            let i14 = [];
            for (let n12 = 0, s12 = 0; ; ) {
              let o11, r10;
              if (n12 < t56.length && (s12 == e13.length || e13[s12] >= t56[n12])) o11 = t56[n12++], r10 = t56[n12++];
              else {
                if (!(s12 < e13.length)) return i14;
                o11 = e13[s12++], r10 = e13[s12++];
              }
              !i14.length || i14[i14.length - 1] < o11 ? i14.push(o11, r10) : i14[i14.length - 1] < r10 && (i14[i14.length - 1] = r10);
            }
          }(n11, i13));
        }
        if (true !== n11) {
          let t55, s12;
          if (false === n11) s12 = e12.changes.invertedDesc, t55 = W.empty(i12.doc.length);
          else {
            let i13 = e12.changes.filter(n11);
            t55 = i13.changes, s12 = i13.filtered.mapDesc(i13.changes).invertedDesc;
          }
          e12 = tM.create(i12, t55, e12.selection && e12.selection.map(s12), tk.mapEffects(e12.effects, s12), e12.annotations, e12.scrollIntoView);
        }
        let s11 = i12.facet(tv);
        for (let n12 = s11.length - 1; n12 >= 0; n12--) {
          let o11 = s11[n12](e12);
          e12 = o11 instanceof tM ? o11 : Array.isArray(o11) && 1 == o11.length && o11[0] instanceof tM ? o11[0] : t54(i12, tO(o11), false);
        }
        return e12;
      }(o10) : o10);
    }(this, e10, true);
  }
  applyTransaction(t53) {
    let e10, i10 = this.config, { base: n10, compartments: s10 } = i10;
    for (let e11 of t53.effects) e11.is(th.reconfigure) ? (i10 && (s10 = /* @__PURE__ */ new Map(), i10.compartments.forEach((t54, e12) => s10.set(e12, t54)), i10 = null), s10.set(e11.value.compartment, e11.value.extension)) : e11.is(tk.reconfigure) ? (i10 = null, n10 = e11.value) : e11.is(tk.appendConfig) && (i10 = null, n10 = tO(n10).concat(e11.value));
    e10 = i10 ? t53.startState.values.slice() : new tB(i10 = tc.resolve(n10, s10, this), this.doc, this.selection, i10.dynamicSlots.map(() => null), (t54, e11) => e11.reconfigure(t54, this), null).values;
    let o10 = t53.startState.facet(tg) ? t53.newSelection : t53.newSelection.asSingle();
    new tB(i10, t53.newDoc, o10, e10, (e11, i11) => i11.update(e11, t53), t53);
  }
  replaceSelection(t53) {
    return "string" == typeof t53 && (t53 = this.toText(t53)), this.changeByRange((e10) => ({ changes: { from: e10.from, to: e10.to, insert: t53 }, range: $.cursor(e10.from + t53.length) }));
  }
  changeByRange(t53) {
    let e10 = this.selection, i10 = t53(e10.ranges[0]), n10 = this.changes(i10.changes), s10 = [i10.range], o10 = tO(i10.effects);
    for (let i11 = 1; i11 < e10.ranges.length; i11++) {
      let r10 = t53(e10.ranges[i11]), l10 = this.changes(r10.changes), h10 = l10.map(n10);
      for (let t54 = 0; t54 < i11; t54++) s10[t54] = s10[t54].map(h10);
      let a10 = n10.mapDesc(l10, true);
      s10.push(r10.range.map(a10)), n10 = n10.compose(h10), o10 = tk.mapEffects(o10, h10).concat(tk.mapEffects(tO(r10.effects), a10));
    }
    return { changes: n10, selection: $.create(s10, e10.mainIndex), effects: o10 };
  }
  changes() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return t53 instanceof W ? t53 : W.of(t53, this.doc.length, this.facet(tB.lineSeparator));
  }
  toText(t53) {
    return s.of(t53.split(this.facet(tB.lineSeparator) || S));
  }
  sliceDoc() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
    return this.doc.sliceString(t53, e10, this.lineBreak);
  }
  facet(t53) {
    let e10 = this.config.address[t53.id];
    return null == e10 ? t53.default : (td(this, e10), tu(this, e10));
  }
  toJSON(t53) {
    let e10 = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (t53) for (let i10 in t53) {
      let n10 = t53[i10];
      n10 instanceof tn && null != this.config.address[n10.id] && (e10[i10] = n10.spec.toJSON(this.field(t53[i10]), this));
    }
    return e10;
  }
  static fromJSON(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i10 = arguments.length > 2 ? arguments[2] : void 0;
    if (!t53 || "string" != typeof t53.doc) throw RangeError("Invalid JSON representation for EditorState");
    let n10 = [];
    if (i10) {
      for (let e11 in i10) if (Object.prototype.hasOwnProperty.call(t53, e11)) {
        let s10 = i10[e11], o10 = t53[e11];
        n10.push(s10.init((t54) => s10.spec.fromJSON(o10, t54)));
      }
    }
    return tB.create({ doc: t53.doc, selection: $.fromJSON(t53.selection), extensions: e10.extensions ? n10.concat([e10.extensions]) : n10 });
  }
  static create() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e10 = tc.resolve(t53.extensions || [], /* @__PURE__ */ new Map()), i10 = t53.doc instanceof s ? t53.doc : s.of((t53.doc || "").split(e10.staticFacet(tB.lineSeparator) || S)), n10 = t53.selection ? t53.selection instanceof $ ? t53.selection : $.single(t53.selection.anchor, t53.selection.head) : $.single(0);
    return Y(n10, i10.length), e10.staticFacet(tg) || (n10 = n10.asSingle()), new tB(e10, i10, n10, e10.dynamicSlots.map(() => null), (t54, e11) => e11.create(t54), null);
  }
  get tabSize() {
    return this.facet(tB.tabSize);
  }
  get lineBreak() {
    return this.facet(tB.lineSeparator) || "\n";
  }
  get readOnly() {
    return this.facet(tb);
  }
  phrase(t53) {
    for (var e10 = arguments.length, i10 = Array(e10 > 1 ? e10 - 1 : 0), n10 = 1; n10 < e10; n10++) i10[n10 - 1] = arguments[n10];
    for (let e11 of this.facet(tB.phrases)) if (Object.prototype.hasOwnProperty.call(e11, t53)) {
      t53 = e11[t53];
      break;
    }
    return i10.length && (t53 = t53.replace(/\$(\$|\d*)/g, (t54, e11) => {
      if ("$" == e11) return "$";
      let n11 = +(e11 || 1);
      return !n11 || n11 > i10.length ? t54 : i10[n11 - 1];
    })), t53;
  }
  languageDataAt(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1, n10 = [];
    for (let s10 of this.facet(tf)) for (let o10 of s10(this, e10, i10)) Object.prototype.hasOwnProperty.call(o10, t53) && n10.push(o10[t53]);
    return n10;
  }
  charCategorizer(e10) {
    var i10;
    return i10 = this.languageDataAt("wordChars", e10).join(""), (e11) => {
      if (!/\S/.test(e11)) return tT.Space;
      if (function(e12) {
        if (t) return t.test(e12);
        for (let t53 = 0; t53 < e12.length; t53++) {
          let i11 = e12[t53];
          if (/\w/.test(i11) || i11 > "" && (i11.toUpperCase() != i11.toLowerCase() || tE.test(i11))) return true;
        }
        return false;
      }(e11)) return tT.Word;
      for (let t53 = 0; t53 < i10.length; t53++) if (e11.indexOf(i10[t53]) > -1) return tT.Word;
      return tT.Other;
    };
  }
  wordAt(t53) {
    let { text: e10, from: i10, length: n10 } = this.doc.lineAt(t53), s10 = this.charCategorizer(t53), o10 = t53 - i10, r10 = t53 - i10;
    for (; o10 > 0; ) {
      let t54 = p(e10, o10, false);
      if (s10(e10.slice(t54, o10)) != tT.Word) break;
      o10 = t54;
    }
    for (; r10 < n10; ) {
      let t54 = p(e10, r10);
      if (s10(e10.slice(r10, t54)) != tT.Word) break;
      r10 = t54;
    }
    return o10 == r10 ? null : $.range(o10 + i10, r10 + i10);
  }
}
function tR(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n10 = {};
  for (let e11 of t53) for (let t54 of Object.keys(e11)) {
    let s10 = e11[t54], o10 = n10[t54];
    if (void 0 === o10) n10[t54] = s10;
    else if (o10 === s10 || void 0 === s10) ;
    else if (Object.hasOwnProperty.call(i10, t54)) n10[t54] = i10[t54](o10, s10);
    else throw Error("Config merge conflict for field " + t54);
  }
  for (let t54 in e10) void 0 === n10[t54] && (n10[t54] = e10[t54]);
  return n10;
}
tB.allowMultipleSelections = tg, tB.tabSize = J.define({ combine: (t53) => t53.length ? t53[0] : 4 }), tB.lineSeparator = tp, tB.readOnly = tb, tB.phrases = J.define({ compare(t53, e10) {
  let i10 = Object.keys(t53), n10 = Object.keys(e10);
  return i10.length == n10.length && i10.every((i11) => t53[i11] == e10[i11]);
} }), tB.languageData = tf, tB.changeFilter = tm, tB.transactionFilter = tv, tB.transactionExtender = tw, th.reconfigure = tk.define();
class tL {
  eq(t53) {
    return this == t53;
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    return tP.create(t53, e10, this);
  }
}
tL.prototype.startSide = tL.prototype.endSide = 0, tL.prototype.point = false, tL.prototype.mapMode = I.TrackDel;
let tP = class t2 {
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.value = i10;
  }
  static create(e10, i10, n10) {
    return new t2(e10, i10, n10);
  }
};
function tN(t53, e10) {
  return t53.from - e10.from || t53.value.startSide - e10.value.startSide;
}
class tH {
  constructor(t53, e10, i10, n10) {
    this.from = t53, this.to = e10, this.value = i10, this.maxPoint = n10;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(t53, e10, i10) {
    let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s10 = i10 ? this.to : this.from;
    for (let o10 = n10, r10 = s10.length; ; ) {
      if (o10 == r10) return o10;
      let n11 = o10 + r10 >> 1, l10 = s10[n11] - t53 || (i10 ? this.value[n11].endSide : this.value[n11].startSide) - e10;
      if (n11 == o10) return l10 >= 0 ? o10 : r10;
      l10 >= 0 ? r10 = n11 : o10 = n11 + 1;
    }
  }
  between(t53, e10, i10, n10) {
    for (let s10 = this.findIndex(e10, -1e9, true), o10 = this.findIndex(i10, 1e9, false, s10); s10 < o10; s10++) if (false === n10(this.from[s10] + t53, this.to[s10] + t53, this.value[s10])) return false;
  }
  map(t53, e10) {
    let i10 = [], n10 = [], s10 = [], o10 = -1, r10 = -1;
    for (let l10 = 0; l10 < this.value.length; l10++) {
      let h10 = this.value[l10], a10 = this.from[l10] + t53, c10 = this.to[l10] + t53, d10, u10;
      if (a10 == c10) {
        let t54 = e10.mapPos(a10, h10.startSide, h10.mapMode);
        if (null == t54 || (d10 = u10 = t54, h10.startSide != h10.endSide && (u10 = e10.mapPos(a10, h10.endSide)) < d10)) continue;
      } else if ((d10 = e10.mapPos(a10, h10.startSide)) > (u10 = e10.mapPos(c10, h10.endSide)) || d10 == u10 && h10.startSide > 0 && h10.endSide <= 0) continue;
      0 > (u10 - d10 || h10.endSide - h10.startSide) || (o10 < 0 && (o10 = d10), h10.point && (r10 = Math.max(r10, u10 - d10)), i10.push(h10), n10.push(d10 - o10), s10.push(u10 - o10));
    }
    return { mapped: i10.length ? new tH(n10, s10, i10, r10) : null, pos: o10 };
  }
}
class tV {
  constructor(t53, e10, i10, n10) {
    this.chunkPos = t53, this.chunk = e10, this.nextLayer = i10, this.maxPoint = n10;
  }
  static create(t53, e10, i10, n10) {
    return new tV(t53, e10, i10, n10);
  }
  get length() {
    let t53 = this.chunk.length - 1;
    return t53 < 0 ? 0 : Math.max(this.chunkEnd(t53), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let t53 = this.nextLayer.size;
    for (let e10 of this.chunk) t53 += e10.value.length;
    return t53;
  }
  chunkEnd(t53) {
    return this.chunkPos[t53] + this.chunk[t53].length;
  }
  update(t53) {
    let { add: e10 = [], sort: i10 = false, filterFrom: n10 = 0, filterTo: s10 = this.length } = t53, o10 = t53.filter;
    if (0 == e10.length && !o10) return this;
    if (i10 && (e10 = e10.slice().sort(tN)), this.isEmpty) return e10.length ? tV.of(e10) : this;
    let r10 = new tW(this, null, -1).goto(0), l10 = 0, h10 = [], a10 = new tI();
    for (; r10.value || l10 < e10.length; ) if (l10 < e10.length && (r10.from - e10[l10].from || r10.startSide - e10[l10].value.startSide) >= 0) {
      let t54 = e10[l10++];
      a10.addInner(t54.from, t54.to, t54.value) || h10.push(t54);
    } else 1 == r10.rangeIndex && r10.chunkIndex < this.chunk.length && (l10 == e10.length || this.chunkEnd(r10.chunkIndex) < e10[l10].from) && (!o10 || n10 > this.chunkEnd(r10.chunkIndex) || s10 < this.chunkPos[r10.chunkIndex]) && a10.addChunk(this.chunkPos[r10.chunkIndex], this.chunk[r10.chunkIndex]) ? r10.nextChunk() : ((!o10 || n10 > r10.to || s10 < r10.from || o10(r10.from, r10.to, r10.value)) && !a10.addInner(r10.from, r10.to, r10.value) && h10.push(tP.create(r10.from, r10.to, r10.value)), r10.next());
    return a10.finishInner(this.nextLayer.isEmpty && !h10.length ? tV.empty : this.nextLayer.update({ add: h10, filter: o10, filterFrom: n10, filterTo: s10 }));
  }
  map(t53) {
    if (t53.empty || this.isEmpty) return this;
    let e10 = [], i10 = [], n10 = -1;
    for (let s11 = 0; s11 < this.chunk.length; s11++) {
      let o10 = this.chunkPos[s11], r10 = this.chunk[s11], l10 = t53.touchesRange(o10, o10 + r10.length);
      if (false === l10) n10 = Math.max(n10, r10.maxPoint), e10.push(r10), i10.push(t53.mapPos(o10));
      else if (true === l10) {
        let { mapped: s12, pos: l11 } = r10.map(o10, t53);
        s12 && (n10 = Math.max(n10, s12.maxPoint), e10.push(s12), i10.push(l11));
      }
    }
    let s10 = this.nextLayer.map(t53);
    return 0 == e10.length ? s10 : new tV(i10, e10, s10 || tV.empty, n10);
  }
  between(t53, e10, i10) {
    if (!this.isEmpty) {
      for (let n10 = 0; n10 < this.chunk.length; n10++) {
        let s10 = this.chunkPos[n10], o10 = this.chunk[n10];
        if (e10 >= s10 && t53 <= s10 + o10.length && false === o10.between(s10, t53 - s10, e10 - s10, i10)) return;
      }
      this.nextLayer.between(t53, e10, i10);
    }
  }
  iter() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return tz.from([this]).goto(t53);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return tz.from(t53).goto(e10);
  }
  static compare(t53, e10, i10, n10) {
    let s10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1, o10 = t53.filter((t54) => t54.maxPoint > 0 || !t54.isEmpty && t54.maxPoint >= s10), r10 = e10.filter((t54) => t54.maxPoint > 0 || !t54.isEmpty && t54.maxPoint >= s10), l10 = tF(o10, r10, i10), h10 = new tq(o10, l10, s10), a10 = new tq(r10, l10, s10);
    i10.iterGaps((t54, e11, i11) => t_(h10, t54, a10, e11, i11, n10)), i10.empty && 0 == i10.length && t_(h10, 0, a10, 0, 0, n10);
  }
  static eq(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = arguments.length > 3 ? arguments[3] : void 0;
    null == n10 && (n10 = 999999999);
    let s10 = t53.filter((t54) => !t54.isEmpty && 0 > e10.indexOf(t54)), o10 = e10.filter((e11) => !e11.isEmpty && 0 > t53.indexOf(e11));
    if (s10.length != o10.length) return false;
    if (!s10.length) return true;
    let r10 = tF(s10, o10), l10 = new tq(s10, r10, 0).goto(i10), h10 = new tq(o10, r10, 0).goto(i10);
    for (; ; ) {
      if (l10.to != h10.to || !tj(l10.active, h10.active) || l10.point && (!h10.point || !l10.point.eq(h10.point))) return false;
      if (l10.to > n10) return true;
      l10.next(), h10.next();
    }
  }
  static spans(t53, e10, i10, n10) {
    let s10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1, o10 = new tq(t53, null, s10).goto(e10), r10 = e10, l10 = o10.openStart;
    for (; ; ) {
      let t54 = Math.min(o10.to, i10);
      if (o10.point) {
        let i11 = o10.activeForPoint(o10.to), s11 = o10.pointFrom < e10 ? i11.length + 1 : o10.point.startSide < 0 ? i11.length : Math.min(i11.length, l10);
        n10.point(r10, t54, o10.point, i11, s11, o10.pointRank), l10 = Math.min(o10.openEnd(t54), i11.length);
      } else t54 > r10 && (n10.span(r10, t54, o10.active, l10), l10 = o10.openEnd(t54));
      if (o10.to > i10) return l10 + (o10.point && o10.to > i10 ? 1 : 0);
      r10 = o10.to, o10.next();
    }
  }
  static of(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i10 = new tI();
    for (let n10 of t53 instanceof tP ? [t53] : e10 ? function(t54) {
      if (t54.length > 1) for (let e11 = t54[0], i11 = 1; i11 < t54.length; i11++) {
        let n11 = t54[i11];
        if (tN(e11, n11) > 0) return t54.slice().sort(tN);
        e11 = n11;
      }
      return t54;
    }(t53) : t53) i10.add(n10.from, n10.to, n10.value);
    return i10.finish();
  }
  static join(t53) {
    if (!t53.length) return tV.empty;
    let e10 = t53[t53.length - 1];
    for (let i10 = t53.length - 2; i10 >= 0; i10--) for (let n10 = t53[i10]; n10 != tV.empty; n10 = n10.nextLayer) e10 = new tV(n10.chunkPos, n10.chunk, e10, Math.max(n10.maxPoint, e10.maxPoint));
    return e10;
  }
}
tV.empty = new tV([], [], null, -1), tV.empty.nextLayer = tV.empty;
class tI {
  finishChunk(t53) {
    this.chunks.push(new tH(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t53 && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(t53, e10, i10) {
    this.addInner(t53, e10, i10) || (this.nextLayer || (this.nextLayer = new tI())).add(t53, e10, i10);
  }
  addInner(t53, e10, i10) {
    let n10 = t53 - this.lastTo || i10.startSide - this.last.endSide;
    if (n10 <= 0 && 0 > (t53 - this.lastFrom || i10.startSide - this.last.startSide)) throw Error("Ranges must be added sorted by `from` position and `startSide`");
    return !(n10 < 0) && (250 == this.from.length && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = t53), this.from.push(t53 - this.chunkStart), this.to.push(e10 - this.chunkStart), this.last = i10, this.lastFrom = t53, this.lastTo = e10, this.value.push(i10), i10.point && (this.maxPoint = Math.max(this.maxPoint, e10 - t53)), true);
  }
  addChunk(t53, e10) {
    if (0 > (t53 - this.lastTo || e10.value[0].startSide - this.last.endSide)) return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, e10.maxPoint), this.chunks.push(e10), this.chunkPos.push(t53);
    let i10 = e10.value.length - 1;
    return this.last = e10.value[i10], this.lastFrom = e10.from[i10] + t53, this.lastTo = e10.to[i10] + t53, true;
  }
  finish() {
    return this.finishInner(tV.empty);
  }
  finishInner(t53) {
    if (this.from.length && this.finishChunk(false), 0 == this.chunks.length) return t53;
    let e10 = tV.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t53) : t53, this.setMaxPoint);
    return this.from = null, e10;
  }
}
function tF(t53, e10, i10) {
  let n10 = /* @__PURE__ */ new Map();
  for (let e11 of t53) for (let t54 = 0; t54 < e11.chunk.length; t54++) e11.chunk[t54].maxPoint <= 0 && n10.set(e11.chunk[t54], e11.chunkPos[t54]);
  let s10 = /* @__PURE__ */ new Set();
  for (let t54 of e10) for (let e11 = 0; e11 < t54.chunk.length; e11++) {
    let o10 = n10.get(t54.chunk[e11]);
    null == o10 || (i10 ? i10.mapPos(o10) : o10) != t54.chunkPos[e11] || (null == i10 ? void 0 : i10.touchesRange(o10, o10 + t54.chunk[e11].length)) || s10.add(t54.chunk[e11]);
  }
  return s10;
}
class tW {
  constructor(t53, e10, i10, n10 = 0) {
    this.layer = t53, this.skip = e10, this.minPoint = i10, this.rank = n10;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t53, e10, false), this;
  }
  gotoInner(t53, e10, i10) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let e11 = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(e11) || this.layer.chunkEnd(this.chunkIndex) < t53 || e11.maxPoint < this.minPoint)) break;
      this.chunkIndex++, i10 = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n10 = this.layer.chunk[this.chunkIndex].findIndex(t53 - this.layer.chunkPos[this.chunkIndex], e10, true);
      (!i10 || this.rangeIndex < n10) && this.setRangeIndex(n10);
    }
    this.next();
  }
  forward(t53, e10) {
    0 > (this.to - t53 || this.endSide - e10) && this.gotoInner(t53, e10, true);
  }
  next() {
    for (; ; ) {
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      }
      {
        let t53 = this.layer.chunkPos[this.chunkIndex], e10 = this.layer.chunk[this.chunkIndex], i10 = t53 + e10.from[this.rangeIndex];
        if (this.from = i10, this.to = t53 + e10.to[this.rangeIndex], this.value = e10.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
      }
    }
  }
  setRangeIndex(t53) {
    if (t53 == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); ) this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = t53;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t53) {
    return this.from - t53.from || this.startSide - t53.startSide || this.rank - t53.rank || this.to - t53.to || this.endSide - t53.endSide;
  }
}
class tz {
  constructor(t53) {
    this.heap = t53;
  }
  static from(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1, n10 = [];
    for (let s10 = 0; s10 < t53.length; s10++) for (let o10 = t53[s10]; !o10.isEmpty; o10 = o10.nextLayer) o10.maxPoint >= i10 && n10.push(new tW(o10, e10, i10, s10));
    return 1 == n10.length ? n10[0] : new tz(n10);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
    for (let i10 of this.heap) i10.goto(t53, e10);
    for (let t54 = this.heap.length >> 1; t54 >= 0; t54--) tK(this.heap, t54);
    return this.next(), this;
  }
  forward(t53, e10) {
    for (let i10 of this.heap) i10.forward(t53, e10);
    for (let t54 = this.heap.length >> 1; t54 >= 0; t54--) tK(this.heap, t54);
    0 > (this.to - t53 || this.value.endSide - e10) && this.next();
  }
  next() {
    if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t53 = this.heap[0];
      this.from = t53.from, this.to = t53.to, this.value = t53.value, this.rank = t53.rank, t53.value && t53.next(), tK(this.heap, 0);
    }
  }
}
function tK(t53, e10) {
  for (let i10 = t53[e10]; ; ) {
    let n10 = (e10 << 1) + 1;
    if (n10 >= t53.length) break;
    let s10 = t53[n10];
    if (n10 + 1 < t53.length && s10.compare(t53[n10 + 1]) >= 0 && (s10 = t53[n10 + 1], n10++), 0 > i10.compare(s10)) break;
    t53[n10] = i10, t53[e10] = s10, e10 = n10;
  }
}
class tq {
  constructor(t53, e10, i10) {
    this.minPoint = i10, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = tz.from(t53, e10, i10);
  }
  goto(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
    return this.cursor.goto(t53, e10), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t53, this.endSide = e10, this.openStart = -1, this.next(), this;
  }
  forward(t53, e10) {
    for (; this.minActive > -1 && 0 > (this.activeTo[this.minActive] - t53 || this.active[this.minActive].endSide - e10); ) this.removeActive(this.minActive);
    this.cursor.forward(t53, e10);
  }
  removeActive(t53) {
    tG(this.active, t53), tG(this.activeTo, t53), tG(this.activeRank, t53), this.minActive = t$(this.active, this.activeTo);
  }
  addActive(t53) {
    let e10 = 0, { value: i10, to: n10, rank: s10 } = this.cursor;
    for (; e10 < this.activeRank.length && (s10 - this.activeRank[e10] || n10 - this.activeTo[e10]) > 0; ) e10++;
    tU(this.active, e10, i10), tU(this.activeTo, e10, n10), tU(this.activeRank, e10, s10), t53 && tU(t53, e10, this.cursor.from), this.minActive = t$(this.active, this.activeTo);
  }
  next() {
    let t53 = this.to, e10 = this.point;
    this.point = null;
    let i10 = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n10 = this.minActive;
      if (n10 > -1 && 0 > (this.activeTo[n10] - this.cursor.from || this.active[n10].endSide - this.cursor.startSide)) {
        if (this.activeTo[n10] > t53) {
          this.to = this.activeTo[n10], this.endSide = this.active[n10].endSide;
          break;
        }
        this.removeActive(n10), i10 && tG(i10, n10);
      } else if (this.cursor.value) {
        if (this.cursor.from > t53) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        }
        {
          let t54 = this.cursor.value;
          if (t54.point) {
            if (e10 && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
            else {
              this.point = t54, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = t54.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
              break;
            }
          } else this.addActive(i10), this.cursor.next();
        }
      } else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i10) {
      this.openStart = 0;
      for (let e11 = i10.length - 1; e11 >= 0 && i10[e11] < t53; e11--) this.openStart++;
    }
  }
  activeForPoint(t53) {
    if (!this.active.length) return this.active;
    let e10 = [];
    for (let i10 = this.active.length - 1; i10 >= 0 && !(this.activeRank[i10] < this.pointRank); i10--) (this.activeTo[i10] > t53 || this.activeTo[i10] == t53 && this.active[i10].endSide >= this.point.endSide) && e10.push(this.active[i10]);
    return e10.reverse();
  }
  openEnd(t53) {
    let e10 = 0;
    for (let i10 = this.activeTo.length - 1; i10 >= 0 && this.activeTo[i10] > t53; i10--) e10++;
    return e10;
  }
}
function t_(t53, e10, i10, n10, s10, o10) {
  t53.goto(e10), i10.goto(n10);
  let r10 = n10 + s10, l10 = n10, h10 = n10 - e10;
  for (; ; ) {
    let e11 = t53.to + h10 - i10.to || t53.endSide - i10.endSide, n11 = e11 < 0 ? t53.to + h10 : i10.to, s11 = Math.min(n11, r10);
    if (t53.point || i10.point ? t53.point && i10.point && (t53.point == i10.point || t53.point.eq(i10.point)) && tj(t53.activeForPoint(t53.to), i10.activeForPoint(i10.to)) || o10.comparePoint(l10, s11, t53.point, i10.point) : s11 > l10 && !tj(t53.active, i10.active) && o10.compareRange(l10, s11, t53.active, i10.active), n11 > r10) break;
    l10 = n11, e11 <= 0 && t53.next(), e11 >= 0 && i10.next();
  }
}
function tj(t53, e10) {
  if (t53.length != e10.length) return false;
  for (let i10 = 0; i10 < t53.length; i10++) if (t53[i10] != e10[i10] && !t53[i10].eq(e10[i10])) return false;
  return true;
}
function tG(t53, e10) {
  for (let i10 = e10, n10 = t53.length - 1; i10 < n10; i10++) t53[i10] = t53[i10 + 1];
  t53.pop();
}
function tU(t53, e10, i10) {
  for (let i11 = t53.length - 1; i11 >= e10; i11--) t53[i11 + 1] = t53[i11];
  t53[e10] = i10;
}
function t$(t53, e10) {
  let i10 = -1, n10 = 1e9;
  for (let s10 = 0; s10 < e10.length; s10++) 0 > (e10[s10] - n10 || t53[s10].endSide - t53[i10].endSide) && (i10 = s10, n10 = e10[s10]);
  return i10;
}
function tY(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t53.length, n10 = 0;
  for (let s10 = 0; s10 < i10; ) 9 == t53.charCodeAt(s10) ? (n10 += e10 - n10 % e10, s10++) : (n10++, s10 = p(t53, s10));
  return n10;
}
function tX(t53, e10, i10, n10) {
  for (let n11 = 0, s10 = 0; ; ) {
    if (s10 >= e10) return n11;
    if (n11 == t53.length) break;
    s10 += 9 == t53.charCodeAt(n11) ? i10 - s10 % i10 : 1, n11 = p(t53, n11);
  }
  return true === n10 ? -1 : t53.length;
}
let tJ = "undefined" == typeof Symbol ? "__ͼ" : Symbol.for("ͼ"), tQ = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"), tZ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
class t0 {
  constructor(t53, e10) {
    this.rules = [];
    let { finish: i10 } = e10 || {};
    function n10(t54) {
      return /^@/.test(t54) ? [t54] : t54.split(/,\s*/);
    }
    for (let e11 in t53) !function t54(e12, s10, o10, r10) {
      let l10 = [], h10 = /^@(\w+)\b/.exec(e12[0]), a10 = h10 && "keyframes" == h10[1];
      if (h10 && null == s10) return o10.push(e12[0] + ";");
      for (let i11 in s10) {
        let r11 = s10[i11];
        if (/&/.test(i11)) t54(i11.split(/,\s*/).map((t55) => e12.map((e13) => t55.replace(/&/, e13))).reduce((t55, e13) => t55.concat(e13)), r11, o10);
        else if (r11 && "object" == typeof r11) {
          if (!h10) throw RangeError("The value of a property (" + i11 + ") should be a primitive value.");
          t54(n10(i11), r11, l10, a10);
        } else null != r11 && l10.push(i11.replace(/_.*/, "").replace(/[A-Z]/g, (t55) => "-" + t55.toLowerCase()) + ": " + r11 + ";");
      }
      (l10.length || a10) && o10.push((!i10 || h10 || r10 ? e12 : e12.map(i10)).join(", ") + " {" + l10.join(" ") + "}");
    }(n10(e11), t53[e11], this.rules);
  }
  getRules() {
    return this.rules.join("\n");
  }
  static newName() {
    let t53 = tZ[tJ] || 1;
    return tZ[tJ] = t53 + 1, "ͼ" + t53.toString(36);
  }
  static mount(t53, e10, i10) {
    let n10 = t53[tQ], s10 = i10 && i10.nonce;
    n10 ? s10 && n10.setNonce(s10) : n10 = new t22(t53, s10), n10.mount(Array.isArray(e10) ? e10 : [e10], t53);
  }
}
let t1 = /* @__PURE__ */ new Map();
class t22 {
  constructor(t53, e10) {
    let i10 = t53.ownerDocument || t53, n10 = i10.defaultView;
    if (!t53.head && t53.adoptedStyleSheets && n10.CSSStyleSheet) {
      let e11 = t1.get(i10);
      if (e11) return t53[tQ] = e11;
      this.sheet = new n10.CSSStyleSheet(), t1.set(i10, this);
    } else this.styleTag = i10.createElement("style"), e10 && this.styleTag.setAttribute("nonce", e10);
    this.modules = [], t53[tQ] = this;
  }
  mount(t53, e10) {
    let i10 = this.sheet, n10 = 0, s10 = 0;
    for (let e11 = 0; e11 < t53.length; e11++) {
      let o10 = t53[e11], r10 = this.modules.indexOf(o10);
      if (r10 < s10 && r10 > -1 && (this.modules.splice(r10, 1), s10--, r10 = -1), -1 == r10) {
        if (this.modules.splice(s10++, 0, o10), i10) for (let t54 = 0; t54 < o10.rules.length; t54++) i10.insertRule(o10.rules[t54], n10++);
      } else {
        for (; s10 < r10; ) n10 += this.modules[s10++].rules.length;
        n10 += o10.rules.length, s10++;
      }
    }
    if (i10) 0 > e10.adoptedStyleSheets.indexOf(this.sheet) && (e10.adoptedStyleSheets = [this.sheet, ...e10.adoptedStyleSheets]);
    else {
      let t54 = "";
      for (let e11 = 0; e11 < this.modules.length; e11++) t54 += this.modules[e11].getRules() + "\n";
      this.styleTag.textContent = t54;
      let i11 = e10.head || e10;
      this.styleTag.parentNode != i11 && i11.insertBefore(this.styleTag, i11.firstChild);
    }
  }
  setNonce(t53) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t53 && this.styleTag.setAttribute("nonce", t53);
  }
}
for (var t82 = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, t310 = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, t410 = "undefined" != typeof navigator && /Mac/.test(navigator.platform), t53 = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), t92 = 0; t92 < 10; t92++) t82[48 + t92] = t82[96 + t92] = String(t92);
for (var t92 = 1; t92 <= 24; t92++) t82[t92 + 111] = "F" + t92;
for (var t92 = 65; t92 <= 90; t92++) t82[t92] = String.fromCharCode(t92 + 32), t310[t92] = String.fromCharCode(t92);
for (var t62 in t82) t310.hasOwnProperty(t62) || (t310[t62] = t82[t62]);
function t7(t53) {
  return (11 == t53.nodeType ? t53.getSelection ? t53 : t53.ownerDocument : t53).getSelection();
}
function et(t53, e10) {
  return !!e10 && (t53 == e10 || t53.contains(1 != e10.nodeType ? e10.parentNode : e10));
}
function ee(t53, e10) {
  if (!e10.anchorNode) return false;
  try {
    return et(t53, e10.anchorNode);
  } catch (t54) {
    return false;
  }
}
function ei(t53) {
  return 3 == t53.nodeType ? ef(t53, 0, t53.nodeValue.length).getClientRects() : 1 == t53.nodeType ? t53.getClientRects() : [];
}
function en(t53, e10, i10, n10) {
  return !!i10 && (er(t53, e10, i10, n10, -1) || er(t53, e10, i10, n10, 1));
}
function es(t53) {
  for (var e10 = 0; ; e10++) if (!(t53 = t53.previousSibling)) return e10;
}
function eo(t53) {
  return 1 == t53.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t53.nodeName);
}
function er(t53, e10, i10, n10, s10) {
  for (; ; ) {
    if (t53 == i10 && e10 == n10) return true;
    if (e10 == (s10 < 0 ? 0 : el(t53))) {
      if ("DIV" == t53.nodeName) return false;
      let i11 = t53.parentNode;
      if (!i11 || 1 != i11.nodeType) return false;
      e10 = es(t53) + (s10 < 0 ? 0 : 1), t53 = i11;
    } else {
      if (1 != t53.nodeType || 1 == (t53 = t53.childNodes[e10 + (s10 < 0 ? -1 : 0)]).nodeType && "false" == t53.contentEditable) return false;
      e10 = s10 < 0 ? el(t53) : 0;
    }
  }
}
function el(t53) {
  return 3 == t53.nodeType ? t53.nodeValue.length : t53.childNodes.length;
}
function eh(t53, e10) {
  let i10 = e10 ? t53.left : t53.right;
  return { left: i10, right: i10, top: t53.top, bottom: t53.bottom };
}
function ea(t53, e10) {
  let i10 = e10.width / t53.offsetWidth, n10 = e10.height / t53.offsetHeight;
  return (i10 > 0.995 && i10 < 1.005 || !isFinite(i10) || 1 > Math.abs(e10.width - t53.offsetWidth)) && (i10 = 1), (n10 > 0.995 && n10 < 1.005 || !isFinite(n10) || 1 > Math.abs(e10.height - t53.offsetHeight)) && (n10 = 1), { scaleX: i10, scaleY: n10 };
}
let ec = class {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t53) {
    return this.anchorNode == t53.anchorNode && this.anchorOffset == t53.anchorOffset && this.focusNode == t53.focusNode && this.focusOffset == t53.focusOffset;
  }
  setRange(t53) {
    let { anchorNode: e10, focusNode: i10 } = t53;
    this.set(e10, Math.min(t53.anchorOffset, e10 ? el(e10) : 0), i10, Math.min(t53.focusOffset, i10 ? el(i10) : 0));
  }
  set(t53, e10, i10, n10) {
    this.anchorNode = t53, this.anchorOffset = e10, this.focusNode = i10, this.focusOffset = n10;
  }
}, ed = null;
function eu(t53) {
  if (t53.setActive) return t53.setActive();
  if (ed) return t53.focus(ed);
  let e10 = [];
  for (let i10 = t53; i10 && (e10.push(i10, i10.scrollTop, i10.scrollLeft), i10 != i10.ownerDocument); i10 = i10.parentNode) ;
  if (t53.focus(null == ed ? { get preventScroll() {
    return ed = { preventScroll: true }, true;
  } } : void 0), !ed) {
    ed = false;
    for (let t54 = 0; t54 < e10.length; ) {
      let i10 = e10[t54++], n10 = e10[t54++], s10 = e10[t54++];
      i10.scrollTop != n10 && (i10.scrollTop = n10), i10.scrollLeft != s10 && (i10.scrollLeft = s10);
    }
  }
}
function ef(t53, i10) {
  let n10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i10, s10 = e || (e = document.createRange());
  return s10.setEnd(t53, n10), s10.setStart(t53, i10), s10;
}
function eg(t53, e10, i10, n10) {
  let s10 = { key: e10, code: e10, keyCode: i10, which: i10, cancelable: true };
  n10 && ({ altKey: s10.altKey, ctrlKey: s10.ctrlKey, shiftKey: s10.shiftKey, metaKey: s10.metaKey } = n10);
  let o10 = new KeyboardEvent("keydown", s10);
  o10.synthetic = true, t53.dispatchEvent(o10);
  let r10 = new KeyboardEvent("keyup", s10);
  return r10.synthetic = true, t53.dispatchEvent(r10), o10.defaultPrevented || r10.defaultPrevented;
}
function ep(t53) {
  for (; t53.attributes.length; ) t53.removeAttributeNode(t53.attributes[0]);
}
function em(t53) {
  return t53.scrollTop > Math.max(1, t53.scrollHeight - t53.clientHeight - 4);
}
function ev(t53, e10) {
  for (let i10 = t53, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 > 0) return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 > 0) {
      if ("false" == i10.contentEditable) return null;
      n10 = el(i10 = i10.childNodes[n10 - 1]);
    } else {
      if (!i10.parentNode || eo(i10)) return null;
      n10 = es(i10), i10 = i10.parentNode;
    }
  }
}
function ew(t53, e10) {
  for (let i10 = t53, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 < i10.nodeValue.length) return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 < i10.childNodes.length) {
      if ("false" == i10.contentEditable) return null;
      i10 = i10.childNodes[n10], n10 = 0;
    } else {
      if (!i10.parentNode || eo(i10)) return null;
      n10 = es(i10) + 1, i10 = i10.parentNode;
    }
  }
}
let eb = class t3 {
  constructor(t53, e10, i10 = true) {
    this.node = t53, this.offset = e10, this.precise = i10;
  }
  static before(e10, i10) {
    return new t3(e10.parentNode, es(e10), i10);
  }
  static after(e10, i10) {
    return new t3(e10.parentNode, es(e10) + 1, i10);
  }
}, ey = [], ex = class t4 {
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
  posBefore(t53) {
    let e10 = this.posAtStart;
    for (let i10 of this.children) {
      if (i10 == t53) return e10;
      e10 += i10.length + i10.breakAfter;
    }
    throw RangeError("Invalid child in posBefore");
  }
  posAfter(t53) {
    return this.posBefore(t53) + t53.length;
  }
  sync(e10, i10) {
    if (2 & this.flags) {
      let n10 = this.dom, s10 = null, o10;
      for (let r10 of this.children) {
        if (7 & r10.flags) {
          if (!r10.dom && (o10 = s10 ? s10.nextSibling : n10.firstChild)) {
            let e11 = t4.get(o10);
            (!e11 || !e11.parent && e11.canReuseDOM(r10)) && r10.reuseDOM(o10);
          }
          r10.sync(e10, i10), r10.flags &= -8;
        }
        if (o10 = s10 ? s10.nextSibling : n10.firstChild, i10 && !i10.written && i10.node == n10 && o10 != r10.dom && (i10.written = true), r10.dom.parentNode == n10) for (; o10 && o10 != r10.dom; ) o10 = eS(o10);
        else n10.insertBefore(r10.dom, o10);
        s10 = r10.dom;
      }
      for ((o10 = s10 ? s10.nextSibling : n10.firstChild) && i10 && i10.node == n10 && (i10.written = true); o10; ) o10 = eS(o10);
    } else if (1 & this.flags) for (let t53 of this.children) 7 & t53.flags && (t53.sync(e10, i10), t53.flags &= -8);
  }
  reuseDOM(t53) {
  }
  localPosFromDOM(e10, i10) {
    let n10;
    if (e10 == this.dom) n10 = this.dom.childNodes[i10];
    else {
      let t53 = 0 == el(e10) ? 0 : 0 == i10 ? -1 : 1;
      for (; ; ) {
        let i11 = e10.parentNode;
        if (i11 == this.dom) break;
        0 == t53 && i11.firstChild != i11.lastChild && (t53 = e10 == i11.firstChild ? -1 : 1), e10 = i11;
      }
      n10 = t53 < 0 ? e10 : e10.nextSibling;
    }
    if (n10 == this.dom.firstChild) return 0;
    for (; n10 && !t4.get(n10); ) n10 = n10.nextSibling;
    if (!n10) return this.length;
    for (let t53 = 0, e11 = 0; ; t53++) {
      let i11 = this.children[t53];
      if (i11.dom == n10) return e11;
      e11 += i11.length + i11.breakAfter;
    }
  }
  domBoundsAround(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = -1, s10 = -1, o10 = -1, r10 = -1;
    for (let l10 = 0, h10 = i10, a10 = i10; l10 < this.children.length; l10++) {
      let i11 = this.children[l10], c10 = h10 + i11.length;
      if (h10 < t53 && c10 > e10) return i11.domBoundsAround(t53, e10, h10);
      if (c10 >= t53 && -1 == n10 && (n10 = l10, s10 = h10), h10 > e10 && i11.dom.parentNode == this.dom) {
        o10 = l10, r10 = a10;
        break;
      }
      a10 = c10, h10 = c10 + i11.breakAfter;
    }
    return { from: s10, to: r10 < 0 ? i10 + this.length : r10, startDOM: (n10 ? this.children[n10 - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: o10 < this.children.length && o10 >= 0 ? this.children[o10].dom : null };
  }
  markDirty() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.flags |= 2, this.markParentsDirty(t53);
  }
  markParentsDirty(t53) {
    for (let e10 = this.parent; e10; e10 = e10.parent) {
      if (t53 && (e10.flags |= 2), 1 & e10.flags) return;
      e10.flags |= 1, t53 = false;
    }
  }
  setParent(t53) {
    this.parent != t53 && (this.parent = t53, 7 & this.flags && this.markParentsDirty(true));
  }
  setDOM(t53) {
    this.dom != t53 && (this.dom && (this.dom.cmView = null), this.dom = t53, t53.cmView = this);
  }
  get rootView() {
    for (let t53 = this; ; ) {
      let e10 = t53.parent;
      if (!e10) return t53;
      t53 = e10;
    }
  }
  replaceChildren(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ey;
    this.markDirty();
    for (let n10 = t53; n10 < e10; n10++) {
      let t54 = this.children[n10];
      t54.parent == this && 0 > i10.indexOf(t54) && t54.destroy();
    }
    this.children.splice(t53, e10 - t53, ...i10);
    for (let t54 = 0; t54 < i10.length; t54++) i10[t54].setParent(this);
  }
  ignoreMutation(t53) {
    return false;
  }
  ignoreEvent(t53) {
    return false;
  }
  childCursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length;
    return new ek(this.children, t53, this.children.length);
  }
  childPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return this.childCursor().findPos(t53, e10);
  }
  toString() {
    let t53 = this.constructor.name.replace("View", "");
    return t53 + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == t53 ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t53) {
    return t53.cmView;
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
  merge(t53, e10, i10, n10, s10, o10) {
    return false;
  }
  become(t53) {
    return false;
  }
  canReuseDOM(t53) {
    return t53.constructor == this.constructor && !((this.flags | t53.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t53 of this.children) t53.parent == this && t53.destroy();
    this.parent = null;
  }
};
function eS(t53) {
  let e10 = t53.nextSibling;
  return t53.parentNode.removeChild(t53), e10;
}
ex.prototype.breakAfter = 0;
let ek = class {
  constructor(t53, e10, i10) {
    this.children = t53, this.pos = e10, this.i = i10, this.off = 0;
  }
  findPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    for (; ; ) {
      if (t53 > this.pos || t53 == this.pos && (e10 > 0 || 0 == this.i || this.children[this.i - 1].breakAfter)) return this.off = t53 - this.pos, this;
      let i10 = this.children[--this.i];
      this.pos -= i10.length + i10.breakAfter;
    }
  }
};
function eM(t53, e10, i10, n10, s10, o10, r10, l10, h10) {
  let { children: a10 } = t53, c10 = a10.length ? a10[e10] : null, d10 = o10.length ? o10[o10.length - 1] : null, u10 = d10 ? d10.breakAfter : r10;
  if (!(e10 == n10 && c10 && !r10 && !u10 && o10.length < 2 && c10.merge(i10, s10, o10.length ? d10 : null, 0 == i10, l10, h10))) {
    if (n10 < a10.length) {
      let t54 = a10[n10];
      t54 && (s10 < t54.length || t54.breakAfter && (null == d10 ? void 0 : d10.breakAfter)) ? (e10 == n10 && (t54 = t54.split(s10), s10 = 0), !u10 && d10 && t54.merge(0, s10, d10, true, 0, h10) ? o10[o10.length - 1] = t54 : ((s10 || t54.children.length && !t54.children[0].length) && t54.merge(0, s10, null, false, 0, h10), o10.push(t54))) : (null == t54 ? void 0 : t54.breakAfter) && (d10 ? d10.breakAfter = 1 : r10 = 1), n10++;
    }
    for (c10 && (c10.breakAfter = r10, i10 > 0 && (!r10 && o10.length && c10.merge(i10, c10.length, o10[0], false, l10, 0) ? c10.breakAfter = o10.shift().breakAfter : (i10 < c10.length || c10.children.length && 0 == c10.children[c10.children.length - 1].length) && c10.merge(i10, c10.length, null, false, l10, 0), e10++)); e10 < n10 && o10.length; ) if (a10[n10 - 1].become(o10[o10.length - 1])) n10--, o10.pop(), h10 = o10.length ? 0 : l10;
    else if (a10[e10].become(o10[0])) e10++, o10.shift(), l10 = o10.length ? 0 : h10;
    else break;
    !o10.length && e10 && n10 < a10.length && !a10[e10 - 1].breakAfter && a10[n10].merge(0, 0, a10[e10 - 1], false, l10, h10) && e10--, (e10 < n10 || o10.length) && t53.replaceChildren(e10, n10, o10);
  }
}
function eA(t53, e10, i10, n10, s10, o10) {
  let r10 = t53.childCursor(), { i: l10, off: h10 } = r10.findPos(i10, 1), { i: a10, off: c10 } = r10.findPos(e10, -1), d10 = e10 - i10;
  for (let t54 of n10) d10 += t54.length;
  t53.length += d10, eM(t53, a10, c10, l10, h10, n10, 0, s10, o10);
}
let eC = "undefined" != typeof navigator ? navigator : { userAgent: "", vendor: "", platform: "" }, eD = "undefined" != typeof document ? document : { documentElement: { style: {} } }, eO = /Edge\/(\d+)/.exec(eC.userAgent), eT = /MSIE \d/.test(eC.userAgent), eE = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(eC.userAgent), eB = !!(eT || eE || eO), eR = !eB && /gecko\/(\d+)/i.test(eC.userAgent), eL = !eB && /Chrome\/(\d+)/.exec(eC.userAgent), eP = "webkitFontSmoothing" in eD.documentElement.style, eN = !eB && /Apple Computer/.test(eC.vendor), eH = eN && (/Mobile\/\w+/.test(eC.userAgent) || eC.maxTouchPoints > 2);
var eV = { mac: eH || /Mac/.test(eC.platform), windows: /Win/.test(eC.platform), linux: /Linux|X11/.test(eC.platform), ie: eB, ie_version: eT ? eD.documentMode || 6 : eE ? +eE[1] : eO ? +eO[1] : 0, gecko: eR, gecko_version: eR ? +(/Firefox\/(\d+)/.exec(eC.userAgent) || [0, 0])[1] : 0, chrome: !!eL, chrome_version: eL ? +eL[1] : 0, ios: eH, android: /Android\b/.test(eC.userAgent), webkit: eP, safari: eN, webkit_version: eP ? +(/\bAppleWebKit\/(\d+)/.exec(eC.userAgent) || [0, 0])[1] : 0, tabSize: null != eD.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size" };
let eI = class t5 extends ex {
  constructor(t53) {
    super(), this.text = t53;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t53) {
    this.setDOM(t53 || document.createTextNode(this.text));
  }
  sync(t53, e10) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e10 && e10.node == this.dom && (e10.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(t53) {
    3 == t53.nodeType && this.createDOM(t53);
  }
  merge(e10, i10, n10) {
    return !(8 & this.flags) && (!n10 || n10 instanceof t5 && !(this.length - (i10 - e10) + n10.length > 256) && !(8 & n10.flags)) && (this.text = this.text.slice(0, e10) + (n10 ? n10.text : "") + this.text.slice(i10), this.markDirty(), true);
  }
  split(e10) {
    let i10 = new t5(this.text.slice(e10));
    return this.text = this.text.slice(0, e10), this.markDirty(), i10.flags |= 8 & this.flags, i10;
  }
  localPosFromDOM(t53, e10) {
    return t53 == this.dom ? e10 : e10 ? this.text.length : 0;
  }
  domAtPos(t53) {
    return new eb(this.dom, t53);
  }
  domBoundsAround(t53, e10, i10) {
    return { from: i10, to: i10 + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t53, e10) {
    return function(t54, e11, i10) {
      let n10 = t54.nodeValue.length;
      e11 > n10 && (e11 = n10);
      let s10 = e11, o10 = e11, r10 = 0;
      0 == e11 && i10 < 0 || e11 == n10 && i10 >= 0 ? !(eV.chrome || eV.gecko) && (e11 ? (s10--, r10 = 1) : o10 < n10 && (o10++, r10 = -1)) : i10 < 0 ? s10-- : o10 < n10 && o10++;
      let l10 = ef(t54, s10, o10).getClientRects();
      if (!l10.length) return null;
      let h10 = l10[(r10 ? r10 < 0 : i10 >= 0) ? 0 : l10.length - 1];
      return eV.safari && !r10 && 0 == h10.width && (h10 = Array.prototype.find.call(l10, (t55) => t55.width) || h10), r10 ? eh(h10, r10 < 0) : h10 || null;
    }(this.dom, t53, e10);
  }
}, eF = class t6 extends ex {
  constructor(t53, e10 = [], i10 = 0) {
    for (let n10 of (super(), this.mark = t53, this.children = e10, this.length = i10, e10)) n10.setParent(this);
  }
  setAttrs(t53) {
    if (ep(t53), this.mark.class && (t53.className = this.mark.class), this.mark.attrs) for (let e10 in this.mark.attrs) t53.setAttribute(e10, this.mark.attrs[e10]);
    return t53;
  }
  canReuseDOM(t53) {
    return super.canReuseDOM(t53) && !((this.flags | t53.flags) & 8);
  }
  reuseDOM(t53) {
    t53.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t53), this.flags |= 6);
  }
  sync(t53, e10) {
    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t53, e10);
  }
  merge(e10, i10, n10, s10, o10, r10) {
    return (!n10 || !!(n10 instanceof t6 && n10.mark.eq(this.mark)) && (!e10 || !(o10 <= 0)) && (!(i10 < this.length) || !(r10 <= 0))) && (eA(this, e10, i10, n10 ? n10.children.slice() : [], o10 - 1, r10 - 1), this.markDirty(), true);
  }
  split(e10) {
    let i10 = [], n10 = 0, s10 = -1, o10 = 0;
    for (let t53 of this.children) {
      let r11 = n10 + t53.length;
      r11 > e10 && i10.push(n10 < e10 ? t53.split(e10 - n10) : t53), s10 < 0 && n10 >= e10 && (s10 = o10), n10 = r11, o10++;
    }
    let r10 = this.length - e10;
    return this.length = e10, s10 > -1 && (this.children.length = s10, this.markDirty()), new t6(this.mark, i10, r10);
  }
  domAtPos(t53) {
    return eK(this, t53);
  }
  coordsAt(t53, e10) {
    return eq(this, t53, e10);
  }
}, eW = class t8 extends ex {
  static create(e10, i10, n10) {
    return new t8(e10, i10, n10);
  }
  constructor(t53, e10, i10) {
    super(), this.widget = t53, this.length = e10, this.side = i10, this.prevWidget = null;
  }
  split(e10) {
    let i10 = t8.create(this.widget, this.length - e10, this.side);
    return this.length -= e10, i10;
  }
  sync(t53) {
    this.dom && this.widget.updateDOM(this.dom, t53) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t53)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e10, i10, n10, s10, o10, r10) {
    return (!n10 || n10 instanceof t8 && !!this.widget.compare(n10.widget) && (!(e10 > 0) || !(o10 <= 0)) && (!(i10 < this.length) || !(r10 <= 0))) && (this.length = e10 + (n10 ? n10.length : 0) + (this.length - i10), true);
  }
  become(e10) {
    return e10 instanceof t8 && e10.side == this.side && this.widget.constructor == e10.widget.constructor && (this.widget.compare(e10.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e10.widget, this.length = e10.length, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t53) {
    return this.widget.ignoreEvent(t53);
  }
  get overrideDOMText() {
    if (0 == this.length) return s.empty;
    let t53 = this;
    for (; t53.parent; ) t53 = t53.parent;
    let { view: e10 } = t53, i10 = e10 && e10.state.doc, n10 = this.posAtStart;
    return i10 ? i10.slice(n10, n10 + this.length) : s.empty;
  }
  domAtPos(t53) {
    return (this.length ? 0 == t53 : this.side > 0) ? eb.before(this.dom) : eb.after(this.dom, t53 == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t53, e10) {
    let i10 = this.widget.coordsAt(this.dom, t53, e10);
    if (i10) return i10;
    let n10 = this.dom.getClientRects(), s10 = null;
    if (!n10.length) return null;
    let o10 = this.side ? this.side < 0 : t53 > 0;
    for (let e11 = o10 ? n10.length - 1 : 0; s10 = n10[e11], t53 > 0 ? 0 != e11 : e11 != n10.length - 1 && !(s10.top < s10.bottom); e11 += o10 ? -1 : 1) ;
    return eh(s10, !o10);
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
}, ez = class t9 extends ex {
  constructor(t53) {
    super(), this.side = t53;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(e10) {
    return e10 instanceof t9 && e10.side == this.side;
  }
  split() {
    return new t9(this.side);
  }
  sync() {
    if (!this.dom) {
      let t53 = document.createElement("img");
      t53.className = "cm-widgetBuffer", t53.setAttribute("aria-hidden", "true"), this.setDOM(t53);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t53) {
    return this.side > 0 ? eb.before(this.dom) : eb.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t53) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return s.empty;
  }
  get isHidden() {
    return true;
  }
};
function eK(t53, e10) {
  let i10 = t53.dom, { children: n10 } = t53, s10 = 0;
  for (let t54 = 0; s10 < n10.length; s10++) {
    let o10 = n10[s10], r10 = t54 + o10.length;
    if (!(r10 == t54 && 0 >= o10.getSide())) {
      if (e10 > t54 && e10 < r10 && o10.dom.parentNode == i10) return o10.domAtPos(e10 - t54);
      if (e10 <= t54) break;
      t54 = r10;
    }
  }
  for (let t54 = s10; t54 > 0; t54--) {
    let e11 = n10[t54 - 1];
    if (e11.dom.parentNode == i10) return e11.domAtPos(e11.length);
  }
  for (let t54 = s10; t54 < n10.length; t54++) {
    let e11 = n10[t54];
    if (e11.dom.parentNode == i10) return e11.domAtPos(0);
  }
  return new eb(i10, 0);
}
function eq(t53, e10, i10) {
  let n10 = null, s10 = -1, o10 = null, r10 = -1;
  !function t54(e11, l11) {
    for (let h10 = 0, a10 = 0; h10 < e11.children.length && a10 <= l11; h10++) {
      let c10 = e11.children[h10], d10 = a10 + c10.length;
      d10 >= l11 && (c10.children.length ? t54(c10, l11 - a10) : (!o10 || o10.isHidden && i10 > 0) && (d10 > l11 || a10 == d10 && c10.getSide() > 0) ? (o10 = c10, r10 = l11 - a10) : (a10 < l11 || a10 == d10 && 0 > c10.getSide() && !c10.isHidden) && (n10 = c10, s10 = l11 - a10)), a10 = d10;
    }
  }(t53, e10);
  let l10 = (i10 < 0 ? n10 : o10) || n10 || o10;
  return l10 ? l10.coordsAt(Math.max(0, l10 == n10 ? s10 : r10), i10) : function(t54) {
    let e11 = t54.dom.lastChild;
    if (!e11) return t54.dom.getBoundingClientRect();
    let i11 = ei(e11);
    return i11[i11.length - 1] || null;
  }(t53);
}
function e_(t53, e10) {
  for (let i10 in t53) "class" == i10 && e10.class ? e10.class += " " + t53.class : "style" == i10 && e10.style ? e10.style += ";" + t53.style : e10[i10] = t53[i10];
  return e10;
}
eI.prototype.children = eW.prototype.children = ez.prototype.children = ey;
let ej = /* @__PURE__ */ Object.create(null);
function eG(t53, e10, i10) {
  if (t53 == e10) return true;
  t53 || (t53 = ej), e10 || (e10 = ej);
  let n10 = Object.keys(t53), s10 = Object.keys(e10);
  if (n10.length - (i10 && n10.indexOf(i10) > -1 ? 1 : 0) != s10.length - (i10 && s10.indexOf(i10) > -1 ? 1 : 0)) return false;
  for (let o10 of n10) if (o10 != i10 && (-1 == s10.indexOf(o10) || t53[o10] !== e10[o10])) return false;
  return true;
}
function eU(t53, e10, i10) {
  let n10 = false;
  if (e10) for (let s10 in e10) i10 && s10 in i10 || (n10 = true, "style" == s10 ? t53.style.cssText = "" : t53.removeAttribute(s10));
  if (i10) for (let s10 in i10) e10 && e10[s10] == i10[s10] || (n10 = true, "style" == s10 ? t53.style.cssText = i10[s10] : t53.setAttribute(s10, i10[s10]));
  return n10;
}
let e$ = class t10 extends ex {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e10, i10, n10, s10, o10, r10) {
    if (n10) {
      if (!(n10 instanceof t10)) return false;
      this.dom || n10.transferDOM(this);
    }
    return s10 && this.setDeco(n10 ? n10.attrs : null), eA(this, e10, i10, n10 ? n10.children.slice() : [], o10, r10), true;
  }
  split(e10) {
    let i10 = new t10();
    if (i10.breakAfter = this.breakAfter, 0 == this.length) return i10;
    let { i: n10, off: s10 } = this.childPos(e10);
    s10 && (i10.append(this.children[n10].split(s10), 0), this.children[n10].merge(s10, this.children[n10].length, null, false, 0, 0), n10++);
    for (let t53 = n10; t53 < this.children.length; t53++) i10.append(this.children[t53], 0);
    for (; n10 > 0 && 0 == this.children[n10 - 1].length; ) this.children[--n10].destroy();
    return this.children.length = n10, this.markDirty(), this.length = e10, i10;
  }
  transferDOM(t53) {
    this.dom && (this.markDirty(), t53.setDOM(this.dom), t53.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t53) {
    eG(this.attrs, t53) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t53);
  }
  append(t53, e10) {
    !function t54(e11, i10, n10) {
      let s10, { children: o10 } = e11;
      n10 > 0 && i10 instanceof eF && o10.length && (s10 = o10[o10.length - 1]) instanceof eF && s10.mark.eq(i10.mark) ? t54(s10, i10.children[0], n10 - 1) : (o10.push(i10), i10.setParent(e11)), e11.length += i10.length;
    }(this, t53, e10);
  }
  addLineDeco(t53) {
    let e10 = t53.spec.attributes, i10 = t53.spec.class;
    e10 && (this.attrs = e_(e10, this.attrs || {})), i10 && (this.attrs = e_({ class: i10 }, this.attrs || {}));
  }
  domAtPos(t53) {
    return eK(this, t53);
  }
  reuseDOM(t53) {
    "DIV" == t53.nodeName && (this.setDOM(t53), this.flags |= 6);
  }
  sync(t53, e10) {
    var i10;
    this.dom ? 4 & this.flags && (ep(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), void 0 !== this.prevAttrs && (eU(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t53, e10);
    let n10 = this.dom.lastChild;
    for (; n10 && ex.get(n10) instanceof eF; ) n10 = n10.lastChild;
    if (!n10 || !this.length || "BR" != n10.nodeName && (null === (i10 = ex.get(n10)) || void 0 === i10 ? void 0 : i10.isEditable) == false && (!eV.ios || !this.children.some((t54) => t54 instanceof eI))) {
      let t54 = document.createElement("BR");
      t54.cmIgnore = true, this.dom.appendChild(t54);
    }
  }
  measureTextSize() {
    if (0 == this.children.length || this.length > 20) return null;
    let t53 = 0, e10;
    for (let i10 of this.children) {
      if (!(i10 instanceof eI) || /[^ -~]/.test(i10.text)) return null;
      let n10 = ei(i10.dom);
      if (1 != n10.length) return null;
      t53 += n10[0].width, e10 = n10[0].height;
    }
    return t53 ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t53 / this.length, textHeight: e10 } : null;
  }
  coordsAt(t53, e10) {
    let i10 = eq(this, t53, e10);
    if (!this.children.length && i10 && this.parent) {
      let { heightOracle: t54 } = this.parent.view.viewState, e11 = i10.bottom - i10.top;
      if (2 > Math.abs(e11 - t54.lineHeight) && t54.textHeight < e11) {
        let n10 = (e11 - t54.textHeight) / 2;
        return { top: i10.top + n10, bottom: i10.bottom - n10, left: i10.left, right: i10.left };
      }
    }
    return i10;
  }
  become(e10) {
    return e10 instanceof t10 && 0 == this.children.length && 0 == e10.children.length && eG(this.attrs, e10.attrs) && this.breakAfter == e10.breakAfter;
  }
  covers() {
    return true;
  }
  static find(e10, i10) {
    for (let n10 = 0, s10 = 0; n10 < e10.children.length; n10++) {
      let o10 = e10.children[n10], r10 = s10 + o10.length;
      if (r10 >= i10) {
        if (o10 instanceof t10) return o10;
        if (r10 > i10) break;
      }
      s10 = r10 + o10.breakAfter;
    }
    return null;
  }
}, eY = class t11 extends ex {
  constructor(t53, e10, i10) {
    super(), this.widget = t53, this.length = e10, this.deco = i10, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e10, i10, n10, s10, o10, r10) {
    return (!n10 || n10 instanceof t11 && !!this.widget.compare(n10.widget) && (!(e10 > 0) || !(o10 <= 0)) && (!(i10 < this.length) || !(r10 <= 0))) && (this.length = e10 + (n10 ? n10.length : 0) + (this.length - i10), true);
  }
  domAtPos(t53) {
    return 0 == t53 ? eb.before(this.dom) : eb.after(this.dom, t53 == this.length);
  }
  split(e10) {
    let i10 = this.length - e10;
    this.length = e10;
    let n10 = new t11(this.widget, i10, this.deco);
    return n10.breakAfter = this.breakAfter, n10;
  }
  get children() {
    return ey;
  }
  sync(t53) {
    this.dom && this.widget.updateDOM(this.dom, t53) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t53)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : s.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e10) {
    return e10 instanceof t11 && e10.widget.constructor == this.widget.constructor && (e10.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e10.widget, this.length = e10.length, this.deco = e10.deco, this.breakAfter = e10.breakAfter, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t53) {
    return this.widget.ignoreEvent(t53);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(t53, e10) {
    return this.widget.coordsAt(this.dom, t53, e10);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t53) {
    let { startSide: e10, endSide: i10 } = this.deco;
    return e10 != i10 && (t53 < 0 ? e10 < 0 : i10 > 0);
  }
}, eX = class {
  eq(t53) {
    return false;
  }
  updateDOM(t53, e10) {
    return false;
  }
  compare(t53) {
    return this == t53 || this.constructor == t53.constructor && this.eq(t53);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t53) {
    return true;
  }
  coordsAt(t53, e10, i10) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(t53) {
  }
};
var eJ = ((M = eJ || (eJ = {}))[M.Text = 0] = "Text", M[M.WidgetBefore = 1] = "WidgetBefore", M[M.WidgetAfter = 2] = "WidgetAfter", M[M.WidgetRange = 3] = "WidgetRange", M);
let eQ = class extends tL {
  constructor(t53, e10, i10, n10) {
    super(), this.startSide = t53, this.endSide = e10, this.widget = i10, this.spec = n10;
  }
  get heightRelevant() {
    return false;
  }
  static mark(t53) {
    return new eZ(t53);
  }
  static widget(t53) {
    let e10 = Math.max(-1e4, Math.min(1e4, t53.side || 0)), i10 = !!t53.block;
    return e10 += i10 && !t53.inlineOrder ? e10 > 0 ? 3e8 : -4e8 : e10 > 0 ? 1e8 : -1e8, new e1(t53, e10, e10, i10, t53.widget || null, false);
  }
  static replace(t53) {
    let e10 = !!t53.block, i10, n10;
    if (t53.isBlockGap) i10 = -5e8, n10 = 4e8;
    else {
      let { start: s10, end: o10 } = e2(t53, e10);
      i10 = (s10 ? e10 ? -3e8 : -1 : 5e8) - 1, n10 = (o10 ? e10 ? 2e8 : 1 : -6e8) + 1;
    }
    return new e1(t53, i10, n10, e10, t53.widget || null, true);
  }
  static line(t53) {
    return new e0(t53);
  }
  static set(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return tV.of(t53, e10);
  }
  hasHeight() {
    return !!this.widget && this.widget.estimatedHeight > -1;
  }
};
eQ.none = tV.empty;
let eZ = class t12 extends eQ {
  constructor(t53) {
    let { start: e10, end: i10 } = e2(t53);
    super(e10 ? -1 : 5e8, i10 ? 1 : -6e8, null, t53), this.tagName = t53.tagName || "span", this.class = t53.class || "", this.attrs = t53.attributes || null;
  }
  eq(e10) {
    var i10, n10;
    return this == e10 || e10 instanceof t12 && this.tagName == e10.tagName && (this.class || (null === (i10 = this.attrs) || void 0 === i10 ? void 0 : i10.class)) == (e10.class || (null === (n10 = e10.attrs) || void 0 === n10 ? void 0 : n10.class)) && eG(this.attrs, e10.attrs, "class");
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (t53 >= e10) throw RangeError("Mark decorations may not be empty");
    return super.range(t53, e10);
  }
};
eZ.prototype.point = false;
let e0 = class t13 extends eQ {
  constructor(t53) {
    super(-2e8, -2e8, null, t53);
  }
  eq(e10) {
    return e10 instanceof t13 && this.spec.class == e10.spec.class && eG(this.spec.attributes, e10.spec.attributes);
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (e10 != t53) throw RangeError("Line decoration ranges must be zero-length");
    return super.range(t53, e10);
  }
};
e0.prototype.mapMode = I.TrackBefore, e0.prototype.point = true;
let e1 = class t14 extends eQ {
  constructor(t53, e10, i10, n10, s10, o10) {
    super(e10, i10, s10, t53), this.block = n10, this.isReplace = o10, this.mapMode = n10 ? e10 <= 0 ? I.TrackBefore : I.TrackAfter : I.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? eJ.WidgetRange : this.startSide <= 0 ? eJ.WidgetBefore : eJ.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e10) {
    var i10, n10;
    return e10 instanceof t14 && ((i10 = this.widget) == (n10 = e10.widget) || !!(i10 && n10 && i10.compare(n10))) && this.block == e10.block && this.startSide == e10.startSide && this.endSide == e10.endSide;
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (this.isReplace && (t53 > e10 || t53 == e10 && this.startSide > 0 && this.endSide <= 0)) throw RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e10 != t53) throw RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t53, e10);
  }
};
function e2(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], { inclusiveStart: i10, inclusiveEnd: n10 } = t53;
  return null == i10 && (i10 = t53.inclusive), null == n10 && (n10 = t53.inclusive), { start: null != i10 ? i10 : e10, end: null != n10 ? n10 : e10 };
}
function e8(t53, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s10 = i10.length - 1;
  s10 >= 0 && i10[s10] + n10 >= t53 ? i10[s10] = Math.max(i10[s10], e10) : i10.push(t53, e10);
}
e1.prototype.point = true;
let e3 = class t15 {
  constructor(t53, e10, i10, n10) {
    this.doc = t53, this.pos = e10, this.end = i10, this.disallowBlockEffectsFor = n10, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t53.iter(), this.skip = e10;
  }
  posCovered() {
    if (0 == this.content.length) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t53 = this.content[this.content.length - 1];
    return !(t53.breakAfter || t53 instanceof eY && t53.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new e$()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.bufferMarks;
    this.pendingBuffer && (this.curLine.append(e4(new ez(-1), t53), t53.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t53) {
    this.flushBuffer(), this.curLine = null, this.content.push(t53);
  }
  finish(t53) {
    this.pendingBuffer && t53 <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || t53 && this.content.length && this.content[this.content.length - 1] instanceof eY || this.getLine();
  }
  buildText(t53, e10, i10) {
    for (; t53 > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: e11, lineBreak: i11, done: n11 } = this.cursor.next(this.skip);
        if (this.skip = 0, n11) throw Error("Ran out of text content when drawing inline views");
        if (i11) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t53--;
          continue;
        }
        this.text = e11, this.textOff = 0;
      }
      let n10 = Math.min(this.text.length - this.textOff, t53, 512);
      this.flushBuffer(e10.slice(e10.length - i10)), this.getLine().append(e4(new eI(this.text.slice(this.textOff, this.textOff + n10)), e10), i10), this.atCursorPos = true, this.textOff += n10, t53 -= n10, i10 = 0;
    }
  }
  span(t53, e10, i10, n10) {
    this.buildText(e10 - t53, i10, n10), this.pos = e10, this.openStart < 0 && (this.openStart = n10);
  }
  point(t53, e10, i10, n10, s10, o10) {
    if (this.disallowBlockEffectsFor[o10] && i10 instanceof e1) {
      if (i10.block) throw RangeError("Block decorations may not be specified via plugins");
      if (e10 > this.doc.lineAt(this.pos).to) throw RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let r10 = e10 - t53;
    if (i10 instanceof e1) {
      if (i10.block) i10.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new eY(i10.widget || e5.block, r10, i10));
      else {
        let o11 = eW.create(i10.widget || e5.inline, r10, r10 ? 0 : i10.startSide), l10 = this.atCursorPos && !o11.isEditable && s10 <= n10.length && (t53 < e10 || i10.startSide > 0), h10 = !o11.isEditable && (t53 < e10 || s10 > n10.length || i10.startSide <= 0), a10 = this.getLine();
        2 != this.pendingBuffer || l10 || o11.isEditable || (this.pendingBuffer = 0), this.flushBuffer(n10), l10 && (a10.append(e4(new ez(1), n10), s10), s10 = n10.length + Math.max(0, s10 - n10.length)), a10.append(e4(o11, n10), s10), this.atCursorPos = h10, this.pendingBuffer = h10 ? t53 < e10 || s10 > n10.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n10.slice());
      }
    } else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i10);
    r10 && (this.textOff + r10 <= this.text.length ? this.textOff += r10 : (this.skip += r10 - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e10), this.openStart < 0 && (this.openStart = s10);
  }
  static build(e10, i10, n10, s10, o10) {
    let r10 = new t15(e10, i10, n10, o10);
    return r10.openEnd = tV.spans(s10, i10, n10, r10), r10.openStart < 0 && (r10.openStart = r10.openEnd), r10.finish(r10.openEnd), r10;
  }
};
function e4(t53, e10) {
  for (let i10 of e10) t53 = new eF(i10, [t53], t53.length);
  return t53;
}
let e5 = class extends eX {
  constructor(t53) {
    super(), this.tag = t53;
  }
  eq(t53) {
    return t53.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t53) {
    return t53.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
};
e5.inline = new e5("span"), e5.block = new e5("div");
var e9 = ((A = e9 || (e9 = {}))[A.LTR = 0] = "LTR", A[A.RTL = 1] = "RTL", A);
let e6 = e9.LTR, e7 = e9.RTL;
function it(t53) {
  let e10 = [];
  for (let i10 = 0; i10 < t53.length; i10++) e10.push(1 << +t53[i10]);
  return e10;
}
let ie = it("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ii = it("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), is = /* @__PURE__ */ Object.create(null), io = [];
for (let t53 of ["()", "[]", "{}"]) {
  let e10 = t53.charCodeAt(0), i10 = t53.charCodeAt(1);
  is[e10] = i10, is[i10] = -e10;
}
function ir(t53) {
  return t53 <= 247 ? ie[t53] : 1424 <= t53 && t53 <= 1524 ? 2 : 1536 <= t53 && t53 <= 1785 ? ii[t53 - 1536] : 1774 <= t53 && t53 <= 2220 ? 4 : 8192 <= t53 && t53 <= 8204 ? 256 : 64336 <= t53 && t53 <= 65023 ? 4 : 1;
}
let il = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, ih = class {
  get dir() {
    return this.level % 2 ? e7 : e6;
  }
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.level = i10;
  }
  side(t53, e10) {
    return this.dir == e10 == t53 ? this.to : this.from;
  }
  forward(t53, e10) {
    return t53 == (this.dir == e10);
  }
  static find(t53, e10, i10, n10) {
    let s10 = -1;
    for (let o10 = 0; o10 < t53.length; o10++) {
      let r10 = t53[o10];
      if (r10.from <= e10 && r10.to >= e10) {
        if (r10.level == i10) return o10;
        (s10 < 0 || (0 != n10 ? n10 < 0 ? r10.from < e10 : r10.to > e10 : t53[s10].level > r10.level)) && (s10 = o10);
      }
    }
    if (s10 < 0) throw RangeError("Index out of range");
    return s10;
  }
}, ia = [];
function ic(t53) {
  return [new ih(0, t53, 0)];
}
let id = "", iu = J.define(), ig = J.define(), ip = J.define(), im = J.define(), iv = J.define(), iw = J.define(), ib = J.define(), iy = J.define({ combine: (t53) => t53.some((t54) => t54) }), ix = J.define({ combine: (t53) => t53.some((t54) => t54) }), iS = J.define(), ik = class t16 {
  constructor(t53, e10 = "nearest", i10 = "nearest", n10 = 5, s10 = 5, o10 = false) {
    this.range = t53, this.y = e10, this.x = i10, this.yMargin = n10, this.xMargin = s10, this.isSnapshot = o10;
  }
  map(e10) {
    return e10.empty ? this : new t16(this.range.map(e10), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e10) {
    return this.range.to <= e10.doc.length ? this : new t16($.cursor(e10.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}, iM = tk.define({ map: (t53, e10) => t53.map(e10) }), iA = tk.define();
function iC(t53, e10, i10) {
  let n10 = t53.facet(im);
  n10.length ? n10[0](e10) : window.onerror ? window.onerror(String(e10), i10, void 0, void 0, e10) : i10 ? console.error(i10 + ":", e10) : console.error(e10);
}
let iD = J.define({ combine: (t53) => !t53.length || t53[0] }), iO = 0, iT = J.define(), iE = class t17 {
  constructor(t53, e10, i10, n10, s10) {
    this.id = t53, this.create = e10, this.domEventHandlers = i10, this.domEventObservers = n10, this.extension = s10(this);
  }
  static define(e10, i10) {
    let { eventHandlers: n10, eventObservers: s10, provide: o10, decorations: r10 } = i10 || {};
    return new t17(iO++, e10, n10, s10, (t53) => {
      let e11 = [iT.of(t53)];
      return r10 && e11.push(iP.of((e12) => {
        let i11 = e12.plugin(t53);
        return i11 ? r10(i11) : eQ.none;
      })), o10 && e11.push(o10(t53)), e11;
    });
  }
  static fromClass(e10, i10) {
    return t17.define((t53) => new e10(t53), i10);
  }
}, iB = class {
  constructor(t53) {
    this.spec = t53, this.mustUpdate = null, this.value = null;
  }
  update(t53) {
    if (this.value) {
      if (this.mustUpdate) {
        let t54 = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(t54);
        } catch (e10) {
          if (iC(t54.state, e10, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch (t55) {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.create(t53);
    } catch (e10) {
      iC(t53.state, e10, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(t53) {
    var e10;
    if (null === (e10 = this.value) || void 0 === e10 ? void 0 : e10.destroy) try {
      this.value.destroy();
    } catch (e11) {
      iC(t53.state, e11, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}, iR = J.define(), iL = J.define(), iP = J.define(), iN = J.define(), iH = J.define(), iV = J.define();
function iI(t53, e10) {
  let i10 = t53.state.facet(iV);
  if (!i10.length) return i10;
  let n10 = i10.map((e11) => e11 instanceof Function ? e11(t53) : e11), s10 = [];
  return tV.spans(n10, e10.from, e10.to, { point() {
  }, span(t54, i11, n11, o10) {
    let r10 = t54 - e10.from, l10 = i11 - e10.from, h10 = s10;
    for (let t55 = n11.length - 1; t55 >= 0; t55--, o10--) {
      let i12 = n11[t55].spec.bidiIsolate, s11;
      if (null == i12 && (i12 = function(t56, e11, i13) {
        for (let n12 = e11; n12 < i13; n12++) {
          let e12 = ir(t56.charCodeAt(n12));
          if (1 == e12) break;
          if (2 == e12 || 4 == e12) return e7;
        }
        return e6;
      }(e10.text, r10, l10)), o10 > 0 && h10.length && (s11 = h10[h10.length - 1]).to == r10 && s11.direction == i12) s11.to = l10, h10 = s11.inner;
      else {
        let t56 = { from: r10, to: l10, direction: i12, inner: [] };
        h10.push(t56), h10 = t56.inner;
      }
    }
  } }), s10;
}
let iF = J.define();
function iW(t53) {
  let e10 = 0, i10 = 0, n10 = 0, s10 = 0;
  for (let o10 of t53.state.facet(iF)) {
    let r10 = o10(t53);
    r10 && (null != r10.left && (e10 = Math.max(e10, r10.left)), null != r10.right && (i10 = Math.max(i10, r10.right)), null != r10.top && (n10 = Math.max(n10, r10.top)), null != r10.bottom && (s10 = Math.max(s10, r10.bottom)));
  }
  return { left: e10, right: i10, top: n10, bottom: s10 };
}
let iz = J.define(), iK = class t18 {
  constructor(t53, e10, i10, n10) {
    this.fromA = t53, this.toA = e10, this.fromB = i10, this.toB = n10;
  }
  join(e10) {
    return new t18(Math.min(this.fromA, e10.fromA), Math.max(this.toA, e10.toA), Math.min(this.fromB, e10.fromB), Math.max(this.toB, e10.toB));
  }
  addToSet(t53) {
    let e10 = t53.length, i10 = this;
    for (; e10 > 0; e10--) {
      let n10 = t53[e10 - 1];
      if (!(n10.fromA > i10.toA)) {
        if (n10.toA < i10.fromA) break;
        i10 = i10.join(n10), t53.splice(e10 - 1, 1);
      }
    }
    return t53.splice(e10, 0, i10), t53;
  }
  static extendWithRanges(e10, i10) {
    if (0 == i10.length) return e10;
    let n10 = [];
    for (let s10 = 0, o10 = 0, r10 = 0, l10 = 0; ; s10++) {
      let h10 = s10 == e10.length ? null : e10[s10], a10 = r10 - l10, c10 = h10 ? h10.fromB : 1e9;
      for (; o10 < i10.length && i10[o10] < c10; ) {
        let e11 = i10[o10], s11 = i10[o10 + 1], r11 = Math.max(l10, e11), h11 = Math.min(c10, s11);
        if (r11 <= h11 && new t18(r11 + a10, h11 + a10, r11, h11).addToSet(n10), s11 > c10) break;
        o10 += 2;
      }
      if (!h10) return n10;
      new t18(h10.fromA, h10.toA, h10.fromB, h10.toB).addToSet(n10), r10 = h10.toA, l10 = h10.toB;
    }
  }
}, iq = class t19 {
  constructor(t53, e10, i10) {
    for (let n11 of (this.view = t53, this.state = e10, this.transactions = i10, this.flags = 0, this.startState = t53.state, this.changes = W.empty(this.startState.doc.length), i10)) this.changes = this.changes.compose(n11.changes);
    let n10 = [];
    this.changes.iterChangedRanges((t54, e11, i11, s10) => n10.push(new iK(t54, e11, i11, s10))), this.changedRanges = n10;
  }
  static create(e10, i10, n10) {
    return new t19(e10, i10, n10);
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
    return this.transactions.some((t53) => t53.selection);
  }
  get empty() {
    return 0 == this.flags && 0 == this.transactions.length;
  }
}, i_ = class extends ex {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t53) {
    super(), this.view = t53, this.decorations = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = eQ.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t53.contentDOM), this.children = [new e$()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new iK(0, 0, 0, t53.state.doc.length)], 0, null);
  }
  update(t53) {
    var e10, i10, n10, s10, o10, r10;
    let l10, h10;
    let a10 = t53.changedRanges;
    this.minWidth > 0 && a10.length && (a10.every((t54) => {
      let { fromA: e11, toA: i11 } = t54;
      return i11 < this.minWidthFrom || e11 > this.minWidthTo;
    }) ? (this.minWidthFrom = t53.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t53.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t53);
    let c10 = -1;
    !(this.view.inputState.composing >= 0) || this.view.observer.editContext || ((null === (e10 = this.domChanged) || void 0 === e10 ? void 0 : e10.newSel) ? c10 = this.domChanged.newSel.head : (i10 = t53.changes, n10 = this.hasComposition, l10 = false, n10 && i10.iterChangedRanges((t54, e11) => {
      t54 < n10.to && e11 > n10.from && (l10 = true);
    }), l10 || t53.selectionSet || (c10 = t53.state.selection.main.head)));
    let d10 = c10 > -1 ? function(t54, e11, i11) {
      let n11 = iG(t54, i11);
      if (!n11) return null;
      let { node: s11, from: o11, to: r11 } = n11, l11 = s11.nodeValue;
      if (/[\n\r]/.test(l11) || t54.state.doc.sliceString(n11.from, n11.to) != l11) return null;
      let h11 = e11.invertedDesc, a11 = new iK(h11.mapPos(o11), h11.mapPos(r11), o11, r11), c11 = [];
      for (let e12 = s11.parentNode; ; e12 = e12.parentNode) {
        let i12 = ex.get(e12);
        if (i12 instanceof eF) c11.push({ node: e12, deco: i12.mark });
        else {
          if (i12 instanceof e$ || "DIV" == e12.nodeName && e12.parentNode == t54.contentDOM) return { range: a11, text: s11, marks: c11, line: e12 };
          if (e12 == t54.contentDOM) return null;
          c11.push({ node: e12, deco: new eZ({ inclusive: true, attributes: function(t55) {
            let e13 = /* @__PURE__ */ Object.create(null);
            for (let i13 = 0; i13 < t55.attributes.length; i13++) {
              let n12 = t55.attributes[i13];
              e13[n12.name] = n12.value;
            }
            return e13;
          }(e12), tagName: e12.tagName.toLowerCase() }) });
        }
      }
    }(this.view, t53.changes, c10) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: e11, to: i11 } = this.hasComposition;
      a10 = new iK(e11, i11, t53.changes.mapPos(e11, -1), t53.changes.mapPos(i11, 1)).addToSet(a10.slice());
    }
    this.hasComposition = d10 ? { from: d10.range.fromB, to: d10.range.toB } : null, (eV.ie || eV.chrome) && !d10 && t53 && t53.state.doc.lines != t53.startState.doc.lines && (this.forceSelection = true);
    let u10 = (s10 = this.decorations, o10 = this.updateDeco(), r10 = t53.changes, h10 = new iU(), tV.compare(s10, o10, r10, h10), h10.changes);
    return a10 = iK.extendWithRanges(a10, u10), (!!(7 & this.flags) || 0 != a10.length) && (this.updateInner(a10, t53.startState.doc.length, d10), t53.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(t53, e10, i10) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(t53, e10, i10);
    let { observer: n10 } = this.view;
    n10.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let t54 = eV.chrome || eV.ios ? { node: n10.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, t54), this.flags &= -8, t54 && (t54.written || n10.selectionRange.focusNode != t54.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((t54) => t54.flags &= -9);
    let s10 = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let t54 of this.children) t54 instanceof eY && t54.widget instanceof ij && s10.push(t54.dom);
    n10.updateGaps(s10);
  }
  updateChildren(t53, e10, i10) {
    let n10 = i10 ? i10.range.addToSet(t53.slice()) : t53, s10 = this.childCursor(e10);
    for (let t54 = n10.length - 1; ; t54--) {
      let e11 = t54 >= 0 ? n10[t54] : null;
      if (!e11) break;
      let { fromA: o10, toA: r10, fromB: l10, toB: h10 } = e11, a10, c10, d10, u10;
      if (i10 && i10.range.fromB < h10 && i10.range.toB > l10) {
        let t55 = e3.build(this.view.state.doc, l10, i10.range.fromB, this.decorations, this.dynamicDecorationMap), e12 = e3.build(this.view.state.doc, i10.range.toB, h10, this.decorations, this.dynamicDecorationMap);
        c10 = t55.breakAtStart, d10 = t55.openStart, u10 = e12.openEnd;
        let n11 = this.compositionView(i10);
        e12.breakAtStart ? n11.breakAfter = 1 : e12.content.length && n11.merge(n11.length, n11.length, e12.content[0], false, e12.openStart, 0) && (n11.breakAfter = e12.content[0].breakAfter, e12.content.shift()), t55.content.length && n11.merge(0, 0, t55.content[t55.content.length - 1], true, 0, t55.openEnd) && t55.content.pop(), a10 = t55.content.concat(n11).concat(e12.content);
      } else ({ content: a10, breakAtStart: c10, openStart: d10, openEnd: u10 } = e3.build(this.view.state.doc, l10, h10, this.decorations, this.dynamicDecorationMap));
      let { i: f10, off: g10 } = s10.findPos(r10, 1), { i: p10, off: m2 } = s10.findPos(o10, -1);
      eM(this, p10, m2, f10, g10, a10, c10, d10, u10);
    }
    i10 && this.fixCompositionDOM(i10);
  }
  updateEditContextFormatting(t53) {
    for (let e10 of (this.editContextFormatting = this.editContextFormatting.map(t53.changes), t53.transactions)) for (let t54 of e10.effects) t54.is(iA) && (this.editContextFormatting = t54.value);
  }
  compositionView(t53) {
    let e10 = new eI(t53.text.nodeValue);
    for (let { deco: i11 } of (e10.flags |= 8, t53.marks)) e10 = new eF(i11, [e10], e10.length);
    let i10 = new e$();
    return i10.append(e10, 0), i10;
  }
  fixCompositionDOM(t53) {
    let e10 = (t54, e11) => {
      e11.flags |= 8 | (e11.children.some((t55) => 7 & t55.flags) ? 1 : 0), this.markedForComposition.add(e11);
      let i11 = ex.get(t54);
      i11 && i11 != e11 && (i11.dom = null), e11.setDOM(t54);
    }, i10 = this.childPos(t53.range.fromB, 1), n10 = this.children[i10.i];
    e10(t53.line, n10);
    for (let s10 = t53.marks.length - 1; s10 >= -1; s10--) i10 = n10.childPos(i10.off, 1), n10 = n10.children[i10.i], e10(s10 >= 0 ? t53.marks[s10].node : t53.text, n10);
  }
  updateSelection() {
    var t53;
    let e10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (e10 || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n10 = this.view.root.activeElement, s10 = n10 == this.dom, o10 = !s10 && ee(this.dom, this.view.observer.selectionRange) && !(n10 && this.dom.contains(n10));
    if (!(s10 || i10 || o10)) return;
    let r10 = this.forceSelection;
    this.forceSelection = false;
    let l10 = this.view.state.selection.main, h10 = this.moveToLine(this.domAtPos(l10.anchor)), a10 = l10.empty ? h10 : this.moveToLine(this.domAtPos(l10.head));
    if (eV.gecko && l10.empty && !this.hasComposition && 1 == (t53 = h10).node.nodeType && t53.node.firstChild && (0 == t53.offset || "false" == t53.node.childNodes[t53.offset - 1].contentEditable) && (t53.offset == t53.node.childNodes.length || "false" == t53.node.childNodes[t53.offset].contentEditable)) {
      let t54 = document.createTextNode("");
      this.view.observer.ignore(() => h10.node.insertBefore(t54, h10.node.childNodes[h10.offset] || null)), h10 = a10 = new eb(t54, 0), r10 = true;
    }
    let c10 = this.view.observer.selectionRange;
    !r10 && c10.focusNode && (en(h10.node, h10.offset, c10.anchorNode, c10.anchorOffset) && en(a10.node, a10.offset, c10.focusNode, c10.focusOffset) || this.suppressWidgetCursorChange(c10, l10)) || (this.view.observer.ignore(() => {
      eV.android && eV.chrome && this.dom.contains(c10.focusNode) && function(t55, e12) {
        for (let i12 = t55; i12 && i12 != e12; i12 = i12.assignedSlot || i12.parentNode) if (1 == i12.nodeType && "false" == i12.contentEditable) return true;
        return false;
      }(c10.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let t54 = t7(this.view.root);
      if (t54) {
        if (l10.empty) {
          if (eV.gecko) {
            var e11, i11;
            let t55 = (e11 = h10.node, i11 = h10.offset, 1 != e11.nodeType ? 0 : (i11 && "false" == e11.childNodes[i11 - 1].contentEditable ? 1 : 0) | (i11 < e11.childNodes.length && "false" == e11.childNodes[i11].contentEditable ? 2 : 0));
            if (t55 && 3 != t55) {
              let e12 = (1 == t55 ? ev : ew)(h10.node, h10.offset);
              e12 && (h10 = new eb(e12.node, e12.offset));
            }
          }
          t54.collapse(h10.node, h10.offset), null != l10.bidiLevel && void 0 !== t54.caretBidiLevel && (t54.caretBidiLevel = l10.bidiLevel);
        } else if (t54.extend) {
          t54.collapse(h10.node, h10.offset);
          try {
            t54.extend(a10.node, a10.offset);
          } catch (t55) {
          }
        } else {
          let e12 = document.createRange();
          l10.anchor > l10.head && ([h10, a10] = [a10, h10]), e12.setEnd(a10.node, a10.offset), e12.setStart(h10.node, h10.offset), t54.removeAllRanges(), t54.addRange(e12);
        }
      }
      o10 && this.view.root.activeElement == this.dom && (this.dom.blur(), n10 && n10.focus());
    }), this.view.observer.setSelectionRange(h10, a10)), this.impreciseAnchor = h10.precise ? null : new eb(c10.anchorNode, c10.anchorOffset), this.impreciseHead = a10.precise ? null : new eb(c10.focusNode, c10.focusOffset);
  }
  suppressWidgetCursorChange(t53, e10) {
    return this.hasComposition && e10.empty && en(t53.focusNode, t53.focusOffset, t53.anchorNode, t53.anchorOffset) && this.posFromDOM(t53.focusNode, t53.focusOffset) == e10.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: t53 } = this, e10 = t53.state.selection.main, i10 = t7(t53.root), { anchorNode: n10, anchorOffset: s10 } = t53.observer.selectionRange;
    if (!i10 || !e10.empty || !e10.assoc || !i10.modify) return;
    let o10 = e$.find(this, e10.head);
    if (!o10) return;
    let r10 = o10.posAtStart;
    if (e10.head == r10 || e10.head == r10 + o10.length) return;
    let l10 = this.coordsAt(e10.head, -1), h10 = this.coordsAt(e10.head, 1);
    if (!l10 || !h10 || l10.bottom > h10.top) return;
    let a10 = this.domAtPos(e10.head + e10.assoc);
    i10.collapse(a10.node, a10.offset), i10.modify("move", e10.assoc < 0 ? "forward" : "backward", "lineboundary"), t53.observer.readSelectionRange();
    let c10 = t53.observer.selectionRange;
    t53.docView.posFromDOM(c10.anchorNode, c10.anchorOffset) != e10.from && i10.collapse(n10, s10);
  }
  moveToLine(t53) {
    let e10 = this.dom, i10;
    if (t53.node != e10) return t53;
    for (let n10 = t53.offset; !i10 && n10 < e10.childNodes.length; n10++) {
      let t54 = ex.get(e10.childNodes[n10]);
      t54 instanceof e$ && (i10 = t54.domAtPos(0));
    }
    for (let n10 = t53.offset - 1; !i10 && n10 >= 0; n10--) {
      let t54 = ex.get(e10.childNodes[n10]);
      t54 instanceof e$ && (i10 = t54.domAtPos(t54.length));
    }
    return i10 ? new eb(i10.node, i10.offset, true) : t53;
  }
  nearest(t53) {
    for (let e10 = t53; e10; ) {
      let t54 = ex.get(e10);
      if (t54 && t54.rootView == this) return t54;
      e10 = e10.parentNode;
    }
    return null;
  }
  posFromDOM(t53, e10) {
    let i10 = this.nearest(t53);
    if (!i10) throw RangeError("Trying to find position for a DOM position outside of the document");
    return i10.localPosFromDOM(t53, e10) + i10.posAtStart;
  }
  domAtPos(t53) {
    let { i: e10, off: i10 } = this.childCursor().findPos(t53, -1);
    for (; e10 < this.children.length - 1; ) {
      let t54 = this.children[e10];
      if (i10 < t54.length || t54 instanceof e$) break;
      e10++, i10 = 0;
    }
    return this.children[e10].domAtPos(i10);
  }
  coordsAt(t53, e10) {
    let i10 = null, n10 = 0;
    for (let s10 = this.length, o10 = this.children.length - 1; o10 >= 0; o10--) {
      let r10 = this.children[o10], l10 = s10 - r10.breakAfter, h10 = l10 - r10.length;
      if (l10 < t53) break;
      if (h10 <= t53 && (h10 < t53 || r10.covers(-1)) && (l10 > t53 || r10.covers(1)) && (!i10 || r10 instanceof e$ && !(i10 instanceof e$ && e10 >= 0))) i10 = r10, n10 = h10;
      else if (i10 && h10 == t53 && l10 == t53 && r10 instanceof eY && 2 > Math.abs(e10)) {
        if (r10.deco.startSide < 0) break;
        o10 && (i10 = null);
      }
      s10 = h10;
    }
    return i10 ? i10.coordsAt(t53 - n10, e10) : null;
  }
  coordsForChar(t53) {
    let { i: e10, off: i10 } = this.childPos(t53, 1), n10 = this.children[e10];
    if (!(n10 instanceof e$)) return null;
    for (; n10.children.length; ) {
      let { i: t54, off: e11 } = n10.childPos(i10, 1);
      for (; ; t54++) {
        if (t54 == n10.children.length) return null;
        if ((n10 = n10.children[t54]).length) break;
      }
      i10 = e11;
    }
    if (!(n10 instanceof eI)) return null;
    let s10 = p(n10.text, i10);
    if (s10 == i10) return null;
    let o10 = ef(n10.dom, i10, s10).getClientRects();
    for (let t54 = 0; t54 < o10.length; t54++) {
      let e11 = o10[t54];
      if (t54 == o10.length - 1 || e11.top < e11.bottom && e11.left < e11.right) return e11;
    }
    return null;
  }
  measureVisibleLineHeights(t53) {
    let e10 = [], { from: i10, to: n10 } = t53, s10 = this.view.contentDOM.clientWidth, o10 = s10 > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, r10 = -1, l10 = this.view.textDirection == e9.LTR;
    for (let t54 = 0, h10 = 0; h10 < this.children.length; h10++) {
      let a10 = this.children[h10], c10 = t54 + a10.length;
      if (c10 > n10) break;
      if (t54 >= i10) {
        let i11 = a10.dom.getBoundingClientRect();
        if (e10.push(i11.height), o10) {
          let e11 = a10.dom.lastChild, n11 = e11 ? ei(e11) : [];
          if (n11.length) {
            let e12 = n11[n11.length - 1], o11 = l10 ? e12.right - i11.left : i11.right - e12.left;
            o11 > r10 && (r10 = o11, this.minWidth = s10, this.minWidthFrom = t54, this.minWidthTo = c10);
          }
        }
      }
      t54 = c10 + a10.breakAfter;
    }
    return e10;
  }
  textDirectionAt(t53) {
    let { i: e10 } = this.childPos(t53, 1);
    return "rtl" == getComputedStyle(this.children[e10].dom).direction ? e9.RTL : e9.LTR;
  }
  measureTextSize() {
    for (let t54 of this.children) if (t54 instanceof e$) {
      let e11 = t54.measureTextSize();
      if (e11) return e11;
    }
    let t53 = document.createElement("div"), e10, i10, n10;
    return t53.className = "cm-line", t53.style.width = "99999px", t53.style.position = "absolute", t53.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t53);
      let s10 = ei(t53.firstChild)[0];
      e10 = t53.getBoundingClientRect().height, i10 = s10 ? s10.width / 27 : 7, n10 = s10 ? s10.height : e10, t53.remove();
    }), { lineHeight: e10, charWidth: i10, textHeight: n10 };
  }
  childCursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length, e10 = this.children.length;
    return e10 && (t53 -= this.children[--e10].length), new ek(this.children, t53, e10);
  }
  computeBlockGapDeco() {
    let t53 = [], e10 = this.view.viewState;
    for (let i10 = 0, n10 = 0; ; n10++) {
      let s10 = n10 == e10.viewports.length ? null : e10.viewports[n10], o10 = s10 ? s10.from - 1 : this.length;
      if (o10 > i10) {
        let n11 = (e10.lineBlockAt(o10).bottom - e10.lineBlockAt(i10).top) / this.view.scaleY;
        t53.push(eQ.replace({ widget: new ij(n11), block: true, inclusive: true, isBlockGap: true }).range(i10, o10));
      }
      if (!s10) break;
      i10 = s10.to + 1;
    }
    return eQ.set(t53);
  }
  updateDeco() {
    let t53 = 1, e10 = this.view.state.facet(iP).map((e11) => (this.dynamicDecorationMap[t53++] = "function" == typeof e11) ? e11(this.view) : e11), i10 = false, n10 = this.view.state.facet(iN).map((t54, e11) => {
      let n11 = "function" == typeof t54;
      return n11 && (i10 = true), n11 ? t54(this.view) : t54;
    });
    for (n10.length && (this.dynamicDecorationMap[t53++] = i10, e10.push(tV.join(n10))), this.decorations = [this.editContextFormatting, ...e10, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t53 < this.decorations.length; ) this.dynamicDecorationMap[t53++] = false;
    return this.decorations;
  }
  scrollIntoView(t53) {
    if (t53.isSnapshot) {
      let e11 = this.view.viewState.lineBlockAt(t53.range.head);
      this.view.scrollDOM.scrollTop = e11.top - t53.yMargin, this.view.scrollDOM.scrollLeft = t53.xMargin;
      return;
    }
    for (let e11 of this.view.state.facet(iS)) try {
      if (e11(this.view, t53.range, t53)) return true;
    } catch (t54) {
      iC(this.view.state, t54, "scroll handler");
    }
    let { range: e10 } = t53, i10 = this.coordsAt(e10.head, e10.empty ? e10.assoc : e10.head > e10.anchor ? -1 : 1), n10;
    if (!i10) return;
    !e10.empty && (n10 = this.coordsAt(e10.anchor, e10.anchor > e10.head ? -1 : 1)) && (i10 = { left: Math.min(i10.left, n10.left), top: Math.min(i10.top, n10.top), right: Math.max(i10.right, n10.right), bottom: Math.max(i10.bottom, n10.bottom) });
    let s10 = iW(this.view), o10 = { left: i10.left - s10.left, top: i10.top - s10.top, right: i10.right + s10.right, bottom: i10.bottom + s10.bottom }, { offsetWidth: r10, offsetHeight: l10 } = this.view.scrollDOM;
    !function(t54, e11, i11, n11, s11, o11, r11, l11) {
      let h10 = t54.ownerDocument, a10 = h10.defaultView || window;
      for (let c10 = t54, d10 = false; c10 && !d10; ) if (1 == c10.nodeType) {
        let t55, u10 = c10 == h10.body, f10 = 1, g10 = 1;
        if (u10) t55 = function(t56) {
          let e12 = t56.visualViewport;
          return e12 ? { left: 0, right: e12.width, top: 0, bottom: e12.height } : { left: 0, right: t56.innerWidth, top: 0, bottom: t56.innerHeight };
        }(a10);
        else {
          if (/^(fixed|sticky)$/.test(getComputedStyle(c10).position) && (d10 = true), c10.scrollHeight <= c10.clientHeight && c10.scrollWidth <= c10.clientWidth) {
            c10 = c10.assignedSlot || c10.parentNode;
            continue;
          }
          let e12 = c10.getBoundingClientRect();
          ({ scaleX: f10, scaleY: g10 } = ea(c10, e12)), t55 = { left: e12.left, right: e12.left + c10.clientWidth * f10, top: e12.top, bottom: e12.top + c10.clientHeight * g10 };
        }
        let p10 = 0, m2 = 0;
        if ("nearest" == s11) e11.top < t55.top ? (m2 = -(t55.top - e11.top + r11), i11 > 0 && e11.bottom > t55.bottom + m2 && (m2 = e11.bottom - t55.bottom + m2 + r11)) : e11.bottom > t55.bottom && (m2 = e11.bottom - t55.bottom + r11, i11 < 0 && e11.top - m2 < t55.top && (m2 = -(t55.top + m2 - e11.top + r11)));
        else {
          let n12 = e11.bottom - e11.top, o12 = t55.bottom - t55.top;
          m2 = ("center" == s11 && n12 <= o12 ? e11.top + n12 / 2 - o12 / 2 : "start" == s11 || "center" == s11 && i11 < 0 ? e11.top - r11 : e11.bottom - o12 + r11) - t55.top;
        }
        if ("nearest" == n11 ? e11.left < t55.left ? (p10 = -(t55.left - e11.left + o11), i11 > 0 && e11.right > t55.right + p10 && (p10 = e11.right - t55.right + p10 + o11)) : e11.right > t55.right && (p10 = e11.right - t55.right + o11, i11 < 0 && e11.left < t55.left + p10 && (p10 = -(t55.left + p10 - e11.left + o11))) : p10 = ("center" == n11 ? e11.left + (e11.right - e11.left) / 2 - (t55.right - t55.left) / 2 : "start" == n11 == l11 ? e11.left - o11 : e11.right - (t55.right - t55.left) + o11) - t55.left, p10 || m2) {
          if (u10) a10.scrollBy(p10, m2);
          else {
            let t56 = 0, i12 = 0;
            if (m2) {
              let t57 = c10.scrollTop;
              c10.scrollTop += m2 / g10, i12 = (c10.scrollTop - t57) * g10;
            }
            if (p10) {
              let e12 = c10.scrollLeft;
              c10.scrollLeft += p10 / f10, t56 = (c10.scrollLeft - e12) * f10;
            }
            e11 = { left: e11.left - t56, top: e11.top - i12, right: e11.right - t56, bottom: e11.bottom - i12 }, t56 && 1 > Math.abs(t56 - p10) && (n11 = "nearest"), i12 && 1 > Math.abs(i12 - m2) && (s11 = "nearest");
          }
        }
        if (u10) break;
        c10 = c10.assignedSlot || c10.parentNode;
      } else if (11 == c10.nodeType) c10 = c10.host;
      else break;
    }(this.view.scrollDOM, o10, e10.head < e10.anchor ? -1 : 1, t53.x, t53.y, Math.max(Math.min(t53.xMargin, r10), -r10), Math.max(Math.min(t53.yMargin, l10), -l10), this.view.textDirection == e9.LTR);
  }
}, ij = class extends eX {
  constructor(t53) {
    super(), this.height = t53;
  }
  toDOM() {
    let t53 = document.createElement("div");
    return t53.className = "cm-gap", this.updateDOM(t53), t53;
  }
  eq(t53) {
    return t53.height == this.height;
  }
  updateDOM(t53) {
    return t53.style.height = this.height + "px", true;
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
};
function iG(t53, e10) {
  let i10 = t53.observer.selectionRange;
  if (!i10.focusNode) return null;
  let n10 = ev(i10.focusNode, i10.focusOffset), s10 = ew(i10.focusNode, i10.focusOffset), o10 = n10 || s10;
  if (s10 && n10 && s10.node != n10.node) {
    let e11 = ex.get(s10.node);
    if (!e11 || e11 instanceof eI && e11.text != s10.node.nodeValue) o10 = s10;
    else if (t53.docView.lastCompositionAfterCursor) {
      let t54 = ex.get(n10.node);
      !t54 || t54 instanceof eI && t54.text != n10.node.nodeValue || (o10 = s10);
    }
  }
  if (t53.docView.lastCompositionAfterCursor = o10 != n10, !o10) return null;
  let r10 = e10 - o10.offset;
  return { from: r10, to: r10 + o10.node.nodeValue.length, node: o10.node };
}
let iU = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t53, e10) {
    e8(t53, e10, this.changes);
  }
  comparePoint(t53, e10) {
    e8(t53, e10, this.changes);
  }
};
function i$(t53, e10) {
  return t53.top < e10.bottom - 1 && t53.bottom > e10.top + 1;
}
function iY(t53, e10) {
  return e10 < t53.top ? { top: e10, left: t53.left, right: t53.right, bottom: t53.bottom } : t53;
}
function iX(t53, e10) {
  return e10 > t53.bottom ? { top: t53.top, left: t53.left, right: t53.right, bottom: e10 } : t53;
}
function iJ(t53, e10, i10) {
  let n10 = t53.nodeValue.length, s10 = -1, o10 = 1e9, r10 = 0;
  for (let l10 = 0; l10 < n10; l10++) {
    let n11 = ef(t53, l10, l10 + 1).getClientRects();
    for (let h10 = 0; h10 < n11.length; h10++) {
      let a10 = n11[h10];
      if (a10.top == a10.bottom) continue;
      r10 || (r10 = e10 - a10.left);
      let c10 = (a10.top > i10 ? a10.top - i10 : i10 - a10.bottom) - 1;
      if (a10.left - 1 <= e10 && a10.right + 1 >= e10 && c10 < o10) {
        let i11 = e10 >= (a10.left + a10.right) / 2, n12 = i11;
        if ((eV.chrome || eV.gecko) && ef(t53, l10).getBoundingClientRect().left == a10.right && (n12 = !i11), c10 <= 0) return { node: t53, offset: l10 + (n12 ? 1 : 0) };
        s10 = l10 + (n12 ? 1 : 0), o10 = c10;
      }
    }
  }
  return { node: t53, offset: s10 > -1 ? s10 : r10 > 0 ? t53.nodeValue.length : 0 };
}
function iQ(t53, e10, i10) {
  var n10, s10;
  let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, r10 = t53.contentDOM.getBoundingClientRect(), l10 = r10.top + t53.viewState.paddingTop, h10, { docHeight: a10 } = t53.viewState, { x: c10, y: d10 } = e10, u10 = d10 - l10;
  if (u10 < 0) return 0;
  if (u10 > a10) return t53.state.doc.length;
  for (let e11 = t53.viewState.heightOracle.textHeight / 2, n11 = false; (h10 = t53.elementAtHeight(u10)).type != eJ.Text; ) for (; !((u10 = o10 > 0 ? h10.bottom + e11 : h10.top - e11) >= 0) || !(u10 <= a10); ) {
    if (n11) return i10 ? null : 0;
    n11 = true, o10 = -o10;
  }
  d10 = l10 + u10;
  let f10 = h10.from;
  if (f10 < t53.viewport.from) return 0 == t53.viewport.from ? 0 : i10 ? null : iZ(t53, r10, h10, c10, d10);
  if (f10 > t53.viewport.to) return t53.viewport.to == t53.state.doc.length ? t53.state.doc.length : i10 ? null : iZ(t53, r10, h10, c10, d10);
  let g10 = t53.dom.ownerDocument, p10 = t53.root.elementFromPoint ? t53.root : g10, m2 = p10.elementFromPoint(c10, d10);
  m2 && !t53.contentDOM.contains(m2) && (m2 = null), !m2 && (c10 = Math.max(r10.left + 1, Math.min(r10.right - 1, c10)), (m2 = p10.elementFromPoint(c10, d10)) && !t53.contentDOM.contains(m2) && (m2 = null));
  let v2, w2 = -1;
  if (m2 && (null === (n10 = t53.docView.nearest(m2)) || void 0 === n10 ? void 0 : n10.isEditable) != false) {
    if (g10.caretPositionFromPoint) {
      let t54 = g10.caretPositionFromPoint(c10, d10);
      t54 && ({ offsetNode: v2, offset: w2 } = t54);
    } else if (g10.caretRangeFromPoint) {
      let e11 = g10.caretRangeFromPoint(c10, d10);
      e11 && ({ startContainer: v2, startOffset: w2 } = e11, (!t53.contentDOM.contains(v2) || eV.safari && function(t54, e12, i11) {
        let n11;
        if (3 != t54.nodeType || e12 != (n11 = t54.nodeValue.length)) return false;
        for (let e13 = t54.nextSibling; e13; e13 = e13.nextSibling) if (1 != e13.nodeType || "BR" != e13.nodeName) return false;
        return ef(t54, n11 - 1, n11).getBoundingClientRect().left > i11;
      }(v2, w2, c10) || eV.chrome && function(t54, e12, i11) {
        if (0 != e12) return false;
        for (let e13 = t54; ; ) {
          let t55 = e13.parentNode;
          if (!t55 || 1 != t55.nodeType || t55.firstChild != e13) return false;
          if (t55.classList.contains("cm-line")) break;
          e13 = t55;
        }
        return i11 - (1 == t54.nodeType ? t54.getBoundingClientRect() : ef(t54, 0, Math.max(t54.nodeValue.length, 1)).getBoundingClientRect()).left > 5;
      }(v2, w2, c10)) && (v2 = void 0));
    }
  }
  if (!v2 || !t53.docView.dom.contains(v2)) {
    let e11 = e$.find(t53.docView, f10);
    if (!e11) return u10 > h10.top + h10.height / 2 ? h10.to : h10.from;
    ({ node: v2, offset: w2 } = function t54(e12, i11, n11) {
      let s11, o11, r11, l11, h11, a11, c11, d11, u11 = false;
      for (let p12 = e12.firstChild; p12; p12 = p12.nextSibling) {
        let e13 = ei(p12);
        for (let m4 = 0; m4 < e13.length; m4++) {
          var f11, g11;
          let v3 = e13[m4];
          a11 && i$(a11, v3) && (v3 = iY(iX(v3, a11.bottom), a11.top));
          let w3 = (f11 = v3).left > i11 ? f11.left - i11 : Math.max(0, i11 - f11.right), b3 = (g11 = v3).top > n11 ? g11.top - n11 : Math.max(0, n11 - g11.bottom);
          if (0 == w3 && 0 == b3) return 3 == p12.nodeType ? iJ(p12, i11, n11) : t54(p12, i11, n11);
          if (!h11 || d11 > b3 || d11 == b3 && c11 > w3) {
            h11 = p12, a11 = v3, c11 = w3, d11 = b3;
            let t55 = b3 ? n11 < v3.top ? -1 : 1 : w3 ? i11 < v3.left ? -1 : 1 : 0;
            u11 = !t55 || (t55 > 0 ? m4 < e13.length - 1 : m4 > 0);
          }
          0 == w3 ? n11 > v3.bottom && (!r11 || r11.bottom < v3.bottom) ? (s11 = p12, r11 = v3) : n11 < v3.top && (!l11 || l11.top > v3.top) && (o11 = p12, l11 = v3) : r11 && i$(r11, v3) ? r11 = iX(r11, v3.bottom) : l11 && i$(l11, v3) && (l11 = iY(l11, v3.top));
        }
      }
      if (r11 && r11.bottom >= n11 ? (h11 = s11, a11 = r11) : l11 && l11.top <= n11 && (h11 = o11, a11 = l11), !h11) return { node: e12, offset: 0 };
      let p11 = Math.max(a11.left, Math.min(a11.right, i11));
      if (3 == h11.nodeType) return iJ(h11, p11, n11);
      if (u11 && "false" != h11.contentEditable) return t54(h11, p11, n11);
      let m3 = Array.prototype.indexOf.call(e12.childNodes, h11) + (i11 >= (a11.left + a11.right) / 2 ? 1 : 0);
      return { node: e12, offset: m3 };
    }(e11.dom, c10, d10));
  }
  let b2 = t53.docView.nearest(v2);
  if (!b2) return null;
  if (!b2.isWidget || (null === (s10 = b2.dom) || void 0 === s10 ? void 0 : s10.nodeType) != 1) return b2.localPosFromDOM(v2, w2) + b2.posAtStart;
  {
    let t54 = b2.dom.getBoundingClientRect();
    return e10.y < t54.top || e10.y <= t54.bottom && e10.x <= (t54.left + t54.right) / 2 ? b2.posAtStart : b2.posAtEnd;
  }
}
function iZ(t53, e10, i10, n10, s10) {
  let o10 = Math.round((n10 - e10.left) * t53.defaultCharacterWidth);
  if (t53.lineWrapping && i10.height > 1.5 * t53.defaultLineHeight) {
    let e11 = t53.viewState.heightOracle.textHeight;
    o10 += Math.floor((s10 - i10.top - (t53.defaultLineHeight - e11) * 0.5) / e11) * t53.viewState.heightOracle.lineLength;
  }
  let r10 = t53.state.sliceDoc(i10.from, i10.to);
  return i10.from + tX(r10, o10, t53.state.tabSize);
}
function i0(t53, e10, i10, n10) {
  let s10 = t53.state.doc.lineAt(e10.head), o10 = t53.bidiSpans(s10), r10 = t53.textDirectionAt(s10.from);
  for (let l10 = e10, h10 = null; ; ) {
    let e11 = function(t54, e12, i11, n11, s11) {
      var o11;
      let r11 = n11.head - t54.from, l11 = ih.find(e12, r11, null !== (o11 = n11.bidiLevel) && void 0 !== o11 ? o11 : -1, n11.assoc), h11 = e12[l11], a11 = h11.side(s11, i11);
      if (r11 == a11) {
        let t55 = l11 += s11 ? 1 : -1;
        if (t55 < 0 || t55 >= e12.length) return null;
        r11 = (h11 = e12[l11 = t55]).side(!s11, i11), a11 = h11.side(s11, i11);
      }
      let c10 = p(t54.text, r11, h11.forward(s11, i11));
      (c10 < h11.from || c10 > h11.to) && (c10 = a11), id = t54.text.slice(Math.min(r11, c10), Math.max(r11, c10));
      let d10 = l11 == (s11 ? e12.length - 1 : 0) ? null : e12[l11 + (s11 ? 1 : -1)];
      return d10 && c10 == a11 && d10.level + (s11 ? 0 : 1) < h11.level ? $.cursor(d10.side(!s11, i11) + t54.from, d10.forward(s11, i11) ? 1 : -1, d10.level) : $.cursor(c10 + t54.from, h11.forward(s11, i11) ? -1 : 1, h11.level);
    }(s10, o10, r10, l10, i10), a10 = id;
    if (!e11) {
      if (s10.number == (i10 ? t53.state.doc.lines : 1)) return l10;
      a10 = "\n", s10 = t53.state.doc.line(s10.number + (i10 ? 1 : -1)), o10 = t53.bidiSpans(s10), e11 = t53.visualLineSide(s10, !i10);
    }
    if (h10) {
      if (!h10(a10)) return l10;
    } else {
      if (!n10) return e11;
      h10 = n10(a10);
    }
    l10 = e11;
  }
}
function i1(t53, e10, i10) {
  for (; ; ) {
    let n10 = 0;
    for (let s10 of t53) s10.between(e10 - 1, e10 + 1, (t54, s11, o10) => {
      if (e10 > t54 && e10 < s11) {
        let o11 = n10 || i10 || (e10 - t54 < s11 - e10 ? -1 : 1);
        e10 = o11 < 0 ? t54 : s11, n10 = o11;
      }
    });
    if (!n10) return e10;
  }
}
function i2(t53, e10, i10) {
  let n10 = i1(t53.state.facet(iH).map((e11) => e11(t53)), i10.from, e10.head > i10.from ? -1 : 1);
  return n10 == i10.from ? i10 : $.cursor(n10, n10 < i10.from ? 1 : -1);
}
let i8 = class {
  setSelectionOrigin(t53) {
    this.lastSelectionOrigin = t53, this.lastSelectionTime = Date.now();
  }
  constructor(t53) {
    var e10;
    this.view = t53, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t53.hasFocus, eV.safari && t53.contentDOM.addEventListener("input", () => null), eV.gecko && (e10 = t53.contentDOM.ownerDocument, nw.has(e10) || (nw.add(e10), e10.addEventListener("copy", () => {
    }), e10.addEventListener("cut", () => {
    })));
  }
  handleEvent(t53) {
    !(!function(t54, e10) {
      if (!e10.bubbles) return true;
      if (e10.defaultPrevented) return false;
      for (let i10 = e10.target, n10; i10 != t54.contentDOM; i10 = i10.parentNode) if (!i10 || 11 == i10.nodeType || (n10 = ex.get(i10)) && n10.ignoreEvent(e10)) return false;
      return true;
    }(this.view, t53) || this.ignoreDuringComposition(t53)) && ("keydown" == t53.type && this.keydown(t53) || this.runHandlers(t53.type, t53));
  }
  runHandlers(t53, e10) {
    let i10 = this.handlers[t53];
    if (i10) {
      for (let t54 of i10.observers) t54(this.view, e10);
      for (let t54 of i10.handlers) {
        if (e10.defaultPrevented) break;
        if (t54(this.view, e10)) {
          e10.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t53) {
    let e10 = function(t54) {
      let e11 = /* @__PURE__ */ Object.create(null);
      function i11(t55) {
        return e11[t55] || (e11[t55] = { observers: [], handlers: [] });
      }
      for (let e12 of t54) {
        let t55 = e12.spec;
        if (t55 && t55.domEventHandlers) for (let n11 in t55.domEventHandlers) {
          let s10 = t55.domEventHandlers[n11];
          s10 && i11(n11).handlers.push(i3(e12.value, s10));
        }
        if (t55 && t55.domEventObservers) for (let n11 in t55.domEventObservers) {
          let s10 = t55.domEventObservers[n11];
          s10 && i11(n11).observers.push(i3(e12.value, s10));
        }
      }
      for (let t55 in nt) i11(t55).handlers.push(nt[t55]);
      for (let t55 in ne) i11(t55).observers.push(ne[t55]);
      return e11;
    }(t53), i10 = this.handlers, n10 = this.view.contentDOM;
    for (let t54 in e10) if ("scroll" != t54) {
      let s10 = !e10[t54].handlers.length, o10 = i10[t54];
      o10 && !o10.handlers.length != s10 && (n10.removeEventListener(t54, this.handleEvent), o10 = null), o10 || n10.addEventListener(t54, this.handleEvent, { passive: s10 });
    }
    for (let t54 in i10) "scroll" == t54 || e10[t54] || n10.removeEventListener(t54, this.handleEvent);
    this.handlers = e10;
  }
  keydown(t53) {
    let e10;
    return this.lastKeyCode = t53.keyCode, this.lastKeyTime = Date.now(), !!(9 == t53.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) || ((this.tabFocusMode > 0 && 27 != t53.keyCode && 0 > i9.indexOf(t53.keyCode) && (this.tabFocusMode = -1), eV.android && eV.chrome && !t53.synthetic && (13 == t53.keyCode || 8 == t53.keyCode)) ? (this.view.observer.delayAndroidKey(t53.key, t53.keyCode), true) : eV.ios && !t53.synthetic && !t53.altKey && !t53.metaKey && ((e10 = i4.find((e11) => e11.keyCode == t53.keyCode)) && !t53.ctrlKey || i5.indexOf(t53.key) > -1 && t53.ctrlKey && !t53.shiftKey) ? (this.pendingIOSKey = e10 || t53, setTimeout(() => this.flushIOSKey(), 250), true) : (229 != t53.keyCode && this.view.observer.forceFlush(), false));
  }
  flushIOSKey(t53) {
    let e10 = this.pendingIOSKey;
    return !(!e10 || "Enter" == e10.key && t53 && t53.from < t53.to && /^\S+$/.test(t53.insert.toString())) && (this.pendingIOSKey = void 0, eg(this.view.contentDOM, e10.key, e10.keyCode, e10 instanceof KeyboardEvent ? e10 : void 0));
  }
  ignoreDuringComposition(t53) {
    return !!/^key/.test(t53.type) && (this.composing > 0 || !!(eV.safari && !eV.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = false, true));
  }
  startMouseSelection(t53) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t53;
  }
  update(t53) {
    this.view.observer.update(t53), this.mouseSelection && this.mouseSelection.update(t53), this.draggedContent && t53.docChanged && (this.draggedContent = this.draggedContent.map(t53.changes)), t53.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
};
function i3(t53, e10) {
  return (i10, n10) => {
    try {
      return e10.call(t53, n10, i10);
    } catch (t54) {
      iC(i10.state, t54);
    }
  };
}
let i4 = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], i5 = "dthko", i9 = [16, 17, 18, 20, 91, 92, 224, 225];
function i6(t53) {
  return 0.7 * Math.max(0, t53) + 8;
}
let i7 = class {
  constructor(t53, e10, i10, n10) {
    let s10;
    this.view = t53, this.startEvent = e10, this.style = i10, this.mustSelect = n10, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e10, this.scrollParents = function(t54) {
      let e11 = t54.ownerDocument, i11, n11;
      for (let s11 = t54.parentNode; s11 && s11 != e11.body && (!i11 || !n11); ) if (1 == s11.nodeType) !n11 && s11.scrollHeight > s11.clientHeight && (n11 = s11), !i11 && s11.scrollWidth > s11.clientWidth && (i11 = s11), s11 = s11.assignedSlot || s11.parentNode;
      else if (11 == s11.nodeType) s11 = s11.host;
      else break;
      return { x: i11, y: n11 };
    }(t53.contentDOM), this.atoms = t53.state.facet(iH).map((e11) => e11(t53));
    let o10 = t53.contentDOM.ownerDocument;
    o10.addEventListener("mousemove", this.move = this.move.bind(this)), o10.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e10.shiftKey, this.multiple = t53.state.facet(tB.allowMultipleSelections) && ((s10 = t53.state.facet(iu)).length ? s10[0](e10) : eV.mac ? e10.metaKey : e10.ctrlKey), this.dragging = !!function(t54, e11) {
      let { main: i11 } = t54.state.selection;
      if (i11.empty) return false;
      let n11 = t7(t54.root);
      if (!n11 || 0 == n11.rangeCount) return true;
      let s11 = n11.getRangeAt(0).getClientRects();
      for (let t55 = 0; t55 < s11.length; t55++) {
        let i12 = s11[t55];
        if (i12.left <= e11.clientX && i12.right >= e11.clientX && i12.top <= e11.clientY && i12.bottom >= e11.clientY) return true;
      }
      return false;
    }(t53, e10) && 1 == nu(e10) && null;
  }
  start(t53) {
    false === this.dragging && this.select(t53);
  }
  move(t53) {
    var e10;
    if (0 == t53.buttons) return this.destroy();
    if (this.dragging || null == this.dragging && 10 > Math.max(Math.abs((e10 = this.startEvent).clientX - t53.clientX), Math.abs(e10.clientY - t53.clientY))) return;
    this.select(this.lastEvent = t53);
    let i10 = 0, n10 = 0, s10 = 0, o10 = 0, r10 = this.view.win.innerWidth, l10 = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s10, right: r10 } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: o10, bottom: l10 } = this.scrollParents.y.getBoundingClientRect());
    let h10 = iW(this.view);
    t53.clientX - h10.left <= s10 + 6 ? i10 = -i6(s10 - t53.clientX) : t53.clientX + h10.right >= r10 - 6 && (i10 = i6(t53.clientX - r10)), t53.clientY - h10.top <= o10 + 6 ? n10 = -i6(o10 - t53.clientY) : t53.clientY + h10.bottom >= l10 - 6 && (n10 = i6(t53.clientY - l10)), this.setScrollSpeed(i10, n10);
  }
  up(t53) {
    null == this.dragging && this.select(this.lastEvent), this.dragging || t53.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t53 = this.view.contentDOM.ownerDocument;
    t53.removeEventListener("mousemove", this.move), t53.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t53, e10) {
    this.scrollSpeed = { x: t53, y: e10 }, t53 || e10 ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t53, y: e10 } = this.scrollSpeed;
    t53 && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t53, t53 = 0), e10 && this.scrollParents.y && (this.scrollParents.y.scrollTop += e10, e10 = 0), (t53 || e10) && this.view.win.scrollBy(t53, e10), false === this.dragging && this.select(this.lastEvent);
  }
  skipAtoms(t53) {
    let e10 = null;
    for (let i10 = 0; i10 < t53.ranges.length; i10++) {
      let n10 = t53.ranges[i10], s10 = null;
      if (n10.empty) {
        let t54 = i1(this.atoms, n10.from, 0);
        t54 != n10.from && (s10 = $.cursor(t54, -1));
      } else {
        let t54 = i1(this.atoms, n10.from, -1), e11 = i1(this.atoms, n10.to, 1);
        (t54 != n10.from || e11 != n10.to) && (s10 = $.range(n10.from == n10.anchor ? t54 : e11, n10.from == n10.head ? t54 : e11));
      }
      s10 && (e10 || (e10 = t53.ranges.slice()), e10[i10] = s10);
    }
    return e10 ? $.create(e10, t53.mainIndex) : t53;
  }
  select(t53) {
    let { view: e10 } = this, i10 = this.skipAtoms(this.style.get(t53, this.extend, this.multiple));
    (this.mustSelect || !i10.eq(e10.state.selection, false === this.dragging)) && this.view.dispatch({ selection: i10, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(t53) {
    t53.transactions.some((t54) => t54.isUserEvent("input.type")) ? this.destroy() : this.style.update(t53) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}, nt = /* @__PURE__ */ Object.create(null), ne = /* @__PURE__ */ Object.create(null), ni = eV.ie && eV.ie_version < 15 || eV.ios && eV.webkit_version < 604;
function nn(t53, e10) {
  let { state: i10 } = t53, n10, s10 = 1, o10 = i10.toText(e10), r10 = o10.lines == i10.selection.ranges.length;
  if (null != ng && i10.selection.ranges.every((t54) => t54.empty) && ng == o10.toString()) {
    let t54 = -1;
    n10 = i10.changeByRange((n11) => {
      let l10 = i10.doc.lineAt(n11.from);
      if (l10.from == t54) return { range: n11 };
      t54 = l10.from;
      let h10 = i10.toText((r10 ? o10.line(s10++).text : e10) + i10.lineBreak);
      return { changes: { from: l10.from, insert: h10 }, range: $.cursor(n11.from + h10.length) };
    });
  } else n10 = r10 ? i10.changeByRange((t54) => {
    let e11 = o10.line(s10++);
    return { changes: { from: t54.from, to: t54.to, insert: e11.text }, range: $.cursor(t54.from + e11.length) };
  }) : i10.replaceSelection(o10);
  t53.dispatch(n10, { userEvent: "input.paste", scrollIntoView: true });
}
function ns(t53, e10, i10, n10) {
  if (1 == n10) return $.cursor(e10, i10);
  if (2 == n10) return function(t54, e11) {
    let i11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n11 = t54.charCategorizer(e11), s10 = t54.doc.lineAt(e11), o10 = e11 - s10.from;
    if (0 == s10.length) return $.cursor(e11);
    0 == o10 ? i11 = 1 : o10 == s10.length && (i11 = -1);
    let r10 = o10, l10 = o10;
    i11 < 0 ? r10 = p(s10.text, o10, false) : l10 = p(s10.text, o10);
    let h10 = n11(s10.text.slice(r10, l10));
    for (; r10 > 0; ) {
      let t55 = p(s10.text, r10, false);
      if (n11(s10.text.slice(t55, r10)) != h10) break;
      r10 = t55;
    }
    for (; l10 < s10.length; ) {
      let t55 = p(s10.text, l10);
      if (n11(s10.text.slice(l10, t55)) != h10) break;
      l10 = t55;
    }
    return $.range(r10 + s10.from, l10 + s10.from);
  }(t53.state, e10, i10);
  {
    let i11 = e$.find(t53.docView, e10), n11 = t53.state.doc.lineAt(i11 ? i11.posAtEnd : e10), s10 = i11 ? i11.posAtStart : n11.from, o10 = i11 ? i11.posAtEnd : n11.to;
    return o10 < t53.state.doc.length && o10 == n11.to && o10++, $.range(s10, o10);
  }
}
ne.scroll = (t53) => {
  t53.inputState.lastScrollTop = t53.scrollDOM.scrollTop, t53.inputState.lastScrollLeft = t53.scrollDOM.scrollLeft;
}, nt.keydown = (t53, e10) => (t53.inputState.setSelectionOrigin("select"), 27 == e10.keyCode && 0 != t53.inputState.tabFocusMode && (t53.inputState.tabFocusMode = Date.now() + 2e3), false), ne.touchstart = (t53, e10) => {
  t53.inputState.lastTouchTime = Date.now(), t53.inputState.setSelectionOrigin("select.pointer");
}, ne.touchmove = (t53) => {
  t53.inputState.setSelectionOrigin("select.pointer");
}, nt.mousedown = (t53, e10) => {
  let i10, n10, s10;
  if (t53.observer.flush(), t53.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let o10 = null;
  for (let i11 of t53.state.facet(ip)) if (o10 = i11(t53, e10)) break;
  if (o10 || 0 != e10.button || (i10 = nl(t53, e10), n10 = nu(e10), s10 = t53.state.selection, o10 = { update(t54) {
    t54.docChanged && (i10.pos = t54.changes.mapPos(i10.pos), s10 = s10.map(t54.changes));
  }, get(e11, o11, r10) {
    let l10 = nl(t53, e11), h10, a10 = ns(t53, l10.pos, l10.bias, n10);
    if (i10.pos != l10.pos && !o11) {
      let e12 = ns(t53, i10.pos, i10.bias, n10), s11 = Math.min(e12.from, a10.from), o12 = Math.max(e12.to, a10.to);
      a10 = s11 < a10.from ? $.range(s11, o12) : $.range(o12, s11);
    }
    return o11 ? s10.replaceRange(s10.main.extend(a10.from, a10.to)) : r10 && 1 == n10 && s10.ranges.length > 1 && (h10 = function(t54, e12) {
      for (let i11 = 0; i11 < t54.ranges.length; i11++) {
        let { from: n11, to: s11 } = t54.ranges[i11];
        if (n11 <= e12 && s11 >= e12) return $.create(t54.ranges.slice(0, i11).concat(t54.ranges.slice(i11 + 1)), t54.mainIndex == i11 ? 0 : t54.mainIndex - (t54.mainIndex > i11 ? 1 : 0));
      }
      return null;
    }(s10, l10.pos)) ? h10 : r10 ? s10.addRange(a10) : $.create([a10]);
  } }), o10) {
    let i11 = !t53.hasFocus;
    t53.inputState.startMouseSelection(new i7(t53, e10, o10, i11)), i11 && t53.observer.ignore(() => {
      eu(t53.contentDOM);
      let e11 = t53.root.activeElement;
      e11 && !e11.contains(t53.contentDOM) && e11.blur();
    });
    let n11 = t53.inputState.mouseSelection;
    if (n11) return n11.start(e10), false === n11.dragging;
  }
  return false;
};
let no = (t53, e10) => t53 >= e10.top && t53 <= e10.bottom, nr = (t53, e10, i10) => no(e10, i10) && t53 >= i10.left && t53 <= i10.right;
function nl(t53, e10) {
  let i10 = t53.posAtCoords({ x: e10.clientX, y: e10.clientY }, false);
  return { pos: i10, bias: function(t54, e11, i11, n10) {
    let s10 = e$.find(t54.docView, e11);
    if (!s10) return 1;
    let o10 = e11 - s10.posAtStart;
    if (0 == o10) return 1;
    if (o10 == s10.length) return -1;
    let r10 = s10.coordsAt(o10, -1);
    if (r10 && nr(i11, n10, r10)) return -1;
    let l10 = s10.coordsAt(o10, 1);
    return l10 && nr(i11, n10, l10) ? 1 : r10 && no(n10, r10) ? -1 : 1;
  }(t53, i10, e10.clientX, e10.clientY) };
}
let nh = eV.ie && eV.ie_version <= 11, na = null, nc = 0, nd = 0;
function nu(t53) {
  if (!nh) return t53.detail;
  let e10 = na, i10 = nd;
  return na = t53, nd = Date.now(), nc = !e10 || i10 > Date.now() - 400 && 2 > Math.abs(e10.clientX - t53.clientX) && 2 > Math.abs(e10.clientY - t53.clientY) ? (nc + 1) % 3 : 1;
}
function nf(t53, e10, i10, n10) {
  let s10;
  if (!i10) return;
  let o10 = t53.posAtCoords({ x: e10.clientX, y: e10.clientY }, false), { draggedContent: r10 } = t53.inputState, l10 = n10 && r10 && ((s10 = t53.state.facet(ig)).length ? s10[0](e10) : eV.mac ? !e10.altKey : !e10.ctrlKey) ? { from: r10.from, to: r10.to } : null, h10 = { from: o10, insert: i10 }, a10 = t53.state.changes(l10 ? [l10, h10] : h10);
  t53.focus(), t53.dispatch({ changes: a10, selection: { anchor: a10.mapPos(o10, -1), head: a10.mapPos(o10, 1) }, userEvent: l10 ? "move.drop" : "input.drop" }), t53.inputState.draggedContent = null;
}
nt.dragstart = (t53, e10) => {
  let { selection: { main: i10 } } = t53.state;
  if (e10.target.draggable) {
    let n11 = t53.docView.nearest(e10.target);
    if (n11 && n11.isWidget) {
      let t54 = n11.posAtStart, e11 = t54 + n11.length;
      (t54 >= i10.to || e11 <= i10.from) && (i10 = $.range(t54, e11));
    }
  }
  let { inputState: n10 } = t53;
  return n10.mouseSelection && (n10.mouseSelection.dragging = true), n10.draggedContent = i10, e10.dataTransfer && (e10.dataTransfer.setData("Text", t53.state.sliceDoc(i10.from, i10.to)), e10.dataTransfer.effectAllowed = "copyMove"), false;
}, nt.dragend = (t53) => (t53.inputState.draggedContent = null, false), nt.drop = (t53, e10) => {
  if (!e10.dataTransfer) return false;
  if (t53.state.readOnly) return true;
  let i10 = e10.dataTransfer.files;
  if (i10 && i10.length) {
    let n10 = Array(i10.length), s10 = 0, o10 = () => {
      ++s10 == i10.length && nf(t53, e10, n10.filter((t54) => null != t54).join(t53.state.lineBreak), false);
    };
    for (let t54 = 0; t54 < i10.length; t54++) {
      let e11 = new FileReader();
      e11.onerror = o10, e11.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(e11.result) || (n10[t54] = e11.result), o10();
      }, e11.readAsText(i10[t54]);
    }
    return true;
  }
  {
    let i11 = e10.dataTransfer.getData("Text");
    if (i11) return nf(t53, e10, i11, true), true;
  }
  return false;
}, nt.paste = (t53, e10) => {
  if (t53.state.readOnly) return true;
  t53.observer.flush();
  let i10 = ni ? null : e10.clipboardData;
  return i10 ? (nn(t53, i10.getData("text/plain") || i10.getData("text/uri-list")), true) : (function(t54) {
    let e11 = t54.dom.parentNode;
    if (!e11) return;
    let i11 = e11.appendChild(document.createElement("textarea"));
    i11.style.cssText = "position: fixed; left: -10000px; top: 10px", i11.focus(), setTimeout(() => {
      t54.focus(), i11.remove(), nn(t54, i11.value);
    }, 50);
  }(t53), false);
};
let ng = null;
nt.copy = nt.cut = (t53, e10) => {
  let { text: i10, ranges: n10, linewise: s10 } = function(t54) {
    let e11 = [], i11 = [], n11 = false;
    for (let n12 of t54.selection.ranges) n12.empty || (e11.push(t54.sliceDoc(n12.from, n12.to)), i11.push(n12));
    if (!e11.length) {
      let s11 = -1;
      for (let { from: n12 } of t54.selection.ranges) {
        let o11 = t54.doc.lineAt(n12);
        o11.number > s11 && (e11.push(o11.text), i11.push({ from: o11.from, to: Math.min(t54.doc.length, o11.to + 1) })), s11 = o11.number;
      }
      n11 = true;
    }
    return { text: e11.join(t54.lineBreak), ranges: i11, linewise: n11 };
  }(t53.state);
  if (!i10 && !s10) return false;
  ng = s10 ? i10 : null, "cut" != e10.type || t53.state.readOnly || t53.dispatch({ changes: n10, scrollIntoView: true, userEvent: "delete.cut" });
  let o10 = ni ? null : e10.clipboardData;
  return o10 ? (o10.clearData(), o10.setData("text/plain", i10), true) : (!function(t54, e11) {
    let i11 = t54.dom.parentNode;
    if (!i11) return;
    let n11 = i11.appendChild(document.createElement("textarea"));
    n11.style.cssText = "position: fixed; left: -10000px; top: 10px", n11.value = e11, n11.focus(), n11.selectionEnd = e11.length, n11.selectionStart = 0, setTimeout(() => {
      n11.remove(), t54.focus();
    }, 50);
  }(t53, i10), false);
};
let np = ty.define();
function nm(t53, e10) {
  let i10 = [];
  for (let n10 of t53.facet(ib)) {
    let s10 = n10(t53, e10);
    s10 && i10.push(s10);
  }
  return i10 ? t53.update({ effects: i10, annotations: np.of(true) }) : null;
}
function nv(t53) {
  setTimeout(() => {
    let e10 = t53.hasFocus;
    if (e10 != t53.inputState.notifiedFocused) {
      let i10 = nm(t53.state, e10);
      i10 ? t53.dispatch(i10) : t53.update([]);
    }
  }, 10);
}
ne.focus = (t53) => {
  t53.inputState.lastFocusTime = Date.now(), !t53.scrollDOM.scrollTop && (t53.inputState.lastScrollTop || t53.inputState.lastScrollLeft) && (t53.scrollDOM.scrollTop = t53.inputState.lastScrollTop, t53.scrollDOM.scrollLeft = t53.inputState.lastScrollLeft), nv(t53);
}, ne.blur = (t53) => {
  t53.observer.clearSelectionRange(), nv(t53);
}, ne.compositionstart = ne.compositionupdate = (t53) => {
  !t53.observer.editContext && (null == t53.inputState.compositionFirstChange && (t53.inputState.compositionFirstChange = true), t53.inputState.composing < 0 && (t53.inputState.composing = 0));
}, ne.compositionend = (t53) => {
  t53.observer.editContext || (t53.inputState.composing = -1, t53.inputState.compositionEndedAt = Date.now(), t53.inputState.compositionPendingKey = true, t53.inputState.compositionPendingChange = t53.observer.pendingRecords().length > 0, t53.inputState.compositionFirstChange = null, eV.chrome && eV.android ? t53.observer.flushSoon() : t53.inputState.compositionPendingChange ? Promise.resolve().then(() => t53.observer.flush()) : setTimeout(() => {
    t53.inputState.composing < 0 && t53.docView.hasComposition && t53.update([]);
  }, 50));
}, ne.contextmenu = (t53) => {
  t53.inputState.lastContextMenu = Date.now();
}, nt.beforeinput = (t53, e10) => {
  var i10;
  let n10;
  if (eV.chrome && eV.android && (n10 = i4.find((t54) => t54.inputType == e10.inputType)) && (t53.observer.delayAndroidKey(n10.key, n10.keyCode), "Backspace" == n10.key || "Delete" == n10.key)) {
    let e11 = (null === (i10 = window.visualViewport) || void 0 === i10 ? void 0 : i10.height) || 0;
    setTimeout(() => {
      var i11;
      ((null === (i11 = window.visualViewport) || void 0 === i11 ? void 0 : i11.height) || 0) > e11 + 10 && t53.hasFocus && (t53.contentDOM.blur(), t53.focus());
    }, 100);
  }
  return eV.ios && "deleteContentForward" == e10.inputType && t53.observer.flushSoon(), eV.safari && "insertText" == e10.inputType && t53.inputState.composing >= 0 && setTimeout(() => ne.compositionend(t53, e10), 20), false;
};
let nw = /* @__PURE__ */ new Set(), nb = ["pre-wrap", "normal", "pre-line", "break-spaces"], ny = class {
  constructor(t53) {
    this.lineWrapping = t53, this.doc = s.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = false;
  }
  heightForGap(t53, e10) {
    let i10 = this.doc.lineAt(e10).number - this.doc.lineAt(t53).number + 1;
    return this.lineWrapping && (i10 += Math.max(0, Math.ceil((e10 - t53 - i10 * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i10;
  }
  heightForLine(t53) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t53 - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t53) {
    return this.doc = t53, this;
  }
  mustRefreshForWrapping(t53) {
    return nb.indexOf(t53) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t53) {
    let e10 = false;
    for (let i10 = 0; i10 < t53.length; i10++) {
      let n10 = t53[i10];
      n10 < 0 ? i10++ : this.heightSamples[Math.floor(10 * n10)] || (e10 = true, this.heightSamples[Math.floor(10 * n10)] = true);
    }
    return e10;
  }
  refresh(t53, e10, i10, n10, s10, o10) {
    let r10 = nb.indexOf(t53) > -1, l10 = Math.round(e10) != Math.round(this.lineHeight) || this.lineWrapping != r10;
    if (this.lineWrapping = r10, this.lineHeight = e10, this.charWidth = i10, this.textHeight = n10, this.lineLength = s10, l10) {
      this.heightSamples = {};
      for (let t54 = 0; t54 < o10.length; t54++) {
        let e11 = o10[t54];
        e11 < 0 ? t54++ : this.heightSamples[Math.floor(10 * e11)] = true;
      }
    }
    return l10;
  }
}, nx = class {
  constructor(t53, e10) {
    this.from = t53, this.heights = e10, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}, nS = class t20 {
  constructor(t53, e10, i10, n10, s10) {
    this.from = t53, this.length = e10, this.top = i10, this.height = n10, this._content = s10;
  }
  get type() {
    return "number" == typeof this._content ? eJ.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof e1 ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return "number" == typeof this._content ? this._content : 0;
  }
  join(e10) {
    let i10 = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e10._content) ? e10._content : [e10]);
    return new t20(this.from, this.length + e10.length, this.top, this.height + e10.height, i10);
  }
};
var nk = ((C = nk || (nk = {}))[C.ByPos = 0] = "ByPos", C[C.ByHeight = 1] = "ByHeight", C[C.ByPosNoHeight = 2] = "ByPosNoHeight", C);
let nM = class t21 {
  constructor(t53, e10, i10 = 2) {
    this.length = t53, this.height = e10, this.flags = i10;
  }
  get outdated() {
    return (2 & this.flags) > 0;
  }
  set outdated(t53) {
    this.flags = (t53 ? 2 : 0) | -3 & this.flags;
  }
  setHeight(t53, e10) {
    this.height != e10 && (Math.abs(this.height - e10) > 1e-3 && (t53.heightChanged = true), this.height = e10);
  }
  replace(e10, i10, n10) {
    return t21.of(n10);
  }
  decomposeLeft(t53, e10) {
    e10.push(this);
  }
  decomposeRight(t53, e10) {
    e10.push(this);
  }
  applyChanges(t53, e10, i10, n10) {
    let s10 = this, o10 = i10.doc;
    for (let r10 = n10.length - 1; r10 >= 0; r10--) {
      let { fromA: l10, toA: h10, fromB: a10, toB: c10 } = n10[r10], d10 = s10.lineAt(l10, nk.ByPosNoHeight, i10.setDoc(e10), 0, 0), u10 = d10.to >= h10 ? d10 : s10.lineAt(h10, nk.ByPosNoHeight, i10, 0, 0);
      for (c10 += u10.to - h10, h10 = u10.to; r10 > 0 && d10.from <= n10[r10 - 1].toA; ) l10 = n10[r10 - 1].fromA, a10 = n10[r10 - 1].fromB, r10--, l10 < d10.from && (d10 = s10.lineAt(l10, nk.ByPosNoHeight, i10, 0, 0));
      a10 += d10.from - l10, l10 = d10.from;
      let f10 = nE.build(i10.setDoc(o10), t53, a10, c10);
      s10 = s10.replace(l10, h10, f10);
    }
    return s10.updateHeight(i10, 0);
  }
  static empty() {
    return new nC(0, 0);
  }
  static of(e10) {
    if (1 == e10.length) return e10[0];
    let i10 = 0, n10 = e10.length, s10 = 0, o10 = 0;
    for (; ; ) if (i10 == n10) {
      if (s10 > 2 * o10) {
        let t53 = e10[i10 - 1];
        t53.break ? e10.splice(--i10, 1, t53.left, null, t53.right) : e10.splice(--i10, 1, t53.left, t53.right), n10 += 1 + t53.break, s10 -= t53.size;
      } else if (o10 > 2 * s10) {
        let t53 = e10[n10];
        t53.break ? e10.splice(n10, 1, t53.left, null, t53.right) : e10.splice(n10, 1, t53.left, t53.right), n10 += 2 + t53.break, o10 -= t53.size;
      } else break;
    } else if (s10 < o10) {
      let t53 = e10[i10++];
      t53 && (s10 += t53.size);
    } else {
      let t53 = e10[--n10];
      t53 && (o10 += t53.size);
    }
    let r10 = 0;
    return null == e10[i10 - 1] ? (r10 = 1, i10--) : null == e10[i10] && (r10 = 1, n10++), new nO(t21.of(e10.slice(0, i10)), r10, t21.of(e10.slice(n10)));
  }
};
nM.prototype.size = 1;
let nA = class extends nM {
  constructor(t53, e10, i10) {
    super(t53, e10), this.deco = i10;
  }
  blockAt(t53, e10, i10, n10) {
    return new nS(n10, this.length, i10, this.height, this.deco || 0);
  }
  lineAt(t53, e10, i10, n10, s10) {
    return this.blockAt(0, i10, n10, s10);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    t53 <= s10 + this.length && e10 >= s10 && o10(this.blockAt(0, i10, n10, s10));
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0);
    return i10 && i10.from <= e10 && i10.more && this.setHeight(t53, i10.heights[i10.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}, nC = class t23 extends nA {
  constructor(t53, e10) {
    super(t53, e10, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t53, e10, i10, n10) {
    return new nS(n10, this.length, i10, this.height, this.breaks);
  }
  replace(e10, i10, n10) {
    let s10 = n10[0];
    return 1 == n10.length && (s10 instanceof t23 || s10 instanceof nD && 4 & s10.flags) && 10 > Math.abs(this.length - s10.length) ? (s10 instanceof nD ? s10 = new t23(s10.length, this.height) : s10.height = this.height, this.outdated || (s10.outdated = false), s10) : nM.of(n10);
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0;
    return n10 && n10.from <= e10 && n10.more ? this.setHeight(t53, n10.heights[n10.index++]) : (i10 || this.outdated) && this.setHeight(t53, Math.max(this.widgetHeight, t53.heightForLine(this.length - this.collapsed)) + this.breaks * t53.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}, nD = class t24 extends nM {
  constructor(t53) {
    super(t53, 0);
  }
  heightMetrics(t53, e10) {
    let i10 = t53.doc.lineAt(e10).number, n10 = t53.doc.lineAt(e10 + this.length).number, s10 = n10 - i10 + 1, o10, r10 = 0;
    if (t53.lineWrapping) {
      let e11 = Math.min(this.height, t53.lineHeight * s10);
      o10 = e11 / s10, this.length > s10 + 1 && (r10 = (this.height - e11) / (this.length - s10 - 1));
    } else o10 = this.height / s10;
    return { firstLine: i10, lastLine: n10, perLine: o10, perChar: r10 };
  }
  blockAt(t53, e10, i10, n10) {
    let { firstLine: s10, lastLine: o10, perLine: r10, perChar: l10 } = this.heightMetrics(e10, n10);
    if (e10.lineWrapping) {
      let s11 = n10 + (t53 < e10.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t53 - i10) / this.height)) * this.length)), o11 = e10.doc.lineAt(s11), h10 = r10 + o11.length * l10, a10 = Math.max(i10, t53 - h10 / 2);
      return new nS(o11.from, o11.length, a10, h10, 0);
    }
    {
      let n11 = Math.max(0, Math.min(o10 - s10, Math.floor((t53 - i10) / r10))), { from: l11, length: h10 } = e10.doc.line(s10 + n11);
      return new nS(l11, h10, i10 + r10 * n11, r10, 0);
    }
  }
  lineAt(t53, e10, i10, n10, s10) {
    if (e10 == nk.ByHeight) return this.blockAt(t53, i10, n10, s10);
    if (e10 == nk.ByPosNoHeight) {
      let { from: e11, to: n11 } = i10.doc.lineAt(t53);
      return new nS(e11, n11 - e11, 0, 0, 0);
    }
    let { firstLine: o10, perLine: r10, perChar: l10 } = this.heightMetrics(i10, s10), h10 = i10.doc.lineAt(t53), a10 = r10 + h10.length * l10, c10 = h10.number - o10, d10 = n10 + r10 * c10 + l10 * (h10.from - s10 - c10);
    return new nS(h10.from, h10.length, Math.max(n10, Math.min(d10, n10 + this.height - a10)), a10, 0);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    t53 = Math.max(t53, s10), e10 = Math.min(e10, s10 + this.length);
    let { firstLine: r10, perLine: l10, perChar: h10 } = this.heightMetrics(i10, s10);
    for (let a10 = t53, c10 = n10; a10 <= e10; ) {
      let e11 = i10.doc.lineAt(a10);
      if (a10 == t53) {
        let i11 = e11.number - r10;
        c10 += l10 * i11 + h10 * (t53 - s10 - i11);
      }
      let n11 = l10 + h10 * e11.length;
      o10(new nS(e11.from, e11.length, c10, n11, 0)), c10 += n11, a10 = e11.to + 1;
    }
  }
  replace(e10, i10, n10) {
    let s10 = this.length - i10;
    if (s10 > 0) {
      let e11 = n10[n10.length - 1];
      e11 instanceof t24 ? n10[n10.length - 1] = new t24(e11.length + s10) : n10.push(null, new t24(s10 - 1));
    }
    if (e10 > 0) {
      let i11 = n10[0];
      i11 instanceof t24 ? n10[0] = new t24(e10 + i11.length) : n10.unshift(new t24(e10 - 1), null);
    }
    return nM.of(n10);
  }
  decomposeLeft(e10, i10) {
    i10.push(new t24(e10 - 1), null);
  }
  decomposeRight(e10, i10) {
    i10.push(null, new t24(this.length - e10 - 1));
  }
  updateHeight(e10) {
    let i10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s10 = arguments.length > 3 ? arguments[3] : void 0, o10 = i10 + this.length;
    if (s10 && s10.from <= i10 + this.length && s10.more) {
      let n11 = [], r10 = Math.max(i10, s10.from), l10 = -1;
      for (s10.from > i10 && n11.push(new t24(s10.from - i10 - 1).updateHeight(e10, i10)); r10 <= o10 && s10.more; ) {
        let t53 = e10.doc.lineAt(r10).length;
        n11.length && n11.push(null);
        let i11 = s10.heights[s10.index++];
        -1 == l10 ? l10 = i11 : Math.abs(i11 - l10) >= 1e-3 && (l10 = -2);
        let o11 = new nC(t53, i11);
        o11.outdated = false, n11.push(o11), r10 += t53 + 1;
      }
      r10 <= o10 && n11.push(null, new t24(o10 - r10).updateHeight(e10, r10));
      let h10 = nM.of(n11);
      return (l10 < 0 || Math.abs(h10.height - this.height) >= 1e-3 || Math.abs(l10 - this.heightMetrics(e10, i10).perLine) >= 1e-3) && (e10.heightChanged = true), h10;
    }
    return (n10 || this.outdated) && (this.setHeight(e10, e10.heightForGap(i10, i10 + this.length)), this.outdated = false), this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}, nO = class extends nM {
  constructor(t53, e10, i10) {
    super(t53.length + e10 + i10.length, t53.height + i10.height, e10 | (t53.outdated || i10.outdated ? 2 : 0)), this.left = t53, this.right = i10, this.size = t53.size + i10.size;
  }
  get break() {
    return 1 & this.flags;
  }
  blockAt(t53, e10, i10, n10) {
    let s10 = i10 + this.left.height;
    return t53 < s10 ? this.left.blockAt(t53, e10, i10, n10) : this.right.blockAt(t53, e10, s10, n10 + this.left.length + this.break);
  }
  lineAt(t53, e10, i10, n10, s10) {
    let o10 = n10 + this.left.height, r10 = s10 + this.left.length + this.break, l10 = e10 == nk.ByHeight ? t53 < o10 : t53 < r10, h10 = l10 ? this.left.lineAt(t53, e10, i10, n10, s10) : this.right.lineAt(t53, e10, i10, o10, r10);
    if (this.break || (l10 ? h10.to < r10 : h10.from > r10)) return h10;
    let a10 = e10 == nk.ByPosNoHeight ? nk.ByPosNoHeight : nk.ByPos;
    return l10 ? h10.join(this.right.lineAt(r10, a10, i10, o10, r10)) : this.left.lineAt(r10, a10, i10, n10, s10).join(h10);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    let r10 = n10 + this.left.height, l10 = s10 + this.left.length + this.break;
    if (this.break) t53 < l10 && this.left.forEachLine(t53, e10, i10, n10, s10, o10), e10 >= l10 && this.right.forEachLine(t53, e10, i10, r10, l10, o10);
    else {
      let h10 = this.lineAt(l10, nk.ByPos, i10, n10, s10);
      t53 < h10.from && this.left.forEachLine(t53, h10.from - 1, i10, n10, s10, o10), h10.to >= t53 && h10.from <= e10 && o10(h10), e10 > h10.to && this.right.forEachLine(h10.to + 1, e10, i10, r10, l10, o10);
    }
  }
  replace(t53, e10, i10) {
    let n10 = this.left.length + this.break;
    if (e10 < n10) return this.balanced(this.left.replace(t53, e10, i10), this.right);
    if (t53 > this.left.length) return this.balanced(this.left, this.right.replace(t53 - n10, e10 - n10, i10));
    let s10 = [];
    t53 > 0 && this.decomposeLeft(t53, s10);
    let o10 = s10.length;
    for (let t54 of i10) s10.push(t54);
    if (t53 > 0 && nT(s10, o10 - 1), e10 < this.length) {
      let t54 = s10.length;
      this.decomposeRight(e10, s10), nT(s10, t54);
    }
    return nM.of(s10);
  }
  decomposeLeft(t53, e10) {
    let i10 = this.left.length;
    if (t53 <= i10) return this.left.decomposeLeft(t53, e10);
    e10.push(this.left), this.break && t53 >= ++i10 && e10.push(null), t53 > i10 && this.right.decomposeLeft(t53 - i10, e10);
  }
  decomposeRight(t53, e10) {
    let i10 = this.left.length, n10 = i10 + this.break;
    if (t53 >= n10) return this.right.decomposeRight(t53 - n10, e10);
    t53 < i10 && this.left.decomposeRight(t53, e10), this.break && t53 < n10 && e10.push(null), e10.push(this.right);
  }
  balanced(t53, e10) {
    return t53.size > 2 * e10.size || e10.size > 2 * t53.size ? nM.of(this.break ? [t53, null, e10] : [t53, e10]) : (this.left = t53, this.right = e10, this.height = t53.height + e10.height, this.outdated = t53.outdated || e10.outdated, this.size = t53.size + e10.size, this.length = t53.length + this.break + e10.length, this);
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0, { left: s10, right: o10 } = this, r10 = e10 + s10.length + this.break, l10 = null;
    return (n10 && n10.from <= e10 + s10.length && n10.more ? l10 = s10 = s10.updateHeight(t53, e10, i10, n10) : s10.updateHeight(t53, e10, i10), n10 && n10.from <= r10 + o10.length && n10.more ? l10 = o10 = o10.updateHeight(t53, r10, i10, n10) : o10.updateHeight(t53, r10, i10), l10) ? this.balanced(s10, o10) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
};
function nT(t53, e10) {
  let i10, n10;
  null == t53[e10] && (i10 = t53[e10 - 1]) instanceof nD && (n10 = t53[e10 + 1]) instanceof nD && t53.splice(e10 - 1, 3, new nD(i10.length + 1 + n10.length));
}
let nE = class t25 {
  constructor(t53, e10) {
    this.pos = t53, this.oracle = e10, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t53;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t53, e10) {
    if (this.lineStart > -1) {
      let t54 = Math.min(e10, this.lineEnd), i10 = this.nodes[this.nodes.length - 1];
      i10 instanceof nC ? i10.length += t54 - this.pos : (t54 > this.pos || !this.isCovered) && this.nodes.push(new nC(t54 - this.pos, -1)), this.writtenTo = t54, e10 > t54 && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e10;
  }
  point(t53, e10, i10) {
    if (t53 < e10 || i10.heightRelevant) {
      let n10 = i10.widget ? i10.widget.estimatedHeight : 0, s10 = i10.widget ? i10.widget.lineBreaks : 0;
      n10 < 0 && (n10 = this.oracle.lineHeight);
      let o10 = e10 - t53;
      i10.block ? this.addBlock(new nA(o10, n10, i10)) : (o10 || s10 || n10 >= 5) && this.addLineDeco(n10, s10, o10);
    } else e10 > t53 && this.span(t53, e10);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: t53, to: e10 } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t53, this.lineEnd = e10, this.writtenTo < t53 && ((this.writtenTo < t53 - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, t53 - 1)), this.nodes.push(null)), this.pos > t53 && this.nodes.push(new nC(this.pos - t53, -1)), this.writtenTo = this.pos;
  }
  blankContent(t53, e10) {
    let i10 = new nD(e10 - t53);
    return this.oracle.doc.lineAt(t53).to == e10 && (i10.flags |= 4), i10;
  }
  ensureLine() {
    this.enterLine();
    let t53 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t53 instanceof nC) return t53;
    let e10 = new nC(0, -1);
    return this.nodes.push(e10), e10;
  }
  addBlock(t53) {
    this.enterLine();
    let e10 = t53.deco;
    e10 && e10.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t53), this.writtenTo = this.pos = this.pos + t53.length, e10 && e10.endSide > 0 && (this.covering = t53);
  }
  addLineDeco(t53, e10, i10) {
    let n10 = this.ensureLine();
    n10.length += i10, n10.collapsed += i10, n10.widgetHeight = Math.max(n10.widgetHeight, t53), n10.breaks += e10, this.writtenTo = this.pos = this.pos + i10;
  }
  finish(t53) {
    let e10 = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
    !(this.lineStart > -1) || e10 instanceof nC || this.isCovered ? (this.writtenTo < this.pos || null == e10) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new nC(0, -1));
    let i10 = t53;
    for (let t54 of this.nodes) t54 instanceof nC && t54.updateHeight(this.oracle, i10), i10 += t54 ? t54.length : 1;
    return this.nodes;
  }
  static build(e10, i10, n10, s10) {
    let o10 = new t25(n10, e10);
    return tV.spans(i10, n10, s10, o10, 0), o10.finish(n10);
  }
}, nB = class {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t53, e10, i10, n10) {
    (t53 < e10 || i10 && i10.heightRelevant || n10 && n10.heightRelevant) && e8(t53, e10, this.changes, 5);
  }
}, nR = class {
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.size = i10;
  }
  static same(t53, e10) {
    if (t53.length != e10.length) return false;
    for (let i10 = 0; i10 < t53.length; i10++) {
      let n10 = t53[i10], s10 = e10[i10];
      if (n10.from != s10.from || n10.to != s10.to || n10.size != s10.size) return false;
    }
    return true;
  }
  draw(t53, e10) {
    return eQ.replace({ widget: new nL(this.size * (e10 ? t53.scaleY : t53.scaleX), e10) }).range(this.from, this.to);
  }
}, nL = class extends eX {
  constructor(t53, e10) {
    super(), this.size = t53, this.vertical = e10;
  }
  eq(t53) {
    return t53.size == this.size && t53.vertical == this.vertical;
  }
  toDOM() {
    let t53 = document.createElement("div");
    return this.vertical ? t53.style.height = this.size + "px" : (t53.style.width = this.size + "px", t53.style.height = "2px", t53.style.display = "inline-block"), t53;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}, nP = class {
  constructor(t53) {
    this.state = t53, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = nI, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = e9.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let e10 = t53.facet(iL).some((t54) => "function" != typeof t54 && "cm-lineWrapping" == t54.class);
    this.heightOracle = new ny(e10), this.stateDeco = t53.facet(iP).filter((t54) => "function" != typeof t54), this.heightMap = nM.empty().applyChanges(this.stateDeco, s.empty, this.heightOracle.setDoc(t53.doc), [new iK(0, 0, 0, t53.doc.length)]);
    for (let t54 = 0; t54 < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); t54++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = eQ.set(this.lineGaps.map((t54) => t54.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t53 = [this.viewport], { main: e10 } = this.state.selection;
    for (let i10 = 0; i10 <= 1; i10++) {
      let n10 = i10 ? e10.head : e10.anchor;
      if (!t53.some((t54) => {
        let { from: e11, to: i11 } = t54;
        return n10 >= e11 && n10 <= i11;
      })) {
        let { from: e11, to: i11 } = this.lineBlockAt(n10);
        t53.push(new nN(e11, i11));
      }
    }
    return this.viewports = t53.sort((t54, e11) => t54.from - e11.from), this.updateScaler();
  }
  updateScaler() {
    let t53 = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? nI : new nF(this.heightOracle, this.heightMap, this.viewports), t53.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t53) => {
      this.viewportLines.push(nW(t53, this.scaler));
    });
  }
  update(t53) {
    var e10, i10;
    let n10, s10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    this.state = t53.state;
    let o10 = this.stateDeco;
    this.stateDeco = this.state.facet(iP).filter((t54) => "function" != typeof t54);
    let r10 = t53.changedRanges, l10 = iK.extendWithRanges(r10, (e10 = this.stateDeco, i10 = t53 ? t53.changes : W.empty(this.state.doc.length), n10 = new nB(), tV.compare(o10, e10, i10, n10, 0), n10.changes)), h10 = this.heightMap.height, a10 = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, t53.startState.doc, this.heightOracle.setDoc(this.state.doc), l10), this.heightMap.height != h10 && (t53.flags |= 2), a10 ? (this.scrollAnchorPos = t53.changes.mapPos(a10.from, -1), this.scrollAnchorHeight = a10.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let c10 = l10.length ? this.mapViewport(this.viewport, t53.changes) : this.viewport;
    (s10 && (s10.range.head < c10.from || s10.range.head > c10.to) || !this.viewportIsAppropriate(c10)) && (c10 = this.getViewport(0, s10));
    let d10 = c10.from != this.viewport.from || c10.to != this.viewport.to;
    this.viewport = c10, t53.flags |= this.updateForViewport(), (d10 || !t53.changes.empty || 2 & t53.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t53.changes))), t53.flags |= this.computeVisibleRanges(), s10 && (this.scrollTarget = s10), !this.mustEnforceCursorAssoc && t53.selectionSet && t53.view.lineWrapping && t53.state.selection.main.empty && t53.state.selection.main.assoc && !t53.state.facet(ix) && (this.mustEnforceCursorAssoc = true);
  }
  measure(t53) {
    let e10 = t53.contentDOM, i10 = window.getComputedStyle(e10), n10 = this.heightOracle, o10 = i10.whiteSpace;
    this.defaultTextDirection = "rtl" == i10.direction ? e9.RTL : e9.LTR;
    let r10 = this.heightOracle.mustRefreshForWrapping(o10), l10 = e10.getBoundingClientRect(), h10 = r10 || this.mustMeasureContent || this.contentDOMHeight != l10.height;
    this.contentDOMHeight = l10.height, this.mustMeasureContent = false;
    let a10 = 0, c10 = 0;
    if (l10.width && l10.height) {
      let { scaleX: t54, scaleY: i11 } = ea(e10, l10);
      (t54 > 5e-3 && Math.abs(this.scaleX - t54) > 5e-3 || i11 > 5e-3 && Math.abs(this.scaleY - i11) > 5e-3) && (this.scaleX = t54, this.scaleY = i11, a10 |= 8, r10 = h10 = true);
    }
    let d10 = (parseInt(i10.paddingTop) || 0) * this.scaleY, u10 = (parseInt(i10.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != d10 || this.paddingBottom != u10) && (this.paddingTop = d10, this.paddingBottom = u10, a10 |= 10), this.editorWidth != t53.scrollDOM.clientWidth && (n10.lineWrapping && (h10 = true), this.editorWidth = t53.scrollDOM.clientWidth, a10 |= 8);
    let f10 = t53.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != f10 && (this.scrollAnchorHeight = -1, this.scrollTop = f10), this.scrolledToBottom = em(t53.scrollDOM);
    let g10 = (this.printing ? function(t54, e11) {
      let i11 = t54.getBoundingClientRect();
      return { left: 0, right: i11.right - i11.left, top: e11, bottom: i11.bottom - (i11.top + e11) };
    } : function(t54, e11) {
      let i11 = t54.getBoundingClientRect(), n11 = t54.ownerDocument, s10 = n11.defaultView || window, o11 = Math.max(0, i11.left), r11 = Math.min(s10.innerWidth, i11.right), l11 = Math.max(0, i11.top), h11 = Math.min(s10.innerHeight, i11.bottom);
      for (let e12 = t54.parentNode; e12 && e12 != n11.body; ) if (1 == e12.nodeType) {
        let i12 = e12, n12 = window.getComputedStyle(i12);
        if ((i12.scrollHeight > i12.clientHeight || i12.scrollWidth > i12.clientWidth) && "visible" != n12.overflow) {
          let n13 = i12.getBoundingClientRect();
          o11 = Math.max(o11, n13.left), r11 = Math.min(r11, n13.right), l11 = Math.max(l11, n13.top), h11 = e12 == t54.parentNode ? n13.bottom : Math.min(h11, n13.bottom);
        }
        e12 = "absolute" == n12.position || "fixed" == n12.position ? i12.offsetParent : i12.parentNode;
      } else if (11 == e12.nodeType) e12 = e12.host;
      else break;
      return { left: o11 - i11.left, right: Math.max(o11, r11) - i11.left, top: l11 - (i11.top + e11), bottom: Math.max(l11, h11) - (i11.top + e11) };
    })(e10, this.paddingTop), p10 = g10.top - this.pixelViewport.top, m2 = g10.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g10;
    let v2 = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v2 != this.inView && (this.inView = v2, v2 && (h10 = true)), !this.inView && !this.scrollTarget) return 0;
    let w2 = l10.width;
    if ((this.contentDOMWidth != w2 || this.editorHeight != t53.scrollDOM.clientHeight) && (this.contentDOMWidth = l10.width, this.editorHeight = t53.scrollDOM.clientHeight, a10 |= 8), h10) {
      let e11 = t53.docView.measureVisibleLineHeights(this.viewport);
      if (n10.mustRefreshForHeights(e11) && (r10 = true), r10 || n10.lineWrapping && Math.abs(w2 - this.contentDOMWidth) > n10.charWidth) {
        let { lineHeight: i11, charWidth: s10, textHeight: l11 } = t53.docView.measureTextSize();
        (r10 = i11 > 0 && n10.refresh(o10, i11, s10, l11, w2 / s10, e11)) && (t53.docView.minWidth = 0, a10 |= 8);
      }
      for (let i11 of (p10 > 0 && m2 > 0 ? c10 = Math.max(p10, m2) : p10 < 0 && m2 < 0 && (c10 = Math.min(p10, m2)), n10.heightChanged = false, this.viewports)) {
        let o11 = i11.from == this.viewport.from ? e11 : t53.docView.measureVisibleLineHeights(i11);
        this.heightMap = (r10 ? nM.empty().applyChanges(this.stateDeco, s.empty, this.heightOracle, [new iK(0, 0, 0, t53.state.doc.length)]) : this.heightMap).updateHeight(n10, 0, r10, new nx(i11.from, o11));
      }
      n10.heightChanged && (a10 |= 2);
    }
    let b2 = !this.viewportIsAppropriate(this.viewport, c10) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return b2 && (2 & a10 && (a10 |= this.updateScaler()), this.viewport = this.getViewport(c10, this.scrollTarget), a10 |= this.updateForViewport()), (2 & a10 || b2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r10 ? [] : this.lineGaps, t53)), a10 |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t53.docView.enforceCursorAssoc()), a10;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t53, e10) {
    let i10 = 0.5 - Math.max(-0.5, Math.min(0.5, t53 / 1e3 / 2)), n10 = this.heightMap, s10 = this.heightOracle, { visibleTop: o10, visibleBottom: r10 } = this, l10 = new nN(n10.lineAt(o10 - 1e3 * i10, nk.ByHeight, s10, 0, 0).from, n10.lineAt(r10 + (1 - i10) * 1e3, nk.ByHeight, s10, 0, 0).to);
    if (e10) {
      let { head: t54 } = e10.range;
      if (t54 < l10.from || t54 > l10.to) {
        let i11 = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), o11 = n10.lineAt(t54, nk.ByPos, s10, 0, 0), r11;
        r11 = "center" == e10.y ? (o11.top + o11.bottom) / 2 - i11 / 2 : "start" == e10.y || "nearest" == e10.y && t54 < l10.from ? o11.top : o11.bottom - i11, l10 = new nN(n10.lineAt(r11 - 500, nk.ByHeight, s10, 0, 0).from, n10.lineAt(r11 + i11 + 500, nk.ByHeight, s10, 0, 0).to);
      }
    }
    return l10;
  }
  mapViewport(t53, e10) {
    let i10 = e10.mapPos(t53.from, -1), n10 = e10.mapPos(t53.to, 1);
    return new nN(this.heightMap.lineAt(i10, nk.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n10, nk.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate(t53) {
    let { from: e10, to: i10 } = t53, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (!this.inView) return true;
    let { top: s10 } = this.heightMap.lineAt(e10, nk.ByPos, this.heightOracle, 0, 0), { bottom: o10 } = this.heightMap.lineAt(i10, nk.ByPos, this.heightOracle, 0, 0), { visibleTop: r10, visibleBottom: l10 } = this;
    return (0 == e10 || s10 <= r10 - Math.max(10, Math.min(-n10, 250))) && (i10 == this.state.doc.length || o10 >= l10 + Math.max(10, Math.min(n10, 250))) && s10 > r10 - 2e3 && o10 < l10 + 2e3;
  }
  mapLineGaps(t53, e10) {
    if (!t53.length || e10.empty) return t53;
    let i10 = [];
    for (let n10 of t53) e10.touchesRange(n10.from, n10.to) || i10.push(new nR(e10.mapPos(n10.from), e10.mapPos(n10.to), n10.size));
    return i10;
  }
  ensureLineGaps(t53, e10) {
    let i10 = this.heightOracle.lineWrapping, n10 = i10 ? 1e4 : 2e3, s10 = n10 >> 1, o10 = n10 << 1;
    if (this.defaultTextDirection != e9.LTR && !i10) return [];
    let r10 = [], l10 = (n11, o11, h11, a10) => {
      if (o11 - n11 < s10) return;
      let c10 = this.state.selection.main, d10 = [c10.from];
      for (let t54 of (c10.empty || d10.push(c10.to), d10)) if (t54 > n11 && t54 < o11) {
        l10(n11, t54 - 10, h11, a10), l10(t54 + 10, o11, h11, a10);
        return;
      }
      let u10 = function(t54, e11) {
        for (let i11 of t54) if (e11(i11)) return i11;
      }(t53, (t54) => t54.from >= h11.from && t54.to <= h11.to && Math.abs(t54.from - n11) < s10 && Math.abs(t54.to - o11) < s10 && !d10.some((e11) => t54.from < e11 && t54.to > e11));
      if (!u10) {
        if (o11 < h11.to && e10 && i10 && e10.visibleRanges.some((t54) => t54.from <= o11 && t54.to >= o11)) {
          let t54 = e10.moveToLineBoundary($.cursor(o11), false, true).head;
          t54 > n11 && (o11 = t54);
        }
        u10 = new nR(n11, o11, this.gapSize(h11, n11, o11, a10));
      }
      r10.push(u10);
    }, h10 = (t54) => {
      var e11, s11, r11;
      let h11, a10, c10, d10, u10;
      if (t54.length < o10 || t54.type != eJ.Text) return;
      let f10 = (e11 = t54.from, s11 = t54.to, r11 = this.stateDeco, c10 = [], d10 = e11, u10 = 0, tV.spans(r11, e11, s11, { span() {
      }, point(t55, e12) {
        t55 > d10 && (c10.push({ from: d10, to: t55 }), u10 += t55 - d10), d10 = e12;
      } }, 20), d10 < s11 && (c10.push({ from: d10, to: s11 }), u10 += s11 - d10), { total: u10, ranges: c10 });
      if (f10.total < o10) return;
      let g10 = this.scrollTarget ? this.scrollTarget.range.head : null;
      if (i10) {
        let e12, i11, s12 = n10 / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        if (null != g10) {
          let n11 = nV(f10, g10), o11 = ((this.visibleBottom - this.visibleTop) / 2 + s12) / t54.height;
          e12 = n11 - o11, i11 = n11 + o11;
        } else e12 = (this.visibleTop - t54.top - s12) / t54.height, i11 = (this.visibleBottom - t54.top + s12) / t54.height;
        h11 = nH(f10, e12), a10 = nH(f10, i11);
      } else {
        let t55, e12, i11 = f10.total * this.heightOracle.charWidth, s12 = n10 * this.heightOracle.charWidth;
        if (null != g10) {
          let n11 = nV(f10, g10), o11 = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + s12) / i11;
          t55 = n11 - o11, e12 = n11 + o11;
        } else t55 = (this.pixelViewport.left - s12) / i11, e12 = (this.pixelViewport.right + s12) / i11;
        h11 = nH(f10, t55), a10 = nH(f10, e12);
      }
      h11 > t54.from && l10(t54.from, h11, t54, f10), a10 < t54.to && l10(a10, t54.to, t54, f10);
    };
    for (let t54 of this.viewportLines) Array.isArray(t54.type) ? t54.type.forEach(h10) : h10(t54);
    return r10;
  }
  gapSize(t53, e10, i10, n10) {
    let s10 = nV(n10, i10) - nV(n10, e10);
    return this.heightOracle.lineWrapping ? t53.height * s10 : n10.total * this.heightOracle.charWidth * s10;
  }
  updateLineGaps(t53) {
    nR.same(t53, this.lineGaps) || (this.lineGaps = t53, this.lineGapDeco = eQ.set(t53.map((t54) => t54.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let t53 = this.stateDeco;
    this.lineGaps.length && (t53 = t53.concat(this.lineGapDeco));
    let e10 = [];
    tV.spans(t53, this.viewport.from, this.viewport.to, { span(t54, i11) {
      e10.push({ from: t54, to: i11 });
    }, point() {
    } }, 20);
    let i10 = e10.length != this.visibleRanges.length || this.visibleRanges.some((t54, i11) => t54.from != e10[i11].from || t54.to != e10[i11].to);
    return this.visibleRanges = e10, i10 ? 4 : 0;
  }
  lineBlockAt(t53) {
    return t53 >= this.viewport.from && t53 <= this.viewport.to && this.viewportLines.find((e10) => e10.from <= t53 && e10.to >= t53) || nW(this.heightMap.lineAt(t53, nk.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t53) {
    return t53 >= this.viewportLines[0].top && t53 <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e10) => e10.top <= t53 && e10.bottom >= t53) || nW(this.heightMap.lineAt(this.scaler.fromDOM(t53), nk.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t53) {
    let e10 = this.lineBlockAtHeight(t53 + 8);
    return e10.from >= this.viewport.from || this.viewportLines[0].top - t53 > 200 ? e10 : this.viewportLines[0];
  }
  elementAtHeight(t53) {
    return nW(this.heightMap.blockAt(this.scaler.fromDOM(t53), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}, nN = class {
  constructor(t53, e10) {
    this.from = t53, this.to = e10;
  }
};
function nH(t53, e10) {
  let { total: i10, ranges: n10 } = t53;
  if (e10 <= 0) return n10[0].from;
  if (e10 >= 1) return n10[n10.length - 1].to;
  let s10 = Math.floor(i10 * e10);
  for (let t54 = 0; ; t54++) {
    let { from: e11, to: i11 } = n10[t54], o10 = i11 - e11;
    if (s10 <= o10) return e11 + s10;
    s10 -= o10;
  }
}
function nV(t53, e10) {
  let i10 = 0;
  for (let { from: n10, to: s10 } of t53.ranges) {
    if (e10 <= s10) {
      i10 += e10 - n10;
      break;
    }
    i10 += s10 - n10;
  }
  return i10 / t53.total;
}
let nI = { toDOM: (t53) => t53, fromDOM: (t53) => t53, scale: 1, eq(t53) {
  return t53 == this;
} }, nF = class t26 {
  constructor(t53, e10, i10) {
    let n10 = 0, s10 = 0, o10 = 0;
    for (let r10 of (this.viewports = i10.map((i11) => {
      let { from: s11, to: o11 } = i11, r11 = e10.lineAt(s11, nk.ByPos, t53, 0, 0).top, l10 = e10.lineAt(o11, nk.ByPos, t53, 0, 0).bottom;
      return n10 += l10 - r11, { from: s11, to: o11, top: r11, bottom: l10, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n10) / (e10.height - n10), this.viewports)) r10.domTop = o10 + (r10.top - s10) * this.scale, o10 = r10.domBottom = r10.domTop + (r10.bottom - r10.top), s10 = r10.bottom;
  }
  toDOM(t53) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t53 < s10.top) return n10 + (t53 - i10) * this.scale;
      if (t53 <= s10.bottom) return s10.domTop + (t53 - s10.top);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
  fromDOM(t53) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t53 < s10.domTop) return i10 + (t53 - n10) / this.scale;
      if (t53 <= s10.domBottom) return s10.top + (t53 - s10.domTop);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
  eq(e10) {
    return e10 instanceof t26 && this.scale == e10.scale && this.viewports.length == e10.viewports.length && this.viewports.every((t53, i10) => t53.from == e10.viewports[i10].from && t53.to == e10.viewports[i10].to);
  }
};
function nW(t53, e10) {
  if (1 == e10.scale) return t53;
  let i10 = e10.toDOM(t53.top), n10 = e10.toDOM(t53.bottom);
  return new nS(t53.from, t53.length, i10, n10 - i10, Array.isArray(t53._content) ? t53._content.map((t54) => nW(t54, e10)) : t53._content);
}
let nz = J.define({ combine: (t53) => t53.join(" ") }), nK = J.define({ combine: (t53) => t53.indexOf(true) > -1 }), nq = t0.newName(), n_ = t0.newName(), nj = t0.newName(), nG = { "&light": "." + n_, "&dark": "." + nj };
function nU(t53, e10, i10) {
  return new t0(e10, { finish: (e11) => /&/.test(e11) ? e11.replace(/&\w*/, (e12) => {
    if ("&" == e12) return t53;
    if (!i10 || !i10[e12]) throw RangeError(`Unsupported selector: ${e12}`);
    return i10[e12];
  }) : t53 + " " + e11 });
}
let n$ = nU("." + nq, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0 }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#444" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" }, ".cm-highlightSpace:before": { content: "attr(data-display)", position: "absolute", pointerEvents: "none", color: "#888" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, nG), nY = class {
  constructor(t53, e10) {
    this.points = t53, this.text = "", this.lineSeparator = e10.facet(tB.lineSeparator);
  }
  append(t53) {
    this.text += t53;
  }
  lineBreak() {
    this.text += "￿";
  }
  readRange(t53, e10) {
    if (!t53) return this;
    let i10 = t53.parentNode;
    for (let n10 = t53; ; ) {
      this.findPointBefore(i10, n10);
      let t54 = this.text.length;
      this.readNode(n10);
      let s10 = n10.nextSibling;
      if (s10 == e10) break;
      let o10 = ex.get(n10), r10 = ex.get(s10);
      (o10 && r10 ? o10.breakAfter : (o10 ? o10.breakAfter : eo(n10)) || eo(s10) && ("BR" != n10.nodeName || n10.cmIgnore) && this.text.length > t54) && this.lineBreak(), n10 = s10;
    }
    return this.findPointBefore(i10, e10), this;
  }
  readTextNode(t53) {
    let e10 = t53.nodeValue;
    for (let i10 of this.points) i10.node == t53 && (i10.pos = this.text.length + Math.min(i10.offset, e10.length));
    for (let i10 = 0, n10 = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s10 = -1, o10 = 1, r10;
      if (this.lineSeparator ? (s10 = e10.indexOf(this.lineSeparator, i10), o10 = this.lineSeparator.length) : (r10 = n10.exec(e10)) && (s10 = r10.index, o10 = r10[0].length), this.append(e10.slice(i10, s10 < 0 ? e10.length : s10)), s10 < 0) break;
      if (this.lineBreak(), o10 > 1) for (let e11 of this.points) e11.node == t53 && e11.pos > this.text.length && (e11.pos -= o10 - 1);
      i10 = s10 + o10;
    }
  }
  readNode(t53) {
    if (t53.cmIgnore) return;
    let e10 = ex.get(t53), i10 = e10 && e10.overrideDOMText;
    if (null != i10) {
      this.findPointInside(t53, i10.length);
      for (let t54 = i10.iter(); !t54.next().done; ) t54.lineBreak ? this.lineBreak() : this.append(t54.value);
    } else 3 == t53.nodeType ? this.readTextNode(t53) : "BR" == t53.nodeName ? t53.nextSibling && this.lineBreak() : 1 == t53.nodeType && this.readRange(t53.firstChild, null);
  }
  findPointBefore(t53, e10) {
    for (let i10 of this.points) i10.node == t53 && t53.childNodes[i10.offset] == e10 && (i10.pos = this.text.length);
  }
  findPointInside(t53, e10) {
    for (let i10 of this.points) (3 == t53.nodeType ? i10.node == t53 : t53.contains(i10.node)) && (i10.pos = this.text.length + (!function(t54, e11, i11) {
      for (; ; ) {
        if (!e11 || i11 < el(e11)) return false;
        if (e11 == t54) return true;
        i11 = es(e11) + 1, e11 = e11.parentNode;
      }
    }(t53, i10.node, i10.offset) ? 0 : e10));
  }
}, nX = class {
  constructor(t53, e10) {
    this.node = t53, this.offset = e10, this.pos = -1;
  }
}, nJ = class {
  constructor(t53, e10, i10, n10) {
    this.typeOver = n10, this.bounds = null, this.text = "", this.domChanged = e10 > -1;
    let { impreciseHead: s10, impreciseAnchor: o10 } = t53.docView;
    if (t53.state.readOnly && e10 > -1) this.newSel = null;
    else if (e10 > -1 && (this.bounds = t53.docView.domBoundsAround(e10, i10, 0))) {
      let e11 = s10 || o10 ? [] : function(t54) {
        let e12 = [];
        if (t54.root.activeElement != t54.contentDOM) return e12;
        let { anchorNode: i12, anchorOffset: n11, focusNode: s11, focusOffset: o11 } = t54.observer.selectionRange;
        return i12 && (e12.push(new nX(i12, n11)), (s11 != i12 || o11 != n11) && e12.push(new nX(s11, o11))), e12;
      }(t53), i11 = new nY(e11, t53.state);
      i11.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = i11.text, this.newSel = function(t54, e12) {
        if (0 == t54.length) return null;
        let i12 = t54[0].pos, n11 = 2 == t54.length ? t54[1].pos : i12;
        return i12 > -1 && n11 > -1 ? $.single(i12 + e12, n11 + e12) : null;
      }(e11, this.bounds.from);
    } else {
      let e11 = t53.observer.selectionRange, i11 = s10 && s10.node == e11.focusNode && s10.offset == e11.focusOffset || !et(t53.contentDOM, e11.focusNode) ? t53.state.selection.main.head : t53.docView.posFromDOM(e11.focusNode, e11.focusOffset), n11 = o10 && o10.node == e11.anchorNode && o10.offset == e11.anchorOffset || !et(t53.contentDOM, e11.anchorNode) ? t53.state.selection.main.anchor : t53.docView.posFromDOM(e11.anchorNode, e11.anchorOffset), r10 = t53.viewport;
      if ((eV.ios || eV.chrome) && t53.state.selection.main.empty && i11 != n11 && (r10.from > 0 || r10.to < t53.state.doc.length)) {
        let e12 = Math.min(i11, n11), s11 = Math.max(i11, n11), o11 = r10.from - e12, l10 = r10.to - s11;
        (0 == o11 || 1 == o11 || 0 == e12) && (0 == l10 || -1 == l10 || s11 == t53.state.doc.length) && (i11 = 0, n11 = t53.state.doc.length);
      }
      this.newSel = $.single(n11, i11);
    }
  }
};
function nQ(t53, e10) {
  let i10;
  let { newSel: n10 } = e10, o10 = t53.state.selection.main, r10 = t53.inputState.lastKeyTime > Date.now() - 100 ? t53.inputState.lastKeyCode : -1;
  if (e10.bounds) {
    let { from: n11, to: l10 } = e10.bounds, h10 = o10.from, a10 = null;
    (8 === r10 || eV.android && e10.text.length < l10 - n11) && (h10 = o10.to, a10 = "end");
    let c10 = function(t54, e11, i11, n12) {
      let s10 = Math.min(t54.length, e11.length), o11 = 0;
      for (; o11 < s10 && t54.charCodeAt(o11) == e11.charCodeAt(o11); ) o11++;
      if (o11 == s10 && t54.length == e11.length) return null;
      let r11 = t54.length, l11 = e11.length;
      for (; r11 > 0 && l11 > 0 && t54.charCodeAt(r11 - 1) == e11.charCodeAt(l11 - 1); ) r11--, l11--;
      if ("end" == n12) {
        let t55 = Math.max(0, o11 - Math.min(r11, l11));
        i11 -= r11 + t55 - o11;
      }
      if (r11 < o11 && t54.length < e11.length) {
        let t55 = i11 <= o11 && i11 >= r11 ? o11 - i11 : 0;
        o11 -= t55, l11 = o11 + (l11 - r11), r11 = o11;
      } else if (l11 < o11) {
        let t55 = i11 <= o11 && i11 >= l11 ? o11 - i11 : 0;
        o11 -= t55, r11 = o11 + (r11 - l11), l11 = o11;
      }
      return { from: o11, toA: r11, toB: l11 };
    }(t53.state.doc.sliceString(n11, l10, "￿"), e10.text, h10 - n11, a10);
    c10 && (eV.chrome && 13 == r10 && c10.toB == c10.from + 2 && "￿￿" == e10.text.slice(c10.from, c10.toB) && c10.toB--, i10 = { from: n11 + c10.from, to: n11 + c10.toA, insert: s.of(e10.text.slice(c10.from, c10.toB).split("￿")) });
  } else n10 && (!t53.hasFocus && t53.state.facet(iD) || n10.main.eq(o10)) && (n10 = null);
  if (!i10 && !n10) return false;
  if (!i10 && e10.typeOver && !o10.empty && n10 && n10.main.empty ? i10 = { from: o10.from, to: o10.to, insert: t53.state.doc.slice(o10.from, o10.to) } : i10 && i10.from >= o10.from && i10.to <= o10.to && (i10.from != o10.from || i10.to != o10.to) && o10.to - o10.from - (i10.to - i10.from) <= 4 ? i10 = { from: o10.from, to: o10.to, insert: t53.state.doc.slice(o10.from, i10.from).append(i10.insert).append(t53.state.doc.slice(i10.to, o10.to)) } : (eV.mac || eV.android) && i10 && i10.from == i10.to && i10.from == o10.head - 1 && /^\. ?$/.test(i10.insert.toString()) && "off" == t53.contentDOM.getAttribute("autocorrect") ? (n10 && 2 == i10.insert.length && (n10 = $.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: o10.from, to: o10.to, insert: s.of([" "]) }) : eV.chrome && i10 && i10.from == i10.to && i10.from == o10.head && "\n " == i10.insert.toString() && t53.lineWrapping && (n10 && (n10 = $.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: o10.from, to: o10.to, insert: s.of([" "]) }), i10) return nZ(t53, i10, n10, r10);
  if (!n10 || n10.main.eq(o10)) return false;
  {
    let e11 = false, i11 = "select";
    return t53.inputState.lastSelectionTime > Date.now() - 50 && ("select" == t53.inputState.lastSelectionOrigin && (e11 = true), i11 = t53.inputState.lastSelectionOrigin), t53.dispatch({ selection: n10, scrollIntoView: e11, userEvent: i11 }), true;
  }
}
function nZ(t53, e10, i10) {
  let n10, s10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
  if (eV.ios && t53.inputState.flushIOSKey(e10)) return true;
  let o10 = t53.state.selection.main;
  if (eV.android && (e10.to == o10.to && (e10.from == o10.from || e10.from == o10.from - 1 && " " == t53.state.sliceDoc(e10.from, o10.from)) && 1 == e10.insert.length && 2 == e10.insert.lines && eg(t53.contentDOM, "Enter", 13) || (e10.from == o10.from - 1 && e10.to == o10.to && 0 == e10.insert.length || 8 == s10 && e10.insert.length < e10.to - e10.from && e10.to > o10.head) && eg(t53.contentDOM, "Backspace", 8) || e10.from == o10.from && e10.to == o10.to + 1 && 0 == e10.insert.length && eg(t53.contentDOM, "Delete", 46))) return true;
  let r10 = e10.insert.toString();
  t53.inputState.composing >= 0 && t53.inputState.composing++;
  let l10 = () => n10 || (n10 = function(t54, e11, i11) {
    let n11, s11 = t54.state, o11 = s11.selection.main;
    if (e11.from >= o11.from && e11.to <= o11.to && e11.to - e11.from >= (o11.to - o11.from) / 3 && (!i11 || i11.main.empty && i11.main.from == e11.from + e11.insert.length) && t54.inputState.composing < 0) {
      let i12 = o11.from < e11.from ? s11.sliceDoc(o11.from, e11.from) : "", r12 = o11.to > e11.to ? s11.sliceDoc(e11.to, o11.to) : "";
      n11 = s11.replaceSelection(t54.state.toText(i12 + e11.insert.sliceString(0, void 0, t54.state.lineBreak) + r12));
    } else {
      let r12 = s11.changes(e11), l11 = i11 && i11.main.to <= r12.newLength ? i11.main : void 0;
      if (s11.selection.ranges.length > 1 && t54.inputState.composing >= 0 && e11.to <= o11.to && e11.to >= o11.to - 10) {
        let h10 = t54.state.sliceDoc(e11.from, e11.to), a10, c10 = i11 && iG(t54, i11.main.head);
        if (c10) {
          let t55 = e11.insert.length - (e11.to - e11.from);
          a10 = { from: c10.from, to: c10.to - t55 };
        } else a10 = t54.state.doc.lineAt(o11.head);
        let d10 = o11.to - e11.to, u10 = o11.to - o11.from;
        n11 = s11.changeByRange((i12) => {
          if (i12.from == o11.from && i12.to == o11.to) return { changes: r12, range: l11 || i12.map(r12) };
          let n12 = i12.to - d10, c11 = n12 - h10.length;
          if (i12.to - i12.from != u10 || t54.state.sliceDoc(c11, n12) != h10 || i12.to >= a10.from && i12.from <= a10.to) return { range: i12 };
          let f10 = s11.changes({ from: c11, to: n12, insert: e11.insert }), g10 = i12.to - o11.to;
          return { changes: f10, range: l11 ? $.range(Math.max(0, l11.anchor + g10), Math.max(0, l11.head + g10)) : i12.map(f10) };
        });
      } else n11 = { changes: r12, selection: l11 && s11.selection.replaceRange(l11) };
    }
    let r11 = "input.type";
    return (t54.composing || t54.inputState.compositionPendingChange && t54.inputState.compositionEndedAt > Date.now() - 50) && (t54.inputState.compositionPendingChange = false, r11 += ".compose", t54.inputState.compositionFirstChange && (r11 += ".start", t54.inputState.compositionFirstChange = false)), s11.update(n11, { userEvent: r11, scrollIntoView: true });
  }(t53, e10, i10));
  return t53.state.facet(iw).some((i11) => i11(t53, e10.from, e10.to, r10, l10)) || t53.dispatch(l10()), true;
}
let n0 = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, n1 = eV.ie && eV.ie_version <= 11, n2 = class {
  constructor(t53) {
    this.view = t53, this.active = false, this.editContext = null, this.selectionRange = new ec(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t53.contentDOM, this.observer = new MutationObserver((e10) => {
      for (let t54 of e10) this.queue.push(t54);
      (eV.ie && eV.ie_version <= 11 || eV.ios && t53.composing) && e10.some((t54) => "childList" == t54.type && t54.removedNodes.length || "characterData" == t54.type && t54.oldValue.length > t54.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && false !== t53.constructor.EDIT_CONTEXT && !(eV.chrome && eV.chrome_version < 126) && (this.editContext = new n4(t53), t53.state.facet(iD) && (t53.contentDOM.editContext = this.editContext.editContext)), n1 && (this.onCharData = (t54) => {
      this.queue.push({ target: t54.target, type: "characterData", oldValue: t54.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver(() => {
      var t54;
      (null === (t54 = this.view.docView) || void 0 === t54 ? void 0 : t54.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t53.scrollDOM)), this.addWindowListeners(this.win = t53.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((t54) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t54.length > 0 && t54[t54.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t54) => {
      t54.length > 0 && t54[t54.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t53) {
    this.view.inputState.runHandlers("scroll", t53), this.intersecting && this.view.measure();
  }
  onScroll(t53) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t53);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t53) {
    ("change" != t53.type || t53.matches) && (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t53) {
    if (this.gapIntersection && (t53.length != this.gaps.length || this.gaps.some((e10, i10) => e10 != t53[i10]))) {
      for (let e10 of (this.gapIntersection.disconnect(), t53)) this.gapIntersection.observe(e10);
      this.gaps = t53;
    }
  }
  onSelectionChange(t53) {
    let e10 = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i10 } = this, n10 = this.selectionRange;
    if (i10.state.facet(iD) ? i10.root.activeElement != this.dom : !ee(i10.dom, n10)) return;
    let s10 = n10.anchorNode && i10.docView.nearest(n10.anchorNode);
    if (s10 && s10.ignoreEvent(t53)) {
      e10 || (this.selectionChanged = false);
      return;
    }
    (eV.ie && eV.ie_version <= 11 || eV.android && eV.chrome) && !i10.state.selection.main.empty && n10.focusNode && en(n10.focusNode, n10.focusOffset, n10.anchorNode, n10.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: t53 } = this, e10 = t7(t53.root);
    if (!e10) return false;
    let i10 = eV.safari && 11 == t53.root.nodeType && function(t54) {
      let e11 = t54.activeElement;
      for (; e11 && e11.shadowRoot; ) e11 = e11.shadowRoot.activeElement;
      return e11;
    }(this.dom.ownerDocument) == this.dom && function(t54, e11) {
      if (e11.getComposedRanges) {
        let i12 = e11.getComposedRanges(t54.root)[0];
        if (i12) return n3(t54, i12);
      }
      let i11 = null;
      function n11(t55) {
        t55.preventDefault(), t55.stopImmediatePropagation(), i11 = t55.getTargetRanges()[0];
      }
      return t54.contentDOM.addEventListener("beforeinput", n11, true), t54.dom.ownerDocument.execCommand("indent"), t54.contentDOM.removeEventListener("beforeinput", n11, true), i11 ? n3(t54, i11) : null;
    }(this.view, e10) || e10;
    if (!i10 || this.selectionRange.eq(i10)) return false;
    let n10 = ee(this.dom, i10);
    return n10 && !this.selectionChanged && t53.inputState.lastFocusTime > Date.now() - 200 && t53.inputState.lastTouchTime < Date.now() - 300 && function(t54, e11) {
      let i11 = e11.focusNode, n11 = e11.focusOffset;
      if (!i11 || e11.anchorNode != i11 || e11.anchorOffset != n11) return false;
      for (n11 = Math.min(n11, el(i11)); ; ) if (n11) {
        if (1 != i11.nodeType) return false;
        let t55 = i11.childNodes[n11 - 1];
        "false" == t55.contentEditable ? n11-- : n11 = el(i11 = t55);
      } else {
        if (i11 == t54) return true;
        n11 = es(i11), i11 = i11.parentNode;
      }
    }(this.dom, i10) ? (this.view.inputState.lastFocusTime = 0, t53.docView.updateSelection(), false) : (this.selectionRange.setRange(i10), n10 && (this.selectionChanged = true), true);
  }
  setSelectionRange(t53, e10) {
    this.selectionRange.set(t53.node, t53.offset, e10.node, e10.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t53 = 0, e10 = null;
    for (let i10 = this.dom; i10; ) if (1 == i10.nodeType) !e10 && t53 < this.scrollTargets.length && this.scrollTargets[t53] == i10 ? t53++ : e10 || (e10 = this.scrollTargets.slice(0, t53)), e10 && e10.push(i10), i10 = i10.assignedSlot || i10.parentNode;
    else if (11 == i10.nodeType) i10 = i10.host;
    else break;
    if (t53 < this.scrollTargets.length && !e10 && (e10 = this.scrollTargets.slice(0, t53)), e10) {
      for (let t54 of this.scrollTargets) t54.removeEventListener("scroll", this.onScroll);
      for (let t54 of this.scrollTargets = e10) t54.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t53) {
    if (!this.active) return t53();
    try {
      return this.stop(), t53();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, n0), n1 && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), n1 && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(t53, e10) {
    var i10;
    this.delayedAndroidKey || (this.flushingAndroidKey = this.view.win.requestAnimationFrame(() => {
      let t54 = this.delayedAndroidKey;
      t54 && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = t54.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && t54.force && eg(this.dom, t54.key, t54.keyCode));
    })), this.delayedAndroidKey && "Enter" != t53 || (this.delayedAndroidKey = { key: t53, keyCode: e10, force: this.lastChange < Date.now() - 50 || !!(null === (i10 = this.delayedAndroidKey) || void 0 === i10 ? void 0 : i10.force) });
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
    for (let t53 of this.observer.takeRecords()) this.queue.push(t53);
    return this.queue;
  }
  processRecords() {
    let t53 = this.pendingRecords();
    t53.length && (this.queue = []);
    let e10 = -1, i10 = -1, n10 = false;
    for (let s10 of t53) {
      let t54 = this.readMutation(s10);
      t54 && (t54.typeOver && (n10 = true), -1 == e10 ? { from: e10, to: i10 } = t54 : (e10 = Math.min(t54.from, e10), i10 = Math.max(t54.to, i10)));
    }
    return { from: e10, to: i10, typeOver: n10 };
  }
  readChange() {
    let { from: t53, to: e10, typeOver: i10 } = this.processRecords(), n10 = this.selectionChanged && ee(this.dom, this.selectionRange);
    if (t53 < 0 && !n10) return null;
    t53 > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let s10 = new nJ(this.view, t53, e10, i10);
    return this.view.docView.domChanged = { newSel: s10.newSel ? s10.newSel.main : null }, s10;
  }
  flush() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    t53 && this.readSelectionRange();
    let e10 = this.readChange();
    if (!e10) return this.view.requestMeasure(), false;
    let i10 = this.view.state, n10 = nQ(this.view, e10);
    return this.view.state == i10 && (e10.domChanged || e10.newSel && !e10.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n10;
  }
  readMutation(t53) {
    let e10 = this.view.docView.nearest(t53.target);
    if (!e10 || e10.ignoreMutation(t53)) return null;
    if (e10.markDirty("attributes" == t53.type), "attributes" == t53.type && (e10.flags |= 4), "childList" == t53.type) {
      let i10 = n8(e10, t53.previousSibling || t53.target.previousSibling, -1), n10 = n8(e10, t53.nextSibling || t53.target.nextSibling, 1);
      return { from: i10 ? e10.posAfter(i10) : e10.posAtStart, to: n10 ? e10.posBefore(n10) : e10.posAtEnd, typeOver: false };
    }
    return "characterData" == t53.type ? { from: e10.posAtStart, to: e10.posAtEnd, typeOver: t53.target.nodeValue == t53.oldValue } : null;
  }
  setWindow(t53) {
    t53 != this.win && (this.removeWindowListeners(this.win), this.win = t53, this.addWindowListeners(this.win));
  }
  addWindowListeners(t53) {
    t53.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener("change", this.onPrint) : t53.addEventListener("beforeprint", this.onPrint), t53.addEventListener("scroll", this.onScroll), t53.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t53) {
    t53.removeEventListener("scroll", this.onScroll), t53.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener("change", this.onPrint) : t53.removeEventListener("beforeprint", this.onPrint), t53.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t53) {
    this.editContext && (this.editContext.update(t53), t53.startState.facet(iD) != t53.state.facet(iD) && (t53.view.contentDOM.editContext = t53.state.facet(iD) ? this.editContext.editContext : null));
  }
  destroy() {
    var t53, e10, i10;
    for (let n10 of (this.stop(), null === (t53 = this.intersection) || void 0 === t53 || t53.disconnect(), null === (e10 = this.gapIntersection) || void 0 === e10 || e10.disconnect(), null === (i10 = this.resizeScroll) || void 0 === i10 || i10.disconnect(), this.scrollTargets)) n10.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
};
function n8(t53, e10, i10) {
  for (; e10; ) {
    let n10 = ex.get(e10);
    if (n10 && n10.parent == t53) return n10;
    let s10 = e10.parentNode;
    e10 = s10 != t53.dom ? s10 : i10 > 0 ? e10.nextSibling : e10.previousSibling;
  }
  return null;
}
function n3(t53, e10) {
  let i10 = e10.startContainer, n10 = e10.startOffset, s10 = e10.endContainer, o10 = e10.endOffset, r10 = t53.docView.domAtPos(t53.state.selection.main.anchor);
  return en(r10.node, r10.offset, s10, o10) && ([i10, n10, s10, o10] = [s10, o10, i10, n10]), { anchorNode: i10, anchorOffset: n10, focusNode: s10, focusOffset: o10 };
}
class n4 {
  constructor(t53) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.resetRange(t53.state);
    let e10 = this.editContext = new window.EditContext({ text: t53.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t53.state.selection.main.anchor))), selectionEnd: this.toContextPos(t53.state.selection.main.head) });
    for (let i10 in this.handlers.textupdate = (e11) => {
      let { anchor: i11 } = t53.state.selection.main, n10 = { from: this.toEditorPos(e11.updateRangeStart), to: this.toEditorPos(e11.updateRangeEnd), insert: s.of(e11.text.split("\n")) };
      n10.from == this.from && i11 < this.from ? n10.from = i11 : n10.to == this.to && i11 > this.to && (n10.to = i11), (n10.from != n10.to || n10.insert.length) && (this.pendingContextChange = n10, nZ(t53, n10, $.single(this.toEditorPos(e11.selectionStart), this.toEditorPos(e11.selectionEnd))), this.pendingContextChange && (this.revertPending(t53.state), this.setSelection(t53.state)));
    }, this.handlers.characterboundsupdate = (i11) => {
      let n10 = [], s10 = null;
      for (let e11 = this.toEditorPos(i11.rangeStart), o10 = this.toEditorPos(i11.rangeEnd); e11 < o10; e11++) {
        let i12 = t53.coordsForChar(e11);
        s10 = i12 && new DOMRect(i12.left, i12.top, i12.right - i12.left, i12.bottom - i12.top) || s10 || new DOMRect(), n10.push(s10);
      }
      e10.updateCharacterBounds(i11.rangeStart, n10);
    }, this.handlers.textformatupdate = (e11) => {
      let i11 = [];
      for (let t54 of e11.getTextFormats()) {
        let e12 = t54.underlineStyle, n10 = t54.underlineThickness;
        if ("None" != e12 && "None" != n10) {
          let s10 = `text-decoration: underline ${"Dashed" == e12 ? "dashed " : "Squiggle" == e12 ? "wavy " : ""}${"Thin" == n10 ? 1 : 2}px`;
          i11.push(eQ.mark({ attributes: { style: s10 } }).range(this.toEditorPos(t54.rangeStart), this.toEditorPos(t54.rangeEnd)));
        }
      }
      t53.dispatch({ effects: iA.of(eQ.set(i11)) });
    }, this.handlers.compositionstart = () => {
      t53.inputState.composing < 0 && (t53.inputState.composing = 0, t53.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      t53.inputState.composing = -1, t53.inputState.compositionFirstChange = null;
    }, this.handlers) e10.addEventListener(i10, this.handlers[i10]);
    this.measureReq = { read: (t54) => {
      this.editContext.updateControlBounds(t54.contentDOM.getBoundingClientRect());
      let e11 = t7(t54.root);
      e11 && e11.rangeCount && this.editContext.updateSelectionBounds(e11.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t53) {
    let e10 = 0, i10 = false, n10 = this.pendingContextChange;
    return t53.changes.iterChanges((s10, o10, r10, l10, h10) => {
      if (i10) return;
      let a10 = h10.length - (o10 - s10);
      if (n10 && o10 >= n10.to) {
        if (n10.from == s10 && n10.to == o10 && n10.insert.eq(h10)) {
          n10 = this.pendingContextChange = null, e10 += a10, this.to += a10;
          return;
        }
        n10 = null, this.revertPending(t53.state);
      }
      if (s10 += e10, (o10 += e10) <= this.from) this.from += a10, this.to += a10;
      else if (s10 < this.to) {
        if (s10 < this.from || o10 > this.to || this.to - this.from + h10.length > 3e4) {
          i10 = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(s10), this.toContextPos(o10), h10.toString()), this.to += a10;
      }
      e10 += a10;
    }), n10 && !i10 && this.revertPending(t53.state), !i10;
  }
  update(t53) {
    let e10 = this.pendingContextChange;
    this.applyEdits(t53) && this.rangeIsValid(t53.state) ? (t53.docChanged || t53.selectionSet || e10) && this.setSelection(t53.state) : (this.pendingContextChange = null, this.resetRange(t53.state), this.editContext.updateText(0, this.editContext.text.length, t53.state.doc.sliceString(this.from, this.to)), this.setSelection(t53.state)), (t53.geometryChanged || t53.docChanged || t53.selectionSet) && t53.view.requestMeasure(this.measureReq);
  }
  resetRange(t53) {
    let { head: e10 } = t53.selection.main;
    this.from = Math.max(0, e10 - 1e4), this.to = Math.min(t53.doc.length, e10 + 1e4);
  }
  revertPending(t53) {
    let e10 = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e10.from), this.toContextPos(e10.from + e10.insert.length), t53.doc.sliceString(e10.from, e10.to));
  }
  setSelection(t53) {
    let { main: e10 } = t53.selection, i10 = this.toContextPos(Math.max(this.from, Math.min(this.to, e10.anchor))), n10 = this.toContextPos(e10.head);
    (this.editContext.selectionStart != i10 || this.editContext.selectionEnd != n10) && this.editContext.updateSelection(i10, n10);
  }
  rangeIsValid(t53) {
    let { head: e10 } = t53.selection.main;
    return !(this.from > 0 && e10 - this.from < 500 || this.to < t53.doc.length && this.to - e10 < 500 || this.to - this.from > 3e4);
  }
  toEditorPos(t53) {
    return t53 + this.from;
  }
  toContextPos(t53) {
    return t53 - this.from;
  }
  destroy() {
    for (let t53 in this.handlers) this.editContext.removeEventListener(t53, this.handlers[t53]);
  }
}
let n5 = class t27 {
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
  constructor(t53 = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t53.parent && t53.parent.appendChild(this.dom);
    let { dispatch: e10 } = t53;
    for (let i10 of (this.dispatchTransactions = t53.dispatchTransactions || e10 && ((t54) => t54.forEach((t55) => e10(t55, this))) || ((t54) => this.update(t54)), this.dispatch = this.dispatch.bind(this), this._root = t53.root || function(t54) {
      for (; t54; ) {
        if (t54 && (9 == t54.nodeType || 11 == t54.nodeType && t54.host)) return t54;
        t54 = t54.assignedSlot || t54.parentNode;
      }
      return null;
    }(t53.parent) || document, this.viewState = new nP(t53.state || tB.create(t53)), t53.scrollTo && t53.scrollTo.is(iM) && (this.viewState.scrollTarget = t53.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(iT).map((t54) => new iB(t54)), this.plugins)) i10.update(this);
    this.observer = new n2(this), this.inputState = new i8(this), this.inputState.ensureHandlers(this.plugins), this.docView = new i_(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure();
  }
  dispatch() {
    for (var t53 = arguments.length, e10 = Array(t53), i10 = 0; i10 < t53; i10++) e10[i10] = arguments[i10];
    let n10 = 1 == e10.length && e10[0] instanceof tM ? e10 : 1 == e10.length && Array.isArray(e10[0]) ? e10[0] : [this.state.update(...e10)];
    this.dispatchTransactions(n10, this);
  }
  update(t53) {
    if (0 != this.updateState) throw Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e10 = false, i10 = false, n10, s10 = this.state;
    for (let e11 of t53) {
      if (e11.startState != s10) throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s10 = e11.state;
    }
    if (this.destroyed) {
      this.viewState.state = s10;
      return;
    }
    let o10 = this.hasFocus, r10 = 0, l10 = null;
    t53.some((t54) => t54.annotation(np)) ? (this.inputState.notifiedFocused = o10, r10 = 1) : o10 == this.inputState.notifiedFocused || (this.inputState.notifiedFocused = o10, (l10 = nm(s10, o10)) || (r10 = 1));
    let h10 = this.observer.delayedAndroidKey, a10 = null;
    if (h10 ? (this.observer.clearDelayedAndroidKey(), ((a10 = this.observer.readChange()) && !this.state.doc.eq(s10.doc) || !this.state.selection.eq(s10.selection)) && (a10 = null)) : this.observer.clear(), s10.facet(tB.phrases) != this.state.facet(tB.phrases)) return this.setState(s10);
    n10 = iq.create(this, s10, t53), n10.flags |= r10;
    let c10 = this.viewState.scrollTarget;
    try {
      for (let e11 of (this.updateState = 2, t53)) {
        if (c10 && (c10 = c10.map(e11.changes)), e11.scrollIntoView) {
          let { main: t54 } = e11.state.selection;
          c10 = new ik(t54.empty ? t54 : $.cursor(t54.head, t54.head > t54.anchor ? -1 : 1));
        }
        for (let t54 of e11.effects) t54.is(iM) && (c10 = t54.value.clip(this.state));
      }
      this.viewState.update(n10, c10), this.bidiCache = n7.update(this.bidiCache, n10.changes), n10.empty || (this.updatePlugins(n10), this.inputState.update(n10)), e10 = this.docView.update(n10), this.state.facet(iz) != this.styleModules && this.mountStyles(), i10 = this.updateAttrs(), this.showAnnouncements(t53), this.docView.updateSelection(e10, t53.some((t54) => t54.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n10.startState.facet(nz) != n10.state.facet(nz) && (this.viewState.mustMeasureContent = true), (e10 || i10 || c10 || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e10 && this.docViewUpdate(), !n10.empty) for (let t54 of this.state.facet(iv)) try {
      t54(n10);
    } catch (t55) {
      iC(this.state, t55, "update listener");
    }
    (l10 || a10) && Promise.resolve().then(() => {
      l10 && this.state == l10.startState && this.dispatch(l10), a10 && !nQ(this, a10) && h10.force && eg(this.contentDOM, h10.key, h10.keyCode);
    });
  }
  setState(t53) {
    if (0 != this.updateState) throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t53;
      return;
    }
    this.updateState = 2;
    let e10 = this.hasFocus;
    try {
      for (let t54 of this.plugins) t54.destroy(this);
      for (let e11 of (this.viewState = new nP(t53), this.plugins = t53.facet(iT).map((t54) => new iB(t54)), this.pluginMap.clear(), this.plugins)) e11.update(this);
      this.docView.destroy(), this.docView = new i_(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e10 && this.focus(), this.requestMeasure();
  }
  updatePlugins(t53) {
    let e10 = t53.startState.facet(iT), i10 = t53.state.facet(iT);
    if (e10 != i10) {
      let n10 = [];
      for (let s10 of i10) {
        let i11 = e10.indexOf(s10);
        if (i11 < 0) n10.push(new iB(s10));
        else {
          let e11 = this.plugins[i11];
          e11.mustUpdate = t53, n10.push(e11);
        }
      }
      for (let e11 of this.plugins) e11.mustUpdate != t53 && e11.destroy(this);
      this.plugins = n10, this.pluginMap.clear();
    } else for (let e11 of this.plugins) e11.mustUpdate = t53;
    for (let t54 = 0; t54 < this.plugins.length; t54++) this.plugins[t54].update(this);
    e10 != i10 && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t53 of this.plugins) {
      let e10 = t53.value;
      if (e10 && e10.docViewUpdate) try {
        e10.docViewUpdate(this);
      } catch (t54) {
        iC(this.state, t54, "doc view update listener");
      }
    }
  }
  measure() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t53 && this.observer.forceFlush();
    let e10 = null, i10 = this.scrollDOM, n10 = i10.scrollTop * this.scaleY, { scrollAnchorPos: s10, scrollAnchorHeight: o10 } = this.viewState;
    Math.abs(n10 - this.viewState.scrollTop) > 1 && (o10 = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let t54 = 0; ; t54++) {
        if (o10 < 0) {
          if (em(i10)) s10 = -1, o10 = this.viewState.heightMap.height;
          else {
            let t55 = this.viewState.scrollAnchorAt(n10);
            s10 = t55.from, o10 = t55.top;
          }
        }
        this.updateState = 1;
        let r10 = this.viewState.measure(this);
        if (!r10 && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
        if (t54 > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let l10 = [];
        4 & r10 || ([this.measureRequests, l10] = [l10, this.measureRequests]);
        let h10 = l10.map((t55) => {
          try {
            return t55.read(this);
          } catch (t56) {
            return iC(this.state, t56), n6;
          }
        }), a10 = iq.create(this, this.state, []), c10 = false;
        a10.flags |= r10, e10 ? e10.flags |= r10 : e10 = a10, this.updateState = 2, !a10.empty && (this.updatePlugins(a10), this.inputState.update(a10), this.updateAttrs(), (c10 = this.docView.update(a10)) && this.docViewUpdate());
        for (let t55 = 0; t55 < l10.length; t55++) if (h10[t55] != n6) try {
          let e11 = l10[t55];
          e11.write && e11.write(h10[t55], this);
        } catch (t56) {
          iC(this.state, t56);
        }
        if (c10 && this.docView.updateSelection(true), !a10.viewportChanged && 0 == this.measureRequests.length) {
          if (this.viewState.editorHeight) {
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o10 = -1;
              continue;
            }
            {
              let t55 = (s10 < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s10).top) - o10;
              if (t55 > 1 || t55 < -1) {
                n10 += t55, i10.scrollTop = n10 / this.scaleY, o10 = -1;
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
    if (e10 && !e10.empty) for (let t54 of this.state.facet(iv)) t54(e10);
  }
  get themeClasses() {
    return nq + " " + (this.state.facet(nK) ? nj : n_) + " " + this.state.facet(nz);
  }
  updateAttrs() {
    let t53 = st(this, iR, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), e10 = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", translate: "no", contenteditable: this.state.facet(iD) ? "true" : "false", class: "cm-content", style: `${eV.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (e10["aria-readonly"] = "true"), st(this, iL, e10);
    let i10 = this.observer.ignore(() => {
      let i11 = eU(this.contentDOM, this.contentAttrs, e10), n10 = eU(this.dom, this.editorAttrs, t53);
      return i11 || n10;
    });
    return this.editorAttrs = t53, this.contentAttrs = e10, i10;
  }
  showAnnouncements(e10) {
    let i10 = true;
    for (let n10 of e10) for (let e11 of n10.effects) e11.is(t27.announce) && (i10 && (this.announceDOM.textContent = ""), i10 = false, this.announceDOM.appendChild(document.createElement("div")).textContent = e11.value);
  }
  mountStyles() {
    this.styleModules = this.state.facet(iz);
    let e10 = this.state.facet(t27.cspNonce);
    t0.mount(this.root, this.styleModules.concat(n$).reverse(), e10 ? { nonce: e10 } : void 0);
  }
  readMeasured() {
    if (2 == this.updateState) throw Error("Reading the editor layout isn't allowed during an update");
    0 == this.updateState && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(t53) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t53 && !(this.measureRequests.indexOf(t53) > -1)) {
      if (null != t53.key) {
        for (let e10 = 0; e10 < this.measureRequests.length; e10++) if (this.measureRequests[e10].key === t53.key) {
          this.measureRequests[e10] = t53;
          return;
        }
      }
      this.measureRequests.push(t53);
    }
  }
  plugin(t53) {
    let e10 = this.pluginMap.get(t53);
    return (void 0 === e10 || e10 && e10.spec != t53) && this.pluginMap.set(t53, e10 = this.plugins.find((e11) => e11.spec == t53) || null), e10 && e10.update(this).value;
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
  elementAtHeight(t53) {
    return this.readMeasured(), this.viewState.elementAtHeight(t53);
  }
  lineBlockAtHeight(t53) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t53);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t53) {
    return this.viewState.lineBlockAt(t53);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t53, e10, i10) {
    return i2(this, t53, i0(this, t53, e10, i10));
  }
  moveByGroup(t53, e10) {
    return i2(this, t53, i0(this, t53, e10, (e11) => {
      var i10;
      let n10, s10;
      return i10 = t53.head, s10 = (n10 = this.state.charCategorizer(i10))(e11), (t54) => {
        let e12 = n10(t54);
        return s10 == tT.Space && (s10 = e12), s10 == e12;
      };
    }));
  }
  visualLineSide(t53, e10) {
    let i10 = this.bidiSpans(t53), n10 = this.textDirectionAt(t53.from), s10 = i10[e10 ? i10.length - 1 : 0];
    return $.cursor(s10.side(e10, n10) + t53.from, s10.forward(!e10, n10) ? 1 : -1);
  }
  moveToLineBoundary(t53, e10) {
    let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return function(t54, e11, i11, n10) {
      let s10 = function(t55, e12) {
        let i12 = t55.lineBlockAt(e12);
        if (Array.isArray(i12.type)) {
          for (let t56 of i12.type) if (t56.to > e12 || t56.to == e12 && (t56.to == i12.to || t56.type == eJ.Text)) return t56;
        }
        return i12;
      }(t54, e11.head), o10 = n10 && s10.type == eJ.Text && (t54.lineWrapping || s10.widgetLineBreaks) ? t54.coordsAtPos(e11.assoc < 0 && e11.head > s10.from ? e11.head - 1 : e11.head) : null;
      if (o10) {
        let e12 = t54.dom.getBoundingClientRect(), n11 = t54.textDirectionAt(s10.from), r10 = t54.posAtCoords({ x: i11 == (n11 == e9.LTR) ? e12.right - 1 : e12.left + 1, y: (o10.top + o10.bottom) / 2 });
        if (null != r10) return $.cursor(r10, i11 ? -1 : 1);
      }
      return $.cursor(i11 ? s10.to : s10.from, i11 ? -1 : 1);
    }(this, t53, e10, i10);
  }
  moveVertically(t53, e10, i10) {
    return i2(this, t53, function(t54, e11, i11, n10) {
      let s10 = e11.head, o10 = i11 ? 1 : -1;
      if (s10 == (i11 ? t54.state.doc.length : 0)) return $.cursor(s10, e11.assoc);
      let r10 = e11.goalColumn, l10, h10 = t54.contentDOM.getBoundingClientRect(), a10 = t54.coordsAtPos(s10, e11.assoc || -1), c10 = t54.documentTop;
      if (a10) null == r10 && (r10 = a10.left - h10.left), l10 = o10 < 0 ? a10.top : a10.bottom;
      else {
        let e12 = t54.viewState.lineBlockAt(s10);
        null == r10 && (r10 = Math.min(h10.right - h10.left, t54.defaultCharacterWidth * (s10 - e12.from))), l10 = (o10 < 0 ? e12.top : e12.bottom) + c10;
      }
      let d10 = h10.left + r10, u10 = null != n10 ? n10 : t54.viewState.heightOracle.textHeight >> 1;
      for (let e12 = 0; ; e12 += 10) {
        let i12 = l10 + (u10 + e12) * o10, n11 = iQ(t54, { x: d10, y: i12 }, false, o10);
        if (i12 < h10.top || i12 > h10.bottom || (o10 < 0 ? n11 < s10 : n11 > s10)) {
          let e13 = t54.docView.coordsForChar(n11), s11 = !e13 || i12 < e13.top ? -1 : 1;
          return $.cursor(n11, s11, void 0, r10);
        }
      }
    }(this, t53, e10, i10));
  }
  domAtPos(t53) {
    return this.docView.domAtPos(t53);
  }
  posAtDOM(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this.docView.posFromDOM(t53, e10);
  }
  posAtCoords(t53) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.readMeasured(), iQ(this, t53, e10);
  }
  coordsAtPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    this.readMeasured();
    let i10 = this.docView.coordsAt(t53, e10);
    if (!i10 || i10.left == i10.right) return i10;
    let n10 = this.state.doc.lineAt(t53), s10 = this.bidiSpans(n10);
    return eh(i10, s10[ih.find(s10, t53 - n10.from, -1, e10)].dir == e9.LTR == e10 > 0);
  }
  coordsForChar(t53) {
    return this.readMeasured(), this.docView.coordsForChar(t53);
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
  textDirectionAt(t53) {
    return !this.state.facet(iy) || t53 < this.viewport.from || t53 > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t53));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t53) {
    if (t53.length > n9) return ic(t53.length);
    let e10 = this.textDirectionAt(t53.from), i10;
    for (let n11 of this.bidiCache) if (n11.from == t53.from && n11.dir == e10 && (n11.fresh || function t54(e11, i11) {
      if (e11.length != i11.length) return false;
      for (let n12 = 0; n12 < e11.length; n12++) {
        let s10 = e11[n12], o10 = i11[n12];
        if (s10.from != o10.from || s10.to != o10.to || s10.direction != o10.direction || !t54(s10.inner, o10.inner)) return false;
      }
      return true;
    }(n11.isolates, i10 = iI(this, t53)))) return n11.order;
    i10 || (i10 = iI(this, t53));
    let n10 = function(t54, e11, i11) {
      if (!t54) return [new ih(0, 0, e11 == e7 ? 1 : 0)];
      if (e11 == e6 && !i11.length && !il.test(t54)) return ic(t54.length);
      if (i11.length) for (; t54.length > ia.length; ) ia[ia.length] = 256;
      let n11 = [], s10 = e11 == e6 ? 0 : 1;
      return function t55(e12, i12, n12, s11, o10, r10, l10) {
        let h10 = i12 % 2 ? 2 : 1;
        (function(t56, e13, i13, n13, s12) {
          for (let o11 = 0; o11 <= n13.length; o11++) {
            let r11 = o11 ? n13[o11 - 1].to : e13, l11 = o11 < n13.length ? n13[o11].from : i13, h11 = o11 ? 256 : s12;
            for (let e14 = r11, i14 = h11, n14 = h11; e14 < l11; e14++) {
              let s13 = ir(t56.charCodeAt(e14));
              512 == s13 ? s13 = i14 : 8 == s13 && 4 == n14 && (s13 = 16), ia[e14] = 4 == s13 ? 2 : s13, 7 & s13 && (n14 = s13), i14 = s13;
            }
            for (let t57 = r11, e14 = h11, n14 = h11; t57 < l11; t57++) {
              let s13 = ia[t57];
              if (128 == s13) t57 < l11 - 1 && e14 == ia[t57 + 1] && 24 & e14 ? s13 = ia[t57] = e14 : ia[t57] = 256;
              else if (64 == s13) {
                let s14 = t57 + 1;
                for (; s14 < l11 && 64 == ia[s14]; ) s14++;
                let o12 = t57 && 8 == e14 || s14 < i13 && 8 == ia[s14] ? 1 == n14 ? 1 : 8 : 256;
                for (let e15 = t57; e15 < s14; e15++) ia[e15] = o12;
                t57 = s14 - 1;
              } else 8 == s13 && 1 == n14 && (ia[t57] = 1);
              e14 = s13, 7 & s13 && (n14 = s13);
            }
          }
        })(e12, o10, r10, s11, h10), function(t56, e13, i13, n13, s12) {
          let o11 = 1 == s12 ? 2 : 1;
          for (let r11 = 0, l11 = 0, h11 = 0; r11 <= n13.length; r11++) {
            let a10 = r11 ? n13[r11 - 1].to : e13, c10 = r11 < n13.length ? n13[r11].from : i13;
            for (let e14 = a10, i14, n14, r12; e14 < c10; e14++) if (n14 = is[i14 = t56.charCodeAt(e14)]) {
              if (n14 < 0) {
                for (let t57 = l11 - 3; t57 >= 0; t57 -= 3) if (io[t57 + 1] == -n14) {
                  let i15 = io[t57 + 2], n15 = 2 & i15 ? s12 : 4 & i15 ? 1 & i15 ? o11 : s12 : 0;
                  n15 && (ia[e14] = ia[io[t57]] = n15), l11 = t57;
                  break;
                }
              } else if (189 == io.length) break;
              else io[l11++] = e14, io[l11++] = i14, io[l11++] = h11;
            } else if (2 == (r12 = ia[e14]) || 1 == r12) {
              let t57 = r12 == s12;
              h11 = t57 ? 0 : 1;
              for (let e15 = l11 - 3; e15 >= 0; e15 -= 3) {
                let i15 = io[e15 + 2];
                if (2 & i15) break;
                if (t57) io[e15 + 2] |= 2;
                else {
                  if (4 & i15) break;
                  io[e15 + 2] |= 4;
                }
              }
            }
          }
        }(e12, o10, r10, s11, h10), function(t56, e13, i13, n13) {
          for (let s12 = 0, o11 = n13; s12 <= i13.length; s12++) {
            let r11 = s12 ? i13[s12 - 1].to : t56, l11 = s12 < i13.length ? i13[s12].from : e13;
            for (let h11 = r11; h11 < l11; ) {
              let r12 = ia[h11];
              if (256 == r12) {
                let r13 = h11 + 1;
                for (; ; ) if (r13 == l11) {
                  if (s12 == i13.length) break;
                  r13 = i13[s12++].to, l11 = s12 < i13.length ? i13[s12].from : e13;
                } else if (256 == ia[r13]) r13++;
                else break;
                let a10 = 1 == o11, c10 = a10 == ((r13 < e13 ? ia[r13] : n13) == 1) ? a10 ? 1 : 2 : n13;
                for (let e14 = r13, n14 = s12, o12 = n14 ? i13[n14 - 1].to : t56; e14 > h11; ) e14 == o12 && (e14 = i13[--n14].from, o12 = n14 ? i13[n14 - 1].to : t56), ia[--e14] = c10;
                h11 = r13;
              } else o11 = r12, h11++;
            }
          }
        }(o10, r10, s11, h10), function e13(i13, n13, s12, o11, r11, l11, h11) {
          let a10 = o11 % 2 ? 2 : 1;
          if (o11 % 2 == r11 % 2) for (let c10 = n13, d10 = 0; c10 < s12; ) {
            let n14 = true, u10 = false;
            if (d10 == l11.length || c10 < l11[d10].from) {
              let t56 = ia[c10];
              t56 != a10 && (n14 = false, u10 = 16 == t56);
            }
            let f10 = n14 || 1 != a10 ? null : [], g10 = n14 ? o11 : o11 + 1, p10 = c10;
            e: for (; ; ) if (d10 < l11.length && p10 == l11[d10].from) {
              if (u10) break;
              let e14 = l11[d10];
              if (!n14) for (let t56 = e14.to, i14 = d10 + 1; ; ) {
                if (t56 == s12) break e;
                if (i14 < l11.length && l11[i14].from == t56) t56 = l11[i14++].to;
                else if (ia[t56] == a10) break e;
                else break;
              }
              d10++, f10 ? f10.push(e14) : (e14.from > c10 && h11.push(new ih(c10, e14.from, g10)), t55(i13, e14.direction == e6 != !(g10 % 2) ? o11 + 1 : o11, r11, e14.inner, e14.from, e14.to, h11), c10 = e14.to), p10 = e14.to;
            } else if (p10 == s12 || (n14 ? ia[p10] != a10 : ia[p10] == a10)) break;
            else p10++;
            f10 ? e13(i13, c10, p10, o11 + 1, r11, f10, h11) : c10 < p10 && h11.push(new ih(c10, p10, g10)), c10 = p10;
          }
          else for (let c10 = s12, d10 = l11.length; c10 > n13; ) {
            let s13 = true, u10 = false;
            if (!d10 || c10 > l11[d10 - 1].to) {
              let t56 = ia[c10 - 1];
              t56 != a10 && (s13 = false, u10 = 16 == t56);
            }
            let f10 = s13 || 1 != a10 ? null : [], g10 = s13 ? o11 : o11 + 1, p10 = c10;
            e: for (; ; ) if (d10 && p10 == l11[d10 - 1].to) {
              if (u10) break;
              let e14 = l11[--d10];
              if (!s13) for (let t56 = e14.from, i14 = d10; ; ) {
                if (t56 == n13) break e;
                if (i14 && l11[i14 - 1].to == t56) t56 = l11[--i14].from;
                else if (ia[t56 - 1] == a10) break e;
                else break;
              }
              f10 ? f10.push(e14) : (e14.to < c10 && h11.push(new ih(e14.to, c10, g10)), t55(i13, e14.direction == e6 != !(g10 % 2) ? o11 + 1 : o11, r11, e14.inner, e14.from, e14.to, h11), c10 = e14.from), p10 = e14.from;
            } else if (p10 == n13 || (s13 ? ia[p10 - 1] != a10 : ia[p10 - 1] == a10)) break;
            else p10--;
            f10 ? e13(i13, p10, c10, o11 + 1, r11, f10, h11) : p10 < c10 && h11.push(new ih(p10, c10, g10)), c10 = p10;
          }
        }(e12, o10, r10, i12, n12, s11, l10);
      }(t54, s10, s10, i11, 0, t54.length, n11), n11;
    }(t53.text, e10, i10);
    return this.bidiCache.push(new n7(t53.from, t53.to, e10, i10, true, n10)), n10;
  }
  get hasFocus() {
    var t53;
    return (this.dom.ownerDocument.hasFocus() || eV.safari && (null === (t53 = this.inputState) || void 0 === t53 ? void 0 : t53.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      eu(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t53) {
    this._root != t53 && (this._root = t53, this.observer.setWindow((9 == t53.nodeType ? t53 : t53.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    for (let t53 of (this.root.activeElement == this.contentDOM && this.contentDOM.blur(), this.plugins)) t53.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return iM.of(new ik("number" == typeof t53 ? $.cursor(t53) : t53, e10.y, e10.x, e10.yMargin, e10.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t53, scrollLeft: e10 } = this.scrollDOM, i10 = this.viewState.scrollAnchorAt(t53);
    return iM.of(new ik($.cursor(i10.from), "start", "start", i10.top - t53, e10, true));
  }
  setTabFocusMode(t53) {
    null == t53 ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof t53 ? this.inputState.tabFocusMode = t53 ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + t53);
  }
  static domEventHandlers(t53) {
    return iE.define(() => ({}), { eventHandlers: t53 });
  }
  static domEventObservers(t53) {
    return iE.define(() => ({}), { eventObservers: t53 });
  }
  static theme(t53, e10) {
    let i10 = t0.newName(), n10 = [nz.of(i10), iz.of(nU(`.${i10}`, t53))];
    return e10 && e10.dark && n10.push(nK.of(true)), n10;
  }
  static baseTheme(t53) {
    return tr.lowest(iz.of(nU("." + nq, t53, nG)));
  }
  static findFromDOM(t53) {
    var e10;
    let i10 = t53.querySelector(".cm-content"), n10 = i10 && ex.get(i10) || ex.get(t53);
    return (null === (e10 = null == n10 ? void 0 : n10.rootView) || void 0 === e10 ? void 0 : e10.view) || null;
  }
};
n5.styleModule = iz, n5.inputHandler = iw, n5.scrollHandler = iS, n5.focusChangeEffect = ib, n5.perLineTextDirection = iy, n5.exceptionSink = im, n5.updateListener = iv, n5.editable = iD, n5.mouseSelectionStyle = ip, n5.dragMovesSelection = ig, n5.clickAddsSelectionRange = iu, n5.decorations = iP, n5.outerDecorations = iN, n5.atomicRanges = iH, n5.bidiIsolatedRanges = iV, n5.scrollMargins = iF, n5.darkTheme = nK, n5.cspNonce = J.define({ combine: (t53) => t53.length ? t53[0] : "" }), n5.contentAttributes = iL, n5.editorAttributes = iR, n5.lineWrapping = n5.contentAttributes.of({ class: "cm-lineWrapping" }), n5.announce = tk.define();
let n9 = 4096, n6 = {}, n7 = class t28 {
  constructor(t53, e10, i10, n10, s10, o10) {
    this.from = t53, this.to = e10, this.dir = i10, this.isolates = n10, this.fresh = s10, this.order = o10;
  }
  static update(e10, i10) {
    if (i10.empty && !e10.some((t53) => t53.fresh)) return e10;
    let n10 = [], s10 = e10.length ? e10[e10.length - 1].dir : e9.LTR;
    for (let o10 = Math.max(0, e10.length - 10); o10 < e10.length; o10++) {
      let r10 = e10[o10];
      r10.dir != s10 || i10.touchesRange(r10.from, r10.to) || n10.push(new t28(i10.mapPos(r10.from, 1), i10.mapPos(r10.to, -1), r10.dir, r10.isolates, false, r10.order));
    }
    return n10;
  }
};
function st(t53, e10, i10) {
  for (let n10 = t53.state.facet(e10), s10 = n10.length - 1; s10 >= 0; s10--) {
    let e11 = n10[s10], o10 = "function" == typeof e11 ? e11(t53) : e11;
    o10 && e_(o10, i10);
  }
  return i10;
}
let se = eV.mac ? "mac" : eV.windows ? "win" : eV.linux ? "linux" : "key";
function si(t53, e10, i10) {
  return e10.altKey && (t53 = "Alt-" + t53), e10.ctrlKey && (t53 = "Ctrl-" + t53), e10.metaKey && (t53 = "Meta-" + t53), false !== i10 && e10.shiftKey && (t53 = "Shift-" + t53), t53;
}
let sn = tr.default(n5.domEventHandlers({ keydown: (t53, e10) => {
  var i10, n10, s10, o10, r10;
  let l10, h10, a10, c10, d10, u10, f10, g10, p10, m2, v2, w2, y2;
  return i10 = (l10 = e10.state.facet(ss), (h10 = so.get(l10)) || so.set(l10, h10 = function(t54) {
    let e11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : se, i11 = /* @__PURE__ */ Object.create(null), n11 = /* @__PURE__ */ Object.create(null), s11 = (t55, e12) => {
      let i12 = n11[t55];
      if (null == i12) n11[t55] = e12;
      else if (i12 != e12) throw Error("Key binding " + t55 + " is used both as a regular binding and as a multi-stroke prefix");
    }, o11 = (t55, n12, o12, r11, l11) => {
      var h11, a11;
      let c11 = i11[t55] || (i11[t55] = /* @__PURE__ */ Object.create(null)), d11 = n12.split(/ (?!$)/).map((t56) => function(t57, e12) {
        let i12, n13, s12, o13;
        let r12 = t57.split(/-(?!$)/), l12 = r12[r12.length - 1];
        "Space" == l12 && (l12 = " ");
        for (let t58 = 0; t58 < r12.length - 1; ++t58) {
          let l13 = r12[t58];
          if (/^(cmd|meta|m)$/i.test(l13)) o13 = true;
          else if (/^a(lt)?$/i.test(l13)) i12 = true;
          else if (/^(c|ctrl|control)$/i.test(l13)) n13 = true;
          else if (/^s(hift)?$/i.test(l13)) s12 = true;
          else if (/^mod$/i.test(l13)) "mac" == e12 ? o13 = true : n13 = true;
          else throw Error("Unrecognized modifier name: " + l13);
        }
        return i12 && (l12 = "Alt-" + l12), n13 && (l12 = "Ctrl-" + l12), o13 && (l12 = "Meta-" + l12), s12 && (l12 = "Shift-" + l12), l12;
      }(t56, e11));
      for (let e12 = 1; e12 < d11.length; e12++) {
        let i12 = d11.slice(0, e12).join(" ");
        s11(i12, true), c11[i12] || (c11[i12] = { preventDefault: true, stopPropagation: false, run: [(e13) => {
          let n13 = sr = { view: e13, prefix: i12, scope: t55 };
          return setTimeout(() => {
            sr == n13 && (sr = null);
          }, 4e3), true;
        }] });
      }
      let u11 = d11.join(" ");
      s11(u11, false);
      let f11 = c11[u11] || (c11[u11] = { preventDefault: false, stopPropagation: false, run: (null === (a11 = null === (h11 = c11._any) || void 0 === h11 ? void 0 : h11.run) || void 0 === a11 ? void 0 : a11.slice()) || [] });
      o12 && f11.run.push(o12), r11 && (f11.preventDefault = true), l11 && (f11.stopPropagation = true);
    };
    for (let n12 of t54) {
      let t55 = n12.scope ? n12.scope.split(" ") : ["editor"];
      if (n12.any) for (let e12 of t55) {
        let t56 = i11[e12] || (i11[e12] = /* @__PURE__ */ Object.create(null));
        t56._any || (t56._any = { preventDefault: false, stopPropagation: false, run: [] });
        let { any: s13 } = n12;
        for (let e13 in t56) t56[e13].run.push((t57) => s13(t57, sl));
      }
      let s12 = n12[e11] || n12.key;
      if (s12) for (let e12 of t55) o11(e12, s12, n12.run, n12.preventDefault, n12.stopPropagation), n12.shift && o11(e12, "Shift-" + s12, n12.shift, n12.preventDefault, n12.stopPropagation);
    }
    return i11;
  }(l10.reduce((t54, e11) => t54.concat(e11), []))), h10), n10 = t53, s10 = e10, o10 = "editor", sl = n10, c10 = x(b(a10 = ("Esc" == (r10 = !(t410 && n10.metaKey && n10.shiftKey && !n10.ctrlKey && !n10.altKey || t53 && n10.shiftKey && n10.key && 1 == n10.key.length || "Unidentified" == n10.key) && n10.key || (n10.shiftKey ? t310 : t82)[n10.keyCode] || n10.key || "Unidentified") && (r10 = "Escape"), "Del" == r10 && (r10 = "Delete"), "Left" == r10 && (r10 = "ArrowLeft"), "Up" == r10 && (r10 = "ArrowUp"), "Right" == r10 && (r10 = "ArrowRight"), "Down" == r10 && (r10 = "ArrowDown"), r10), 0)) == a10.length && " " != a10, d10 = "", u10 = false, f10 = false, g10 = false, sr && sr.view == s10 && sr.scope == o10 && (d10 = sr.prefix + " ", 0 > i9.indexOf(n10.keyCode) && (f10 = true, sr = null)), p10 = /* @__PURE__ */ new Set(), m2 = (t54) => {
    if (t54) {
      for (let e11 of t54.run) if (!p10.has(e11) && (p10.add(e11), e11(s10))) return t54.stopPropagation && (g10 = true), true;
      t54.preventDefault && (t54.stopPropagation && (g10 = true), f10 = true);
    }
    return false;
  }, (v2 = i10[o10]) && (m2(v2[d10 + si(a10, n10, !c10)]) ? u10 = true : c10 && (n10.altKey || n10.metaKey || n10.ctrlKey) && !(eV.windows && n10.ctrlKey && n10.altKey) && (w2 = t82[n10.keyCode]) && w2 != a10 ? m2(v2[d10 + si(w2, n10, true)]) ? u10 = true : n10.shiftKey && (y2 = t310[n10.keyCode]) != a10 && y2 != w2 && m2(v2[d10 + si(y2, n10, false)]) && (u10 = true) : c10 && n10.shiftKey && m2(v2[d10 + si(a10, n10, true)]) && (u10 = true), !u10 && m2(v2._any) && (u10 = true)), f10 && (u10 = true), u10 && g10 && n10.stopPropagation(), sl = null, u10;
} })), ss = J.define({ enables: sn }), so = /* @__PURE__ */ new WeakMap(), sr = null, sl = null, sh = !eV.ios, sa = { ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" } }, ".cm-content": { "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } };
function sc(t53, e10, i10, n10, s10) {
  e10.lastIndex = 0;
  for (let o10 = t53.iterRange(i10, n10), r10 = i10, l10; !o10.next().done; r10 += o10.value.length) if (!o10.lineBreak) for (; l10 = e10.exec(o10.value); ) s10(r10 + l10.index, l10);
}
sh && (sa[".cm-line"].caretColor = sa[".cm-content"].caretColor = "transparent !important");
class sd {
  constructor(t53) {
    let { regexp: e10, decoration: i10, decorate: n10, boundary: s10, maxLength: o10 = 1e3 } = t53;
    if (!e10.global) throw RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e10, n10) this.addMatch = (t54, e11, i11, s11) => n10(s11, i11, i11 + t54[0].length, t54, e11);
    else if ("function" == typeof i10) this.addMatch = (t54, e11, n11, s11) => {
      let o11 = i10(t54, e11, n11);
      o11 && s11(n11, n11 + t54[0].length, o11);
    };
    else if (i10) this.addMatch = (t54, e11, n11, s11) => s11(n11, n11 + t54[0].length, i10);
    else throw RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s10, this.maxLength = o10;
  }
  createDeco(t53) {
    let e10 = new tI(), i10 = e10.add.bind(e10);
    for (let { from: e11, to: n10 } of function(t54, e12) {
      let i11 = t54.visibleRanges;
      if (1 == i11.length && i11[0].from == t54.viewport.from && i11[0].to == t54.viewport.to) return i11;
      let n11 = [];
      for (let { from: s10, to: o10 } of i11) s10 = Math.max(t54.state.doc.lineAt(s10).from, s10 - e12), o10 = Math.min(t54.state.doc.lineAt(o10).to, o10 + e12), n11.length && n11[n11.length - 1].to >= s10 ? n11[n11.length - 1].to = o10 : n11.push({ from: s10, to: o10 });
      return n11;
    }(t53, this.maxLength)) sc(t53.state.doc, this.regexp, e11, n10, (e12, n11) => this.addMatch(n11, t53, e12, i10));
    return e10.finish();
  }
  updateDeco(t53, e10) {
    let i10 = 1e9, n10 = -1;
    return (t53.docChanged && t53.changes.iterChanges((e11, s10, o10, r10) => {
      r10 > t53.view.viewport.from && o10 < t53.view.viewport.to && (i10 = Math.min(o10, i10), n10 = Math.max(r10, n10));
    }), t53.viewportChanged || n10 - i10 > 1e3) ? this.createDeco(t53.view) : n10 > -1 ? this.updateRange(t53.view, e10.map(t53.changes), i10, n10) : e10;
  }
  updateRange(t53, e10, i10, n10) {
    for (let s10 of t53.visibleRanges) {
      let o10 = Math.max(s10.from, i10), r10 = Math.min(s10.to, n10);
      if (r10 > o10) {
        let i11 = t53.state.doc.lineAt(o10), n11 = i11.to < r10 ? t53.state.doc.lineAt(r10) : i11, l10 = Math.max(s10.from, i11.from), h10 = Math.min(s10.to, n11.to);
        if (this.boundary) {
          for (; o10 > i11.from; o10--) if (this.boundary.test(i11.text[o10 - 1 - i11.from])) {
            l10 = o10;
            break;
          }
          for (; r10 < n11.to; r10++) if (this.boundary.test(n11.text[r10 - n11.from])) {
            h10 = r10;
            break;
          }
        }
        let a10 = [], c10, d10 = (t54, e11, i12) => a10.push(i12.range(t54, e11));
        if (i11 == n11) for (this.regexp.lastIndex = l10 - i11.from; (c10 = this.regexp.exec(i11.text)) && c10.index < h10 - i11.from; ) this.addMatch(c10, t53, c10.index + i11.from, d10);
        else sc(t53.state.doc, this.regexp, l10, h10, (e11, i12) => this.addMatch(i12, t53, e11, d10));
        e10 = e10.update({ filterFrom: l10, filterTo: h10, filter: (t54, e11) => t54 < l10 || e11 > h10, add: a10 });
      }
    }
    return e10;
  }
}
let su = null != /x/.unicode ? "gu" : "g", sf = RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]", su), sg = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" }, sp = null, sm = J.define({ combine(t53) {
  let e10 = tR(t53, { render: null, specialChars: sf, addSpecialChars: null });
  return (e10.replaceTabs = !function() {
    var t54;
    if (null == sp && "undefined" != typeof document && document.body) {
      let e11 = document.body.style;
      sp = (null !== (t54 = e11.tabSize) && void 0 !== t54 ? t54 : e11.MozTabSize) != null;
    }
    return sp || false;
  }()) && (e10.specialChars = RegExp("	|" + e10.specialChars.source, su)), e10.addSpecialChars && (e10.specialChars = RegExp(e10.specialChars.source + "|" + e10.addSpecialChars.source, su)), e10;
} });
function sv() {
  let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return [sm.of(t53), sw || (sw = iE.fromClass(class {
    constructor(t54) {
      this.view = t54, this.decorations = eQ.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(t54.state.facet(sm)), this.decorations = this.decorator.createDeco(t54);
    }
    makeDecorator(t54) {
      return new sd({ regexp: t54.specialChars, decoration: (e10, i10, n10) => {
        let { doc: s10 } = i10.state, o10 = b(e10[0], 0);
        if (9 == o10) {
          let t55 = s10.lineAt(n10), e11 = i10.state.tabSize, o11 = tY(t55.text, e11, n10 - t55.from);
          return eQ.replace({ widget: new sy((e11 - o11 % e11) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[o10] || (this.decorationCache[o10] = eQ.replace({ widget: new sb(t54, o10) }));
      }, boundary: t54.replaceTabs ? void 0 : /[^]/ });
    }
    update(t54) {
      let e10 = t54.state.facet(sm);
      t54.startState.facet(sm) != e10 ? (this.decorator = this.makeDecorator(e10), this.decorations = this.decorator.createDeco(t54.view)) : this.decorations = this.decorator.updateDeco(t54, this.decorations);
    }
  }, { decorations: (t54) => t54.decorations }))];
}
let sw = null;
class sb extends eX {
  constructor(t53, e10) {
    super(), this.options = t53, this.code = e10;
  }
  eq(t53) {
    return t53.code == this.code;
  }
  toDOM(t53) {
    var e10;
    let i10 = (e10 = this.code) >= 32 ? "•" : 10 == e10 ? "␤" : String.fromCharCode(9216 + e10), n10 = t53.state.phrase("Control character") + " " + (sg[this.code] || "0x" + this.code.toString(16)), s10 = this.options.render && this.options.render(this.code, n10, i10);
    if (s10) return s10;
    let o10 = document.createElement("span");
    return o10.textContent = i10, o10.title = n10, o10.setAttribute("aria-label", n10), o10.className = "cm-specialChar", o10;
  }
  ignoreEvent() {
    return false;
  }
}
class sy extends eX {
  constructor(t53) {
    super(), this.width = t53;
  }
  eq(t53) {
    return t53.width == this.width;
  }
  toDOM() {
    let t53 = document.createElement("span");
    return t53.textContent = "	", t53.className = "cm-tab", t53.style.width = this.width + "px", t53;
  }
  ignoreEvent() {
    return false;
  }
}
function sx() {
  return sk;
}
let sS = eQ.line({ class: "cm-activeLine" }), sk = iE.fromClass(class {
  constructor(t53) {
    this.decorations = this.getDeco(t53);
  }
  update(t53) {
    (t53.docChanged || t53.selectionSet) && (this.decorations = this.getDeco(t53.view));
  }
  getDeco(t53) {
    let e10 = -1, i10 = [];
    for (let n10 of t53.state.selection.ranges) {
      let s10 = t53.lineBlockAt(n10.head);
      s10.from > e10 && (i10.push(sS.range(s10.from)), e10 = s10.from);
    }
    return eQ.set(i10);
  }
}, { decorations: (t53) => t53.decorations }), sM = "-10000px";
class sA {
  constructor(t53, e10, i10, n10) {
    this.facet = e10, this.createTooltipView = i10, this.removeTooltipView = n10, this.input = t53.state.facet(e10), this.tooltips = this.input.filter((t54) => t54);
    let s10 = null;
    this.tooltipViews = this.tooltips.map((t54) => s10 = i10(t54, s10));
  }
  update(t53, e10) {
    var i10;
    let n10 = t53.state.facet(this.facet), s10 = n10.filter((t54) => t54);
    if (n10 === this.input) {
      for (let e11 of this.tooltipViews) e11.update && e11.update(t53);
      return false;
    }
    let o10 = [], r10 = e10 ? [] : null;
    for (let i11 = 0; i11 < s10.length; i11++) {
      let n11 = s10[i11], l10 = -1;
      if (n11) {
        for (let t54 = 0; t54 < this.tooltips.length; t54++) {
          let e11 = this.tooltips[t54];
          e11 && e11.create == n11.create && (l10 = t54);
        }
        if (l10 < 0) o10[i11] = this.createTooltipView(n11, i11 ? o10[i11 - 1] : null), r10 && (r10[i11] = !!n11.above);
        else {
          let n12 = o10[i11] = this.tooltipViews[l10];
          r10 && (r10[i11] = e10[l10]), n12.update && n12.update(t53);
        }
      }
    }
    for (let t54 of this.tooltipViews) 0 > o10.indexOf(t54) && (this.removeTooltipView(t54), null === (i10 = t54.destroy) || void 0 === i10 || i10.call(t54));
    return e10 && (r10.forEach((t54, i11) => e10[i11] = t54), e10.length = r10.length), this.input = n10, this.tooltips = s10, this.tooltipViews = o10, true;
  }
}
function sC(t53) {
  let { win: e10 } = t53;
  return { top: 0, left: 0, bottom: e10.innerHeight, right: e10.innerWidth };
}
let sD = J.define({ combine: (t53) => {
  var e10, i10, n10;
  return { position: eV.ios ? "absolute" : (null === (e10 = t53.find((t54) => t54.position)) || void 0 === e10 ? void 0 : e10.position) || "fixed", parent: (null === (i10 = t53.find((t54) => t54.parent)) || void 0 === i10 ? void 0 : i10.parent) || null, tooltipSpace: (null === (n10 = t53.find((t54) => t54.tooltipSpace)) || void 0 === n10 ? void 0 : n10.tooltipSpace) || sC };
} }), sO = /* @__PURE__ */ new WeakMap(), sT = iE.fromClass(class {
  constructor(t53) {
    this.view = t53, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let e10 = t53.state.facet(sD);
    this.position = e10.position, this.parent = e10.parent, this.classes = t53.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new sA(t53, sR, (t54, e11) => this.createTooltip(t54, e11), (t54) => {
      this.resizeObserver && this.resizeObserver.unobserve(t54.dom), t54.dom.remove();
    }), this.above = this.manager.tooltips.map((t54) => !!t54.above), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((t54) => {
      Date.now() > this.lastTransaction - 50 && t54.length > 0 && t54[t54.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), t53.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) for (let t53 of (this.intersectionObserver.disconnect(), this.manager.tooltipViews)) this.intersectionObserver.observe(t53.dom);
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(t53) {
    t53.transactions.length && (this.lastTransaction = Date.now());
    let e10 = this.manager.update(t53, this.above);
    e10 && this.observeIntersection();
    let i10 = e10 || t53.geometryChanged, n10 = t53.state.facet(sD);
    if (n10.position != this.position && !this.madeAbsolute) {
      for (let t54 of (this.position = n10.position, this.manager.tooltipViews)) t54.dom.style.position = this.position;
      i10 = true;
    }
    if (n10.parent != this.parent) {
      for (let t54 of (this.parent && this.container.remove(), this.parent = n10.parent, this.createContainer(), this.manager.tooltipViews)) this.container.appendChild(t54.dom);
      i10 = true;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    i10 && this.maybeMeasure();
  }
  createTooltip(t53, e10) {
    let i10 = t53.create(this.view), n10 = e10 ? e10.dom : null;
    if (i10.dom.classList.add("cm-tooltip"), t53.arrow && !i10.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let t54 = document.createElement("div");
      t54.className = "cm-tooltip-arrow", i10.dom.appendChild(t54);
    }
    return i10.dom.style.position = this.position, i10.dom.style.top = sM, i10.dom.style.left = "0px", this.container.insertBefore(i10.dom, n10), i10.mount && i10.mount(this.view), this.resizeObserver && this.resizeObserver.observe(i10.dom), i10;
  }
  destroy() {
    var t53, e10, i10;
    for (let e11 of (this.view.win.removeEventListener("resize", this.measureSoon), this.manager.tooltipViews)) e11.dom.remove(), null === (t53 = e11.destroy) || void 0 === t53 || t53.call(e11);
    this.parent && this.container.remove(), null === (e10 = this.resizeObserver) || void 0 === e10 || e10.disconnect(), null === (i10 = this.intersectionObserver) || void 0 === i10 || i10.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let t53 = this.view.dom.getBoundingClientRect(), e10 = 1, i10 = 1, n10 = false;
    if ("fixed" == this.position && this.manager.tooltipViews.length) {
      let { dom: t54 } = this.manager.tooltipViews[0];
      if (eV.gecko) n10 = t54.offsetParent != this.container.ownerDocument.body;
      else if (t54.style.top == sM && "0px" == t54.style.left) {
        let e11 = t54.getBoundingClientRect();
        n10 = Math.abs(e11.top + 1e4) > 1 || Math.abs(e11.left) > 1;
      }
    }
    if (n10 || "absolute" == this.position) {
      if (this.parent) {
        let t54 = this.parent.getBoundingClientRect();
        t54.width && t54.height && (e10 = t54.width / this.parent.offsetWidth, i10 = t54.height / this.parent.offsetHeight);
      } else ({ scaleX: e10, scaleY: i10 } = this.view.viewState);
    }
    return { editor: t53, parent: this.parent ? this.container.getBoundingClientRect() : t53, pos: this.manager.tooltips.map((t54, e11) => {
      let i11 = this.manager.tooltipViews[e11];
      return i11.getCoords ? i11.getCoords(t54.pos) : this.view.coordsAtPos(t54.pos);
    }), size: this.manager.tooltipViews.map((t54) => {
      let { dom: e11 } = t54;
      return e11.getBoundingClientRect();
    }), space: this.view.state.facet(sD).tooltipSpace(this.view), scaleX: e10, scaleY: i10, makeAbsolute: n10 };
  }
  writeMeasure(t53) {
    var e10;
    if (t53.makeAbsolute) for (let t54 of (this.madeAbsolute = true, this.position = "absolute", this.manager.tooltipViews)) t54.dom.style.position = "absolute";
    let { editor: i10, space: n10, scaleX: s10, scaleY: o10 } = t53, r10 = [];
    for (let l10 = 0; l10 < this.manager.tooltips.length; l10++) {
      let h10 = this.manager.tooltips[l10], a10 = this.manager.tooltipViews[l10], { dom: c10 } = a10, d10 = t53.pos[l10], u10 = t53.size[l10];
      if (!d10 || d10.bottom <= Math.max(i10.top, n10.top) || d10.top >= Math.min(i10.bottom, n10.bottom) || d10.right < Math.max(i10.left, n10.left) - 0.1 || d10.left > Math.min(i10.right, n10.right) + 0.1) {
        c10.style.top = sM;
        continue;
      }
      let f10 = h10.arrow ? a10.dom.querySelector(".cm-tooltip-arrow") : null, g10 = f10 ? 7 : 0, p10 = u10.right - u10.left, m2 = null !== (e10 = sO.get(a10)) && void 0 !== e10 ? e10 : u10.bottom - u10.top, v2 = a10.offset || sB, w2 = this.view.textDirection == e9.LTR, b2 = u10.width > n10.right - n10.left ? w2 ? n10.left : n10.right - u10.width : w2 ? Math.min(d10.left - (f10 ? 14 : 0) + v2.x, n10.right - p10) : Math.max(n10.left, d10.left - p10 + (f10 ? 14 : 0) - v2.x), y2 = this.above[l10];
      !h10.strictSide && (y2 ? d10.top - (u10.bottom - u10.top) - v2.y < n10.top : d10.bottom + (u10.bottom - u10.top) + v2.y > n10.bottom) && y2 == n10.bottom - d10.bottom > d10.top - n10.top && (y2 = this.above[l10] = !y2);
      let x2 = (y2 ? d10.top - n10.top : n10.bottom - d10.bottom) - g10;
      if (x2 < m2 && false !== a10.resize) {
        if (x2 < this.view.defaultLineHeight) {
          c10.style.top = sM;
          continue;
        }
        sO.set(a10, m2), c10.style.height = (m2 = x2) / o10 + "px";
      } else c10.style.height && (c10.style.height = "");
      let S2 = y2 ? d10.top - m2 - g10 - v2.y : d10.bottom + g10 + v2.y, k2 = b2 + p10;
      if (true !== a10.overlap) for (let t54 of r10) t54.left < k2 && t54.right > b2 && t54.top < S2 + m2 && t54.bottom > S2 && (S2 = y2 ? t54.top - m2 - 2 - g10 : t54.bottom + g10 + 2);
      if ("absolute" == this.position ? (c10.style.top = (S2 - t53.parent.top) / o10 + "px", c10.style.left = (b2 - t53.parent.left) / s10 + "px") : (c10.style.top = S2 / o10 + "px", c10.style.left = b2 / s10 + "px"), f10) {
        let t54 = d10.left + (w2 ? v2.x : -v2.x) - (b2 + 14 - 7);
        f10.style.left = t54 / s10 + "px";
      }
      true !== a10.overlap && r10.push({ left: b2, top: S2, right: k2, bottom: S2 + m2 }), c10.classList.toggle("cm-tooltip-above", y2), c10.classList.toggle("cm-tooltip-below", !y2), a10.positioned && a10.positioned(t53.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let t53 of this.manager.tooltipViews) t53.dom.style.top = sM;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } }), sE = n5.baseTheme({ ".cm-tooltip": { zIndex: 100, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), sB = { x: 0, y: 0 }, sR = J.define({ enables: [sT, sE] }), sL = J.define({ combine: (t53) => t53.reduce((t54, e10) => t54.concat(e10), []) });
class sP {
  static create(t53) {
    return new sP(t53);
  }
  constructor(t53) {
    this.view = t53, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new sA(t53, sL, (t54, e10) => this.createHostedView(t54, e10), (t54) => t54.dom.remove());
  }
  createHostedView(t53, e10) {
    let i10 = t53.create(this.view);
    return i10.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i10.dom, e10 ? e10.dom.nextSibling : this.dom.firstChild), this.mounted && i10.mount && i10.mount(this.view), i10;
  }
  mount(t53) {
    for (let e10 of this.manager.tooltipViews) e10.mount && e10.mount(t53);
    this.mounted = true;
  }
  positioned(t53) {
    for (let e10 of this.manager.tooltipViews) e10.positioned && e10.positioned(t53);
  }
  update(t53) {
    this.manager.update(t53);
  }
  destroy() {
    var t53;
    for (let e10 of this.manager.tooltipViews) null === (t53 = e10.destroy) || void 0 === t53 || t53.call(e10);
  }
  passProp(t53) {
    let e10;
    for (let i10 of this.manager.tooltipViews) {
      let n10 = i10[t53];
      if (void 0 !== n10) {
        if (void 0 === e10) e10 = n10;
        else if (e10 !== n10) return;
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
let sN = sR.compute([sL], (t53) => {
  let e10 = t53.facet(sL);
  return 0 === e10.length ? null : { pos: Math.min(...e10.map((t54) => t54.pos)), end: Math.max(...e10.map((t54) => {
    var e11;
    return null !== (e11 = t54.end) && void 0 !== e11 ? e11 : t54.pos;
  })), create: sP.create, above: e10[0].above, arrow: e10.some((t54) => t54.arrow) };
});
class sH {
  constructor(t53, e10, i10, n10, s10) {
    this.view = t53, this.source = e10, this.field = i10, this.setHover = n10, this.hoverTime = s10, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t53.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t53.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t53.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length) return;
    let t53 = Date.now() - this.lastMove.time;
    t53 < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t53) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t53, lastMove: e10 } = this, i10 = t53.docView.nearest(e10.target);
    if (!i10) return;
    let n10, s10 = 1;
    if (i10 instanceof eW) n10 = i10.posAtStart;
    else {
      if (null == (n10 = t53.posAtCoords(e10))) return;
      let i11 = t53.coordsAtPos(n10);
      if (!i11 || e10.y < i11.top || e10.y > i11.bottom || e10.x < i11.left - t53.defaultCharacterWidth || e10.x > i11.right + t53.defaultCharacterWidth) return;
      let o11 = t53.bidiSpans(t53.state.doc.lineAt(n10)).find((t54) => t54.from <= n10 && t54.to >= n10), r10 = o11 && o11.dir == e9.RTL ? -1 : 1;
      s10 = e10.x < i11.left ? -r10 : r10;
    }
    let o10 = this.source(t53, n10, s10);
    if (null == o10 ? void 0 : o10.then) {
      let e11 = this.pending = { pos: n10 };
      o10.then((i11) => {
        this.pending == e11 && (this.pending = null, i11 && !(Array.isArray(i11) && !i11.length) && t53.dispatch({ effects: this.setHover.of(Array.isArray(i11) ? i11 : [i11]) }));
      }, (e12) => iC(t53.state, e12, "hover tooltip"));
    } else o10 && !(Array.isArray(o10) && !o10.length) && t53.dispatch({ effects: this.setHover.of(Array.isArray(o10) ? o10 : [o10]) });
  }
  get tooltip() {
    let t53 = this.view.plugin(sT), e10 = t53 ? t53.manager.tooltips.findIndex((t54) => t54.create == sP.create) : -1;
    return e10 > -1 ? t53.manager.tooltipViews[e10] : null;
  }
  mousemove(t53) {
    var e10, i10;
    let n10;
    this.lastMove = { x: t53.clientX, y: t53.clientY, target: t53.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s10, tooltip: o10 } = this;
    if (s10.length && o10 && (n10 = o10.dom.getBoundingClientRect(), !(t53.clientX >= n10.left - 4) || !(t53.clientX <= n10.right + 4) || !(t53.clientY >= n10.top - 4) || !(t53.clientY <= n10.bottom + 4)) || this.pending) {
      let { pos: n11 } = s10[0] || this.pending, o11 = null !== (i10 = null === (e10 = s10[0]) || void 0 === e10 ? void 0 : e10.end) && void 0 !== i10 ? i10 : n11;
      (n11 == o11 ? this.view.posAtCoords(this.lastMove) != n11 : !function(t54, e11, i11, n12, s11, o12) {
        let r10 = t54.scrollDOM.getBoundingClientRect(), l10 = t54.documentTop + t54.documentPadding.top + t54.contentHeight;
        if (r10.left > n12 || r10.right < n12 || r10.top > s11 || Math.min(r10.bottom, l10) < s11) return false;
        let h10 = t54.posAtCoords({ x: n12, y: s11 }, false);
        return h10 >= e11 && h10 <= i11;
      }(this.view, n11, o11, t53.clientX, t53.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t53) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e10 } = this;
    if (e10.length) {
      let { tooltip: e11 } = this;
      e11 && e11.dom.contains(t53.relatedTarget) ? this.watchTooltipLeave(e11.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t53) {
    let e10 = (i10) => {
      t53.removeEventListener("mouseleave", e10), this.active.length && !this.view.dom.contains(i10.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t53.addEventListener("mouseleave", e10);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function sV(t53, e10) {
  let i10 = t53.plugin(sT);
  if (!i10) return null;
  let n10 = i10.manager.tooltips.indexOf(e10);
  return n10 < 0 ? null : i10.manager.tooltipViews[n10];
}
let sI = tk.define(), sF = J.define({ combine(t53) {
  let e10, i10;
  for (let n10 of t53) e10 = e10 || n10.topContainer, i10 = i10 || n10.bottomContainer;
  return { topContainer: e10, bottomContainer: i10 };
} }), sW = iE.fromClass(class {
  constructor(t53) {
    this.input = t53.state.facet(sq), this.specs = this.input.filter((t54) => t54), this.panels = this.specs.map((e11) => e11(t53));
    let e10 = t53.state.facet(sF);
    for (let i10 of (this.top = new sz(t53, true, e10.topContainer), this.bottom = new sz(t53, false, e10.bottomContainer), this.top.sync(this.panels.filter((t54) => t54.top)), this.bottom.sync(this.panels.filter((t54) => !t54.top)), this.panels)) i10.dom.classList.add("cm-panel"), i10.mount && i10.mount();
  }
  update(t53) {
    let e10 = t53.state.facet(sF);
    this.top.container != e10.topContainer && (this.top.sync([]), this.top = new sz(t53.view, true, e10.topContainer)), this.bottom.container != e10.bottomContainer && (this.bottom.sync([]), this.bottom = new sz(t53.view, false, e10.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let i10 = t53.state.facet(sq);
    if (i10 != this.input) {
      let e11 = i10.filter((t54) => t54), n10 = [], s10 = [], o10 = [], r10 = [];
      for (let i11 of e11) {
        let e12 = this.specs.indexOf(i11), l10;
        e12 < 0 ? (l10 = i11(t53.view), r10.push(l10)) : (l10 = this.panels[e12]).update && l10.update(t53), n10.push(l10), (l10.top ? s10 : o10).push(l10);
      }
      for (let t54 of (this.specs = e11, this.panels = n10, this.top.sync(s10), this.bottom.sync(o10), r10)) t54.dom.classList.add("cm-panel"), t54.mount && t54.mount();
    } else for (let e11 of this.panels) e11.update && e11.update(t53);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (t53) => n5.scrollMargins.of((e10) => {
  let i10 = e10.plugin(t53);
  return i10 && { top: i10.top.scrollMargin(), bottom: i10.bottom.scrollMargin() };
}) });
class sz {
  constructor(t53, e10, i10) {
    this.view = t53, this.top = e10, this.container = i10, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t53) {
    for (let e10 of this.panels) e10.destroy && 0 > t53.indexOf(e10) && e10.destroy();
    this.panels = t53, this.syncDOM();
  }
  syncDOM() {
    if (0 == this.panels.length) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t54 = this.container || this.view.dom;
      t54.insertBefore(this.dom, this.top ? t54.firstChild : null);
    }
    let t53 = this.dom.firstChild;
    for (let e10 of this.panels) if (e10.dom.parentNode == this.dom) {
      for (; t53 != e10.dom; ) t53 = sK(t53);
      t53 = t53.nextSibling;
    } else this.dom.insertBefore(e10.dom, t53);
    for (; t53; ) t53 = sK(t53);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (this.container && this.classes != this.view.themeClasses) {
      for (let t53 of this.classes.split(" ")) t53 && this.container.classList.remove(t53);
      for (let t53 of (this.classes = this.view.themeClasses).split(" ")) t53 && this.container.classList.add(t53);
    }
  }
}
function sK(t53) {
  let e10 = t53.nextSibling;
  return t53.remove(), e10;
}
let sq = J.define({ enables: sW }), s_ = class extends tL {
  compare(t53) {
    return this == t53 || this.constructor == t53.constructor && this.eq(t53);
  }
  eq(t53) {
    return false;
  }
  destroy(t53) {
  }
};
s_.prototype.elementClass = "", s_.prototype.toDOM = void 0, s_.prototype.mapMode = I.TrackBefore, s_.prototype.startSide = s_.prototype.endSide = -1, s_.prototype.point = true;
let sj = J.define(), sG = J.define(), sU = J.define({ combine: (t53) => t53.some((t54) => t54) }), s$ = iE.fromClass(class {
  constructor(t53) {
    for (let e10 of (this.view = t53, this.prevViewport = t53.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = t53.state.facet(sG).map((e11) => new sQ(t53, e11)), this.gutters)) this.dom.appendChild(e10.dom);
    this.fixed = !t53.state.facet(sU), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), t53.scrollDOM.insertBefore(this.dom, t53.contentDOM);
  }
  update(t53) {
    if (this.updateGutters(t53)) {
      let e10 = this.prevViewport, i10 = t53.view.viewport, n10 = Math.min(e10.to, i10.to) - Math.max(e10.from, i10.from);
      this.syncGutters(n10 < (i10.to - i10.from) * 0.8);
    }
    t53.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(sU) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t53.view.viewport;
  }
  syncGutters(t53) {
    let e10 = this.dom.nextSibling;
    t53 && this.dom.remove();
    let i10 = tV.iter(this.view.state.facet(sj), this.view.viewport.from), n10 = [], s10 = this.gutters.map((t54) => new sJ(t54, this.view.viewport, -this.view.documentPadding.top));
    for (let t54 of this.view.viewportLineBlocks) if (n10.length && (n10 = []), Array.isArray(t54.type)) {
      let e11 = true;
      for (let o10 of t54.type) if (o10.type == eJ.Text && e11) {
        for (let t55 of (sX(i10, n10, o10.from), s10)) t55.line(this.view, o10, n10);
        e11 = false;
      } else if (o10.widget) for (let t55 of s10) t55.widget(this.view, o10);
    } else if (t54.type == eJ.Text) for (let e11 of (sX(i10, n10, t54.from), s10)) e11.line(this.view, t54, n10);
    else if (t54.widget) for (let e11 of s10) e11.widget(this.view, t54);
    for (let t54 of s10) t54.finish();
    t53 && this.view.scrollDOM.insertBefore(this.dom, e10);
  }
  updateGutters(t53) {
    let e10 = t53.startState.facet(sG), i10 = t53.state.facet(sG), n10 = t53.docChanged || t53.heightChanged || t53.viewportChanged || !tV.eq(t53.startState.facet(sj), t53.state.facet(sj), t53.view.viewport.from, t53.view.viewport.to);
    if (e10 == i10) for (let e11 of this.gutters) e11.update(t53) && (n10 = true);
    else {
      n10 = true;
      let s10 = [];
      for (let n11 of i10) {
        let i11 = e10.indexOf(n11);
        i11 < 0 ? s10.push(new sQ(this.view, n11)) : (this.gutters[i11].update(t53), s10.push(this.gutters[i11]));
      }
      for (let t54 of this.gutters) t54.dom.remove(), 0 > s10.indexOf(t54) && t54.destroy();
      for (let t54 of s10) this.dom.appendChild(t54.dom);
      this.gutters = s10;
    }
    return n10;
  }
  destroy() {
    for (let t53 of this.gutters) t53.destroy();
    this.dom.remove();
  }
}, { provide: (t53) => n5.scrollMargins.of((e10) => {
  let i10 = e10.plugin(t53);
  return i10 && 0 != i10.gutters.length && i10.fixed ? e10.textDirection == e9.LTR ? { left: i10.dom.offsetWidth * e10.scaleX } : { right: i10.dom.offsetWidth * e10.scaleX } : null;
}) });
function sY(t53) {
  return Array.isArray(t53) ? t53 : [t53];
}
function sX(t53, e10, i10) {
  for (; t53.value && t53.from <= i10; ) t53.from == i10 && e10.push(t53.value), t53.next();
}
let sJ = class {
  constructor(t53, e10, i10) {
    this.gutter = t53, this.height = i10, this.i = 0, this.cursor = tV.iter(t53.markers, e10.from);
  }
  addElement(t53, e10, i10) {
    let { gutter: n10 } = this, s10 = (e10.top - this.height) / t53.scaleY, o10 = e10.height / t53.scaleY;
    if (this.i == n10.elements.length) {
      let e11 = new sZ(t53, o10, s10, i10);
      n10.elements.push(e11), n10.dom.appendChild(e11.dom);
    } else n10.elements[this.i].update(t53, o10, s10, i10);
    this.height = e10.bottom, this.i++;
  }
  line(t53, e10, i10) {
    let n10 = [];
    sX(this.cursor, n10, e10.from), i10.length && (n10 = n10.concat(i10));
    let s10 = this.gutter.config.lineMarker(t53, e10, n10);
    s10 && n10.unshift(s10);
    let o10 = this.gutter;
    (0 != n10.length || o10.config.renderEmptyElements) && this.addElement(t53, e10, n10);
  }
  widget(t53, e10) {
    let i10 = this.gutter.config.widgetMarker(t53, e10.widget, e10);
    i10 && this.addElement(t53, e10, [i10]);
  }
  finish() {
    let t53 = this.gutter;
    for (; t53.elements.length > this.i; ) {
      let e10 = t53.elements.pop();
      t53.dom.removeChild(e10.dom), e10.destroy();
    }
  }
}, sQ = class {
  constructor(t53, e10) {
    for (let i10 in this.view = t53, this.config = e10, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : ""), e10.domEventHandlers) this.dom.addEventListener(i10, (n10) => {
      let s10 = n10.target, o10;
      if (s10 != this.dom && this.dom.contains(s10)) {
        for (; s10.parentNode != this.dom; ) s10 = s10.parentNode;
        let t54 = s10.getBoundingClientRect();
        o10 = (t54.top + t54.bottom) / 2;
      } else o10 = n10.clientY;
      let r10 = t53.lineBlockAtHeight(o10 - t53.documentTop);
      e10.domEventHandlers[i10](t53, r10, n10) && n10.preventDefault();
    });
    this.markers = sY(e10.markers(t53)), e10.initialSpacer && (this.spacer = new sZ(t53, 0, 0, [e10.initialSpacer(t53)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t53) {
    let e10 = this.markers;
    if (this.markers = sY(this.config.markers(t53.view)), this.spacer && this.config.updateSpacer) {
      let e11 = this.config.updateSpacer(this.spacer.markers[0], t53);
      e11 != this.spacer.markers[0] && this.spacer.update(t53.view, 0, 0, [e11]);
    }
    let i10 = t53.view.viewport;
    return !tV.eq(this.markers, e10, i10.from, i10.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(t53);
  }
  destroy() {
    for (let t53 of this.elements) t53.destroy();
  }
}, sZ = class {
  constructor(t53, e10, i10, n10) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t53, e10, i10, n10);
  }
  update(t53, e10, i10, n10) {
    this.height != e10 && (this.height = e10, this.dom.style.height = e10 + "px"), this.above != i10 && (this.dom.style.marginTop = (this.above = i10) ? i10 + "px" : ""), !function(t54, e11) {
      if (t54.length != e11.length) return false;
      for (let i11 = 0; i11 < t54.length; i11++) if (!t54[i11].compare(e11[i11])) return false;
      return true;
    }(this.markers, n10) && this.setMarkers(t53, n10);
  }
  setMarkers(t53, e10) {
    let i10 = "cm-gutterElement", n10 = this.dom.firstChild;
    for (let s10 = 0, o10 = 0; ; ) {
      let r10 = o10, l10 = s10 < e10.length ? e10[s10++] : null, h10 = false;
      if (l10) {
        let t54 = l10.elementClass;
        t54 && (i10 += " " + t54);
        for (let t55 = o10; t55 < this.markers.length; t55++) if (this.markers[t55].compare(l10)) {
          r10 = t55, h10 = true;
          break;
        }
      } else r10 = this.markers.length;
      for (; o10 < r10; ) {
        let t54 = this.markers[o10++];
        if (t54.toDOM) {
          t54.destroy(n10);
          let e11 = n10.nextSibling;
          n10.remove(), n10 = e11;
        }
      }
      if (!l10) break;
      l10.toDOM && (h10 ? n10 = n10.nextSibling : this.dom.insertBefore(l10.toDOM(t53), n10)), h10 && o10++;
    }
    this.dom.className = i10, this.markers = e10;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}, s0 = J.define(), s1 = J.define({ combine: (t53) => tR(t53, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(t54, e10) {
  let i10 = Object.assign({}, t54);
  for (let t55 in e10) {
    let n10 = i10[t55], s10 = e10[t55];
    i10[t55] = n10 ? (t56, e11, i11) => n10(t56, e11, i11) || s10(t56, e11, i11) : s10;
  }
  return i10;
} }) });
class s2 extends s_ {
  constructor(t53) {
    super(), this.number = t53;
  }
  eq(t53) {
    return this.number == t53.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function s8(t53, e10) {
  return t53.state.facet(s1).formatNumber(e10, t53.state);
}
let s3 = sG.compute([s1], (t53) => ({ class: "cm-lineNumbers", renderEmptyElements: false, markers: (t54) => t54.state.facet(s0), lineMarker: (t54, e10, i10) => i10.some((t55) => t55.toDOM) ? null : new s2(s8(t54, t54.state.doc.lineAt(e10.from).number)), widgetMarker: () => null, lineMarkerChange: (t54) => t54.startState.facet(s1) != t54.state.facet(s1), initialSpacer: (t54) => new s2(s8(t54, s5(t54.state.doc.lines))), updateSpacer(t54, e10) {
  let i10 = s8(e10.view, s5(e10.view.state.doc.lines));
  return i10 == t54.number ? t54 : new s2(i10);
}, domEventHandlers: t53.facet(s1).domEventHandlers }));
function s4() {
  let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return [s1.of(t53), [s$], s3];
}
function s5(t53) {
  let e10 = 9;
  for (; e10 < t53; ) e10 = 10 * e10 + 9;
  return e10;
}
let s9 = new class extends s_ {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), s6 = sj.compute(["selection"], (t53) => {
  let e10 = [], i10 = -1;
  for (let n10 of t53.selection.ranges) {
    let s10 = t53.doc.lineAt(n10.head).from;
    s10 > i10 && (i10 = s10, e10.push(s9.range(s10)));
  }
  return tV.of(e10);
});
function s7() {
  return s6;
}
function ot() {
  var t53 = arguments[0];
  "string" == typeof t53 && (t53 = document.createElement(t53));
  var e10 = 1, i10 = arguments[1];
  if (i10 && "object" == typeof i10 && null == i10.nodeType && !Array.isArray(i10)) {
    for (var n10 in i10) if (Object.prototype.hasOwnProperty.call(i10, n10)) {
      var s10 = i10[n10];
      "string" == typeof s10 ? t53.setAttribute(n10, s10) : null != s10 && (t53[n10] = s10);
    }
    e10++;
  }
  for (; e10 < arguments.length; e10++) !function t54(e11, i11) {
    if ("string" == typeof i11) e11.appendChild(document.createTextNode(i11));
    else if (null == i11) ;
    else if (null != i11.nodeType) e11.appendChild(i11);
    else if (Array.isArray(i11)) for (var n11 = 0; n11 < i11.length; n11++) t54(e11, i11[n11]);
    else throw RangeError("Unsupported child node: " + i11);
  }(t53, arguments[e10]);
  return t53;
}
class oe {
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.diagnostic = i10;
  }
}
class oi {
  constructor(t53, e10, i10) {
    this.diagnostics = t53, this.panel = e10, this.selected = i10;
  }
  static init(t53, e10, i10) {
    let n10 = t53, s10 = i10.facet(om).markerFilter;
    s10 && (n10 = s10(n10, i10));
    let o10 = eQ.set(n10.map((t54) => t54.from == t54.to || t54.from == t54.to - 1 && i10.doc.lineAt(t54.from).to == t54.from ? eQ.widget({ widget: new ox(t54), diagnostic: t54 }).range(t54.from) : eQ.mark({ attributes: { class: "cm-lintRange cm-lintRange-" + t54.severity + (t54.markClass ? " " + t54.markClass : "") }, diagnostic: t54 }).range(t54.from, t54.to)), true);
    return new oi(o10, e10, on(o10));
  }
}
function on(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = null;
  return t53.between(i10, 1e9, (t54, i11, s10) => {
    let { spec: o10 } = s10;
    if (!e10 || o10.diagnostic == e10) return n10 = new oe(t54, i11, o10.diagnostic), false;
  }), n10;
}
function os(t53, e10) {
  let i10 = e10.pos, n10 = e10.end || i10, s10 = t53.state.facet(om).hideOn(t53, i10, n10);
  if (null != s10) return s10;
  let o10 = t53.startState.doc.lineAt(e10.pos);
  return !!(t53.effects.some((t54) => t54.is(or)) || t53.changes.touchesRange(o10.from, Math.max(o10.to, n10)));
}
function oo(t53, e10) {
  return t53.field(oa, false) ? e10 : e10.concat(tk.appendConfig.of(oP));
}
let or = tk.define(), ol = tk.define(), oh = tk.define(), oa = tn.define({ create: () => new oi(eQ.none, null, null), update(t53, e10) {
  if (e10.docChanged && t53.diagnostics.size) {
    let i10 = t53.diagnostics.map(e10.changes), n10 = null, s10 = t53.panel;
    if (t53.selected) {
      let s11 = e10.changes.mapPos(t53.selected.from, 1);
      n10 = on(i10, t53.selected.diagnostic, s11) || on(i10, null, s11);
    }
    !i10.size && s10 && e10.state.facet(om).autoPanel && (s10 = null), t53 = new oi(i10, s10, n10);
  }
  for (let i10 of e10.effects) if (i10.is(or)) {
    let n10 = e10.state.facet(om).autoPanel ? i10.value.length ? ok.open : null : t53.panel;
    t53 = oi.init(i10.value, n10, e10.state);
  } else i10.is(ol) ? t53 = new oi(t53.diagnostics, i10.value ? ok.open : null, t53.selected) : i10.is(oh) && (t53 = new oi(t53.diagnostics, t53.panel, i10.value));
  return t53;
}, provide: (t53) => [sq.from(t53, (t54) => t54.panel), n5.decorations.from(t53, (t54) => t54.diagnostics)] });
function oc(t53) {
  let e10 = t53.field(oa, false);
  return e10 ? e10.diagnostics.size : 0;
}
let od = eQ.mark({ class: "cm-lintRange cm-lintRange-active" });
function ou(t53, e10) {
  return ot("ul", { class: "cm-tooltip-lint" }, e10.map((e11) => oy(t53, e11, false)));
}
let of = (t53) => {
  let e10 = t53.state.field(oa, false);
  return !!e10 && !!e10.panel && (t53.dispatch({ effects: ol.of(false) }), true);
}, og = [{ key: "Mod-Shift-m", run: (t53) => {
  var e10;
  let i10, n10, s10 = t53.state.field(oa, false);
  s10 && s10.panel || t53.dispatch({ effects: oo(t53.state, [ol.of(true)]) });
  let o10 = (e10 = ok.open, (n10 = (i10 = t53.plugin(sW)) ? i10.specs.indexOf(e10) : -1) > -1 ? i10.panels[n10] : null);
  return o10 && o10.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, preventDefault: true }, { key: "F8", run: (t53) => {
  let e10 = t53.state.field(oa, false);
  if (!e10) return false;
  let i10 = t53.state.selection.main, n10 = e10.diagnostics.iter(i10.to + 1);
  return (!!n10.value || !!(n10 = e10.diagnostics.iter(0)).value && (n10.from != i10.from || n10.to != i10.to)) && (t53.dispatch({ selection: { anchor: n10.from, head: n10.to }, scrollIntoView: true }), true);
} }], op = iE.fromClass(class {
  constructor(t53) {
    this.view = t53, this.timeout = -1, this.set = true;
    let { delay: e10 } = t53.state.facet(om);
    this.lintTime = Date.now() + e10, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e10);
  }
  run() {
    clearTimeout(this.timeout);
    let t53 = Date.now();
    if (t53 < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - t53);
    else {
      this.set = false;
      let { state: t54 } = this.view, { sources: e10 } = t54.facet(om);
      e10.length && Promise.all(e10.map((t55) => Promise.resolve(t55(this.view)))).then((e11) => {
        let i10 = e11.reduce((t55, e12) => t55.concat(e12));
        this.view.state.doc == t54.doc && this.view.dispatch({ effects: oo(this.view.state, [or.of(i10)]) });
      }, (t55) => {
        iC(this.view.state, t55);
      });
    }
  }
  update(t53) {
    let e10 = t53.state.facet(om);
    (t53.docChanged || e10 != t53.startState.facet(om) || e10.needsRefresh && e10.needsRefresh(t53)) && (this.lintTime = Date.now() + e10.delay, this.set || (this.set = true, this.timeout = setTimeout(this.run, e10.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
}), om = J.define({ combine: (t53) => Object.assign({ sources: t53.map((t54) => t54.source).filter((t54) => null != t54) }, tR(t53.map((t54) => t54.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { needsRefresh: (t54, e10) => t54 ? e10 ? (i10) => t54(i10) || e10(i10) : t54 : e10 })) });
function ov(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return [om.of({ source: t53, config: e10 }), op, oP];
}
function ow(t53) {
  let e10 = t53.plugin(op);
  e10 && e10.force();
}
function ob(t53) {
  let e10 = [];
  if (t53) i: for (let { name: i10 } of t53) {
    for (let t54 = 0; t54 < i10.length; t54++) {
      let n10 = i10[t54];
      if (/[a-zA-Z]/.test(n10) && !e10.some((t55) => t55.toLowerCase() == n10.toLowerCase())) {
        e10.push(n10);
        continue i;
      }
    }
    e10.push("");
  }
  return e10;
}
function oy(t53, e10, i10) {
  var n10;
  let s10 = i10 ? ob(e10.actions) : [];
  return ot("li", { class: "cm-diagnostic cm-diagnostic-" + e10.severity }, ot("span", { class: "cm-diagnosticText" }, e10.renderMessage ? e10.renderMessage(t53) : e10.message), null === (n10 = e10.actions) || void 0 === n10 ? void 0 : n10.map((i11, n11) => {
    let o10 = false, r10 = (n12) => {
      if (n12.preventDefault(), o10) return;
      o10 = true;
      let s11 = on(t53.state.field(oa).diagnostics, e10);
      s11 && i11.apply(t53, s11.from, s11.to);
    }, { name: l10 } = i11, h10 = s10[n11] ? l10.indexOf(s10[n11]) : -1, a10 = h10 < 0 ? l10 : [l10.slice(0, h10), ot("u", l10.slice(h10, h10 + 1)), l10.slice(h10 + 1)];
    return ot("button", { type: "button", class: "cm-diagnosticAction", onclick: r10, onmousedown: r10, "aria-label": ` Action: ${l10}${h10 < 0 ? "" : ` (access key "${s10[n11]})"`}.` }, a10);
  }), e10.source && ot("div", { class: "cm-diagnosticSource" }, e10.source));
}
class ox extends eX {
  constructor(t53) {
    super(), this.diagnostic = t53;
  }
  eq(t53) {
    return t53.diagnostic == this.diagnostic;
  }
  toDOM() {
    return ot("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class oS {
  constructor(t53, e10) {
    this.diagnostic = e10, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = oy(t53, e10, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class ok {
  constructor(t53) {
    this.view = t53, this.items = [], this.list = ot("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: (e10) => {
      if (27 == e10.keyCode) of(this.view), this.view.focus();
      else if (38 == e10.keyCode || 33 == e10.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (40 == e10.keyCode || 34 == e10.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (36 == e10.keyCode) this.moveSelection(0);
      else if (35 == e10.keyCode) this.moveSelection(this.items.length - 1);
      else if (13 == e10.keyCode) this.view.focus();
      else {
        if (!(e10.keyCode >= 65) || !(e10.keyCode <= 90) || !(this.selectedIndex >= 0)) return;
        let { diagnostic: i10 } = this.items[this.selectedIndex], n10 = ob(i10.actions);
        for (let s10 = 0; s10 < n10.length; s10++) if (n10[s10].toUpperCase().charCodeAt(0) == e10.keyCode) {
          let e11 = on(this.view.state.field(oa).diagnostics, i10);
          e11 && i10.actions[s10].apply(t53, e11.from, e11.to);
        }
      }
      e10.preventDefault();
    }, onclick: (t54) => {
      for (let e10 = 0; e10 < this.items.length; e10++) this.items[e10].dom.contains(t54.target) && this.moveSelection(e10);
    } }), this.dom = ot("div", { class: "cm-panel-lint" }, this.list, ot("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => of(this.view) }, "×")), this.update();
  }
  get selectedIndex() {
    let t53 = this.view.state.field(oa).selected;
    if (!t53) return -1;
    for (let e10 = 0; e10 < this.items.length; e10++) if (this.items[e10].diagnostic == t53.diagnostic) return e10;
    return -1;
  }
  update() {
    let { diagnostics: t53, selected: e10 } = this.view.state.field(oa), i10 = 0, n10 = false, s10 = null;
    for (t53.between(0, this.view.state.doc.length, (t54, o10, r10) => {
      let { spec: l10 } = r10, h10 = -1, a10;
      for (let t55 = i10; t55 < this.items.length; t55++) if (this.items[t55].diagnostic == l10.diagnostic) {
        h10 = t55;
        break;
      }
      h10 < 0 ? (a10 = new oS(this.view, l10.diagnostic), this.items.splice(i10, 0, a10), n10 = true) : (a10 = this.items[h10], h10 > i10 && (this.items.splice(i10, h10 - i10), n10 = true)), e10 && a10.diagnostic == e10.diagnostic ? a10.dom.hasAttribute("aria-selected") || (a10.dom.setAttribute("aria-selected", "true"), s10 = a10) : a10.dom.hasAttribute("aria-selected") && a10.dom.removeAttribute("aria-selected"), i10++;
    }); i10 < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0); ) n10 = true, this.items.pop();
    0 == this.items.length && (this.items.push(new oS(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), n10 = true), s10 ? (this.list.setAttribute("aria-activedescendant", s10.id), this.view.requestMeasure({ key: this, read: () => ({ sel: s10.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: (t54) => {
      let { sel: e11, panel: i11 } = t54, n11 = i11.height / this.list.offsetHeight;
      e11.top < i11.top ? this.list.scrollTop -= (i11.top - e11.top) / n11 : e11.bottom > i11.bottom && (this.list.scrollTop += (e11.bottom - i11.bottom) / n11);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), n10 && this.sync();
  }
  sync() {
    let t53 = this.list.firstChild;
    function e10() {
      let e11 = t53;
      t53 = e11.nextSibling, e11.remove();
    }
    for (let i10 of this.items) if (i10.dom.parentNode == this.list) {
      for (; t53 != i10.dom; ) e10();
      t53 = i10.dom.nextSibling;
    } else this.list.insertBefore(i10.dom, t53);
    for (; t53; ) e10();
  }
  moveSelection(t53) {
    if (this.selectedIndex < 0) return;
    let e10 = on(this.view.state.field(oa).diagnostics, this.items[t53].diagnostic);
    e10 && this.view.dispatch({ selection: { anchor: e10.from, head: e10.to }, scrollIntoView: true, effects: oh.of(e10) });
  }
  static open(t53) {
    return new ok(t53);
  }
}
function oM(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'viewBox="0 0 40 40"';
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e10}>${encodeURIComponent(t53)}</svg>')`;
}
function oA(t53) {
  return oM(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t53}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
let oC = n5.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: oA("#d11") }, ".cm-lintRange-warning": { backgroundImage: oA("orange") }, ".cm-lintRange-info": { backgroundImage: oA("#999") }, ".cm-lintRange-hint": { backgroundImage: oA("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } });
function oD(t53) {
  return "error" == t53 ? 4 : "warning" == t53 ? 3 : "info" == t53 ? 2 : 1;
}
class oO extends s_ {
  constructor(t53) {
    super(), this.diagnostics = t53, this.severity = t53.reduce((t54, e10) => oD(t54) < oD(e10.severity) ? e10.severity : t54, "hint");
  }
  toDOM(t53) {
    let e10 = document.createElement("div");
    e10.className = "cm-lint-marker cm-lint-marker-" + this.severity;
    let i10 = this.diagnostics, n10 = t53.state.facet(oN).tooltipFilter;
    return n10 && (i10 = n10(i10, t53.state)), i10.length && (e10.onmouseover = () => function(t54, e11, i11) {
      function n11() {
        let n12, s11 = t54.elementAtHeight(e11.getBoundingClientRect().top + 5 - t54.documentTop);
        t54.coordsAtPos(s11.from) && t54.dispatch({ effects: oB.of({ pos: s11.from, above: false, create: () => ({ dom: ou(t54, i11), getCoords: () => e11.getBoundingClientRect() }) }) }), e11.onmouseout = e11.onmousemove = null, n12 = (i12) => {
          let s12 = e11.getBoundingClientRect();
          if (!(i12.clientX > s12.left - 10) || !(i12.clientX < s12.right + 10) || !(i12.clientY > s12.top - 10) || !(i12.clientY < s12.bottom + 10)) {
            for (let t55 = i12.target; t55; t55 = t55.parentNode) if (1 == t55.nodeType && t55.classList.contains("cm-tooltip-lint")) return;
            window.removeEventListener("mousemove", n12), t54.state.field(oR) && t54.dispatch({ effects: oB.of(null) });
          }
        }, window.addEventListener("mousemove", n12);
      }
      let { hoverTime: s10 } = t54.state.facet(oN), o10 = setTimeout(n11, s10);
      e11.onmouseout = () => {
        clearTimeout(o10), e11.onmouseout = e11.onmousemove = null;
      }, e11.onmousemove = () => {
        clearTimeout(o10), o10 = setTimeout(n11, s10);
      };
    }(t53, e10, i10)), e10;
  }
}
let oT = (D = { class: "cm-gutter-lint", markers: (t53) => t53.state.field(oE) }, [[s$], sG.of(Object.assign(Object.assign({}, { class: "", renderEmptyElements: false, elementStyle: "", markers: () => tV.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {} }), D))]), oE = tn.define({ create: () => tV.empty, update(t53, e10) {
  t53 = t53.map(e10.changes);
  let i10 = e10.state.facet(oN).markerFilter;
  for (let n10 of e10.effects) if (n10.is(or)) {
    let s10 = n10.value;
    i10 && (s10 = i10(s10 || [], e10.state)), t53 = function(t54, e11) {
      let i11 = /* @__PURE__ */ Object.create(null);
      for (let n12 of e11) {
        let e12 = t54.lineAt(n12.from);
        (i11[e12.from] || (i11[e12.from] = [])).push(n12);
      }
      let n11 = [];
      for (let t55 in i11) n11.push(new oO(i11[t55]).range(+t55));
      return tV.of(n11, true);
    }(e10.state.doc, s10.slice(0));
  }
  return t53;
} }), oB = tk.define(), oR = tn.define({ create: () => null, update: (t53, e10) => (t53 && e10.docChanged && (t53 = os(e10, t53) ? null : Object.assign(Object.assign({}, t53), { pos: e10.changes.mapPos(t53.pos) })), e10.effects.reduce((t54, e11) => e11.is(oB) ? e11.value : t54, t53)), provide: (t53) => sR.from(t53) }), oL = n5.baseTheme({ ".cm-gutter-lint": { width: "1.4em", "& .cm-gutterElement": { padding: ".2em" } }, ".cm-lint-marker": { width: "1em", height: "1em" }, ".cm-lint-marker-info": { content: oM('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>') }, ".cm-lint-marker-warning": { content: oM('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>') }, ".cm-lint-marker-error": { content: oM('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>') } }), oP = [oa, n5.decorations.compute([oa], (t53) => {
  let { selected: e10, panel: i10 } = t53.field(oa);
  return e10 && i10 && e10.from != e10.to ? eQ.set([od.range(e10.from, e10.to)]) : eQ.none;
}), function(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i10 = tk.define(), n10 = tn.define({ create: () => [], update(t54, n11) {
    if (t54.length && (e10.hideOnChange && (n11.docChanged || n11.selection) ? t54 = [] : e10.hideOn && (t54 = t54.filter((t55) => !e10.hideOn(n11, t55))), n11.docChanged)) {
      let e11 = [];
      for (let i11 of t54) {
        let t55 = n11.changes.mapPos(i11.pos, -1, I.TrackDel);
        if (null != t55) {
          let s10 = Object.assign(/* @__PURE__ */ Object.create(null), i11);
          s10.pos = t55, null != s10.end && (s10.end = n11.changes.mapPos(s10.end)), e11.push(s10);
        }
      }
      t54 = e11;
    }
    for (let e11 of n11.effects) e11.is(i10) && (t54 = e11.value), e11.is(sI) && (t54 = []);
    return t54;
  }, provide: (t54) => sL.from(t54) });
  return [n10, iE.define((s10) => new sH(s10, t53, n10, i10, e10.hoverTime || 300)), sN];
}(function(t53, e10, i10) {
  let { diagnostics: n10 } = t53.state.field(oa), s10 = [], o10 = 2e8, r10 = 0;
  n10.between(e10 - (i10 < 0 ? 1 : 0), e10 + (i10 > 0 ? 1 : 0), (t54, n11, l11) => {
    let { spec: h10 } = l11;
    e10 >= t54 && e10 <= n11 && (t54 == n11 || (e10 > t54 || i10 > 0) && (e10 < n11 || i10 < 0)) && (s10.push(h10.diagnostic), o10 = Math.min(t54, o10), r10 = Math.max(n11, r10));
  });
  let l10 = t53.state.facet(om).tooltipFilter;
  return (l10 && (s10 = l10(s10, t53.state)), s10.length) ? { pos: o10, end: r10, above: t53.state.doc.lineAt(o10).to < r10, create: () => ({ dom: ou(t53, s10) }) } : null;
}, { hideOn: os }), oC], oN = J.define({ combine: (t53) => tR(t53, { hoverTime: 300, markerFilter: null, tooltipFilter: null }) });
function oH() {
  let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return [oN.of(t53), oE, oT, oL, oR];
}
let oV = 1024, oI = 0;
class oF {
  constructor(t53, e10) {
    this.from = t53, this.to = e10;
  }
}
class oW {
  constructor(t53 = {}) {
    this.id = oI++, this.perNode = !!t53.perNode, this.deserialize = t53.deserialize || (() => {
      throw Error("This node type doesn't define a deserialize function");
    });
  }
  add(t53) {
    if (this.perNode) throw RangeError("Can't add per-node props to node types");
    return "function" != typeof t53 && (t53 = oq.match(t53)), (e10) => {
      let i10 = t53(e10);
      return void 0 === i10 ? null : [this, i10];
    };
  }
}
oW.closedBy = new oW({ deserialize: (t53) => t53.split(" ") }), oW.openedBy = new oW({ deserialize: (t53) => t53.split(" ") }), oW.group = new oW({ deserialize: (t53) => t53.split(" ") }), oW.isolate = new oW({ deserialize: (t53) => {
  if (t53 && "rtl" != t53 && "ltr" != t53 && "auto" != t53) throw RangeError("Invalid value for isolate: " + t53);
  return t53 || "auto";
} }), oW.contextHash = new oW({ perNode: true }), oW.lookAhead = new oW({ perNode: true }), oW.mounted = new oW({ perNode: true });
class oz {
  constructor(t53, e10, i10) {
    this.tree = t53, this.overlay = e10, this.parser = i10;
  }
  static get(t53) {
    return t53 && t53.props && t53.props[oW.mounted.id];
  }
}
let oK = /* @__PURE__ */ Object.create(null);
class oq {
  constructor(t53, e10, i10, n10 = 0) {
    this.name = t53, this.props = e10, this.id = i10, this.flags = n10;
  }
  static define(t53) {
    let e10 = t53.props && t53.props.length ? /* @__PURE__ */ Object.create(null) : oK, i10 = (t53.top ? 1 : 0) | (t53.skipped ? 2 : 0) | (t53.error ? 4 : 0) | (null == t53.name ? 8 : 0), n10 = new oq(t53.name || "", e10, t53.id, i10);
    if (t53.props) {
      for (let i11 of t53.props) if (Array.isArray(i11) || (i11 = i11(n10)), i11) {
        if (i11[0].perNode) throw RangeError("Can't store a per-node prop on a node type");
        e10[i11[0].id] = i11[1];
      }
    }
    return n10;
  }
  prop(t53) {
    return this.props[t53.id];
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
  is(t53) {
    if ("string" == typeof t53) {
      if (this.name == t53) return true;
      let e10 = this.prop(oW.group);
      return !!e10 && e10.indexOf(t53) > -1;
    }
    return this.id == t53;
  }
  static match(t53) {
    let e10 = /* @__PURE__ */ Object.create(null);
    for (let i10 in t53) for (let n10 of i10.split(" ")) e10[n10] = t53[i10];
    return (t54) => {
      for (let i10 = t54.prop(oW.group), n10 = -1; n10 < (i10 ? i10.length : 0); n10++) {
        let s10 = e10[n10 < 0 ? t54.name : i10[n10]];
        if (s10) return s10;
      }
    };
  }
}
oq.none = new oq("", /* @__PURE__ */ Object.create(null), 0, 8);
class o_ {
  constructor(t53) {
    this.types = t53;
    for (let e10 = 0; e10 < t53.length; e10++) if (t53[e10].id != e10) throw RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  extend() {
    for (var t53 = arguments.length, e10 = Array(t53), i10 = 0; i10 < t53; i10++) e10[i10] = arguments[i10];
    let n10 = [];
    for (let t54 of this.types) {
      let i11 = null;
      for (let n11 of e10) {
        let e11 = n11(t54);
        e11 && (i11 || (i11 = Object.assign({}, t54.props)), i11[e11[0].id] = e11[1]);
      }
      n10.push(i11 ? new oq(t54.name, i11, t54.id, t54.flags) : t54);
    }
    return new o_(n10);
  }
}
let oj = /* @__PURE__ */ new WeakMap(), oG = /* @__PURE__ */ new WeakMap();
(O = H || (H = {}))[O.ExcludeBuffers = 1] = "ExcludeBuffers", O[O.IncludeAnonymous = 2] = "IncludeAnonymous", O[O.IgnoreMounts = 4] = "IgnoreMounts", O[O.IgnoreOverlays = 8] = "IgnoreOverlays";
class oU {
  constructor(t53, e10, i10, n10, s10) {
    if (this.type = t53, this.children = e10, this.positions = i10, this.length = n10, this.props = null, s10 && s10.length) for (let [t54, e11] of (this.props = /* @__PURE__ */ Object.create(null), s10)) this.props["number" == typeof t54 ? t54 : t54.id] = e11;
  }
  toString() {
    let t53 = oz.get(this);
    if (t53 && !t53.overlay) return t53.tree.toString();
    let e10 = "";
    for (let t54 of this.children) {
      let i10 = t54.toString();
      i10 && (e10 && (e10 += ","), e10 += i10);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e10.length ? "(" + e10 + ")" : "") : e10;
  }
  cursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return new o5(this.topNode, t53);
  }
  cursorAt(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    let i10 = new o5(oj.get(this) || this.topNode);
    return i10.moveTo(t53, e10), oj.set(this, i10._tree), i10;
  }
  get topNode() {
    return new oZ(this, 0, 0, null);
  }
  resolve(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = oJ(oj.get(this) || this.topNode, t53, e10, false);
    return oj.set(this, i10), i10;
  }
  resolveInner(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = oJ(oG.get(this) || this.topNode, t53, e10, true);
    return oG.set(this, i10), i10;
  }
  resolveStack(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return function(t54, e11, i10) {
      let n10 = t54.resolveInner(e11, i10), s10 = null;
      for (let t55 = n10 instanceof oZ ? n10 : n10.context.parent; t55; t55 = t55.parent) if (t55.index < 0) {
        let o10 = t55.parent;
        (s10 || (s10 = [n10])).push(o10.resolve(e11, i10)), t55 = o10;
      } else {
        let o10 = oz.get(t55.tree);
        if (o10 && o10.overlay && o10.overlay[0].from <= e11 && o10.overlay[o10.overlay.length - 1].to >= e11) {
          let r10 = new oZ(o10.tree, o10.overlay[0].from + t55.from, -1, t55);
          (s10 || (s10 = [n10])).push(oJ(r10, e11, i10, false));
        }
      }
      return s10 ? o3(s10) : n10;
    }(this, t53, e10);
  }
  iterate(t53) {
    let { enter: e10, leave: i10, from: n10 = 0, to: s10 = this.length } = t53, o10 = t53.mode || 0, r10 = (o10 & H.IncludeAnonymous) > 0;
    for (let t54 = this.cursor(o10 | H.IncludeAnonymous); ; ) {
      let o11 = false;
      if (t54.from <= s10 && t54.to >= n10 && (!r10 && t54.type.isAnonymous || false !== e10(t54))) {
        if (t54.firstChild()) continue;
        o11 = true;
      }
      for (; o11 && i10 && (r10 || !t54.type.isAnonymous) && i10(t54), !t54.nextSibling(); ) {
        if (!t54.parent()) return;
        o11 = true;
      }
    }
  }
  prop(t53) {
    return t53.perNode ? this.props ? this.props[t53.id] : void 0 : this.type.prop(t53);
  }
  get propValues() {
    let t53 = [];
    if (this.props) for (let e10 in this.props) t53.push([+e10, this.props[e10]]);
    return t53;
  }
  balance() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return this.children.length <= 8 ? this : rt(oq.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t54, e10, i10) => new oU(this.type, t54, e10, i10, this.propValues), t53.makeTree || ((t54, e10, i10) => new oU(oq.none, t54, e10, i10)));
  }
  static build(t53) {
    return function(t54) {
      var e10;
      let { buffer: i10, nodeSet: n10, maxBufferLength: s10 = oV, reused: o10 = [], minRepeatType: r10 = n10.types.length } = t54, l10 = Array.isArray(i10) ? new o$(i10, i10.length) : i10, h10 = n10.types, a10 = 0, c10 = 0;
      function d10(t55, e11, i11, s11, o11, r11, l11, h11) {
        let a11 = [], c11 = [];
        for (; t55.length > s11; ) a11.push(t55.pop()), c11.push(e11.pop() + i11 - o11);
        t55.push(u10(n10.types[l11], a11, c11, r11 - o11, h11 - r11)), e11.push(o11 - i11);
      }
      function u10(t55, e11, i11, n11) {
        let s11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o11 = arguments.length > 5 ? arguments[5] : void 0;
        if (a10) {
          let t56 = [oW.contextHash, a10];
          o11 = o11 ? [t56].concat(o11) : [t56];
        }
        if (s11 > 25) {
          let t56 = [oW.lookAhead, s11];
          o11 = o11 ? [t56].concat(o11) : [t56];
        }
        return new oU(t55, e11, i11, n11, o11);
      }
      let f10 = [], g10 = [];
      for (; l10.pos > 0; ) !function t55(e11, i11, f11, g11, p11, m2) {
        let { id: v2, start: w2, end: b2, size: y2 } = l10, x2 = c10;
        for (; y2 < 0; ) {
          if (l10.next(), -1 == y2) {
            let t56 = o10[v2];
            f11.push(t56), g11.push(w2 - e11);
            return;
          }
          if (-3 == y2) {
            a10 = v2;
            return;
          }
          if (-4 == y2) {
            c10 = v2;
            return;
          }
          throw RangeError(`Unrecognized record size: ${y2}`);
        }
        let S2 = h10[v2], k2, M2, A2 = w2 - e11;
        if (b2 - w2 <= s10 && (M2 = function(t56, e12) {
          let i12 = l10.fork(), n11 = 0, o11 = 0, h11 = 0, a11 = i12.end - s10, c11 = { size: 0, start: 0, skip: 0 };
          n: for (let s11 = i12.pos - t56; i12.pos > s11; ) {
            let t57 = i12.size;
            if (i12.id == e12 && t57 >= 0) {
              c11.size = n11, c11.start = o11, c11.skip = h11, h11 += 4, n11 += 4, i12.next();
              continue;
            }
            let l11 = i12.pos - t57;
            if (t57 < 0 || l11 < s11 || i12.start < a11) break;
            let d11 = i12.id >= r10 ? 4 : 0, u11 = i12.start;
            for (i12.next(); i12.pos > l11; ) {
              if (i12.size < 0) {
                if (-3 == i12.size) d11 += 4;
                else break n;
              } else i12.id >= r10 && (d11 += 4);
              i12.next();
            }
            o11 = u11, n11 += t57, h11 += d11;
          }
          return (e12 < 0 || n11 == t56) && (c11.size = n11, c11.start = o11, c11.skip = h11), c11.size > 4 ? c11 : void 0;
        }(l10.pos - i11, p11))) {
          let t56 = new Uint16Array(M2.size - M2.skip), i12 = l10.pos - M2.size, s11 = t56.length;
          for (; l10.pos > i12; ) s11 = function t57(e12, i13, n11) {
            let { id: s12, start: o11, end: h11, size: d11 } = l10;
            if (l10.next(), d11 >= 0 && s12 < r10) {
              let r11 = n11;
              if (d11 > 4) {
                let s13 = l10.pos - (d11 - 4);
                for (; l10.pos > s13; ) n11 = t57(e12, i13, n11);
              }
              i13[--n11] = r11, i13[--n11] = h11 - e12, i13[--n11] = o11 - e12, i13[--n11] = s12;
            } else -3 == d11 ? a10 = s12 : -4 == d11 && (c10 = s12);
            return n11;
          }(M2.start, t56, s11);
          k2 = new oY(t56, b2 - M2.start, n10), A2 = M2.start - e11;
        } else {
          let e12 = l10.pos - y2;
          l10.next();
          let i12 = [], o11 = [], h11 = v2 >= r10 ? v2 : -1, a11 = 0, c11 = b2;
          for (; l10.pos > e12; ) h11 >= 0 && l10.id == h11 && l10.size >= 0 ? (l10.end <= c11 - s10 && (d10(i12, o11, w2, a11, l10.end, c11, h11, x2), a11 = i12.length, c11 = l10.end), l10.next()) : m2 > 2500 ? function(t56, e13, i13, o12) {
            let r11 = [], h12 = 0, a12 = -1;
            for (; l10.pos > e13; ) {
              let { id: t57, start: e14, end: i14, size: n11 } = l10;
              if (n11 > 4) l10.next();
              else if (a12 > -1 && e14 < a12) break;
              else a12 < 0 && (a12 = i14 - s10), r11.push(t57, e14, i14), h12++, l10.next();
            }
            if (h12) {
              let e14 = new Uint16Array(4 * h12), s11 = r11[r11.length - 2];
              for (let t57 = r11.length - 3, i14 = 0; t57 >= 0; t57 -= 3) e14[i14++] = r11[t57], e14[i14++] = r11[t57 + 1] - s11, e14[i14++] = r11[t57 + 2] - s11, e14[i14++] = i14;
              i13.push(new oY(e14, r11[2] - s11, n10)), o12.push(s11 - t56);
            }
          }(w2, e12, i12, o11) : t55(w2, e12, i12, o11, h11, m2 + 1);
          if (h11 >= 0 && a11 > 0 && a11 < i12.length && d10(i12, o11, w2, a11, w2, c11, h11, x2), i12.reverse(), o11.reverse(), h11 > -1 && a11 > 0) {
            let t56 = /* @__PURE__ */ function(t57) {
              return (e13, i13, n11) => {
                let s11 = 0, o12 = e13.length - 1, r11, l11;
                if (o12 >= 0 && (r11 = e13[o12]) instanceof oU) {
                  if (!o12 && r11.type == t57 && r11.length == n11) return r11;
                  (l11 = r11.prop(oW.lookAhead)) && (s11 = i13[o12] + r11.length + l11);
                }
                return u10(t57, e13, i13, n11, s11);
              };
            }(S2);
            k2 = rt(S2, i12, o11, 0, i12.length, 0, b2 - w2, t56, t56);
          } else k2 = u10(S2, i12, o11, b2 - w2, x2 - b2);
        }
        f11.push(k2), g11.push(A2);
      }(t54.start || 0, t54.bufferStart || 0, f10, g10, -1, 0);
      let p10 = null !== (e10 = t54.length) && void 0 !== e10 ? e10 : f10.length ? g10[0] + f10[0].length : 0;
      return new oU(h10[t54.topID], f10.reverse(), g10.reverse(), p10);
    }(t53);
  }
}
oU.empty = new oU(oq.none, [], [], 0);
class o$ {
  constructor(t53, e10) {
    this.buffer = t53, this.index = e10;
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
    return new o$(this.buffer, this.index);
  }
}
class oY {
  constructor(t53, e10, i10) {
    this.buffer = t53, this.length = e10, this.set = i10;
  }
  get type() {
    return oq.none;
  }
  toString() {
    let t53 = [];
    for (let e10 = 0; e10 < this.buffer.length; ) t53.push(this.childString(e10)), e10 = this.buffer[e10 + 3];
    return t53.join(",");
  }
  childString(t53) {
    let e10 = this.buffer[t53], i10 = this.buffer[t53 + 3], n10 = this.set.types[e10], s10 = n10.name;
    if (/\W/.test(s10) && !n10.isError && (s10 = JSON.stringify(s10)), i10 == (t53 += 4)) return s10;
    let o10 = [];
    for (; t53 < i10; ) o10.push(this.childString(t53)), t53 = this.buffer[t53 + 3];
    return s10 + "(" + o10.join(",") + ")";
  }
  findChild(t53, e10, i10, n10, s10) {
    let { buffer: o10 } = this, r10 = -1;
    for (let l10 = t53; l10 != e10 && (!oX(s10, n10, o10[l10 + 1], o10[l10 + 2]) || (r10 = l10, !(i10 > 0))); l10 = o10[l10 + 3]) ;
    return r10;
  }
  slice(t53, e10, i10) {
    let n10 = this.buffer, s10 = new Uint16Array(e10 - t53), o10 = 0;
    for (let r10 = t53, l10 = 0; r10 < e10; ) {
      s10[l10++] = n10[r10++], s10[l10++] = n10[r10++] - i10;
      let e11 = s10[l10++] = n10[r10++] - i10;
      s10[l10++] = n10[r10++] - t53, o10 = Math.max(o10, e11);
    }
    return new oY(s10, o10, this.set);
  }
}
function oX(t53, e10, i10, n10) {
  switch (t53) {
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
function oJ(t53, e10, i10, n10) {
  for (var s10; t53.from == t53.to || (i10 < 1 ? t53.from >= e10 : t53.from > e10) || (i10 > -1 ? t53.to <= e10 : t53.to < e10); ) {
    let e11 = !n10 && t53 instanceof oZ && t53.index < 0 ? null : t53.parent;
    if (!e11) return t53;
    t53 = e11;
  }
  let o10 = n10 ? 0 : H.IgnoreOverlays;
  if (n10) for (let n11 = t53, r10 = n11.parent; r10; r10 = (n11 = r10).parent) n11 instanceof oZ && n11.index < 0 && (null === (s10 = r10.enter(e10, i10, o10)) || void 0 === s10 ? void 0 : s10.from) != n11.from && (t53 = r10);
  for (; ; ) {
    let n11 = t53.enter(e10, i10, o10);
    if (!n11) return t53;
    t53 = n11;
  }
}
class oQ {
  cursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return new o5(this, t53);
  }
  getChild(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n10 = o0(this, t53, e10, i10);
    return n10.length ? n10[0] : null;
  }
  getChildren(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return o0(this, t53, e10, i10);
  }
  resolve(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return oJ(this, t53, e10, false);
  }
  resolveInner(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return oJ(this, t53, e10, true);
  }
  matchContext(t53) {
    return o1(this, t53);
  }
  enterUnfinishedNodesBefore(t53) {
    let e10 = this.childBefore(t53), i10 = this;
    for (; e10; ) {
      let t54 = e10.lastChild;
      if (!t54 || t54.to != e10.to) break;
      t54.type.isError && t54.from == t54.to ? (i10 = e10, e10 = t54.prevSibling) : e10 = t54;
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
class oZ extends oQ {
  constructor(t53, e10, i10, n10) {
    super(), this._tree = t53, this.from = e10, this.index = i10, this._parent = n10;
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
  nextChild(t53, e10, i10, n10) {
    let s10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    for (let o10 = this; ; ) {
      for (let { children: r10, positions: l10 } = o10._tree, h10 = e10 > 0 ? r10.length : -1; t53 != h10; t53 += e10) {
        let h11 = r10[t53], a10 = l10[t53] + o10.from;
        if (oX(n10, i10, a10, a10 + h11.length)) {
          if (h11 instanceof oY) {
            if (s10 & H.ExcludeBuffers) continue;
            let r11 = h11.findChild(0, h11.buffer.length, e10, i10 - a10, n10);
            if (r11 > -1) return new o8(new o2(o10, h11, t53, a10), null, r11);
          } else if (s10 & H.IncludeAnonymous || !h11.type.isAnonymous || o9(h11)) {
            let r11;
            if (!(s10 & H.IgnoreMounts) && (r11 = oz.get(h11)) && !r11.overlay) return new oZ(r11.tree, a10, t53, o10);
            let l11 = new oZ(h11, a10, t53, o10);
            return s10 & H.IncludeAnonymous || !l11.type.isAnonymous ? l11 : l11.nextChild(e10 < 0 ? h11.children.length - 1 : 0, e10, i10, n10);
          }
        }
      }
      if (s10 & H.IncludeAnonymous || !o10.type.isAnonymous || (t53 = o10.index >= 0 ? o10.index + e10 : e10 < 0 ? -1 : o10._parent._tree.children.length, !(o10 = o10._parent))) return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(t53) {
    return this.nextChild(0, 1, t53, 2);
  }
  childBefore(t53) {
    return this.nextChild(this._tree.children.length - 1, -1, t53, -2);
  }
  enter(t53, e10) {
    let i10, n10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    if (!(n10 & H.IgnoreOverlays) && (i10 = oz.get(this._tree)) && i10.overlay) {
      let n11 = t53 - this.from;
      for (let { from: t54, to: s10 } of i10.overlay) if ((e10 > 0 ? t54 <= n11 : t54 < n11) && (e10 < 0 ? s10 >= n11 : s10 > n11)) return new oZ(i10.tree, i10.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t53, e10, n10);
  }
  nextSignificantParent() {
    let t53 = this;
    for (; t53.type.isAnonymous && t53._parent; ) t53 = t53._parent;
    return t53;
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
function o0(t53, e10, i10, n10) {
  let s10 = t53.cursor(), o10 = [];
  if (!s10.firstChild()) return o10;
  if (null != i10) {
    for (let t54 = false; !t54; ) if (t54 = s10.type.is(i10), !s10.nextSibling()) return o10;
  }
  for (; ; ) {
    if (null != n10 && s10.type.is(n10)) return o10;
    if (s10.type.is(e10) && o10.push(s10.node), !s10.nextSibling()) return null == n10 ? o10 : [];
  }
}
function o1(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10.length - 1;
  for (let n10 = t53.parent; i10 >= 0; n10 = n10.parent) {
    if (!n10) return false;
    if (!n10.type.isAnonymous) {
      if (e10[i10] && e10[i10] != n10.name) return false;
      i10--;
    }
  }
  return true;
}
class o2 {
  constructor(t53, e10, i10, n10) {
    this.parent = t53, this.buffer = e10, this.index = i10, this.start = n10;
  }
}
class o8 extends oQ {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t53, e10, i10) {
    super(), this.context = t53, this._parent = e10, this.index = i10, this.type = t53.buffer.set.types[t53.buffer.buffer[i10]];
  }
  child(t53, e10, i10) {
    let { buffer: n10 } = this.context, s10 = n10.findChild(this.index + 4, n10.buffer[this.index + 3], t53, e10 - this.context.start, i10);
    return s10 < 0 ? null : new o8(this.context, this, s10);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(t53) {
    return this.child(1, t53, 2);
  }
  childBefore(t53) {
    return this.child(-1, t53, -2);
  }
  enter(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    if (i10 & H.ExcludeBuffers) return null;
    let { buffer: n10 } = this.context, s10 = n10.findChild(this.index + 4, n10.buffer[this.index + 3], e10 > 0 ? 1 : -1, t53 - this.context.start, e10);
    return s10 < 0 ? null : new o8(this.context, this, s10);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t53) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + t53, t53, 0, 4);
  }
  get nextSibling() {
    let { buffer: t53 } = this.context, e10 = t53.buffer[this.index + 3];
    return e10 < (this._parent ? t53.buffer[this._parent.index + 3] : t53.buffer.length) ? new o8(this.context, this._parent, e10) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t53 } = this.context, e10 = this._parent ? this._parent.index + 4 : 0;
    return this.index == e10 ? this.externalSibling(-1) : new o8(this.context, this._parent, t53.findChild(e10, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let t53 = [], e10 = [], { buffer: i10 } = this.context, n10 = this.index + 4, s10 = i10.buffer[this.index + 3];
    if (s10 > n10) {
      let o10 = i10.buffer[this.index + 1];
      t53.push(i10.slice(n10, s10, o10)), e10.push(0);
    }
    return new oU(this.type, t53, e10, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function o3(t53) {
  if (!t53.length) return null;
  let e10 = 0, i10 = t53[0];
  for (let n11 = 1; n11 < t53.length; n11++) {
    let s11 = t53[n11];
    (s11.from > i10.from || s11.to < i10.to) && (i10 = s11, e10 = n11);
  }
  let n10 = i10 instanceof oZ && i10.index < 0 ? null : i10.parent, s10 = t53.slice();
  return n10 ? s10[e10] = n10 : s10.splice(e10, 1), new o4(s10, i10);
}
class o4 {
  constructor(t53, e10) {
    this.heads = t53, this.node = e10;
  }
  get next() {
    return o3(this.heads);
  }
}
class o5 {
  get name() {
    return this.type.name;
  }
  constructor(t53, e10 = 0) {
    if (this.mode = e10, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t53 instanceof oZ) this.yieldNode(t53);
    else {
      this._tree = t53.context.parent, this.buffer = t53.context;
      for (let e11 = t53._parent; e11; e11 = e11._parent) this.stack.unshift(e11.index);
      this.bufferNode = t53, this.yieldBuf(t53.index);
    }
  }
  yieldNode(t53) {
    return !!t53 && (this._tree = t53, this.type = t53.type, this.from = t53.from, this.to = t53.to, true);
  }
  yieldBuf(t53, e10) {
    this.index = t53;
    let { start: i10, buffer: n10 } = this.buffer;
    return this.type = e10 || n10.set.types[n10.buffer[t53]], this.from = i10 + n10.buffer[t53 + 1], this.to = i10 + n10.buffer[t53 + 2], true;
  }
  yield(t53) {
    return !!t53 && (t53 instanceof oZ ? (this.buffer = null, this.yieldNode(t53)) : (this.buffer = t53.context, this.yieldBuf(t53.index, t53.type)));
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(t53, e10, i10) {
    if (!this.buffer) return this.yield(this._tree.nextChild(t53 < 0 ? this._tree._tree.children.length - 1 : 0, t53, e10, i10, this.mode));
    let { buffer: n10 } = this.buffer, s10 = n10.findChild(this.index + 4, n10.buffer[this.index + 3], t53, e10 - this.buffer.start, i10);
    return !(s10 < 0) && (this.stack.push(this.index), this.yieldBuf(s10));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(t53) {
    return this.enterChild(1, t53, 2);
  }
  childBefore(t53) {
    return this.enterChild(-1, t53, -2);
  }
  enter(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
    return this.buffer ? !(i10 & H.ExcludeBuffers) && this.enterChild(1, t53, e10) : this.yield(this._tree.enter(t53, e10, i10));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & H.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let t53 = this.mode & H.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t53);
  }
  sibling(t53) {
    if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t53, t53, 0, 4, this.mode));
    let { buffer: e10 } = this.buffer, i10 = this.stack.length - 1;
    if (t53 < 0) {
      let t54 = i10 < 0 ? 0 : this.stack[i10] + 4;
      if (this.index != t54) return this.yieldBuf(e10.findChild(t54, this.index, -1, 0, 4));
    } else {
      let t54 = e10.buffer[this.index + 3];
      if (t54 < (i10 < 0 ? e10.buffer.length : e10.buffer[this.stack[i10] + 3])) return this.yieldBuf(t54);
    }
    return i10 < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + t53, t53, 0, 4, this.mode));
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t53) {
    let e10, i10, { buffer: n10 } = this;
    if (n10) {
      if (t53 > 0) {
        if (this.index < n10.buffer.buffer.length) return false;
      } else for (let t54 = 0; t54 < this.index; t54++) if (n10.buffer.buffer[t54 + 3] < this.index) return false;
      ({ index: e10, parent: i10 } = n10);
    } else ({ index: e10, _parent: i10 } = this._tree);
    for (; i10; { index: e10, _parent: i10 } = i10) if (e10 > -1) for (let n11 = e10 + t53, s10 = t53 < 0 ? -1 : i10._tree.children.length; n11 != s10; n11 += t53) {
      let t54 = i10._tree.children[n11];
      if (this.mode & H.IncludeAnonymous || t54 instanceof oY || !t54.type.isAnonymous || o9(t54)) return false;
    }
    return true;
  }
  move(t53, e10) {
    if (e10 && this.enterChild(t53, 0, 4)) return true;
    for (; ; ) {
      if (this.sibling(t53)) return true;
      if (this.atLastNode(t53) || !this.parent()) return false;
    }
  }
  next() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return this.move(1, t53);
  }
  prev() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return this.move(-1, t53);
  }
  moveTo(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    for (; (this.from == this.to || (e10 < 1 ? this.from >= t53 : this.from > t53) || (e10 > -1 ? this.to <= t53 : this.to < t53)) && this.parent(); ) ;
    for (; this.enterChild(1, t53, e10); ) ;
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let t53 = this.bufferNode, e10 = null, i10 = 0;
    if (t53 && t53.context == this.buffer) n: for (let n10 = this.index, s10 = this.stack.length; s10 >= 0; ) {
      for (let o10 = t53; o10; o10 = o10._parent) if (o10.index == n10) {
        if (n10 == this.index) return o10;
        e10 = o10, i10 = s10 + 1;
        break n;
      }
      n10 = this.stack[--s10];
    }
    for (let t54 = i10; t54 < this.stack.length; t54++) e10 = new o8(this.buffer, e10, this.stack[t54]);
    return this.bufferNode = new o8(this.buffer, e10, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(t53, e10) {
    for (let i10 = 0; ; ) {
      let n10 = false;
      if (this.type.isAnonymous || false !== t53(this)) {
        if (this.firstChild()) {
          i10++;
          continue;
        }
        this.type.isAnonymous || (n10 = true);
      }
      for (; n10 && e10 && e10(this), n10 = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!i10) return;
        this.parent(), i10--, n10 = true;
      }
    }
  }
  matchContext(t53) {
    if (!this.buffer) return o1(this.node, t53);
    let { buffer: e10 } = this.buffer, { types: i10 } = e10.set;
    for (let n10 = t53.length - 1, s10 = this.stack.length - 1; n10 >= 0; s10--) {
      if (s10 < 0) return o1(this.node, t53, n10);
      let o10 = i10[e10.buffer[this.stack[s10]]];
      if (!o10.isAnonymous) {
        if (t53[n10] && t53[n10] != o10.name) return false;
        n10--;
      }
    }
    return true;
  }
}
function o9(t53) {
  return t53.children.some((t54) => t54 instanceof oY || !t54.type.isAnonymous || o9(t54));
}
let o6 = /* @__PURE__ */ new WeakMap();
function o7(t53, e10) {
  if (!t53.isAnonymous || e10 instanceof oY || e10.type != t53) return 1;
  let i10 = o6.get(e10);
  if (null == i10) {
    for (let n10 of (i10 = 1, e10.children)) {
      if (n10.type != t53 || !(n10 instanceof oU)) {
        i10 = 1;
        break;
      }
      i10 += o7(t53, n10);
    }
    o6.set(e10, i10);
  }
  return i10;
}
function rt(t53, e10, i10, n10, s10, o10, r10, l10, h10) {
  let a10 = 0;
  for (let i11 = n10; i11 < s10; i11++) a10 += o7(t53, e10[i11]);
  let c10 = Math.ceil(1.5 * a10 / 8), d10 = [], u10 = [];
  return !function e11(i11, n11, s11, r11, l11) {
    for (let a11 = s11; a11 < r11; ) {
      let s12 = a11, f10 = n11[a11], g10 = o7(t53, i11[a11]);
      for (a11++; a11 < r11; a11++) {
        let e12 = o7(t53, i11[a11]);
        if (g10 + e12 >= c10) break;
        g10 += e12;
      }
      if (a11 == s12 + 1) {
        if (g10 > c10) {
          let t54 = i11[s12];
          e11(t54.children, t54.positions, 0, t54.children.length, n11[s12] + l11);
          continue;
        }
        d10.push(i11[s12]);
      } else {
        let e12 = n11[a11 - 1] + i11[a11 - 1].length - f10;
        d10.push(rt(t53, i11, n11, s12, a11, f10, e12, null, h10));
      }
      u10.push(f10 + l11 - o10);
    }
  }(e10, i10, n10, s10, 0), (l10 || h10)(d10, u10, r10);
}
class re {
  constructor(t53, e10, i10, n10, s10 = false, o10 = false) {
    this.from = t53, this.to = e10, this.tree = i10, this.offset = n10, this.open = (s10 ? 1 : 0) | (o10 ? 2 : 0);
  }
  get openStart() {
    return (1 & this.open) > 0;
  }
  get openEnd() {
    return (2 & this.open) > 0;
  }
  static addTree(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = [new re(0, t53.length, t53, 0, false, i10)];
    for (let i11 of e10) i11.to > t53.length && n10.push(i11);
    return n10;
  }
  static applyChanges(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
    if (!e10.length) return t53;
    let n10 = [], s10 = 1, o10 = t53.length ? t53[0] : null;
    for (let r10 = 0, l10 = 0, h10 = 0; ; r10++) {
      let a10 = r10 < e10.length ? e10[r10] : null, c10 = a10 ? a10.fromA : 1e9;
      if (c10 - l10 >= i10) for (; o10 && o10.from < c10; ) {
        let e11 = o10;
        if (l10 >= e11.from || c10 <= e11.to || h10) {
          let t54 = Math.max(e11.from, l10) - h10, i11 = Math.min(e11.to, c10) - h10;
          e11 = t54 >= i11 ? null : new re(t54, i11, e11.tree, e11.offset + h10, r10 > 0, !!a10);
        }
        if (e11 && n10.push(e11), o10.to > c10) break;
        o10 = s10 < t53.length ? t53[s10++] : null;
      }
      if (!a10) break;
      l10 = a10.toA, h10 = a10.toA - a10.toB;
    }
    return n10;
  }
}
class ri {
  startParse(t53, e10, i10) {
    return "string" == typeof t53 && (t53 = new rn(t53)), i10 = i10 ? i10.length ? i10.map((t54) => new oF(t54.from, t54.to)) : [new oF(0, 0)] : [new oF(0, t53.length)], this.createParse(t53, e10 || [], i10);
  }
  parse(t53, e10, i10) {
    let n10 = this.startParse(t53, e10, i10);
    for (; ; ) {
      let t54 = n10.advance();
      if (t54) return t54;
    }
  }
}
class rn {
  constructor(t53) {
    this.string = t53;
  }
  get length() {
    return this.string.length;
  }
  chunk(t53) {
    return this.string.slice(t53);
  }
  get lineChunks() {
    return false;
  }
  read(t53, e10) {
    return this.string.slice(t53, e10);
  }
}
function rs(t53) {
  return (11 == t53.nodeType ? t53.getSelection ? t53 : t53.ownerDocument : t53).getSelection();
}
function ro(t53, e10) {
  return !!e10 && (t53 == e10 || t53.contains(1 != e10.nodeType ? e10.parentNode : e10));
}
function rr(t53, e10) {
  if (!e10.anchorNode) return false;
  try {
    return ro(t53, e10.anchorNode);
  } catch (t54) {
    return false;
  }
}
function rl(t53) {
  return 3 == t53.nodeType ? rw(t53, 0, t53.nodeValue.length).getClientRects() : 1 == t53.nodeType ? t53.getClientRects() : [];
}
function rh(t53, e10, i10, n10) {
  return !!i10 && (rd(t53, e10, i10, n10, -1) || rd(t53, e10, i10, n10, 1));
}
function ra(t53) {
  for (var e10 = 0; ; e10++) if (!(t53 = t53.previousSibling)) return e10;
}
function rc(t53) {
  return 1 == t53.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t53.nodeName);
}
function rd(t53, e10, i10, n10, s10) {
  for (; ; ) {
    if (t53 == i10 && e10 == n10) return true;
    if (e10 == (s10 < 0 ? 0 : ru(t53))) {
      if ("DIV" == t53.nodeName) return false;
      let i11 = t53.parentNode;
      if (!i11 || 1 != i11.nodeType) return false;
      e10 = ra(t53) + (s10 < 0 ? 0 : 1), t53 = i11;
    } else {
      if (1 != t53.nodeType || 1 == (t53 = t53.childNodes[e10 + (s10 < 0 ? -1 : 0)]).nodeType && "false" == t53.contentEditable) return false;
      e10 = s10 < 0 ? ru(t53) : 0;
    }
  }
}
function ru(t53) {
  return 3 == t53.nodeType ? t53.nodeValue.length : t53.childNodes.length;
}
function rf(t53, e10) {
  let i10 = e10 ? t53.left : t53.right;
  return { left: i10, right: i10, top: t53.top, bottom: t53.bottom };
}
function rg(t53, e10) {
  let i10 = e10.width / t53.offsetWidth, n10 = e10.height / t53.offsetHeight;
  return (i10 > 0.995 && i10 < 1.005 || !isFinite(i10) || 1 > Math.abs(e10.width - t53.offsetWidth)) && (i10 = 1), (n10 > 0.995 && n10 < 1.005 || !isFinite(n10) || 1 > Math.abs(e10.height - t53.offsetHeight)) && (n10 = 1), { scaleX: i10, scaleY: n10 };
}
new oW({ perNode: true });
let rp = class {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t53) {
    return this.anchorNode == t53.anchorNode && this.anchorOffset == t53.anchorOffset && this.focusNode == t53.focusNode && this.focusOffset == t53.focusOffset;
  }
  setRange(t53) {
    let { anchorNode: e10, focusNode: i10 } = t53;
    this.set(e10, Math.min(t53.anchorOffset, e10 ? ru(e10) : 0), i10, Math.min(t53.focusOffset, i10 ? ru(i10) : 0));
  }
  set(t53, e10, i10, n10) {
    this.anchorNode = t53, this.anchorOffset = e10, this.focusNode = i10, this.focusOffset = n10;
  }
}, rm = null;
function rv(t53) {
  if (t53.setActive) return t53.setActive();
  if (rm) return t53.focus(rm);
  let e10 = [];
  for (let i10 = t53; i10 && (e10.push(i10, i10.scrollTop, i10.scrollLeft), i10 != i10.ownerDocument); i10 = i10.parentNode) ;
  if (t53.focus(null == rm ? { get preventScroll() {
    return rm = { preventScroll: true }, true;
  } } : void 0), !rm) {
    rm = false;
    for (let t54 = 0; t54 < e10.length; ) {
      let i10 = e10[t54++], n10 = e10[t54++], s10 = e10[t54++];
      i10.scrollTop != n10 && (i10.scrollTop = n10), i10.scrollLeft != s10 && (i10.scrollLeft = s10);
    }
  }
}
function rw(t53, e10) {
  let n10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10, s10 = i || (i = document.createRange());
  return s10.setEnd(t53, n10), s10.setStart(t53, e10), s10;
}
function rb(t53, e10, i10, n10) {
  let s10 = { key: e10, code: e10, keyCode: i10, which: i10, cancelable: true };
  n10 && ({ altKey: s10.altKey, ctrlKey: s10.ctrlKey, shiftKey: s10.shiftKey, metaKey: s10.metaKey } = n10);
  let o10 = new KeyboardEvent("keydown", s10);
  o10.synthetic = true, t53.dispatchEvent(o10);
  let r10 = new KeyboardEvent("keyup", s10);
  return r10.synthetic = true, t53.dispatchEvent(r10), o10.defaultPrevented || r10.defaultPrevented;
}
function ry(t53) {
  for (; t53.attributes.length; ) t53.removeAttributeNode(t53.attributes[0]);
}
function rx(t53) {
  return t53.scrollTop > Math.max(1, t53.scrollHeight - t53.clientHeight - 4);
}
function rS(t53, e10) {
  for (let i10 = t53, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 > 0) return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 > 0) {
      if ("false" == i10.contentEditable) return null;
      n10 = ru(i10 = i10.childNodes[n10 - 1]);
    } else {
      if (!i10.parentNode || rc(i10)) return null;
      n10 = ra(i10), i10 = i10.parentNode;
    }
  }
}
function rk(t53, e10) {
  for (let i10 = t53, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 < i10.nodeValue.length) return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 < i10.childNodes.length) {
      if ("false" == i10.contentEditable) return null;
      i10 = i10.childNodes[n10], n10 = 0;
    } else {
      if (!i10.parentNode || rc(i10)) return null;
      n10 = ra(i10) + 1, i10 = i10.parentNode;
    }
  }
}
let rM = class t29 {
  constructor(t53, e10, i10 = true) {
    this.node = t53, this.offset = e10, this.precise = i10;
  }
  static before(e10, i10) {
    return new t29(e10.parentNode, ra(e10), i10);
  }
  static after(e10, i10) {
    return new t29(e10.parentNode, ra(e10) + 1, i10);
  }
}, rA = [], rC = class t30 {
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
  posBefore(t53) {
    let e10 = this.posAtStart;
    for (let i10 of this.children) {
      if (i10 == t53) return e10;
      e10 += i10.length + i10.breakAfter;
    }
    throw RangeError("Invalid child in posBefore");
  }
  posAfter(t53) {
    return this.posBefore(t53) + t53.length;
  }
  sync(e10, i10) {
    if (2 & this.flags) {
      let n10 = this.dom, s10 = null, o10;
      for (let r10 of this.children) {
        if (7 & r10.flags) {
          if (!r10.dom && (o10 = s10 ? s10.nextSibling : n10.firstChild)) {
            let e11 = t30.get(o10);
            (!e11 || !e11.parent && e11.canReuseDOM(r10)) && r10.reuseDOM(o10);
          }
          r10.sync(e10, i10), r10.flags &= -8;
        }
        if (o10 = s10 ? s10.nextSibling : n10.firstChild, i10 && !i10.written && i10.node == n10 && o10 != r10.dom && (i10.written = true), r10.dom.parentNode == n10) for (; o10 && o10 != r10.dom; ) o10 = rD(o10);
        else n10.insertBefore(r10.dom, o10);
        s10 = r10.dom;
      }
      for ((o10 = s10 ? s10.nextSibling : n10.firstChild) && i10 && i10.node == n10 && (i10.written = true); o10; ) o10 = rD(o10);
    } else if (1 & this.flags) for (let t53 of this.children) 7 & t53.flags && (t53.sync(e10, i10), t53.flags &= -8);
  }
  reuseDOM(t53) {
  }
  localPosFromDOM(e10, i10) {
    let n10;
    if (e10 == this.dom) n10 = this.dom.childNodes[i10];
    else {
      let t53 = 0 == ru(e10) ? 0 : 0 == i10 ? -1 : 1;
      for (; ; ) {
        let i11 = e10.parentNode;
        if (i11 == this.dom) break;
        0 == t53 && i11.firstChild != i11.lastChild && (t53 = e10 == i11.firstChild ? -1 : 1), e10 = i11;
      }
      n10 = t53 < 0 ? e10 : e10.nextSibling;
    }
    if (n10 == this.dom.firstChild) return 0;
    for (; n10 && !t30.get(n10); ) n10 = n10.nextSibling;
    if (!n10) return this.length;
    for (let t53 = 0, e11 = 0; ; t53++) {
      let i11 = this.children[t53];
      if (i11.dom == n10) return e11;
      e11 += i11.length + i11.breakAfter;
    }
  }
  domBoundsAround(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = -1, s10 = -1, o10 = -1, r10 = -1;
    for (let l10 = 0, h10 = i10, a10 = i10; l10 < this.children.length; l10++) {
      let i11 = this.children[l10], c10 = h10 + i11.length;
      if (h10 < t53 && c10 > e10) return i11.domBoundsAround(t53, e10, h10);
      if (c10 >= t53 && -1 == n10 && (n10 = l10, s10 = h10), h10 > e10 && i11.dom.parentNode == this.dom) {
        o10 = l10, r10 = a10;
        break;
      }
      a10 = c10, h10 = c10 + i11.breakAfter;
    }
    return { from: s10, to: r10 < 0 ? i10 + this.length : r10, startDOM: (n10 ? this.children[n10 - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: o10 < this.children.length && o10 >= 0 ? this.children[o10].dom : null };
  }
  markDirty() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.flags |= 2, this.markParentsDirty(t53);
  }
  markParentsDirty(t53) {
    for (let e10 = this.parent; e10; e10 = e10.parent) {
      if (t53 && (e10.flags |= 2), 1 & e10.flags) return;
      e10.flags |= 1, t53 = false;
    }
  }
  setParent(t53) {
    this.parent != t53 && (this.parent = t53, 7 & this.flags && this.markParentsDirty(true));
  }
  setDOM(t53) {
    this.dom != t53 && (this.dom && (this.dom.cmView = null), this.dom = t53, t53.cmView = this);
  }
  get rootView() {
    for (let t53 = this; ; ) {
      let e10 = t53.parent;
      if (!e10) return t53;
      t53 = e10;
    }
  }
  replaceChildren(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rA;
    this.markDirty();
    for (let n10 = t53; n10 < e10; n10++) {
      let t54 = this.children[n10];
      t54.parent == this && 0 > i10.indexOf(t54) && t54.destroy();
    }
    this.children.splice(t53, e10 - t53, ...i10);
    for (let t54 = 0; t54 < i10.length; t54++) i10[t54].setParent(this);
  }
  ignoreMutation(t53) {
    return false;
  }
  ignoreEvent(t53) {
    return false;
  }
  childCursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length;
    return new rO(this.children, t53, this.children.length);
  }
  childPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return this.childCursor().findPos(t53, e10);
  }
  toString() {
    let t53 = this.constructor.name.replace("View", "");
    return t53 + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == t53 ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t53) {
    return t53.cmView;
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
  merge(t53, e10, i10, n10, s10, o10) {
    return false;
  }
  become(t53) {
    return false;
  }
  canReuseDOM(t53) {
    return t53.constructor == this.constructor && !((this.flags | t53.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t53 of this.children) t53.parent == this && t53.destroy();
    this.parent = null;
  }
};
function rD(t53) {
  let e10 = t53.nextSibling;
  return t53.parentNode.removeChild(t53), e10;
}
rC.prototype.breakAfter = 0;
let rO = class {
  constructor(t53, e10, i10) {
    this.children = t53, this.pos = e10, this.i = i10, this.off = 0;
  }
  findPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    for (; ; ) {
      if (t53 > this.pos || t53 == this.pos && (e10 > 0 || 0 == this.i || this.children[this.i - 1].breakAfter)) return this.off = t53 - this.pos, this;
      let i10 = this.children[--this.i];
      this.pos -= i10.length + i10.breakAfter;
    }
  }
};
function rT(t53, e10, i10, n10, s10, o10, r10, l10, h10) {
  let { children: a10 } = t53, c10 = a10.length ? a10[e10] : null, d10 = o10.length ? o10[o10.length - 1] : null, u10 = d10 ? d10.breakAfter : r10;
  if (!(e10 == n10 && c10 && !r10 && !u10 && o10.length < 2 && c10.merge(i10, s10, o10.length ? d10 : null, 0 == i10, l10, h10))) {
    if (n10 < a10.length) {
      let t54 = a10[n10];
      t54 && (s10 < t54.length || t54.breakAfter && (null == d10 ? void 0 : d10.breakAfter)) ? (e10 == n10 && (t54 = t54.split(s10), s10 = 0), !u10 && d10 && t54.merge(0, s10, d10, true, 0, h10) ? o10[o10.length - 1] = t54 : ((s10 || t54.children.length && !t54.children[0].length) && t54.merge(0, s10, null, false, 0, h10), o10.push(t54))) : (null == t54 ? void 0 : t54.breakAfter) && (d10 ? d10.breakAfter = 1 : r10 = 1), n10++;
    }
    for (c10 && (c10.breakAfter = r10, i10 > 0 && (!r10 && o10.length && c10.merge(i10, c10.length, o10[0], false, l10, 0) ? c10.breakAfter = o10.shift().breakAfter : (i10 < c10.length || c10.children.length && 0 == c10.children[c10.children.length - 1].length) && c10.merge(i10, c10.length, null, false, l10, 0), e10++)); e10 < n10 && o10.length; ) if (a10[n10 - 1].become(o10[o10.length - 1])) n10--, o10.pop(), h10 = o10.length ? 0 : l10;
    else if (a10[e10].become(o10[0])) e10++, o10.shift(), l10 = o10.length ? 0 : h10;
    else break;
    !o10.length && e10 && n10 < a10.length && !a10[e10 - 1].breakAfter && a10[n10].merge(0, 0, a10[e10 - 1], false, l10, h10) && e10--, (e10 < n10 || o10.length) && t53.replaceChildren(e10, n10, o10);
  }
}
function rE(t53, e10, i10, n10, s10, o10) {
  let r10 = t53.childCursor(), { i: l10, off: h10 } = r10.findPos(i10, 1), { i: a10, off: c10 } = r10.findPos(e10, -1), d10 = e10 - i10;
  for (let t54 of n10) d10 += t54.length;
  t53.length += d10, rT(t53, a10, c10, l10, h10, n10, 0, s10, o10);
}
let rB = "undefined" != typeof navigator ? navigator : { userAgent: "", vendor: "", platform: "" }, rR = "undefined" != typeof document ? document : { documentElement: { style: {} } }, rL = /Edge\/(\d+)/.exec(rB.userAgent), rP = /MSIE \d/.test(rB.userAgent), rN = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(rB.userAgent), rH = !!(rP || rN || rL), rV = !rH && /gecko\/(\d+)/i.test(rB.userAgent), rI = !rH && /Chrome\/(\d+)/.exec(rB.userAgent), rF = "webkitFontSmoothing" in rR.documentElement.style, rW = !rH && /Apple Computer/.test(rB.vendor), rz = rW && (/Mobile\/\w+/.test(rB.userAgent) || rB.maxTouchPoints > 2);
var rK = { mac: rz || /Mac/.test(rB.platform), windows: /Win/.test(rB.platform), linux: /Linux|X11/.test(rB.platform), ie: rH, ie_version: rP ? rR.documentMode || 6 : rN ? +rN[1] : rL ? +rL[1] : 0, gecko: rV, gecko_version: rV ? +(/Firefox\/(\d+)/.exec(rB.userAgent) || [0, 0])[1] : 0, chrome: !!rI, chrome_version: rI ? +rI[1] : 0, ios: rz, android: /Android\b/.test(rB.userAgent), webkit: rF, safari: rW, webkit_version: rF ? +(/\bAppleWebKit\/(\d+)/.exec(rB.userAgent) || [0, 0])[1] : 0, tabSize: null != rR.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size" };
let rq = class t31 extends rC {
  constructor(t53) {
    super(), this.text = t53;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t53) {
    this.setDOM(t53 || document.createTextNode(this.text));
  }
  sync(t53, e10) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e10 && e10.node == this.dom && (e10.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(t53) {
    3 == t53.nodeType && this.createDOM(t53);
  }
  merge(e10, i10, n10) {
    return !(8 & this.flags) && (!n10 || n10 instanceof t31 && !(this.length - (i10 - e10) + n10.length > 256) && !(8 & n10.flags)) && (this.text = this.text.slice(0, e10) + (n10 ? n10.text : "") + this.text.slice(i10), this.markDirty(), true);
  }
  split(e10) {
    let i10 = new t31(this.text.slice(e10));
    return this.text = this.text.slice(0, e10), this.markDirty(), i10.flags |= 8 & this.flags, i10;
  }
  localPosFromDOM(t53, e10) {
    return t53 == this.dom ? e10 : e10 ? this.text.length : 0;
  }
  domAtPos(t53) {
    return new rM(this.dom, t53);
  }
  domBoundsAround(t53, e10, i10) {
    return { from: i10, to: i10 + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t53, e10) {
    return function(t54, e11, i10) {
      let n10 = t54.nodeValue.length;
      e11 > n10 && (e11 = n10);
      let s10 = e11, o10 = e11, r10 = 0;
      0 == e11 && i10 < 0 || e11 == n10 && i10 >= 0 ? !(rK.chrome || rK.gecko) && (e11 ? (s10--, r10 = 1) : o10 < n10 && (o10++, r10 = -1)) : i10 < 0 ? s10-- : o10 < n10 && o10++;
      let l10 = rw(t54, s10, o10).getClientRects();
      if (!l10.length) return null;
      let h10 = l10[(r10 ? r10 < 0 : i10 >= 0) ? 0 : l10.length - 1];
      return rK.safari && !r10 && 0 == h10.width && (h10 = Array.prototype.find.call(l10, (t55) => t55.width) || h10), r10 ? rf(h10, r10 < 0) : h10 || null;
    }(this.dom, t53, e10);
  }
}, r_ = class t32 extends rC {
  constructor(t53, e10 = [], i10 = 0) {
    for (let n10 of (super(), this.mark = t53, this.children = e10, this.length = i10, e10)) n10.setParent(this);
  }
  setAttrs(t53) {
    if (ry(t53), this.mark.class && (t53.className = this.mark.class), this.mark.attrs) for (let e10 in this.mark.attrs) t53.setAttribute(e10, this.mark.attrs[e10]);
    return t53;
  }
  canReuseDOM(t53) {
    return super.canReuseDOM(t53) && !((this.flags | t53.flags) & 8);
  }
  reuseDOM(t53) {
    t53.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t53), this.flags |= 6);
  }
  sync(t53, e10) {
    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t53, e10);
  }
  merge(e10, i10, n10, s10, o10, r10) {
    return (!n10 || !!(n10 instanceof t32 && n10.mark.eq(this.mark)) && (!e10 || !(o10 <= 0)) && (!(i10 < this.length) || !(r10 <= 0))) && (rE(this, e10, i10, n10 ? n10.children.slice() : [], o10 - 1, r10 - 1), this.markDirty(), true);
  }
  split(e10) {
    let i10 = [], n10 = 0, s10 = -1, o10 = 0;
    for (let t53 of this.children) {
      let r11 = n10 + t53.length;
      r11 > e10 && i10.push(n10 < e10 ? t53.split(e10 - n10) : t53), s10 < 0 && n10 >= e10 && (s10 = o10), n10 = r11, o10++;
    }
    let r10 = this.length - e10;
    return this.length = e10, s10 > -1 && (this.children.length = s10, this.markDirty()), new t32(this.mark, i10, r10);
  }
  domAtPos(t53) {
    return rU(this, t53);
  }
  coordsAt(t53, e10) {
    return r$(this, t53, e10);
  }
}, rj = class t33 extends rC {
  static create(e10, i10, n10) {
    return new t33(e10, i10, n10);
  }
  constructor(t53, e10, i10) {
    super(), this.widget = t53, this.length = e10, this.side = i10, this.prevWidget = null;
  }
  split(e10) {
    let i10 = t33.create(this.widget, this.length - e10, this.side);
    return this.length -= e10, i10;
  }
  sync(t53) {
    this.dom && this.widget.updateDOM(this.dom, t53) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t53)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e10, i10, n10, s10, o10, r10) {
    return (!n10 || n10 instanceof t33 && !!this.widget.compare(n10.widget) && (!(e10 > 0) || !(o10 <= 0)) && (!(i10 < this.length) || !(r10 <= 0))) && (this.length = e10 + (n10 ? n10.length : 0) + (this.length - i10), true);
  }
  become(e10) {
    return e10 instanceof t33 && e10.side == this.side && this.widget.constructor == e10.widget.constructor && (this.widget.compare(e10.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e10.widget, this.length = e10.length, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t53) {
    return this.widget.ignoreEvent(t53);
  }
  get overrideDOMText() {
    if (0 == this.length) return s.empty;
    let t53 = this;
    for (; t53.parent; ) t53 = t53.parent;
    let { view: e10 } = t53, i10 = e10 && e10.state.doc, n10 = this.posAtStart;
    return i10 ? i10.slice(n10, n10 + this.length) : s.empty;
  }
  domAtPos(t53) {
    return (this.length ? 0 == t53 : this.side > 0) ? rM.before(this.dom) : rM.after(this.dom, t53 == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t53, e10) {
    let i10 = this.widget.coordsAt(this.dom, t53, e10);
    if (i10) return i10;
    let n10 = this.dom.getClientRects(), s10 = null;
    if (!n10.length) return null;
    let o10 = this.side ? this.side < 0 : t53 > 0;
    for (let e11 = o10 ? n10.length - 1 : 0; s10 = n10[e11], t53 > 0 ? 0 != e11 : e11 != n10.length - 1 && !(s10.top < s10.bottom); e11 += o10 ? -1 : 1) ;
    return rf(s10, !o10);
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
}, rG = class t34 extends rC {
  constructor(t53) {
    super(), this.side = t53;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(e10) {
    return e10 instanceof t34 && e10.side == this.side;
  }
  split() {
    return new t34(this.side);
  }
  sync() {
    if (!this.dom) {
      let t53 = document.createElement("img");
      t53.className = "cm-widgetBuffer", t53.setAttribute("aria-hidden", "true"), this.setDOM(t53);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t53) {
    return this.side > 0 ? rM.before(this.dom) : rM.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t53) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return s.empty;
  }
  get isHidden() {
    return true;
  }
};
function rU(t53, e10) {
  let i10 = t53.dom, { children: n10 } = t53, s10 = 0;
  for (let t54 = 0; s10 < n10.length; s10++) {
    let o10 = n10[s10], r10 = t54 + o10.length;
    if (!(r10 == t54 && 0 >= o10.getSide())) {
      if (e10 > t54 && e10 < r10 && o10.dom.parentNode == i10) return o10.domAtPos(e10 - t54);
      if (e10 <= t54) break;
      t54 = r10;
    }
  }
  for (let t54 = s10; t54 > 0; t54--) {
    let e11 = n10[t54 - 1];
    if (e11.dom.parentNode == i10) return e11.domAtPos(e11.length);
  }
  for (let t54 = s10; t54 < n10.length; t54++) {
    let e11 = n10[t54];
    if (e11.dom.parentNode == i10) return e11.domAtPos(0);
  }
  return new rM(i10, 0);
}
function r$(t53, e10, i10) {
  let n10 = null, s10 = -1, o10 = null, r10 = -1;
  !function t54(e11, l11) {
    for (let h10 = 0, a10 = 0; h10 < e11.children.length && a10 <= l11; h10++) {
      let c10 = e11.children[h10], d10 = a10 + c10.length;
      d10 >= l11 && (c10.children.length ? t54(c10, l11 - a10) : (!o10 || o10.isHidden && i10 > 0) && (d10 > l11 || a10 == d10 && c10.getSide() > 0) ? (o10 = c10, r10 = l11 - a10) : (a10 < l11 || a10 == d10 && 0 > c10.getSide() && !c10.isHidden) && (n10 = c10, s10 = l11 - a10)), a10 = d10;
    }
  }(t53, e10);
  let l10 = (i10 < 0 ? n10 : o10) || n10 || o10;
  return l10 ? l10.coordsAt(Math.max(0, l10 == n10 ? s10 : r10), i10) : function(t54) {
    let e11 = t54.dom.lastChild;
    if (!e11) return t54.dom.getBoundingClientRect();
    let i11 = rl(e11);
    return i11[i11.length - 1] || null;
  }(t53);
}
function rY(t53, e10) {
  for (let i10 in t53) "class" == i10 && e10.class ? e10.class += " " + t53.class : "style" == i10 && e10.style ? e10.style += ";" + t53.style : e10[i10] = t53[i10];
  return e10;
}
rq.prototype.children = rj.prototype.children = rG.prototype.children = rA;
let rX = /* @__PURE__ */ Object.create(null);
function rJ(t53, e10, i10) {
  if (t53 == e10) return true;
  t53 || (t53 = rX), e10 || (e10 = rX);
  let n10 = Object.keys(t53), s10 = Object.keys(e10);
  if (n10.length - (i10 && n10.indexOf(i10) > -1 ? 1 : 0) != s10.length - (i10 && s10.indexOf(i10) > -1 ? 1 : 0)) return false;
  for (let o10 of n10) if (o10 != i10 && (-1 == s10.indexOf(o10) || t53[o10] !== e10[o10])) return false;
  return true;
}
function rQ(t53, e10, i10) {
  let n10 = false;
  if (e10) for (let s10 in e10) i10 && s10 in i10 || (n10 = true, "style" == s10 ? t53.style.cssText = "" : t53.removeAttribute(s10));
  if (i10) for (let s10 in i10) e10 && e10[s10] == i10[s10] || (n10 = true, "style" == s10 ? t53.style.cssText = i10[s10] : t53.setAttribute(s10, i10[s10]));
  return n10;
}
let rZ = class t35 extends rC {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e10, i10, n10, s10, o10, r10) {
    if (n10) {
      if (!(n10 instanceof t35)) return false;
      this.dom || n10.transferDOM(this);
    }
    return s10 && this.setDeco(n10 ? n10.attrs : null), rE(this, e10, i10, n10 ? n10.children.slice() : [], o10, r10), true;
  }
  split(e10) {
    let i10 = new t35();
    if (i10.breakAfter = this.breakAfter, 0 == this.length) return i10;
    let { i: n10, off: s10 } = this.childPos(e10);
    s10 && (i10.append(this.children[n10].split(s10), 0), this.children[n10].merge(s10, this.children[n10].length, null, false, 0, 0), n10++);
    for (let t53 = n10; t53 < this.children.length; t53++) i10.append(this.children[t53], 0);
    for (; n10 > 0 && 0 == this.children[n10 - 1].length; ) this.children[--n10].destroy();
    return this.children.length = n10, this.markDirty(), this.length = e10, i10;
  }
  transferDOM(t53) {
    this.dom && (this.markDirty(), t53.setDOM(this.dom), t53.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t53) {
    rJ(this.attrs, t53) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t53);
  }
  append(t53, e10) {
    !function t54(e11, i10, n10) {
      let s10, { children: o10 } = e11;
      n10 > 0 && i10 instanceof r_ && o10.length && (s10 = o10[o10.length - 1]) instanceof r_ && s10.mark.eq(i10.mark) ? t54(s10, i10.children[0], n10 - 1) : (o10.push(i10), i10.setParent(e11)), e11.length += i10.length;
    }(this, t53, e10);
  }
  addLineDeco(t53) {
    let e10 = t53.spec.attributes, i10 = t53.spec.class;
    e10 && (this.attrs = rY(e10, this.attrs || {})), i10 && (this.attrs = rY({ class: i10 }, this.attrs || {}));
  }
  domAtPos(t53) {
    return rU(this, t53);
  }
  reuseDOM(t53) {
    "DIV" == t53.nodeName && (this.setDOM(t53), this.flags |= 6);
  }
  sync(t53, e10) {
    var i10;
    this.dom ? 4 & this.flags && (ry(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), void 0 !== this.prevAttrs && (rQ(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t53, e10);
    let n10 = this.dom.lastChild;
    for (; n10 && rC.get(n10) instanceof r_; ) n10 = n10.lastChild;
    if (!n10 || !this.length || "BR" != n10.nodeName && (null === (i10 = rC.get(n10)) || void 0 === i10 ? void 0 : i10.isEditable) == false && (!rK.ios || !this.children.some((t54) => t54 instanceof rq))) {
      let t54 = document.createElement("BR");
      t54.cmIgnore = true, this.dom.appendChild(t54);
    }
  }
  measureTextSize() {
    if (0 == this.children.length || this.length > 20) return null;
    let t53 = 0, e10;
    for (let i10 of this.children) {
      if (!(i10 instanceof rq) || /[^ -~]/.test(i10.text)) return null;
      let n10 = rl(i10.dom);
      if (1 != n10.length) return null;
      t53 += n10[0].width, e10 = n10[0].height;
    }
    return t53 ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t53 / this.length, textHeight: e10 } : null;
  }
  coordsAt(t53, e10) {
    let i10 = r$(this, t53, e10);
    if (!this.children.length && i10 && this.parent) {
      let { heightOracle: t54 } = this.parent.view.viewState, e11 = i10.bottom - i10.top;
      if (2 > Math.abs(e11 - t54.lineHeight) && t54.textHeight < e11) {
        let n10 = (e11 - t54.textHeight) / 2;
        return { top: i10.top + n10, bottom: i10.bottom - n10, left: i10.left, right: i10.left };
      }
    }
    return i10;
  }
  become(t53) {
    return false;
  }
  covers() {
    return true;
  }
  static find(e10, i10) {
    for (let n10 = 0, s10 = 0; n10 < e10.children.length; n10++) {
      let o10 = e10.children[n10], r10 = s10 + o10.length;
      if (r10 >= i10) {
        if (o10 instanceof t35) return o10;
        if (r10 > i10) break;
      }
      s10 = r10 + o10.breakAfter;
    }
    return null;
  }
}, r0 = class t36 extends rC {
  constructor(t53, e10, i10) {
    super(), this.widget = t53, this.length = e10, this.deco = i10, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e10, i10, n10, s10, o10, r10) {
    return (!n10 || n10 instanceof t36 && !!this.widget.compare(n10.widget) && (!(e10 > 0) || !(o10 <= 0)) && (!(i10 < this.length) || !(r10 <= 0))) && (this.length = e10 + (n10 ? n10.length : 0) + (this.length - i10), true);
  }
  domAtPos(t53) {
    return 0 == t53 ? rM.before(this.dom) : rM.after(this.dom, t53 == this.length);
  }
  split(e10) {
    let i10 = this.length - e10;
    this.length = e10;
    let n10 = new t36(this.widget, i10, this.deco);
    return n10.breakAfter = this.breakAfter, n10;
  }
  get children() {
    return rA;
  }
  sync(t53) {
    this.dom && this.widget.updateDOM(this.dom, t53) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t53)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : s.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e10) {
    return e10 instanceof t36 && e10.widget.constructor == this.widget.constructor && (e10.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e10.widget, this.length = e10.length, this.deco = e10.deco, this.breakAfter = e10.breakAfter, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t53) {
    return this.widget.ignoreEvent(t53);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(t53, e10) {
    return this.widget.coordsAt(this.dom, t53, e10);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t53) {
    let { startSide: e10, endSide: i10 } = this.deco;
    return e10 != i10 && (t53 < 0 ? e10 < 0 : i10 > 0);
  }
}, r1 = class {
  eq(t53) {
    return false;
  }
  updateDOM(t53, e10) {
    return false;
  }
  compare(t53) {
    return this == t53 || this.constructor == t53.constructor && this.eq(t53);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t53) {
    return true;
  }
  coordsAt(t53, e10, i10) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(t53) {
  }
};
var r2 = ((T = r2 || (r2 = {}))[T.Text = 0] = "Text", T[T.WidgetBefore = 1] = "WidgetBefore", T[T.WidgetAfter = 2] = "WidgetAfter", T[T.WidgetRange = 3] = "WidgetRange", T);
let r8 = class extends tL {
  constructor(t53, e10, i10, n10) {
    super(), this.startSide = t53, this.endSide = e10, this.widget = i10, this.spec = n10;
  }
  get heightRelevant() {
    return false;
  }
  static mark(t53) {
    return new r3(t53);
  }
  static widget(t53) {
    let e10 = Math.max(-1e4, Math.min(1e4, t53.side || 0)), i10 = !!t53.block;
    return e10 += i10 && !t53.inlineOrder ? e10 > 0 ? 3e8 : -4e8 : e10 > 0 ? 1e8 : -1e8, new r5(t53, e10, e10, i10, t53.widget || null, false);
  }
  static replace(t53) {
    let e10 = !!t53.block, i10, n10;
    if (t53.isBlockGap) i10 = -5e8, n10 = 4e8;
    else {
      let { start: s10, end: o10 } = r9(t53, e10);
      i10 = (s10 ? e10 ? -3e8 : -1 : 5e8) - 1, n10 = (o10 ? e10 ? 2e8 : 1 : -6e8) + 1;
    }
    return new r5(t53, i10, n10, e10, t53.widget || null, true);
  }
  static line(t53) {
    return new r4(t53);
  }
  static set(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return tV.of(t53, e10);
  }
  hasHeight() {
    return !!this.widget && this.widget.estimatedHeight > -1;
  }
};
r8.none = tV.empty;
let r3 = class t37 extends r8 {
  constructor(t53) {
    let { start: e10, end: i10 } = r9(t53);
    super(e10 ? -1 : 5e8, i10 ? 1 : -6e8, null, t53), this.tagName = t53.tagName || "span", this.class = t53.class || "", this.attrs = t53.attributes || null;
  }
  eq(e10) {
    var i10, n10;
    return this == e10 || e10 instanceof t37 && this.tagName == e10.tagName && (this.class || (null === (i10 = this.attrs) || void 0 === i10 ? void 0 : i10.class)) == (e10.class || (null === (n10 = e10.attrs) || void 0 === n10 ? void 0 : n10.class)) && rJ(this.attrs, e10.attrs, "class");
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (t53 >= e10) throw RangeError("Mark decorations may not be empty");
    return super.range(t53, e10);
  }
};
r3.prototype.point = false;
let r4 = class t38 extends r8 {
  constructor(t53) {
    super(-2e8, -2e8, null, t53);
  }
  eq(e10) {
    return e10 instanceof t38 && this.spec.class == e10.spec.class && rJ(this.spec.attributes, e10.spec.attributes);
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (e10 != t53) throw RangeError("Line decoration ranges must be zero-length");
    return super.range(t53, e10);
  }
};
r4.prototype.mapMode = I.TrackBefore, r4.prototype.point = true;
let r5 = class t39 extends r8 {
  constructor(t53, e10, i10, n10, s10, o10) {
    super(e10, i10, s10, t53), this.block = n10, this.isReplace = o10, this.mapMode = n10 ? e10 <= 0 ? I.TrackBefore : I.TrackAfter : I.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? r2.WidgetRange : this.startSide <= 0 ? r2.WidgetBefore : r2.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e10) {
    var i10, n10;
    return e10 instanceof t39 && ((i10 = this.widget) == (n10 = e10.widget) || !!(i10 && n10 && i10.compare(n10))) && this.block == e10.block && this.startSide == e10.startSide && this.endSide == e10.endSide;
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (this.isReplace && (t53 > e10 || t53 == e10 && this.startSide > 0 && this.endSide <= 0)) throw RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e10 != t53) throw RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t53, e10);
  }
};
function r9(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], { inclusiveStart: i10, inclusiveEnd: n10 } = t53;
  return null == i10 && (i10 = t53.inclusive), null == n10 && (n10 = t53.inclusive), { start: null != i10 ? i10 : e10, end: null != n10 ? n10 : e10 };
}
function r6(t53, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s10 = i10.length - 1;
  s10 >= 0 && i10[s10] + n10 >= t53 ? i10[s10] = Math.max(i10[s10], e10) : i10.push(t53, e10);
}
r5.prototype.point = true;
let r7 = class t40 {
  constructor(t53, e10, i10, n10) {
    this.doc = t53, this.pos = e10, this.end = i10, this.disallowBlockEffectsFor = n10, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t53.iter(), this.skip = e10;
  }
  posCovered() {
    if (0 == this.content.length) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t53 = this.content[this.content.length - 1];
    return !(t53.breakAfter || t53 instanceof r0 && t53.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new rZ()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.bufferMarks;
    this.pendingBuffer && (this.curLine.append(lt(new rG(-1), t53), t53.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t53) {
    this.flushBuffer(), this.curLine = null, this.content.push(t53);
  }
  finish(t53) {
    this.pendingBuffer && t53 <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || t53 && this.content.length && this.content[this.content.length - 1] instanceof r0 || this.getLine();
  }
  buildText(t53, e10, i10) {
    for (; t53 > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: e11, lineBreak: i11, done: n11 } = this.cursor.next(this.skip);
        if (this.skip = 0, n11) throw Error("Ran out of text content when drawing inline views");
        if (i11) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t53--;
          continue;
        }
        this.text = e11, this.textOff = 0;
      }
      let n10 = Math.min(this.text.length - this.textOff, t53, 512);
      this.flushBuffer(e10.slice(e10.length - i10)), this.getLine().append(lt(new rq(this.text.slice(this.textOff, this.textOff + n10)), e10), i10), this.atCursorPos = true, this.textOff += n10, t53 -= n10, i10 = 0;
    }
  }
  span(t53, e10, i10, n10) {
    this.buildText(e10 - t53, i10, n10), this.pos = e10, this.openStart < 0 && (this.openStart = n10);
  }
  point(t53, e10, i10, n10, s10, o10) {
    if (this.disallowBlockEffectsFor[o10] && i10 instanceof r5) {
      if (i10.block) throw RangeError("Block decorations may not be specified via plugins");
      if (e10 > this.doc.lineAt(this.pos).to) throw RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let r10 = e10 - t53;
    if (i10 instanceof r5) {
      if (i10.block) i10.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new r0(i10.widget || le.block, r10, i10));
      else {
        let o11 = rj.create(i10.widget || le.inline, r10, r10 ? 0 : i10.startSide), l10 = this.atCursorPos && !o11.isEditable && s10 <= n10.length && (t53 < e10 || i10.startSide > 0), h10 = !o11.isEditable && (t53 < e10 || s10 > n10.length || i10.startSide <= 0), a10 = this.getLine();
        2 != this.pendingBuffer || l10 || o11.isEditable || (this.pendingBuffer = 0), this.flushBuffer(n10), l10 && (a10.append(lt(new rG(1), n10), s10), s10 = n10.length + Math.max(0, s10 - n10.length)), a10.append(lt(o11, n10), s10), this.atCursorPos = h10, this.pendingBuffer = h10 ? t53 < e10 || s10 > n10.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n10.slice());
      }
    } else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i10);
    r10 && (this.textOff + r10 <= this.text.length ? this.textOff += r10 : (this.skip += r10 - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e10), this.openStart < 0 && (this.openStart = s10);
  }
  static build(e10, i10, n10, s10, o10) {
    let r10 = new t40(e10, i10, n10, o10);
    return r10.openEnd = tV.spans(s10, i10, n10, r10), r10.openStart < 0 && (r10.openStart = r10.openEnd), r10.finish(r10.openEnd), r10;
  }
};
function lt(t53, e10) {
  for (let i10 of e10) t53 = new r_(i10, [t53], t53.length);
  return t53;
}
let le = class extends r1 {
  constructor(t53) {
    super(), this.tag = t53;
  }
  eq(t53) {
    return t53.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t53) {
    return t53.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
};
le.inline = new le("span"), le.block = new le("div");
var li = ((E = li || (li = {}))[E.LTR = 0] = "LTR", E[E.RTL = 1] = "RTL", E);
let ln = li.LTR, ls = li.RTL;
function lo(t53) {
  let e10 = [];
  for (let i10 = 0; i10 < t53.length; i10++) e10.push(1 << +t53[i10]);
  return e10;
}
let lr = lo("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ll = lo("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), lh = /* @__PURE__ */ Object.create(null), la = [];
for (let t53 of ["()", "[]", "{}"]) {
  let e10 = t53.charCodeAt(0), i10 = t53.charCodeAt(1);
  lh[e10] = i10, lh[i10] = -e10;
}
function lc(t53) {
  return t53 <= 247 ? lr[t53] : 1424 <= t53 && t53 <= 1524 ? 2 : 1536 <= t53 && t53 <= 1785 ? ll[t53 - 1536] : 1774 <= t53 && t53 <= 2220 ? 4 : 8192 <= t53 && t53 <= 8204 ? 256 : 64336 <= t53 && t53 <= 65023 ? 4 : 1;
}
let ld = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, lu = class {
  get dir() {
    return this.level % 2 ? ls : ln;
  }
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.level = i10;
  }
  side(t53, e10) {
    return this.dir == e10 == t53 ? this.to : this.from;
  }
  forward(t53, e10) {
    return t53 == (this.dir == e10);
  }
  static find(t53, e10, i10, n10) {
    let s10 = -1;
    for (let o10 = 0; o10 < t53.length; o10++) {
      let r10 = t53[o10];
      if (r10.from <= e10 && r10.to >= e10) {
        if (r10.level == i10) return o10;
        (s10 < 0 || (0 != n10 ? n10 < 0 ? r10.from < e10 : r10.to > e10 : t53[s10].level > r10.level)) && (s10 = o10);
      }
    }
    if (s10 < 0) throw RangeError("Index out of range");
    return s10;
  }
}, lf = [];
function lg(t53) {
  return [new lu(0, t53, 0)];
}
let lp = "", lm = J.define(), lv = J.define(), lw = J.define(), lb = J.define(), ly = J.define(), lx = J.define(), lS = J.define(), lk = J.define({ combine: (t53) => t53.some((t54) => t54) }), lM = J.define({ combine: (t53) => t53.some((t54) => t54) }), lA = J.define(), lC = class t41 {
  constructor(t53, e10 = "nearest", i10 = "nearest", n10 = 5, s10 = 5, o10 = false) {
    this.range = t53, this.y = e10, this.x = i10, this.yMargin = n10, this.xMargin = s10, this.isSnapshot = o10;
  }
  map(e10) {
    return e10.empty ? this : new t41(this.range.map(e10), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e10) {
    return this.range.to <= e10.doc.length ? this : new t41($.cursor(e10.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}, lD = tk.define({ map: (t53, e10) => t53.map(e10) });
function lO(t53, e10, i10) {
  let n10 = t53.facet(lb);
  n10.length ? n10[0](e10) : window.onerror ? window.onerror(String(e10), i10, void 0, void 0, e10) : i10 ? console.error(i10 + ":", e10) : console.error(e10);
}
let lT = J.define({ combine: (t53) => !t53.length || t53[0] }), lE = 0, lB = J.define(), lR = class t42 {
  constructor(t53, e10, i10, n10, s10) {
    this.id = t53, this.create = e10, this.domEventHandlers = i10, this.domEventObservers = n10, this.extension = s10(this);
  }
  static define(e10, i10) {
    let { eventHandlers: n10, eventObservers: s10, provide: o10, decorations: r10 } = i10 || {};
    return new t42(lE++, e10, n10, s10, (t53) => {
      let e11 = [lB.of(t53)];
      return r10 && e11.push(lH.of((e12) => {
        let i11 = e12.plugin(t53);
        return i11 ? r10(i11) : r8.none;
      })), o10 && e11.push(o10(t53)), e11;
    });
  }
  static fromClass(e10, i10) {
    return t42.define((t53) => new e10(t53), i10);
  }
}, lL = class {
  constructor(t53) {
    this.spec = t53, this.mustUpdate = null, this.value = null;
  }
  update(t53) {
    if (this.value) {
      if (this.mustUpdate) {
        let t54 = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(t54);
        } catch (e10) {
          if (lO(t54.state, e10, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch (t55) {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.create(t53);
    } catch (e10) {
      lO(t53.state, e10, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(t53) {
    var e10;
    if (null === (e10 = this.value) || void 0 === e10 ? void 0 : e10.destroy) try {
      this.value.destroy();
    } catch (e11) {
      lO(t53.state, e11, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}, lP = J.define(), lN = J.define(), lH = J.define(), lV = J.define(), lI = J.define(), lF = J.define();
function lW(t53, e10) {
  let i10 = t53.state.facet(lF);
  if (!i10.length) return i10;
  let n10 = i10.map((e11) => e11 instanceof Function ? e11(t53) : e11), s10 = [];
  return tV.spans(n10, e10.from, e10.to, { point() {
  }, span(t54, i11, n11, o10) {
    let r10 = t54 - e10.from, l10 = i11 - e10.from, h10 = s10;
    for (let t55 = n11.length - 1; t55 >= 0; t55--, o10--) {
      let i12 = n11[t55].spec.bidiIsolate, s11;
      if (null == i12 && (i12 = function(t56, e11, i13) {
        for (let n12 = e11; n12 < i13; n12++) {
          let e12 = lc(t56.charCodeAt(n12));
          if (1 == e12) break;
          if (2 == e12 || 4 == e12) return ls;
        }
        return ln;
      }(e10.text, r10, l10)), o10 > 0 && h10.length && (s11 = h10[h10.length - 1]).to == r10 && s11.direction == i12) s11.to = l10, h10 = s11.inner;
      else {
        let t56 = { from: r10, to: l10, direction: i12, inner: [] };
        h10.push(t56), h10 = t56.inner;
      }
    }
  } }), s10;
}
let lz = J.define();
function lK(t53) {
  let e10 = 0, i10 = 0, n10 = 0, s10 = 0;
  for (let o10 of t53.state.facet(lz)) {
    let r10 = o10(t53);
    r10 && (null != r10.left && (e10 = Math.max(e10, r10.left)), null != r10.right && (i10 = Math.max(i10, r10.right)), null != r10.top && (n10 = Math.max(n10, r10.top)), null != r10.bottom && (s10 = Math.max(s10, r10.bottom)));
  }
  return { left: e10, right: i10, top: n10, bottom: s10 };
}
let lq = J.define(), l_ = class t43 {
  constructor(t53, e10, i10, n10) {
    this.fromA = t53, this.toA = e10, this.fromB = i10, this.toB = n10;
  }
  join(e10) {
    return new t43(Math.min(this.fromA, e10.fromA), Math.max(this.toA, e10.toA), Math.min(this.fromB, e10.fromB), Math.max(this.toB, e10.toB));
  }
  addToSet(t53) {
    let e10 = t53.length, i10 = this;
    for (; e10 > 0; e10--) {
      let n10 = t53[e10 - 1];
      if (!(n10.fromA > i10.toA)) {
        if (n10.toA < i10.fromA) break;
        i10 = i10.join(n10), t53.splice(e10 - 1, 1);
      }
    }
    return t53.splice(e10, 0, i10), t53;
  }
  static extendWithRanges(e10, i10) {
    if (0 == i10.length) return e10;
    let n10 = [];
    for (let s10 = 0, o10 = 0, r10 = 0, l10 = 0; ; s10++) {
      let h10 = s10 == e10.length ? null : e10[s10], a10 = r10 - l10, c10 = h10 ? h10.fromB : 1e9;
      for (; o10 < i10.length && i10[o10] < c10; ) {
        let e11 = i10[o10], s11 = i10[o10 + 1], r11 = Math.max(l10, e11), h11 = Math.min(c10, s11);
        if (r11 <= h11 && new t43(r11 + a10, h11 + a10, r11, h11).addToSet(n10), s11 > c10) break;
        o10 += 2;
      }
      if (!h10) return n10;
      new t43(h10.fromA, h10.toA, h10.fromB, h10.toB).addToSet(n10), r10 = h10.toA, l10 = h10.toB;
    }
  }
}, lj = class t44 {
  constructor(t53, e10, i10) {
    for (let n11 of (this.view = t53, this.state = e10, this.transactions = i10, this.flags = 0, this.startState = t53.state, this.changes = W.empty(this.startState.doc.length), i10)) this.changes = this.changes.compose(n11.changes);
    let n10 = [];
    this.changes.iterChangedRanges((t54, e11, i11, s10) => n10.push(new l_(t54, e11, i11, s10))), this.changedRanges = n10;
  }
  static create(e10, i10, n10) {
    return new t44(e10, i10, n10);
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
    return this.transactions.some((t53) => t53.selection);
  }
  get empty() {
    return 0 == this.flags && 0 == this.transactions.length;
  }
}, lG = class extends rC {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t53) {
    super(), this.view = t53, this.decorations = [], this.dynamicDecorationMap = [], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t53.contentDOM), this.children = [new rZ()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new l_(0, 0, 0, t53.state.doc.length)], 0, null);
  }
  update(t53) {
    var e10, i10, n10, s10, o10, r10;
    let l10, h10;
    let a10 = t53.changedRanges;
    this.minWidth > 0 && a10.length && (a10.every((t54) => {
      let { fromA: e11, toA: i11 } = t54;
      return i11 < this.minWidthFrom || e11 > this.minWidthTo;
    }) ? (this.minWidthFrom = t53.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t53.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let c10 = -1;
    !(this.view.inputState.composing >= 0) || ((null === (e10 = this.domChanged) || void 0 === e10 ? void 0 : e10.newSel) ? c10 = this.domChanged.newSel.head : (i10 = t53.changes, n10 = this.hasComposition, l10 = false, n10 && i10.iterChangedRanges((t54, e11) => {
      t54 < n10.to && e11 > n10.from && (l10 = true);
    }), l10 || t53.selectionSet || (c10 = t53.state.selection.main.head)));
    let d10 = c10 > -1 ? function(t54, e11, i11) {
      let n11 = l$(t54, i11);
      if (!n11) return null;
      let { node: s11, from: o11, to: r11 } = n11, l11 = s11.nodeValue;
      if (/[\n\r]/.test(l11) || t54.state.doc.sliceString(n11.from, n11.to) != l11) return null;
      let h11 = e11.invertedDesc, a11 = new l_(h11.mapPos(o11), h11.mapPos(r11), o11, r11), c11 = [];
      for (let e12 = s11.parentNode; ; e12 = e12.parentNode) {
        let i12 = rC.get(e12);
        if (i12 instanceof r_) c11.push({ node: e12, deco: i12.mark });
        else {
          if (i12 instanceof rZ || "DIV" == e12.nodeName && e12.parentNode == t54.contentDOM) return { range: a11, text: s11, marks: c11, line: e12 };
          if (e12 == t54.contentDOM) return null;
          c11.push({ node: e12, deco: new r3({ inclusive: true, attributes: function(t55) {
            let e13 = /* @__PURE__ */ Object.create(null);
            for (let i13 = 0; i13 < t55.attributes.length; i13++) {
              let n12 = t55.attributes[i13];
              e13[n12.name] = n12.value;
            }
            return e13;
          }(e12), tagName: e12.tagName.toLowerCase() }) });
        }
      }
    }(this.view, t53.changes, c10) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: e11, to: i11 } = this.hasComposition;
      a10 = new l_(e11, i11, t53.changes.mapPos(e11, -1), t53.changes.mapPos(i11, 1)).addToSet(a10.slice());
    }
    this.hasComposition = d10 ? { from: d10.range.fromB, to: d10.range.toB } : null, (rK.ie || rK.chrome) && !d10 && t53 && t53.state.doc.lines != t53.startState.doc.lines && (this.forceSelection = true);
    let u10 = (s10 = this.decorations, o10 = this.updateDeco(), r10 = t53.changes, h10 = new lY(), tV.compare(s10, o10, r10, h10), h10.changes);
    return a10 = l_.extendWithRanges(a10, u10), (!!(7 & this.flags) || 0 != a10.length) && (this.updateInner(a10, t53.startState.doc.length, d10), t53.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(t53, e10, i10) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(t53, e10, i10);
    let { observer: n10 } = this.view;
    n10.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let t54 = rK.chrome || rK.ios ? { node: n10.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, t54), this.flags &= -8, t54 && (t54.written || n10.selectionRange.focusNode != t54.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((t54) => t54.flags &= -9);
    let s10 = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let t54 of this.children) t54 instanceof r0 && t54.widget instanceof lU && s10.push(t54.dom);
    n10.updateGaps(s10);
  }
  updateChildren(t53, e10, i10) {
    let n10 = i10 ? i10.range.addToSet(t53.slice()) : t53, s10 = this.childCursor(e10);
    for (let t54 = n10.length - 1; ; t54--) {
      let e11 = t54 >= 0 ? n10[t54] : null;
      if (!e11) break;
      let { fromA: o10, toA: r10, fromB: l10, toB: h10 } = e11, a10, c10, d10, u10;
      if (i10 && i10.range.fromB < h10 && i10.range.toB > l10) {
        let t55 = r7.build(this.view.state.doc, l10, i10.range.fromB, this.decorations, this.dynamicDecorationMap), e12 = r7.build(this.view.state.doc, i10.range.toB, h10, this.decorations, this.dynamicDecorationMap);
        c10 = t55.breakAtStart, d10 = t55.openStart, u10 = e12.openEnd;
        let n11 = this.compositionView(i10);
        e12.breakAtStart ? n11.breakAfter = 1 : e12.content.length && n11.merge(n11.length, n11.length, e12.content[0], false, e12.openStart, 0) && (n11.breakAfter = e12.content[0].breakAfter, e12.content.shift()), t55.content.length && n11.merge(0, 0, t55.content[t55.content.length - 1], true, 0, t55.openEnd) && t55.content.pop(), a10 = t55.content.concat(n11).concat(e12.content);
      } else ({ content: a10, breakAtStart: c10, openStart: d10, openEnd: u10 } = r7.build(this.view.state.doc, l10, h10, this.decorations, this.dynamicDecorationMap));
      let { i: f10, off: g10 } = s10.findPos(r10, 1), { i: p10, off: m2 } = s10.findPos(o10, -1);
      rT(this, p10, m2, f10, g10, a10, c10, d10, u10);
    }
    i10 && this.fixCompositionDOM(i10);
  }
  compositionView(t53) {
    let e10 = new rq(t53.text.nodeValue);
    for (let { deco: i11 } of (e10.flags |= 8, t53.marks)) e10 = new r_(i11, [e10], e10.length);
    let i10 = new rZ();
    return i10.append(e10, 0), i10;
  }
  fixCompositionDOM(t53) {
    let e10 = (t54, e11) => {
      e11.flags |= 8 | (e11.children.some((t55) => 7 & t55.flags) ? 1 : 0), this.markedForComposition.add(e11);
      let i11 = rC.get(t54);
      i11 && i11 != e11 && (i11.dom = null), e11.setDOM(t54);
    }, i10 = this.childPos(t53.range.fromB, 1), n10 = this.children[i10.i];
    e10(t53.line, n10);
    for (let s10 = t53.marks.length - 1; s10 >= -1; s10--) i10 = n10.childPos(i10.off, 1), n10 = n10.children[i10.i], e10(s10 >= 0 ? t53.marks[s10].node : t53.text, n10);
  }
  updateSelection() {
    var t53;
    let e10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (e10 || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n10 = this.view.root.activeElement, s10 = n10 == this.dom, o10 = !s10 && rr(this.dom, this.view.observer.selectionRange) && !(n10 && this.dom.contains(n10));
    if (!(s10 || i10 || o10)) return;
    let r10 = this.forceSelection;
    this.forceSelection = false;
    let l10 = this.view.state.selection.main, h10 = this.moveToLine(this.domAtPos(l10.anchor)), a10 = l10.empty ? h10 : this.moveToLine(this.domAtPos(l10.head));
    if (rK.gecko && l10.empty && !this.hasComposition && 1 == (t53 = h10).node.nodeType && t53.node.firstChild && (0 == t53.offset || "false" == t53.node.childNodes[t53.offset - 1].contentEditable) && (t53.offset == t53.node.childNodes.length || "false" == t53.node.childNodes[t53.offset].contentEditable)) {
      let t54 = document.createTextNode("");
      this.view.observer.ignore(() => h10.node.insertBefore(t54, h10.node.childNodes[h10.offset] || null)), h10 = a10 = new rM(t54, 0), r10 = true;
    }
    let c10 = this.view.observer.selectionRange;
    !r10 && c10.focusNode && (rh(h10.node, h10.offset, c10.anchorNode, c10.anchorOffset) && rh(a10.node, a10.offset, c10.focusNode, c10.focusOffset) || this.suppressWidgetCursorChange(c10, l10)) || (this.view.observer.ignore(() => {
      rK.android && rK.chrome && this.dom.contains(c10.focusNode) && function(t55, e12) {
        for (let i12 = t55; i12 && i12 != e12; i12 = i12.assignedSlot || i12.parentNode) if (1 == i12.nodeType && "false" == i12.contentEditable) return true;
        return false;
      }(c10.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let t54 = rs(this.view.root);
      if (t54) {
        if (l10.empty) {
          if (rK.gecko) {
            var e11, i11;
            let t55 = (e11 = h10.node, i11 = h10.offset, 1 != e11.nodeType ? 0 : (i11 && "false" == e11.childNodes[i11 - 1].contentEditable ? 1 : 0) | (i11 < e11.childNodes.length && "false" == e11.childNodes[i11].contentEditable ? 2 : 0));
            if (t55 && 3 != t55) {
              let e12 = (1 == t55 ? rS : rk)(h10.node, h10.offset);
              e12 && (h10 = new rM(e12.node, e12.offset));
            }
          }
          t54.collapse(h10.node, h10.offset), null != l10.bidiLevel && void 0 !== t54.caretBidiLevel && (t54.caretBidiLevel = l10.bidiLevel);
        } else if (t54.extend) {
          t54.collapse(h10.node, h10.offset);
          try {
            t54.extend(a10.node, a10.offset);
          } catch (t55) {
          }
        } else {
          let e12 = document.createRange();
          l10.anchor > l10.head && ([h10, a10] = [a10, h10]), e12.setEnd(a10.node, a10.offset), e12.setStart(h10.node, h10.offset), t54.removeAllRanges(), t54.addRange(e12);
        }
      }
      o10 && this.view.root.activeElement == this.dom && (this.dom.blur(), n10 && n10.focus());
    }), this.view.observer.setSelectionRange(h10, a10)), this.impreciseAnchor = h10.precise ? null : new rM(c10.anchorNode, c10.anchorOffset), this.impreciseHead = a10.precise ? null : new rM(c10.focusNode, c10.focusOffset);
  }
  suppressWidgetCursorChange(t53, e10) {
    return this.hasComposition && e10.empty && rh(t53.focusNode, t53.focusOffset, t53.anchorNode, t53.anchorOffset) && this.posFromDOM(t53.focusNode, t53.focusOffset) == e10.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: t53 } = this, e10 = t53.state.selection.main, i10 = rs(t53.root), { anchorNode: n10, anchorOffset: s10 } = t53.observer.selectionRange;
    if (!i10 || !e10.empty || !e10.assoc || !i10.modify) return;
    let o10 = rZ.find(this, e10.head);
    if (!o10) return;
    let r10 = o10.posAtStart;
    if (e10.head == r10 || e10.head == r10 + o10.length) return;
    let l10 = this.coordsAt(e10.head, -1), h10 = this.coordsAt(e10.head, 1);
    if (!l10 || !h10 || l10.bottom > h10.top) return;
    let a10 = this.domAtPos(e10.head + e10.assoc);
    i10.collapse(a10.node, a10.offset), i10.modify("move", e10.assoc < 0 ? "forward" : "backward", "lineboundary"), t53.observer.readSelectionRange();
    let c10 = t53.observer.selectionRange;
    t53.docView.posFromDOM(c10.anchorNode, c10.anchorOffset) != e10.from && i10.collapse(n10, s10);
  }
  moveToLine(t53) {
    let e10 = this.dom, i10;
    if (t53.node != e10) return t53;
    for (let n10 = t53.offset; !i10 && n10 < e10.childNodes.length; n10++) {
      let t54 = rC.get(e10.childNodes[n10]);
      t54 instanceof rZ && (i10 = t54.domAtPos(0));
    }
    for (let n10 = t53.offset - 1; !i10 && n10 >= 0; n10--) {
      let t54 = rC.get(e10.childNodes[n10]);
      t54 instanceof rZ && (i10 = t54.domAtPos(t54.length));
    }
    return i10 ? new rM(i10.node, i10.offset, true) : t53;
  }
  nearest(t53) {
    for (let e10 = t53; e10; ) {
      let t54 = rC.get(e10);
      if (t54 && t54.rootView == this) return t54;
      e10 = e10.parentNode;
    }
    return null;
  }
  posFromDOM(t53, e10) {
    let i10 = this.nearest(t53);
    if (!i10) throw RangeError("Trying to find position for a DOM position outside of the document");
    return i10.localPosFromDOM(t53, e10) + i10.posAtStart;
  }
  domAtPos(t53) {
    let { i: e10, off: i10 } = this.childCursor().findPos(t53, -1);
    for (; e10 < this.children.length - 1; ) {
      let t54 = this.children[e10];
      if (i10 < t54.length || t54 instanceof rZ) break;
      e10++, i10 = 0;
    }
    return this.children[e10].domAtPos(i10);
  }
  coordsAt(t53, e10) {
    let i10 = null, n10 = 0;
    for (let s10 = this.length, o10 = this.children.length - 1; o10 >= 0; o10--) {
      let r10 = this.children[o10], l10 = s10 - r10.breakAfter, h10 = l10 - r10.length;
      if (l10 < t53) break;
      if (h10 <= t53 && (h10 < t53 || r10.covers(-1)) && (l10 > t53 || r10.covers(1)) && (!i10 || r10 instanceof rZ && !(i10 instanceof rZ && e10 >= 0))) i10 = r10, n10 = h10;
      else if (i10 && h10 == t53 && l10 == t53 && r10 instanceof r0 && 2 > Math.abs(e10)) {
        if (r10.deco.startSide < 0) break;
        o10 && (i10 = null);
      }
      s10 = h10;
    }
    return i10 ? i10.coordsAt(t53 - n10, e10) : null;
  }
  coordsForChar(t53) {
    let { i: e10, off: i10 } = this.childPos(t53, 1), n10 = this.children[e10];
    if (!(n10 instanceof rZ)) return null;
    for (; n10.children.length; ) {
      let { i: t54, off: e11 } = n10.childPos(i10, 1);
      for (; ; t54++) {
        if (t54 == n10.children.length) return null;
        if ((n10 = n10.children[t54]).length) break;
      }
      i10 = e11;
    }
    if (!(n10 instanceof rq)) return null;
    let s10 = p(n10.text, i10);
    if (s10 == i10) return null;
    let o10 = rw(n10.dom, i10, s10).getClientRects();
    for (let t54 = 0; t54 < o10.length; t54++) {
      let e11 = o10[t54];
      if (t54 == o10.length - 1 || e11.top < e11.bottom && e11.left < e11.right) return e11;
    }
    return null;
  }
  measureVisibleLineHeights(t53) {
    let e10 = [], { from: i10, to: n10 } = t53, s10 = this.view.contentDOM.clientWidth, o10 = s10 > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, r10 = -1, l10 = this.view.textDirection == li.LTR;
    for (let t54 = 0, h10 = 0; h10 < this.children.length; h10++) {
      let a10 = this.children[h10], c10 = t54 + a10.length;
      if (c10 > n10) break;
      if (t54 >= i10) {
        let i11 = a10.dom.getBoundingClientRect();
        if (e10.push(i11.height), o10) {
          let e11 = a10.dom.lastChild, n11 = e11 ? rl(e11) : [];
          if (n11.length) {
            let e12 = n11[n11.length - 1], o11 = l10 ? e12.right - i11.left : i11.right - e12.left;
            o11 > r10 && (r10 = o11, this.minWidth = s10, this.minWidthFrom = t54, this.minWidthTo = c10);
          }
        }
      }
      t54 = c10 + a10.breakAfter;
    }
    return e10;
  }
  textDirectionAt(t53) {
    let { i: e10 } = this.childPos(t53, 1);
    return "rtl" == getComputedStyle(this.children[e10].dom).direction ? li.RTL : li.LTR;
  }
  measureTextSize() {
    for (let t54 of this.children) if (t54 instanceof rZ) {
      let e11 = t54.measureTextSize();
      if (e11) return e11;
    }
    let t53 = document.createElement("div"), e10, i10, n10;
    return t53.className = "cm-line", t53.style.width = "99999px", t53.style.position = "absolute", t53.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t53);
      let s10 = rl(t53.firstChild)[0];
      e10 = t53.getBoundingClientRect().height, i10 = s10 ? s10.width / 27 : 7, n10 = s10 ? s10.height : e10, t53.remove();
    }), { lineHeight: e10, charWidth: i10, textHeight: n10 };
  }
  childCursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length, e10 = this.children.length;
    return e10 && (t53 -= this.children[--e10].length), new rO(this.children, t53, e10);
  }
  computeBlockGapDeco() {
    let t53 = [], e10 = this.view.viewState;
    for (let i10 = 0, n10 = 0; ; n10++) {
      let s10 = n10 == e10.viewports.length ? null : e10.viewports[n10], o10 = s10 ? s10.from - 1 : this.length;
      if (o10 > i10) {
        let n11 = (e10.lineBlockAt(o10).bottom - e10.lineBlockAt(i10).top) / this.view.scaleY;
        t53.push(r8.replace({ widget: new lU(n11), block: true, inclusive: true, isBlockGap: true }).range(i10, o10));
      }
      if (!s10) break;
      i10 = s10.to + 1;
    }
    return r8.set(t53);
  }
  updateDeco() {
    let t53 = 0, e10 = this.view.state.facet(lH).map((e11) => (this.dynamicDecorationMap[t53++] = "function" == typeof e11) ? e11(this.view) : e11), i10 = false, n10 = this.view.state.facet(lV).map((t54, e11) => {
      let n11 = "function" == typeof t54;
      return n11 && (i10 = true), n11 ? t54(this.view) : t54;
    });
    for (n10.length && (this.dynamicDecorationMap[t53++] = i10, e10.push(tV.join(n10))), this.decorations = [...e10, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t53 < this.decorations.length; ) this.dynamicDecorationMap[t53++] = false;
    return this.decorations;
  }
  scrollIntoView(t53) {
    if (t53.isSnapshot) {
      let e11 = this.view.viewState.lineBlockAt(t53.range.head);
      this.view.scrollDOM.scrollTop = e11.top - t53.yMargin, this.view.scrollDOM.scrollLeft = t53.xMargin;
      return;
    }
    for (let e11 of this.view.state.facet(lA)) try {
      if (e11(this.view, t53.range, t53)) return true;
    } catch (t54) {
      lO(this.view.state, t54, "scroll handler");
    }
    let { range: e10 } = t53, i10 = this.coordsAt(e10.head, e10.empty ? e10.assoc : e10.head > e10.anchor ? -1 : 1), n10;
    if (!i10) return;
    !e10.empty && (n10 = this.coordsAt(e10.anchor, e10.anchor > e10.head ? -1 : 1)) && (i10 = { left: Math.min(i10.left, n10.left), top: Math.min(i10.top, n10.top), right: Math.max(i10.right, n10.right), bottom: Math.max(i10.bottom, n10.bottom) });
    let s10 = lK(this.view), o10 = { left: i10.left - s10.left, top: i10.top - s10.top, right: i10.right + s10.right, bottom: i10.bottom + s10.bottom }, { offsetWidth: r10, offsetHeight: l10 } = this.view.scrollDOM;
    !function(t54, e11, i11, n11, s11, o11, r11, l11) {
      let h10 = t54.ownerDocument, a10 = h10.defaultView || window;
      for (let c10 = t54, d10 = false; c10 && !d10; ) if (1 == c10.nodeType) {
        let t55, u10 = c10 == h10.body, f10 = 1, g10 = 1;
        if (u10) t55 = function(t56) {
          let e12 = t56.visualViewport;
          return e12 ? { left: 0, right: e12.width, top: 0, bottom: e12.height } : { left: 0, right: t56.innerWidth, top: 0, bottom: t56.innerHeight };
        }(a10);
        else {
          if (/^(fixed|sticky)$/.test(getComputedStyle(c10).position) && (d10 = true), c10.scrollHeight <= c10.clientHeight && c10.scrollWidth <= c10.clientWidth) {
            c10 = c10.assignedSlot || c10.parentNode;
            continue;
          }
          let e12 = c10.getBoundingClientRect();
          ({ scaleX: f10, scaleY: g10 } = rg(c10, e12)), t55 = { left: e12.left, right: e12.left + c10.clientWidth * f10, top: e12.top, bottom: e12.top + c10.clientHeight * g10 };
        }
        let p10 = 0, m2 = 0;
        if ("nearest" == s11) e11.top < t55.top ? (m2 = -(t55.top - e11.top + r11), i11 > 0 && e11.bottom > t55.bottom + m2 && (m2 = e11.bottom - t55.bottom + m2 + r11)) : e11.bottom > t55.bottom && (m2 = e11.bottom - t55.bottom + r11, i11 < 0 && e11.top - m2 < t55.top && (m2 = -(t55.top + m2 - e11.top + r11)));
        else {
          let n12 = e11.bottom - e11.top, o12 = t55.bottom - t55.top;
          m2 = ("center" == s11 && n12 <= o12 ? e11.top + n12 / 2 - o12 / 2 : "start" == s11 || "center" == s11 && i11 < 0 ? e11.top - r11 : e11.bottom - o12 + r11) - t55.top;
        }
        if ("nearest" == n11 ? e11.left < t55.left ? (p10 = -(t55.left - e11.left + o11), i11 > 0 && e11.right > t55.right + p10 && (p10 = e11.right - t55.right + p10 + o11)) : e11.right > t55.right && (p10 = e11.right - t55.right + o11, i11 < 0 && e11.left < t55.left + p10 && (p10 = -(t55.left + p10 - e11.left + o11))) : p10 = ("center" == n11 ? e11.left + (e11.right - e11.left) / 2 - (t55.right - t55.left) / 2 : "start" == n11 == l11 ? e11.left - o11 : e11.right - (t55.right - t55.left) + o11) - t55.left, p10 || m2) {
          if (u10) a10.scrollBy(p10, m2);
          else {
            let t56 = 0, i12 = 0;
            if (m2) {
              let t57 = c10.scrollTop;
              c10.scrollTop += m2 / g10, i12 = (c10.scrollTop - t57) * g10;
            }
            if (p10) {
              let e12 = c10.scrollLeft;
              c10.scrollLeft += p10 / f10, t56 = (c10.scrollLeft - e12) * f10;
            }
            e11 = { left: e11.left - t56, top: e11.top - i12, right: e11.right - t56, bottom: e11.bottom - i12 }, t56 && 1 > Math.abs(t56 - p10) && (n11 = "nearest"), i12 && 1 > Math.abs(i12 - m2) && (s11 = "nearest");
          }
        }
        if (u10) break;
        c10 = c10.assignedSlot || c10.parentNode;
      } else if (11 == c10.nodeType) c10 = c10.host;
      else break;
    }(this.view.scrollDOM, o10, e10.head < e10.anchor ? -1 : 1, t53.x, t53.y, Math.max(Math.min(t53.xMargin, r10), -r10), Math.max(Math.min(t53.yMargin, l10), -l10), this.view.textDirection == li.LTR);
  }
}, lU = class extends r1 {
  constructor(t53) {
    super(), this.height = t53;
  }
  toDOM() {
    let t53 = document.createElement("div");
    return t53.className = "cm-gap", this.updateDOM(t53), t53;
  }
  eq(t53) {
    return t53.height == this.height;
  }
  updateDOM(t53) {
    return t53.style.height = this.height + "px", true;
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
};
function l$(t53, e10) {
  let i10 = t53.observer.selectionRange;
  if (!i10.focusNode) return null;
  let n10 = rS(i10.focusNode, i10.focusOffset), s10 = rk(i10.focusNode, i10.focusOffset), o10 = n10 || s10;
  if (s10 && n10 && s10.node != n10.node) {
    let e11 = rC.get(s10.node);
    if (!e11 || e11 instanceof rq && e11.text != s10.node.nodeValue) o10 = s10;
    else if (t53.docView.lastCompositionAfterCursor) {
      let t54 = rC.get(n10.node);
      !t54 || t54 instanceof rq && t54.text != n10.node.nodeValue || (o10 = s10);
    }
  }
  if (t53.docView.lastCompositionAfterCursor = o10 != n10, !o10) return null;
  let r10 = e10 - o10.offset;
  return { from: r10, to: r10 + o10.node.nodeValue.length, node: o10.node };
}
let lY = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t53, e10) {
    r6(t53, e10, this.changes);
  }
  comparePoint(t53, e10) {
    r6(t53, e10, this.changes);
  }
};
function lX(t53, e10) {
  return t53.top < e10.bottom - 1 && t53.bottom > e10.top + 1;
}
function lJ(t53, e10) {
  return e10 < t53.top ? { top: e10, left: t53.left, right: t53.right, bottom: t53.bottom } : t53;
}
function lQ(t53, e10) {
  return e10 > t53.bottom ? { top: t53.top, left: t53.left, right: t53.right, bottom: e10 } : t53;
}
function lZ(t53, e10, i10) {
  let n10 = t53.nodeValue.length, s10 = -1, o10 = 1e9, r10 = 0;
  for (let l10 = 0; l10 < n10; l10++) {
    let n11 = rw(t53, l10, l10 + 1).getClientRects();
    for (let h10 = 0; h10 < n11.length; h10++) {
      let a10 = n11[h10];
      if (a10.top == a10.bottom) continue;
      r10 || (r10 = e10 - a10.left);
      let c10 = (a10.top > i10 ? a10.top - i10 : i10 - a10.bottom) - 1;
      if (a10.left - 1 <= e10 && a10.right + 1 >= e10 && c10 < o10) {
        let i11 = e10 >= (a10.left + a10.right) / 2, n12 = i11;
        if ((rK.chrome || rK.gecko) && rw(t53, l10).getBoundingClientRect().left == a10.right && (n12 = !i11), c10 <= 0) return { node: t53, offset: l10 + (n12 ? 1 : 0) };
        s10 = l10 + (n12 ? 1 : 0), o10 = c10;
      }
    }
  }
  return { node: t53, offset: s10 > -1 ? s10 : r10 > 0 ? t53.nodeValue.length : 0 };
}
function l0(t53, e10, i10) {
  var n10, s10;
  let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, r10 = t53.contentDOM.getBoundingClientRect(), l10 = r10.top + t53.viewState.paddingTop, h10, { docHeight: a10 } = t53.viewState, { x: c10, y: d10 } = e10, u10 = d10 - l10;
  if (u10 < 0) return 0;
  if (u10 > a10) return t53.state.doc.length;
  for (let e11 = t53.viewState.heightOracle.textHeight / 2, n11 = false; (h10 = t53.elementAtHeight(u10)).type != r2.Text; ) for (; !((u10 = o10 > 0 ? h10.bottom + e11 : h10.top - e11) >= 0) || !(u10 <= a10); ) {
    if (n11) return i10 ? null : 0;
    n11 = true, o10 = -o10;
  }
  d10 = l10 + u10;
  let f10 = h10.from;
  if (f10 < t53.viewport.from) return 0 == t53.viewport.from ? 0 : i10 ? null : l1(t53, r10, h10, c10, d10);
  if (f10 > t53.viewport.to) return t53.viewport.to == t53.state.doc.length ? t53.state.doc.length : i10 ? null : l1(t53, r10, h10, c10, d10);
  let g10 = t53.dom.ownerDocument, p10 = t53.root.elementFromPoint ? t53.root : g10, m2 = p10.elementFromPoint(c10, d10);
  m2 && !t53.contentDOM.contains(m2) && (m2 = null), !m2 && (c10 = Math.max(r10.left + 1, Math.min(r10.right - 1, c10)), (m2 = p10.elementFromPoint(c10, d10)) && !t53.contentDOM.contains(m2) && (m2 = null));
  let v2, w2 = -1;
  if (m2 && (null === (n10 = t53.docView.nearest(m2)) || void 0 === n10 ? void 0 : n10.isEditable) != false) {
    if (g10.caretPositionFromPoint) {
      let t54 = g10.caretPositionFromPoint(c10, d10);
      t54 && ({ offsetNode: v2, offset: w2 } = t54);
    } else if (g10.caretRangeFromPoint) {
      let e11 = g10.caretRangeFromPoint(c10, d10);
      e11 && ({ startContainer: v2, startOffset: w2 } = e11, (!t53.contentDOM.contains(v2) || rK.safari && function(t54, e12, i11) {
        let n11;
        if (3 != t54.nodeType || e12 != (n11 = t54.nodeValue.length)) return false;
        for (let e13 = t54.nextSibling; e13; e13 = e13.nextSibling) if (1 != e13.nodeType || "BR" != e13.nodeName) return false;
        return rw(t54, n11 - 1, n11).getBoundingClientRect().left > i11;
      }(v2, w2, c10) || rK.chrome && function(t54, e12, i11) {
        if (0 != e12) return false;
        for (let e13 = t54; ; ) {
          let t55 = e13.parentNode;
          if (!t55 || 1 != t55.nodeType || t55.firstChild != e13) return false;
          if (t55.classList.contains("cm-line")) break;
          e13 = t55;
        }
        return i11 - (1 == t54.nodeType ? t54.getBoundingClientRect() : rw(t54, 0, Math.max(t54.nodeValue.length, 1)).getBoundingClientRect()).left > 5;
      }(v2, w2, c10)) && (v2 = void 0));
    }
  }
  if (!v2 || !t53.docView.dom.contains(v2)) {
    let e11 = rZ.find(t53.docView, f10);
    if (!e11) return u10 > h10.top + h10.height / 2 ? h10.to : h10.from;
    ({ node: v2, offset: w2 } = function t54(e12, i11, n11) {
      let s11, o11, r11, l11, h11, a11, c11, d11, u11 = false;
      for (let p12 = e12.firstChild; p12; p12 = p12.nextSibling) {
        let e13 = rl(p12);
        for (let m4 = 0; m4 < e13.length; m4++) {
          var f11, g11;
          let v3 = e13[m4];
          a11 && lX(a11, v3) && (v3 = lJ(lQ(v3, a11.bottom), a11.top));
          let w3 = (f11 = v3).left > i11 ? f11.left - i11 : Math.max(0, i11 - f11.right), b3 = (g11 = v3).top > n11 ? g11.top - n11 : Math.max(0, n11 - g11.bottom);
          if (0 == w3 && 0 == b3) return 3 == p12.nodeType ? lZ(p12, i11, n11) : t54(p12, i11, n11);
          if (!h11 || d11 > b3 || d11 == b3 && c11 > w3) {
            h11 = p12, a11 = v3, c11 = w3, d11 = b3;
            let t55 = b3 ? n11 < v3.top ? -1 : 1 : w3 ? i11 < v3.left ? -1 : 1 : 0;
            u11 = !t55 || (t55 > 0 ? m4 < e13.length - 1 : m4 > 0);
          }
          0 == w3 ? n11 > v3.bottom && (!r11 || r11.bottom < v3.bottom) ? (s11 = p12, r11 = v3) : n11 < v3.top && (!l11 || l11.top > v3.top) && (o11 = p12, l11 = v3) : r11 && lX(r11, v3) ? r11 = lQ(r11, v3.bottom) : l11 && lX(l11, v3) && (l11 = lJ(l11, v3.top));
        }
      }
      if (r11 && r11.bottom >= n11 ? (h11 = s11, a11 = r11) : l11 && l11.top <= n11 && (h11 = o11, a11 = l11), !h11) return { node: e12, offset: 0 };
      let p11 = Math.max(a11.left, Math.min(a11.right, i11));
      if (3 == h11.nodeType) return lZ(h11, p11, n11);
      if (u11 && "false" != h11.contentEditable) return t54(h11, p11, n11);
      let m3 = Array.prototype.indexOf.call(e12.childNodes, h11) + (i11 >= (a11.left + a11.right) / 2 ? 1 : 0);
      return { node: e12, offset: m3 };
    }(e11.dom, c10, d10));
  }
  let b2 = t53.docView.nearest(v2);
  if (!b2) return null;
  if (!b2.isWidget || (null === (s10 = b2.dom) || void 0 === s10 ? void 0 : s10.nodeType) != 1) return b2.localPosFromDOM(v2, w2) + b2.posAtStart;
  {
    let t54 = b2.dom.getBoundingClientRect();
    return e10.y < t54.top || e10.y <= t54.bottom && e10.x <= (t54.left + t54.right) / 2 ? b2.posAtStart : b2.posAtEnd;
  }
}
function l1(t53, e10, i10, n10, s10) {
  let o10 = Math.round((n10 - e10.left) * t53.defaultCharacterWidth);
  if (t53.lineWrapping && i10.height > 1.5 * t53.defaultLineHeight) {
    let e11 = t53.viewState.heightOracle.textHeight;
    o10 += Math.floor((s10 - i10.top - (t53.defaultLineHeight - e11) * 0.5) / e11) * t53.viewState.heightOracle.lineLength;
  }
  let r10 = t53.state.sliceDoc(i10.from, i10.to);
  return i10.from + tX(r10, o10, t53.state.tabSize);
}
function l2(t53, e10, i10, n10) {
  let s10 = t53.state.doc.lineAt(e10.head), o10 = t53.bidiSpans(s10), r10 = t53.textDirectionAt(s10.from);
  for (let l10 = e10, h10 = null; ; ) {
    let e11 = function(t54, e12, i11, n11, s11) {
      var o11;
      let r11 = n11.head - t54.from, l11 = lu.find(e12, r11, null !== (o11 = n11.bidiLevel) && void 0 !== o11 ? o11 : -1, n11.assoc), h11 = e12[l11], a11 = h11.side(s11, i11);
      if (r11 == a11) {
        let t55 = l11 += s11 ? 1 : -1;
        if (t55 < 0 || t55 >= e12.length) return null;
        r11 = (h11 = e12[l11 = t55]).side(!s11, i11), a11 = h11.side(s11, i11);
      }
      let c10 = p(t54.text, r11, h11.forward(s11, i11));
      (c10 < h11.from || c10 > h11.to) && (c10 = a11), lp = t54.text.slice(Math.min(r11, c10), Math.max(r11, c10));
      let d10 = l11 == (s11 ? e12.length - 1 : 0) ? null : e12[l11 + (s11 ? 1 : -1)];
      return d10 && c10 == a11 && d10.level + (s11 ? 0 : 1) < h11.level ? $.cursor(d10.side(!s11, i11) + t54.from, d10.forward(s11, i11) ? 1 : -1, d10.level) : $.cursor(c10 + t54.from, h11.forward(s11, i11) ? -1 : 1, h11.level);
    }(s10, o10, r10, l10, i10), a10 = lp;
    if (!e11) {
      if (s10.number == (i10 ? t53.state.doc.lines : 1)) return l10;
      a10 = "\n", s10 = t53.state.doc.line(s10.number + (i10 ? 1 : -1)), o10 = t53.bidiSpans(s10), e11 = t53.visualLineSide(s10, !i10);
    }
    if (h10) {
      if (!h10(a10)) return l10;
    } else {
      if (!n10) return e11;
      h10 = n10(a10);
    }
    l10 = e11;
  }
}
function l8(t53, e10, i10) {
  for (; ; ) {
    let n10 = 0;
    for (let s10 of t53) s10.between(e10 - 1, e10 + 1, (t54, s11, o10) => {
      if (e10 > t54 && e10 < s11) {
        let o11 = n10 || i10 || (e10 - t54 < s11 - e10 ? -1 : 1);
        e10 = o11 < 0 ? t54 : s11, n10 = o11;
      }
    });
    if (!n10) return e10;
  }
}
function l3(t53, e10, i10) {
  let n10 = l8(t53.state.facet(lI).map((e11) => e11(t53)), i10.from, e10.head > i10.from ? -1 : 1);
  return n10 == i10.from ? i10 : $.cursor(n10, n10 < i10.from ? 1 : -1);
}
let l4 = class {
  setSelectionOrigin(t53) {
    this.lastSelectionOrigin = t53, this.lastSelectionTime = Date.now();
  }
  constructor(t53) {
    var e10;
    this.view = t53, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t53.hasFocus, rK.safari && t53.contentDOM.addEventListener("input", () => null), rK.gecko && (e10 = t53.contentDOM.ownerDocument, hy.has(e10) || (hy.add(e10), e10.addEventListener("copy", () => {
    }), e10.addEventListener("cut", () => {
    })));
  }
  handleEvent(t53) {
    !(!function(t54, e10) {
      if (!e10.bubbles) return true;
      if (e10.defaultPrevented) return false;
      for (let i10 = e10.target, n10; i10 != t54.contentDOM; i10 = i10.parentNode) if (!i10 || 11 == i10.nodeType || (n10 = rC.get(i10)) && n10.ignoreEvent(e10)) return false;
      return true;
    }(this.view, t53) || this.ignoreDuringComposition(t53)) && ("keydown" == t53.type && this.keydown(t53) || this.runHandlers(t53.type, t53));
  }
  runHandlers(t53, e10) {
    let i10 = this.handlers[t53];
    if (i10) {
      for (let t54 of i10.observers) t54(this.view, e10);
      for (let t54 of i10.handlers) {
        if (e10.defaultPrevented) break;
        if (t54(this.view, e10)) {
          e10.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t53) {
    let e10 = function(t54) {
      let e11 = /* @__PURE__ */ Object.create(null);
      function i11(t55) {
        return e11[t55] || (e11[t55] = { observers: [], handlers: [] });
      }
      for (let e12 of t54) {
        let t55 = e12.spec;
        if (t55 && t55.domEventHandlers) for (let n11 in t55.domEventHandlers) {
          let s10 = t55.domEventHandlers[n11];
          s10 && i11(n11).handlers.push(l5(e12.value, s10));
        }
        if (t55 && t55.domEventObservers) for (let n11 in t55.domEventObservers) {
          let s10 = t55.domEventObservers[n11];
          s10 && i11(n11).observers.push(l5(e12.value, s10));
        }
      }
      for (let t55 in hi) i11(t55).handlers.push(hi[t55]);
      for (let t55 in hn) i11(t55).observers.push(hn[t55]);
      return e11;
    }(t53), i10 = this.handlers, n10 = this.view.contentDOM;
    for (let t54 in e10) if ("scroll" != t54) {
      let s10 = !e10[t54].handlers.length, o10 = i10[t54];
      o10 && !o10.handlers.length != s10 && (n10.removeEventListener(t54, this.handleEvent), o10 = null), o10 || n10.addEventListener(t54, this.handleEvent, { passive: s10 });
    }
    for (let t54 in i10) "scroll" == t54 || e10[t54] || n10.removeEventListener(t54, this.handleEvent);
    this.handlers = e10;
  }
  keydown(t53) {
    let e10;
    return this.lastKeyCode = t53.keyCode, this.lastKeyTime = Date.now(), !!(9 == t53.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) || ((this.tabFocusMode > 0 && 27 != t53.keyCode && 0 > l7.indexOf(t53.keyCode) && (this.tabFocusMode = -1), rK.android && rK.chrome && !t53.synthetic && (13 == t53.keyCode || 8 == t53.keyCode)) ? (this.view.observer.delayAndroidKey(t53.key, t53.keyCode), true) : rK.ios && !t53.synthetic && !t53.altKey && !t53.metaKey && ((e10 = l9.find((e11) => e11.keyCode == t53.keyCode)) && !t53.ctrlKey || l6.indexOf(t53.key) > -1 && t53.ctrlKey && !t53.shiftKey) ? (this.pendingIOSKey = e10 || t53, setTimeout(() => this.flushIOSKey(), 250), true) : (229 != t53.keyCode && this.view.observer.forceFlush(), false));
  }
  flushIOSKey(t53) {
    let e10 = this.pendingIOSKey;
    return !(!e10 || "Enter" == e10.key && t53 && t53.from < t53.to && /^\S+$/.test(t53.insert.toString())) && (this.pendingIOSKey = void 0, rb(this.view.contentDOM, e10.key, e10.keyCode, e10 instanceof KeyboardEvent ? e10 : void 0));
  }
  ignoreDuringComposition(t53) {
    return !!/^key/.test(t53.type) && (this.composing > 0 || !!(rK.safari && !rK.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = false, true));
  }
  startMouseSelection(t53) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t53;
  }
  update(t53) {
    this.mouseSelection && this.mouseSelection.update(t53), this.draggedContent && t53.docChanged && (this.draggedContent = this.draggedContent.map(t53.changes)), t53.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
};
function l5(t53, e10) {
  return (i10, n10) => {
    try {
      return e10.call(t53, n10, i10);
    } catch (t54) {
      lO(i10.state, t54);
    }
  };
}
let l9 = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], l6 = "dthko", l7 = [16, 17, 18, 20, 91, 92, 224, 225];
function ht(t53) {
  return 0.7 * Math.max(0, t53) + 8;
}
let he = class {
  constructor(t53, e10, i10, n10) {
    let s10;
    this.view = t53, this.startEvent = e10, this.style = i10, this.mustSelect = n10, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e10, this.scrollParent = function(t54) {
      let e11 = t54.ownerDocument;
      for (let i11 = t54.parentNode; i11 && i11 != e11.body; ) if (1 == i11.nodeType) {
        if (i11.scrollHeight > i11.clientHeight || i11.scrollWidth > i11.clientWidth) return i11;
        i11 = i11.assignedSlot || i11.parentNode;
      } else if (11 == i11.nodeType) i11 = i11.host;
      else break;
      return null;
    }(t53.contentDOM), this.atoms = t53.state.facet(lI).map((e11) => e11(t53));
    let o10 = t53.contentDOM.ownerDocument;
    o10.addEventListener("mousemove", this.move = this.move.bind(this)), o10.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e10.shiftKey, this.multiple = t53.state.facet(tB.allowMultipleSelections) && ((s10 = t53.state.facet(lm)).length ? s10[0](e10) : rK.mac ? e10.metaKey : e10.ctrlKey), this.dragging = !!function(t54, e11) {
      let { main: i11 } = t54.state.selection;
      if (i11.empty) return false;
      let n11 = rs(t54.root);
      if (!n11 || 0 == n11.rangeCount) return true;
      let s11 = n11.getRangeAt(0).getClientRects();
      for (let t55 = 0; t55 < s11.length; t55++) {
        let i12 = s11[t55];
        if (i12.left <= e11.clientX && i12.right >= e11.clientX && i12.top <= e11.clientY && i12.bottom >= e11.clientY) return true;
      }
      return false;
    }(t53, e10) && 1 == hg(e10) && null;
  }
  start(t53) {
    false === this.dragging && this.select(t53);
  }
  move(t53) {
    var e10, i10;
    if (0 == t53.buttons) return this.destroy();
    if (this.dragging || null == this.dragging && 10 > Math.max(Math.abs((i10 = this.startEvent).clientX - t53.clientX), Math.abs(i10.clientY - t53.clientY))) return;
    this.select(this.lastEvent = t53);
    let n10 = 0, s10 = 0, o10 = (null === (e10 = this.scrollParent) || void 0 === e10 ? void 0 : e10.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, r10 = lK(this.view);
    t53.clientX - r10.left <= o10.left + 6 ? n10 = -ht(o10.left - t53.clientX) : t53.clientX + r10.right >= o10.right - 6 && (n10 = ht(t53.clientX - o10.right)), t53.clientY - r10.top <= o10.top + 6 ? s10 = -ht(o10.top - t53.clientY) : t53.clientY + r10.bottom >= o10.bottom - 6 && (s10 = ht(t53.clientY - o10.bottom)), this.setScrollSpeed(n10, s10);
  }
  up(t53) {
    null == this.dragging && this.select(this.lastEvent), this.dragging || t53.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t53 = this.view.contentDOM.ownerDocument;
    t53.removeEventListener("mousemove", this.move), t53.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t53, e10) {
    this.scrollSpeed = { x: t53, y: e10 }, t53 || e10 ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), false === this.dragging && this.select(this.lastEvent);
  }
  skipAtoms(t53) {
    let e10 = null;
    for (let i10 = 0; i10 < t53.ranges.length; i10++) {
      let n10 = t53.ranges[i10], s10 = null;
      if (n10.empty) {
        let t54 = l8(this.atoms, n10.from, 0);
        t54 != n10.from && (s10 = $.cursor(t54, -1));
      } else {
        let t54 = l8(this.atoms, n10.from, -1), e11 = l8(this.atoms, n10.to, 1);
        (t54 != n10.from || e11 != n10.to) && (s10 = $.range(n10.from == n10.anchor ? t54 : e11, n10.from == n10.head ? t54 : e11));
      }
      s10 && (e10 || (e10 = t53.ranges.slice()), e10[i10] = s10);
    }
    return e10 ? $.create(e10, t53.mainIndex) : t53;
  }
  select(t53) {
    let { view: e10 } = this, i10 = this.skipAtoms(this.style.get(t53, this.extend, this.multiple));
    (this.mustSelect || !i10.eq(e10.state.selection, false === this.dragging)) && this.view.dispatch({ selection: i10, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(t53) {
    t53.transactions.some((t54) => t54.isUserEvent("input.type")) ? this.destroy() : this.style.update(t53) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}, hi = /* @__PURE__ */ Object.create(null), hn = /* @__PURE__ */ Object.create(null), hs = rK.ie && rK.ie_version < 15 || rK.ios && rK.webkit_version < 604;
function ho(t53, e10) {
  let { state: i10 } = t53, n10, s10 = 1, o10 = i10.toText(e10), r10 = o10.lines == i10.selection.ranges.length;
  if (null != hm && i10.selection.ranges.every((t54) => t54.empty) && hm == o10.toString()) {
    let t54 = -1;
    n10 = i10.changeByRange((n11) => {
      let l10 = i10.doc.lineAt(n11.from);
      if (l10.from == t54) return { range: n11 };
      t54 = l10.from;
      let h10 = i10.toText((r10 ? o10.line(s10++).text : e10) + i10.lineBreak);
      return { changes: { from: l10.from, insert: h10 }, range: $.cursor(n11.from + h10.length) };
    });
  } else n10 = r10 ? i10.changeByRange((t54) => {
    let e11 = o10.line(s10++);
    return { changes: { from: t54.from, to: t54.to, insert: e11.text }, range: $.cursor(t54.from + e11.length) };
  }) : i10.replaceSelection(o10);
  t53.dispatch(n10, { userEvent: "input.paste", scrollIntoView: true });
}
function hr(t53, e10, i10, n10) {
  if (1 == n10) return $.cursor(e10, i10);
  if (2 == n10) return function(t54, e11) {
    let i11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n11 = t54.charCategorizer(e11), s10 = t54.doc.lineAt(e11), o10 = e11 - s10.from;
    if (0 == s10.length) return $.cursor(e11);
    0 == o10 ? i11 = 1 : o10 == s10.length && (i11 = -1);
    let r10 = o10, l10 = o10;
    i11 < 0 ? r10 = p(s10.text, o10, false) : l10 = p(s10.text, o10);
    let h10 = n11(s10.text.slice(r10, l10));
    for (; r10 > 0; ) {
      let t55 = p(s10.text, r10, false);
      if (n11(s10.text.slice(t55, r10)) != h10) break;
      r10 = t55;
    }
    for (; l10 < s10.length; ) {
      let t55 = p(s10.text, l10);
      if (n11(s10.text.slice(l10, t55)) != h10) break;
      l10 = t55;
    }
    return $.range(r10 + s10.from, l10 + s10.from);
  }(t53.state, e10, i10);
  {
    let i11 = rZ.find(t53.docView, e10), n11 = t53.state.doc.lineAt(i11 ? i11.posAtEnd : e10), s10 = i11 ? i11.posAtStart : n11.from, o10 = i11 ? i11.posAtEnd : n11.to;
    return o10 < t53.state.doc.length && o10 == n11.to && o10++, $.range(s10, o10);
  }
}
hn.scroll = (t53) => {
  t53.inputState.lastScrollTop = t53.scrollDOM.scrollTop, t53.inputState.lastScrollLeft = t53.scrollDOM.scrollLeft;
}, hi.keydown = (t53, e10) => (t53.inputState.setSelectionOrigin("select"), 27 == e10.keyCode && 0 != t53.inputState.tabFocusMode && (t53.inputState.tabFocusMode = Date.now() + 2e3), false), hn.touchstart = (t53, e10) => {
  t53.inputState.lastTouchTime = Date.now(), t53.inputState.setSelectionOrigin("select.pointer");
}, hn.touchmove = (t53) => {
  t53.inputState.setSelectionOrigin("select.pointer");
}, hi.mousedown = (t53, e10) => {
  let i10, n10, s10;
  if (t53.observer.flush(), t53.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let o10 = null;
  for (let i11 of t53.state.facet(lw)) if (o10 = i11(t53, e10)) break;
  if (o10 || 0 != e10.button || (i10 = ha(t53, e10), n10 = hg(e10), s10 = t53.state.selection, o10 = { update(t54) {
    t54.docChanged && (i10.pos = t54.changes.mapPos(i10.pos), s10 = s10.map(t54.changes));
  }, get(e11, o11, r10) {
    let l10 = ha(t53, e11), h10, a10 = hr(t53, l10.pos, l10.bias, n10);
    if (i10.pos != l10.pos && !o11) {
      let e12 = hr(t53, i10.pos, i10.bias, n10), s11 = Math.min(e12.from, a10.from), o12 = Math.max(e12.to, a10.to);
      a10 = s11 < a10.from ? $.range(s11, o12) : $.range(o12, s11);
    }
    return o11 ? s10.replaceRange(s10.main.extend(a10.from, a10.to)) : r10 && 1 == n10 && s10.ranges.length > 1 && (h10 = function(t54, e12) {
      for (let i11 = 0; i11 < t54.ranges.length; i11++) {
        let { from: n11, to: s11 } = t54.ranges[i11];
        if (n11 <= e12 && s11 >= e12) return $.create(t54.ranges.slice(0, i11).concat(t54.ranges.slice(i11 + 1)), t54.mainIndex == i11 ? 0 : t54.mainIndex - (t54.mainIndex > i11 ? 1 : 0));
      }
      return null;
    }(s10, l10.pos)) ? h10 : r10 ? s10.addRange(a10) : $.create([a10]);
  } }), o10) {
    let i11 = !t53.hasFocus;
    t53.inputState.startMouseSelection(new he(t53, e10, o10, i11)), i11 && t53.observer.ignore(() => {
      rv(t53.contentDOM);
      let e11 = t53.root.activeElement;
      e11 && !e11.contains(t53.contentDOM) && e11.blur();
    });
    let n11 = t53.inputState.mouseSelection;
    if (n11) return n11.start(e10), false === n11.dragging;
  }
  return false;
};
let hl = (t53, e10) => t53 >= e10.top && t53 <= e10.bottom, hh = (t53, e10, i10) => hl(e10, i10) && t53 >= i10.left && t53 <= i10.right;
function ha(t53, e10) {
  let i10 = t53.posAtCoords({ x: e10.clientX, y: e10.clientY }, false);
  return { pos: i10, bias: function(t54, e11, i11, n10) {
    let s10 = rZ.find(t54.docView, e11);
    if (!s10) return 1;
    let o10 = e11 - s10.posAtStart;
    if (0 == o10) return 1;
    if (o10 == s10.length) return -1;
    let r10 = s10.coordsAt(o10, -1);
    if (r10 && hh(i11, n10, r10)) return -1;
    let l10 = s10.coordsAt(o10, 1);
    return l10 && hh(i11, n10, l10) ? 1 : r10 && hl(n10, r10) ? -1 : 1;
  }(t53, i10, e10.clientX, e10.clientY) };
}
let hc = rK.ie && rK.ie_version <= 11, hd = null, hu = 0, hf = 0;
function hg(t53) {
  if (!hc) return t53.detail;
  let e10 = hd, i10 = hf;
  return hd = t53, hf = Date.now(), hu = !e10 || i10 > Date.now() - 400 && 2 > Math.abs(e10.clientX - t53.clientX) && 2 > Math.abs(e10.clientY - t53.clientY) ? (hu + 1) % 3 : 1;
}
function hp(t53, e10, i10, n10) {
  let s10;
  if (!i10) return;
  let o10 = t53.posAtCoords({ x: e10.clientX, y: e10.clientY }, false), { draggedContent: r10 } = t53.inputState, l10 = n10 && r10 && ((s10 = t53.state.facet(lv)).length ? s10[0](e10) : rK.mac ? !e10.altKey : !e10.ctrlKey) ? { from: r10.from, to: r10.to } : null, h10 = { from: o10, insert: i10 }, a10 = t53.state.changes(l10 ? [l10, h10] : h10);
  t53.focus(), t53.dispatch({ changes: a10, selection: { anchor: a10.mapPos(o10, -1), head: a10.mapPos(o10, 1) }, userEvent: l10 ? "move.drop" : "input.drop" }), t53.inputState.draggedContent = null;
}
hi.dragstart = (t53, e10) => {
  let { selection: { main: i10 } } = t53.state;
  if (e10.target.draggable) {
    let n11 = t53.docView.nearest(e10.target);
    if (n11 && n11.isWidget) {
      let t54 = n11.posAtStart, e11 = t54 + n11.length;
      (t54 >= i10.to || e11 <= i10.from) && (i10 = $.range(t54, e11));
    }
  }
  let { inputState: n10 } = t53;
  return n10.mouseSelection && (n10.mouseSelection.dragging = true), n10.draggedContent = i10, e10.dataTransfer && (e10.dataTransfer.setData("Text", t53.state.sliceDoc(i10.from, i10.to)), e10.dataTransfer.effectAllowed = "copyMove"), false;
}, hi.dragend = (t53) => (t53.inputState.draggedContent = null, false), hi.drop = (t53, e10) => {
  if (!e10.dataTransfer) return false;
  if (t53.state.readOnly) return true;
  let i10 = e10.dataTransfer.files;
  if (i10 && i10.length) {
    let n10 = Array(i10.length), s10 = 0, o10 = () => {
      ++s10 == i10.length && hp(t53, e10, n10.filter((t54) => null != t54).join(t53.state.lineBreak), false);
    };
    for (let t54 = 0; t54 < i10.length; t54++) {
      let e11 = new FileReader();
      e11.onerror = o10, e11.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(e11.result) || (n10[t54] = e11.result), o10();
      }, e11.readAsText(i10[t54]);
    }
    return true;
  }
  {
    let i11 = e10.dataTransfer.getData("Text");
    if (i11) return hp(t53, e10, i11, true), true;
  }
  return false;
}, hi.paste = (t53, e10) => {
  if (t53.state.readOnly) return true;
  t53.observer.flush();
  let i10 = hs ? null : e10.clipboardData;
  return i10 ? (ho(t53, i10.getData("text/plain") || i10.getData("text/uri-list")), true) : (function(t54) {
    let e11 = t54.dom.parentNode;
    if (!e11) return;
    let i11 = e11.appendChild(document.createElement("textarea"));
    i11.style.cssText = "position: fixed; left: -10000px; top: 10px", i11.focus(), setTimeout(() => {
      t54.focus(), i11.remove(), ho(t54, i11.value);
    }, 50);
  }(t53), false);
};
let hm = null;
hi.copy = hi.cut = (t53, e10) => {
  let { text: i10, ranges: n10, linewise: s10 } = function(t54) {
    let e11 = [], i11 = [], n11 = false;
    for (let n12 of t54.selection.ranges) n12.empty || (e11.push(t54.sliceDoc(n12.from, n12.to)), i11.push(n12));
    if (!e11.length) {
      let s11 = -1;
      for (let { from: n12 } of t54.selection.ranges) {
        let o11 = t54.doc.lineAt(n12);
        o11.number > s11 && (e11.push(o11.text), i11.push({ from: o11.from, to: Math.min(t54.doc.length, o11.to + 1) })), s11 = o11.number;
      }
      n11 = true;
    }
    return { text: e11.join(t54.lineBreak), ranges: i11, linewise: n11 };
  }(t53.state);
  if (!i10 && !s10) return false;
  hm = s10 ? i10 : null, "cut" != e10.type || t53.state.readOnly || t53.dispatch({ changes: n10, scrollIntoView: true, userEvent: "delete.cut" });
  let o10 = hs ? null : e10.clipboardData;
  return o10 ? (o10.clearData(), o10.setData("text/plain", i10), true) : (!function(t54, e11) {
    let i11 = t54.dom.parentNode;
    if (!i11) return;
    let n11 = i11.appendChild(document.createElement("textarea"));
    n11.style.cssText = "position: fixed; left: -10000px; top: 10px", n11.value = e11, n11.focus(), n11.selectionEnd = e11.length, n11.selectionStart = 0, setTimeout(() => {
      n11.remove(), t54.focus();
    }, 50);
  }(t53, i10), false);
};
let hv = ty.define();
function hw(t53, e10) {
  let i10 = [];
  for (let n10 of t53.facet(lS)) {
    let s10 = n10(t53, e10);
    s10 && i10.push(s10);
  }
  return i10 ? t53.update({ effects: i10, annotations: hv.of(true) }) : null;
}
function hb(t53) {
  setTimeout(() => {
    let e10 = t53.hasFocus;
    if (e10 != t53.inputState.notifiedFocused) {
      let i10 = hw(t53.state, e10);
      i10 ? t53.dispatch(i10) : t53.update([]);
    }
  }, 10);
}
hn.focus = (t53) => {
  t53.inputState.lastFocusTime = Date.now(), !t53.scrollDOM.scrollTop && (t53.inputState.lastScrollTop || t53.inputState.lastScrollLeft) && (t53.scrollDOM.scrollTop = t53.inputState.lastScrollTop, t53.scrollDOM.scrollLeft = t53.inputState.lastScrollLeft), hb(t53);
}, hn.blur = (t53) => {
  t53.observer.clearSelectionRange(), hb(t53);
}, hn.compositionstart = hn.compositionupdate = (t53) => {
  null == t53.inputState.compositionFirstChange && (t53.inputState.compositionFirstChange = true), t53.inputState.composing < 0 && (t53.inputState.composing = 0);
}, hn.compositionend = (t53) => {
  t53.inputState.composing = -1, t53.inputState.compositionEndedAt = Date.now(), t53.inputState.compositionPendingKey = true, t53.inputState.compositionPendingChange = t53.observer.pendingRecords().length > 0, t53.inputState.compositionFirstChange = null, rK.chrome && rK.android ? t53.observer.flushSoon() : t53.inputState.compositionPendingChange ? Promise.resolve().then(() => t53.observer.flush()) : setTimeout(() => {
    t53.inputState.composing < 0 && t53.docView.hasComposition && t53.update([]);
  }, 50);
}, hn.contextmenu = (t53) => {
  t53.inputState.lastContextMenu = Date.now();
}, hi.beforeinput = (t53, e10) => {
  var i10;
  let n10;
  if (rK.chrome && rK.android && (n10 = l9.find((t54) => t54.inputType == e10.inputType)) && (t53.observer.delayAndroidKey(n10.key, n10.keyCode), "Backspace" == n10.key || "Delete" == n10.key)) {
    let e11 = (null === (i10 = window.visualViewport) || void 0 === i10 ? void 0 : i10.height) || 0;
    setTimeout(() => {
      var i11;
      ((null === (i11 = window.visualViewport) || void 0 === i11 ? void 0 : i11.height) || 0) > e11 + 10 && t53.hasFocus && (t53.contentDOM.blur(), t53.focus());
    }, 100);
  }
  return rK.ios && "deleteContentForward" == e10.inputType && t53.observer.flushSoon(), rK.safari && "insertText" == e10.inputType && t53.inputState.composing >= 0 && setTimeout(() => hn.compositionend(t53, e10), 20), false;
};
let hy = /* @__PURE__ */ new Set(), hx = ["pre-wrap", "normal", "pre-line", "break-spaces"], hS = class {
  constructor(t53) {
    this.lineWrapping = t53, this.doc = s.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = false;
  }
  heightForGap(t53, e10) {
    let i10 = this.doc.lineAt(e10).number - this.doc.lineAt(t53).number + 1;
    return this.lineWrapping && (i10 += Math.max(0, Math.ceil((e10 - t53 - i10 * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i10;
  }
  heightForLine(t53) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t53 - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t53) {
    return this.doc = t53, this;
  }
  mustRefreshForWrapping(t53) {
    return hx.indexOf(t53) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t53) {
    let e10 = false;
    for (let i10 = 0; i10 < t53.length; i10++) {
      let n10 = t53[i10];
      n10 < 0 ? i10++ : this.heightSamples[Math.floor(10 * n10)] || (e10 = true, this.heightSamples[Math.floor(10 * n10)] = true);
    }
    return e10;
  }
  refresh(t53, e10, i10, n10, s10, o10) {
    let r10 = hx.indexOf(t53) > -1, l10 = Math.round(e10) != Math.round(this.lineHeight) || this.lineWrapping != r10;
    if (this.lineWrapping = r10, this.lineHeight = e10, this.charWidth = i10, this.textHeight = n10, this.lineLength = s10, l10) {
      this.heightSamples = {};
      for (let t54 = 0; t54 < o10.length; t54++) {
        let e11 = o10[t54];
        e11 < 0 ? t54++ : this.heightSamples[Math.floor(10 * e11)] = true;
      }
    }
    return l10;
  }
}, hk = class {
  constructor(t53, e10) {
    this.from = t53, this.heights = e10, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}, hM = class t45 {
  constructor(t53, e10, i10, n10, s10) {
    this.from = t53, this.length = e10, this.top = i10, this.height = n10, this._content = s10;
  }
  get type() {
    return "number" == typeof this._content ? r2.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof r5 ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return "number" == typeof this._content ? this._content : 0;
  }
  join(e10) {
    let i10 = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e10._content) ? e10._content : [e10]);
    return new t45(this.from, this.length + e10.length, this.top, this.height + e10.height, i10);
  }
};
var hA = ((B = hA || (hA = {}))[B.ByPos = 0] = "ByPos", B[B.ByHeight = 1] = "ByHeight", B[B.ByPosNoHeight = 2] = "ByPosNoHeight", B);
let hC = class t46 {
  constructor(t53, e10, i10 = 2) {
    this.length = t53, this.height = e10, this.flags = i10;
  }
  get outdated() {
    return (2 & this.flags) > 0;
  }
  set outdated(t53) {
    this.flags = (t53 ? 2 : 0) | -3 & this.flags;
  }
  setHeight(t53, e10) {
    this.height != e10 && (Math.abs(this.height - e10) > 1e-3 && (t53.heightChanged = true), this.height = e10);
  }
  replace(e10, i10, n10) {
    return t46.of(n10);
  }
  decomposeLeft(t53, e10) {
    e10.push(this);
  }
  decomposeRight(t53, e10) {
    e10.push(this);
  }
  applyChanges(t53, e10, i10, n10) {
    let s10 = this, o10 = i10.doc;
    for (let r10 = n10.length - 1; r10 >= 0; r10--) {
      let { fromA: l10, toA: h10, fromB: a10, toB: c10 } = n10[r10], d10 = s10.lineAt(l10, hA.ByPosNoHeight, i10.setDoc(e10), 0, 0), u10 = d10.to >= h10 ? d10 : s10.lineAt(h10, hA.ByPosNoHeight, i10, 0, 0);
      for (c10 += u10.to - h10, h10 = u10.to; r10 > 0 && d10.from <= n10[r10 - 1].toA; ) l10 = n10[r10 - 1].fromA, a10 = n10[r10 - 1].fromB, r10--, l10 < d10.from && (d10 = s10.lineAt(l10, hA.ByPosNoHeight, i10, 0, 0));
      a10 += d10.from - l10, l10 = d10.from;
      let f10 = hR.build(i10.setDoc(o10), t53, a10, c10);
      s10 = s10.replace(l10, h10, f10);
    }
    return s10.updateHeight(i10, 0);
  }
  static empty() {
    return new hO(0, 0);
  }
  static of(e10) {
    if (1 == e10.length) return e10[0];
    let i10 = 0, n10 = e10.length, s10 = 0, o10 = 0;
    for (; ; ) if (i10 == n10) {
      if (s10 > 2 * o10) {
        let t53 = e10[i10 - 1];
        t53.break ? e10.splice(--i10, 1, t53.left, null, t53.right) : e10.splice(--i10, 1, t53.left, t53.right), n10 += 1 + t53.break, s10 -= t53.size;
      } else if (o10 > 2 * s10) {
        let t53 = e10[n10];
        t53.break ? e10.splice(n10, 1, t53.left, null, t53.right) : e10.splice(n10, 1, t53.left, t53.right), n10 += 2 + t53.break, o10 -= t53.size;
      } else break;
    } else if (s10 < o10) {
      let t53 = e10[i10++];
      t53 && (s10 += t53.size);
    } else {
      let t53 = e10[--n10];
      t53 && (o10 += t53.size);
    }
    let r10 = 0;
    return null == e10[i10 - 1] ? (r10 = 1, i10--) : null == e10[i10] && (r10 = 1, n10++), new hE(t46.of(e10.slice(0, i10)), r10, t46.of(e10.slice(n10)));
  }
};
hC.prototype.size = 1;
let hD = class extends hC {
  constructor(t53, e10, i10) {
    super(t53, e10), this.deco = i10;
  }
  blockAt(t53, e10, i10, n10) {
    return new hM(n10, this.length, i10, this.height, this.deco || 0);
  }
  lineAt(t53, e10, i10, n10, s10) {
    return this.blockAt(0, i10, n10, s10);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    t53 <= s10 + this.length && e10 >= s10 && o10(this.blockAt(0, i10, n10, s10));
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0);
    return i10 && i10.from <= e10 && i10.more && this.setHeight(t53, i10.heights[i10.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}, hO = class t47 extends hD {
  constructor(t53, e10) {
    super(t53, e10, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t53, e10, i10, n10) {
    return new hM(n10, this.length, i10, this.height, this.breaks);
  }
  replace(e10, i10, n10) {
    let s10 = n10[0];
    return 1 == n10.length && (s10 instanceof t47 || s10 instanceof hT && 4 & s10.flags) && 10 > Math.abs(this.length - s10.length) ? (s10 instanceof hT ? s10 = new t47(s10.length, this.height) : s10.height = this.height, this.outdated || (s10.outdated = false), s10) : hC.of(n10);
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0;
    return n10 && n10.from <= e10 && n10.more ? this.setHeight(t53, n10.heights[n10.index++]) : (i10 || this.outdated) && this.setHeight(t53, Math.max(this.widgetHeight, t53.heightForLine(this.length - this.collapsed)) + this.breaks * t53.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}, hT = class t48 extends hC {
  constructor(t53) {
    super(t53, 0);
  }
  heightMetrics(t53, e10) {
    let i10 = t53.doc.lineAt(e10).number, n10 = t53.doc.lineAt(e10 + this.length).number, s10 = n10 - i10 + 1, o10, r10 = 0;
    if (t53.lineWrapping) {
      let e11 = Math.min(this.height, t53.lineHeight * s10);
      o10 = e11 / s10, this.length > s10 + 1 && (r10 = (this.height - e11) / (this.length - s10 - 1));
    } else o10 = this.height / s10;
    return { firstLine: i10, lastLine: n10, perLine: o10, perChar: r10 };
  }
  blockAt(t53, e10, i10, n10) {
    let { firstLine: s10, lastLine: o10, perLine: r10, perChar: l10 } = this.heightMetrics(e10, n10);
    if (e10.lineWrapping) {
      let s11 = n10 + (t53 < e10.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t53 - i10) / this.height)) * this.length)), o11 = e10.doc.lineAt(s11), h10 = r10 + o11.length * l10, a10 = Math.max(i10, t53 - h10 / 2);
      return new hM(o11.from, o11.length, a10, h10, 0);
    }
    {
      let n11 = Math.max(0, Math.min(o10 - s10, Math.floor((t53 - i10) / r10))), { from: l11, length: h10 } = e10.doc.line(s10 + n11);
      return new hM(l11, h10, i10 + r10 * n11, r10, 0);
    }
  }
  lineAt(t53, e10, i10, n10, s10) {
    if (e10 == hA.ByHeight) return this.blockAt(t53, i10, n10, s10);
    if (e10 == hA.ByPosNoHeight) {
      let { from: e11, to: n11 } = i10.doc.lineAt(t53);
      return new hM(e11, n11 - e11, 0, 0, 0);
    }
    let { firstLine: o10, perLine: r10, perChar: l10 } = this.heightMetrics(i10, s10), h10 = i10.doc.lineAt(t53), a10 = r10 + h10.length * l10, c10 = h10.number - o10, d10 = n10 + r10 * c10 + l10 * (h10.from - s10 - c10);
    return new hM(h10.from, h10.length, Math.max(n10, Math.min(d10, n10 + this.height - a10)), a10, 0);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    t53 = Math.max(t53, s10), e10 = Math.min(e10, s10 + this.length);
    let { firstLine: r10, perLine: l10, perChar: h10 } = this.heightMetrics(i10, s10);
    for (let a10 = t53, c10 = n10; a10 <= e10; ) {
      let e11 = i10.doc.lineAt(a10);
      if (a10 == t53) {
        let i11 = e11.number - r10;
        c10 += l10 * i11 + h10 * (t53 - s10 - i11);
      }
      let n11 = l10 + h10 * e11.length;
      o10(new hM(e11.from, e11.length, c10, n11, 0)), c10 += n11, a10 = e11.to + 1;
    }
  }
  replace(e10, i10, n10) {
    let s10 = this.length - i10;
    if (s10 > 0) {
      let e11 = n10[n10.length - 1];
      e11 instanceof t48 ? n10[n10.length - 1] = new t48(e11.length + s10) : n10.push(null, new t48(s10 - 1));
    }
    if (e10 > 0) {
      let i11 = n10[0];
      i11 instanceof t48 ? n10[0] = new t48(e10 + i11.length) : n10.unshift(new t48(e10 - 1), null);
    }
    return hC.of(n10);
  }
  decomposeLeft(e10, i10) {
    i10.push(new t48(e10 - 1), null);
  }
  decomposeRight(e10, i10) {
    i10.push(null, new t48(this.length - e10 - 1));
  }
  updateHeight(e10) {
    let i10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s10 = arguments.length > 3 ? arguments[3] : void 0, o10 = i10 + this.length;
    if (s10 && s10.from <= i10 + this.length && s10.more) {
      let n11 = [], r10 = Math.max(i10, s10.from), l10 = -1;
      for (s10.from > i10 && n11.push(new t48(s10.from - i10 - 1).updateHeight(e10, i10)); r10 <= o10 && s10.more; ) {
        let t53 = e10.doc.lineAt(r10).length;
        n11.length && n11.push(null);
        let i11 = s10.heights[s10.index++];
        -1 == l10 ? l10 = i11 : Math.abs(i11 - l10) >= 1e-3 && (l10 = -2);
        let o11 = new hO(t53, i11);
        o11.outdated = false, n11.push(o11), r10 += t53 + 1;
      }
      r10 <= o10 && n11.push(null, new t48(o10 - r10).updateHeight(e10, r10));
      let h10 = hC.of(n11);
      return (l10 < 0 || Math.abs(h10.height - this.height) >= 1e-3 || Math.abs(l10 - this.heightMetrics(e10, i10).perLine) >= 1e-3) && (e10.heightChanged = true), h10;
    }
    return (n10 || this.outdated) && (this.setHeight(e10, e10.heightForGap(i10, i10 + this.length)), this.outdated = false), this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}, hE = class extends hC {
  constructor(t53, e10, i10) {
    super(t53.length + e10 + i10.length, t53.height + i10.height, e10 | (t53.outdated || i10.outdated ? 2 : 0)), this.left = t53, this.right = i10, this.size = t53.size + i10.size;
  }
  get break() {
    return 1 & this.flags;
  }
  blockAt(t53, e10, i10, n10) {
    let s10 = i10 + this.left.height;
    return t53 < s10 ? this.left.blockAt(t53, e10, i10, n10) : this.right.blockAt(t53, e10, s10, n10 + this.left.length + this.break);
  }
  lineAt(t53, e10, i10, n10, s10) {
    let o10 = n10 + this.left.height, r10 = s10 + this.left.length + this.break, l10 = e10 == hA.ByHeight ? t53 < o10 : t53 < r10, h10 = l10 ? this.left.lineAt(t53, e10, i10, n10, s10) : this.right.lineAt(t53, e10, i10, o10, r10);
    if (this.break || (l10 ? h10.to < r10 : h10.from > r10)) return h10;
    let a10 = e10 == hA.ByPosNoHeight ? hA.ByPosNoHeight : hA.ByPos;
    return l10 ? h10.join(this.right.lineAt(r10, a10, i10, o10, r10)) : this.left.lineAt(r10, a10, i10, n10, s10).join(h10);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    let r10 = n10 + this.left.height, l10 = s10 + this.left.length + this.break;
    if (this.break) t53 < l10 && this.left.forEachLine(t53, e10, i10, n10, s10, o10), e10 >= l10 && this.right.forEachLine(t53, e10, i10, r10, l10, o10);
    else {
      let h10 = this.lineAt(l10, hA.ByPos, i10, n10, s10);
      t53 < h10.from && this.left.forEachLine(t53, h10.from - 1, i10, n10, s10, o10), h10.to >= t53 && h10.from <= e10 && o10(h10), e10 > h10.to && this.right.forEachLine(h10.to + 1, e10, i10, r10, l10, o10);
    }
  }
  replace(t53, e10, i10) {
    let n10 = this.left.length + this.break;
    if (e10 < n10) return this.balanced(this.left.replace(t53, e10, i10), this.right);
    if (t53 > this.left.length) return this.balanced(this.left, this.right.replace(t53 - n10, e10 - n10, i10));
    let s10 = [];
    t53 > 0 && this.decomposeLeft(t53, s10);
    let o10 = s10.length;
    for (let t54 of i10) s10.push(t54);
    if (t53 > 0 && hB(s10, o10 - 1), e10 < this.length) {
      let t54 = s10.length;
      this.decomposeRight(e10, s10), hB(s10, t54);
    }
    return hC.of(s10);
  }
  decomposeLeft(t53, e10) {
    let i10 = this.left.length;
    if (t53 <= i10) return this.left.decomposeLeft(t53, e10);
    e10.push(this.left), this.break && t53 >= ++i10 && e10.push(null), t53 > i10 && this.right.decomposeLeft(t53 - i10, e10);
  }
  decomposeRight(t53, e10) {
    let i10 = this.left.length, n10 = i10 + this.break;
    if (t53 >= n10) return this.right.decomposeRight(t53 - n10, e10);
    t53 < i10 && this.left.decomposeRight(t53, e10), this.break && t53 < n10 && e10.push(null), e10.push(this.right);
  }
  balanced(t53, e10) {
    return t53.size > 2 * e10.size || e10.size > 2 * t53.size ? hC.of(this.break ? [t53, null, e10] : [t53, e10]) : (this.left = t53, this.right = e10, this.height = t53.height + e10.height, this.outdated = t53.outdated || e10.outdated, this.size = t53.size + e10.size, this.length = t53.length + this.break + e10.length, this);
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0, { left: s10, right: o10 } = this, r10 = e10 + s10.length + this.break, l10 = null;
    return (n10 && n10.from <= e10 + s10.length && n10.more ? l10 = s10 = s10.updateHeight(t53, e10, i10, n10) : s10.updateHeight(t53, e10, i10), n10 && n10.from <= r10 + o10.length && n10.more ? l10 = o10 = o10.updateHeight(t53, r10, i10, n10) : o10.updateHeight(t53, r10, i10), l10) ? this.balanced(s10, o10) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
};
function hB(t53, e10) {
  let i10, n10;
  null == t53[e10] && (i10 = t53[e10 - 1]) instanceof hT && (n10 = t53[e10 + 1]) instanceof hT && t53.splice(e10 - 1, 3, new hT(i10.length + 1 + n10.length));
}
let hR = class t49 {
  constructor(t53, e10) {
    this.pos = t53, this.oracle = e10, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t53;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t53, e10) {
    if (this.lineStart > -1) {
      let t54 = Math.min(e10, this.lineEnd), i10 = this.nodes[this.nodes.length - 1];
      i10 instanceof hO ? i10.length += t54 - this.pos : (t54 > this.pos || !this.isCovered) && this.nodes.push(new hO(t54 - this.pos, -1)), this.writtenTo = t54, e10 > t54 && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e10;
  }
  point(t53, e10, i10) {
    if (t53 < e10 || i10.heightRelevant) {
      let n10 = i10.widget ? i10.widget.estimatedHeight : 0, s10 = i10.widget ? i10.widget.lineBreaks : 0;
      n10 < 0 && (n10 = this.oracle.lineHeight);
      let o10 = e10 - t53;
      i10.block ? this.addBlock(new hD(o10, n10, i10)) : (o10 || s10 || n10 >= 5) && this.addLineDeco(n10, s10, o10);
    } else e10 > t53 && this.span(t53, e10);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: t53, to: e10 } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t53, this.lineEnd = e10, this.writtenTo < t53 && ((this.writtenTo < t53 - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, t53 - 1)), this.nodes.push(null)), this.pos > t53 && this.nodes.push(new hO(this.pos - t53, -1)), this.writtenTo = this.pos;
  }
  blankContent(t53, e10) {
    let i10 = new hT(e10 - t53);
    return this.oracle.doc.lineAt(t53).to == e10 && (i10.flags |= 4), i10;
  }
  ensureLine() {
    this.enterLine();
    let t53 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t53 instanceof hO) return t53;
    let e10 = new hO(0, -1);
    return this.nodes.push(e10), e10;
  }
  addBlock(t53) {
    this.enterLine();
    let e10 = t53.deco;
    e10 && e10.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t53), this.writtenTo = this.pos = this.pos + t53.length, e10 && e10.endSide > 0 && (this.covering = t53);
  }
  addLineDeco(t53, e10, i10) {
    let n10 = this.ensureLine();
    n10.length += i10, n10.collapsed += i10, n10.widgetHeight = Math.max(n10.widgetHeight, t53), n10.breaks += e10, this.writtenTo = this.pos = this.pos + i10;
  }
  finish(t53) {
    let e10 = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
    !(this.lineStart > -1) || e10 instanceof hO || this.isCovered ? (this.writtenTo < this.pos || null == e10) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new hO(0, -1));
    let i10 = t53;
    for (let t54 of this.nodes) t54 instanceof hO && t54.updateHeight(this.oracle, i10), i10 += t54 ? t54.length : 1;
    return this.nodes;
  }
  static build(e10, i10, n10, s10) {
    let o10 = new t49(n10, e10);
    return tV.spans(i10, n10, s10, o10, 0), o10.finish(n10);
  }
}, hL = class {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t53, e10, i10, n10) {
    (t53 < e10 || i10 && i10.heightRelevant || n10 && n10.heightRelevant) && r6(t53, e10, this.changes, 5);
  }
}, hP = class {
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.size = i10;
  }
  static same(t53, e10) {
    if (t53.length != e10.length) return false;
    for (let i10 = 0; i10 < t53.length; i10++) {
      let n10 = t53[i10], s10 = e10[i10];
      if (n10.from != s10.from || n10.to != s10.to || n10.size != s10.size) return false;
    }
    return true;
  }
  draw(t53, e10) {
    return r8.replace({ widget: new hN(this.size * (e10 ? t53.scaleY : t53.scaleX), e10) }).range(this.from, this.to);
  }
}, hN = class extends r1 {
  constructor(t53, e10) {
    super(), this.size = t53, this.vertical = e10;
  }
  eq(t53) {
    return t53.size == this.size && t53.vertical == this.vertical;
  }
  toDOM() {
    let t53 = document.createElement("div");
    return this.vertical ? t53.style.height = this.size + "px" : (t53.style.width = this.size + "px", t53.style.height = "2px", t53.style.display = "inline-block"), t53;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}, hH = class {
  constructor(t53) {
    this.state = t53, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = hW, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = li.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let e10 = t53.facet(lN).some((t54) => "function" != typeof t54 && "cm-lineWrapping" == t54.class);
    this.heightOracle = new hS(e10), this.stateDeco = t53.facet(lH).filter((t54) => "function" != typeof t54), this.heightMap = hC.empty().applyChanges(this.stateDeco, s.empty, this.heightOracle.setDoc(t53.doc), [new l_(0, 0, 0, t53.doc.length)]);
    for (let t54 = 0; t54 < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); t54++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = r8.set(this.lineGaps.map((t54) => t54.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t53 = [this.viewport], { main: e10 } = this.state.selection;
    for (let i10 = 0; i10 <= 1; i10++) {
      let n10 = i10 ? e10.head : e10.anchor;
      if (!t53.some((t54) => {
        let { from: e11, to: i11 } = t54;
        return n10 >= e11 && n10 <= i11;
      })) {
        let { from: e11, to: i11 } = this.lineBlockAt(n10);
        t53.push(new hV(e11, i11));
      }
    }
    return this.viewports = t53.sort((t54, e11) => t54.from - e11.from), this.updateScaler();
  }
  updateScaler() {
    let t53 = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? hW : new hz(this.heightOracle, this.heightMap, this.viewports), t53.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t53) => {
      this.viewportLines.push(hK(t53, this.scaler));
    });
  }
  update(t53) {
    var e10, i10;
    let n10, s10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    this.state = t53.state;
    let o10 = this.stateDeco;
    this.stateDeco = this.state.facet(lH).filter((t54) => "function" != typeof t54);
    let r10 = t53.changedRanges, l10 = l_.extendWithRanges(r10, (e10 = this.stateDeco, i10 = t53 ? t53.changes : W.empty(this.state.doc.length), n10 = new hL(), tV.compare(o10, e10, i10, n10, 0), n10.changes)), h10 = this.heightMap.height, a10 = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, t53.startState.doc, this.heightOracle.setDoc(this.state.doc), l10), this.heightMap.height != h10 && (t53.flags |= 2), a10 ? (this.scrollAnchorPos = t53.changes.mapPos(a10.from, -1), this.scrollAnchorHeight = a10.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let c10 = l10.length ? this.mapViewport(this.viewport, t53.changes) : this.viewport;
    (s10 && (s10.range.head < c10.from || s10.range.head > c10.to) || !this.viewportIsAppropriate(c10)) && (c10 = this.getViewport(0, s10));
    let d10 = c10.from != this.viewport.from || c10.to != this.viewport.to;
    this.viewport = c10, t53.flags |= this.updateForViewport(), (d10 || !t53.changes.empty || 2 & t53.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t53.changes))), t53.flags |= this.computeVisibleRanges(), s10 && (this.scrollTarget = s10), !this.mustEnforceCursorAssoc && t53.selectionSet && t53.view.lineWrapping && t53.state.selection.main.empty && t53.state.selection.main.assoc && !t53.state.facet(lM) && (this.mustEnforceCursorAssoc = true);
  }
  measure(t53) {
    let e10 = t53.contentDOM, i10 = window.getComputedStyle(e10), n10 = this.heightOracle, o10 = i10.whiteSpace;
    this.defaultTextDirection = "rtl" == i10.direction ? li.RTL : li.LTR;
    let r10 = this.heightOracle.mustRefreshForWrapping(o10), l10 = e10.getBoundingClientRect(), h10 = r10 || this.mustMeasureContent || this.contentDOMHeight != l10.height;
    this.contentDOMHeight = l10.height, this.mustMeasureContent = false;
    let a10 = 0, c10 = 0;
    if (l10.width && l10.height) {
      let { scaleX: t54, scaleY: i11 } = rg(e10, l10);
      (t54 > 5e-3 && Math.abs(this.scaleX - t54) > 5e-3 || i11 > 5e-3 && Math.abs(this.scaleY - i11) > 5e-3) && (this.scaleX = t54, this.scaleY = i11, a10 |= 8, r10 = h10 = true);
    }
    let d10 = (parseInt(i10.paddingTop) || 0) * this.scaleY, u10 = (parseInt(i10.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != d10 || this.paddingBottom != u10) && (this.paddingTop = d10, this.paddingBottom = u10, a10 |= 10), this.editorWidth != t53.scrollDOM.clientWidth && (n10.lineWrapping && (h10 = true), this.editorWidth = t53.scrollDOM.clientWidth, a10 |= 8);
    let f10 = t53.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != f10 && (this.scrollAnchorHeight = -1, this.scrollTop = f10), this.scrolledToBottom = rx(t53.scrollDOM);
    let g10 = (this.printing ? function(t54, e11) {
      let i11 = t54.getBoundingClientRect();
      return { left: 0, right: i11.right - i11.left, top: e11, bottom: i11.bottom - (i11.top + e11) };
    } : function(t54, e11) {
      let i11 = t54.getBoundingClientRect(), n11 = t54.ownerDocument, s10 = n11.defaultView || window, o11 = Math.max(0, i11.left), r11 = Math.min(s10.innerWidth, i11.right), l11 = Math.max(0, i11.top), h11 = Math.min(s10.innerHeight, i11.bottom);
      for (let e12 = t54.parentNode; e12 && e12 != n11.body; ) if (1 == e12.nodeType) {
        let i12 = e12, n12 = window.getComputedStyle(i12);
        if ((i12.scrollHeight > i12.clientHeight || i12.scrollWidth > i12.clientWidth) && "visible" != n12.overflow) {
          let n13 = i12.getBoundingClientRect();
          o11 = Math.max(o11, n13.left), r11 = Math.min(r11, n13.right), l11 = Math.max(l11, n13.top), h11 = e12 == t54.parentNode ? n13.bottom : Math.min(h11, n13.bottom);
        }
        e12 = "absolute" == n12.position || "fixed" == n12.position ? i12.offsetParent : i12.parentNode;
      } else if (11 == e12.nodeType) e12 = e12.host;
      else break;
      return { left: o11 - i11.left, right: Math.max(o11, r11) - i11.left, top: l11 - (i11.top + e11), bottom: Math.max(l11, h11) - (i11.top + e11) };
    })(e10, this.paddingTop), p10 = g10.top - this.pixelViewport.top, m2 = g10.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g10;
    let v2 = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v2 != this.inView && (this.inView = v2, v2 && (h10 = true)), !this.inView && !this.scrollTarget) return 0;
    let w2 = l10.width;
    if ((this.contentDOMWidth != w2 || this.editorHeight != t53.scrollDOM.clientHeight) && (this.contentDOMWidth = l10.width, this.editorHeight = t53.scrollDOM.clientHeight, a10 |= 8), h10) {
      let e11 = t53.docView.measureVisibleLineHeights(this.viewport);
      if (n10.mustRefreshForHeights(e11) && (r10 = true), r10 || n10.lineWrapping && Math.abs(w2 - this.contentDOMWidth) > n10.charWidth) {
        let { lineHeight: i11, charWidth: s10, textHeight: l11 } = t53.docView.measureTextSize();
        (r10 = i11 > 0 && n10.refresh(o10, i11, s10, l11, w2 / s10, e11)) && (t53.docView.minWidth = 0, a10 |= 8);
      }
      for (let i11 of (p10 > 0 && m2 > 0 ? c10 = Math.max(p10, m2) : p10 < 0 && m2 < 0 && (c10 = Math.min(p10, m2)), n10.heightChanged = false, this.viewports)) {
        let o11 = i11.from == this.viewport.from ? e11 : t53.docView.measureVisibleLineHeights(i11);
        this.heightMap = (r10 ? hC.empty().applyChanges(this.stateDeco, s.empty, this.heightOracle, [new l_(0, 0, 0, t53.state.doc.length)]) : this.heightMap).updateHeight(n10, 0, r10, new hk(i11.from, o11));
      }
      n10.heightChanged && (a10 |= 2);
    }
    let b2 = !this.viewportIsAppropriate(this.viewport, c10) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return b2 && (2 & a10 && (a10 |= this.updateScaler()), this.viewport = this.getViewport(c10, this.scrollTarget), a10 |= this.updateForViewport()), (2 & a10 || b2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r10 ? [] : this.lineGaps, t53)), a10 |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t53.docView.enforceCursorAssoc()), a10;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t53, e10) {
    let i10 = 0.5 - Math.max(-0.5, Math.min(0.5, t53 / 1e3 / 2)), n10 = this.heightMap, s10 = this.heightOracle, { visibleTop: o10, visibleBottom: r10 } = this, l10 = new hV(n10.lineAt(o10 - 1e3 * i10, hA.ByHeight, s10, 0, 0).from, n10.lineAt(r10 + (1 - i10) * 1e3, hA.ByHeight, s10, 0, 0).to);
    if (e10) {
      let { head: t54 } = e10.range;
      if (t54 < l10.from || t54 > l10.to) {
        let i11 = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), o11 = n10.lineAt(t54, hA.ByPos, s10, 0, 0), r11;
        r11 = "center" == e10.y ? (o11.top + o11.bottom) / 2 - i11 / 2 : "start" == e10.y || "nearest" == e10.y && t54 < l10.from ? o11.top : o11.bottom - i11, l10 = new hV(n10.lineAt(r11 - 500, hA.ByHeight, s10, 0, 0).from, n10.lineAt(r11 + i11 + 500, hA.ByHeight, s10, 0, 0).to);
      }
    }
    return l10;
  }
  mapViewport(t53, e10) {
    let i10 = e10.mapPos(t53.from, -1), n10 = e10.mapPos(t53.to, 1);
    return new hV(this.heightMap.lineAt(i10, hA.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n10, hA.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate(t53) {
    let { from: e10, to: i10 } = t53, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (!this.inView) return true;
    let { top: s10 } = this.heightMap.lineAt(e10, hA.ByPos, this.heightOracle, 0, 0), { bottom: o10 } = this.heightMap.lineAt(i10, hA.ByPos, this.heightOracle, 0, 0), { visibleTop: r10, visibleBottom: l10 } = this;
    return (0 == e10 || s10 <= r10 - Math.max(10, Math.min(-n10, 250))) && (i10 == this.state.doc.length || o10 >= l10 + Math.max(10, Math.min(n10, 250))) && s10 > r10 - 2e3 && o10 < l10 + 2e3;
  }
  mapLineGaps(t53, e10) {
    if (!t53.length || e10.empty) return t53;
    let i10 = [];
    for (let n10 of t53) e10.touchesRange(n10.from, n10.to) || i10.push(new hP(e10.mapPos(n10.from), e10.mapPos(n10.to), n10.size));
    return i10;
  }
  ensureLineGaps(t53, e10) {
    let i10 = this.heightOracle.lineWrapping, n10 = i10 ? 1e4 : 2e3, s10 = n10 >> 1, o10 = n10 << 1;
    if (this.defaultTextDirection != li.LTR && !i10) return [];
    let r10 = [], l10 = (n11, o11, h10, a10) => {
      if (o11 - n11 < s10) return;
      let c10 = this.state.selection.main, d10 = [c10.from];
      for (let t54 of (c10.empty || d10.push(c10.to), d10)) if (t54 > n11 && t54 < o11) {
        l10(n11, t54 - 10, h10, a10), l10(t54 + 10, o11, h10, a10);
        return;
      }
      let u10 = function(t54, e11) {
        for (let i11 of t54) if (e11(i11)) return i11;
      }(t53, (t54) => t54.from >= h10.from && t54.to <= h10.to && Math.abs(t54.from - n11) < s10 && Math.abs(t54.to - o11) < s10 && !d10.some((e11) => t54.from < e11 && t54.to > e11));
      if (!u10) {
        if (o11 < h10.to && e10 && i10 && e10.visibleRanges.some((t54) => t54.from <= o11 && t54.to >= o11)) {
          let t54 = e10.moveToLineBoundary($.cursor(o11), false, true).head;
          t54 > n11 && (o11 = t54);
        }
        u10 = new hP(n11, o11, this.gapSize(h10, n11, o11, a10));
      }
      r10.push(u10);
    };
    for (let t54 of this.viewportLines) {
      let e11, s11;
      if (t54.length < o10) continue;
      let r11 = function(t55, e12, i11) {
        let n11 = [], s12 = t55, o11 = 0;
        return tV.spans(i11, t55, e12, { span() {
        }, point(t56, e13) {
          t56 > s12 && (n11.push({ from: s12, to: t56 }), o11 += t56 - s12), s12 = e13;
        } }, 20), s12 < e12 && (n11.push({ from: s12, to: e12 }), o11 += e12 - s12), { total: o11, ranges: n11 };
      }(t54.from, t54.to, this.stateDeco);
      if (r11.total < o10) continue;
      let h10 = this.scrollTarget ? this.scrollTarget.range.head : null;
      if (i10) {
        let i11, o11, l11 = n10 / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        if (null != h10) {
          let e12 = hF(r11, h10), n11 = ((this.visibleBottom - this.visibleTop) / 2 + l11) / t54.height;
          i11 = e12 - n11, o11 = e12 + n11;
        } else i11 = (this.visibleTop - t54.top - l11) / t54.height, o11 = (this.visibleBottom - t54.top + l11) / t54.height;
        e11 = hI(r11, i11), s11 = hI(r11, o11);
      } else {
        let t55, i11, o11 = r11.total * this.heightOracle.charWidth, l11 = n10 * this.heightOracle.charWidth;
        if (null != h10) {
          let e12 = hF(r11, h10), n11 = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + l11) / o11;
          t55 = e12 - n11, i11 = e12 + n11;
        } else t55 = (this.pixelViewport.left - l11) / o11, i11 = (this.pixelViewport.right + l11) / o11;
        e11 = hI(r11, t55), s11 = hI(r11, i11);
      }
      e11 > t54.from && l10(t54.from, e11, t54, r11), s11 < t54.to && l10(s11, t54.to, t54, r11);
    }
    return r10;
  }
  gapSize(t53, e10, i10, n10) {
    let s10 = hF(n10, i10) - hF(n10, e10);
    return this.heightOracle.lineWrapping ? t53.height * s10 : n10.total * this.heightOracle.charWidth * s10;
  }
  updateLineGaps(t53) {
    hP.same(t53, this.lineGaps) || (this.lineGaps = t53, this.lineGapDeco = r8.set(t53.map((t54) => t54.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let t53 = this.stateDeco;
    this.lineGaps.length && (t53 = t53.concat(this.lineGapDeco));
    let e10 = [];
    tV.spans(t53, this.viewport.from, this.viewport.to, { span(t54, i11) {
      e10.push({ from: t54, to: i11 });
    }, point() {
    } }, 20);
    let i10 = e10.length != this.visibleRanges.length || this.visibleRanges.some((t54, i11) => t54.from != e10[i11].from || t54.to != e10[i11].to);
    return this.visibleRanges = e10, i10 ? 4 : 0;
  }
  lineBlockAt(t53) {
    return t53 >= this.viewport.from && t53 <= this.viewport.to && this.viewportLines.find((e10) => e10.from <= t53 && e10.to >= t53) || hK(this.heightMap.lineAt(t53, hA.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t53) {
    return t53 >= this.viewportLines[0].top && t53 <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e10) => e10.top <= t53 && e10.bottom >= t53) || hK(this.heightMap.lineAt(this.scaler.fromDOM(t53), hA.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t53) {
    let e10 = this.lineBlockAtHeight(t53 + 8);
    return e10.from >= this.viewport.from || this.viewportLines[0].top - t53 > 200 ? e10 : this.viewportLines[0];
  }
  elementAtHeight(t53) {
    return hK(this.heightMap.blockAt(this.scaler.fromDOM(t53), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}, hV = class {
  constructor(t53, e10) {
    this.from = t53, this.to = e10;
  }
};
function hI(t53, e10) {
  let { total: i10, ranges: n10 } = t53;
  if (e10 <= 0) return n10[0].from;
  if (e10 >= 1) return n10[n10.length - 1].to;
  let s10 = Math.floor(i10 * e10);
  for (let t54 = 0; ; t54++) {
    let { from: e11, to: i11 } = n10[t54], o10 = i11 - e11;
    if (s10 <= o10) return e11 + s10;
    s10 -= o10;
  }
}
function hF(t53, e10) {
  let i10 = 0;
  for (let { from: n10, to: s10 } of t53.ranges) {
    if (e10 <= s10) {
      i10 += e10 - n10;
      break;
    }
    i10 += s10 - n10;
  }
  return i10 / t53.total;
}
let hW = { toDOM: (t53) => t53, fromDOM: (t53) => t53, scale: 1, eq(t53) {
  return t53 == this;
} }, hz = class t50 {
  constructor(t53, e10, i10) {
    let n10 = 0, s10 = 0, o10 = 0;
    for (let r10 of (this.viewports = i10.map((i11) => {
      let { from: s11, to: o11 } = i11, r11 = e10.lineAt(s11, hA.ByPos, t53, 0, 0).top, l10 = e10.lineAt(o11, hA.ByPos, t53, 0, 0).bottom;
      return n10 += l10 - r11, { from: s11, to: o11, top: r11, bottom: l10, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n10) / (e10.height - n10), this.viewports)) r10.domTop = o10 + (r10.top - s10) * this.scale, o10 = r10.domBottom = r10.domTop + (r10.bottom - r10.top), s10 = r10.bottom;
  }
  toDOM(t53) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t53 < s10.top) return n10 + (t53 - i10) * this.scale;
      if (t53 <= s10.bottom) return s10.domTop + (t53 - s10.top);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
  fromDOM(t53) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t53 < s10.domTop) return i10 + (t53 - n10) / this.scale;
      if (t53 <= s10.domBottom) return s10.top + (t53 - s10.domTop);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
  eq(e10) {
    return e10 instanceof t50 && this.scale == e10.scale && this.viewports.length == e10.viewports.length && this.viewports.every((t53, i10) => t53.from == e10.viewports[i10].from && t53.to == e10.viewports[i10].to);
  }
};
function hK(t53, e10) {
  if (1 == e10.scale) return t53;
  let i10 = e10.toDOM(t53.top), n10 = e10.toDOM(t53.bottom);
  return new hM(t53.from, t53.length, i10, n10 - i10, Array.isArray(t53._content) ? t53._content.map((t54) => hK(t54, e10)) : t53._content);
}
let hq = J.define({ combine: (t53) => t53.join(" ") }), h_ = J.define({ combine: (t53) => t53.indexOf(true) > -1 }), hj = t0.newName(), hG = t0.newName(), hU = t0.newName(), h$ = { "&light": "." + hG, "&dark": "." + hU };
function hY(t53, e10, i10) {
  return new t0(e10, { finish: (e11) => /&/.test(e11) ? e11.replace(/&\w*/, (e12) => {
    if ("&" == e12) return t53;
    if (!i10 || !i10[e12]) throw RangeError(`Unsupported selector: ${e12}`);
    return i10[e12];
  }) : t53 + " " + e11 });
}
let hX = hY("." + hj, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0 }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#444" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" }, ".cm-highlightSpace:before": { content: "attr(data-display)", position: "absolute", pointerEvents: "none", color: "#888" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, h$), hJ = class {
  constructor(t53, e10) {
    this.points = t53, this.text = "", this.lineSeparator = e10.facet(tB.lineSeparator);
  }
  append(t53) {
    this.text += t53;
  }
  lineBreak() {
    this.text += "￿";
  }
  readRange(t53, e10) {
    if (!t53) return this;
    let i10 = t53.parentNode;
    for (let n10 = t53; ; ) {
      this.findPointBefore(i10, n10);
      let t54 = this.text.length;
      this.readNode(n10);
      let s10 = n10.nextSibling;
      if (s10 == e10) break;
      let o10 = rC.get(n10), r10 = rC.get(s10);
      (o10 && r10 ? o10.breakAfter : (o10 ? o10.breakAfter : rc(n10)) || rc(s10) && ("BR" != n10.nodeName || n10.cmIgnore) && this.text.length > t54) && this.lineBreak(), n10 = s10;
    }
    return this.findPointBefore(i10, e10), this;
  }
  readTextNode(t53) {
    let e10 = t53.nodeValue;
    for (let i10 of this.points) i10.node == t53 && (i10.pos = this.text.length + Math.min(i10.offset, e10.length));
    for (let i10 = 0, n10 = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s10 = -1, o10 = 1, r10;
      if (this.lineSeparator ? (s10 = e10.indexOf(this.lineSeparator, i10), o10 = this.lineSeparator.length) : (r10 = n10.exec(e10)) && (s10 = r10.index, o10 = r10[0].length), this.append(e10.slice(i10, s10 < 0 ? e10.length : s10)), s10 < 0) break;
      if (this.lineBreak(), o10 > 1) for (let e11 of this.points) e11.node == t53 && e11.pos > this.text.length && (e11.pos -= o10 - 1);
      i10 = s10 + o10;
    }
  }
  readNode(t53) {
    if (t53.cmIgnore) return;
    let e10 = rC.get(t53), i10 = e10 && e10.overrideDOMText;
    if (null != i10) {
      this.findPointInside(t53, i10.length);
      for (let t54 = i10.iter(); !t54.next().done; ) t54.lineBreak ? this.lineBreak() : this.append(t54.value);
    } else 3 == t53.nodeType ? this.readTextNode(t53) : "BR" == t53.nodeName ? t53.nextSibling && this.lineBreak() : 1 == t53.nodeType && this.readRange(t53.firstChild, null);
  }
  findPointBefore(t53, e10) {
    for (let i10 of this.points) i10.node == t53 && t53.childNodes[i10.offset] == e10 && (i10.pos = this.text.length);
  }
  findPointInside(t53, e10) {
    for (let i10 of this.points) (3 == t53.nodeType ? i10.node == t53 : t53.contains(i10.node)) && (i10.pos = this.text.length + (!function(t54, e11, i11) {
      for (; ; ) {
        if (!e11 || i11 < ru(e11)) return false;
        if (e11 == t54) return true;
        i11 = ra(e11) + 1, e11 = e11.parentNode;
      }
    }(t53, i10.node, i10.offset) ? 0 : e10));
  }
}, hQ = class {
  constructor(t53, e10) {
    this.node = t53, this.offset = e10, this.pos = -1;
  }
}, hZ = class {
  constructor(t53, e10, i10, n10) {
    this.typeOver = n10, this.bounds = null, this.text = "", this.domChanged = e10 > -1;
    let { impreciseHead: s10, impreciseAnchor: o10 } = t53.docView;
    if (t53.state.readOnly && e10 > -1) this.newSel = null;
    else if (e10 > -1 && (this.bounds = t53.docView.domBoundsAround(e10, i10, 0))) {
      let e11 = s10 || o10 ? [] : function(t54) {
        let e12 = [];
        if (t54.root.activeElement != t54.contentDOM) return e12;
        let { anchorNode: i12, anchorOffset: n11, focusNode: s11, focusOffset: o11 } = t54.observer.selectionRange;
        return i12 && (e12.push(new hQ(i12, n11)), (s11 != i12 || o11 != n11) && e12.push(new hQ(s11, o11))), e12;
      }(t53), i11 = new hJ(e11, t53.state);
      i11.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = i11.text, this.newSel = function(t54, e12) {
        if (0 == t54.length) return null;
        let i12 = t54[0].pos, n11 = 2 == t54.length ? t54[1].pos : i12;
        return i12 > -1 && n11 > -1 ? $.single(i12 + e12, n11 + e12) : null;
      }(e11, this.bounds.from);
    } else {
      let e11 = t53.observer.selectionRange, i11 = s10 && s10.node == e11.focusNode && s10.offset == e11.focusOffset || !ro(t53.contentDOM, e11.focusNode) ? t53.state.selection.main.head : t53.docView.posFromDOM(e11.focusNode, e11.focusOffset), n11 = o10 && o10.node == e11.anchorNode && o10.offset == e11.anchorOffset || !ro(t53.contentDOM, e11.anchorNode) ? t53.state.selection.main.anchor : t53.docView.posFromDOM(e11.anchorNode, e11.anchorOffset), r10 = t53.viewport;
      if ((rK.ios || rK.chrome) && t53.state.selection.main.empty && i11 != n11 && (r10.from > 0 || r10.to < t53.state.doc.length)) {
        let e12 = Math.min(i11, n11), s11 = Math.max(i11, n11), o11 = r10.from - e12, l10 = r10.to - s11;
        (0 == o11 || 1 == o11 || 0 == e12) && (0 == l10 || -1 == l10 || s11 == t53.state.doc.length) && (i11 = 0, n11 = t53.state.doc.length);
      }
      this.newSel = $.single(n11, i11);
    }
  }
};
function h0(t53, e10) {
  let i10;
  let { newSel: n10 } = e10, o10 = t53.state.selection.main, r10 = t53.inputState.lastKeyTime > Date.now() - 100 ? t53.inputState.lastKeyCode : -1;
  if (e10.bounds) {
    let { from: n11, to: l10 } = e10.bounds, h10 = o10.from, a10 = null;
    (8 === r10 || rK.android && e10.text.length < l10 - n11) && (h10 = o10.to, a10 = "end");
    let c10 = function(t54, e11, i11, n12) {
      let s10 = Math.min(t54.length, e11.length), o11 = 0;
      for (; o11 < s10 && t54.charCodeAt(o11) == e11.charCodeAt(o11); ) o11++;
      if (o11 == s10 && t54.length == e11.length) return null;
      let r11 = t54.length, l11 = e11.length;
      for (; r11 > 0 && l11 > 0 && t54.charCodeAt(r11 - 1) == e11.charCodeAt(l11 - 1); ) r11--, l11--;
      if ("end" == n12) {
        let t55 = Math.max(0, o11 - Math.min(r11, l11));
        i11 -= r11 + t55 - o11;
      }
      if (r11 < o11 && t54.length < e11.length) {
        let t55 = i11 <= o11 && i11 >= r11 ? o11 - i11 : 0;
        o11 -= t55, l11 = o11 + (l11 - r11), r11 = o11;
      } else if (l11 < o11) {
        let t55 = i11 <= o11 && i11 >= l11 ? o11 - i11 : 0;
        o11 -= t55, r11 = o11 + (r11 - l11), l11 = o11;
      }
      return { from: o11, toA: r11, toB: l11 };
    }(t53.state.doc.sliceString(n11, l10, "￿"), e10.text, h10 - n11, a10);
    c10 && (rK.chrome && 13 == r10 && c10.toB == c10.from + 2 && "￿￿" == e10.text.slice(c10.from, c10.toB) && c10.toB--, i10 = { from: n11 + c10.from, to: n11 + c10.toA, insert: s.of(e10.text.slice(c10.from, c10.toB).split("￿")) });
  } else n10 && (!t53.hasFocus && t53.state.facet(lT) || n10.main.eq(o10)) && (n10 = null);
  if (!i10 && !n10) return false;
  if (!i10 && e10.typeOver && !o10.empty && n10 && n10.main.empty ? i10 = { from: o10.from, to: o10.to, insert: t53.state.doc.slice(o10.from, o10.to) } : i10 && i10.from >= o10.from && i10.to <= o10.to && (i10.from != o10.from || i10.to != o10.to) && o10.to - o10.from - (i10.to - i10.from) <= 4 ? i10 = { from: o10.from, to: o10.to, insert: t53.state.doc.slice(o10.from, i10.from).append(i10.insert).append(t53.state.doc.slice(i10.to, o10.to)) } : (rK.mac || rK.android) && i10 && i10.from == i10.to && i10.from == o10.head - 1 && /^\. ?$/.test(i10.insert.toString()) && "off" == t53.contentDOM.getAttribute("autocorrect") ? (n10 && 2 == i10.insert.length && (n10 = $.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: o10.from, to: o10.to, insert: s.of([" "]) }) : rK.chrome && i10 && i10.from == i10.to && i10.from == o10.head && "\n " == i10.insert.toString() && t53.lineWrapping && (n10 && (n10 = $.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: o10.from, to: o10.to, insert: s.of([" "]) }), i10) {
    let e11;
    if (rK.ios && t53.inputState.flushIOSKey(i10) || rK.android && (i10.to == o10.to && (i10.from == o10.from || i10.from == o10.from - 1 && " " == t53.state.sliceDoc(i10.from, o10.from)) && 1 == i10.insert.length && 2 == i10.insert.lines && rb(t53.contentDOM, "Enter", 13) || (i10.from == o10.from - 1 && i10.to == o10.to && 0 == i10.insert.length || 8 == r10 && i10.insert.length < i10.to - i10.from && i10.to > o10.head) && rb(t53.contentDOM, "Backspace", 8) || i10.from == o10.from && i10.to == o10.to + 1 && 0 == i10.insert.length && rb(t53.contentDOM, "Delete", 46))) return true;
    let s10 = i10.insert.toString();
    t53.inputState.composing >= 0 && t53.inputState.composing++;
    let l10 = () => e11 || (e11 = function(t54, e12, i11) {
      let n11, s11 = t54.state, o11 = s11.selection.main;
      if (e12.from >= o11.from && e12.to <= o11.to && e12.to - e12.from >= (o11.to - o11.from) / 3 && (!i11 || i11.main.empty && i11.main.from == e12.from + e12.insert.length) && t54.inputState.composing < 0) {
        let i12 = o11.from < e12.from ? s11.sliceDoc(o11.from, e12.from) : "", r12 = o11.to > e12.to ? s11.sliceDoc(e12.to, o11.to) : "";
        n11 = s11.replaceSelection(t54.state.toText(i12 + e12.insert.sliceString(0, void 0, t54.state.lineBreak) + r12));
      } else {
        let r12 = s11.changes(e12), l11 = i11 && i11.main.to <= r12.newLength ? i11.main : void 0;
        if (s11.selection.ranges.length > 1 && t54.inputState.composing >= 0 && e12.to <= o11.to && e12.to >= o11.to - 10) {
          let h10 = t54.state.sliceDoc(e12.from, e12.to), a10, c10 = i11 && l$(t54, i11.main.head);
          if (c10) {
            let t55 = e12.insert.length - (e12.to - e12.from);
            a10 = { from: c10.from, to: c10.to - t55 };
          } else a10 = t54.state.doc.lineAt(o11.head);
          let d10 = o11.to - e12.to, u10 = o11.to - o11.from;
          n11 = s11.changeByRange((i12) => {
            if (i12.from == o11.from && i12.to == o11.to) return { changes: r12, range: l11 || i12.map(r12) };
            let n12 = i12.to - d10, c11 = n12 - h10.length;
            if (i12.to - i12.from != u10 || t54.state.sliceDoc(c11, n12) != h10 || i12.to >= a10.from && i12.from <= a10.to) return { range: i12 };
            let f10 = s11.changes({ from: c11, to: n12, insert: e12.insert }), g10 = i12.to - o11.to;
            return { changes: f10, range: l11 ? $.range(Math.max(0, l11.anchor + g10), Math.max(0, l11.head + g10)) : i12.map(f10) };
          });
        } else n11 = { changes: r12, selection: l11 && s11.selection.replaceRange(l11) };
      }
      let r11 = "input.type";
      return (t54.composing || t54.inputState.compositionPendingChange && t54.inputState.compositionEndedAt > Date.now() - 50) && (t54.inputState.compositionPendingChange = false, r11 += ".compose", t54.inputState.compositionFirstChange && (r11 += ".start", t54.inputState.compositionFirstChange = false)), s11.update(n11, { userEvent: r11, scrollIntoView: true });
    }(t53, i10, n10));
    return t53.state.facet(lx).some((e12) => e12(t53, i10.from, i10.to, s10, l10)) || t53.dispatch(l10()), true;
  }
  if (!n10 || n10.main.eq(o10)) return false;
  {
    let e11 = false, i11 = "select";
    return t53.inputState.lastSelectionTime > Date.now() - 50 && ("select" == t53.inputState.lastSelectionOrigin && (e11 = true), i11 = t53.inputState.lastSelectionOrigin), t53.dispatch({ selection: n10, scrollIntoView: e11, userEvent: i11 }), true;
  }
}
let h1 = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, h2 = rK.ie && rK.ie_version <= 11, h8 = class {
  constructor(t53) {
    this.view = t53, this.active = false, this.selectionRange = new rp(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t53.contentDOM, this.observer = new MutationObserver((e10) => {
      for (let t54 of e10) this.queue.push(t54);
      (rK.ie && rK.ie_version <= 11 || rK.ios && t53.composing) && e10.some((t54) => "childList" == t54.type && t54.removedNodes.length || "characterData" == t54.type && t54.oldValue.length > t54.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), h2 && (this.onCharData = (t54) => {
      this.queue.push({ target: t54.target, type: "characterData", oldValue: t54.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver(() => {
      var t54;
      (null === (t54 = this.view.docView) || void 0 === t54 ? void 0 : t54.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t53.scrollDOM)), this.addWindowListeners(this.win = t53.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((t54) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t54.length > 0 && t54[t54.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t54) => {
      t54.length > 0 && t54[t54.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t53) {
    this.view.inputState.runHandlers("scroll", t53), this.intersecting && this.view.measure();
  }
  onScroll(t53) {
    this.intersecting && this.flush(false), this.onScrollChanged(t53);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t53) {
    ("change" != t53.type || t53.matches) && (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t53) {
    if (this.gapIntersection && (t53.length != this.gaps.length || this.gaps.some((e10, i10) => e10 != t53[i10]))) {
      for (let e10 of (this.gapIntersection.disconnect(), t53)) this.gapIntersection.observe(e10);
      this.gaps = t53;
    }
  }
  onSelectionChange(t53) {
    let e10 = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i10 } = this, n10 = this.selectionRange;
    if (i10.state.facet(lT) ? i10.root.activeElement != this.dom : !rr(i10.dom, n10)) return;
    let s10 = n10.anchorNode && i10.docView.nearest(n10.anchorNode);
    if (s10 && s10.ignoreEvent(t53)) {
      e10 || (this.selectionChanged = false);
      return;
    }
    (rK.ie && rK.ie_version <= 11 || rK.android && rK.chrome) && !i10.state.selection.main.empty && n10.focusNode && rh(n10.focusNode, n10.focusOffset, n10.anchorNode, n10.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: t53 } = this, e10 = rs(t53.root);
    if (!e10) return false;
    let i10 = rK.safari && 11 == t53.root.nodeType && function(t54) {
      let e11 = t54.activeElement;
      for (; e11 && e11.shadowRoot; ) e11 = e11.shadowRoot.activeElement;
      return e11;
    }(this.dom.ownerDocument) == this.dom && function(t54, e11) {
      if (e11.getComposedRanges) {
        let i12 = e11.getComposedRanges(t54.root)[0];
        if (i12) return h4(t54, i12);
      }
      let i11 = null;
      function n11(t55) {
        t55.preventDefault(), t55.stopImmediatePropagation(), i11 = t55.getTargetRanges()[0];
      }
      return t54.contentDOM.addEventListener("beforeinput", n11, true), t54.dom.ownerDocument.execCommand("indent"), t54.contentDOM.removeEventListener("beforeinput", n11, true), i11 ? h4(t54, i11) : null;
    }(this.view, e10) || e10;
    if (!i10 || this.selectionRange.eq(i10)) return false;
    let n10 = rr(this.dom, i10);
    return n10 && !this.selectionChanged && t53.inputState.lastFocusTime > Date.now() - 200 && t53.inputState.lastTouchTime < Date.now() - 300 && function(t54, e11) {
      let i11 = e11.focusNode, n11 = e11.focusOffset;
      if (!i11 || e11.anchorNode != i11 || e11.anchorOffset != n11) return false;
      for (n11 = Math.min(n11, ru(i11)); ; ) if (n11) {
        if (1 != i11.nodeType) return false;
        let t55 = i11.childNodes[n11 - 1];
        "false" == t55.contentEditable ? n11-- : n11 = ru(i11 = t55);
      } else {
        if (i11 == t54) return true;
        n11 = ra(i11), i11 = i11.parentNode;
      }
    }(this.dom, i10) ? (this.view.inputState.lastFocusTime = 0, t53.docView.updateSelection(), false) : (this.selectionRange.setRange(i10), n10 && (this.selectionChanged = true), true);
  }
  setSelectionRange(t53, e10) {
    this.selectionRange.set(t53.node, t53.offset, e10.node, e10.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t53 = 0, e10 = null;
    for (let i10 = this.dom; i10; ) if (1 == i10.nodeType) !e10 && t53 < this.scrollTargets.length && this.scrollTargets[t53] == i10 ? t53++ : e10 || (e10 = this.scrollTargets.slice(0, t53)), e10 && e10.push(i10), i10 = i10.assignedSlot || i10.parentNode;
    else if (11 == i10.nodeType) i10 = i10.host;
    else break;
    if (t53 < this.scrollTargets.length && !e10 && (e10 = this.scrollTargets.slice(0, t53)), e10) {
      for (let t54 of this.scrollTargets) t54.removeEventListener("scroll", this.onScroll);
      for (let t54 of this.scrollTargets = e10) t54.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t53) {
    if (!this.active) return t53();
    try {
      return this.stop(), t53();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, h1), h2 && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), h2 && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(t53, e10) {
    var i10;
    this.delayedAndroidKey || (this.flushingAndroidKey = this.view.win.requestAnimationFrame(() => {
      let t54 = this.delayedAndroidKey;
      t54 && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = t54.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && t54.force && rb(this.dom, t54.key, t54.keyCode));
    })), this.delayedAndroidKey && "Enter" != t53 || (this.delayedAndroidKey = { key: t53, keyCode: e10, force: this.lastChange < Date.now() - 50 || !!(null === (i10 = this.delayedAndroidKey) || void 0 === i10 ? void 0 : i10.force) });
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
    for (let t53 of this.observer.takeRecords()) this.queue.push(t53);
    return this.queue;
  }
  processRecords() {
    let t53 = this.pendingRecords();
    t53.length && (this.queue = []);
    let e10 = -1, i10 = -1, n10 = false;
    for (let s10 of t53) {
      let t54 = this.readMutation(s10);
      t54 && (t54.typeOver && (n10 = true), -1 == e10 ? { from: e10, to: i10 } = t54 : (e10 = Math.min(t54.from, e10), i10 = Math.max(t54.to, i10)));
    }
    return { from: e10, to: i10, typeOver: n10 };
  }
  readChange() {
    let { from: t53, to: e10, typeOver: i10 } = this.processRecords(), n10 = this.selectionChanged && rr(this.dom, this.selectionRange);
    if (t53 < 0 && !n10) return null;
    t53 > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let s10 = new hZ(this.view, t53, e10, i10);
    return this.view.docView.domChanged = { newSel: s10.newSel ? s10.newSel.main : null }, s10;
  }
  flush() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    t53 && this.readSelectionRange();
    let e10 = this.readChange();
    if (!e10) return this.view.requestMeasure(), false;
    let i10 = this.view.state, n10 = h0(this.view, e10);
    return this.view.state == i10 && (e10.domChanged || e10.newSel && !e10.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n10;
  }
  readMutation(t53) {
    let e10 = this.view.docView.nearest(t53.target);
    if (!e10 || e10.ignoreMutation(t53)) return null;
    if (e10.markDirty("attributes" == t53.type), "attributes" == t53.type && (e10.flags |= 4), "childList" == t53.type) {
      let i10 = h3(e10, t53.previousSibling || t53.target.previousSibling, -1), n10 = h3(e10, t53.nextSibling || t53.target.nextSibling, 1);
      return { from: i10 ? e10.posAfter(i10) : e10.posAtStart, to: n10 ? e10.posBefore(n10) : e10.posAtEnd, typeOver: false };
    }
    return "characterData" == t53.type ? { from: e10.posAtStart, to: e10.posAtEnd, typeOver: t53.target.nodeValue == t53.oldValue } : null;
  }
  setWindow(t53) {
    t53 != this.win && (this.removeWindowListeners(this.win), this.win = t53, this.addWindowListeners(this.win));
  }
  addWindowListeners(t53) {
    t53.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener("change", this.onPrint) : t53.addEventListener("beforeprint", this.onPrint), t53.addEventListener("scroll", this.onScroll), t53.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t53) {
    t53.removeEventListener("scroll", this.onScroll), t53.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener("change", this.onPrint) : t53.removeEventListener("beforeprint", this.onPrint), t53.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var t53, e10, i10;
    for (let n10 of (this.stop(), null === (t53 = this.intersection) || void 0 === t53 || t53.disconnect(), null === (e10 = this.gapIntersection) || void 0 === e10 || e10.disconnect(), null === (i10 = this.resizeScroll) || void 0 === i10 || i10.disconnect(), this.scrollTargets)) n10.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
};
function h3(t53, e10, i10) {
  for (; e10; ) {
    let n10 = rC.get(e10);
    if (n10 && n10.parent == t53) return n10;
    let s10 = e10.parentNode;
    e10 = s10 != t53.dom ? s10 : i10 > 0 ? e10.nextSibling : e10.previousSibling;
  }
  return null;
}
function h4(t53, e10) {
  let i10 = e10.startContainer, n10 = e10.startOffset, s10 = e10.endContainer, o10 = e10.endOffset, r10 = t53.docView.domAtPos(t53.state.selection.main.anchor);
  return rh(r10.node, r10.offset, s10, o10) && ([i10, n10, s10, o10] = [s10, o10, i10, n10]), { anchorNode: i10, anchorOffset: n10, focusNode: s10, focusOffset: o10 };
}
let h5 = class t51 {
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
  constructor(t53 = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t53.parent && t53.parent.appendChild(this.dom);
    let { dispatch: e10 } = t53;
    for (let i10 of (this.dispatchTransactions = t53.dispatchTransactions || e10 && ((t54) => t54.forEach((t55) => e10(t55, this))) || ((t54) => this.update(t54)), this.dispatch = this.dispatch.bind(this), this._root = t53.root || function(t54) {
      for (; t54; ) {
        if (t54 && (9 == t54.nodeType || 11 == t54.nodeType && t54.host)) return t54;
        t54 = t54.assignedSlot || t54.parentNode;
      }
      return null;
    }(t53.parent) || document, this.viewState = new hH(t53.state || tB.create(t53)), t53.scrollTo && t53.scrollTo.is(lD) && (this.viewState.scrollTarget = t53.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(lB).map((t54) => new lL(t54)), this.plugins)) i10.update(this);
    this.observer = new h8(this), this.inputState = new l4(this), this.inputState.ensureHandlers(this.plugins), this.docView = new lG(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure();
  }
  dispatch() {
    for (var t53 = arguments.length, e10 = Array(t53), i10 = 0; i10 < t53; i10++) e10[i10] = arguments[i10];
    let n10 = 1 == e10.length && e10[0] instanceof tM ? e10 : 1 == e10.length && Array.isArray(e10[0]) ? e10[0] : [this.state.update(...e10)];
    this.dispatchTransactions(n10, this);
  }
  update(t53) {
    if (0 != this.updateState) throw Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e10 = false, i10 = false, n10, s10 = this.state;
    for (let e11 of t53) {
      if (e11.startState != s10) throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s10 = e11.state;
    }
    if (this.destroyed) {
      this.viewState.state = s10;
      return;
    }
    let o10 = this.hasFocus, r10 = 0, l10 = null;
    t53.some((t54) => t54.annotation(hv)) ? (this.inputState.notifiedFocused = o10, r10 = 1) : o10 == this.inputState.notifiedFocused || (this.inputState.notifiedFocused = o10, (l10 = hw(s10, o10)) || (r10 = 1));
    let h10 = this.observer.delayedAndroidKey, a10 = null;
    if (h10 ? (this.observer.clearDelayedAndroidKey(), ((a10 = this.observer.readChange()) && !this.state.doc.eq(s10.doc) || !this.state.selection.eq(s10.selection)) && (a10 = null)) : this.observer.clear(), s10.facet(tB.phrases) != this.state.facet(tB.phrases)) return this.setState(s10);
    n10 = lj.create(this, s10, t53), n10.flags |= r10;
    let c10 = this.viewState.scrollTarget;
    try {
      for (let e11 of (this.updateState = 2, t53)) {
        if (c10 && (c10 = c10.map(e11.changes)), e11.scrollIntoView) {
          let { main: t54 } = e11.state.selection;
          c10 = new lC(t54.empty ? t54 : $.cursor(t54.head, t54.head > t54.anchor ? -1 : 1));
        }
        for (let t54 of e11.effects) t54.is(lD) && (c10 = t54.value.clip(this.state));
      }
      this.viewState.update(n10, c10), this.bidiCache = h7.update(this.bidiCache, n10.changes), n10.empty || (this.updatePlugins(n10), this.inputState.update(n10)), e10 = this.docView.update(n10), this.state.facet(lq) != this.styleModules && this.mountStyles(), i10 = this.updateAttrs(), this.showAnnouncements(t53), this.docView.updateSelection(e10, t53.some((t54) => t54.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n10.startState.facet(hq) != n10.state.facet(hq) && (this.viewState.mustMeasureContent = true), (e10 || i10 || c10 || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e10 && this.docViewUpdate(), !n10.empty) for (let t54 of this.state.facet(ly)) try {
      t54(n10);
    } catch (t55) {
      lO(this.state, t55, "update listener");
    }
    (l10 || a10) && Promise.resolve().then(() => {
      l10 && this.state == l10.startState && this.dispatch(l10), a10 && !h0(this, a10) && h10.force && rb(this.contentDOM, h10.key, h10.keyCode);
    });
  }
  setState(t53) {
    if (0 != this.updateState) throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t53;
      return;
    }
    this.updateState = 2;
    let e10 = this.hasFocus;
    try {
      for (let t54 of this.plugins) t54.destroy(this);
      for (let e11 of (this.viewState = new hH(t53), this.plugins = t53.facet(lB).map((t54) => new lL(t54)), this.pluginMap.clear(), this.plugins)) e11.update(this);
      this.docView.destroy(), this.docView = new lG(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e10 && this.focus(), this.requestMeasure();
  }
  updatePlugins(t53) {
    let e10 = t53.startState.facet(lB), i10 = t53.state.facet(lB);
    if (e10 != i10) {
      let n10 = [];
      for (let s10 of i10) {
        let i11 = e10.indexOf(s10);
        if (i11 < 0) n10.push(new lL(s10));
        else {
          let e11 = this.plugins[i11];
          e11.mustUpdate = t53, n10.push(e11);
        }
      }
      for (let e11 of this.plugins) e11.mustUpdate != t53 && e11.destroy(this);
      this.plugins = n10, this.pluginMap.clear();
    } else for (let e11 of this.plugins) e11.mustUpdate = t53;
    for (let t54 = 0; t54 < this.plugins.length; t54++) this.plugins[t54].update(this);
    e10 != i10 && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t53 of this.plugins) {
      let e10 = t53.value;
      if (e10 && e10.docViewUpdate) try {
        e10.docViewUpdate(this);
      } catch (t54) {
        lO(this.state, t54, "doc view update listener");
      }
    }
  }
  measure() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t53 && this.observer.forceFlush();
    let e10 = null, i10 = this.scrollDOM, n10 = i10.scrollTop * this.scaleY, { scrollAnchorPos: s10, scrollAnchorHeight: o10 } = this.viewState;
    Math.abs(n10 - this.viewState.scrollTop) > 1 && (o10 = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let t54 = 0; ; t54++) {
        if (o10 < 0) {
          if (rx(i10)) s10 = -1, o10 = this.viewState.heightMap.height;
          else {
            let t55 = this.viewState.scrollAnchorAt(n10);
            s10 = t55.from, o10 = t55.top;
          }
        }
        this.updateState = 1;
        let r10 = this.viewState.measure(this);
        if (!r10 && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
        if (t54 > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let l10 = [];
        4 & r10 || ([this.measureRequests, l10] = [l10, this.measureRequests]);
        let h10 = l10.map((t55) => {
          try {
            return t55.read(this);
          } catch (t56) {
            return lO(this.state, t56), h6;
          }
        }), a10 = lj.create(this, this.state, []), c10 = false;
        a10.flags |= r10, e10 ? e10.flags |= r10 : e10 = a10, this.updateState = 2, !a10.empty && (this.updatePlugins(a10), this.inputState.update(a10), this.updateAttrs(), (c10 = this.docView.update(a10)) && this.docViewUpdate());
        for (let t55 = 0; t55 < l10.length; t55++) if (h10[t55] != h6) try {
          let e11 = l10[t55];
          e11.write && e11.write(h10[t55], this);
        } catch (t56) {
          lO(this.state, t56);
        }
        if (c10 && this.docView.updateSelection(true), !a10.viewportChanged && 0 == this.measureRequests.length) {
          if (this.viewState.editorHeight) {
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o10 = -1;
              continue;
            }
            {
              let t55 = (s10 < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s10).top) - o10;
              if (t55 > 1 || t55 < -1) {
                n10 += t55, i10.scrollTop = n10 / this.scaleY, o10 = -1;
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
    if (e10 && !e10.empty) for (let t54 of this.state.facet(ly)) t54(e10);
  }
  get themeClasses() {
    return hj + " " + (this.state.facet(h_) ? hU : hG) + " " + this.state.facet(hq);
  }
  updateAttrs() {
    let t53 = at(this, lP, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), e10 = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", translate: "no", contenteditable: this.state.facet(lT) ? "true" : "false", class: "cm-content", style: `${rK.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (e10["aria-readonly"] = "true"), at(this, lN, e10);
    let i10 = this.observer.ignore(() => {
      let i11 = rQ(this.contentDOM, this.contentAttrs, e10), n10 = rQ(this.dom, this.editorAttrs, t53);
      return i11 || n10;
    });
    return this.editorAttrs = t53, this.contentAttrs = e10, i10;
  }
  showAnnouncements(e10) {
    let i10 = true;
    for (let n10 of e10) for (let e11 of n10.effects) e11.is(t51.announce) && (i10 && (this.announceDOM.textContent = ""), i10 = false, this.announceDOM.appendChild(document.createElement("div")).textContent = e11.value);
  }
  mountStyles() {
    this.styleModules = this.state.facet(lq);
    let e10 = this.state.facet(t51.cspNonce);
    t0.mount(this.root, this.styleModules.concat(hX).reverse(), e10 ? { nonce: e10 } : void 0);
  }
  readMeasured() {
    if (2 == this.updateState) throw Error("Reading the editor layout isn't allowed during an update");
    0 == this.updateState && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(t53) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t53 && !(this.measureRequests.indexOf(t53) > -1)) {
      if (null != t53.key) {
        for (let e10 = 0; e10 < this.measureRequests.length; e10++) if (this.measureRequests[e10].key === t53.key) {
          this.measureRequests[e10] = t53;
          return;
        }
      }
      this.measureRequests.push(t53);
    }
  }
  plugin(t53) {
    let e10 = this.pluginMap.get(t53);
    return (void 0 === e10 || e10 && e10.spec != t53) && this.pluginMap.set(t53, e10 = this.plugins.find((e11) => e11.spec == t53) || null), e10 && e10.update(this).value;
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
  elementAtHeight(t53) {
    return this.readMeasured(), this.viewState.elementAtHeight(t53);
  }
  lineBlockAtHeight(t53) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t53);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t53) {
    return this.viewState.lineBlockAt(t53);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t53, e10, i10) {
    return l3(this, t53, l2(this, t53, e10, i10));
  }
  moveByGroup(t53, e10) {
    return l3(this, t53, l2(this, t53, e10, (e11) => {
      var i10;
      let n10, s10;
      return i10 = t53.head, s10 = (n10 = this.state.charCategorizer(i10))(e11), (t54) => {
        let e12 = n10(t54);
        return s10 == tT.Space && (s10 = e12), s10 == e12;
      };
    }));
  }
  visualLineSide(t53, e10) {
    let i10 = this.bidiSpans(t53), n10 = this.textDirectionAt(t53.from), s10 = i10[e10 ? i10.length - 1 : 0];
    return $.cursor(s10.side(e10, n10) + t53.from, s10.forward(!e10, n10) ? 1 : -1);
  }
  moveToLineBoundary(t53, e10) {
    let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return function(t54, e11, i11, n10) {
      let s10 = function(t55, e12) {
        let i12 = t55.lineBlockAt(e12);
        if (Array.isArray(i12.type)) {
          for (let t56 of i12.type) if (t56.to > e12 || t56.to == e12 && (t56.to == i12.to || t56.type == r2.Text)) return t56;
        }
        return i12;
      }(t54, e11.head), o10 = n10 && s10.type == r2.Text && (t54.lineWrapping || s10.widgetLineBreaks) ? t54.coordsAtPos(e11.assoc < 0 && e11.head > s10.from ? e11.head - 1 : e11.head) : null;
      if (o10) {
        let e12 = t54.dom.getBoundingClientRect(), n11 = t54.textDirectionAt(s10.from), r10 = t54.posAtCoords({ x: i11 == (n11 == li.LTR) ? e12.right - 1 : e12.left + 1, y: (o10.top + o10.bottom) / 2 });
        if (null != r10) return $.cursor(r10, i11 ? -1 : 1);
      }
      return $.cursor(i11 ? s10.to : s10.from, i11 ? -1 : 1);
    }(this, t53, e10, i10);
  }
  moveVertically(t53, e10, i10) {
    return l3(this, t53, function(t54, e11, i11, n10) {
      let s10 = e11.head, o10 = i11 ? 1 : -1;
      if (s10 == (i11 ? t54.state.doc.length : 0)) return $.cursor(s10, e11.assoc);
      let r10 = e11.goalColumn, l10, h10 = t54.contentDOM.getBoundingClientRect(), a10 = t54.coordsAtPos(s10, e11.assoc || -1), c10 = t54.documentTop;
      if (a10) null == r10 && (r10 = a10.left - h10.left), l10 = o10 < 0 ? a10.top : a10.bottom;
      else {
        let e12 = t54.viewState.lineBlockAt(s10);
        null == r10 && (r10 = Math.min(h10.right - h10.left, t54.defaultCharacterWidth * (s10 - e12.from))), l10 = (o10 < 0 ? e12.top : e12.bottom) + c10;
      }
      let d10 = h10.left + r10, u10 = null != n10 ? n10 : t54.viewState.heightOracle.textHeight >> 1;
      for (let e12 = 0; ; e12 += 10) {
        let i12 = l10 + (u10 + e12) * o10, n11 = l0(t54, { x: d10, y: i12 }, false, o10);
        if (i12 < h10.top || i12 > h10.bottom || (o10 < 0 ? n11 < s10 : n11 > s10)) {
          let e13 = t54.docView.coordsForChar(n11), s11 = !e13 || i12 < e13.top ? -1 : 1;
          return $.cursor(n11, s11, void 0, r10);
        }
      }
    }(this, t53, e10, i10));
  }
  domAtPos(t53) {
    return this.docView.domAtPos(t53);
  }
  posAtDOM(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this.docView.posFromDOM(t53, e10);
  }
  posAtCoords(t53) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.readMeasured(), l0(this, t53, e10);
  }
  coordsAtPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    this.readMeasured();
    let i10 = this.docView.coordsAt(t53, e10);
    if (!i10 || i10.left == i10.right) return i10;
    let n10 = this.state.doc.lineAt(t53), s10 = this.bidiSpans(n10);
    return rf(i10, s10[lu.find(s10, t53 - n10.from, -1, e10)].dir == li.LTR == e10 > 0);
  }
  coordsForChar(t53) {
    return this.readMeasured(), this.docView.coordsForChar(t53);
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
  textDirectionAt(t53) {
    return !this.state.facet(lk) || t53 < this.viewport.from || t53 > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t53));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t53) {
    if (t53.length > h9) return lg(t53.length);
    let e10 = this.textDirectionAt(t53.from), i10;
    for (let n11 of this.bidiCache) if (n11.from == t53.from && n11.dir == e10 && (n11.fresh || function t54(e11, i11) {
      if (e11.length != i11.length) return false;
      for (let n12 = 0; n12 < e11.length; n12++) {
        let s10 = e11[n12], o10 = i11[n12];
        if (s10.from != o10.from || s10.to != o10.to || s10.direction != o10.direction || !t54(s10.inner, o10.inner)) return false;
      }
      return true;
    }(n11.isolates, i10 = lW(this, t53)))) return n11.order;
    i10 || (i10 = lW(this, t53));
    let n10 = function(t54, e11, i11) {
      if (!t54) return [new lu(0, 0, e11 == ls ? 1 : 0)];
      if (e11 == ln && !i11.length && !ld.test(t54)) return lg(t54.length);
      if (i11.length) for (; t54.length > lf.length; ) lf[lf.length] = 256;
      let n11 = [], s10 = e11 == ln ? 0 : 1;
      return function t55(e12, i12, n12, s11, o10, r10, l10) {
        let h10 = i12 % 2 ? 2 : 1;
        (function(t56, e13, i13, n13, s12) {
          for (let o11 = 0; o11 <= n13.length; o11++) {
            let r11 = o11 ? n13[o11 - 1].to : e13, l11 = o11 < n13.length ? n13[o11].from : i13, h11 = o11 ? 256 : s12;
            for (let e14 = r11, i14 = h11, n14 = h11; e14 < l11; e14++) {
              let s13 = lc(t56.charCodeAt(e14));
              512 == s13 ? s13 = i14 : 8 == s13 && 4 == n14 && (s13 = 16), lf[e14] = 4 == s13 ? 2 : s13, 7 & s13 && (n14 = s13), i14 = s13;
            }
            for (let t57 = r11, e14 = h11, n14 = h11; t57 < l11; t57++) {
              let s13 = lf[t57];
              if (128 == s13) t57 < l11 - 1 && e14 == lf[t57 + 1] && 24 & e14 ? s13 = lf[t57] = e14 : lf[t57] = 256;
              else if (64 == s13) {
                let s14 = t57 + 1;
                for (; s14 < l11 && 64 == lf[s14]; ) s14++;
                let o12 = t57 && 8 == e14 || s14 < i13 && 8 == lf[s14] ? 1 == n14 ? 1 : 8 : 256;
                for (let e15 = t57; e15 < s14; e15++) lf[e15] = o12;
                t57 = s14 - 1;
              } else 8 == s13 && 1 == n14 && (lf[t57] = 1);
              e14 = s13, 7 & s13 && (n14 = s13);
            }
          }
        })(e12, o10, r10, s11, h10), function(t56, e13, i13, n13, s12) {
          let o11 = 1 == s12 ? 2 : 1;
          for (let r11 = 0, l11 = 0, h11 = 0; r11 <= n13.length; r11++) {
            let a10 = r11 ? n13[r11 - 1].to : e13, c10 = r11 < n13.length ? n13[r11].from : i13;
            for (let e14 = a10, i14, n14, r12; e14 < c10; e14++) if (n14 = lh[i14 = t56.charCodeAt(e14)]) {
              if (n14 < 0) {
                for (let t57 = l11 - 3; t57 >= 0; t57 -= 3) if (la[t57 + 1] == -n14) {
                  let i15 = la[t57 + 2], n15 = 2 & i15 ? s12 : 4 & i15 ? 1 & i15 ? o11 : s12 : 0;
                  n15 && (lf[e14] = lf[la[t57]] = n15), l11 = t57;
                  break;
                }
              } else if (189 == la.length) break;
              else la[l11++] = e14, la[l11++] = i14, la[l11++] = h11;
            } else if (2 == (r12 = lf[e14]) || 1 == r12) {
              let t57 = r12 == s12;
              h11 = t57 ? 0 : 1;
              for (let e15 = l11 - 3; e15 >= 0; e15 -= 3) {
                let i15 = la[e15 + 2];
                if (2 & i15) break;
                if (t57) la[e15 + 2] |= 2;
                else {
                  if (4 & i15) break;
                  la[e15 + 2] |= 4;
                }
              }
            }
          }
        }(e12, o10, r10, s11, h10), function(t56, e13, i13, n13) {
          for (let s12 = 0, o11 = n13; s12 <= i13.length; s12++) {
            let r11 = s12 ? i13[s12 - 1].to : t56, l11 = s12 < i13.length ? i13[s12].from : e13;
            for (let h11 = r11; h11 < l11; ) {
              let r12 = lf[h11];
              if (256 == r12) {
                let r13 = h11 + 1;
                for (; ; ) if (r13 == l11) {
                  if (s12 == i13.length) break;
                  r13 = i13[s12++].to, l11 = s12 < i13.length ? i13[s12].from : e13;
                } else if (256 == lf[r13]) r13++;
                else break;
                let a10 = 1 == o11, c10 = a10 == ((r13 < e13 ? lf[r13] : n13) == 1) ? a10 ? 1 : 2 : n13;
                for (let e14 = r13, n14 = s12, o12 = n14 ? i13[n14 - 1].to : t56; e14 > h11; ) e14 == o12 && (e14 = i13[--n14].from, o12 = n14 ? i13[n14 - 1].to : t56), lf[--e14] = c10;
                h11 = r13;
              } else o11 = r12, h11++;
            }
          }
        }(o10, r10, s11, h10), function e13(i13, n13, s12, o11, r11, l11, h11) {
          let a10 = o11 % 2 ? 2 : 1;
          if (o11 % 2 == r11 % 2) for (let c10 = n13, d10 = 0; c10 < s12; ) {
            let n14 = true, u10 = false;
            if (d10 == l11.length || c10 < l11[d10].from) {
              let t56 = lf[c10];
              t56 != a10 && (n14 = false, u10 = 16 == t56);
            }
            let f10 = n14 || 1 != a10 ? null : [], g10 = n14 ? o11 : o11 + 1, p10 = c10;
            e: for (; ; ) if (d10 < l11.length && p10 == l11[d10].from) {
              if (u10) break;
              let e14 = l11[d10];
              if (!n14) for (let t56 = e14.to, i14 = d10 + 1; ; ) {
                if (t56 == s12) break e;
                if (i14 < l11.length && l11[i14].from == t56) t56 = l11[i14++].to;
                else if (lf[t56] == a10) break e;
                else break;
              }
              d10++, f10 ? f10.push(e14) : (e14.from > c10 && h11.push(new lu(c10, e14.from, g10)), t55(i13, e14.direction == ln != !(g10 % 2) ? o11 + 1 : o11, r11, e14.inner, e14.from, e14.to, h11), c10 = e14.to), p10 = e14.to;
            } else if (p10 == s12 || (n14 ? lf[p10] != a10 : lf[p10] == a10)) break;
            else p10++;
            f10 ? e13(i13, c10, p10, o11 + 1, r11, f10, h11) : c10 < p10 && h11.push(new lu(c10, p10, g10)), c10 = p10;
          }
          else for (let c10 = s12, d10 = l11.length; c10 > n13; ) {
            let s13 = true, u10 = false;
            if (!d10 || c10 > l11[d10 - 1].to) {
              let t56 = lf[c10 - 1];
              t56 != a10 && (s13 = false, u10 = 16 == t56);
            }
            let f10 = s13 || 1 != a10 ? null : [], g10 = s13 ? o11 : o11 + 1, p10 = c10;
            e: for (; ; ) if (d10 && p10 == l11[d10 - 1].to) {
              if (u10) break;
              let e14 = l11[--d10];
              if (!s13) for (let t56 = e14.from, i14 = d10; ; ) {
                if (t56 == n13) break e;
                if (i14 && l11[i14 - 1].to == t56) t56 = l11[--i14].from;
                else if (lf[t56 - 1] == a10) break e;
                else break;
              }
              f10 ? f10.push(e14) : (e14.to < c10 && h11.push(new lu(e14.to, c10, g10)), t55(i13, e14.direction == ln != !(g10 % 2) ? o11 + 1 : o11, r11, e14.inner, e14.from, e14.to, h11), c10 = e14.from), p10 = e14.from;
            } else if (p10 == n13 || (s13 ? lf[p10 - 1] != a10 : lf[p10 - 1] == a10)) break;
            else p10--;
            f10 ? e13(i13, p10, c10, o11 + 1, r11, f10, h11) : p10 < c10 && h11.push(new lu(p10, c10, g10)), c10 = p10;
          }
        }(e12, o10, r10, i12, n12, s11, l10);
      }(t54, s10, s10, i11, 0, t54.length, n11), n11;
    }(t53.text, e10, i10);
    return this.bidiCache.push(new h7(t53.from, t53.to, e10, i10, true, n10)), n10;
  }
  get hasFocus() {
    var t53;
    return (this.dom.ownerDocument.hasFocus() || rK.safari && (null === (t53 = this.inputState) || void 0 === t53 ? void 0 : t53.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      rv(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t53) {
    this._root != t53 && (this._root = t53, this.observer.setWindow((9 == t53.nodeType ? t53 : t53.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    for (let t53 of this.plugins) t53.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return lD.of(new lC("number" == typeof t53 ? $.cursor(t53) : t53, e10.y, e10.x, e10.yMargin, e10.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t53, scrollLeft: e10 } = this.scrollDOM, i10 = this.viewState.scrollAnchorAt(t53);
    return lD.of(new lC($.cursor(i10.from), "start", "start", i10.top - t53, e10, true));
  }
  setTabFocusMode(t53) {
    null == t53 ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof t53 ? this.inputState.tabFocusMode = t53 ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + t53);
  }
  static domEventHandlers(t53) {
    return lR.define(() => ({}), { eventHandlers: t53 });
  }
  static domEventObservers(t53) {
    return lR.define(() => ({}), { eventObservers: t53 });
  }
  static theme(t53, e10) {
    let i10 = t0.newName(), n10 = [hq.of(i10), lq.of(hY(`.${i10}`, t53))];
    return e10 && e10.dark && n10.push(h_.of(true)), n10;
  }
  static baseTheme(t53) {
    return tr.lowest(lq.of(hY("." + hj, t53, h$)));
  }
  static findFromDOM(t53) {
    var e10;
    let i10 = t53.querySelector(".cm-content"), n10 = i10 && rC.get(i10) || rC.get(t53);
    return (null === (e10 = null == n10 ? void 0 : n10.rootView) || void 0 === e10 ? void 0 : e10.view) || null;
  }
};
h5.styleModule = lq, h5.inputHandler = lx, h5.scrollHandler = lA, h5.focusChangeEffect = lS, h5.perLineTextDirection = lk, h5.exceptionSink = lb, h5.updateListener = ly, h5.editable = lT, h5.mouseSelectionStyle = lw, h5.dragMovesSelection = lv, h5.clickAddsSelectionRange = lm, h5.decorations = lH, h5.outerDecorations = lV, h5.atomicRanges = lI, h5.bidiIsolatedRanges = lF, h5.scrollMargins = lz, h5.darkTheme = h_, h5.cspNonce = J.define({ combine: (t53) => t53.length ? t53[0] : "" }), h5.contentAttributes = lN, h5.editorAttributes = lP, h5.lineWrapping = h5.contentAttributes.of({ class: "cm-lineWrapping" }), h5.announce = tk.define();
let h9 = 4096, h6 = {}, h7 = class t52 {
  constructor(t53, e10, i10, n10, s10, o10) {
    this.from = t53, this.to = e10, this.dir = i10, this.isolates = n10, this.fresh = s10, this.order = o10;
  }
  static update(e10, i10) {
    if (i10.empty && !e10.some((t53) => t53.fresh)) return e10;
    let n10 = [], s10 = e10.length ? e10[e10.length - 1].dir : li.LTR;
    for (let o10 = Math.max(0, e10.length - 10); o10 < e10.length; o10++) {
      let r10 = e10[o10];
      r10.dir != s10 || i10.touchesRange(r10.from, r10.to) || n10.push(new t52(i10.mapPos(r10.from, 1), i10.mapPos(r10.to, -1), r10.dir, r10.isolates, false, r10.order));
    }
    return n10;
  }
};
function at(t53, e10, i10) {
  for (let n10 = t53.state.facet(e10), s10 = n10.length - 1; s10 >= 0; s10--) {
    let e11 = n10[s10], o10 = "function" == typeof e11 ? e11(t53) : e11;
    o10 && rY(o10, i10);
  }
  return i10;
}
let ae = !rK.ios, ai = { ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" } }, ".cm-content": { "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } };
ae && (ai[".cm-line"].caretColor = ai[".cm-content"].caretColor = "transparent !important");
let an = class extends tL {
  compare(t53) {
    return this == t53 || this.constructor == t53.constructor && this.eq(t53);
  }
  eq(t53) {
    return false;
  }
  destroy(t53) {
  }
};
an.prototype.elementClass = "", an.prototype.toDOM = void 0, an.prototype.mapMode = I.TrackBefore, an.prototype.startSide = an.prototype.endSide = -1, an.prototype.point = true;
let as = J.define(), ao = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => tV.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {} }, ar = J.define(), al = J.define({ combine: (t53) => t53.some((t54) => t54) }), ah = lR.fromClass(class {
  constructor(t53) {
    for (let e10 of (this.view = t53, this.prevViewport = t53.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = t53.state.facet(ar).map((e11) => new au(t53, e11)), this.gutters)) this.dom.appendChild(e10.dom);
    this.fixed = !t53.state.facet(al), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), t53.scrollDOM.insertBefore(this.dom, t53.contentDOM);
  }
  update(t53) {
    if (this.updateGutters(t53)) {
      let e10 = this.prevViewport, i10 = t53.view.viewport, n10 = Math.min(e10.to, i10.to) - Math.max(e10.from, i10.from);
      this.syncGutters(n10 < (i10.to - i10.from) * 0.8);
    }
    t53.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(al) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t53.view.viewport;
  }
  syncGutters(t53) {
    let e10 = this.dom.nextSibling;
    t53 && this.dom.remove();
    let i10 = tV.iter(this.view.state.facet(as), this.view.viewport.from), n10 = [], s10 = this.gutters.map((t54) => new ad(t54, this.view.viewport, -this.view.documentPadding.top));
    for (let t54 of this.view.viewportLineBlocks) if (n10.length && (n10 = []), Array.isArray(t54.type)) {
      let e11 = true;
      for (let o10 of t54.type) if (o10.type == r2.Text && e11) {
        for (let t55 of (ac(i10, n10, o10.from), s10)) t55.line(this.view, o10, n10);
        e11 = false;
      } else if (o10.widget) for (let t55 of s10) t55.widget(this.view, o10);
    } else if (t54.type == r2.Text) for (let e11 of (ac(i10, n10, t54.from), s10)) e11.line(this.view, t54, n10);
    else if (t54.widget) for (let e11 of s10) e11.widget(this.view, t54);
    for (let t54 of s10) t54.finish();
    t53 && this.view.scrollDOM.insertBefore(this.dom, e10);
  }
  updateGutters(t53) {
    let e10 = t53.startState.facet(ar), i10 = t53.state.facet(ar), n10 = t53.docChanged || t53.heightChanged || t53.viewportChanged || !tV.eq(t53.startState.facet(as), t53.state.facet(as), t53.view.viewport.from, t53.view.viewport.to);
    if (e10 == i10) for (let e11 of this.gutters) e11.update(t53) && (n10 = true);
    else {
      n10 = true;
      let s10 = [];
      for (let n11 of i10) {
        let i11 = e10.indexOf(n11);
        i11 < 0 ? s10.push(new au(this.view, n11)) : (this.gutters[i11].update(t53), s10.push(this.gutters[i11]));
      }
      for (let t54 of this.gutters) t54.dom.remove(), 0 > s10.indexOf(t54) && t54.destroy();
      for (let t54 of s10) this.dom.appendChild(t54.dom);
      this.gutters = s10;
    }
    return n10;
  }
  destroy() {
    for (let t53 of this.gutters) t53.destroy();
    this.dom.remove();
  }
}, { provide: (t53) => h5.scrollMargins.of((e10) => {
  let i10 = e10.plugin(t53);
  return i10 && 0 != i10.gutters.length && i10.fixed ? e10.textDirection == li.LTR ? { left: i10.dom.offsetWidth * e10.scaleX } : { right: i10.dom.offsetWidth * e10.scaleX } : null;
}) });
function aa(t53) {
  return Array.isArray(t53) ? t53 : [t53];
}
function ac(t53, e10, i10) {
  for (; t53.value && t53.from <= i10; ) t53.from == i10 && e10.push(t53.value), t53.next();
}
class ad {
  constructor(t53, e10, i10) {
    this.gutter = t53, this.height = i10, this.i = 0, this.cursor = tV.iter(t53.markers, e10.from);
  }
  addElement(t53, e10, i10) {
    let { gutter: n10 } = this, s10 = (e10.top - this.height) / t53.scaleY, o10 = e10.height / t53.scaleY;
    if (this.i == n10.elements.length) {
      let e11 = new af(t53, o10, s10, i10);
      n10.elements.push(e11), n10.dom.appendChild(e11.dom);
    } else n10.elements[this.i].update(t53, o10, s10, i10);
    this.height = e10.bottom, this.i++;
  }
  line(t53, e10, i10) {
    let n10 = [];
    ac(this.cursor, n10, e10.from), i10.length && (n10 = n10.concat(i10));
    let s10 = this.gutter.config.lineMarker(t53, e10, n10);
    s10 && n10.unshift(s10);
    let o10 = this.gutter;
    (0 != n10.length || o10.config.renderEmptyElements) && this.addElement(t53, e10, n10);
  }
  widget(t53, e10) {
    let i10 = this.gutter.config.widgetMarker(t53, e10.widget, e10);
    i10 && this.addElement(t53, e10, [i10]);
  }
  finish() {
    let t53 = this.gutter;
    for (; t53.elements.length > this.i; ) {
      let e10 = t53.elements.pop();
      t53.dom.removeChild(e10.dom), e10.destroy();
    }
  }
}
class au {
  constructor(t53, e10) {
    for (let i10 in this.view = t53, this.config = e10, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : ""), e10.domEventHandlers) this.dom.addEventListener(i10, (n10) => {
      let s10 = n10.target, o10;
      if (s10 != this.dom && this.dom.contains(s10)) {
        for (; s10.parentNode != this.dom; ) s10 = s10.parentNode;
        let t54 = s10.getBoundingClientRect();
        o10 = (t54.top + t54.bottom) / 2;
      } else o10 = n10.clientY;
      let r10 = t53.lineBlockAtHeight(o10 - t53.documentTop);
      e10.domEventHandlers[i10](t53, r10, n10) && n10.preventDefault();
    });
    this.markers = aa(e10.markers(t53)), e10.initialSpacer && (this.spacer = new af(t53, 0, 0, [e10.initialSpacer(t53)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t53) {
    let e10 = this.markers;
    if (this.markers = aa(this.config.markers(t53.view)), this.spacer && this.config.updateSpacer) {
      let e11 = this.config.updateSpacer(this.spacer.markers[0], t53);
      e11 != this.spacer.markers[0] && this.spacer.update(t53.view, 0, 0, [e11]);
    }
    let i10 = t53.view.viewport;
    return !tV.eq(this.markers, e10, i10.from, i10.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(t53);
  }
  destroy() {
    for (let t53 of this.elements) t53.destroy();
  }
}
class af {
  constructor(t53, e10, i10, n10) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t53, e10, i10, n10);
  }
  update(t53, e10, i10, n10) {
    this.height != e10 && (this.height = e10, this.dom.style.height = e10 + "px"), this.above != i10 && (this.dom.style.marginTop = (this.above = i10) ? i10 + "px" : ""), !function(t54, e11) {
      if (t54.length != e11.length) return false;
      for (let i11 = 0; i11 < t54.length; i11++) if (!t54[i11].compare(e11[i11])) return false;
      return true;
    }(this.markers, n10) && this.setMarkers(t53, n10);
  }
  setMarkers(t53, e10) {
    let i10 = "cm-gutterElement", n10 = this.dom.firstChild;
    for (let s10 = 0, o10 = 0; ; ) {
      let r10 = o10, l10 = s10 < e10.length ? e10[s10++] : null, h10 = false;
      if (l10) {
        let t54 = l10.elementClass;
        t54 && (i10 += " " + t54);
        for (let t55 = o10; t55 < this.markers.length; t55++) if (this.markers[t55].compare(l10)) {
          r10 = t55, h10 = true;
          break;
        }
      } else r10 = this.markers.length;
      for (; o10 < r10; ) {
        let t54 = this.markers[o10++];
        if (t54.toDOM) {
          t54.destroy(n10);
          let e11 = n10.nextSibling;
          n10.remove(), n10 = e11;
        }
      }
      if (!l10) break;
      l10.toDOM && (h10 ? n10 = n10.nextSibling : this.dom.insertBefore(l10.toDOM(t53), n10)), h10 && o10++;
    }
    this.dom.className = i10, this.markers = e10;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
let ag = 0;
class ap {
  constructor(t53, e10, i10) {
    this.set = t53, this.base = e10, this.modified = i10, this.id = ag++;
  }
  static define(t53) {
    if (null == t53 ? void 0 : t53.base) throw Error("Can not derive from a modified tag");
    let e10 = new ap([], null, []);
    if (e10.set.push(e10), t53) for (let i10 of t53.set) e10.set.push(i10);
    return e10;
  }
  static defineModifier() {
    let t53 = new av();
    return (e10) => e10.modified.indexOf(t53) > -1 ? e10 : av.get(e10.base || e10, e10.modified.concat(t53).sort((t54, e11) => t54.id - e11.id));
  }
}
let am = 0;
class av {
  constructor() {
    this.instances = [], this.id = am++;
  }
  static get(t53, e10) {
    if (!e10.length) return t53;
    let i10 = e10[0].instances.find((i11) => {
      var n11;
      return i11.base == t53 && (n11 = i11.modified, e10.length == n11.length && e10.every((t54, e11) => t54 == n11[e11]));
    });
    if (i10) return i10;
    let n10 = [], s10 = new ap(n10, t53, e10);
    for (let t54 of e10) t54.instances.push(s10);
    let o10 = function(t54) {
      let e11 = [[]];
      for (let i11 = 0; i11 < t54.length; i11++) for (let n11 = 0, s11 = e11.length; n11 < s11; n11++) e11.push(e11[n11].concat(t54[i11]));
      return e11.sort((t55, e12) => e12.length - t55.length);
    }(e10);
    for (let e11 of t53.set) if (!e11.modified.length) for (let t54 of o10) n10.push(av.get(e11, t54));
    return s10;
  }
}
function aw(t53) {
  let e10 = /* @__PURE__ */ Object.create(null);
  for (let i10 in t53) {
    let n10 = t53[i10];
    for (let t54 of (Array.isArray(n10) || (n10 = [n10]), i10.split(" "))) if (t54) {
      let i11 = [], s10 = 2, o10 = t54;
      for (let e11 = 0; ; ) {
        if ("..." == o10 && e11 > 0 && e11 + 3 == t54.length) {
          s10 = 1;
          break;
        }
        let n11 = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o10);
        if (!n11) throw RangeError("Invalid path: " + t54);
        if (i11.push("*" == n11[0] ? "" : '"' == n11[0][0] ? JSON.parse(n11[0]) : n11[0]), (e11 += n11[0].length) == t54.length) break;
        let r11 = t54[e11++];
        if (e11 == t54.length && "!" == r11) {
          s10 = 0;
          break;
        }
        if ("/" != r11) throw RangeError("Invalid path: " + t54);
        o10 = t54.slice(e11);
      }
      let r10 = i11.length - 1, l10 = i11[r10];
      if (!l10) throw RangeError("Invalid path: " + t54);
      let h10 = new ay(n10, s10, r10 > 0 ? i11.slice(0, r10) : null);
      e10[l10] = h10.sort(e10[l10]);
    }
  }
  return ab.add(e10);
}
let ab = new oW();
class ay {
  constructor(t53, e10, i10, n10) {
    this.tags = t53, this.mode = e10, this.context = i10, this.next = n10;
  }
  get opaque() {
    return 0 == this.mode;
  }
  get inherit() {
    return 1 == this.mode;
  }
  sort(t53) {
    return !t53 || t53.depth < this.depth ? (this.next = t53, this) : (t53.next = this.sort(t53.next), t53);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
function ax(t53, e10) {
  let i10 = /* @__PURE__ */ Object.create(null);
  for (let e11 of t53) if (Array.isArray(e11.tag)) for (let t54 of e11.tag) i10[t54.id] = e11.class;
  else i10[e11.tag.id] = e11.class;
  let { scope: n10, all: s10 = null } = e10 || {};
  return { style: (t54) => {
    let e11 = s10;
    for (let n11 of t54) for (let t55 of n11.set) {
      let n12 = i10[t55.id];
      if (n12) {
        e11 = e11 ? e11 + " " + n12 : n12;
        break;
      }
    }
    return e11;
  }, scope: n10 };
}
ay.empty = new ay([], 2, null);
class aS {
  constructor(t53, e10, i10) {
    this.at = t53, this.highlighters = e10, this.span = i10, this.class = "";
  }
  startSpan(t53, e10) {
    e10 != this.class && (this.flush(t53), t53 > this.at && (this.at = t53), this.class = e10);
  }
  flush(t53) {
    t53 > this.at && this.class && this.span(this.at, t53, this.class);
  }
  highlightRange(t53, e10, i10, n10, s10) {
    let { type: o10, from: r10, to: l10 } = t53;
    if (r10 >= i10 || l10 <= e10) return;
    o10.isTop && (s10 = this.highlighters.filter((t54) => !t54.scope || t54.scope(o10)));
    let h10 = n10, a10 = function(t54) {
      let e11 = t54.type.prop(ab);
      for (; e11 && e11.context && !t54.matchContext(e11.context); ) e11 = e11.next;
      return e11 || null;
    }(t53) || ay.empty, c10 = function(t54, e11) {
      let i11 = null;
      for (let n11 of t54) {
        let t55 = n11.style(e11);
        t55 && (i11 = i11 ? i11 + " " + t55 : t55);
      }
      return i11;
    }(s10, a10.tags);
    if (c10 && (h10 && (h10 += " "), h10 += c10, 1 == a10.mode && (n10 += (n10 ? " " : "") + c10)), this.startSpan(Math.max(e10, r10), h10), a10.opaque) return;
    let d10 = t53.tree && t53.tree.prop(oW.mounted);
    if (d10 && d10.overlay) {
      let o11 = t53.node.enter(d10.overlay[0].from + r10, 1), a11 = this.highlighters.filter((t54) => !t54.scope || t54.scope(d10.tree.type)), c11 = t53.firstChild();
      for (let u10 = 0, f10 = r10; ; u10++) {
        let g10 = u10 < d10.overlay.length ? d10.overlay[u10] : null, p10 = g10 ? g10.from + r10 : l10, m2 = Math.max(e10, f10), v2 = Math.min(i10, p10);
        if (m2 < v2 && c11) for (; t53.from < v2 && (this.highlightRange(t53, m2, v2, n10, s10), this.startSpan(Math.min(v2, t53.to), h10), !(t53.to >= p10) && t53.nextSibling()); ) ;
        if (!g10 || p10 > i10) break;
        (f10 = g10.to + r10) > e10 && (this.highlightRange(o11.cursor(), Math.max(e10, g10.from + r10), Math.min(i10, f10), "", a11), this.startSpan(Math.min(i10, f10), h10));
      }
      c11 && t53.parent();
    } else if (t53.firstChild()) {
      d10 && (n10 = "");
      do {
        if (t53.to <= e10) continue;
        if (t53.from >= i10) break;
        this.highlightRange(t53, e10, i10, n10, s10), this.startSpan(Math.min(i10, t53.to), h10);
      } while (t53.nextSibling());
      t53.parent();
    }
  }
}
let ak = ap.define, aM = ak(), aA = ak(), aC = ak(aA), aD = ak(aA), aO = ak(), aT = ak(aO), aE = ak(aO), aB = ak(), aR = ak(aB), aL = ak(), aP = ak(), aN = ak(), aH = ak(aN), aV = ak(), aI = { comment: aM, lineComment: ak(aM), blockComment: ak(aM), docComment: ak(aM), name: aA, variableName: ak(aA), typeName: aC, tagName: ak(aC), propertyName: aD, attributeName: ak(aD), className: ak(aA), labelName: ak(aA), namespace: ak(aA), macroName: ak(aA), literal: aO, string: aT, docString: ak(aT), character: ak(aT), attributeValue: ak(aT), number: aE, integer: ak(aE), float: ak(aE), bool: ak(aO), regexp: ak(aO), escape: ak(aO), color: ak(aO), url: ak(aO), keyword: aL, self: ak(aL), null: ak(aL), atom: ak(aL), unit: ak(aL), modifier: ak(aL), operatorKeyword: ak(aL), controlKeyword: ak(aL), definitionKeyword: ak(aL), moduleKeyword: ak(aL), operator: aP, derefOperator: ak(aP), arithmeticOperator: ak(aP), logicOperator: ak(aP), bitwiseOperator: ak(aP), compareOperator: ak(aP), updateOperator: ak(aP), definitionOperator: ak(aP), typeOperator: ak(aP), controlOperator: ak(aP), punctuation: aN, separator: ak(aN), bracket: aH, angleBracket: ak(aH), squareBracket: ak(aH), paren: ak(aH), brace: ak(aH), content: aB, heading: aR, heading1: ak(aR), heading2: ak(aR), heading3: ak(aR), heading4: ak(aR), heading5: ak(aR), heading6: ak(aR), contentSeparator: ak(aB), list: ak(aB), quote: ak(aB), emphasis: ak(aB), strong: ak(aB), link: ak(aB), monospace: ak(aB), strikethrough: ak(aB), inserted: ak(), deleted: ak(), changed: ak(), invalid: ak(), meta: aV, documentMeta: ak(aV), annotation: ak(aV), processingInstruction: ak(aV), definition: ap.defineModifier(), constant: ap.defineModifier(), function: ap.defineModifier(), standard: ap.defineModifier(), local: ap.defineModifier(), special: ap.defineModifier() }, aF = ax([{ tag: aI.link, class: "tok-link" }, { tag: aI.heading, class: "tok-heading" }, { tag: aI.emphasis, class: "tok-emphasis" }, { tag: aI.strong, class: "tok-strong" }, { tag: aI.keyword, class: "tok-keyword" }, { tag: aI.atom, class: "tok-atom" }, { tag: aI.bool, class: "tok-bool" }, { tag: aI.url, class: "tok-url" }, { tag: aI.labelName, class: "tok-labelName" }, { tag: aI.inserted, class: "tok-inserted" }, { tag: aI.deleted, class: "tok-deleted" }, { tag: aI.literal, class: "tok-literal" }, { tag: aI.string, class: "tok-string" }, { tag: aI.number, class: "tok-number" }, { tag: [aI.regexp, aI.escape, aI.special(aI.string)], class: "tok-string2" }, { tag: aI.variableName, class: "tok-variableName" }, { tag: aI.local(aI.variableName), class: "tok-variableName tok-local" }, { tag: aI.definition(aI.variableName), class: "tok-variableName tok-definition" }, { tag: aI.special(aI.variableName), class: "tok-variableName2" }, { tag: aI.definition(aI.propertyName), class: "tok-propertyName tok-definition" }, { tag: aI.typeName, class: "tok-typeName" }, { tag: aI.namespace, class: "tok-namespace" }, { tag: aI.className, class: "tok-className" }, { tag: aI.macroName, class: "tok-macroName" }, { tag: aI.propertyName, class: "tok-propertyName" }, { tag: aI.operator, class: "tok-operator" }, { tag: aI.comment, class: "tok-comment" }, { tag: aI.meta, class: "tok-meta" }, { tag: aI.invalid, class: "tok-invalid" }, { tag: aI.punctuation, class: "tok-punctuation" }]), aW = new oW(), az = new oW();
class aK {
  constructor(t53, e10, i10 = [], n10 = "") {
    this.data = t53, this.name = n10, tB.prototype.hasOwnProperty("tree") || Object.defineProperty(tB.prototype, "tree", { get() {
      return aj(this);
    } }), this.parser = e10, this.extension = [a0.of(this), tB.languageData.of((t54, e11, i11) => {
      let n11 = aq(t54, e11, i11), s10 = n11.type.prop(aW);
      if (!s10) return [];
      let o10 = t54.facet(s10), r10 = n11.type.prop(az);
      if (r10) {
        let s11 = n11.resolve(e11 - n11.from, i11);
        for (let e12 of r10) if (e12.test(s11, t54)) {
          let i12 = t54.facet(e12.facet);
          return "replace" == e12.type ? i12 : i12.concat(o10);
        }
      }
      return o10;
    })].concat(i10);
  }
  isActiveAt(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
    return aq(t53, e10, i10).type.prop(aW) == this.data;
  }
  findRegions(t53) {
    let e10 = t53.facet(a0);
    if ((null == e10 ? void 0 : e10.data) == this.data) return [{ from: 0, to: t53.doc.length }];
    if (!e10 || !e10.allowsNesting) return [];
    let i10 = [], n10 = (t54, e11) => {
      if (t54.prop(aW) == this.data) {
        i10.push({ from: e11, to: e11 + t54.length });
        return;
      }
      let s10 = t54.prop(oW.mounted);
      if (s10) {
        if (s10.tree.prop(aW) == this.data) {
          if (s10.overlay) for (let t55 of s10.overlay) i10.push({ from: t55.from + e11, to: t55.to + e11 });
          else i10.push({ from: e11, to: e11 + t54.length });
          return;
        }
        if (s10.overlay) {
          let t55 = i10.length;
          if (n10(s10.tree, s10.overlay[0].from + e11), i10.length > t55) return;
        }
      }
      for (let i11 = 0; i11 < t54.children.length; i11++) {
        let s11 = t54.children[i11];
        s11 instanceof oU && n10(s11, t54.positions[i11] + e11);
      }
    };
    return n10(aj(t53), 0), i10;
  }
  get allowsNesting() {
    return true;
  }
}
function aq(t53, e10, i10) {
  let n10 = t53.facet(a0), s10 = aj(t53).topNode;
  if (!n10 || n10.allowsNesting) for (let t54 = s10; t54; t54 = t54.enter(e10, i10, H.ExcludeBuffers)) t54.type.isTop && (s10 = t54);
  return s10;
}
aK.setState = tk.define();
class a_ extends aK {
  constructor(t53, e10, i10) {
    super(t53, e10, [], i10), this.parser = e10;
  }
  static define(t53) {
    var e10;
    let i10 = (e10 = t53.languageData, J.define({ combine: e10 ? (t54) => t54.concat(e10) : void 0 }));
    return new a_(i10, t53.parser.configure({ props: [aW.add((t54) => t54.isTop ? i10 : void 0)] }), t53.name);
  }
  configure(t53, e10) {
    return new a_(this.data, this.parser.configure(t53), e10 || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function aj(t53) {
  let e10 = t53.field(aK.state, false);
  return e10 ? e10.tree : oU.empty;
}
class aG {
  constructor(t53) {
    this.doc = t53, this.cursorPos = 0, this.string = "", this.cursor = t53.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t53) {
    return this.string = this.cursor.next(t53 - this.cursorPos).value, this.cursorPos = t53 + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t53) {
    return this.syncTo(t53), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(t53, e10) {
    let i10 = this.cursorPos - this.string.length;
    return t53 < i10 || e10 >= this.cursorPos ? this.doc.sliceString(t53, e10) : this.string.slice(t53 - i10, e10 - i10);
  }
}
let aU = null;
class a$ {
  constructor(t53, e10, i10 = [], n10, s10, o10, r10, l10) {
    this.parser = t53, this.state = e10, this.fragments = i10, this.tree = n10, this.treeLen = s10, this.viewport = o10, this.skipped = r10, this.scheduleOn = l10, this.parse = null, this.tempSkipped = [];
  }
  static create(t53, e10, i10) {
    return new a$(t53, e10, [], oU.empty, 0, i10, [], null);
  }
  startParse() {
    return this.parser.startParse(new aG(this.state.doc), this.fragments);
  }
  work(t53, e10) {
    return (null != e10 && e10 >= this.state.doc.length && (e10 = void 0), this.tree != oU.empty && this.isDone(null != e10 ? e10 : this.state.doc.length)) ? (this.takeTree(), true) : this.withContext(() => {
      var i10;
      if ("number" == typeof t53) {
        let e11 = Date.now() + t53;
        t53 = () => Date.now() > e11;
      }
      for (this.parse || (this.parse = this.startParse()), null != e10 && (null == this.parse.stoppedAt || this.parse.stoppedAt > e10) && e10 < this.state.doc.length && this.parse.stopAt(e10); ; ) {
        let n10 = this.parse.advance();
        if (n10) {
          if (this.fragments = this.withoutTempSkipped(re.addTree(n10, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (i10 = this.parse.stoppedAt) && void 0 !== i10 ? i10 : this.state.doc.length, this.tree = n10, this.parse = null, !(this.treeLen < (null != e10 ? e10 : this.state.doc.length))) return true;
          this.parse = this.startParse();
        }
        if (t53()) return false;
      }
    });
  }
  takeTree() {
    let t53, e10;
    this.parse && (t53 = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > t53) && this.parse.stopAt(t53), this.withContext(() => {
      for (; !(e10 = this.parse.advance()); ) ;
    }), this.treeLen = t53, this.tree = e10, this.fragments = this.withoutTempSkipped(re.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(t53) {
    let e10 = aU;
    aU = this;
    try {
      return t53();
    } finally {
      aU = e10;
    }
  }
  withoutTempSkipped(t53) {
    for (let e10; e10 = this.tempSkipped.pop(); ) t53 = aY(t53, e10.from, e10.to);
    return t53;
  }
  changes(t53, e10) {
    let { fragments: i10, tree: n10, treeLen: s10, viewport: o10, skipped: r10 } = this;
    if (this.takeTree(), !t53.empty) {
      let e11 = [];
      if (t53.iterChangedRanges((t54, i11, n11, s11) => e11.push({ fromA: t54, toA: i11, fromB: n11, toB: s11 })), i10 = re.applyChanges(i10, e11), n10 = oU.empty, s10 = 0, o10 = { from: t53.mapPos(o10.from, -1), to: t53.mapPos(o10.to, 1) }, this.skipped.length) for (let e12 of (r10 = [], this.skipped)) {
        let i11 = t53.mapPos(e12.from, 1), n11 = t53.mapPos(e12.to, -1);
        i11 < n11 && r10.push({ from: i11, to: n11 });
      }
    }
    return new a$(this.parser, e10, i10, n10, s10, o10, r10, this.scheduleOn);
  }
  updateViewport(t53) {
    if (this.viewport.from == t53.from && this.viewport.to == t53.to) return false;
    this.viewport = t53;
    let e10 = this.skipped.length;
    for (let e11 = 0; e11 < this.skipped.length; e11++) {
      let { from: i10, to: n10 } = this.skipped[e11];
      i10 < t53.to && n10 > t53.from && (this.fragments = aY(this.fragments, i10, n10), this.skipped.splice(e11--, 1));
    }
    return !(this.skipped.length >= e10) && (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(t53, e10) {
    this.skipped.push({ from: t53, to: e10 });
  }
  static getSkippingParser(t53) {
    return new class extends ri {
      createParse(e10, i10, n10) {
        let s10 = n10[0].from, o10 = n10[n10.length - 1].to;
        return { parsedPos: s10, advance() {
          let e11 = aU;
          if (e11) {
            for (let t54 of n10) e11.tempSkipped.push(t54);
            t53 && (e11.scheduleOn = e11.scheduleOn ? Promise.all([e11.scheduleOn, t53]) : t53);
          }
          return this.parsedPos = o10, new oU(oq.none, [], [], o10 - s10);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(t53) {
    t53 = Math.min(t53, this.state.doc.length);
    let e10 = this.fragments;
    return this.treeLen >= t53 && e10.length && 0 == e10[0].from && e10[0].to >= t53;
  }
  static get() {
    return aU;
  }
}
function aY(t53, e10, i10) {
  return re.applyChanges(t53, [{ fromA: e10, toA: i10, fromB: e10, toB: i10 }]);
}
class aX {
  constructor(t53) {
    this.context = t53, this.tree = t53.tree;
  }
  apply(t53) {
    if (!t53.docChanged && this.tree == this.context.tree) return this;
    let e10 = this.context.changes(t53.changes, t53.state), i10 = this.context.treeLen == t53.startState.doc.length ? void 0 : Math.max(t53.changes.mapPos(this.context.treeLen), e10.viewport.to);
    return e10.work(20, i10) || e10.takeTree(), new aX(e10);
  }
  static init(t53) {
    let e10 = Math.min(3e3, t53.doc.length), i10 = a$.create(t53.facet(a0).parser, t53, { from: 0, to: e10 });
    return i10.work(20, e10) || i10.takeTree(), new aX(i10);
  }
}
aK.state = tn.define({ create: aX.init, update(t53, e10) {
  for (let t54 of e10.effects) if (t54.is(aK.setState)) return t54.value;
  return e10.startState.facet(a0) != e10.state.facet(a0) ? aX.init(e10.state) : t53.apply(e10);
} });
let aJ = (t53) => {
  let e10 = setTimeout(() => t53(), 500);
  return () => clearTimeout(e10);
};
"undefined" != typeof requestIdleCallback && (aJ = (t53) => {
  let e10 = -1, i10 = setTimeout(() => {
    e10 = requestIdleCallback(t53, { timeout: 400 });
  }, 100);
  return () => e10 < 0 ? clearTimeout(i10) : cancelIdleCallback(e10);
});
let aQ = "undefined" != typeof navigator && (null === (V = navigator.scheduling) || void 0 === V ? void 0 : V.isInputPending) ? () => navigator.scheduling.isInputPending() : null, aZ = lR.fromClass(class {
  constructor(t53) {
    this.view = t53, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t53) {
    let e10 = this.view.state.field(aK.state).context;
    (e10.updateViewport(t53.view.viewport) || this.view.viewport.to > e10.treeLen) && this.scheduleWork(), (t53.docChanged || t53.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e10);
  }
  scheduleWork() {
    if (this.working) return;
    let { state: t53 } = this.view, e10 = t53.field(aK.state);
    e10.tree == e10.context.tree && e10.context.isDone(t53.doc.length) || (this.working = aJ(this.work));
  }
  work(t53) {
    this.working = null;
    let e10 = Date.now();
    if (this.chunkEnd < e10 && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e10 + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let { state: i10, viewport: { to: n10 } } = this.view, s10 = i10.field(aK.state);
    if (s10.tree == s10.context.tree && s10.context.isDone(n10 + 1e5)) return;
    let o10 = Date.now() + Math.min(this.chunkBudget, 100, t53 && !aQ ? Math.max(25, t53.timeRemaining() - 5) : 1e9), r10 = s10.context.treeLen < n10 && i10.doc.length > n10 + 1e3, l10 = s10.context.work(() => aQ && aQ() || Date.now() > o10, n10 + (r10 ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e10, (l10 || this.chunkBudget <= 0) && (s10.context.takeTree(), this.view.dispatch({ effects: aK.setState.of(new aX(s10.context)) })), this.chunkBudget > 0 && !(l10 && !r10) && this.scheduleWork(), this.checkAsyncSchedule(s10.context);
  }
  checkAsyncSchedule(t53) {
    t53.scheduleOn && (this.workScheduled++, t53.scheduleOn.then(() => this.scheduleWork()).catch((t54) => lO(this.view.state, t54)).then(() => this.workScheduled--), t53.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), a0 = J.define({ combine: (t53) => t53.length ? t53[0] : null, enables: (t53) => [aK.state, aZ, h5.contentAttributes.compute([t53], (e10) => {
  let i10 = e10.facet(t53);
  return i10 && i10.name ? { "data-language": i10.name } : {};
})] });
class a1 {
  constructor(t53, e10 = []) {
    this.language = t53, this.support = e10, this.extension = [t53, e10];
  }
}
let a2 = J.define(), a8 = J.define({ combine: (t53) => {
  if (!t53.length) return "  ";
  let e10 = t53[0];
  if (!e10 || /\S/.test(e10) || Array.from(e10).some((t54) => t54 != e10[0])) throw Error("Invalid indent unit: " + JSON.stringify(t53[0]));
  return e10;
} });
function a3(t53) {
  let e10 = t53.facet(a8);
  return 9 == e10.charCodeAt(0) ? t53.tabSize * e10.length : e10.length;
}
function a4(t53, e10) {
  let i10 = "", n10 = t53.tabSize, s10 = t53.facet(a8)[0];
  if ("	" == s10) {
    for (; e10 >= n10; ) i10 += "	", e10 -= n10;
    s10 = " ";
  }
  for (let t54 = 0; t54 < e10; t54++) i10 += s10;
  return i10;
}
function a5(t53, e10) {
  for (let i11 of (t53 instanceof tB && (t53 = new a9(t53)), t53.state.facet(a2))) {
    let n10 = i11(t53, e10);
    if (void 0 !== n10) return n10;
  }
  let i10 = aj(t53.state);
  return i10.length >= e10 ? function(t54, e11, i11) {
    let n10 = e11.resolveStack(i11), s10 = n10.node.enterUnfinishedNodesBefore(i11);
    if (s10 != n10.node) {
      let t55 = [];
      for (let e12 = s10; e12 != n10.node; e12 = e12.parent) t55.push(e12);
      for (let e12 = t55.length - 1; e12 >= 0; e12--) n10 = { node: t55[e12], next: n10 };
    }
    return a7(n10, t54, i11);
  }(t53, i10, e10) : null;
}
class a9 {
  constructor(t53, e10 = {}) {
    this.state = t53, this.options = e10, this.unit = a3(t53);
  }
  lineAt(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i10 = this.state.doc.lineAt(t53), { simulateBreak: n10, simulateDoubleBreak: s10 } = this.options;
    return null != n10 && n10 >= i10.from && n10 <= i10.to ? s10 && n10 == t53 ? { text: "", from: t53 } : (e10 < 0 ? n10 < t53 : n10 <= t53) ? { text: i10.text.slice(n10 - i10.from), from: n10 } : { text: i10.text.slice(0, n10 - i10.from), from: i10.from } : i10;
  }
  textAfterPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (this.options.simulateDoubleBreak && t53 == this.options.simulateBreak) return "";
    let { text: i10, from: n10 } = this.lineAt(t53, e10);
    return i10.slice(t53 - n10, Math.min(i10.length, t53 + 100 - n10));
  }
  column(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, { text: i10, from: n10 } = this.lineAt(t53, e10), s10 = this.countColumn(i10, t53 - n10), o10 = this.options.overrideIndentation ? this.options.overrideIndentation(n10) : -1;
    return o10 > -1 && (s10 += o10 - this.countColumn(i10, i10.search(/\S|$/))), s10;
  }
  countColumn(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53.length;
    return tY(t53, this.state.tabSize, e10);
  }
  lineIndent(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, { text: i10, from: n10 } = this.lineAt(t53, e10), s10 = this.options.overrideIndentation;
    if (s10) {
      let t54 = s10(n10);
      if (t54 > -1) return t54;
    }
    return this.countColumn(i10, i10.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
let a6 = new oW();
function a7(t53, e10, i10) {
  for (let n10 = t53; n10; n10 = n10.next) {
    let t54 = function(t55) {
      let e11 = t55.type.prop(a6);
      if (e11) return e11;
      let i11 = t55.firstChild, n11;
      if (i11 && (n11 = i11.type.prop(oW.closedBy))) {
        let e12 = t55.lastChild, i12 = e12 && n11.indexOf(e12.name) > -1;
        return (t56) => function(t57, e13, i13, n12, s10) {
          let o10 = t57.textAfter.match(/^\s*/)[0].length, r10 = s10 == t57.pos + o10, l10 = function(t58) {
            let e14 = t58.node, i14 = e14.childAfter(e14.from), n13 = e14.lastChild;
            if (!i14) return null;
            let s11 = t58.options.simulateBreak, o11 = t58.state.doc.lineAt(i14.from), r11 = null == s11 || s11 <= o11.from ? o11.to : Math.min(o11.to, s11);
            for (let t59 = i14.to; ; ) {
              let s12 = e14.childAfter(t59);
              if (!s12 || s12 == n13) return null;
              if (!s12.type.isSkipped) return s12.from < r11 ? i14 : null;
              t59 = s12.to;
            }
          }(t57);
          return l10 ? r10 ? t57.column(l10.from) : t57.column(l10.to) : t57.baseIndent + (r10 ? 0 : 1 * t57.unit);
        }(t56, 0, 0, 0, i12 && !(t56.pos == t56.options.simulateBreak && t56.options.simulateDoubleBreak) ? e12.from : void 0);
      }
      return null == t55.parent ? ct : null;
    }(n10.node);
    if (t54) return t54(ce.create(e10, i10, n10));
  }
  return 0;
}
function ct() {
  return 0;
}
class ce extends a9 {
  constructor(t53, e10, i10) {
    super(t53.state, t53.options), this.base = t53, this.pos = e10, this.context = i10;
  }
  get node() {
    return this.context.node;
  }
  static create(t53, e10, i10) {
    return new ce(t53, e10, i10);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(t53) {
    let e10 = this.state.doc.lineAt(t53.from);
    for (; ; ) {
      let i10 = t53.resolve(e10.from);
      for (; i10.parent && i10.parent.from == i10.from; ) i10 = i10.parent;
      if (function(t54, e11) {
        for (let i11 = e11; i11; i11 = i11.parent) if (t54 == i11) return true;
        return false;
      }(i10, t53)) break;
      e10 = this.state.doc.lineAt(i10.from);
    }
    return this.lineIndent(e10.from);
  }
  continue() {
    return a7(this.context.next, this.base, this.pos);
  }
}
function ci() {
  let { except: t53, units: e10 = 1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return (i10) => {
    let n10 = t53 && t53.test(i10.textAfter);
    return i10.baseIndent + (n10 ? 0 : e10 * i10.unit);
  };
}
let cn = J.define(), cs = new oW();
function co(t53) {
  let e10 = t53.firstChild, i10 = t53.lastChild;
  return e10 && e10.to < i10.from ? { from: e10.to, to: i10.type.isError ? t53.to : i10.from } : null;
}
function cr(t53, e10, i10) {
  for (let n10 of t53.facet(cn)) {
    let s10 = n10(t53, e10, i10);
    if (s10) return s10;
  }
  return function(t54, e11, i11) {
    let n10 = aj(t54);
    if (n10.length < i11) return null;
    let s10 = n10.resolveStack(i11, 1), o10 = null;
    for (let r10 = s10; r10; r10 = r10.next) {
      let s11 = r10.node;
      if (s11.to <= i11 || s11.from > i11) continue;
      if (o10 && s11.from < e11) break;
      let l10 = s11.type.prop(cs);
      if (l10 && (s11.to < n10.length - 50 || n10.length == t54.doc.length || !function(t55) {
        let e12 = t55.lastChild;
        return e12 && e12.to == t55.to && e12.type.isError;
      }(s11))) {
        let n11 = l10(s11, t54);
        n11 && n11.from <= i11 && n11.from >= e11 && n11.to > i11 && (o10 = n11);
      }
    }
    return o10;
  }(t53, e10, i10);
}
function cl(t53, e10) {
  let i10 = e10.mapPos(t53.from, 1), n10 = e10.mapPos(t53.to, -1);
  return i10 >= n10 ? void 0 : { from: i10, to: n10 };
}
let ch = tk.define({ map: cl }), ca = tk.define({ map: cl });
function cc(t53) {
  let e10 = [];
  for (let { head: i10 } of t53.state.selection.ranges) e10.some((t54) => t54.from <= i10 && t54.to >= i10) || e10.push(t53.lineBlockAt(i10));
  return e10;
}
let cd = tn.define({ create: () => r8.none, update(t53, e10) {
  for (let i10 of (t53 = t53.map(e10.changes), e10.effects)) if (i10.is(ch) && !function(t54, e11, i11) {
    let n10 = false;
    return t54.between(e11, e11, (t55, s10) => {
      t55 == e11 && s10 == i11 && (n10 = true);
    }), n10;
  }(t53, i10.value.from, i10.value.to)) {
    let { preparePlaceholder: n10 } = e10.state.facet(cv), s10 = n10 ? r8.replace({ widget: new cy(n10(e10.state, i10.value)) }) : cb;
    t53 = t53.update({ add: [s10.range(i10.value.from, i10.value.to)] });
  } else i10.is(ca) && (t53 = t53.update({ filter: (t54, e11) => i10.value.from != t54 || i10.value.to != e11, filterFrom: i10.value.from, filterTo: i10.value.to }));
  if (e10.selection) {
    let i10 = false, { head: n10 } = e10.selection.main;
    t53.between(n10, n10, (t54, e11) => {
      t54 < n10 && e11 > n10 && (i10 = true);
    }), i10 && (t53 = t53.update({ filterFrom: n10, filterTo: n10, filter: (t54, e11) => e11 <= n10 || t54 >= n10 }));
  }
  return t53;
}, provide: (t53) => h5.decorations.from(t53), toJSON(t53, e10) {
  let i10 = [];
  return t53.between(0, e10.doc.length, (t54, e11) => {
    i10.push(t54, e11);
  }), i10;
}, fromJSON(t53) {
  if (!Array.isArray(t53) || t53.length % 2) throw RangeError("Invalid JSON for fold state");
  let e10 = [];
  for (let i10 = 0; i10 < t53.length; ) {
    let n10 = t53[i10++], s10 = t53[i10++];
    if ("number" != typeof n10 || "number" != typeof s10) throw RangeError("Invalid JSON for fold state");
    e10.push(cb.range(n10, s10));
  }
  return r8.set(e10, true);
} });
function cu(t53, e10, i10) {
  var n10;
  let s10 = null;
  return null === (n10 = t53.field(cd, false)) || void 0 === n10 || n10.between(e10, i10, (t54, e11) => {
    (!s10 || s10.from > t54) && (s10 = { from: t54, to: e11 });
  }), s10;
}
function cf(t53, e10) {
  return t53.field(cd, false) ? e10 : e10.concat(tk.appendConfig.of([cd, cM]));
}
function cg(t53, e10) {
  let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], n10 = t53.state.doc.lineAt(e10.from).number, s10 = t53.state.doc.lineAt(e10.to).number;
  return h5.announce.of(`${t53.state.phrase(i10 ? "Folded lines" : "Unfolded lines")} ${n10} ${t53.state.phrase("to")} ${s10}.`);
}
let cp = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: (t53) => {
  for (let e10 of cc(t53)) {
    let i10 = cr(t53.state, e10.from, e10.to);
    if (i10) return t53.dispatch({ effects: cf(t53.state, [ch.of(i10), cg(t53, i10)]) }), true;
  }
  return false;
} }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: (t53) => {
  if (!t53.state.field(cd, false)) return false;
  let e10 = [];
  for (let i10 of cc(t53)) {
    let n10 = cu(t53.state, i10.from, i10.to);
    n10 && e10.push(ca.of(n10), cg(t53, n10, false));
  }
  return e10.length && t53.dispatch({ effects: e10 }), e10.length > 0;
} }, { key: "Ctrl-Alt-[", run: (t53) => {
  let { state: e10 } = t53, i10 = [];
  for (let n10 = 0; n10 < e10.doc.length; ) {
    let s10 = t53.lineBlockAt(n10), o10 = cr(e10, s10.from, s10.to);
    o10 && i10.push(ch.of(o10)), n10 = (o10 ? t53.lineBlockAt(o10.to) : s10).to + 1;
  }
  return i10.length && t53.dispatch({ effects: cf(t53.state, i10) }), !!i10.length;
} }, { key: "Ctrl-Alt-]", run: (t53) => {
  let e10 = t53.state.field(cd, false);
  if (!e10 || !e10.size) return false;
  let i10 = [];
  return e10.between(0, t53.state.doc.length, (t54, e11) => {
    i10.push(ca.of({ from: t54, to: e11 }));
  }), t53.dispatch({ effects: i10 }), true;
} }], cm = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "…" }, cv = J.define({ combine: (t53) => tR(t53, cm) });
function cw(t53, e10) {
  let { state: i10 } = t53, n10 = i10.facet(cv), s10 = (e11) => {
    let i11 = t53.lineBlockAt(t53.posAtDOM(e11.target)), n11 = cu(t53.state, i11.from, i11.to);
    n11 && t53.dispatch({ effects: ca.of(n11) }), e11.preventDefault();
  };
  if (n10.placeholderDOM) return n10.placeholderDOM(t53, s10, e10);
  let o10 = document.createElement("span");
  return o10.textContent = n10.placeholderText, o10.setAttribute("aria-label", i10.phrase("folded code")), o10.title = i10.phrase("unfold"), o10.className = "cm-foldPlaceholder", o10.onclick = s10, o10;
}
let cb = r8.replace({ widget: new class extends r1 {
  toDOM(t53) {
    return cw(t53, null);
  }
}() });
class cy extends r1 {
  constructor(t53) {
    super(), this.value = t53;
  }
  eq(t53) {
    return this.value == t53.value;
  }
  toDOM(t53) {
    return cw(t53, this.value);
  }
}
let cx = { openText: "⌄", closedText: "›", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class cS extends an {
  constructor(t53, e10) {
    super(), this.config = t53, this.open = e10;
  }
  eq(t53) {
    return this.config == t53.config && this.open == t53.open;
  }
  toDOM(t53) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let e10 = document.createElement("span");
    return e10.textContent = this.open ? this.config.openText : this.config.closedText, e10.title = t53.state.phrase(this.open ? "Fold line" : "Unfold line"), e10;
  }
}
function ck() {
  var t53;
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i10 = Object.assign(Object.assign({}, cx), e10), n10 = new cS(i10, true), s10 = new cS(i10, false), o10 = lR.fromClass(class {
    constructor(t54) {
      this.from = t54.viewport.from, this.markers = this.buildMarkers(t54);
    }
    update(t54) {
      (t54.docChanged || t54.viewportChanged || t54.startState.facet(a0) != t54.state.facet(a0) || t54.startState.field(cd, false) != t54.state.field(cd, false) || aj(t54.startState) != aj(t54.state) || i10.foldingChanged(t54)) && (this.markers = this.buildMarkers(t54.view));
    }
    buildMarkers(t54) {
      let e11 = new tI();
      for (let i11 of t54.viewportLineBlocks) {
        let o11 = cu(t54.state, i11.from, i11.to) ? s10 : cr(t54.state, i11.from, i11.to) ? n10 : null;
        o11 && e11.add(i11.from, i11.from, o11);
      }
      return e11.finish();
    }
  }), { domEventHandlers: r10 } = i10;
  return [o10, (t53 = { class: "cm-foldGutter", markers(t54) {
    var e11;
    return (null === (e11 = t54.plugin(o10)) || void 0 === e11 ? void 0 : e11.markers) || tV.empty;
  }, initialSpacer: () => new cS(i10, false), domEventHandlers: Object.assign(Object.assign({}, r10), { click: (t54, e11, i11) => {
    if (r10.click && r10.click(t54, e11, i11)) return true;
    let n11 = cu(t54.state, e11.from, e11.to);
    if (n11) return t54.dispatch({ effects: ca.of(n11) }), true;
    let s11 = cr(t54.state, e11.from, e11.to);
    return !!s11 && (t54.dispatch({ effects: ch.of(s11) }), true);
  } }) }, [[ah], ar.of(Object.assign(Object.assign({}, ao), t53))]), [cd, cM]];
}
let cM = h5.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class cA {
  constructor(t53, e10) {
    let i10;
    function n10(t54) {
      let e11 = t0.newName();
      return (i10 || (i10 = /* @__PURE__ */ Object.create(null)))["." + e11] = t54, e11;
    }
    this.specs = t53;
    let s10 = "string" == typeof e10.all ? e10.all : e10.all ? n10(e10.all) : void 0, o10 = e10.scope;
    this.scope = o10 instanceof aK ? (t54) => t54.prop(aW) == o10.data : o10 ? (t54) => t54 == o10 : void 0, this.style = ax(t53.map((t54) => ({ tag: t54.tag, class: t54.class || n10(Object.assign({}, t54, { tag: null })) })), { all: s10 }).style, this.module = i10 ? new t0(i10) : null, this.themeType = e10.themeType;
  }
  static define(t53, e10) {
    return new cA(t53, e10 || {});
  }
}
let cC = J.define(), cD = J.define({ combine: (t53) => t53.length ? [t53[0]] : null });
function cO(t53) {
  let e10 = t53.facet(cC);
  return e10.length ? e10 : t53.facet(cD);
}
function cT(t53, e10) {
  let i10 = [cE], n10;
  return t53 instanceof cA && (t53.module && i10.push(h5.styleModule.of(t53.module)), n10 = t53.themeType), (null == e10 ? void 0 : e10.fallback) ? i10.push(cD.of(t53)) : n10 ? i10.push(cC.computeN([h5.darkTheme], (e11) => e11.facet(h5.darkTheme) == ("dark" == n10) ? [t53] : [])) : i10.push(cC.of(t53)), i10;
}
let cE = tr.high(lR.fromClass(class {
  constructor(t53) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = aj(t53.state), this.decorations = this.buildDeco(t53, cO(t53.state)), this.decoratedTo = t53.viewport.to;
  }
  update(t53) {
    let e10 = aj(t53.state), i10 = cO(t53.state), n10 = i10 != cO(t53.startState), { viewport: s10 } = t53.view, o10 = t53.changes.mapPos(this.decoratedTo, 1);
    e10.length < s10.to && !n10 && e10.type == this.tree.type && o10 >= s10.to ? (this.decorations = this.decorations.map(t53.changes), this.decoratedTo = o10) : (e10 != this.tree || t53.viewportChanged || n10) && (this.tree = e10, this.decorations = this.buildDeco(t53.view, i10), this.decoratedTo = s10.to);
  }
  buildDeco(t53, e10) {
    if (!e10 || !this.tree.length) return r8.none;
    let i10 = new tI();
    for (let { from: n10, to: s10 } of t53.visibleRanges) !function(t54, e11, i11) {
      let n11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t54.length, o10 = new aS(n11, Array.isArray(e11) ? e11 : [e11], i11);
      o10.highlightRange(t54.cursor(), n11, s11, "", o10.highlighters), o10.flush(s11);
    }(this.tree, e10, (t54, e11, n11) => {
      i10.add(t54, e11, this.markCache[n11] || (this.markCache[n11] = r8.mark({ class: n11 })));
    }, n10, s10);
    return i10.finish();
  }
}, { decorations: (t53) => t53.decorations })), cB = h5.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), cR = "()[]{}", cL = J.define({ combine: (t53) => tR(t53, { afterCursor: true, brackets: cR, maxScanDistance: 1e4, renderMatch: cH }) }), cP = r8.mark({ class: "cm-matchingBracket" }), cN = r8.mark({ class: "cm-nonmatchingBracket" });
function cH(t53) {
  let e10 = [], i10 = t53.matched ? cP : cN;
  return e10.push(i10.range(t53.start.from, t53.start.to)), t53.end && e10.push(i10.range(t53.end.from, t53.end.to)), e10;
}
let cV = [tn.define({ create: () => r8.none, update(t53, e10) {
  if (!e10.docChanged && !e10.selection) return t53;
  let i10 = [], n10 = e10.state.facet(cL);
  for (let t54 of e10.state.selection.ranges) {
    if (!t54.empty) continue;
    let s10 = cK(e10.state, t54.head, -1, n10) || t54.head > 0 && cK(e10.state, t54.head - 1, 1, n10) || n10.afterCursor && (cK(e10.state, t54.head, 1, n10) || t54.head < e10.state.doc.length && cK(e10.state, t54.head + 1, -1, n10));
    s10 && (i10 = i10.concat(n10.renderMatch(s10, e10.state)));
  }
  return r8.set(i10, true);
}, provide: (t53) => h5.decorations.from(t53) }), cB];
function cI() {
  let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return [cL.of(t53), cV];
}
let cF = new oW();
function cW(t53, e10, i10) {
  let n10 = t53.prop(e10 < 0 ? oW.openedBy : oW.closedBy);
  if (n10) return n10;
  if (1 == t53.name.length) {
    let n11 = i10.indexOf(t53.name);
    if (n11 > -1 && n11 % 2 == (e10 < 0 ? 1 : 0)) return [i10[n11 + e10]];
  }
  return null;
}
function cz(t53) {
  let e10 = t53.type.prop(cF);
  return e10 ? e10(t53.node) : t53;
}
function cK(t53, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s10 = n10.maxScanDistance || 1e4, o10 = n10.brackets || cR, r10 = aj(t53), l10 = r10.resolveInner(e10, i10);
  for (let t54 = l10; t54; t54 = t54.parent) {
    let n11 = cW(t54.type, i10, o10);
    if (n11 && t54.from < t54.to) {
      let s11 = cz(t54);
      if (s11 && (i10 > 0 ? e10 >= s11.from && e10 < s11.to : e10 > s11.from && e10 <= s11.to)) return function(t55, e11, i11, n12, s12, o11, r11) {
        let l11 = n12.parent, h10 = { from: s12.from, to: s12.to }, a10 = 0, c10 = null == l11 ? void 0 : l11.cursor();
        if (c10 && (i11 < 0 ? c10.childBefore(n12.from) : c10.childAfter(n12.to))) do
          if (i11 < 0 ? c10.to <= n12.from : c10.from >= n12.to) {
            if (0 == a10 && o11.indexOf(c10.type.name) > -1 && c10.from < c10.to) {
              let t56 = cz(c10);
              return { start: h10, end: t56 ? { from: t56.from, to: t56.to } : void 0, matched: true };
            }
            if (cW(c10.type, i11, r11)) a10++;
            else if (cW(c10.type, -i11, r11)) {
              if (0 == a10) {
                let t56 = cz(c10);
                return { start: h10, end: t56 && t56.from < t56.to ? { from: t56.from, to: t56.to } : void 0, matched: false };
              }
              a10--;
            }
          }
        while (i11 < 0 ? c10.prevSibling() : c10.nextSibling());
        return { start: h10, matched: false };
      }(0, 0, i10, t54, s11, n11, o10);
    }
  }
  return function(t54, e11, i11, n11, s11, o11, r11) {
    let l11 = i11 < 0 ? t54.sliceDoc(e11 - 1, e11) : t54.sliceDoc(e11, e11 + 1), h10 = r11.indexOf(l11);
    if (h10 < 0 || h10 % 2 == 0 != i11 > 0) return null;
    let a10 = { from: i11 < 0 ? e11 - 1 : e11, to: i11 > 0 ? e11 + 1 : e11 }, c10 = t54.doc.iterRange(e11, i11 > 0 ? t54.doc.length : 0), d10 = 0;
    for (let t55 = 0; !c10.next().done && t55 <= o11; ) {
      let o12 = c10.value;
      i11 < 0 && (t55 += o12.length);
      let l12 = e11 + t55 * i11;
      for (let t56 = i11 > 0 ? 0 : o12.length - 1, e12 = i11 > 0 ? o12.length : -1; t56 != e12; t56 += i11) {
        let e13 = r11.indexOf(o12[t56]);
        if (!(e13 < 0) && n11.resolveInner(l12 + t56, 1).type == s11) {
          if (e13 % 2 == 0 == i11 > 0) d10++;
          else {
            if (1 == d10) return { start: a10, end: { from: l12 + t56, to: l12 + t56 + 1 }, matched: e13 >> 1 == h10 >> 1 };
            d10--;
          }
        }
      }
      i11 > 0 && (t55 += o12.length);
    }
    return c10.done ? { start: a10, matched: false } : null;
  }(t53, e10, i10, r10, l10.type, s10, o10);
}
let cq = /* @__PURE__ */ Object.create(null), c_ = [oq.none], cj = [], cG = /* @__PURE__ */ Object.create(null), cU = /* @__PURE__ */ Object.create(null);
for (let [t53, e10] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) cU[t53] = function(t54, e11) {
  let i10 = [];
  for (let n11 of e11.split(" ")) {
    let e12 = [];
    for (let i11 of n11.split(".")) {
      let n12 = t54[i11] || aI[i11];
      n12 ? "function" == typeof n12 ? e12.length ? e12 = e12.map(n12) : c$(i11, `Modifier ${i11} used at start of tag`) : e12.length ? c$(i11, `Tag ${i11} used as modifier`) : e12 = Array.isArray(n12) ? n12 : [n12] : c$(i11, `Unknown highlighting tag ${i11}`);
    }
    for (let t55 of e12) i10.push(t55);
  }
  if (!i10.length) return 0;
  let n10 = e11.replace(/ /g, "_"), s10 = n10 + " " + i10.map((t55) => t55.id), o10 = cG[s10];
  if (o10) return o10.id;
  let r10 = cG[s10] = oq.define({ id: c_.length, name: n10, props: [aw({ [n10]: i10 })] });
  return c_.push(r10), r10.id;
}(cq, e10);
function c$(t53, e10) {
  cj.indexOf(t53) > -1 || (cj.push(t53), console.warn(e10));
}
li.RTL, li.LTR;
class cY {
  constructor(t53, e10, i10, n10) {
    this.state = t53, this.pos = e10, this.explicit = i10, this.view = n10, this.abortListeners = [];
  }
  tokenBefore(t53) {
    let e10 = aj(this.state).resolveInner(this.pos, -1);
    for (; e10 && 0 > t53.indexOf(e10.name); ) e10 = e10.parent;
    return e10 ? { from: e10.from, to: this.pos, text: this.state.sliceDoc(e10.from, this.pos), type: e10.type } : null;
  }
  matchBefore(t53) {
    let e10 = this.state.doc.lineAt(this.pos), i10 = Math.max(e10.from, this.pos - 250), n10 = e10.text.slice(i10 - e10.from, this.pos - e10.from), s10 = n10.search(cZ(t53, false));
    return s10 < 0 ? null : { from: i10 + s10, to: this.pos, text: n10.slice(s10) };
  }
  get aborted() {
    return null == this.abortListeners;
  }
  addEventListener(t53, e10) {
    "abort" == t53 && this.abortListeners && this.abortListeners.push(e10);
  }
}
function cX(t53) {
  let e10 = Object.keys(t53).join(""), i10 = /\w/.test(e10);
  return i10 && (e10 = e10.replace(/\w/g, "")), `[${i10 ? "\\w" : ""}${e10.replace(/[^\w\s]/g, "\\$&")}]`;
}
class cJ {
  constructor(t53, e10, i10, n10) {
    this.completion = t53, this.source = e10, this.match = i10, this.score = n10;
  }
}
function cQ(t53) {
  return t53.selection.main.from;
}
function cZ(t53, e10) {
  var i10;
  let { source: n10 } = t53, s10 = e10 && "^" != n10[0], o10 = "$" != n10[n10.length - 1];
  return s10 || o10 ? RegExp(`${s10 ? "^" : ""}(?:${n10})${o10 ? "$" : ""}`, null !== (i10 = t53.flags) && void 0 !== i10 ? i10 : t53.ignoreCase ? "i" : "") : t53;
}
let c0 = ty.define(), c1 = /* @__PURE__ */ new WeakMap();
function c2(t53) {
  if (!Array.isArray(t53)) return t53;
  let e10 = c1.get(t53);
  return e10 || c1.set(t53, e10 = function(t54) {
    let e11 = t54.map((t55) => "string" == typeof t55 ? { label: t55 } : t55), [i10, n10] = e11.every((t55) => /^\w+$/.test(t55.label)) ? [/\w*$/, /\w+$/] : function(t55) {
      let e12 = /* @__PURE__ */ Object.create(null), i11 = /* @__PURE__ */ Object.create(null);
      for (let { label: n12 } of t55) {
        e12[n12[0]] = true;
        for (let t56 = 1; t56 < n12.length; t56++) i11[n12[t56]] = true;
      }
      let n11 = cX(e12) + cX(i11) + "*$";
      return [RegExp("^" + n11), new RegExp(n11)];
    }(e11);
    return (t55) => {
      let s10 = t55.matchBefore(n10);
      return s10 || t55.explicit ? { from: s10 ? s10.from : t55.pos, options: e11, validFor: i10 } : null;
    };
  }(t53)), e10;
}
let c8 = tk.define(), c3 = tk.define();
class c4 {
  constructor(t53) {
    this.pattern = t53, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e10 = 0; e10 < t53.length; ) {
      let i10 = b(t53, e10), n10 = x(i10);
      this.chars.push(i10);
      let s10 = t53.slice(e10, e10 + n10), o10 = s10.toUpperCase();
      this.folded.push(b(o10 == s10 ? s10.toLowerCase() : o10, 0)), e10 += n10;
    }
    this.astral = t53.length != this.chars.length;
  }
  ret(t53, e10) {
    return this.score = t53, this.matched = e10, this;
  }
  match(t53) {
    if (0 == this.pattern.length) return this.ret(-100, []);
    if (t53.length < this.pattern.length) return null;
    let { chars: e10, folded: i10, any: n10, precise: s10, byWord: o10 } = this;
    if (1 == e10.length) {
      let n11 = b(t53, 0), s11 = x(n11), o11 = s11 == t53.length ? 0 : -100;
      if (n11 == e10[0]) ;
      else {
        if (n11 != i10[0]) return null;
        o11 += -200;
      }
      return this.ret(o11, [0, s11]);
    }
    let r10 = t53.indexOf(this.pattern);
    if (0 == r10) return this.ret(t53.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let l10 = e10.length, h10 = 0;
    if (r10 < 0) {
      for (let s11 = 0, o11 = Math.min(t53.length, 200); s11 < o11 && h10 < l10; ) {
        let o12 = b(t53, s11);
        (o12 == e10[h10] || o12 == i10[h10]) && (n10[h10++] = s11), s11 += x(o12);
      }
      if (h10 < l10) return null;
    }
    let a10 = 0, c10 = 0, d10 = false, u10 = 0, f10 = -1, g10 = -1, p10 = /[a-z]/.test(t53), m2 = true;
    for (let n11 = 0, h11 = Math.min(t53.length, 200), v2 = 0; n11 < h11 && c10 < l10; ) {
      let h12 = b(t53, n11);
      r10 < 0 && (a10 < l10 && h12 == e10[a10] && (s10[a10++] = n11), u10 < l10 && (h12 == e10[u10] || h12 == i10[u10] ? (0 == u10 && (f10 = n11), g10 = n11 + 1, u10++) : u10 = 0));
      let w2, S2 = h12 < 255 ? h12 >= 48 && h12 <= 57 || h12 >= 97 && h12 <= 122 ? 2 : h12 >= 65 && h12 <= 90 ? 1 : 0 : (w2 = y(h12)) != w2.toLowerCase() ? 1 : w2 != w2.toUpperCase() ? 2 : 0;
      (!n11 || 1 == S2 && p10 || 0 == v2 && 0 != S2) && (e10[c10] == h12 || i10[c10] == h12 && (d10 = true) ? o10[c10++] = n11 : o10.length && (m2 = false)), v2 = S2, n11 += x(h12);
    }
    return c10 == l10 && 0 == o10[0] && m2 ? this.result(-100 + (d10 ? -200 : 0), o10, t53) : u10 == l10 && 0 == f10 ? this.ret(-200 - t53.length + (g10 == t53.length ? 0 : -100), [0, g10]) : r10 > -1 ? this.ret(-700 - t53.length, [r10, r10 + this.pattern.length]) : u10 == l10 ? this.ret(-900 - t53.length, [f10, g10]) : c10 == l10 ? this.result(-100 + (d10 ? -200 : 0) + -700 + (m2 ? 0 : -1100), o10, t53) : 2 == e10.length ? null : this.result((n10[0] ? -700 : 0) + -200 + -1100, n10, t53);
  }
  result(t53, e10, i10) {
    let n10 = [], s10 = 0;
    for (let t54 of e10) {
      let e11 = t54 + (this.astral ? x(b(i10, t54)) : 1);
      s10 && n10[s10 - 1] == t54 ? n10[s10 - 1] = e11 : (n10[s10++] = t54, n10[s10++] = e11);
    }
    return this.ret(t53 - i10.length, n10);
  }
}
class c5 {
  constructor(t53) {
    this.pattern = t53, this.matched = [], this.score = 0, this.folded = t53.toLowerCase();
  }
  match(t53) {
    if (t53.length < this.pattern.length) return null;
    let e10 = t53.slice(0, this.pattern.length), i10 = e10 == this.pattern ? 0 : e10.toLowerCase() == this.folded ? -200 : null;
    return null == i10 ? null : (this.matched = [0, e10.length], this.score = i10 + (t53.length == this.pattern.length ? 0 : -100), this);
  }
}
let c9 = J.define({ combine: (t53) => tR(t53, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: c7, filterStrict: false, compareCompletions: (t54, e10) => t54.label.localeCompare(e10.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (t54, e10) => t54 && e10, closeOnBlur: (t54, e10) => t54 && e10, icons: (t54, e10) => t54 && e10, tooltipClass: (t54, e10) => (i10) => c6(t54(i10), e10(i10)), optionClass: (t54, e10) => (i10) => c6(t54(i10), e10(i10)), addToOptions: (t54, e10) => t54.concat(e10), filterStrict: (t54, e10) => t54 || e10 }) });
function c6(t53, e10) {
  return t53 ? e10 ? t53 + " " + e10 : t53 : e10;
}
function c7(t53, e10, i10, n10, s10, o10) {
  let r10 = t53.textDirection == e9.RTL, l10 = r10, h10 = false, a10 = "top", c10, d10, u10 = e10.left - s10.left, f10 = s10.right - e10.right, g10 = n10.right - n10.left, p10 = n10.bottom - n10.top;
  if (l10 && u10 < Math.min(g10, f10) ? l10 = false : !l10 && f10 < Math.min(g10, u10) && (l10 = true), g10 <= (l10 ? u10 : f10)) c10 = Math.max(s10.top, Math.min(i10.top, s10.bottom - p10)) - e10.top, d10 = Math.min(400, l10 ? u10 : f10);
  else {
    h10 = true, d10 = Math.min(400, (r10 ? e10.right : s10.right - e10.left) - 30);
    let t54 = s10.bottom - e10.bottom;
    t54 >= p10 || t54 > e10.top ? c10 = i10.bottom - e10.top : (a10 = "bottom", c10 = e10.bottom - i10.top);
  }
  let m2 = (e10.bottom - e10.top) / o10.offsetHeight, v2 = (e10.right - e10.left) / o10.offsetWidth;
  return { style: `${a10}: ${c10 / m2}px; max-width: ${d10 / v2}px`, class: "cm-completionInfo-" + (h10 ? r10 ? "left-narrow" : "right-narrow" : l10 ? "left" : "right") };
}
function dt(t53, e10, i10) {
  if (t53 <= i10) return { from: 0, to: t53 };
  if (e10 < 0 && (e10 = 0), e10 <= t53 >> 1) {
    let t54 = Math.floor(e10 / i10);
    return { from: t54 * i10, to: (t54 + 1) * i10 };
  }
  let n10 = Math.floor((t53 - e10) / i10);
  return { from: t53 - (n10 + 1) * i10, to: t53 - n10 * i10 };
}
class de {
  constructor(t53, e10, i10) {
    let n10;
    this.view = t53, this.stateField = e10, this.applyCompletion = i10, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (t54) => this.placeInfo(t54), key: this }, this.space = null, this.currentClass = "";
    let s10 = t53.state.field(e10), { options: o10, selected: r10 } = s10.open, l10 = t53.state.facet(c9);
    this.optionContent = (n10 = l10.addToOptions.slice(), l10.icons && n10.push({ render(t54) {
      let e11 = document.createElement("div");
      return e11.classList.add("cm-completionIcon"), t54.type && e11.classList.add(...t54.type.split(/\s+/g).map((t55) => "cm-completionIcon-" + t55)), e11.setAttribute("aria-hidden", "true"), e11;
    }, position: 20 }), n10.push({ render(t54, e11, i11, n11) {
      let s11 = document.createElement("span");
      s11.className = "cm-completionLabel";
      let o11 = t54.displayLabel || t54.label, r11 = 0;
      for (let t55 = 0; t55 < n11.length; ) {
        let e12 = n11[t55++], i12 = n11[t55++];
        e12 > r11 && s11.appendChild(document.createTextNode(o11.slice(r11, e12)));
        let l11 = s11.appendChild(document.createElement("span"));
        l11.appendChild(document.createTextNode(o11.slice(e12, i12))), l11.className = "cm-completionMatchedText", r11 = i12;
      }
      return r11 < o11.length && s11.appendChild(document.createTextNode(o11.slice(r11))), s11;
    }, position: 50 }, { render(t54) {
      if (!t54.detail) return null;
      let e11 = document.createElement("span");
      return e11.className = "cm-completionDetail", e11.textContent = t54.detail, e11;
    }, position: 80 }), n10.sort((t54, e11) => t54.position - e11.position).map((t54) => t54.render)), this.optionClass = l10.optionClass, this.tooltipClass = l10.tooltipClass, this.range = dt(o10.length, r10, l10.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t53.state), this.dom.addEventListener("mousedown", (i11) => {
      let { options: n11 } = t53.state.field(e10).open;
      for (let e11 = i11.target, s11; e11 && e11 != this.dom; e11 = e11.parentNode) if ("LI" == e11.nodeName && (s11 = /-(\d+)$/.exec(e11.id)) && +s11[1] < n11.length) {
        this.applyCompletion(t53, n11[+s11[1]]), i11.preventDefault();
        return;
      }
    }), this.dom.addEventListener("focusout", (e11) => {
      let i11 = t53.state.field(this.stateField, false);
      i11 && i11.tooltip && t53.state.facet(c9).closeOnBlur && e11.relatedTarget != t53.contentDOM && t53.dispatch({ effects: c3.of(null) });
    }), this.showOptions(o10, s10.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t53, e10) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t53, e10, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t53) {
    var e10;
    let i10 = t53.state.field(this.stateField), n10 = t53.startState.field(this.stateField);
    if (this.updateTooltipClass(t53.state), i10 != n10) {
      let { options: s10, selected: o10, disabled: r10 } = i10.open;
      n10.open && n10.open.options == s10 || (this.range = dt(s10.length, o10, t53.state.facet(c9).maxRenderedOptions), this.showOptions(s10, i10.id)), this.updateSel(), r10 != (null === (e10 = n10.open) || void 0 === e10 ? void 0 : e10.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!r10);
    }
  }
  updateTooltipClass(t53) {
    let e10 = this.tooltipClass(t53);
    if (e10 != this.currentClass) {
      for (let t54 of this.currentClass.split(" ")) t54 && this.dom.classList.remove(t54);
      for (let t54 of e10.split(" ")) t54 && this.dom.classList.add(t54);
      this.currentClass = e10;
    }
  }
  positioned(t53) {
    this.space = t53, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t53 = this.view.state.field(this.stateField), e10 = t53.open;
    if ((e10.selected > -1 && e10.selected < this.range.from || e10.selected >= this.range.to) && (this.range = dt(e10.options.length, e10.selected, this.view.state.facet(c9).maxRenderedOptions), this.showOptions(e10.options, t53.id)), this.updateSelectedOption(e10.selected)) {
      this.destroyInfo();
      let { completion: i10 } = e10.options[e10.selected], { info: n10 } = i10;
      if (!n10) return;
      let s10 = "string" == typeof n10 ? document.createTextNode(n10) : n10(i10);
      if (!s10) return;
      "then" in s10 ? s10.then((e11) => {
        e11 && this.view.state.field(this.stateField, false) == t53 && this.addInfoPane(e11, i10);
      }).catch((t54) => iC(this.view.state, t54, "completion info")) : this.addInfoPane(s10, i10);
    }
  }
  addInfoPane(t53, e10) {
    this.destroyInfo();
    let i10 = this.info = document.createElement("div");
    if (i10.className = "cm-tooltip cm-completionInfo", null != t53.nodeType) i10.appendChild(t53), this.infoDestroy = null;
    else {
      let { dom: e11, destroy: n10 } = t53;
      i10.appendChild(e11), this.infoDestroy = n10 || null;
    }
    this.dom.appendChild(i10), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t53) {
    var e10, i10;
    let n10, s10, o10, r10 = null;
    for (let e11 = this.list.firstChild, i11 = this.range.from; e11; e11 = e11.nextSibling, i11++) "LI" == e11.nodeName && e11.id ? i11 == t53 ? e11.hasAttribute("aria-selected") || (e11.setAttribute("aria-selected", "true"), r10 = e11) : e11.hasAttribute("aria-selected") && e11.removeAttribute("aria-selected") : i11--;
    return r10 && (e10 = this.list, i10 = r10, n10 = e10.getBoundingClientRect(), s10 = i10.getBoundingClientRect(), o10 = n10.height / e10.offsetHeight, s10.top < n10.top ? e10.scrollTop -= (n10.top - s10.top) / o10 : s10.bottom > n10.bottom && (e10.scrollTop += (s10.bottom - n10.bottom) / o10)), r10;
  }
  measureInfo() {
    let t53 = this.dom.querySelector("[aria-selected]");
    if (!t53 || !this.info) return null;
    let e10 = this.dom.getBoundingClientRect(), i10 = this.info.getBoundingClientRect(), n10 = t53.getBoundingClientRect(), s10 = this.space;
    if (!s10) {
      let t54 = this.dom.ownerDocument.defaultView || window;
      s10 = { left: 0, top: 0, right: t54.innerWidth, bottom: t54.innerHeight };
    }
    return n10.top > Math.min(s10.bottom, e10.bottom) - 10 || n10.bottom < Math.max(s10.top, e10.top) + 10 ? null : this.view.state.facet(c9).positionInfo(this.view, e10, n10, i10, s10, this.dom);
  }
  placeInfo(t53) {
    this.info && (t53 ? (t53.style && (this.info.style.cssText = t53.style), this.info.className = "cm-tooltip cm-completionInfo " + (t53.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t53, e10, i10) {
    let n10 = document.createElement("ul");
    n10.id = e10, n10.setAttribute("role", "listbox"), n10.setAttribute("aria-expanded", "true"), n10.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let s10 = null;
    for (let o10 = i10.from; o10 < i10.to; o10++) {
      let { completion: r10, match: l10 } = t53[o10], { section: h10 } = r10;
      if (h10) {
        let t54 = "string" == typeof h10 ? h10 : h10.name;
        t54 != s10 && (o10 > i10.from || 0 == i10.from) && (s10 = t54, "string" != typeof h10 && h10.header ? n10.appendChild(h10.header(h10)) : n10.appendChild(document.createElement("completion-section")).textContent = t54);
      }
      let a10 = n10.appendChild(document.createElement("li"));
      a10.id = e10 + "-" + o10, a10.setAttribute("role", "option");
      let c10 = this.optionClass(r10);
      for (let t54 of (c10 && (a10.className = c10), this.optionContent)) {
        let e11 = t54(r10, this.view.state, this.view, l10);
        e11 && a10.appendChild(e11);
      }
    }
    return i10.from && n10.classList.add("cm-completionListIncompleteTop"), i10.to < t53.length && n10.classList.add("cm-completionListIncompleteBottom"), n10;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function di(t53) {
  return 100 * (t53.boost || 0) + (t53.apply ? 10 : 0) + (t53.info ? 5 : 0) + (t53.type ? 1 : 0);
}
class dn {
  constructor(t53, e10, i10, n10, s10, o10) {
    this.options = t53, this.attrs = e10, this.tooltip = i10, this.timestamp = n10, this.selected = s10, this.disabled = o10;
  }
  setSelected(t53, e10) {
    return t53 == this.selected || t53 >= this.options.length ? this : new dn(this.options, dh(e10, t53), this.tooltip, this.timestamp, t53, this.disabled);
  }
  static build(t53, e10, i10, n10, s10) {
    let o10 = function(t54, e11) {
      let i11 = [], n11 = null, s11 = (t55) => {
        i11.push(t55);
        let { section: e12 } = t55.completion;
        if (e12) {
          n11 || (n11 = []);
          let t56 = "string" == typeof e12 ? e12 : e12.name;
          n11.some((e13) => e13.name == t56) || n11.push("string" == typeof e12 ? { name: t56 } : e12);
        }
      }, o11 = e11.facet(c9);
      for (let n12 of t54) if (n12.hasResult()) {
        let t55 = n12.result.getMatch;
        if (false === n12.result.filter) for (let e12 of n12.result.options) s11(new cJ(e12, n12.source, t55 ? t55(e12) : [], 1e9 - i11.length));
        else {
          let i12 = e11.sliceDoc(n12.from, n12.to), r12, l11 = o11.filterStrict ? new c5(i12) : new c4(i12);
          for (let e12 of n12.result.options) if (r12 = l11.match(e12.label)) {
            let i13 = e12.displayLabel ? t55 ? t55(e12, r12.matched) : [] : r12.matched;
            s11(new cJ(e12, n12.source, i13, r12.score + (e12.boost || 0)));
          }
        }
      }
      if (n11) {
        let t55 = /* @__PURE__ */ Object.create(null), e12 = 0;
        for (let i12 of n11.sort((t56, e13) => {
          var i13, n12;
          return (null !== (i13 = t56.rank) && void 0 !== i13 ? i13 : 1e9) - (null !== (n12 = e13.rank) && void 0 !== n12 ? n12 : 1e9) || (t56.name < e13.name ? -1 : 1);
        })) e12 -= 1e5, t55[i12.name] = e12;
        for (let e13 of i11) {
          let { section: i12 } = e13.completion;
          i12 && (e13.score += t55["string" == typeof i12 ? i12 : i12.name]);
        }
      }
      let r11 = [], l10 = null, h10 = o11.compareCompletions;
      for (let t55 of i11.sort((t56, e12) => e12.score - t56.score || h10(t56.completion, e12.completion))) {
        let e12 = t55.completion;
        l10 && l10.label == e12.label && l10.detail == e12.detail && (null == l10.type || null == e12.type || l10.type == e12.type) && l10.apply == e12.apply && l10.boost == e12.boost ? di(t55.completion) > di(l10) && (r11[r11.length - 1] = t55) : r11.push(t55), l10 = t55.completion;
      }
      return r11;
    }(t53, e10);
    if (!o10.length) return n10 && t53.some((t54) => 1 == t54.state) ? new dn(n10.options, n10.attrs, n10.tooltip, n10.timestamp, n10.selected, true) : null;
    let r10 = e10.facet(c9).selectOnOpen ? 0 : -1;
    if (n10 && n10.selected != r10 && -1 != n10.selected) {
      let t54 = n10.options[n10.selected].completion;
      for (let e11 = 0; e11 < o10.length; e11++) if (o10[e11].completion == t54) {
        r10 = e11;
        break;
      }
    }
    return new dn(o10, dh(i10, r10), { pos: t53.reduce((t54, e11) => e11.hasResult() ? Math.min(t54, e11.from) : t54, 1e8), create: dv, above: s10.aboveCursor }, n10 ? n10.timestamp : Date.now(), r10, false);
  }
  map(t53) {
    return new dn(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: t53.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class ds {
  constructor(t53, e10, i10) {
    this.active = t53, this.id = e10, this.open = i10;
  }
  static start() {
    return new ds(da, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null);
  }
  update(t53) {
    let { state: e10 } = t53, i10 = e10.facet(c9), n10 = (i10.override || e10.languageDataAt("autocomplete", cQ(e10)).map(c2)).map((e11) => (this.active.find((t54) => t54.source == e11) || new dd(e11, this.active.some((t54) => 0 != t54.state) ? 1 : 0)).update(t53, i10));
    n10.length == this.active.length && n10.every((t54, e11) => t54 == this.active[e11]) && (n10 = this.active);
    let s10 = this.open;
    for (let o10 of (s10 && t53.docChanged && (s10 = s10.map(t53.changes)), t53.selection || n10.some((e11) => e11.hasResult() && t53.changes.touchesRange(e11.from, e11.to)) || !function(t54, e11) {
      if (t54 == e11) return true;
      for (let i11 = 0, n11 = 0; ; ) {
        for (; i11 < t54.length && !t54[i11].hasResult; ) i11++;
        for (; n11 < e11.length && !e11[n11].hasResult; ) n11++;
        let s11 = i11 == t54.length, o11 = n11 == e11.length;
        if (s11 || o11) return s11 == o11;
        if (t54[i11++].result != e11[n11++].result) return false;
      }
    }(n10, this.active) ? s10 = dn.build(n10, e10, this.id, s10, i10) : s10 && s10.disabled && !n10.some((t54) => 1 == t54.state) && (s10 = null), !s10 && n10.every((t54) => 1 != t54.state) && n10.some((t54) => t54.hasResult()) && (n10 = n10.map((t54) => t54.hasResult() ? new dd(t54.source, 0) : t54)), t53.effects)) o10.is(dg) && (s10 = s10 && s10.setSelected(o10.value, this.id));
    return n10 == this.active && s10 == this.open ? this : new ds(n10, this.id, s10);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? dr : dl;
  }
}
let dr = { "aria-autocomplete": "list" }, dl = {};
function dh(t53, e10) {
  let i10 = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": t53 };
  return e10 > -1 && (i10["aria-activedescendant"] = t53 + "-" + e10), i10;
}
let da = [];
function dc(t53, e10) {
  if (t53.isUserEvent("input.complete")) {
    let i11 = t53.annotation(c0);
    if (i11 && e10.activateOnCompletion(i11)) return 12;
  }
  let i10 = t53.isUserEvent("input.type");
  return i10 && e10.activateOnTyping ? 5 : i10 ? 1 : t53.isUserEvent("delete.backward") ? 2 : t53.selection ? 8 : t53.docChanged ? 16 : 0;
}
class dd {
  constructor(t53, e10, i10 = -1) {
    this.source = t53, this.state = e10, this.explicitPos = i10;
  }
  hasResult() {
    return false;
  }
  update(t53, e10) {
    let i10 = dc(t53, e10), n10 = this;
    for (let e11 of ((8 & i10 || 16 & i10 && this.touches(t53)) && (n10 = new dd(n10.source, 0)), 4 & i10 && 0 == n10.state && (n10 = new dd(this.source, 1)), n10 = n10.updateFor(t53, i10), t53.effects)) if (e11.is(c8)) n10 = new dd(n10.source, 1, e11.value ? cQ(t53.state) : -1);
    else if (e11.is(c3)) n10 = new dd(n10.source, 0);
    else if (e11.is(df)) for (let t54 of e11.value) t54.source == n10.source && (n10 = t54);
    return n10;
  }
  updateFor(t53, e10) {
    return this.map(t53.changes);
  }
  map(t53) {
    return t53.empty || this.explicitPos < 0 ? this : new dd(this.source, this.state, t53.mapPos(this.explicitPos));
  }
  touches(t53) {
    return t53.changes.touchesRange(cQ(t53.state));
  }
}
class du extends dd {
  constructor(t53, e10, i10, n10, s10) {
    super(t53, 2, e10), this.result = i10, this.from = n10, this.to = s10;
  }
  hasResult() {
    return true;
  }
  updateFor(t53, e10) {
    var i10;
    if (!(3 & e10)) return this.map(t53.changes);
    let n10 = this.result;
    n10.map && !t53.changes.empty && (n10 = n10.map(n10, t53.changes));
    let s10 = t53.changes.mapPos(this.from), o10 = t53.changes.mapPos(this.to, 1), r10 = cQ(t53.state);
    if ((this.explicitPos < 0 ? r10 <= s10 : r10 < this.from) || r10 > o10 || !n10 || 2 & e10 && cQ(t53.startState) == this.from) return new dd(this.source, 4 & e10 ? 1 : 0);
    let l10 = this.explicitPos < 0 ? -1 : t53.changes.mapPos(this.explicitPos);
    return !function(t54, e11, i11, n11) {
      if (!t54) return false;
      let s11 = e11.sliceDoc(i11, n11);
      return "function" == typeof t54 ? t54(s11, i11, n11, e11) : cZ(t54, true).test(s11);
    }(n10.validFor, t53.state, s10, o10) ? n10.update && (n10 = n10.update(n10, s10, o10, new cY(t53.state, r10, l10 >= 0))) ? new du(this.source, l10, n10, n10.from, null !== (i10 = n10.to) && void 0 !== i10 ? i10 : cQ(t53.state)) : new dd(this.source, 1, l10) : new du(this.source, l10, n10, s10, o10);
  }
  map(t53) {
    return t53.empty ? this : (this.result.map ? this.result.map(this.result, t53) : this.result) ? new du(this.source, this.explicitPos < 0 ? -1 : t53.mapPos(this.explicitPos), this.result, t53.mapPos(this.from), t53.mapPos(this.to, 1)) : new dd(this.source, 0);
  }
  touches(t53) {
    return t53.changes.touchesRange(this.from, this.to);
  }
}
let df = tk.define({ map: (t53, e10) => t53.map((t54) => t54.map(e10)) }), dg = tk.define(), dp = tn.define({ create: () => ds.start(), update: (t53, e10) => t53.update(e10), provide: (t53) => [sR.from(t53, (t54) => t54.tooltip), n5.contentAttributes.from(t53, (t54) => t54.attrs)] });
function dm(t53, e10) {
  let i10 = e10.completion.apply || e10.completion.label, n10 = t53.state.field(dp).active.find((t54) => t54.source == e10.source);
  return n10 instanceof du && ("string" == typeof i10 ? t53.dispatch(Object.assign(Object.assign({}, function(t54, e11, i11, n11) {
    let { main: s10 } = t54.selection, o10 = i11 - s10.from, r10 = n11 - s10.from;
    return Object.assign(Object.assign({}, t54.changeByRange((l10) => l10 != s10 && i11 != n11 && t54.sliceDoc(l10.from + o10, l10.from + r10) != t54.sliceDoc(i11, n11) ? { range: l10 } : { changes: { from: l10.from + o10, to: n11 == s10.from ? l10.to : l10.from + r10, insert: e11 }, range: $.cursor(l10.from + o10 + e11.length) })), { scrollIntoView: true, userEvent: "input.complete" });
  }(t53.state, i10, n10.from, n10.to)), { annotations: c0.of(e10.completion) })) : i10(t53, e10.completion, n10.from, n10.to), true);
}
let dv = (t53) => new de(t53, dp, dm);
function dw(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
  return (i10) => {
    let n10 = i10.state.field(dp, false);
    if (!n10 || !n10.open || n10.open.disabled || Date.now() - n10.open.timestamp < i10.state.facet(c9).interactionDelay) return false;
    let s10 = 1, o10;
    "page" == e10 && (o10 = sV(i10, n10.open.tooltip)) && (s10 = Math.max(2, Math.floor(o10.dom.offsetHeight / o10.dom.querySelector("li").offsetHeight) - 1));
    let { length: r10 } = n10.open.options, l10 = n10.open.selected > -1 ? n10.open.selected + s10 * (t53 ? 1 : -1) : t53 ? 0 : r10 - 1;
    return l10 < 0 ? l10 = "page" == e10 ? 0 : r10 - 1 : l10 >= r10 && (l10 = "page" == e10 ? r10 - 1 : 0), i10.dispatch({ effects: dg.of(l10) }), true;
  };
}
let db = (t53) => !!t53.state.field(dp, false) && (t53.dispatch({ effects: c8.of(true) }), true);
class dy {
  constructor(t53, e10) {
    this.active = t53, this.context = e10, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
let dx = iE.fromClass(class {
  constructor(t53) {
    for (let e10 of (this.view = t53, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0, t53.state.field(dp).active)) 1 == e10.state && this.startQuery(e10);
  }
  update(t53) {
    let e10 = t53.state.field(dp), i10 = t53.state.facet(c9);
    if (!t53.selectionSet && !t53.docChanged && t53.startState.field(dp) == e10) return;
    let n10 = t53.transactions.some((t54) => {
      let e11 = dc(t54, i10);
      return 8 & e11 || (t54.selection || t54.docChanged) && !(3 & e11);
    });
    for (let e11 = 0; e11 < this.running.length; e11++) {
      let i11 = this.running[e11];
      if (n10 || i11.updates.length + t53.transactions.length > 50 && Date.now() - i11.time > 1e3) {
        for (let t54 of i11.context.abortListeners) try {
          t54();
        } catch (t55) {
          iC(this.view.state, t55);
        }
        i11.context.abortListeners = null, this.running.splice(e11--, 1);
      } else i11.updates.push(...t53.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), t53.transactions.some((t54) => t54.effects.some((t55) => t55.is(c8))) && (this.pendingStart = true);
    let s10 = this.pendingStart ? 50 : i10.activateOnTypingDelay;
    if (this.debounceUpdate = e10.active.some((t54) => 1 == t54.state && !this.running.some((e11) => e11.active.source == t54.source)) ? setTimeout(() => this.startUpdate(), s10) : -1, 0 != this.composing) for (let e11 of t53.transactions) e11.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && e11.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: t53 } = this.view;
    for (let e10 of t53.field(dp).active) 1 != e10.state || this.running.some((t54) => t54.active.source == e10.source) || this.startQuery(e10);
  }
  startQuery(t53) {
    let { state: e10 } = this.view, i10 = cQ(e10), n10 = new cY(e10, i10, t53.explicitPos == i10, this.view), s10 = new dy(t53, n10);
    this.running.push(s10), Promise.resolve(t53.source(n10)).then((t54) => {
      s10.context.aborted || (s10.done = t54 || null, this.scheduleAccept());
    }, (t54) => {
      this.view.dispatch({ effects: c3.of(null) }), iC(this.view.state, t54);
    });
  }
  scheduleAccept() {
    this.running.every((t53) => void 0 !== t53.done) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(c9).updateSyncTime));
  }
  accept() {
    var t53;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e10 = [], i10 = this.view.state.facet(c9);
    for (let n10 = 0; n10 < this.running.length; n10++) {
      let s10 = this.running[n10];
      if (void 0 === s10.done) continue;
      if (this.running.splice(n10--, 1), s10.done) {
        let n11 = new du(s10.active.source, s10.active.explicitPos, s10.done, s10.done.from, null !== (t53 = s10.done.to) && void 0 !== t53 ? t53 : cQ(s10.updates.length ? s10.updates[0].startState : this.view.state));
        for (let t54 of s10.updates) n11 = n11.update(t54, i10);
        if (n11.hasResult()) {
          e10.push(n11);
          continue;
        }
      }
      let o10 = this.view.state.field(dp).active.find((t54) => t54.source == s10.active.source);
      if (o10 && 1 == o10.state) {
        if (null == s10.done) {
          let t54 = new dd(s10.active.source, 0);
          for (let e11 of s10.updates) t54 = t54.update(e11, i10);
          1 != t54.state && e10.push(t54);
        } else this.startQuery(o10);
      }
    }
    e10.length && this.view.dispatch({ effects: df.of(e10) });
  }
}, { eventHandlers: { blur(t53) {
  let e10 = this.view.state.field(dp, false);
  if (e10 && e10.tooltip && this.view.state.facet(c9).closeOnBlur) {
    let i10 = e10.open && sV(this.view, e10.open.tooltip);
    i10 && i10.dom.contains(t53.relatedTarget) || setTimeout(() => this.view.dispatch({ effects: c3.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  3 == this.composing && setTimeout(() => this.view.dispatch({ effects: c8.of(false) }), 20), this.composing = 0;
} } }), dS = "object" == typeof navigator && /Win/.test(navigator.platform), dk = tr.highest(n5.domEventHandlers({ keydown(t53, e10) {
  let i10 = e10.state.field(dp, false);
  if (!i10 || !i10.open || i10.open.disabled || i10.open.selected < 0 || t53.key.length > 1 || t53.ctrlKey && !(dS && t53.altKey) || t53.metaKey) return false;
  let n10 = i10.open.options[i10.open.selected], s10 = i10.active.find((t54) => t54.source == n10.source), o10 = n10.completion.commitCharacters || s10.result.commitCharacters;
  return o10 && o10.indexOf(t53.key) > -1 && dm(e10, n10), false;
} })), dM = n5.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"···"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } }, ".cm-completionIcon-class": { "&:after": { content: "'○'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'◌'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } }, ".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'∪'" } }, ".cm-completionIcon-property": { "&:after": { content: "'□'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } });
class dA {
  constructor(t53, e10, i10, n10) {
    this.field = t53, this.line = e10, this.from = i10, this.to = n10;
  }
}
class dC {
  constructor(t53, e10, i10) {
    this.field = t53, this.from = e10, this.to = i10;
  }
  map(t53) {
    let e10 = t53.mapPos(this.from, -1, I.TrackDel), i10 = t53.mapPos(this.to, 1, I.TrackDel);
    return null == e10 || null == i10 ? null : new dC(this.field, e10, i10);
  }
}
class dD {
  constructor(t53, e10) {
    this.lines = t53, this.fieldPositions = e10;
  }
  instantiate(t53, e10) {
    let i10 = [], n10 = [e10], s10 = t53.doc.lineAt(e10), o10 = /^\s*/.exec(s10.text)[0];
    for (let s11 of this.lines) {
      if (i10.length) {
        let i11 = o10, r10 = /^\t*/.exec(s11)[0].length;
        for (let e11 = 0; e11 < r10; e11++) i11 += t53.facet(a8);
        n10.push(e10 + i11.length - r10), s11 = i11 + s11.slice(r10);
      }
      i10.push(s11), e10 += s11.length + 1;
    }
    return { text: i10, ranges: this.fieldPositions.map((t54) => new dC(t54.field, n10[t54.line] + t54.from, n10[t54.line] + t54.to)) };
  }
  static parse(t53) {
    let e10 = [], i10 = [], n10 = [], s10;
    for (let o10 of t53.split(/\r\n?|\n/)) {
      for (; s10 = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(o10); ) {
        let t54 = s10[1] ? +s10[1] : null, r10 = s10[2] || s10[3] || "", l10 = -1, h10 = r10.replace(/\\[{}]/g, (t55) => t55[1]);
        for (let i11 = 0; i11 < e10.length; i11++) (null != t54 ? e10[i11].seq == t54 : h10 && e10[i11].name == h10) && (l10 = i11);
        if (l10 < 0) {
          let i11 = 0;
          for (; i11 < e10.length && (null == t54 || null != e10[i11].seq && e10[i11].seq < t54); ) i11++;
          for (let s11 of (e10.splice(i11, 0, { seq: t54, name: h10 }), l10 = i11, n10)) s11.field >= l10 && s11.field++;
        }
        n10.push(new dA(l10, i10.length, s10.index, s10.index + h10.length)), o10 = o10.slice(0, s10.index) + r10 + o10.slice(s10.index + s10[0].length);
      }
      o10 = o10.replace(/\\([{}])/g, (t54, e11, s11) => {
        for (let t55 of n10) t55.line == i10.length && t55.from > s11 && (t55.from--, t55.to--);
        return e11;
      }), i10.push(o10);
    }
    return new dD(i10, n10);
  }
}
let dO = eQ.widget({ widget: new class extends eX {
  toDOM() {
    let t53 = document.createElement("span");
    return t53.className = "cm-snippetFieldPosition", t53;
  }
  ignoreEvent() {
    return false;
  }
}() }), dT = eQ.mark({ class: "cm-snippetField" });
class dE {
  constructor(t53, e10) {
    this.ranges = t53, this.active = e10, this.deco = eQ.set(t53.map((t54) => (t54.from == t54.to ? dO : dT).range(t54.from, t54.to)));
  }
  map(t53) {
    let e10 = [];
    for (let i10 of this.ranges) {
      let n10 = i10.map(t53);
      if (!n10) return null;
      e10.push(n10);
    }
    return new dE(e10, this.active);
  }
  selectionInsideField(t53) {
    return t53.ranges.every((t54) => this.ranges.some((e10) => e10.field == this.active && e10.from <= t54.from && e10.to >= t54.to));
  }
}
let dB = tk.define({ map: (t53, e10) => t53 && t53.map(e10) }), dR = tk.define(), dL = tn.define({ create: () => null, update(t53, e10) {
  for (let i10 of e10.effects) {
    if (i10.is(dB)) return i10.value;
    if (i10.is(dR) && t53) return new dE(t53.ranges, i10.value);
  }
  return t53 && e10.docChanged && (t53 = t53.map(e10.changes)), t53 && e10.selection && !t53.selectionInsideField(e10.selection) && (t53 = null), t53;
}, provide: (t53) => n5.decorations.from(t53, (t54) => t54 ? t54.deco : eQ.none) });
function dP(t53, e10) {
  return $.create(t53.filter((t54) => t54.field == e10).map((t54) => $.range(t54.from, t54.to)));
}
function dN(t53) {
  return (e10) => {
    let { state: i10, dispatch: n10 } = e10, s10 = i10.field(dL, false);
    if (!s10 || t53 < 0 && 0 == s10.active) return false;
    let o10 = s10.active + t53, r10 = t53 > 0 && !s10.ranges.some((e11) => e11.field == o10 + t53);
    return n10(i10.update({ selection: dP(s10.ranges, o10), effects: dB.of(r10 ? null : new dE(s10.ranges, o10)), scrollIntoView: true })), true;
  };
}
let dH = [{ key: "Tab", run: dN(1), shift: dN(-1) }, { key: "Escape", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return !!e10.field(dL, false) && (i10(e10.update({ effects: dB.of(null) })), true);
} }], dV = J.define({ combine: (t53) => t53.length ? t53[0] : dH }), dI = tr.highest(ss.compute([dV], (t53) => t53.facet(dV)));
function dF(t53, e10) {
  let i10;
  return Object.assign(Object.assign({}, e10), { apply: (i10 = dD.parse(t53), (t54, e11, n10, o10) => {
    let { text: r10, ranges: l10 } = i10.instantiate(t54.state, n10), h10 = { changes: { from: n10, to: o10, insert: s.of(r10) }, scrollIntoView: true, annotations: e11 ? [c0.of(e11), tM.userEvent.of("input.complete")] : void 0 };
    if (l10.length && (h10.selection = dP(l10, 0)), l10.some((t55) => t55.field > 0)) {
      let e12 = new dE(l10, 0), i11 = h10.effects = [dB.of(e12)];
      void 0 === t54.state.field(dL, false) && i11.push(tk.appendConfig.of([dL, dI, dW, dM]));
    }
    t54.dispatch(t54.state.update(h10));
  }) });
}
let dW = n5.domEventHandlers({ mousedown(t53, e10) {
  let i10 = e10.state.field(dL, false), n10;
  if (!i10 || null == (n10 = e10.posAtCoords({ x: t53.clientX, y: t53.clientY }))) return false;
  let s10 = i10.ranges.find((t54) => t54.from <= n10 && t54.to >= n10);
  return !!s10 && s10.field != i10.active && (e10.dispatch({ selection: dP(i10.ranges, s10.field), effects: dB.of(i10.ranges.some((t54) => t54.field > s10.field) ? new dE(i10.ranges, s10.field) : null), scrollIntoView: true }), true);
} }), dz = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, dK = tk.define({ map(t53, e10) {
  let i10 = e10.mapPos(t53, -1, I.TrackAfter);
  return null == i10 ? void 0 : i10;
} }), dq = new class extends tL {
}();
dq.startSide = 1, dq.endSide = -1;
let d_ = tn.define({ create: () => tV.empty, update(t53, e10) {
  if (t53 = t53.map(e10.changes), e10.selection) {
    let i10 = e10.state.doc.lineAt(e10.selection.main.head);
    t53 = t53.update({ filter: (t54) => t54 >= i10.from && t54 <= i10.to });
  }
  for (let i10 of e10.effects) i10.is(dK) && (t53 = t53.update({ add: [dq.range(i10.value, i10.value + 1)] }));
  return t53;
} });
function dj() {
  return [dX, d_];
}
let dG = "()[]{}<>";
function dU(t53) {
  for (let e10 = 0; e10 < dG.length; e10 += 2) if (dG.charCodeAt(e10) == t53) return dG.charAt(e10 + 1);
  return y(t53 < 128 ? t53 : t53 + 1);
}
function d$(t53, e10) {
  return t53.languageDataAt("closeBrackets", e10)[0] || dz;
}
let dY = "object" == typeof navigator && /Android\b/.test(navigator.userAgent), dX = n5.inputHandler.of((t53, e10, i10, n10) => {
  if ((dY ? t53.composing : t53.compositionStarted) || t53.state.readOnly) return false;
  let s10 = t53.state.selection.main;
  if (n10.length > 2 || 2 == n10.length && 1 == x(b(n10, 0)) || e10 != s10.from || i10 != s10.to) return false;
  let o10 = function(t54, e11) {
    let i11 = d$(t54, t54.selection.main.head), n11 = i11.brackets || dz.brackets;
    for (let s11 of n11) {
      let o11 = dU(b(s11, 0));
      if (e11 == s11) return o11 == s11 ? function(t55, e12, i12, n12) {
        let s12 = n12.stringPrefixes || dz.stringPrefixes, o12 = null, r10 = t55.changeByRange((n13) => {
          if (!n13.empty) return { changes: [{ insert: e12, from: n13.from }, { insert: e12, from: n13.to }], effects: dK.of(n13.to + e12.length), range: $.range(n13.anchor + e12.length, n13.head + e12.length) };
          let r11 = n13.head, l10 = dZ(t55.doc, r11), h10;
          if (l10 == e12) {
            if (d0(t55, r11)) return { changes: { insert: e12 + e12, from: r11 }, effects: dK.of(r11 + e12.length), range: $.cursor(r11 + e12.length) };
            if (dQ(t55, r11)) {
              let n14 = i12 && t55.sliceDoc(r11, r11 + 3 * e12.length) == e12 + e12 + e12 ? e12 + e12 + e12 : e12;
              return { changes: { from: r11, to: r11 + n14.length, insert: n14 }, range: $.cursor(r11 + n14.length) };
            }
          } else if (i12 && t55.sliceDoc(r11 - 2 * e12.length, r11) == e12 + e12 && (h10 = d1(t55, r11 - 2 * e12.length, s12)) > -1 && d0(t55, h10)) return { changes: { insert: e12 + e12 + e12 + e12, from: r11 }, effects: dK.of(r11 + e12.length), range: $.cursor(r11 + e12.length) };
          else if (t55.charCategorizer(r11)(l10) != tT.Word && d1(t55, r11, s12) > -1 && !function(t56, e13, i13, n14) {
            let s13 = aj(t56).resolveInner(e13, -1), o13 = n14.reduce((t57, e14) => Math.max(t57, e14.length), 0);
            for (let r12 = 0; r12 < 5; r12++) {
              let r13 = t56.sliceDoc(s13.from, Math.min(s13.to, s13.from + i13.length + o13)), l11 = r13.indexOf(i13);
              if (!l11 || l11 > -1 && n14.indexOf(r13.slice(0, l11)) > -1) {
                let e14 = s13.firstChild;
                for (; e14 && e14.from == s13.from && e14.to - e14.from > i13.length + l11; ) {
                  if (t56.sliceDoc(e14.to - i13.length, e14.to) == i13) return false;
                  e14 = e14.firstChild;
                }
                return true;
              }
              let h11 = s13.to == e13 && s13.parent;
              if (!h11) break;
              s13 = h11;
            }
            return false;
          }(t55, r11, e12, s12)) return { changes: { insert: e12 + e12, from: r11 }, effects: dK.of(r11 + e12.length), range: $.cursor(r11 + e12.length) };
          return { range: o12 = n13 };
        });
        return o12 ? null : t55.update(r10, { scrollIntoView: true, userEvent: "input.type" });
      }(t54, s11, n11.indexOf(s11 + s11 + s11) > -1, i11) : function(t55, e12, i12, n12) {
        let s12 = null, o12 = t55.changeByRange((o13) => {
          if (!o13.empty) return { changes: [{ insert: e12, from: o13.from }, { insert: i12, from: o13.to }], effects: dK.of(o13.to + e12.length), range: $.range(o13.anchor + e12.length, o13.head + e12.length) };
          let r10 = dZ(t55.doc, o13.head);
          return !r10 || /\s/.test(r10) || n12.indexOf(r10) > -1 ? { changes: { insert: e12 + i12, from: o13.head }, effects: dK.of(o13.head + e12.length), range: $.cursor(o13.head + e12.length) } : { range: s12 = o13 };
        });
        return s12 ? null : t55.update(o12, { scrollIntoView: true, userEvent: "input.type" });
      }(t54, s11, o11, i11.before || dz.before);
      if (e11 == o11 && dQ(t54, t54.selection.main.from)) return function(t55, e12, i12) {
        let n12 = null, s12 = t55.changeByRange((e13) => e13.empty && dZ(t55.doc, e13.head) == i12 ? { changes: { from: e13.head, to: e13.head + i12.length, insert: i12 }, range: $.cursor(e13.head + i12.length) } : n12 = { range: e13 });
        return n12 ? null : t55.update(s12, { scrollIntoView: true, userEvent: "input.type" });
      }(t54, 0, o11);
    }
    return null;
  }(t53.state, n10);
  return !!o10 && (t53.dispatch(o10), true);
}), dJ = [{ key: "Backspace", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  if (e10.readOnly) return false;
  let n10 = d$(e10, e10.selection.main.head).brackets || dz.brackets, s10 = null, o10 = e10.changeByRange((t54) => {
    if (t54.empty) {
      var i11, o11;
      let s11;
      let r10 = (i11 = e10.doc, o11 = t54.head, x(b(s11 = i11.sliceString(o11 - 2, o11), 0)) == s11.length ? s11 : s11.slice(1));
      for (let i12 of n10) if (i12 == r10 && dZ(e10.doc, t54.head) == dU(b(i12, 0))) return { changes: { from: t54.head - i12.length, to: t54.head + i12.length }, range: $.cursor(t54.head - i12.length) };
    }
    return { range: s10 = t54 };
  });
  return s10 || i10(e10.update(o10, { scrollIntoView: true, userEvent: "delete.backward" })), !s10;
} }];
function dQ(t53, e10) {
  let i10 = false;
  return t53.field(d_).between(0, t53.doc.length, (t54) => {
    t54 == e10 && (i10 = true);
  }), i10;
}
function dZ(t53, e10) {
  let i10 = t53.sliceString(e10, e10 + 2);
  return i10.slice(0, x(b(i10, 0)));
}
function d0(t53, e10) {
  let i10 = aj(t53).resolveInner(e10 + 1);
  return i10.parent && i10.from == e10;
}
function d1(t53, e10, i10) {
  let n10 = t53.charCategorizer(e10);
  if (n10(t53.sliceDoc(e10 - 1, e10)) != tT.Word) return e10;
  for (let s10 of i10) {
    let i11 = e10 - s10.length;
    if (t53.sliceDoc(i11, e10) == s10 && n10(t53.sliceDoc(i11 - 1, i11)) != tT.Word) return i11;
  }
  return -1;
}
function d2() {
  let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return [dk, dp, c9.of(t53), dx, d3, dM];
}
let d8 = [{ key: "Ctrl-Space", run: db }, { key: "Escape", run: (t53) => {
  let e10 = t53.state.field(dp, false);
  return !!(e10 && e10.active.some((t54) => 0 != t54.state)) && (t53.dispatch({ effects: c3.of(null) }), true);
} }, { key: "ArrowDown", run: dw(true) }, { key: "ArrowUp", run: dw(false) }, { key: "PageDown", run: dw(true, "page") }, { key: "PageUp", run: dw(false, "page") }, { key: "Enter", run: (t53) => {
  let e10 = t53.state.field(dp, false);
  return !(t53.state.readOnly || !e10 || !e10.open || e10.open.selected < 0 || e10.open.disabled || Date.now() - e10.open.timestamp < t53.state.facet(c9).interactionDelay) && dm(t53, e10.open.options[e10.open.selected]);
} }], d3 = tr.highest(ss.computeN([c9], (t53) => t53.facet(c9).defaultKeymap ? [d8] : []));
function d4(t53) {
  return (11 == t53.nodeType ? t53.getSelection ? t53 : t53.ownerDocument : t53).getSelection();
}
function d5(t53, e10) {
  return !!e10 && (t53 == e10 || t53.contains(1 != e10.nodeType ? e10.parentNode : e10));
}
function d9(t53, e10) {
  if (!e10.anchorNode) return false;
  try {
    return d5(t53, e10.anchorNode);
  } catch (t54) {
    return false;
  }
}
function d6(t53) {
  return 3 == t53.nodeType ? ua(t53, 0, t53.nodeValue.length).getClientRects() : 1 == t53.nodeType ? t53.getClientRects() : [];
}
function d7(t53, e10, i10, n10) {
  return !!i10 && (ui(t53, e10, i10, n10, -1) || ui(t53, e10, i10, n10, 1));
}
function ut(t53) {
  for (var e10 = 0; ; e10++) if (!(t53 = t53.previousSibling)) return e10;
}
function ue(t53) {
  return 1 == t53.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t53.nodeName);
}
function ui(t53, e10, i10, n10, s10) {
  for (; ; ) {
    if (t53 == i10 && e10 == n10) return true;
    if (e10 == (s10 < 0 ? 0 : un(t53))) {
      if ("DIV" == t53.nodeName) return false;
      let i11 = t53.parentNode;
      if (!i11 || 1 != i11.nodeType) return false;
      e10 = ut(t53) + (s10 < 0 ? 0 : 1), t53 = i11;
    } else {
      if (1 != t53.nodeType || 1 == (t53 = t53.childNodes[e10 + (s10 < 0 ? -1 : 0)]).nodeType && "false" == t53.contentEditable) return false;
      e10 = s10 < 0 ? un(t53) : 0;
    }
  }
}
function un(t53) {
  return 3 == t53.nodeType ? t53.nodeValue.length : t53.childNodes.length;
}
function us(t53, e10) {
  let i10 = e10 ? t53.left : t53.right;
  return { left: i10, right: i10, top: t53.top, bottom: t53.bottom };
}
function uo(t53, e10) {
  let i10 = e10.width / t53.offsetWidth, n10 = e10.height / t53.offsetHeight;
  return (i10 > 0.995 && i10 < 1.005 || !isFinite(i10) || 1 > Math.abs(e10.width - t53.offsetWidth)) && (i10 = 1), (n10 > 0.995 && n10 < 1.005 || !isFinite(n10) || 1 > Math.abs(e10.height - t53.offsetHeight)) && (n10 = 1), { scaleX: i10, scaleY: n10 };
}
class ur {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t53) {
    return this.anchorNode == t53.anchorNode && this.anchorOffset == t53.anchorOffset && this.focusNode == t53.focusNode && this.focusOffset == t53.focusOffset;
  }
  setRange(t53) {
    let { anchorNode: e10, focusNode: i10 } = t53;
    this.set(e10, Math.min(t53.anchorOffset, e10 ? un(e10) : 0), i10, Math.min(t53.focusOffset, i10 ? un(i10) : 0));
  }
  set(t53, e10, i10, n10) {
    this.anchorNode = t53, this.anchorOffset = e10, this.focusNode = i10, this.focusOffset = n10;
  }
}
let ul = null;
function uh(t53) {
  if (t53.setActive) return t53.setActive();
  if (ul) return t53.focus(ul);
  let e10 = [];
  for (let i10 = t53; i10 && (e10.push(i10, i10.scrollTop, i10.scrollLeft), i10 != i10.ownerDocument); i10 = i10.parentNode) ;
  if (t53.focus(null == ul ? { get preventScroll() {
    return ul = { preventScroll: true }, true;
  } } : void 0), !ul) {
    ul = false;
    for (let t54 = 0; t54 < e10.length; ) {
      let i10 = e10[t54++], n10 = e10[t54++], s10 = e10[t54++];
      i10.scrollTop != n10 && (i10.scrollTop = n10), i10.scrollLeft != s10 && (i10.scrollLeft = s10);
    }
  }
}
function ua(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10, s10 = n || (n = document.createRange());
  return s10.setEnd(t53, i10), s10.setStart(t53, e10), s10;
}
function uc(t53, e10, i10, n10) {
  let s10 = { key: e10, code: e10, keyCode: i10, which: i10, cancelable: true };
  n10 && ({ altKey: s10.altKey, ctrlKey: s10.ctrlKey, shiftKey: s10.shiftKey, metaKey: s10.metaKey } = n10);
  let o10 = new KeyboardEvent("keydown", s10);
  o10.synthetic = true, t53.dispatchEvent(o10);
  let r10 = new KeyboardEvent("keyup", s10);
  return r10.synthetic = true, t53.dispatchEvent(r10), o10.defaultPrevented || r10.defaultPrevented;
}
function ud(t53) {
  for (; t53.attributes.length; ) t53.removeAttributeNode(t53.attributes[0]);
}
function uu(t53) {
  return t53.scrollTop > Math.max(1, t53.scrollHeight - t53.clientHeight - 4);
}
function uf(t53, e10) {
  for (let i10 = t53, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 > 0) return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 > 0) {
      if ("false" == i10.contentEditable) return null;
      n10 = un(i10 = i10.childNodes[n10 - 1]);
    } else {
      if (!i10.parentNode || ue(i10)) return null;
      n10 = ut(i10), i10 = i10.parentNode;
    }
  }
}
function ug(t53, e10) {
  for (let i10 = t53, n10 = e10; ; ) {
    if (3 == i10.nodeType && n10 < i10.nodeValue.length) return { node: i10, offset: n10 };
    if (1 == i10.nodeType && n10 < i10.childNodes.length) {
      if ("false" == i10.contentEditable) return null;
      i10 = i10.childNodes[n10], n10 = 0;
    } else {
      if (!i10.parentNode || ue(i10)) return null;
      n10 = ut(i10) + 1, i10 = i10.parentNode;
    }
  }
}
class up {
  constructor(t53, e10, i10 = true) {
    this.node = t53, this.offset = e10, this.precise = i10;
  }
  static before(t53, e10) {
    return new up(t53.parentNode, ut(t53), e10);
  }
  static after(t53, e10) {
    return new up(t53.parentNode, ut(t53) + 1, e10);
  }
}
let um = [];
class uv {
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
  posBefore(t53) {
    let e10 = this.posAtStart;
    for (let i10 of this.children) {
      if (i10 == t53) return e10;
      e10 += i10.length + i10.breakAfter;
    }
    throw RangeError("Invalid child in posBefore");
  }
  posAfter(t53) {
    return this.posBefore(t53) + t53.length;
  }
  sync(t53, e10) {
    if (2 & this.flags) {
      let i10 = this.dom, n10 = null, s10;
      for (let o10 of this.children) {
        if (7 & o10.flags) {
          if (!o10.dom && (s10 = n10 ? n10.nextSibling : i10.firstChild)) {
            let t54 = uv.get(s10);
            (!t54 || !t54.parent && t54.canReuseDOM(o10)) && o10.reuseDOM(s10);
          }
          o10.sync(t53, e10), o10.flags &= -8;
        }
        if (s10 = n10 ? n10.nextSibling : i10.firstChild, e10 && !e10.written && e10.node == i10 && s10 != o10.dom && (e10.written = true), o10.dom.parentNode == i10) for (; s10 && s10 != o10.dom; ) s10 = uw(s10);
        else i10.insertBefore(o10.dom, s10);
        n10 = o10.dom;
      }
      for ((s10 = n10 ? n10.nextSibling : i10.firstChild) && e10 && e10.node == i10 && (e10.written = true); s10; ) s10 = uw(s10);
    } else if (1 & this.flags) for (let i10 of this.children) 7 & i10.flags && (i10.sync(t53, e10), i10.flags &= -8);
  }
  reuseDOM(t53) {
  }
  localPosFromDOM(t53, e10) {
    let i10;
    if (t53 == this.dom) i10 = this.dom.childNodes[e10];
    else {
      let n10 = 0 == un(t53) ? 0 : 0 == e10 ? -1 : 1;
      for (; ; ) {
        let e11 = t53.parentNode;
        if (e11 == this.dom) break;
        0 == n10 && e11.firstChild != e11.lastChild && (n10 = t53 == e11.firstChild ? -1 : 1), t53 = e11;
      }
      i10 = n10 < 0 ? t53 : t53.nextSibling;
    }
    if (i10 == this.dom.firstChild) return 0;
    for (; i10 && !uv.get(i10); ) i10 = i10.nextSibling;
    if (!i10) return this.length;
    for (let t54 = 0, e11 = 0; ; t54++) {
      let n10 = this.children[t54];
      if (n10.dom == i10) return e11;
      e11 += n10.length + n10.breakAfter;
    }
  }
  domBoundsAround(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = -1, s10 = -1, o10 = -1, r10 = -1;
    for (let l10 = 0, h10 = i10, a10 = i10; l10 < this.children.length; l10++) {
      let i11 = this.children[l10], c10 = h10 + i11.length;
      if (h10 < t53 && c10 > e10) return i11.domBoundsAround(t53, e10, h10);
      if (c10 >= t53 && -1 == n10 && (n10 = l10, s10 = h10), h10 > e10 && i11.dom.parentNode == this.dom) {
        o10 = l10, r10 = a10;
        break;
      }
      a10 = c10, h10 = c10 + i11.breakAfter;
    }
    return { from: s10, to: r10 < 0 ? i10 + this.length : r10, startDOM: (n10 ? this.children[n10 - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: o10 < this.children.length && o10 >= 0 ? this.children[o10].dom : null };
  }
  markDirty() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.flags |= 2, this.markParentsDirty(t53);
  }
  markParentsDirty(t53) {
    for (let e10 = this.parent; e10; e10 = e10.parent) {
      if (t53 && (e10.flags |= 2), 1 & e10.flags) return;
      e10.flags |= 1, t53 = false;
    }
  }
  setParent(t53) {
    this.parent != t53 && (this.parent = t53, 7 & this.flags && this.markParentsDirty(true));
  }
  setDOM(t53) {
    this.dom != t53 && (this.dom && (this.dom.cmView = null), this.dom = t53, t53.cmView = this);
  }
  get rootView() {
    for (let t53 = this; ; ) {
      let e10 = t53.parent;
      if (!e10) return t53;
      t53 = e10;
    }
  }
  replaceChildren(t53, e10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : um;
    this.markDirty();
    for (let n10 = t53; n10 < e10; n10++) {
      let t54 = this.children[n10];
      t54.parent == this && 0 > i10.indexOf(t54) && t54.destroy();
    }
    this.children.splice(t53, e10 - t53, ...i10);
    for (let t54 = 0; t54 < i10.length; t54++) i10[t54].setParent(this);
  }
  ignoreMutation(t53) {
    return false;
  }
  ignoreEvent(t53) {
    return false;
  }
  childCursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length;
    return new ub(this.children, t53, this.children.length);
  }
  childPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return this.childCursor().findPos(t53, e10);
  }
  toString() {
    let t53 = this.constructor.name.replace("View", "");
    return t53 + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == t53 ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t53) {
    return t53.cmView;
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
  merge(t53, e10, i10, n10, s10, o10) {
    return false;
  }
  become(t53) {
    return false;
  }
  canReuseDOM(t53) {
    return t53.constructor == this.constructor && !((this.flags | t53.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t53 of this.children) t53.parent == this && t53.destroy();
    this.parent = null;
  }
}
function uw(t53) {
  let e10 = t53.nextSibling;
  return t53.parentNode.removeChild(t53), e10;
}
uv.prototype.breakAfter = 0;
class ub {
  constructor(t53, e10, i10) {
    this.children = t53, this.pos = e10, this.i = i10, this.off = 0;
  }
  findPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    for (; ; ) {
      if (t53 > this.pos || t53 == this.pos && (e10 > 0 || 0 == this.i || this.children[this.i - 1].breakAfter)) return this.off = t53 - this.pos, this;
      let i10 = this.children[--this.i];
      this.pos -= i10.length + i10.breakAfter;
    }
  }
}
function uy(t53, e10, i10, n10, s10, o10, r10, l10, h10) {
  let { children: a10 } = t53, c10 = a10.length ? a10[e10] : null, d10 = o10.length ? o10[o10.length - 1] : null, u10 = d10 ? d10.breakAfter : r10;
  if (!(e10 == n10 && c10 && !r10 && !u10 && o10.length < 2 && c10.merge(i10, s10, o10.length ? d10 : null, 0 == i10, l10, h10))) {
    if (n10 < a10.length) {
      let t54 = a10[n10];
      t54 && (s10 < t54.length || t54.breakAfter && (null == d10 ? void 0 : d10.breakAfter)) ? (e10 == n10 && (t54 = t54.split(s10), s10 = 0), !u10 && d10 && t54.merge(0, s10, d10, true, 0, h10) ? o10[o10.length - 1] = t54 : ((s10 || t54.children.length && !t54.children[0].length) && t54.merge(0, s10, null, false, 0, h10), o10.push(t54))) : (null == t54 ? void 0 : t54.breakAfter) && (d10 ? d10.breakAfter = 1 : r10 = 1), n10++;
    }
    for (c10 && (c10.breakAfter = r10, i10 > 0 && (!r10 && o10.length && c10.merge(i10, c10.length, o10[0], false, l10, 0) ? c10.breakAfter = o10.shift().breakAfter : (i10 < c10.length || c10.children.length && 0 == c10.children[c10.children.length - 1].length) && c10.merge(i10, c10.length, null, false, l10, 0), e10++)); e10 < n10 && o10.length; ) if (a10[n10 - 1].become(o10[o10.length - 1])) n10--, o10.pop(), h10 = o10.length ? 0 : l10;
    else if (a10[e10].become(o10[0])) e10++, o10.shift(), l10 = o10.length ? 0 : h10;
    else break;
    !o10.length && e10 && n10 < a10.length && !a10[e10 - 1].breakAfter && a10[n10].merge(0, 0, a10[e10 - 1], false, l10, h10) && e10--, (e10 < n10 || o10.length) && t53.replaceChildren(e10, n10, o10);
  }
}
function ux(t53, e10, i10, n10, s10, o10) {
  let r10 = t53.childCursor(), { i: l10, off: h10 } = r10.findPos(i10, 1), { i: a10, off: c10 } = r10.findPos(e10, -1), d10 = e10 - i10;
  for (let t54 of n10) d10 += t54.length;
  t53.length += d10, uy(t53, a10, c10, l10, h10, n10, 0, s10, o10);
}
let uS = "undefined" != typeof navigator ? navigator : { userAgent: "", vendor: "", platform: "" }, uk = "undefined" != typeof document ? document : { documentElement: { style: {} } }, uM = /Edge\/(\d+)/.exec(uS.userAgent), uA = /MSIE \d/.test(uS.userAgent), uC = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(uS.userAgent), uD = !!(uA || uC || uM), uO = !uD && /gecko\/(\d+)/i.test(uS.userAgent), uT = !uD && /Chrome\/(\d+)/.exec(uS.userAgent), uE = "webkitFontSmoothing" in uk.documentElement.style, uB = !uD && /Apple Computer/.test(uS.vendor), uR = uB && (/Mobile\/\w+/.test(uS.userAgent) || uS.maxTouchPoints > 2);
var uL = { mac: uR || /Mac/.test(uS.platform), windows: /Win/.test(uS.platform), linux: /Linux|X11/.test(uS.platform), ie: uD, ie_version: uA ? uk.documentMode || 6 : uC ? +uC[1] : uM ? +uM[1] : 0, gecko: uO, gecko_version: uO ? +(/Firefox\/(\d+)/.exec(uS.userAgent) || [0, 0])[1] : 0, chrome: !!uT, chrome_version: uT ? +uT[1] : 0, ios: uR, android: /Android\b/.test(uS.userAgent), webkit: uE, safari: uB, webkit_version: uE ? +(/\bAppleWebKit\/(\d+)/.exec(uS.userAgent) || [0, 0])[1] : 0, tabSize: null != uk.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size" };
class uP extends uv {
  constructor(t53) {
    super(), this.text = t53;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t53) {
    this.setDOM(t53 || document.createTextNode(this.text));
  }
  sync(t53, e10) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e10 && e10.node == this.dom && (e10.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(t53) {
    3 == t53.nodeType && this.createDOM(t53);
  }
  merge(t53, e10, i10) {
    return !(8 & this.flags) && (!i10 || i10 instanceof uP && !(this.length - (e10 - t53) + i10.length > 256) && !(8 & i10.flags)) && (this.text = this.text.slice(0, t53) + (i10 ? i10.text : "") + this.text.slice(e10), this.markDirty(), true);
  }
  split(t53) {
    let e10 = new uP(this.text.slice(t53));
    return this.text = this.text.slice(0, t53), this.markDirty(), e10.flags |= 8 & this.flags, e10;
  }
  localPosFromDOM(t53, e10) {
    return t53 == this.dom ? e10 : e10 ? this.text.length : 0;
  }
  domAtPos(t53) {
    return new up(this.dom, t53);
  }
  domBoundsAround(t53, e10, i10) {
    return { from: i10, to: i10 + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t53, e10) {
    return function(t54, e11, i10) {
      let n10 = t54.nodeValue.length;
      e11 > n10 && (e11 = n10);
      let s10 = e11, o10 = e11, r10 = 0;
      0 == e11 && i10 < 0 || e11 == n10 && i10 >= 0 ? !(uL.chrome || uL.gecko) && (e11 ? (s10--, r10 = 1) : o10 < n10 && (o10++, r10 = -1)) : i10 < 0 ? s10-- : o10 < n10 && o10++;
      let l10 = ua(t54, s10, o10).getClientRects();
      if (!l10.length) return null;
      let h10 = l10[(r10 ? r10 < 0 : i10 >= 0) ? 0 : l10.length - 1];
      return uL.safari && !r10 && 0 == h10.width && (h10 = Array.prototype.find.call(l10, (t55) => t55.width) || h10), r10 ? us(h10, r10 < 0) : h10 || null;
    }(this.dom, t53, e10);
  }
}
class uN extends uv {
  constructor(t53, e10 = [], i10 = 0) {
    for (let n10 of (super(), this.mark = t53, this.children = e10, this.length = i10, e10)) n10.setParent(this);
  }
  setAttrs(t53) {
    if (ud(t53), this.mark.class && (t53.className = this.mark.class), this.mark.attrs) for (let e10 in this.mark.attrs) t53.setAttribute(e10, this.mark.attrs[e10]);
    return t53;
  }
  canReuseDOM(t53) {
    return super.canReuseDOM(t53) && !((this.flags | t53.flags) & 8);
  }
  reuseDOM(t53) {
    t53.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t53), this.flags |= 6);
  }
  sync(t53, e10) {
    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t53, e10);
  }
  merge(t53, e10, i10, n10, s10, o10) {
    return (!i10 || !!(i10 instanceof uN && i10.mark.eq(this.mark)) && (!t53 || !(s10 <= 0)) && (!(e10 < this.length) || !(o10 <= 0))) && (ux(this, t53, e10, i10 ? i10.children.slice() : [], s10 - 1, o10 - 1), this.markDirty(), true);
  }
  split(t53) {
    let e10 = [], i10 = 0, n10 = -1, s10 = 0;
    for (let o11 of this.children) {
      let r10 = i10 + o11.length;
      r10 > t53 && e10.push(i10 < t53 ? o11.split(t53 - i10) : o11), n10 < 0 && i10 >= t53 && (n10 = s10), i10 = r10, s10++;
    }
    let o10 = this.length - t53;
    return this.length = t53, n10 > -1 && (this.children.length = n10, this.markDirty()), new uN(this.mark, e10, o10);
  }
  domAtPos(t53) {
    return uI(this, t53);
  }
  coordsAt(t53, e10) {
    return uF(this, t53, e10);
  }
}
class uH extends uv {
  static create(t53, e10, i10) {
    return new uH(t53, e10, i10);
  }
  constructor(t53, e10, i10) {
    super(), this.widget = t53, this.length = e10, this.side = i10, this.prevWidget = null;
  }
  split(t53) {
    let e10 = uH.create(this.widget, this.length - t53, this.side);
    return this.length -= t53, e10;
  }
  sync(t53) {
    this.dom && this.widget.updateDOM(this.dom, t53) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t53)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(t53, e10, i10, n10, s10, o10) {
    return (!i10 || i10 instanceof uH && !!this.widget.compare(i10.widget) && (!(t53 > 0) || !(s10 <= 0)) && (!(e10 < this.length) || !(o10 <= 0))) && (this.length = t53 + (i10 ? i10.length : 0) + (this.length - e10), true);
  }
  become(t53) {
    return t53 instanceof uH && t53.side == this.side && this.widget.constructor == t53.widget.constructor && (this.widget.compare(t53.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t53.widget, this.length = t53.length, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t53) {
    return this.widget.ignoreEvent(t53);
  }
  get overrideDOMText() {
    if (0 == this.length) return s.empty;
    let t53 = this;
    for (; t53.parent; ) t53 = t53.parent;
    let { view: e10 } = t53, i10 = e10 && e10.state.doc, n10 = this.posAtStart;
    return i10 ? i10.slice(n10, n10 + this.length) : s.empty;
  }
  domAtPos(t53) {
    return (this.length ? 0 == t53 : this.side > 0) ? up.before(this.dom) : up.after(this.dom, t53 == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t53, e10) {
    let i10 = this.widget.coordsAt(this.dom, t53, e10);
    if (i10) return i10;
    let n10 = this.dom.getClientRects(), s10 = null;
    if (!n10.length) return null;
    let o10 = this.side ? this.side < 0 : t53 > 0;
    for (let e11 = o10 ? n10.length - 1 : 0; s10 = n10[e11], t53 > 0 ? 0 != e11 : e11 != n10.length - 1 && !(s10.top < s10.bottom); e11 += o10 ? -1 : 1) ;
    return us(s10, !o10);
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
class uV extends uv {
  constructor(t53) {
    super(), this.side = t53;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(t53) {
    return t53 instanceof uV && t53.side == this.side;
  }
  split() {
    return new uV(this.side);
  }
  sync() {
    if (!this.dom) {
      let t53 = document.createElement("img");
      t53.className = "cm-widgetBuffer", t53.setAttribute("aria-hidden", "true"), this.setDOM(t53);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t53) {
    return this.side > 0 ? up.before(this.dom) : up.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t53) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return s.empty;
  }
  get isHidden() {
    return true;
  }
}
function uI(t53, e10) {
  let i10 = t53.dom, { children: n10 } = t53, s10 = 0;
  for (let t54 = 0; s10 < n10.length; s10++) {
    let o10 = n10[s10], r10 = t54 + o10.length;
    if (!(r10 == t54 && 0 >= o10.getSide())) {
      if (e10 > t54 && e10 < r10 && o10.dom.parentNode == i10) return o10.domAtPos(e10 - t54);
      if (e10 <= t54) break;
      t54 = r10;
    }
  }
  for (let t54 = s10; t54 > 0; t54--) {
    let e11 = n10[t54 - 1];
    if (e11.dom.parentNode == i10) return e11.domAtPos(e11.length);
  }
  for (let t54 = s10; t54 < n10.length; t54++) {
    let e11 = n10[t54];
    if (e11.dom.parentNode == i10) return e11.domAtPos(0);
  }
  return new up(i10, 0);
}
function uF(t53, e10, i10) {
  let n10 = null, s10 = -1, o10 = null, r10 = -1;
  !function t54(e11, l11) {
    for (let h10 = 0, a10 = 0; h10 < e11.children.length && a10 <= l11; h10++) {
      let c10 = e11.children[h10], d10 = a10 + c10.length;
      d10 >= l11 && (c10.children.length ? t54(c10, l11 - a10) : (!o10 || o10.isHidden && i10 > 0) && (d10 > l11 || a10 == d10 && c10.getSide() > 0) ? (o10 = c10, r10 = l11 - a10) : (a10 < l11 || a10 == d10 && 0 > c10.getSide() && !c10.isHidden) && (n10 = c10, s10 = l11 - a10)), a10 = d10;
    }
  }(t53, e10);
  let l10 = (i10 < 0 ? n10 : o10) || n10 || o10;
  return l10 ? l10.coordsAt(Math.max(0, l10 == n10 ? s10 : r10), i10) : function(t54) {
    let e11 = t54.dom.lastChild;
    if (!e11) return t54.dom.getBoundingClientRect();
    let i11 = d6(e11);
    return i11[i11.length - 1] || null;
  }(t53);
}
function uW(t53, e10) {
  for (let i10 in t53) "class" == i10 && e10.class ? e10.class += " " + t53.class : "style" == i10 && e10.style ? e10.style += ";" + t53.style : e10[i10] = t53[i10];
  return e10;
}
uP.prototype.children = uH.prototype.children = uV.prototype.children = um;
let uz = /* @__PURE__ */ Object.create(null);
function uK(t53, e10, i10) {
  if (t53 == e10) return true;
  t53 || (t53 = uz), e10 || (e10 = uz);
  let n10 = Object.keys(t53), s10 = Object.keys(e10);
  if (n10.length - (i10 && n10.indexOf(i10) > -1 ? 1 : 0) != s10.length - (i10 && s10.indexOf(i10) > -1 ? 1 : 0)) return false;
  for (let o10 of n10) if (o10 != i10 && (-1 == s10.indexOf(o10) || t53[o10] !== e10[o10])) return false;
  return true;
}
function uq(t53, e10, i10) {
  let n10 = false;
  if (e10) for (let s10 in e10) i10 && s10 in i10 || (n10 = true, "style" == s10 ? t53.style.cssText = "" : t53.removeAttribute(s10));
  if (i10) for (let s10 in i10) e10 && e10[s10] == i10[s10] || (n10 = true, "style" == s10 ? t53.style.cssText = i10[s10] : t53.setAttribute(s10, i10[s10]));
  return n10;
}
class u_ extends uv {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(t53, e10, i10, n10, s10, o10) {
    if (i10) {
      if (!(i10 instanceof u_)) return false;
      this.dom || i10.transferDOM(this);
    }
    return n10 && this.setDeco(i10 ? i10.attrs : null), ux(this, t53, e10, i10 ? i10.children.slice() : [], s10, o10), true;
  }
  split(t53) {
    let e10 = new u_();
    if (e10.breakAfter = this.breakAfter, 0 == this.length) return e10;
    let { i: i10, off: n10 } = this.childPos(t53);
    n10 && (e10.append(this.children[i10].split(n10), 0), this.children[i10].merge(n10, this.children[i10].length, null, false, 0, 0), i10++);
    for (let t54 = i10; t54 < this.children.length; t54++) e10.append(this.children[t54], 0);
    for (; i10 > 0 && 0 == this.children[i10 - 1].length; ) this.children[--i10].destroy();
    return this.children.length = i10, this.markDirty(), this.length = t53, e10;
  }
  transferDOM(t53) {
    this.dom && (this.markDirty(), t53.setDOM(this.dom), t53.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t53) {
    uK(this.attrs, t53) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t53);
  }
  append(t53, e10) {
    !function t54(e11, i10, n10) {
      let s10, { children: o10 } = e11;
      n10 > 0 && i10 instanceof uN && o10.length && (s10 = o10[o10.length - 1]) instanceof uN && s10.mark.eq(i10.mark) ? t54(s10, i10.children[0], n10 - 1) : (o10.push(i10), i10.setParent(e11)), e11.length += i10.length;
    }(this, t53, e10);
  }
  addLineDeco(t53) {
    let e10 = t53.spec.attributes, i10 = t53.spec.class;
    e10 && (this.attrs = uW(e10, this.attrs || {})), i10 && (this.attrs = uW({ class: i10 }, this.attrs || {}));
  }
  domAtPos(t53) {
    return uI(this, t53);
  }
  reuseDOM(t53) {
    "DIV" == t53.nodeName && (this.setDOM(t53), this.flags |= 6);
  }
  sync(t53, e10) {
    var i10;
    this.dom ? 4 & this.flags && (ud(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), void 0 !== this.prevAttrs && (uq(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t53, e10);
    let n10 = this.dom.lastChild;
    for (; n10 && uv.get(n10) instanceof uN; ) n10 = n10.lastChild;
    if (!n10 || !this.length || "BR" != n10.nodeName && (null === (i10 = uv.get(n10)) || void 0 === i10 ? void 0 : i10.isEditable) == false && (!uL.ios || !this.children.some((t54) => t54 instanceof uP))) {
      let t54 = document.createElement("BR");
      t54.cmIgnore = true, this.dom.appendChild(t54);
    }
  }
  measureTextSize() {
    if (0 == this.children.length || this.length > 20) return null;
    let t53 = 0, e10;
    for (let i10 of this.children) {
      if (!(i10 instanceof uP) || /[^ -~]/.test(i10.text)) return null;
      let n10 = d6(i10.dom);
      if (1 != n10.length) return null;
      t53 += n10[0].width, e10 = n10[0].height;
    }
    return t53 ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t53 / this.length, textHeight: e10 } : null;
  }
  coordsAt(t53, e10) {
    let i10 = uF(this, t53, e10);
    if (!this.children.length && i10 && this.parent) {
      let { heightOracle: t54 } = this.parent.view.viewState, e11 = i10.bottom - i10.top;
      if (2 > Math.abs(e11 - t54.lineHeight) && t54.textHeight < e11) {
        let n10 = (e11 - t54.textHeight) / 2;
        return { top: i10.top + n10, bottom: i10.bottom - n10, left: i10.left, right: i10.left };
      }
    }
    return i10;
  }
  become(t53) {
    return false;
  }
  covers() {
    return true;
  }
  static find(t53, e10) {
    for (let i10 = 0, n10 = 0; i10 < t53.children.length; i10++) {
      let s10 = t53.children[i10], o10 = n10 + s10.length;
      if (o10 >= e10) {
        if (s10 instanceof u_) return s10;
        if (o10 > e10) break;
      }
      n10 = o10 + s10.breakAfter;
    }
    return null;
  }
}
class uj extends uv {
  constructor(t53, e10, i10) {
    super(), this.widget = t53, this.length = e10, this.deco = i10, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t53, e10, i10, n10, s10, o10) {
    return (!i10 || i10 instanceof uj && !!this.widget.compare(i10.widget) && (!(t53 > 0) || !(s10 <= 0)) && (!(e10 < this.length) || !(o10 <= 0))) && (this.length = t53 + (i10 ? i10.length : 0) + (this.length - e10), true);
  }
  domAtPos(t53) {
    return 0 == t53 ? up.before(this.dom) : up.after(this.dom, t53 == this.length);
  }
  split(t53) {
    let e10 = this.length - t53;
    this.length = t53;
    let i10 = new uj(this.widget, e10, this.deco);
    return i10.breakAfter = this.breakAfter, i10;
  }
  get children() {
    return um;
  }
  sync(t53) {
    this.dom && this.widget.updateDOM(this.dom, t53) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t53)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : s.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t53) {
    return t53 instanceof uj && t53.widget.constructor == this.widget.constructor && (t53.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t53.widget, this.length = t53.length, this.deco = t53.deco, this.breakAfter = t53.breakAfter, true);
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t53) {
    return this.widget.ignoreEvent(t53);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(t53, e10) {
    return this.widget.coordsAt(this.dom, t53, e10);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t53) {
    let { startSide: e10, endSide: i10 } = this.deco;
    return e10 != i10 && (t53 < 0 ? e10 < 0 : i10 > 0);
  }
}
class uG {
  eq(t53) {
    return false;
  }
  updateDOM(t53, e10) {
    return false;
  }
  compare(t53) {
    return this == t53 || this.constructor == t53.constructor && this.eq(t53);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t53) {
    return true;
  }
  coordsAt(t53, e10, i10) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(t53) {
  }
}
var uU = ((R = uU || (uU = {}))[R.Text = 0] = "Text", R[R.WidgetBefore = 1] = "WidgetBefore", R[R.WidgetAfter = 2] = "WidgetAfter", R[R.WidgetRange = 3] = "WidgetRange", R);
class u$ extends tL {
  constructor(t53, e10, i10, n10) {
    super(), this.startSide = t53, this.endSide = e10, this.widget = i10, this.spec = n10;
  }
  get heightRelevant() {
    return false;
  }
  static mark(t53) {
    return new uY(t53);
  }
  static widget(t53) {
    let e10 = Math.max(-1e4, Math.min(1e4, t53.side || 0)), i10 = !!t53.block;
    return e10 += i10 && !t53.inlineOrder ? e10 > 0 ? 3e8 : -4e8 : e10 > 0 ? 1e8 : -1e8, new uJ(t53, e10, e10, i10, t53.widget || null, false);
  }
  static replace(t53) {
    let e10 = !!t53.block, i10, n10;
    if (t53.isBlockGap) i10 = -5e8, n10 = 4e8;
    else {
      let { start: s10, end: o10 } = uQ(t53, e10);
      i10 = (s10 ? e10 ? -3e8 : -1 : 5e8) - 1, n10 = (o10 ? e10 ? 2e8 : 1 : -6e8) + 1;
    }
    return new uJ(t53, i10, n10, e10, t53.widget || null, true);
  }
  static line(t53) {
    return new uX(t53);
  }
  static set(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return tV.of(t53, e10);
  }
  hasHeight() {
    return !!this.widget && this.widget.estimatedHeight > -1;
  }
}
u$.none = tV.empty;
class uY extends u$ {
  constructor(t53) {
    let { start: e10, end: i10 } = uQ(t53);
    super(e10 ? -1 : 5e8, i10 ? 1 : -6e8, null, t53), this.tagName = t53.tagName || "span", this.class = t53.class || "", this.attrs = t53.attributes || null;
  }
  eq(t53) {
    var e10, i10;
    return this == t53 || t53 instanceof uY && this.tagName == t53.tagName && (this.class || (null === (e10 = this.attrs) || void 0 === e10 ? void 0 : e10.class)) == (t53.class || (null === (i10 = t53.attrs) || void 0 === i10 ? void 0 : i10.class)) && uK(this.attrs, t53.attrs, "class");
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (t53 >= e10) throw RangeError("Mark decorations may not be empty");
    return super.range(t53, e10);
  }
}
uY.prototype.point = false;
class uX extends u$ {
  constructor(t53) {
    super(-2e8, -2e8, null, t53);
  }
  eq(t53) {
    return t53 instanceof uX && this.spec.class == t53.spec.class && uK(this.spec.attributes, t53.spec.attributes);
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (e10 != t53) throw RangeError("Line decoration ranges must be zero-length");
    return super.range(t53, e10);
  }
}
uX.prototype.mapMode = I.TrackBefore, uX.prototype.point = true;
class uJ extends u$ {
  constructor(t53, e10, i10, n10, s10, o10) {
    super(e10, i10, s10, t53), this.block = n10, this.isReplace = o10, this.mapMode = n10 ? e10 <= 0 ? I.TrackBefore : I.TrackAfter : I.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? uU.WidgetRange : this.startSide <= 0 ? uU.WidgetBefore : uU.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t53) {
    var e10, i10;
    return t53 instanceof uJ && ((e10 = this.widget) == (i10 = t53.widget) || !!(e10 && i10 && e10.compare(i10))) && this.block == t53.block && this.startSide == t53.startSide && this.endSide == t53.endSide;
  }
  range(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t53;
    if (this.isReplace && (t53 > e10 || t53 == e10 && this.startSide > 0 && this.endSide <= 0)) throw RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e10 != t53) throw RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t53, e10);
  }
}
function uQ(t53) {
  let e10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], { inclusiveStart: i10, inclusiveEnd: n10 } = t53;
  return null == i10 && (i10 = t53.inclusive), null == n10 && (n10 = t53.inclusive), { start: null != i10 ? i10 : e10, end: null != n10 ? n10 : e10 };
}
function uZ(t53, e10, i10) {
  let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s10 = i10.length - 1;
  s10 >= 0 && i10[s10] + n10 >= t53 ? i10[s10] = Math.max(i10[s10], e10) : i10.push(t53, e10);
}
uJ.prototype.point = true;
class u0 {
  constructor(t53, e10, i10, n10) {
    this.doc = t53, this.pos = e10, this.end = i10, this.disallowBlockEffectsFor = n10, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t53.iter(), this.skip = e10;
  }
  posCovered() {
    if (0 == this.content.length) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t53 = this.content[this.content.length - 1];
    return !(t53.breakAfter || t53 instanceof uj && t53.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new u_()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.bufferMarks;
    this.pendingBuffer && (this.curLine.append(u1(new uV(-1), t53), t53.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t53) {
    this.flushBuffer(), this.curLine = null, this.content.push(t53);
  }
  finish(t53) {
    this.pendingBuffer && t53 <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || t53 && this.content.length && this.content[this.content.length - 1] instanceof uj || this.getLine();
  }
  buildText(t53, e10, i10) {
    for (; t53 > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: e11, lineBreak: i11, done: n11 } = this.cursor.next(this.skip);
        if (this.skip = 0, n11) throw Error("Ran out of text content when drawing inline views");
        if (i11) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t53--;
          continue;
        }
        this.text = e11, this.textOff = 0;
      }
      let n10 = Math.min(this.text.length - this.textOff, t53, 512);
      this.flushBuffer(e10.slice(e10.length - i10)), this.getLine().append(u1(new uP(this.text.slice(this.textOff, this.textOff + n10)), e10), i10), this.atCursorPos = true, this.textOff += n10, t53 -= n10, i10 = 0;
    }
  }
  span(t53, e10, i10, n10) {
    this.buildText(e10 - t53, i10, n10), this.pos = e10, this.openStart < 0 && (this.openStart = n10);
  }
  point(t53, e10, i10, n10, s10, o10) {
    if (this.disallowBlockEffectsFor[o10] && i10 instanceof uJ) {
      if (i10.block) throw RangeError("Block decorations may not be specified via plugins");
      if (e10 > this.doc.lineAt(this.pos).to) throw RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let r10 = e10 - t53;
    if (i10 instanceof uJ) {
      if (i10.block) i10.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new uj(i10.widget || u2.block, r10, i10));
      else {
        let o11 = uH.create(i10.widget || u2.inline, r10, r10 ? 0 : i10.startSide), l10 = this.atCursorPos && !o11.isEditable && s10 <= n10.length && (t53 < e10 || i10.startSide > 0), h10 = !o11.isEditable && (t53 < e10 || s10 > n10.length || i10.startSide <= 0), a10 = this.getLine();
        2 != this.pendingBuffer || l10 || o11.isEditable || (this.pendingBuffer = 0), this.flushBuffer(n10), l10 && (a10.append(u1(new uV(1), n10), s10), s10 = n10.length + Math.max(0, s10 - n10.length)), a10.append(u1(o11, n10), s10), this.atCursorPos = h10, this.pendingBuffer = h10 ? t53 < e10 || s10 > n10.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n10.slice());
      }
    } else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i10);
    r10 && (this.textOff + r10 <= this.text.length ? this.textOff += r10 : (this.skip += r10 - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e10), this.openStart < 0 && (this.openStart = s10);
  }
  static build(t53, e10, i10, n10, s10) {
    let o10 = new u0(t53, e10, i10, s10);
    return o10.openEnd = tV.spans(n10, e10, i10, o10), o10.openStart < 0 && (o10.openStart = o10.openEnd), o10.finish(o10.openEnd), o10;
  }
}
function u1(t53, e10) {
  for (let i10 of e10) t53 = new uN(i10, [t53], t53.length);
  return t53;
}
class u2 extends uG {
  constructor(t53) {
    super(), this.tag = t53;
  }
  eq(t53) {
    return t53.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t53) {
    return t53.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
u2.inline = new u2("span"), u2.block = new u2("div");
var u8 = ((L = u8 || (u8 = {}))[L.LTR = 0] = "LTR", L[L.RTL = 1] = "RTL", L);
let u3 = u8.LTR, u4 = u8.RTL;
function u5(t53) {
  let e10 = [];
  for (let i10 = 0; i10 < t53.length; i10++) e10.push(1 << +t53[i10]);
  return e10;
}
let u9 = u5("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), u6 = u5("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), u7 = /* @__PURE__ */ Object.create(null), ft = [];
for (let t53 of ["()", "[]", "{}"]) {
  let e10 = t53.charCodeAt(0), i10 = t53.charCodeAt(1);
  u7[e10] = i10, u7[i10] = -e10;
}
function fe(t53) {
  return t53 <= 247 ? u9[t53] : 1424 <= t53 && t53 <= 1524 ? 2 : 1536 <= t53 && t53 <= 1785 ? u6[t53 - 1536] : 1774 <= t53 && t53 <= 2220 ? 4 : 8192 <= t53 && t53 <= 8204 ? 256 : 64336 <= t53 && t53 <= 65023 ? 4 : 1;
}
let fi = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class fn {
  get dir() {
    return this.level % 2 ? u4 : u3;
  }
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.level = i10;
  }
  side(t53, e10) {
    return this.dir == e10 == t53 ? this.to : this.from;
  }
  forward(t53, e10) {
    return t53 == (this.dir == e10);
  }
  static find(t53, e10, i10, n10) {
    let s10 = -1;
    for (let o10 = 0; o10 < t53.length; o10++) {
      let r10 = t53[o10];
      if (r10.from <= e10 && r10.to >= e10) {
        if (r10.level == i10) return o10;
        (s10 < 0 || (0 != n10 ? n10 < 0 ? r10.from < e10 : r10.to > e10 : t53[s10].level > r10.level)) && (s10 = o10);
      }
    }
    if (s10 < 0) throw RangeError("Index out of range");
    return s10;
  }
}
let fs = [];
function fo(t53) {
  return [new fn(0, t53, 0)];
}
let fr = "", fl = J.define(), fh = J.define(), fa = J.define(), fc = J.define(), fd = J.define(), fu = J.define(), ff = J.define(), fg = J.define({ combine: (t53) => t53.some((t54) => t54) }), fp = J.define({ combine: (t53) => t53.some((t54) => t54) }), fm = J.define();
class fv {
  constructor(t53, e10 = "nearest", i10 = "nearest", n10 = 5, s10 = 5, o10 = false) {
    this.range = t53, this.y = e10, this.x = i10, this.yMargin = n10, this.xMargin = s10, this.isSnapshot = o10;
  }
  map(t53) {
    return t53.empty ? this : new fv(this.range.map(t53), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t53) {
    return this.range.to <= t53.doc.length ? this : new fv($.cursor(t53.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
let fw = tk.define({ map: (t53, e10) => t53.map(e10) });
function fb(t53, e10, i10) {
  let n10 = t53.facet(fc);
  n10.length ? n10[0](e10) : window.onerror ? window.onerror(String(e10), i10, void 0, void 0, e10) : i10 ? console.error(i10 + ":", e10) : console.error(e10);
}
let fy = J.define({ combine: (t53) => !t53.length || t53[0] }), fx = 0, fS = J.define();
class fk {
  constructor(t53, e10, i10, n10, s10) {
    this.id = t53, this.create = e10, this.domEventHandlers = i10, this.domEventObservers = n10, this.extension = s10(this);
  }
  static define(t53, e10) {
    let { eventHandlers: i10, eventObservers: n10, provide: s10, decorations: o10 } = e10 || {};
    return new fk(fx++, t53, i10, n10, (t54) => {
      let e11 = [fS.of(t54)];
      return o10 && e11.push(fD.of((e12) => {
        let i11 = e12.plugin(t54);
        return i11 ? o10(i11) : u$.none;
      })), s10 && e11.push(s10(t54)), e11;
    });
  }
  static fromClass(t53, e10) {
    return fk.define((e11) => new t53(e11), e10);
  }
}
class fM {
  constructor(t53) {
    this.spec = t53, this.mustUpdate = null, this.value = null;
  }
  update(t53) {
    if (this.value) {
      if (this.mustUpdate) {
        let t54 = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(t54);
        } catch (e10) {
          if (fb(t54.state, e10, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch (t55) {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.create(t53);
    } catch (e10) {
      fb(t53.state, e10, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(t53) {
    var e10;
    if (null === (e10 = this.value) || void 0 === e10 ? void 0 : e10.destroy) try {
      this.value.destroy();
    } catch (e11) {
      fb(t53.state, e11, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
let fA = J.define(), fC = J.define(), fD = J.define(), fO = J.define(), fT = J.define(), fE = J.define();
function fB(t53, e10) {
  let i10 = t53.state.facet(fE);
  if (!i10.length) return i10;
  let n10 = i10.map((e11) => e11 instanceof Function ? e11(t53) : e11), s10 = [];
  return tV.spans(n10, e10.from, e10.to, { point() {
  }, span(t54, i11, n11, o10) {
    let r10 = t54 - e10.from, l10 = i11 - e10.from, h10 = s10;
    for (let t55 = n11.length - 1; t55 >= 0; t55--, o10--) {
      let i12 = n11[t55].spec.bidiIsolate, s11;
      if (null == i12 && (i12 = function(t56, e11, i13) {
        for (let n12 = e11; n12 < i13; n12++) {
          let e12 = fe(t56.charCodeAt(n12));
          if (1 == e12) break;
          if (2 == e12 || 4 == e12) return u4;
        }
        return u3;
      }(e10.text, r10, l10)), o10 > 0 && h10.length && (s11 = h10[h10.length - 1]).to == r10 && s11.direction == i12) s11.to = l10, h10 = s11.inner;
      else {
        let t56 = { from: r10, to: l10, direction: i12, inner: [] };
        h10.push(t56), h10 = t56.inner;
      }
    }
  } }), s10;
}
let fR = J.define();
function fL(t53) {
  let e10 = 0, i10 = 0, n10 = 0, s10 = 0;
  for (let o10 of t53.state.facet(fR)) {
    let r10 = o10(t53);
    r10 && (null != r10.left && (e10 = Math.max(e10, r10.left)), null != r10.right && (i10 = Math.max(i10, r10.right)), null != r10.top && (n10 = Math.max(n10, r10.top)), null != r10.bottom && (s10 = Math.max(s10, r10.bottom)));
  }
  return { left: e10, right: i10, top: n10, bottom: s10 };
}
let fP = J.define();
class fN {
  constructor(t53, e10, i10, n10) {
    this.fromA = t53, this.toA = e10, this.fromB = i10, this.toB = n10;
  }
  join(t53) {
    return new fN(Math.min(this.fromA, t53.fromA), Math.max(this.toA, t53.toA), Math.min(this.fromB, t53.fromB), Math.max(this.toB, t53.toB));
  }
  addToSet(t53) {
    let e10 = t53.length, i10 = this;
    for (; e10 > 0; e10--) {
      let n10 = t53[e10 - 1];
      if (!(n10.fromA > i10.toA)) {
        if (n10.toA < i10.fromA) break;
        i10 = i10.join(n10), t53.splice(e10 - 1, 1);
      }
    }
    return t53.splice(e10, 0, i10), t53;
  }
  static extendWithRanges(t53, e10) {
    if (0 == e10.length) return t53;
    let i10 = [];
    for (let n10 = 0, s10 = 0, o10 = 0, r10 = 0; ; n10++) {
      let l10 = n10 == t53.length ? null : t53[n10], h10 = o10 - r10, a10 = l10 ? l10.fromB : 1e9;
      for (; s10 < e10.length && e10[s10] < a10; ) {
        let t54 = e10[s10], n11 = e10[s10 + 1], o11 = Math.max(r10, t54), l11 = Math.min(a10, n11);
        if (o11 <= l11 && new fN(o11 + h10, l11 + h10, o11, l11).addToSet(i10), n11 > a10) break;
        s10 += 2;
      }
      if (!l10) return i10;
      new fN(l10.fromA, l10.toA, l10.fromB, l10.toB).addToSet(i10), o10 = l10.toA, r10 = l10.toB;
    }
  }
}
class fH {
  constructor(t53, e10, i10) {
    for (let n11 of (this.view = t53, this.state = e10, this.transactions = i10, this.flags = 0, this.startState = t53.state, this.changes = W.empty(this.startState.doc.length), i10)) this.changes = this.changes.compose(n11.changes);
    let n10 = [];
    this.changes.iterChangedRanges((t54, e11, i11, s10) => n10.push(new fN(t54, e11, i11, s10))), this.changedRanges = n10;
  }
  static create(t53, e10, i10) {
    return new fH(t53, e10, i10);
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
    return this.transactions.some((t53) => t53.selection);
  }
  get empty() {
    return 0 == this.flags && 0 == this.transactions.length;
  }
}
class fV extends uv {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t53) {
    super(), this.view = t53, this.decorations = [], this.dynamicDecorationMap = [], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t53.contentDOM), this.children = [new u_()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new fN(0, 0, 0, t53.state.doc.length)], 0, null);
  }
  update(t53) {
    var e10, i10, n10, s10, o10, r10;
    let l10, h10;
    let a10 = t53.changedRanges;
    this.minWidth > 0 && a10.length && (a10.every((t54) => {
      let { fromA: e11, toA: i11 } = t54;
      return i11 < this.minWidthFrom || e11 > this.minWidthTo;
    }) ? (this.minWidthFrom = t53.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t53.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let c10 = -1;
    !(this.view.inputState.composing >= 0) || ((null === (e10 = this.domChanged) || void 0 === e10 ? void 0 : e10.newSel) ? c10 = this.domChanged.newSel.head : (i10 = t53.changes, n10 = this.hasComposition, l10 = false, n10 && i10.iterChangedRanges((t54, e11) => {
      t54 < n10.to && e11 > n10.from && (l10 = true);
    }), l10 || t53.selectionSet || (c10 = t53.state.selection.main.head)));
    let d10 = c10 > -1 ? function(t54, e11, i11) {
      let n11 = fF(t54, i11);
      if (!n11) return null;
      let { node: s11, from: o11, to: r11 } = n11, l11 = s11.nodeValue;
      if (/[\n\r]/.test(l11) || t54.state.doc.sliceString(n11.from, n11.to) != l11) return null;
      let h11 = e11.invertedDesc, a11 = new fN(h11.mapPos(o11), h11.mapPos(r11), o11, r11), c11 = [];
      for (let e12 = s11.parentNode; ; e12 = e12.parentNode) {
        let i12 = uv.get(e12);
        if (i12 instanceof uN) c11.push({ node: e12, deco: i12.mark });
        else {
          if (i12 instanceof u_ || "DIV" == e12.nodeName && e12.parentNode == t54.contentDOM) return { range: a11, text: s11, marks: c11, line: e12 };
          if (e12 == t54.contentDOM) return null;
          c11.push({ node: e12, deco: new uY({ inclusive: true, attributes: function(t55) {
            let e13 = /* @__PURE__ */ Object.create(null);
            for (let i13 = 0; i13 < t55.attributes.length; i13++) {
              let n12 = t55.attributes[i13];
              e13[n12.name] = n12.value;
            }
            return e13;
          }(e12), tagName: e12.tagName.toLowerCase() }) });
        }
      }
    }(this.view, t53.changes, c10) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: e11, to: i11 } = this.hasComposition;
      a10 = new fN(e11, i11, t53.changes.mapPos(e11, -1), t53.changes.mapPos(i11, 1)).addToSet(a10.slice());
    }
    this.hasComposition = d10 ? { from: d10.range.fromB, to: d10.range.toB } : null, (uL.ie || uL.chrome) && !d10 && t53 && t53.state.doc.lines != t53.startState.doc.lines && (this.forceSelection = true);
    let u10 = (s10 = this.decorations, o10 = this.updateDeco(), r10 = t53.changes, h10 = new fW(), tV.compare(s10, o10, r10, h10), h10.changes);
    return a10 = fN.extendWithRanges(a10, u10), (!!(7 & this.flags) || 0 != a10.length) && (this.updateInner(a10, t53.startState.doc.length, d10), t53.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(t53, e10, i10) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(t53, e10, i10);
    let { observer: n10 } = this.view;
    n10.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let t54 = uL.chrome || uL.ios ? { node: n10.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, t54), this.flags &= -8, t54 && (t54.written || n10.selectionRange.focusNode != t54.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((t54) => t54.flags &= -9);
    let s10 = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let t54 of this.children) t54 instanceof uj && t54.widget instanceof fI && s10.push(t54.dom);
    n10.updateGaps(s10);
  }
  updateChildren(t53, e10, i10) {
    let n10 = i10 ? i10.range.addToSet(t53.slice()) : t53, s10 = this.childCursor(e10);
    for (let t54 = n10.length - 1; ; t54--) {
      let e11 = t54 >= 0 ? n10[t54] : null;
      if (!e11) break;
      let { fromA: o10, toA: r10, fromB: l10, toB: h10 } = e11, a10, c10, d10, u10;
      if (i10 && i10.range.fromB < h10 && i10.range.toB > l10) {
        let t55 = u0.build(this.view.state.doc, l10, i10.range.fromB, this.decorations, this.dynamicDecorationMap), e12 = u0.build(this.view.state.doc, i10.range.toB, h10, this.decorations, this.dynamicDecorationMap);
        c10 = t55.breakAtStart, d10 = t55.openStart, u10 = e12.openEnd;
        let n11 = this.compositionView(i10);
        e12.breakAtStart ? n11.breakAfter = 1 : e12.content.length && n11.merge(n11.length, n11.length, e12.content[0], false, e12.openStart, 0) && (n11.breakAfter = e12.content[0].breakAfter, e12.content.shift()), t55.content.length && n11.merge(0, 0, t55.content[t55.content.length - 1], true, 0, t55.openEnd) && t55.content.pop(), a10 = t55.content.concat(n11).concat(e12.content);
      } else ({ content: a10, breakAtStart: c10, openStart: d10, openEnd: u10 } = u0.build(this.view.state.doc, l10, h10, this.decorations, this.dynamicDecorationMap));
      let { i: f10, off: g10 } = s10.findPos(r10, 1), { i: p10, off: m2 } = s10.findPos(o10, -1);
      uy(this, p10, m2, f10, g10, a10, c10, d10, u10);
    }
    i10 && this.fixCompositionDOM(i10);
  }
  compositionView(t53) {
    let e10 = new uP(t53.text.nodeValue);
    for (let { deco: i11 } of (e10.flags |= 8, t53.marks)) e10 = new uN(i11, [e10], e10.length);
    let i10 = new u_();
    return i10.append(e10, 0), i10;
  }
  fixCompositionDOM(t53) {
    let e10 = (t54, e11) => {
      e11.flags |= 8 | (e11.children.some((t55) => 7 & t55.flags) ? 1 : 0), this.markedForComposition.add(e11);
      let i11 = uv.get(t54);
      i11 && i11 != e11 && (i11.dom = null), e11.setDOM(t54);
    }, i10 = this.childPos(t53.range.fromB, 1), n10 = this.children[i10.i];
    e10(t53.line, n10);
    for (let s10 = t53.marks.length - 1; s10 >= -1; s10--) i10 = n10.childPos(i10.off, 1), n10 = n10.children[i10.i], e10(s10 >= 0 ? t53.marks[s10].node : t53.text, n10);
  }
  updateSelection() {
    var t53;
    let e10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (e10 || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n10 = this.view.root.activeElement, s10 = n10 == this.dom, o10 = !s10 && d9(this.dom, this.view.observer.selectionRange) && !(n10 && this.dom.contains(n10));
    if (!(s10 || i10 || o10)) return;
    let r10 = this.forceSelection;
    this.forceSelection = false;
    let l10 = this.view.state.selection.main, h10 = this.moveToLine(this.domAtPos(l10.anchor)), a10 = l10.empty ? h10 : this.moveToLine(this.domAtPos(l10.head));
    if (uL.gecko && l10.empty && !this.hasComposition && 1 == (t53 = h10).node.nodeType && t53.node.firstChild && (0 == t53.offset || "false" == t53.node.childNodes[t53.offset - 1].contentEditable) && (t53.offset == t53.node.childNodes.length || "false" == t53.node.childNodes[t53.offset].contentEditable)) {
      let t54 = document.createTextNode("");
      this.view.observer.ignore(() => h10.node.insertBefore(t54, h10.node.childNodes[h10.offset] || null)), h10 = a10 = new up(t54, 0), r10 = true;
    }
    let c10 = this.view.observer.selectionRange;
    !r10 && c10.focusNode && (d7(h10.node, h10.offset, c10.anchorNode, c10.anchorOffset) && d7(a10.node, a10.offset, c10.focusNode, c10.focusOffset) || this.suppressWidgetCursorChange(c10, l10)) || (this.view.observer.ignore(() => {
      uL.android && uL.chrome && this.dom.contains(c10.focusNode) && function(t55, e12) {
        for (let i12 = t55; i12 && i12 != e12; i12 = i12.assignedSlot || i12.parentNode) if (1 == i12.nodeType && "false" == i12.contentEditable) return true;
        return false;
      }(c10.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let t54 = d4(this.view.root);
      if (t54) {
        if (l10.empty) {
          if (uL.gecko) {
            var e11, i11;
            let t55 = (e11 = h10.node, i11 = h10.offset, 1 != e11.nodeType ? 0 : (i11 && "false" == e11.childNodes[i11 - 1].contentEditable ? 1 : 0) | (i11 < e11.childNodes.length && "false" == e11.childNodes[i11].contentEditable ? 2 : 0));
            if (t55 && 3 != t55) {
              let e12 = (1 == t55 ? uf : ug)(h10.node, h10.offset);
              e12 && (h10 = new up(e12.node, e12.offset));
            }
          }
          t54.collapse(h10.node, h10.offset), null != l10.bidiLevel && void 0 !== t54.caretBidiLevel && (t54.caretBidiLevel = l10.bidiLevel);
        } else if (t54.extend) {
          t54.collapse(h10.node, h10.offset);
          try {
            t54.extend(a10.node, a10.offset);
          } catch (t55) {
          }
        } else {
          let e12 = document.createRange();
          l10.anchor > l10.head && ([h10, a10] = [a10, h10]), e12.setEnd(a10.node, a10.offset), e12.setStart(h10.node, h10.offset), t54.removeAllRanges(), t54.addRange(e12);
        }
      }
      o10 && this.view.root.activeElement == this.dom && (this.dom.blur(), n10 && n10.focus());
    }), this.view.observer.setSelectionRange(h10, a10)), this.impreciseAnchor = h10.precise ? null : new up(c10.anchorNode, c10.anchorOffset), this.impreciseHead = a10.precise ? null : new up(c10.focusNode, c10.focusOffset);
  }
  suppressWidgetCursorChange(t53, e10) {
    return this.hasComposition && e10.empty && d7(t53.focusNode, t53.focusOffset, t53.anchorNode, t53.anchorOffset) && this.posFromDOM(t53.focusNode, t53.focusOffset) == e10.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: t53 } = this, e10 = t53.state.selection.main, i10 = d4(t53.root), { anchorNode: n10, anchorOffset: s10 } = t53.observer.selectionRange;
    if (!i10 || !e10.empty || !e10.assoc || !i10.modify) return;
    let o10 = u_.find(this, e10.head);
    if (!o10) return;
    let r10 = o10.posAtStart;
    if (e10.head == r10 || e10.head == r10 + o10.length) return;
    let l10 = this.coordsAt(e10.head, -1), h10 = this.coordsAt(e10.head, 1);
    if (!l10 || !h10 || l10.bottom > h10.top) return;
    let a10 = this.domAtPos(e10.head + e10.assoc);
    i10.collapse(a10.node, a10.offset), i10.modify("move", e10.assoc < 0 ? "forward" : "backward", "lineboundary"), t53.observer.readSelectionRange();
    let c10 = t53.observer.selectionRange;
    t53.docView.posFromDOM(c10.anchorNode, c10.anchorOffset) != e10.from && i10.collapse(n10, s10);
  }
  moveToLine(t53) {
    let e10 = this.dom, i10;
    if (t53.node != e10) return t53;
    for (let n10 = t53.offset; !i10 && n10 < e10.childNodes.length; n10++) {
      let t54 = uv.get(e10.childNodes[n10]);
      t54 instanceof u_ && (i10 = t54.domAtPos(0));
    }
    for (let n10 = t53.offset - 1; !i10 && n10 >= 0; n10--) {
      let t54 = uv.get(e10.childNodes[n10]);
      t54 instanceof u_ && (i10 = t54.domAtPos(t54.length));
    }
    return i10 ? new up(i10.node, i10.offset, true) : t53;
  }
  nearest(t53) {
    for (let e10 = t53; e10; ) {
      let t54 = uv.get(e10);
      if (t54 && t54.rootView == this) return t54;
      e10 = e10.parentNode;
    }
    return null;
  }
  posFromDOM(t53, e10) {
    let i10 = this.nearest(t53);
    if (!i10) throw RangeError("Trying to find position for a DOM position outside of the document");
    return i10.localPosFromDOM(t53, e10) + i10.posAtStart;
  }
  domAtPos(t53) {
    let { i: e10, off: i10 } = this.childCursor().findPos(t53, -1);
    for (; e10 < this.children.length - 1; ) {
      let t54 = this.children[e10];
      if (i10 < t54.length || t54 instanceof u_) break;
      e10++, i10 = 0;
    }
    return this.children[e10].domAtPos(i10);
  }
  coordsAt(t53, e10) {
    let i10 = null, n10 = 0;
    for (let s10 = this.length, o10 = this.children.length - 1; o10 >= 0; o10--) {
      let r10 = this.children[o10], l10 = s10 - r10.breakAfter, h10 = l10 - r10.length;
      if (l10 < t53) break;
      if (h10 <= t53 && (h10 < t53 || r10.covers(-1)) && (l10 > t53 || r10.covers(1)) && (!i10 || r10 instanceof u_ && !(i10 instanceof u_ && e10 >= 0))) i10 = r10, n10 = h10;
      else if (i10 && h10 == t53 && l10 == t53 && r10 instanceof uj && 2 > Math.abs(e10)) {
        if (r10.deco.startSide < 0) break;
        o10 && (i10 = null);
      }
      s10 = h10;
    }
    return i10 ? i10.coordsAt(t53 - n10, e10) : null;
  }
  coordsForChar(t53) {
    let { i: e10, off: i10 } = this.childPos(t53, 1), n10 = this.children[e10];
    if (!(n10 instanceof u_)) return null;
    for (; n10.children.length; ) {
      let { i: t54, off: e11 } = n10.childPos(i10, 1);
      for (; ; t54++) {
        if (t54 == n10.children.length) return null;
        if ((n10 = n10.children[t54]).length) break;
      }
      i10 = e11;
    }
    if (!(n10 instanceof uP)) return null;
    let s10 = p(n10.text, i10);
    if (s10 == i10) return null;
    let o10 = ua(n10.dom, i10, s10).getClientRects();
    for (let t54 = 0; t54 < o10.length; t54++) {
      let e11 = o10[t54];
      if (t54 == o10.length - 1 || e11.top < e11.bottom && e11.left < e11.right) return e11;
    }
    return null;
  }
  measureVisibleLineHeights(t53) {
    let e10 = [], { from: i10, to: n10 } = t53, s10 = this.view.contentDOM.clientWidth, o10 = s10 > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, r10 = -1, l10 = this.view.textDirection == u8.LTR;
    for (let t54 = 0, h10 = 0; h10 < this.children.length; h10++) {
      let a10 = this.children[h10], c10 = t54 + a10.length;
      if (c10 > n10) break;
      if (t54 >= i10) {
        let i11 = a10.dom.getBoundingClientRect();
        if (e10.push(i11.height), o10) {
          let e11 = a10.dom.lastChild, n11 = e11 ? d6(e11) : [];
          if (n11.length) {
            let e12 = n11[n11.length - 1], o11 = l10 ? e12.right - i11.left : i11.right - e12.left;
            o11 > r10 && (r10 = o11, this.minWidth = s10, this.minWidthFrom = t54, this.minWidthTo = c10);
          }
        }
      }
      t54 = c10 + a10.breakAfter;
    }
    return e10;
  }
  textDirectionAt(t53) {
    let { i: e10 } = this.childPos(t53, 1);
    return "rtl" == getComputedStyle(this.children[e10].dom).direction ? u8.RTL : u8.LTR;
  }
  measureTextSize() {
    for (let t54 of this.children) if (t54 instanceof u_) {
      let e11 = t54.measureTextSize();
      if (e11) return e11;
    }
    let t53 = document.createElement("div"), e10, i10, n10;
    return t53.className = "cm-line", t53.style.width = "99999px", t53.style.position = "absolute", t53.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t53);
      let s10 = d6(t53.firstChild)[0];
      e10 = t53.getBoundingClientRect().height, i10 = s10 ? s10.width / 27 : 7, n10 = s10 ? s10.height : e10, t53.remove();
    }), { lineHeight: e10, charWidth: i10, textHeight: n10 };
  }
  childCursor() {
    let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.length, e10 = this.children.length;
    return e10 && (t53 -= this.children[--e10].length), new ub(this.children, t53, e10);
  }
  computeBlockGapDeco() {
    let t53 = [], e10 = this.view.viewState;
    for (let i10 = 0, n10 = 0; ; n10++) {
      let s10 = n10 == e10.viewports.length ? null : e10.viewports[n10], o10 = s10 ? s10.from - 1 : this.length;
      if (o10 > i10) {
        let n11 = (e10.lineBlockAt(o10).bottom - e10.lineBlockAt(i10).top) / this.view.scaleY;
        t53.push(u$.replace({ widget: new fI(n11), block: true, inclusive: true, isBlockGap: true }).range(i10, o10));
      }
      if (!s10) break;
      i10 = s10.to + 1;
    }
    return u$.set(t53);
  }
  updateDeco() {
    let t53 = 0, e10 = this.view.state.facet(fD).map((e11) => (this.dynamicDecorationMap[t53++] = "function" == typeof e11) ? e11(this.view) : e11), i10 = false, n10 = this.view.state.facet(fO).map((t54, e11) => {
      let n11 = "function" == typeof t54;
      return n11 && (i10 = true), n11 ? t54(this.view) : t54;
    });
    for (n10.length && (this.dynamicDecorationMap[t53++] = i10, e10.push(tV.join(n10))), this.decorations = [...e10, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t53 < this.decorations.length; ) this.dynamicDecorationMap[t53++] = false;
    return this.decorations;
  }
  scrollIntoView(t53) {
    if (t53.isSnapshot) {
      let e11 = this.view.viewState.lineBlockAt(t53.range.head);
      this.view.scrollDOM.scrollTop = e11.top - t53.yMargin, this.view.scrollDOM.scrollLeft = t53.xMargin;
      return;
    }
    for (let e11 of this.view.state.facet(fm)) try {
      if (e11(this.view, t53.range, t53)) return true;
    } catch (t54) {
      fb(this.view.state, t54, "scroll handler");
    }
    let { range: e10 } = t53, i10 = this.coordsAt(e10.head, e10.empty ? e10.assoc : e10.head > e10.anchor ? -1 : 1), n10;
    if (!i10) return;
    !e10.empty && (n10 = this.coordsAt(e10.anchor, e10.anchor > e10.head ? -1 : 1)) && (i10 = { left: Math.min(i10.left, n10.left), top: Math.min(i10.top, n10.top), right: Math.max(i10.right, n10.right), bottom: Math.max(i10.bottom, n10.bottom) });
    let s10 = fL(this.view), o10 = { left: i10.left - s10.left, top: i10.top - s10.top, right: i10.right + s10.right, bottom: i10.bottom + s10.bottom }, { offsetWidth: r10, offsetHeight: l10 } = this.view.scrollDOM;
    !function(t54, e11, i11, n11, s11, o11, r11, l11) {
      let h10 = t54.ownerDocument, a10 = h10.defaultView || window;
      for (let c10 = t54, d10 = false; c10 && !d10; ) if (1 == c10.nodeType) {
        let t55, u10 = c10 == h10.body, f10 = 1, g10 = 1;
        if (u10) t55 = function(t56) {
          let e12 = t56.visualViewport;
          return e12 ? { left: 0, right: e12.width, top: 0, bottom: e12.height } : { left: 0, right: t56.innerWidth, top: 0, bottom: t56.innerHeight };
        }(a10);
        else {
          if (/^(fixed|sticky)$/.test(getComputedStyle(c10).position) && (d10 = true), c10.scrollHeight <= c10.clientHeight && c10.scrollWidth <= c10.clientWidth) {
            c10 = c10.assignedSlot || c10.parentNode;
            continue;
          }
          let e12 = c10.getBoundingClientRect();
          ({ scaleX: f10, scaleY: g10 } = uo(c10, e12)), t55 = { left: e12.left, right: e12.left + c10.clientWidth * f10, top: e12.top, bottom: e12.top + c10.clientHeight * g10 };
        }
        let p10 = 0, m2 = 0;
        if ("nearest" == s11) e11.top < t55.top ? (m2 = -(t55.top - e11.top + r11), i11 > 0 && e11.bottom > t55.bottom + m2 && (m2 = e11.bottom - t55.bottom + m2 + r11)) : e11.bottom > t55.bottom && (m2 = e11.bottom - t55.bottom + r11, i11 < 0 && e11.top - m2 < t55.top && (m2 = -(t55.top + m2 - e11.top + r11)));
        else {
          let n12 = e11.bottom - e11.top, o12 = t55.bottom - t55.top;
          m2 = ("center" == s11 && n12 <= o12 ? e11.top + n12 / 2 - o12 / 2 : "start" == s11 || "center" == s11 && i11 < 0 ? e11.top - r11 : e11.bottom - o12 + r11) - t55.top;
        }
        if ("nearest" == n11 ? e11.left < t55.left ? (p10 = -(t55.left - e11.left + o11), i11 > 0 && e11.right > t55.right + p10 && (p10 = e11.right - t55.right + p10 + o11)) : e11.right > t55.right && (p10 = e11.right - t55.right + o11, i11 < 0 && e11.left < t55.left + p10 && (p10 = -(t55.left + p10 - e11.left + o11))) : p10 = ("center" == n11 ? e11.left + (e11.right - e11.left) / 2 - (t55.right - t55.left) / 2 : "start" == n11 == l11 ? e11.left - o11 : e11.right - (t55.right - t55.left) + o11) - t55.left, p10 || m2) {
          if (u10) a10.scrollBy(p10, m2);
          else {
            let t56 = 0, i12 = 0;
            if (m2) {
              let t57 = c10.scrollTop;
              c10.scrollTop += m2 / g10, i12 = (c10.scrollTop - t57) * g10;
            }
            if (p10) {
              let e12 = c10.scrollLeft;
              c10.scrollLeft += p10 / f10, t56 = (c10.scrollLeft - e12) * f10;
            }
            e11 = { left: e11.left - t56, top: e11.top - i12, right: e11.right - t56, bottom: e11.bottom - i12 }, t56 && 1 > Math.abs(t56 - p10) && (n11 = "nearest"), i12 && 1 > Math.abs(i12 - m2) && (s11 = "nearest");
          }
        }
        if (u10) break;
        c10 = c10.assignedSlot || c10.parentNode;
      } else if (11 == c10.nodeType) c10 = c10.host;
      else break;
    }(this.view.scrollDOM, o10, e10.head < e10.anchor ? -1 : 1, t53.x, t53.y, Math.max(Math.min(t53.xMargin, r10), -r10), Math.max(Math.min(t53.yMargin, l10), -l10), this.view.textDirection == u8.LTR);
  }
}
class fI extends uG {
  constructor(t53) {
    super(), this.height = t53;
  }
  toDOM() {
    let t53 = document.createElement("div");
    return t53.className = "cm-gap", this.updateDOM(t53), t53;
  }
  eq(t53) {
    return t53.height == this.height;
  }
  updateDOM(t53) {
    return t53.style.height = this.height + "px", true;
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
function fF(t53, e10) {
  let i10 = t53.observer.selectionRange;
  if (!i10.focusNode) return null;
  let n10 = uf(i10.focusNode, i10.focusOffset), s10 = ug(i10.focusNode, i10.focusOffset), o10 = n10 || s10;
  if (s10 && n10 && s10.node != n10.node) {
    let e11 = uv.get(s10.node);
    if (!e11 || e11 instanceof uP && e11.text != s10.node.nodeValue) o10 = s10;
    else if (t53.docView.lastCompositionAfterCursor) {
      let t54 = uv.get(n10.node);
      !t54 || t54 instanceof uP && t54.text != n10.node.nodeValue || (o10 = s10);
    }
  }
  if (t53.docView.lastCompositionAfterCursor = o10 != n10, !o10) return null;
  let r10 = e10 - o10.offset;
  return { from: r10, to: r10 + o10.node.nodeValue.length, node: o10.node };
}
let fW = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t53, e10) {
    uZ(t53, e10, this.changes);
  }
  comparePoint(t53, e10) {
    uZ(t53, e10, this.changes);
  }
};
function fz(t53, e10) {
  return t53.top < e10.bottom - 1 && t53.bottom > e10.top + 1;
}
function fK(t53, e10) {
  return e10 < t53.top ? { top: e10, left: t53.left, right: t53.right, bottom: t53.bottom } : t53;
}
function fq(t53, e10) {
  return e10 > t53.bottom ? { top: t53.top, left: t53.left, right: t53.right, bottom: e10 } : t53;
}
function f_(t53, e10, i10) {
  let n10 = t53.nodeValue.length, s10 = -1, o10 = 1e9, r10 = 0;
  for (let l10 = 0; l10 < n10; l10++) {
    let n11 = ua(t53, l10, l10 + 1).getClientRects();
    for (let h10 = 0; h10 < n11.length; h10++) {
      let a10 = n11[h10];
      if (a10.top == a10.bottom) continue;
      r10 || (r10 = e10 - a10.left);
      let c10 = (a10.top > i10 ? a10.top - i10 : i10 - a10.bottom) - 1;
      if (a10.left - 1 <= e10 && a10.right + 1 >= e10 && c10 < o10) {
        let i11 = e10 >= (a10.left + a10.right) / 2, n12 = i11;
        if ((uL.chrome || uL.gecko) && ua(t53, l10).getBoundingClientRect().left == a10.right && (n12 = !i11), c10 <= 0) return { node: t53, offset: l10 + (n12 ? 1 : 0) };
        s10 = l10 + (n12 ? 1 : 0), o10 = c10;
      }
    }
  }
  return { node: t53, offset: s10 > -1 ? s10 : r10 > 0 ? t53.nodeValue.length : 0 };
}
function fj(t53, e10, i10) {
  var n10, s10;
  let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, r10 = t53.contentDOM.getBoundingClientRect(), l10 = r10.top + t53.viewState.paddingTop, h10, { docHeight: a10 } = t53.viewState, { x: c10, y: d10 } = e10, u10 = d10 - l10;
  if (u10 < 0) return 0;
  if (u10 > a10) return t53.state.doc.length;
  for (let e11 = t53.viewState.heightOracle.textHeight / 2, n11 = false; (h10 = t53.elementAtHeight(u10)).type != uU.Text; ) for (; !((u10 = o10 > 0 ? h10.bottom + e11 : h10.top - e11) >= 0) || !(u10 <= a10); ) {
    if (n11) return i10 ? null : 0;
    n11 = true, o10 = -o10;
  }
  d10 = l10 + u10;
  let f10 = h10.from;
  if (f10 < t53.viewport.from) return 0 == t53.viewport.from ? 0 : i10 ? null : fG(t53, r10, h10, c10, d10);
  if (f10 > t53.viewport.to) return t53.viewport.to == t53.state.doc.length ? t53.state.doc.length : i10 ? null : fG(t53, r10, h10, c10, d10);
  let g10 = t53.dom.ownerDocument, p10 = t53.root.elementFromPoint ? t53.root : g10, m2 = p10.elementFromPoint(c10, d10);
  m2 && !t53.contentDOM.contains(m2) && (m2 = null), !m2 && (c10 = Math.max(r10.left + 1, Math.min(r10.right - 1, c10)), (m2 = p10.elementFromPoint(c10, d10)) && !t53.contentDOM.contains(m2) && (m2 = null));
  let v2, w2 = -1;
  if (m2 && (null === (n10 = t53.docView.nearest(m2)) || void 0 === n10 ? void 0 : n10.isEditable) != false) {
    if (g10.caretPositionFromPoint) {
      let t54 = g10.caretPositionFromPoint(c10, d10);
      t54 && ({ offsetNode: v2, offset: w2 } = t54);
    } else if (g10.caretRangeFromPoint) {
      let e11 = g10.caretRangeFromPoint(c10, d10);
      e11 && ({ startContainer: v2, startOffset: w2 } = e11, (!t53.contentDOM.contains(v2) || uL.safari && function(t54, e12, i11) {
        let n11;
        if (3 != t54.nodeType || e12 != (n11 = t54.nodeValue.length)) return false;
        for (let e13 = t54.nextSibling; e13; e13 = e13.nextSibling) if (1 != e13.nodeType || "BR" != e13.nodeName) return false;
        return ua(t54, n11 - 1, n11).getBoundingClientRect().left > i11;
      }(v2, w2, c10) || uL.chrome && function(t54, e12, i11) {
        if (0 != e12) return false;
        for (let e13 = t54; ; ) {
          let t55 = e13.parentNode;
          if (!t55 || 1 != t55.nodeType || t55.firstChild != e13) return false;
          if (t55.classList.contains("cm-line")) break;
          e13 = t55;
        }
        return i11 - (1 == t54.nodeType ? t54.getBoundingClientRect() : ua(t54, 0, Math.max(t54.nodeValue.length, 1)).getBoundingClientRect()).left > 5;
      }(v2, w2, c10)) && (v2 = void 0));
    }
  }
  if (!v2 || !t53.docView.dom.contains(v2)) {
    let e11 = u_.find(t53.docView, f10);
    if (!e11) return u10 > h10.top + h10.height / 2 ? h10.to : h10.from;
    ({ node: v2, offset: w2 } = function t54(e12, i11, n11) {
      let s11, o11, r11, l11, h11, a11, c11, d11, u11 = false;
      for (let p12 = e12.firstChild; p12; p12 = p12.nextSibling) {
        let e13 = d6(p12);
        for (let m4 = 0; m4 < e13.length; m4++) {
          var f11, g11;
          let v3 = e13[m4];
          a11 && fz(a11, v3) && (v3 = fK(fq(v3, a11.bottom), a11.top));
          let w3 = (f11 = v3).left > i11 ? f11.left - i11 : Math.max(0, i11 - f11.right), b3 = (g11 = v3).top > n11 ? g11.top - n11 : Math.max(0, n11 - g11.bottom);
          if (0 == w3 && 0 == b3) return 3 == p12.nodeType ? f_(p12, i11, n11) : t54(p12, i11, n11);
          if (!h11 || d11 > b3 || d11 == b3 && c11 > w3) {
            h11 = p12, a11 = v3, c11 = w3, d11 = b3;
            let t55 = b3 ? n11 < v3.top ? -1 : 1 : w3 ? i11 < v3.left ? -1 : 1 : 0;
            u11 = !t55 || (t55 > 0 ? m4 < e13.length - 1 : m4 > 0);
          }
          0 == w3 ? n11 > v3.bottom && (!r11 || r11.bottom < v3.bottom) ? (s11 = p12, r11 = v3) : n11 < v3.top && (!l11 || l11.top > v3.top) && (o11 = p12, l11 = v3) : r11 && fz(r11, v3) ? r11 = fq(r11, v3.bottom) : l11 && fz(l11, v3) && (l11 = fK(l11, v3.top));
        }
      }
      if (r11 && r11.bottom >= n11 ? (h11 = s11, a11 = r11) : l11 && l11.top <= n11 && (h11 = o11, a11 = l11), !h11) return { node: e12, offset: 0 };
      let p11 = Math.max(a11.left, Math.min(a11.right, i11));
      if (3 == h11.nodeType) return f_(h11, p11, n11);
      if (u11 && "false" != h11.contentEditable) return t54(h11, p11, n11);
      let m3 = Array.prototype.indexOf.call(e12.childNodes, h11) + (i11 >= (a11.left + a11.right) / 2 ? 1 : 0);
      return { node: e12, offset: m3 };
    }(e11.dom, c10, d10));
  }
  let b2 = t53.docView.nearest(v2);
  if (!b2) return null;
  if (!b2.isWidget || (null === (s10 = b2.dom) || void 0 === s10 ? void 0 : s10.nodeType) != 1) return b2.localPosFromDOM(v2, w2) + b2.posAtStart;
  {
    let t54 = b2.dom.getBoundingClientRect();
    return e10.y < t54.top || e10.y <= t54.bottom && e10.x <= (t54.left + t54.right) / 2 ? b2.posAtStart : b2.posAtEnd;
  }
}
function fG(t53, e10, i10, n10, s10) {
  let o10 = Math.round((n10 - e10.left) * t53.defaultCharacterWidth);
  if (t53.lineWrapping && i10.height > 1.5 * t53.defaultLineHeight) {
    let e11 = t53.viewState.heightOracle.textHeight;
    o10 += Math.floor((s10 - i10.top - (t53.defaultLineHeight - e11) * 0.5) / e11) * t53.viewState.heightOracle.lineLength;
  }
  let r10 = t53.state.sliceDoc(i10.from, i10.to);
  return i10.from + tX(r10, o10, t53.state.tabSize);
}
function fU(t53, e10, i10, n10) {
  let s10 = t53.state.doc.lineAt(e10.head), o10 = t53.bidiSpans(s10), r10 = t53.textDirectionAt(s10.from);
  for (let l10 = e10, h10 = null; ; ) {
    let e11 = function(t54, e12, i11, n11, s11) {
      var o11;
      let r11 = n11.head - t54.from, l11 = fn.find(e12, r11, null !== (o11 = n11.bidiLevel) && void 0 !== o11 ? o11 : -1, n11.assoc), h11 = e12[l11], a11 = h11.side(s11, i11);
      if (r11 == a11) {
        let t55 = l11 += s11 ? 1 : -1;
        if (t55 < 0 || t55 >= e12.length) return null;
        r11 = (h11 = e12[l11 = t55]).side(!s11, i11), a11 = h11.side(s11, i11);
      }
      let c10 = p(t54.text, r11, h11.forward(s11, i11));
      (c10 < h11.from || c10 > h11.to) && (c10 = a11), fr = t54.text.slice(Math.min(r11, c10), Math.max(r11, c10));
      let d10 = l11 == (s11 ? e12.length - 1 : 0) ? null : e12[l11 + (s11 ? 1 : -1)];
      return d10 && c10 == a11 && d10.level + (s11 ? 0 : 1) < h11.level ? $.cursor(d10.side(!s11, i11) + t54.from, d10.forward(s11, i11) ? 1 : -1, d10.level) : $.cursor(c10 + t54.from, h11.forward(s11, i11) ? -1 : 1, h11.level);
    }(s10, o10, r10, l10, i10), a10 = fr;
    if (!e11) {
      if (s10.number == (i10 ? t53.state.doc.lines : 1)) return l10;
      a10 = "\n", s10 = t53.state.doc.line(s10.number + (i10 ? 1 : -1)), o10 = t53.bidiSpans(s10), e11 = t53.visualLineSide(s10, !i10);
    }
    if (h10) {
      if (!h10(a10)) return l10;
    } else {
      if (!n10) return e11;
      h10 = n10(a10);
    }
    l10 = e11;
  }
}
function f$(t53, e10, i10) {
  for (; ; ) {
    let n10 = 0;
    for (let s10 of t53) s10.between(e10 - 1, e10 + 1, (t54, s11, o10) => {
      if (e10 > t54 && e10 < s11) {
        let o11 = n10 || i10 || (e10 - t54 < s11 - e10 ? -1 : 1);
        e10 = o11 < 0 ? t54 : s11, n10 = o11;
      }
    });
    if (!n10) return e10;
  }
}
function fY(t53, e10, i10) {
  let n10 = f$(t53.state.facet(fT).map((e11) => e11(t53)), i10.from, e10.head > i10.from ? -1 : 1);
  return n10 == i10.from ? i10 : $.cursor(n10, n10 < i10.from ? 1 : -1);
}
class fX {
  setSelectionOrigin(t53) {
    this.lastSelectionOrigin = t53, this.lastSelectionTime = Date.now();
  }
  constructor(t53) {
    var e10;
    this.view = t53, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t53.hasFocus, uL.safari && t53.contentDOM.addEventListener("input", () => null), uL.gecko && (e10 = t53.contentDOM.ownerDocument, gd.has(e10) || (gd.add(e10), e10.addEventListener("copy", () => {
    }), e10.addEventListener("cut", () => {
    })));
  }
  handleEvent(t53) {
    !(!function(t54, e10) {
      if (!e10.bubbles) return true;
      if (e10.defaultPrevented) return false;
      for (let i10 = e10.target, n10; i10 != t54.contentDOM; i10 = i10.parentNode) if (!i10 || 11 == i10.nodeType || (n10 = uv.get(i10)) && n10.ignoreEvent(e10)) return false;
      return true;
    }(this.view, t53) || this.ignoreDuringComposition(t53)) && ("keydown" == t53.type && this.keydown(t53) || this.runHandlers(t53.type, t53));
  }
  runHandlers(t53, e10) {
    let i10 = this.handlers[t53];
    if (i10) {
      for (let t54 of i10.observers) t54(this.view, e10);
      for (let t54 of i10.handlers) {
        if (e10.defaultPrevented) break;
        if (t54(this.view, e10)) {
          e10.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t53) {
    let e10 = function(t54) {
      let e11 = /* @__PURE__ */ Object.create(null);
      function i11(t55) {
        return e11[t55] || (e11[t55] = { observers: [], handlers: [] });
      }
      for (let e12 of t54) {
        let t55 = e12.spec;
        if (t55 && t55.domEventHandlers) for (let n11 in t55.domEventHandlers) {
          let s10 = t55.domEventHandlers[n11];
          s10 && i11(n11).handlers.push(fJ(e12.value, s10));
        }
        if (t55 && t55.domEventObservers) for (let n11 in t55.domEventObservers) {
          let s10 = t55.domEventObservers[n11];
          s10 && i11(n11).observers.push(fJ(e12.value, s10));
        }
      }
      for (let t55 in f8) i11(t55).handlers.push(f8[t55]);
      for (let t55 in f3) i11(t55).observers.push(f3[t55]);
      return e11;
    }(t53), i10 = this.handlers, n10 = this.view.contentDOM;
    for (let t54 in e10) if ("scroll" != t54) {
      let s10 = !e10[t54].handlers.length, o10 = i10[t54];
      o10 && !o10.handlers.length != s10 && (n10.removeEventListener(t54, this.handleEvent), o10 = null), o10 || n10.addEventListener(t54, this.handleEvent, { passive: s10 });
    }
    for (let t54 in i10) "scroll" == t54 || e10[t54] || n10.removeEventListener(t54, this.handleEvent);
    this.handlers = e10;
  }
  keydown(t53) {
    let e10;
    return this.lastKeyCode = t53.keyCode, this.lastKeyTime = Date.now(), !!(9 == t53.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) || ((this.tabFocusMode > 0 && 27 != t53.keyCode && 0 > f0.indexOf(t53.keyCode) && (this.tabFocusMode = -1), uL.android && uL.chrome && !t53.synthetic && (13 == t53.keyCode || 8 == t53.keyCode)) ? (this.view.observer.delayAndroidKey(t53.key, t53.keyCode), true) : uL.ios && !t53.synthetic && !t53.altKey && !t53.metaKey && ((e10 = fQ.find((e11) => e11.keyCode == t53.keyCode)) && !t53.ctrlKey || fZ.indexOf(t53.key) > -1 && t53.ctrlKey && !t53.shiftKey) ? (this.pendingIOSKey = e10 || t53, setTimeout(() => this.flushIOSKey(), 250), true) : (229 != t53.keyCode && this.view.observer.forceFlush(), false));
  }
  flushIOSKey(t53) {
    let e10 = this.pendingIOSKey;
    return !(!e10 || "Enter" == e10.key && t53 && t53.from < t53.to && /^\S+$/.test(t53.insert.toString())) && (this.pendingIOSKey = void 0, uc(this.view.contentDOM, e10.key, e10.keyCode, e10 instanceof KeyboardEvent ? e10 : void 0));
  }
  ignoreDuringComposition(t53) {
    return !!/^key/.test(t53.type) && (this.composing > 0 || !!(uL.safari && !uL.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = false, true));
  }
  startMouseSelection(t53) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t53;
  }
  update(t53) {
    this.mouseSelection && this.mouseSelection.update(t53), this.draggedContent && t53.docChanged && (this.draggedContent = this.draggedContent.map(t53.changes)), t53.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function fJ(t53, e10) {
  return (i10, n10) => {
    try {
      return e10.call(t53, n10, i10);
    } catch (t54) {
      fb(i10.state, t54);
    }
  };
}
let fQ = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], fZ = "dthko", f0 = [16, 17, 18, 20, 91, 92, 224, 225];
function f1(t53) {
  return 0.7 * Math.max(0, t53) + 8;
}
class f2 {
  constructor(t53, e10, i10, n10) {
    let s10;
    this.view = t53, this.startEvent = e10, this.style = i10, this.mustSelect = n10, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e10, this.scrollParent = function(t54) {
      let e11 = t54.ownerDocument;
      for (let i11 = t54.parentNode; i11 && i11 != e11.body; ) if (1 == i11.nodeType) {
        if (i11.scrollHeight > i11.clientHeight || i11.scrollWidth > i11.clientWidth) return i11;
        i11 = i11.assignedSlot || i11.parentNode;
      } else if (11 == i11.nodeType) i11 = i11.host;
      else break;
      return null;
    }(t53.contentDOM), this.atoms = t53.state.facet(fT).map((e11) => e11(t53));
    let o10 = t53.contentDOM.ownerDocument;
    o10.addEventListener("mousemove", this.move = this.move.bind(this)), o10.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e10.shiftKey, this.multiple = t53.state.facet(tB.allowMultipleSelections) && ((s10 = t53.state.facet(fl)).length ? s10[0](e10) : uL.mac ? e10.metaKey : e10.ctrlKey), this.dragging = !!function(t54, e11) {
      let { main: i11 } = t54.state.selection;
      if (i11.empty) return false;
      let n11 = d4(t54.root);
      if (!n11 || 0 == n11.rangeCount) return true;
      let s11 = n11.getRangeAt(0).getClientRects();
      for (let t55 = 0; t55 < s11.length; t55++) {
        let i12 = s11[t55];
        if (i12.left <= e11.clientX && i12.right >= e11.clientX && i12.top <= e11.clientY && i12.bottom >= e11.clientY) return true;
      }
      return false;
    }(t53, e10) && 1 == go(e10) && null;
  }
  start(t53) {
    false === this.dragging && this.select(t53);
  }
  move(t53) {
    var e10, i10;
    if (0 == t53.buttons) return this.destroy();
    if (this.dragging || null == this.dragging && 10 > Math.max(Math.abs((i10 = this.startEvent).clientX - t53.clientX), Math.abs(i10.clientY - t53.clientY))) return;
    this.select(this.lastEvent = t53);
    let n10 = 0, s10 = 0, o10 = (null === (e10 = this.scrollParent) || void 0 === e10 ? void 0 : e10.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, r10 = fL(this.view);
    t53.clientX - r10.left <= o10.left + 6 ? n10 = -f1(o10.left - t53.clientX) : t53.clientX + r10.right >= o10.right - 6 && (n10 = f1(t53.clientX - o10.right)), t53.clientY - r10.top <= o10.top + 6 ? s10 = -f1(o10.top - t53.clientY) : t53.clientY + r10.bottom >= o10.bottom - 6 && (s10 = f1(t53.clientY - o10.bottom)), this.setScrollSpeed(n10, s10);
  }
  up(t53) {
    null == this.dragging && this.select(this.lastEvent), this.dragging || t53.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t53 = this.view.contentDOM.ownerDocument;
    t53.removeEventListener("mousemove", this.move), t53.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t53, e10) {
    this.scrollSpeed = { x: t53, y: e10 }, t53 || e10 ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), false === this.dragging && this.select(this.lastEvent);
  }
  skipAtoms(t53) {
    let e10 = null;
    for (let i10 = 0; i10 < t53.ranges.length; i10++) {
      let n10 = t53.ranges[i10], s10 = null;
      if (n10.empty) {
        let t54 = f$(this.atoms, n10.from, 0);
        t54 != n10.from && (s10 = $.cursor(t54, -1));
      } else {
        let t54 = f$(this.atoms, n10.from, -1), e11 = f$(this.atoms, n10.to, 1);
        (t54 != n10.from || e11 != n10.to) && (s10 = $.range(n10.from == n10.anchor ? t54 : e11, n10.from == n10.head ? t54 : e11));
      }
      s10 && (e10 || (e10 = t53.ranges.slice()), e10[i10] = s10);
    }
    return e10 ? $.create(e10, t53.mainIndex) : t53;
  }
  select(t53) {
    let { view: e10 } = this, i10 = this.skipAtoms(this.style.get(t53, this.extend, this.multiple));
    (this.mustSelect || !i10.eq(e10.state.selection, false === this.dragging)) && this.view.dispatch({ selection: i10, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(t53) {
    t53.transactions.some((t54) => t54.isUserEvent("input.type")) ? this.destroy() : this.style.update(t53) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
let f8 = /* @__PURE__ */ Object.create(null), f3 = /* @__PURE__ */ Object.create(null), f4 = uL.ie && uL.ie_version < 15 || uL.ios && uL.webkit_version < 604;
function f5(t53, e10) {
  let { state: i10 } = t53, n10, s10 = 1, o10 = i10.toText(e10), r10 = o10.lines == i10.selection.ranges.length;
  if (null != gl && i10.selection.ranges.every((t54) => t54.empty) && gl == o10.toString()) {
    let t54 = -1;
    n10 = i10.changeByRange((n11) => {
      let l10 = i10.doc.lineAt(n11.from);
      if (l10.from == t54) return { range: n11 };
      t54 = l10.from;
      let h10 = i10.toText((r10 ? o10.line(s10++).text : e10) + i10.lineBreak);
      return { changes: { from: l10.from, insert: h10 }, range: $.cursor(n11.from + h10.length) };
    });
  } else n10 = r10 ? i10.changeByRange((t54) => {
    let e11 = o10.line(s10++);
    return { changes: { from: t54.from, to: t54.to, insert: e11.text }, range: $.cursor(t54.from + e11.length) };
  }) : i10.replaceSelection(o10);
  t53.dispatch(n10, { userEvent: "input.paste", scrollIntoView: true });
}
function f9(t53, e10, i10, n10) {
  if (1 == n10) return $.cursor(e10, i10);
  if (2 == n10) return function(t54, e11) {
    let i11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n11 = t54.charCategorizer(e11), s10 = t54.doc.lineAt(e11), o10 = e11 - s10.from;
    if (0 == s10.length) return $.cursor(e11);
    0 == o10 ? i11 = 1 : o10 == s10.length && (i11 = -1);
    let r10 = o10, l10 = o10;
    i11 < 0 ? r10 = p(s10.text, o10, false) : l10 = p(s10.text, o10);
    let h10 = n11(s10.text.slice(r10, l10));
    for (; r10 > 0; ) {
      let t55 = p(s10.text, r10, false);
      if (n11(s10.text.slice(t55, r10)) != h10) break;
      r10 = t55;
    }
    for (; l10 < s10.length; ) {
      let t55 = p(s10.text, l10);
      if (n11(s10.text.slice(l10, t55)) != h10) break;
      l10 = t55;
    }
    return $.range(r10 + s10.from, l10 + s10.from);
  }(t53.state, e10, i10);
  {
    let i11 = u_.find(t53.docView, e10), n11 = t53.state.doc.lineAt(i11 ? i11.posAtEnd : e10), s10 = i11 ? i11.posAtStart : n11.from, o10 = i11 ? i11.posAtEnd : n11.to;
    return o10 < t53.state.doc.length && o10 == n11.to && o10++, $.range(s10, o10);
  }
}
f3.scroll = (t53) => {
  t53.inputState.lastScrollTop = t53.scrollDOM.scrollTop, t53.inputState.lastScrollLeft = t53.scrollDOM.scrollLeft;
}, f8.keydown = (t53, e10) => (t53.inputState.setSelectionOrigin("select"), 27 == e10.keyCode && 0 != t53.inputState.tabFocusMode && (t53.inputState.tabFocusMode = Date.now() + 2e3), false), f3.touchstart = (t53, e10) => {
  t53.inputState.lastTouchTime = Date.now(), t53.inputState.setSelectionOrigin("select.pointer");
}, f3.touchmove = (t53) => {
  t53.inputState.setSelectionOrigin("select.pointer");
}, f8.mousedown = (t53, e10) => {
  let i10, n10, s10;
  if (t53.observer.flush(), t53.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let o10 = null;
  for (let i11 of t53.state.facet(fa)) if (o10 = i11(t53, e10)) break;
  if (o10 || 0 != e10.button || (i10 = gt(t53, e10), n10 = go(e10), s10 = t53.state.selection, o10 = { update(t54) {
    t54.docChanged && (i10.pos = t54.changes.mapPos(i10.pos), s10 = s10.map(t54.changes));
  }, get(e11, o11, r10) {
    let l10 = gt(t53, e11), h10, a10 = f9(t53, l10.pos, l10.bias, n10);
    if (i10.pos != l10.pos && !o11) {
      let e12 = f9(t53, i10.pos, i10.bias, n10), s11 = Math.min(e12.from, a10.from), o12 = Math.max(e12.to, a10.to);
      a10 = s11 < a10.from ? $.range(s11, o12) : $.range(o12, s11);
    }
    return o11 ? s10.replaceRange(s10.main.extend(a10.from, a10.to)) : r10 && 1 == n10 && s10.ranges.length > 1 && (h10 = function(t54, e12) {
      for (let i11 = 0; i11 < t54.ranges.length; i11++) {
        let { from: n11, to: s11 } = t54.ranges[i11];
        if (n11 <= e12 && s11 >= e12) return $.create(t54.ranges.slice(0, i11).concat(t54.ranges.slice(i11 + 1)), t54.mainIndex == i11 ? 0 : t54.mainIndex - (t54.mainIndex > i11 ? 1 : 0));
      }
      return null;
    }(s10, l10.pos)) ? h10 : r10 ? s10.addRange(a10) : $.create([a10]);
  } }), o10) {
    let i11 = !t53.hasFocus;
    t53.inputState.startMouseSelection(new f2(t53, e10, o10, i11)), i11 && t53.observer.ignore(() => {
      uh(t53.contentDOM);
      let e11 = t53.root.activeElement;
      e11 && !e11.contains(t53.contentDOM) && e11.blur();
    });
    let n11 = t53.inputState.mouseSelection;
    if (n11) return n11.start(e10), false === n11.dragging;
  }
  return false;
};
let f6 = (t53, e10) => t53 >= e10.top && t53 <= e10.bottom, f7 = (t53, e10, i10) => f6(e10, i10) && t53 >= i10.left && t53 <= i10.right;
function gt(t53, e10) {
  let i10 = t53.posAtCoords({ x: e10.clientX, y: e10.clientY }, false);
  return { pos: i10, bias: function(t54, e11, i11, n10) {
    let s10 = u_.find(t54.docView, e11);
    if (!s10) return 1;
    let o10 = e11 - s10.posAtStart;
    if (0 == o10) return 1;
    if (o10 == s10.length) return -1;
    let r10 = s10.coordsAt(o10, -1);
    if (r10 && f7(i11, n10, r10)) return -1;
    let l10 = s10.coordsAt(o10, 1);
    return l10 && f7(i11, n10, l10) ? 1 : r10 && f6(n10, r10) ? -1 : 1;
  }(t53, i10, e10.clientX, e10.clientY) };
}
let ge = uL.ie && uL.ie_version <= 11, gi = null, gn = 0, gs = 0;
function go(t53) {
  if (!ge) return t53.detail;
  let e10 = gi, i10 = gs;
  return gi = t53, gs = Date.now(), gn = !e10 || i10 > Date.now() - 400 && 2 > Math.abs(e10.clientX - t53.clientX) && 2 > Math.abs(e10.clientY - t53.clientY) ? (gn + 1) % 3 : 1;
}
function gr(t53, e10, i10, n10) {
  let s10;
  if (!i10) return;
  let o10 = t53.posAtCoords({ x: e10.clientX, y: e10.clientY }, false), { draggedContent: r10 } = t53.inputState, l10 = n10 && r10 && ((s10 = t53.state.facet(fh)).length ? s10[0](e10) : uL.mac ? !e10.altKey : !e10.ctrlKey) ? { from: r10.from, to: r10.to } : null, h10 = { from: o10, insert: i10 }, a10 = t53.state.changes(l10 ? [l10, h10] : h10);
  t53.focus(), t53.dispatch({ changes: a10, selection: { anchor: a10.mapPos(o10, -1), head: a10.mapPos(o10, 1) }, userEvent: l10 ? "move.drop" : "input.drop" }), t53.inputState.draggedContent = null;
}
f8.dragstart = (t53, e10) => {
  let { selection: { main: i10 } } = t53.state;
  if (e10.target.draggable) {
    let n11 = t53.docView.nearest(e10.target);
    if (n11 && n11.isWidget) {
      let t54 = n11.posAtStart, e11 = t54 + n11.length;
      (t54 >= i10.to || e11 <= i10.from) && (i10 = $.range(t54, e11));
    }
  }
  let { inputState: n10 } = t53;
  return n10.mouseSelection && (n10.mouseSelection.dragging = true), n10.draggedContent = i10, e10.dataTransfer && (e10.dataTransfer.setData("Text", t53.state.sliceDoc(i10.from, i10.to)), e10.dataTransfer.effectAllowed = "copyMove"), false;
}, f8.dragend = (t53) => (t53.inputState.draggedContent = null, false), f8.drop = (t53, e10) => {
  if (!e10.dataTransfer) return false;
  if (t53.state.readOnly) return true;
  let i10 = e10.dataTransfer.files;
  if (i10 && i10.length) {
    let n10 = Array(i10.length), s10 = 0, o10 = () => {
      ++s10 == i10.length && gr(t53, e10, n10.filter((t54) => null != t54).join(t53.state.lineBreak), false);
    };
    for (let t54 = 0; t54 < i10.length; t54++) {
      let e11 = new FileReader();
      e11.onerror = o10, e11.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(e11.result) || (n10[t54] = e11.result), o10();
      }, e11.readAsText(i10[t54]);
    }
    return true;
  }
  {
    let i11 = e10.dataTransfer.getData("Text");
    if (i11) return gr(t53, e10, i11, true), true;
  }
  return false;
}, f8.paste = (t53, e10) => {
  if (t53.state.readOnly) return true;
  t53.observer.flush();
  let i10 = f4 ? null : e10.clipboardData;
  return i10 ? (f5(t53, i10.getData("text/plain") || i10.getData("text/uri-list")), true) : (function(t54) {
    let e11 = t54.dom.parentNode;
    if (!e11) return;
    let i11 = e11.appendChild(document.createElement("textarea"));
    i11.style.cssText = "position: fixed; left: -10000px; top: 10px", i11.focus(), setTimeout(() => {
      t54.focus(), i11.remove(), f5(t54, i11.value);
    }, 50);
  }(t53), false);
};
let gl = null;
f8.copy = f8.cut = (t53, e10) => {
  let { text: i10, ranges: n10, linewise: s10 } = function(t54) {
    let e11 = [], i11 = [], n11 = false;
    for (let n12 of t54.selection.ranges) n12.empty || (e11.push(t54.sliceDoc(n12.from, n12.to)), i11.push(n12));
    if (!e11.length) {
      let s11 = -1;
      for (let { from: n12 } of t54.selection.ranges) {
        let o11 = t54.doc.lineAt(n12);
        o11.number > s11 && (e11.push(o11.text), i11.push({ from: o11.from, to: Math.min(t54.doc.length, o11.to + 1) })), s11 = o11.number;
      }
      n11 = true;
    }
    return { text: e11.join(t54.lineBreak), ranges: i11, linewise: n11 };
  }(t53.state);
  if (!i10 && !s10) return false;
  gl = s10 ? i10 : null, "cut" != e10.type || t53.state.readOnly || t53.dispatch({ changes: n10, scrollIntoView: true, userEvent: "delete.cut" });
  let o10 = f4 ? null : e10.clipboardData;
  return o10 ? (o10.clearData(), o10.setData("text/plain", i10), true) : (!function(t54, e11) {
    let i11 = t54.dom.parentNode;
    if (!i11) return;
    let n11 = i11.appendChild(document.createElement("textarea"));
    n11.style.cssText = "position: fixed; left: -10000px; top: 10px", n11.value = e11, n11.focus(), n11.selectionEnd = e11.length, n11.selectionStart = 0, setTimeout(() => {
      n11.remove(), t54.focus();
    }, 50);
  }(t53, i10), false);
};
let gh = ty.define();
function ga(t53, e10) {
  let i10 = [];
  for (let n10 of t53.facet(ff)) {
    let s10 = n10(t53, e10);
    s10 && i10.push(s10);
  }
  return i10 ? t53.update({ effects: i10, annotations: gh.of(true) }) : null;
}
function gc(t53) {
  setTimeout(() => {
    let e10 = t53.hasFocus;
    if (e10 != t53.inputState.notifiedFocused) {
      let i10 = ga(t53.state, e10);
      i10 ? t53.dispatch(i10) : t53.update([]);
    }
  }, 10);
}
f3.focus = (t53) => {
  t53.inputState.lastFocusTime = Date.now(), !t53.scrollDOM.scrollTop && (t53.inputState.lastScrollTop || t53.inputState.lastScrollLeft) && (t53.scrollDOM.scrollTop = t53.inputState.lastScrollTop, t53.scrollDOM.scrollLeft = t53.inputState.lastScrollLeft), gc(t53);
}, f3.blur = (t53) => {
  t53.observer.clearSelectionRange(), gc(t53);
}, f3.compositionstart = f3.compositionupdate = (t53) => {
  null == t53.inputState.compositionFirstChange && (t53.inputState.compositionFirstChange = true), t53.inputState.composing < 0 && (t53.inputState.composing = 0);
}, f3.compositionend = (t53) => {
  t53.inputState.composing = -1, t53.inputState.compositionEndedAt = Date.now(), t53.inputState.compositionPendingKey = true, t53.inputState.compositionPendingChange = t53.observer.pendingRecords().length > 0, t53.inputState.compositionFirstChange = null, uL.chrome && uL.android ? t53.observer.flushSoon() : t53.inputState.compositionPendingChange ? Promise.resolve().then(() => t53.observer.flush()) : setTimeout(() => {
    t53.inputState.composing < 0 && t53.docView.hasComposition && t53.update([]);
  }, 50);
}, f3.contextmenu = (t53) => {
  t53.inputState.lastContextMenu = Date.now();
}, f8.beforeinput = (t53, e10) => {
  var i10;
  let n10;
  if (uL.chrome && uL.android && (n10 = fQ.find((t54) => t54.inputType == e10.inputType)) && (t53.observer.delayAndroidKey(n10.key, n10.keyCode), "Backspace" == n10.key || "Delete" == n10.key)) {
    let e11 = (null === (i10 = window.visualViewport) || void 0 === i10 ? void 0 : i10.height) || 0;
    setTimeout(() => {
      var i11;
      ((null === (i11 = window.visualViewport) || void 0 === i11 ? void 0 : i11.height) || 0) > e11 + 10 && t53.hasFocus && (t53.contentDOM.blur(), t53.focus());
    }, 100);
  }
  return uL.ios && "deleteContentForward" == e10.inputType && t53.observer.flushSoon(), uL.safari && "insertText" == e10.inputType && t53.inputState.composing >= 0 && setTimeout(() => f3.compositionend(t53, e10), 20), false;
};
let gd = /* @__PURE__ */ new Set(), gu = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class gf {
  constructor(t53) {
    this.lineWrapping = t53, this.doc = s.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = false;
  }
  heightForGap(t53, e10) {
    let i10 = this.doc.lineAt(e10).number - this.doc.lineAt(t53).number + 1;
    return this.lineWrapping && (i10 += Math.max(0, Math.ceil((e10 - t53 - i10 * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i10;
  }
  heightForLine(t53) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t53 - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t53) {
    return this.doc = t53, this;
  }
  mustRefreshForWrapping(t53) {
    return gu.indexOf(t53) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t53) {
    let e10 = false;
    for (let i10 = 0; i10 < t53.length; i10++) {
      let n10 = t53[i10];
      n10 < 0 ? i10++ : this.heightSamples[Math.floor(10 * n10)] || (e10 = true, this.heightSamples[Math.floor(10 * n10)] = true);
    }
    return e10;
  }
  refresh(t53, e10, i10, n10, s10, o10) {
    let r10 = gu.indexOf(t53) > -1, l10 = Math.round(e10) != Math.round(this.lineHeight) || this.lineWrapping != r10;
    if (this.lineWrapping = r10, this.lineHeight = e10, this.charWidth = i10, this.textHeight = n10, this.lineLength = s10, l10) {
      this.heightSamples = {};
      for (let t54 = 0; t54 < o10.length; t54++) {
        let e11 = o10[t54];
        e11 < 0 ? t54++ : this.heightSamples[Math.floor(10 * e11)] = true;
      }
    }
    return l10;
  }
}
class gg {
  constructor(t53, e10) {
    this.from = t53, this.heights = e10, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class gp {
  constructor(t53, e10, i10, n10, s10) {
    this.from = t53, this.length = e10, this.top = i10, this.height = n10, this._content = s10;
  }
  get type() {
    return "number" == typeof this._content ? uU.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof uJ ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return "number" == typeof this._content ? this._content : 0;
  }
  join(t53) {
    let e10 = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t53._content) ? t53._content : [t53]);
    return new gp(this.from, this.length + t53.length, this.top, this.height + t53.height, e10);
  }
}
var gm = ((P = gm || (gm = {}))[P.ByPos = 0] = "ByPos", P[P.ByHeight = 1] = "ByHeight", P[P.ByPosNoHeight = 2] = "ByPosNoHeight", P);
class gv {
  constructor(t53, e10, i10 = 2) {
    this.length = t53, this.height = e10, this.flags = i10;
  }
  get outdated() {
    return (2 & this.flags) > 0;
  }
  set outdated(t53) {
    this.flags = (t53 ? 2 : 0) | -3 & this.flags;
  }
  setHeight(t53, e10) {
    this.height != e10 && (Math.abs(this.height - e10) > 1e-3 && (t53.heightChanged = true), this.height = e10);
  }
  replace(t53, e10, i10) {
    return gv.of(i10);
  }
  decomposeLeft(t53, e10) {
    e10.push(this);
  }
  decomposeRight(t53, e10) {
    e10.push(this);
  }
  applyChanges(t53, e10, i10, n10) {
    let s10 = this, o10 = i10.doc;
    for (let r10 = n10.length - 1; r10 >= 0; r10--) {
      let { fromA: l10, toA: h10, fromB: a10, toB: c10 } = n10[r10], d10 = s10.lineAt(l10, gm.ByPosNoHeight, i10.setDoc(e10), 0, 0), u10 = d10.to >= h10 ? d10 : s10.lineAt(h10, gm.ByPosNoHeight, i10, 0, 0);
      for (c10 += u10.to - h10, h10 = u10.to; r10 > 0 && d10.from <= n10[r10 - 1].toA; ) l10 = n10[r10 - 1].fromA, a10 = n10[r10 - 1].fromB, r10--, l10 < d10.from && (d10 = s10.lineAt(l10, gm.ByPosNoHeight, i10, 0, 0));
      a10 += d10.from - l10, l10 = d10.from;
      let f10 = gk.build(i10.setDoc(o10), t53, a10, c10);
      s10 = s10.replace(l10, h10, f10);
    }
    return s10.updateHeight(i10, 0);
  }
  static empty() {
    return new gb(0, 0);
  }
  static of(t53) {
    if (1 == t53.length) return t53[0];
    let e10 = 0, i10 = t53.length, n10 = 0, s10 = 0;
    for (; ; ) if (e10 == i10) {
      if (n10 > 2 * s10) {
        let s11 = t53[e10 - 1];
        s11.break ? t53.splice(--e10, 1, s11.left, null, s11.right) : t53.splice(--e10, 1, s11.left, s11.right), i10 += 1 + s11.break, n10 -= s11.size;
      } else if (s10 > 2 * n10) {
        let e11 = t53[i10];
        e11.break ? t53.splice(i10, 1, e11.left, null, e11.right) : t53.splice(i10, 1, e11.left, e11.right), i10 += 2 + e11.break, s10 -= e11.size;
      } else break;
    } else if (n10 < s10) {
      let i11 = t53[e10++];
      i11 && (n10 += i11.size);
    } else {
      let e11 = t53[--i10];
      e11 && (s10 += e11.size);
    }
    let o10 = 0;
    return null == t53[e10 - 1] ? (o10 = 1, e10--) : null == t53[e10] && (o10 = 1, i10++), new gx(gv.of(t53.slice(0, e10)), o10, gv.of(t53.slice(i10)));
  }
}
gv.prototype.size = 1;
class gw extends gv {
  constructor(t53, e10, i10) {
    super(t53, e10), this.deco = i10;
  }
  blockAt(t53, e10, i10, n10) {
    return new gp(n10, this.length, i10, this.height, this.deco || 0);
  }
  lineAt(t53, e10, i10, n10, s10) {
    return this.blockAt(0, i10, n10, s10);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    t53 <= s10 + this.length && e10 >= s10 && o10(this.blockAt(0, i10, n10, s10));
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0);
    return i10 && i10.from <= e10 && i10.more && this.setHeight(t53, i10.heights[i10.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class gb extends gw {
  constructor(t53, e10) {
    super(t53, e10, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t53, e10, i10, n10) {
    return new gp(n10, this.length, i10, this.height, this.breaks);
  }
  replace(t53, e10, i10) {
    let n10 = i10[0];
    return 1 == i10.length && (n10 instanceof gb || n10 instanceof gy && 4 & n10.flags) && 10 > Math.abs(this.length - n10.length) ? (n10 instanceof gy ? n10 = new gb(n10.length, this.height) : n10.height = this.height, this.outdated || (n10.outdated = false), n10) : gv.of(i10);
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0;
    return n10 && n10.from <= e10 && n10.more ? this.setHeight(t53, n10.heights[n10.index++]) : (i10 || this.outdated) && this.setHeight(t53, Math.max(this.widgetHeight, t53.heightForLine(this.length - this.collapsed)) + this.breaks * t53.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class gy extends gv {
  constructor(t53) {
    super(t53, 0);
  }
  heightMetrics(t53, e10) {
    let i10 = t53.doc.lineAt(e10).number, n10 = t53.doc.lineAt(e10 + this.length).number, s10 = n10 - i10 + 1, o10, r10 = 0;
    if (t53.lineWrapping) {
      let e11 = Math.min(this.height, t53.lineHeight * s10);
      o10 = e11 / s10, this.length > s10 + 1 && (r10 = (this.height - e11) / (this.length - s10 - 1));
    } else o10 = this.height / s10;
    return { firstLine: i10, lastLine: n10, perLine: o10, perChar: r10 };
  }
  blockAt(t53, e10, i10, n10) {
    let { firstLine: s10, lastLine: o10, perLine: r10, perChar: l10 } = this.heightMetrics(e10, n10);
    if (e10.lineWrapping) {
      let s11 = n10 + (t53 < e10.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t53 - i10) / this.height)) * this.length)), o11 = e10.doc.lineAt(s11), h10 = r10 + o11.length * l10, a10 = Math.max(i10, t53 - h10 / 2);
      return new gp(o11.from, o11.length, a10, h10, 0);
    }
    {
      let n11 = Math.max(0, Math.min(o10 - s10, Math.floor((t53 - i10) / r10))), { from: l11, length: h10 } = e10.doc.line(s10 + n11);
      return new gp(l11, h10, i10 + r10 * n11, r10, 0);
    }
  }
  lineAt(t53, e10, i10, n10, s10) {
    if (e10 == gm.ByHeight) return this.blockAt(t53, i10, n10, s10);
    if (e10 == gm.ByPosNoHeight) {
      let { from: e11, to: n11 } = i10.doc.lineAt(t53);
      return new gp(e11, n11 - e11, 0, 0, 0);
    }
    let { firstLine: o10, perLine: r10, perChar: l10 } = this.heightMetrics(i10, s10), h10 = i10.doc.lineAt(t53), a10 = r10 + h10.length * l10, c10 = h10.number - o10, d10 = n10 + r10 * c10 + l10 * (h10.from - s10 - c10);
    return new gp(h10.from, h10.length, Math.max(n10, Math.min(d10, n10 + this.height - a10)), a10, 0);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    t53 = Math.max(t53, s10), e10 = Math.min(e10, s10 + this.length);
    let { firstLine: r10, perLine: l10, perChar: h10 } = this.heightMetrics(i10, s10);
    for (let a10 = t53, c10 = n10; a10 <= e10; ) {
      let e11 = i10.doc.lineAt(a10);
      if (a10 == t53) {
        let i11 = e11.number - r10;
        c10 += l10 * i11 + h10 * (t53 - s10 - i11);
      }
      let n11 = l10 + h10 * e11.length;
      o10(new gp(e11.from, e11.length, c10, n11, 0)), c10 += n11, a10 = e11.to + 1;
    }
  }
  replace(t53, e10, i10) {
    let n10 = this.length - e10;
    if (n10 > 0) {
      let t54 = i10[i10.length - 1];
      t54 instanceof gy ? i10[i10.length - 1] = new gy(t54.length + n10) : i10.push(null, new gy(n10 - 1));
    }
    if (t53 > 0) {
      let e11 = i10[0];
      e11 instanceof gy ? i10[0] = new gy(t53 + e11.length) : i10.unshift(new gy(t53 - 1), null);
    }
    return gv.of(i10);
  }
  decomposeLeft(t53, e10) {
    e10.push(new gy(t53 - 1), null);
  }
  decomposeRight(t53, e10) {
    e10.push(null, new gy(this.length - t53 - 1));
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0, s10 = e10 + this.length;
    if (n10 && n10.from <= e10 + this.length && n10.more) {
      let i11 = [], o10 = Math.max(e10, n10.from), r10 = -1;
      for (n10.from > e10 && i11.push(new gy(n10.from - e10 - 1).updateHeight(t53, e10)); o10 <= s10 && n10.more; ) {
        let e11 = t53.doc.lineAt(o10).length;
        i11.length && i11.push(null);
        let s11 = n10.heights[n10.index++];
        -1 == r10 ? r10 = s11 : Math.abs(s11 - r10) >= 1e-3 && (r10 = -2);
        let l11 = new gb(e11, s11);
        l11.outdated = false, i11.push(l11), o10 += e11 + 1;
      }
      o10 <= s10 && i11.push(null, new gy(s10 - o10).updateHeight(t53, o10));
      let l10 = gv.of(i11);
      return (r10 < 0 || Math.abs(l10.height - this.height) >= 1e-3 || Math.abs(r10 - this.heightMetrics(t53, e10).perLine) >= 1e-3) && (t53.heightChanged = true), l10;
    }
    return (i10 || this.outdated) && (this.setHeight(t53, t53.heightForGap(e10, e10 + this.length)), this.outdated = false), this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class gx extends gv {
  constructor(t53, e10, i10) {
    super(t53.length + e10 + i10.length, t53.height + i10.height, e10 | (t53.outdated || i10.outdated ? 2 : 0)), this.left = t53, this.right = i10, this.size = t53.size + i10.size;
  }
  get break() {
    return 1 & this.flags;
  }
  blockAt(t53, e10, i10, n10) {
    let s10 = i10 + this.left.height;
    return t53 < s10 ? this.left.blockAt(t53, e10, i10, n10) : this.right.blockAt(t53, e10, s10, n10 + this.left.length + this.break);
  }
  lineAt(t53, e10, i10, n10, s10) {
    let o10 = n10 + this.left.height, r10 = s10 + this.left.length + this.break, l10 = e10 == gm.ByHeight ? t53 < o10 : t53 < r10, h10 = l10 ? this.left.lineAt(t53, e10, i10, n10, s10) : this.right.lineAt(t53, e10, i10, o10, r10);
    if (this.break || (l10 ? h10.to < r10 : h10.from > r10)) return h10;
    let a10 = e10 == gm.ByPosNoHeight ? gm.ByPosNoHeight : gm.ByPos;
    return l10 ? h10.join(this.right.lineAt(r10, a10, i10, o10, r10)) : this.left.lineAt(r10, a10, i10, n10, s10).join(h10);
  }
  forEachLine(t53, e10, i10, n10, s10, o10) {
    let r10 = n10 + this.left.height, l10 = s10 + this.left.length + this.break;
    if (this.break) t53 < l10 && this.left.forEachLine(t53, e10, i10, n10, s10, o10), e10 >= l10 && this.right.forEachLine(t53, e10, i10, r10, l10, o10);
    else {
      let h10 = this.lineAt(l10, gm.ByPos, i10, n10, s10);
      t53 < h10.from && this.left.forEachLine(t53, h10.from - 1, i10, n10, s10, o10), h10.to >= t53 && h10.from <= e10 && o10(h10), e10 > h10.to && this.right.forEachLine(h10.to + 1, e10, i10, r10, l10, o10);
    }
  }
  replace(t53, e10, i10) {
    let n10 = this.left.length + this.break;
    if (e10 < n10) return this.balanced(this.left.replace(t53, e10, i10), this.right);
    if (t53 > this.left.length) return this.balanced(this.left, this.right.replace(t53 - n10, e10 - n10, i10));
    let s10 = [];
    t53 > 0 && this.decomposeLeft(t53, s10);
    let o10 = s10.length;
    for (let t54 of i10) s10.push(t54);
    if (t53 > 0 && gS(s10, o10 - 1), e10 < this.length) {
      let t54 = s10.length;
      this.decomposeRight(e10, s10), gS(s10, t54);
    }
    return gv.of(s10);
  }
  decomposeLeft(t53, e10) {
    let i10 = this.left.length;
    if (t53 <= i10) return this.left.decomposeLeft(t53, e10);
    e10.push(this.left), this.break && t53 >= ++i10 && e10.push(null), t53 > i10 && this.right.decomposeLeft(t53 - i10, e10);
  }
  decomposeRight(t53, e10) {
    let i10 = this.left.length, n10 = i10 + this.break;
    if (t53 >= n10) return this.right.decomposeRight(t53 - n10, e10);
    t53 < i10 && this.left.decomposeRight(t53, e10), this.break && t53 < n10 && e10.push(null), e10.push(this.right);
  }
  balanced(t53, e10) {
    return t53.size > 2 * e10.size || e10.size > 2 * t53.size ? gv.of(this.break ? [t53, null, e10] : [t53, e10]) : (this.left = t53, this.right = e10, this.height = t53.height + e10.height, this.outdated = t53.outdated || e10.outdated, this.size = t53.size + e10.size, this.length = t53.length + this.break + e10.length, this);
  }
  updateHeight(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n10 = arguments.length > 3 ? arguments[3] : void 0, { left: s10, right: o10 } = this, r10 = e10 + s10.length + this.break, l10 = null;
    return (n10 && n10.from <= e10 + s10.length && n10.more ? l10 = s10 = s10.updateHeight(t53, e10, i10, n10) : s10.updateHeight(t53, e10, i10), n10 && n10.from <= r10 + o10.length && n10.more ? l10 = o10 = o10.updateHeight(t53, r10, i10, n10) : o10.updateHeight(t53, r10, i10), l10) ? this.balanced(s10, o10) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function gS(t53, e10) {
  let i10, n10;
  null == t53[e10] && (i10 = t53[e10 - 1]) instanceof gy && (n10 = t53[e10 + 1]) instanceof gy && t53.splice(e10 - 1, 3, new gy(i10.length + 1 + n10.length));
}
class gk {
  constructor(t53, e10) {
    this.pos = t53, this.oracle = e10, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t53;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t53, e10) {
    if (this.lineStart > -1) {
      let t54 = Math.min(e10, this.lineEnd), i10 = this.nodes[this.nodes.length - 1];
      i10 instanceof gb ? i10.length += t54 - this.pos : (t54 > this.pos || !this.isCovered) && this.nodes.push(new gb(t54 - this.pos, -1)), this.writtenTo = t54, e10 > t54 && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e10;
  }
  point(t53, e10, i10) {
    if (t53 < e10 || i10.heightRelevant) {
      let n10 = i10.widget ? i10.widget.estimatedHeight : 0, s10 = i10.widget ? i10.widget.lineBreaks : 0;
      n10 < 0 && (n10 = this.oracle.lineHeight);
      let o10 = e10 - t53;
      i10.block ? this.addBlock(new gw(o10, n10, i10)) : (o10 || s10 || n10 >= 5) && this.addLineDeco(n10, s10, o10);
    } else e10 > t53 && this.span(t53, e10);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: t53, to: e10 } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t53, this.lineEnd = e10, this.writtenTo < t53 && ((this.writtenTo < t53 - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, t53 - 1)), this.nodes.push(null)), this.pos > t53 && this.nodes.push(new gb(this.pos - t53, -1)), this.writtenTo = this.pos;
  }
  blankContent(t53, e10) {
    let i10 = new gy(e10 - t53);
    return this.oracle.doc.lineAt(t53).to == e10 && (i10.flags |= 4), i10;
  }
  ensureLine() {
    this.enterLine();
    let t53 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t53 instanceof gb) return t53;
    let e10 = new gb(0, -1);
    return this.nodes.push(e10), e10;
  }
  addBlock(t53) {
    this.enterLine();
    let e10 = t53.deco;
    e10 && e10.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t53), this.writtenTo = this.pos = this.pos + t53.length, e10 && e10.endSide > 0 && (this.covering = t53);
  }
  addLineDeco(t53, e10, i10) {
    let n10 = this.ensureLine();
    n10.length += i10, n10.collapsed += i10, n10.widgetHeight = Math.max(n10.widgetHeight, t53), n10.breaks += e10, this.writtenTo = this.pos = this.pos + i10;
  }
  finish(t53) {
    let e10 = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
    !(this.lineStart > -1) || e10 instanceof gb || this.isCovered ? (this.writtenTo < this.pos || null == e10) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new gb(0, -1));
    let i10 = t53;
    for (let t54 of this.nodes) t54 instanceof gb && t54.updateHeight(this.oracle, i10), i10 += t54 ? t54.length : 1;
    return this.nodes;
  }
  static build(t53, e10, i10, n10) {
    let s10 = new gk(i10, t53);
    return tV.spans(e10, i10, n10, s10, 0), s10.finish(i10);
  }
}
class gM {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t53, e10, i10, n10) {
    (t53 < e10 || i10 && i10.heightRelevant || n10 && n10.heightRelevant) && uZ(t53, e10, this.changes, 5);
  }
}
class gA {
  constructor(t53, e10, i10) {
    this.from = t53, this.to = e10, this.size = i10;
  }
  static same(t53, e10) {
    if (t53.length != e10.length) return false;
    for (let i10 = 0; i10 < t53.length; i10++) {
      let n10 = t53[i10], s10 = e10[i10];
      if (n10.from != s10.from || n10.to != s10.to || n10.size != s10.size) return false;
    }
    return true;
  }
  draw(t53, e10) {
    return u$.replace({ widget: new gC(this.size * (e10 ? t53.scaleY : t53.scaleX), e10) }).range(this.from, this.to);
  }
}
class gC extends uG {
  constructor(t53, e10) {
    super(), this.size = t53, this.vertical = e10;
  }
  eq(t53) {
    return t53.size == this.size && t53.vertical == this.vertical;
  }
  toDOM() {
    let t53 = document.createElement("div");
    return this.vertical ? t53.style.height = this.size + "px" : (t53.style.width = this.size + "px", t53.style.height = "2px", t53.style.display = "inline-block"), t53;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class gD {
  constructor(t53) {
    this.state = t53, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = gB, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = u8.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let e10 = t53.facet(fC).some((t54) => "function" != typeof t54 && "cm-lineWrapping" == t54.class);
    this.heightOracle = new gf(e10), this.stateDeco = t53.facet(fD).filter((t54) => "function" != typeof t54), this.heightMap = gv.empty().applyChanges(this.stateDeco, s.empty, this.heightOracle.setDoc(t53.doc), [new fN(0, 0, 0, t53.doc.length)]);
    for (let t54 = 0; t54 < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); t54++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = u$.set(this.lineGaps.map((t54) => t54.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t53 = [this.viewport], { main: e10 } = this.state.selection;
    for (let i10 = 0; i10 <= 1; i10++) {
      let n10 = i10 ? e10.head : e10.anchor;
      if (!t53.some((t54) => {
        let { from: e11, to: i11 } = t54;
        return n10 >= e11 && n10 <= i11;
      })) {
        let { from: e11, to: i11 } = this.lineBlockAt(n10);
        t53.push(new gO(e11, i11));
      }
    }
    return this.viewports = t53.sort((t54, e11) => t54.from - e11.from), this.updateScaler();
  }
  updateScaler() {
    let t53 = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? gB : new gR(this.heightOracle, this.heightMap, this.viewports), t53.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t53) => {
      this.viewportLines.push(gL(t53, this.scaler));
    });
  }
  update(t53) {
    var e10, i10;
    let n10, s10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    this.state = t53.state;
    let o10 = this.stateDeco;
    this.stateDeco = this.state.facet(fD).filter((t54) => "function" != typeof t54);
    let r10 = t53.changedRanges, l10 = fN.extendWithRanges(r10, (e10 = this.stateDeco, i10 = t53 ? t53.changes : W.empty(this.state.doc.length), n10 = new gM(), tV.compare(o10, e10, i10, n10, 0), n10.changes)), h10 = this.heightMap.height, a10 = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, t53.startState.doc, this.heightOracle.setDoc(this.state.doc), l10), this.heightMap.height != h10 && (t53.flags |= 2), a10 ? (this.scrollAnchorPos = t53.changes.mapPos(a10.from, -1), this.scrollAnchorHeight = a10.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let c10 = l10.length ? this.mapViewport(this.viewport, t53.changes) : this.viewport;
    (s10 && (s10.range.head < c10.from || s10.range.head > c10.to) || !this.viewportIsAppropriate(c10)) && (c10 = this.getViewport(0, s10));
    let d10 = c10.from != this.viewport.from || c10.to != this.viewport.to;
    this.viewport = c10, t53.flags |= this.updateForViewport(), (d10 || !t53.changes.empty || 2 & t53.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t53.changes))), t53.flags |= this.computeVisibleRanges(), s10 && (this.scrollTarget = s10), !this.mustEnforceCursorAssoc && t53.selectionSet && t53.view.lineWrapping && t53.state.selection.main.empty && t53.state.selection.main.assoc && !t53.state.facet(fp) && (this.mustEnforceCursorAssoc = true);
  }
  measure(t53) {
    let e10 = t53.contentDOM, i10 = window.getComputedStyle(e10), n10 = this.heightOracle, o10 = i10.whiteSpace;
    this.defaultTextDirection = "rtl" == i10.direction ? u8.RTL : u8.LTR;
    let r10 = this.heightOracle.mustRefreshForWrapping(o10), l10 = e10.getBoundingClientRect(), h10 = r10 || this.mustMeasureContent || this.contentDOMHeight != l10.height;
    this.contentDOMHeight = l10.height, this.mustMeasureContent = false;
    let a10 = 0, c10 = 0;
    if (l10.width && l10.height) {
      let { scaleX: t54, scaleY: i11 } = uo(e10, l10);
      (t54 > 5e-3 && Math.abs(this.scaleX - t54) > 5e-3 || i11 > 5e-3 && Math.abs(this.scaleY - i11) > 5e-3) && (this.scaleX = t54, this.scaleY = i11, a10 |= 8, r10 = h10 = true);
    }
    let d10 = (parseInt(i10.paddingTop) || 0) * this.scaleY, u10 = (parseInt(i10.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != d10 || this.paddingBottom != u10) && (this.paddingTop = d10, this.paddingBottom = u10, a10 |= 10), this.editorWidth != t53.scrollDOM.clientWidth && (n10.lineWrapping && (h10 = true), this.editorWidth = t53.scrollDOM.clientWidth, a10 |= 8);
    let f10 = t53.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != f10 && (this.scrollAnchorHeight = -1, this.scrollTop = f10), this.scrolledToBottom = uu(t53.scrollDOM);
    let g10 = (this.printing ? function(t54, e11) {
      let i11 = t54.getBoundingClientRect();
      return { left: 0, right: i11.right - i11.left, top: e11, bottom: i11.bottom - (i11.top + e11) };
    } : function(t54, e11) {
      let i11 = t54.getBoundingClientRect(), n11 = t54.ownerDocument, s10 = n11.defaultView || window, o11 = Math.max(0, i11.left), r11 = Math.min(s10.innerWidth, i11.right), l11 = Math.max(0, i11.top), h11 = Math.min(s10.innerHeight, i11.bottom);
      for (let e12 = t54.parentNode; e12 && e12 != n11.body; ) if (1 == e12.nodeType) {
        let i12 = e12, n12 = window.getComputedStyle(i12);
        if ((i12.scrollHeight > i12.clientHeight || i12.scrollWidth > i12.clientWidth) && "visible" != n12.overflow) {
          let n13 = i12.getBoundingClientRect();
          o11 = Math.max(o11, n13.left), r11 = Math.min(r11, n13.right), l11 = Math.max(l11, n13.top), h11 = e12 == t54.parentNode ? n13.bottom : Math.min(h11, n13.bottom);
        }
        e12 = "absolute" == n12.position || "fixed" == n12.position ? i12.offsetParent : i12.parentNode;
      } else if (11 == e12.nodeType) e12 = e12.host;
      else break;
      return { left: o11 - i11.left, right: Math.max(o11, r11) - i11.left, top: l11 - (i11.top + e11), bottom: Math.max(l11, h11) - (i11.top + e11) };
    })(e10, this.paddingTop), p10 = g10.top - this.pixelViewport.top, m2 = g10.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g10;
    let v2 = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v2 != this.inView && (this.inView = v2, v2 && (h10 = true)), !this.inView && !this.scrollTarget) return 0;
    let w2 = l10.width;
    if ((this.contentDOMWidth != w2 || this.editorHeight != t53.scrollDOM.clientHeight) && (this.contentDOMWidth = l10.width, this.editorHeight = t53.scrollDOM.clientHeight, a10 |= 8), h10) {
      let e11 = t53.docView.measureVisibleLineHeights(this.viewport);
      if (n10.mustRefreshForHeights(e11) && (r10 = true), r10 || n10.lineWrapping && Math.abs(w2 - this.contentDOMWidth) > n10.charWidth) {
        let { lineHeight: i11, charWidth: s10, textHeight: l11 } = t53.docView.measureTextSize();
        (r10 = i11 > 0 && n10.refresh(o10, i11, s10, l11, w2 / s10, e11)) && (t53.docView.minWidth = 0, a10 |= 8);
      }
      for (let i11 of (p10 > 0 && m2 > 0 ? c10 = Math.max(p10, m2) : p10 < 0 && m2 < 0 && (c10 = Math.min(p10, m2)), n10.heightChanged = false, this.viewports)) {
        let o11 = i11.from == this.viewport.from ? e11 : t53.docView.measureVisibleLineHeights(i11);
        this.heightMap = (r10 ? gv.empty().applyChanges(this.stateDeco, s.empty, this.heightOracle, [new fN(0, 0, 0, t53.state.doc.length)]) : this.heightMap).updateHeight(n10, 0, r10, new gg(i11.from, o11));
      }
      n10.heightChanged && (a10 |= 2);
    }
    let b2 = !this.viewportIsAppropriate(this.viewport, c10) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return b2 && (2 & a10 && (a10 |= this.updateScaler()), this.viewport = this.getViewport(c10, this.scrollTarget), a10 |= this.updateForViewport()), (2 & a10 || b2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r10 ? [] : this.lineGaps, t53)), a10 |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t53.docView.enforceCursorAssoc()), a10;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t53, e10) {
    let i10 = 0.5 - Math.max(-0.5, Math.min(0.5, t53 / 1e3 / 2)), n10 = this.heightMap, s10 = this.heightOracle, { visibleTop: o10, visibleBottom: r10 } = this, l10 = new gO(n10.lineAt(o10 - 1e3 * i10, gm.ByHeight, s10, 0, 0).from, n10.lineAt(r10 + (1 - i10) * 1e3, gm.ByHeight, s10, 0, 0).to);
    if (e10) {
      let { head: t54 } = e10.range;
      if (t54 < l10.from || t54 > l10.to) {
        let i11 = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), o11 = n10.lineAt(t54, gm.ByPos, s10, 0, 0), r11;
        r11 = "center" == e10.y ? (o11.top + o11.bottom) / 2 - i11 / 2 : "start" == e10.y || "nearest" == e10.y && t54 < l10.from ? o11.top : o11.bottom - i11, l10 = new gO(n10.lineAt(r11 - 500, gm.ByHeight, s10, 0, 0).from, n10.lineAt(r11 + i11 + 500, gm.ByHeight, s10, 0, 0).to);
      }
    }
    return l10;
  }
  mapViewport(t53, e10) {
    let i10 = e10.mapPos(t53.from, -1), n10 = e10.mapPos(t53.to, 1);
    return new gO(this.heightMap.lineAt(i10, gm.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n10, gm.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate(t53) {
    let { from: e10, to: i10 } = t53, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (!this.inView) return true;
    let { top: s10 } = this.heightMap.lineAt(e10, gm.ByPos, this.heightOracle, 0, 0), { bottom: o10 } = this.heightMap.lineAt(i10, gm.ByPos, this.heightOracle, 0, 0), { visibleTop: r10, visibleBottom: l10 } = this;
    return (0 == e10 || s10 <= r10 - Math.max(10, Math.min(-n10, 250))) && (i10 == this.state.doc.length || o10 >= l10 + Math.max(10, Math.min(n10, 250))) && s10 > r10 - 2e3 && o10 < l10 + 2e3;
  }
  mapLineGaps(t53, e10) {
    if (!t53.length || e10.empty) return t53;
    let i10 = [];
    for (let n10 of t53) e10.touchesRange(n10.from, n10.to) || i10.push(new gA(e10.mapPos(n10.from), e10.mapPos(n10.to), n10.size));
    return i10;
  }
  ensureLineGaps(t53, e10) {
    let i10 = this.heightOracle.lineWrapping, n10 = i10 ? 1e4 : 2e3, s10 = n10 >> 1, o10 = n10 << 1;
    if (this.defaultTextDirection != u8.LTR && !i10) return [];
    let r10 = [], l10 = (n11, o11, h10, a10) => {
      if (o11 - n11 < s10) return;
      let c10 = this.state.selection.main, d10 = [c10.from];
      for (let t54 of (c10.empty || d10.push(c10.to), d10)) if (t54 > n11 && t54 < o11) {
        l10(n11, t54 - 10, h10, a10), l10(t54 + 10, o11, h10, a10);
        return;
      }
      let u10 = function(t54, e11) {
        for (let i11 of t54) if (e11(i11)) return i11;
      }(t53, (t54) => t54.from >= h10.from && t54.to <= h10.to && Math.abs(t54.from - n11) < s10 && Math.abs(t54.to - o11) < s10 && !d10.some((e11) => t54.from < e11 && t54.to > e11));
      if (!u10) {
        if (o11 < h10.to && e10 && i10 && e10.visibleRanges.some((t54) => t54.from <= o11 && t54.to >= o11)) {
          let t54 = e10.moveToLineBoundary($.cursor(o11), false, true).head;
          t54 > n11 && (o11 = t54);
        }
        u10 = new gA(n11, o11, this.gapSize(h10, n11, o11, a10));
      }
      r10.push(u10);
    };
    for (let t54 of this.viewportLines) {
      let e11, s11;
      if (t54.length < o10) continue;
      let r11 = function(t55, e12, i11) {
        let n11 = [], s12 = t55, o11 = 0;
        return tV.spans(i11, t55, e12, { span() {
        }, point(t56, e13) {
          t56 > s12 && (n11.push({ from: s12, to: t56 }), o11 += t56 - s12), s12 = e13;
        } }, 20), s12 < e12 && (n11.push({ from: s12, to: e12 }), o11 += e12 - s12), { total: o11, ranges: n11 };
      }(t54.from, t54.to, this.stateDeco);
      if (r11.total < o10) continue;
      let h10 = this.scrollTarget ? this.scrollTarget.range.head : null;
      if (i10) {
        let i11, o11, l11 = n10 / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        if (null != h10) {
          let e12 = gE(r11, h10), n11 = ((this.visibleBottom - this.visibleTop) / 2 + l11) / t54.height;
          i11 = e12 - n11, o11 = e12 + n11;
        } else i11 = (this.visibleTop - t54.top - l11) / t54.height, o11 = (this.visibleBottom - t54.top + l11) / t54.height;
        e11 = gT(r11, i11), s11 = gT(r11, o11);
      } else {
        let t55, i11, o11 = r11.total * this.heightOracle.charWidth, l11 = n10 * this.heightOracle.charWidth;
        if (null != h10) {
          let e12 = gE(r11, h10), n11 = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + l11) / o11;
          t55 = e12 - n11, i11 = e12 + n11;
        } else t55 = (this.pixelViewport.left - l11) / o11, i11 = (this.pixelViewport.right + l11) / o11;
        e11 = gT(r11, t55), s11 = gT(r11, i11);
      }
      e11 > t54.from && l10(t54.from, e11, t54, r11), s11 < t54.to && l10(s11, t54.to, t54, r11);
    }
    return r10;
  }
  gapSize(t53, e10, i10, n10) {
    let s10 = gE(n10, i10) - gE(n10, e10);
    return this.heightOracle.lineWrapping ? t53.height * s10 : n10.total * this.heightOracle.charWidth * s10;
  }
  updateLineGaps(t53) {
    gA.same(t53, this.lineGaps) || (this.lineGaps = t53, this.lineGapDeco = u$.set(t53.map((t54) => t54.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let t53 = this.stateDeco;
    this.lineGaps.length && (t53 = t53.concat(this.lineGapDeco));
    let e10 = [];
    tV.spans(t53, this.viewport.from, this.viewport.to, { span(t54, i11) {
      e10.push({ from: t54, to: i11 });
    }, point() {
    } }, 20);
    let i10 = e10.length != this.visibleRanges.length || this.visibleRanges.some((t54, i11) => t54.from != e10[i11].from || t54.to != e10[i11].to);
    return this.visibleRanges = e10, i10 ? 4 : 0;
  }
  lineBlockAt(t53) {
    return t53 >= this.viewport.from && t53 <= this.viewport.to && this.viewportLines.find((e10) => e10.from <= t53 && e10.to >= t53) || gL(this.heightMap.lineAt(t53, gm.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t53) {
    return t53 >= this.viewportLines[0].top && t53 <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e10) => e10.top <= t53 && e10.bottom >= t53) || gL(this.heightMap.lineAt(this.scaler.fromDOM(t53), gm.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t53) {
    let e10 = this.lineBlockAtHeight(t53 + 8);
    return e10.from >= this.viewport.from || this.viewportLines[0].top - t53 > 200 ? e10 : this.viewportLines[0];
  }
  elementAtHeight(t53) {
    return gL(this.heightMap.blockAt(this.scaler.fromDOM(t53), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class gO {
  constructor(t53, e10) {
    this.from = t53, this.to = e10;
  }
}
function gT(t53, e10) {
  let { total: i10, ranges: n10 } = t53;
  if (e10 <= 0) return n10[0].from;
  if (e10 >= 1) return n10[n10.length - 1].to;
  let s10 = Math.floor(i10 * e10);
  for (let t54 = 0; ; t54++) {
    let { from: e11, to: i11 } = n10[t54], o10 = i11 - e11;
    if (s10 <= o10) return e11 + s10;
    s10 -= o10;
  }
}
function gE(t53, e10) {
  let i10 = 0;
  for (let { from: n10, to: s10 } of t53.ranges) {
    if (e10 <= s10) {
      i10 += e10 - n10;
      break;
    }
    i10 += s10 - n10;
  }
  return i10 / t53.total;
}
let gB = { toDOM: (t53) => t53, fromDOM: (t53) => t53, scale: 1, eq(t53) {
  return t53 == this;
} };
class gR {
  constructor(t53, e10, i10) {
    let n10 = 0, s10 = 0, o10 = 0;
    for (let r10 of (this.viewports = i10.map((i11) => {
      let { from: s11, to: o11 } = i11, r11 = e10.lineAt(s11, gm.ByPos, t53, 0, 0).top, l10 = e10.lineAt(o11, gm.ByPos, t53, 0, 0).bottom;
      return n10 += l10 - r11, { from: s11, to: o11, top: r11, bottom: l10, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n10) / (e10.height - n10), this.viewports)) r10.domTop = o10 + (r10.top - s10) * this.scale, o10 = r10.domBottom = r10.domTop + (r10.bottom - r10.top), s10 = r10.bottom;
  }
  toDOM(t53) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t53 < s10.top) return n10 + (t53 - i10) * this.scale;
      if (t53 <= s10.bottom) return s10.domTop + (t53 - s10.top);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
  fromDOM(t53) {
    for (let e10 = 0, i10 = 0, n10 = 0; ; e10++) {
      let s10 = e10 < this.viewports.length ? this.viewports[e10] : null;
      if (!s10 || t53 < s10.domTop) return i10 + (t53 - n10) / this.scale;
      if (t53 <= s10.domBottom) return s10.top + (t53 - s10.domTop);
      i10 = s10.bottom, n10 = s10.domBottom;
    }
  }
  eq(t53) {
    return t53 instanceof gR && this.scale == t53.scale && this.viewports.length == t53.viewports.length && this.viewports.every((e10, i10) => e10.from == t53.viewports[i10].from && e10.to == t53.viewports[i10].to);
  }
}
function gL(t53, e10) {
  if (1 == e10.scale) return t53;
  let i10 = e10.toDOM(t53.top), n10 = e10.toDOM(t53.bottom);
  return new gp(t53.from, t53.length, i10, n10 - i10, Array.isArray(t53._content) ? t53._content.map((t54) => gL(t54, e10)) : t53._content);
}
let gP = J.define({ combine: (t53) => t53.join(" ") }), gN = J.define({ combine: (t53) => t53.indexOf(true) > -1 }), gH = t0.newName(), gV = t0.newName(), gI = t0.newName(), gF = { "&light": "." + gV, "&dark": "." + gI };
function gW(t53, e10, i10) {
  return new t0(e10, { finish: (e11) => /&/.test(e11) ? e11.replace(/&\w*/, (e12) => {
    if ("&" == e12) return t53;
    if (!i10 || !i10[e12]) throw RangeError(`Unsupported selector: ${e12}`);
    return i10[e12];
  }) : t53 + " " + e11 });
}
let gz = gW("." + gH, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0 }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#444" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" }, ".cm-highlightSpace:before": { content: "attr(data-display)", position: "absolute", pointerEvents: "none", color: "#888" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, gF);
class gK {
  constructor(t53, e10) {
    this.points = t53, this.text = "", this.lineSeparator = e10.facet(tB.lineSeparator);
  }
  append(t53) {
    this.text += t53;
  }
  lineBreak() {
    this.text += "￿";
  }
  readRange(t53, e10) {
    if (!t53) return this;
    let i10 = t53.parentNode;
    for (let n10 = t53; ; ) {
      this.findPointBefore(i10, n10);
      let t54 = this.text.length;
      this.readNode(n10);
      let s10 = n10.nextSibling;
      if (s10 == e10) break;
      let o10 = uv.get(n10), r10 = uv.get(s10);
      (o10 && r10 ? o10.breakAfter : (o10 ? o10.breakAfter : ue(n10)) || ue(s10) && ("BR" != n10.nodeName || n10.cmIgnore) && this.text.length > t54) && this.lineBreak(), n10 = s10;
    }
    return this.findPointBefore(i10, e10), this;
  }
  readTextNode(t53) {
    let e10 = t53.nodeValue;
    for (let i10 of this.points) i10.node == t53 && (i10.pos = this.text.length + Math.min(i10.offset, e10.length));
    for (let i10 = 0, n10 = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s10 = -1, o10 = 1, r10;
      if (this.lineSeparator ? (s10 = e10.indexOf(this.lineSeparator, i10), o10 = this.lineSeparator.length) : (r10 = n10.exec(e10)) && (s10 = r10.index, o10 = r10[0].length), this.append(e10.slice(i10, s10 < 0 ? e10.length : s10)), s10 < 0) break;
      if (this.lineBreak(), o10 > 1) for (let e11 of this.points) e11.node == t53 && e11.pos > this.text.length && (e11.pos -= o10 - 1);
      i10 = s10 + o10;
    }
  }
  readNode(t53) {
    if (t53.cmIgnore) return;
    let e10 = uv.get(t53), i10 = e10 && e10.overrideDOMText;
    if (null != i10) {
      this.findPointInside(t53, i10.length);
      for (let t54 = i10.iter(); !t54.next().done; ) t54.lineBreak ? this.lineBreak() : this.append(t54.value);
    } else 3 == t53.nodeType ? this.readTextNode(t53) : "BR" == t53.nodeName ? t53.nextSibling && this.lineBreak() : 1 == t53.nodeType && this.readRange(t53.firstChild, null);
  }
  findPointBefore(t53, e10) {
    for (let i10 of this.points) i10.node == t53 && t53.childNodes[i10.offset] == e10 && (i10.pos = this.text.length);
  }
  findPointInside(t53, e10) {
    for (let i10 of this.points) (3 == t53.nodeType ? i10.node == t53 : t53.contains(i10.node)) && (i10.pos = this.text.length + (!function(t54, e11, i11) {
      for (; ; ) {
        if (!e11 || i11 < un(e11)) return false;
        if (e11 == t54) return true;
        i11 = ut(e11) + 1, e11 = e11.parentNode;
      }
    }(t53, i10.node, i10.offset) ? 0 : e10));
  }
}
class gq {
  constructor(t53, e10) {
    this.node = t53, this.offset = e10, this.pos = -1;
  }
}
class g_ {
  constructor(t53, e10, i10, n10) {
    this.typeOver = n10, this.bounds = null, this.text = "", this.domChanged = e10 > -1;
    let { impreciseHead: s10, impreciseAnchor: o10 } = t53.docView;
    if (t53.state.readOnly && e10 > -1) this.newSel = null;
    else if (e10 > -1 && (this.bounds = t53.docView.domBoundsAround(e10, i10, 0))) {
      let e11 = s10 || o10 ? [] : function(t54) {
        let e12 = [];
        if (t54.root.activeElement != t54.contentDOM) return e12;
        let { anchorNode: i12, anchorOffset: n11, focusNode: s11, focusOffset: o11 } = t54.observer.selectionRange;
        return i12 && (e12.push(new gq(i12, n11)), (s11 != i12 || o11 != n11) && e12.push(new gq(s11, o11))), e12;
      }(t53), i11 = new gK(e11, t53.state);
      i11.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = i11.text, this.newSel = function(t54, e12) {
        if (0 == t54.length) return null;
        let i12 = t54[0].pos, n11 = 2 == t54.length ? t54[1].pos : i12;
        return i12 > -1 && n11 > -1 ? $.single(i12 + e12, n11 + e12) : null;
      }(e11, this.bounds.from);
    } else {
      let e11 = t53.observer.selectionRange, i11 = s10 && s10.node == e11.focusNode && s10.offset == e11.focusOffset || !d5(t53.contentDOM, e11.focusNode) ? t53.state.selection.main.head : t53.docView.posFromDOM(e11.focusNode, e11.focusOffset), n11 = o10 && o10.node == e11.anchorNode && o10.offset == e11.anchorOffset || !d5(t53.contentDOM, e11.anchorNode) ? t53.state.selection.main.anchor : t53.docView.posFromDOM(e11.anchorNode, e11.anchorOffset), r10 = t53.viewport;
      if ((uL.ios || uL.chrome) && t53.state.selection.main.empty && i11 != n11 && (r10.from > 0 || r10.to < t53.state.doc.length)) {
        let e12 = Math.min(i11, n11), s11 = Math.max(i11, n11), o11 = r10.from - e12, l10 = r10.to - s11;
        (0 == o11 || 1 == o11 || 0 == e12) && (0 == l10 || -1 == l10 || s11 == t53.state.doc.length) && (i11 = 0, n11 = t53.state.doc.length);
      }
      this.newSel = $.single(n11, i11);
    }
  }
}
function gj(t53, e10) {
  let i10;
  let { newSel: n10 } = e10, o10 = t53.state.selection.main, r10 = t53.inputState.lastKeyTime > Date.now() - 100 ? t53.inputState.lastKeyCode : -1;
  if (e10.bounds) {
    let { from: n11, to: l10 } = e10.bounds, h10 = o10.from, a10 = null;
    (8 === r10 || uL.android && e10.text.length < l10 - n11) && (h10 = o10.to, a10 = "end");
    let c10 = function(t54, e11, i11, n12) {
      let s10 = Math.min(t54.length, e11.length), o11 = 0;
      for (; o11 < s10 && t54.charCodeAt(o11) == e11.charCodeAt(o11); ) o11++;
      if (o11 == s10 && t54.length == e11.length) return null;
      let r11 = t54.length, l11 = e11.length;
      for (; r11 > 0 && l11 > 0 && t54.charCodeAt(r11 - 1) == e11.charCodeAt(l11 - 1); ) r11--, l11--;
      if ("end" == n12) {
        let t55 = Math.max(0, o11 - Math.min(r11, l11));
        i11 -= r11 + t55 - o11;
      }
      if (r11 < o11 && t54.length < e11.length) {
        let t55 = i11 <= o11 && i11 >= r11 ? o11 - i11 : 0;
        o11 -= t55, l11 = o11 + (l11 - r11), r11 = o11;
      } else if (l11 < o11) {
        let t55 = i11 <= o11 && i11 >= l11 ? o11 - i11 : 0;
        o11 -= t55, r11 = o11 + (r11 - l11), l11 = o11;
      }
      return { from: o11, toA: r11, toB: l11 };
    }(t53.state.doc.sliceString(n11, l10, "￿"), e10.text, h10 - n11, a10);
    c10 && (uL.chrome && 13 == r10 && c10.toB == c10.from + 2 && "￿￿" == e10.text.slice(c10.from, c10.toB) && c10.toB--, i10 = { from: n11 + c10.from, to: n11 + c10.toA, insert: s.of(e10.text.slice(c10.from, c10.toB).split("￿")) });
  } else n10 && (!t53.hasFocus && t53.state.facet(fy) || n10.main.eq(o10)) && (n10 = null);
  if (!i10 && !n10) return false;
  if (!i10 && e10.typeOver && !o10.empty && n10 && n10.main.empty ? i10 = { from: o10.from, to: o10.to, insert: t53.state.doc.slice(o10.from, o10.to) } : i10 && i10.from >= o10.from && i10.to <= o10.to && (i10.from != o10.from || i10.to != o10.to) && o10.to - o10.from - (i10.to - i10.from) <= 4 ? i10 = { from: o10.from, to: o10.to, insert: t53.state.doc.slice(o10.from, i10.from).append(i10.insert).append(t53.state.doc.slice(i10.to, o10.to)) } : (uL.mac || uL.android) && i10 && i10.from == i10.to && i10.from == o10.head - 1 && /^\. ?$/.test(i10.insert.toString()) && "off" == t53.contentDOM.getAttribute("autocorrect") ? (n10 && 2 == i10.insert.length && (n10 = $.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: o10.from, to: o10.to, insert: s.of([" "]) }) : uL.chrome && i10 && i10.from == i10.to && i10.from == o10.head && "\n " == i10.insert.toString() && t53.lineWrapping && (n10 && (n10 = $.single(n10.main.anchor - 1, n10.main.head - 1)), i10 = { from: o10.from, to: o10.to, insert: s.of([" "]) }), i10) {
    let e11;
    if (uL.ios && t53.inputState.flushIOSKey(i10) || uL.android && (i10.to == o10.to && (i10.from == o10.from || i10.from == o10.from - 1 && " " == t53.state.sliceDoc(i10.from, o10.from)) && 1 == i10.insert.length && 2 == i10.insert.lines && uc(t53.contentDOM, "Enter", 13) || (i10.from == o10.from - 1 && i10.to == o10.to && 0 == i10.insert.length || 8 == r10 && i10.insert.length < i10.to - i10.from && i10.to > o10.head) && uc(t53.contentDOM, "Backspace", 8) || i10.from == o10.from && i10.to == o10.to + 1 && 0 == i10.insert.length && uc(t53.contentDOM, "Delete", 46))) return true;
    let s10 = i10.insert.toString();
    t53.inputState.composing >= 0 && t53.inputState.composing++;
    let l10 = () => e11 || (e11 = function(t54, e12, i11) {
      let n11, s11 = t54.state, o11 = s11.selection.main;
      if (e12.from >= o11.from && e12.to <= o11.to && e12.to - e12.from >= (o11.to - o11.from) / 3 && (!i11 || i11.main.empty && i11.main.from == e12.from + e12.insert.length) && t54.inputState.composing < 0) {
        let i12 = o11.from < e12.from ? s11.sliceDoc(o11.from, e12.from) : "", r12 = o11.to > e12.to ? s11.sliceDoc(e12.to, o11.to) : "";
        n11 = s11.replaceSelection(t54.state.toText(i12 + e12.insert.sliceString(0, void 0, t54.state.lineBreak) + r12));
      } else {
        let r12 = s11.changes(e12), l11 = i11 && i11.main.to <= r12.newLength ? i11.main : void 0;
        if (s11.selection.ranges.length > 1 && t54.inputState.composing >= 0 && e12.to <= o11.to && e12.to >= o11.to - 10) {
          let h10 = t54.state.sliceDoc(e12.from, e12.to), a10, c10 = i11 && fF(t54, i11.main.head);
          if (c10) {
            let t55 = e12.insert.length - (e12.to - e12.from);
            a10 = { from: c10.from, to: c10.to - t55 };
          } else a10 = t54.state.doc.lineAt(o11.head);
          let d10 = o11.to - e12.to, u10 = o11.to - o11.from;
          n11 = s11.changeByRange((i12) => {
            if (i12.from == o11.from && i12.to == o11.to) return { changes: r12, range: l11 || i12.map(r12) };
            let n12 = i12.to - d10, c11 = n12 - h10.length;
            if (i12.to - i12.from != u10 || t54.state.sliceDoc(c11, n12) != h10 || i12.to >= a10.from && i12.from <= a10.to) return { range: i12 };
            let f10 = s11.changes({ from: c11, to: n12, insert: e12.insert }), g10 = i12.to - o11.to;
            return { changes: f10, range: l11 ? $.range(Math.max(0, l11.anchor + g10), Math.max(0, l11.head + g10)) : i12.map(f10) };
          });
        } else n11 = { changes: r12, selection: l11 && s11.selection.replaceRange(l11) };
      }
      let r11 = "input.type";
      return (t54.composing || t54.inputState.compositionPendingChange && t54.inputState.compositionEndedAt > Date.now() - 50) && (t54.inputState.compositionPendingChange = false, r11 += ".compose", t54.inputState.compositionFirstChange && (r11 += ".start", t54.inputState.compositionFirstChange = false)), s11.update(n11, { userEvent: r11, scrollIntoView: true });
    }(t53, i10, n10));
    return t53.state.facet(fu).some((e12) => e12(t53, i10.from, i10.to, s10, l10)) || t53.dispatch(l10()), true;
  }
  if (!n10 || n10.main.eq(o10)) return false;
  {
    let e11 = false, i11 = "select";
    return t53.inputState.lastSelectionTime > Date.now() - 50 && ("select" == t53.inputState.lastSelectionOrigin && (e11 = true), i11 = t53.inputState.lastSelectionOrigin), t53.dispatch({ selection: n10, scrollIntoView: e11, userEvent: i11 }), true;
  }
}
let gG = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, gU = uL.ie && uL.ie_version <= 11;
class g$ {
  constructor(t53) {
    this.view = t53, this.active = false, this.selectionRange = new ur(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t53.contentDOM, this.observer = new MutationObserver((e10) => {
      for (let t54 of e10) this.queue.push(t54);
      (uL.ie && uL.ie_version <= 11 || uL.ios && t53.composing) && e10.some((t54) => "childList" == t54.type && t54.removedNodes.length || "characterData" == t54.type && t54.oldValue.length > t54.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), gU && (this.onCharData = (t54) => {
      this.queue.push({ target: t54.target, type: "characterData", oldValue: t54.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver(() => {
      var t54;
      (null === (t54 = this.view.docView) || void 0 === t54 ? void 0 : t54.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t53.scrollDOM)), this.addWindowListeners(this.win = t53.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((t54) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t54.length > 0 && t54[t54.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t54) => {
      t54.length > 0 && t54[t54.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t53) {
    this.view.inputState.runHandlers("scroll", t53), this.intersecting && this.view.measure();
  }
  onScroll(t53) {
    this.intersecting && this.flush(false), this.onScrollChanged(t53);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t53) {
    ("change" != t53.type || t53.matches) && (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t53) {
    if (this.gapIntersection && (t53.length != this.gaps.length || this.gaps.some((e10, i10) => e10 != t53[i10]))) {
      for (let e10 of (this.gapIntersection.disconnect(), t53)) this.gapIntersection.observe(e10);
      this.gaps = t53;
    }
  }
  onSelectionChange(t53) {
    let e10 = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i10 } = this, n10 = this.selectionRange;
    if (i10.state.facet(fy) ? i10.root.activeElement != this.dom : !d9(i10.dom, n10)) return;
    let s10 = n10.anchorNode && i10.docView.nearest(n10.anchorNode);
    if (s10 && s10.ignoreEvent(t53)) {
      e10 || (this.selectionChanged = false);
      return;
    }
    (uL.ie && uL.ie_version <= 11 || uL.android && uL.chrome) && !i10.state.selection.main.empty && n10.focusNode && d7(n10.focusNode, n10.focusOffset, n10.anchorNode, n10.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: t53 } = this, e10 = d4(t53.root);
    if (!e10) return false;
    let i10 = uL.safari && 11 == t53.root.nodeType && function(t54) {
      let e11 = t54.activeElement;
      for (; e11 && e11.shadowRoot; ) e11 = e11.shadowRoot.activeElement;
      return e11;
    }(this.dom.ownerDocument) == this.dom && function(t54, e11) {
      if (e11.getComposedRanges) {
        let i12 = e11.getComposedRanges(t54.root)[0];
        if (i12) return gX(t54, i12);
      }
      let i11 = null;
      function n11(t55) {
        t55.preventDefault(), t55.stopImmediatePropagation(), i11 = t55.getTargetRanges()[0];
      }
      return t54.contentDOM.addEventListener("beforeinput", n11, true), t54.dom.ownerDocument.execCommand("indent"), t54.contentDOM.removeEventListener("beforeinput", n11, true), i11 ? gX(t54, i11) : null;
    }(this.view, e10) || e10;
    if (!i10 || this.selectionRange.eq(i10)) return false;
    let n10 = d9(this.dom, i10);
    return n10 && !this.selectionChanged && t53.inputState.lastFocusTime > Date.now() - 200 && t53.inputState.lastTouchTime < Date.now() - 300 && function(t54, e11) {
      let i11 = e11.focusNode, n11 = e11.focusOffset;
      if (!i11 || e11.anchorNode != i11 || e11.anchorOffset != n11) return false;
      for (n11 = Math.min(n11, un(i11)); ; ) if (n11) {
        if (1 != i11.nodeType) return false;
        let t55 = i11.childNodes[n11 - 1];
        "false" == t55.contentEditable ? n11-- : n11 = un(i11 = t55);
      } else {
        if (i11 == t54) return true;
        n11 = ut(i11), i11 = i11.parentNode;
      }
    }(this.dom, i10) ? (this.view.inputState.lastFocusTime = 0, t53.docView.updateSelection(), false) : (this.selectionRange.setRange(i10), n10 && (this.selectionChanged = true), true);
  }
  setSelectionRange(t53, e10) {
    this.selectionRange.set(t53.node, t53.offset, e10.node, e10.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t53 = 0, e10 = null;
    for (let i10 = this.dom; i10; ) if (1 == i10.nodeType) !e10 && t53 < this.scrollTargets.length && this.scrollTargets[t53] == i10 ? t53++ : e10 || (e10 = this.scrollTargets.slice(0, t53)), e10 && e10.push(i10), i10 = i10.assignedSlot || i10.parentNode;
    else if (11 == i10.nodeType) i10 = i10.host;
    else break;
    if (t53 < this.scrollTargets.length && !e10 && (e10 = this.scrollTargets.slice(0, t53)), e10) {
      for (let t54 of this.scrollTargets) t54.removeEventListener("scroll", this.onScroll);
      for (let t54 of this.scrollTargets = e10) t54.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t53) {
    if (!this.active) return t53();
    try {
      return this.stop(), t53();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, gG), gU && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), gU && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(t53, e10) {
    var i10;
    this.delayedAndroidKey || (this.flushingAndroidKey = this.view.win.requestAnimationFrame(() => {
      let t54 = this.delayedAndroidKey;
      t54 && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = t54.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && t54.force && uc(this.dom, t54.key, t54.keyCode));
    })), this.delayedAndroidKey && "Enter" != t53 || (this.delayedAndroidKey = { key: t53, keyCode: e10, force: this.lastChange < Date.now() - 50 || !!(null === (i10 = this.delayedAndroidKey) || void 0 === i10 ? void 0 : i10.force) });
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
    for (let t53 of this.observer.takeRecords()) this.queue.push(t53);
    return this.queue;
  }
  processRecords() {
    let t53 = this.pendingRecords();
    t53.length && (this.queue = []);
    let e10 = -1, i10 = -1, n10 = false;
    for (let s10 of t53) {
      let t54 = this.readMutation(s10);
      t54 && (t54.typeOver && (n10 = true), -1 == e10 ? { from: e10, to: i10 } = t54 : (e10 = Math.min(t54.from, e10), i10 = Math.max(t54.to, i10)));
    }
    return { from: e10, to: i10, typeOver: n10 };
  }
  readChange() {
    let { from: t53, to: e10, typeOver: i10 } = this.processRecords(), n10 = this.selectionChanged && d9(this.dom, this.selectionRange);
    if (t53 < 0 && !n10) return null;
    t53 > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let s10 = new g_(this.view, t53, e10, i10);
    return this.view.docView.domChanged = { newSel: s10.newSel ? s10.newSel.main : null }, s10;
  }
  flush() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    t53 && this.readSelectionRange();
    let e10 = this.readChange();
    if (!e10) return this.view.requestMeasure(), false;
    let i10 = this.view.state, n10 = gj(this.view, e10);
    return this.view.state == i10 && (e10.domChanged || e10.newSel && !e10.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n10;
  }
  readMutation(t53) {
    let e10 = this.view.docView.nearest(t53.target);
    if (!e10 || e10.ignoreMutation(t53)) return null;
    if (e10.markDirty("attributes" == t53.type), "attributes" == t53.type && (e10.flags |= 4), "childList" == t53.type) {
      let i10 = gY(e10, t53.previousSibling || t53.target.previousSibling, -1), n10 = gY(e10, t53.nextSibling || t53.target.nextSibling, 1);
      return { from: i10 ? e10.posAfter(i10) : e10.posAtStart, to: n10 ? e10.posBefore(n10) : e10.posAtEnd, typeOver: false };
    }
    return "characterData" == t53.type ? { from: e10.posAtStart, to: e10.posAtEnd, typeOver: t53.target.nodeValue == t53.oldValue } : null;
  }
  setWindow(t53) {
    t53 != this.win && (this.removeWindowListeners(this.win), this.win = t53, this.addWindowListeners(this.win));
  }
  addWindowListeners(t53) {
    t53.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener("change", this.onPrint) : t53.addEventListener("beforeprint", this.onPrint), t53.addEventListener("scroll", this.onScroll), t53.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t53) {
    t53.removeEventListener("scroll", this.onScroll), t53.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener("change", this.onPrint) : t53.removeEventListener("beforeprint", this.onPrint), t53.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var t53, e10, i10;
    for (let n10 of (this.stop(), null === (t53 = this.intersection) || void 0 === t53 || t53.disconnect(), null === (e10 = this.gapIntersection) || void 0 === e10 || e10.disconnect(), null === (i10 = this.resizeScroll) || void 0 === i10 || i10.disconnect(), this.scrollTargets)) n10.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function gY(t53, e10, i10) {
  for (; e10; ) {
    let n10 = uv.get(e10);
    if (n10 && n10.parent == t53) return n10;
    let s10 = e10.parentNode;
    e10 = s10 != t53.dom ? s10 : i10 > 0 ? e10.nextSibling : e10.previousSibling;
  }
  return null;
}
function gX(t53, e10) {
  let i10 = e10.startContainer, n10 = e10.startOffset, s10 = e10.endContainer, o10 = e10.endOffset, r10 = t53.docView.domAtPos(t53.state.selection.main.anchor);
  return d7(r10.node, r10.offset, s10, o10) && ([i10, n10, s10, o10] = [s10, o10, i10, n10]), { anchorNode: i10, anchorOffset: n10, focusNode: s10, focusOffset: o10 };
}
class gJ {
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
  constructor(t53 = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t53.parent && t53.parent.appendChild(this.dom);
    let { dispatch: e10 } = t53;
    for (let i10 of (this.dispatchTransactions = t53.dispatchTransactions || e10 && ((t54) => t54.forEach((t55) => e10(t55, this))) || ((t54) => this.update(t54)), this.dispatch = this.dispatch.bind(this), this._root = t53.root || function(t54) {
      for (; t54; ) {
        if (t54 && (9 == t54.nodeType || 11 == t54.nodeType && t54.host)) return t54;
        t54 = t54.assignedSlot || t54.parentNode;
      }
      return null;
    }(t53.parent) || document, this.viewState = new gD(t53.state || tB.create(t53)), t53.scrollTo && t53.scrollTo.is(fw) && (this.viewState.scrollTarget = t53.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(fS).map((t54) => new fM(t54)), this.plugins)) i10.update(this);
    this.observer = new g$(this), this.inputState = new fX(this), this.inputState.ensureHandlers(this.plugins), this.docView = new fV(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure();
  }
  dispatch() {
    for (var t53 = arguments.length, e10 = Array(t53), i10 = 0; i10 < t53; i10++) e10[i10] = arguments[i10];
    let n10 = 1 == e10.length && e10[0] instanceof tM ? e10 : 1 == e10.length && Array.isArray(e10[0]) ? e10[0] : [this.state.update(...e10)];
    this.dispatchTransactions(n10, this);
  }
  update(t53) {
    if (0 != this.updateState) throw Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e10 = false, i10 = false, n10, s10 = this.state;
    for (let e11 of t53) {
      if (e11.startState != s10) throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s10 = e11.state;
    }
    if (this.destroyed) {
      this.viewState.state = s10;
      return;
    }
    let o10 = this.hasFocus, r10 = 0, l10 = null;
    t53.some((t54) => t54.annotation(gh)) ? (this.inputState.notifiedFocused = o10, r10 = 1) : o10 == this.inputState.notifiedFocused || (this.inputState.notifiedFocused = o10, (l10 = ga(s10, o10)) || (r10 = 1));
    let h10 = this.observer.delayedAndroidKey, a10 = null;
    if (h10 ? (this.observer.clearDelayedAndroidKey(), ((a10 = this.observer.readChange()) && !this.state.doc.eq(s10.doc) || !this.state.selection.eq(s10.selection)) && (a10 = null)) : this.observer.clear(), s10.facet(tB.phrases) != this.state.facet(tB.phrases)) return this.setState(s10);
    n10 = fH.create(this, s10, t53), n10.flags |= r10;
    let c10 = this.viewState.scrollTarget;
    try {
      for (let e11 of (this.updateState = 2, t53)) {
        if (c10 && (c10 = c10.map(e11.changes)), e11.scrollIntoView) {
          let { main: t54 } = e11.state.selection;
          c10 = new fv(t54.empty ? t54 : $.cursor(t54.head, t54.head > t54.anchor ? -1 : 1));
        }
        for (let t54 of e11.effects) t54.is(fw) && (c10 = t54.value.clip(this.state));
      }
      this.viewState.update(n10, c10), this.bidiCache = g0.update(this.bidiCache, n10.changes), n10.empty || (this.updatePlugins(n10), this.inputState.update(n10)), e10 = this.docView.update(n10), this.state.facet(fP) != this.styleModules && this.mountStyles(), i10 = this.updateAttrs(), this.showAnnouncements(t53), this.docView.updateSelection(e10, t53.some((t54) => t54.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n10.startState.facet(gP) != n10.state.facet(gP) && (this.viewState.mustMeasureContent = true), (e10 || i10 || c10 || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e10 && this.docViewUpdate(), !n10.empty) for (let t54 of this.state.facet(fd)) try {
      t54(n10);
    } catch (t55) {
      fb(this.state, t55, "update listener");
    }
    (l10 || a10) && Promise.resolve().then(() => {
      l10 && this.state == l10.startState && this.dispatch(l10), a10 && !gj(this, a10) && h10.force && uc(this.contentDOM, h10.key, h10.keyCode);
    });
  }
  setState(t53) {
    if (0 != this.updateState) throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t53;
      return;
    }
    this.updateState = 2;
    let e10 = this.hasFocus;
    try {
      for (let t54 of this.plugins) t54.destroy(this);
      for (let e11 of (this.viewState = new gD(t53), this.plugins = t53.facet(fS).map((t54) => new fM(t54)), this.pluginMap.clear(), this.plugins)) e11.update(this);
      this.docView.destroy(), this.docView = new fV(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e10 && this.focus(), this.requestMeasure();
  }
  updatePlugins(t53) {
    let e10 = t53.startState.facet(fS), i10 = t53.state.facet(fS);
    if (e10 != i10) {
      let n10 = [];
      for (let s10 of i10) {
        let i11 = e10.indexOf(s10);
        if (i11 < 0) n10.push(new fM(s10));
        else {
          let e11 = this.plugins[i11];
          e11.mustUpdate = t53, n10.push(e11);
        }
      }
      for (let e11 of this.plugins) e11.mustUpdate != t53 && e11.destroy(this);
      this.plugins = n10, this.pluginMap.clear();
    } else for (let e11 of this.plugins) e11.mustUpdate = t53;
    for (let t54 = 0; t54 < this.plugins.length; t54++) this.plugins[t54].update(this);
    e10 != i10 && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t53 of this.plugins) {
      let e10 = t53.value;
      if (e10 && e10.docViewUpdate) try {
        e10.docViewUpdate(this);
      } catch (t54) {
        fb(this.state, t54, "doc view update listener");
      }
    }
  }
  measure() {
    let t53 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t53 && this.observer.forceFlush();
    let e10 = null, i10 = this.scrollDOM, n10 = i10.scrollTop * this.scaleY, { scrollAnchorPos: s10, scrollAnchorHeight: o10 } = this.viewState;
    Math.abs(n10 - this.viewState.scrollTop) > 1 && (o10 = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let t54 = 0; ; t54++) {
        if (o10 < 0) {
          if (uu(i10)) s10 = -1, o10 = this.viewState.heightMap.height;
          else {
            let t55 = this.viewState.scrollAnchorAt(n10);
            s10 = t55.from, o10 = t55.top;
          }
        }
        this.updateState = 1;
        let r10 = this.viewState.measure(this);
        if (!r10 && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
        if (t54 > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let l10 = [];
        4 & r10 || ([this.measureRequests, l10] = [l10, this.measureRequests]);
        let h10 = l10.map((t55) => {
          try {
            return t55.read(this);
          } catch (t56) {
            return fb(this.state, t56), gZ;
          }
        }), a10 = fH.create(this, this.state, []), c10 = false;
        a10.flags |= r10, e10 ? e10.flags |= r10 : e10 = a10, this.updateState = 2, !a10.empty && (this.updatePlugins(a10), this.inputState.update(a10), this.updateAttrs(), (c10 = this.docView.update(a10)) && this.docViewUpdate());
        for (let t55 = 0; t55 < l10.length; t55++) if (h10[t55] != gZ) try {
          let e11 = l10[t55];
          e11.write && e11.write(h10[t55], this);
        } catch (t56) {
          fb(this.state, t56);
        }
        if (c10 && this.docView.updateSelection(true), !a10.viewportChanged && 0 == this.measureRequests.length) {
          if (this.viewState.editorHeight) {
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o10 = -1;
              continue;
            }
            {
              let t55 = (s10 < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s10).top) - o10;
              if (t55 > 1 || t55 < -1) {
                n10 += t55, i10.scrollTop = n10 / this.scaleY, o10 = -1;
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
    if (e10 && !e10.empty) for (let t54 of this.state.facet(fd)) t54(e10);
  }
  get themeClasses() {
    return gH + " " + (this.state.facet(gN) ? gI : gV) + " " + this.state.facet(gP);
  }
  updateAttrs() {
    let t53 = g1(this, fA, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), e10 = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", translate: "no", contenteditable: this.state.facet(fy) ? "true" : "false", class: "cm-content", style: `${uL.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (e10["aria-readonly"] = "true"), g1(this, fC, e10);
    let i10 = this.observer.ignore(() => {
      let i11 = uq(this.contentDOM, this.contentAttrs, e10), n10 = uq(this.dom, this.editorAttrs, t53);
      return i11 || n10;
    });
    return this.editorAttrs = t53, this.contentAttrs = e10, i10;
  }
  showAnnouncements(t53) {
    let e10 = true;
    for (let i10 of t53) for (let t54 of i10.effects) t54.is(gJ.announce) && (e10 && (this.announceDOM.textContent = ""), e10 = false, this.announceDOM.appendChild(document.createElement("div")).textContent = t54.value);
  }
  mountStyles() {
    this.styleModules = this.state.facet(fP);
    let t53 = this.state.facet(gJ.cspNonce);
    t0.mount(this.root, this.styleModules.concat(gz).reverse(), t53 ? { nonce: t53 } : void 0);
  }
  readMeasured() {
    if (2 == this.updateState) throw Error("Reading the editor layout isn't allowed during an update");
    0 == this.updateState && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(t53) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t53 && !(this.measureRequests.indexOf(t53) > -1)) {
      if (null != t53.key) {
        for (let e10 = 0; e10 < this.measureRequests.length; e10++) if (this.measureRequests[e10].key === t53.key) {
          this.measureRequests[e10] = t53;
          return;
        }
      }
      this.measureRequests.push(t53);
    }
  }
  plugin(t53) {
    let e10 = this.pluginMap.get(t53);
    return (void 0 === e10 || e10 && e10.spec != t53) && this.pluginMap.set(t53, e10 = this.plugins.find((e11) => e11.spec == t53) || null), e10 && e10.update(this).value;
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
  elementAtHeight(t53) {
    return this.readMeasured(), this.viewState.elementAtHeight(t53);
  }
  lineBlockAtHeight(t53) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t53);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t53) {
    return this.viewState.lineBlockAt(t53);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t53, e10, i10) {
    return fY(this, t53, fU(this, t53, e10, i10));
  }
  moveByGroup(t53, e10) {
    return fY(this, t53, fU(this, t53, e10, (e11) => {
      var i10;
      let n10, s10;
      return i10 = t53.head, s10 = (n10 = this.state.charCategorizer(i10))(e11), (t54) => {
        let e12 = n10(t54);
        return s10 == tT.Space && (s10 = e12), s10 == e12;
      };
    }));
  }
  visualLineSide(t53, e10) {
    let i10 = this.bidiSpans(t53), n10 = this.textDirectionAt(t53.from), s10 = i10[e10 ? i10.length - 1 : 0];
    return $.cursor(s10.side(e10, n10) + t53.from, s10.forward(!e10, n10) ? 1 : -1);
  }
  moveToLineBoundary(t53, e10) {
    let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return function(t54, e11, i11, n10) {
      let s10 = function(t55, e12) {
        let i12 = t55.lineBlockAt(e12);
        if (Array.isArray(i12.type)) {
          for (let t56 of i12.type) if (t56.to > e12 || t56.to == e12 && (t56.to == i12.to || t56.type == uU.Text)) return t56;
        }
        return i12;
      }(t54, e11.head), o10 = n10 && s10.type == uU.Text && (t54.lineWrapping || s10.widgetLineBreaks) ? t54.coordsAtPos(e11.assoc < 0 && e11.head > s10.from ? e11.head - 1 : e11.head) : null;
      if (o10) {
        let e12 = t54.dom.getBoundingClientRect(), n11 = t54.textDirectionAt(s10.from), r10 = t54.posAtCoords({ x: i11 == (n11 == u8.LTR) ? e12.right - 1 : e12.left + 1, y: (o10.top + o10.bottom) / 2 });
        if (null != r10) return $.cursor(r10, i11 ? -1 : 1);
      }
      return $.cursor(i11 ? s10.to : s10.from, i11 ? -1 : 1);
    }(this, t53, e10, i10);
  }
  moveVertically(t53, e10, i10) {
    return fY(this, t53, function(t54, e11, i11, n10) {
      let s10 = e11.head, o10 = i11 ? 1 : -1;
      if (s10 == (i11 ? t54.state.doc.length : 0)) return $.cursor(s10, e11.assoc);
      let r10 = e11.goalColumn, l10, h10 = t54.contentDOM.getBoundingClientRect(), a10 = t54.coordsAtPos(s10, e11.assoc || -1), c10 = t54.documentTop;
      if (a10) null == r10 && (r10 = a10.left - h10.left), l10 = o10 < 0 ? a10.top : a10.bottom;
      else {
        let e12 = t54.viewState.lineBlockAt(s10);
        null == r10 && (r10 = Math.min(h10.right - h10.left, t54.defaultCharacterWidth * (s10 - e12.from))), l10 = (o10 < 0 ? e12.top : e12.bottom) + c10;
      }
      let d10 = h10.left + r10, u10 = null != n10 ? n10 : t54.viewState.heightOracle.textHeight >> 1;
      for (let e12 = 0; ; e12 += 10) {
        let i12 = l10 + (u10 + e12) * o10, n11 = fj(t54, { x: d10, y: i12 }, false, o10);
        if (i12 < h10.top || i12 > h10.bottom || (o10 < 0 ? n11 < s10 : n11 > s10)) {
          let e13 = t54.docView.coordsForChar(n11), s11 = !e13 || i12 < e13.top ? -1 : 1;
          return $.cursor(n11, s11, void 0, r10);
        }
      }
    }(this, t53, e10, i10));
  }
  domAtPos(t53) {
    return this.docView.domAtPos(t53);
  }
  posAtDOM(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this.docView.posFromDOM(t53, e10);
  }
  posAtCoords(t53) {
    let e10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.readMeasured(), fj(this, t53, e10);
  }
  coordsAtPos(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    this.readMeasured();
    let i10 = this.docView.coordsAt(t53, e10);
    if (!i10 || i10.left == i10.right) return i10;
    let n10 = this.state.doc.lineAt(t53), s10 = this.bidiSpans(n10);
    return us(i10, s10[fn.find(s10, t53 - n10.from, -1, e10)].dir == u8.LTR == e10 > 0);
  }
  coordsForChar(t53) {
    return this.readMeasured(), this.docView.coordsForChar(t53);
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
  textDirectionAt(t53) {
    return !this.state.facet(fg) || t53 < this.viewport.from || t53 > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t53));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t53) {
    if (t53.length > gQ) return fo(t53.length);
    let e10 = this.textDirectionAt(t53.from), i10;
    for (let n11 of this.bidiCache) if (n11.from == t53.from && n11.dir == e10 && (n11.fresh || function t54(e11, i11) {
      if (e11.length != i11.length) return false;
      for (let n12 = 0; n12 < e11.length; n12++) {
        let s10 = e11[n12], o10 = i11[n12];
        if (s10.from != o10.from || s10.to != o10.to || s10.direction != o10.direction || !t54(s10.inner, o10.inner)) return false;
      }
      return true;
    }(n11.isolates, i10 = fB(this, t53)))) return n11.order;
    i10 || (i10 = fB(this, t53));
    let n10 = function(t54, e11, i11) {
      if (!t54) return [new fn(0, 0, e11 == u4 ? 1 : 0)];
      if (e11 == u3 && !i11.length && !fi.test(t54)) return fo(t54.length);
      if (i11.length) for (; t54.length > fs.length; ) fs[fs.length] = 256;
      let n11 = [], s10 = e11 == u3 ? 0 : 1;
      return function t55(e12, i12, n12, s11, o10, r10, l10) {
        let h10 = i12 % 2 ? 2 : 1;
        (function(t56, e13, i13, n13, s12) {
          for (let o11 = 0; o11 <= n13.length; o11++) {
            let r11 = o11 ? n13[o11 - 1].to : e13, l11 = o11 < n13.length ? n13[o11].from : i13, h11 = o11 ? 256 : s12;
            for (let e14 = r11, i14 = h11, n14 = h11; e14 < l11; e14++) {
              let s13 = fe(t56.charCodeAt(e14));
              512 == s13 ? s13 = i14 : 8 == s13 && 4 == n14 && (s13 = 16), fs[e14] = 4 == s13 ? 2 : s13, 7 & s13 && (n14 = s13), i14 = s13;
            }
            for (let t57 = r11, e14 = h11, n14 = h11; t57 < l11; t57++) {
              let s13 = fs[t57];
              if (128 == s13) t57 < l11 - 1 && e14 == fs[t57 + 1] && 24 & e14 ? s13 = fs[t57] = e14 : fs[t57] = 256;
              else if (64 == s13) {
                let s14 = t57 + 1;
                for (; s14 < l11 && 64 == fs[s14]; ) s14++;
                let o12 = t57 && 8 == e14 || s14 < i13 && 8 == fs[s14] ? 1 == n14 ? 1 : 8 : 256;
                for (let e15 = t57; e15 < s14; e15++) fs[e15] = o12;
                t57 = s14 - 1;
              } else 8 == s13 && 1 == n14 && (fs[t57] = 1);
              e14 = s13, 7 & s13 && (n14 = s13);
            }
          }
        })(e12, o10, r10, s11, h10), function(t56, e13, i13, n13, s12) {
          let o11 = 1 == s12 ? 2 : 1;
          for (let r11 = 0, l11 = 0, h11 = 0; r11 <= n13.length; r11++) {
            let a10 = r11 ? n13[r11 - 1].to : e13, c10 = r11 < n13.length ? n13[r11].from : i13;
            for (let e14 = a10, i14, n14, r12; e14 < c10; e14++) if (n14 = u7[i14 = t56.charCodeAt(e14)]) {
              if (n14 < 0) {
                for (let t57 = l11 - 3; t57 >= 0; t57 -= 3) if (ft[t57 + 1] == -n14) {
                  let i15 = ft[t57 + 2], n15 = 2 & i15 ? s12 : 4 & i15 ? 1 & i15 ? o11 : s12 : 0;
                  n15 && (fs[e14] = fs[ft[t57]] = n15), l11 = t57;
                  break;
                }
              } else if (189 == ft.length) break;
              else ft[l11++] = e14, ft[l11++] = i14, ft[l11++] = h11;
            } else if (2 == (r12 = fs[e14]) || 1 == r12) {
              let t57 = r12 == s12;
              h11 = t57 ? 0 : 1;
              for (let e15 = l11 - 3; e15 >= 0; e15 -= 3) {
                let i15 = ft[e15 + 2];
                if (2 & i15) break;
                if (t57) ft[e15 + 2] |= 2;
                else {
                  if (4 & i15) break;
                  ft[e15 + 2] |= 4;
                }
              }
            }
          }
        }(e12, o10, r10, s11, h10), function(t56, e13, i13, n13) {
          for (let s12 = 0, o11 = n13; s12 <= i13.length; s12++) {
            let r11 = s12 ? i13[s12 - 1].to : t56, l11 = s12 < i13.length ? i13[s12].from : e13;
            for (let h11 = r11; h11 < l11; ) {
              let r12 = fs[h11];
              if (256 == r12) {
                let r13 = h11 + 1;
                for (; ; ) if (r13 == l11) {
                  if (s12 == i13.length) break;
                  r13 = i13[s12++].to, l11 = s12 < i13.length ? i13[s12].from : e13;
                } else if (256 == fs[r13]) r13++;
                else break;
                let a10 = 1 == o11, c10 = a10 == ((r13 < e13 ? fs[r13] : n13) == 1) ? a10 ? 1 : 2 : n13;
                for (let e14 = r13, n14 = s12, o12 = n14 ? i13[n14 - 1].to : t56; e14 > h11; ) e14 == o12 && (e14 = i13[--n14].from, o12 = n14 ? i13[n14 - 1].to : t56), fs[--e14] = c10;
                h11 = r13;
              } else o11 = r12, h11++;
            }
          }
        }(o10, r10, s11, h10), function e13(i13, n13, s12, o11, r11, l11, h11) {
          let a10 = o11 % 2 ? 2 : 1;
          if (o11 % 2 == r11 % 2) for (let c10 = n13, d10 = 0; c10 < s12; ) {
            let n14 = true, u10 = false;
            if (d10 == l11.length || c10 < l11[d10].from) {
              let t56 = fs[c10];
              t56 != a10 && (n14 = false, u10 = 16 == t56);
            }
            let f10 = n14 || 1 != a10 ? null : [], g10 = n14 ? o11 : o11 + 1, p10 = c10;
            e: for (; ; ) if (d10 < l11.length && p10 == l11[d10].from) {
              if (u10) break;
              let e14 = l11[d10];
              if (!n14) for (let t56 = e14.to, i14 = d10 + 1; ; ) {
                if (t56 == s12) break e;
                if (i14 < l11.length && l11[i14].from == t56) t56 = l11[i14++].to;
                else if (fs[t56] == a10) break e;
                else break;
              }
              d10++, f10 ? f10.push(e14) : (e14.from > c10 && h11.push(new fn(c10, e14.from, g10)), t55(i13, e14.direction == u3 != !(g10 % 2) ? o11 + 1 : o11, r11, e14.inner, e14.from, e14.to, h11), c10 = e14.to), p10 = e14.to;
            } else if (p10 == s12 || (n14 ? fs[p10] != a10 : fs[p10] == a10)) break;
            else p10++;
            f10 ? e13(i13, c10, p10, o11 + 1, r11, f10, h11) : c10 < p10 && h11.push(new fn(c10, p10, g10)), c10 = p10;
          }
          else for (let c10 = s12, d10 = l11.length; c10 > n13; ) {
            let s13 = true, u10 = false;
            if (!d10 || c10 > l11[d10 - 1].to) {
              let t56 = fs[c10 - 1];
              t56 != a10 && (s13 = false, u10 = 16 == t56);
            }
            let f10 = s13 || 1 != a10 ? null : [], g10 = s13 ? o11 : o11 + 1, p10 = c10;
            e: for (; ; ) if (d10 && p10 == l11[d10 - 1].to) {
              if (u10) break;
              let e14 = l11[--d10];
              if (!s13) for (let t56 = e14.from, i14 = d10; ; ) {
                if (t56 == n13) break e;
                if (i14 && l11[i14 - 1].to == t56) t56 = l11[--i14].from;
                else if (fs[t56 - 1] == a10) break e;
                else break;
              }
              f10 ? f10.push(e14) : (e14.to < c10 && h11.push(new fn(e14.to, c10, g10)), t55(i13, e14.direction == u3 != !(g10 % 2) ? o11 + 1 : o11, r11, e14.inner, e14.from, e14.to, h11), c10 = e14.from), p10 = e14.from;
            } else if (p10 == n13 || (s13 ? fs[p10 - 1] != a10 : fs[p10 - 1] == a10)) break;
            else p10--;
            f10 ? e13(i13, p10, c10, o11 + 1, r11, f10, h11) : p10 < c10 && h11.push(new fn(p10, c10, g10)), c10 = p10;
          }
        }(e12, o10, r10, i12, n12, s11, l10);
      }(t54, s10, s10, i11, 0, t54.length, n11), n11;
    }(t53.text, e10, i10);
    return this.bidiCache.push(new g0(t53.from, t53.to, e10, i10, true, n10)), n10;
  }
  get hasFocus() {
    var t53;
    return (this.dom.ownerDocument.hasFocus() || uL.safari && (null === (t53 = this.inputState) || void 0 === t53 ? void 0 : t53.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      uh(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t53) {
    this._root != t53 && (this._root = t53, this.observer.setWindow((9 == t53.nodeType ? t53 : t53.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    for (let t53 of this.plugins) t53.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(t53) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return fw.of(new fv("number" == typeof t53 ? $.cursor(t53) : t53, e10.y, e10.x, e10.yMargin, e10.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t53, scrollLeft: e10 } = this.scrollDOM, i10 = this.viewState.scrollAnchorAt(t53);
    return fw.of(new fv($.cursor(i10.from), "start", "start", i10.top - t53, e10, true));
  }
  setTabFocusMode(t53) {
    null == t53 ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof t53 ? this.inputState.tabFocusMode = t53 ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + t53);
  }
  static domEventHandlers(t53) {
    return fk.define(() => ({}), { eventHandlers: t53 });
  }
  static domEventObservers(t53) {
    return fk.define(() => ({}), { eventObservers: t53 });
  }
  static theme(t53, e10) {
    let i10 = t0.newName(), n10 = [gP.of(i10), fP.of(gW(`.${i10}`, t53))];
    return e10 && e10.dark && n10.push(gN.of(true)), n10;
  }
  static baseTheme(t53) {
    return tr.lowest(fP.of(gW("." + gH, t53, gF)));
  }
  static findFromDOM(t53) {
    var e10;
    let i10 = t53.querySelector(".cm-content"), n10 = i10 && uv.get(i10) || uv.get(t53);
    return (null === (e10 = null == n10 ? void 0 : n10.rootView) || void 0 === e10 ? void 0 : e10.view) || null;
  }
}
gJ.styleModule = fP, gJ.inputHandler = fu, gJ.scrollHandler = fm, gJ.focusChangeEffect = ff, gJ.perLineTextDirection = fg, gJ.exceptionSink = fc, gJ.updateListener = fd, gJ.editable = fy, gJ.mouseSelectionStyle = fa, gJ.dragMovesSelection = fh, gJ.clickAddsSelectionRange = fl, gJ.decorations = fD, gJ.outerDecorations = fO, gJ.atomicRanges = fT, gJ.bidiIsolatedRanges = fE, gJ.scrollMargins = fR, gJ.darkTheme = gN, gJ.cspNonce = J.define({ combine: (t53) => t53.length ? t53[0] : "" }), gJ.contentAttributes = fC, gJ.editorAttributes = fA, gJ.lineWrapping = gJ.contentAttributes.of({ class: "cm-lineWrapping" }), gJ.announce = tk.define();
let gQ = 4096, gZ = {};
class g0 {
  constructor(t53, e10, i10, n10, s10, o10) {
    this.from = t53, this.to = e10, this.dir = i10, this.isolates = n10, this.fresh = s10, this.order = o10;
  }
  static update(t53, e10) {
    if (e10.empty && !t53.some((t54) => t54.fresh)) return t53;
    let i10 = [], n10 = t53.length ? t53[t53.length - 1].dir : u8.LTR;
    for (let s10 = Math.max(0, t53.length - 10); s10 < t53.length; s10++) {
      let o10 = t53[s10];
      o10.dir != n10 || e10.touchesRange(o10.from, o10.to) || i10.push(new g0(e10.mapPos(o10.from, 1), e10.mapPos(o10.to, -1), o10.dir, o10.isolates, false, o10.order));
    }
    return i10;
  }
}
function g1(t53, e10, i10) {
  for (let n10 = t53.state.facet(e10), s10 = n10.length - 1; s10 >= 0; s10--) {
    let e11 = n10[s10], o10 = "function" == typeof e11 ? e11(t53) : e11;
    o10 && uW(o10, i10);
  }
  return i10;
}
let g2 = !uL.ios, g8 = { ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" } }, ".cm-content": { "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } };
g2 && (g8[".cm-line"].caretColor = g8[".cm-content"].caretColor = "transparent !important");
class g3 extends tL {
  compare(t53) {
    return this == t53 || this.constructor == t53.constructor && this.eq(t53);
  }
  eq(t53) {
    return false;
  }
  destroy(t53) {
  }
}
function g4(t53, e10) {
  return (i10) => {
    let { state: n10, dispatch: s10 } = i10;
    if (n10.readOnly) return false;
    let o10 = t53(e10, n10);
    return !!o10 && (s10(n10.update(o10)), true);
  };
}
g3.prototype.elementClass = "", g3.prototype.toDOM = void 0, g3.prototype.mapMode = I.TrackBefore, g3.prototype.startSide = g3.prototype.endSide = -1, g3.prototype.point = true;
let g5 = g4(function(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10.selection.ranges, n10 = [], s10 = -1;
  for (let { from: t54, to: o10 } of i10) {
    let i11 = n10.length, r10 = 1e9, l10 = g7(e10, t54).line;
    if (l10) {
      for (let i12 = t54; i12 <= o10; ) {
        let h10 = e10.doc.lineAt(i12);
        if (h10.from > s10 && (t54 == o10 || o10 > h10.from)) {
          s10 = h10.from;
          let t55 = /^\s*/.exec(h10.text)[0].length, e11 = t55 == h10.length, i13 = h10.text.slice(t55, t55 + l10.length) == l10 ? t55 : -1;
          t55 < h10.text.length && t55 < r10 && (r10 = t55), n10.push({ line: h10, comment: i13, token: l10, indent: t55, empty: e11, single: false });
        }
        i12 = h10.to + 1;
      }
      if (r10 < 1e9) for (let t55 = i11; t55 < n10.length; t55++) n10[t55].indent < n10[t55].line.text.length && (n10[t55].indent = r10);
      n10.length == i11 + 1 && (n10[i11].single = true);
    }
  }
  if (2 != t53 && n10.some((t54) => t54.comment < 0 && (!t54.empty || t54.single))) {
    let t54 = [];
    for (let { line: e11, token: i12, indent: s11, empty: o10, single: r10 } of n10) (r10 || !o10) && t54.push({ from: e11.from + s11, insert: i12 + " " });
    let i11 = e10.changes(t54);
    return { changes: i11, selection: e10.selection.map(i11, 1) };
  }
  if (1 != t53 && n10.some((t54) => t54.comment >= 0)) {
    let t54 = [];
    for (let { line: e11, comment: i11, token: s11 } of n10) if (i11 >= 0) {
      let n11 = e11.from + i11, o10 = n11 + s11.length;
      " " == e11.text[o10 - e11.from] && o10++, t54.push({ from: n11, to: o10 });
    }
    return { changes: t54 };
  }
  return null;
}, 0), g9 = g4(pt, 0), g6 = g4((t53, e10) => pt(t53, e10, function(t54) {
  let e11 = [];
  for (let i10 of t54.selection.ranges) {
    let n10 = t54.doc.lineAt(i10.from), s10 = i10.to <= n10.to ? n10 : t54.doc.lineAt(i10.to), o10 = e11.length - 1;
    o10 >= 0 && e11[o10].to > n10.from ? e11[o10].to = s10.to : e11.push({ from: n10.from + /^\s*/.exec(n10.text)[0].length, to: s10.to });
  }
  return e11;
}(e10)), 0);
function g7(t53, e10) {
  let i10 = t53.languageDataAt("commentTokens", e10);
  return i10.length ? i10[0] : {};
}
function pt(t53, e10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e10.selection.ranges, n10 = i10.map((t54) => g7(e10, t54.from).block);
  if (!n10.every((t54) => t54)) return null;
  let s10 = i10.map((t54, i11) => function(t55, e11, i12, n11) {
    let s11, o10, { open: r10, close: l10 } = e11, h10 = t55.sliceDoc(i12 - 50, i12), a10 = t55.sliceDoc(n11, n11 + 50), c10 = /\s*$/.exec(h10)[0].length, d10 = /^\s*/.exec(a10)[0].length, u10 = h10.length - c10;
    if (h10.slice(u10 - r10.length, u10) == r10 && a10.slice(d10, d10 + l10.length) == l10) return { open: { pos: i12 - c10, margin: c10 && 1 }, close: { pos: n11 + d10, margin: d10 && 1 } };
    n11 - i12 <= 100 ? s11 = o10 = t55.sliceDoc(i12, n11) : (s11 = t55.sliceDoc(i12, i12 + 50), o10 = t55.sliceDoc(n11 - 50, n11));
    let f10 = /^\s*/.exec(s11)[0].length, g10 = /\s*$/.exec(o10)[0].length, p10 = o10.length - g10 - l10.length;
    return s11.slice(f10, f10 + r10.length) == r10 && o10.slice(p10, p10 + l10.length) == l10 ? { open: { pos: i12 + f10 + r10.length, margin: /\s/.test(s11.charAt(f10 + r10.length)) ? 1 : 0 }, close: { pos: n11 - g10 - l10.length, margin: /\s/.test(o10.charAt(p10 - 1)) ? 1 : 0 } } : null;
  }(e10, n10[i11], t54.from, t54.to));
  if (2 != t53 && !s10.every((t54) => t54)) return { changes: e10.changes(i10.map((t54, e11) => s10[e11] ? [] : [{ from: t54.from, insert: n10[e11].open + " " }, { from: t54.to, insert: " " + n10[e11].close }])) };
  if (1 != t53 && s10.some((t54) => t54)) {
    let t54 = [];
    for (let e11 = 0, i11; e11 < s10.length; e11++) if (i11 = s10[e11]) {
      let s11 = n10[e11], { open: o10, close: r10 } = i11;
      t54.push({ from: o10.pos - s11.open.length, to: o10.pos + o10.margin }, { from: r10.pos - r10.margin, to: r10.pos + s11.close.length });
    }
    return { changes: t54 };
  }
  return null;
}
let pe = ty.define(), pi = ty.define(), pn = J.define(), ps = J.define({ combine: (t53) => tR(t53, { minDepth: 100, newGroupDelay: 500, joinToEvent: (t54, e10) => e10 }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (t54, e10) => (i10, n10) => t54(i10, n10) || e10(i10, n10) }) }), po = tn.define({ create: () => pb.empty, update(t53, e10) {
  let i10 = e10.state.facet(ps), n10 = e10.annotation(pe);
  if (n10) {
    let s11 = pu.fromTransaction(e10, n10.selection), o11 = n10.side, r11 = 0 == o11 ? t53.undone : t53.done;
    return r11 = s11 ? pf(r11, r11.length, i10.minDepth, s11) : pm(r11, e10.startState.selection), new pb(0 == o11 ? n10.rest : r11, 0 == o11 ? r11 : n10.rest);
  }
  let s10 = e10.annotation(pi);
  if (("full" == s10 || "before" == s10) && (t53 = t53.isolate()), false === e10.annotation(tM.addToHistory)) return e10.changes.empty ? t53 : t53.addMapping(e10.changes.desc);
  let o10 = pu.fromTransaction(e10), r10 = e10.annotation(tM.time), l10 = e10.annotation(tM.userEvent);
  return o10 ? t53 = t53.addChanges(o10, r10, l10, i10, e10) : e10.selection && (t53 = t53.addSelection(e10.startState.selection, r10, l10, i10.newGroupDelay)), ("full" == s10 || "after" == s10) && (t53 = t53.isolate()), t53;
}, toJSON: (t53) => ({ done: t53.done.map((t54) => t54.toJSON()), undone: t53.undone.map((t54) => t54.toJSON()) }), fromJSON: (t53) => new pb(t53.done.map(pu.fromJSON), t53.undone.map(pu.fromJSON)) });
function pr() {
  let t53 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return [po, ps.of(t53), gJ.domEventHandlers({ beforeinput(t54, e10) {
    let i10 = "historyUndo" == t54.inputType ? ph : "historyRedo" == t54.inputType ? pa : null;
    return !!i10 && (t54.preventDefault(), i10(e10));
  } })];
}
function pl(t53, e10) {
  return function(i10) {
    let { state: n10, dispatch: s10 } = i10;
    if (!e10 && n10.readOnly) return false;
    let o10 = n10.field(po, false);
    if (!o10) return false;
    let r10 = o10.pop(t53, n10, e10);
    return !!r10 && (s10(r10), true);
  };
}
let ph = pl(0, false), pa = pl(1, false), pc = pl(0, true), pd = pl(1, true);
class pu {
  constructor(t53, e10, i10, n10, s10) {
    this.changes = t53, this.effects = e10, this.mapped = i10, this.startSelection = n10, this.selectionsAfter = s10;
  }
  setSelAfter(t53) {
    return new pu(this.changes, this.effects, this.mapped, this.startSelection, t53);
  }
  toJSON() {
    var t53, e10, i10;
    return { changes: null === (t53 = this.changes) || void 0 === t53 ? void 0 : t53.toJSON(), mapped: null === (e10 = this.mapped) || void 0 === e10 ? void 0 : e10.toJSON(), startSelection: null === (i10 = this.startSelection) || void 0 === i10 ? void 0 : i10.toJSON(), selectionsAfter: this.selectionsAfter.map((t54) => t54.toJSON()) };
  }
  static fromJSON(t53) {
    return new pu(t53.changes && W.fromJSON(t53.changes), [], t53.mapped && F.fromJSON(t53.mapped), t53.startSelection && $.fromJSON(t53.startSelection), t53.selectionsAfter.map($.fromJSON));
  }
  static fromTransaction(t53, e10) {
    let i10 = pp;
    for (let e11 of t53.startState.facet(pn)) {
      let n10 = e11(t53);
      n10.length && (i10 = i10.concat(n10));
    }
    return !i10.length && t53.changes.empty ? null : new pu(t53.changes.invert(t53.startState.doc), i10, void 0, e10 || t53.startState.selection, pp);
  }
  static selection(t53) {
    return new pu(void 0, pp, void 0, void 0, t53);
  }
}
function pf(t53, e10, i10, n10) {
  let s10 = t53.slice(e10 + 1 > i10 + 20 ? e10 - i10 - 1 : 0, e10);
  return s10.push(n10), s10;
}
function pg(t53, e10) {
  return t53.length ? e10.length ? t53.concat(e10) : t53 : e10;
}
let pp = [];
function pm(t53, e10) {
  if (!t53.length) return [pu.selection([e10])];
  {
    let i10 = t53[t53.length - 1], n10 = i10.selectionsAfter.slice(Math.max(0, i10.selectionsAfter.length - 200));
    return n10.length && n10[n10.length - 1].eq(e10) ? t53 : (n10.push(e10), pf(t53, t53.length - 1, 1e9, i10.setSelAfter(n10)));
  }
}
function pv(t53, e10) {
  if (!t53.length) return t53;
  let i10 = t53.length, n10 = pp;
  for (; i10; ) {
    let s10 = function(t54, e11, i11) {
      let n11 = pg(t54.selectionsAfter.length ? t54.selectionsAfter.map((t55) => t55.map(e11)) : pp, i11);
      if (!t54.changes) return pu.selection(n11);
      let s11 = t54.changes.map(e11), o10 = e11.mapDesc(t54.changes, true), r10 = t54.mapped ? t54.mapped.composeDesc(o10) : o10;
      return new pu(s11, tk.mapEffects(t54.effects, e11), r10, t54.startSelection.map(o10), n11);
    }(t53[i10 - 1], e10, n10);
    if (s10.changes && !s10.changes.empty || s10.effects.length) {
      let e11 = t53.slice(0, i10);
      return e11[i10 - 1] = s10, e11;
    }
    e10 = s10.mapped, i10--, n10 = s10.selectionsAfter;
  }
  return n10.length ? [pu.selection(n10)] : pp;
}
let pw = /^(input\.type|delete)($|\.)/;
class pb {
  constructor(t53, e10, i10 = 0, n10) {
    this.done = t53, this.undone = e10, this.prevTime = i10, this.prevUserEvent = n10;
  }
  isolate() {
    return this.prevTime ? new pb(this.done, this.undone) : this;
  }
  addChanges(t53, e10, i10, n10, s10) {
    var o10, r10;
    let l10, h10, a10 = this.done, c10 = a10[a10.length - 1];
    return new pb(a10 = c10 && c10.changes && !c10.changes.empty && t53.changes && (!i10 || pw.test(i10)) && (!c10.selectionsAfter.length && e10 - this.prevTime < n10.newGroupDelay && n10.joinToEvent(s10, (o10 = c10.changes, r10 = t53.changes, l10 = [], h10 = false, o10.iterChangedRanges((t54, e11) => l10.push(t54, e11)), r10.iterChangedRanges((t54, e11, i11, n11) => {
      for (let t55 = 0; t55 < l10.length; ) {
        let e12 = l10[t55++], s11 = l10[t55++];
        n11 >= e12 && i11 <= s11 && (h10 = true);
      }
    }), h10)) || "input.type.compose" == i10) ? pf(a10, a10.length - 1, n10.minDepth, new pu(t53.changes.compose(c10.changes), pg(t53.effects, c10.effects), c10.mapped, c10.startSelection, pp)) : pf(a10, a10.length, n10.minDepth, t53), pp, e10, i10);
  }
  addSelection(t53, e10, i10, n10) {
    var s10;
    let o10 = this.done.length ? this.done[this.done.length - 1].selectionsAfter : pp;
    return o10.length > 0 && e10 - this.prevTime < n10 && i10 == this.prevUserEvent && i10 && /^select($|\.)/.test(i10) && (s10 = o10[o10.length - 1]).ranges.length == t53.ranges.length && 0 === s10.ranges.filter((e11, i11) => e11.empty != t53.ranges[i11].empty).length ? this : new pb(pm(this.done, t53), this.undone, e10, i10);
  }
  addMapping(t53) {
    return new pb(pv(this.done, t53), pv(this.undone, t53), this.prevTime, this.prevUserEvent);
  }
  pop(t53, e10, i10) {
    let n10 = 0 == t53 ? this.done : this.undone;
    if (0 == n10.length) return null;
    let s10 = n10[n10.length - 1], o10 = s10.selectionsAfter[0] || e10.selection;
    if (i10 && s10.selectionsAfter.length) {
      let i11, r10;
      return e10.update({ selection: s10.selectionsAfter[s10.selectionsAfter.length - 1], annotations: pe.of({ side: t53, rest: (i11 = n10[n10.length - 1], (r10 = n10.slice())[n10.length - 1] = i11.setSelAfter(i11.selectionsAfter.slice(0, i11.selectionsAfter.length - 1)), r10), selection: o10 }), userEvent: 0 == t53 ? "select.undo" : "select.redo", scrollIntoView: true });
    }
    if (!s10.changes) return null;
    {
      let i11 = 1 == n10.length ? pp : n10.slice(0, n10.length - 1);
      return s10.mapped && (i11 = pv(i11, s10.mapped)), e10.update({ changes: s10.changes, selection: s10.startSelection, effects: s10.effects, annotations: pe.of({ side: t53, rest: i11, selection: o10 }), filter: false, userEvent: 0 == t53 ? "undo" : "redo", scrollIntoView: true });
    }
  }
}
pb.empty = new pb(pp, pp);
let py = [{ key: "Mod-z", run: ph, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: pa, preventDefault: true }, { linux: "Ctrl-Shift-z", run: pa, preventDefault: true }, { key: "Mod-u", run: pc, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: pd, preventDefault: true }];
function px(t53, e10) {
  return $.create(t53.ranges.map(e10), t53.mainIndex);
}
function pS(t53, e10) {
  return t53.update({ selection: e10, scrollIntoView: true, userEvent: "select" });
}
function pk(t53, e10) {
  let { state: i10, dispatch: n10 } = t53, s10 = px(i10.selection, e10);
  return !s10.eq(i10.selection, true) && (n10(pS(i10, s10)), true);
}
function pM(t53, e10) {
  return $.cursor(e10 ? t53.to : t53.from);
}
function pA(t53, e10) {
  return pk(t53, (i10) => i10.empty ? t53.moveByChar(i10, e10) : pM(i10, e10));
}
function pC(t53) {
  return t53.textDirectionAt(t53.state.selection.main.head) == u8.LTR;
}
let pD = (t53) => pA(t53, !pC(t53)), pO = (t53) => pA(t53, pC(t53));
function pT(t53, e10) {
  return pk(t53, (i10) => i10.empty ? t53.moveByGroup(i10, e10) : pM(i10, e10));
}
function pE(t53, e10, i10) {
  let n10, s10, o10 = aj(t53).resolveInner(e10.head), r10 = i10 ? oW.closedBy : oW.openedBy;
  for (let n11 = e10.head; ; ) {
    let e11 = i10 ? o10.childAfter(n11) : o10.childBefore(n11);
    if (!e11) break;
    !function(t54, e12, i11) {
      if (e12.type.prop(i11)) return true;
      let n12 = e12.to - e12.from;
      return n12 && (n12 > 2 || /[^\s,.;:]/.test(t54.sliceDoc(e12.from, e12.to))) || e12.firstChild;
    }(t53, e11, r10) ? n11 = i10 ? e11.to : e11.from : o10 = e11;
  }
  return s10 = o10.type.prop(r10) && (n10 = i10 ? cK(t53, o10.from, 1) : cK(t53, o10.to, -1)) && n10.matched ? i10 ? n10.end.to : n10.end.from : i10 ? o10.to : o10.from, $.cursor(s10, i10 ? -1 : 1);
}
function pB(t53, e10) {
  return pk(t53, (i10) => {
    if (!i10.empty) return pM(i10, e10);
    let n10 = t53.moveVertically(i10, e10);
    return n10.head != i10.head ? n10 : t53.moveToLineBoundary(i10, e10);
  });
}
let pR = (t53) => pB(t53, false), pL = (t53) => pB(t53, true);
function pP(t53) {
  let e10 = t53.scrollDOM.clientHeight < t53.scrollDOM.scrollHeight - 2, i10 = 0, n10 = 0, s10;
  if (e10) {
    for (let e11 of t53.state.facet(gJ.scrollMargins)) {
      let s11 = e11(t53);
      (null == s11 ? void 0 : s11.top) && (i10 = Math.max(null == s11 ? void 0 : s11.top, i10)), (null == s11 ? void 0 : s11.bottom) && (n10 = Math.max(null == s11 ? void 0 : s11.bottom, n10));
    }
    s10 = t53.scrollDOM.clientHeight - i10 - n10;
  } else s10 = (t53.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: i10, marginBottom: n10, selfScroll: e10, height: Math.max(t53.defaultLineHeight, s10 - 5) };
}
function pN(t53, e10) {
  let i10, n10 = pP(t53), { state: s10 } = t53, o10 = px(s10.selection, (i11) => i11.empty ? t53.moveVertically(i11, e10, n10.height) : pM(i11, e10));
  if (o10.eq(s10.selection)) return false;
  if (n10.selfScroll) {
    let e11 = t53.coordsAtPos(s10.selection.main.head), r10 = t53.scrollDOM.getBoundingClientRect(), l10 = r10.top + n10.marginTop, h10 = r10.bottom - n10.marginBottom;
    e11 && e11.top > l10 && e11.bottom < h10 && (i10 = gJ.scrollIntoView(o10.main.head, { y: "start", yMargin: e11.top - l10 }));
  }
  return t53.dispatch(pS(s10, o10), { effects: i10 }), true;
}
let pH = (t53) => pN(t53, false), pV = (t53) => pN(t53, true);
function pI(t53, e10, i10) {
  let n10 = t53.lineBlockAt(e10.head), s10 = t53.moveToLineBoundary(e10, i10);
  if (s10.head == e10.head && s10.head != (i10 ? n10.to : n10.from) && (s10 = t53.moveToLineBoundary(e10, i10, false)), !i10 && s10.head == n10.from && n10.length) {
    let i11 = /^\s*/.exec(t53.state.sliceDoc(n10.from, Math.min(n10.from + 100, n10.to)))[0].length;
    i11 && e10.head != n10.from + i11 && (s10 = $.cursor(n10.from + i11));
  }
  return s10;
}
function pF(t53, e10) {
  let i10 = px(t53.state.selection, (t54) => {
    let i11 = e10(t54);
    return $.range(t54.anchor, i11.head, i11.goalColumn, i11.bidiLevel || void 0);
  });
  return !i10.eq(t53.state.selection) && (t53.dispatch(pS(t53.state, i10)), true);
}
function pW(t53, e10) {
  return pF(t53, (i10) => t53.moveByChar(i10, e10));
}
let pz = (t53) => pW(t53, !pC(t53)), pK = (t53) => pW(t53, pC(t53));
function pq(t53, e10) {
  return pF(t53, (i10) => t53.moveByGroup(i10, e10));
}
function p_(t53, e10) {
  return pF(t53, (i10) => t53.moveVertically(i10, e10));
}
let pj = (t53) => p_(t53, false), pG = (t53) => p_(t53, true);
function pU(t53, e10) {
  return pF(t53, (i10) => t53.moveVertically(i10, e10, pP(t53).height));
}
let p$ = (t53) => pU(t53, false), pY = (t53) => pU(t53, true), pX = (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return i10(pS(e10, { anchor: 0 })), true;
}, pJ = (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return i10(pS(e10, { anchor: e10.doc.length })), true;
}, pQ = (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return i10(pS(e10, { anchor: e10.selection.main.anchor, head: 0 })), true;
}, pZ = (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return i10(pS(e10, { anchor: e10.selection.main.anchor, head: e10.doc.length })), true;
};
function p0(t53, e10) {
  if (t53.state.readOnly) return false;
  let i10 = "delete.selection", { state: n10 } = t53, s10 = n10.changeByRange((n11) => {
    let { from: s11, to: o10 } = n11;
    if (s11 == o10) {
      let r10 = e10(n11);
      r10 < s11 ? (i10 = "delete.backward", r10 = p1(t53, r10, false)) : r10 > s11 && (i10 = "delete.forward", r10 = p1(t53, r10, true)), s11 = Math.min(s11, r10), o10 = Math.max(o10, r10);
    } else s11 = p1(t53, s11, false), o10 = p1(t53, o10, true);
    return s11 == o10 ? { range: n11 } : { changes: { from: s11, to: o10 }, range: $.cursor(s11, s11 < n11.head ? -1 : 1) };
  });
  return !s10.changes.empty && (t53.dispatch(n10.update(s10, { scrollIntoView: true, userEvent: i10, effects: "delete.selection" == i10 ? gJ.announce.of(n10.phrase("Selection deleted")) : void 0 })), true);
}
function p1(t53, e10, i10) {
  if (t53 instanceof gJ) for (let n10 of t53.state.facet(gJ.atomicRanges).map((e11) => e11(t53))) n10.between(e10, e10, (t54, n11) => {
    t54 < e10 && n11 > e10 && (e10 = i10 ? n11 : t54);
  });
  return e10;
}
let p2 = (t53, e10, i10) => p0(t53, (n10) => {
  let s10 = n10.from, { state: o10 } = t53, r10 = o10.doc.lineAt(s10), l10, h10;
  if (i10 && !e10 && s10 > r10.from && s10 < r10.from + 200 && !/[^ \t]/.test(l10 = r10.text.slice(0, s10 - r10.from))) {
    if ("	" == l10[l10.length - 1]) return s10 - 1;
    let t54 = tY(l10, o10.tabSize) % a3(o10) || a3(o10);
    for (let e11 = 0; e11 < t54 && " " == l10[l10.length - 1 - e11]; e11++) s10--;
    h10 = s10;
  } else (h10 = p(r10.text, s10 - r10.from, e10, e10) + r10.from) == s10 && r10.number != (e10 ? o10.doc.lines : 1) ? h10 += e10 ? 1 : -1 : !e10 && /[\ufe00-\ufe0f]/.test(r10.text.slice(h10 - r10.from, s10 - r10.from)) && (h10 = p(r10.text, h10 - r10.from, false, false) + r10.from);
  return h10;
}), p8 = (t53) => p2(t53, false, true), p3 = (t53) => p2(t53, true, false), p4 = (t53, e10) => p0(t53, (i10) => {
  let n10 = i10.head, { state: s10 } = t53, o10 = s10.doc.lineAt(n10), r10 = s10.charCategorizer(n10);
  for (let t54 = null; ; ) {
    if (n10 == (e10 ? o10.to : o10.from)) {
      n10 == i10.head && o10.number != (e10 ? s10.doc.lines : 1) && (n10 += e10 ? 1 : -1);
      break;
    }
    let l10 = p(o10.text, n10 - o10.from, e10) + o10.from, h10 = o10.text.slice(Math.min(n10, l10) - o10.from, Math.max(n10, l10) - o10.from), a10 = r10(h10);
    if (null != t54 && a10 != t54) break;
    (" " != h10 || n10 != i10.head) && (t54 = a10), n10 = l10;
  }
  return n10;
}), p5 = (t53) => p4(t53, false);
function p9(t53) {
  let e10 = [], i10 = -1;
  for (let n10 of t53.selection.ranges) {
    let s10 = t53.doc.lineAt(n10.from), o10 = t53.doc.lineAt(n10.to);
    if (n10.empty || n10.to != o10.from || (o10 = t53.doc.lineAt(n10.to - 1)), i10 >= s10.number) {
      let t54 = e10[e10.length - 1];
      t54.to = o10.to, t54.ranges.push(n10);
    } else e10.push({ from: s10.from, to: o10.to, ranges: [n10] });
    i10 = o10.number + 1;
  }
  return e10;
}
function p6(t53, e10, i10) {
  if (t53.readOnly) return false;
  let n10 = [], s10 = [];
  for (let e11 of p9(t53)) {
    if (i10 ? e11.to == t53.doc.length : 0 == e11.from) continue;
    let o10 = t53.doc.lineAt(i10 ? e11.to + 1 : e11.from - 1), r10 = o10.length + 1;
    if (i10) for (let i11 of (n10.push({ from: e11.to, to: o10.to }, { from: e11.from, insert: o10.text + t53.lineBreak }), e11.ranges)) s10.push($.range(Math.min(t53.doc.length, i11.anchor + r10), Math.min(t53.doc.length, i11.head + r10)));
    else for (let i11 of (n10.push({ from: o10.from, to: e11.from }, { from: e11.to, insert: t53.lineBreak + o10.text }), e11.ranges)) s10.push($.range(i11.anchor - r10, i11.head - r10));
  }
  return !!n10.length && (e10(t53.update({ changes: n10, scrollIntoView: true, selection: $.create(s10, t53.selection.mainIndex), userEvent: "move.line" })), true);
}
function p7(t53, e10, i10) {
  if (t53.readOnly) return false;
  let n10 = [];
  for (let e11 of p9(t53)) i10 ? n10.push({ from: e11.from, insert: t53.doc.slice(e11.from, e11.to) + t53.lineBreak }) : n10.push({ from: e11.to, insert: t53.lineBreak + t53.doc.slice(e11.from, e11.to) });
  return e10(t53.update({ changes: n10, scrollIntoView: true, userEvent: "input.copyline" })), true;
}
let mt = mi(false), me = mi(true);
function mi(t53) {
  return (e10) => {
    let { state: i10, dispatch: n10 } = e10;
    if (i10.readOnly) return false;
    let o10 = i10.changeByRange((e11) => {
      let { from: n11, to: o11 } = e11, r10 = i10.doc.lineAt(n11), l10 = !t53 && n11 == o11 && function(t54, e12) {
        if (/\(\)|\[\]|\{\}/.test(t54.sliceDoc(e12 - 1, e12 + 1))) return { from: e12, to: e12 };
        let i11 = aj(t54).resolveInner(e12), n12 = i11.childBefore(e12), s10 = i11.childAfter(e12), o12;
        return n12 && s10 && n12.to <= e12 && s10.from >= e12 && (o12 = n12.type.prop(oW.closedBy)) && o12.indexOf(s10.name) > -1 && t54.doc.lineAt(n12.to).from == t54.doc.lineAt(s10.from).from && !/\S/.test(t54.sliceDoc(n12.to, s10.from)) ? { from: n12.to, to: s10.from } : null;
      }(i10, n11);
      t53 && (n11 = o11 = (o11 <= r10.to ? r10 : i10.doc.lineAt(o11)).to);
      let h10 = new a9(i10, { simulateBreak: n11, simulateDoubleBreak: !!l10 }), a10 = a5(h10, n11);
      for (null == a10 && (a10 = tY(/^\s*/.exec(i10.doc.lineAt(n11).text)[0], i10.tabSize)); o11 < r10.to && /\s/.test(r10.text[o11 - r10.from]); ) o11++;
      l10 ? { from: n11, to: o11 } = l10 : n11 > r10.from && n11 < r10.from + 100 && !/\S/.test(r10.text.slice(0, n11)) && (n11 = r10.from);
      let c10 = ["", a4(i10, a10)];
      return l10 && c10.push(a4(i10, h10.lineIndent(r10.from, -1))), { changes: { from: n11, to: o11, insert: s.of(c10) }, range: $.cursor(n11 + 1 + c10[1].length) };
    });
    return n10(i10.update(o10, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function mn(t53, e10) {
  let i10 = -1;
  return t53.changeByRange((n10) => {
    let s10 = [];
    for (let o11 = n10.from; o11 <= n10.to; ) {
      let r10 = t53.doc.lineAt(o11);
      r10.number > i10 && (n10.empty || n10.to > r10.from) && (e10(r10, s10, n10), i10 = r10.number), o11 = r10.to + 1;
    }
    let o10 = t53.changes(s10);
    return { changes: s10, range: $.range(o10.mapPos(n10.anchor, 1), o10.mapPos(n10.head, 1)) };
  });
}
let ms = (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return !e10.readOnly && (i10(e10.update(mn(e10, (t54, i11) => {
    i11.push({ from: t54.from, insert: e10.facet(a8) });
  }), { userEvent: "input.indent" })), true);
}, mo = (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return !e10.readOnly && (i10(e10.update(mn(e10, (t54, i11) => {
    let n10 = /^\s*/.exec(t54.text)[0];
    if (!n10) return;
    let s10 = tY(n10, e10.tabSize), o10 = 0, r10 = a4(e10, Math.max(0, s10 - a3(e10)));
    for (; o10 < n10.length && o10 < r10.length && n10.charCodeAt(o10) == r10.charCodeAt(o10); ) o10++;
    i11.push({ from: t54.from + o10, to: t54.from + n10.length, insert: r10.slice(o10) });
  }), { userEvent: "delete.dedent" })), true);
}, mr = [{ key: "Ctrl-b", run: pD, shift: pz, preventDefault: true }, { key: "Ctrl-f", run: pO, shift: pK }, { key: "Ctrl-p", run: pR, shift: pj }, { key: "Ctrl-n", run: pL, shift: pG }, { key: "Ctrl-a", run: (t53) => pk(t53, (e10) => $.cursor(t53.lineBlockAt(e10.head).from, 1)), shift: (t53) => pF(t53, (e10) => $.cursor(t53.lineBlockAt(e10.head).from)) }, { key: "Ctrl-e", run: (t53) => pk(t53, (e10) => $.cursor(t53.lineBlockAt(e10.head).to, -1)), shift: (t53) => pF(t53, (e10) => $.cursor(t53.lineBlockAt(e10.head).to)) }, { key: "Ctrl-d", run: p3 }, { key: "Ctrl-h", run: p8 }, { key: "Ctrl-k", run: (t53) => p0(t53, (e10) => {
  let i10 = t53.lineBlockAt(e10.head).to;
  return e10.head < i10 ? i10 : Math.min(t53.state.doc.length, e10.head + 1);
}) }, { key: "Ctrl-Alt-h", run: p5 }, { key: "Ctrl-o", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  if (e10.readOnly) return false;
  let n10 = e10.changeByRange((t54) => ({ changes: { from: t54.from, to: t54.to, insert: s.of(["", ""]) }, range: $.cursor(t54.from) }));
  return i10(e10.update(n10, { scrollIntoView: true, userEvent: "input" })), true;
} }, { key: "Ctrl-t", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  if (e10.readOnly) return false;
  let n10 = e10.changeByRange((t54) => {
    if (!t54.empty || 0 == t54.from || t54.from == e10.doc.length) return { range: t54 };
    let i11 = t54.from, n11 = e10.doc.lineAt(i11), s10 = i11 == n11.from ? i11 - 1 : p(n11.text, i11 - n11.from, false) + n11.from, o10 = i11 == n11.to ? i11 + 1 : p(n11.text, i11 - n11.from, true) + n11.from;
    return { changes: { from: s10, to: o10, insert: e10.doc.slice(i11, o10).append(e10.doc.slice(s10, i11)) }, range: $.cursor(o10) };
  });
  return !n10.changes.empty && (i10(e10.update(n10, { scrollIntoView: true, userEvent: "move.character" })), true);
} }, { key: "Ctrl-v", run: pV }], ml = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: (t53) => pk(t53, (e10) => pE(t53.state, e10, !pC(t53))), shift: (t53) => pF(t53, (e10) => pE(t53.state, e10, !pC(t53))) }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: (t53) => pk(t53, (e10) => pE(t53.state, e10, pC(t53))), shift: (t53) => pF(t53, (e10) => pE(t53.state, e10, pC(t53))) }, { key: "Alt-ArrowUp", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return p6(e10, i10, false);
} }, { key: "Shift-Alt-ArrowUp", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return p7(e10, i10, false);
} }, { key: "Alt-ArrowDown", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return p6(e10, i10, true);
} }, { key: "Shift-Alt-ArrowDown", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return p7(e10, i10, true);
} }, { key: "Escape", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53, n10 = e10.selection, s10 = null;
  return n10.ranges.length > 1 ? s10 = $.create([n10.main]) : n10.main.empty || (s10 = $.create([$.cursor(n10.main.head)])), !!s10 && (i10(pS(e10, s10)), true);
} }, { key: "Mod-Enter", run: me }, { key: "Alt-l", mac: "Ctrl-l", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53, n10 = p9(e10).map((t54) => {
    let { from: i11, to: n11 } = t54;
    return $.range(i11, Math.min(n11 + 1, e10.doc.length));
  });
  return i10(e10.update({ selection: $.create(n10), userEvent: "select" })), true;
} }, { key: "Mod-i", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53, n10 = px(e10.selection, (t54) => {
    var i11;
    let n11 = aj(e10).resolveStack(t54.from, 1);
    for (let e11 = n11; e11; e11 = e11.next) {
      let { node: n12 } = e11;
      if ((n12.from < t54.from && n12.to >= t54.to || n12.to > t54.to && n12.from <= t54.from) && (null === (i11 = n12.parent) || void 0 === i11 ? void 0 : i11.parent)) return $.range(n12.to, n12.from);
    }
    return t54;
  });
  return i10(pS(e10, n10)), true;
}, preventDefault: true }, { key: "Mod-[", run: mo }, { key: "Mod-]", run: ms }, { key: "Mod-Alt-\\", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  if (e10.readOnly) return false;
  let n10 = /* @__PURE__ */ Object.create(null), s10 = new a9(e10, { overrideIndentation: (t54) => {
    let e11 = n10[t54];
    return null == e11 ? -1 : e11;
  } }), o10 = mn(e10, (t54, i11, o11) => {
    let r10 = a5(s10, t54.from);
    if (null == r10) return;
    /\S/.test(t54.text) || (r10 = 0);
    let l10 = /^\s*/.exec(t54.text)[0], h10 = a4(e10, r10);
    (l10 != h10 || o11.from < t54.from + l10.length) && (n10[t54.from] = r10, i11.push({ from: t54.from, to: t54.from + l10.length, insert: h10 }));
  });
  return o10.changes.empty || i10(e10.update(o10, { userEvent: "indent" })), true;
} }, { key: "Shift-Mod-k", run: (t53) => {
  if (t53.state.readOnly) return false;
  let { state: e10 } = t53, i10 = e10.changes(p9(e10).map((t54) => {
    let { from: i11, to: n11 } = t54;
    return i11 > 0 ? i11-- : n11 < e10.doc.length && n11++, { from: i11, to: n11 };
  })), n10 = px(e10.selection, (e11) => {
    let i11;
    if (t53.lineWrapping) {
      let n11 = t53.lineBlockAt(e11.head), s10 = t53.coordsAtPos(e11.head, e11.assoc || 1);
      s10 && (i11 = n11.bottom + t53.documentTop - s10.bottom + t53.defaultLineHeight / 2);
    }
    return t53.moveVertically(e11, true, i11);
  }).map(i10);
  return t53.dispatch({ changes: i10, selection: n10, scrollIntoView: true, userEvent: "delete.line" }), true;
} }, { key: "Shift-Mod-\\", run: (t53) => {
  let e10, i10, { state: n10, dispatch: s10 } = t53;
  return e10 = false, i10 = px(n10.selection, (t54) => {
    let i11 = cK(n10, t54.head, -1) || cK(n10, t54.head, 1) || t54.head > 0 && cK(n10, t54.head - 1, 1) || t54.head < n10.doc.length && cK(n10, t54.head + 1, -1);
    if (!i11 || !i11.end) return t54;
    e10 = true;
    let s11 = i11.start.from == t54.head ? i11.end.to : i11.end.from;
    return $.cursor(s11);
  }), !!e10 && (s10(pS(n10, i10)), true);
} }, { key: "Mod-/", run: (t53) => {
  let { state: e10 } = t53, i10 = e10.doc.lineAt(e10.selection.main.from), n10 = g7(t53.state, i10.from);
  return n10.line ? g5(t53) : !!n10.block && g6(t53);
} }, { key: "Alt-A", run: g9 }, { key: "Ctrl-m", mac: "Shift-Alt-m", run: (t53) => (t53.setTabFocusMode(), true) }].concat([{ key: "ArrowLeft", run: pD, shift: pz, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: (t53) => pT(t53, !pC(t53)), shift: (t53) => pq(t53, !pC(t53)), preventDefault: true }, { mac: "Cmd-ArrowLeft", run: (t53) => pk(t53, (e10) => pI(t53, e10, !pC(t53))), shift: (t53) => pF(t53, (e10) => pI(t53, e10, !pC(t53))), preventDefault: true }, { key: "ArrowRight", run: pO, shift: pK, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: (t53) => pT(t53, pC(t53)), shift: (t53) => pq(t53, pC(t53)), preventDefault: true }, { mac: "Cmd-ArrowRight", run: (t53) => pk(t53, (e10) => pI(t53, e10, pC(t53))), shift: (t53) => pF(t53, (e10) => pI(t53, e10, pC(t53))), preventDefault: true }, { key: "ArrowUp", run: pR, shift: pj, preventDefault: true }, { mac: "Cmd-ArrowUp", run: pX, shift: pQ }, { mac: "Ctrl-ArrowUp", run: pH, shift: p$ }, { key: "ArrowDown", run: pL, shift: pG, preventDefault: true }, { mac: "Cmd-ArrowDown", run: pJ, shift: pZ }, { mac: "Ctrl-ArrowDown", run: pV, shift: pY }, { key: "PageUp", run: pH, shift: p$ }, { key: "PageDown", run: pV, shift: pY }, { key: "Home", run: (t53) => pk(t53, (e10) => pI(t53, e10, false)), shift: (t53) => pF(t53, (e10) => pI(t53, e10, false)), preventDefault: true }, { key: "Mod-Home", run: pX, shift: pQ }, { key: "End", run: (t53) => pk(t53, (e10) => pI(t53, e10, true)), shift: (t53) => pF(t53, (e10) => pI(t53, e10, true)), preventDefault: true }, { key: "Mod-End", run: pJ, shift: pZ }, { key: "Enter", run: mt }, { key: "Mod-a", run: (t53) => {
  let { state: e10, dispatch: i10 } = t53;
  return i10(e10.update({ selection: { anchor: 0, head: e10.doc.length }, userEvent: "select" })), true;
} }, { key: "Backspace", run: p8, shift: p8 }, { key: "Delete", run: p3 }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: p5 }, { key: "Mod-Delete", mac: "Alt-Delete", run: (t53) => p4(t53, true) }, { mac: "Mod-Backspace", run: (t53) => p0(t53, (e10) => {
  let i10 = t53.moveToLineBoundary(e10, false).head;
  return e10.head > i10 ? i10 : Math.max(0, e10.head - 1);
}) }, { mac: "Mod-Delete", run: (t53) => p0(t53, (e10) => {
  let i10 = t53.moveToLineBoundary(e10, true).head;
  return e10.head < i10 ? i10 : Math.min(t53.state.doc.length, e10.head + 1);
}) }].concat(mr.map((t53) => ({ mac: t53.key, run: t53.run, shift: t53.shift })))), mh = { key: "Tab", run: ms, shift: mo };
export {
  co as A,
  aj as B,
  dF as C,
  oV as D,
  tB as E,
  d2 as F,
  db as G,
  ov as H,
  H as I,
  mh as J,
  ow as K,
  a1 as L,
  oc as M,
  o_ as N,
  ri as P,
  oU as T,
  n5 as a,
  og as b,
  s4 as c,
  cp as d,
  cI as e,
  ck as f,
  dj as g,
  dJ as h,
  s7 as i,
  sx as j,
  ss as k,
  oH as l,
  sv as m,
  pr as n,
  py as o,
  ml as p,
  cT as q,
  aF as r,
  aw as s,
  aI as t,
  oq as u,
  oW as v,
  a_ as w,
  a6 as x,
  ci as y,
  cs as z
};
