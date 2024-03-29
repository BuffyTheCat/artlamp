"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  "use strict";

  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");
    if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[c.call(e)] || "object" : _typeof(e);
  }

  var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function toArray() {
      return o.call(this);
    },
    get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return w.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      m(e);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];
      if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + I),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;

            while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }

            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ue(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;

            if (y) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];

                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }

              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Y.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = pe(t);
    }

    function ye() {}

    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }

        return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];

        if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
            if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }

        return !1;
      };
    }

    function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;

        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;

              while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }

              i(null, v = [], l, u);
            }

            c = v.length;

            while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }

            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }

          p.push(n);
        }
      }

      return xe(p);
    }

    function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;

        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);

            while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
            }

            c && (T = E);
          }

          n && ((f = !y && f) && v--, _o && x.push(f));
        }

        if (v += m, n && m !== v) {
          h = 0;

          while (y = t[h++]) {
            y(x, b, a, s);
          }

          if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }
            b = we(b);
          }

          L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (T = E, l = w), x;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }

        (o = S(e, Ee(i, r))).selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }

        o = V.needsContext.test(e) ? 0 : u.length;

        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;

          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break;
          }
        }
      }

      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

  var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  w.fn.extend({
    has: function has(e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  w.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return k(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;

          while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  };

  function I(e) {
    return e;
  }

  function W(e) {
    throw e;
  }

  function $(e, t, n, r) {
    var i;

    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function state() {
          return r;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return i.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;

                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };

      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();

      while (n--) {
        $(i[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }

  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));

  var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === x(n)) {
      i = !0;

      for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase();
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }

  var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Q() {
    this.expando = w.expando + Q.uid++;
  }

  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function data(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      K.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }

          J.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;

        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, w.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }

    for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }

    return e;
  }

  w.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }

  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  !function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function ke() {
    return !1;
  }

  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        De(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  w.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);

      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);

      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }

        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};

      for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }

      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;

        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;

          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }

      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });

    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }

    return e;
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  w.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }
      if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }
            n[J.expando] = void 0;
          }

          n[K.expando] && (n[K.expando] = void 0);
        }
      }
    }
  }), w.fn.extend({
    detach: function detach(e) {
      return Ie(this, e, !0);
    },
    remove: function remove(e) {
      return Ie(this, e);
    },
    text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });

  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), a;
      }
    }));
  }();

  function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ve = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;

    while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }

    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }

  function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;

    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }

    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      }
    };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({
    css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }

  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));

    for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }

        d[r] = y && y[r] || w.style(e, r);
      }
    }

    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;

      for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");

          for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }

      return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: nt || st(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }

    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  w.Animation = w.extend(pt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ue(n.elem, e, ie.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    },
    prefilters: [ct],
    prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
      complete: n || !n && t || g(e) && e,
      duration: e,
      easing: n && t || t && !g(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);
        (i || J.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), dt = {
    set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });

  function vt(e) {
    return (e.match(M) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }

  w.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;

        if (r) {
          i = 0, o = w(this), a = xt(e);

          while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    };
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }
    return r.join("&");
  }, w.fn.extend({
    serialize: function serialize() {
      return w.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
      if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && w.extend(!0, e, r), e;
  }

  function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (c) {
            if (!s) {
              s = {};

              while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));

        try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, w.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = g(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Vt = {
    0: 200,
    1223: 204
  },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;

    if (h.cors || Gt && !t.crossDomain) return {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;

      return {
        send: function send(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, w.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || be;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), w.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
"use strict";

// ==================================================
// fancyBox v3.5.2
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";

  function a(t, e) {
    var o,
        a,
        i,
        s = [],
        r = 0;
    t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), i = n.fancybox.getInstance(), i && i.$trigger && i.$trigger.is(o) || (e.selector ? s = n(e.selector) : (a = o.attr("data-fancybox") || "", a ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), i = n.fancybox.open(s, e, r), i.$trigger = o));
  }

  if (t.console = t.console || {
    info: function info(t) {}
  }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");

    var i = {
      closeExisting: !1,
      loop: !1,
      gutter: 50,
      keyboard: !0,
      preventCaptionOverlap: !0,
      arrows: !0,
      infobar: !0,
      smallBtn: "auto",
      toolbar: "auto",
      buttons: ["zoom", "slideShow", "thumbs", "close"],
      idleTime: 3,
      protect: !1,
      modal: !1,
      image: {
        preload: !1
      },
      ajax: {
        settings: {
          data: {
            fancybox: !0
          }
        }
      },
      iframe: {
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',
        preload: !0,
        css: {},
        attr: {
          scrolling: "auto"
        }
      },
      video: {
        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
        format: "",
        autoStart: !0
      },
      defaultType: "image",
      animationEffect: "zoom",
      animationDuration: 366,
      zoomOpacity: "auto",
      transitionEffect: "fade",
      transitionDuration: 366,
      slideClass: "",
      baseClass: "",
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
      btnTpl: {
        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
      },
      parentEl: "body",
      hideScrollbar: !0,
      autoFocus: !0,
      backFocus: !0,
      trapFocus: !0,
      fullScreen: {
        autoStart: !1
      },
      touch: {
        vertical: !0,
        momentum: !0
      },
      hash: null,
      media: {},
      slideShow: {
        autoStart: !1,
        speed: 3e3
      },
      thumbs: {
        autoStart: !1,
        hideOnClose: !0,
        parentEl: ".fancybox-container",
        axis: "y"
      },
      wheel: "auto",
      onInit: n.noop,
      beforeLoad: n.noop,
      afterLoad: n.noop,
      beforeShow: n.noop,
      afterShow: n.noop,
      beforeClose: n.noop,
      afterClose: n.noop,
      onActivate: n.noop,
      onDeactivate: n.noop,
      clickContent: function clickContent(t, e) {
        return "image" === t.type && "zoom";
      },
      clickSlide: "close",
      clickOutside: "close",
      dblclickContent: !1,
      dblclickSlide: !1,
      dblclickOutside: !1,
      mobile: {
        preventCaptionOverlap: !1,
        idleTime: !1,
        clickContent: function clickContent(t, e) {
          return "image" === t.type && "toggleControls";
        },
        clickSlide: function clickSlide(t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        },
        dblclickContent: function dblclickContent(t, e) {
          return "image" === t.type && "zoom";
        },
        dblclickSlide: function dblclickSlide(t, e) {
          return "image" === t.type && "zoom";
        }
      },
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom"
        },
        de: {
          CLOSE: "Schliessen",
          NEXT: "Weiter",
          PREV: "Zurück",
          ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Maßstab"
        }
      }
    },
        s = n(t),
        r = n(e),
        c = 0,
        l = function l(t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
        d = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      };
    }(),
        u = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      };
    }(),
        f = function () {
      var t,
          n = e.createElement("fakeelement"),
          a = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };

      for (t in a) {
        if (n.style[t] !== o) return a[t];
      }

      return "transitionend";
    }(),
        p = function p(t) {
      return t && t.length && t[0].offsetHeight;
    },
        h = function h(t, e) {
      var o = n.extend(!0, {}, t, e);
      return n.each(e, function (t, e) {
        n.isArray(e) && (o[t] = e);
      }), o;
    },
        g = function g(t) {
      var o, a;
      return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
        x: t.getBoundingClientRect().left + t.offsetWidth / 2,
        y: t.getBoundingClientRect().top + t.offsetHeight / 2
      }, a = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), a);
    },
        b = function b(t, e, o) {
      var a = this;
      a.opts = h({
        index: o
      }, n.fancybox.defaults), n.isPlainObject(e) && (a.opts = h(a.opts, e)), n.fancybox.isMobile && (a.opts = h(a.opts, a.opts.mobile)), a.id = a.opts.id || ++c, a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(t), a.group.length && a.init();
    };

    n.extend(b.prototype, {
      init: function init() {
        var o,
            a,
            i = this,
            s = i.group[i.currIndex],
            r = s.opts;
        r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && r.hideScrollbar !== !1 && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), a = "", n.each(r.buttons, function (t, e) {
          a += r.btnTpl[e] || "";
        }), o = n(i.translate(i, r.baseTpl.replace("{{buttons}}", a).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass(r.baseClass).data("FancyBox", i).appendTo(r.parentEl), i.$refs = {
          container: o
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          i.$refs[t] = o.find(".fancybox-" + t);
        }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex);
      },
      translate: function translate(t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          var a = n[e];
          return a === o ? t : a;
        });
      },
      addContent: function addContent(t) {
        var e,
            a = this,
            i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
              s,
              r,
              c,
              l,
              d = {},
              u = {};
          n.isPlainObject(e) ? (d = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), u = i.data() || {}, u = n.extend(!0, {}, u, u.options), u.$orig = i, d.src = a.opts.src || u.src || i.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = {
            type: "html",
            src: e + ""
          }, d.opts = n.extend(!0, {}, a.opts, u), n.isArray(u.buttons) && (d.opts.buttons = u.buttons), n.fancybox.isMobile && d.opts.mobile && (d.opts = h(d.opts, d.opts.mobile)), s = d.type || d.opts.type, c = d.src || "", !s && c && ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe", d = n.extend(!0, d, {
            contentType: "pdf",
            opts: {
              iframe: {
                preload: !1
              }
            }
          })) : "#" === c.charAt(0) && (s = "inline")), s ? d.type = s : a.trigger("objectNeedsType", d), d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = a.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.$thumb = d.opts.$thumb || null, d.opts.$trigger && d.index === a.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"), d.$thumb.length && (d.opts.$orig = d.opts.$trigger)), d.$thumb && d.$thumb.length || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first")), d.$thumb && !d.$thumb.length && (d.$thumb = null), d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null), "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [a, d])), "function" === n.type(a.opts.caption) && (d.opts.caption = a.opts.caption.apply(e, [a, d])), d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""), "ajax" === d.type && (l = c.split(/\s+/, 2), l.length > 1 && (d.src = l.shift(), d.opts.filter = l.shift())), d.opts.modal && (d.opts = n.extend(!0, d.opts, {
            trapFocus: !0,
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), a.group.push(d);
        }), Object.keys(a.slides).length && (a.updateControls(), e = a.Thumbs, e && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function addEvents() {
        var e = this;
        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.close(t);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
            e.update(t);
          })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
            e.$refs.stage.show(), e.update(t);
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on("keydown.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null,
              a = o.current,
              i = t.keyCode || t.which;
          if (9 == i) return void (a.opts.trapFocus && e.focus(t));
          if (!(!a.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea"))) return 8 === i || 27 === i ? (t.preventDefault(), void e.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void e.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, i);
        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
        }), e.idleInterval = t.setInterval(function () {
          e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
        }, 1e3));
      },
      removeEvents: function removeEvents() {
        var e = this;
        s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
      },
      previous: function previous(t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function next(t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function jumpTo(t, e) {
        var a,
            i,
            s,
            r,
            c,
            l,
            d,
            u,
            f,
            h = this,
            g = h.group.length;

        if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
          if (t = parseInt(t, 10), s = h.current ? h.current.opts.loop : h.opts.loop, !s && (t < 0 || t >= g)) return !1;
          if (a = h.firstRun = !Object.keys(h.slides).length, c = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(t), g > 1 && ((s || r.index < g - 1) && h.createSlide(t + 1), (s || r.index > 0) && h.createSlide(t - 1)), h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", a), h.updateControls(), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = h.isMoved(r), r.$slide.addClass("fancybox-slide--current"), a) return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.addClass("fancybox-is-open").trigger("focus"), h.loadSlide(r), void h.preload("image");
          l = n.fancybox.getTranslate(c.$slide), d = n.fancybox.getTranslate(h.$refs.stage), n.each(h.slides, function (t, e) {
            n.fancybox.stop(e.$slide, !0);
          }), c.pos !== r.pos && (c.isComplete = !1), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (f = l.left - (c.pos * l.width + c.pos * c.opts.gutter), n.each(h.slides, function (t, o) {
            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });
            var a = o.pos * l.width + o.pos * o.opts.gutter;
            n.fancybox.setTranslate(o.$slide, {
              top: 0,
              left: a - d.left + f
            }), o.pos !== r.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > r.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
              top: 0,
              left: (o.pos - r.pos) * l.width + (o.pos - r.pos) * o.opts.gutter
            }, e, function () {
              o.$slide.css({
                transform: "",
                opacity: ""
              }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === h.currPos && h.complete();
            });
          })) : e && r.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, c.$slide.addClass("fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")), n.fancybox.animate(c.$slide, u, e, function () {
            c.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous");
          }, !1)), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), h.preload("image");
        }
      },
      createSlide: function createSlide(t) {
        var e,
            o,
            a = this;
        return o = t % a.group.length, o = o < 0 ? a.group.length + o : o, !a.slides[t] && a.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage), a.slides[t] = n.extend(!0, {}, a.group[o], {
          pos: t,
          $slide: e,
          isLoaded: !1
        }), a.updateSlide(a.slides[t])), a.slides[t];
      },
      scaleToActual: function scaleToActual(t, e, a) {
        var i,
            s,
            r,
            c,
            l,
            d = this,
            u = d.current,
            f = u.$content,
            p = n.fancybox.getTranslate(u.$slide).width,
            h = n.fancybox.getTranslate(u.$slide).height,
            g = u.width,
            b = u.height;
        d.isAnimating || d.isMoved() || !f || "image" != u.type || !u.isLoaded || u.hasError || (d.isAnimating = !0, n.fancybox.stop(f), t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, i = n.fancybox.getTranslate(f), i.top -= n.fancybox.getTranslate(u.$slide).top, i.left -= n.fancybox.getTranslate(u.$slide).left, c = g / i.width, l = b / i.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = i.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = i.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), d.updateCursor(g, b), n.fancybox.animate(f, {
          top: r,
          left: s,
          scaleX: c,
          scaleY: l
        }, a || 330, function () {
          d.isAnimating = !1;
        }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
      },
      scaleToFit: function scaleToFit(t) {
        var e,
            o = this,
            a = o.current,
            i = a.$content;
        o.isAnimating || o.isMoved() || !i || "image" != a.type || !a.isLoaded || a.hasError || (o.isAnimating = !0, n.fancybox.stop(i), e = o.getFitPos(a), o.updateCursor(e.width, e.height), n.fancybox.animate(i, {
          top: e.top,
          left: e.left,
          scaleX: e.width / i.width(),
          scaleY: e.height / i.height()
        }, t || 330, function () {
          o.isAnimating = !1;
        }));
      },
      getFitPos: function getFitPos(t) {
        var e,
            o,
            a,
            i,
            s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};
        return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), a = Math.min(1, e / l, o / d), l = a * l, d = a * d, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (i = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / i ? d = l / i : l > d * i && (l = d * i)), u.width = l, u.height = d, u);
      },
      update: function update(t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function updateSlide(t, e) {
        var o = this,
            a = t && t.$content,
            i = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;
        o.adjustCaption(t), a && (i || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(a), n.fancybox.setTranslate(a, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e);
      },
      centerSlide: function centerSlide(t) {
        var e = this,
            a = e.current,
            i = a.$slide;
        !e.isClosing && a && (i.siblings().css({
          transform: "",
          opacity: ""
        }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
          top: 0,
          left: 0,
          opacity: 1
        }, t === o ? 0 : t, function () {
          i.css({
            transform: "",
            opacity: ""
          }), a.isComplete || e.complete();
        }, !1));
      },
      isMoved: function isMoved(t) {
        var e,
            o,
            a = t || this.current;
        return !!a && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(a.$slide), !a.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5));
      },
      updateCursor: function updateCursor(t, e) {
        var o,
            a,
            i = this,
            s = i.current,
            r = i.$refs.container;
        s && !i.isClosing && i.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = i.canPan(t, e), a = !!o || i.isZoomable(), r.toggleClass("fancybox-is-zoomable", a), n("[data-fancybox-zoom]").prop("disabled", !a), o ? r.addClass("fancybox-can-pan") : a && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || i.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
      },
      isZoomable: function isZoomable() {
        var t,
            e = this,
            n = e.current;

        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (t = e.getFitPos(n), t && (n.width > t.width || n.height > t.height)) return !0;
        }

        return !1;
      },
      isScaledDown: function isScaledDown(t, e) {
        var a = this,
            i = !1,
            s = a.current,
            r = s.$content;
        return t !== o && e !== o ? i = t < s.width && e < s.height : r && (i = n.fancybox.getTranslate(r), i = i.width < s.width && i.height < s.height), i;
      },
      canPan: function canPan(t, e) {
        var a = this,
            i = a.current,
            s = null,
            r = !1;
        return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (r = a.getFitPos(i), t !== o && e !== o ? s = {
          width: t,
          height: e
        } : i.isComplete && (s = n.fancybox.getTranslate(i.$content)), s && r && (r = Math.abs(s.width - r.width) > 1.5 || Math.abs(s.height - r.height) > 1.5)), r;
      },
      loadSlide: function loadSlide(t) {
        var e,
            o,
            a,
            i = this;

        if (!t.isLoading && !t.isLoaded) {
          if (t.isLoading = !0, i.trigger("beforeLoad", t) === !1) return t.isLoading = !1, !1;

          switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
            case "image":
              i.setImage(t);
              break;

            case "iframe":
              i.setIframe(t);
              break;

            case "html":
              i.setContent(t, t.src || t.content);
              break;

            case "video":
              i.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
              break;

            case "inline":
              n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
              break;

            case "ajax":
              i.showLoading(t), a = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src,
                success: function success(e, n) {
                  "success" === n && i.setContent(t, e);
                },
                error: function error(e, n) {
                  e && "abort" !== n && i.setError(t);
                }
              })), o.one("onReset", function () {
                a.abort();
              });
              break;

            default:
              i.setError(t);
          }

          return !0;
        }
      },
      setImage: function setImage(t) {
        var o,
            a = this;
        setTimeout(function () {
          var e = t.$image;
          a.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || a.showLoading(t);
        }, 50), a.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), t.opts.preload !== !1 && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
          n(this).remove(), t.$ghost = null;
        }, o.onload = function () {
          a.afterLoad(t);
        }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), a.setBigImage(t);
      },
      checkSrcset: function checkSrcset(e) {
        var n,
            o,
            a,
            i,
            s = e.opts.srcset || e.opts.image.srcset;

        if (s) {
          a = t.devicePixelRatio || 1, i = t.innerWidth * a, o = s.split(",").map(function (t) {
            var e = {};
            return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);
              return 0 === n ? e.url = t : void (o && (e.value = o, e.postfix = t[t.length - 1]));
            }), e;
          }), o.sort(function (t, e) {
            return t.value - e.value;
          });

          for (var r = 0; r < o.length; r++) {
            var c = o[r];

            if ("w" === c.postfix && c.value >= i || "x" === c.postfix && c.value >= a) {
              n = c;
              break;
            }
          }

          !n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s);
        }
      },
      setBigImage: function setBigImage(t) {
        var o = this,
            a = e.createElement("img"),
            i = n(a);
        t.$image = i.one("error", function () {
          o.setError(t);
        }).one("load", function () {
          var e;
          t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), i.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !o.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (a.complete || "complete" == a.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : a.error && i.trigger("error");
      },
      resolveImageSlideSize: function resolveImageSlideSize(t, e, n) {
        var o = parseInt(t.opts.width, 10),
            a = parseInt(t.opts.height, 10);
        t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), a > 0 && (t.width = Math.floor(a * e / n), t.height = a);
      },
      setIframe: function setIframe(t) {
        var e,
            a = this,
            i = t.opts.iframe,
            s = t.$slide;
        n.fancybox.isMobile && (i.css.overflow = "scroll"), t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (a.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), a.afterLoad(t);
        }), s.on("refresh.fb", function () {
          var n,
              a,
              r = t.$content,
              c = i.css.width,
              l = i.css.height;

          if (1 === e[0].isReady) {
            try {
              n = e.contents(), a = n.find("body");
            } catch (t) {}

            a && a.length && a.children().length && (s.css("overflow", "visible"), r.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            }), c === o && (c = Math.ceil(Math.max(a[0].clientWidth, a.outerWidth(!0)))), r.css("width", c ? c : "").css("max-width", ""), l === o && (l = Math.ceil(Math.max(a[0].clientHeight, a.outerHeight(!0)))), r.css("height", l ? l : ""), s.css("overflow", "auto")), r.removeClass("fancybox-is-hidden");
          }
        })) : a.afterLoad(t), e.attr("src", t.src), s.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (t) {}

          n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
        });
      },
      setContent: function setContent(t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t));
      },
      setError: function setError(t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function showLoading(t) {
        var e = this;
        t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
      },
      hideLoading: function hideLoading(t) {
        var e = this;
        t = t || e.current, t && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function afterLoad(t) {
        var e = this;
        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t));
      },
      adjustCaption: function adjustCaption(t) {
        var e = this,
            n = t || e.current,
            o = n.opts.caption,
            a = e.$refs.caption,
            i = !1;
        n.opts.preventCaptionOverlap && o && o.length && (n.pos !== e.currPos ? (a = a.clone().empty().appendTo(a.parent()), a.html(o), i = a.outerHeight(!0), a.empty().remove()) : e.$caption && (i = e.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", i || ""));
      },
      adjustLayout: function adjustLayout(t) {
        var e,
            n,
            o,
            a,
            i = this,
            s = t || i.current;
        s.isLoaded && s.opts.disableLayoutFix !== !0 && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], a = s.$slide.css("padding-bottom"), parseFloat(a) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = a), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n));
      },
      revealContent: function revealContent(t) {
        var e,
            a,
            i,
            s,
            r = this,
            c = t.$slide,
            l = !1,
            d = !1,
            u = r.isMoved(t),
            f = t.isRevealed;
        return t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(t.forcedDuration === o ? i : t.forcedDuration, 10), !u && t.pos === r.currPos && i || (e = !1), "zoom" === e && (t.pos === r.currPos && i && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e ? (r.isAnimating = !0, l.scaleX = l.width / d.width, l.scaleY = l.height / d.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > .1), s && (d.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), p(t.$content), void n.fancybox.animate(t.$content, l, i, function () {
          r.isAnimating = !1, r.complete();
        })) : (r.updateSlide(t), e ? (n.fancybox.stop(c), a = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, c.addClass(a).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(c), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(c, "fancybox-slide--current", i, function () {
          c.removeClass(a).css({
            transform: "",
            opacity: ""
          }), t.pos === r.currPos && r.complete();
        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), f || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === r.currPos && r.complete())));
      },
      getThumbPos: function getThumbPos(t) {
        var e,
            o,
            a,
            i,
            s,
            r = !1,
            c = t.$thumb;
        return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), a = parseFloat(c.css("border-right-width") || 0), i = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
          top: e.top + o,
          left: e.left + s,
          width: e.width - a - s,
          height: e.height - o - i,
          scaleX: 1,
          scaleY: 1
        }, e.width > 0 && e.height > 0 && r);
      },
      complete: function complete() {
        var t,
            e = this,
            o = e.current,
            a = {};
        !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? a[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
        }), e.slides = a), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
        }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function preload(t) {
        var e,
            n,
            o = this;
        o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
      },
      focus: function focus(t, o) {
        var a,
            i,
            s = this,
            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
        s.isClosing || (a = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), a = a.filter(r).filter(function () {
          return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
        }), a.length ? (i = a.index(e.activeElement), t && t.shiftKey ? (i < 0 || 0 == i) && (t.preventDefault(), a.eq(a.length - 1).trigger("focus")) : (i < 0 || i == a.length - 1) && (t && t.preventDefault(), a.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
      },
      activate: function activate() {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      },
      close: function close(t, e) {
        var o,
            a,
            i,
            s,
            r,
            c,
            l,
            u = this,
            f = u.current,
            h = function h() {
          u.cleanUp(t);
        };

        return !u.isClosing && (u.isClosing = !0, u.trigger("beforeClose", t) === !1 ? (u.isClosing = !1, d(function () {
          u.update();
        }), !1) : (u.removeEvents(), i = f.$content, o = f.opts.animationEffect, a = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), t !== !0 ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), a && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", a + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || i && a && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(i), s = n.fancybox.getTranslate(i), c = {
          top: s.top,
          left: s.left,
          scaleX: s.width / l.width,
          scaleY: s.height / l.height,
          width: l.width,
          height: l.height
        }, r = f.opts.zoomOpacity, "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(i, c), p(i), n.fancybox.animate(i, l, a, h), !0) : (o && a ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, a, h) : t === !0 ? setTimeout(h, a) : h(), !0)));
      },
      cleanUp: function cleanUp(e) {
        var o,
            a,
            i,
            s = this,
            r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (a = t.scrollX, i = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(i).scrollLeft(a))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
      },
      trigger: function trigger(t, e) {
        var o,
            a = Array.prototype.slice.call(arguments, 1),
            i = this,
            s = e && e.opts ? e : i.current;
        return s ? a.unshift(s) : s = i, a.unshift(i), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, a)), o === !1 ? o : void ("afterClose" !== t && i.$refs ? i.$refs.container.trigger(t + ".fb", a) : r.trigger(t + ".fb", a));
      },
      updateControls: function updateControls() {
        var t = this,
            o = t.current,
            a = o.index,
            i = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;
        o.$slide.trigger("refresh"), t.$caption = r && r.length ? s.html(r) : null, t.hasHiddenControls || t.isIdle || t.showControls(), i.find("[data-fancybox-count]").html(t.group.length), i.find("[data-fancybox-index]").html(a + 1), i.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && a <= 0), i.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && a >= t.group.length - 1), "image" === o.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
      },
      hideControls: function hideControls(t) {
        var e = this,
            n = ["infobar", "toolbar", "nav"];
        !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
          return "fancybox-show-" + t;
        }).join(" ")), this.hasHiddenControls = !0;
      },
      showControls: function showControls() {
        var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
        t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
      },
      toggleControls: function toggleControls() {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      }
    }), n.fancybox = {
      version: "3.5.2",
      defaults: i,
      getInstance: function getInstance(t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
        return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
      },
      open: function open(t, e, n) {
        return new b(t, e, n);
      },
      close: function close(t) {
        var e = this.getInstance();
        e && (e.close(), t === !0 && this.close(t));
      },
      destroy: function destroy() {
        this.close(!0), r.add("body").off("click.fb-start", "**");
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: function () {
        var n = e.createElement("div");
        return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
      }(),
      getTranslate: function getTranslate(t) {
        var e;
        return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
          top: e.top || 0,
          left: e.left || 0,
          width: e.width,
          height: e.height,
          opacity: parseFloat(t.css("opacity"))
        });
      },
      setTranslate: function setTranslate(t, e) {
        var n = "",
            a = {};
        if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== o && (n += " scaleX(" + e.scaleX + ")"), n.length && (a.transform = n), e.opacity !== o && (a.opacity = e.opacity), e.width !== o && (a.width = e.width), e.height !== o && (a.height = e.height), t.css(a);
      },
      animate: function animate(t, e, a, i, s) {
        var r,
            c = this;
        n.isFunction(a) && (i = a, a = null), c.stop(t), r = c.getTranslate(t), t.on(f, function (l) {
          (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (c.stop(t), n.isNumeric(a) && t.css("transition-duration", ""), n.isPlainObject(e) ? e.scaleX !== o && e.scaleY !== o && c.setTranslate(t, {
            top: e.top,
            left: e.left,
            width: r.width * e.scaleX,
            height: r.height * e.scaleY,
            scaleX: 1,
            scaleY: 1
          }) : s !== !0 && t.removeClass(e), n.isFunction(i) && i(l));
        }), n.isNumeric(a) && t.css("transition-duration", a + "ms"), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger(f);
        }, a + 33));
      },
      stop: function stop(t, e) {
        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
      }
    }, n.fn.fancybox = function (t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
        options: t
      }, a) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: t
      }, a), this;
    }, r.on("click.fb-start", "[data-fancybox]", a), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
      n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
        $trigger: n(this)
      });
    }), function () {
      var t = ".fancybox-button",
          e = "fancybox-focus",
          o = null;
      r.on("mousedown mouseup focus blur", t, function (a) {
        switch (a.type) {
          case "mousedown":
            o = n(this);
            break;

          case "mouseup":
            o = null;
            break;

          case "focusin":
            n(t).removeClass(e), n(this).is(o) || n(this).is("[disabled]") || n(this).addClass(e);
            break;

          case "focusout":
            n(t).removeClass(e);
        }
      });
    }();
  }
}(window, document, jQuery), function (t) {
  "use strict";

  var e = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "//www.youtube-nocookie.com/embed/$4",
      thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function url(t) {
        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function url(t) {
        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  },
      n = function n(e, _n, o) {
    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(_n, function (t, n) {
      e = e.replace("$" + t, n || "");
    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
  };

  t(document).on("objectNeedsType.fb", function (o, a, i) {
    var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = i.src || "",
        h = !1;
    s = t.extend(!0, {}, e, i.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");

          for (var a = 0; a < d.length; ++a) {
            var s = d[a].split("=", 2);
            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
          }
        }

        return l = t.extend(!0, {}, o.params, i.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, i) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, i) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
      }
    }), h ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = r), "iframe" === h && (i.opts = t.extend(!0, i.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), t.extend(i, {
      type: h,
      src: p,
      origSrc: i.src,
      contentSource: f,
      contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
    })) : p && (i.type = i.opts.defaultType);
  });
  var o = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: !1,
      loaded: !1
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: !1,
      loaded: !1
    },
    load: function load(t) {
      var e,
          n = this;
      return this[t].loaded ? void setTimeout(function () {
        n.done(t);
      }) : void (this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t);
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t);
      }, document.body.appendChild(e)));
    },
    done: function done(e) {
      var n, o, a;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, n = t.fancybox.getInstance(), n && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? a = new YT.Player(o.attr("id"), {
        events: {
          onStateChange: function onStateChange(t) {
            0 == t.data && n.next();
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (a = new Vimeo.Player(o), a.on("ended", function () {
        n.next();
      })));
    }
  };
  t(document).on({
    "afterShow.fb": function afterShowFb(t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
    }
  });
}(jQuery), function (t, e, n) {
  "use strict";

  var o = function () {
    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 1e3 / 60);
    };
  }(),
      a = function () {
    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
      t.clearTimeout(e);
    };
  }(),
      i = function i(e) {
    var n = [];
    e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var o in e) {
      e[o].pageX ? n.push({
        x: e[o].pageX,
        y: e[o].pageY
      }) : e[o].clientX && n.push({
        x: e[o].clientX,
        y: e[o].clientY
      });
    }

    return n;
  },
      s = function s(t, e, n) {
    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
  },
      r = function r(t) {
    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;

    for (var e = 0, o = t[0].attributes, a = o.length; e < a; e++) {
      if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
    }

    return !1;
  },
      c = function c(e) {
    var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        a = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
    return a || i;
  },
      l = function l(t) {
    for (var e = !1;;) {
      if (e = c(t.get(0))) break;
      if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
    }

    return e;
  },
      d = function d(t) {
    var e = this;
    e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
  };

  d.prototype.destroy = function () {
    var t = this;
    t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (a(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null);
  }, d.prototype.ontouchstart = function (o) {
    var a = this,
        c = n(o.target),
        d = a.instance,
        u = d.current,
        f = u.$slide,
        p = u.$content,
        h = "touchstart" == o.type;

    if (h && a.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
      a.realPoints = a.startPoints = i(o), a.startPoints.length && (u.touch && o.stopPropagation(), a.startEvent = o, a.canTap = !0, a.$target = c, a.$content = p, a.opts = u.opts.touch, a.isPanning = !1, a.isSwiping = !1, a.isZooming = !1, a.isScrolling = !1, a.canPan = d.canPan(), a.startTime = new Date().getTime(), a.distanceX = a.distanceY = a.distance = 0, a.canvasWidth = Math.round(f[0].clientWidth), a.canvasHeight = Math.round(f[0].clientHeight), a.contentLastPos = null, a.contentStartPos = n.fancybox.getTranslate(a.$content) || {
        top: 0,
        left: 0
      }, a.sliderStartPos = n.fancybox.getTranslate(f), a.stagePos = n.fancybox.getTranslate(d.$refs.stage), a.sliderStartPos.top -= a.stagePos.top, a.sliderStartPos.left -= a.stagePos.left, a.contentStartPos.top -= a.stagePos.top, a.contentStartPos.left -= a.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(a, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(a, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", a.onscroll, !0), ((a.opts || a.canPan) && (c.is(a.$stage) || a.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.hasClass("fancybox-caption"))) && (a.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && a.isScrollable || o.preventDefault(), (1 === a.startPoints.length || u.hasError) && (a.canPan ? (n.fancybox.stop(a.$content), a.isPanning = !0) : a.isSwiping = !0, a.$container.addClass("fancybox-is-grabbing")), 2 === a.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (a.canTap = !1, a.isSwiping = !1, a.isPanning = !1, a.isZooming = !0, n.fancybox.stop(a.$content), a.centerPointStartX = .5 * (a.startPoints[0].x + a.startPoints[1].x) - n(t).scrollLeft(), a.centerPointStartY = .5 * (a.startPoints[0].y + a.startPoints[1].y) - n(t).scrollTop(), a.percentageOfImageAtPinchPointX = (a.centerPointStartX - a.contentStartPos.left) / a.contentStartPos.width, a.percentageOfImageAtPinchPointY = (a.centerPointStartY - a.contentStartPos.top) / a.contentStartPos.height, a.startDistanceBetweenFingers = s(a.startPoints[0], a.startPoints[1]))));
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;
    n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
  }, d.prototype.ontouchmove = function (t) {
    var e = this;
    return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = i(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
  }, d.prototype.onSwipe = function (e) {
    var i,
        s = this,
        r = s.instance,
        c = s.isSwiping,
        l = s.sliderStartPos.left || 0;
    if (c !== !0) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
      top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
      left: l
    }, s.requestId && (a(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
        });
      }), s.$container.addClass("fancybox-is-sliding"));
    });else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (i = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = i > 45 && i < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
      r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, a;
        n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), a = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - a.top, s.sliderStartPos.left = o.left - a.left), n.fancybox.setTranslate(e.$slide, {
          top: o.top - a.top,
          left: o.left - a.left
        });
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
    }
  }, d.prototype.onPan = function () {
    var t = this;
    return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && a(t.requestId), void (t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos);
    })));
  }, d.prototype.limitMovement = function () {
    var t,
        e,
        n,
        o,
        a,
        i,
        s = this,
        r = s.canvasWidth,
        c = s.canvasHeight,
        l = s.distanceX,
        d = s.distanceY,
        u = s.contentStartPos,
        f = u.left,
        p = u.top,
        h = u.width,
        g = u.height;
    return a = h > r ? f + l : f, i = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && a > t && (a = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && a < n && (a = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && i > e && (i = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && i < o && (i = o + 1 - Math.pow(o - p - d, .8) || 0), {
      top: i,
      left: a
    };
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var a = this,
        i = a.canvasWidth,
        s = a.canvasHeight;
    return n > i ? (t = t > 0 ? 0 : t, t = t < i - n ? i - n : t) : t = Math.max(0, i / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    };
  }, d.prototype.onZoom = function () {
    var e = this,
        i = e.contentStartPos,
        r = i.width,
        c = i.height,
        l = i.left,
        d = i.top,
        u = s(e.newPoints[0], e.newPoints[1]),
        f = u / e.startDistanceBetweenFingers,
        p = Math.floor(r * f),
        h = Math.floor(c * f),
        g = (r - p) * e.percentageOfImageAtPinchPointX,
        b = (c - h) * e.percentageOfImageAtPinchPointY,
        m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
        v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
        y = m - e.centerPointStartX,
        x = v - e.centerPointStartY,
        w = l + (g + y),
        $ = d + (b + x),
        S = {
      top: $,
      left: w,
      scaleX: f,
      scaleY: f
    };
    e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && a(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, d.prototype.ontouchend = function (t) {
    var o = this,
        s = o.isSwiping,
        r = o.isPanning,
        c = o.isZooming,
        l = o.isScrolling;
    return o.endPoints = i(t), o.dMs = Math.max(new Date().getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (a(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, void (r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)));
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
        a = !1,
        i = o.instance.group.length,
        s = Math.abs(o.distanceX),
        r = "x" == t && i > 1 && (o.dMs > 130 && s > 10 || s > 50),
        c = 300;
    o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
      top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
      opacity: 0
    }, 200), a = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? a = o.instance.previous(c) : r && o.distanceX < 0 && (a = o.instance.next(c)), a !== !1 || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding");
  }, d.prototype.endPanning = function () {
    var t,
        e,
        o,
        a = this;
    a.contentLastPos && (a.opts.momentum === !1 || a.dMs > 350 ? (t = a.contentLastPos.left, e = a.contentLastPos.top) : (t = a.contentLastPos.left + 500 * a.velocityX, e = a.contentLastPos.top + 500 * a.velocityY), o = a.limitPosition(t, e, a.contentStartPos.width, a.contentStartPos.height), o.width = a.contentStartPos.width, o.height = a.contentStartPos.height, n.fancybox.animate(a.$content, o, 330));
  }, d.prototype.endZooming = function () {
    var t,
        e,
        o,
        a,
        i = this,
        s = i.instance.current,
        r = i.newWidth,
        c = i.newHeight;
    i.contentLastPos && (t = i.contentLastPos.left, e = i.contentLastPos.top, a = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(i.$content, a), r < i.canvasWidth && c < i.canvasHeight ? i.instance.scaleToFit(150) : r > s.width || c > s.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r, c), n.fancybox.animate(i.$content, o, 150)));
  }, d.prototype.onTap = function (e) {
    var o,
        a = this,
        s = n(e.target),
        r = a.instance,
        c = r.current,
        l = e && i(e) || a.startPoints,
        d = l[0] ? l[0].x - n(t).scrollLeft() - a.stagePos.left : 0,
        u = l[0] ? l[0].y - n(t).scrollTop() - a.stagePos.top : 0,
        f = function f(t) {
      var o = c.opts[t];
      if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
        case "close":
          r.close(a.startEvent);
          break;

        case "toggleControls":
          r.toggleControls();
          break;

        case "next":
          r.next();
          break;

        case "nextOrClose":
          r.group.length > 1 ? r.next() : r.close(a.startEvent);
          break;

        case "zoom":
          "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(a.startEvent));
      }
    };

    if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";else if (s.is(".fancybox-slide")) o = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
        o = "Content";
      }

      if (a.tapped) {
        if (clearTimeout(a.tapped), a.tapped = null, Math.abs(d - a.tapX) > 50 || Math.abs(u - a.tapY) > 50) return this;
        f("dblclick" + o);
      } else a.tapX = d, a.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? a.tapped = setTimeout(function () {
        a.tapped = null, r.isAnimating || f("click" + o);
      }, 500) : f("click" + o);

      return this;
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e));
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy();
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3,
      progress: !0
    }
  });

  var n = function n(t) {
    this.instance = t, this.init();
  };

  e.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function init() {
      var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
      t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle();
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
    },
    set: function set(t) {
      var n = this,
          o = n.instance,
          a = o.current;
      a && (t === !0 || a.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== a.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
        scaleX: 1
      }, a.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
      }, a.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls());
    },
    clear: function clear() {
      var t = this;
      clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide();
    },
    start: function start() {
      var t = this,
          e = t.instance.current;
      e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0));
    },
    stop: function stop() {
      var t = this,
          e = t.instance.current;
      t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide();
    },
    toggle: function toggle() {
      var t = this;
      t.isActive ? t.stop() : t.start();
    }
  }), e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e));
    },
    "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var a = e && e.SlideShow;
      o ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive && a.clear();
    },
    "afterShow.fb": function afterShowFb(t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set();
    },
    "afterKeydown.fb": function afterKeydownFb(n, o, a, i, s) {
      var r = o && o.SlideShow;
      !r || !a.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle());
    },
    "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
      var n = e && e.SlideShow;
      n && n.stop();
    }
  }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
        o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set());
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var a = e[o];

      if (a && a[1] in t) {
        for (var i = 0; i < a.length; i++) {
          n[e[0][i]] = a[i];
        }

        return n;
      }
    }

    return !1;
  }();

  if (n) {
    var o = {
      request: function request(e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function exit() {
        t[n.exitFullscreen]();
      },
      toggle: function toggle(e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function isFullscreen() {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function enabled() {
        return Boolean(t[n.fullscreenEnabled]);
      }
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
      },
      fullScreen: {
        autoStart: !1
      }
    }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(),
          n = e.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
    });
  }

  e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      var a;
      return n ? void (e && e.group[e.currIndex].opts.fullScreen ? (a = e.$refs.container, a.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle();
      }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()) : void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
    },
    "afterKeydown.fb": function afterKeydownFb(t, e, n, o, a) {
      e && e.FullScreen && 70 === a && (o.preventDefault(), e.FullScreen.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = "fancybox-thumbs",
      o = n + "-active";
  e.fancybox.defaults = e.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, e.fancybox.defaults);

  var a = function a(t) {
    this.init(t);
  };

  e.extend(a.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function init(t) {
      var e = this,
          n = t.group,
          o = 0;
      e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");

      for (var a = 0, i = n.length; a < i && (n[a].thumb && o++, !(o > 1)); a++) {
        ;
      }

      o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle();
      }), e.isActive = !0) : e.$button.hide();
    },
    create: function create() {
      var t,
          o = this,
          a = o.instance,
          i = o.opts.parentEl,
          s = [];
      o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)), o.$grid.on("click", "a", function () {
        a.jumpTo(e(this).attr("data-index"));
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(a.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0));
    },
    focus: function focus(t) {
      var e,
          n,
          a = this,
          i = a.$list,
          s = a.$grid;
      a.instance.current && (e = i.children().removeClass(o).filter('[data-index="' + a.instance.current.index + '"]').addClass(o), n = e.position(), "y" === a.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
        scrollTop: i.scrollTop() + n.top
      }, t) : "x" === a.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && i.parent().stop().animate({
        scrollLeft: n.left
      }, t));
    },
    update: function update() {
      var t = this;
      t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update();
    },
    hide: function hide() {
      this.isVisible = !1, this.update();
    },
    show: function show() {
      this.isVisible = !0, this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible, this.update();
    }
  }), e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      var n;
      e && !e.Thumbs && (n = new a(e), n.isActive && n.opts.autoStart === !0 && n.show());
    },
    "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var a = e && e.Thumbs;
      a && a.isVisible && a.focus(o ? 0 : 250);
    },
    "afterKeydown.fb": function afterKeydownFb(t, e, n, o, a) {
      var i = e && e.Thumbs;
      i && i.isActive && 71 === a && (o.preventDefault(), i.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  function n(t) {
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t];
    });
  }

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
    },
    share: {
      url: function url(t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), e(t).on("click", "[data-fancybox-share]", function () {
    var t,
        o,
        a = e.fancybox.getInstance(),
        i = a.current || null;
    i && ("function" === e.type(i.opts.share.url) && (t = i.opts.share.url.apply(i, [a, i])), o = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, a.$caption ? encodeURIComponent(a.$caption.text()) : ""), e.fancybox.open({
      src: a.translate(a, o),
      type: "html",
      opts: {
        touch: !1,
        animationEffect: !1,
        afterLoad: function afterLoad(t, e) {
          a.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0);
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        },
        mobile: {
          autoFocus: !1
        }
      }
    }));
  });
}(document, jQuery), function (t, e, n) {
  "use strict";

  function o() {
    var e = t.location.hash.substr(1),
        n = e.split("-"),
        o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
        a = n.join("-");
    return {
      hash: e,
      index: o < 1 ? 1 : o,
      gallery: a
    };
  }

  function a(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
  }

  function i(t) {
    var e, n;
    return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : ""), "" !== n && n);
  }

  n.escapeSelector || (n.escapeSelector = function (t) {
    var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        n = function n(t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    };

    return (t + "").replace(e, n);
  }), n(function () {
    n.fancybox.defaults.hash !== !1 && (n(e).on({
      "onInit.fb": function onInitFb(t, e) {
        var n, a;
        e.group[e.currIndex].opts.hash !== !1 && (n = o(), a = i(e), a && n.gallery && a == n.gallery && (e.currIndex = n.index - 1));
      },
      "beforeShow.fb": function beforeShowFb(n, o, a, s) {
        var r;
        a && a.opts.hash !== !1 && (r = i(o), r && (o.currentHash = r + (o.group.length > 1 ? "-" + (a.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null;
        }, 300))));
      },
      "beforeClose.fb": function beforeCloseFb(n, o, a) {
        a.opts.hash !== !1 && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null);
      }
    }), n(t).on("hashchange.fb", function () {
      var t = o(),
          e = null;
      n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var a = n(o).data("FancyBox");
        if (a && a.currentHash) return e = a, !1;
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && a(t);
    }), setTimeout(function () {
      n.fancybox.getInstance() || a(o());
    }, 50));
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  var n = new Date().getTime();
  e(t).on({
    "onInit.fb": function onInitFb(t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
            a = new Date().getTime();
        e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, a - n < 250 || (n = a, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
      });
    }
  });
}(document, jQuery);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.11
*/
!function (e) {
  function t(a) {
    if (n[a]) return n[a].exports;
    var i = n[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
  }

  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, a) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: a
    });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 3);
}([function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(2)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e) {
    return e;
  });
}, function (e, t, n) {
  "use strict";

  var a,
      i,
      r,
      o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  };
  !function (o) {
    i = [n(0), n(10), n(11)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t, n, a) {
    function i(t, n, o) {
      if (!(this instanceof i)) return new i(t, n, o);
      this.el = a, this.events = {}, this.maskset = a, this.refreshValue = !1, !0 !== o && (e.isPlainObject(t) ? n = t : (n = n || {}).alias = t, this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== a, this.userOptions = n || {}, this.isRTL = this.opts.numericInput, r(this.opts.alias, n, this.opts));
    }

    function r(t, n, o) {
      var s = i.prototype.aliases[t];
      return s ? (s.alias && r(s.alias, a, o), e.extend(!0, o, s), e.extend(!0, o, n), !0) : (null === o.mask && (o.mask = t), !1);
    }

    function s(t, n) {
      function r(t, r, o) {
        var s = !1;

        if (null !== t && "" !== t || ((s = null !== o.regex) ? t = (t = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, t = ".*")), 1 === t.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), o.repeat > 0 || "*" === o.repeat || "+" === o.repeat) {
          var l = "*" === o.repeat ? 0 : "+" === o.repeat ? 1 : o.repeat;
          t = o.groupmarker.start + t + o.groupmarker.end + o.quantifiermarker.start + l + "," + o.repeat + o.quantifiermarker.end;
        }

        var c,
            u = s ? "regex_" + o.regex : o.numericInput ? t.split("").reverse().join("") : t;
        return i.prototype.masksCache[u] === a || !0 === n ? (c = {
          mask: t,
          maskToken: i.prototype.analyseMask(t, s, o),
          validPositions: {},
          _buffer: a,
          buffer: a,
          tests: {},
          metadata: r,
          maskLength: a
        }, !0 !== n && (i.prototype.masksCache[u] = c, c = e.extend(!0, {}, i.prototype.masksCache[u]))) : c = e.extend(!0, {}, i.prototype.masksCache[u]), c;
      }

      if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
        if (t.mask.length > 1) {
          t.keepStatic = null === t.keepStatic || t.keepStatic;
          var o = t.groupmarker.start;
          return e.each(t.numericInput ? t.mask.reverse() : t.mask, function (n, i) {
            o.length > 1 && (o += t.groupmarker.end + t.alternatormarker + t.groupmarker.start), i.mask === a || e.isFunction(i.mask) ? o += i : o += i.mask;
          }), o += t.groupmarker.end, r(o, t.mask, t);
        }

        t.mask = t.mask.pop();
      }

      return t.mask && t.mask.mask !== a && !e.isFunction(t.mask.mask) ? r(t.mask.mask, t.mask, t) : r(t.mask, t.mask, t);
    }

    function l(r, s, c) {
      function m(e, t, n) {
        t = t || 0;
        var i,
            r,
            o,
            s = [],
            l = 0,
            u = v();

        do {
          !0 === e && h().validPositions[l] ? (r = (o = h().validPositions[l]).match, i = o.locator.slice(), s.push(!0 === n ? o.input : !1 === n ? r.nativeDef : I(l, r))) : (r = (o = b(l, i, l - 1)).match, i = o.locator.slice(), (!1 === c.jitMasking || l < u || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > l) && s.push(!1 === n ? r.nativeDef : I(l, r))), l++;
        } while ((Q === a || l < Q) && (null !== r.fn || "" !== r.def) || t > l);

        return "" === s[s.length - 1] && s.pop(), h().maskLength = l + 1, s;
      }

      function h() {
        return s;
      }

      function g(e) {
        var t = h();
        t.buffer = a, !0 !== e && (t.validPositions = {}, t.p = 0);
      }

      function v(e, t, n) {
        var i = -1,
            r = -1,
            o = n || h().validPositions;
        e === a && (e = -1);

        for (var s in o) {
          var l = parseInt(s);
          o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (i = l), l >= e && (r = l));
        }

        return -1 !== i && e - i > 1 || r < e ? i : r;
      }

      function y(t, n, i, r) {
        var o,
            s = t,
            l = e.extend(!0, {}, h().validPositions),
            u = !1;

        for (h().p = t, o = n - 1; o >= s; o--) {
          h().validPositions[o] !== a && (!0 !== i && (!h().validPositions[o].match.optionality && function (e) {
            var t = h().validPositions[e];

            if (t !== a && null === t.match.fn) {
              var n = h().validPositions[e - 1],
                  i = h().validPositions[e + 1];
              return n !== a && i !== a;
            }

            return !1;
          }(o) || !1 === c.canClearPosition(h(), o, v(), r, c)) || delete h().validPositions[o]);
        }

        for (g(!0), o = s + 1; o <= v();) {
          for (; h().validPositions[s] !== a;) {
            s++;
          }

          if (o < s && (o = s + 1), h().validPositions[o] === a && M(o)) o++;else {
            var p = b(o);
            !1 === u && l[s] && l[s].match.def === p.match.def ? (h().validPositions[s] = e.extend(!0, {}, l[s]), h().validPositions[s].input = p.input, delete h().validPositions[o], o++) : P(s, p.match.def) ? !1 !== R(s, p.input || I(o), !0) && (delete h().validPositions[o], o++, u = !0) : M(o) || (o++, s--), s++;
          }
        }

        g(!0);
      }

      function k(e, t) {
        for (var n, i = e, r = v(), o = h().validPositions[r] || S(0)[0], s = o.alternation !== a ? o.locator[o.alternation].toString().split(",") : [], l = 0; l < i.length && (!((n = i[l]).match && (c.greedy && !0 !== n.match.optionalQuantifier || (!1 === n.match.optionality || !1 === n.match.newBlockMarker) && !0 !== n.match.optionalQuantifier) && (o.alternation === a || o.alternation !== n.alternation || n.locator[o.alternation] !== a && O(n.locator[o.alternation].toString().split(","), s))) || !0 === t && (null !== n.match.fn || /[0-9a-bA-Z]/.test(n.match.def))); l++) {
          ;
        }

        return n;
      }

      function b(e, t, n) {
        return h().validPositions[e] || k(S(e, t ? t.slice() : t, n));
      }

      function x(e) {
        return h().validPositions[e] ? h().validPositions[e] : S(e)[0];
      }

      function P(e, t) {
        for (var n = !1, a = S(e), i = 0; i < a.length; i++) {
          if (a[i].match && a[i].match.def === t) {
            n = !0;
            break;
          }
        }

        return n;
      }

      function S(t, n, i) {
        function r(n, i, o, l) {
          function p(o, l, g) {
            function v(t, n) {
              var a = 0 === e.inArray(t, n.matches);
              return a || e.each(n.matches, function (e, i) {
                if (!0 === i.isQuantifier && (a = v(t, n.matches[e - 1]))) return !1;
              }), a;
            }

            function y(t, n, i) {
              var r, o;
              if (h().validPositions[t - 1] && i && h().tests[t]) for (var s = h().validPositions[t - 1].locator, l = h().tests[t][0].locator, c = 0; c < i; c++) {
                if (s[c] !== l[c]) return s.slice(i + 1);
              }
              return (h().tests[t] || h().validPositions[t]) && e.each(h().tests[t] || [h().validPositions[t]], function (e, t) {
                var s = i !== a ? i : t.alternation,
                    l = t.locator[s] !== a ? t.locator[s].toString().indexOf(n) : -1;
                (o === a || l < o) && -1 !== l && (r = t, o = l);
              }), r ? r.locator.slice((i !== a ? i : r.alternation) + 1) : i !== a ? y(t, n) : a;
            }

            if (u > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + h().mask;
            if (u === t && o.matches === a) return f.push({
              match: o,
              locator: l.reverse(),
              cd: m
            }), !0;

            if (o.matches !== a) {
              if (o.isGroup && g !== o) {
                if (o = p(n.matches[e.inArray(o, n.matches) + 1], l)) return !0;
              } else if (o.isOptional) {
                var k = o;

                if (o = r(o, i, l, g)) {
                  if (s = f[f.length - 1].match, !v(s, k)) return !0;
                  d = !0, u = t;
                }
              } else if (o.isAlternator) {
                var b,
                    x = o,
                    P = [],
                    S = f.slice(),
                    w = l.length,
                    A = i.length > 0 ? i.shift() : -1;

                if (-1 === A || "string" == typeof A) {
                  var E,
                      C = u,
                      O = i.slice(),
                      R = [];
                  if ("string" == typeof A) R = A.split(",");else for (E = 0; E < x.matches.length; E++) {
                    R.push(E);
                  }

                  for (var M = 0; M < R.length; M++) {
                    if (E = parseInt(R[M]), f = [], i = y(u, E, w) || O.slice(), !0 !== (o = p(x.matches[E] || n.matches[E], [E].concat(l), g) || o) && o !== a && R[R.length - 1] < x.matches.length) {
                      var _ = e.inArray(o, n.matches) + 1;

                      n.matches.length > _ && (o = p(n.matches[_], [_].concat(l.slice(1, l.length)), g)) && (R.push(_.toString()), e.each(f, function (e, t) {
                        t.alternation = l.length - 1;
                      }));
                    }

                    b = f.slice(), u = C, f = [];

                    for (var D = 0; D < b.length; D++) {
                      var j = b[D],
                          N = !1;
                      j.alternation = j.alternation || w;

                      for (var I = 0; I < P.length; I++) {
                        var F = P[I];

                        if ("string" != typeof A || -1 !== e.inArray(j.locator[j.alternation].toString(), R)) {
                          if (function (e, t) {
                            return e.match.nativeDef === t.match.nativeDef || e.match.def === t.match.nativeDef || e.match.nativeDef === t.match.def;
                          }(j, F)) {
                            N = !0, j.alternation === F.alternation && -1 === F.locator[F.alternation].toString().indexOf(j.locator[j.alternation]) && (F.locator[F.alternation] = F.locator[F.alternation] + "," + j.locator[j.alternation], F.alternation = j.alternation), j.match.nativeDef === F.match.def && (j.locator[j.alternation] = F.locator[F.alternation], P.splice(P.indexOf(F), 1, j));
                            break;
                          }

                          if (j.match.def === F.match.def) {
                            N = !1;
                            break;
                          }

                          if (function (e, n) {
                            return null === e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def, h(), t, !1, c, !1);
                          }(j, F) || function (e, n) {
                            return null !== e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def.replace(/[\[\]]/g, ""), h(), t, !1, c, !1);
                          }(j, F)) {
                            j.alternation === F.alternation && -1 === j.locator[j.alternation].toString().indexOf(F.locator[F.alternation].toString().split("")[0]) && (j.na = j.na || j.locator[j.alternation].toString(), -1 === j.na.indexOf(j.locator[j.alternation].toString().split("")[0]) && (j.na = j.na + "," + j.locator[F.alternation].toString().split("")[0]), N = !0, j.locator[j.alternation] = F.locator[F.alternation].toString().split("")[0] + "," + j.locator[j.alternation], P.splice(P.indexOf(F), 0, j));
                            break;
                          }
                        }
                      }

                      N || P.push(j);
                    }
                  }

                  "string" == typeof A && (P = e.map(P, function (t, n) {
                    if (isFinite(n)) {
                      var i = t.alternation,
                          r = t.locator[i].toString().split(",");
                      t.locator[i] = a, t.alternation = a;

                      for (var o = 0; o < r.length; o++) {
                        -1 !== e.inArray(r[o], R) && (t.locator[i] !== a ? (t.locator[i] += ",", t.locator[i] += r[o]) : t.locator[i] = parseInt(r[o]), t.alternation = i);
                      }

                      if (t.locator[i] !== a) return t;
                    }
                  })), f = S.concat(P), u = t, d = f.length > 0, o = P.length > 0, i = O.slice();
                } else o = p(x.matches[A] || n.matches[A], [A].concat(l), g);

                if (o) return !0;
              } else if (o.isQuantifier && g !== n.matches[e.inArray(o, n.matches) - 1]) for (var T = o, G = i.length > 0 ? i.shift() : 0; G < (isNaN(T.quantifier.max) ? G + 1 : T.quantifier.max) && u <= t; G++) {
                var B = n.matches[e.inArray(T, n.matches) - 1];

                if (o = p(B, [G].concat(l), B)) {
                  if (s = f[f.length - 1].match, s.optionalQuantifier = G > T.quantifier.min - 1, v(s, B)) {
                    if (G > T.quantifier.min - 1) {
                      d = !0, u = t;
                      break;
                    }

                    return !0;
                  }

                  return !0;
                }
              } else if (o = r(o, i, l, g)) return !0;
            } else u++;
          }

          for (var g = i.length > 0 ? i.shift() : 0; g < n.matches.length; g++) {
            if (!0 !== n.matches[g].isQuantifier) {
              var v = p(n.matches[g], [g].concat(o), l);
              if (v && u === t) return v;
              if (u > t) break;
            }
          }
        }

        function o(e) {
          if (c.keepStatic && t > 0 && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def)) {
            if (h().validPositions[t - 1] === a) return [k(e)];
            if (h().validPositions[t - 1].alternation === e[0].alternation) return [k(e)];
            if (h().validPositions[t - 1]) return [k(e)];
          }

          return e;
        }

        var s,
            l = h().maskToken,
            u = n ? i : 0,
            p = n ? n.slice() : [0],
            f = [],
            d = !1,
            m = n ? n.join("") : "";

        if (t > -1) {
          if (n === a) {
            for (var g, v = t - 1; (g = h().validPositions[v] || h().tests[v]) === a && v > -1;) {
              v--;
            }

            g !== a && v > -1 && (p = function (t) {
              var n = [];
              return e.isArray(t) || (t = [t]), t.length > 0 && (t[0].alternation === a ? 0 === (n = k(t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : e.each(t, function (e, t) {
                if ("" !== t.def) if (0 === n.length) n = t.locator.slice();else for (var a = 0; a < n.length; a++) {
                  t.locator[a] && -1 === n[a].toString().indexOf(t.locator[a]) && (n[a] += "," + t.locator[a]);
                }
              })), n;
            }(g), m = p.join(""), u = v);
          }

          if (h().tests[t] && h().tests[t][0].cd === m) return o(h().tests[t]);

          for (var y = p.shift(); y < l.length && !(r(l[y], p, [y]) && u === t || u > t); y++) {
            ;
          }
        }

        return (0 === f.length || d) && f.push({
          match: {
            fn: null,
            cardinality: 0,
            optionality: !0,
            casing: null,
            def: "",
            placeholder: ""
          },
          locator: [],
          cd: m
        }), n !== a && h().tests[t] ? o(e.extend(!0, [], f)) : (h().tests[t] = e.extend(!0, [], f), o(h().tests[t]));
      }

      function w() {
        return h()._buffer === a && (h()._buffer = m(!1, 1), h().buffer === a && (h().buffer = h()._buffer.slice())), h()._buffer;
      }

      function A(e) {
        return h().buffer !== a && !0 !== e || (h().buffer = m(!0, v(), !0)), h().buffer;
      }

      function E(e, t, n) {
        var i, r;
        if (!0 === e) g(), e = 0, t = n.length;else for (i = e; i < t; i++) {
          delete h().validPositions[i];
        }

        for (r = e, i = e; i < t; i++) {
          if (g(!0), n[i] !== c.skipOptionalPartCharacter) {
            var o = R(r, n[i], !0, !0);
            !1 !== o && (g(!0), r = o.caret !== a ? o.caret : o.pos + 1);
          }
        }
      }

      function C(t, n, a) {
        switch (c.casing || n.casing) {
          case "upper":
            t = t.toUpperCase();
            break;

          case "lower":
            t = t.toLowerCase();
            break;

          case "title":
            var r = h().validPositions[a - 1];
            t = 0 === a || r && r.input === String.fromCharCode(i.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
            break;

          default:
            if (e.isFunction(c.casing)) {
              var o = Array.prototype.slice.call(arguments);
              o.push(h().validPositions), t = c.casing.apply(this, o);
            }

        }

        return t;
      }

      function O(t, n, i) {
        for (var r, o = c.greedy ? n : n.slice(0, 1), s = !1, l = i !== a ? i.split(",") : [], u = 0; u < l.length; u++) {
          -1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
        }

        for (var p = 0; p < t.length; p++) {
          if (-1 !== e.inArray(t[p], o)) {
            s = !0;
            break;
          }
        }

        return s;
      }

      function R(t, n, r, o, s, l) {
        function u(e) {
          var t = Z ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
          return t && 0 === e.begin && e.end === h().maskLength ? "full" : t;
        }

        function p(n, i, r) {
          var s = !1;
          return e.each(S(n), function (l, p) {
            for (var d = p.match, m = i ? 1 : 0, k = "", b = d.cardinality; b > m; b--) {
              k += j(n - (b - 1));
            }

            if (i && (k += i), A(!0), !1 !== (s = null != d.fn ? d.fn.test(k, h(), n, r, c, u(t)) : (i === d.def || i === c.skipOptionalPartCharacter) && "" !== d.def && {
              c: I(n, d, !0) || d.def,
              pos: n
            })) {
              var x = s.c !== a ? s.c : i;
              x = x === c.skipOptionalPartCharacter && null === d.fn ? I(n, d, !0) || d.def : x;
              var P = n,
                  S = A();

              if (s.remove !== a && (e.isArray(s.remove) || (s.remove = [s.remove]), e.each(s.remove.sort(function (e, t) {
                return t - e;
              }), function (e, t) {
                y(t, t + 1, !0);
              })), s.insert !== a && (e.isArray(s.insert) || (s.insert = [s.insert]), e.each(s.insert.sort(function (e, t) {
                return e - t;
              }), function (e, t) {
                R(t.pos, t.c, !0, o);
              })), s.refreshFromBuffer) {
                var w = s.refreshFromBuffer;
                if (E(!0 === w ? w : w.start, w.end, S), s.pos === a && s.c === a) return s.pos = v(), !1;
                if ((P = s.pos !== a ? s.pos : n) !== n) return s = e.extend(s, R(P, x, !0, o)), !1;
              } else if (!0 !== s && s.pos !== a && s.pos !== n && (P = s.pos, E(n, P, A().slice()), P !== n)) return s = e.extend(s, R(P, x, !0)), !1;

              return (!0 === s || s.pos !== a || s.c !== a) && (l > 0 && g(!0), f(P, e.extend({}, p, {
                input: C(x, d, P)
              }), o, u(t)) || (s = !1), !1);
            }
          }), s;
        }

        function f(t, n, i, r) {
          if (r || c.insertMode && h().validPositions[t] !== a && i === a) {
            var o,
                s = e.extend(!0, {}, h().validPositions),
                l = v(a, !0);

            for (o = t; o <= l; o++) {
              delete h().validPositions[o];
            }

            h().validPositions[t] = e.extend(!0, {}, n);
            var u,
                p = !0,
                f = h().validPositions,
                m = !1,
                y = h().maskLength;

            for (o = u = t; o <= l; o++) {
              var k = s[o];
              if (k !== a) for (var b = u; b < h().maskLength && (null === k.match.fn && f[o] && (!0 === f[o].match.optionalQuantifier || !0 === f[o].match.optionality) || null != k.match.fn);) {
                if (b++, !1 === m && s[b] && s[b].match.def === k.match.def) h().validPositions[b] = e.extend(!0, {}, s[b]), h().validPositions[b].input = k.input, d(b), u = b, p = !0;else if (P(b, k.match.def)) {
                  var x = R(b, k.input, !0, !0);
                  p = !1 !== x, u = x.caret || x.insert ? v() : b, m = !0;
                } else if (!(p = !0 === k.generatedInput) && b >= h().maskLength - 1) break;
                if (h().maskLength < y && (h().maskLength = y), p) break;
              }
              if (!p) break;
            }

            if (!p) return h().validPositions = e.extend(!0, {}, s), g(!0), !1;
          } else h().validPositions[t] = e.extend(!0, {}, n);

          return g(!0), !0;
        }

        function d(t) {
          for (var n = t - 1; n > -1 && !h().validPositions[n]; n--) {
            ;
          }

          var i, r;

          for (n++; n < t; n++) {
            h().validPositions[n] === a && (!1 === c.jitMasking || c.jitMasking > n) && ("" === (r = S(n, b(n - 1).locator, n - 1).slice())[r.length - 1].match.def && r.pop(), (i = k(r)) && (i.match.def === c.radixPointDefinitionSymbol || !M(n, !0) || e.inArray(c.radixPoint, A()) < n && i.match.fn && i.match.fn.test(I(n), h(), n, !1, c)) && !1 !== (x = p(n, I(n, i.match, !0) || (null == i.match.fn ? i.match.def : "" !== I(n) ? I(n) : A()[n]), !0)) && (h().validPositions[x.pos || n].generatedInput = !0));
          }
        }

        r = !0 === r;
        var m = t;
        t.begin !== a && (m = Z && !u(t) ? t.end : t.begin);
        var x = !0,
            w = e.extend(!0, {}, h().validPositions);

        if (e.isFunction(c.preValidation) && !r && !0 !== o && !0 !== l && (x = c.preValidation(A(), m, n, u(t), c)), !0 === x) {
          if (d(m), u(t) && (V(a, i.keyCode.DELETE, t, !0, !0), m = h().p), m < h().maskLength && (Q === a || m < Q) && (x = p(m, n, r), (!r || !0 === o) && !1 === x && !0 !== l)) {
            var D = h().validPositions[m];

            if (!D || null !== D.match.fn || D.match.def !== n && n !== c.skipOptionalPartCharacter) {
              if ((c.insertMode || h().validPositions[_(m)] === a) && !M(m, !0)) for (var N = m + 1, F = _(m); N <= F; N++) {
                if (!1 !== (x = p(N, n, r))) {
                  !function (t, n) {
                    var i = h().validPositions[n];
                    if (i) for (var r = i.locator, o = r.length, s = t; s < n; s++) {
                      if (h().validPositions[s] === a && !M(s, !0)) {
                        var l = S(s).slice(),
                            c = k(l, !0),
                            u = -1;
                        "" === l[l.length - 1].match.def && l.pop(), e.each(l, function (e, t) {
                          for (var n = 0; n < o; n++) {
                            if (t.locator[n] === a || !O(t.locator[n].toString().split(","), r[n].toString().split(","), t.na)) {
                              var i = r[n],
                                  s = c.locator[n],
                                  l = t.locator[n];
                              i - s > Math.abs(i - l) && (c = t);
                              break;
                            }

                            u < n && (u = n, c = t);
                          }
                        }), (c = e.extend({}, c, {
                          input: I(s, c.match, !0) || c.match.def
                        })).generatedInput = !0, f(s, c, !0), h().validPositions[n] = a, p(n, i.input, !0);
                      }
                    }
                  }(m, x.pos !== a ? x.pos : N), m = N;
                  break;
                }
              }
            } else x = {
              caret: _(m)
            };
          }

          !1 === x && c.keepStatic && !r && !0 !== s && (x = function (t, n, i) {
            var r,
                s,
                l,
                u,
                p,
                f,
                d,
                m,
                y = e.extend(!0, {}, h().validPositions),
                k = !1,
                b = v();

            for (u = h().validPositions[b]; b >= 0; b--) {
              if ((l = h().validPositions[b]) && l.alternation !== a) {
                if (r = b, s = h().validPositions[r].alternation, u.locator[l.alternation] !== l.locator[l.alternation]) break;
                u = l;
              }
            }

            if (s !== a) {
              m = parseInt(r);
              var x = u.locator[u.alternation || s] !== a ? u.locator[u.alternation || s] : d[0];
              x.length > 0 && (x = x.split(",")[0]);
              var P = h().validPositions[m],
                  w = h().validPositions[m - 1];
              e.each(S(m, w ? w.locator : a, m - 1), function (r, l) {
                d = l.locator[s] ? l.locator[s].toString().split(",") : [];

                for (var u = 0; u < d.length; u++) {
                  var b = [],
                      S = 0,
                      w = 0,
                      A = !1;

                  if (x < d[u] && (l.na === a || -1 === e.inArray(d[u], l.na.split(",")) || -1 === e.inArray(x.toString(), d))) {
                    h().validPositions[m] = e.extend(!0, {}, l);
                    var E = h().validPositions[m].locator;

                    for (h().validPositions[m].locator[s] = parseInt(d[u]), null == l.match.fn ? (P.input !== l.match.def && (A = !0, !0 !== P.generatedInput && b.push(P.input)), w++, h().validPositions[m].generatedInput = !/[0-9a-bA-Z]/.test(l.match.def), h().validPositions[m].input = l.match.def) : h().validPositions[m].input = P.input, p = m + 1; p < v(a, !0) + 1; p++) {
                      (f = h().validPositions[p]) && !0 !== f.generatedInput && /[0-9a-bA-Z]/.test(f.input) ? b.push(f.input) : p < t && S++, delete h().validPositions[p];
                    }

                    for (A && b[0] === l.match.def && b.shift(), g(!0), k = !0; b.length > 0;) {
                      var C = b.shift();
                      if (C !== c.skipOptionalPartCharacter && !(k = R(v(a, !0) + 1, C, !1, o, !0))) break;
                    }

                    if (k) {
                      h().validPositions[m].locator = E;
                      var O = v(t) + 1;

                      for (p = m + 1; p < v() + 1; p++) {
                        ((f = h().validPositions[p]) === a || null == f.match.fn) && p < t + (w - S) && w++;
                      }

                      k = R((t += w - S) > O ? O : t, n, i, o, !0);
                    }

                    if (k) return !1;
                    g(), h().validPositions = e.extend(!0, {}, y);
                  }
                }
              });
            }

            return k;
          }(m, n, r)), !0 === x && (x = {
            pos: m
          });
        }

        if (e.isFunction(c.postValidation) && !1 !== x && !r && !0 !== o && !0 !== l) {
          var T = c.postValidation(A(!0), x, c);

          if (T.refreshFromBuffer && T.buffer) {
            var G = T.refreshFromBuffer;
            E(!0 === G ? G : G.start, G.end, T.buffer);
          }

          x = !0 === T ? x : T;
        }

        return x && x.pos === a && (x.pos = m), !1 !== x && !0 !== l || (g(!0), h().validPositions = e.extend(!0, {}, w)), x;
      }

      function M(e, t) {
        var n = b(e).match;
        if ("" === n.def && (n = x(e).match), null != n.fn) return n.fn;

        if (!0 !== t && e > -1) {
          var a = S(e);
          return a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0);
        }

        return !1;
      }

      function _(e, t) {
        var n = h().maskLength;
        if (e >= n) return n;
        var a = e;

        for (S(n + 1).length > 1 && (m(!0, n + 1, !0), n = h().maskLength); ++a < n && (!0 === t && (!0 !== x(a).match.newBlockMarker || !M(a)) || !0 !== t && !M(a));) {
          ;
        }

        return a;
      }

      function D(e, t) {
        var n,
            a = e;
        if (a <= 0) return 0;

        for (; --a > 0 && (!0 === t && !0 !== x(a).match.newBlockMarker || !0 !== t && !M(a) && ((n = S(a)).length < 2 || 2 === n.length && "" === n[1].match.def));) {
          ;
        }

        return a;
      }

      function j(e) {
        return h().validPositions[e] === a ? I(e) : h().validPositions[e].input;
      }

      function N(t, n, i, r, o) {
        if (r && e.isFunction(c.onBeforeWrite)) {
          var s = c.onBeforeWrite.call(W, r, n, i, c);

          if (s) {
            if (s.refreshFromBuffer) {
              var l = s.refreshFromBuffer;
              E(!0 === l ? l : l.start, l.end, s.buffer || n), n = A(!0);
            }

            i !== a && (i = s.caret !== a ? s.caret : i);
          }
        }

        t !== a && (t.inputmask._valueSet(n.join("")), i === a || r !== a && "blur" === r.type ? H(t, i, 0 === n.length) : d && r && "input" === r.type ? setTimeout(function () {
          G(t, i);
        }, 0) : G(t, i), !0 === o && (X = !0, e(t).trigger("input")));
      }

      function I(t, n, i) {
        if ((n = n || x(t).match).placeholder !== a || !0 === i) return e.isFunction(n.placeholder) ? n.placeholder(c) : n.placeholder;

        if (null === n.fn) {
          if (t > -1 && h().validPositions[t] === a) {
            var r,
                o = S(t),
                s = [];
            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) {
              if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === a || !1 !== o[l].match.fn.test(r.match.def, h(), t, !0, c)) && (s.push(o[l]), null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return c.placeholder.charAt(t % c.placeholder.length);
            }
          }

          return n.def;
        }

        return c.placeholder.charAt(t % c.placeholder.length);
      }

      function F(t, r, o, s, l) {
        function u(e, t) {
          return -1 !== w().slice(e, _(e)).join("").indexOf(t) && !M(e) && x(e).match.nativeDef === t.charAt(t.length - 1);
        }

        var p = s.slice(),
            f = "",
            d = -1,
            m = a;
        if (g(), o || !0 === c.autoUnmask) d = _(d);else {
          var y = w().slice(0, _(-1)).join(""),
              k = p.join("").match(new RegExp("^" + i.escapeRegex(y), "g"));
          k && k.length > 0 && (p.splice(0, k.length * y.length), d = _(d));
        }

        if (-1 === d ? (h().p = _(d), d = 0) : h().p = d, e.each(p, function (n, i) {
          if (i !== a) if (h().validPositions[n] === a && p[n] === I(n) && M(n, !0) && !1 === R(n, p[n], !0, a, a, !0)) h().p++;else {
            var r = new e.Event("_checkval");
            r.which = i.charCodeAt(0), f += i;
            var s = v(a, !0),
                l = h().validPositions[s],
                y = b(s + 1, l ? l.locator.slice() : a, s);

            if (!u(d, f) || o || c.autoUnmask) {
              var k = o ? n : null == y.match.fn && y.match.optionality && s + 1 < h().p ? s + 1 : h().p;
              m = ae.keypressEvent.call(t, r, !0, !1, o, k), d = k + 1, f = "";
            } else m = ae.keypressEvent.call(t, r, !0, !1, !0, s + 1);

            if (!1 !== m && !o && e.isFunction(c.onBeforeWrite)) {
              var x = m;

              if (m = c.onBeforeWrite.call(W, r, A(), m.forwardPosition, c), (m = e.extend(x, m)) && m.refreshFromBuffer) {
                var P = m.refreshFromBuffer;
                E(!0 === P ? P : P.start, P.end, m.buffer), g(!0), m.caret && (h().p = m.caret, m.forwardPosition = m.caret);
              }
            }
          }
        }), r) {
          var P = a;
          n.activeElement === t && m && (P = c.numericInput ? D(m.forwardPosition) : m.forwardPosition), N(t, A(), P, l || new e.Event("checkval"), l && "input" === l.type);
        }
      }

      function T(t) {
        if (t) {
          if (t.inputmask === a) return t.value;
          t.inputmask && t.inputmask.refreshValue && ae.setValueEvent.call(t);
        }

        var n = [],
            i = h().validPositions;

        for (var r in i) {
          i[r].match && null != i[r].match.fn && n.push(i[r].input);
        }

        var o = 0 === n.length ? "" : (Z ? n.reverse() : n).join("");

        if (e.isFunction(c.onUnMask)) {
          var s = (Z ? A().slice().reverse() : A()).join("");
          o = c.onUnMask.call(W, s, o, c);
        }

        return o;
      }

      function G(e, i, r, o) {
        function s(e) {
          return !0 === o || !Z || "number" != typeof e || c.greedy && "" === c.placeholder || (e = A().join("").length - e), e;
        }

        var l;
        if (i === a) return e.setSelectionRange ? (i = e.selectionStart, r = e.selectionEnd) : t.getSelection ? (l = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && l.commonAncestorContainer !== e || (i = l.startOffset, r = l.endOffset) : n.selection && n.selection.createRange && (r = (i = 0 - (l = n.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + l.text.length), {
          begin: s(i),
          end: s(r)
        };

        if (i.begin !== a && (r = i.end, i = i.begin), "number" == typeof i) {
          i = s(i), r = "number" == typeof (r = s(r)) ? r : i;
          var p = parseInt(((e.ownerDocument.defaultView || t).getComputedStyle ? (e.ownerDocument.defaultView || t).getComputedStyle(e, null) : e.currentStyle).fontSize) * r;
          if (e.scrollLeft = p > e.scrollWidth ? p : 0, u || !1 !== c.insertMode || i !== r || r++, e.setSelectionRange) e.selectionStart = i, e.selectionEnd = r;else if (t.getSelection) {
            if (l = n.createRange(), e.firstChild === a || null === e.firstChild) {
              var f = n.createTextNode("");
              e.appendChild(f);
            }

            l.setStart(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), l.setEnd(e.firstChild, r < e.inputmask._valueGet().length ? r : e.inputmask._valueGet().length), l.collapse(!0);
            var d = t.getSelection();
            d.removeAllRanges(), d.addRange(l);
          } else e.createTextRange && ((l = e.createTextRange()).collapse(!0), l.moveEnd("character", r), l.moveStart("character", i), l.select());
          H(e, {
            begin: i,
            end: r
          });
        }
      }

      function B(t) {
        var n,
            i,
            r = A(),
            o = r.length,
            s = v(),
            l = {},
            c = h().validPositions[s],
            u = c !== a ? c.locator.slice() : a;

        for (n = s + 1; n < r.length; n++) {
          u = (i = b(n, u, n - 1)).locator.slice(), l[n] = e.extend(!0, {}, i);
        }

        var p = c && c.alternation !== a ? c.locator[c.alternation] : a;

        for (n = o - 1; n > s && ((i = l[n]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || p && (p !== l[n].locator[c.alternation] && null != i.match.fn || null === i.match.fn && i.locator[c.alternation] && O(i.locator[c.alternation].toString().split(","), p.toString().split(",")) && "" !== S(n)[0].def)) && r[n] === I(n, i.match); n--) {
          o--;
        }

        return t ? {
          l: o,
          def: l[o] ? l[o].match : a
        } : o;
      }

      function L(e) {
        for (var t, n = B(), i = e.length, r = h().validPositions[v()]; n < i && !M(n, !0) && (t = r !== a ? b(n, r.locator.slice(""), r) : x(n)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || n + 1 === i && "" === (r !== a ? b(n + 1, r.locator.slice(""), r) : x(n + 1)).match.def);) {
          n++;
        }

        for (; (t = h().validPositions[n - 1]) && t && t.match.optionality && t.input === c.skipOptionalPartCharacter;) {
          n--;
        }

        return e.splice(n), e;
      }

      function U(t) {
        if (e.isFunction(c.isComplete)) return c.isComplete(t, c);
        if ("*" === c.repeat) return a;
        var n = !1,
            i = B(!0),
            r = D(i.l);

        if (i.def === a || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
          n = !0;

          for (var o = 0; o <= r; o++) {
            var s = b(o).match;

            if (null !== s.fn && h().validPositions[o] === a && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== I(o, s)) {
              n = !1;
              break;
            }
          }
        }

        return n;
      }

      function V(t, n, r, o, s) {
        if ((c.numericInput || Z) && (n === i.keyCode.BACKSPACE ? n = i.keyCode.DELETE : n === i.keyCode.DELETE && (n = i.keyCode.BACKSPACE), Z)) {
          var l = r.end;
          r.end = r.begin, r.begin = l;
        }

        n === i.keyCode.BACKSPACE && (r.end - r.begin < 1 || !1 === c.insertMode) ? (r.begin = D(r.begin), h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.begin--) : n === i.keyCode.DELETE && r.begin === r.end && (r.end = M(r.end, !0) && h().validPositions[r.end] && h().validPositions[r.end].input !== c.radixPoint ? r.end + 1 : _(r.end) + 1, h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.end++), y(r.begin, r.end, !1, o), !0 !== o && function () {
          if (c.keepStatic) {
            for (var n = [], i = v(-1, !0), r = e.extend(!0, {}, h().validPositions), o = h().validPositions[i]; i >= 0; i--) {
              var s = h().validPositions[i];

              if (s) {
                if (!0 !== s.generatedInput && /[0-9a-bA-Z]/.test(s.input) && n.push(s.input), delete h().validPositions[i], s.alternation !== a && s.locator[s.alternation] !== o.locator[s.alternation]) break;
                o = s;
              }
            }

            if (i > -1) for (h().p = _(v(-1, !0)); n.length > 0;) {
              var l = new e.Event("keypress");
              l.which = n.pop().charCodeAt(0), ae.keypressEvent.call(t, l, !0, !1, !1, h().p);
            } else h().validPositions = e.extend(!0, {}, r);
          }
        }();
        var u = v(r.begin, !0);
        if (u < r.begin) h().p = _(u);else if (!0 !== o && (h().p = r.begin, !0 !== s)) for (; h().p < u && h().validPositions[h().p] === a;) {
          h().p++;
        }
      }

      function K(a) {
        function i(e) {
          var t,
              i = n.createElement("span");

          for (var o in r) {
            isNaN(o) && -1 !== o.indexOf("font") && (i.style[o] = r[o]);
          }

          i.style.textTransform = r.textTransform, i.style.letterSpacing = r.letterSpacing, i.style.position = "absolute", i.style.height = "auto", i.style.width = "auto", i.style.visibility = "hidden", i.style.whiteSpace = "nowrap", n.body.appendChild(i);

          var s,
              l = a.inputmask._valueGet(),
              c = 0;

          for (t = 0, s = l.length; t <= s; t++) {
            if (i.innerHTML += l.charAt(t) || "_", i.offsetWidth >= e) {
              var u = e - c,
                  p = i.offsetWidth - e;
              i.innerHTML = l.charAt(t), t = (u -= i.offsetWidth / 3) < p ? t - 1 : t;
              break;
            }

            c = i.offsetWidth;
          }

          return n.body.removeChild(i), t;
        }

        var r = (a.ownerDocument.defaultView || t).getComputedStyle(a, null),
            o = n.createElement("div");
        o.style.width = r.width, o.style.textAlign = r.textAlign, ($ = n.createElement("div")).className = "im-colormask", a.parentNode.insertBefore($, a), a.parentNode.removeChild(a), $.appendChild(o), $.appendChild(a), a.style.left = o.offsetLeft + "px", e(a).on("click", function (e) {
          return G(a, i(e.clientX)), ae.clickEvent.call(a, [e]);
        }), e(a).on("keydown", function (e) {
          e.shiftKey || !1 === c.insertMode || setTimeout(function () {
            H(a);
          }, 0);
        });
      }

      function H(e, t, i) {
        function r() {
          f || null !== s.fn && l.input !== a ? f && (null !== s.fn && l.input !== a || "" === s.def) && (f = !1, p += "</span>") : (f = !0, p += "<span class='im-static'>");
        }

        function o(a) {
          !0 !== a && d !== t.begin || n.activeElement !== e || (p += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>");
        }

        var s,
            l,
            u,
            p = "",
            f = !1,
            d = 0;

        if ($ !== a) {
          var m = A();

          if (t === a ? t = G(e) : t.begin === a && (t = {
            begin: t,
            end: t
          }), !0 !== i) {
            var g = v();

            do {
              o(), h().validPositions[d] ? (l = h().validPositions[d], s = l.match, u = l.locator.slice(), r(), p += m[d]) : (l = b(d, u, d - 1), s = l.match, u = l.locator.slice(), (!1 === c.jitMasking || d < g || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > d) && (r(), p += I(d, s))), d++;
            } while ((Q === a || d < Q) && (null !== s.fn || "" !== s.def) || g > d || f);

            -1 === p.indexOf("im-caret") && o(!0), f && r();
          }

          var y = $.getElementsByTagName("div")[0];
          y.innerHTML = p, e.inputmask.positionColorMask(e, y);
        }
      }

      s = s || this.maskset, c = c || this.opts;
      var z,
          q,
          Q,
          $,
          W = this,
          Y = this.el,
          Z = this.isRTL,
          J = !1,
          X = !1,
          ee = !1,
          te = !1,
          ne = {
        on: function on(t, n, r) {
          var o = function o(t) {
            if (this.inputmask === a && "FORM" !== this.nodeName) {
              var n = e.data(this, "_inputmask_opts");
              n ? new i(n).mask(this) : ne.off(this);
            } else {
              if ("setvalue" === t.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === c.tabThrough && t.keyCode === i.keyCode.TAB))) {
                switch (t.type) {
                  case "input":
                    if (!0 === X) return X = !1, t.preventDefault();
                    break;

                  case "keydown":
                    J = !1, X = !1;
                    break;

                  case "keypress":
                    if (!0 === J) return t.preventDefault();
                    J = !0;
                    break;

                  case "click":
                    if (p || f) {
                      var o = this,
                          s = arguments;
                      return setTimeout(function () {
                        r.apply(o, s);
                      }, 0), !1;
                    }

                }

                var l = r.apply(this, arguments);
                return !1 === l && (t.preventDefault(), t.stopPropagation()), l;
              }

              t.preventDefault();
            }
          };

          t.inputmask.events[n] = t.inputmask.events[n] || [], t.inputmask.events[n].push(o), -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).on(n, o) : e(t).on(n, o);
        },
        off: function off(t, n) {
          if (t.inputmask && t.inputmask.events) {
            var a;
            n ? (a = [])[n] = t.inputmask.events[n] : a = t.inputmask.events, e.each(a, function (n, a) {
              for (; a.length > 0;) {
                var i = a.pop();
                -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).off(n, i) : e(t).off(n, i);
              }

              delete t.inputmask.events[n];
            });
          }
        }
      },
          ae = {
        keydownEvent: function keydownEvent(t) {
          var a = this,
              r = e(a),
              o = t.keyCode,
              s = G(a);
          if (o === i.keyCode.BACKSPACE || o === i.keyCode.DELETE || f && o === i.keyCode.BACKSPACE_SAFARI || t.ctrlKey && o === i.keyCode.X && !function (e) {
            var t = n.createElement("input"),
                a = "on" + e,
                i = a in t;
            return i || (t.setAttribute(a, "return;"), i = "function" == typeof t[a]), t = null, i;
          }("cut")) t.preventDefault(), V(a, o, s), N(a, A(!0), h().p, t, a.inputmask._valueGet() !== A().join("")), a.inputmask._valueGet() === w().join("") ? r.trigger("cleared") : !0 === U(A()) && r.trigger("complete");else if (o === i.keyCode.END || o === i.keyCode.PAGE_DOWN) {
            t.preventDefault();

            var l = _(v());

            c.insertMode || l !== h().maskLength || t.shiftKey || l--, G(a, t.shiftKey ? s.begin : l, l, !0);
          } else o === i.keyCode.HOME && !t.shiftKey || o === i.keyCode.PAGE_UP ? (t.preventDefault(), G(a, 0, t.shiftKey ? s.begin : 0, !0)) : (c.undoOnEscape && o === i.keyCode.ESCAPE || 90 === o && t.ctrlKey) && !0 !== t.altKey ? (F(a, !0, !1, z.split("")), r.trigger("click")) : o !== i.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === c.tabThrough && o === i.keyCode.TAB ? (!0 === t.shiftKey ? (null === x(s.begin).match.fn && (s.begin = _(s.begin)), s.end = D(s.begin, !0), s.begin = D(s.end, !0)) : (s.begin = _(s.begin, !0), s.end = _(s.begin, !0), s.end < h().maskLength && s.end--), s.begin < h().maskLength && (t.preventDefault(), G(a, s.begin, s.end))) : t.shiftKey || !1 === c.insertMode && (o === i.keyCode.RIGHT ? setTimeout(function () {
            var e = G(a);
            G(a, e.begin);
          }, 0) : o === i.keyCode.LEFT && setTimeout(function () {
            var e = G(a);
            G(a, Z ? e.begin + 1 : e.begin - 1);
          }, 0)) : (c.insertMode = !c.insertMode, G(a, c.insertMode || s.begin !== h().maskLength ? s.begin : s.begin - 1));
          c.onKeyDown.call(this, t, A(), G(a).begin, c), ee = -1 !== e.inArray(o, c.ignorables);
        },
        keypressEvent: function keypressEvent(t, n, r, o, s) {
          var l = this,
              u = e(l),
              p = t.which || t.charCode || t.keyCode;
          if (!(!0 === n || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || ee)) return p === i.keyCode.ENTER && z !== A().join("") && (z = A().join(""), setTimeout(function () {
            u.trigger("change");
          }, 0)), !0;

          if (p) {
            46 === p && !1 === t.shiftKey && "" !== c.radixPoint && (p = c.radixPoint.charCodeAt(0));
            var f,
                d = n ? {
              begin: s,
              end: s
            } : G(l),
                m = String.fromCharCode(p);
            h().writeOutBuffer = !0;
            var v = R(d, m, o);

            if (!1 !== v && (g(!0), f = v.caret !== a ? v.caret : n ? v.pos + 1 : _(v.pos), h().p = f), !1 !== r && (setTimeout(function () {
              c.onKeyValidation.call(l, p, v, c);
            }, 0), h().writeOutBuffer && !1 !== v)) {
              var y = A();
              N(l, y, c.numericInput && v.caret === a ? D(f) : f, t, !0 !== n), !0 !== n && setTimeout(function () {
                !0 === U(y) && u.trigger("complete");
              }, 0);
            }

            if (t.preventDefault(), n) return !1 !== v && (v.forwardPosition = f), v;
          }
        },
        pasteEvent: function pasteEvent(n) {
          var a,
              i = this,
              r = n.originalEvent || n,
              o = e(i),
              s = i.inputmask._valueGet(!0),
              l = G(i);

          Z && (a = l.end, l.end = l.begin, l.begin = a);
          var u = s.substr(0, l.begin),
              p = s.substr(l.end, s.length);
          if (u === (Z ? w().reverse() : w()).slice(0, l.begin).join("") && (u = ""), p === (Z ? w().reverse() : w()).slice(l.end).join("") && (p = ""), Z && (a = u, u = p, p = a), t.clipboardData && t.clipboardData.getData) s = u + t.clipboardData.getData("Text") + p;else {
            if (!r.clipboardData || !r.clipboardData.getData) return !0;
            s = u + r.clipboardData.getData("text/plain") + p;
          }
          var f = s;

          if (e.isFunction(c.onBeforePaste)) {
            if (!1 === (f = c.onBeforePaste.call(W, s, c))) return n.preventDefault();
            f || (f = s);
          }

          return F(i, !1, !1, Z ? f.split("").reverse() : f.toString().split("")), N(i, A(), _(v()), n, z !== A().join("")), !0 === U(A()) && o.trigger("complete"), n.preventDefault();
        },
        inputFallBackEvent: function inputFallBackEvent(t) {
          var n = this,
              a = n.inputmask._valueGet();

          if (A().join("") !== a) {
            var r = G(n);
            if (!1 === function (t, n, a) {
              if ("." === n.charAt(a.begin - 1) && "" !== c.radixPoint && ((n = n.split(""))[a.begin - 1] = c.radixPoint.charAt(0), n = n.join("")), n.charAt(a.begin - 1) === c.radixPoint && n.length > A().length) {
                var i = new e.Event("keypress");
                return i.which = c.radixPoint.charCodeAt(0), ae.keypressEvent.call(t, i, !0, !0, !1, a.begin - 1), !1;
              }
            }(n, a, r)) return !1;
            if (a = a.replace(new RegExp("(" + i.escapeRegex(w().join("")) + ")*"), ""), !1 === function (t, n, a) {
              if (p) {
                var i = n.replace(A().join(""), "");

                if (1 === i.length) {
                  var r = new e.Event("keypress");
                  return r.which = i.charCodeAt(0), ae.keypressEvent.call(t, r, !0, !0, !1, h().validPositions[a.begin - 1] ? a.begin : a.begin - 1), !1;
                }
              }
            }(n, a, r)) return !1;
            r.begin > a.length && (G(n, a.length), r = G(n));
            var o = A().join(""),
                s = a.substr(0, r.begin),
                l = a.substr(r.begin),
                u = o.substr(0, r.begin),
                f = o.substr(r.begin),
                d = r,
                m = "",
                g = !1;

            if (s !== u) {
              d.begin = 0;

              for (var v = (g = s.length >= u.length) ? s.length : u.length, y = 0; s.charAt(y) === u.charAt(y) && y < v; y++) {
                d.begin++;
              }

              g && (m += s.slice(d.begin, d.end));
            }

            l !== f && (l.length > f.length ? g && (d.end = d.begin) : l.length < f.length ? d.end += f.length - l.length : l.charAt(0) !== f.charAt(0) && d.end++), N(n, A(), d), m.length > 0 ? e.each(m.split(""), function (t, a) {
              var i = new e.Event("keypress");
              i.which = a.charCodeAt(0), ee = !1, ae.keypressEvent.call(n, i);
            }) : (d.begin === d.end - 1 && G(n, D(d.begin + 1), d.end), t.keyCode = i.keyCode.DELETE, ae.keydownEvent.call(n, t)), t.preventDefault();
          }
        },
        setValueEvent: function setValueEvent(t) {
          this.inputmask.refreshValue = !1;

          var n = this,
              a = n.inputmask._valueGet(!0);

          e.isFunction(c.onBeforeMask) && (a = c.onBeforeMask.call(W, a, c) || a), a = a.split(""), F(n, !0, !1, Z ? a.reverse() : a), z = A().join(""), (c.clearMaskOnLostFocus || c.clearIncomplete) && n.inputmask._valueGet() === w().join("") && n.inputmask._valueSet("");
        },
        focusEvent: function focusEvent(e) {
          var t = this,
              n = t.inputmask._valueGet();

          c.showMaskOnFocus && (!c.showMaskOnHover || c.showMaskOnHover && "" === n) && (t.inputmask._valueGet() !== A().join("") ? N(t, A(), _(v())) : !1 === te && G(t, _(v()))), !0 === c.positionCaretOnTab && !1 === te && "" !== n && (N(t, A(), G(t)), ae.clickEvent.apply(t, [e, !0])), z = A().join("");
        },
        mouseleaveEvent: function mouseleaveEvent(e) {
          var t = this;

          if (te = !1, c.clearMaskOnLostFocus && n.activeElement !== t) {
            var a = A().slice(),
                i = t.inputmask._valueGet();

            i !== t.getAttribute("placeholder") && "" !== i && (-1 === v() && i === w().join("") ? a = [] : L(a), N(t, a));
          }
        },
        clickEvent: function clickEvent(t, i) {
          function r(t) {
            if ("" !== c.radixPoint) {
              var n = h().validPositions;

              if (n[t] === a || n[t].input === I(t)) {
                if (t < _(-1)) return !0;
                var i = e.inArray(c.radixPoint, A());

                if (-1 !== i) {
                  for (var r in n) {
                    if (i < r && n[r].input !== I(r)) return !1;
                  }

                  return !0;
                }
              }
            }

            return !1;
          }

          var o = this;
          setTimeout(function () {
            if (n.activeElement === o) {
              var e = G(o);
              if (i && (Z ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (c.positionCaretOnClick) {
                case "none":
                  break;

                case "radixFocus":
                  if (r(e.begin)) {
                    var t = A().join("").indexOf(c.radixPoint);
                    G(o, c.numericInput ? _(t) : t);
                    break;
                  }

                default:
                  var s = e.begin,
                      l = v(s, !0),
                      u = _(l);

                  if (s < u) G(o, M(s, !0) || M(s - 1, !0) ? s : _(s));else {
                    var p = h().validPositions[l],
                        f = b(u, p ? p.match.locator : a, p),
                        d = I(u, f.match);

                    if ("" !== d && A()[u] !== d && !0 !== f.match.optionalQuantifier && !0 !== f.match.newBlockMarker || !M(u, !0) && f.match.def === d) {
                      var m = _(u);

                      (s >= m || s === u) && (u = m);
                    }

                    G(o, u);
                  }
              }
            }
          }, 0);
        },
        dblclickEvent: function dblclickEvent(e) {
          var t = this;
          setTimeout(function () {
            G(t, 0, _(v()));
          }, 0);
        },
        cutEvent: function cutEvent(a) {
          var r = this,
              o = e(r),
              s = G(r),
              l = a.originalEvent || a,
              c = t.clipboardData || l.clipboardData,
              u = Z ? A().slice(s.end, s.begin) : A().slice(s.begin, s.end);
          c.setData("text", Z ? u.reverse().join("") : u.join("")), n.execCommand && n.execCommand("copy"), V(r, i.keyCode.DELETE, s), N(r, A(), h().p, a, z !== A().join("")), r.inputmask._valueGet() === w().join("") && o.trigger("cleared");
        },
        blurEvent: function blurEvent(t) {
          var n = e(this),
              i = this;

          if (i.inputmask) {
            var r = i.inputmask._valueGet(),
                o = A().slice();

            "" !== r && (c.clearMaskOnLostFocus && (-1 === v() && r === w().join("") ? o = [] : L(o)), !1 === U(o) && (setTimeout(function () {
              n.trigger("incomplete");
            }, 0), c.clearIncomplete && (g(), o = c.clearMaskOnLostFocus ? [] : w().slice())), N(i, o, a, t)), z !== A().join("") && (z = o.join(""), n.trigger("change"));
          }
        },
        mouseenterEvent: function mouseenterEvent(e) {
          var t = this;
          te = !0, n.activeElement !== t && c.showMaskOnHover && t.inputmask._valueGet() !== A().join("") && N(t, A());
        },
        submitEvent: function submitEvent(e) {
          z !== A().join("") && q.trigger("change"), c.clearMaskOnLostFocus && -1 === v() && Y.inputmask._valueGet && Y.inputmask._valueGet() === w().join("") && Y.inputmask._valueSet(""), c.removeMaskOnSubmit && (Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(), !0), setTimeout(function () {
            N(Y, A());
          }, 0));
        },
        resetEvent: function resetEvent(e) {
          Y.inputmask.refreshValue = !0, setTimeout(function () {
            q.trigger("setvalue");
          }, 0);
        }
      };

      i.prototype.positionColorMask = function (e, t) {
        e.style.left = t.offsetLeft + "px";
      };

      var ie;
      if (r !== a) switch (r.action) {
        case "isComplete":
          return Y = r.el, U(A());

        case "unmaskedvalue":
          return Y !== a && r.value === a || (ie = r.value, ie = (e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, ie, c) || ie : ie).split(""), F(a, !1, !1, Z ? ie.reverse() : ie), e.isFunction(c.onBeforeWrite) && c.onBeforeWrite.call(W, a, A(), 0, c)), T(Y);

        case "mask":
          !function (t) {
            ne.off(t);

            var i = function (t, i) {
              var r = t.getAttribute("type"),
                  s = "INPUT" === t.tagName && -1 !== e.inArray(r, i.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
              if (!s) if ("INPUT" === t.tagName) {
                var l = n.createElement("input");
                l.setAttribute("type", r), s = "text" === l.type, l = null;
              } else s = "partial";
              return !1 !== s ? function (t) {
                function r() {
                  return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== v() || !0 !== i.nullable ? n.activeElement === this && i.clearMaskOnLostFocus ? (Z ? L(A().slice()).reverse() : L(A().slice())).join("") : l.call(this) : "" : l.call(this);
                }

                function s(t) {
                  c.call(this, t), this.inputmask && e(this).trigger("setvalue");
                }

                var l, c;

                if (!t.inputmask.__valueGet) {
                  if (!0 !== i.noValuePatching) {
                    if (Object.getOwnPropertyDescriptor) {
                      "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === o("test".__proto__) ? function (e) {
                        return e.__proto__;
                      } : function (e) {
                        return e.constructor.prototype;
                      });
                      var u = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : a;
                      u && u.get && u.set ? (l = u.get, c = u.set, Object.defineProperty(t, "value", {
                        get: r,
                        set: s,
                        configurable: !0
                      })) : "INPUT" !== t.tagName && (l = function l() {
                        return this.textContent;
                      }, c = function c(e) {
                        this.textContent = e;
                      }, Object.defineProperty(t, "value", {
                        get: r,
                        set: s,
                        configurable: !0
                      }));
                    } else n.__lookupGetter__ && t.__lookupGetter__("value") && (l = t.__lookupGetter__("value"), c = t.__lookupSetter__("value"), t.__defineGetter__("value", r), t.__defineSetter__("value", s));

                    t.inputmask.__valueGet = l, t.inputmask.__valueSet = c;
                  }

                  t.inputmask._valueGet = function (e) {
                    return Z && !0 !== e ? l.call(this.el).split("").reverse().join("") : l.call(this.el);
                  }, t.inputmask._valueSet = function (e, t) {
                    c.call(this.el, null === e || e === a ? "" : !0 !== t && Z ? e.split("").reverse().join("") : e);
                  }, l === a && (l = function l() {
                    return this.value;
                  }, c = function c(e) {
                    this.value = e;
                  }, function (t) {
                    if (e.valHooks && (e.valHooks[t] === a || !0 !== e.valHooks[t].inputmaskpatch)) {
                      var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function (e) {
                        return e.value;
                      },
                          r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function (e, t) {
                        return e.value = t, e;
                      };
                      e.valHooks[t] = {
                        get: function get(e) {
                          if (e.inputmask) {
                            if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                            var t = n(e);
                            return -1 !== v(a, a, e.inputmask.maskset.validPositions) || !0 !== i.nullable ? t : "";
                          }

                          return n(e);
                        },
                        set: function set(t, n) {
                          var a,
                              i = e(t);
                          return a = r(t, n), t.inputmask && i.trigger("setvalue"), a;
                        },
                        inputmaskpatch: !0
                      };
                    }
                  }(t.type), function (t) {
                    ne.on(t, "mouseenter", function (t) {
                      var n = e(this);
                      this.inputmask._valueGet() !== A().join("") && n.trigger("setvalue");
                    });
                  }(t));
                }
              }(t) : t.inputmask = a, s;
            }(t, c);

            if (!1 !== i && (Y = t, q = e(Y), -1 === (Q = Y !== a ? Y.maxLength : a) && (Q = a), !0 === c.colorMask && K(Y), d && (Y.hasOwnProperty("inputmode") && (Y.inputmode = c.inputmode, Y.setAttribute("inputmode", c.inputmode)), "rtfm" === c.androidHack && (!0 !== c.colorMask && K(Y), Y.type = "password")), !0 === i && (ne.on(Y, "submit", ae.submitEvent), ne.on(Y, "reset", ae.resetEvent), ne.on(Y, "mouseenter", ae.mouseenterEvent), ne.on(Y, "blur", ae.blurEvent), ne.on(Y, "focus", ae.focusEvent), ne.on(Y, "mouseleave", ae.mouseleaveEvent), !0 !== c.colorMask && ne.on(Y, "click", ae.clickEvent), ne.on(Y, "dblclick", ae.dblclickEvent), ne.on(Y, "paste", ae.pasteEvent), ne.on(Y, "dragdrop", ae.pasteEvent), ne.on(Y, "drop", ae.pasteEvent), ne.on(Y, "cut", ae.cutEvent), ne.on(Y, "complete", c.oncomplete), ne.on(Y, "incomplete", c.onincomplete), ne.on(Y, "cleared", c.oncleared), d || !0 === c.inputEventOnly ? Y.removeAttribute("maxLength") : (ne.on(Y, "keydown", ae.keydownEvent), ne.on(Y, "keypress", ae.keypressEvent)), ne.on(Y, "compositionstart", e.noop), ne.on(Y, "compositionupdate", e.noop), ne.on(Y, "compositionend", e.noop), ne.on(Y, "keyup", e.noop), ne.on(Y, "input", ae.inputFallBackEvent), ne.on(Y, "beforeinput", e.noop)), ne.on(Y, "setvalue", ae.setValueEvent), z = w().join(""), "" !== Y.inputmask._valueGet(!0) || !1 === c.clearMaskOnLostFocus || n.activeElement === Y)) {
              var r = e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, Y.inputmask._valueGet(!0), c) || Y.inputmask._valueGet(!0) : Y.inputmask._valueGet(!0);
              "" !== r && F(Y, !0, !1, Z ? r.split("").reverse() : r.split(""));
              var s = A().slice();
              z = s.join(""), !1 === U(s) && c.clearIncomplete && g(), c.clearMaskOnLostFocus && n.activeElement !== Y && (-1 === v() ? s = [] : L(s)), N(Y, s), n.activeElement === Y && G(Y, _(v()));
            }
          }(Y);
          break;

        case "format":
          return ie = (e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, r.value, c) || r.value : r.value).split(""), F(a, !0, !1, Z ? ie.reverse() : ie), r.metadata ? {
            value: Z ? A().slice().reverse().join("") : A().join(""),
            metadata: l.call(this, {
              action: "getmetadata"
            }, s, c)
          } : Z ? A().slice().reverse().join("") : A().join("");

        case "isValid":
          r.value ? (ie = r.value.split(""), F(a, !0, !0, Z ? ie.reverse() : ie)) : r.value = A().join("");

          for (var re = A(), oe = B(), se = re.length - 1; se > oe && !M(se); se--) {
            ;
          }

          return re.splice(oe, se + 1 - oe), U(re) && r.value === A().join("");

        case "getemptymask":
          return w().join("");

        case "remove":
          if (Y && Y.inputmask) {
            q = e(Y), Y.inputmask._valueSet(c.autoUnmask ? T(Y) : Y.inputmask._valueGet(!0)), ne.off(Y);
            Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y), "value") && Y.inputmask.__valueGet && Object.defineProperty(Y, "value", {
              get: Y.inputmask.__valueGet,
              set: Y.inputmask.__valueSet,
              configurable: !0
            }) : n.__lookupGetter__ && Y.__lookupGetter__("value") && Y.inputmask.__valueGet && (Y.__defineGetter__("value", Y.inputmask.__valueGet), Y.__defineSetter__("value", Y.inputmask.__valueSet)), Y.inputmask = a;
          }

          return Y;

        case "getmetadata":
          if (e.isArray(s.metadata)) {
            var le = m(!0, 0, !1).join("");
            return e.each(s.metadata, function (e, t) {
              if (t.mask === le) return le = t, !1;
            }), le;
          }

          return s.metadata;
      }
    }

    var c = navigator.userAgent,
        u = /mobile/i.test(c),
        p = /iemobile/i.test(c),
        f = /iphone/i.test(c) && !p,
        d = /android/i.test(c) && !p;
    return i.prototype = {
      dataAttribute: "data-inputmask",
      defaults: {
        placeholder: "_",
        optionalmarker: {
          start: "[",
          end: "]"
        },
        quantifiermarker: {
          start: "{",
          end: "}"
        },
        groupmarker: {
          start: "(",
          end: ")"
        },
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        regex: null,
        oncomplete: e.noop,
        onincomplete: e.noop,
        oncleared: e.noop,
        repeat: 0,
        greedy: !0,
        autoUnmask: !1,
        removeMaskOnSubmit: !1,
        clearMaskOnLostFocus: !0,
        insertMode: !0,
        clearIncomplete: !1,
        alias: null,
        onKeyDown: e.noop,
        onBeforeMask: null,
        onBeforePaste: function onBeforePaste(t, n) {
          return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t;
        },
        onBeforeWrite: null,
        onUnMask: null,
        showMaskOnFocus: !0,
        showMaskOnHover: !0,
        onKeyValidation: e.noop,
        skipOptionalPartCharacter: " ",
        numericInput: !1,
        rightAlign: !1,
        undoOnEscape: !0,
        radixPoint: "",
        radixPointDefinitionSymbol: a,
        groupSeparator: "",
        keepStatic: null,
        positionCaretOnTab: !0,
        tabThrough: !1,
        supportsInputType: ["text", "tel", "password"],
        ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
        isComplete: null,
        canClearPosition: e.noop,
        preValidation: null,
        postValidation: null,
        staticDefinitionSymbol: a,
        jitMasking: !1,
        nullable: !0,
        inputEventOnly: !1,
        noValuePatching: !1,
        positionCaretOnClick: "lvp",
        casing: null,
        inputmode: "verbatim",
        colorMask: !1,
        androidHack: !1,
        importDataAttributes: !0
      },
      definitions: {
        9: {
          validator: "[0-9１-９]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        a: {
          validator: "[A-Za-zА-яЁёÀ-ÿµ]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        "*": {
          validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]",
          cardinality: 1
        }
      },
      aliases: {},
      masksCache: {},
      mask: function mask(o) {
        function c(n, i, o, s) {
          if (!0 === i.importDataAttributes) {
            var l,
                c,
                u,
                p,
                f = function f(e, i) {
              null !== (i = i !== a ? i : n.getAttribute(s + "-" + e)) && ("string" == typeof i && (0 === e.indexOf("on") ? i = t[i] : "false" === i ? i = !1 : "true" === i && (i = !0)), o[e] = i);
            },
                d = n.getAttribute(s);

            if (d && "" !== d && (d = d.replace(new RegExp("'", "g"), '"'), c = JSON.parse("{" + d + "}")), c) {
              u = a;

              for (p in c) {
                if ("alias" === p.toLowerCase()) {
                  u = c[p];
                  break;
                }
              }
            }

            f("alias", u), o.alias && r(o.alias, o, i);

            for (l in i) {
              if (c) {
                u = a;

                for (p in c) {
                  if (p.toLowerCase() === l.toLowerCase()) {
                    u = c[p];
                    break;
                  }
                }
              }

              f(l, u);
            }
          }

          return e.extend(!0, i, o), ("rtl" === n.dir || i.rightAlign) && (n.style.textAlign = "right"), ("rtl" === n.dir || i.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"), i.isRTL = !0), i;
        }

        var u = this;
        return "string" == typeof o && (o = n.getElementById(o) || n.querySelectorAll(o)), o = o.nodeName ? [o] : o, e.each(o, function (t, n) {
          var r = e.extend(!0, {}, u.opts);
          c(n, r, e.extend(!0, {}, u.userOptions), u.dataAttribute);
          var o = s(r, u.noMasksCache);
          o !== a && (n.inputmask !== a && (n.inputmask.opts.autoUnmask = !0, n.inputmask.remove()), n.inputmask = new i(a, a, !0), n.inputmask.opts = r, n.inputmask.noMasksCache = u.noMasksCache, n.inputmask.userOptions = e.extend(!0, {}, u.userOptions), n.inputmask.isRTL = r.isRTL || r.numericInput, n.inputmask.el = n, n.inputmask.maskset = o, e.data(n, "_inputmask_opts", r), l.call(n.inputmask, {
            action: "mask"
          }));
        }), o && o[0] ? o[0].inputmask || this : this;
      },
      option: function option(t, n) {
        return "string" == typeof t ? this.opts[t] : "object" === (void 0 === t ? "undefined" : o(t)) ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this) : void 0;
      },
      unmaskedvalue: function unmaskedvalue(e) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "unmaskedvalue",
          value: e
        });
      },
      remove: function remove() {
        return l.call(this, {
          action: "remove"
        });
      },
      getemptymask: function getemptymask() {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "getemptymask"
        });
      },
      hasMaskedValue: function hasMaskedValue() {
        return !this.opts.autoUnmask;
      },
      isComplete: function isComplete() {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "isComplete"
        });
      },
      getmetadata: function getmetadata() {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "getmetadata"
        });
      },
      isValid: function isValid(e) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "isValid",
          value: e
        });
      },
      format: function format(e, t) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "format",
          value: e,
          metadata: t
        });
      },
      analyseMask: function analyseMask(t, n, r) {
        function o(e, t, n, a) {
          this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = a || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        }

        function s(t, o, s) {
          s = s !== a ? s : t.matches.length;
          var l = t.matches[s - 1];
          if (n) 0 === o.indexOf("[") || b && /\\d|\\s|\\w]/i.test(o) || "." === o ? t.matches.splice(s++, 0, {
            fn: new RegExp(o, r.casing ? "i" : ""),
            cardinality: 1,
            optionality: t.isOptional,
            newBlockMarker: l === a || l.def !== o,
            casing: null,
            def: o,
            placeholder: a,
            nativeDef: o
          }) : (b && (o = o[o.length - 1]), e.each(o.split(""), function (e, n) {
            l = t.matches[s - 1], t.matches.splice(s++, 0, {
              fn: null,
              cardinality: 0,
              optionality: t.isOptional,
              newBlockMarker: l === a || l.def !== n && null !== l.fn,
              casing: null,
              def: r.staticDefinitionSymbol || n,
              placeholder: r.staticDefinitionSymbol !== a ? n : a,
              nativeDef: n
            });
          })), b = !1;else {
            var c = (r.definitions ? r.definitions[o] : a) || i.prototype.definitions[o];

            if (c && !b) {
              for (var u = c.prevalidator, p = u ? u.length : 0, f = 1; f < c.cardinality; f++) {
                var d = p >= f ? u[f - 1] : [],
                    m = d.validator,
                    h = d.cardinality;
                t.matches.splice(s++, 0, {
                  fn: m ? "string" == typeof m ? new RegExp(m, r.casing ? "i" : "") : new function () {
                    this.test = m;
                  }() : new RegExp("."),
                  cardinality: h || 1,
                  optionality: t.isOptional,
                  newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                  casing: c.casing,
                  def: c.definitionSymbol || o,
                  placeholder: c.placeholder,
                  nativeDef: o
                }), l = t.matches[s - 1];
              }

              t.matches.splice(s++, 0, {
                fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, r.casing ? "i" : "") : new function () {
                  this.test = c.validator;
                }() : new RegExp("."),
                cardinality: c.cardinality,
                optionality: t.isOptional,
                newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                casing: c.casing,
                def: c.definitionSymbol || o,
                placeholder: c.placeholder,
                nativeDef: o
              });
            } else t.matches.splice(s++, 0, {
              fn: null,
              cardinality: 0,
              optionality: t.isOptional,
              newBlockMarker: l === a || l.def !== o && null !== l.fn,
              casing: null,
              def: r.staticDefinitionSymbol || o,
              placeholder: r.staticDefinitionSymbol !== a ? o : a,
              nativeDef: o
            }), b = !1;
          }
        }

        function l(t) {
          t && t.matches && e.each(t.matches, function (e, i) {
            var o = t.matches[e + 1];
            (o === a || o.matches === a || !1 === o.isQuantifier) && i && i.isGroup && (i.isGroup = !1, n || (s(i, r.groupmarker.start, 0), !0 !== i.openGroup && s(i, r.groupmarker.end))), l(i);
          });
        }

        function c() {
          if (P.length > 0) {
            if (m = P[P.length - 1], s(m, f), m.isAlternator) {
              h = P.pop();

              for (var e = 0; e < h.matches.length; e++) {
                h.matches[e].isGroup = !1;
              }

              P.length > 0 ? (m = P[P.length - 1]).matches.push(h) : x.matches.push(h);
            }
          } else s(x, f);
        }

        function u(e) {
          e.matches = e.matches.reverse();

          for (var t in e.matches) {
            if (e.matches.hasOwnProperty(t)) {
              var n = parseInt(t);

              if (e.matches[t].isQuantifier && e.matches[n + 1] && e.matches[n + 1].isGroup) {
                var i = e.matches[t];
                e.matches.splice(t, 1), e.matches.splice(n + 1, 0, i);
              }

              e.matches[t].matches !== a ? e.matches[t] = u(e.matches[t]) : e.matches[t] = function (e) {
                return e === r.optionalmarker.start ? e = r.optionalmarker.end : e === r.optionalmarker.end ? e = r.optionalmarker.start : e === r.groupmarker.start ? e = r.groupmarker.end : e === r.groupmarker.end && (e = r.groupmarker.start), e;
              }(e.matches[t]);
            }
          }

          return e;
        }

        var p,
            f,
            d,
            m,
            h,
            g,
            v,
            y = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            k = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            b = !1,
            x = new o(),
            P = [],
            S = [];

        for (n && (r.optionalmarker.start = a, r.optionalmarker.end = a); p = n ? k.exec(t) : y.exec(t);) {
          if (f = p[0], n) switch (f.charAt(0)) {
            case "?":
              f = "{0,1}";
              break;

            case "+":
            case "*":
              f = "{" + f + "}";
          }
          if (b) c();else switch (f.charAt(0)) {
            case r.escapeChar:
              b = !0, n && c();
              break;

            case r.optionalmarker.end:
            case r.groupmarker.end:
              if (d = P.pop(), d.openGroup = !1, d !== a) {
                if (P.length > 0) {
                  if ((m = P[P.length - 1]).matches.push(d), m.isAlternator) {
                    h = P.pop();

                    for (var w = 0; w < h.matches.length; w++) {
                      h.matches[w].isGroup = !1, h.matches[w].alternatorGroup = !1;
                    }

                    P.length > 0 ? (m = P[P.length - 1]).matches.push(h) : x.matches.push(h);
                  }
                } else x.matches.push(d);
              } else c();
              break;

            case r.optionalmarker.start:
              P.push(new o(!1, !0));
              break;

            case r.groupmarker.start:
              P.push(new o(!0));
              break;

            case r.quantifiermarker.start:
              var A = new o(!1, !1, !0),
                  E = (f = f.replace(/[{}]/g, "")).split(","),
                  C = isNaN(E[0]) ? E[0] : parseInt(E[0]),
                  O = 1 === E.length ? C : isNaN(E[1]) ? E[1] : parseInt(E[1]);

              if ("*" !== O && "+" !== O || (C = "*" === O ? 0 : 1), A.quantifier = {
                min: C,
                max: O
              }, P.length > 0) {
                var R = P[P.length - 1].matches;
                (p = R.pop()).isGroup || ((v = new o(!0)).matches.push(p), p = v), R.push(p), R.push(A);
              } else (p = x.matches.pop()).isGroup || (n && null === p.fn && "." === p.def && (p.fn = new RegExp(p.def, r.casing ? "i" : "")), (v = new o(!0)).matches.push(p), p = v), x.matches.push(p), x.matches.push(A);

              break;

            case r.alternatormarker:
              if (P.length > 0) {
                var M = (m = P[P.length - 1]).matches[m.matches.length - 1];
                g = m.openGroup && (M.matches === a || !1 === M.isGroup && !1 === M.isAlternator) ? P.pop() : m.matches.pop();
              } else g = x.matches.pop();

              if (g.isAlternator) P.push(g);else if (g.alternatorGroup ? (h = P.pop(), g.alternatorGroup = !1) : h = new o(!1, !1, !1, !0), h.matches.push(g), P.push(h), g.openGroup) {
                g.openGroup = !1;

                var _ = new o(!0);

                _.alternatorGroup = !0, P.push(_);
              }
              break;

            default:
              c();
          }
        }

        for (; P.length > 0;) {
          d = P.pop(), x.matches.push(d);
        }

        return x.matches.length > 0 && (l(x), S.push(x)), (r.numericInput || r.isRTL) && u(S[0]), S;
      }
    }, i.extendDefaults = function (t) {
      e.extend(!0, i.prototype.defaults, t);
    }, i.extendDefinitions = function (t) {
      e.extend(!0, i.prototype.definitions, t);
    }, i.extendAliases = function (t) {
      e.extend(!0, i.prototype.aliases, t);
    }, i.format = function (e, t, n) {
      return i(t).format(e, n);
    }, i.unmask = function (e, t) {
      return i(t).unmaskedvalue(e);
    }, i.isValid = function (e, t) {
      return i(t).isValid(e);
    }, i.remove = function (t) {
      e.each(t, function (e, t) {
        t.inputmask && t.inputmask.remove();
      });
    }, i.escapeRegex = function (e) {
      var t = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
      return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1");
    }, i.keyCode = {
      ALT: 18,
      BACKSPACE: 8,
      BACKSPACE_SAFARI: 127,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91,
      X: 88
    }, i;
  });
}, function (e, t) {
  e.exports = jQuery;
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  n(4), n(9), n(12), n(13), n(14), n(15);
  var i = a(n(1)),
      r = a(n(0)),
      o = a(n(2));
  r.default === o.default && n(16), window.Inputmask = i.default;
}, function (e, t, n) {
  var a = n(5);
  "string" == typeof a && (a = [[e.i, a, ""]]);
  var i = {
    hmr: !0
  };
  i.transform = void 0;
  n(7)(a, i);
  a.locals && (e.exports = a.locals);
}, function (e, t, n) {
  (e.exports = n(6)(void 0)).push([e.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", ""]);
}, function (e, t) {
  function n(e, t) {
    var n = e[1] || "",
        i = e[3];
    if (!i) return n;

    if (t && "function" == typeof btoa) {
      var r = a(i),
          o = i.sources.map(function (e) {
        return "/*# sourceURL=" + i.sourceRoot + e + " */";
      });
      return [n].concat(o).concat([r]).join("\n");
    }

    return [n].join("\n");
  }

  function a(e) {
    return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) + " */";
  }

  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var a = n(t, e);
        return t[2] ? "@media " + t[2] + "{" + a + "}" : a;
      }).join("");
    }, t.i = function (e, n) {
      "string" == typeof e && (e = [[null, e, ""]]);

      for (var a = {}, i = 0; i < this.length; i++) {
        var r = this[i][0];
        "number" == typeof r && (a[r] = !0);
      }

      for (i = 0; i < e.length; i++) {
        var o = e[i];
        "number" == typeof o[0] && a[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o));
      }
    }, t;
  };
}, function (e, t, n) {
  function a(e, t) {
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
          i = m[a.id];

      if (i) {
        i.refs++;

        for (o = 0; o < i.parts.length; o++) {
          i.parts[o](a.parts[o]);
        }

        for (; o < a.parts.length; o++) {
          i.parts.push(u(a.parts[o], t));
        }
      } else {
        for (var r = [], o = 0; o < a.parts.length; o++) {
          r.push(u(a.parts[o], t));
        }

        m[a.id] = {
          id: a.id,
          refs: 1,
          parts: r
        };
      }
    }
  }

  function i(e, t) {
    for (var n = [], a = {}, i = 0; i < e.length; i++) {
      var r = e[i],
          o = t.base ? r[0] + t.base : r[0],
          s = {
        css: r[1],
        media: r[2],
        sourceMap: r[3]
      };
      a[o] ? a[o].parts.push(s) : n.push(a[o] = {
        id: o,
        parts: [s]
      });
    }

    return n;
  }

  function r(e, t) {
    var n = g(e.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var a = k[k.length - 1];
    if ("top" === e.insertAt) a ? a.nextSibling ? n.insertBefore(t, a.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), k.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
      if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var i = g(e.insertInto + " " + e.insertAt.before);
      n.insertBefore(t, i);
    }
  }

  function o(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = k.indexOf(e);
    t >= 0 && k.splice(t, 1);
  }

  function s(e) {
    var t = document.createElement("style");
    return e.attrs.type = "text/css", c(t, e.attrs), r(e, t), t;
  }

  function l(e) {
    var t = document.createElement("link");
    return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), r(e, t), t;
  }

  function c(e, t) {
    Object.keys(t).forEach(function (n) {
      e.setAttribute(n, t[n]);
    });
  }

  function u(e, t) {
    var n, a, i, r;

    if (t.transform && e.css) {
      if (!(r = t.transform(e.css))) return function () {};
      e.css = r;
    }

    if (t.singleton) {
      var c = y++;
      n = v || (v = s(t)), a = p.bind(null, n, c, !1), i = p.bind(null, n, c, !0);
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), a = d.bind(null, n, t), i = function i() {
      o(n), n.href && URL.revokeObjectURL(n.href);
    }) : (n = s(t), a = f.bind(null, n), i = function i() {
      o(n);
    });

    return a(e), function (t) {
      if (t) {
        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
        a(e = t);
      } else i();
    };
  }

  function p(e, t, n, a) {
    var i = n ? "" : a.css;
    if (e.styleSheet) e.styleSheet.cssText = x(t, i);else {
      var r = document.createTextNode(i),
          o = e.childNodes;
      o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(r, o[t]) : e.appendChild(r);
    }
  }

  function f(e, t) {
    var n = t.css,
        a = t.media;
    if (a && e.setAttribute("media", a), e.styleSheet) e.styleSheet.cssText = n;else {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }

      e.appendChild(document.createTextNode(n));
    }
  }

  function d(e, t, n) {
    var a = n.css,
        i = n.sourceMap,
        r = void 0 === t.convertToAbsoluteUrls && i;
    (t.convertToAbsoluteUrls || r) && (a = b(a)), i && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
    var o = new Blob([a], {
      type: "text/css"
    }),
        s = e.href;
    e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s);
  }

  var m = {},
      h = function (e) {
    var t;
    return function () {
      return void 0 === t && (t = e.apply(this, arguments)), t;
    };
  }(function () {
    return window && document && document.all && !window.atob;
  }),
      g = function (e) {
    var t = {};
    return function (n) {
      if (void 0 === t[n]) {
        var a = e.call(this, n);
        if (a instanceof window.HTMLIFrameElement) try {
          a = a.contentDocument.head;
        } catch (e) {
          a = null;
        }
        t[n] = a;
      }

      return t[n];
    };
  }(function (e) {
    return document.querySelector(e);
  }),
      v = null,
      y = 0,
      k = [],
      b = n(8);

  e.exports = function (e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
    (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || (t.singleton = h()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var n = i(e, t);
    return a(n, t), function (e) {
      for (var r = [], o = 0; o < n.length; o++) {
        var s = n[o];
        (l = m[s.id]).refs--, r.push(l);
      }

      e && a(i(e, t), t);

      for (o = 0; o < r.length; o++) {
        var l = r[o];

        if (0 === l.refs) {
          for (var c = 0; c < l.parts.length; c++) {
            l.parts[c]();
          }

          delete m[l.id];
        }
      }
    };
  };

  var x = function () {
    var e = [];
    return function (t, n) {
      return e[t] = n, e.filter(Boolean).join("\n");
    };
  }();
}, function (e, t) {
  e.exports = function (e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var n = t.protocol + "//" + t.host,
        a = n + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
      var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
        return t;
      }).replace(/^'(.*)'$/, function (e, t) {
        return t;
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
      var r;
      return r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : a + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")";
    });
  };
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    function n(e) {
      return isNaN(e) || 29 === new Date(e, 2, 0).getDate();
    }

    return t.extendAliases({
      "dd/mm/yyyy": {
        mask: "1/2/y",
        placeholder: "dd/mm/yyyy",
        regex: {
          val1pre: new RegExp("[0-3]"),
          val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|[12][0-9]|3[01])" + n + "[01])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|[12][0-9])" + n + "(0[1-9]|1[012]))|(30" + n + "(0[13-9]|1[012]))|(31" + n + "(0[13578]|1[02]))");
          }
        },
        leapday: "29/02/",
        separator: "/",
        yearrange: {
          minyear: 1900,
          maxyear: 2099
        },
        isInYearRange: function isInYearRange(e, t, n) {
          if (isNaN(e)) return !1;
          var a = parseInt(e.concat(t.toString().slice(e.length))),
              i = parseInt(e.concat(n.toString().slice(e.length)));
          return !isNaN(a) && t <= a && a <= n || !isNaN(i) && t <= i && i <= n;
        },
        determinebaseyear: function determinebaseyear(e, t, n) {
          var a = new Date().getFullYear();
          if (e > a) return e;

          if (t < a) {
            for (var i = t.toString().slice(0, 2), r = t.toString().slice(2, 4); t < i + n;) {
              i--;
            }

            var o = i + r;
            return e > o ? e : o;
          }

          if (e <= a && a <= t) {
            for (var s = a.toString().slice(0, 2); t < s + n;) {
              s--;
            }

            var l = s + n;
            return l < e ? e : l;
          }

          return a;
        },
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val(s.getDate().toString() + (s.getMonth() + 1).toString() + s.getFullYear().toString()), o.trigger("setvalue");
          }
        },
        getFrontValue: function getFrontValue(e, t, n) {
          for (var a = 0, i = 0, r = 0; r < e.length && "2" !== e.charAt(r); r++) {
            var o = n.definitions[e.charAt(r)];
            o ? (a += i, i = o.cardinality) : i++;
          }

          return t.join("").substr(a, i);
        },
        postValidation: function postValidation(e, t, a) {
          var i,
              r,
              o = e.join("");
          return 0 === a.mask.indexOf("y") ? (r = o.substr(0, 4), i = o.substring(4, 10)) : (r = o.substring(6, 10), i = o.substr(0, 6)), t && (i !== a.leapday || n(r));
        },
        definitions: {
          1: {
            validator: function validator(e, t, n, a, i) {
              var r = i.regex.val1.test(e);
              return a || r || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(r = i.regex.val1.test("0" + e.charAt(0))) ? r : (t.buffer[n - 1] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                },
                pos: n,
                c: e.charAt(0)
              });
            },
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = e;
                isNaN(t.buffer[n + 1]) || (r += t.buffer[n + 1]);
                var o = 1 === r.length ? i.regex.val1pre.test(r) : i.regex.val1.test(r);

                if (o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), !a && !o) {
                  if (o = i.regex.val1.test(e + "0")) return t.buffer[n] = e, t.buffer[++n] = "0", {
                    pos: n,
                    c: "0"
                  };
                  if (o = i.regex.val1.test("0" + e)) return t.buffer[n] = "0", n++, {
                    pos: n
                  };
                }

                return o;
              },
              cardinality: 1
            }]
          },
          2: {
            validator: function validator(e, t, n, a, i) {
              var r = i.getFrontValue(t.mask, t.buffer, i);
              -1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
              var o = i.regex.val2(i.separator).test(r + e);
              return a || o || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(o = i.regex.val2(i.separator).test(r + "0" + e.charAt(0))) ? o : (t.buffer[n - 1] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                },
                pos: n,
                c: e.charAt(0)
              });
            },
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                isNaN(t.buffer[n + 1]) || (e += t.buffer[n + 1]);
                var r = i.getFrontValue(t.mask, t.buffer, i);
                -1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
                var o = 1 === e.length ? i.regex.val2pre(i.separator).test(r + e) : i.regex.val2(i.separator).test(r + e);
                return o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), a || o || !(o = i.regex.val2(i.separator).test(r + "0" + e)) ? o : (t.buffer[n] = "0", n++, {
                  pos: n
                });
              },
              cardinality: 1
            }]
          },
          y: {
            validator: function validator(e, t, n, a, i) {
              return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
            },
            cardinality: 4,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);

                if (!a && !r) {
                  var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 1);
                  if (r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), {
                    pos: n
                  };
                  if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), t.buffer[n++] = o.charAt(1), {
                    pos: n
                  };
                }

                return r;
              },
              cardinality: 1
            }, {
              validator: function validator(e, t, n, a, i) {
                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);

                if (!a && !r) {
                  var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2);
                  if (r = i.isInYearRange(e[0] + o[1] + e[1], i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(1), {
                    pos: n
                  };
                  if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n - 1] = o.charAt(0), t.buffer[n++] = o.charAt(1), t.buffer[n++] = e.charAt(0), {
                    refreshFromBuffer: {
                      start: n - 3,
                      end: n
                    },
                    pos: n
                  };
                }

                return r;
              },
              cardinality: 2
            }, {
              validator: function validator(e, t, n, a, i) {
                return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
              },
              cardinality: 3
            }]
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      "mm/dd/yyyy": {
        placeholder: "mm/dd/yyyy",
        alias: "dd/mm/yyyy",
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue");
          }
        }
      },
      "yyyy/mm/dd": {
        mask: "y/1/2",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        leapday: "/02/29",
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val(s.getFullYear().toString() + (s.getMonth() + 1).toString() + s.getDate().toString()), o.trigger("setvalue");
          }
        }
      },
      "dd.mm.yyyy": {
        mask: "1.2.y",
        placeholder: "dd.mm.yyyy",
        leapday: "29.02.",
        separator: ".",
        alias: "dd/mm/yyyy"
      },
      "dd-mm-yyyy": {
        mask: "1-2-y",
        placeholder: "dd-mm-yyyy",
        leapday: "29-02-",
        separator: "-",
        alias: "dd/mm/yyyy"
      },
      "mm.dd.yyyy": {
        mask: "1.2.y",
        placeholder: "mm.dd.yyyy",
        leapday: "02.29.",
        separator: ".",
        alias: "mm/dd/yyyy"
      },
      "mm-dd-yyyy": {
        mask: "1-2-y",
        placeholder: "mm-dd-yyyy",
        leapday: "02-29-",
        separator: "-",
        alias: "mm/dd/yyyy"
      },
      "yyyy.mm.dd": {
        mask: "y.1.2",
        placeholder: "yyyy.mm.dd",
        leapday: ".02.29",
        separator: ".",
        alias: "yyyy/mm/dd"
      },
      "yyyy-mm-dd": {
        mask: "y-1-2",
        placeholder: "yyyy-mm-dd",
        leapday: "-02-29",
        separator: "-",
        alias: "yyyy/mm/dd"
      },
      datetime: {
        mask: "1/2/y h:s",
        placeholder: "dd/mm/yyyy hh:mm",
        alias: "dd/mm/yyyy",
        regex: {
          hrspre: new RegExp("[012]"),
          hrs24: new RegExp("2[0-4]|1[3-9]"),
          hrs: new RegExp("[01][0-9]|2[0-4]"),
          ampm: new RegExp("^[a|p|A|P][m|M]"),
          mspre: new RegExp("[0-5]"),
          ms: new RegExp("[0-5][0-9]")
        },
        timeseparator: ":",
        hourFormat: "24",
        definitions: {
          h: {
            validator: function validator(e, t, n, a, i) {
              if ("24" === i.hourFormat && 24 === parseInt(e, 10)) return t.buffer[n - 1] = "0", t.buffer[n] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                },
                c: "0"
              };
              var r = i.regex.hrs.test(e);
              if (!a && !r && (e.charAt(1) === i.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (r = i.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[n - 1] = "0", t.buffer[n] = e.charAt(0), n++, {
                refreshFromBuffer: {
                  start: n - 2,
                  end: n
                },
                pos: n,
                c: i.timeseparator
              };

              if (r && "24" !== i.hourFormat && i.regex.hrs24.test(e)) {
                var o = parseInt(e, 10);
                return 24 === o ? (t.buffer[n + 5] = "a", t.buffer[n + 6] = "m") : (t.buffer[n + 5] = "p", t.buffer[n + 6] = "m"), (o -= 12) < 10 ? (t.buffer[n] = o.toString(), t.buffer[n - 1] = "0") : (t.buffer[n] = o.toString().charAt(1), t.buffer[n - 1] = o.toString().charAt(0)), {
                  refreshFromBuffer: {
                    start: n - 1,
                    end: n + 6
                  },
                  c: t.buffer[n]
                };
              }

              return r;
            },
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = i.regex.hrspre.test(e);
                return a || r || !(r = i.regex.hrs.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {
                  pos: n
                });
              },
              cardinality: 1
            }]
          },
          s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = i.regex.mspre.test(e);
                return a || r || !(r = i.regex.ms.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {
                  pos: n
                });
              },
              cardinality: 1
            }]
          },
          t: {
            validator: function validator(e, t, n, a, i) {
              return i.regex.ampm.test(e + "m");
            },
            casing: "lower",
            cardinality: 1
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      datetime12: {
        mask: "1/2/y h:s t\\m",
        placeholder: "dd/mm/yyyy hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "mm/dd/yyyy hh:mm xm": {
        mask: "1/2/y h:s t\\m",
        placeholder: "mm/dd/yyyy hh:mm xm",
        alias: "datetime12",
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue");
          }
        }
      },
      "hh:mm t": {
        mask: "h:s t\\m",
        placeholder: "hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "h:s t": {
        mask: "h:s t\\m",
        placeholder: "hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "hh:mm:ss": {
        mask: "h:s:s",
        placeholder: "hh:mm:ss",
        alias: "datetime",
        autoUnmask: !1
      },
      "hh:mm": {
        mask: "h:s",
        placeholder: "hh:mm",
        alias: "datetime",
        autoUnmask: !1
      },
      date: {
        alias: "dd/mm/yyyy"
      },
      "mm/yyyy": {
        mask: "1/y",
        placeholder: "mm/yyyy",
        leapday: "donotuse",
        separator: "/",
        alias: "mm/dd/yyyy"
      },
      shamsi: {
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "[0-3])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + n + "30)|((0[1-6])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        yearrange: {
          minyear: 1300,
          maxyear: 1499
        },
        mask: "y/1/2",
        leapday: "/12/30",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        clearIncomplete: !0
      },
      "yyyy-mm-dd hh:mm:ss": {
        mask: "y-1-2 h:s:s",
        placeholder: "yyyy-mm-dd hh:mm:ss",
        alias: "datetime",
        separator: "-",
        leapday: "-02-29",
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        onKeyDown: function onKeyDown(e, t, n, a) {}
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a;
  "function" == typeof Symbol && Symbol.iterator;
  void 0 !== (a = function () {
    return window;
  }.call(t, n, t, e)) && (e.exports = a);
}, function (e, t, n) {
  "use strict";

  var a;
  "function" == typeof Symbol && Symbol.iterator;
  void 0 !== (a = function () {
    return document;
  }.call(t, n, t, e)) && (e.exports = a);
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    return t.extendDefinitions({
      A: {
        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
        cardinality: 1,
        casing: "upper"
      },
      "&": {
        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
        cardinality: 1,
        casing: "upper"
      },
      "#": {
        validator: "[0-9A-Fa-f]",
        cardinality: 1,
        casing: "upper"
      }
    }), t.extendAliases({
      url: {
        definitions: {
          i: {
            validator: ".",
            cardinality: 1
          }
        },
        mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
        insertMode: !1,
        autoUnmask: !1,
        inputmode: "url"
      },
      ip: {
        mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
        definitions: {
          i: {
            validator: function validator(e, t, n, a, i) {
              return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e);
            },
            cardinality: 1
          }
        },
        onUnMask: function onUnMask(e, t, n) {
          return e;
        },
        inputmode: "numeric"
      },
      email: {
        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        greedy: !1,
        onBeforePaste: function onBeforePaste(e, t) {
          return (e = e.toLowerCase()).replace("mailto:", "");
        },
        definitions: {
          "*": {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
            cardinality: 1,
            casing: "lower"
          },
          "-": {
            validator: "[0-9A-Za-z-]",
            cardinality: 1,
            casing: "lower"
          }
        },
        onUnMask: function onUnMask(e, t, n) {
          return e;
        },
        inputmode: "email"
      },
      mac: {
        mask: "##:##:##:##:##:##"
      },
      vin: {
        mask: "V{13}9{4}",
        definitions: {
          V: {
            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
            cardinality: 1,
            casing: "upper"
          }
        },
        clearIncomplete: !0,
        autoUnmask: !0
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t, n) {
    function a(e, n) {
      for (var a = "", i = 0; i < e.length; i++) {
        t.prototype.definitions[e.charAt(i)] || n.definitions[e.charAt(i)] || n.optionalmarker.start === e.charAt(i) || n.optionalmarker.end === e.charAt(i) || n.quantifiermarker.start === e.charAt(i) || n.quantifiermarker.end === e.charAt(i) || n.groupmarker.start === e.charAt(i) || n.groupmarker.end === e.charAt(i) || n.alternatormarker === e.charAt(i) ? a += "\\" + e.charAt(i) : a += e.charAt(i);
      }

      return a;
    }

    return t.extendAliases({
      numeric: {
        mask: function mask(e) {
          if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = n), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
            var t = Math.floor(e.integerDigits / e.groupSize),
                i = e.integerDigits % e.groupSize;
            e.integerDigits = parseInt(e.integerDigits) + (0 === i ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*");
          }

          e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
          var r = "[+]";

          if (r += a(e.prefix, e), !0 === e.integerOptional ? r += "~{1," + e.integerDigits + "}" : r += "~{" + e.integerDigits + "}", e.digits !== n) {
            e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
            var o = e.digits.toString().split(",");
            isFinite(o[0] && o[1] && isFinite(o[1])) ? r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? r += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}");
          }

          return r += a(e.suffix, e), r += "[-]", e.greedy = !1, r;
        },
        placeholder: "",
        greedy: !1,
        digits: "*",
        digitsOptional: !0,
        enforceDigitsOnBlur: !1,
        radixPoint: ".",
        positionCaretOnClick: "radixFocus",
        groupSize: 3,
        groupSeparator: "",
        autoGroup: !1,
        allowMinus: !0,
        negationSymbol: {
          front: "-",
          back: ""
        },
        integerDigits: "+",
        integerOptional: !0,
        prefix: "",
        suffix: "",
        rightAlign: !0,
        decimalProtect: !0,
        min: null,
        max: null,
        step: 1,
        insertMode: !0,
        autoUnmask: !1,
        unmaskAsNumber: !1,
        inputmode: "numeric",
        preValidation: function preValidation(t, a, i, r, o) {
          if ("-" === i || i === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === n || !o.isNegative, "" === t.join("") || {
            caret: a,
            dopost: !0
          });

          if (!1 === r && i === o.radixPoint && o.digits !== n && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
            var s = e.inArray(o.radixPoint, t);
            if (-1 !== s) return !0 === o.numericInput ? a === s : {
              caret: s + 1
            };
          }

          return !0;
        },
        postValidation: function postValidation(a, i, r) {
          var o = r.suffix.split(""),
              s = r.prefix.split("");
          if (i.pos === n && i.caret !== n && !0 !== i.dopost) return i;
          var l = i.caret !== n ? i.caret : i.pos,
              c = a.slice();
          r.numericInput && (l = c.length - l - 1, c = c.reverse());
          var u = c[l];
          if (u === r.groupSeparator && (u = c[l += 1]), l === c.length - r.suffix.length - 1 && u === r.radixPoint) return i;
          u !== n && u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back && (c[l] = "?", r.prefix.length > 0 && l >= (!1 === r.isNegative ? 1 : 0) && l < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0) ? s[l - (!1 === r.isNegative ? 1 : 0)] = "?" : r.suffix.length > 0 && l >= c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) && (o[l - (c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = "?")), s = s.join(""), o = o.join("");
          var p = c.join("").replace(s, "");

          if (p = p.replace(o, ""), p = p.replace(new RegExp(t.escapeRegex(r.groupSeparator), "g"), ""), p = p.replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), ""), p = p.replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""), isNaN(r.placeholder) && (p = p.replace(new RegExp(t.escapeRegex(r.placeholder), "g"), "")), p.length > 1 && 1 !== p.indexOf(r.radixPoint) && ("0" === u && (p = p.replace(/^\?/g, "")), p = p.replace(/^0/g, "")), p.charAt(0) === r.radixPoint && "" !== r.radixPoint && !0 !== r.numericInput && (p = "0" + p), "" !== p) {
            if (p = p.split(""), (!r.digitsOptional || r.enforceDigitsOnBlur && "blur" === i.event) && isFinite(r.digits)) {
              var f = e.inArray(r.radixPoint, p),
                  d = e.inArray(r.radixPoint, c);
              -1 === f && (p.push(r.radixPoint), f = p.length - 1);

              for (var m = 1; m <= r.digits; m++) {
                r.digitsOptional && (!r.enforceDigitsOnBlur || "blur" !== i.event) || p[f + m] !== n && p[f + m] !== r.placeholder.charAt(0) ? -1 !== d && c[d + m] !== n && (p[f + m] = p[f + m] || c[d + m]) : p[f + m] = i.placeholder || r.placeholder.charAt(0);
              }
            }

            if (!0 !== r.autoGroup || "" === r.groupSeparator || u === r.radixPoint && i.pos === n && !i.dopost) p = p.join("");else {
              var h = p[p.length - 1] === r.radixPoint && i.c === r.radixPoint;
              p = t(function (e, t) {
                var n = "";

                if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                  var a = e.join("").split(t.radixPoint);
                  a[1] && (n += t.radixPoint + "*{" + a[1].match(/^\d*\??\d*/)[0].length + "}");
                }

                return n;
              }(p, r), {
                numericInput: !0,
                jitMasking: !0,
                definitions: {
                  "*": {
                    validator: "[0-9?]",
                    cardinality: 1
                  }
                }
              }).format(p.join("")), h && (p += r.radixPoint), p.charAt(0) === r.groupSeparator && p.substr(1);
            }
          }

          if (r.isNegative && "blur" === i.event && (r.isNegative = "0" !== p), p = s + p, p += o, r.isNegative && (p = r.negationSymbol.front + p, p += r.negationSymbol.back), p = p.split(""), u !== n) if (u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back) (l = e.inArray("?", p)) > -1 ? p[l] = u : l = i.caret || 0;else if (u === r.radixPoint || u === r.negationSymbol.front || u === r.negationSymbol.back) {
            var g = e.inArray(u, p);
            -1 !== g && (l = g);
          }
          r.numericInput && (l = p.length - l - 1, p = p.reverse());
          var v = {
            caret: u === n || i.pos !== n ? l + (r.numericInput ? -1 : 1) : l,
            buffer: p,
            refreshFromBuffer: i.dopost || a.join("") !== p.join("")
          };
          return v.refreshFromBuffer ? v : i;
        },
        onBeforeWrite: function onBeforeWrite(a, i, r, o) {
          if (a) switch (a.type) {
            case "keydown":
              return o.postValidation(i, {
                caret: r,
                dopost: !0
              }, o);

            case "blur":
            case "checkval":
              var s;

              if (function (e) {
                e.parseMinMaxOptions === n && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
              }(o), null !== o.min || null !== o.max) {
                if (s = o.onUnMask(i.join(""), n, e.extend({}, o, {
                  unmaskAsNumber: !0
                })), null !== o.min && s < o.min) return o.isNegative = o.min < 0, o.postValidation(o.min.toString().replace(".", o.radixPoint).split(""), {
                  caret: r,
                  dopost: !0,
                  placeholder: "0"
                }, o);
                if (null !== o.max && s > o.max) return o.isNegative = o.max < 0, o.postValidation(o.max.toString().replace(".", o.radixPoint).split(""), {
                  caret: r,
                  dopost: !0,
                  placeholder: "0"
                }, o);
              }

              return o.postValidation(i, {
                caret: r,
                placeholder: "0",
                event: "blur"
              }, o);

            case "_checkval":
              return {
                caret: r
              };
          }
        },
        regex: {
          integerPart: function integerPart(e, n) {
            return n ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+");
          },
          integerNPart: function integerNPart(e) {
            return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+");
          }
        },
        definitions: {
          "~": {
            validator: function validator(e, a, i, r, o, s) {
              var l = r ? new RegExp("[0-9" + t.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);

              if (!0 === l) {
                if (!0 !== o.numericInput && a.validPositions[i] !== n && "~" === a.validPositions[i].match.def && !s) {
                  var c = a.buffer.join(""),
                      u = (c = (c = c.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
                  u.length > 1 && (u[1] = u[1].replace(/0/g, o.placeholder.charAt(0))), "0" === u[0] && (u[0] = u[0].replace(/0/g, o.placeholder.charAt(0))), c = u[0] + o.radixPoint + u[1] || "";

                  var p = a._buffer.join("");

                  for (c === o.radixPoint && (c = p); null === c.match(t.escapeRegex(p) + "$");) {
                    p = p.slice(1);
                  }

                  l = (c = (c = c.replace(p, "")).split(""))[i] === n ? {
                    pos: i,
                    remove: i
                  } : {
                    pos: i
                  };
                }
              } else r || e !== o.radixPoint || a.validPositions[i - 1] !== n || (a.buffer[i] = "0", l = {
                pos: i + 1
              });

              return l;
            },
            cardinality: 1
          },
          "+": {
            validator: function validator(e, t, n, a, i) {
              return i.allowMinus && ("-" === e || e === i.negationSymbol.front);
            },
            cardinality: 1,
            placeholder: ""
          },
          "-": {
            validator: function validator(e, t, n, a, i) {
              return i.allowMinus && e === i.negationSymbol.back;
            },
            cardinality: 1,
            placeholder: ""
          },
          ":": {
            validator: function validator(e, n, a, i, r) {
              var o = "[" + t.escapeRegex(r.radixPoint) + "]",
                  s = new RegExp(o).test(e);
              return s && n.validPositions[a] && n.validPositions[a].match.placeholder === r.radixPoint && (s = {
                caret: a + 1
              }), s;
            },
            cardinality: 1,
            placeholder: function placeholder(e) {
              return e.radixPoint;
            }
          }
        },
        onUnMask: function onUnMask(e, n, a) {
          if ("" === n && !0 === a.nullable) return n;
          var i = e.replace(a.prefix, "");
          return i = i.replace(a.suffix, ""), i = i.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), "" !== a.placeholder.charAt(0) && (i = i.replace(new RegExp(a.placeholder.charAt(0), "g"), "0")), a.unmaskAsNumber ? ("" !== a.radixPoint && -1 !== i.indexOf(a.radixPoint) && (i = i.replace(t.escapeRegex.call(this, a.radixPoint), ".")), i = i.replace(new RegExp("^" + t.escapeRegex(a.negationSymbol.front)), "-"), i = i.replace(new RegExp(t.escapeRegex(a.negationSymbol.back) + "$"), ""), Number(i)) : i;
        },
        isComplete: function isComplete(e, n) {
          var a = e.join("");
          if (e.slice().join("") !== a) return !1;
          var i = a.replace(n.prefix, "");
          return i = i.replace(n.suffix, ""), i = i.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), "," === n.radixPoint && (i = i.replace(t.escapeRegex(n.radixPoint), ".")), isFinite(i);
        },
        onBeforeMask: function onBeforeMask(e, a) {
          if (a.isNegative = n, e = e.toString().charAt(e.length - 1) === a.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== a.radixPoint && isFinite(e)) {
            var i = e.split("."),
                r = "" !== a.groupSeparator ? parseInt(a.groupSize) : 0;
            2 === i.length && (i[0].length > r || i[1].length > r || i[0].length <= r && i[1].length < r) && (e = e.replace(".", a.radixPoint));
          }

          var o = e.match(/,/g),
              s = e.match(/\./g);

          if (e = s && o ? s.length > o.length ? (e = e.replace(/\./g, "")).replace(",", a.radixPoint) : o.length > s.length ? (e = e.replace(/,/g, "")).replace(".", a.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), 0 === a.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== a.radixPoint && isFinite(a.digits) && -1 !== e.indexOf(a.radixPoint)) {
            var l = e.split(a.radixPoint)[1].match(new RegExp("\\d*"))[0];

            if (parseInt(a.digits) < l.toString().length) {
              var c = Math.pow(10, parseInt(a.digits));
              e = e.replace(t.escapeRegex(a.radixPoint), "."), e = (e = Math.round(parseFloat(e) * c) / c).toString().replace(".", a.radixPoint);
            }
          }

          return e;
        },
        canClearPosition: function canClearPosition(e, t, n, a, i) {
          var r = e.validPositions[t],
              o = r.input !== i.radixPoint || null !== e.validPositions[t].match.fn && !1 === i.decimalProtect || r.input === i.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(r.input) || t === n || r.input === i.groupSeparator || r.input === i.negationSymbol.front || r.input === i.negationSymbol.back;
          return !o || "+" !== r.match.nativeDef && "-" !== r.match.nativeDef || (i.isNegative = !1), o;
        },
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);
          if (n.ctrlKey) switch (n.keyCode) {
            case t.keyCode.UP:
              o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), o.trigger("setvalue");
              break;

            case t.keyCode.DOWN:
              o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), o.trigger("setvalue");
          }
        }
      },
      currency: {
        prefix: "$ ",
        groupSeparator: ",",
        alias: "numeric",
        placeholder: "0",
        autoGroup: !0,
        digits: 2,
        digitsOptional: !1,
        clearMaskOnLostFocus: !1
      },
      decimal: {
        alias: "numeric"
      },
      integer: {
        alias: "numeric",
        digits: 0,
        radixPoint: ""
      },
      percentage: {
        alias: "numeric",
        digits: 2,
        digitsOptional: !0,
        radixPoint: ".",
        placeholder: "0",
        autoGroup: !1,
        min: 0,
        max: 100,
        suffix: " %",
        allowMinus: !1
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    function n(e, t) {
      var n = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
          a = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
          i = (e.mask || e).split("#")[0],
          r = (t.mask || t).split("#")[0];
      return 0 === r.indexOf(i) ? -1 : 0 === i.indexOf(r) ? 1 : n.localeCompare(a);
    }

    var a = t.prototype.analyseMask;
    return t.prototype.analyseMask = function (t, n, i) {
      function r(e, n, a) {
        n = n || "", a = a || s, "" !== n && (a[n] = {});

        for (var i = "", o = a[n] || a, l = e.length - 1; l >= 0; l--) {
          o[i = (t = e[l].mask || e[l]).substr(0, 1)] = o[i] || [], o[i].unshift(t.substr(1)), e.splice(l, 1);
        }

        for (var c in o) {
          o[c].length > 500 && r(o[c].slice(), c, o);
        }
      }

      function o(t) {
        var n = "",
            a = [];

        for (var r in t) {
          e.isArray(t[r]) ? 1 === t[r].length ? a.push(r + t[r]) : a.push(r + i.groupmarker.start + t[r].join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end) : a.push(r + o(t[r]));
        }

        return 1 === a.length ? n += a[0] : n += i.groupmarker.start + a.join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end, n;
      }

      var s = {};
      return i.phoneCodes && (i.phoneCodes && i.phoneCodes.length > 1e3 && (r((t = t.substr(1, t.length - 2)).split(i.groupmarker.end + i.alternatormarker + i.groupmarker.start)), t = o(s)), t = t.replace(/9/g, "\\9")), a.call(this, t, n, i);
    }, t.extendAliases({
      abstractphone: {
        groupmarker: {
          start: "<",
          end: ">"
        },
        countrycode: "",
        phoneCodes: [],
        mask: function mask(e) {
          return e.definitions = {
            "#": t.prototype.definitions[9]
          }, e.phoneCodes.sort(n);
        },
        keepStatic: !0,
        onBeforeMask: function onBeforeMask(e, t) {
          var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
          return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n), n;
        },
        onUnMask: function onUnMask(e, t, n) {
          return e.replace(/[()#-]/g, "");
        },
        inputmode: "tel"
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    return t.extendAliases({
      Regex: {
        mask: "r",
        greedy: !1,
        repeat: "*",
        regex: null,
        regexTokens: null,
        tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
        quantifierFilter: /[0-9]+[^,]/,
        isComplete: function isComplete(e, t) {
          return new RegExp(t.regex, t.casing ? "i" : "").test(e.join(""));
        },
        definitions: {
          r: {
            validator: function validator(t, n, a, i, r) {
              function o(e, t) {
                this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {
                  min: 1,
                  max: 1
                }, this.repeaterPart = void 0;
              }

              function s(t, n) {
                var a = !1;
                n && (p += "(", d++);

                for (var i = 0; i < t.matches.length; i++) {
                  var o = t.matches[i];
                  if (!0 === o.isGroup) a = s(o, !0);else if (!0 === o.isQuantifier) {
                    var c = e.inArray(o, t.matches),
                        u = t.matches[c - 1],
                        f = p;

                    if (isNaN(o.quantifier.max)) {
                      for (; o.repeaterPart && o.repeaterPart !== p && o.repeaterPart.length > p.length && !(a = s(u, !0));) {
                        ;
                      }

                      (a = a || s(u, !0)) && (o.repeaterPart = p), p = f + o.quantifier.max;
                    } else {
                      for (var m = 0, h = o.quantifier.max - 1; m < h && !(a = s(u, !0)); m++) {
                        ;
                      }

                      p = f + "{" + o.quantifier.min + "," + o.quantifier.max + "}";
                    }
                  } else if (void 0 !== o.matches) for (var g = 0; g < o.length && !(a = s(o[g], n)); g++) {
                    ;
                  } else {
                    var v;

                    if ("[" == o.charAt(0)) {
                      v = p, v += o;

                      for (b = 0; b < d; b++) {
                        v += ")";
                      }

                      a = (x = new RegExp("^(" + v + ")$", r.casing ? "i" : "")).test(l);
                    } else for (var y = 0, k = o.length; y < k; y++) {
                      if ("\\" !== o.charAt(y)) {
                        v = p, v = (v += o.substr(0, y + 1)).replace(/\|$/, "");

                        for (var b = 0; b < d; b++) {
                          v += ")";
                        }

                        var x = new RegExp("^(" + v + ")$", r.casing ? "i" : "");
                        if (a = x.test(l)) break;
                      }
                    }

                    p += o;
                  }
                  if (a) break;
                }

                return n && (p += ")", d--), a;
              }

              var l,
                  c,
                  u = n.buffer.slice(),
                  p = "",
                  f = !1,
                  d = 0;
              null === r.regexTokens && function () {
                var e,
                    t,
                    n = new o(),
                    a = [];

                for (r.regexTokens = []; e = r.tokenizer.exec(r.regex);) {
                  switch ((t = e[0]).charAt(0)) {
                    case "(":
                      a.push(new o(!0));
                      break;

                    case ")":
                      c = a.pop(), a.length > 0 ? a[a.length - 1].matches.push(c) : n.matches.push(c);
                      break;

                    case "{":
                    case "+":
                    case "*":
                      var i = new o(!1, !0),
                          s = (t = t.replace(/[{}]/g, "")).split(","),
                          l = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                          u = 1 === s.length ? l : isNaN(s[1]) ? s[1] : parseInt(s[1]);

                      if (i.quantifier = {
                        min: l,
                        max: u
                      }, a.length > 0) {
                        var p = a[a.length - 1].matches;
                        (e = p.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), p.push(e), p.push(i);
                      } else (e = n.matches.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), n.matches.push(e), n.matches.push(i);

                      break;

                    default:
                      a.length > 0 ? a[a.length - 1].matches.push(t) : n.matches.push(t);
                  }
                }

                n.matches.length > 0 && r.regexTokens.push(n);
              }(), u.splice(a, 0, t), l = u.join("");

              for (var m = 0; m < r.regexTokens.length; m++) {
                var h = r.regexTokens[m];
                if (f = s(h, h.isGroup)) break;
              }

              return f;
            },
            cardinality: 1
          }
        }
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a,
      i,
      r,
      o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  };
  !function (o) {
    i = [n(2), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    return void 0 === e.fn.inputmask && (e.fn.inputmask = function (n, a) {
      var i,
          r = this[0];
      if (void 0 === a && (a = {}), "string" == typeof n) switch (n) {
        case "unmaskedvalue":
          return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val();

        case "remove":
          return this.each(function () {
            this.inputmask && this.inputmask.remove();
          });

        case "getemptymask":
          return r && r.inputmask ? r.inputmask.getemptymask() : "";

        case "hasMaskedValue":
          return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();

        case "isComplete":
          return !r || !r.inputmask || r.inputmask.isComplete();

        case "getmetadata":
          return r && r.inputmask ? r.inputmask.getmetadata() : void 0;

        case "setvalue":
          e(r).val(a), r && void 0 === r.inputmask && e(r).triggerHandler("setvalue");
          break;

        case "option":
          if ("string" != typeof a) return this.each(function () {
            if (void 0 !== this.inputmask) return this.inputmask.option(a);
          });
          if (r && void 0 !== r.inputmask) return r.inputmask.option(a);
          break;

        default:
          return a.alias = n, i = new t(a), this.each(function () {
            i.mask(this);
          });
      } else {
        if ("object" == (void 0 === n ? "undefined" : o(n))) return i = new t(n), void 0 === n.mask && void 0 === n.alias ? this.each(function () {
          if (void 0 !== this.inputmask) return this.inputmask.option(n);
          i.mask(this);
        }) : this.each(function () {
          i.mask(this);
        });
        if (void 0 === n) return this.each(function () {
          (i = new t(a)).mask(this);
        });
      }
    }), e.fn.inputmask;
  });
}]);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this; // If any child element receives focus within the slider we need to pause the autoplay


    _.$slider.off('focus.slick blur.slick').on('focus.slick', '*', function (event) {
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          if ($sf.is(':focus')) {
            _.focussed = true;

            _.autoPlay();
          }
        }
      }, 0);
    }).on('blur.slick', '*', function (event) {
      var $sf = $(this); // When a blur occurs on any elements within the slider we become unfocused

      if (_.options.pauseOnFocus) {
        _.focussed = false;

        _.autoPlay();
      }
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        swipeTarget,
        centerOffset;

    centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
    swipeTarget = _.swipeLeft * -1 + centerOffset;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        var slideOuterWidth, slideOffset, slideRightBoundary;
        slideOuterWidth = $(slide).outerWidth();
        slideOffset = slide.offsetLeft;

        if (_.options.centerMode !== true) {
          slideOffset += slideOuterWidth / 2;
        }

        slideRightBoundary = slideOffset + slideOuterWidth;

        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});
"use strict";
"use strict";
"use strict";
"use strict";

$('.firstscreen__scroll').on('click', function () {
  event.preventDefault();
  var portfolio = $('#portfolio');
  $('html, body').animate({
    scrollTop: portfolio.offset().top
  }, 1000);
});
"use strict";

var $formRequesPhone = $('.formrequest__input-phone');
$formRequesPhone.inputmask({
  'mask': '+7 999 999-99-99',
  showMaskOnHover: false,
  showMaskOnFocus: true
});
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";

$('.portfolio__content').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1
});
$('.portfolio__next').on('click', function () {
  $('.portfolio__content').slick('slickNext');
});
"use strict";
"use strict";

$('.reviews__content').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1
});
$('.review__next').on('click', function () {
  $('.reviews__content').slick('slickNext');
});
"use strict";
"use strict";

var onResize = function onResize() {
  if ($(window).width() >= 960) {
    $('.page').on('mousemove', function (e) {
      if ($('.social__link:hover').length !== 0) {
        var X = e.pageX - 85;
        var Y = e.pageY - 30;
        $('.light').show();
        $('.light').offset({
          top: Y,
          left: X
        });
      } else {
        $('.light').hide();
      }
    });
  } else {
    $('.page').off();
  }
};

$(document).ready(onResize);
$(window).resize(onResize);
"use strict";