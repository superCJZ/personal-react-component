!function (e, r) { if ("object" == typeof exports && "object" == typeof module)
    module.exports = r(require("react"));
else if ("function" == typeof define && define.amd)
    define(["react"], r);
else {
    var t = "object" == typeof exports ? r(require("react")) : r(e.React);
    for (var o in t)
        ("object" == typeof exports ? exports : e)[o] = t[o];
} }(self, (function (e) { return (function () {
    "use strict";
    var r = { 787: function (r) { r.exports = e; } }, t = {};
    function o(e) { var n = t[e]; if (void 0 !== n)
        return n.exports; var a = t[e] = { exports: {} }; return r[e](a, a.exports, o), a.exports; }
    o.n = function (e) { var r = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return o.d(r, { a: r }), r; }, o.d = function (e, r) { for (var t in r)
        o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] }); }, o.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r); };
    var n = {};
    return (function () { o.d(n, { default: function () { return t; } }); var e = o(787), r = o.n(e); var t = function () { return r().createElement("div", { className: "yourcom" }, "YourCom"); }; })(), n.default;
})(); }));
