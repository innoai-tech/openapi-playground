import { a as t, b as r, c as n, d as e, e as i, f as o, g as u, h as s, i as c } from "./vendor--tslib.kWYf_5KY.chunk.js";
function l(t2) {
  return "function" == typeof t2;
}
function a(t2) {
  var r2 = t2(function(t3) {
    Error.call(t3), t3.stack = Error().stack;
  });
  return r2.prototype = Object.create(Error.prototype), r2.prototype.constructor = r2, r2;
}
var f = a(function(t2) {
  return function(r2) {
    t2(this), this.message = r2 ? r2.length + " errors occurred during unsubscription:\n" + r2.map(function(t3, r3) {
      return r3 + 1 + ") " + t3.toString();
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = r2;
  };
});
function h(t2, r2) {
  if (t2) {
    var n2 = t2.indexOf(r2);
    0 <= n2 && t2.splice(n2, 1);
  }
}
var p = function() {
  var e2;
  function i2(t2) {
    this.initialTeardown = t2, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return i2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = true;
      var e3, i3, o2, u2, s2, c2 = this._parentage;
      if (c2) {
        if (this._parentage = null, Array.isArray(c2))
          try {
            for (var a2 = t(c2), h2 = a2.next(); !h2.done; h2 = a2.next())
              h2.value.remove(this);
          } catch (t2) {
            e3 = { error: t2 };
          } finally {
            try {
              h2 && !h2.done && (i3 = a2.return) && i3.call(a2);
            } finally {
              if (e3)
                throw e3.error;
            }
          }
        else
          c2.remove(this);
      }
      var p2 = this.initialTeardown;
      if (l(p2))
        try {
          p2();
        } catch (t2) {
          s2 = t2 instanceof f ? t2.errors : [t2];
        }
      var d2 = this._finalizers;
      if (d2) {
        this._finalizers = null;
        try {
          for (var v2 = t(d2), y2 = v2.next(); !y2.done; y2 = v2.next()) {
            var m2 = y2.value;
            try {
              b(m2);
            } catch (t2) {
              s2 = null != s2 ? s2 : [], t2 instanceof f ? s2 = r(r([], n(s2)), n(t2.errors)) : s2.push(t2);
            }
          }
        } catch (t2) {
          o2 = { error: t2 };
        } finally {
          try {
            y2 && !y2.done && (u2 = v2.return) && u2.call(v2);
          } finally {
            if (o2)
              throw o2.error;
          }
        }
      }
      if (s2)
        throw new f(s2);
    }
  }, i2.prototype.add = function(t2) {
    var r2;
    if (t2 && t2 !== this) {
      if (this.closed)
        b(t2);
      else {
        if (t2 instanceof i2) {
          if (t2.closed || t2._hasParent(this))
            return;
          t2._addParent(this);
        }
        (this._finalizers = null !== (r2 = this._finalizers) && void 0 !== r2 ? r2 : []).push(t2);
      }
    }
  }, i2.prototype._hasParent = function(t2) {
    var r2 = this._parentage;
    return r2 === t2 || Array.isArray(r2) && r2.includes(t2);
  }, i2.prototype._addParent = function(t2) {
    var r2 = this._parentage;
    this._parentage = Array.isArray(r2) ? (r2.push(t2), r2) : r2 ? [r2, t2] : t2;
  }, i2.prototype._removeParent = function(t2) {
    var r2 = this._parentage;
    r2 === t2 ? this._parentage = null : Array.isArray(r2) && h(r2, t2);
  }, i2.prototype.remove = function(t2) {
    var r2 = this._finalizers;
    r2 && h(r2, t2), t2 instanceof i2 && t2._removeParent(this);
  }, i2.EMPTY = ((e2 = new i2()).closed = true, e2), i2;
}(), d = p.EMPTY;
function v(t2) {
  return t2 instanceof p || t2 && "closed" in t2 && l(t2.remove) && l(t2.add) && l(t2.unsubscribe);
}
function b(t2) {
  l(t2) ? t2() : t2.unsubscribe();
}
var y = { Promise: void 0, useDeprecatedNextContext: false }, m = { setTimeout: function(t2, e2) {
  for (var i2 = [], o2 = 2; o2 < arguments.length; o2++)
    i2[o2 - 2] = arguments[o2];
  return setTimeout.apply(void 0, r([t2, e2], n(i2)));
}, clearTimeout: function(t2) {
  var r2 = m.delegate;
  return ((null == r2 ? void 0 : r2.clearTimeout) || clearTimeout)(t2);
}, delegate: void 0 };
function w(t2) {
  m.setTimeout(function() {
    throw t2;
  });
}
function g() {
}
var _ = function(t2) {
  function r2(r3) {
    var n2 = t2.call(this) || this;
    return n2.isStopped = false, r3 ? (n2.destination = r3, v(r3) && r3.add(n2)) : n2.destination = I, n2;
  }
  return e(r2, t2), r2.create = function(t3, r3, n2) {
    return new O(t3, r3, n2);
  }, r2.prototype.next = function(t3) {
    this.isStopped || this._next(t3);
  }, r2.prototype.error = function(t3) {
    this.isStopped || (this.isStopped = true, this._error(t3));
  }, r2.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, r2.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, t2.prototype.unsubscribe.call(this), this.destination = null);
  }, r2.prototype._next = function(t3) {
    this.destination.next(t3);
  }, r2.prototype._error = function(t3) {
    try {
      this.destination.error(t3);
    } finally {
      this.unsubscribe();
    }
  }, r2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r2;
}(p), x = Function.prototype.bind;
function S(t2, r2) {
  return x.call(t2, r2);
}
var E = function() {
  function t2(t3) {
    this.partialObserver = t3;
  }
  return t2.prototype.next = function(t3) {
    var r2 = this.partialObserver;
    if (r2.next)
      try {
        r2.next(t3);
      } catch (t4) {
        w(t4);
      }
  }, t2.prototype.error = function(t3) {
    var r2 = this.partialObserver;
    if (r2.error)
      try {
        r2.error(t3);
      } catch (t4) {
        w(t4);
      }
    else
      w(t3);
  }, t2.prototype.complete = function() {
    var t3 = this.partialObserver;
    if (t3.complete)
      try {
        t3.complete();
      } catch (t4) {
        w(t4);
      }
  }, t2;
}(), O = function(t2) {
  function r2(r3, n2, e2) {
    var i2, o2, u2 = t2.call(this) || this;
    return l(r3) || !r3 ? i2 = { next: null != r3 ? r3 : void 0, error: null != n2 ? n2 : void 0, complete: null != e2 ? e2 : void 0 } : u2 && y.useDeprecatedNextContext ? ((o2 = Object.create(r3)).unsubscribe = function() {
      return u2.unsubscribe();
    }, i2 = { next: r3.next && S(r3.next, o2), error: r3.error && S(r3.error, o2), complete: r3.complete && S(r3.complete, o2) }) : i2 = r3, u2.destination = new E(i2), u2;
  }
  return e(r2, t2), r2;
}(_), I = { closed: true, next: g, error: function(t2) {
  throw t2;
}, complete: g }, A = "function" == typeof Symbol && Symbol.observable || "@@observable";
function j(t2) {
  return t2;
}
function P() {
  for (var t2 = [], r2 = 0; r2 < arguments.length; r2++)
    t2[r2] = arguments[r2];
  return k(t2);
}
function k(t2) {
  return 0 === t2.length ? j : 1 === t2.length ? t2[0] : function(r2) {
    return t2.reduce(function(t3, r3) {
      return r3(t3);
    }, r2);
  };
}
var T = function() {
  function t2(t3) {
    t3 && (this._subscribe = t3);
  }
  return t2.prototype.lift = function(r2) {
    var n2 = new t2();
    return n2.source = this, n2.operator = r2, n2;
  }, t2.prototype.subscribe = function(t3, r2, n2) {
    var e2, i2, o2, u2 = (e2 = t3) && e2 instanceof _ || e2 && l(e2.next) && l(e2.error) && l(e2.complete) && v(e2) ? t3 : new O(t3, r2, n2);
    return i2 = this.operator, o2 = this.source, u2.add(i2 ? i2.call(u2, o2) : o2 ? this._subscribe(u2) : this._trySubscribe(u2)), u2;
  }, t2.prototype._trySubscribe = function(t3) {
    try {
      return this._subscribe(t3);
    } catch (r2) {
      t3.error(r2);
    }
  }, t2.prototype.forEach = function(t3, r2) {
    var n2 = this;
    return new (r2 = C(r2))(function(r3, e2) {
      var i2 = new O({ next: function(r4) {
        try {
          t3(r4);
        } catch (t4) {
          e2(t4), i2.unsubscribe();
        }
      }, error: e2, complete: r3 });
      n2.subscribe(i2);
    });
  }, t2.prototype._subscribe = function(t3) {
    var r2;
    return null === (r2 = this.source) || void 0 === r2 ? void 0 : r2.subscribe(t3);
  }, t2.prototype[A] = function() {
    return this;
  }, t2.prototype.pipe = function() {
    for (var t3 = [], r2 = 0; r2 < arguments.length; r2++)
      t3[r2] = arguments[r2];
    return k(t3)(this);
  }, t2.prototype.toPromise = function(t3) {
    var r2 = this;
    return new (t3 = C(t3))(function(t4, n2) {
      var e2;
      r2.subscribe(function(t5) {
        return e2 = t5;
      }, function(t5) {
        return n2(t5);
      }, function() {
        return t4(e2);
      });
    });
  }, t2.create = function(r2) {
    return new t2(r2);
  }, t2;
}();
function C(t2) {
  var r2;
  return null !== (r2 = null != t2 ? t2 : y.Promise) && void 0 !== r2 ? r2 : Promise;
}
function z(t2) {
  return function(r2) {
    if (l(null == r2 ? void 0 : r2.lift))
      return r2.lift(function(r3) {
        try {
          return t2(r3, this);
        } catch (t3) {
          this.error(t3);
        }
      });
    throw TypeError("Unable to lift unknown Observable type");
  };
}
function U(t2, r2, n2, e2, i2) {
  return new F(t2, r2, n2, e2, i2);
}
var F = function(t2) {
  function r2(r3, n2, e2, i2, o2, u2) {
    var s2 = t2.call(this, r3) || this;
    return s2.onFinalize = o2, s2.shouldUnsubscribe = u2, s2._next = n2 ? function(t3) {
      try {
        n2(t3);
      } catch (t4) {
        r3.error(t4);
      }
    } : t2.prototype._next, s2._error = i2 ? function(t3) {
      try {
        i2(t3);
      } catch (t4) {
        r3.error(t4);
      } finally {
        this.unsubscribe();
      }
    } : t2.prototype._error, s2._complete = e2 ? function() {
      try {
        e2();
      } catch (t3) {
        r3.error(t3);
      } finally {
        this.unsubscribe();
      }
    } : t2.prototype._complete, s2;
  }
  return e(r2, t2), r2.prototype.unsubscribe = function() {
    var r3;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n2 = this.closed;
      t2.prototype.unsubscribe.call(this), n2 || null === (r3 = this.onFinalize) || void 0 === r3 || r3.call(this);
    }
  }, r2;
}(_), M = a(function(t2) {
  return function() {
    t2(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Y = function(r2) {
  function n2() {
    var t2 = r2.call(this) || this;
    return t2.closed = false, t2.currentObservers = null, t2.observers = [], t2.isStopped = false, t2.hasError = false, t2.thrownError = null, t2;
  }
  return e(n2, r2), n2.prototype.lift = function(t2) {
    var r3 = new D(this, this);
    return r3.operator = t2, r3;
  }, n2.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new M();
  }, n2.prototype.next = function(r3) {
    var n3 = this;
    (function() {
      var e2, i2;
      if (n3._throwIfClosed(), !n3.isStopped) {
        n3.currentObservers || (n3.currentObservers = Array.from(n3.observers));
        try {
          for (var o2 = t(n3.currentObservers), u2 = o2.next(); !u2.done; u2 = o2.next())
            u2.value.next(r3);
        } catch (t2) {
          e2 = { error: t2 };
        } finally {
          try {
            u2 && !u2.done && (i2 = o2.return) && i2.call(o2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
      }
    })();
  }, n2.prototype.error = function(t2) {
    var r3 = this;
    (function() {
      if (r3._throwIfClosed(), !r3.isStopped) {
        r3.hasError = r3.isStopped = true, r3.thrownError = t2;
        for (var n3 = r3.observers; n3.length; )
          n3.shift().error(t2);
      }
    })();
  }, n2.prototype.complete = function() {
    var t2 = this;
    (function() {
      if (t2._throwIfClosed(), !t2.isStopped) {
        t2.isStopped = true;
        for (var r3 = t2.observers; r3.length; )
          r3.shift().complete();
      }
    })();
  }, n2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(n2.prototype, "observed", { get: function() {
    var t2;
    return (null === (t2 = this.observers) || void 0 === t2 ? void 0 : t2.length) > 0;
  }, enumerable: false, configurable: true }), n2.prototype._trySubscribe = function(t2) {
    return this._throwIfClosed(), r2.prototype._trySubscribe.call(this, t2);
  }, n2.prototype._subscribe = function(t2) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t2), this._innerSubscribe(t2);
  }, n2.prototype._innerSubscribe = function(t2) {
    var r3 = this, n3 = this.hasError, e2 = this.isStopped, i2 = this.observers;
    return n3 || e2 ? d : (this.currentObservers = null, i2.push(t2), new p(function() {
      r3.currentObservers = null, h(i2, t2);
    }));
  }, n2.prototype._checkFinalizedStatuses = function(t2) {
    var r3 = this.hasError, n3 = this.thrownError, e2 = this.isStopped;
    r3 ? t2.error(n3) : e2 && t2.complete();
  }, n2.prototype.asObservable = function() {
    var t2 = new T();
    return t2.source = this, t2;
  }, n2.create = function(t2, r3) {
    return new D(t2, r3);
  }, n2;
}(T), D = function(t2) {
  function r2(r3, n2) {
    var e2 = t2.call(this) || this;
    return e2.destination = r3, e2.source = n2, e2;
  }
  return e(r2, t2), r2.prototype.next = function(t3) {
    var r3, n2;
    null === (n2 = null === (r3 = this.destination) || void 0 === r3 ? void 0 : r3.next) || void 0 === n2 || n2.call(r3, t3);
  }, r2.prototype.error = function(t3) {
    var r3, n2;
    null === (n2 = null === (r3 = this.destination) || void 0 === r3 ? void 0 : r3.error) || void 0 === n2 || n2.call(r3, t3);
  }, r2.prototype.complete = function() {
    var t3, r3;
    null === (r3 = null === (t3 = this.destination) || void 0 === t3 ? void 0 : t3.complete) || void 0 === r3 || r3.call(t3);
  }, r2.prototype._subscribe = function(t3) {
    var r3, n2;
    return null !== (n2 = null === (r3 = this.source) || void 0 === r3 ? void 0 : r3.subscribe(t3)) && void 0 !== n2 ? n2 : d;
  }, r2;
}(Y), R = function(t2) {
  function r2(r3) {
    var n2 = t2.call(this) || this;
    return n2._value = r3, n2;
  }
  return e(r2, t2), Object.defineProperty(r2.prototype, "value", { get: function() {
    return this.getValue();
  }, enumerable: false, configurable: true }), r2.prototype._subscribe = function(r3) {
    var n2 = t2.prototype._subscribe.call(this, r3);
    return n2.closed || r3.next(this._value), n2;
  }, r2.prototype.getValue = function() {
    var t3 = this.hasError, r3 = this.thrownError, n2 = this._value;
    if (t3)
      throw r3;
    return this._throwIfClosed(), n2;
  }, r2.prototype.next = function(r3) {
    t2.prototype.next.call(this, this._value = r3);
  }, r2;
}(Y), q = function() {
  return Date.now();
}, B = function(t2) {
  function r2(r3, n2) {
    return t2.call(this) || this;
  }
  return e(r2, t2), r2.prototype.schedule = function(t3, r3) {
    return this;
  }, r2;
}(p), L = { setInterval: function(t2, e2) {
  for (var i2 = [], o2 = 2; o2 < arguments.length; o2++)
    i2[o2 - 2] = arguments[o2];
  return setInterval.apply(void 0, r([t2, e2], n(i2)));
}, clearInterval: function(t2) {
  var r2 = L.delegate;
  return ((null == r2 ? void 0 : r2.clearInterval) || clearInterval)(t2);
}, delegate: void 0 }, N = function(t2) {
  function r2(r3, n2) {
    var e2 = t2.call(this, r3, n2) || this;
    return e2.scheduler = r3, e2.work = n2, e2.pending = false, e2;
  }
  return e(r2, t2), r2.prototype.schedule = function(t3, r3) {
    if (void 0 === r3 && (r3 = 0), this.closed)
      return this;
    this.state = t3;
    var n2, e2 = this.id, i2 = this.scheduler;
    return null != e2 && (this.id = this.recycleAsyncId(i2, e2, r3)), this.pending = true, this.delay = r3, this.id = null !== (n2 = this.id) && void 0 !== n2 ? n2 : this.requestAsyncId(i2, this.id, r3), this;
  }, r2.prototype.requestAsyncId = function(t3, r3, n2) {
    return void 0 === n2 && (n2 = 0), L.setInterval(t3.flush.bind(t3, this), n2);
  }, r2.prototype.recycleAsyncId = function(t3, r3, n2) {
    if (void 0 === n2 && (n2 = 0), null != n2 && this.delay === n2 && false === this.pending)
      return r3;
    null != r3 && L.clearInterval(r3);
  }, r2.prototype.execute = function(t3, r3) {
    if (this.closed)
      return Error("executing a cancelled action");
    this.pending = false;
    var n2 = this._execute(t3, r3);
    if (n2)
      return n2;
    false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, r2.prototype._execute = function(t3, r3) {
    var n2, e2 = false;
    try {
      this.work(t3);
    } catch (t4) {
      e2 = true, n2 = t4 || Error("Scheduled action threw falsy error");
    }
    if (e2)
      return this.unsubscribe(), n2;
  }, r2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var r3 = this.id, n2 = this.scheduler, e2 = n2.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, h(e2, this), null != r3 && (this.id = this.recycleAsyncId(n2, r3, null)), this.delay = null, t2.prototype.unsubscribe.call(this);
    }
  }, r2;
}(B), V = function() {
  function t2(r2, n2) {
    void 0 === n2 && (n2 = t2.now), this.schedulerActionCtor = r2, this.now = n2;
  }
  return t2.prototype.schedule = function(t3, r2, n2) {
    return void 0 === r2 && (r2 = 0), new this.schedulerActionCtor(this, t3).schedule(n2, r2);
  }, t2.now = q, t2;
}(), G = new (function(t2) {
  function r2(r3, n2) {
    void 0 === n2 && (n2 = V.now);
    var e2 = t2.call(this, r3, n2) || this;
    return e2.actions = [], e2._active = false, e2;
  }
  return e(r2, t2), r2.prototype.flush = function(t3) {
    var r3, n2 = this.actions;
    if (this._active) {
      n2.push(t3);
      return;
    }
    this._active = true;
    do
      if (r3 = t3.execute(t3.state, t3.delay))
        break;
    while (t3 = n2.shift());
    if (this._active = false, r3) {
      for (; t3 = n2.shift(); )
        t3.unsubscribe();
      throw r3;
    }
  }, r2;
}(V))(N), H = new T(function(t2) {
  return t2.complete();
});
function J(t2) {
  return t2[t2.length - 1];
}
function K(t2) {
  var r2;
  return (r2 = J(t2)) && l(r2.schedule) ? t2.pop() : void 0;
}
var Q = function(t2) {
  return t2 && "number" == typeof t2.length && "function" != typeof t2;
};
function W(t2) {
  return l(null == t2 ? void 0 : t2.then);
}
function X(t2) {
  return Symbol.asyncIterator && l(null == t2 ? void 0 : t2[Symbol.asyncIterator]);
}
function Z(t2) {
  return TypeError("You provided " + (null !== t2 && "object" == typeof t2 ? "an invalid object" : "'" + t2 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var $ = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function tt(t2) {
  return l(null == t2 ? void 0 : t2[$]);
}
function tr(t2) {
  return i(this, arguments, function() {
    var r2, n2, e2;
    return o(this, function(i2) {
      switch (i2.label) {
        case 0:
          r2 = t2.getReader(), i2.label = 1;
        case 1:
          i2.trys.push([1, , 9, 10]), i2.label = 2;
        case 2:
          return [4, u(r2.read())];
        case 3:
          if (e2 = (n2 = i2.sent()).value, !n2.done)
            return [3, 5];
          return [4, u(void 0)];
        case 4:
          return [2, i2.sent()];
        case 5:
          return [4, u(e2)];
        case 6:
          return [4, i2.sent()];
        case 7:
          return i2.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r2.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function tn(t2) {
  return l(null == t2 ? void 0 : t2.getReader);
}
function te(r2) {
  if (r2 instanceof T)
    return r2;
  if (null != r2) {
    if (l(r2[A]))
      return new T(function(t2) {
        var n2 = r2[A]();
        if (l(n2.subscribe))
          return n2.subscribe(t2);
        throw TypeError("Provided object does not correctly implement Symbol.observable");
      });
    if (Q(r2))
      return new T(function(t2) {
        for (var n2 = 0; n2 < r2.length && !t2.closed; n2++)
          t2.next(r2[n2]);
        t2.complete();
      });
    if (W(r2))
      return new T(function(t2) {
        r2.then(function(r3) {
          t2.closed || (t2.next(r3), t2.complete());
        }, function(r3) {
          return t2.error(r3);
        }).then(null, w);
      });
    if (X(r2))
      return ti(r2);
    if (tt(r2))
      return new T(function(n2) {
        var e2, i2;
        try {
          for (var o2 = t(r2), u2 = o2.next(); !u2.done; u2 = o2.next()) {
            var s2 = u2.value;
            if (n2.next(s2), n2.closed)
              return;
          }
        } catch (t2) {
          e2 = { error: t2 };
        } finally {
          try {
            u2 && !u2.done && (i2 = o2.return) && i2.call(o2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        n2.complete();
      });
    if (tn(r2))
      return ti(tr(r2));
  }
  throw Z(r2);
}
function ti(t2) {
  return new T(function(r2) {
    (function(t3, r3) {
      var n2, e2, i2, u2;
      return s(this, void 0, void 0, function() {
        var s2;
        return o(this, function(o2) {
          switch (o2.label) {
            case 0:
              o2.trys.push([0, 5, 6, 11]), n2 = c(t3), o2.label = 1;
            case 1:
              return [4, n2.next()];
            case 2:
              if ((e2 = o2.sent()).done)
                return [3, 4];
              if (s2 = e2.value, r3.next(s2), r3.closed)
                return [2];
              o2.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return i2 = { error: o2.sent() }, [3, 11];
            case 6:
              if (o2.trys.push([6, , 9, 10]), !(e2 && !e2.done && (u2 = n2.return)))
                return [3, 8];
              return [4, u2.call(n2)];
            case 7:
              o2.sent(), o2.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (i2)
                throw i2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              return r3.complete(), [2];
          }
        });
      });
    })(t2, r2).catch(function(t3) {
      return r2.error(t3);
    });
  });
}
function to(t2, r2, n2, e2, i2) {
  void 0 === e2 && (e2 = 0), void 0 === i2 && (i2 = false);
  var o2 = r2.schedule(function() {
    n2(), i2 ? t2.add(this.schedule(null, e2)) : this.unsubscribe();
  }, e2);
  if (t2.add(o2), !i2)
    return o2;
}
function tu(t2, r2) {
  return void 0 === r2 && (r2 = 0), z(function(n2, e2) {
    n2.subscribe(U(e2, function(n3) {
      return to(e2, t2, function() {
        return e2.next(n3);
      }, r2);
    }, function() {
      return to(e2, t2, function() {
        return e2.complete();
      }, r2);
    }, function(n3) {
      return to(e2, t2, function() {
        return e2.error(n3);
      }, r2);
    }));
  });
}
function ts(t2, r2) {
  return void 0 === r2 && (r2 = 0), z(function(n2, e2) {
    e2.add(t2.schedule(function() {
      return n2.subscribe(e2);
    }, r2));
  });
}
function tc(t2, r2) {
  if (!t2)
    throw Error("Iterable cannot be null");
  return new T(function(n2) {
    to(n2, r2, function() {
      var e2 = t2[Symbol.asyncIterator]();
      to(n2, r2, function() {
        e2.next().then(function(t3) {
          t3.done ? n2.complete() : n2.next(t3.value);
        });
      }, 0, true);
    });
  });
}
function tl(t2, r2) {
  return r2 ? function(t3, r3) {
    if (null != t3) {
      if (l(t3[A]))
        return te(t3).pipe(ts(r3), tu(r3));
      if (Q(t3))
        return new T(function(n2) {
          var e2 = 0;
          return r3.schedule(function() {
            e2 === t3.length ? n2.complete() : (n2.next(t3[e2++]), n2.closed || this.schedule());
          });
        });
      if (W(t3))
        return te(t3).pipe(ts(r3), tu(r3));
      if (X(t3))
        return tc(t3, r3);
      if (tt(t3))
        return new T(function(n2) {
          var e2;
          return to(n2, r3, function() {
            e2 = t3[$](), to(n2, r3, function() {
              var t4, r4, i2;
              try {
                r4 = (t4 = e2.next()).value, i2 = t4.done;
              } catch (t5) {
                n2.error(t5);
                return;
              }
              i2 ? n2.complete() : n2.next(r4);
            }, 0, true);
          }), function() {
            return l(null == e2 ? void 0 : e2.return) && e2.return();
          };
        });
      if (tn(t3))
        return tc(tr(t3), r3);
    }
    throw Z(t3);
  }(t2, r2) : te(t2);
}
function ta() {
  for (var t2 = [], r2 = 0; r2 < arguments.length; r2++)
    t2[r2] = arguments[r2];
  var n2 = K(t2);
  return tl(t2, n2);
}
function tf(t2) {
  return !!t2 && (t2 instanceof T || l(t2.lift) && l(t2.subscribe));
}
function th(t2, r2) {
  return z(function(n2, e2) {
    var i2 = 0;
    n2.subscribe(U(e2, function(n3) {
      e2.next(t2.call(r2, n3, i2++));
    }));
  });
}
var tp = Array.isArray, td = Array.isArray, tv = Object.getPrototypeOf, tb = Object.prototype, ty = Object.keys;
function tm() {
  for (var t2, e2 = [], i2 = 0; i2 < arguments.length; i2++)
    e2[i2] = arguments[i2];
  var o2 = K(e2), u2 = l(J(e2)) ? e2.pop() : void 0, s2 = function(t3) {
    if (1 === t3.length) {
      var r2 = t3[0];
      if (td(r2))
        return { args: r2, keys: null };
      if (r2 && "object" == typeof r2 && tv(r2) === tb) {
        var n2 = ty(r2);
        return { args: n2.map(function(t4) {
          return r2[t4];
        }), keys: n2 };
      }
    }
    return { args: t3, keys: null };
  }(e2), c2 = s2.args, a2 = s2.keys;
  if (0 === c2.length)
    return tl([], o2);
  var f2 = new T((void 0 === (t2 = a2 ? function(t3) {
    return a2.reduce(function(r2, n2, e3) {
      return r2[n2] = t3[e3], r2;
    }, {});
  } : j) && (t2 = j), function(r2) {
    var n2, e3, i3;
    n2 = o2, e3 = function() {
      for (var n3 = c2.length, e4 = Array(n3), i4 = n3, u3 = n3, s3 = function(n4) {
        var s4, l3, a3;
        s4 = o2, l3 = function() {
          var s5 = tl(c2[n4], o2), l4 = false;
          s5.subscribe(U(r2, function(i5) {
            e4[n4] = i5, !l4 && (l4 = true, u3--), u3 || r2.next(t2(e4.slice()));
          }, function() {
            --i4 || r2.complete();
          }));
        }, a3 = r2, s4 ? to(a3, s4, l3) : l3();
      }, l2 = 0; l2 < n3; l2++)
        s3(l2);
    }, i3 = r2, n2 ? to(i3, n2, e3) : e3();
  }));
  return u2 ? f2.pipe(th(function(t3) {
    return tp(t3) ? u2.apply(void 0, r([], n(t3))) : u2(t3);
  })) : f2;
}
function tw(t2, r2, n2) {
  return (void 0 === n2 && (n2 = 1 / 0), l(r2)) ? tw(function(n3, e2) {
    return th(function(t3, i2) {
      return r2(n3, t3, e2, i2);
    })(te(t2(n3, e2)));
  }, n2) : ("number" == typeof r2 && (n2 = r2), z(function(r3, e2) {
    var i2, o2, u2, s2, c2, l2, a2, f2, h2;
    return i2 = n2, u2 = [], s2 = 0, c2 = 0, l2 = false, a2 = function() {
      !l2 || u2.length || s2 || e2.complete();
    }, f2 = function(t3) {
      return s2 < i2 ? h2(t3) : u2.push(t3);
    }, h2 = function(r4) {
      s2++;
      var n3 = false;
      te(t2(r4, c2++)).subscribe(U(e2, function(t3) {
        o2 ? f2(t3) : e2.next(t3);
      }, function() {
        n3 = true;
      }, void 0, function() {
        if (n3)
          try {
            for (s2--; u2.length && s2 < i2; )
              !function() {
                var t3 = u2.shift();
                h2(t3);
              }();
            a2();
          } catch (t3) {
            e2.error(t3);
          }
      }));
    }, r3.subscribe(U(e2, f2, function() {
      l2 = true, a2();
    })), function() {
    };
  }));
}
function tg() {
  for (var t2, r2, n2 = [], e2 = 0; e2 < arguments.length; e2++)
    n2[e2] = arguments[e2];
  var i2 = K(n2), o2 = (t2 = 1 / 0, "number" == typeof J(n2) ? n2.pop() : t2);
  return n2.length ? 1 === n2.length ? te(n2[0]) : (void 0 === (r2 = o2) && (r2 = 1 / 0), tw(j, r2))(tl(n2, i2)) : H;
}
function t_(t2, r2) {
  return z(function(n2, e2) {
    var i2 = 0;
    n2.subscribe(U(e2, function(n3) {
      return t2.call(r2, n3, i2++) && e2.next(n3);
    }));
  });
}
function tx(t2) {
  return z(function(r2, n2) {
    var e2, i2 = null, o2 = false;
    i2 = r2.subscribe(U(n2, void 0, void 0, function(u2) {
      e2 = te(t2(u2, tx(t2)(r2))), i2 ? (i2.unsubscribe(), i2 = null, e2.subscribe(n2)) : o2 = true;
    })), o2 && (i2.unsubscribe(), i2 = null, e2.subscribe(n2));
  });
}
function tS(t2, r2) {
  return void 0 === r2 && (r2 = G), z(function(n2, e2) {
    var i2 = null, o2 = null, u2 = null, s2 = function() {
      if (i2) {
        i2.unsubscribe(), i2 = null;
        var t3 = o2;
        o2 = null, e2.next(t3);
      }
    };
    function c2() {
      var n3 = u2 + t2, o3 = r2.now();
      if (o3 < n3) {
        i2 = this.schedule(void 0, n3 - o3), e2.add(i2);
        return;
      }
      s2();
    }
    n2.subscribe(U(e2, function(n3) {
      o2 = n3, u2 = r2.now(), i2 || (i2 = r2.schedule(c2, t2), e2.add(i2));
    }, function() {
      s2(), e2.complete();
    }, void 0, function() {
      o2 = i2 = null;
    }));
  });
}
function tE() {
  return z(function(t2, r2) {
    t2.subscribe(U(r2, g));
  });
}
function tO(t2, r2) {
  return void 0 === r2 && (r2 = j), t2 = null != t2 ? t2 : tI, z(function(n2, e2) {
    var i2, o2 = true;
    n2.subscribe(U(e2, function(n3) {
      var u2 = r2(n3);
      (o2 || !t2(i2, u2)) && (o2 = false, i2 = u2, e2.next(n3));
    }));
  });
}
function tI(t2, r2) {
  return t2 === r2;
}
function tA(t2, r2) {
  return z(function(n2, e2) {
    var i2 = null, o2 = 0, u2 = false, s2 = function() {
      return u2 && !i2 && e2.complete();
    };
    n2.subscribe(U(e2, function(n3) {
      null == i2 || i2.unsubscribe();
      var u3 = 0, c2 = o2++;
      te(t2(n3, c2)).subscribe(i2 = U(e2, function(t3) {
        return e2.next(r2 ? r2(n3, t3, c2, u3++) : t3);
      }, function() {
        i2 = null, s2();
      }));
    }, function() {
      u2 = true, s2();
    }));
  });
}
function tj(t2, r2, n2) {
  var e2 = l(t2) || r2 || n2 ? { next: t2, error: r2, complete: n2 } : t2;
  return e2 ? z(function(t3, r3) {
    null === (n3 = e2.subscribe) || void 0 === n3 || n3.call(e2);
    var n3, i2 = true;
    t3.subscribe(U(r3, function(t4) {
      var n4;
      null === (n4 = e2.next) || void 0 === n4 || n4.call(e2, t4), r3.next(t4);
    }, function() {
      var t4;
      i2 = false, null === (t4 = e2.complete) || void 0 === t4 || t4.call(e2), r3.complete();
    }, function(t4) {
      var n4;
      i2 = false, null === (n4 = e2.error) || void 0 === n4 || n4.call(e2, t4), r3.error(t4);
    }, function() {
      var t4, r4;
      i2 && (null === (t4 = e2.unsubscribe) || void 0 === t4 || t4.call(e2)), null === (r4 = e2.finalize) || void 0 === r4 || r4.call(e2);
    }));
  }) : j;
}
export {
  R as B,
  H as E,
  T as O,
  Y as S,
  tg as a,
  tS as b,
  tm as c,
  tO as d,
  t_ as e,
  tl as f,
  tw as g,
  tE as h,
  tf as i,
  tx as j,
  th as m,
  ta as o,
  P as p,
  tA as s,
  tj as t
};
