var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toCommonJS = (from) => {
  const moduleCache = __toCommonJS.moduleCache ??= new WeakMap;
  var cached = moduleCache.get(from);
  if (cached)
    return cached;
  var to = __defProp({}, "__esModule", { value: true });
  var desc = { enumerable: false };
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  moduleCache.set(from, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// node:util
var exports_util = {};
__export(exports_util, {
  default: () => {
    {
      return so;
    }
  },
  TextEncoder: () => {
    {
      return st;
    }
  },
  TextDecoder: () => {
    {
      return ct;
    }
  }
});
var pt, dr, lt, gt, dt, bt, p, At, gr, F, mt, br, N, Zr, Kr, V, re, H, ce, Y, Ae, Se, Pe, Fr, Br, Ur, Rr, qe, rt, tt, nt, yt, E, st, ct, so;
var init_util = __esm(() => {
  pt = Object.create;
  dr = Object.defineProperty;
  lt = Object.getOwnPropertyDescriptor;
  gt = Object.getOwnPropertyNames;
  dt = Object.getPrototypeOf;
  bt = Object.prototype.hasOwnProperty;
  p = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
  At = (r, e) => {
    for (var t in e)
      dr(r, t, { get: e[t], enumerable: true });
  };
  gr = (r, e, t, n) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let o of gt(e))
        !bt.call(r, o) && o !== t && dr(r, o, { get: () => e[o], enumerable: !(n = lt(e, o)) || n.enumerable });
    return r;
  };
  F = (r, e, t) => (gr(r, e, "default"), t && gr(t, e, "default"));
  mt = (r, e, t) => (t = r != null ? pt(dt(r)) : {}, gr(e || !r || !r.__esModule ? dr(t, "default", { value: r, enumerable: true }) : t, r));
  br = p((po, Vr) => {
    Vr.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return false;
      if (typeof Symbol.iterator == "symbol")
        return true;
      var e = {}, t = Symbol("test"), n = Object(t);
      if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
        return false;
      var o = 42;
      e[t] = o;
      for (t in e)
        return false;
      if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
        return false;
      var i = Object.getOwnPropertySymbols(e);
      if (i.length !== 1 || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
        return false;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var a = Object.getOwnPropertyDescriptor(e, t);
        if (a.value !== o || a.enumerable !== true)
          return false;
      }
      return true;
    };
  });
  N = p((lo, Jr) => {
    var ht = br();
    Jr.exports = function() {
      return ht() && !!Symbol.toStringTag;
    };
  });
  Zr = p((go, Hr) => {
    var Lr = typeof Symbol < "u" && Symbol, St = br();
    Hr.exports = function() {
      return typeof Lr != "function" || typeof Symbol != "function" || typeof Lr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : St();
    };
  });
  Kr = p((bo, Yr) => {
    var vt = "Function.prototype.bind called on incompatible ", Ar = Array.prototype.slice, Ot = Object.prototype.toString, jt = "[object Function]";
    Yr.exports = function(e) {
      var t = this;
      if (typeof t != "function" || Ot.call(t) !== jt)
        throw new TypeError(vt + t);
      for (var n = Ar.call(arguments, 1), o, i = function() {
        if (this instanceof o) {
          var g = t.apply(this, n.concat(Ar.call(arguments)));
          return Object(g) === g ? g : this;
        } else
          return t.apply(e, n.concat(Ar.call(arguments)));
      }, a = Math.max(0, t.length - n.length), f = [], c = 0;c < a; c++)
        f.push("$" + c);
      if (o = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
        var l = function() {
        };
        l.prototype = t.prototype, o.prototype = new l, l.prototype = null;
      }
      return o;
    };
  });
  V = p((Ao, Qr) => {
    var Pt = Kr();
    Qr.exports = Function.prototype.bind || Pt;
  });
  re = p((mo, Xr) => {
    var wt = V();
    Xr.exports = wt.call(Function.call, Object.prototype.hasOwnProperty);
  });
  H = p((ho, ie) => {
    var s, x = SyntaxError, oe = Function, U = TypeError, mr = function(r) {
      try {
        return oe('"use strict"; return (' + r + ").constructor;")();
      } catch {
      }
    }, v = Object.getOwnPropertyDescriptor;
    if (v)
      try {
        v({}, "");
      } catch {
        v = null;
      }
    var hr = function() {
      throw new U;
    }, Et = v ? function() {
      try {
        return arguments.callee, hr;
      } catch {
        try {
          return v(arguments, "callee").get;
        } catch {
          return hr;
        }
      }
    }() : hr, I = Zr()(), m = Object.getPrototypeOf || function(r) {
      return r.__proto__;
    }, B = {}, Tt = typeof Uint8Array > "u" ? s : m(Uint8Array), O = { "%AggregateError%": typeof AggregateError > "u" ? s : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? s : ArrayBuffer, "%ArrayIteratorPrototype%": I ? m([][Symbol.iterator]()) : s, "%AsyncFromSyncIteratorPrototype%": s, "%AsyncFunction%": B, "%AsyncGenerator%": B, "%AsyncGeneratorFunction%": B, "%AsyncIteratorPrototype%": B, "%Atomics%": typeof Atomics > "u" ? s : Atomics, "%BigInt%": typeof BigInt > "u" ? s : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? s : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? s : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? s : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? s : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? s : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? s : FinalizationRegistry, "%Function%": oe, "%GeneratorFunction%": B, "%Int8Array%": typeof Int8Array > "u" ? s : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? s : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? s : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": I ? m(m([][Symbol.iterator]())) : s, "%JSON%": typeof JSON == "object" ? JSON : s, "%Map%": typeof Map > "u" ? s : Map, "%MapIteratorPrototype%": typeof Map > "u" || !I ? s : m(new Map()[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? s : Promise, "%Proxy%": typeof Proxy > "u" ? s : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? s : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? s : Set, "%SetIteratorPrototype%": typeof Set > "u" || !I ? s : m(new Set()[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? s : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": I ? m(""[Symbol.iterator]()) : s, "%Symbol%": I ? Symbol : s, "%SyntaxError%": x, "%ThrowTypeError%": Et, "%TypedArray%": Tt, "%TypeError%": U, "%Uint8Array%": typeof Uint8Array > "u" ? s : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? s : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? s : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? s : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? s : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? s : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? s : WeakSet };
    try {
      null.error;
    } catch (r) {
      ee = m(m(r)), O["%Error.prototype%"] = ee;
    }
    var ee, Ft = function r(e) {
      var t;
      if (e === "%AsyncFunction%")
        t = mr("async function () {}");
      else if (e === "%GeneratorFunction%")
        t = mr("function* () {}");
      else if (e === "%AsyncGeneratorFunction%")
        t = mr("async function* () {}");
      else if (e === "%AsyncGenerator%") {
        var n = r("%AsyncGeneratorFunction%");
        n && (t = n.prototype);
      } else if (e === "%AsyncIteratorPrototype%") {
        var o = r("%AsyncGenerator%");
        o && (t = m(o.prototype));
      }
      return O[e] = t, t;
    }, te = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, C = V(), J = re(), It = C.call(Function.call, Array.prototype.concat), Bt = C.call(Function.apply, Array.prototype.splice), ne = C.call(Function.call, String.prototype.replace), L = C.call(Function.call, String.prototype.slice), Ut = C.call(Function.call, RegExp.prototype.exec), xt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Dt = /\\(\\)?/g, Rt = function(e) {
      var t = L(e, 0, 1), n = L(e, -1);
      if (t === "%" && n !== "%")
        throw new x("invalid intrinsic syntax, expected closing `%`");
      if (n === "%" && t !== "%")
        throw new x("invalid intrinsic syntax, expected opening `%`");
      var o = [];
      return ne(e, xt, function(i, a, f, c) {
        o[o.length] = f ? ne(c, Dt, "$1") : a || i;
      }), o;
    }, kt = function(e, t) {
      var n = e, o;
      if (J(te, n) && (o = te[n], n = "%" + o[0] + "%"), J(O, n)) {
        var i = O[n];
        if (i === B && (i = Ft(n)), typeof i > "u" && !t)
          throw new U("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return { alias: o, name: n, value: i };
      }
      throw new x("intrinsic " + e + " does not exist!");
    };
    ie.exports = function(e, t) {
      if (typeof e != "string" || e.length === 0)
        throw new U("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof t != "boolean")
        throw new U('"allowMissing" argument must be a boolean');
      if (Ut(/^%?[^%]*%?$/, e) === null)
        throw new x("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var n = Rt(e), o = n.length > 0 ? n[0] : "", i = kt("%" + o + "%", t), a = i.name, f = i.value, c = false, l = i.alias;
      l && (o = l[0], Bt(n, It([0, 1], l)));
      for (var g = 1, S = true;g < n.length; g += 1) {
        var d = n[g], T = L(d, 0, 1), _ = L(d, -1);
        if ((T === '"' || T === "'" || T === "`" || _ === '"' || _ === "'" || _ === "`") && T !== _)
          throw new x("property names with quotes must have matching quotes");
        if ((d === "constructor" || !S) && (c = true), o += "." + d, a = "%" + o + "%", J(O, a))
          f = O[a];
        else if (f != null) {
          if (!(d in f)) {
            if (!t)
              throw new U("base intrinsic for " + e + " exists, but the property is not available.");
            return;
          }
          if (v && g + 1 >= n.length) {
            var z2 = v(f, d);
            S = !!z2, S && "get" in z2 && !("originalValue" in z2.get) ? f = z2.get : f = f[d];
          } else
            S = J(f, d), f = f[d];
          S && !c && (O[a] = f);
        }
      }
      return f;
    };
  });
  ce = p((So, Z) => {
    var Sr = V(), D = H(), ue = D("%Function.prototype.apply%"), ye = D("%Function.prototype.call%"), se = D("%Reflect.apply%", true) || Sr.call(ye, ue), ae = D("%Object.getOwnPropertyDescriptor%", true), j = D("%Object.defineProperty%", true), Mt = D("%Math.max%");
    if (j)
      try {
        j({}, "a", { value: 1 });
      } catch {
        j = null;
      }
    Z.exports = function(e) {
      var t = se(Sr, ye, arguments);
      if (ae && j) {
        var n = ae(t, "length");
        n.configurable && j(t, "length", { value: 1 + Mt(0, e.length - (arguments.length - 1)) });
      }
      return t;
    };
    var fe = function() {
      return se(Sr, ue, arguments);
    };
    j ? j(Z.exports, "apply", { value: fe }) : Z.exports.apply = fe;
  });
  Y = p((vo, ge) => {
    var pe = H(), le = ce(), Nt = le(pe("String.prototype.indexOf"));
    ge.exports = function(e, t) {
      var n = pe(e, !!t);
      return typeof n == "function" && Nt(e, ".prototype.") > -1 ? le(n) : n;
    };
  });
  Ae = p((Oo, be) => {
    var Ct = N()(), $t = Y(), vr = $t("Object.prototype.toString"), K = function(e) {
      return Ct && e && typeof e == "object" && Symbol.toStringTag in e ? false : vr(e) === "[object Arguments]";
    }, de = function(e) {
      return K(e) ? true : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && vr(e) !== "[object Array]" && vr(e.callee) === "[object Function]";
    }, qt = function() {
      return K(arguments);
    }();
    K.isLegacyArguments = de;
    be.exports = qt ? K : de;
  });
  Se = p((jo, he) => {
    var Gt = Object.prototype.toString, Wt = Function.prototype.toString, _t = /^\s*(?:function)?\*/, me = N()(), Or = Object.getPrototypeOf, zt = function() {
      if (!me)
        return false;
      try {
        return Function("return function*() {}")();
      } catch {
      }
    }, jr;
    he.exports = function(e) {
      if (typeof e != "function")
        return false;
      if (_t.test(Wt.call(e)))
        return true;
      if (!me) {
        var t = Gt.call(e);
        return t === "[object GeneratorFunction]";
      }
      if (!Or)
        return false;
      if (typeof jr > "u") {
        var n = zt();
        jr = n ? Or(n) : false;
      }
      return Or(e) === jr;
    };
  });
  Pe = p((Po, je) => {
    var Oe = Function.prototype.toString, R = typeof Reflect == "object" && Reflect !== null && Reflect.apply, wr, Q;
    if (typeof R == "function" && typeof Object.defineProperty == "function")
      try {
        wr = Object.defineProperty({}, "length", { get: function() {
          throw Q;
        } }), Q = {}, R(function() {
          throw 42;
        }, null, wr);
      } catch (r) {
        r !== Q && (R = null);
      }
    else
      R = null;
    var Vt = /^\s*class\b/, Er = function(e) {
      try {
        var t = Oe.call(e);
        return Vt.test(t);
      } catch {
        return false;
      }
    }, Pr = function(e) {
      try {
        return Er(e) ? false : (Oe.call(e), true);
      } catch {
        return false;
      }
    }, X = Object.prototype.toString, Jt = "[object Object]", Lt = "[object Function]", Ht = "[object GeneratorFunction]", Zt = "[object HTMLAllCollection]", Yt = "[object HTML document.all class]", Kt = "[object HTMLCollection]", Qt = typeof Symbol == "function" && !!Symbol.toStringTag, Xt = !(0 in [,]), Tr = function() {
      return false;
    };
    typeof document == "object" && (ve = document.all, X.call(ve) === X.call(document.all) && (Tr = function(e) {
      if ((Xt || !e) && (typeof e > "u" || typeof e == "object"))
        try {
          var t = X.call(e);
          return (t === Zt || t === Yt || t === Kt || t === Jt) && e("") == null;
        } catch {
        }
      return false;
    }));
    var ve;
    je.exports = R ? function(e) {
      if (Tr(e))
        return true;
      if (!e || typeof e != "function" && typeof e != "object")
        return false;
      try {
        R(e, null, wr);
      } catch (t) {
        if (t !== Q)
          return false;
      }
      return !Er(e) && Pr(e);
    } : function(e) {
      if (Tr(e))
        return true;
      if (!e || typeof e != "function" && typeof e != "object")
        return false;
      if (Qt)
        return Pr(e);
      if (Er(e))
        return false;
      var t = X.call(e);
      return t !== Lt && t !== Ht && !/^\[object HTML/.test(t) ? false : Pr(e);
    };
  });
  Fr = p((wo, Ee) => {
    var rn = Pe(), en = Object.prototype.toString, we = Object.prototype.hasOwnProperty, tn = function(e, t, n) {
      for (var o = 0, i = e.length;o < i; o++)
        we.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
    }, nn = function(e, t, n) {
      for (var o = 0, i = e.length;o < i; o++)
        n == null ? t(e.charAt(o), o, e) : t.call(n, e.charAt(o), o, e);
    }, on = function(e, t, n) {
      for (var o in e)
        we.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
    }, an = function(e, t, n) {
      if (!rn(t))
        throw new TypeError("iterator must be a function");
      var o;
      arguments.length >= 3 && (o = n), en.call(e) === "[object Array]" ? tn(e, t, o) : typeof e == "string" ? nn(e, t, o) : on(e, t, o);
    };
    Ee.exports = an;
  });
  Br = p((Eo, Te) => {
    var Ir = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], fn = typeof globalThis > "u" ? global : globalThis;
    Te.exports = function() {
      for (var e = [], t = 0;t < Ir.length; t++)
        typeof fn[Ir[t]] == "function" && (e[e.length] = Ir[t]);
      return e;
    };
  });
  Ur = p((To, Fe) => {
    var un = H(), rr = un("%Object.getOwnPropertyDescriptor%", true);
    if (rr)
      try {
        rr([], "length");
      } catch {
        rr = null;
      }
    Fe.exports = rr;
  });
  Rr = p((Fo, De) => {
    var Ie = Fr(), yn = Br(), Dr = Y(), sn = Dr("Object.prototype.toString"), Be = N()(), er = Ur(), cn = typeof globalThis > "u" ? global : globalThis, Ue = yn(), pn = Dr("Array.prototype.indexOf", true) || function(e, t) {
      for (var n = 0;n < e.length; n += 1)
        if (e[n] === t)
          return n;
      return -1;
    }, ln = Dr("String.prototype.slice"), xe = {}, xr = Object.getPrototypeOf;
    Be && er && xr && Ie(Ue, function(r) {
      var e = new cn[r];
      if (Symbol.toStringTag in e) {
        var t = xr(e), n = er(t, Symbol.toStringTag);
        if (!n) {
          var o = xr(t);
          n = er(o, Symbol.toStringTag);
        }
        xe[r] = n.get;
      }
    });
    var gn = function(e) {
      var t = false;
      return Ie(xe, function(n, o) {
        if (!t)
          try {
            t = n.call(e) === o;
          } catch {
          }
      }), t;
    };
    De.exports = function(e) {
      if (!e || typeof e != "object")
        return false;
      if (!Be || !(Symbol.toStringTag in e)) {
        var t = ln(sn(e), 8, -1);
        return pn(Ue, t) > -1;
      }
      return er ? gn(e) : false;
    };
  });
  qe = p((Io, $e) => {
    var ke = Fr(), dn = Br(), Me = Y(), kr = Ur(), bn = Me("Object.prototype.toString"), Ne = N()(), Re = typeof globalThis > "u" ? global : globalThis, An = dn(), mn = Me("String.prototype.slice"), Ce = {}, Mr = Object.getPrototypeOf;
    Ne && kr && Mr && ke(An, function(r) {
      if (typeof Re[r] == "function") {
        var e = new Re[r];
        if (Symbol.toStringTag in e) {
          var t = Mr(e), n = kr(t, Symbol.toStringTag);
          if (!n) {
            var o = Mr(t);
            n = kr(o, Symbol.toStringTag);
          }
          Ce[r] = n.get;
        }
      }
    });
    var hn = function(e) {
      var t = false;
      return ke(Ce, function(n, o) {
        if (!t)
          try {
            var i = n.call(e);
            i === o && (t = i);
          } catch {
          }
      }), t;
    }, Sn = Rr();
    $e.exports = function(e) {
      return Sn(e) ? !Ne || !(Symbol.toStringTag in e) ? mn(bn(e), 8, -1) : hn(e) : false;
    };
  });
  rt = p((u) => {
    var vn = Ae(), On = Se(), A = qe(), Ge = Rr();
    function k(r) {
      return r.call.bind(r);
    }
    var We = typeof BigInt < "u", _e = typeof Symbol < "u", b = k(Object.prototype.toString), jn = k(Number.prototype.valueOf), Pn = k(String.prototype.valueOf), wn = k(Boolean.prototype.valueOf);
    We && (ze = k(BigInt.prototype.valueOf));
    var ze;
    _e && (Ve = k(Symbol.prototype.valueOf));
    var Ve;
    function q(r, e) {
      if (typeof r != "object")
        return false;
      try {
        return e(r), true;
      } catch {
        return false;
      }
    }
    u.isArgumentsObject = vn;
    u.isGeneratorFunction = On;
    u.isTypedArray = Ge;
    function En(r) {
      return typeof Promise < "u" && r instanceof Promise || r !== null && typeof r == "object" && typeof r.then == "function" && typeof r.catch == "function";
    }
    u.isPromise = En;
    function Tn(r) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(r) : Ge(r) || Le(r);
    }
    u.isArrayBufferView = Tn;
    function Fn(r) {
      return A(r) === "Uint8Array";
    }
    u.isUint8Array = Fn;
    function In(r) {
      return A(r) === "Uint8ClampedArray";
    }
    u.isUint8ClampedArray = In;
    function Bn(r) {
      return A(r) === "Uint16Array";
    }
    u.isUint16Array = Bn;
    function Un(r) {
      return A(r) === "Uint32Array";
    }
    u.isUint32Array = Un;
    function xn(r) {
      return A(r) === "Int8Array";
    }
    u.isInt8Array = xn;
    function Dn(r) {
      return A(r) === "Int16Array";
    }
    u.isInt16Array = Dn;
    function Rn(r) {
      return A(r) === "Int32Array";
    }
    u.isInt32Array = Rn;
    function kn(r) {
      return A(r) === "Float32Array";
    }
    u.isFloat32Array = kn;
    function Mn(r) {
      return A(r) === "Float64Array";
    }
    u.isFloat64Array = Mn;
    function Nn(r) {
      return A(r) === "BigInt64Array";
    }
    u.isBigInt64Array = Nn;
    function Cn(r) {
      return A(r) === "BigUint64Array";
    }
    u.isBigUint64Array = Cn;
    function tr(r) {
      return b(r) === "[object Map]";
    }
    tr.working = typeof Map < "u" && tr(new Map);
    function $n(r) {
      return typeof Map > "u" ? false : tr.working ? tr(r) : r instanceof Map;
    }
    u.isMap = $n;
    function nr(r) {
      return b(r) === "[object Set]";
    }
    nr.working = typeof Set < "u" && nr(new Set);
    function qn(r) {
      return typeof Set > "u" ? false : nr.working ? nr(r) : r instanceof Set;
    }
    u.isSet = qn;
    function or(r) {
      return b(r) === "[object WeakMap]";
    }
    or.working = typeof WeakMap < "u" && or(new WeakMap);
    function Gn(r) {
      return typeof WeakMap > "u" ? false : or.working ? or(r) : r instanceof WeakMap;
    }
    u.isWeakMap = Gn;
    function Cr(r) {
      return b(r) === "[object WeakSet]";
    }
    Cr.working = typeof WeakSet < "u" && Cr(new WeakSet);
    function Wn(r) {
      return Cr(r);
    }
    u.isWeakSet = Wn;
    function ir(r) {
      return b(r) === "[object ArrayBuffer]";
    }
    ir.working = typeof ArrayBuffer < "u" && ir(new ArrayBuffer);
    function Je(r) {
      return typeof ArrayBuffer > "u" ? false : ir.working ? ir(r) : r instanceof ArrayBuffer;
    }
    u.isArrayBuffer = Je;
    function ar(r) {
      return b(r) === "[object DataView]";
    }
    ar.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && ar(new DataView(new ArrayBuffer(1), 0, 1));
    function Le(r) {
      return typeof DataView > "u" ? false : ar.working ? ar(r) : r instanceof DataView;
    }
    u.isDataView = Le;
    var Nr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : undefined;
    function $(r) {
      return b(r) === "[object SharedArrayBuffer]";
    }
    function He(r) {
      return typeof Nr > "u" ? false : (typeof $.working > "u" && ($.working = $(new Nr)), $.working ? $(r) : r instanceof Nr);
    }
    u.isSharedArrayBuffer = He;
    function _n(r) {
      return b(r) === "[object AsyncFunction]";
    }
    u.isAsyncFunction = _n;
    function zn(r) {
      return b(r) === "[object Map Iterator]";
    }
    u.isMapIterator = zn;
    function Vn(r) {
      return b(r) === "[object Set Iterator]";
    }
    u.isSetIterator = Vn;
    function Jn(r) {
      return b(r) === "[object Generator]";
    }
    u.isGeneratorObject = Jn;
    function Ln(r) {
      return b(r) === "[object WebAssembly.Module]";
    }
    u.isWebAssemblyCompiledModule = Ln;
    function Ze(r) {
      return q(r, jn);
    }
    u.isNumberObject = Ze;
    function Ye(r) {
      return q(r, Pn);
    }
    u.isStringObject = Ye;
    function Ke(r) {
      return q(r, wn);
    }
    u.isBooleanObject = Ke;
    function Qe(r) {
      return We && q(r, ze);
    }
    u.isBigIntObject = Qe;
    function Xe(r) {
      return _e && q(r, Ve);
    }
    u.isSymbolObject = Xe;
    function Hn(r) {
      return Ze(r) || Ye(r) || Ke(r) || Qe(r) || Xe(r);
    }
    u.isBoxedPrimitive = Hn;
    function Zn(r) {
      return typeof Uint8Array < "u" && (Je(r) || He(r));
    }
    u.isAnyArrayBuffer = Zn;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(r) {
      Object.defineProperty(u, r, { enumerable: false, value: function() {
        throw new Error(r + " is not supported in userland");
      } });
    });
  });
  tt = p((Uo, et) => {
    et.exports = function(e) {
      return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
    };
  });
  nt = p((xo, $r) => {
    typeof Object.create == "function" ? $r.exports = function(e, t) {
      t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
    } : $r.exports = function(e, t) {
      if (t) {
        e.super_ = t;
        var n = function() {
        };
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
      }
    };
  });
  yt = p((y) => {
    var ot = Object.getOwnPropertyDescriptors || function(e) {
      for (var t = Object.keys(e), n = {}, o = 0;o < t.length; o++)
        n[t[o]] = Object.getOwnPropertyDescriptor(e, t[o]);
      return n;
    }, Yn = /%[sdj%]/g;
    y.format = function(r) {
      if (!lr(r)) {
        for (var e = [], t = 0;t < arguments.length; t++)
          e.push(h(arguments[t]));
        return e.join(" ");
      }
      for (var t = 1, n = arguments, o = n.length, i = String(r).replace(Yn, function(f) {
        if (f === "%%")
          return "%";
        if (t >= o)
          return f;
        switch (f) {
          case "%s":
            return String(n[t++]);
          case "%d":
            return Number(n[t++]);
          case "%j":
            try {
              return JSON.stringify(n[t++]);
            } catch {
              return "[Circular]";
            }
          default:
            return f;
        }
      }), a = n[t];t < o; a = n[++t])
        pr(a) || !M(a) ? i += " " + a : i += " " + h(a);
      return i;
    };
    y.deprecate = function(r, e) {
      if (typeof process < "u" && process.noDeprecation === true)
        return r;
      if (typeof process > "u")
        return function() {
          return y.deprecate(r, e).apply(this, arguments);
        };
      var t = false;
      function n() {
        if (!t) {
          if (process.throwDeprecation)
            throw new Error(e);
          process.traceDeprecation ? console.trace(e) : console.error(e), t = true;
        }
        return r.apply(this, arguments);
      }
      return n;
    };
    var fr = {}, it = /^$/;
    process.env.NODE_DEBUG && (ur = process.env.NODE_DEBUG, ur = ur.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), it = new RegExp("^" + ur + "$", "i"));
    var ur;
    y.debuglog = function(r) {
      if (r = r.toUpperCase(), !fr[r])
        if (it.test(r)) {
          var e = process.pid;
          fr[r] = function() {
            var t = y.format.apply(y, arguments);
            console.error("%s %d: %s", r, e, t);
          };
        } else
          fr[r] = function() {
          };
      return fr[r];
    };
    function h(r, e) {
      var t = { seen: [], stylize: Qn };
      return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), _r(e) ? t.showHidden = e : e && y._extend(t, e), w(t.showHidden) && (t.showHidden = false), w(t.depth) && (t.depth = 2), w(t.colors) && (t.colors = false), w(t.customInspect) && (t.customInspect = true), t.colors && (t.stylize = Kn), sr(t, r, t.depth);
    }
    y.inspect = h;
    h.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
    h.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
    function Kn(r, e) {
      var t = h.styles[e];
      return t ? "\x1B[" + h.colors[t][0] + "m" + r + "\x1B[" + h.colors[t][1] + "m" : r;
    }
    function Qn(r, e) {
      return r;
    }
    function Xn(r) {
      var e = {};
      return r.forEach(function(t, n) {
        e[t] = true;
      }), e;
    }
    function sr(r, e, t) {
      if (r.customInspect && e && yr(e.inspect) && e.inspect !== y.inspect && !(e.constructor && e.constructor.prototype === e)) {
        var n = e.inspect(t, r);
        return lr(n) || (n = sr(r, n, t)), n;
      }
      var o = ro(r, e);
      if (o)
        return o;
      var i = Object.keys(e), a = Xn(i);
      if (r.showHidden && (i = Object.getOwnPropertyNames(e)), W(e) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
        return qr(e);
      if (i.length === 0) {
        if (yr(e)) {
          var f = e.name ? ": " + e.name : "";
          return r.stylize("[Function" + f + "]", "special");
        }
        if (G(e))
          return r.stylize(RegExp.prototype.toString.call(e), "regexp");
        if (cr(e))
          return r.stylize(Date.prototype.toString.call(e), "date");
        if (W(e))
          return qr(e);
      }
      var c = "", l = false, g = ["{", "}"];
      if (at(e) && (l = true, g = ["[", "]"]), yr(e)) {
        var S = e.name ? ": " + e.name : "";
        c = " [Function" + S + "]";
      }
      if (G(e) && (c = " " + RegExp.prototype.toString.call(e)), cr(e) && (c = " " + Date.prototype.toUTCString.call(e)), W(e) && (c = " " + qr(e)), i.length === 0 && (!l || e.length == 0))
        return g[0] + c + g[1];
      if (t < 0)
        return G(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special");
      r.seen.push(e);
      var d;
      return l ? d = eo(r, e, t, a, i) : d = i.map(function(T) {
        return Wr(r, e, t, a, T, l);
      }), r.seen.pop(), to(d, c, g);
    }
    function ro(r, e) {
      if (w(e))
        return r.stylize("undefined", "undefined");
      if (lr(e)) {
        var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return r.stylize(t, "string");
      }
      if (ft(e))
        return r.stylize("" + e, "number");
      if (_r(e))
        return r.stylize("" + e, "boolean");
      if (pr(e))
        return r.stylize("null", "null");
    }
    function qr(r) {
      return "[" + Error.prototype.toString.call(r) + "]";
    }
    function eo(r, e, t, n, o) {
      for (var i = [], a = 0, f = e.length;a < f; ++a)
        ut(e, String(a)) ? i.push(Wr(r, e, t, n, String(a), true)) : i.push("");
      return o.forEach(function(c) {
        c.match(/^\d+$/) || i.push(Wr(r, e, t, n, c, true));
      }), i;
    }
    function Wr(r, e, t, n, o, i) {
      var a, f, c;
      if (c = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }, c.get ? c.set ? f = r.stylize("[Getter/Setter]", "special") : f = r.stylize("[Getter]", "special") : c.set && (f = r.stylize("[Setter]", "special")), ut(n, o) || (a = "[" + o + "]"), f || (r.seen.indexOf(c.value) < 0 ? (pr(t) ? f = sr(r, c.value, null) : f = sr(r, c.value, t - 1), f.indexOf(`
`) > -1 && (i ? f = f.split(`
`).map(function(l) {
        return "  " + l;
      }).join(`
`).slice(2) : f = `
` + f.split(`
`).map(function(l) {
        return "   " + l;
      }).join(`
`))) : f = r.stylize("[Circular]", "special")), w(a)) {
        if (i && o.match(/^\d+$/))
          return f;
        a = JSON.stringify("" + o), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.slice(1, -1), a = r.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = r.stylize(a, "string"));
      }
      return a + ": " + f;
    }
    function to(r, e, t) {
      var n = 0, o = r.reduce(function(i, a) {
        return n++, a.indexOf(`
`) >= 0 && n++, i + a.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return o > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + r.join(`,
  `) + " " + t[1] : t[0] + e + " " + r.join(", ") + " " + t[1];
    }
    y.types = rt();
    function at(r) {
      return Array.isArray(r);
    }
    y.isArray = at;
    function _r(r) {
      return typeof r == "boolean";
    }
    y.isBoolean = _r;
    function pr(r) {
      return r === null;
    }
    y.isNull = pr;
    function no(r) {
      return r == null;
    }
    y.isNullOrUndefined = no;
    function ft(r) {
      return typeof r == "number";
    }
    y.isNumber = ft;
    function lr(r) {
      return typeof r == "string";
    }
    y.isString = lr;
    function oo(r) {
      return typeof r == "symbol";
    }
    y.isSymbol = oo;
    function w(r) {
      return r === undefined;
    }
    y.isUndefined = w;
    function G(r) {
      return M(r) && zr(r) === "[object RegExp]";
    }
    y.isRegExp = G;
    y.types.isRegExp = G;
    function M(r) {
      return typeof r == "object" && r !== null;
    }
    y.isObject = M;
    function cr(r) {
      return M(r) && zr(r) === "[object Date]";
    }
    y.isDate = cr;
    y.types.isDate = cr;
    function W(r) {
      return M(r) && (zr(r) === "[object Error]" || r instanceof Error);
    }
    y.isError = W;
    y.types.isNativeError = W;
    function yr(r) {
      return typeof r == "function";
    }
    y.isFunction = yr;
    function io(r) {
      return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || typeof r == "symbol" || typeof r > "u";
    }
    y.isPrimitive = io;
    y.isBuffer = tt();
    function zr(r) {
      return Object.prototype.toString.call(r);
    }
    function Gr(r) {
      return r < 10 ? "0" + r.toString(10) : r.toString(10);
    }
    var ao = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function fo() {
      var r = new Date, e = [Gr(r.getHours()), Gr(r.getMinutes()), Gr(r.getSeconds())].join(":");
      return [r.getDate(), ao[r.getMonth()], e].join(" ");
    }
    y.log = function() {
      console.log("%s - %s", fo(), y.format.apply(y, arguments));
    };
    y.inherits = nt();
    y._extend = function(r, e) {
      if (!e || !M(e))
        return r;
      for (var t = Object.keys(e), n = t.length;n--; )
        r[t[n]] = e[t[n]];
      return r;
    };
    function ut(r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }
    var P = typeof Symbol < "u" ? Symbol("util.promisify.custom") : undefined;
    y.promisify = function(e) {
      if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (P && e[P]) {
        var t = e[P];
        if (typeof t != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, P, { value: t, enumerable: false, writable: false, configurable: true }), t;
      }
      function t() {
        for (var n, o, i = new Promise(function(c, l) {
          n = c, o = l;
        }), a = [], f = 0;f < arguments.length; f++)
          a.push(arguments[f]);
        a.push(function(c, l) {
          c ? o(c) : n(l);
        });
        try {
          e.apply(this, a);
        } catch (c) {
          o(c);
        }
        return i;
      }
      return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), P && Object.defineProperty(t, P, { value: t, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t, ot(e));
    };
    y.promisify.custom = P;
    function uo(r, e) {
      if (!r) {
        var t = new Error("Promise was rejected with a falsy value");
        t.reason = r, r = t;
      }
      return e(r);
    }
    function yo(r) {
      if (typeof r != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function e() {
        for (var t = [], n = 0;n < arguments.length; n++)
          t.push(arguments[n]);
        var o = t.pop();
        if (typeof o != "function")
          throw new TypeError("The last argument must be of type Function");
        var i = this, a = function() {
          return o.apply(i, arguments);
        };
        r.apply(this, t).then(function(f) {
          process.nextTick(a.bind(null, null, f));
        }, function(f) {
          process.nextTick(uo.bind(null, f, a));
        });
      }
      return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Object.defineProperties(e, ot(r)), e;
    }
    y.callbackify = yo;
  });
  E = {};
  At(E, { TextDecoder: () => ct, TextEncoder: () => st, default: () => so });
  F(E, mt(yt()));
  st = globalThis.TextEncoder;
  ct = globalThis.TextDecoder;
  so = { TextEncoder: st, TextDecoder: ct };
});

// node:path
var exports_path = {};
__export(exports_path, {
  default: () => {
    {
      return q;
    }
  }
});
var L, b, z2, D, T, R, _, E2, C, A, y, h, m, q;
var init_path = __esm(() => {
  L = Object.create;
  b = Object.defineProperty;
  z2 = Object.getOwnPropertyDescriptor;
  D = Object.getOwnPropertyNames;
  T = Object.getPrototypeOf;
  R = Object.prototype.hasOwnProperty;
  _ = (f, e) => () => (e || f((e = { exports: {} }).exports, e), e.exports);
  E2 = (f, e) => {
    for (var r in e)
      b(f, r, { get: e[r], enumerable: true });
  };
  C = (f, e, r, l) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let i of D(e))
        !R.call(f, i) && i !== r && b(f, i, { get: () => e[i], enumerable: !(l = z2(e, i)) || l.enumerable });
    return f;
  };
  A = (f, e, r) => (C(f, e, "default"), r && C(r, e, "default"));
  y = (f, e, r) => (r = f != null ? L(T(f)) : {}, C(e || !f || !f.__esModule ? b(r, "default", { value: f, enumerable: true }) : r, f));
  h = _((F2, S) => {
    function c(f) {
      if (typeof f != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(f));
    }
    function w(f, e) {
      for (var r = "", l = 0, i = -1, s = 0, n, t = 0;t <= f.length; ++t) {
        if (t < f.length)
          n = f.charCodeAt(t);
        else {
          if (n === 47)
            break;
          n = 47;
        }
        if (n === 47) {
          if (!(i === t - 1 || s === 1))
            if (i !== t - 1 && s === 2) {
              if (r.length < 2 || l !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
                if (r.length > 2) {
                  var a = r.lastIndexOf("/");
                  if (a !== r.length - 1) {
                    a === -1 ? (r = "", l = 0) : (r = r.slice(0, a), l = r.length - 1 - r.lastIndexOf("/")), i = t, s = 0;
                    continue;
                  }
                } else if (r.length === 2 || r.length === 1) {
                  r = "", l = 0, i = t, s = 0;
                  continue;
                }
              }
              e && (r.length > 0 ? r += "/.." : r = "..", l = 2);
            } else
              r.length > 0 ? r += "/" + f.slice(i + 1, t) : r = f.slice(i + 1, t), l = t - i - 1;
          i = t, s = 0;
        } else
          n === 46 && s !== -1 ? ++s : s = -1;
      }
      return r;
    }
    function J(f, e) {
      var r = e.dir || e.root, l = e.base || (e.name || "") + (e.ext || "");
      return r ? r === e.root ? r + l : r + f + l : l;
    }
    var g = { resolve: function() {
      for (var e = "", r = false, l, i = arguments.length - 1;i >= -1 && !r; i--) {
        var s;
        i >= 0 ? s = arguments[i] : (l === undefined && (l = process.cwd()), s = l), c(s), s.length !== 0 && (e = s + "/" + e, r = s.charCodeAt(0) === 47);
      }
      return e = w(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    }, normalize: function(e) {
      if (c(e), e.length === 0)
        return ".";
      var r = e.charCodeAt(0) === 47, l = e.charCodeAt(e.length - 1) === 47;
      return e = w(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && l && (e += "/"), r ? "/" + e : e;
    }, isAbsolute: function(e) {
      return c(e), e.length > 0 && e.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var e, r = 0;r < arguments.length; ++r) {
        var l = arguments[r];
        c(l), l.length > 0 && (e === undefined ? e = l : e += "/" + l);
      }
      return e === undefined ? "." : g.normalize(e);
    }, relative: function(e, r) {
      if (c(e), c(r), e === r || (e = g.resolve(e), r = g.resolve(r), e === r))
        return "";
      for (var l = 1;l < e.length && e.charCodeAt(l) === 47; ++l)
        ;
      for (var i = e.length, s = i - l, n = 1;n < r.length && r.charCodeAt(n) === 47; ++n)
        ;
      for (var t = r.length, a = t - n, v = s < a ? s : a, u = -1, o = 0;o <= v; ++o) {
        if (o === v) {
          if (a > v) {
            if (r.charCodeAt(n + o) === 47)
              return r.slice(n + o + 1);
            if (o === 0)
              return r.slice(n + o);
          } else
            s > v && (e.charCodeAt(l + o) === 47 ? u = o : o === 0 && (u = 0));
          break;
        }
        var k = e.charCodeAt(l + o), P = r.charCodeAt(n + o);
        if (k !== P)
          break;
        k === 47 && (u = o);
      }
      var d = "";
      for (o = l + u + 1;o <= i; ++o)
        (o === i || e.charCodeAt(o) === 47) && (d.length === 0 ? d += ".." : d += "/..");
      return d.length > 0 ? d + r.slice(n + u) : (n += u, r.charCodeAt(n) === 47 && ++n, r.slice(n));
    }, _makeLong: function(e) {
      return e;
    }, dirname: function(e) {
      if (c(e), e.length === 0)
        return ".";
      for (var r = e.charCodeAt(0), l = r === 47, i = -1, s = true, n = e.length - 1;n >= 1; --n)
        if (r = e.charCodeAt(n), r === 47) {
          if (!s) {
            i = n;
            break;
          }
        } else
          s = false;
      return i === -1 ? l ? "/" : "." : l && i === 1 ? "//" : e.slice(0, i);
    }, basename: function(e, r) {
      if (r !== undefined && typeof r != "string")
        throw new TypeError('"ext" argument must be a string');
      c(e);
      var l = 0, i = -1, s = true, n;
      if (r !== undefined && r.length > 0 && r.length <= e.length) {
        if (r.length === e.length && r === e)
          return "";
        var t = r.length - 1, a = -1;
        for (n = e.length - 1;n >= 0; --n) {
          var v = e.charCodeAt(n);
          if (v === 47) {
            if (!s) {
              l = n + 1;
              break;
            }
          } else
            a === -1 && (s = false, a = n + 1), t >= 0 && (v === r.charCodeAt(t) ? --t === -1 && (i = n) : (t = -1, i = a));
        }
        return l === i ? i = a : i === -1 && (i = e.length), e.slice(l, i);
      } else {
        for (n = e.length - 1;n >= 0; --n)
          if (e.charCodeAt(n) === 47) {
            if (!s) {
              l = n + 1;
              break;
            }
          } else
            i === -1 && (s = false, i = n + 1);
        return i === -1 ? "" : e.slice(l, i);
      }
    }, extname: function(e) {
      c(e);
      for (var r = -1, l = 0, i = -1, s = true, n = 0, t = e.length - 1;t >= 0; --t) {
        var a = e.charCodeAt(t);
        if (a === 47) {
          if (!s) {
            l = t + 1;
            break;
          }
          continue;
        }
        i === -1 && (s = false, i = t + 1), a === 46 ? r === -1 ? r = t : n !== 1 && (n = 1) : r !== -1 && (n = -1);
      }
      return r === -1 || i === -1 || n === 0 || n === 1 && r === i - 1 && r === l + 1 ? "" : e.slice(r, i);
    }, format: function(e) {
      if (e === null || typeof e != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
      return J("/", e);
    }, parse: function(e) {
      c(e);
      var r = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0)
        return r;
      var l = e.charCodeAt(0), i = l === 47, s;
      i ? (r.root = "/", s = 1) : s = 0;
      for (var n = -1, t = 0, a = -1, v = true, u = e.length - 1, o = 0;u >= s; --u) {
        if (l = e.charCodeAt(u), l === 47) {
          if (!v) {
            t = u + 1;
            break;
          }
          continue;
        }
        a === -1 && (v = false, a = u + 1), l === 46 ? n === -1 ? n = u : o !== 1 && (o = 1) : n !== -1 && (o = -1);
      }
      return n === -1 || a === -1 || o === 0 || o === 1 && n === a - 1 && n === t + 1 ? a !== -1 && (t === 0 && i ? r.base = r.name = e.slice(1, a) : r.base = r.name = e.slice(t, a)) : (t === 0 && i ? (r.name = e.slice(1, n), r.base = e.slice(1, a)) : (r.name = e.slice(t, n), r.base = e.slice(t, a)), r.ext = e.slice(n, a)), t > 0 ? r.dir = e.slice(0, t - 1) : i && (r.dir = "/"), r;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    g.posix = g;
    S.exports = g;
  });
  m = {};
  E2(m, { default: () => q });
  A(m, y(h()));
  q = y(h());
});

// node_modules/yargs-parser/build/index.cjs
var require_build = __commonJS((exports, module) => {
  var camelCase2 = function(str) {
    const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase();
    if (!isCamelCase) {
      str = str.toLowerCase();
    }
    if (str.indexOf("-") === -1 && str.indexOf("_") === -1) {
      return str;
    } else {
      let camelcase = "";
      let nextChrUpper = false;
      const leadingHyphens = str.match(/^-+/);
      for (let i = leadingHyphens ? leadingHyphens[0].length : 0;i < str.length; i++) {
        let chr = str.charAt(i);
        if (nextChrUpper) {
          nextChrUpper = false;
          chr = chr.toUpperCase();
        }
        if (i !== 0 && (chr === "-" || chr === "_")) {
          nextChrUpper = true;
        } else if (chr !== "-" && chr !== "_") {
          camelcase += chr;
        }
      }
      return camelcase;
    }
  };
  var decamelize = function(str, joinString) {
    const lowercase = str.toLowerCase();
    joinString = joinString || "-";
    let notCamelcase = "";
    for (let i = 0;i < str.length; i++) {
      const chrLower = lowercase.charAt(i);
      const chrString = str.charAt(i);
      if (chrLower !== chrString && i > 0) {
        notCamelcase += `${joinString}${lowercase.charAt(i)}`;
      } else {
        notCamelcase += chrString;
      }
    }
    return notCamelcase;
  };
  var looksLikeNumber = function(x) {
    if (x === null || x === undefined)
      return false;
    if (typeof x === "number")
      return true;
    if (/^0x[0-9a-f]+$/i.test(x))
      return true;
    if (/^0[^.]/.test(x))
      return false;
    return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
  };
  var tokenizeArgString = function(argString) {
    if (Array.isArray(argString)) {
      return argString.map((e) => typeof e !== "string" ? e + "" : e);
    }
    argString = argString.trim();
    let i = 0;
    let prevC = null;
    let c = null;
    let opening = null;
    const args = [];
    for (let ii = 0;ii < argString.length; ii++) {
      prevC = c;
      c = argString.charAt(ii);
      if (c === " " && !opening) {
        if (!(prevC === " ")) {
          i++;
        }
        continue;
      }
      if (c === opening) {
        opening = null;
      } else if ((c === "'" || c === '"') && !opening) {
        opening = c;
      }
      if (!args[i])
        args[i] = "";
      args[i] += c;
    }
    return args;
  };
  var combineAliases = function(aliases) {
    const aliasArrays = [];
    const combined = Object.create(null);
    let change = true;
    Object.keys(aliases).forEach(function(key) {
      aliasArrays.push([].concat(aliases[key], key));
    });
    while (change) {
      change = false;
      for (let i = 0;i < aliasArrays.length; i++) {
        for (let ii = i + 1;ii < aliasArrays.length; ii++) {
          const intersect = aliasArrays[i].filter(function(v) {
            return aliasArrays[ii].indexOf(v) !== -1;
          });
          if (intersect.length) {
            aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii]);
            aliasArrays.splice(ii, 1);
            change = true;
            break;
          }
        }
      }
    }
    aliasArrays.forEach(function(aliasArray) {
      aliasArray = aliasArray.filter(function(v, i, self) {
        return self.indexOf(v) === i;
      });
      const lastAlias = aliasArray.pop();
      if (lastAlias !== undefined && typeof lastAlias === "string") {
        combined[lastAlias] = aliasArray;
      }
    });
    return combined;
  };
  var increment = function(orig) {
    return orig !== undefined ? orig + 1 : 1;
  };
  var sanitizeKey = function(key) {
    if (key === "__proto__")
      return "___proto___";
    return key;
  };
  var stripQuotes = function(val) {
    return typeof val === "string" && (val[0] === "'" || val[0] === '"') && val[val.length - 1] === val[0] ? val.substring(1, val.length - 1) : val;
  };
  var util2 = (init_util(), __toCommonJS(exports_util));
  var path = (init_path(), __toCommonJS(exports_path));
  var fs = (()=>({}));
  var DefaultValuesForTypeKey;
  (function(DefaultValuesForTypeKey2) {
    DefaultValuesForTypeKey2["BOOLEAN"] = "boolean";
    DefaultValuesForTypeKey2["STRING"] = "string";
    DefaultValuesForTypeKey2["NUMBER"] = "number";
    DefaultValuesForTypeKey2["ARRAY"] = "array";
  })(DefaultValuesForTypeKey || (DefaultValuesForTypeKey = {}));
  var mixin;

  class YargsParser {
    constructor(_mixin) {
      mixin = _mixin;
    }
    parse(argsInput, options) {
      const opts = Object.assign({
        alias: undefined,
        array: undefined,
        boolean: undefined,
        config: undefined,
        configObjects: undefined,
        configuration: undefined,
        coerce: undefined,
        count: undefined,
        default: undefined,
        envPrefix: undefined,
        narg: undefined,
        normalize: undefined,
        string: undefined,
        number: undefined,
        __: undefined,
        key: undefined
      }, options);
      const args = tokenizeArgString(argsInput);
      const inputIsString = typeof argsInput === "string";
      const aliases = combineAliases(Object.assign(Object.create(null), opts.alias));
      const configuration = Object.assign({
        "boolean-negation": true,
        "camel-case-expansion": true,
        "combine-arrays": false,
        "dot-notation": true,
        "duplicate-arguments-array": true,
        "flatten-duplicate-arrays": true,
        "greedy-arrays": true,
        "halt-at-non-option": false,
        "nargs-eats-options": false,
        "negation-prefix": "no-",
        "parse-numbers": true,
        "parse-positional-numbers": true,
        "populate--": false,
        "set-placeholder-key": false,
        "short-option-groups": true,
        "strip-aliased": false,
        "strip-dashed": false,
        "unknown-options-as-args": false
      }, opts.configuration);
      const defaults = Object.assign(Object.create(null), opts.default);
      const configObjects = opts.configObjects || [];
      const envPrefix = opts.envPrefix;
      const notFlagsOption = configuration["populate--"];
      const notFlagsArgv = notFlagsOption ? "--" : "_";
      const newAliases = Object.create(null);
      const defaulted = Object.create(null);
      const __ = opts.__ || mixin.format;
      const flags = {
        aliases: Object.create(null),
        arrays: Object.create(null),
        bools: Object.create(null),
        strings: Object.create(null),
        numbers: Object.create(null),
        counts: Object.create(null),
        normalize: Object.create(null),
        configs: Object.create(null),
        nargs: Object.create(null),
        coercions: Object.create(null),
        keys: []
      };
      const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/;
      const negatedBoolean = new RegExp("^--" + configuration["negation-prefix"] + "(.+)");
      [].concat(opts.array || []).filter(Boolean).forEach(function(opt) {
        const key = typeof opt === "object" ? opt.key : opt;
        const assignment = Object.keys(opt).map(function(key2) {
          const arrayFlagKeys = {
            boolean: "bools",
            string: "strings",
            number: "numbers"
          };
          return arrayFlagKeys[key2];
        }).filter(Boolean).pop();
        if (assignment) {
          flags[assignment][key] = true;
        }
        flags.arrays[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts.boolean || []).filter(Boolean).forEach(function(key) {
        flags.bools[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts.string || []).filter(Boolean).forEach(function(key) {
        flags.strings[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts.number || []).filter(Boolean).forEach(function(key) {
        flags.numbers[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts.count || []).filter(Boolean).forEach(function(key) {
        flags.counts[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts.normalize || []).filter(Boolean).forEach(function(key) {
        flags.normalize[key] = true;
        flags.keys.push(key);
      });
      if (typeof opts.narg === "object") {
        Object.entries(opts.narg).forEach(([key, value]) => {
          if (typeof value === "number") {
            flags.nargs[key] = value;
            flags.keys.push(key);
          }
        });
      }
      if (typeof opts.coerce === "object") {
        Object.entries(opts.coerce).forEach(([key, value]) => {
          if (typeof value === "function") {
            flags.coercions[key] = value;
            flags.keys.push(key);
          }
        });
      }
      if (typeof opts.config !== "undefined") {
        if (Array.isArray(opts.config) || typeof opts.config === "string") {
          [].concat(opts.config).filter(Boolean).forEach(function(key) {
            flags.configs[key] = true;
          });
        } else if (typeof opts.config === "object") {
          Object.entries(opts.config).forEach(([key, value]) => {
            if (typeof value === "boolean" || typeof value === "function") {
              flags.configs[key] = value;
            }
          });
        }
      }
      extendAliases(opts.key, aliases, opts.default, flags.arrays);
      Object.keys(defaults).forEach(function(key) {
        (flags.aliases[key] || []).forEach(function(alias) {
          defaults[alias] = defaults[key];
        });
      });
      let error = null;
      checkConfiguration();
      let notFlags = [];
      const argv = Object.assign(Object.create(null), { _: [] });
      const argvReturn = {};
      for (let i = 0;i < args.length; i++) {
        const arg = args[i];
        const truncatedArg = arg.replace(/^-{3,}/, "---");
        let broken;
        let key;
        let letters;
        let m2;
        let next;
        let value;
        if (arg !== "--" && /^-/.test(arg) && isUnknownOptionAsArg(arg)) {
          pushPositional(arg);
        } else if (truncatedArg.match(/^---+(=|$)/)) {
          pushPositional(arg);
          continue;
        } else if (arg.match(/^--.+=/) || !configuration["short-option-groups"] && arg.match(/^-.+=/)) {
          m2 = arg.match(/^--?([^=]+)=([\s\S]*)$/);
          if (m2 !== null && Array.isArray(m2) && m2.length >= 3) {
            if (checkAllAliases(m2[1], flags.arrays)) {
              i = eatArray(i, m2[1], args, m2[2]);
            } else if (checkAllAliases(m2[1], flags.nargs) !== false) {
              i = eatNargs(i, m2[1], args, m2[2]);
            } else {
              setArg(m2[1], m2[2], true);
            }
          }
        } else if (arg.match(negatedBoolean) && configuration["boolean-negation"]) {
          m2 = arg.match(negatedBoolean);
          if (m2 !== null && Array.isArray(m2) && m2.length >= 2) {
            key = m2[1];
            setArg(key, checkAllAliases(key, flags.arrays) ? [false] : false);
          }
        } else if (arg.match(/^--.+/) || !configuration["short-option-groups"] && arg.match(/^-[^-]+/)) {
          m2 = arg.match(/^--?(.+)/);
          if (m2 !== null && Array.isArray(m2) && m2.length >= 2) {
            key = m2[1];
            if (checkAllAliases(key, flags.arrays)) {
              i = eatArray(i, key, args);
            } else if (checkAllAliases(key, flags.nargs) !== false) {
              i = eatNargs(i, key, args);
            } else {
              next = args[i + 1];
              if (next !== undefined && (!next.match(/^-/) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                setArg(key, next);
                i++;
              } else if (/^(true|false)$/.test(next)) {
                setArg(key, next);
                i++;
              } else {
                setArg(key, defaultValue(key));
              }
            }
          }
        } else if (arg.match(/^-.\..+=/)) {
          m2 = arg.match(/^-([^=]+)=([\s\S]*)$/);
          if (m2 !== null && Array.isArray(m2) && m2.length >= 3) {
            setArg(m2[1], m2[2]);
          }
        } else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
          next = args[i + 1];
          m2 = arg.match(/^-(.\..+)/);
          if (m2 !== null && Array.isArray(m2) && m2.length >= 2) {
            key = m2[1];
            if (next !== undefined && !next.match(/^-/) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
              setArg(key, next);
              i++;
            } else {
              setArg(key, defaultValue(key));
            }
          }
        } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
          letters = arg.slice(1, -1).split("");
          broken = false;
          for (let j = 0;j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (letters[j + 1] && letters[j + 1] === "=") {
              value = arg.slice(j + 3);
              key = letters[j];
              if (checkAllAliases(key, flags.arrays)) {
                i = eatArray(i, key, args, value);
              } else if (checkAllAliases(key, flags.nargs) !== false) {
                i = eatNargs(i, key, args, value);
              } else {
                setArg(key, value);
              }
              broken = true;
              break;
            }
            if (next === "-") {
              setArg(letters[j], next);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) && checkAllAliases(next, flags.bools) === false) {
              setArg(letters[j], next);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], next);
              broken = true;
              break;
            } else {
              setArg(letters[j], defaultValue(letters[j]));
            }
          }
          key = arg.slice(-1)[0];
          if (!broken && key !== "-") {
            if (checkAllAliases(key, flags.arrays)) {
              i = eatArray(i, key, args);
            } else if (checkAllAliases(key, flags.nargs) !== false) {
              i = eatNargs(i, key, args);
            } else {
              next = args[i + 1];
              if (next !== undefined && (!/^(-|--)[^-]/.test(next) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                setArg(key, next);
                i++;
              } else if (/^(true|false)$/.test(next)) {
                setArg(key, next);
                i++;
              } else {
                setArg(key, defaultValue(key));
              }
            }
          }
        } else if (arg.match(/^-[0-9]$/) && arg.match(negative) && checkAllAliases(arg.slice(1), flags.bools)) {
          key = arg.slice(1);
          setArg(key, defaultValue(key));
        } else if (arg === "--") {
          notFlags = args.slice(i + 1);
          break;
        } else if (configuration["halt-at-non-option"]) {
          notFlags = args.slice(i);
          break;
        } else {
          pushPositional(arg);
        }
      }
      applyEnvVars(argv, true);
      applyEnvVars(argv, false);
      setConfig(argv);
      setConfigObjects();
      applyDefaultsAndAliases(argv, flags.aliases, defaults, true);
      applyCoercions(argv);
      if (configuration["set-placeholder-key"])
        setPlaceholderKeys(argv);
      Object.keys(flags.counts).forEach(function(key) {
        if (!hasKey(argv, key.split(".")))
          setArg(key, 0);
      });
      if (notFlagsOption && notFlags.length)
        argv[notFlagsArgv] = [];
      notFlags.forEach(function(key) {
        argv[notFlagsArgv].push(key);
      });
      if (configuration["camel-case-expansion"] && configuration["strip-dashed"]) {
        Object.keys(argv).filter((key) => key !== "--" && key.includes("-")).forEach((key) => {
          delete argv[key];
        });
      }
      if (configuration["strip-aliased"]) {
        [].concat(...Object.keys(aliases).map((k) => aliases[k])).forEach((alias) => {
          if (configuration["camel-case-expansion"] && alias.includes("-")) {
            delete argv[alias.split(".").map((prop) => camelCase2(prop)).join(".")];
          }
          delete argv[alias];
        });
      }
      function pushPositional(arg) {
        const maybeCoercedNumber = maybeCoerceNumber("_", arg);
        if (typeof maybeCoercedNumber === "string" || typeof maybeCoercedNumber === "number") {
          argv._.push(maybeCoercedNumber);
        }
      }
      function eatNargs(i, key, args2, argAfterEqualSign) {
        let ii;
        let toEat = checkAllAliases(key, flags.nargs);
        toEat = typeof toEat !== "number" || isNaN(toEat) ? 1 : toEat;
        if (toEat === 0) {
          if (!isUndefined(argAfterEqualSign)) {
            error = Error(__("Argument unexpected for: %s", key));
          }
          setArg(key, defaultValue(key));
          return i;
        }
        let available = isUndefined(argAfterEqualSign) ? 0 : 1;
        if (configuration["nargs-eats-options"]) {
          if (args2.length - (i + 1) + available < toEat) {
            error = Error(__("Not enough arguments following: %s", key));
          }
          available = toEat;
        } else {
          for (ii = i + 1;ii < args2.length; ii++) {
            if (!args2[ii].match(/^-[^0-9]/) || args2[ii].match(negative) || isUnknownOptionAsArg(args2[ii]))
              available++;
            else
              break;
          }
          if (available < toEat)
            error = Error(__("Not enough arguments following: %s", key));
        }
        let consumed = Math.min(available, toEat);
        if (!isUndefined(argAfterEqualSign) && consumed > 0) {
          setArg(key, argAfterEqualSign);
          consumed--;
        }
        for (ii = i + 1;ii < consumed + i + 1; ii++) {
          setArg(key, args2[ii]);
        }
        return i + consumed;
      }
      function eatArray(i, key, args2, argAfterEqualSign) {
        let argsToSet = [];
        let next = argAfterEqualSign || args2[i + 1];
        const nargsCount = checkAllAliases(key, flags.nargs);
        if (checkAllAliases(key, flags.bools) && !/^(true|false)$/.test(next)) {
          argsToSet.push(true);
        } else if (isUndefined(next) || isUndefined(argAfterEqualSign) && /^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next)) {
          if (defaults[key] !== undefined) {
            const defVal = defaults[key];
            argsToSet = Array.isArray(defVal) ? defVal : [defVal];
          }
        } else {
          if (!isUndefined(argAfterEqualSign)) {
            argsToSet.push(processValue(key, argAfterEqualSign, true));
          }
          for (let ii = i + 1;ii < args2.length; ii++) {
            if (!configuration["greedy-arrays"] && argsToSet.length > 0 || nargsCount && typeof nargsCount === "number" && argsToSet.length >= nargsCount)
              break;
            next = args2[ii];
            if (/^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next))
              break;
            i = ii;
            argsToSet.push(processValue(key, next, inputIsString));
          }
        }
        if (typeof nargsCount === "number" && (nargsCount && argsToSet.length < nargsCount || isNaN(nargsCount) && argsToSet.length === 0)) {
          error = Error(__("Not enough arguments following: %s", key));
        }
        setArg(key, argsToSet);
        return i;
      }
      function setArg(key, val, shouldStripQuotes = inputIsString) {
        if (/-/.test(key) && configuration["camel-case-expansion"]) {
          const alias = key.split(".").map(function(prop) {
            return camelCase2(prop);
          }).join(".");
          addNewAlias(key, alias);
        }
        const value = processValue(key, val, shouldStripQuotes);
        const splitKey = key.split(".");
        setKey(argv, splitKey, value);
        if (flags.aliases[key]) {
          flags.aliases[key].forEach(function(x) {
            const keyProperties = x.split(".");
            setKey(argv, keyProperties, value);
          });
        }
        if (splitKey.length > 1 && configuration["dot-notation"]) {
          (flags.aliases[splitKey[0]] || []).forEach(function(x) {
            let keyProperties = x.split(".");
            const a = [].concat(splitKey);
            a.shift();
            keyProperties = keyProperties.concat(a);
            if (!(flags.aliases[key] || []).includes(keyProperties.join("."))) {
              setKey(argv, keyProperties, value);
            }
          });
        }
        if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
          const keys = [key].concat(flags.aliases[key] || []);
          keys.forEach(function(key2) {
            Object.defineProperty(argvReturn, key2, {
              enumerable: true,
              get() {
                return val;
              },
              set(value2) {
                val = typeof value2 === "string" ? mixin.normalize(value2) : value2;
              }
            });
          });
        }
      }
      function addNewAlias(key, alias) {
        if (!(flags.aliases[key] && flags.aliases[key].length)) {
          flags.aliases[key] = [alias];
          newAliases[alias] = true;
        }
        if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
          addNewAlias(alias, key);
        }
      }
      function processValue(key, val, shouldStripQuotes) {
        if (shouldStripQuotes) {
          val = stripQuotes(val);
        }
        if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
          if (typeof val === "string")
            val = val === "true";
        }
        let value = Array.isArray(val) ? val.map(function(v) {
          return maybeCoerceNumber(key, v);
        }) : maybeCoerceNumber(key, val);
        if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === "boolean")) {
          value = increment();
        }
        if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
          if (Array.isArray(val))
            value = val.map((val2) => {
              return mixin.normalize(val2);
            });
          else
            value = mixin.normalize(val);
        }
        return value;
      }
      function maybeCoerceNumber(key, value) {
        if (!configuration["parse-positional-numbers"] && key === "_")
          return value;
        if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.bools) && !Array.isArray(value)) {
          const shouldCoerceNumber = looksLikeNumber(value) && configuration["parse-numbers"] && Number.isSafeInteger(Math.floor(parseFloat(`${value}`)));
          if (shouldCoerceNumber || !isUndefined(value) && checkAllAliases(key, flags.numbers)) {
            value = Number(value);
          }
        }
        return value;
      }
      function setConfig(argv2) {
        const configLookup = Object.create(null);
        applyDefaultsAndAliases(configLookup, flags.aliases, defaults);
        Object.keys(flags.configs).forEach(function(configKey) {
          const configPath = argv2[configKey] || configLookup[configKey];
          if (configPath) {
            try {
              let config = null;
              const resolvedConfigPath = mixin.resolve(mixin.cwd(), configPath);
              const resolveConfig = flags.configs[configKey];
              if (typeof resolveConfig === "function") {
                try {
                  config = resolveConfig(resolvedConfigPath);
                } catch (e) {
                  config = e;
                }
                if (config instanceof Error) {
                  error = config;
                  return;
                }
              } else {
                config = mixin.require(resolvedConfigPath);
              }
              setConfigObject(config);
            } catch (ex) {
              if (ex.name === "PermissionDenied")
                error = ex;
              else if (argv2[configKey])
                error = Error(__("Invalid JSON config file: %s", configPath));
            }
          }
        });
      }
      function setConfigObject(config, prev) {
        Object.keys(config).forEach(function(key) {
          const value = config[key];
          const fullKey = prev ? prev + "." + key : key;
          if (typeof value === "object" && value !== null && !Array.isArray(value) && configuration["dot-notation"]) {
            setConfigObject(value, fullKey);
          } else {
            if (!hasKey(argv, fullKey.split(".")) || checkAllAliases(fullKey, flags.arrays) && configuration["combine-arrays"]) {
              setArg(fullKey, value);
            }
          }
        });
      }
      function setConfigObjects() {
        if (typeof configObjects !== "undefined") {
          configObjects.forEach(function(configObject) {
            setConfigObject(configObject);
          });
        }
      }
      function applyEnvVars(argv2, configOnly) {
        if (typeof envPrefix === "undefined")
          return;
        const prefix = typeof envPrefix === "string" ? envPrefix : "";
        const env2 = mixin.env();
        Object.keys(env2).forEach(function(envVar) {
          if (prefix === "" || envVar.lastIndexOf(prefix, 0) === 0) {
            const keys = envVar.split("__").map(function(key, i) {
              if (i === 0) {
                key = key.substring(prefix.length);
              }
              return camelCase2(key);
            });
            if ((configOnly && flags.configs[keys.join(".")] || !configOnly) && !hasKey(argv2, keys)) {
              setArg(keys.join("."), env2[envVar]);
            }
          }
        });
      }
      function applyCoercions(argv2) {
        let coerce2;
        const applied = new Set;
        Object.keys(argv2).forEach(function(key) {
          if (!applied.has(key)) {
            coerce2 = checkAllAliases(key, flags.coercions);
            if (typeof coerce2 === "function") {
              try {
                const value = maybeCoerceNumber(key, coerce2(argv2[key]));
                [].concat(flags.aliases[key] || [], key).forEach((ali) => {
                  applied.add(ali);
                  argv2[ali] = value;
                });
              } catch (err) {
                error = err;
              }
            }
          }
        });
      }
      function setPlaceholderKeys(argv2) {
        flags.keys.forEach((key) => {
          if (~key.indexOf("."))
            return;
          if (typeof argv2[key] === "undefined")
            argv2[key] = undefined;
        });
        return argv2;
      }
      function applyDefaultsAndAliases(obj, aliases2, defaults2, canLog = false) {
        Object.keys(defaults2).forEach(function(key) {
          if (!hasKey(obj, key.split("."))) {
            setKey(obj, key.split("."), defaults2[key]);
            if (canLog)
              defaulted[key] = true;
            (aliases2[key] || []).forEach(function(x) {
              if (hasKey(obj, x.split(".")))
                return;
              setKey(obj, x.split("."), defaults2[key]);
            });
          }
        });
      }
      function hasKey(obj, keys) {
        let o = obj;
        if (!configuration["dot-notation"])
          keys = [keys.join(".")];
        keys.slice(0, -1).forEach(function(key2) {
          o = o[key2] || {};
        });
        const key = keys[keys.length - 1];
        if (typeof o !== "object")
          return false;
        else
          return key in o;
      }
      function setKey(obj, keys, value) {
        let o = obj;
        if (!configuration["dot-notation"])
          keys = [keys.join(".")];
        keys.slice(0, -1).forEach(function(key2) {
          key2 = sanitizeKey(key2);
          if (typeof o === "object" && o[key2] === undefined) {
            o[key2] = {};
          }
          if (typeof o[key2] !== "object" || Array.isArray(o[key2])) {
            if (Array.isArray(o[key2])) {
              o[key2].push({});
            } else {
              o[key2] = [o[key2], {}];
            }
            o = o[key2][o[key2].length - 1];
          } else {
            o = o[key2];
          }
        });
        const key = sanitizeKey(keys[keys.length - 1]);
        const isTypeArray = checkAllAliases(keys.join("."), flags.arrays);
        const isValueArray = Array.isArray(value);
        let duplicate = configuration["duplicate-arguments-array"];
        if (!duplicate && checkAllAliases(key, flags.nargs)) {
          duplicate = true;
          if (!isUndefined(o[key]) && flags.nargs[key] === 1 || Array.isArray(o[key]) && o[key].length === flags.nargs[key]) {
            o[key] = undefined;
          }
        }
        if (value === increment()) {
          o[key] = increment(o[key]);
        } else if (Array.isArray(o[key])) {
          if (duplicate && isTypeArray && isValueArray) {
            o[key] = configuration["flatten-duplicate-arrays"] ? o[key].concat(value) : (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value]);
          } else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
            o[key] = value;
          } else {
            o[key] = o[key].concat([value]);
          }
        } else if (o[key] === undefined && isTypeArray) {
          o[key] = isValueArray ? value : [value];
        } else if (duplicate && !(o[key] === undefined || checkAllAliases(key, flags.counts) || checkAllAliases(key, flags.bools))) {
          o[key] = [o[key], value];
        } else {
          o[key] = value;
        }
      }
      function extendAliases(...args2) {
        args2.forEach(function(obj) {
          Object.keys(obj || {}).forEach(function(key) {
            if (flags.aliases[key])
              return;
            flags.aliases[key] = [].concat(aliases[key] || []);
            flags.aliases[key].concat(key).forEach(function(x) {
              if (/-/.test(x) && configuration["camel-case-expansion"]) {
                const c = camelCase2(x);
                if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                  flags.aliases[key].push(c);
                  newAliases[c] = true;
                }
              }
            });
            flags.aliases[key].concat(key).forEach(function(x) {
              if (x.length > 1 && /[A-Z]/.test(x) && configuration["camel-case-expansion"]) {
                const c = decamelize(x, "-");
                if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                  flags.aliases[key].push(c);
                  newAliases[c] = true;
                }
              }
            });
            flags.aliases[key].forEach(function(x) {
              flags.aliases[x] = [key].concat(flags.aliases[key].filter(function(y2) {
                return x !== y2;
              }));
            });
          });
        });
      }
      function checkAllAliases(key, flag) {
        const toCheck = [].concat(flags.aliases[key] || [], key);
        const keys = Object.keys(flag);
        const setAlias = toCheck.find((key2) => keys.includes(key2));
        return setAlias ? flag[setAlias] : false;
      }
      function hasAnyFlag(key) {
        const flagsKeys = Object.keys(flags);
        const toCheck = [].concat(flagsKeys.map((k) => flags[k]));
        return toCheck.some(function(flag) {
          return Array.isArray(flag) ? flag.includes(key) : flag[key];
        });
      }
      function hasFlagsMatching(arg, ...patterns) {
        const toCheck = [].concat(...patterns);
        return toCheck.some(function(pattern) {
          const match = arg.match(pattern);
          return match && hasAnyFlag(match[1]);
        });
      }
      function hasAllShortFlags(arg) {
        if (arg.match(negative) || !arg.match(/^-[^-]+/)) {
          return false;
        }
        let hasAllFlags = true;
        let next;
        const letters = arg.slice(1).split("");
        for (let j = 0;j < letters.length; j++) {
          next = arg.slice(j + 2);
          if (!hasAnyFlag(letters[j])) {
            hasAllFlags = false;
            break;
          }
          if (letters[j + 1] && letters[j + 1] === "=" || next === "-" || /[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) || letters[j + 1] && letters[j + 1].match(/\W/)) {
            break;
          }
        }
        return hasAllFlags;
      }
      function isUnknownOptionAsArg(arg) {
        return configuration["unknown-options-as-args"] && isUnknownOption(arg);
      }
      function isUnknownOption(arg) {
        arg = arg.replace(/^-{3,}/, "--");
        if (arg.match(negative)) {
          return false;
        }
        if (hasAllShortFlags(arg)) {
          return false;
        }
        const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/;
        const normalFlag = /^-+([^=]+?)$/;
        const flagEndingInHyphen = /^-+([^=]+?)-$/;
        const flagEndingInDigits = /^-+([^=]+?\d+)$/;
        const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/;
        return !hasFlagsMatching(arg, flagWithEquals, negatedBoolean, normalFlag, flagEndingInHyphen, flagEndingInDigits, flagEndingInNonWordCharacters);
      }
      function defaultValue(key) {
        if (!checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts) && `${key}` in defaults) {
          return defaults[key];
        } else {
          return defaultForType(guessType(key));
        }
      }
      function defaultForType(type) {
        const def = {
          [DefaultValuesForTypeKey.BOOLEAN]: true,
          [DefaultValuesForTypeKey.STRING]: "",
          [DefaultValuesForTypeKey.NUMBER]: undefined,
          [DefaultValuesForTypeKey.ARRAY]: []
        };
        return def[type];
      }
      function guessType(key) {
        let type = DefaultValuesForTypeKey.BOOLEAN;
        if (checkAllAliases(key, flags.strings))
          type = DefaultValuesForTypeKey.STRING;
        else if (checkAllAliases(key, flags.numbers))
          type = DefaultValuesForTypeKey.NUMBER;
        else if (checkAllAliases(key, flags.bools))
          type = DefaultValuesForTypeKey.BOOLEAN;
        else if (checkAllAliases(key, flags.arrays))
          type = DefaultValuesForTypeKey.ARRAY;
        return type;
      }
      function isUndefined(num) {
        return num === undefined;
      }
      function checkConfiguration() {
        Object.keys(flags.counts).find((key) => {
          if (checkAllAliases(key, flags.arrays)) {
            error = Error(__("Invalid configuration: %s, opts.count excludes opts.array.", key));
            return true;
          } else if (checkAllAliases(key, flags.nargs)) {
            error = Error(__("Invalid configuration: %s, opts.count excludes opts.narg.", key));
            return true;
          }
          return false;
        });
      }
      return {
        aliases: Object.assign({}, flags.aliases),
        argv: Object.assign(argvReturn, argv),
        configuration,
        defaulted: Object.assign({}, defaulted),
        error,
        newAliases: Object.assign({}, newAliases)
      };
    }
  }
  var _a;
  var _b;
  var _c;
  var minNodeVersion = process && process.env && process.env.YARGS_MIN_NODE_VERSION ? Number(process.env.YARGS_MIN_NODE_VERSION) : 12;
  var nodeVersion = (_b = (_a = process === null || process === undefined ? undefined : process.versions) === null || _a === undefined ? undefined : _a.node) !== null && _b !== undefined ? _b : (_c = process === null || process === undefined ? undefined : process.version) === null || _c === undefined ? undefined : _c.slice(1);
  if (nodeVersion) {
    const major = Number(nodeVersion.match(/^([^.]+)/)[1]);
    if (major < minNodeVersion) {
      throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
    }
  }
  var env = process ? process.env : {};
  var parser = new YargsParser({
    cwd: process.cwd,
    env: () => {
      return env;
    },
    format: util2.format,
    normalize: path.normalize,
    resolve: path.resolve,
    require: (path2) => {
      if (typeof __require !== "undefined") {
        return __require(path2);
      } else if (path2.match(/\.json$/)) {
        return JSON.parse(fs.readFileSync(path2, "utf8"));
      } else {
        throw Error("only .json config files are supported in ESM");
      }
    }
  });
  var yargsParser = function Parser(args, opts) {
    const result = parser.parse(args.slice(), opts);
    return result.argv;
  };
  yargsParser.detailed = function(args, opts) {
    return parser.parse(args.slice(), opts);
  };
  yargsParser.camelCase = camelCase2;
  yargsParser.decamelize = decamelize;
  yargsParser.looksLikeNumber = looksLikeNumber;
  module.exports = yargsParser;
});

// node_modules/zod/lib/index.mjs
var setErrorMap = function(map) {
  overrideErrorMap = map;
};
var getErrorMap = function() {
  return overrideErrorMap;
};
var addIssueToContext = function(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
};
var processCreateParams = function(params) {
  if (!params)
    return {};
  const { errorMap, invalid_type_error, required_error, description } = params;
  if (errorMap && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap)
    return { errorMap, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== undefined ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== undefined ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
};
var isValidIP = function(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
};
var floatSafeRemainder = function(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
};
var deepPartialify = function(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
};
var mergeValues = function(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
};
var createZodEnum = function(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
};
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === undefined ? undefined : message.message;
})(errorUtil || (errorUtil = {}));

class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};

class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
        async: true
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+\$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)\$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z\$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)\$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z\$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)\$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z\$`);
    }
  }
};

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === undefined ? undefined : options.position,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};

class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
}
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== undefined ? _a : fatal) !== null && _b !== undefined ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/change-case/dist/index.js
function split(value) {
  let result = value.trim();
  result = result.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
  result = result.replace(DEFAULT_STRIP_REGEXP, "\0");
  let start = 0;
  let end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  if (start === end)
    return [];
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split(/\0/g);
}
function splitSeparateNumbers(value) {
  const words = split(value);
  for (let i = 0;i < words.length; i++) {
    const word = words[i];
    const match = SPLIT_SEPARATE_NUMBER_RE.exec(word);
    if (match) {
      const offset = match.index + (match[1] ?? match[2]).length;
      words.splice(i, 1, word.slice(0, offset), word.slice(offset));
    }
  }
  return words;
}
function noCase(input, options) {
  const [prefix, words, suffix] = splitPrefixSuffix(input, options);
  return prefix + words.map(lowerFactory(options?.locale)).join(options?.delimiter ?? " ") + suffix;
}
function camelCase(input, options) {
  const [prefix, words, suffix] = splitPrefixSuffix(input, options);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  const transform = options?.mergeAmbiguousCharacters ? capitalCaseTransformFactory(lower, upper) : pascalCaseTransformFactory(lower, upper);
  return prefix + words.map((word, index) => {
    if (index === 0)
      return lower(word);
    return transform(word, index);
  }).join(options?.delimiter ?? "") + suffix;
}
function kebabCase(input, options) {
  return noCase(input, { delimiter: "-", ...options });
}
var lowerFactory = function(locale) {
  return locale === false ? (input) => input.toLowerCase() : (input) => input.toLocaleLowerCase(locale);
};
var upperFactory = function(locale) {
  return locale === false ? (input) => input.toUpperCase() : (input) => input.toLocaleUpperCase(locale);
};
var capitalCaseTransformFactory = function(lower, upper) {
  return (word) => `${upper(word[0])}${lower(word.slice(1))}`;
};
var pascalCaseTransformFactory = function(lower, upper) {
  return (word, index) => {
    const char0 = word[0];
    const initial = index > 0 && char0 >= "0" && char0 <= "9" ? "_" + char0 : upper(char0);
    return initial + lower(word.slice(1));
  };
};
var splitPrefixSuffix = function(input, options = {}) {
  const splitFn = options.split ?? (options.separateNumbers ? splitSeparateNumbers : split);
  const prefixCharacters = options.prefixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  const suffixCharacters = options.suffixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  let prefixIndex = 0;
  let suffixIndex = input.length;
  while (prefixIndex < input.length) {
    const char = input.charAt(prefixIndex);
    if (!prefixCharacters.includes(char))
      break;
    prefixIndex++;
  }
  while (suffixIndex > prefixIndex) {
    const index = suffixIndex - 1;
    const char = input.charAt(index);
    if (!suffixCharacters.includes(char))
      break;
    suffixIndex = index;
  }
  return [
    input.slice(0, prefixIndex),
    splitFn(input.slice(prefixIndex, suffixIndex)),
    input.slice(suffixIndex)
  ];
};
var SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
var SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
var SPLIT_SEPARATE_NUMBER_RE = /(\d)\p{Ll}|(\p{L})\d/u;
var DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
var SPLIT_REPLACE_VALUE = "$1\0$2";
var DEFAULT_PREFIX_SUFFIX_CHARACTERS = "";

// zli.ts
var ok = function(value) {
  return [value, null];
};
var err = function(value, error) {
  return [value, error];
};
function zli(opts) {
  opts ??= {};
  if (typeof opts.stdout === "undefined") {
    opts.stdout = process.stdout;
  }
  return new _Zli(opts.stdout);
}
var camelCaseArgs = function(args) {
  return Object.keys(args).reduce((acc, key) => {
    if (ignoredArgKeys.includes(key)) {
      return { ...acc, [key]: args[key] };
    }
    if (typeof args[key] === "object" && !Array.isArray(args[key])) {
      return {
        ...acc,
        [camelCase(key)]: camelCaseArgs(args[key])
      };
    }
    return {
      ...acc,
      [camelCase(key)]: args[key]
    };
  }, Object.create(null));
};
function expandShorthandOptions(args, shorthands) {
  if (typeof shorthands === "undefined") {
    return args;
  }
  for (const [longhand, shorthand] of Object.entries(shorthands)) {
    const key = shorthand.substring(1);
    if (typeof args[key] !== "undefined") {
      args[longhand] = args[shorthand.substring(1)];
      delete args[shorthand.substring(1)];
    }
  }
  return args;
}
function parseArguments(args, schema) {
  if (typeof schema === "undefined") {
    return ok(args);
  }
  const parsedArgs = Object.create(null);
  const schemaDefinitions = Object.entries(schema);
  const requiredArgsCount = schemaDefinitions.filter(([_2, shape]) => !shape.isOptional() || shape instanceof z.ZodDefault && typeof shape._def.defaultValue() !== "undefined").length;
  if (args._.length < requiredArgsCount) {
    return err(args, incorrectUsageError);
  }
  let i = 0;
  for (;i < args._.length; i++) {
    const value = args._[i];
    const schema2 = schemaDefinitions[i];
    if (typeof schema2 === "undefined") {
      return parsedArgs;
    }
    const [key, shape] = schemaDefinitions[i];
    try {
      parsedArgs[key] = parse(value, shape);
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const zerr of error.errors) {
          zerr.path.push(key);
        }
      }
      return err(args, error);
    }
  }
  parsedArgs._ = args._.slice(i);
  return ok(parsedArgs);
}
function parseOptions(ignoreUnknownOptions, options, schema) {
  if (typeof schema === "undefined") {
    return ok(options);
  }
  const parsedOptions = Object.create(null);
  for (const [key, shape] of Object.entries(schema)) {
    if (["_", "--"].includes(key)) {
      continue;
    }
    const value = options[key];
    try {
      parsedOptions[key] = parse(value, shape);
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const zerr of error.errors) {
          zerr.path.push(`--${key}`);
        }
      }
      return err(options, error);
    }
  }
  for (const [key, value] of Object.entries(options)) {
    if (["_", "--"].includes(key)) {
      continue;
    }
    if (!(key in schema)) {
      if (!ignoreUnknownOptions) {
        return err(options, unknownOptionError);
      } else {
        parsedOptions[key] = value;
      }
    }
    try {
      parsedOptions[key] = parse(value, schema[key]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const zerr of error.errors) {
          zerr.path.push(`--${key}`);
        }
      }
      return err(options, error);
    }
  }
  return ok(parsedOptions);
}
function assertNoRequiredArgsAfterOptional(args) {
  if (typeof args === "undefined") {
    return;
  }
  let isReadingRequired = true;
  for (const [_2, shape] of Object.entries(args)) {
    if ((shape.isOptional() || shape instanceof z.ZodDefault) && isReadingRequired) {
      isReadingRequired = false;
    } else if (!isReadingRequired) {
      throw noRequiredArgumentsAfterOptionalsError;
    }
  }
}
function buildHelpDisplay(name, commands, description, args, options, shorthands) {
  const lines = new Array;
  if (typeof args !== "undefined") {
    lines.push("Usage:", "");
    const requiredArgs = [];
    const optionalArgs = [];
    for (const [name2, shape] of Object.entries(args)) {
      if (shape.isOptional()) {
        if (shape instanceof z.ZodDefault) {
          optionalArgs.push(`${name2}:${shape._type}:${shape._def.defaultValue()}`);
        } else {
          optionalArgs.push(`${name2}:${shape._type}`);
        }
      } else if (shape instanceof z.ZodDefault) {
        optionalArgs.push(`${name2}:${shape._type}:${shape._def.defaultValue()}`);
      } else {
        requiredArgs.push(`${name2}:${getTypename(shape) ?? "any"}`);
      }
    }
    const commandUsage = `${name} ` + (requiredArgs.length > 0 ? requiredArgs.map((a) => `<${a}>`).join(" ") : "") + (optionalArgs.length > 0 ? optionalArgs.map((a) => `[${a}]`).join(" ") : "");
    lines.push(commandUsage);
  } else {
    lines.push(name);
  }
  if (typeof description !== "undefined") {
    lines.push("\nDescription:", `\t${description}`, "");
  }
  if (typeof options !== "undefined") {
    lines.push("Options:");
    for (const [name2, shape] of Object.entries(options)) {
      const dashName = kebabCase(name2);
      const nameToDisplay = typeof shorthands?.[name2] !== "undefined" ? `--${dashName}|${shorthands[name2]}` : `--${dashName}`;
      const typename = getTypename(shape);
      const spacesToAdd = TERMINAL_WIDTH - nameToDisplay.length - typename.length;
      if (spacesToAdd <= 0 || typeof spacesToAdd !== "number") {
        continue;
      }
      const padding = Array(spacesToAdd).map(() => "").join(" ");
      lines.push(`${nameToDisplay}${padding}${typename}`);
      if (typeof shape.description !== "undefined" && !shape.description.match(/undefined/i)) {
        lines.push(`\t${shape.description}`);
      }
    }
    lines.push("");
  }
  if (typeof commands !== "undefined") {
    for (const [name2, command] of commands.entries()) {
      const description2 = command.getDescription();
      lines.push(name2, `\t${description2}`);
    }
  }
  return ok(lines);
}
function getTypename(shape) {
  if (shape instanceof z.ZodOptional) {
    return getTypename(shape.unwrap());
  }
  if (shape instanceof z.ZodDefault) {
    return getTypename(shape.removeDefault());
  }
  if (shape instanceof z.ZodString) {
    return "string";
  }
  if (shape instanceof z.ZodNumber) {
    return "number";
  }
  if (shape instanceof z.ZodBoolean) {
    return "boolean";
  }
  if (shape instanceof z.ZodEnum) {
    return shape._def.values.join("|");
  }
  if (shape instanceof z.ZodArray) {
    return `(${getTypename(shape._def.type)})[]`;
  }
  if (shape instanceof z.ZodAny) {
    return "any";
  }
  if (shape instanceof z.ZodUnion) {
    return shape._def.options.map(getTypename).join("|");
  }
  return "";
}
function parse(value, definition) {
  if (typeof value === "undefined") {
    if (definition instanceof z.ZodDefault) {
      return definition._def.defaultValue();
    }
    return;
  }
  if (typeof value === "object") {
    return definition?.parse(value) ?? value;
  }
  const trimmed = String(value).trim();
  const lowered = trimmed.toLowerCase();
  if (!trimmed || String(trimmed).length === 0) {
    return definition.parse("");
  }
  if (definition instanceof z.ZodBoolean) {
    if (["true", "yes", "y", "1", "accept", true, 1].includes(lowered)) {
      return definition.parse(true);
    } else if (["false", "no", "n", "0", "deny", false, 0].includes(lowered)) {
      return definition.parse(false);
    } else {
      return definition.parse(true);
    }
  }
  if (definition instanceof z.ZodString) {
    return definition.parse(String(trimmed));
  }
  if (definition instanceof z.ZodNumber) {
    return definition.parse(parseFloat(trimmed));
  }
  if (definition instanceof z.ZodDefault || definition instanceof z.ZodOptional) {
    return parse(value, definition._def.innerType);
  }
  if (definition instanceof z.ZodArray) {
    if (!Array.isArray(value)) {
      return String(value).split(",").map((v) => parse(v, definition._def.type));
    } else {
      const array = value;
      return array.map((v) => parse(v, definition._def.type));
    }
  }
  return definition?.parse(value);
}
var spreadLikeButter = function(...objs) {
  const result = Object.create(null);
  for (const obj of objs) {
    for (const [key, value] of Object.entries(obj)) {
      if (value != null) {
        result[key] = value;
      }
    }
  }
  return result;
};
var parser = require_build();
var TERMINAL_WIDTH = 80;

class _Zli {
  _stdout;
  _commands = new Map;
  _meta = {
    showHelpOnError: false,
    showHelpOnNotFound: false,
    ignoreUnknownOptions: false
  };
  _formattedArgs;
  _globalOptions;
  _globalShorthands;
  _version;
  _beforeInvoke;
  _afterInvoke;
  constructor(_stdout) {
    this._stdout = _stdout;
  }
  getStdout() {
    return this._stdout;
  }
  command(name, cmd) {
    const command = new _Command(name, this, null);
    const setupCommand = cmd(command);
    this._commands.set(name.toLowerCase(), setupCommand);
    return this;
  }
  options(opts) {
    this._globalOptions = { ...this._globalOptions ?? {}, ...opts };
    return this;
  }
  help() {
    return this.options({
      help: z.boolean().optional()
    }).shorthands({ help: "-h" });
  }
  shorthands(shorthands) {
    this._globalShorthands = {
      ...this._globalShorthands ?? {},
      ...shorthands
    };
    return this;
  }
  showHelpOnNotFound() {
    this._meta.showHelpOnNotFound = true;
    return this;
  }
  showHelpOnError() {
    this._meta.showHelpOnError = true;
    return this;
  }
  version(version) {
    this._version = version;
    return this;
  }
  displayHelp() {
    const help = buildHelpDisplay("", this._commands, undefined, undefined, this._globalOptions, this._globalShorthands);
    this.write(help);
  }
  write(output) {
    if (Array.isArray(output)) {
      this._stdout.write(output.join("\n"));
    } else {
      this._stdout.write(output);
    }
    this._stdout.write("\n");
  }
  beforeInvoke(fn) {
    this._beforeInvoke = fn;
    return this;
  }
  afterInvoke(fn) {
    this._afterInvoke = fn;
    return this;
  }
  async exec(args) {
    if (typeof args === "undefined") {
      args = process.argv.slice(2);
    }
    const parsedArgs = camelCaseArgs(parser(args));
    if (typeof this._formattedArgs === "undefined") {
      this._formattedArgs = parsedArgs;
    } else {
      this._formattedArgs = { ...this._formattedArgs, ...parsedArgs };
    }
    const [runArg, ...restArgs] = this._formattedArgs._;
    const expandedArgs = expandShorthandOptions(this._formattedArgs, this._globalShorthands);
    if (expandedArgs["help"] === true && typeof runArg === "undefined" && typeof this._globalOptions?.help !== "undefined") {
      return this.displayHelp();
    }
    const [globalOptions, globalOptionsErr] = parseOptions(true, expandedArgs, this._globalOptions);
    if (globalOptionsErr != null) {
      this.write(globalOptionsErr.message);
      return;
    }
    if (typeof this._beforeInvoke !== "undefined") {
      await this._beforeInvoke(globalOptions);
    }
    const cmd = this._commands.get(runArg);
    if (typeof cmd !== "undefined") {
      const args2 = {
        ...this._formattedArgs,
        ...expandedArgs,
        _: restArgs
      };
      const [didExecute, execError] = await cmd.exec(args2, globalOptions);
      if (execError != null) {
        if (this._meta.showHelpOnError) {
          this.displayHelp();
        }
        if (execError === zliError) {
          this.write(execError.message);
        } else if (execError instanceof z.ZodError) {
          for (const zerr of execError.errors) {
            const [_2, argName] = zerr.path;
            this.write(`${zerr.message} ${argName ? `(${argName})` : ""}`);
          }
        } else {
          execError.stack ? this.write(execError.stack) : this.write(execError.message);
        }
      } else if (!didExecute) {
        if (this._meta.showHelpOnNotFound) {
          this.displayHelp();
        }
      }
    } else if (typeof runArg !== "undefined") {
      this.write(`Command not found: ${runArg}`);
      if (this._meta.showHelpOnNotFound) {
        this.displayHelp();
      }
    } else if (typeof this._version !== "undefined") {
      this._stdout.write(this._version);
    } else if (this._globalOptions?.help) {
      this.displayHelp();
    }
    if (typeof this._afterInvoke !== "undefined") {
      this._afterInvoke(globalOptions);
    }
  }
}

class _Command {
  _name;
  _factory;
  _parent;
  _commands = new Map;
  _meta;
  _help;
  _description;
  _argsSchema;
  _optsSchema;
  _shorthands;
  _preinvoke;
  _invoke;
  _postinvoke;
  _setup;
  get fullName() {
    if (this._parent === null) {
      return this._name;
    }
    return `${this._parent.fullName} ${this._name}`;
  }
  constructor(_name, _factory, _parent) {
    this._name = _name;
    this._factory = _factory;
    this._parent = _parent;
    this._meta = _factory._meta;
  }
  _getSubcommandWithNewArgs(args) {
    if (typeof args === "undefined") {
      return [undefined, args];
    }
    const [arg] = args._;
    const slicedArgs = { ...args, _: args._.slice(1) };
    if (typeof arg !== "undefined" && this._commands.has(arg)) {
      return [this._commands.get(arg), slicedArgs];
    }
    return [undefined, slicedArgs];
  }
  getHelp(args) {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getHelp(newArgs) ?? this._help;
  }
  getDescription(args) {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getDescription(newArgs) ?? this._description ?? "";
  }
  getArgsSchema(args) {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getArgsSchema(newArgs) ?? this._argsSchema;
  }
  getOptsSchema(args) {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getOptsSchema(newArgs) ?? this._optsSchema;
  }
  getShorthands(args) {
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    return subcommand?.getShorthands(newArgs) ?? this._shorthands;
  }
  command(name, cmd) {
    const command = new _Command(name, this._factory, this);
    const setupCommand = cmd(command);
    this._commands.set(name.toLowerCase(), setupCommand);
    return this;
  }
  help(help) {
    this._help = help;
    return this;
  }
  describe(description) {
    this._description = description;
    return this;
  }
  arguments(args) {
    this._argsSchema = args;
    return this;
  }
  options(opts) {
    this._optsSchema = opts;
    return this;
  }
  shorthands(shorthands) {
    this._shorthands = { ...this._shorthands ?? {}, ...shorthands };
    return this;
  }
  ignoreUnknownOptions() {
    this._meta.ignoreUnknownOptions = true;
    return this;
  }
  setup(fn) {
    this._setup = fn;
    return this;
  }
  preInvoke(fn) {
    this._preinvoke = fn;
    return this;
  }
  invoke(fn) {
    this._invoke = fn;
    return this;
  }
  postInvoke(fn) {
    this._postinvoke = fn;
    return this;
  }
  displayHelp() {
    const [help] = buildHelpDisplay(this._name, this._commands, this._description, this._argsSchema, this._optsSchema, this._shorthands);
    this._factory.write(help);
  }
  async exec(args, globalOptions) {
    if (!("help" in args)) {
      const didSetup = await this._setup?.(globalOptions, this._factory.getStdout());
      if (didSetup === false) {
        return ok(false);
      }
    }
    await this._preinvoke?.(globalOptions);
    try {
      assertNoRequiredArgsAfterOptional(this._argsSchema);
    } catch (error) {
      return [false, error];
    }
    const [subcommand, newArgs] = this._getSubcommandWithNewArgs(args);
    if (subcommand) {
      const result = await subcommand.exec(newArgs, globalOptions);
      if (result) {
        await this._postinvoke?.(globalOptions);
      }
      return result;
    }
    if (args.help) {
      this.displayHelp();
      return ok(true);
    }
    if (args._.length < Object.keys(this._argsSchema ?? {}).length) {
      this.displayHelp();
      return ok(false);
    }
    if (this._invoke == null) {
      return ok(false);
    }
    const expandedArgs = expandShorthandOptions(args, this._shorthands);
    const [parsedArgs, parsedArgsErr] = parseArguments(args, this._argsSchema);
    if (parsedArgsErr != null) {
      return err(false, parsedArgsErr);
    }
    const [parsedOptions, parsedOptionsErr] = parseOptions(this._meta.ignoreUnknownOptions, expandedArgs, this._optsSchema);
    if (parsedOptionsErr != null) {
      return err(false, parsedOptionsErr);
    }
    const invokeArgs = spreadLikeButter(args, globalOptions, parsedArgs, parsedOptions);
    try {
      await this._invoke(invokeArgs, this._factory.getStdout());
      await this._postinvoke?.(globalOptions);
    } catch (error) {
      if (error == noRequiredArgumentsAfterOptionalsError || error == unknownOptionError) {
        return [false, error];
      }
      if (err instanceof z.ZodError) {
        for (const zerr of error.errors) {
          this._factory.write(`${zerr.message} ${zerr.path[0] ? `(${zerr.path[0]})` : ""}`);
        }
      } else {
        this._factory.write(`[ERROR] ${err}`);
        return [false, error];
      }
      if (this._meta.showHelpOnError) {
        this.displayHelp();
      }
      return ok(false);
    }
    return ok(true);
  }
}
var createError = (message) => new Error(message);
var noRequiredArgumentsAfterOptionalsError = createError("cannot have required arguments after optional");
var commandError = createError("failed to run command");
var unknownOptionError = createError("unknown option");
var incorrectUsageError = createError("incorrect usage");
var zliError = createError("unknown zli error");
var ignoredArgKeys = ["--", "_"];
export {
  zli
};
