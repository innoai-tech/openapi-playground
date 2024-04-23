var t = function(n2, r2) {
  return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t2, n3) {
    t2.__proto__ = n3;
  } || function(t2, n3) {
    for (var r3 in n3)
      Object.prototype.hasOwnProperty.call(n3, r3) && (t2[r3] = n3[r3]);
  })(n2, r2);
};
function n(n2, r2) {
  if ("function" != typeof r2 && null !== r2)
    throw TypeError("Class extends value " + String(r2) + " is not a constructor or null");
  function e2() {
    this.constructor = n2;
  }
  t(n2, r2), n2.prototype = null === r2 ? Object.create(r2) : (e2.prototype = r2.prototype, new e2());
}
function r(t2, n2) {
  var r2 = {};
  for (var e2 in t2)
    Object.prototype.hasOwnProperty.call(t2, e2) && 0 > n2.indexOf(e2) && (r2[e2] = t2[e2]);
  if (null != t2 && "function" == typeof Object.getOwnPropertySymbols)
    for (var o2 = 0, e2 = Object.getOwnPropertySymbols(t2); o2 < e2.length; o2++)
      0 > n2.indexOf(e2[o2]) && Object.prototype.propertyIsEnumerable.call(t2, e2[o2]) && (r2[e2[o2]] = t2[e2[o2]]);
  return r2;
}
function e(t2, n2, r2, e2) {
  return new (r2 || (r2 = Promise))(function(o2, a2) {
    function i2(t3) {
      try {
        u2(e2.next(t3));
      } catch (t4) {
        a2(t4);
      }
    }
    function c2(t3) {
      try {
        u2(e2.throw(t3));
      } catch (t4) {
        a2(t4);
      }
    }
    function u2(t3) {
      var n3;
      t3.done ? o2(t3.value) : ((n3 = t3.value) instanceof r2 ? n3 : new r2(function(t4) {
        t4(n3);
      })).then(i2, c2);
    }
    u2((e2 = e2.apply(t2, n2 || [])).next());
  });
}
function o(t2, n2) {
  var r2, e2, o2, a2, i2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return a2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
    return this;
  }), a2;
  function c2(a3) {
    return function(c3) {
      return function(a4) {
        if (r2)
          throw TypeError("Generator is already executing.");
        for (; i2; )
          try {
            if (r2 = 1, e2 && (o2 = 2 & a4[0] ? e2.return : a4[0] ? e2.throw || ((o2 = e2.return) && o2.call(e2), 0) : e2.next) && !(o2 = o2.call(e2, a4[1])).done)
              return o2;
            switch (e2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
              case 0:
              case 1:
                o2 = a4;
                break;
              case 4:
                return i2.label++, { value: a4[1], done: false };
              case 5:
                i2.label++, e2 = a4[1], a4 = [0];
                continue;
              case 7:
                a4 = i2.ops.pop(), i2.trys.pop();
                continue;
              default:
                if (!(o2 = (o2 = i2.trys).length > 0 && o2[o2.length - 1]) && (6 === a4[0] || 2 === a4[0])) {
                  i2 = 0;
                  continue;
                }
                if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                  i2.label = a4[1];
                  break;
                }
                if (6 === a4[0] && i2.label < o2[1]) {
                  i2.label = o2[1], o2 = a4;
                  break;
                }
                if (o2 && i2.label < o2[2]) {
                  i2.label = o2[2], i2.ops.push(a4);
                  break;
                }
                o2[2] && i2.ops.pop(), i2.trys.pop();
                continue;
            }
            a4 = n2.call(t2, i2);
          } catch (t3) {
            a4 = [6, t3], e2 = 0;
          } finally {
            r2 = o2 = 0;
          }
        if (5 & a4[0])
          throw a4[1];
        return { value: a4[0] ? a4[1] : void 0, done: true };
      }([a3, c3]);
    };
  }
}
function a(t2) {
  var n2 = "function" == typeof Symbol && Symbol.iterator, r2 = n2 && t2[n2], e2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && e2 >= t2.length && (t2 = void 0), { value: t2 && t2[e2++], done: !t2 };
    } };
  throw TypeError(n2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function i(t2, n2) {
  var r2 = "function" == typeof Symbol && t2[Symbol.iterator];
  if (!r2)
    return t2;
  var e2, o2, a2 = r2.call(t2), i2 = [];
  try {
    for (; (void 0 === n2 || n2-- > 0) && !(e2 = a2.next()).done; )
      i2.push(e2.value);
  } catch (t3) {
    o2 = { error: t3 };
  } finally {
    try {
      e2 && !e2.done && (r2 = a2.return) && r2.call(a2);
    } finally {
      if (o2)
        throw o2.error;
    }
  }
  return i2;
}
function c(t2, n2, r2) {
  if (r2 || 2 == arguments.length)
    for (var e2, o2 = 0, a2 = n2.length; o2 < a2; o2++)
      !e2 && o2 in n2 || (e2 || (e2 = Array.prototype.slice.call(n2, 0, o2)), e2[o2] = n2[o2]);
  return t2.concat(e2 || Array.prototype.slice.call(n2));
}
function u(t2) {
  return this instanceof u ? (this.v = t2, this) : new u(t2);
}
function l(t2, n2, r2) {
  if (!Symbol.asyncIterator)
    throw TypeError("Symbol.asyncIterator is not defined.");
  var e2, o2 = r2.apply(t2, n2 || []), a2 = [];
  return e2 = {}, i2("next"), i2("throw"), i2("return"), e2[Symbol.asyncIterator] = function() {
    return this;
  }, e2;
  function i2(t3) {
    o2[t3] && (e2[t3] = function(n3) {
      return new Promise(function(r3, e3) {
        a2.push([t3, n3, r3, e3]) > 1 || c2(t3, n3);
      });
    });
  }
  function c2(t3, n3) {
    try {
      var r3;
      (r3 = o2[t3](n3)).value instanceof u ? Promise.resolve(r3.value.v).then(l2, f2) : s(a2[0][2], r3);
    } catch (t4) {
      s(a2[0][3], t4);
    }
  }
  function l2(t3) {
    c2("next", t3);
  }
  function f2(t3) {
    c2("throw", t3);
  }
  function s(t3, n3) {
    t3(n3), a2.shift(), a2.length && c2(a2[0][0], a2[0][1]);
  }
}
function f(t2) {
  if (!Symbol.asyncIterator)
    throw TypeError("Symbol.asyncIterator is not defined.");
  var n2, r2 = t2[Symbol.asyncIterator];
  return r2 ? r2.call(t2) : (t2 = a(t2), n2 = {}, e2("next"), e2("throw"), e2("return"), n2[Symbol.asyncIterator] = function() {
    return this;
  }, n2);
  function e2(r3) {
    n2[r3] = t2[r3] && function(n3) {
      return new Promise(function(e3, o2) {
        !function(t3, n4, r4, e4) {
          Promise.resolve(e4).then(function(n5) {
            t3({ value: n5, done: r4 });
          }, n4);
        }(e3, o2, (n3 = t2[r3](n3)).done, n3.value);
      });
    };
  }
}
export {
  r as _,
  a,
  c as b,
  i as c,
  n as d,
  l as e,
  o as f,
  u as g,
  e as h,
  f as i
};
