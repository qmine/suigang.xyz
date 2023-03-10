(() => {
    var t = {
            169: (t, e, i) => {
                "use strict";
                i.r(e), i.d(e, {
                    Alert: () => ye,
                    Button: () => be,
                    Carousel: () => Pe,
                    Collapse: () => Ve,
                    Dropdown: () => di,
                    Modal: () => $i,
                    Offcanvas: () => Vi,
                    Popover: () => yn,
                    ScrollSpy: () => Tn,
                    Tab: () => On,
                    Toast: () => Hn,
                    Tooltip: () => fn
                });
                var n = {};
                i.r(n), i.d(n, {
                    afterMain: () => E,
                    afterRead: () => b,
                    afterWrite: () => S,
                    applyStyles: () => N,
                    arrow: () => K,
                    auto: () => l,
                    basePlacements: () => c,
                    beforeMain: () => w,
                    beforeRead: () => y,
                    beforeWrite: () => C,
                    bottom: () => o,
                    clippingParents: () => d,
                    computeStyles: () => et,
                    createPopper: () => kt,
                    createPopperBase: () => Lt,
                    createPopperLite: () => Ot,
                    detectOverflow: () => mt,
                    end: () => u,
                    eventListeners: () => nt,
                    flip: () => vt,
                    hide: () => bt,
                    left: () => a,
                    main: () => x,
                    modifierPhases: () => A,
                    offset: () => wt,
                    placements: () => v,
                    popper: () => f,
                    popperGenerator: () => Dt,
                    popperOffsets: () => xt,
                    preventOverflow: () => Et,
                    read: () => _,
                    reference: () => g,
                    right: () => r,
                    start: () => h,
                    top: () => s,
                    variationPlacements: () => m,
                    viewport: () => p,
                    write: () => T
                });
                var s = "top",
                    o = "bottom",
                    r = "right",
                    a = "left",
                    l = "auto",
                    c = [s, o, r, a],
                    h = "start",
                    u = "end",
                    d = "clippingParents",
                    p = "viewport",
                    f = "popper",
                    g = "reference",
                    m = c.reduce((function(t, e) {
                        return t.concat([e + "-" + h, e + "-" + u])
                    }), []),
                    v = [].concat(c, [l]).reduce((function(t, e) {
                        return t.concat([e, e + "-" + h, e + "-" + u])
                    }), []),
                    y = "beforeRead",
                    _ = "read",
                    b = "afterRead",
                    w = "beforeMain",
                    x = "main",
                    E = "afterMain",
                    C = "beforeWrite",
                    T = "write",
                    S = "afterWrite",
                    A = [y, _, b, w, x, E, C, T, S];

                function D(t) {
                    return t ? (t.nodeName || "").toLowerCase() : null
                }

                function L(t) {
                    if (null == t) return window;
                    if ("[object Window]" !== t.toString()) {
                        var e = t.ownerDocument;
                        return e && e.defaultView || window
                    }
                    return t
                }

                function k(t) {
                    return t instanceof L(t).Element || t instanceof Element
                }

                function O(t) {
                    return t instanceof L(t).HTMLElement || t instanceof HTMLElement
                }

                function I(t) {
                    return "undefined" != typeof ShadowRoot && (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot)
                }
                const N = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(t) {
                        var e = t.state;
                        Object.keys(e.elements).forEach((function(t) {
                            var i = e.styles[t] || {},
                                n = e.attributes[t] || {},
                                s = e.elements[t];
                            O(s) && D(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                                var e = n[t];
                                !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                            })))
                        }))
                    },
                    effect: function(t) {
                        var e = t.state,
                            i = {
                                popper: {
                                    position: e.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                            function() {
                                Object.keys(e.elements).forEach((function(t) {
                                    var n = e.elements[t],
                                        s = e.attributes[t] || {},
                                        o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                            return t[e] = "", t
                                        }), {});
                                    O(n) && D(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                                        n.removeAttribute(t)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                };

                function j(t) {
                    return t.split("-")[0]
                }
                var z = Math.max,
                    P = Math.min,
                    M = Math.round;

                function H(t, e) {
                    void 0 === e && (e = !1);
                    var i = t.getBoundingClientRect(),
                        n = 1,
                        s = 1;
                    if (O(t) && e) {
                        var o = t.offsetHeight,
                            r = t.offsetWidth;
                        r > 0 && (n = M(i.width) / r || 1), o > 0 && (s = M(i.height) / o || 1)
                    }
                    return {
                        width: i.width / n,
                        height: i.height / s,
                        top: i.top / s,
                        right: i.right / n,
                        bottom: i.bottom / s,
                        left: i.left / n,
                        x: i.left / n,
                        y: i.top / s
                    }
                }

                function $(t) {
                    var e = H(t),
                        i = t.offsetWidth,
                        n = t.offsetHeight;
                    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
                        x: t.offsetLeft,
                        y: t.offsetTop,
                        width: i,
                        height: n
                    }
                }

                function R(t, e) {
                    var i = e.getRootNode && e.getRootNode();
                    if (t.contains(e)) return !0;
                    if (i && I(i)) {
                        var n = e;
                        do {
                            if (n && t.isSameNode(n)) return !0;
                            n = n.parentNode || n.host
                        } while (n)
                    }
                    return !1
                }

                function W(t) {
                    return L(t).getComputedStyle(t)
                }

                function q(t) {
                    return ["table", "td", "th"].indexOf(D(t)) >= 0
                }

                function B(t) {
                    return ((k(t) ? t.ownerDocument : t.document) || window.document).documentElement
                }

                function F(t) {
                    return "html" === D(t) ? t : t.assignedSlot || t.parentNode || (I(t) ? t.host : null) || B(t)
                }

                function U(t) {
                    return O(t) && "fixed" !== W(t).position ? t.offsetParent : null
                }

                function V(t) {
                    for (var e = L(t), i = U(t); i && q(i) && "static" === W(i).position;) i = U(i);
                    return i && ("html" === D(i) || "body" === D(i) && "static" === W(i).position) ? e : i || function(t) {
                        var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                        if (-1 !== navigator.userAgent.indexOf("Trident") && O(t) && "fixed" === W(t).position) return null;
                        var i = F(t);
                        for (I(i) && (i = i.host); O(i) && ["html", "body"].indexOf(D(i)) < 0;) {
                            var n = W(i);
                            if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                            i = i.parentNode
                        }
                        return null
                    }(t) || e
                }

                function Y(t) {
                    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
                }

                function Q(t, e, i) {
                    return z(t, P(e, i))
                }

                function X(t) {
                    return Object.assign({}, {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, t)
                }

                function G(t, e) {
                    return e.reduce((function(e, i) {
                        return e[i] = t, e
                    }), {})
                }
                const K = {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e, i = t.state,
                            n = t.name,
                            l = t.options,
                            h = i.elements.arrow,
                            u = i.modifiersData.popperOffsets,
                            d = j(i.placement),
                            p = Y(d),
                            f = [a, r].indexOf(d) >= 0 ? "height" : "width";
                        if (h && u) {
                            var g = function(t, e) {
                                    return X("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                        placement: e.placement
                                    })) : t) ? t : G(t, c))
                                }(l.padding, i),
                                m = $(h),
                                v = "y" === p ? s : a,
                                y = "y" === p ? o : r,
                                _ = i.rects.reference[f] + i.rects.reference[p] - u[p] - i.rects.popper[f],
                                b = u[p] - i.rects.reference[p],
                                w = V(h),
                                x = w ? "y" === p ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
                                E = _ / 2 - b / 2,
                                C = g[v],
                                T = x - m[f] - g[y],
                                S = x / 2 - m[f] / 2 + E,
                                A = Q(C, S, T),
                                D = p;
                            i.modifiersData[n] = ((e = {})[D] = A, e.centerOffset = A - S, e)
                        }
                    },
                    effect: function(t) {
                        var e = t.state,
                            i = t.options.element,
                            n = void 0 === i ? "[data-popper-arrow]" : i;
                        null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && R(e.elements.popper, n) && (e.elements.arrow = n)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                };

                function Z(t) {
                    return t.split("-")[1]
                }
                var J = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

                function tt(t) {
                    var e, i = t.popper,
                        n = t.popperRect,
                        l = t.placement,
                        c = t.variation,
                        h = t.offsets,
                        d = t.position,
                        p = t.gpuAcceleration,
                        f = t.adaptive,
                        g = t.roundOffsets,
                        m = t.isFixed,
                        v = h.x,
                        y = void 0 === v ? 0 : v,
                        _ = h.y,
                        b = void 0 === _ ? 0 : _,
                        w = "function" == typeof g ? g({
                            x: y,
                            y: b
                        }) : {
                            x: y,
                            y: b
                        };
                    y = w.x, b = w.y;
                    var x = h.hasOwnProperty("x"),
                        E = h.hasOwnProperty("y"),
                        C = a,
                        T = s,
                        S = window;
                    if (f) {
                        var A = V(i),
                            D = "clientHeight",
                            k = "clientWidth";
                        A === L(i) && "static" !== W(A = B(i)).position && "absolute" === d && (D = "scrollHeight", k = "scrollWidth"), (l === s || (l === a || l === r) && c === u) && (T = o, b -= (m && A === S && S.visualViewport ? S.visualViewport.height : A[D]) - n.height, b *= p ? 1 : -1), l !== a && (l !== s && l !== o || c !== u) || (C = r, y -= (m && A === S && S.visualViewport ? S.visualViewport.width : A[k]) - n.width, y *= p ? 1 : -1)
                    }
                    var O, I = Object.assign({
                            position: d
                        }, f && J),
                        N = !0 === g ? function(t) {
                            var e = t.x,
                                i = t.y,
                                n = window.devicePixelRatio || 1;
                            return {
                                x: M(e * n) / n || 0,
                                y: M(i * n) / n || 0
                            }
                        }({
                            x: y,
                            y: b
                        }) : {
                            x: y,
                            y: b
                        };
                    return y = N.x, b = N.y, p ? Object.assign({}, I, ((O = {})[T] = E ? "0" : "", O[C] = x ? "0" : "", O.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", O)) : Object.assign({}, I, ((e = {})[T] = E ? b + "px" : "", e[C] = x ? y + "px" : "", e.transform = "", e))
                }
                const et = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            n = i.gpuAcceleration,
                            s = void 0 === n || n,
                            o = i.adaptive,
                            r = void 0 === o || o,
                            a = i.roundOffsets,
                            l = void 0 === a || a,
                            c = {
                                placement: j(e.placement),
                                variation: Z(e.placement),
                                popper: e.elements.popper,
                                popperRect: e.rects.popper,
                                gpuAcceleration: s,
                                isFixed: "fixed" === e.options.strategy
                            };
                        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, tt(Object.assign({}, c, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: r,
                            roundOffsets: l
                        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, tt(Object.assign({}, c, {
                            offsets: e.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: l
                        })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-placement": e.placement
                        })
                    },
                    data: {}
                };
                var it = {
                    passive: !0
                };
                const nt = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(t) {
                        var e = t.state,
                            i = t.instance,
                            n = t.options,
                            s = n.scroll,
                            o = void 0 === s || s,
                            r = n.resize,
                            a = void 0 === r || r,
                            l = L(e.elements.popper),
                            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                        return o && c.forEach((function(t) {
                                t.addEventListener("scroll", i.update, it)
                            })), a && l.addEventListener("resize", i.update, it),
                            function() {
                                o && c.forEach((function(t) {
                                    t.removeEventListener("scroll", i.update, it)
                                })), a && l.removeEventListener("resize", i.update, it)
                            }
                    },
                    data: {}
                };
                var st = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

                function ot(t) {
                    return t.replace(/left|right|bottom|top/g, (function(t) {
                        return st[t]
                    }))
                }
                var rt = {
                    start: "end",
                    end: "start"
                };

                function at(t) {
                    return t.replace(/start|end/g, (function(t) {
                        return rt[t]
                    }))
                }

                function lt(t) {
                    var e = L(t);
                    return {
                        scrollLeft: e.pageXOffset,
                        scrollTop: e.pageYOffset
                    }
                }

                function ct(t) {
                    return H(B(t)).left + lt(t).scrollLeft
                }

                function ht(t) {
                    var e = W(t),
                        i = e.overflow,
                        n = e.overflowX,
                        s = e.overflowY;
                    return /auto|scroll|overlay|hidden/.test(i + s + n)
                }

                function ut(t) {
                    return ["html", "body", "#document"].indexOf(D(t)) >= 0 ? t.ownerDocument.body : O(t) && ht(t) ? t : ut(F(t))
                }

                function dt(t, e) {
                    var i;
                    void 0 === e && (e = []);
                    var n = ut(t),
                        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
                        o = L(n),
                        r = s ? [o].concat(o.visualViewport || [], ht(n) ? n : []) : n,
                        a = e.concat(r);
                    return s ? a : a.concat(dt(F(r)))
                }

                function pt(t) {
                    return Object.assign({}, t, {
                        left: t.x,
                        top: t.y,
                        right: t.x + t.width,
                        bottom: t.y + t.height
                    })
                }

                function ft(t, e) {
                    return e === p ? pt(function(t) {
                        var e = L(t),
                            i = B(t),
                            n = e.visualViewport,
                            s = i.clientWidth,
                            o = i.clientHeight,
                            r = 0,
                            a = 0;
                        return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                            width: s,
                            height: o,
                            x: r + ct(t),
                            y: a
                        }
                    }(t)) : k(e) ? function(t) {
                        var e = H(t);
                        return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
                    }(e) : pt(function(t) {
                        var e, i = B(t),
                            n = lt(t),
                            s = null == (e = t.ownerDocument) ? void 0 : e.body,
                            o = z(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                            r = z(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                            a = -n.scrollLeft + ct(t),
                            l = -n.scrollTop;
                        return "rtl" === W(s || i).direction && (a += z(i.clientWidth, s ? s.clientWidth : 0) - o), {
                            width: o,
                            height: r,
                            x: a,
                            y: l
                        }
                    }(B(t)))
                }

                function gt(t) {
                    var e, i = t.reference,
                        n = t.element,
                        l = t.placement,
                        c = l ? j(l) : null,
                        d = l ? Z(l) : null,
                        p = i.x + i.width / 2 - n.width / 2,
                        f = i.y + i.height / 2 - n.height / 2;
                    switch (c) {
                        case s:
                            e = {
                                x: p,
                                y: i.y - n.height
                            };
                            break;
                        case o:
                            e = {
                                x: p,
                                y: i.y + i.height
                            };
                            break;
                        case r:
                            e = {
                                x: i.x + i.width,
                                y: f
                            };
                            break;
                        case a:
                            e = {
                                x: i.x - n.width,
                                y: f
                            };
                            break;
                        default:
                            e = {
                                x: i.x,
                                y: i.y
                            }
                    }
                    var g = c ? Y(c) : null;
                    if (null != g) {
                        var m = "y" === g ? "height" : "width";
                        switch (d) {
                            case h:
                                e[g] = e[g] - (i[m] / 2 - n[m] / 2);
                                break;
                            case u:
                                e[g] = e[g] + (i[m] / 2 - n[m] / 2)
                        }
                    }
                    return e
                }

                function mt(t, e) {
                    void 0 === e && (e = {});
                    var i = e,
                        n = i.placement,
                        a = void 0 === n ? t.placement : n,
                        l = i.boundary,
                        h = void 0 === l ? d : l,
                        u = i.rootBoundary,
                        m = void 0 === u ? p : u,
                        v = i.elementContext,
                        y = void 0 === v ? f : v,
                        _ = i.altBoundary,
                        b = void 0 !== _ && _,
                        w = i.padding,
                        x = void 0 === w ? 0 : w,
                        E = X("number" != typeof x ? x : G(x, c)),
                        C = y === f ? g : f,
                        T = t.rects.popper,
                        S = t.elements[b ? C : y],
                        A = function(t, e, i) {
                            var n = "clippingParents" === e ? function(t) {
                                    var e = dt(F(t)),
                                        i = ["absolute", "fixed"].indexOf(W(t).position) >= 0 && O(t) ? V(t) : t;
                                    return k(i) ? e.filter((function(t) {
                                        return k(t) && R(t, i) && "body" !== D(t)
                                    })) : []
                                }(t) : [].concat(e),
                                s = [].concat(n, [i]),
                                o = s[0],
                                r = s.reduce((function(e, i) {
                                    var n = ft(t, i);
                                    return e.top = z(n.top, e.top), e.right = P(n.right, e.right), e.bottom = P(n.bottom, e.bottom), e.left = z(n.left, e.left), e
                                }), ft(t, o));
                            return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
                        }(k(S) ? S : S.contextElement || B(t.elements.popper), h, m),
                        L = H(t.elements.reference),
                        I = gt({
                            reference: L,
                            element: T,
                            strategy: "absolute",
                            placement: a
                        }),
                        N = pt(Object.assign({}, T, I)),
                        j = y === f ? N : L,
                        M = {
                            top: A.top - j.top + E.top,
                            bottom: j.bottom - A.bottom + E.bottom,
                            left: A.left - j.left + E.left,
                            right: j.right - A.right + E.right
                        },
                        $ = t.modifiersData.offset;
                    if (y === f && $) {
                        var q = $[a];
                        Object.keys(M).forEach((function(t) {
                            var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
                                i = [s, o].indexOf(t) >= 0 ? "y" : "x";
                            M[t] += q[i] * e
                        }))
                    }
                    return M
                }
                const vt = {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            n = t.name;
                        if (!e.modifiersData[n]._skip) {
                            for (var u = i.mainAxis, d = void 0 === u || u, p = i.altAxis, f = void 0 === p || p, g = i.fallbackPlacements, y = i.padding, _ = i.boundary, b = i.rootBoundary, w = i.altBoundary, x = i.flipVariations, E = void 0 === x || x, C = i.allowedAutoPlacements, T = e.options.placement, S = j(T), A = g || (S !== T && E ? function(t) {
                                    if (j(t) === l) return [];
                                    var e = ot(t);
                                    return [at(t), e, at(e)]
                                }(T) : [ot(T)]), D = [T].concat(A).reduce((function(t, i) {
                                    return t.concat(j(i) === l ? function(t, e) {
                                        void 0 === e && (e = {});
                                        var i = e,
                                            n = i.placement,
                                            s = i.boundary,
                                            o = i.rootBoundary,
                                            r = i.padding,
                                            a = i.flipVariations,
                                            l = i.allowedAutoPlacements,
                                            h = void 0 === l ? v : l,
                                            u = Z(n),
                                            d = u ? a ? m : m.filter((function(t) {
                                                return Z(t) === u
                                            })) : c,
                                            p = d.filter((function(t) {
                                                return h.indexOf(t) >= 0
                                            }));
                                        0 === p.length && (p = d);
                                        var f = p.reduce((function(e, i) {
                                            return e[i] = mt(t, {
                                                placement: i,
                                                boundary: s,
                                                rootBoundary: o,
                                                padding: r
                                            })[j(i)], e
                                        }), {});
                                        return Object.keys(f).sort((function(t, e) {
                                            return f[t] - f[e]
                                        }))
                                    }(e, {
                                        placement: i,
                                        boundary: _,
                                        rootBoundary: b,
                                        padding: y,
                                        flipVariations: E,
                                        allowedAutoPlacements: C
                                    }) : i)
                                }), []), L = e.rects.reference, k = e.rects.popper, O = new Map, I = !0, N = D[0], z = 0; z < D.length; z++) {
                                var P = D[z],
                                    M = j(P),
                                    H = Z(P) === h,
                                    $ = [s, o].indexOf(M) >= 0,
                                    R = $ ? "width" : "height",
                                    W = mt(e, {
                                        placement: P,
                                        boundary: _,
                                        rootBoundary: b,
                                        altBoundary: w,
                                        padding: y
                                    }),
                                    q = $ ? H ? r : a : H ? o : s;
                                L[R] > k[R] && (q = ot(q));
                                var B = ot(q),
                                    F = [];
                                if (d && F.push(W[M] <= 0), f && F.push(W[q] <= 0, W[B] <= 0), F.every((function(t) {
                                        return t
                                    }))) {
                                    N = P, I = !1;
                                    break
                                }
                                O.set(P, F)
                            }
                            if (I)
                                for (var U = function(t) {
                                        var e = D.find((function(e) {
                                            var i = O.get(e);
                                            if (i) return i.slice(0, t).every((function(t) {
                                                return t
                                            }))
                                        }));
                                        if (e) return N = e, "break"
                                    }, V = E ? 3 : 1; V > 0 && "break" !== U(V); V--);
                            e.placement !== N && (e.modifiersData[n]._skip = !0, e.placement = N, e.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                };

                function yt(t, e, i) {
                    return void 0 === i && (i = {
                        x: 0,
                        y: 0
                    }), {
                        top: t.top - e.height - i.y,
                        right: t.right - e.width + i.x,
                        bottom: t.bottom - e.height + i.y,
                        left: t.left - e.width - i.x
                    }
                }

                function _t(t) {
                    return [s, r, o, a].some((function(e) {
                        return t[e] >= 0
                    }))
                }
                const bt = {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(t) {
                            var e = t.state,
                                i = t.name,
                                n = e.rects.reference,
                                s = e.rects.popper,
                                o = e.modifiersData.preventOverflow,
                                r = mt(e, {
                                    elementContext: "reference"
                                }),
                                a = mt(e, {
                                    altBoundary: !0
                                }),
                                l = yt(r, n),
                                c = yt(a, s, o),
                                h = _t(l),
                                u = _t(c);
                            e.modifiersData[i] = {
                                referenceClippingOffsets: l,
                                popperEscapeOffsets: c,
                                isReferenceHidden: h,
                                hasPopperEscaped: u
                            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                                "data-popper-reference-hidden": h,
                                "data-popper-escaped": u
                            })
                        }
                    },
                    wt = {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(t) {
                            var e = t.state,
                                i = t.options,
                                n = t.name,
                                o = i.offset,
                                l = void 0 === o ? [0, 0] : o,
                                c = v.reduce((function(t, i) {
                                    return t[i] = function(t, e, i) {
                                        var n = j(t),
                                            o = [a, s].indexOf(n) >= 0 ? -1 : 1,
                                            l = "function" == typeof i ? i(Object.assign({}, e, {
                                                placement: t
                                            })) : i,
                                            c = l[0],
                                            h = l[1];
                                        return c = c || 0, h = (h || 0) * o, [a, r].indexOf(n) >= 0 ? {
                                            x: h,
                                            y: c
                                        } : {
                                            x: c,
                                            y: h
                                        }
                                    }(i, e.rects, l), t
                                }), {}),
                                h = c[e.placement],
                                u = h.x,
                                d = h.y;
                            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += d), e.modifiersData[n] = c
                        }
                    },
                    xt = {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(t) {
                            var e = t.state,
                                i = t.name;
                            e.modifiersData[i] = gt({
                                reference: e.rects.reference,
                                element: e.rects.popper,
                                strategy: "absolute",
                                placement: e.placement
                            })
                        },
                        data: {}
                    },
                    Et = {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(t) {
                            var e = t.state,
                                i = t.options,
                                n = t.name,
                                l = i.mainAxis,
                                c = void 0 === l || l,
                                u = i.altAxis,
                                d = void 0 !== u && u,
                                p = i.boundary,
                                f = i.rootBoundary,
                                g = i.altBoundary,
                                m = i.padding,
                                v = i.tether,
                                y = void 0 === v || v,
                                _ = i.tetherOffset,
                                b = void 0 === _ ? 0 : _,
                                w = mt(e, {
                                    boundary: p,
                                    rootBoundary: f,
                                    padding: m,
                                    altBoundary: g
                                }),
                                x = j(e.placement),
                                E = Z(e.placement),
                                C = !E,
                                T = Y(x),
                                S = "x" === T ? "y" : "x",
                                A = e.modifiersData.popperOffsets,
                                D = e.rects.reference,
                                L = e.rects.popper,
                                k = "function" == typeof b ? b(Object.assign({}, e.rects, {
                                    placement: e.placement
                                })) : b,
                                O = "number" == typeof k ? {
                                    mainAxis: k,
                                    altAxis: k
                                } : Object.assign({
                                    mainAxis: 0,
                                    altAxis: 0
                                }, k),
                                I = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                                N = {
                                    x: 0,
                                    y: 0
                                };
                            if (A) {
                                if (c) {
                                    var M, H = "y" === T ? s : a,
                                        R = "y" === T ? o : r,
                                        W = "y" === T ? "height" : "width",
                                        q = A[T],
                                        B = q + w[H],
                                        F = q - w[R],
                                        U = y ? -L[W] / 2 : 0,
                                        X = E === h ? D[W] : L[W],
                                        G = E === h ? -L[W] : -D[W],
                                        K = e.elements.arrow,
                                        J = y && K ? $(K) : {
                                            width: 0,
                                            height: 0
                                        },
                                        tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        et = tt[H],
                                        it = tt[R],
                                        nt = Q(0, D[W], J[W]),
                                        st = C ? D[W] / 2 - U - nt - et - O.mainAxis : X - nt - et - O.mainAxis,
                                        ot = C ? -D[W] / 2 + U + nt + it + O.mainAxis : G + nt + it + O.mainAxis,
                                        rt = e.elements.arrow && V(e.elements.arrow),
                                        at = rt ? "y" === T ? rt.clientTop || 0 : rt.clientLeft || 0 : 0,
                                        lt = null != (M = null == I ? void 0 : I[T]) ? M : 0,
                                        ct = q + ot - lt,
                                        ht = Q(y ? P(B, q + st - lt - at) : B, q, y ? z(F, ct) : F);
                                    A[T] = ht, N[T] = ht - q
                                }
                                if (d) {
                                    var ut, dt = "x" === T ? s : a,
                                        pt = "x" === T ? o : r,
                                        ft = A[S],
                                        gt = "y" === S ? "height" : "width",
                                        vt = ft + w[dt],
                                        yt = ft - w[pt],
                                        _t = -1 !== [s, a].indexOf(x),
                                        bt = null != (ut = null == I ? void 0 : I[S]) ? ut : 0,
                                        wt = _t ? vt : ft - D[gt] - L[gt] - bt + O.altAxis,
                                        xt = _t ? ft + D[gt] + L[gt] - bt - O.altAxis : yt,
                                        Et = y && _t ? function(t, e, i) {
                                            var n = Q(t, e, i);
                                            return n > i ? i : n
                                        }(wt, ft, xt) : Q(y ? wt : vt, ft, y ? xt : yt);
                                    A[S] = Et, N[S] = Et - ft
                                }
                                e.modifiersData[n] = N
                            }
                        },
                        requiresIfExists: ["offset"]
                    };

                function Ct(t, e, i) {
                    void 0 === i && (i = !1);
                    var n, s, o = O(e),
                        r = O(e) && function(t) {
                            var e = t.getBoundingClientRect(),
                                i = M(e.width) / t.offsetWidth || 1,
                                n = M(e.height) / t.offsetHeight || 1;
                            return 1 !== i || 1 !== n
                        }(e),
                        a = B(e),
                        l = H(t, r),
                        c = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        h = {
                            x: 0,
                            y: 0
                        };
                    return (o || !o && !i) && (("body" !== D(e) || ht(a)) && (c = (n = e) !== L(n) && O(n) ? {
                        scrollLeft: (s = n).scrollLeft,
                        scrollTop: s.scrollTop
                    } : lt(n)), O(e) ? ((h = H(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = ct(a))), {
                        x: l.left + c.scrollLeft - h.x,
                        y: l.top + c.scrollTop - h.y,
                        width: l.width,
                        height: l.height
                    }
                }

                function Tt(t) {
                    var e = new Map,
                        i = new Set,
                        n = [];

                    function s(t) {
                        i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                            if (!i.has(t)) {
                                var n = e.get(t);
                                n && s(n)
                            }
                        })), n.push(t)
                    }
                    return t.forEach((function(t) {
                        e.set(t.name, t)
                    })), t.forEach((function(t) {
                        i.has(t.name) || s(t)
                    })), n
                }
                var St = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

                function At() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return !e.some((function(t) {
                        return !(t && "function" == typeof t.getBoundingClientRect)
                    }))
                }

                function Dt(t) {
                    void 0 === t && (t = {});
                    var e = t,
                        i = e.defaultModifiers,
                        n = void 0 === i ? [] : i,
                        s = e.defaultOptions,
                        o = void 0 === s ? St : s;
                    return function(t, e, i) {
                        void 0 === i && (i = o);
                        var s, r, a = {
                                placement: "bottom",
                                orderedModifiers: [],
                                options: Object.assign({}, St, o),
                                modifiersData: {},
                                elements: {
                                    reference: t,
                                    popper: e
                                },
                                attributes: {},
                                styles: {}
                            },
                            l = [],
                            c = !1,
                            h = {
                                state: a,
                                setOptions: function(i) {
                                    var s = "function" == typeof i ? i(a.options) : i;
                                    u(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                                        reference: k(t) ? dt(t) : t.contextElement ? dt(t.contextElement) : [],
                                        popper: dt(e)
                                    };
                                    var r, c, d = function(t) {
                                        var e = Tt(t);
                                        return A.reduce((function(t, i) {
                                            return t.concat(e.filter((function(t) {
                                                return t.phase === i
                                            })))
                                        }), [])
                                    }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
                                        var i = t[e.name];
                                        return t[e.name] = i ? Object.assign({}, i, e, {
                                            options: Object.assign({}, i.options, e.options),
                                            data: Object.assign({}, i.data, e.data)
                                        }) : e, t
                                    }), {}), Object.keys(c).map((function(t) {
                                        return c[t]
                                    }))));
                                    return a.orderedModifiers = d.filter((function(t) {
                                        return t.enabled
                                    })), a.orderedModifiers.forEach((function(t) {
                                        var e = t.name,
                                            i = t.options,
                                            n = void 0 === i ? {} : i,
                                            s = t.effect;
                                        if ("function" == typeof s) {
                                            var o = s({
                                                state: a,
                                                name: e,
                                                instance: h,
                                                options: n
                                            });
                                            l.push(o || function() {})
                                        }
                                    })), h.update()
                                },
                                forceUpdate: function() {
                                    if (!c) {
                                        var t = a.elements,
                                            e = t.reference,
                                            i = t.popper;
                                        if (At(e, i)) {
                                            a.rects = {
                                                reference: Ct(e, V(i), "fixed" === a.options.strategy),
                                                popper: $(i)
                                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                                            }));
                                            for (var n = 0; n < a.orderedModifiers.length; n++)
                                                if (!0 !== a.reset) {
                                                    var s = a.orderedModifiers[n],
                                                        o = s.fn,
                                                        r = s.options,
                                                        l = void 0 === r ? {} : r,
                                                        u = s.name;
                                                    "function" == typeof o && (a = o({
                                                        state: a,
                                                        options: l,
                                                        name: u,
                                                        instance: h
                                                    }) || a)
                                                } else a.reset = !1, n = -1
                                        }
                                    }
                                },
                                update: (s = function() {
                                    return new Promise((function(t) {
                                        h.forceUpdate(), t(a)
                                    }))
                                }, function() {
                                    return r || (r = new Promise((function(t) {
                                        Promise.resolve().then((function() {
                                            r = void 0, t(s())
                                        }))
                                    }))), r
                                }),
                                destroy: function() {
                                    u(), c = !0
                                }
                            };
                        if (!At(t, e)) return h;

                        function u() {
                            l.forEach((function(t) {
                                return t()
                            })), l = []
                        }
                        return h.setOptions(i).then((function(t) {
                            !c && i.onFirstUpdate && i.onFirstUpdate(t)
                        })), h
                    }
                }
                var Lt = Dt(),
                    kt = Dt({
                        defaultModifiers: [nt, xt, et, N, wt, vt, Et, K, bt]
                    }),
                    Ot = Dt({
                        defaultModifiers: [nt, xt, et, N]
                    });
                const It = "transitionend",
                    Nt = t => {
                        let e = t.getAttribute("data-bs-target");
                        if (!e || "#" === e) {
                            let i = t.getAttribute("href");
                            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
                        }
                        return e
                    },
                    jt = t => {
                        const e = Nt(t);
                        return e && document.querySelector(e) ? e : null
                    },
                    zt = t => {
                        const e = Nt(t);
                        return e ? document.querySelector(e) : null
                    },
                    Pt = t => {
                        t.dispatchEvent(new Event(It))
                    },
                    Mt = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                    Ht = t => Mt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
                    $t = (t, e, i) => {
                        Object.keys(i).forEach((n => {
                            const s = i[n],
                                o = e[n],
                                r = o && Mt(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                            var a;
                            if (!new RegExp(s).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
                        }))
                    },
                    Rt = t => !(!Mt(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                    Wt = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
                    qt = t => {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" == typeof t.getRootNode) {
                            const e = t.getRootNode();
                            return e instanceof ShadowRoot ? e : null
                        }
                        return t instanceof ShadowRoot ? t : t.parentNode ? qt(t.parentNode) : null
                    },
                    Bt = () => {},
                    Ft = t => {
                        t.offsetHeight
                    },
                    Ut = () => {
                        const {
                            jQuery: t
                        } = window;
                        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
                    },
                    Vt = [],
                    Yt = () => "rtl" === document.documentElement.dir,
                    Qt = t => {
                        var e;
                        e = () => {
                            const e = Ut();
                            if (e) {
                                const i = t.NAME,
                                    n = e.fn[i];
                                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                            }
                        }, "loading" === document.readyState ? (Vt.length || document.addEventListener("DOMContentLoaded", (() => {
                            Vt.forEach((t => t()))
                        })), Vt.push(e)) : e()
                    },
                    Xt = t => {
                        "function" == typeof t && t()
                    },
                    Gt = (t, e, i = !0) => {
                        if (!i) return void Xt(t);
                        const n = (t => {
                            if (!t) return 0;
                            let {
                                transitionDuration: e,
                                transitionDelay: i
                            } = window.getComputedStyle(t);
                            const n = Number.parseFloat(e),
                                s = Number.parseFloat(i);
                            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
                        })(e) + 5;
                        let s = !1;
                        const o = ({
                            target: i
                        }) => {
                            i === e && (s = !0, e.removeEventListener(It, o), Xt(t))
                        };
                        e.addEventListener(It, o), setTimeout((() => {
                            s || Pt(e)
                        }), n)
                    },
                    Kt = (t, e, i, n) => {
                        let s = t.indexOf(e);
                        if (-1 === s) return t[!i && n ? t.length - 1 : 0];
                        const o = t.length;
                        return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))]
                    },
                    Zt = /[^.]*(?=\..*)\.|.*/,
                    Jt = /\..*/,
                    te = /::\d+$/,
                    ee = {};
                let ie = 1;
                const ne = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    },
                    se = /^(mouseenter|mouseleave)/i,
                    oe = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

                function re(t, e) {
                    return e && `${e}::${ie++}` || t.uidEvent || ie++
                }

                function ae(t) {
                    const e = re(t);
                    return t.uidEvent = e, ee[e] = ee[e] || {}, ee[e]
                }

                function le(t, e, i = null) {
                    const n = Object.keys(t);
                    for (let s = 0, o = n.length; s < o; s++) {
                        const o = t[n[s]];
                        if (o.originalHandler === e && o.delegationSelector === i) return o
                    }
                    return null
                }

                function ce(t, e, i) {
                    const n = "string" == typeof e,
                        s = n ? i : e;
                    let o = de(t);
                    return oe.has(o) || (o = t), [n, s, o]
                }

                function he(t, e, i, n, s) {
                    if ("string" != typeof e || !t) return;
                    if (i || (i = n, n = null), se.test(e)) {
                        const t = t => function(e) {
                            if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                        };
                        n ? n = t(n) : i = t(i)
                    }
                    const [o, r, a] = ce(e, i, n), l = ae(t), c = l[a] || (l[a] = {}), h = le(c, r, o ? i : null);
                    if (h) return void(h.oneOff = h.oneOff && s);
                    const u = re(r, e.replace(Zt, "")),
                        d = o ? function(t, e, i) {
                            return function n(s) {
                                const o = t.querySelectorAll(e);
                                for (let {
                                        target: r
                                    } = s; r && r !== this; r = r.parentNode)
                                    for (let a = o.length; a--;)
                                        if (o[a] === r) return s.delegateTarget = r, n.oneOff && pe.off(t, s.type, e, i), i.apply(r, [s]);
                                return null
                            }
                        }(t, i, n) : function(t, e) {
                            return function i(n) {
                                return n.delegateTarget = t, i.oneOff && pe.off(t, n.type, e), e.apply(t, [n])
                            }
                        }(t, i);
                    d.delegationSelector = o ? i : null, d.originalHandler = r, d.oneOff = s, d.uidEvent = u, c[u] = d, t.addEventListener(a, d, o)
                }

                function ue(t, e, i, n, s) {
                    const o = le(e[i], n, s);
                    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
                }

                function de(t) {
                    return t = t.replace(Jt, ""), ne[t] || t
                }
                const pe = {
                        on(t, e, i, n) {
                            he(t, e, i, n, !1)
                        },
                        one(t, e, i, n) {
                            he(t, e, i, n, !0)
                        },
                        off(t, e, i, n) {
                            if ("string" != typeof e || !t) return;
                            const [s, o, r] = ce(e, i, n), a = r !== e, l = ae(t), c = e.startsWith(".");
                            if (void 0 !== o) {
                                if (!l || !l[r]) return;
                                return void ue(t, l, r, o, s ? i : null)
                            }
                            c && Object.keys(l).forEach((i => {
                                ! function(t, e, i, n) {
                                    const s = e[i] || {};
                                    Object.keys(s).forEach((o => {
                                        if (o.includes(n)) {
                                            const n = s[o];
                                            ue(t, e, i, n.originalHandler, n.delegationSelector)
                                        }
                                    }))
                                }(t, l, i, e.slice(1))
                            }));
                            const h = l[r] || {};
                            Object.keys(h).forEach((i => {
                                const n = i.replace(te, "");
                                if (!a || e.includes(n)) {
                                    const e = h[i];
                                    ue(t, l, r, e.originalHandler, e.delegationSelector)
                                }
                            }))
                        },
                        trigger(t, e, i) {
                            if ("string" != typeof e || !t) return null;
                            const n = Ut(),
                                s = de(e),
                                o = e !== s,
                                r = oe.has(s);
                            let a, l = !0,
                                c = !0,
                                h = !1,
                                u = null;
                            return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (u = document.createEvent("HTMLEvents"), u.initEvent(s, l, !0)) : u = new CustomEvent(e, {
                                bubbles: l,
                                cancelable: !0
                            }), void 0 !== i && Object.keys(i).forEach((t => {
                                Object.defineProperty(u, t, {
                                    get: () => i[t]
                                })
                            })), h && u.preventDefault(), c && t.dispatchEvent(u), u.defaultPrevented && void 0 !== a && a.preventDefault(), u
                        }
                    },
                    fe = new Map,
                    ge = {
                        set(t, e, i) {
                            fe.has(t) || fe.set(t, new Map);
                            const n = fe.get(t);
                            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
                        },
                        get: (t, e) => fe.has(t) && fe.get(t).get(e) || null,
                        remove(t, e) {
                            if (!fe.has(t)) return;
                            const i = fe.get(t);
                            i.delete(e), 0 === i.size && fe.delete(t)
                        }
                    };
                class me {
                    constructor(t) {
                        (t = Ht(t)) && (this._element = t, ge.set(this._element, this.constructor.DATA_KEY, this))
                    }
                    dispose() {
                        ge.remove(this._element, this.constructor.DATA_KEY), pe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
                            this[t] = null
                        }))
                    }
                    _queueCallback(t, e, i = !0) {
                        Gt(t, e, i)
                    }
                    static getInstance(t) {
                        return ge.get(Ht(t), this.DATA_KEY)
                    }
                    static getOrCreateInstance(t, e = {}) {
                        return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
                    }
                    static get VERSION() {
                        return "5.1.3"
                    }
                    static get NAME() {
                        throw new Error('You have to implement the static method "NAME", for each component!')
                    }
                    static get DATA_KEY() {
                        return `bs.${this.NAME}`
                    }
                    static get EVENT_KEY() {
                        return `.${this.DATA_KEY}`
                    }
                }
                const ve = (t, e = "hide") => {
                    const i = `click.dismiss${t.EVENT_KEY}`,
                        n = t.NAME;
                    pe.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
                        if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Wt(this)) return;
                        const s = zt(this) || this.closest(`.${n}`);
                        t.getOrCreateInstance(s)[e]()
                    }))
                };
                class ye extends me {
                    static get NAME() {
                        return "alert"
                    }
                    close() {
                        if (pe.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                        this._element.classList.remove("show");
                        const t = this._element.classList.contains("fade");
                        this._queueCallback((() => this._destroyElement()), this._element, t)
                    }
                    _destroyElement() {
                        this._element.remove(), pe.trigger(this._element, "closed.bs.alert"), this.dispose()
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = ye.getOrCreateInstance(this);
                            if ("string" == typeof t) {
                                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                e[t](this)
                            }
                        }))
                    }
                }
                ve(ye, "close"), Qt(ye);
                const _e = '[data-bs-toggle="button"]';
                class be extends me {
                    static get NAME() {
                        return "button"
                    }
                    toggle() {
                        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = be.getOrCreateInstance(this);
                            "toggle" === t && e[t]()
                        }))
                    }
                }

                function we(t) {
                    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
                }

                function xe(t) {
                    return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
                }
                pe.on(document, "click.bs.button.data-api", _e, (t => {
                    t.preventDefault();
                    const e = t.target.closest(_e);
                    be.getOrCreateInstance(e).toggle()
                })), Qt(be);
                const Ee = {
                        setDataAttribute(t, e, i) {
                            t.setAttribute(`data-bs-${xe(e)}`, i)
                        },
                        removeDataAttribute(t, e) {
                            t.removeAttribute(`data-bs-${xe(e)}`)
                        },
                        getDataAttributes(t) {
                            if (!t) return {};
                            const e = {};
                            return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => {
                                let n = i.replace(/^bs/, "");
                                n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = we(t.dataset[i])
                            })), e
                        },
                        getDataAttribute: (t, e) => we(t.getAttribute(`data-bs-${xe(e)}`)),
                        offset(t) {
                            const e = t.getBoundingClientRect();
                            return {
                                top: e.top + window.pageYOffset,
                                left: e.left + window.pageXOffset
                            }
                        },
                        position: t => ({
                            top: t.offsetTop,
                            left: t.offsetLeft
                        })
                    },
                    Ce = {
                        find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                        findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                        children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
                        parents(t, e) {
                            const i = [];
                            let n = t.parentNode;
                            for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
                            return i
                        },
                        prev(t, e) {
                            let i = t.previousElementSibling;
                            for (; i;) {
                                if (i.matches(e)) return [i];
                                i = i.previousElementSibling
                            }
                            return []
                        },
                        next(t, e) {
                            let i = t.nextElementSibling;
                            for (; i;) {
                                if (i.matches(e)) return [i];
                                i = i.nextElementSibling
                            }
                            return []
                        },
                        focusableChildren(t) {
                            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", ");
                            return this.find(e, t).filter((t => !Wt(t) && Rt(t)))
                        }
                    },
                    Te = "carousel",
                    Se = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0,
                        touch: !0
                    },
                    Ae = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean",
                        touch: "boolean"
                    },
                    De = "next",
                    Le = "prev",
                    ke = "left",
                    Oe = "right",
                    Ie = {
                        ArrowLeft: Oe,
                        ArrowRight: ke
                    },
                    Ne = "slid.bs.carousel",
                    je = "active",
                    ze = ".active.carousel-item";
                class Pe extends me {
                    constructor(t, e) {
                        super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Ce.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
                    }
                    static get Default() {
                        return Se
                    }
                    static get NAME() {
                        return Te
                    }
                    next() {
                        this._slide(De)
                    }
                    nextWhenVisible() {
                        !document.hidden && Rt(this._element) && this.next()
                    }
                    prev() {
                        this._slide(Le)
                    }
                    pause(t) {
                        t || (this._isPaused = !0), Ce.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (Pt(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }
                    cycle(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }
                    to(t) {
                        this._activeElement = Ce.findOne(ze, this._element);
                        const e = this._getItemIndex(this._activeElement);
                        if (t > this._items.length - 1 || t < 0) return;
                        if (this._isSliding) return void pe.one(this._element, Ne, (() => this.to(t)));
                        if (e === t) return this.pause(), void this.cycle();
                        const i = t > e ? De : Le;
                        this._slide(i, this._items[t])
                    }
                    _getConfig(t) {
                        return t = {
                            ...Se,
                            ...Ee.getDataAttributes(this._element),
                            ..."object" == typeof t ? t : {}
                        }, $t(Te, t, Ae), t
                    }
                    _handleSwipe() {
                        const t = Math.abs(this.touchDeltaX);
                        if (t <= 40) return;
                        const e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e && this._slide(e > 0 ? Oe : ke)
                    }
                    _addEventListeners() {
                        this._config.keyboard && pe.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (pe.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), pe.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                    }
                    _addTouchEventListeners() {
                        const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                            e = e => {
                                t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
                            },
                            i = t => {
                                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                            },
                            n = e => {
                                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval))
                            };
                        Ce.find(".carousel-item img", this._element).forEach((t => {
                            pe.on(t, "dragstart.bs.carousel", (t => t.preventDefault()))
                        })), this._pointerEvent ? (pe.on(this._element, "pointerdown.bs.carousel", (t => e(t))), pe.on(this._element, "pointerup.bs.carousel", (t => n(t))), this._element.classList.add("pointer-event")) : (pe.on(this._element, "touchstart.bs.carousel", (t => e(t))), pe.on(this._element, "touchmove.bs.carousel", (t => i(t))), pe.on(this._element, "touchend.bs.carousel", (t => n(t))))
                    }
                    _keydown(t) {
                        if (/input|textarea/i.test(t.target.tagName)) return;
                        const e = Ie[t.key];
                        e && (t.preventDefault(), this._slide(e))
                    }
                    _getItemIndex(t) {
                        return this._items = t && t.parentNode ? Ce.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
                    }
                    _getItemByOrder(t, e) {
                        const i = t === De;
                        return Kt(this._items, e, i, this._config.wrap)
                    }
                    _triggerSlideEvent(t, e) {
                        const i = this._getItemIndex(t),
                            n = this._getItemIndex(Ce.findOne(ze, this._element));
                        return pe.trigger(this._element, "slide.bs.carousel", {
                            relatedTarget: t,
                            direction: e,
                            from: n,
                            to: i
                        })
                    }
                    _setActiveIndicatorElement(t) {
                        if (this._indicatorsElement) {
                            const e = Ce.findOne(".active", this._indicatorsElement);
                            e.classList.remove(je), e.removeAttribute("aria-current");
                            const i = Ce.find("[data-bs-target]", this._indicatorsElement);
                            for (let e = 0; e < i.length; e++)
                                if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                                    i[e].classList.add(je), i[e].setAttribute("aria-current", "true");
                                    break
                                }
                        }
                    }
                    _updateInterval() {
                        const t = this._activeElement || Ce.findOne(ze, this._element);
                        if (!t) return;
                        const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                    }
                    _slide(t, e) {
                        const i = this._directionToOrder(t),
                            n = Ce.findOne(ze, this._element),
                            s = this._getItemIndex(n),
                            o = e || this._getItemByOrder(i, n),
                            r = this._getItemIndex(o),
                            a = Boolean(this._interval),
                            l = i === De,
                            c = l ? "carousel-item-start" : "carousel-item-end",
                            h = l ? "carousel-item-next" : "carousel-item-prev",
                            u = this._orderToDirection(i);
                        if (o && o.classList.contains(je)) return void(this._isSliding = !1);
                        if (this._isSliding) return;
                        if (this._triggerSlideEvent(o, u).defaultPrevented) return;
                        if (!n || !o) return;
                        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
                        const d = () => {
                            pe.trigger(this._element, Ne, {
                                relatedTarget: o,
                                direction: u,
                                from: s,
                                to: r
                            })
                        };
                        if (this._element.classList.contains("slide")) {
                            o.classList.add(h), Ft(o), n.classList.add(c), o.classList.add(c);
                            const t = () => {
                                o.classList.remove(c, h), o.classList.add(je), n.classList.remove(je, h, c), this._isSliding = !1, setTimeout(d, 0)
                            };
                            this._queueCallback(t, n, !0)
                        } else n.classList.remove(je), o.classList.add(je), this._isSliding = !1, d();
                        a && this.cycle()
                    }
                    _directionToOrder(t) {
                        return [Oe, ke].includes(t) ? Yt() ? t === ke ? Le : De : t === ke ? De : Le : t
                    }
                    _orderToDirection(t) {
                        return [De, Le].includes(t) ? Yt() ? t === Le ? ke : Oe : t === Le ? Oe : ke : t
                    }
                    static carouselInterface(t, e) {
                        const i = Pe.getOrCreateInstance(t, e);
                        let {
                            _config: n
                        } = i;
                        "object" == typeof e && (n = {
                            ...n,
                            ...e
                        });
                        const s = "string" == typeof e ? e : n.slide;
                        if ("number" == typeof e) i.to(e);
                        else if ("string" == typeof s) {
                            if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                            i[s]()
                        } else n.interval && n.ride && (i.pause(), i.cycle())
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            Pe.carouselInterface(this, t)
                        }))
                    }
                    static dataApiClickHandler(t) {
                        const e = zt(this);
                        if (!e || !e.classList.contains("carousel")) return;
                        const i = {
                                ...Ee.getDataAttributes(e),
                                ...Ee.getDataAttributes(this)
                            },
                            n = this.getAttribute("data-bs-slide-to");
                        n && (i.interval = !1), Pe.carouselInterface(e, i), n && Pe.getInstance(e).to(n), t.preventDefault()
                    }
                }
                pe.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Pe.dataApiClickHandler), pe.on(window, "load.bs.carousel.data-api", (() => {
                    const t = Ce.find('[data-bs-ride="carousel"]');
                    for (let e = 0, i = t.length; e < i; e++) Pe.carouselInterface(t[e], Pe.getInstance(t[e]))
                })), Qt(Pe);
                const Me = "collapse",
                    He = {
                        toggle: !0,
                        parent: null
                    },
                    $e = {
                        toggle: "boolean",
                        parent: "(null|element)"
                    },
                    Re = "show",
                    We = "collapse",
                    qe = "collapsing",
                    Be = "collapsed",
                    Fe = ":scope .collapse .collapse",
                    Ue = '[data-bs-toggle="collapse"]';
                class Ve extends me {
                    constructor(t, e) {
                        super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
                        const i = Ce.find(Ue);
                        for (let t = 0, e = i.length; t < e; t++) {
                            const e = i[t],
                                n = jt(e),
                                s = Ce.find(n).filter((t => t === this._element));
                            null !== n && s.length && (this._selector = n, this._triggerArray.push(e))
                        }
                        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                    }
                    static get Default() {
                        return He
                    }
                    static get NAME() {
                        return Me
                    }
                    toggle() {
                        this._isShown() ? this.hide() : this.show()
                    }
                    show() {
                        if (this._isTransitioning || this._isShown()) return;
                        let t, e = [];
                        if (this._config.parent) {
                            const t = Ce.find(Fe, this._config.parent);
                            e = Ce.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e)))
                        }
                        const i = Ce.findOne(this._selector);
                        if (e.length) {
                            const n = e.find((t => i !== t));
                            if (t = n ? Ve.getInstance(n) : null, t && t._isTransitioning) return
                        }
                        if (pe.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                        e.forEach((e => {
                            i !== e && Ve.getOrCreateInstance(e, {
                                toggle: !1
                            }).hide(), t || ge.set(e, "bs.collapse", null)
                        }));
                        const n = this._getDimension();
                        this._element.classList.remove(We), this._element.classList.add(qe), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                        const s = `scroll${n[0].toUpperCase()+n.slice(1)}`;
                        this._queueCallback((() => {
                            this._isTransitioning = !1, this._element.classList.remove(qe), this._element.classList.add(We, Re), this._element.style[n] = "", pe.trigger(this._element, "shown.bs.collapse")
                        }), this._element, !0), this._element.style[n] = `${this._element[s]}px`
                    }
                    hide() {
                        if (this._isTransitioning || !this._isShown()) return;
                        if (pe.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                        const t = this._getDimension();
                        this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, Ft(this._element), this._element.classList.add(qe), this._element.classList.remove(We, Re);
                        const e = this._triggerArray.length;
                        for (let t = 0; t < e; t++) {
                            const e = this._triggerArray[t],
                                i = zt(e);
                            i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
                        }
                        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                            this._isTransitioning = !1, this._element.classList.remove(qe), this._element.classList.add(We), pe.trigger(this._element, "hidden.bs.collapse")
                        }), this._element, !0)
                    }
                    _isShown(t = this._element) {
                        return t.classList.contains(Re)
                    }
                    _getConfig(t) {
                        return (t = {
                            ...He,
                            ...Ee.getDataAttributes(this._element),
                            ...t
                        }).toggle = Boolean(t.toggle), t.parent = Ht(t.parent), $t(Me, t, $e), t
                    }
                    _getDimension() {
                        return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                    }
                    _initializeChildren() {
                        if (!this._config.parent) return;
                        const t = Ce.find(Fe, this._config.parent);
                        Ce.find(Ue, this._config.parent).filter((e => !t.includes(e))).forEach((t => {
                            const e = zt(t);
                            e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                        }))
                    }
                    _addAriaAndCollapsedClass(t, e) {
                        t.length && t.forEach((t => {
                            e ? t.classList.remove(Be) : t.classList.add(Be), t.setAttribute("aria-expanded", e)
                        }))
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = {};
                            "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                            const i = Ve.getOrCreateInstance(this, e);
                            if ("string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                                i[t]()
                            }
                        }))
                    }
                }
                pe.on(document, "click.bs.collapse.data-api", Ue, (function(t) {
                    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
                    const e = jt(this);
                    Ce.find(e).forEach((t => {
                        Ve.getOrCreateInstance(t, {
                            toggle: !1
                        }).toggle()
                    }))
                })), Qt(Ve);
                const Ye = "dropdown",
                    Qe = "Escape",
                    Xe = "Space",
                    Ge = "ArrowUp",
                    Ke = "ArrowDown",
                    Ze = new RegExp("ArrowUp|ArrowDown|Escape"),
                    Je = "click.bs.dropdown.data-api",
                    ti = "keydown.bs.dropdown.data-api",
                    ei = "show",
                    ii = '[data-bs-toggle="dropdown"]',
                    ni = ".dropdown-menu",
                    si = Yt() ? "top-end" : "top-start",
                    oi = Yt() ? "top-start" : "top-end",
                    ri = Yt() ? "bottom-end" : "bottom-start",
                    ai = Yt() ? "bottom-start" : "bottom-end",
                    li = Yt() ? "left-start" : "right-start",
                    ci = Yt() ? "right-start" : "left-start",
                    hi = {
                        offset: [0, 2],
                        boundary: "clippingParents",
                        reference: "toggle",
                        display: "dynamic",
                        popperConfig: null,
                        autoClose: !0
                    },
                    ui = {
                        offset: "(array|string|function)",
                        boundary: "(string|element)",
                        reference: "(string|element|object)",
                        display: "string",
                        popperConfig: "(null|object|function)",
                        autoClose: "(boolean|string)"
                    };
                class di extends me {
                    constructor(t, e) {
                        super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
                    }
                    static get Default() {
                        return hi
                    }
                    static get DefaultType() {
                        return ui
                    }
                    static get NAME() {
                        return Ye
                    }
                    toggle() {
                        return this._isShown() ? this.hide() : this.show()
                    }
                    show() {
                        if (Wt(this._element) || this._isShown(this._menu)) return;
                        const t = {
                            relatedTarget: this._element
                        };
                        if (pe.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
                        const e = di.getParentFromElement(this._element);
                        this._inNavbar ? Ee.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => pe.on(t, "mouseover", Bt))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ei), this._element.classList.add(ei), pe.trigger(this._element, "shown.bs.dropdown", t)
                    }
                    hide() {
                        if (Wt(this._element) || !this._isShown(this._menu)) return;
                        const t = {
                            relatedTarget: this._element
                        };
                        this._completeHide(t)
                    }
                    dispose() {
                        this._popper && this._popper.destroy(), super.dispose()
                    }
                    update() {
                        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                    }
                    _completeHide(t) {
                        pe.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => pe.off(t, "mouseover", Bt))), this._popper && this._popper.destroy(), this._menu.classList.remove(ei), this._element.classList.remove(ei), this._element.setAttribute("aria-expanded", "false"), Ee.removeDataAttribute(this._menu, "popper"), pe.trigger(this._element, "hidden.bs.dropdown", t))
                    }
                    _getConfig(t) {
                        if (t = {
                                ...this.constructor.Default,
                                ...Ee.getDataAttributes(this._element),
                                ...t
                            }, $t(Ye, t, this.constructor.DefaultType), "object" == typeof t.reference && !Mt(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ye.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                        return t
                    }
                    _createPopper(t) {
                        if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        let e = this._element;
                        "parent" === this._config.reference ? e = t : Mt(this._config.reference) ? e = Ht(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                        const i = this._getPopperConfig(),
                            s = i.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled));
                        this._popper = kt(e, this._menu, i), s && Ee.setDataAttribute(this._menu, "popper", "static")
                    }
                    _isShown(t = this._element) {
                        return t.classList.contains(ei)
                    }
                    _getMenuElement() {
                        return Ce.next(this._element, ni)[0]
                    }
                    _getPlacement() {
                        const t = this._element.parentNode;
                        if (t.classList.contains("dropend")) return li;
                        if (t.classList.contains("dropstart")) return ci;
                        const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                        return t.classList.contains("dropup") ? e ? oi : si : e ? ai : ri
                    }
                    _detectNavbar() {
                        return null !== this._element.closest(".navbar")
                    }
                    _getOffset() {
                        const {
                            offset: t
                        } = this._config;
                        return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
                    }
                    _getPopperConfig() {
                        const t = {
                            placement: this._getPlacement(),
                            modifiers: [{
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }]
                        };
                        return "static" === this._config.display && (t.modifiers = [{
                            name: "applyStyles",
                            enabled: !1
                        }]), {
                            ...t,
                            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                        }
                    }
                    _selectMenuItem({
                        key: t,
                        target: e
                    }) {
                        const i = Ce.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(Rt);
                        i.length && Kt(i, e, t === Ke, !i.includes(e)).focus()
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = di.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                    static clearMenus(t) {
                        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
                        const e = Ce.find(ii);
                        for (let i = 0, n = e.length; i < n; i++) {
                            const n = di.getInstance(e[i]);
                            if (!n || !1 === n._config.autoClose) continue;
                            if (!n._isShown()) continue;
                            const s = {
                                relatedTarget: n._element
                            };
                            if (t) {
                                const e = t.composedPath(),
                                    i = e.includes(n._menu);
                                if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                                if (n._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                                "click" === t.type && (s.clickEvent = t)
                            }
                            n._completeHide(s)
                        }
                    }
                    static getParentFromElement(t) {
                        return zt(t) || t.parentNode
                    }
                    static dataApiKeydownHandler(t) {
                        if (/input|textarea/i.test(t.target.tagName) ? t.key === Xe || t.key !== Qe && (t.key !== Ke && t.key !== Ge || t.target.closest(ni)) : !Ze.test(t.key)) return;
                        const e = this.classList.contains(ei);
                        if (!e && t.key === Qe) return;
                        if (t.preventDefault(), t.stopPropagation(), Wt(this)) return;
                        const i = this.matches(ii) ? this : Ce.prev(this, ii)[0],
                            n = di.getOrCreateInstance(i);
                        if (t.key !== Qe) return t.key === Ge || t.key === Ke ? (e || n.show(), void n._selectMenuItem(t)) : void(e && t.key !== Xe || di.clearMenus());
                        n.hide()
                    }
                }
                pe.on(document, ti, ii, di.dataApiKeydownHandler), pe.on(document, ti, ni, di.dataApiKeydownHandler), pe.on(document, Je, di.clearMenus), pe.on(document, "keyup.bs.dropdown.data-api", di.clearMenus), pe.on(document, Je, ii, (function(t) {
                    t.preventDefault(), di.getOrCreateInstance(this).toggle()
                })), Qt(di);
                const pi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    fi = ".sticky-top";
                class gi {
                    constructor() {
                        this._element = document.body
                    }
                    getWidth() {
                        const t = document.documentElement.clientWidth;
                        return Math.abs(window.innerWidth - t)
                    }
                    hide() {
                        const t = this.getWidth();
                        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes(pi, "paddingRight", (e => e + t)), this._setElementAttributes(fi, "marginRight", (e => e - t))
                    }
                    _disableOverFlow() {
                        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                    }
                    _setElementAttributes(t, e, i) {
                        const n = this.getWidth();
                        this._applyManipulationCallback(t, (t => {
                            if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                            this._saveInitialAttribute(t, e);
                            const s = window.getComputedStyle(t)[e];
                            t.style[e] = `${i(Number.parseFloat(s))}px`
                        }))
                    }
                    reset() {
                        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(pi, "paddingRight"), this._resetElementAttributes(fi, "marginRight")
                    }
                    _saveInitialAttribute(t, e) {
                        const i = t.style[e];
                        i && Ee.setDataAttribute(t, e, i)
                    }
                    _resetElementAttributes(t, e) {
                        this._applyManipulationCallback(t, (t => {
                            const i = Ee.getDataAttribute(t, e);
                            void 0 === i ? t.style.removeProperty(e) : (Ee.removeDataAttribute(t, e), t.style[e] = i)
                        }))
                    }
                    _applyManipulationCallback(t, e) {
                        Mt(t) ? e(t) : Ce.find(t, this._element).forEach(e)
                    }
                    isOverflowing() {
                        return this.getWidth() > 0
                    }
                }
                const mi = {
                        className: "modal-backdrop",
                        isVisible: !0,
                        isAnimated: !1,
                        rootElement: "body",
                        clickCallback: null
                    },
                    vi = {
                        className: "string",
                        isVisible: "boolean",
                        isAnimated: "boolean",
                        rootElement: "(element|string)",
                        clickCallback: "(function|null)"
                    },
                    yi = "show",
                    _i = "mousedown.bs.backdrop";
                class bi {
                    constructor(t) {
                        this._config = this._getConfig(t), this._isAppended = !1, this._element = null
                    }
                    show(t) {
                        this._config.isVisible ? (this._append(), this._config.isAnimated && Ft(this._getElement()), this._getElement().classList.add(yi), this._emulateAnimation((() => {
                            Xt(t)
                        }))) : Xt(t)
                    }
                    hide(t) {
                        this._config.isVisible ? (this._getElement().classList.remove(yi), this._emulateAnimation((() => {
                            this.dispose(), Xt(t)
                        }))) : Xt(t)
                    }
                    _getElement() {
                        if (!this._element) {
                            const t = document.createElement("div");
                            t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
                        }
                        return this._element
                    }
                    _getConfig(t) {
                        return (t = {
                            ...mi,
                            ..."object" == typeof t ? t : {}
                        }).rootElement = Ht(t.rootElement), $t("backdrop", t, vi), t
                    }
                    _append() {
                        this._isAppended || (this._config.rootElement.append(this._getElement()), pe.on(this._getElement(), _i, (() => {
                            Xt(this._config.clickCallback)
                        })), this._isAppended = !0)
                    }
                    dispose() {
                        this._isAppended && (pe.off(this._element, _i), this._element.remove(), this._isAppended = !1)
                    }
                    _emulateAnimation(t) {
                        Gt(t, this._getElement(), this._config.isAnimated)
                    }
                }
                const wi = {
                        trapElement: null,
                        autofocus: !0
                    },
                    xi = {
                        trapElement: "element",
                        autofocus: "boolean"
                    },
                    Ei = ".bs.focustrap",
                    Ci = "backward";
                class Ti {
                    constructor(t) {
                        this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
                    }
                    activate() {
                        const {
                            trapElement: t,
                            autofocus: e
                        } = this._config;
                        this._isActive || (e && t.focus(), pe.off(document, Ei), pe.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), pe.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
                    }
                    deactivate() {
                        this._isActive && (this._isActive = !1, pe.off(document, Ei))
                    }
                    _handleFocusin(t) {
                        const {
                            target: e
                        } = t, {
                            trapElement: i
                        } = this._config;
                        if (e === document || e === i || i.contains(e)) return;
                        const n = Ce.focusableChildren(i);
                        0 === n.length ? i.focus() : this._lastTabNavDirection === Ci ? n[n.length - 1].focus() : n[0].focus()
                    }
                    _handleKeydown(t) {
                        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ci : "forward")
                    }
                    _getConfig(t) {
                        return t = {
                            ...wi,
                            ..."object" == typeof t ? t : {}
                        }, $t("focustrap", t, xi), t
                    }
                }
                const Si = "modal",
                    Ai = "Escape",
                    Di = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0
                    },
                    Li = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean"
                    },
                    ki = "hidden.bs.modal",
                    Oi = "show.bs.modal",
                    Ii = "resize.bs.modal",
                    Ni = "click.dismiss.bs.modal",
                    ji = "keydown.dismiss.bs.modal",
                    zi = "mousedown.dismiss.bs.modal",
                    Pi = "modal-open",
                    Mi = "show",
                    Hi = "modal-static";
                class $i extends me {
                    constructor(t, e) {
                        super(t), this._config = this._getConfig(e), this._dialog = Ce.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new gi
                    }
                    static get Default() {
                        return Di
                    }
                    static get NAME() {
                        return Si
                    }
                    toggle(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }
                    show(t) {
                        this._isShown || this._isTransitioning || pe.trigger(this._element, Oi, {
                            relatedTarget: t
                        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), pe.on(this._dialog, zi, (() => {
                            pe.one(this._element, "mouseup.dismiss.bs.modal", (t => {
                                t.target === this._element && (this._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((() => this._showElement(t))))
                    }
                    hide() {
                        if (!this._isShown || this._isTransitioning) return;
                        if (pe.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                        this._isShown = !1;
                        const t = this._isAnimated();
                        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(Mi), pe.off(this._element, Ni), pe.off(this._dialog, zi), this._queueCallback((() => this._hideModal()), this._element, t)
                    }
                    dispose() {
                        [window, this._dialog].forEach((t => pe.off(t, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                    }
                    handleUpdate() {
                        this._adjustDialog()
                    }
                    _initializeBackDrop() {
                        return new bi({
                            isVisible: Boolean(this._config.backdrop),
                            isAnimated: this._isAnimated()
                        })
                    }
                    _initializeFocusTrap() {
                        return new Ti({
                            trapElement: this._element
                        })
                    }
                    _getConfig(t) {
                        return t = {
                            ...Di,
                            ...Ee.getDataAttributes(this._element),
                            ..."object" == typeof t ? t : {}
                        }, $t(Si, t, Li), t
                    }
                    _showElement(t) {
                        const e = this._isAnimated(),
                            i = Ce.findOne(".modal-body", this._dialog);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && Ft(this._element), this._element.classList.add(Mi), this._queueCallback((() => {
                            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, pe.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: t
                            })
                        }), this._dialog, e)
                    }
                    _setEscapeEvent() {
                        this._isShown ? pe.on(this._element, ji, (t => {
                            this._config.keyboard && t.key === Ai ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Ai || this._triggerBackdropTransition()
                        })) : pe.off(this._element, ji)
                    }
                    _setResizeEvent() {
                        this._isShown ? pe.on(window, Ii, (() => this._adjustDialog())) : pe.off(window, Ii)
                    }
                    _hideModal() {
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                            document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), pe.trigger(this._element, ki)
                        }))
                    }
                    _showBackdrop(t) {
                        pe.on(this._element, Ni, (t => {
                            this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                        })), this._backdrop.show(t)
                    }
                    _isAnimated() {
                        return this._element.classList.contains("fade")
                    }
                    _triggerBackdropTransition() {
                        if (pe.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                        const {
                            classList: t,
                            scrollHeight: e,
                            style: i
                        } = this._element, n = e > document.documentElement.clientHeight;
                        !n && "hidden" === i.overflowY || t.contains(Hi) || (n || (i.overflowY = "hidden"), t.add(Hi), this._queueCallback((() => {
                            t.remove(Hi), n || this._queueCallback((() => {
                                i.overflowY = ""
                            }), this._dialog)
                        }), this._dialog), this._element.focus())
                    }
                    _adjustDialog() {
                        const t = this._element.scrollHeight > document.documentElement.clientHeight,
                            e = this._scrollBar.getWidth(),
                            i = e > 0;
                        (!i && t && !Yt() || i && !t && Yt()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !Yt() || !i && t && Yt()) && (this._element.style.paddingRight = `${e}px`)
                    }
                    _resetAdjustments() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }
                    static jQueryInterface(t, e) {
                        return this.each((function() {
                            const i = $i.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                                i[t](e)
                            }
                        }))
                    }
                }
                pe.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
                    const e = zt(this);
                    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), pe.one(e, Oi, (t => {
                        t.defaultPrevented || pe.one(e, ki, (() => {
                            Rt(this) && this.focus()
                        }))
                    }));
                    const i = Ce.findOne(".modal.show");
                    i && $i.getInstance(i).hide(), $i.getOrCreateInstance(e).toggle(this)
                })), ve($i), Qt($i);
                const Ri = "offcanvas",
                    Wi = {
                        backdrop: !0,
                        keyboard: !0,
                        scroll: !1
                    },
                    qi = {
                        backdrop: "boolean",
                        keyboard: "boolean",
                        scroll: "boolean"
                    },
                    Bi = "show",
                    Fi = ".offcanvas.show",
                    Ui = "hidden.bs.offcanvas";
                class Vi extends me {
                    constructor(t, e) {
                        super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
                    }
                    static get NAME() {
                        return Ri
                    }
                    static get Default() {
                        return Wi
                    }
                    toggle(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }
                    show(t) {
                        this._isShown || pe.trigger(this._element, "show.bs.offcanvas", {
                            relatedTarget: t
                        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new gi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Bi), this._queueCallback((() => {
                            this._config.scroll || this._focustrap.activate(), pe.trigger(this._element, "shown.bs.offcanvas", {
                                relatedTarget: t
                            })
                        }), this._element, !0))
                    }
                    hide() {
                        this._isShown && (pe.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Bi), this._backdrop.hide(), this._queueCallback((() => {
                            this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new gi).reset(), pe.trigger(this._element, Ui)
                        }), this._element, !0)))
                    }
                    dispose() {
                        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                    }
                    _getConfig(t) {
                        return t = {
                            ...Wi,
                            ...Ee.getDataAttributes(this._element),
                            ..."object" == typeof t ? t : {}
                        }, $t(Ri, t, qi), t
                    }
                    _initializeBackDrop() {
                        return new bi({
                            className: "offcanvas-backdrop",
                            isVisible: this._config.backdrop,
                            isAnimated: !0,
                            rootElement: this._element.parentNode,
                            clickCallback: () => this.hide()
                        })
                    }
                    _initializeFocusTrap() {
                        return new Ti({
                            trapElement: this._element
                        })
                    }
                    _addEventListeners() {
                        pe.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                            this._config.keyboard && "Escape" === t.key && this.hide()
                        }))
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = Vi.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                e[t](this)
                            }
                        }))
                    }
                }
                pe.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
                    const e = zt(this);
                    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Wt(this)) return;
                    pe.one(e, Ui, (() => {
                        Rt(this) && this.focus()
                    }));
                    const i = Ce.findOne(Fi);
                    i && i !== e && Vi.getInstance(i).hide(), Vi.getOrCreateInstance(e).toggle(this)
                })), pe.on(window, "load.bs.offcanvas.data-api", (() => Ce.find(Fi).forEach((t => Vi.getOrCreateInstance(t).show())))), ve(Vi), Qt(Vi);
                const Yi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                    Qi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                    Xi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                    Gi = (t, e) => {
                        const i = t.nodeName.toLowerCase();
                        if (e.includes(i)) return !Yi.has(i) || Boolean(Qi.test(t.nodeValue) || Xi.test(t.nodeValue));
                        const n = e.filter((t => t instanceof RegExp));
                        for (let t = 0, e = n.length; t < e; t++)
                            if (n[t].test(i)) return !0;
                        return !1
                    };

                function Ki(t, e, i) {
                    if (!t.length) return t;
                    if (i && "function" == typeof i) return i(t);
                    const n = (new window.DOMParser).parseFromString(t, "text/html"),
                        s = [].concat(...n.body.querySelectorAll("*"));
                    for (let t = 0, i = s.length; t < i; t++) {
                        const i = s[t],
                            n = i.nodeName.toLowerCase();
                        if (!Object.keys(e).includes(n)) {
                            i.remove();
                            continue
                        }
                        const o = [].concat(...i.attributes),
                            r = [].concat(e["*"] || [], e[n] || []);
                        o.forEach((t => {
                            Gi(t, r) || i.removeAttribute(t.nodeName)
                        }))
                    }
                    return n.body.innerHTML
                }
                const Zi = "tooltip",
                    Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
                    tn = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(array|string|function)",
                        container: "(string|element|boolean)",
                        fallbackPlacements: "array",
                        boundary: "(string|element)",
                        customClass: "(string|function)",
                        sanitize: "boolean",
                        sanitizeFn: "(null|function)",
                        allowList: "object",
                        popperConfig: "(null|object|function)"
                    },
                    en = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: Yt() ? "left" : "right",
                        BOTTOM: "bottom",
                        LEFT: Yt() ? "right" : "left"
                    },
                    nn = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: [0, 0],
                        container: !1,
                        fallbackPlacements: ["top", "right", "bottom", "left"],
                        boundary: "clippingParents",
                        customClass: "",
                        sanitize: !0,
                        sanitizeFn: null,
                        allowList: {
                            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: ["src", "srcset", "alt", "title", "width", "height"],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: []
                        },
                        popperConfig: null
                    },
                    sn = {
                        HIDE: "hide.bs.tooltip",
                        HIDDEN: "hidden.bs.tooltip",
                        SHOW: "show.bs.tooltip",
                        SHOWN: "shown.bs.tooltip",
                        INSERTED: "inserted.bs.tooltip",
                        CLICK: "click.bs.tooltip",
                        FOCUSIN: "focusin.bs.tooltip",
                        FOCUSOUT: "focusout.bs.tooltip",
                        MOUSEENTER: "mouseenter.bs.tooltip",
                        MOUSELEAVE: "mouseleave.bs.tooltip"
                    },
                    on = "fade",
                    rn = "show",
                    an = "show",
                    ln = "out",
                    cn = ".tooltip-inner",
                    hn = ".modal",
                    un = "hide.bs.modal",
                    dn = "hover",
                    pn = "focus";
                class fn extends me {
                    constructor(t, e) {
                        if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                        super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    static get Default() {
                        return nn
                    }
                    static get NAME() {
                        return Zi
                    }
                    static get Event() {
                        return sn
                    }
                    static get DefaultType() {
                        return tn
                    }
                    enable() {
                        this._isEnabled = !0
                    }
                    disable() {
                        this._isEnabled = !1
                    }
                    toggleEnabled() {
                        this._isEnabled = !this._isEnabled
                    }
                    toggle(t) {
                        if (this._isEnabled)
                            if (t) {
                                const e = this._initializeOnDelegatedTarget(t);
                                e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                            } else {
                                if (this.getTipElement().classList.contains(rn)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }
                    dispose() {
                        clearTimeout(this._timeout), pe.off(this._element.closest(hn), un, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
                    }
                    show() {
                        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                        if (!this.isWithContent() || !this._isEnabled) return;
                        const t = pe.trigger(this._element, this.constructor.Event.SHOW),
                            e = qt(this._element),
                            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
                        if (t.defaultPrevented || !i) return;
                        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(cn).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                        const n = this.getTipElement(),
                            s = (t => {
                                do {
                                    t += Math.floor(1e6 * Math.random())
                                } while (document.getElementById(t));
                                return t
                            })(this.constructor.NAME);
                        n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(on);
                        const o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
                            r = this._getAttachment(o);
                        this._addAttachmentClass(r);
                        const {
                            container: a
                        } = this._config;
                        ge.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), pe.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = kt(this._element, n, this._getPopperConfig(r)), n.classList.add(rn);
                        const l = this._resolvePossibleFunction(this._config.customClass);
                        l && n.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => {
                            pe.on(t, "mouseover", Bt)
                        }));
                        const c = this.tip.classList.contains(on);
                        this._queueCallback((() => {
                            const t = this._hoverState;
                            this._hoverState = null, pe.trigger(this._element, this.constructor.Event.SHOWN), t === ln && this._leave(null, this)
                        }), this.tip, c)
                    }
                    hide() {
                        if (!this._popper) return;
                        const t = this.getTipElement();
                        if (pe.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                        t.classList.remove(rn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => pe.off(t, "mouseover", Bt))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                        const e = this.tip.classList.contains(on);
                        this._queueCallback((() => {
                            this._isWithActiveTrigger() || (this._hoverState !== an && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), pe.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
                        }), this.tip, e), this._hoverState = ""
                    }
                    update() {
                        null !== this._popper && this._popper.update()
                    }
                    isWithContent() {
                        return Boolean(this.getTitle())
                    }
                    getTipElement() {
                        if (this.tip) return this.tip;
                        const t = document.createElement("div");
                        t.innerHTML = this._config.template;
                        const e = t.children[0];
                        return this.setContent(e), e.classList.remove(on, rn), this.tip = e, this.tip
                    }
                    setContent(t) {
                        this._sanitizeAndSetContent(t, this.getTitle(), cn)
                    }
                    _sanitizeAndSetContent(t, e, i) {
                        const n = Ce.findOne(i, t);
                        e || !n ? this.setElementContent(n, e) : n.remove()
                    }
                    setElementContent(t, e) {
                        if (null !== t) return Mt(e) ? (e = Ht(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Ki(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
                    }
                    getTitle() {
                        const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
                        return this._resolvePossibleFunction(t)
                    }
                    updateAttachment(t) {
                        return "right" === t ? "end" : "left" === t ? "start" : t
                    }
                    _initializeOnDelegatedTarget(t, e) {
                        return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
                    }
                    _getOffset() {
                        const {
                            offset: t
                        } = this._config;
                        return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
                    }
                    _resolvePossibleFunction(t) {
                        return "function" == typeof t ? t.call(this._element) : t
                    }
                    _getPopperConfig(t) {
                        const e = {
                            placement: t,
                            modifiers: [{
                                name: "flip",
                                options: {
                                    fallbackPlacements: this._config.fallbackPlacements
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: `.${this.constructor.NAME}-arrow`
                                }
                            }, {
                                name: "onChange",
                                enabled: !0,
                                phase: "afterWrite",
                                fn: t => this._handlePopperPlacementChange(t)
                            }],
                            onFirstUpdate: t => {
                                t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                            }
                        };
                        return {
                            ...e,
                            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                        }
                    }
                    _addAttachmentClass(t) {
                        this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
                    }
                    _getAttachment(t) {
                        return en[t.toUpperCase()]
                    }
                    _setListeners() {
                        this._config.trigger.split(" ").forEach((t => {
                            if ("click" === t) pe.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                            else if ("manual" !== t) {
                                const e = t === dn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                    i = t === dn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                                pe.on(this._element, e, this._config.selector, (t => this._enter(t))), pe.on(this._element, i, this._config.selector, (t => this._leave(t)))
                            }
                        })), this._hideModalHandler = () => {
                            this._element && this.hide()
                        }, pe.on(this._element.closest(hn), un, this._hideModalHandler), this._config.selector ? this._config = {
                            ...this._config,
                            trigger: "manual",
                            selector: ""
                        } : this._fixTitle()
                    }
                    _fixTitle() {
                        const t = this._element.getAttribute("title"),
                            e = typeof this._element.getAttribute("data-bs-original-title");
                        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
                    }
                    _enter(t, e) {
                        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? pn : dn] = !0), e.getTipElement().classList.contains(rn) || e._hoverState === an ? e._hoverState = an : (clearTimeout(e._timeout), e._hoverState = an, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => {
                            e._hoverState === an && e.show()
                        }), e._config.delay.show) : e.show())
                    }
                    _leave(t, e) {
                        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? pn : dn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = ln, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => {
                            e._hoverState === ln && e.hide()
                        }), e._config.delay.hide) : e.hide())
                    }
                    _isWithActiveTrigger() {
                        for (const t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }
                    _getConfig(t) {
                        const e = Ee.getDataAttributes(this._element);
                        return Object.keys(e).forEach((t => {
                            Ji.has(t) && delete e[t]
                        })), (t = {
                            ...this.constructor.Default,
                            ...e,
                            ..."object" == typeof t && t ? t : {}
                        }).container = !1 === t.container ? document.body : Ht(t.container), "number" == typeof t.delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), $t(Zi, t, this.constructor.DefaultType), t.sanitize && (t.template = Ki(t.template, t.allowList, t.sanitizeFn)), t
                    }
                    _getDelegateConfig() {
                        const t = {};
                        for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
                        return t
                    }
                    _cleanTipClass() {
                        const t = this.getTipElement(),
                            e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                            i = t.getAttribute("class").match(e);
                        null !== i && i.length > 0 && i.map((t => t.trim())).forEach((e => t.classList.remove(e)))
                    }
                    _getBasicClassPrefix() {
                        return "bs-tooltip"
                    }
                    _handlePopperPlacementChange(t) {
                        const {
                            state: e
                        } = t;
                        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
                    }
                    _disposePopper() {
                        this._popper && (this._popper.destroy(), this._popper = null)
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = fn.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                Qt(fn);
                const gn = {
                        ...fn.Default,
                        placement: "right",
                        offset: [0, 8],
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    },
                    mn = {
                        ...fn.DefaultType,
                        content: "(string|element|function)"
                    },
                    vn = {
                        HIDE: "hide.bs.popover",
                        HIDDEN: "hidden.bs.popover",
                        SHOW: "show.bs.popover",
                        SHOWN: "shown.bs.popover",
                        INSERTED: "inserted.bs.popover",
                        CLICK: "click.bs.popover",
                        FOCUSIN: "focusin.bs.popover",
                        FOCUSOUT: "focusout.bs.popover",
                        MOUSEENTER: "mouseenter.bs.popover",
                        MOUSELEAVE: "mouseleave.bs.popover"
                    };
                class yn extends fn {
                    static get Default() {
                        return gn
                    }
                    static get NAME() {
                        return "popover"
                    }
                    static get Event() {
                        return vn
                    }
                    static get DefaultType() {
                        return mn
                    }
                    isWithContent() {
                        return this.getTitle() || this._getContent()
                    }
                    setContent(t) {
                        this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
                    }
                    _getContent() {
                        return this._resolvePossibleFunction(this._config.content)
                    }
                    _getBasicClassPrefix() {
                        return "bs-popover"
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = yn.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                Qt(yn);
                const _n = "scrollspy",
                    bn = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    wn = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    xn = "active",
                    En = ".nav-link, .list-group-item, .dropdown-item",
                    Cn = "position";
                class Tn extends me {
                    constructor(t, e) {
                        super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, pe.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
                    }
                    static get Default() {
                        return bn
                    }
                    static get NAME() {
                        return _n
                    }
                    refresh() {
                        const t = this._scrollElement === this._scrollElement.window ? "offset" : Cn,
                            e = "auto" === this._config.method ? t : this._config.method,
                            i = e === Cn ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ce.find(En, this._config.target).map((t => {
                            const n = jt(t),
                                s = n ? Ce.findOne(n) : null;
                            if (s) {
                                const t = s.getBoundingClientRect();
                                if (t.width || t.height) return [Ee[e](s).top + i, n]
                            }
                            return null
                        })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => {
                            this._offsets.push(t[0]), this._targets.push(t[1])
                        }))
                    }
                    dispose() {
                        pe.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
                    }
                    _getConfig(t) {
                        return (t = {
                            ...bn,
                            ...Ee.getDataAttributes(this._element),
                            ..."object" == typeof t && t ? t : {}
                        }).target = Ht(t.target) || document.documentElement, $t(_n, t, wn), t
                    }
                    _getScrollTop() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }
                    _getScrollHeight() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                    _getOffsetHeight() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }
                    _process() {
                        const t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            i = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= i) {
                            const t = this._targets[this._targets.length - 1];
                            this._activeTarget !== t && this._activate(t)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                        }
                    }
                    _activate(t) {
                        this._activeTarget = t, this._clear();
                        const e = En.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),
                            i = Ce.findOne(e.join(","), this._config.target);
                        i.classList.add(xn), i.classList.contains("dropdown-item") ? Ce.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(xn) : Ce.parents(i, ".nav, .list-group").forEach((t => {
                            Ce.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(xn))), Ce.prev(t, ".nav-item").forEach((t => {
                                Ce.children(t, ".nav-link").forEach((t => t.classList.add(xn)))
                            }))
                        })), pe.trigger(this._scrollElement, "activate.bs.scrollspy", {
                            relatedTarget: t
                        })
                    }
                    _clear() {
                        Ce.find(En, this._config.target).filter((t => t.classList.contains(xn))).forEach((t => t.classList.remove(xn)))
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = Tn.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                pe.on(window, "load.bs.scrollspy.data-api", (() => {
                    Ce.find('[data-bs-spy="scroll"]').forEach((t => new Tn(t)))
                })), Qt(Tn);
                const Sn = "active",
                    An = "fade",
                    Dn = "show",
                    Ln = ".active",
                    kn = ":scope > li > .active";
                class On extends me {
                    static get NAME() {
                        return "tab"
                    }
                    show() {
                        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Sn)) return;
                        let t;
                        const e = zt(this._element),
                            i = this._element.closest(".nav, .list-group");
                        if (i) {
                            const e = "UL" === i.nodeName || "OL" === i.nodeName ? kn : Ln;
                            t = Ce.find(e, i), t = t[t.length - 1]
                        }
                        const n = t ? pe.trigger(t, "hide.bs.tab", {
                            relatedTarget: this._element
                        }) : null;
                        if (pe.trigger(this._element, "show.bs.tab", {
                                relatedTarget: t
                            }).defaultPrevented || null !== n && n.defaultPrevented) return;
                        this._activate(this._element, i);
                        const s = () => {
                            pe.trigger(t, "hidden.bs.tab", {
                                relatedTarget: this._element
                            }), pe.trigger(this._element, "shown.bs.tab", {
                                relatedTarget: t
                            })
                        };
                        e ? this._activate(e, e.parentNode, s) : s()
                    }
                    _activate(t, e, i) {
                        const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Ce.children(e, Ln) : Ce.find(kn, e))[0],
                            s = i && n && n.classList.contains(An),
                            o = () => this._transitionComplete(t, n, i);
                        n && s ? (n.classList.remove(Dn), this._queueCallback(o, t, !0)) : o()
                    }
                    _transitionComplete(t, e, i) {
                        if (e) {
                            e.classList.remove(Sn);
                            const t = Ce.findOne(":scope > .dropdown-menu .active", e.parentNode);
                            t && t.classList.remove(Sn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                        }
                        t.classList.add(Sn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Ft(t), t.classList.contains(An) && t.classList.add(Dn);
                        let n = t.parentNode;
                        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                            const e = t.closest(".dropdown");
                            e && Ce.find(".dropdown-toggle", e).forEach((t => t.classList.add(Sn))), t.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = On.getOrCreateInstance(this);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }
                pe.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
                    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), Wt(this) || On.getOrCreateInstance(this).show()
                })), Qt(On);
                const In = "toast",
                    Nn = "hide",
                    jn = "show",
                    zn = "showing",
                    Pn = {
                        animation: "boolean",
                        autohide: "boolean",
                        delay: "number"
                    },
                    Mn = {
                        animation: !0,
                        autohide: !0,
                        delay: 5e3
                    };
                class Hn extends me {
                    constructor(t, e) {
                        super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
                    }
                    static get DefaultType() {
                        return Pn
                    }
                    static get Default() {
                        return Mn
                    }
                    static get NAME() {
                        return In
                    }
                    show() {
                        pe.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Nn), Ft(this._element), this._element.classList.add(jn), this._element.classList.add(zn), this._queueCallback((() => {
                            this._element.classList.remove(zn), pe.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
                        }), this._element, this._config.animation))
                    }
                    hide() {
                        this._element.classList.contains(jn) && (pe.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(zn), this._queueCallback((() => {
                            this._element.classList.add(Nn), this._element.classList.remove(zn), this._element.classList.remove(jn), pe.trigger(this._element, "hidden.bs.toast")
                        }), this._element, this._config.animation)))
                    }
                    dispose() {
                        this._clearTimeout(), this._element.classList.contains(jn) && this._element.classList.remove(jn), super.dispose()
                    }
                    _getConfig(t) {
                        return t = {
                            ...Mn,
                            ...Ee.getDataAttributes(this._element),
                            ..."object" == typeof t && t ? t : {}
                        }, $t(In, t, this.constructor.DefaultType), t
                    }
                    _maybeScheduleHide() {
                        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                            this.hide()
                        }), this._config.delay)))
                    }
                    _onInteraction(t, e) {
                        switch (t.type) {
                            case "mouseover":
                            case "mouseout":
                                this._hasMouseInteraction = e;
                                break;
                            case "focusin":
                            case "focusout":
                                this._hasKeyboardInteraction = e
                        }
                        if (e) return void this._clearTimeout();
                        const i = t.relatedTarget;
                        this._element === i || this._element.contains(i) || this._maybeScheduleHide()
                    }
                    _setListeners() {
                        pe.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), pe.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), pe.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), pe.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
                    }
                    _clearTimeout() {
                        clearTimeout(this._timeout), this._timeout = null
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            const e = Hn.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t](this)
                            }
                        }))
                    }
                }
                ve(Hn), Qt(Hn)
            },
            878: (t, e, i) => {
                var n = i(755),
                    s = i(672);
                void 0 === s.$ && (s.$ = n), void 0 === s.jQuery && (s.jQuery = n), t.exports = n
            },
            672: (t, e, i) => {
                "use strict";
                t.exports = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    var t;
                    try {
                        t = this || new Function("return this")()
                    } catch (t) {
                        if ("object" == typeof window) return window;
                        if ("object" == typeof self) return self;
                        if (void 0 !== i.g) return i.g
                    }
                    return t
                }()
            },
            755: function(t, e) {
                var i;
                ! function(e, i) {
                    "use strict";
                    "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
                        if (!t.document) throw new Error("jQuery requires a window with a document");
                        return i(t)
                    } : i(e)
                }("undefined" != typeof window ? window : this, (function(n, s) {
                    "use strict";
                    var o = [],
                        r = Object.getPrototypeOf,
                        a = o.slice,
                        l = o.flat ? function(t) {
                            return o.flat.call(t)
                        } : function(t) {
                            return o.concat.apply([], t)
                        },
                        c = o.push,
                        h = o.indexOf,
                        u = {},
                        d = u.toString,
                        p = u.hasOwnProperty,
                        f = p.toString,
                        g = f.call(Object),
                        m = {},
                        v = function(t) {
                            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
                        },
                        y = function(t) {
                            return null != t && t === t.window
                        },
                        _ = n.document,
                        b = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function w(t, e, i) {
                        var n, s, o = (i = i || _).createElement("script");
                        if (o.text = t, e)
                            for (n in b)(s = e[n] || e.getAttribute && e.getAttribute(n)) && o.setAttribute(n, s);
                        i.head.appendChild(o).parentNode.removeChild(o)
                    }

                    function x(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[d.call(t)] || "object" : typeof t
                    }
                    var E = "3.6.0",
                        C = function(t, e) {
                            return new C.fn.init(t, e)
                        };

                    function T(t) {
                        var e = !!t && "length" in t && t.length,
                            i = x(t);
                        return !v(t) && !y(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                    }
                    C.fn = C.prototype = {
                        jquery: E,
                        constructor: C,
                        length: 0,
                        toArray: function() {
                            return a.call(this)
                        },
                        get: function(t) {
                            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
                        },
                        pushStack: function(t) {
                            var e = C.merge(this.constructor(), t);
                            return e.prevObject = this, e
                        },
                        each: function(t) {
                            return C.each(this, t)
                        },
                        map: function(t) {
                            return this.pushStack(C.map(this, (function(e, i) {
                                return t.call(e, i, e)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(a.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        even: function() {
                            return this.pushStack(C.grep(this, (function(t, e) {
                                return (e + 1) % 2
                            })))
                        },
                        odd: function() {
                            return this.pushStack(C.grep(this, (function(t, e) {
                                return e % 2
                            })))
                        },
                        eq: function(t) {
                            var e = this.length,
                                i = +t + (t < 0 ? e : 0);
                            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: c,
                        sort: o.sort,
                        splice: o.splice
                    }, C.extend = C.fn.extend = function() {
                        var t, e, i, n, s, o, r = arguments[0] || {},
                            a = 1,
                            l = arguments.length,
                            c = !1;
                        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || v(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                            if (null != (t = arguments[a]))
                                for (e in t) n = t[e], "__proto__" !== e && r !== n && (c && n && (C.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[e], o = s && !Array.isArray(i) ? [] : s || C.isPlainObject(i) ? i : {}, s = !1, r[e] = C.extend(c, o, n)) : void 0 !== n && (r[e] = n));
                        return r
                    }, C.extend({
                        expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(t) {
                            throw new Error(t)
                        },
                        noop: function() {},
                        isPlainObject: function(t) {
                            var e, i;
                            return !(!t || "[object Object]" !== d.call(t) || (e = r(t)) && ("function" != typeof(i = p.call(e, "constructor") && e.constructor) || f.call(i) !== g))
                        },
                        isEmptyObject: function(t) {
                            var e;
                            for (e in t) return !1;
                            return !0
                        },
                        globalEval: function(t, e, i) {
                            w(t, {
                                nonce: e && e.nonce
                            }, i)
                        },
                        each: function(t, e) {
                            var i, n = 0;
                            if (T(t))
                                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                            else
                                for (n in t)
                                    if (!1 === e.call(t[n], n, t[n])) break;
                            return t
                        },
                        makeArray: function(t, e) {
                            var i = e || [];
                            return null != t && (T(Object(t)) ? C.merge(i, "string" == typeof t ? [t] : t) : c.call(i, t)), i
                        },
                        inArray: function(t, e, i) {
                            return null == e ? -1 : h.call(e, t, i)
                        },
                        merge: function(t, e) {
                            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
                            return t.length = s, t
                        },
                        grep: function(t, e, i) {
                            for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
                            return n
                        },
                        map: function(t, e, i) {
                            var n, s, o = 0,
                                r = [];
                            if (T(t))
                                for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && r.push(s);
                            else
                                for (o in t) null != (s = e(t[o], o, i)) && r.push(s);
                            return l(r)
                        },
                        guid: 1,
                        support: m
                    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                        u["[object " + e + "]"] = e.toLowerCase()
                    }));
                    var S = function(t) {
                        var e, i, n, s, o, r, a, l, c, h, u, d, p, f, g, m, v, y, _, b = "sizzle" + 1 * new Date,
                            w = t.document,
                            x = 0,
                            E = 0,
                            C = lt(),
                            T = lt(),
                            S = lt(),
                            A = lt(),
                            D = function(t, e) {
                                return t === e && (u = !0), 0
                            },
                            L = {}.hasOwnProperty,
                            k = [],
                            O = k.pop,
                            I = k.push,
                            N = k.push,
                            j = k.slice,
                            z = function(t, e) {
                                for (var i = 0, n = t.length; i < n; i++)
                                    if (t[i] === e) return i;
                                return -1
                            },
                            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            M = "[\\x20\\t\\r\\n\\f]",
                            H = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            $ = "\\[[\\x20\\t\\r\\n\\f]*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
                            R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                            W = new RegExp(M + "+", "g"),
                            q = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            F = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            U = new RegExp(M + "|>"),
                            V = new RegExp(R),
                            Y = new RegExp("^" + H + "$"),
                            Q = {
                                ID: new RegExp("^#(" + H + ")"),
                                CLASS: new RegExp("^\\.(" + H + ")"),
                                TAG: new RegExp("^(" + H + "|[*])"),
                                ATTR: new RegExp("^" + $),
                                PSEUDO: new RegExp("^" + R),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                bool: new RegExp("^(?:" + P + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                            },
                            X = /HTML$/i,
                            G = /^(?:input|select|textarea|button)$/i,
                            K = /^h\d$/i,
                            Z = /^[^{]+\{\s*\[native \w/,
                            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            tt = /[+~]/,
                            et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            it = function(t, e) {
                                var i = "0x" + t.slice(1) - 65536;
                                return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                            },
                            nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            st = function(t, e) {
                                return e ? "\0" === t ? "???" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                            },
                            ot = function() {
                                d()
                            },
                            rt = bt((function(t) {
                                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            N.apply(k = j.call(w.childNodes), w.childNodes), k[w.childNodes.length].nodeType
                        } catch (t) {
                            N = {
                                apply: k.length ? function(t, e) {
                                    I.apply(t, j.call(e))
                                } : function(t, e) {
                                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                                    t.length = i - 1
                                }
                            }
                        }

                        function at(t, e, n, s) {
                            var o, a, c, h, u, f, v, y = e && e.ownerDocument,
                                w = e ? e.nodeType : 9;
                            if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
                            if (!s && (d(e), e = e || p, g)) {
                                if (11 !== w && (u = J.exec(t)))
                                    if (o = u[1]) {
                                        if (9 === w) {
                                            if (!(c = e.getElementById(o))) return n;
                                            if (c.id === o) return n.push(c), n
                                        } else if (y && (c = y.getElementById(o)) && _(e, c) && c.id === o) return n.push(c), n
                                    } else {
                                        if (u[2]) return N.apply(n, e.getElementsByTagName(t)), n;
                                        if ((o = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return N.apply(n, e.getElementsByClassName(o)), n
                                    } if (i.qsa && !A[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                                    if (v = t, y = e, 1 === w && (U.test(t) || F.test(t))) {
                                        for ((y = tt.test(t) && vt(e.parentNode) || e) === e && i.scope || ((h = e.getAttribute("id")) ? h = h.replace(nt, st) : e.setAttribute("id", h = b)), a = (f = r(t)).length; a--;) f[a] = (h ? "#" + h : ":scope") + " " + _t(f[a]);
                                        v = f.join(",")
                                    }
                                    try {
                                        return N.apply(n, y.querySelectorAll(v)), n
                                    } catch (e) {
                                        A(t, !0)
                                    } finally {
                                        h === b && e.removeAttribute("id")
                                    }
                                }
                            }
                            return l(t.replace(q, "$1"), e, n, s)
                        }

                        function lt() {
                            var t = [];
                            return function e(i, s) {
                                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
                            }
                        }

                        function ct(t) {
                            return t[b] = !0, t
                        }

                        function ht(t) {
                            var e = p.createElement("fieldset");
                            try {
                                return !!t(e)
                            } catch (t) {
                                return !1
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e), e = null
                            }
                        }

                        function ut(t, e) {
                            for (var i = t.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = e
                        }

                        function dt(t, e) {
                            var i = e && t,
                                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                            if (n) return n;
                            if (i)
                                for (; i = i.nextSibling;)
                                    if (i === e) return -1;
                            return t ? 1 : -1
                        }

                        function pt(t) {
                            return function(e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t
                            }
                        }

                        function ft(t) {
                            return function(e) {
                                var i = e.nodeName.toLowerCase();
                                return ("input" === i || "button" === i) && e.type === t
                            }
                        }

                        function gt(t) {
                            return function(e) {
                                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                            }
                        }

                        function mt(t) {
                            return ct((function(e) {
                                return e = +e, ct((function(i, n) {
                                    for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                                }))
                            }))
                        }

                        function vt(t) {
                            return t && void 0 !== t.getElementsByTagName && t
                        }
                        for (e in i = at.support = {}, o = at.isXML = function(t) {
                                var e = t && t.namespaceURI,
                                    i = t && (t.ownerDocument || t).documentElement;
                                return !X.test(e || i && i.nodeName || "HTML")
                            }, d = at.setDocument = function(t) {
                                var e, s, r = t ? t.ownerDocument || t : w;
                                return r != p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, g = !o(p), w != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ot, !1) : s.attachEvent && s.attachEvent("onunload", ot)), i.scope = ht((function(t) {
                                    return f.appendChild(t).appendChild(p.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                                })), i.attributes = ht((function(t) {
                                    return t.className = "i", !t.getAttribute("className")
                                })), i.getElementsByTagName = ht((function(t) {
                                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                                })), i.getElementsByClassName = Z.test(p.getElementsByClassName), i.getById = ht((function(t) {
                                    return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                                })), i.getById ? (n.filter.ID = function(t) {
                                    var e = t.replace(et, it);
                                    return function(t) {
                                        return t.getAttribute("id") === e
                                    }
                                }, n.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var i = e.getElementById(t);
                                        return i ? [i] : []
                                    }
                                }) : (n.filter.ID = function(t) {
                                    var e = t.replace(et, it);
                                    return function(t) {
                                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                        return i && i.value === e
                                    }
                                }, n.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var i, n, s, o = e.getElementById(t);
                                        if (o) {
                                            if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                                            for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                                        }
                                        return []
                                    }
                                }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                                } : function(t, e) {
                                    var i, n = [],
                                        s = 0,
                                        o = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                                        return n
                                    }
                                    return o
                                }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                                }, v = [], m = [], (i.qsa = Z.test(p.querySelectorAll)) && (ht((function(t) {
                                    var e;
                                    f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (e = p.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                                })), ht((function(t) {
                                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var e = p.createElement("input");
                                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                                }))), (i.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ht((function(t) {
                                    i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", R)
                                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(f.compareDocumentPosition), _ = e || Z.test(f.contains) ? function(t, e) {
                                    var i = 9 === t.nodeType ? t.documentElement : t,
                                        n = e && e.parentNode;
                                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                                } : function(t, e) {
                                    if (e)
                                        for (; e = e.parentNode;)
                                            if (e === t) return !0;
                                    return !1
                                }, D = e ? function(t, e) {
                                    if (t === e) return u = !0, 0;
                                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t == p || t.ownerDocument == w && _(w, t) ? -1 : e == p || e.ownerDocument == w && _(w, e) ? 1 : h ? z(h, t) - z(h, e) : 0 : 4 & n ? -1 : 1)
                                } : function(t, e) {
                                    if (t === e) return u = !0, 0;
                                    var i, n = 0,
                                        s = t.parentNode,
                                        o = e.parentNode,
                                        r = [t],
                                        a = [e];
                                    if (!s || !o) return t == p ? -1 : e == p ? 1 : s ? -1 : o ? 1 : h ? z(h, t) - z(h, e) : 0;
                                    if (s === o) return dt(t, e);
                                    for (i = t; i = i.parentNode;) r.unshift(i);
                                    for (i = e; i = i.parentNode;) a.unshift(i);
                                    for (; r[n] === a[n];) n++;
                                    return n ? dt(r[n], a[n]) : r[n] == w ? -1 : a[n] == w ? 1 : 0
                                }, p) : p
                            }, at.matches = function(t, e) {
                                return at(t, null, null, e)
                            }, at.matchesSelector = function(t, e) {
                                if (d(t), i.matchesSelector && g && !A[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                                    var n = y.call(t, e);
                                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                                } catch (t) {
                                    A(e, !0)
                                }
                                return at(e, p, null, [t]).length > 0
                            }, at.contains = function(t, e) {
                                return (t.ownerDocument || t) != p && d(t), _(t, e)
                            }, at.attr = function(t, e) {
                                (t.ownerDocument || t) != p && d(t);
                                var s = n.attrHandle[e.toLowerCase()],
                                    o = s && L.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
                                return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                            }, at.escape = function(t) {
                                return (t + "").replace(nt, st)
                            }, at.error = function(t) {
                                throw new Error("Syntax error, unrecognized expression: " + t)
                            }, at.uniqueSort = function(t) {
                                var e, n = [],
                                    s = 0,
                                    o = 0;
                                if (u = !i.detectDuplicates, h = !i.sortStable && t.slice(0), t.sort(D), u) {
                                    for (; e = t[o++];) e === t[o] && (s = n.push(o));
                                    for (; s--;) t.splice(n[s], 1)
                                }
                                return h = null, t
                            }, s = at.getText = function(t) {
                                var e, i = "",
                                    n = 0,
                                    o = t.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof t.textContent) return t.textContent;
                                        for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                                    } else if (3 === o || 4 === o) return t.nodeValue
                                } else
                                    for (; e = t[n++];) i += s(e);
                                return i
                            }, n = at.selectors = {
                                cacheLength: 50,
                                createPseudo: ct,
                                match: Q,
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
                                    ATTR: function(t) {
                                        return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                    },
                                    CHILD: function(t) {
                                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                                    },
                                    PSEUDO: function(t) {
                                        var e, i = !t[6] && t[2];
                                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && V.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(t) {
                                        var e = t.replace(et, it).toLowerCase();
                                        return "*" === t ? function() {
                                            return !0
                                        } : function(t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        }
                                    },
                                    CLASS: function(t) {
                                        var e = C[t + " "];
                                        return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + M + "|$)")) && C(t, (function(t) {
                                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(t, e, i) {
                                        return function(n) {
                                            var s = at.attr(n, t);
                                            return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                                        }
                                    },
                                    CHILD: function(t, e, i, n, s) {
                                        var o = "nth" !== t.slice(0, 3),
                                            r = "last" !== t.slice(-4),
                                            a = "of-type" === e;
                                        return 1 === n && 0 === s ? function(t) {
                                            return !!t.parentNode
                                        } : function(e, i, l) {
                                            var c, h, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                                                m = e.parentNode,
                                                v = a && e.nodeName.toLowerCase(),
                                                y = !l && !a,
                                                _ = !1;
                                            if (m) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (d = e; d = d[g];)
                                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                        f = g = "only" === t && !f && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                                    for (_ = (p = (c = (h = (u = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (_ = p = 0) || f.pop();)
                                                        if (1 === d.nodeType && ++_ && d === e) {
                                                            h[t] = [x, p, _];
                                                            break
                                                        }
                                                } else if (y && (_ = p = (c = (h = (u = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === _)
                                                    for (;
                                                        (d = ++p && d && d[g] || (_ = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && ((h = (u = d[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [x, _]), d !== e)););
                                                return (_ -= s) === n || _ % n == 0 && _ / n >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(t, e) {
                                        var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                        return s[b] ? s(e) : s.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, i) {
                                            for (var n, o = s(t, e), r = o.length; r--;) t[n = z(t, o[r])] = !(i[n] = o[r])
                                        })) : function(t) {
                                            return s(t, 0, i)
                                        }) : s
                                    }
                                },
                                pseudos: {
                                    not: ct((function(t) {
                                        var e = [],
                                            i = [],
                                            n = a(t.replace(q, "$1"));
                                        return n[b] ? ct((function(t, e, i, s) {
                                            for (var o, r = n(t, null, s, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                                        })) : function(t, s, o) {
                                            return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                                        }
                                    })),
                                    has: ct((function(t) {
                                        return function(e) {
                                            return at(t, e).length > 0
                                        }
                                    })),
                                    contains: ct((function(t) {
                                        return t = t.replace(et, it),
                                            function(e) {
                                                return (e.textContent || s(e)).indexOf(t) > -1
                                            }
                                    })),
                                    lang: ct((function(t) {
                                        return Y.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                            function(e) {
                                                var i;
                                                do {
                                                    if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(e) {
                                        var i = t.location && t.location.hash;
                                        return i && i.slice(1) === e.id
                                    },
                                    root: function(t) {
                                        return t === f
                                    },
                                    focus: function(t) {
                                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                    },
                                    enabled: gt(!1),
                                    disabled: gt(!0),
                                    checked: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                                    },
                                    selected: function(t) {
                                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                    },
                                    empty: function(t) {
                                        for (t = t.firstChild; t; t = t.nextSibling)
                                            if (t.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(t) {
                                        return !n.pseudos.empty(t)
                                    },
                                    header: function(t) {
                                        return K.test(t.nodeName)
                                    },
                                    input: function(t) {
                                        return G.test(t.nodeName)
                                    },
                                    button: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && "button" === t.type || "button" === e
                                    },
                                    text: function(t) {
                                        var e;
                                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                    },
                                    first: mt((function() {
                                        return [0]
                                    })),
                                    last: mt((function(t, e) {
                                        return [e - 1]
                                    })),
                                    eq: mt((function(t, e, i) {
                                        return [i < 0 ? i + e : i]
                                    })),
                                    even: mt((function(t, e) {
                                        for (var i = 0; i < e; i += 2) t.push(i);
                                        return t
                                    })),
                                    odd: mt((function(t, e) {
                                        for (var i = 1; i < e; i += 2) t.push(i);
                                        return t
                                    })),
                                    lt: mt((function(t, e, i) {
                                        for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0;) t.push(n);
                                        return t
                                    })),
                                    gt: mt((function(t, e, i) {
                                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                                        return t
                                    }))
                                }
                            }, n.pseudos.nth = n.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) n.pseudos[e] = pt(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) n.pseudos[e] = ft(e);

                        function yt() {}

                        function _t(t) {
                            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                            return n
                        }

                        function bt(t, e, i) {
                            var n = e.dir,
                                s = e.next,
                                o = s || n,
                                r = i && "parentNode" === o,
                                a = E++;
                            return e.first ? function(e, i, s) {
                                for (; e = e[n];)
                                    if (1 === e.nodeType || r) return t(e, i, s);
                                return !1
                            } : function(e, i, l) {
                                var c, h, u, d = [x, a];
                                if (l) {
                                    for (; e = e[n];)
                                        if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                                } else
                                    for (; e = e[n];)
                                        if (1 === e.nodeType || r)
                                            if (h = (u = e[b] || (e[b] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e;
                                            else {
                                                if ((c = h[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                                                if (h[o] = d, d[2] = t(e, i, l)) return !0
                                            } return !1
                            }
                        }

                        function wt(t) {
                            return t.length > 1 ? function(e, i, n) {
                                for (var s = t.length; s--;)
                                    if (!t[s](e, i, n)) return !1;
                                return !0
                            } : t[0]
                        }

                        function xt(t, e, i, n, s) {
                            for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), c && e.push(a)));
                            return r
                        }

                        function Et(t, e, i, n, s, o) {
                            return n && !n[b] && (n = Et(n)), s && !s[b] && (s = Et(s, o)), ct((function(o, r, a, l) {
                                var c, h, u, d = [],
                                    p = [],
                                    f = r.length,
                                    g = o || function(t, e, i) {
                                        for (var n = 0, s = e.length; n < s; n++) at(t, e[n], i);
                                        return i
                                    }(e || "*", a.nodeType ? [a] : a, []),
                                    m = !t || !o && e ? g : xt(g, d, t, a, l),
                                    v = i ? s || (o ? t : f || n) ? [] : r : m;
                                if (i && i(m, v, a, l), n)
                                    for (c = xt(v, p), n(c, [], a, l), h = c.length; h--;)(u = c[h]) && (v[p[h]] = !(m[p[h]] = u));
                                if (o) {
                                    if (s || t) {
                                        if (s) {
                                            for (c = [], h = v.length; h--;)(u = v[h]) && c.push(m[h] = u);
                                            s(null, v = [], c, l)
                                        }
                                        for (h = v.length; h--;)(u = v[h]) && (c = s ? z(o, u) : d[h]) > -1 && (o[c] = !(r[c] = u))
                                    }
                                } else v = xt(v === r ? v.splice(f, v.length) : v), s ? s(null, r, v, l) : N.apply(r, v)
                            }))
                        }

                        function Ct(t) {
                            for (var e, i, s, o = t.length, r = n.relative[t[0].type], a = r || n.relative[" "], l = r ? 1 : 0, h = bt((function(t) {
                                    return t === e
                                }), a, !0), u = bt((function(t) {
                                    return z(e, t) > -1
                                }), a, !0), d = [function(t, i, n) {
                                    var s = !r && (n || i !== c) || ((e = i).nodeType ? h(t, i, n) : u(t, i, n));
                                    return e = null, s
                                }]; l < o; l++)
                                if (i = n.relative[t[l].type]) d = [bt(wt(d), i)];
                                else {
                                    if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                                        for (s = ++l; s < o && !n.relative[t[s].type]; s++);
                                        return Et(l > 1 && wt(d), l > 1 && _t(t.slice(0, l - 1).concat({
                                            value: " " === t[l - 2].type ? "*" : ""
                                        })).replace(q, "$1"), i, l < s && Ct(t.slice(l, s)), s < o && Ct(t = t.slice(s)), s < o && _t(t))
                                    }
                                    d.push(i)
                                } return wt(d)
                        }
                        return yt.prototype = n.filters = n.pseudos, n.setFilters = new yt, r = at.tokenize = function(t, e) {
                            var i, s, o, r, a, l, c, h = T[t + " "];
                            if (h) return e ? 0 : h.slice(0);
                            for (a = t, l = [], c = n.preFilter; a;) {
                                for (r in i && !(s = B.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = F.exec(a)) && (i = s.shift(), o.push({
                                        value: i,
                                        type: s[0].replace(q, " ")
                                    }), a = a.slice(i.length)), n.filter) !(s = Q[r].exec(a)) || c[r] && !(s = c[r](s)) || (i = s.shift(), o.push({
                                    value: i,
                                    type: r,
                                    matches: s
                                }), a = a.slice(i.length));
                                if (!i) break
                            }
                            return e ? a.length : a ? at.error(t) : T(t, l).slice(0)
                        }, a = at.compile = function(t, e) {
                            var i, s = [],
                                o = [],
                                a = S[t + " "];
                            if (!a) {
                                for (e || (e = r(t)), i = e.length; i--;)(a = Ct(e[i]))[b] ? s.push(a) : o.push(a);
                                a = S(t, function(t, e) {
                                    var i = e.length > 0,
                                        s = t.length > 0,
                                        o = function(o, r, a, l, h) {
                                            var u, f, m, v = 0,
                                                y = "0",
                                                _ = o && [],
                                                b = [],
                                                w = c,
                                                E = o || s && n.find.TAG("*", h),
                                                C = x += null == w ? 1 : Math.random() || .1,
                                                T = E.length;
                                            for (h && (c = r == p || r || h); y !== T && null != (u = E[y]); y++) {
                                                if (s && u) {
                                                    for (f = 0, r || u.ownerDocument == p || (d(u), a = !g); m = t[f++];)
                                                        if (m(u, r || p, a)) {
                                                            l.push(u);
                                                            break
                                                        } h && (x = C)
                                                }
                                                i && ((u = !m && u) && v--, o && _.push(u))
                                            }
                                            if (v += y, i && y !== v) {
                                                for (f = 0; m = e[f++];) m(_, b, r, a);
                                                if (o) {
                                                    if (v > 0)
                                                        for (; y--;) _[y] || b[y] || (b[y] = O.call(l));
                                                    b = xt(b)
                                                }
                                                N.apply(l, b), h && !o && b.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                            }
                                            return h && (x = C, c = w), _
                                        };
                                    return i ? ct(o) : o
                                }(o, s)), a.selector = t
                            }
                            return a
                        }, l = at.select = function(t, e, i, s) {
                            var o, l, c, h, u, d = "function" == typeof t && t,
                                p = !s && r(t = d.selector || t);
                            if (i = i || [], 1 === p.length) {
                                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                                    if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0])) return i;
                                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                                }
                                for (o = Q.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !n.relative[h = c.type]);)
                                    if ((u = n.find[h]) && (s = u(c.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                                        if (l.splice(o, 1), !(t = s.length && _t(l))) return N.apply(i, s), i;
                                        break
                                    }
                            }
                            return (d || a(t, p))(s, e, !g, i, !e || tt.test(t) && vt(e.parentNode) || e), i
                        }, i.sortStable = b.split("").sort(D).join("") === b, i.detectDuplicates = !!u, d(), i.sortDetached = ht((function(t) {
                            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
                        })), ht((function(t) {
                            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                        })) || ut("type|href|height|width", (function(t, e, i) {
                            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                        })), i.attributes && ht((function(t) {
                            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                        })) || ut("value", (function(t, e, i) {
                            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                        })), ht((function(t) {
                            return null == t.getAttribute("disabled")
                        })) || ut(P, (function(t, e, i) {
                            var n;
                            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                        })), at
                    }(n);
                    C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
                    var A = function(t, e, i) {
                            for (var n = [], s = void 0 !== i;
                                (t = t[e]) && 9 !== t.nodeType;)
                                if (1 === t.nodeType) {
                                    if (s && C(t).is(i)) break;
                                    n.push(t)
                                } return n
                        },
                        D = function(t, e) {
                            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                            return i
                        },
                        L = C.expr.match.needsContext;

                    function k(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    }
                    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function I(t, e, i) {
                        return v(e) ? C.grep(t, (function(t, n) {
                            return !!e.call(t, n, t) !== i
                        })) : e.nodeType ? C.grep(t, (function(t) {
                            return t === e !== i
                        })) : "string" != typeof e ? C.grep(t, (function(t) {
                            return h.call(e, t) > -1 !== i
                        })) : C.filter(e, t, i)
                    }
                    C.filter = function(t, e, i) {
                        var n = e[0];
                        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, (function(t) {
                            return 1 === t.nodeType
                        })))
                    }, C.fn.extend({
                        find: function(t) {
                            var e, i, n = this.length,
                                s = this;
                            if ("string" != typeof t) return this.pushStack(C(t).filter((function() {
                                for (e = 0; e < n; e++)
                                    if (C.contains(s[e], this)) return !0
                            })));
                            for (i = this.pushStack([]), e = 0; e < n; e++) C.find(t, s[e], i);
                            return n > 1 ? C.uniqueSort(i) : i
                        },
                        filter: function(t) {
                            return this.pushStack(I(this, t || [], !1))
                        },
                        not: function(t) {
                            return this.pushStack(I(this, t || [], !0))
                        },
                        is: function(t) {
                            return !!I(this, "string" == typeof t && L.test(t) ? C(t) : t || [], !1).length
                        }
                    });
                    var N, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (C.fn.init = function(t, e, i) {
                        var n, s;
                        if (!t) return this;
                        if (i = i || N, "string" == typeof t) {
                            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : j.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                            if (n[1]) {
                                if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : _, !0)), O.test(n[1]) && C.isPlainObject(e))
                                    for (n in e) v(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                                return this
                            }
                            return (s = _.getElementById(n[2])) && (this[0] = s, this.length = 1), this
                        }
                        return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== i.ready ? i.ready(t) : t(C) : C.makeArray(t, this)
                    }).prototype = C.fn, N = C(_);
                    var z = /^(?:parents|prev(?:Until|All))/,
                        P = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function M(t, e) {
                        for (;
                            (t = t[e]) && 1 !== t.nodeType;);
                        return t
                    }
                    C.fn.extend({
                        has: function(t) {
                            var e = C(t, this),
                                i = e.length;
                            return this.filter((function() {
                                for (var t = 0; t < i; t++)
                                    if (C.contains(this, e[t])) return !0
                            }))
                        },
                        closest: function(t, e) {
                            var i, n = 0,
                                s = this.length,
                                o = [],
                                r = "string" != typeof t && C(t);
                            if (!L.test(t))
                                for (; n < s; n++)
                                    for (i = this[n]; i && i !== e; i = i.parentNode)
                                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
                                            o.push(i);
                                            break
                                        } return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                        },
                        index: function(t) {
                            return t ? "string" == typeof t ? h.call(C(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(t, e) {
                            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
                        },
                        addBack: function(t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }
                    }), C.each({
                        parent: function(t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null
                        },
                        parents: function(t) {
                            return A(t, "parentNode")
                        },
                        parentsUntil: function(t, e, i) {
                            return A(t, "parentNode", i)
                        },
                        next: function(t) {
                            return M(t, "nextSibling")
                        },
                        prev: function(t) {
                            return M(t, "previousSibling")
                        },
                        nextAll: function(t) {
                            return A(t, "nextSibling")
                        },
                        prevAll: function(t) {
                            return A(t, "previousSibling")
                        },
                        nextUntil: function(t, e, i) {
                            return A(t, "nextSibling", i)
                        },
                        prevUntil: function(t, e, i) {
                            return A(t, "previousSibling", i)
                        },
                        siblings: function(t) {
                            return D((t.parentNode || {}).firstChild, t)
                        },
                        children: function(t) {
                            return D(t.firstChild)
                        },
                        contents: function(t) {
                            return null != t.contentDocument && r(t.contentDocument) ? t.contentDocument : (k(t, "template") && (t = t.content || t), C.merge([], t.childNodes))
                        }
                    }, (function(t, e) {
                        C.fn[t] = function(i, n) {
                            var s = C.map(this, e, i);
                            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = C.filter(n, s)), this.length > 1 && (P[t] || C.uniqueSort(s), z.test(t) && s.reverse()), this.pushStack(s)
                        }
                    }));
                    var H = /[^\x20\t\r\n\f]+/g;

                    function $(t) {
                        return t
                    }

                    function R(t) {
                        throw t
                    }

                    function W(t, e, i, n) {
                        var s;
                        try {
                            t && v(s = t.promise) ? s.call(t).done(e).fail(i) : t && v(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
                        } catch (t) {
                            i.apply(void 0, [t])
                        }
                    }
                    C.Callbacks = function(t) {
                        t = "string" == typeof t ? function(t) {
                            var e = {};
                            return C.each(t.match(H) || [], (function(t, i) {
                                e[i] = !0
                            })), e
                        }(t) : C.extend({}, t);
                        var e, i, n, s, o = [],
                            r = [],
                            a = -1,
                            l = function() {
                                for (s = s || t.once, n = e = !0; r.length; a = -1)
                                    for (i = r.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
                                t.memory || (i = !1), e = !1, s && (o = i ? [] : "")
                            },
                            c = {
                                add: function() {
                                    return o && (i && !e && (a = o.length - 1, r.push(i)), function e(i) {
                                        C.each(i, (function(i, n) {
                                            v(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== x(n) && e(n)
                                        }))
                                    }(arguments), i && !e && l()), this
                                },
                                remove: function() {
                                    return C.each(arguments, (function(t, e) {
                                        for (var i;
                                            (i = C.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= a && a--
                                    })), this
                                },
                                has: function(t) {
                                    return t ? C.inArray(t, o) > -1 : o.length > 0
                                },
                                empty: function() {
                                    return o && (o = []), this
                                },
                                disable: function() {
                                    return s = r = [], o = i = "", this
                                },
                                disabled: function() {
                                    return !o
                                },
                                lock: function() {
                                    return s = r = [], i || e || (o = i = ""), this
                                },
                                locked: function() {
                                    return !!s
                                },
                                fireWith: function(t, i) {
                                    return s || (i = [t, (i = i || []).slice ? i.slice() : i], r.push(i), e || l()), this
                                },
                                fire: function() {
                                    return c.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!n
                                }
                            };
                        return c
                    }, C.extend({
                        Deferred: function(t) {
                            var e = [
                                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                                ],
                                i = "pending",
                                s = {
                                    state: function() {
                                        return i
                                    },
                                    always: function() {
                                        return o.done(arguments).fail(arguments), this
                                    },
                                    catch: function(t) {
                                        return s.then(null, t)
                                    },
                                    pipe: function() {
                                        var t = arguments;
                                        return C.Deferred((function(i) {
                                            C.each(e, (function(e, n) {
                                                var s = v(t[n[4]]) && t[n[4]];
                                                o[n[1]]((function() {
                                                    var t = s && s.apply(this, arguments);
                                                    t && v(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [t] : arguments)
                                                }))
                                            })), t = null
                                        })).promise()
                                    },
                                    then: function(t, i, s) {
                                        var o = 0;

                                        function r(t, e, i, s) {
                                            return function() {
                                                var a = this,
                                                    l = arguments,
                                                    c = function() {
                                                        var n, c;
                                                        if (!(t < o)) {
                                                            if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? s ? c.call(n, r(o, e, $, s), r(o, e, R, s)) : (o++, c.call(n, r(o, e, $, s), r(o, e, R, s), r(o, e, $, e.notifyWith))) : (i !== $ && (a = void 0, l = [n]), (s || e.resolveWith)(a, l))
                                                        }
                                                    },
                                                    h = s ? c : function() {
                                                        try {
                                                            c()
                                                        } catch (n) {
                                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, h.stackTrace), t + 1 >= o && (i !== R && (a = void 0, l = [n]), e.rejectWith(a, l))
                                                        }
                                                    };
                                                t ? h() : (C.Deferred.getStackHook && (h.stackTrace = C.Deferred.getStackHook()), n.setTimeout(h))
                                            }
                                        }
                                        return C.Deferred((function(n) {
                                            e[0][3].add(r(0, n, v(s) ? s : $, n.notifyWith)), e[1][3].add(r(0, n, v(t) ? t : $)), e[2][3].add(r(0, n, v(i) ? i : R))
                                        })).promise()
                                    },
                                    promise: function(t) {
                                        return null != t ? C.extend(t, s) : s
                                    }
                                },
                                o = {};
                            return C.each(e, (function(t, n) {
                                var r = n[2],
                                    a = n[5];
                                s[n[1]] = r.add, a && r.add((function() {
                                    i = a
                                }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), r.add(n[3].fire), o[n[0]] = function() {
                                    return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                                }, o[n[0] + "With"] = r.fireWith
                            })), s.promise(o), t && t.call(o, o), o
                        },
                        when: function(t) {
                            var e = arguments.length,
                                i = e,
                                n = Array(i),
                                s = a.call(arguments),
                                o = C.Deferred(),
                                r = function(t) {
                                    return function(i) {
                                        n[t] = this, s[t] = arguments.length > 1 ? a.call(arguments) : i, --e || o.resolveWith(n, s)
                                    }
                                };
                            if (e <= 1 && (W(t, o.done(r(i)).resolve, o.reject, !e), "pending" === o.state() || v(s[i] && s[i].then))) return o.then();
                            for (; i--;) W(s[i], r(i), o.reject);
                            return o.promise()
                        }
                    });
                    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    C.Deferred.exceptionHook = function(t, e) {
                        n.console && n.console.warn && t && q.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
                    }, C.readyException = function(t) {
                        n.setTimeout((function() {
                            throw t
                        }))
                    };
                    var B = C.Deferred();

                    function F() {
                        _.removeEventListener("DOMContentLoaded", F), n.removeEventListener("load", F), C.ready()
                    }
                    C.fn.ready = function(t) {
                        return B.then(t).catch((function(t) {
                            C.readyException(t)
                        })), this
                    }, C.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(t) {
                            (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== t && --C.readyWait > 0 || B.resolveWith(_, [C]))
                        }
                    }), C.ready.then = B.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? n.setTimeout(C.ready) : (_.addEventListener("DOMContentLoaded", F), n.addEventListener("load", F));
                    var U = function(t, e, i, n, s, o, r) {
                            var a = 0,
                                l = t.length,
                                c = null == i;
                            if ("object" === x(i))
                                for (a in s = !0, i) U(t, e, a, i[a], !0, o, r);
                            else if (void 0 !== n && (s = !0, v(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                                    return c.call(C(t), i)
                                })), e))
                                for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
                        },
                        V = /^-ms-/,
                        Y = /-([a-z])/g;

                    function Q(t, e) {
                        return e.toUpperCase()
                    }

                    function X(t) {
                        return t.replace(V, "ms-").replace(Y, Q)
                    }
                    var G = function(t) {
                        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                    };

                    function K() {
                        this.expando = C.expando + K.uid++
                    }
                    K.uid = 1, K.prototype = {
                        cache: function(t) {
                            var e = t[this.expando];
                            return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                                value: e,
                                configurable: !0
                            }))), e
                        },
                        set: function(t, e, i) {
                            var n, s = this.cache(t);
                            if ("string" == typeof e) s[X(e)] = i;
                            else
                                for (n in e) s[X(n)] = e[n];
                            return s
                        },
                        get: function(t, e) {
                            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
                        },
                        access: function(t, e, i) {
                            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
                        },
                        remove: function(t, e) {
                            var i, n = t[this.expando];
                            if (void 0 !== n) {
                                if (void 0 !== e) {
                                    i = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in n ? [e] : e.match(H) || []).length;
                                    for (; i--;) delete n[e[i]]
                                }(void 0 === e || C.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                            }
                        },
                        hasData: function(t) {
                            var e = t[this.expando];
                            return void 0 !== e && !C.isEmptyObject(e)
                        }
                    };
                    var Z = new K,
                        J = new K,
                        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        et = /[A-Z]/g;

                    function it(t, e, i) {
                        var n;
                        if (void 0 === i && 1 === t.nodeType)
                            if (n = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                                try {
                                    i = function(t) {
                                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                                    }(i)
                                } catch (t) {}
                                J.set(t, e, i)
                            } else i = void 0;
                        return i
                    }
                    C.extend({
                        hasData: function(t) {
                            return J.hasData(t) || Z.hasData(t)
                        },
                        data: function(t, e, i) {
                            return J.access(t, e, i)
                        },
                        removeData: function(t, e) {
                            J.remove(t, e)
                        },
                        _data: function(t, e, i) {
                            return Z.access(t, e, i)
                        },
                        _removeData: function(t, e) {
                            Z.remove(t, e)
                        }
                    }), C.fn.extend({
                        data: function(t, e) {
                            var i, n, s, o = this[0],
                                r = o && o.attributes;
                            if (void 0 === t) {
                                if (this.length && (s = J.get(o), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                                    for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = X(n.slice(5)), it(o, n, s[n]));
                                    Z.set(o, "hasDataAttrs", !0)
                                }
                                return s
                            }
                            return "object" == typeof t ? this.each((function() {
                                J.set(this, t)
                            })) : U(this, (function(e) {
                                var i;
                                if (o && void 0 === e) return void 0 !== (i = J.get(o, t)) || void 0 !== (i = it(o, t)) ? i : void 0;
                                this.each((function() {
                                    J.set(this, t, e)
                                }))
                            }), null, e, arguments.length > 1, null, !0)
                        },
                        removeData: function(t) {
                            return this.each((function() {
                                J.remove(this, t)
                            }))
                        }
                    }), C.extend({
                        queue: function(t, e, i) {
                            var n;
                            if (t) return e = (e || "fx") + "queue", n = Z.get(t, e), i && (!n || Array.isArray(i) ? n = Z.access(t, e, C.makeArray(i)) : n.push(i)), n || []
                        },
                        dequeue: function(t, e) {
                            e = e || "fx";
                            var i = C.queue(t, e),
                                n = i.length,
                                s = i.shift(),
                                o = C._queueHooks(t, e);
                            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, (function() {
                                C.dequeue(t, e)
                            }), o)), !n && o && o.empty.fire()
                        },
                        _queueHooks: function(t, e) {
                            var i = e + "queueHooks";
                            return Z.get(t, i) || Z.access(t, i, {
                                empty: C.Callbacks("once memory").add((function() {
                                    Z.remove(t, [e + "queue", i])
                                }))
                            })
                        }
                    }), C.fn.extend({
                        queue: function(t, e) {
                            var i = 2;
                            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? C.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                                var i = C.queue(this, t, e);
                                C._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && C.dequeue(this, t)
                            }))
                        },
                        dequeue: function(t) {
                            return this.each((function() {
                                C.dequeue(this, t)
                            }))
                        },
                        clearQueue: function(t) {
                            return this.queue(t || "fx", [])
                        },
                        promise: function(t, e) {
                            var i, n = 1,
                                s = C.Deferred(),
                                o = this,
                                r = this.length,
                                a = function() {
                                    --n || s.resolveWith(o, [o])
                                };
                            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = Z.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                            return a(), s.promise(e)
                        }
                    });
                    var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        st = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
                        ot = ["Top", "Right", "Bottom", "Left"],
                        rt = _.documentElement,
                        at = function(t) {
                            return C.contains(t.ownerDocument, t)
                        },
                        lt = {
                            composed: !0
                        };
                    rt.getRootNode && (at = function(t) {
                        return C.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
                    });
                    var ct = function(t, e) {
                        return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === C.css(t, "display")
                    };

                    function ht(t, e, i, n) {
                        var s, o, r = 20,
                            a = n ? function() {
                                return n.cur()
                            } : function() {
                                return C.css(t, e, "")
                            },
                            l = a(),
                            c = i && i[3] || (C.cssNumber[e] ? "" : "px"),
                            h = t.nodeType && (C.cssNumber[e] || "px" !== c && +l) && st.exec(C.css(t, e));
                        if (h && h[3] !== c) {
                            for (l /= 2, c = c || h[3], h = +l || 1; r--;) C.style(t, e, h + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), h /= o;
                            h *= 2, C.style(t, e, h + c), i = i || []
                        }
                        return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s
                    }
                    var ut = {};

                    function dt(t) {
                        var e, i = t.ownerDocument,
                            n = t.nodeName,
                            s = ut[n];
                        return s || (e = i.body.appendChild(i.createElement(n)), s = C.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), ut[n] = s, s)
                    }

                    function pt(t, e) {
                        for (var i, n, s = [], o = 0, r = t.length; o < r; o++)(n = t[o]).style && (i = n.style.display, e ? ("none" === i && (s[o] = Z.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && ct(n) && (s[o] = dt(n))) : "none" !== i && (s[o] = "none", Z.set(n, "display", i)));
                        for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]);
                        return t
                    }
                    C.fn.extend({
                        show: function() {
                            return pt(this, !0)
                        },
                        hide: function() {
                            return pt(this)
                        },
                        toggle: function(t) {
                            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                                ct(this) ? C(this).show() : C(this).hide()
                            }))
                        }
                    });
                    var ft, gt, mt = /^(?:checkbox|radio)$/i,
                        vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        yt = /^$|^module$|\/(?:java|ecma)script/i;
                    ft = _.createDocumentFragment().appendChild(_.createElement("div")), (gt = _.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), ft.appendChild(gt), m.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue, ft.innerHTML = "<option></option>", m.option = !!ft.lastChild;
                    var _t = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function bt(t, e) {
                        var i;
                        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && k(t, e) ? C.merge([t], i) : i
                    }

                    function wt(t, e) {
                        for (var i = 0, n = t.length; i < n; i++) Z.set(t[i], "globalEval", !e || Z.get(e[i], "globalEval"))
                    }
                    _t.tbody = _t.tfoot = _t.colgroup = _t.caption = _t.thead, _t.th = _t.td, m.option || (_t.optgroup = _t.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var xt = /<|&#?\w+;/;

                    function Et(t, e, i, n, s) {
                        for (var o, r, a, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                            if ((o = t[p]) || 0 === o)
                                if ("object" === x(o)) C.merge(d, o.nodeType ? [o] : o);
                                else if (xt.test(o)) {
                            for (r = r || u.appendChild(e.createElement("div")), a = (vt.exec(o) || ["", ""])[1].toLowerCase(), l = _t[a] || _t._default, r.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], h = l[0]; h--;) r = r.lastChild;
                            C.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
                        } else d.push(e.createTextNode(o));
                        for (u.textContent = "", p = 0; o = d[p++];)
                            if (n && C.inArray(o, n) > -1) s && s.push(o);
                            else if (c = at(o), r = bt(u.appendChild(o), "script"), c && wt(r), i)
                            for (h = 0; o = r[h++];) yt.test(o.type || "") && i.push(o);
                        return u
                    }
                    var Ct = /^([^.]*)(?:\.(.+)|)/;

                    function Tt() {
                        return !0
                    }

                    function St() {
                        return !1
                    }

                    function At(t, e) {
                        return t === function() {
                            try {
                                return _.activeElement
                            } catch (t) {}
                        }() == ("focus" === e)
                    }

                    function Dt(t, e, i, n, s, o) {
                        var r, a;
                        if ("object" == typeof e) {
                            for (a in "string" != typeof i && (n = n || i, i = void 0), e) Dt(t, a, i, n, e[a], o);
                            return t
                        }
                        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = St;
                        else if (!s) return t;
                        return 1 === o && (r = s, s = function(t) {
                            return C().off(t), r.apply(this, arguments)
                        }, s.guid = r.guid || (r.guid = C.guid++)), t.each((function() {
                            C.event.add(this, e, s, n, i)
                        }))
                    }

                    function Lt(t, e, i) {
                        i ? (Z.set(t, e, !1), C.event.add(t, e, {
                            namespace: !1,
                            handler: function(t) {
                                var n, s, o = Z.get(this, e);
                                if (1 & t.isTrigger && this[e]) {
                                    if (o.length)(C.event.special[e] || {}).delegateType && t.stopPropagation();
                                    else if (o = a.call(arguments), Z.set(this, e, o), n = i(this, e), this[e](), o !== (s = Z.get(this, e)) || n ? Z.set(this, e, !1) : s = {}, o !== s) return t.stopImmediatePropagation(), t.preventDefault(), s && s.value
                                } else o.length && (Z.set(this, e, {
                                    value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                                }), t.stopImmediatePropagation())
                            }
                        })) : void 0 === Z.get(t, e) && C.event.add(t, e, Tt)
                    }
                    C.event = {
                        global: {},
                        add: function(t, e, i, n, s) {
                            var o, r, a, l, c, h, u, d, p, f, g, m = Z.get(t);
                            if (G(t))
                                for (i.handler && (i = (o = i).handler, s = o.selector), s && C.find.matchesSelector(rt, s), i.guid || (i.guid = C.guid++), (l = m.events) || (l = m.events = Object.create(null)), (r = m.handle) || (r = m.handle = function(e) {
                                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                                    }), c = (e = (e || "").match(H) || [""]).length; c--;) p = g = (a = Ct.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = C.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = C.event.special[p] || {}, h = C.extend({
                                    type: p,
                                    origType: g,
                                    data: n,
                                    handler: i,
                                    guid: i.guid,
                                    selector: s,
                                    needsContext: s && C.expr.match.needsContext.test(s),
                                    namespace: f.join(".")
                                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), C.event.global[p] = !0)
                        },
                        remove: function(t, e, i, n, s) {
                            var o, r, a, l, c, h, u, d, p, f, g, m = Z.hasData(t) && Z.get(t);
                            if (m && (l = m.events)) {
                                for (c = (e = (e || "").match(H) || [""]).length; c--;)
                                    if (p = g = (a = Ct.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                                        for (u = C.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) h = d[o], !s && g !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                                        r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || C.removeEvent(t, p, m.handle), delete l[p])
                                    } else
                                        for (p in l) C.event.remove(t, p + e[c], i, n, !0);
                                C.isEmptyObject(l) && Z.remove(t, "handle events")
                            }
                        },
                        dispatch: function(t) {
                            var e, i, n, s, o, r, a = new Array(arguments.length),
                                l = C.event.fix(t),
                                c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
                                h = C.event.special[l.type] || {};
                            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                            if (l.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, l)) {
                                for (r = C.event.handlers.call(this, l, c), e = 0;
                                    (s = r[e++]) && !l.isPropagationStopped();)
                                    for (l.currentTarget = s.elem, i = 0;
                                        (o = s.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (n = ((C.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                                return h.postDispatch && h.postDispatch.call(this, l), l.result
                            }
                        },
                        handlers: function(t, e) {
                            var i, n, s, o, r, a = [],
                                l = e.delegateCount,
                                c = t.target;
                            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                                for (; c !== this; c = c.parentNode || this)
                                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                        for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? C(s, this).index(c) > -1 : C.find(s, this, null, [c]).length), r[s] && o.push(n);
                                        o.length && a.push({
                                            elem: c,
                                            handlers: o
                                        })
                                    } return c = this, l < e.length && a.push({
                                elem: c,
                                handlers: e.slice(l)
                            }), a
                        },
                        addProp: function(t, e) {
                            Object.defineProperty(C.Event.prototype, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: v(e) ? function() {
                                    if (this.originalEvent) return e(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[t]
                                },
                                set: function(e) {
                                    Object.defineProperty(this, t, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e
                                    })
                                }
                            })
                        },
                        fix: function(t) {
                            return t[C.expando] ? t : new C.Event(t)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(t) {
                                    var e = this || t;
                                    return mt.test(e.type) && e.click && k(e, "input") && Lt(e, "click", Tt), !1
                                },
                                trigger: function(t) {
                                    var e = this || t;
                                    return mt.test(e.type) && e.click && k(e, "input") && Lt(e, "click"), !0
                                },
                                _default: function(t) {
                                    var e = t.target;
                                    return mt.test(e.type) && e.click && k(e, "input") && Z.get(e, "click") || k(e, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(t) {
                                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                                }
                            }
                        }
                    }, C.removeEvent = function(t, e, i) {
                        t.removeEventListener && t.removeEventListener(e, i)
                    }, C.Event = function(t, e) {
                        if (!(this instanceof C.Event)) return new C.Event(t, e);
                        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0
                    }, C.Event.prototype = {
                        constructor: C.Event,
                        isDefaultPrevented: St,
                        isPropagationStopped: St,
                        isImmediatePropagationStopped: St,
                        isSimulated: !1,
                        preventDefault: function() {
                            var t = this.originalEvent;
                            this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
                        },
                        stopPropagation: function() {
                            var t = this.originalEvent;
                            this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var t = this.originalEvent;
                            this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, C.each({
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
                        char: !0,
                        code: !0,
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
                        which: !0
                    }, C.event.addProp), C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        C.event.special[t] = {
                            setup: function() {
                                return Lt(this, t, At), !1
                            },
                            trigger: function() {
                                return Lt(this, t), !0
                            },
                            _default: function() {
                                return !0
                            },
                            delegateType: e
                        }
                    })), C.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(t, e) {
                        C.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function(t) {
                                var i, n = this,
                                    s = t.relatedTarget,
                                    o = t.handleObj;
                                return s && (s === n || C.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                            }
                        }
                    })), C.fn.extend({
                        on: function(t, e, i, n) {
                            return Dt(this, t, e, i, n)
                        },
                        one: function(t, e, i, n) {
                            return Dt(this, t, e, i, n, 1)
                        },
                        off: function(t, e, i) {
                            var n, s;
                            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                            if ("object" == typeof t) {
                                for (s in t) this.off(s, e, t[s]);
                                return this
                            }
                            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = St), this.each((function() {
                                C.event.remove(this, t, i, e)
                            }))
                        }
                    });
                    var kt = /<script|<style|<link/i,
                        Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function Nt(t, e) {
                        return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
                    }

                    function jt(t) {
                        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                    }

                    function zt(t) {
                        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
                    }

                    function Pt(t, e) {
                        var i, n, s, o, r, a;
                        if (1 === e.nodeType) {
                            if (Z.hasData(t) && (a = Z.get(t).events))
                                for (s in Z.remove(e, "handle events"), a)
                                    for (i = 0, n = a[s].length; i < n; i++) C.event.add(e, s, a[s][i]);
                            J.hasData(t) && (o = J.access(t), r = C.extend({}, o), J.set(e, r))
                        }
                    }

                    function Mt(t, e) {
                        var i = e.nodeName.toLowerCase();
                        "input" === i && mt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
                    }

                    function Ht(t, e, i, n) {
                        e = l(e);
                        var s, o, r, a, c, h, u = 0,
                            d = t.length,
                            p = d - 1,
                            f = e[0],
                            g = v(f);
                        if (g || d > 1 && "string" == typeof f && !m.checkClone && Ot.test(f)) return t.each((function(s) {
                            var o = t.eq(s);
                            g && (e[0] = f.call(this, s, o.html())), Ht(o, e, i, n)
                        }));
                        if (d && (o = (s = Et(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
                            for (a = (r = C.map(bt(s, "script"), jt)).length; u < d; u++) c = s, u !== p && (c = C.clone(c, !0, !0), a && C.merge(r, bt(c, "script"))), i.call(t[u], c, u);
                            if (a)
                                for (h = r[r.length - 1].ownerDocument, C.map(r, zt), u = 0; u < a; u++) c = r[u], yt.test(c.type || "") && !Z.access(c, "globalEval") && C.contains(h, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, h) : w(c.textContent.replace(It, ""), c, h))
                        }
                        return t
                    }

                    function $t(t, e, i) {
                        for (var n, s = e ? C.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || C.cleanData(bt(n)), n.parentNode && (i && at(n) && wt(bt(n, "script")), n.parentNode.removeChild(n));
                        return t
                    }
                    C.extend({
                        htmlPrefilter: function(t) {
                            return t
                        },
                        clone: function(t, e, i) {
                            var n, s, o, r, a = t.cloneNode(!0),
                                l = at(t);
                            if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
                                for (r = bt(a), n = 0, s = (o = bt(t)).length; n < s; n++) Mt(o[n], r[n]);
                            if (e)
                                if (i)
                                    for (o = o || bt(t), r = r || bt(a), n = 0, s = o.length; n < s; n++) Pt(o[n], r[n]);
                                else Pt(t, a);
                            return (r = bt(a, "script")).length > 0 && wt(r, !l && bt(t, "script")), a
                        },
                        cleanData: function(t) {
                            for (var e, i, n, s = C.event.special, o = 0; void 0 !== (i = t[o]); o++)
                                if (G(i)) {
                                    if (e = i[Z.expando]) {
                                        if (e.events)
                                            for (n in e.events) s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
                                        i[Z.expando] = void 0
                                    }
                                    i[J.expando] && (i[J.expando] = void 0)
                                }
                        }
                    }), C.fn.extend({
                        detach: function(t) {
                            return $t(this, t, !0)
                        },
                        remove: function(t) {
                            return $t(this, t)
                        },
                        text: function(t) {
                            return U(this, (function(t) {
                                return void 0 === t ? C.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                                }))
                            }), null, t, arguments.length)
                        },
                        append: function() {
                            return Ht(this, arguments, (function(t) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Nt(this, t).appendChild(t)
                            }))
                        },
                        prepend: function() {
                            return Ht(this, arguments, (function(t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = Nt(this, t);
                                    e.insertBefore(t, e.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return Ht(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this)
                            }))
                        },
                        after: function() {
                            return Ht(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(bt(t, !1)), t.textContent = "");
                            return this
                        },
                        clone: function(t, e) {
                            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                                return C.clone(this, t, e)
                            }))
                        },
                        html: function(t) {
                            return U(this, (function(t) {
                                var e = this[0] || {},
                                    i = 0,
                                    n = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !kt.test(t) && !_t[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = C.htmlPrefilter(t);
                                    try {
                                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(bt(e, !1)), e.innerHTML = t);
                                        e = 0
                                    } catch (t) {}
                                }
                                e && this.empty().append(t)
                            }), null, t, arguments.length)
                        },
                        replaceWith: function() {
                            var t = [];
                            return Ht(this, arguments, (function(e) {
                                var i = this.parentNode;
                                C.inArray(this, t) < 0 && (C.cleanData(bt(this)), i && i.replaceChild(e, this))
                            }), t)
                        }
                    }), C.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(t, e) {
                        C.fn[t] = function(t) {
                            for (var i, n = [], s = C(t), o = s.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(!0), C(s[r])[e](i), c.apply(n, i.get());
                            return this.pushStack(n)
                        }
                    }));
                    var Rt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
                        Wt = function(t) {
                            var e = t.ownerDocument.defaultView;
                            return e && e.opener || (e = n), e.getComputedStyle(t)
                        },
                        qt = function(t, e, i) {
                            var n, s, o = {};
                            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                            for (s in n = i.call(t), e) t.style[s] = o[s];
                            return n
                        },
                        Bt = new RegExp(ot.join("|"), "i");

                    function Ft(t, e, i) {
                        var n, s, o, r, a = t.style;
                        return (i = i || Wt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || at(t) || (r = C.style(t, e)), !m.pixelBoxStyles() && Rt.test(r) && Bt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
                    }

                    function Ut(t, e) {
                        return {
                            get: function() {
                                if (!t()) return (this.get = e).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function t() {
                            if (h) {
                                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(h);
                                var t = n.getComputedStyle(h);
                                i = "1%" !== t.top, l = 12 === e(t.marginLeft), h.style.right = "60%", r = 36 === e(t.right), s = 36 === e(t.width), h.style.position = "absolute", o = 12 === e(h.offsetWidth / 3), rt.removeChild(c), h = null
                            }
                        }

                        function e(t) {
                            return Math.round(parseFloat(t))
                        }
                        var i, s, o, r, a, l, c = _.createElement("div"),
                            h = _.createElement("div");
                        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === h.style.backgroundClip, C.extend(m, {
                            boxSizingReliable: function() {
                                return t(), s
                            },
                            pixelBoxStyles: function() {
                                return t(), r
                            },
                            pixelPosition: function() {
                                return t(), i
                            },
                            reliableMarginLeft: function() {
                                return t(), l
                            },
                            scrollboxSize: function() {
                                return t(), o
                            },
                            reliableTrDimensions: function() {
                                var t, e, i, s;
                                return null == a && (t = _.createElement("table"), e = _.createElement("tr"), i = _.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", i.style.height = "9px", i.style.display = "block", rt.appendChild(t).appendChild(e).appendChild(i), s = n.getComputedStyle(e), a = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === e.offsetHeight, rt.removeChild(t)), a
                            }
                        }))
                    }();
                    var Vt = ["Webkit", "Moz", "ms"],
                        Yt = _.createElement("div").style,
                        Qt = {};

                    function Xt(t) {
                        return C.cssProps[t] || Qt[t] || (t in Yt ? t : Qt[t] = function(t) {
                            for (var e = t[0].toUpperCase() + t.slice(1), i = Vt.length; i--;)
                                if ((t = Vt[i] + e) in Yt) return t
                        }(t) || t)
                    }
                    var Gt = /^(none|table(?!-c[ea]).+)/,
                        Kt = /^--/,
                        Zt = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Jt = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function te(t, e, i) {
                        var n = st.exec(e);
                        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
                    }

                    function ee(t, e, i, n, s, o) {
                        var r = "width" === e ? 1 : 0,
                            a = 0,
                            l = 0;
                        if (i === (n ? "border" : "content")) return 0;
                        for (; r < 4; r += 2) "margin" === i && (l += C.css(t, i + ot[r], !0, s)), n ? ("content" === i && (l -= C.css(t, "padding" + ot[r], !0, s)), "margin" !== i && (l -= C.css(t, "border" + ot[r] + "Width", !0, s))) : (l += C.css(t, "padding" + ot[r], !0, s), "padding" !== i ? l += C.css(t, "border" + ot[r] + "Width", !0, s) : a += C.css(t, "border" + ot[r] + "Width", !0, s));
                        return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
                    }

                    function ie(t, e, i) {
                        var n = Wt(t),
                            s = (!m.boxSizingReliable() || i) && "border-box" === C.css(t, "boxSizing", !1, n),
                            o = s,
                            r = Ft(t, e, n),
                            a = "offset" + e[0].toUpperCase() + e.slice(1);
                        if (Rt.test(r)) {
                            if (!i) return r;
                            r = "auto"
                        }
                        return (!m.boxSizingReliable() && s || !m.reliableTrDimensions() && k(t, "tr") || "auto" === r || !parseFloat(r) && "inline" === C.css(t, "display", !1, n)) && t.getClientRects().length && (s = "border-box" === C.css(t, "boxSizing", !1, n), (o = a in t) && (r = t[a])), (r = parseFloat(r) || 0) + ee(t, e, i || (s ? "border" : "content"), o, n, r) + "px"
                    }

                    function ne(t, e, i, n, s) {
                        return new ne.prototype.init(t, e, i, n, s)
                    }
                    C.extend({
                        cssHooks: {
                            opacity: {
                                get: function(t, e) {
                                    if (e) {
                                        var i = Ft(t, "opacity");
                                        return "" === i ? "1" : i
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
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(t, e, i, n) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var s, o, r, a = X(e),
                                    l = Kt.test(e),
                                    c = t.style;
                                if (l || (e = Xt(a)), r = C.cssHooks[e] || C.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : c[e];
                                "string" == (o = typeof i) && (s = st.exec(i)) && s[1] && (i = ht(t, e, s), o = "number"), null != i && i == i && ("number" !== o || l || (i += s && s[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                            }
                        },
                        css: function(t, e, i, n) {
                            var s, o, r, a = X(e);
                            return Kt.test(e) || (e = Xt(a)), (r = C.cssHooks[e] || C.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = Ft(t, e, n)), "normal" === s && e in Jt && (s = Jt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
                        }
                    }), C.each(["height", "width"], (function(t, e) {
                        C.cssHooks[e] = {
                            get: function(t, i, n) {
                                if (i) return !Gt.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, n) : qt(t, Zt, (function() {
                                    return ie(t, e, n)
                                }))
                            },
                            set: function(t, i, n) {
                                var s, o = Wt(t),
                                    r = !m.scrollboxSize() && "absolute" === o.position,
                                    a = (r || n) && "border-box" === C.css(t, "boxSizing", !1, o),
                                    l = n ? ee(t, e, n, a, o) : 0;
                                return a && r && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ee(t, e, "border", !1, o) - .5)), l && (s = st.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = C.css(t, e)), te(0, i, l)
                            }
                        }
                    })), C.cssHooks.marginLeft = Ut(m.reliableMarginLeft, (function(t, e) {
                        if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, {
                            marginLeft: 0
                        }, (function() {
                            return t.getBoundingClientRect().left
                        }))) + "px"
                    })), C.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(t, e) {
                        C.cssHooks[t + e] = {
                            expand: function(i) {
                                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + ot[n] + e] = o[n] || o[n - 2] || o[0];
                                return s
                            }
                        }, "margin" !== t && (C.cssHooks[t + e].set = te)
                    })), C.fn.extend({
                        css: function(t, e) {
                            return U(this, (function(t, e, i) {
                                var n, s, o = {},
                                    r = 0;
                                if (Array.isArray(e)) {
                                    for (n = Wt(t), s = e.length; r < s; r++) o[e[r]] = C.css(t, e[r], !1, n);
                                    return o
                                }
                                return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
                            }), t, e, arguments.length > 1)
                        }
                    }), C.Tween = ne, ne.prototype = {
                        constructor: ne,
                        init: function(t, e, i, n, s, o) {
                            this.elem = t, this.prop = i, this.easing = s || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (C.cssNumber[i] ? "" : "px")
                        },
                        cur: function() {
                            var t = ne.propHooks[this.prop];
                            return t && t.get ? t.get(this) : ne.propHooks._default.get(this)
                        },
                        run: function(t) {
                            var e, i = ne.propHooks[this.prop];
                            return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ne.propHooks._default.set(this), this
                        }
                    }, ne.prototype.init.prototype = ne.prototype, ne.propHooks = {
                        _default: {
                            get: function(t) {
                                var e;
                                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                            },
                            set: function(t) {
                                C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !C.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
                            }
                        }
                    }, ne.propHooks.scrollTop = ne.propHooks.scrollLeft = {
                        set: function(t) {
                            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                        }
                    }, C.easing = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        _default: "swing"
                    }, C.fx = ne.prototype.init, C.fx.step = {};
                    var se, oe, re = /^(?:toggle|show|hide)$/,
                        ae = /queueHooks$/;

                    function le() {
                        oe && (!1 === _.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(le) : n.setTimeout(le, C.fx.interval), C.fx.tick())
                    }

                    function ce() {
                        return n.setTimeout((function() {
                            se = void 0
                        })), se = Date.now()
                    }

                    function he(t, e) {
                        var i, n = 0,
                            s = {
                                height: t
                            };
                        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = ot[n])] = s["padding" + i] = t;
                        return e && (s.opacity = s.width = t), s
                    }

                    function ue(t, e, i) {
                        for (var n, s = (de.tweeners[e] || []).concat(de.tweeners["*"]), o = 0, r = s.length; o < r; o++)
                            if (n = s[o].call(i, e, t)) return n
                    }

                    function de(t, e, i) {
                        var n, s, o = 0,
                            r = de.prefilters.length,
                            a = C.Deferred().always((function() {
                                delete l.elem
                            })),
                            l = function() {
                                if (s) return !1;
                                for (var e = se || ce(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(n);
                                return a.notifyWith(t, [c, n, i]), n < 1 && r ? i : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                            },
                            c = a.promise({
                                elem: t,
                                props: C.extend({}, e),
                                opts: C.extend(!0, {
                                    specialEasing: {},
                                    easing: C.easing._default
                                }, i),
                                originalProperties: e,
                                originalOptions: i,
                                startTime: se || ce(),
                                duration: i.duration,
                                tweens: [],
                                createTween: function(e, i) {
                                    var n = C.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                                    return c.tweens.push(n), n
                                },
                                stop: function(e) {
                                    var i = 0,
                                        n = e ? c.tweens.length : 0;
                                    if (s) return this;
                                    for (s = !0; i < n; i++) c.tweens[i].run(1);
                                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                                }
                            }),
                            h = c.props;
                        for (function(t, e) {
                                var i, n, s, o, r;
                                for (i in t)
                                    if (s = e[n = X(i)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = C.cssHooks[n]) && "expand" in r)
                                        for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                                    else e[n] = s
                            }(h, c.opts.specialEasing); o < r; o++)
                            if (n = de.prefilters[o].call(c, t, h, c.opts)) return v(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                        return C.map(h, ue, c), v(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                            elem: t,
                            anim: c,
                            queue: c.opts.queue
                        })), c
                    }
                    C.Animation = C.extend(de, {
                            tweeners: {
                                "*": [function(t, e) {
                                    var i = this.createTween(t, e);
                                    return ht(i.elem, t, st.exec(e), i), i
                                }]
                            },
                            tweener: function(t, e) {
                                v(t) ? (e = t, t = ["*"]) : t = t.match(H);
                                for (var i, n = 0, s = t.length; n < s; n++) i = t[n], de.tweeners[i] = de.tweeners[i] || [], de.tweeners[i].unshift(e)
                            },
                            prefilters: [function(t, e, i) {
                                var n, s, o, r, a, l, c, h, u = "width" in e || "height" in e,
                                    d = this,
                                    p = {},
                                    f = t.style,
                                    g = t.nodeType && ct(t),
                                    m = Z.get(t, "fxshow");
                                for (n in i.queue || (null == (r = C._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                                        r.unqueued || a()
                                    }), r.unqueued++, d.always((function() {
                                        d.always((function() {
                                            r.unqueued--, C.queue(t, "fx").length || r.empty.fire()
                                        }))
                                    }))), e)
                                    if (s = e[n], re.test(s)) {
                                        if (delete e[n], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
                                            if ("show" !== s || !m || void 0 === m[n]) continue;
                                            g = !0
                                        }
                                        p[n] = m && m[n] || C.style(t, n)
                                    } if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(p))
                                    for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = Z.get(t, "display")), "none" === (h = C.css(t, "display")) && (c ? h = c : (pt([t], !0), c = t.style.display || c, h = C.css(t, "display"), pt([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === C.css(t, "float") && (l || (d.done((function() {
                                            f.display = c
                                        })), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always((function() {
                                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                                        }))), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(t, "fxshow", {
                                        display: c
                                    }), o && (m.hidden = !g), g && pt([t], !0), d.done((function() {
                                        for (n in g || pt([t]), Z.remove(t, "fxshow"), p) C.style(t, n, p[n])
                                    }))), l = ue(g ? m[n] : 0, n, d), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
                            }],
                            prefilter: function(t, e) {
                                e ? de.prefilters.unshift(t) : de.prefilters.push(t)
                            }
                        }), C.speed = function(t, e, i) {
                            var n = t && "object" == typeof t ? C.extend({}, t) : {
                                complete: i || !i && e || v(t) && t,
                                duration: t,
                                easing: i && e || e && !v(e) && e
                            };
                            return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                                v(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
                            }, n
                        }, C.fn.extend({
                            fadeTo: function(t, e, i, n) {
                                return this.filter(ct).css("opacity", 0).show().end().animate({
                                    opacity: e
                                }, t, i, n)
                            },
                            animate: function(t, e, i, n) {
                                var s = C.isEmptyObject(t),
                                    o = C.speed(e, i, n),
                                    r = function() {
                                        var e = de(this, C.extend({}, t), o);
                                        (s || Z.get(this, "finish")) && e.stop(!0)
                                    };
                                return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
                            },
                            stop: function(t, e, i) {
                                var n = function(t) {
                                    var e = t.stop;
                                    delete t.stop, e(i)
                                };
                                return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                                    var e = !0,
                                        s = null != t && t + "queueHooks",
                                        o = C.timers,
                                        r = Z.get(this);
                                    if (s) r[s] && r[s].stop && n(r[s]);
                                    else
                                        for (s in r) r[s] && r[s].stop && ae.test(s) && n(r[s]);
                                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                                    !e && i || C.dequeue(this, t)
                                }))
                            },
                            finish: function(t) {
                                return !1 !== t && (t = t || "fx"), this.each((function() {
                                    var e, i = Z.get(this),
                                        n = i[t + "queue"],
                                        s = i[t + "queueHooks"],
                                        o = C.timers,
                                        r = n ? n.length : 0;
                                    for (i.finish = !0, C.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                    for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                                    delete i.finish
                                }))
                            }
                        }), C.each(["toggle", "show", "hide"], (function(t, e) {
                            var i = C.fn[e];
                            C.fn[e] = function(t, n, s) {
                                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(he(e, !0), t, n, s)
                            }
                        })), C.each({
                            slideDown: he("show"),
                            slideUp: he("hide"),
                            slideToggle: he("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(t, e) {
                            C.fn[t] = function(t, i, n) {
                                return this.animate(e, t, i, n)
                            }
                        })), C.timers = [], C.fx.tick = function() {
                            var t, e = 0,
                                i = C.timers;
                            for (se = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                            i.length || C.fx.stop(), se = void 0
                        }, C.fx.timer = function(t) {
                            C.timers.push(t), C.fx.start()
                        }, C.fx.interval = 13, C.fx.start = function() {
                            oe || (oe = !0, le())
                        }, C.fx.stop = function() {
                            oe = null
                        }, C.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, C.fn.delay = function(t, e) {
                            return t = C.fx && C.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, i) {
                                var s = n.setTimeout(e, t);
                                i.stop = function() {
                                    n.clearTimeout(s)
                                }
                            }))
                        },
                        function() {
                            var t = _.createElement("input"),
                                e = _.createElement("select").appendChild(_.createElement("option"));
                            t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = _.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
                        }();
                    var pe, fe = C.expr.attrHandle;
                    C.fn.extend({
                        attr: function(t, e) {
                            return U(this, C.attr, t, e, arguments.length > 1)
                        },
                        removeAttr: function(t) {
                            return this.each((function() {
                                C.removeAttr(this, t)
                            }))
                        }
                    }), C.extend({
                        attr: function(t, e, i) {
                            var n, s, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? C.prop(t, e, i) : (1 === o && C.isXMLDoc(t) || (s = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? pe : void 0)), void 0 !== i ? null === i ? void C.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = C.find.attr(t, e)) ? void 0 : n)
                        },
                        attrHooks: {
                            type: {
                                set: function(t, e) {
                                    if (!m.radioValue && "radio" === e && k(t, "input")) {
                                        var i = t.value;
                                        return t.setAttribute("type", e), i && (t.value = i), e
                                    }
                                }
                            }
                        },
                        removeAttr: function(t, e) {
                            var i, n = 0,
                                s = e && e.match(H);
                            if (s && 1 === t.nodeType)
                                for (; i = s[n++];) t.removeAttribute(i)
                        }
                    }), pe = {
                        set: function(t, e, i) {
                            return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i
                        }
                    }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                        var i = fe[e] || C.find.attr;
                        fe[e] = function(t, e, n) {
                            var s, o, r = e.toLowerCase();
                            return n || (o = fe[r], fe[r] = s, s = null != i(t, e, n) ? r : null, fe[r] = o), s
                        }
                    }));
                    var ge = /^(?:input|select|textarea|button)$/i,
                        me = /^(?:a|area)$/i;

                    function ve(t) {
                        return (t.match(H) || []).join(" ")
                    }

                    function ye(t) {
                        return t.getAttribute && t.getAttribute("class") || ""
                    }

                    function _e(t) {
                        return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
                    }
                    C.fn.extend({
                        prop: function(t, e) {
                            return U(this, C.prop, t, e, arguments.length > 1)
                        },
                        removeProp: function(t) {
                            return this.each((function() {
                                delete this[C.propFix[t] || t]
                            }))
                        }
                    }), C.extend({
                        prop: function(t, e, i) {
                            var n, s, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(t) || (e = C.propFix[e] || e, s = C.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(t) {
                                    var e = C.find.attr(t, "tabindex");
                                    return e ? parseInt(e, 10) : ge.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), m.optSelected || (C.propHooks.selected = {
                        get: function(t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null
                        },
                        set: function(t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                        }
                    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        C.propFix[this.toLowerCase()] = this
                    })), C.fn.extend({
                        addClass: function(t) {
                            var e, i, n, s, o, r, a, l = 0;
                            if (v(t)) return this.each((function(e) {
                                C(this).addClass(t.call(this, e, ye(this)))
                            }));
                            if ((e = _e(t)).length)
                                for (; i = this[l++];)
                                    if (s = ye(i), n = 1 === i.nodeType && " " + ve(s) + " ") {
                                        for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                        s !== (a = ve(n)) && i.setAttribute("class", a)
                                    } return this
                        },
                        removeClass: function(t) {
                            var e, i, n, s, o, r, a, l = 0;
                            if (v(t)) return this.each((function(e) {
                                C(this).removeClass(t.call(this, e, ye(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ((e = _e(t)).length)
                                for (; i = this[l++];)
                                    if (s = ye(i), n = 1 === i.nodeType && " " + ve(s) + " ") {
                                        for (r = 0; o = e[r++];)
                                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                                        s !== (a = ve(n)) && i.setAttribute("class", a)
                                    } return this
                        },
                        toggleClass: function(t, e) {
                            var i = typeof t,
                                n = "string" === i || Array.isArray(t);
                            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function(i) {
                                C(this).toggleClass(t.call(this, i, ye(this), e), e)
                            })) : this.each((function() {
                                var e, s, o, r;
                                if (n)
                                    for (s = 0, o = C(this), r = _e(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                                else void 0 !== t && "boolean" !== i || ((e = ye(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(t) {
                            var e, i, n = 0;
                            for (e = " " + t + " "; i = this[n++];)
                                if (1 === i.nodeType && (" " + ve(ye(i)) + " ").indexOf(e) > -1) return !0;
                            return !1
                        }
                    });
                    var be = /\r/g;
                    C.fn.extend({
                        val: function(t) {
                            var e, i, n, s = this[0];
                            return arguments.length ? (n = v(t), this.each((function(i) {
                                var s;
                                1 === this.nodeType && (null == (s = n ? t.call(this, i, C(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = C.map(s, (function(t) {
                                    return null == t ? "" : t + ""
                                }))), (e = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                            }))) : s ? (e = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(be, "") : null == i ? "" : i : void 0
                        }
                    }), C.extend({
                        valHooks: {
                            option: {
                                get: function(t) {
                                    var e = C.find.attr(t, "value");
                                    return null != e ? e : ve(C.text(t))
                                }
                            },
                            select: {
                                get: function(t) {
                                    var e, i, n, s = t.options,
                                        o = t.selectedIndex,
                                        r = "select-one" === t.type,
                                        a = r ? null : [],
                                        l = r ? o + 1 : s.length;
                                    for (n = o < 0 ? l : r ? o : 0; n < l; n++)
                                        if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                                            if (e = C(i).val(), r) return e;
                                            a.push(e)
                                        } return a
                                },
                                set: function(t, e) {
                                    for (var i, n, s = t.options, o = C.makeArray(e), r = s.length; r--;)((n = s[r]).selected = C.inArray(C.valHooks.option.get(n), o) > -1) && (i = !0);
                                    return i || (t.selectedIndex = -1), o
                                }
                            }
                        }
                    }), C.each(["radio", "checkbox"], (function() {
                        C.valHooks[this] = {
                            set: function(t, e) {
                                if (Array.isArray(e)) return t.checked = C.inArray(C(t).val(), e) > -1
                            }
                        }, m.checkOn || (C.valHooks[this].get = function(t) {
                            return null === t.getAttribute("value") ? "on" : t.value
                        })
                    })), m.focusin = "onfocusin" in n;
                    var we = /^(?:focusinfocus|focusoutblur)$/,
                        xe = function(t) {
                            t.stopPropagation()
                        };
                    C.extend(C.event, {
                        trigger: function(t, e, i, s) {
                            var o, r, a, l, c, h, u, d, f = [i || _],
                                g = p.call(t, "type") ? t.type : t,
                                m = p.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (r = d = a = i = i || _, 3 !== i.nodeType && 8 !== i.nodeType && !we.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (t = t[C.expando] ? t : new C.Event(g, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), u = C.event.special[g] || {}, s || !u.trigger || !1 !== u.trigger.apply(i, e))) {
                                if (!s && !u.noBubble && !y(i)) {
                                    for (l = u.delegateType || g, we.test(l + g) || (r = r.parentNode); r; r = r.parentNode) f.push(r), a = r;
                                    a === (i.ownerDocument || _) && f.push(a.defaultView || a.parentWindow || n)
                                }
                                for (o = 0;
                                    (r = f[o++]) && !t.isPropagationStopped();) d = r, t.type = o > 1 ? l : u.bindType || g, (h = (Z.get(r, "events") || Object.create(null))[t.type] && Z.get(r, "handle")) && h.apply(r, e), (h = c && r[c]) && h.apply && G(r) && (t.result = h.apply(r, e), !1 === t.result && t.preventDefault());
                                return t.type = g, s || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), e) || !G(i) || c && v(i[g]) && !y(i) && ((a = i[c]) && (i[c] = null), C.event.triggered = g, t.isPropagationStopped() && d.addEventListener(g, xe), i[g](), t.isPropagationStopped() && d.removeEventListener(g, xe), C.event.triggered = void 0, a && (i[c] = a)), t.result
                            }
                        },
                        simulate: function(t, e, i) {
                            var n = C.extend(new C.Event, i, {
                                type: t,
                                isSimulated: !0
                            });
                            C.event.trigger(n, null, e)
                        }
                    }), C.fn.extend({
                        trigger: function(t, e) {
                            return this.each((function() {
                                C.event.trigger(t, e, this)
                            }))
                        },
                        triggerHandler: function(t, e) {
                            var i = this[0];
                            if (i) return C.event.trigger(t, e, i, !0)
                        }
                    }), m.focusin || C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        var i = function(t) {
                            C.event.simulate(e, t.target, C.event.fix(t))
                        };
                        C.event.special[e] = {
                            setup: function() {
                                var n = this.ownerDocument || this.document || this,
                                    s = Z.access(n, e);
                                s || n.addEventListener(t, i, !0), Z.access(n, e, (s || 0) + 1)
                            },
                            teardown: function() {
                                var n = this.ownerDocument || this.document || this,
                                    s = Z.access(n, e) - 1;
                                s ? Z.access(n, e, s) : (n.removeEventListener(t, i, !0), Z.remove(n, e))
                            }
                        }
                    }));
                    var Ee = n.location,
                        Ce = {
                            guid: Date.now()
                        },
                        Te = /\?/;
                    C.parseXML = function(t) {
                        var e, i;
                        if (!t || "string" != typeof t) return null;
                        try {
                            e = (new n.DOMParser).parseFromString(t, "text/xml")
                        } catch (t) {}
                        return i = e && e.getElementsByTagName("parsererror")[0], e && !i || C.error("Invalid XML: " + (i ? C.map(i.childNodes, (function(t) {
                            return t.textContent
                        })).join("\n") : t)), e
                    };
                    var Se = /\[\]$/,
                        Ae = /\r?\n/g,
                        De = /^(?:submit|button|image|reset|file)$/i,
                        Le = /^(?:input|select|textarea|keygen)/i;

                    function ke(t, e, i, n) {
                        var s;
                        if (Array.isArray(e)) C.each(e, (function(e, s) {
                            i || Se.test(t) ? n(t, s) : ke(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
                        }));
                        else if (i || "object" !== x(e)) n(t, e);
                        else
                            for (s in e) ke(t + "[" + s + "]", e[s], i, n)
                    }
                    C.param = function(t, e) {
                        var i, n = [],
                            s = function(t, e) {
                                var i = v(e) ? e() : e;
                                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                            };
                        if (null == t) return "";
                        if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, (function() {
                            s(this.name, this.value)
                        }));
                        else
                            for (i in t) ke(i, t[i], e, s);
                        return n.join("&")
                    }, C.fn.extend({
                        serialize: function() {
                            return C.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var t = C.prop(this, "elements");
                                return t ? C.makeArray(t) : this
                            })).filter((function() {
                                var t = this.type;
                                return this.name && !C(this).is(":disabled") && Le.test(this.nodeName) && !De.test(t) && (this.checked || !mt.test(t))
                            })).map((function(t, e) {
                                var i = C(this).val();
                                return null == i ? null : Array.isArray(i) ? C.map(i, (function(t) {
                                    return {
                                        name: e.name,
                                        value: t.replace(Ae, "\r\n")
                                    }
                                })) : {
                                    name: e.name,
                                    value: i.replace(Ae, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var Oe = /%20/g,
                        Ie = /#.*$/,
                        Ne = /([?&])_=[^&]*/,
                        je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        ze = /^(?:GET|HEAD)$/,
                        Pe = /^\/\//,
                        Me = {},
                        He = {},
                        $e = "*/".concat("*"),
                        Re = _.createElement("a");

                    function We(t) {
                        return function(e, i) {
                            "string" != typeof e && (i = e, e = "*");
                            var n, s = 0,
                                o = e.toLowerCase().match(H) || [];
                            if (v(i))
                                for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                        }
                    }

                    function qe(t, e, i, n) {
                        var s = {},
                            o = t === He;

                        function r(a) {
                            var l;
                            return s[a] = !0, C.each(t[a] || [], (function(t, a) {
                                var c = a(e, i, n);
                                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                            })), l
                        }
                        return r(e.dataTypes[0]) || !s["*"] && r("*")
                    }

                    function Be(t, e) {
                        var i, n, s = C.ajaxSettings.flatOptions || {};
                        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
                        return n && C.extend(!0, t, n), t
                    }
                    Re.href = Ee.href, C.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Ee.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ee.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": $e,
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
                                "text xml": C.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(t, e) {
                            return e ? Be(Be(t, C.ajaxSettings), e) : Be(C.ajaxSettings, t)
                        },
                        ajaxPrefilter: We(Me),
                        ajaxTransport: We(He),
                        ajax: function(t, e) {
                            "object" == typeof t && (e = t, t = void 0), e = e || {};
                            var i, s, o, r, a, l, c, h, u, d, p = C.ajaxSetup({}, e),
                                f = p.context || p,
                                g = p.context && (f.nodeType || f.jquery) ? C(f) : C.event,
                                m = C.Deferred(),
                                v = C.Callbacks("once memory"),
                                y = p.statusCode || {},
                                b = {},
                                w = {},
                                x = "canceled",
                                E = {
                                    readyState: 0,
                                    getResponseHeader: function(t) {
                                        var e;
                                        if (c) {
                                            if (!r)
                                                for (r = {}; e = je.exec(o);) r[e[1].toLowerCase() + " "] = (r[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                            e = r[t.toLowerCase() + " "]
                                        }
                                        return null == e ? null : e.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return c ? o : null
                                    },
                                    setRequestHeader: function(t, e) {
                                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this
                                    },
                                    overrideMimeType: function(t) {
                                        return null == c && (p.mimeType = t), this
                                    },
                                    statusCode: function(t) {
                                        var e;
                                        if (t)
                                            if (c) E.always(t[E.status]);
                                            else
                                                for (e in t) y[e] = [y[e], t[e]];
                                        return this
                                    },
                                    abort: function(t) {
                                        var e = t || x;
                                        return i && i.abort(e), T(0, e), this
                                    }
                                };
                            if (m.promise(E), p.url = ((t || p.url || Ee.href) + "").replace(Pe, Ee.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
                                l = _.createElement("a");
                                try {
                                    l.href = p.url, l.href = l.href, p.crossDomain = Re.protocol + "//" + Re.host != l.protocol + "//" + l.host
                                } catch (t) {
                                    p.crossDomain = !0
                                }
                            }
                            if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), qe(Me, p, e, E), c) return E;
                            for (u in (h = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ze.test(p.type), s = p.url.replace(Ie, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Oe, "+")) : (d = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (Te.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Ne, "$1"), d = (Te.test(s) ? "&" : "?") + "_=" + Ce.guid++ + d), p.url = s + d), p.ifModified && (C.lastModified[s] && E.setRequestHeader("If-Modified-Since", C.lastModified[s]), C.etag[s] && E.setRequestHeader("If-None-Match", C.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : p.accepts["*"]), p.headers) E.setRequestHeader(u, p.headers[u]);
                            if (p.beforeSend && (!1 === p.beforeSend.call(f, E, p) || c)) return E.abort();
                            if (x = "abort", v.add(p.complete), E.done(p.success), E.fail(p.error), i = qe(He, p, e, E)) {
                                if (E.readyState = 1, h && g.trigger("ajaxSend", [E, p]), c) return E;
                                p.async && p.timeout > 0 && (a = n.setTimeout((function() {
                                    E.abort("timeout")
                                }), p.timeout));
                                try {
                                    c = !1, i.send(b, T)
                                } catch (t) {
                                    if (c) throw t;
                                    T(-1, t)
                                }
                            } else T(-1, "No Transport");

                            function T(t, e, r, l) {
                                var u, d, _, b, w, x = e;
                                c || (c = !0, a && n.clearTimeout(a), i = void 0, o = l || "", E.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, r && (b = function(t, e, i) {
                                    for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                                    if (n)
                                        for (s in a)
                                            if (a[s] && a[s].test(n)) {
                                                l.unshift(s);
                                                break
                                            } if (l[0] in i) o = l[0];
                                    else {
                                        for (s in i) {
                                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                                o = s;
                                                break
                                            }
                                            r || (r = s)
                                        }
                                        o = o || r
                                    }
                                    if (o) return o !== l[0] && l.unshift(o), i[o]
                                }(p, E, r)), !u && C.inArray("script", p.dataTypes) > -1 && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), b = function(t, e, i, n) {
                                    var s, o, r, a, l, c = {},
                                        h = t.dataTypes.slice();
                                    if (h[1])
                                        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                                    for (o = h.shift(); o;)
                                        if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                        if (!(r = c[l + " " + o] || c["* " + o]))
                                            for (s in c)
                                                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], h.unshift(a[1]));
                                                    break
                                                } if (!0 !== r)
                                            if (r && t.throws) e = r(e);
                                            else try {
                                                e = r(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: r ? t : "No conversion from " + l + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: e
                                    }
                                }(p, b, E, u), u ? (p.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (C.lastModified[s] = w), (w = E.getResponseHeader("etag")) && (C.etag[s] = w)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, d = b.data, u = !(_ = b.error))) : (_ = x, !t && x || (x = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || x) + "", u ? m.resolveWith(f, [d, x, E]) : m.rejectWith(f, [E, x, _]), E.statusCode(y), y = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [E, p, u ? d : _]), v.fireWith(f, [E, x]), h && (g.trigger("ajaxComplete", [E, p]), --C.active || C.event.trigger("ajaxStop")))
                            }
                            return E
                        },
                        getJSON: function(t, e, i) {
                            return C.get(t, e, i, "json")
                        },
                        getScript: function(t, e) {
                            return C.get(t, void 0, e, "script")
                        }
                    }), C.each(["get", "post"], (function(t, e) {
                        C[e] = function(t, i, n, s) {
                            return v(i) && (s = s || n, n = i, i = void 0), C.ajax(C.extend({
                                url: t,
                                type: e,
                                dataType: s,
                                data: i,
                                success: n
                            }, C.isPlainObject(t) && t))
                        }
                    })), C.ajaxPrefilter((function(t) {
                        var e;
                        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
                    })), C._evalUrl = function(t, e, i) {
                        return C.ajax({
                            url: t,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(t) {
                                C.globalEval(t, e, i)
                            }
                        })
                    }, C.fn.extend({
                        wrapAll: function(t) {
                            var e;
                            return this[0] && (v(t) && (t = t.call(this[0])), e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                                return t
                            })).append(this)), this
                        },
                        wrapInner: function(t) {
                            return v(t) ? this.each((function(e) {
                                C(this).wrapInner(t.call(this, e))
                            })) : this.each((function() {
                                var e = C(this),
                                    i = e.contents();
                                i.length ? i.wrapAll(t) : e.append(t)
                            }))
                        },
                        wrap: function(t) {
                            var e = v(t);
                            return this.each((function(i) {
                                C(this).wrapAll(e ? t.call(this, i) : t)
                            }))
                        },
                        unwrap: function(t) {
                            return this.parent(t).not("body").each((function() {
                                C(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), C.expr.pseudos.hidden = function(t) {
                        return !C.expr.pseudos.visible(t)
                    }, C.expr.pseudos.visible = function(t) {
                        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                    }, C.ajaxSettings.xhr = function() {
                        try {
                            return new n.XMLHttpRequest
                        } catch (t) {}
                    };
                    var Fe = {
                            0: 200,
                            1223: 204
                        },
                        Ue = C.ajaxSettings.xhr();
                    m.cors = !!Ue && "withCredentials" in Ue, m.ajax = Ue = !!Ue, C.ajaxTransport((function(t) {
                        var e, i;
                        if (m.cors || Ue && !t.crossDomain) return {
                            send: function(s, o) {
                                var r, a = t.xhr();
                                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                                for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
                                e = function(t) {
                                    return function() {
                                        e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                                    4 === a.readyState && n.setTimeout((function() {
                                        e && i()
                                    }))
                                }, e = e("abort");
                                try {
                                    a.send(t.hasContent && t.data || null)
                                } catch (t) {
                                    if (e) throw t
                                }
                            },
                            abort: function() {
                                e && e()
                            }
                        }
                    })), C.ajaxPrefilter((function(t) {
                        t.crossDomain && (t.contents.script = !1)
                    })), C.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(t) {
                                return C.globalEval(t), t
                            }
                        }
                    }), C.ajaxPrefilter("script", (function(t) {
                        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                    })), C.ajaxTransport("script", (function(t) {
                        var e, i;
                        if (t.crossDomain || t.scriptAttrs) return {
                            send: function(n, s) {
                                e = C("<script>").attr(t.scriptAttrs || {}).prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", i = function(t) {
                                    e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                                }), _.head.appendChild(e[0])
                            },
                            abort: function() {
                                i && i()
                            }
                        }
                    }));
                    var Ve, Ye = [],
                        Qe = /(=)\?(?=&|$)|\?\?/;
                    C.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var t = Ye.pop() || C.expando + "_" + Ce.guid++;
                            return this[t] = !0, t
                        }
                    }), C.ajaxPrefilter("json jsonp", (function(t, e, i) {
                        var s, o, r, a = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
                        if (a || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qe, "$1" + s) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
                            return r || C.error(s + " was not called"), r[0]
                        }, t.dataTypes[0] = "json", o = n[s], n[s] = function() {
                            r = arguments
                        }, i.always((function() {
                            void 0 === o ? C(n).removeProp(s) : n[s] = o, t[s] && (t.jsonpCallback = e.jsonpCallback, Ye.push(s)), r && v(o) && o(r[0]), r = o = void 0
                        })), "script"
                    })), m.createHTMLDocument = ((Ve = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ve.childNodes.length), C.parseHTML = function(t, e, i) {
                        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (m.createHTMLDocument ? ((n = (e = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, e.head.appendChild(n)) : e = _), o = !i && [], (s = O.exec(t)) ? [e.createElement(s[1])] : (s = Et([t], e, o), o && o.length && C(o).remove(), C.merge([], s.childNodes)));
                        var n, s, o
                    }, C.fn.load = function(t, e, i) {
                        var n, s, o, r = this,
                            a = t.indexOf(" ");
                        return a > -1 && (n = ve(t.slice(a)), t = t.slice(0, a)), v(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && C.ajax({
                            url: t,
                            type: s || "GET",
                            dataType: "html",
                            data: e
                        }).done((function(t) {
                            o = arguments, r.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
                        })).always(i && function(t, e) {
                            r.each((function() {
                                i.apply(this, o || [t.responseText, e, t])
                            }))
                        }), this
                    }, C.expr.pseudos.animated = function(t) {
                        return C.grep(C.timers, (function(e) {
                            return t === e.elem
                        })).length
                    }, C.offset = {
                        setOffset: function(t, e, i) {
                            var n, s, o, r, a, l, c = C.css(t, "position"),
                                h = C(t),
                                u = {};
                            "static" === c && (t.style.position = "relative"), a = h.offset(), o = C.css(t, "top"), l = C.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (n = h.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), v(e) && (e = e.call(t, i, C.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : h.css(u)
                        }
                    }, C.fn.extend({
                        offset: function(t) {
                            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                                C.offset.setOffset(this, t, e)
                            }));
                            var e, i, n = this[0];
                            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                                top: e.top + i.pageYOffset,
                                left: e.left + i.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var t, e, i, n = this[0],
                                    s = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === C.css(n, "position")) e = n.getBoundingClientRect();
                                else {
                                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === C.css(t, "position");) t = t.parentNode;
                                    t && t !== n && 1 === t.nodeType && ((s = C(t).offset()).top += C.css(t, "borderTopWidth", !0), s.left += C.css(t, "borderLeftWidth", !0))
                                }
                                return {
                                    top: e.top - s.top - C.css(n, "marginTop", !0),
                                    left: e.left - s.left - C.css(n, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
                                return t || rt
                            }))
                        }
                    }), C.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(t, e) {
                        var i = "pageYOffset" === e;
                        C.fn[t] = function(n) {
                            return U(this, (function(t, n, s) {
                                var o;
                                if (y(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s) return o ? o[e] : t[n];
                                o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s
                            }), t, n, arguments.length)
                        }
                    })), C.each(["top", "left"], (function(t, e) {
                        C.cssHooks[e] = Ut(m.pixelPosition, (function(t, i) {
                            if (i) return i = Ft(t, e), Rt.test(i) ? C(t).position()[e] + "px" : i
                        }))
                    })), C.each({
                        Height: "height",
                        Width: "width"
                    }, (function(t, e) {
                        C.each({
                            padding: "inner" + t,
                            content: e,
                            "": "outer" + t
                        }, (function(i, n) {
                            C.fn[n] = function(s, o) {
                                var r = arguments.length && (i || "boolean" != typeof s),
                                    a = i || (!0 === s || !0 === o ? "margin" : "border");
                                return U(this, (function(e, i, s) {
                                    var o;
                                    return y(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? C.css(e, i, a) : C.style(e, i, s, a)
                                }), e, r ? s : void 0, r)
                            }
                        }))
                    })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                        C.fn[e] = function(t) {
                            return this.on(e, t)
                        }
                    })), C.fn.extend({
                        bind: function(t, e, i) {
                            return this.on(t, null, e, i)
                        },
                        unbind: function(t, e) {
                            return this.off(t, null, e)
                        },
                        delegate: function(t, e, i, n) {
                            return this.on(e, t, i, n)
                        },
                        undelegate: function(t, e, i) {
                            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                        },
                        hover: function(t, e) {
                            return this.mouseenter(t).mouseleave(e || t)
                        }
                    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
                        C.fn[e] = function(t, i) {
                            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                        }
                    }));
                    var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    C.proxy = function(t, e) {
                        var i, n, s;
                        if ("string" == typeof e && (i = t[e], e = t, t = i), v(t)) return n = a.call(arguments, 2), s = function() {
                            return t.apply(e || this, n.concat(a.call(arguments)))
                        }, s.guid = t.guid = t.guid || C.guid++, s
                    }, C.holdReady = function(t) {
                        t ? C.readyWait++ : C.ready(!0)
                    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = v, C.isWindow = y, C.camelCase = X, C.type = x, C.now = Date.now, C.isNumeric = function(t) {
                        var e = C.type(t);
                        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                    }, C.trim = function(t) {
                        return null == t ? "" : (t + "").replace(Xe, "")
                    }, void 0 === (i = function() {
                        return C
                    }.apply(e, [])) || (t.exports = i);
                    var Ge = n.jQuery,
                        Ke = n.$;
                    return C.noConflict = function(t) {
                        return n.$ === C && (n.$ = Ke), t && n.jQuery === C && (n.jQuery = Ge), C
                    }, void 0 === s && (n.jQuery = n.$ = C), C
                }))
            },
            9: (t, e, i) => {
                var n = i(878);
                ! function(t, e, i, s) {
                    function o(e, i) {
                        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                            time: null,
                            target: null,
                            pointer: null,
                            stage: {
                                start: null,
                                current: null
                            },
                            direction: null
                        }, this._states = {
                            current: {},
                            tags: {
                                initializing: ["busy"],
                                animating: ["busy"],
                                dragging: ["interacting"]
                            }
                        }, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, i) {
                            this._handlers[i] = t.proxy(this[i], this)
                        }), this)), t.each(o.Plugins, t.proxy((function(t, e) {
                            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
                        }), this)), t.each(o.Workers, t.proxy((function(e, i) {
                            this._pipe.push({
                                filter: i.filter,
                                run: t.proxy(i.run, this)
                            })
                        }), this)), this.setup(), this.initialize()
                    }
                    o.Defaults = {
                        items: 3,
                        loop: !1,
                        center: !1,
                        rewind: !1,
                        checkVisibility: !0,
                        mouseDrag: !0,
                        touchDrag: !0,
                        pullDrag: !0,
                        freeDrag: !1,
                        margin: 0,
                        stagePadding: 0,
                        merge: !1,
                        mergeFit: !0,
                        autoWidth: !1,
                        startPosition: 0,
                        rtl: !1,
                        smartSpeed: 250,
                        fluidSpeed: !1,
                        dragEndSpeed: !1,
                        responsive: {},
                        responsiveRefreshRate: 200,
                        responsiveBaseElement: e,
                        fallbackEasing: "swing",
                        slideTransition: "",
                        info: !1,
                        nestedItemSelector: !1,
                        itemElement: "div",
                        stageElement: "div",
                        refreshClass: "owl-refresh",
                        loadedClass: "owl-loaded",
                        loadingClass: "owl-loading",
                        rtlClass: "owl-rtl",
                        responsiveClass: "owl-responsive",
                        dragClass: "owl-drag",
                        itemClass: "owl-item",
                        stageClass: "owl-stage",
                        stageOuterClass: "owl-stage-outer",
                        grabClass: "owl-grab"
                    }, o.Width = {
                        Default: "default",
                        Inner: "inner",
                        Outer: "outer"
                    }, o.Type = {
                        Event: "event",
                        State: "state"
                    }, o.Plugins = {}, o.Workers = [{
                        filter: ["width", "settings"],
                        run: function() {
                            this._width = this.$element.width()
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(t) {
                            t.current = this._items && this._items[this.relative(this._current)]
                        }
                    }, {
                        filter: ["items", "settings"],
                        run: function() {
                            this.$stage.children(".cloned").remove()
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(t) {
                            var e = this.settings.margin || "",
                                i = !this.settings.autoWidth,
                                n = this.settings.rtl,
                                s = {
                                    width: "auto",
                                    "margin-left": n ? e : "",
                                    "margin-right": n ? "" : e
                                };
                            !i && this.$stage.children().css(s), t.css = s
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(t) {
                            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                                i = null,
                                n = this._items.length,
                                s = !this.settings.autoWidth,
                                o = [];
                            for (t.items = {
                                    merge: !1,
                                    width: e
                                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
                            this._widths = o
                        }
                    }, {
                        filter: ["items", "settings"],
                        run: function() {
                            var e = [],
                                i = this._items,
                                n = this.settings,
                                s = Math.max(2 * n.items, 4),
                                o = 2 * Math.ceil(i.length / 2),
                                r = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0,
                                a = "",
                                l = "";
                            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, r -= 1;
                            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function() {
                            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
                            this._coordinates = o
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function() {
                            var t = this.settings.stagePadding,
                                e = this._coordinates,
                                i = {
                                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                                    "padding-left": t || "",
                                    "padding-right": t || ""
                                };
                            this.$stage.css(i)
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(t) {
                            var e = this._coordinates.length,
                                i = !this.settings.autoWidth,
                                n = this.$stage.children();
                            if (i && t.items.merge)
                                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                            else i && (t.css.width = t.items.width, n.css(t.css))
                        }
                    }, {
                        filter: ["items"],
                        run: function() {
                            this._coordinates.length < 1 && this.$stage.removeAttr("style")
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(t) {
                            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
                        }
                    }, {
                        filter: ["position"],
                        run: function() {
                            this.animate(this.coordinates(this._current))
                        }
                    }, {
                        filter: ["width", "position", "items", "settings"],
                        run: function() {
                            var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                                o = 2 * this.settings.stagePadding,
                                r = this.coordinates(this.current()) + o,
                                a = r + this.width() * s,
                                l = [];
                            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
                        }
                    }], o.prototype.initializeStage = function() {
                        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
                            class: this.settings.stageClass
                        }).wrap(t("<div/>", {
                            class: this.settings.stageOuterClass
                        })), this.$element.append(this.$stage.parent()))
                    }, o.prototype.initializeItems = function() {
                        var e = this.$element.find(".owl-item");
                        if (e.length) return this._items = e.get().map((function(e) {
                            return t(e)
                        })), this._mergers = this._items.map((function() {
                            return 1
                        })), void this.refresh();
                        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
                    }, o.prototype.initialize = function() {
                        var t, e, i;
                        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
                    }, o.prototype.isVisible = function() {
                        return !this.settings.checkVisibility || this.$element.is(":visible")
                    }, o.prototype.setup = function() {
                        var e = this.viewport(),
                            i = this.options.responsive,
                            n = -1,
                            s = null;
                        i ? (t.each(i, (function(t) {
                            t <= e && t > n && (n = Number(t))
                        })), "function" == typeof(s = t.extend({}, this.options, i[n])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
                            property: {
                                name: "settings",
                                value: s
                            }
                        }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
                            property: {
                                name: "settings",
                                value: this.settings
                            }
                        })
                    }, o.prototype.optionsLogic = function() {
                        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
                    }, o.prototype.prepare = function(e) {
                        var i = this.trigger("prepare", {
                            content: e
                        });
                        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                            content: i.data
                        }), i.data
                    }, o.prototype.update = function() {
                        for (var e = 0, i = this._pipe.length, n = t.proxy((function(t) {
                                return this[t]
                            }), this._invalidated), s = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
                        this._invalidated = {}, !this.is("valid") && this.enter("valid")
                    }, o.prototype.width = function(t) {
                        switch (t = t || o.Width.Default) {
                            case o.Width.Inner:
                            case o.Width.Outer:
                                return this._width;
                            default:
                                return this._width - 2 * this.settings.stagePadding + this.settings.margin
                        }
                    }, o.prototype.refresh = function() {
                        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
                    }, o.prototype.onThrottledResize = function() {
                        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
                    }, o.prototype.onResize = function() {
                        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                    }, o.prototype.registerEventHandlers = function() {
                        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
                            return !1
                        }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
                    }, o.prototype.onDragStart = function(e) {
                        var n = null;
                        3 !== e.which && (t.support.transform ? n = {
                            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
                            y: n[16 === n.length ? 13 : 5]
                        } : (n = this.$stage.position(), n = {
                            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                            y: n.top
                        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
                            var n = this.difference(this._drag.pointer, this.pointer(e));
                            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                        }), this)))
                    }, o.prototype.onDragMove = function(t) {
                        var e = null,
                            i = null,
                            n = null,
                            s = this.difference(this._drag.pointer, this.pointer(t)),
                            o = this.difference(this._drag.stage.start, s);
                        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
                    }, o.prototype.onDragEnd = function(e) {
                        var n = this.difference(this._drag.pointer, this.pointer(e)),
                            s = this._drag.stage.current,
                            o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
                        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
                            return !1
                        }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
                    }, o.prototype.closest = function(e, i) {
                        var n = -1,
                            o = this.width(),
                            r = this.coordinates();
                        return this.settings.freeDrag || t.each(r, t.proxy((function(t, a) {
                            return "left" === i && e > a - 30 && e < a + 30 ? n = t : "right" === i && e > a - o - 30 && e < a - o + 30 ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== s ? r[t + 1] : a - o) && (n = "left" === i ? t + 1 : t), -1 === n
                        }), this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
                    }, o.prototype.animate = function(e) {
                        var i = this.speed() > 0;
                        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                            transform: "translate3d(" + e + "px,0px,0px)",
                            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
                        }) : i ? this.$stage.animate({
                            left: e + "px"
                        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                            left: e + "px"
                        })
                    }, o.prototype.is = function(t) {
                        return this._states.current[t] && this._states.current[t] > 0
                    }, o.prototype.current = function(t) {
                        if (t === s) return this._current;
                        if (0 === this._items.length) return s;
                        if (t = this.normalize(t), this._current !== t) {
                            var e = this.trigger("change", {
                                property: {
                                    name: "position",
                                    value: t
                                }
                            });
                            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                                property: {
                                    name: "position",
                                    value: this._current
                                }
                            })
                        }
                        return this._current
                    }, o.prototype.invalidate = function(e) {
                        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(t, e) {
                            return e
                        }))
                    }, o.prototype.reset = function(t) {
                        (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
                    }, o.prototype.normalize = function(t, e) {
                        var i = this._items.length,
                            n = e ? 0 : this._clones.length;
                        return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
                    }, o.prototype.relative = function(t) {
                        return t -= this._clones.length / 2, this.normalize(t, !0)
                    }, o.prototype.maximum = function(t) {
                        var e, i, n, s = this.settings,
                            o = this._coordinates.length;
                        if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
                        else if (s.autoWidth || s.merge) {
                            if (e = this._items.length)
                                for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
                            o = e + 1
                        } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
                        return t && (o -= this._clones.length / 2), Math.max(o, 0)
                    }, o.prototype.minimum = function(t) {
                        return t ? 0 : this._clones.length / 2
                    }, o.prototype.items = function(t) {
                        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
                    }, o.prototype.mergers = function(t) {
                        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
                    }, o.prototype.clones = function(e) {
                        var i = this._clones.length / 2,
                            n = i + this._items.length,
                            o = function(t) {
                                return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
                            };
                        return e === s ? t.map(this._clones, (function(t, e) {
                            return o(e)
                        })) : t.map(this._clones, (function(t, i) {
                            return t === e ? o(i) : null
                        }))
                    }, o.prototype.speed = function(t) {
                        return t !== s && (this._speed = t), this._speed
                    }, o.prototype.coordinates = function(e) {
                        var i, n = 1,
                            o = e - 1;
                        return e === s ? t.map(this._coordinates, t.proxy((function(t, e) {
                            return this.coordinates(e)
                        }), this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
                    }, o.prototype.duration = function(t, e, i) {
                        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
                    }, o.prototype.to = function(t, e) {
                        var i = this.current(),
                            n = null,
                            s = t - this.relative(i),
                            o = (s > 0) - (s < 0),
                            r = this._items.length,
                            a = this.minimum(),
                            l = this.maximum();
                        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), (n = (((t = i + s) - a) % r + r) % r + a) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
                    }, o.prototype.next = function(t) {
                        t = t || !1, this.to(this.relative(this.current()) + 1, t)
                    }, o.prototype.prev = function(t) {
                        t = t || !1, this.to(this.relative(this.current()) - 1, t)
                    }, o.prototype.onTransitionEnd = function(t) {
                        if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                        this.leave("animating"), this.trigger("translated")
                    }, o.prototype.viewport = function() {
                        var n;
                        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
                    }, o.prototype.replace = function(e) {
                        this.$stage.empty(), this._items = [], e && (e = e instanceof n ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() {
                            return 1 === this.nodeType
                        })).each(t.proxy((function(t, e) {
                            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                        }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
                    }, o.prototype.add = function(e, i) {
                        var o = this.relative(this._current);
                        i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof n ? e : t(e), this.trigger("add", {
                            content: e,
                            position: i
                        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
                            content: e,
                            position: i
                        })
                    }, o.prototype.remove = function(t) {
                        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
                            content: this._items[t],
                            position: t
                        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                            content: null,
                            position: t
                        }))
                    }, o.prototype.preloadAutoWidthImages = function(e) {
                        e.each(t.proxy((function(e, i) {
                            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy((function(t) {
                                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                            }), this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
                        }), this))
                    }, o.prototype.destroy = function() {
                        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
                        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
                    }, o.prototype.op = function(t, e, i) {
                        var n = this.settings.rtl;
                        switch (e) {
                            case "<":
                                return n ? t > i : t < i;
                            case ">":
                                return n ? t < i : t > i;
                            case ">=":
                                return n ? t <= i : t >= i;
                            case "<=":
                                return n ? t >= i : t <= i
                        }
                    }, o.prototype.on = function(t, e, i, n) {
                        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
                    }, o.prototype.off = function(t, e, i, n) {
                        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
                    }, o.prototype.trigger = function(e, i, n, s, r) {
                        var a = {
                                item: {
                                    count: this._items.length,
                                    index: this.current()
                                }
                            },
                            l = t.camelCase(t.grep(["on", e, n], (function(t) {
                                return t
                            })).join("-").toLowerCase()),
                            c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                                relatedTarget: this
                            }, a, i));
                        return this._supress[e] || (t.each(this._plugins, (function(t, e) {
                            e.onTrigger && e.onTrigger(c)
                        })), this.register({
                            type: o.Type.Event,
                            name: e
                        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
                    }, o.prototype.enter = function(e) {
                        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
                            this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++
                        }), this))
                    }, o.prototype.leave = function(e) {
                        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
                            this._states.current[e]--
                        }), this))
                    }, o.prototype.register = function(e) {
                        if (e.type === o.Type.Event) {
                            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                                var i = t.event.special[e.name]._default;
                                t.event.special[e.name]._default = function(t) {
                                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                                }, t.event.special[e.name].owl = !0
                            }
                        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(i, n) {
                            return t.inArray(i, this._states.tags[e.name]) === n
                        }), this)))
                    }, o.prototype.suppress = function(e) {
                        t.each(e, t.proxy((function(t, e) {
                            this._supress[e] = !0
                        }), this))
                    }, o.prototype.release = function(e) {
                        t.each(e, t.proxy((function(t, e) {
                            delete this._supress[e]
                        }), this))
                    }, o.prototype.pointer = function(t) {
                        var i = {
                            x: null,
                            y: null
                        };
                        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
                    }, o.prototype.isNumeric = function(t) {
                        return !isNaN(parseFloat(t))
                    }, o.prototype.difference = function(t, e) {
                        return {
                            x: t.x - e.x,
                            y: t.y - e.y
                        }
                    }, t.fn.owlCarousel = function(e) {
                        var i = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            var n = t(this),
                                s = n.data("owl.carousel");
                            s || (s = new o(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, i) {
                                s.register({
                                    type: o.Type.Event,
                                    name: i
                                }), s.$element.on(i + ".owl.carousel.core", t.proxy((function(t) {
                                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                                }), s))
                            }))), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
                        }))
                    }, t.fn.owlCarousel.Constructor = o
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    var s = function(e) {
                        this._core = e, this._interval = null, this._visible = null, this._handlers = {
                            "initialized.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.settings.autoRefresh && this.watch()
                            }), this)
                        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
                    };
                    s.Defaults = {
                        autoRefresh: !0,
                        autoRefreshInterval: 500
                    }, s.prototype.watch = function() {
                        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
                    }, s.prototype.refresh = function() {
                        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
                    }, s.prototype.destroy = function() {
                        var t, i;
                        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
                        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    var s = function(e) {
                        this._core = e, this._loaded = [], this._handlers = {
                            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function(e) {
                                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                                    var i = this._core.settings,
                                        n = i.center && Math.ceil(i.items / 2) || i.items,
                                        s = i.center && -1 * n || 0,
                                        o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s,
                                        r = this._core.clones().length,
                                        a = t.proxy((function(t, e) {
                                            this.load(e)
                                        }), this);
                                    for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, n++)); s++ < n;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
                                }
                            }), this)
                        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
                    };
                    s.Defaults = {
                        lazyLoad: !1,
                        lazyLoadEager: 0
                    }, s.prototype.load = function(i) {
                        var n = this._core.$stage.children().eq(i),
                            s = n && n.find(".owl-lazy");
                        !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy((function(i, n) {
                            var s, o = t(n),
                                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
                            this._core.trigger("load", {
                                element: o,
                                url: r
                            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy((function() {
                                o.css("opacity", 1), this._core.trigger("loaded", {
                                    element: o,
                                    url: r
                                }, "lazy")
                            }), this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy((function() {
                                this._core.trigger("loaded", {
                                    element: o,
                                    url: r
                                }, "lazy")
                            }), this)).attr("srcset", r) : ((s = new Image).onload = t.proxy((function() {
                                o.css({
                                    "background-image": 'url("' + r + '")',
                                    opacity: "1"
                                }), this._core.trigger("loaded", {
                                    element: o,
                                    url: r
                                }, "lazy")
                            }), this), s.src = r)
                        }), this)), this._loaded.push(n.get(0)))
                    }, s.prototype.destroy = function() {
                        var t, e;
                        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    var s = function(i) {
                        this._core = i, this._previousHeight = null, this._handlers = {
                            "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.settings.autoHeight && this.update()
                            }), this),
                            "changed.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                            }), this),
                            "loaded.owl.lazy": t.proxy((function(t) {
                                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                            }), this)
                        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
                        var n = this;
                        t(e).on("load", (function() {
                            n._core.settings.autoHeight && n.update()
                        })), t(e).resize((function() {
                            n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout((function() {
                                n.update()
                            }), 250))
                        }))
                    };
                    s.Defaults = {
                        autoHeight: !1,
                        autoHeightClass: "owl-height"
                    }, s.prototype.update = function() {
                        var e = this._core._current,
                            i = e + this._core.settings.items,
                            n = this._core.settings.lazyLoad,
                            s = this._core.$stage.children().toArray().slice(e, i),
                            o = [],
                            r = 0;
                        t.each(s, (function(e, i) {
                            o.push(t(i).height())
                        })), (r = Math.max.apply(null, o)) <= 1 && n && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
                    }, s.prototype.destroy = function() {
                        var t, e;
                        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    var s = function(e) {
                        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                            "initialized.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.register({
                                    type: "state",
                                    name: "playing",
                                    tags: ["interacting"]
                                })
                            }), this),
                            "resize.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                            }), this),
                            "refreshed.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                            }), this),
                            "changed.owl.carousel": t.proxy((function(t) {
                                t.namespace && "position" === t.property.name && this._playing && this.stop()
                            }), this),
                            "prepared.owl.carousel": t.proxy((function(e) {
                                if (e.namespace) {
                                    var i = t(e.content).find(".owl-video");
                                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                                }
                            }), this)
                        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function(t) {
                            this.play(t)
                        }), this))
                    };
                    s.Defaults = {
                        video: !1,
                        videoHeight: !1,
                        videoWidth: !1
                    }, s.prototype.fetch = function(t, e) {
                        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                            s = t.attr("data-width") || this._core.settings.videoWidth,
                            o = t.attr("data-height") || this._core.settings.videoHeight,
                            r = t.attr("href");
                        if (!r) throw new Error("Missing video URL.");
                        if ((n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
                        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
                        else {
                            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                            i = "vzaar"
                        }
                        n = n[6], this._videos[r] = {
                            type: i,
                            id: n,
                            width: s,
                            height: o
                        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
                    }, s.prototype.thumbnail = function(e, i) {
                        var n, s, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                            r = e.find("img"),
                            a = "src",
                            l = "",
                            c = this._core.settings,
                            h = function(i) {
                                n = c.lazyLoad ? t("<div/>", {
                                    class: "owl-video-tn " + l,
                                    srcType: i
                                }) : t("<div/>", {
                                    class: "owl-video-tn",
                                    style: "opacity:1;background-image:url(" + i + ")"
                                }), e.after(n), e.after('<div class="owl-video-play-icon"></div>')
                            };
                        if (e.wrap(t("<div/>", {
                                class: "owl-video-wrapper",
                                style: o
                            })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length) return h(r.attr(a)), r.remove(), !1;
                        "youtube" === i.type ? (s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(s)) : "vimeo" === i.type ? t.ajax({
                            type: "GET",
                            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                            jsonp: "callback",
                            dataType: "jsonp",
                            success: function(t) {
                                s = t[0].thumbnail_large, h(s)
                            }
                        }) : "vzaar" === i.type && t.ajax({
                            type: "GET",
                            url: "//vzaar.com/api/videos/" + i.id + ".json",
                            jsonp: "callback",
                            dataType: "jsonp",
                            success: function(t) {
                                s = t.framegrab_url, h(s)
                            }
                        })
                    }, s.prototype.stop = function() {
                        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
                    }, s.prototype.play = function(e) {
                        var i, n = t(e.target).closest("." + this._core.settings.itemClass),
                            s = this._videos[n.attr("data-video")],
                            o = s.width || "100%",
                            r = s.height || this._core.$stage.height();
                        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", o), "youtube" === s.type ? i.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && i.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
                    }, s.prototype.isInFullScreen = function() {
                        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
                        return e && t(e).parent().hasClass("owl-video-frame")
                    }, s.prototype.destroy = function() {
                        var t, e;
                        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
                        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    var s = function(e) {
                        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                            "change.owl.carousel": t.proxy((function(t) {
                                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                            }), this),
                            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function(t) {
                                t.namespace && (this.swapping = "translated" == t.type)
                            }), this),
                            "translate.owl.carousel": t.proxy((function(t) {
                                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                            }), this)
                        }, this.core.$element.on(this.handlers)
                    };
                    s.Defaults = {
                        animateOut: !1,
                        animateIn: !1
                    }, s.prototype.swap = function() {
                        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                            this.core.speed(0);
                            var e, i = t.proxy(this.clear, this),
                                n = this.core.$stage.children().eq(this.previous),
                                s = this.core.$stage.children().eq(this.next),
                                o = this.core.settings.animateIn,
                                r = this.core.settings.animateOut;
                            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                                left: e + "px"
                            }).addClass("animated owl-animated-out").addClass(r)), o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
                        }
                    }, s.prototype.clear = function(e) {
                        t(e.target).css({
                            left: ""
                        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
                    }, s.prototype.destroy = function() {
                        var t, e;
                        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    var s = function(e) {
                        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                            "changed.owl.carousel": t.proxy((function(t) {
                                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                            }), this),
                            "initialized.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.settings.autoplay && this.play()
                            }), this),
                            "play.owl.autoplay": t.proxy((function(t, e, i) {
                                t.namespace && this.play(e, i)
                            }), this),
                            "stop.owl.autoplay": t.proxy((function(t) {
                                t.namespace && this.stop()
                            }), this),
                            "mouseover.owl.autoplay": t.proxy((function() {
                                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                            }), this),
                            "mouseleave.owl.autoplay": t.proxy((function() {
                                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                            }), this),
                            "touchstart.owl.core": t.proxy((function() {
                                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                            }), this),
                            "touchend.owl.core": t.proxy((function() {
                                this._core.settings.autoplayHoverPause && this.play()
                            }), this)
                        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
                    };
                    s.Defaults = {
                        autoplay: !1,
                        autoplayTimeout: 5e3,
                        autoplayHoverPause: !1,
                        autoplaySpeed: !1
                    }, s.prototype._next = function(n) {
                        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
                    }, s.prototype.read = function() {
                        return (new Date).getTime() - this._time
                    }, s.prototype.play = function(i, n) {
                        var s;
                        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - s, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - s)
                    }, s.prototype.stop = function() {
                        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
                    }, s.prototype.pause = function() {
                        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
                    }, s.prototype.destroy = function() {
                        var t, e;
                        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
                        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    "use strict";
                    var s = function(e) {
                        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                            next: this._core.next,
                            prev: this._core.prev,
                            to: this._core.to
                        }, this._handlers = {
                            "prepared.owl.carousel": t.proxy((function(e) {
                                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                            }), this),
                            "added.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                            }), this),
                            "remove.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                            }), this),
                            "changed.owl.carousel": t.proxy((function(t) {
                                t.namespace && "position" == t.property.name && this.draw()
                            }), this),
                            "initialized.owl.carousel": t.proxy((function(t) {
                                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                            }), this),
                            "refreshed.owl.carousel": t.proxy((function(t) {
                                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                            }), this)
                        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
                    };
                    s.Defaults = {
                        nav: !1,
                        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                        navSpeed: !1,
                        navElement: 'button type="button" role="presentation"',
                        navContainer: !1,
                        navContainerClass: "owl-nav",
                        navClass: ["owl-prev", "owl-next"],
                        slideBy: 1,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        dots: !0,
                        dotsEach: !1,
                        dotsData: !1,
                        dotsSpeed: !1,
                        dotsContainer: !1
                    }, s.prototype.initialize = function() {
                        var e, i = this._core.settings;
                        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function(t) {
                                this.prev(i.navSpeed)
                            }), this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function(t) {
                                this.next(i.navSpeed)
                            }), this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function(e) {
                                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                                e.preventDefault(), this.to(n, i.dotsSpeed)
                            }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
                    }, s.prototype.destroy = function() {
                        var t, e, i, n, s;
                        for (t in s = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
                        for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                        for (n in this.overides) this._core[n] = this._overrides[n];
                        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                    }, s.prototype.update = function() {
                        var t, e, i = this._core.clones().length / 2,
                            n = i + this._core.items().length,
                            s = this._core.maximum(!0),
                            o = this._core.settings,
                            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                            for (this._pages = [], t = i, e = 0; t < n; t++) {
                                if (e >= r || 0 === e) {
                                    if (this._pages.push({
                                            start: Math.min(s, t - i),
                                            end: t - i + r - 1
                                        }), Math.min(s, t - i) === s) break;
                                    e = 0
                                }
                                e += this._core.mergers(this._core.relative(t))
                            }
                    }, s.prototype.draw = function() {
                        var e, i = this._core.settings,
                            n = this._core.items().length <= i.items,
                            s = this._core.relative(this._core.current()),
                            o = i.loop || i.rewind;
                        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
                    }, s.prototype.onTrigger = function(e) {
                        var i = this._core.settings;
                        e.page = {
                            index: t.inArray(this.current(), this._pages),
                            count: this._pages.length,
                            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
                        }
                    }, s.prototype.current = function() {
                        var e = this._core.relative(this._core.current());
                        return t.grep(this._pages, t.proxy((function(t, i) {
                            return t.start <= e && t.end >= e
                        }), this)).pop()
                    }, s.prototype.getPosition = function(e) {
                        var i, n, s = this._core.settings;
                        return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
                    }, s.prototype.next = function(e) {
                        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
                    }, s.prototype.prev = function(e) {
                        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
                    }, s.prototype.to = function(e, i, n) {
                        var s;
                        !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
                    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    "use strict";
                    var s = function(i) {
                        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                            "initialized.owl.carousel": t.proxy((function(i) {
                                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                            }), this),
                            "prepared.owl.carousel": t.proxy((function(e) {
                                if (e.namespace) {
                                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                    if (!i) return;
                                    this._hashes[i] = e.content
                                }
                            }), this),
                            "changed.owl.carousel": t.proxy((function(i) {
                                if (i.namespace && "position" === i.property.name) {
                                    var n = this._core.items(this._core.relative(this._core.current())),
                                        s = t.map(this._hashes, (function(t, e) {
                                            return t === n ? e : null
                                        })).join();
                                    if (!s || e.location.hash.slice(1) === s) return;
                                    e.location.hash = s
                                }
                            }), this)
                        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function(t) {
                            var i = e.location.hash.substring(1),
                                n = this._core.$stage.children(),
                                s = this._hashes[i] && n.index(this._hashes[i]);
                            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
                        }), this))
                    };
                    s.Defaults = {
                        URLhashListener: !1
                    }, s.prototype.destroy = function() {
                        var i, n;
                        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
                        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
                }(window.Zepto || window.jQuery, window, document),
                function(t, e, i, n) {
                    var s = t("<support>").get(0).style,
                        o = "Webkit Moz O ms".split(" "),
                        r = {
                            transition: {
                                end: {
                                    WebkitTransition: "webkitTransitionEnd",
                                    MozTransition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    transition: "transitionend"
                                }
                            },
                            animation: {
                                end: {
                                    WebkitAnimation: "webkitAnimationEnd",
                                    MozAnimation: "animationend",
                                    OAnimation: "oAnimationEnd",
                                    animation: "animationend"
                                }
                            }
                        };

                    function a(e, i) {
                        var n = !1,
                            r = e.charAt(0).toUpperCase() + e.slice(1);
                        return t.each((e + " " + o.join(r + " ") + r).split(" "), (function(t, e) {
                            if (void 0 !== s[e]) return n = !i || e, !1
                        })), n
                    }

                    function l(t) {
                        return a(t, !0)
                    }!!a("transition") && (t.support.transition = new String(l("transition")), t.support.transition.end = r.transition.end[t.support.transition]), !!a("animation") && (t.support.animation = new String(l("animation")), t.support.animation.end = r.animation.end[t.support.animation]), a("transform") && (t.support.transform = new String(l("transform")), t.support.transform3d = !!a("perspective"))
                }(window.Zepto || window.jQuery, window, document)
            },
            135: function(t, e, i) {
                var n, s, o, r, a, l, c, h, u, d, p, f, g, m, v, y, _, b, w, x, E, C, T, S, A, D, L, k, O, I, N, j, z, P, M, H, $;
                $ = window, M = [i(878)], H = function(t) {
                        return function(t, e) {
                            "use strict";

                            function i(i, o, a) {
                                function l(t, e, n) {
                                    var s, o = "$()." + i + '("' + e + '")';
                                    return t.each((function(t, l) {
                                        var c = a.data(l, i);
                                        if (c) {
                                            var h = c[e];
                                            if (h && "_" != e.charAt(0)) {
                                                var u = h.apply(c, n);
                                                s = void 0 === s ? u : s
                                            } else r(o + " is not a valid method")
                                        } else r(i + " not initialized. Cannot call methods, i.e. " + o)
                                    })), void 0 !== s ? s : t
                                }

                                function c(t, e) {
                                    t.each((function(t, n) {
                                        var s = a.data(n, i);
                                        s ? (s.option(e), s._init()) : (s = new o(n, e), a.data(n, i, s))
                                    }))
                                }(a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
                                    a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
                                }), a.fn[i] = function(t) {
                                    return "string" == typeof t ? l(this, t, s.call(arguments, 1)) : (c(this, t), this)
                                }, n(a))
                            }

                            function n(t) {
                                !t || t && t.bridget || (t.bridget = i)
                            }
                            var s = Array.prototype.slice,
                                o = t.console,
                                r = void 0 === o ? function() {} : function(t) {
                                    o.error(t)
                                };
                            return n(e || t.jQuery), i
                        }($, t)
                    }.apply(e, M), void 0 === H || (t.exports = H), "undefined" != typeof window && window, s = function() {
                        function t() {}
                        var e = t.prototype;
                        return e.on = function(t, e) {
                            if (t && e) {
                                var i = this._events = this._events || {},
                                    n = i[t] = i[t] || [];
                                return -1 == n.indexOf(e) && n.push(e), this
                            }
                        }, e.once = function(t, e) {
                            if (t && e) {
                                this.on(t, e);
                                var i = this._onceEvents = this._onceEvents || {};
                                return (i[t] = i[t] || {})[e] = !0, this
                            }
                        }, e.off = function(t, e) {
                            var i = this._events && this._events[t];
                            if (i && i.length) {
                                var n = i.indexOf(e);
                                return -1 != n && i.splice(n, 1), this
                            }
                        }, e.emitEvent = function(t, e) {
                            var i = this._events && this._events[t];
                            if (i && i.length) {
                                i = i.slice(0), e = e || [];
                                for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                                    var o = i[s];
                                    n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
                                }
                                return this
                            }
                        }, e.allOff = function() {
                            delete this._events, delete this._onceEvents
                        }, t
                    }, n = s.call((o = {
                        id: "ev-emitter/ev-emitter",
                        exports: {},
                        loaded: !1
                    }).exports, i, o.exports, o), o.loaded = !0, void 0 === n && (n = o.exports), window, a = function() {
                        "use strict";

                        function t(t) {
                            var e = parseFloat(t);
                            return -1 == t.indexOf("%") && !isNaN(e) && e
                        }

                        function e(t) {
                            var e = getComputedStyle(t);
                            return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
                        }

                        function i() {
                            if (!l) {
                                l = !0;
                                var i = document.createElement("div");
                                i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
                                var o = document.body || document.documentElement;
                                o.appendChild(i);
                                var r = e(i);
                                s = 200 == Math.round(t(r.width)), n.isBoxSizeOuter = s, o.removeChild(i)
                            }
                        }

                        function n(n) {
                            if (i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
                                var o = e(n);
                                if ("none" == o.display) return function() {
                                    for (var t = {
                                            width: 0,
                                            height: 0,
                                            innerWidth: 0,
                                            innerHeight: 0,
                                            outerWidth: 0,
                                            outerHeight: 0
                                        }, e = 0; e < a; e++) t[r[e]] = 0;
                                    return t
                                }();
                                var l = {};
                                l.width = n.offsetWidth, l.height = n.offsetHeight;
                                for (var c = l.isBorderBox = "border-box" == o.boxSizing, h = 0; h < a; h++) {
                                    var u = r[h],
                                        d = o[u],
                                        p = parseFloat(d);
                                    l[u] = isNaN(p) ? 0 : p
                                }
                                var f = l.paddingLeft + l.paddingRight,
                                    g = l.paddingTop + l.paddingBottom,
                                    m = l.marginLeft + l.marginRight,
                                    v = l.marginTop + l.marginBottom,
                                    y = l.borderLeftWidth + l.borderRightWidth,
                                    _ = l.borderTopWidth + l.borderBottomWidth,
                                    b = c && s,
                                    w = t(o.width);
                                !1 !== w && (l.width = w + (b ? 0 : f + y));
                                var x = t(o.height);
                                return !1 !== x && (l.height = x + (b ? 0 : g + _)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (g + _), l.outerWidth = l.width + m, l.outerHeight = l.height + v, l
                            }
                        }
                        var s, o = "undefined" == typeof console ? function() {} : function(t) {
                                console.error(t)
                            },
                            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                            a = r.length,
                            l = !1;
                        return n
                    }, r = a.call((l = {
                        id: "get-size/get-size",
                        exports: {},
                        loaded: !1
                    }).exports, i, l.exports, l), l.loaded = !0, void 0 === r && (r = l.exports),
                    function(t, e) {
                        "use strict";
                        h = function() {
                            var t = function() {
                                var t = window.Element.prototype;
                                if (t.matches) return "matches";
                                if (t.matchesSelector) return "matchesSelector";
                                for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                                    var n = e[i] + "MatchesSelector";
                                    if (t[n]) return n
                                }
                            }();
                            return function(e, i) {
                                return e[t](i)
                            }
                        }, c = h.call((u = {
                            id: "desandro-matches-selector/matches-selector",
                            exports: {},
                            loaded: !1
                        }).exports, i, u.exports, u), u.loaded = !0, void 0 === c && (c = u.exports)
                    }(window),
                    function(t, e) {
                        d = function(e) {
                            return function(t, e) {
                                var i = {
                                        extend: function(t, e) {
                                            for (var i in e) t[i] = e[i];
                                            return t
                                        },
                                        modulo: function(t, e) {
                                            return (t % e + e) % e
                                        }
                                    },
                                    n = Array.prototype.slice;
                                i.makeArray = function(t) {
                                    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
                                }, i.removeFrom = function(t, e) {
                                    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
                                }, i.getParent = function(t, i) {
                                    for (; t.parentNode && t != document.body;)
                                        if (t = t.parentNode, e(t, i)) return t
                                }, i.getQueryElement = function(t) {
                                    return "string" == typeof t ? document.querySelector(t) : t
                                }, i.handleEvent = function(t) {
                                    var e = "on" + t.type;
                                    this[e] && this[e](t)
                                }, i.filterFindElements = function(t, n) {
                                    t = i.makeArray(t);
                                    var s = [];
                                    return t.forEach((function(t) {
                                        if (t instanceof HTMLElement) {
                                            if (!n) return void s.push(t);
                                            e(t, n) && s.push(t);
                                            for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o])
                                        }
                                    })), s
                                }, i.debounceMethod = function(t, e, i) {
                                    i = i || 100;
                                    var n = t.prototype[e],
                                        s = e + "Timeout";
                                    t.prototype[e] = function() {
                                        var t = this[s];
                                        clearTimeout(t);
                                        var e = arguments,
                                            o = this;
                                        this[s] = setTimeout((function() {
                                            n.apply(o, e), delete o[s]
                                        }), i)
                                    }
                                }, i.docReady = function(t) {
                                    var e = document.readyState;
                                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                                }, i.toDashed = function(t) {
                                    return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                                        return e + "-" + i
                                    })).toLowerCase()
                                };
                                var s = t.console;
                                return i.htmlInit = function(e, n) {
                                    i.docReady((function() {
                                        var o = i.toDashed(n),
                                            r = "data-" + o,
                                            a = document.querySelectorAll("[" + r + "]"),
                                            l = document.querySelectorAll(".js-" + o),
                                            c = i.makeArray(a).concat(i.makeArray(l)),
                                            h = r + "-options",
                                            u = t.jQuery;
                                        c.forEach((function(t) {
                                            var i, o = t.getAttribute(r) || t.getAttribute(h);
                                            try {
                                                i = o && JSON.parse(o)
                                            } catch (e) {
                                                return void(s && s.error("Error parsing " + r + " on " + t.className + ": " + e))
                                            }
                                            var a = new e(t, i);
                                            u && u.data(t, n, a)
                                        }))
                                    }))
                                }, i
                            }(t, e)
                        }.apply(p = {}, M = [c]), void 0 !== d || (d = p)
                    }(window), window, f = function(t, e) {
                        "use strict";

                        function i(t, e) {
                            t && (this.element = t, this.layout = e, this.position = {
                                x: 0,
                                y: 0
                            }, this._create())
                        }
                        var n = document.documentElement.style,
                            s = "string" == typeof n.transition ? "transition" : "WebkitTransition",
                            o = "string" == typeof n.transform ? "transform" : "WebkitTransform",
                            r = {
                                WebkitTransition: "webkitTransitionEnd",
                                transition: "transitionend"
                            } [s],
                            a = {
                                transform: o,
                                transition: s,
                                transitionDuration: s + "Duration",
                                transitionProperty: s + "Property",
                                transitionDelay: s + "Delay"
                            },
                            l = i.prototype = Object.create(t.prototype);
                        l.constructor = i, l._create = function() {
                            this._transn = {
                                ingProperties: {},
                                clean: {},
                                onEnd: {}
                            }, this.css({
                                position: "absolute"
                            })
                        }, l.handleEvent = function(t) {
                            var e = "on" + t.type;
                            this[e] && this[e](t)
                        }, l.getSize = function() {
                            this.size = e(this.element)
                        }, l.css = function(t) {
                            var e = this.element.style;
                            for (var i in t) e[a[i] || i] = t[i]
                        }, l.getPosition = function() {
                            var t = getComputedStyle(this.element),
                                e = this.layout._getOption("originLeft"),
                                i = this.layout._getOption("originTop"),
                                n = t[e ? "left" : "right"],
                                s = t[i ? "top" : "bottom"],
                                o = parseFloat(n),
                                r = parseFloat(s),
                                a = this.layout.size; - 1 != n.indexOf("%") && (o = o / 100 * a.width), -1 != s.indexOf("%") && (r = r / 100 * a.height), o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r, o -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
                        }, l.layoutPosition = function() {
                            var t = this.layout.size,
                                e = {},
                                i = this.layout._getOption("originLeft"),
                                n = this.layout._getOption("originTop"),
                                s = i ? "paddingLeft" : "paddingRight",
                                o = i ? "left" : "right",
                                r = i ? "right" : "left",
                                a = this.position.x + t[s];
                            e[o] = this.getXValue(a), e[r] = "";
                            var l = n ? "paddingTop" : "paddingBottom",
                                c = n ? "top" : "bottom",
                                h = n ? "bottom" : "top",
                                u = this.position.y + t[l];
                            e[c] = this.getYValue(u), e[h] = "", this.css(e), this.emitEvent("layout", [this])
                        }, l.getXValue = function(t) {
                            var e = this.layout._getOption("horizontal");
                            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
                        }, l.getYValue = function(t) {
                            var e = this.layout._getOption("horizontal");
                            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
                        }, l._transitionTo = function(t, e) {
                            this.getPosition();
                            var i = this.position.x,
                                n = this.position.y,
                                s = t == this.position.x && e == this.position.y;
                            if (this.setPosition(t, e), !s || this.isTransitioning) {
                                var o = t - i,
                                    r = e - n,
                                    a = {};
                                a.transform = this.getTranslate(o, r), this.transition({
                                    to: a,
                                    onTransitionEnd: {
                                        transform: this.layoutPosition
                                    },
                                    isCleaning: !0
                                })
                            } else this.layoutPosition()
                        }, l.getTranslate = function(t, e) {
                            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
                        }, l.goTo = function(t, e) {
                            this.setPosition(t, e), this.layoutPosition()
                        }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
                            this.position.x = parseFloat(t), this.position.y = parseFloat(e)
                        }, l._nonTransition = function(t) {
                            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
                        }, l.transition = function(t) {
                            if (parseFloat(this.layout.options.transitionDuration)) {
                                var e = this._transn;
                                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                                t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
                            } else this._nonTransition(t)
                        };
                        var c = "opacity," + function(t) {
                            return t.replace(/([A-Z])/g, (function(t) {
                                return "-" + t.toLowerCase()
                            }))
                        }(o);
                        l.enableTransition = function() {
                            if (!this.isTransitioning) {
                                var t = this.layout.options.transitionDuration;
                                t = "number" == typeof t ? t + "ms" : t, this.css({
                                    transitionProperty: c,
                                    transitionDuration: t,
                                    transitionDelay: this.staggerDelay || 0
                                }), this.element.addEventListener(r, this, !1)
                            }
                        }, l.onwebkitTransitionEnd = function(t) {
                            this.ontransitionend(t)
                        }, l.onotransitionend = function(t) {
                            this.ontransitionend(t)
                        };
                        var h = {
                            "-webkit-transform": "transform"
                        };
                        l.ontransitionend = function(t) {
                            if (t.target === this.element) {
                                var e = this._transn,
                                    i = h[t.propertyName] || t.propertyName;
                                delete e.ingProperties[i],
                                    function(t) {
                                        for (var e in t) return !1;
                                        return !0
                                    }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this])
                            }
                        }, l.disableTransition = function() {
                            this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
                        }, l._removeStyles = function(t) {
                            var e = {};
                            for (var i in t) e[i] = "";
                            this.css(e)
                        };
                        var u = {
                            transitionProperty: "",
                            transitionDuration: "",
                            transitionDelay: ""
                        };
                        return l.removeTransitionStyles = function() {
                            this.css(u)
                        }, l.stagger = function(t) {
                            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
                        }, l.removeElem = function() {
                            this.element.parentNode.removeChild(this.element), this.css({
                                display: ""
                            }), this.emitEvent("remove", [this])
                        }, l.remove = function() {
                            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
                                this.removeElem()
                            })), void this.hide()) : void this.removeElem()
                        }, l.reveal = function() {
                            delete this.isHidden, this.css({
                                display: ""
                            });
                            var t = this.layout.options,
                                e = {};
                            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                                from: t.hiddenStyle,
                                to: t.visibleStyle,
                                isCleaning: !0,
                                onTransitionEnd: e
                            })
                        }, l.onRevealTransitionEnd = function() {
                            this.isHidden || this.emitEvent("reveal")
                        }, l.getHideRevealTransitionEndProperty = function(t) {
                            var e = this.layout.options[t];
                            if (e.opacity) return "opacity";
                            for (var i in e) return i
                        }, l.hide = function() {
                            this.isHidden = !0, this.css({
                                display: ""
                            });
                            var t = this.layout.options,
                                e = {};
                            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                                from: t.visibleStyle,
                                to: t.hiddenStyle,
                                isCleaning: !0,
                                onTransitionEnd: e
                            })
                        }, l.onHideTransitionEnd = function() {
                            this.isHidden && (this.css({
                                display: "none"
                            }), this.emitEvent("hide"))
                        }, l.destroy = function() {
                            this.css({
                                position: "",
                                left: "",
                                right: "",
                                top: "",
                                bottom: "",
                                transition: "",
                                transform: ""
                            })
                        }, i
                    }, void 0 === (m = f.apply(g = {}, [n, r])) && (m = g),
                    function(t, e) {
                        "use strict";
                        v = function(e, i, n, s) {
                            return function(t, e, i, n, s) {
                                function o(t, e) {
                                    var i = n.getQueryElement(t);
                                    if (i) {
                                        this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
                                        var s = ++h;
                                        this.element.outlayerGUID = s, u[s] = this, this._create(), this._getOption("initLayout") && this.layout()
                                    } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
                                }

                                function r(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
                                }
                                var a = t.console,
                                    l = t.jQuery,
                                    c = function() {},
                                    h = 0,
                                    u = {};
                                o.namespace = "outlayer", o.Item = s, o.defaults = {
                                    containerStyle: {
                                        position: "relative"
                                    },
                                    initLayout: !0,
                                    originLeft: !0,
                                    originTop: !0,
                                    resize: !0,
                                    resizeContainer: !0,
                                    transitionDuration: "0.4s",
                                    hiddenStyle: {
                                        opacity: 0,
                                        transform: "scale(0.001)"
                                    },
                                    visibleStyle: {
                                        opacity: 1,
                                        transform: "scale(1)"
                                    }
                                };
                                var d = o.prototype;
                                n.extend(d, e.prototype), d.option = function(t) {
                                    n.extend(this.options, t)
                                }, d._getOption = function(t) {
                                    var e = this.constructor.compatOptions[t];
                                    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
                                }, o.compatOptions = {
                                    initLayout: "isInitLayout",
                                    horizontal: "isHorizontal",
                                    layoutInstant: "isLayoutInstant",
                                    originLeft: "isOriginLeft",
                                    originTop: "isOriginTop",
                                    resize: "isResizeBound",
                                    resizeContainer: "isResizingContainer"
                                }, d._create = function() {
                                    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
                                }, d.reloadItems = function() {
                                    this.items = this._itemize(this.element.children)
                                }, d._itemize = function(t) {
                                    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
                                        var o = new i(e[s], this);
                                        n.push(o)
                                    }
                                    return n
                                }, d._filterFindItemElements = function(t) {
                                    return n.filterFindElements(t, this.options.itemSelector)
                                }, d.getItemElements = function() {
                                    return this.items.map((function(t) {
                                        return t.element
                                    }))
                                }, d.layout = function() {
                                    this._resetLayout(), this._manageStamps();
                                    var t = this._getOption("layoutInstant"),
                                        e = void 0 !== t ? t : !this._isLayoutInited;
                                    this.layoutItems(this.items, e), this._isLayoutInited = !0
                                }, d._init = d.layout, d._resetLayout = function() {
                                    this.getSize()
                                }, d.getSize = function() {
                                    this.size = i(this.element)
                                }, d._getMeasurement = function(t, e) {
                                    var n, s = this.options[t];
                                    s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? i(n)[e] : s) : this[t] = 0
                                }, d.layoutItems = function(t, e) {
                                    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
                                }, d._getItemsForLayout = function(t) {
                                    return t.filter((function(t) {
                                        return !t.isIgnored
                                    }))
                                }, d._layoutItems = function(t, e) {
                                    if (this._emitCompleteOnItems("layout", t), t && t.length) {
                                        var i = [];
                                        t.forEach((function(t) {
                                            var n = this._getItemLayoutPosition(t);
                                            n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                                        }), this), this._processLayoutQueue(i)
                                    }
                                }, d._getItemLayoutPosition = function() {
                                    return {
                                        x: 0,
                                        y: 0
                                    }
                                }, d._processLayoutQueue = function(t) {
                                    this.updateStagger(), t.forEach((function(t, e) {
                                        this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                                    }), this)
                                }, d.updateStagger = function() {
                                    var t = this.options.stagger;
                                    return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
                                        if ("number" == typeof t) return t;
                                        var e = t.match(/(^\d*\.?\d*)(\w*)/),
                                            i = e && e[1],
                                            n = e && e[2];
                                        return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
                                    }(t), this.stagger)
                                }, d._positionItem = function(t, e, i, n, s) {
                                    n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i))
                                }, d._postLayout = function() {
                                    this.resizeContainer()
                                }, d.resizeContainer = function() {
                                    if (this._getOption("resizeContainer")) {
                                        var t = this._getContainerSize();
                                        t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                                    }
                                }, d._getContainerSize = c, d._setContainerMeasure = function(t, e) {
                                    if (void 0 !== t) {
                                        var i = this.size;
                                        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                                    }
                                }, d._emitCompleteOnItems = function(t, e) {
                                    function i() {
                                        s.dispatchEvent(t + "Complete", null, [e])
                                    }

                                    function n() {
                                        ++r == o && i()
                                    }
                                    var s = this,
                                        o = e.length;
                                    if (e && o) {
                                        var r = 0;
                                        e.forEach((function(e) {
                                            e.once(t, n)
                                        }))
                                    } else i()
                                }, d.dispatchEvent = function(t, e, i) {
                                    var n = e ? [e].concat(i) : i;
                                    if (this.emitEvent(t, n), l)
                                        if (this.$element = this.$element || l(this.element), e) {
                                            var s = l.Event(e);
                                            s.type = t, this.$element.trigger(s, i)
                                        } else this.$element.trigger(t, i)
                                }, d.ignore = function(t) {
                                    var e = this.getItem(t);
                                    e && (e.isIgnored = !0)
                                }, d.unignore = function(t) {
                                    var e = this.getItem(t);
                                    e && delete e.isIgnored
                                }, d.stamp = function(t) {
                                    (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
                                }, d.unstamp = function(t) {
                                    (t = this._find(t)) && t.forEach((function(t) {
                                        n.removeFrom(this.stamps, t), this.unignore(t)
                                    }), this)
                                }, d._find = function(t) {
                                    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
                                }, d._manageStamps = function() {
                                    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
                                }, d._getBoundingRect = function() {
                                    var t = this.element.getBoundingClientRect(),
                                        e = this.size;
                                    this._boundingRect = {
                                        left: t.left + e.paddingLeft + e.borderLeftWidth,
                                        top: t.top + e.paddingTop + e.borderTopWidth,
                                        right: t.right - (e.paddingRight + e.borderRightWidth),
                                        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                                    }
                                }, d._manageStamp = c, d._getElementOffset = function(t) {
                                    var e = t.getBoundingClientRect(),
                                        n = this._boundingRect,
                                        s = i(t);
                                    return {
                                        left: e.left - n.left - s.marginLeft,
                                        top: e.top - n.top - s.marginTop,
                                        right: n.right - e.right - s.marginRight,
                                        bottom: n.bottom - e.bottom - s.marginBottom
                                    }
                                }, d.handleEvent = n.handleEvent, d.bindResize = function() {
                                    t.addEventListener("resize", this), this.isResizeBound = !0
                                }, d.unbindResize = function() {
                                    t.removeEventListener("resize", this), this.isResizeBound = !1
                                }, d.onresize = function() {
                                    this.resize()
                                }, n.debounceMethod(o, "onresize", 100), d.resize = function() {
                                    this.isResizeBound && this.needsResizeLayout() && this.layout()
                                }, d.needsResizeLayout = function() {
                                    var t = i(this.element);
                                    return this.size && t && t.innerWidth !== this.size.innerWidth
                                }, d.addItems = function(t) {
                                    var e = this._itemize(t);
                                    return e.length && (this.items = this.items.concat(e)), e
                                }, d.appended = function(t) {
                                    var e = this.addItems(t);
                                    e.length && (this.layoutItems(e, !0), this.reveal(e))
                                }, d.prepended = function(t) {
                                    var e = this._itemize(t);
                                    if (e.length) {
                                        var i = this.items.slice(0);
                                        this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                                    }
                                }, d.reveal = function(t) {
                                    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                                        var e = this.updateStagger();
                                        t.forEach((function(t, i) {
                                            t.stagger(i * e), t.reveal()
                                        }))
                                    }
                                }, d.hide = function(t) {
                                    if (this._emitCompleteOnItems("hide", t), t && t.length) {
                                        var e = this.updateStagger();
                                        t.forEach((function(t, i) {
                                            t.stagger(i * e), t.hide()
                                        }))
                                    }
                                }, d.revealItemElements = function(t) {
                                    var e = this.getItems(t);
                                    this.reveal(e)
                                }, d.hideItemElements = function(t) {
                                    var e = this.getItems(t);
                                    this.hide(e)
                                }, d.getItem = function(t) {
                                    for (var e = 0; e < this.items.length; e++) {
                                        var i = this.items[e];
                                        if (i.element == t) return i
                                    }
                                }, d.getItems = function(t) {
                                    t = n.makeArray(t);
                                    var e = [];
                                    return t.forEach((function(t) {
                                        var i = this.getItem(t);
                                        i && e.push(i)
                                    }), this), e
                                }, d.remove = function(t) {
                                    var e = this.getItems(t);
                                    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
                                        t.remove(), n.removeFrom(this.items, t)
                                    }), this)
                                }, d.destroy = function() {
                                    var t = this.element.style;
                                    t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
                                        t.destroy()
                                    })), this.unbindResize();
                                    var e = this.element.outlayerGUID;
                                    delete u[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
                                }, o.data = function(t) {
                                    var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
                                    return e && u[e]
                                }, o.create = function(t, e) {
                                    var i = r(o);
                                    return i.defaults = n.extend({}, o.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, o.compatOptions), i.namespace = t, i.data = o.data, i.Item = r(s), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
                                };
                                var p = {
                                    ms: 1,
                                    s: 1e3
                                };
                                return o.Item = s, o
                            }(t, e, i, n, s)
                        }.apply(y = {}, M = [n, r, d, m]), void 0 !== v || (v = y)
                    }(window), window, _ = function(t) {
                        "use strict";

                        function e() {
                            t.Item.apply(this, arguments)
                        }
                        var i = e.prototype = Object.create(t.Item.prototype),
                            n = i._create;
                        i._create = function() {
                            this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
                        }, i.updateSortData = function() {
                            if (!this.isIgnored) {
                                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                                var t = this.layout.options.getSortData,
                                    e = this.layout._sorters;
                                for (var i in t) {
                                    var n = e[i];
                                    this.sortData[i] = n(this.element, this)
                                }
                            }
                        };
                        var s = i.destroy;
                        return i.destroy = function() {
                            s.apply(this, arguments), this.css({
                                display: ""
                            })
                        }, e
                    }, void 0 === (w = _.apply(b = {}, [v])) && (w = b), window, x = function(t, e) {
                        "use strict";

                        function i(t) {
                            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
                        }
                        var n = i.prototype;
                        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(t) {
                            n[t] = function() {
                                return e.prototype[t].apply(this.isotope, arguments)
                            }
                        })), n.needsVerticalResizeLayout = function() {
                            var e = t(this.isotope.element);
                            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
                        }, n._getMeasurement = function() {
                            this.isotope._getMeasurement.apply(this, arguments)
                        }, n.getColumnWidth = function() {
                            this.getSegmentSize("column", "Width")
                        }, n.getRowHeight = function() {
                            this.getSegmentSize("row", "Height")
                        }, n.getSegmentSize = function(t, e) {
                            var i = t + e,
                                n = "outer" + e;
                            if (this._getMeasurement(i, n), !this[i]) {
                                var s = this.getFirstItemSize();
                                this[i] = s && s[n] || this.isotope.size["inner" + e]
                            }
                        }, n.getFirstItemSize = function() {
                            var e = this.isotope.filteredItems[0];
                            return e && e.element && t(e.element)
                        }, n.layout = function() {
                            this.isotope.layout.apply(this.isotope, arguments)
                        }, n.getSize = function() {
                            this.isotope.getSize(), this.size = this.isotope.size
                        }, i.modes = {}, i.create = function(t, e) {
                            function s() {
                                i.apply(this, arguments)
                            }
                            return s.prototype = Object.create(n), s.prototype.constructor = s, e && (s.options = e), s.prototype.namespace = t, i.modes[t] = s, s
                        }, i
                    }, void 0 === (C = x.apply(E = {}, [r, v])) && (C = E), window, T = function(t, e) {
                        var i = t.create("masonry");
                        i.compatOptions.fitWidth = "isFitWidth";
                        var n = i.prototype;
                        return n._resetLayout = function() {
                            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
                            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                            this.maxY = 0, this.horizontalColIndex = 0
                        }, n.measureColumns = function() {
                            if (this.getContainerWidth(), !this.columnWidth) {
                                var t = this.items[0],
                                    i = t && t.element;
                                this.columnWidth = i && e(i).outerWidth || this.containerWidth
                            }
                            var n = this.columnWidth += this.gutter,
                                s = this.containerWidth + this.gutter,
                                o = s / n,
                                r = n - s % n;
                            o = Math[r && r < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
                        }, n.getContainerWidth = function() {
                            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                                i = e(t);
                            this.containerWidth = i && i.innerWidth
                        }, n._getItemLayoutPosition = function(t) {
                            t.getSize();
                            var e = t.size.outerWidth % this.columnWidth,
                                i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
                            i = Math.min(i, this.cols);
                            for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), s = {
                                    x: this.columnWidth * n.col,
                                    y: n.y
                                }, o = n.y + t.size.outerHeight, r = i + n.col, a = n.col; a < r; a++) this.colYs[a] = o;
                            return s
                        }, n._getTopColPosition = function(t) {
                            var e = this._getTopColGroup(t),
                                i = Math.min.apply(Math, e);
                            return {
                                col: e.indexOf(i),
                                y: i
                            }
                        }, n._getTopColGroup = function(t) {
                            if (t < 2) return this.colYs;
                            for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
                            return e
                        }, n._getColGroupY = function(t, e) {
                            if (e < 2) return this.colYs[t];
                            var i = this.colYs.slice(t, t + e);
                            return Math.max.apply(Math, i)
                        }, n._getHorizontalColPosition = function(t, e) {
                            var i = this.horizontalColIndex % this.cols;
                            i = t > 1 && i + t > this.cols ? 0 : i;
                            var n = e.size.outerWidth && e.size.outerHeight;
                            return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
                                col: i,
                                y: this._getColGroupY(i, t)
                            }
                        }, n._manageStamp = function(t) {
                            var i = e(t),
                                n = this._getElementOffset(t),
                                s = this._getOption("originLeft") ? n.left : n.right,
                                o = s + i.outerWidth,
                                r = Math.floor(s / this.columnWidth);
                            r = Math.max(0, r);
                            var a = Math.floor(o / this.columnWidth);
                            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                            for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = r; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
                        }, n._getContainerSize = function() {
                            this.maxY = Math.max.apply(Math, this.colYs);
                            var t = {
                                height: this.maxY
                            };
                            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
                        }, n._getContainerFitWidth = function() {
                            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                            return (this.cols - t) * this.columnWidth - this.gutter
                        }, n.needsResizeLayout = function() {
                            var t = this.containerWidth;
                            return this.getContainerWidth(), t != this.containerWidth
                        }, i
                    }, void 0 === (A = T.apply(S = {}, [v, r])) && (A = S), window, D = function(t, e) {
                        "use strict";
                        var i = t.create("masonry"),
                            n = i.prototype,
                            s = {
                                _getElementOffset: !0,
                                layout: !0,
                                _getMeasurement: !0
                            };
                        for (var o in e.prototype) s[o] || (n[o] = e.prototype[o]);
                        var r = n.measureColumns;
                        n.measureColumns = function() {
                            this.items = this.isotope.filteredItems, r.call(this)
                        };
                        var a = n._getOption;
                        return n._getOption = function(t) {
                            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
                        }, i
                    }, void 0 === (k = D.apply(L = {}, [C, A])) && (k = L), window, O = function(t) {
                        "use strict";
                        var e = t.create("fitRows"),
                            i = e.prototype;
                        return i._resetLayout = function() {
                            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
                        }, i._getItemLayoutPosition = function(t) {
                            t.getSize();
                            var e = t.size.outerWidth + this.gutter,
                                i = this.isotope.size.innerWidth + this.gutter;
                            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
                            var n = {
                                x: this.x,
                                y: this.y
                            };
                            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
                        }, i._getContainerSize = function() {
                            return {
                                height: this.maxY
                            }
                        }, e
                    }, void 0 === (N = O.apply(I = {}, [C])) && (N = I), window, j = function(t) {
                        "use strict";
                        var e = t.create("vertical", {
                                horizontalAlignment: 0
                            }),
                            i = e.prototype;
                        return i._resetLayout = function() {
                            this.y = 0
                        }, i._getItemLayoutPosition = function(t) {
                            t.getSize();
                            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                                i = this.y;
                            return this.y += t.size.outerHeight, {
                                x: e,
                                y: i
                            }
                        }, i._getContainerSize = function() {
                            return {
                                height: this.y
                            }
                        }, e
                    }, void 0 === (P = j.apply(z = {}, [C])) && (P = z),
                    function(i, n) {
                        H = function(t, e, n, s, o, r) {
                            return function(t, e, i, n, s, o, r) {
                                var a = t.jQuery,
                                    l = String.prototype.trim ? function(t) {
                                        return t.trim()
                                    } : function(t) {
                                        return t.replace(/^\s+|\s+$/g, "")
                                    },
                                    c = e.create("isotope", {
                                        layoutMode: "masonry",
                                        isJQueryFiltering: !0,
                                        sortAscending: !0
                                    });
                                c.Item = o, c.LayoutMode = r;
                                var h = c.prototype;
                                h._create = function() {
                                    for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
                                }, h.reloadItems = function() {
                                    this.itemGUID = 0, e.prototype.reloadItems.call(this)
                                }, h._itemize = function() {
                                    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) t[i].id = this.itemGUID++;
                                    return this._updateItemsSortData(t), t
                                }, h._initLayoutMode = function(t) {
                                    var e = r.modes[t],
                                        i = this.options[t] || {};
                                    this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
                                }, h.layout = function() {
                                    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
                                }, h._layout = function() {
                                    var t = this._getIsInstant();
                                    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
                                }, h.arrange = function(t) {
                                    this.option(t), this._getIsInstant();
                                    var e = this._filter(this.items);
                                    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
                                }, h._init = h.arrange, h._hideReveal = function(t) {
                                    this.reveal(t.needReveal), this.hide(t.needHide)
                                }, h._getIsInstant = function() {
                                    var t = this._getOption("layoutInstant"),
                                        e = void 0 !== t ? t : !this._isLayoutInited;
                                    return this._isInstant = e, e
                                }, h._bindArrangeComplete = function() {
                                    function t() {
                                        e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
                                    }
                                    var e, i, n, s = this;
                                    this.once("layoutComplete", (function() {
                                        e = !0, t()
                                    })), this.once("hideComplete", (function() {
                                        i = !0, t()
                                    })), this.once("revealComplete", (function() {
                                        n = !0, t()
                                    }))
                                }, h._filter = function(t) {
                                    var e = this.options.filter;
                                    e = e || "*";
                                    for (var i = [], n = [], s = [], o = this._getFilterTest(e), r = 0; r < t.length; r++) {
                                        var a = t[r];
                                        if (!a.isIgnored) {
                                            var l = o(a);
                                            l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || s.push(a)
                                        }
                                    }
                                    return {
                                        matches: i,
                                        needReveal: n,
                                        needHide: s
                                    }
                                }, h._getFilterTest = function(t) {
                                    return a && this.options.isJQueryFiltering ? function(e) {
                                        return a(e.element).is(t)
                                    } : "function" == typeof t ? function(e) {
                                        return t(e.element)
                                    } : function(e) {
                                        return n(e.element, t)
                                    }
                                }, h.updateSortData = function(t) {
                                    var e;
                                    t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
                                }, h._getSorters = function() {
                                    var t = this.options.getSortData;
                                    for (var e in t) {
                                        var i = t[e];
                                        this._sorters[e] = u(i)
                                    }
                                }, h._updateItemsSortData = function(t) {
                                    for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
                                };
                                var u = function(t) {
                                    if ("string" != typeof t) return t;
                                    var e = l(t).split(" "),
                                        i = e[0],
                                        n = i.match(/^\[(.+)\]$/),
                                        s = function(t, e) {
                                            return t ? function(e) {
                                                return e.getAttribute(t)
                                            } : function(t) {
                                                var i = t.querySelector(e);
                                                return i && i.textContent
                                            }
                                        }(n && n[1], i),
                                        o = c.sortDataParsers[e[1]];
                                    return o ? function(t) {
                                        return t && o(s(t))
                                    } : function(t) {
                                        return t && s(t)
                                    }
                                };
                                c.sortDataParsers = {
                                    parseInt: function(t) {
                                        return parseInt(t, 10)
                                    },
                                    parseFloat: function(t) {
                                        return parseFloat(t)
                                    }
                                }, h._sort = function() {
                                    if (this.options.sortBy) {
                                        var t = s.makeArray(this.options.sortBy);
                                        this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                                        var e = function(t, e) {
                                            return function(i, n) {
                                                for (var s = 0; s < t.length; s++) {
                                                    var o = t[s],
                                                        r = i.sortData[o],
                                                        a = n.sortData[o];
                                                    if (r > a || r < a) return (r > a ? 1 : -1) * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1)
                                                }
                                                return 0
                                            }
                                        }(this.sortHistory, this.options.sortAscending);
                                        this.filteredItems.sort(e)
                                    }
                                }, h._getIsSameSortBy = function(t) {
                                    for (var e = 0; e < t.length; e++)
                                        if (t[e] != this.sortHistory[e]) return !1;
                                    return !0
                                }, h._mode = function() {
                                    var t = this.options.layoutMode,
                                        e = this.modes[t];
                                    if (!e) throw new Error("No layout mode: " + t);
                                    return e.options = this.options[t], e
                                }, h._resetLayout = function() {
                                    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
                                }, h._getItemLayoutPosition = function(t) {
                                    return this._mode()._getItemLayoutPosition(t)
                                }, h._manageStamp = function(t) {
                                    this._mode()._manageStamp(t)
                                }, h._getContainerSize = function() {
                                    return this._mode()._getContainerSize()
                                }, h.needsResizeLayout = function() {
                                    return this._mode().needsResizeLayout()
                                }, h.appended = function(t) {
                                    var e = this.addItems(t);
                                    if (e.length) {
                                        var i = this._filterRevealAdded(e);
                                        this.filteredItems = this.filteredItems.concat(i)
                                    }
                                }, h.prepended = function(t) {
                                    var e = this._itemize(t);
                                    if (e.length) {
                                        this._resetLayout(), this._manageStamps();
                                        var i = this._filterRevealAdded(e);
                                        this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
                                    }
                                }, h._filterRevealAdded = function(t) {
                                    var e = this._filter(t);
                                    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
                                }, h.insert = function(t) {
                                    var e = this.addItems(t);
                                    if (e.length) {
                                        var i, n, s = e.length;
                                        for (i = 0; i < s; i++) n = e[i], this.element.appendChild(n.element);
                                        var o = this._filter(e).matches;
                                        for (i = 0; i < s; i++) e[i].isLayoutInstant = !0;
                                        for (this.arrange(), i = 0; i < s; i++) delete e[i].isLayoutInstant;
                                        this.reveal(o)
                                    }
                                };
                                var d = h.remove;
                                return h.remove = function(t) {
                                    t = s.makeArray(t);
                                    var e = this.getItems(t);
                                    d.call(this, t);
                                    for (var i = e && e.length, n = 0; i && n < i; n++) {
                                        var o = e[n];
                                        s.removeFrom(this.filteredItems, o)
                                    }
                                }, h.shuffle = function() {
                                    for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
                                    this.options.sortBy = "random", this._sort(), this._layout()
                                }, h._noTransition = function(t, e) {
                                    var i = this.options.transitionDuration;
                                    this.options.transitionDuration = 0;
                                    var n = t.apply(this, e);
                                    return this.options.transitionDuration = i, n
                                }, h.getFilteredItemElements = function() {
                                    return this.filteredItems.map((function(t) {
                                        return t.element
                                    }))
                                }, c
                            }(i, t, 0, n, s, o, r)
                        }.apply(e, M = [v, r, c, d, w, C, k, N, P]), void 0 === H || (t.exports = H)
                    }(window)
            },
            123: (t, e, i) => {
                var n = i(878);
                n((function() {
                    "use strict";
                    var t;
                    t = document.querySelectorAll(".needs-validation"), Array.prototype.slice.call(t).forEach((function(t) {
                            t.addEventListener("submit", (function(e) {
                                t.checkValidity() || (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated")
                            }), !1)
                        })),
                        function() {
                            let t = localStorage.getItem("DarkMode"),
                                e = document.querySelector("main");
                            const i = document.querySelector("#dark-mode-toggle"),
                                n = document.querySelector("#dark-mode-toggle > i"),
                                s = (t = !0) => {
                                    t ? (e.setAttribute("data-theme", "Dark"), n.classList.remove("far","fa-lightbulb"), n.classList.add("fas","fa-lightbulb"), localStorage.setItem("DarkMode", "enabled")) : (e.setAttribute("data-theme", "Light"), n.classList.remove("fas","fa-lightbulb"), n.classList.add("far","fa-lightbulb"), localStorage.setItem("DarkMode", "disabled"))
                                };
                            s("enabled" === t), null === t && e.setAttribute("data-theme", "Glass"), i.addEventListener("click", (() => {
                                t = localStorage.getItem("DarkMode"), "enabled" !== t ? s(!0) : "disabled" !== t && s(!1)
                            }))
                        }(),
                        function() {
                            const t = n(".element");
                            if (t.length > 0) {
                                const e = {
                                    strings: t.attr("data-elements").split(","),
                                    typeSpeed: 100,
                                    backDelay: 3e3,
                                    backSpeed: 50,
                                    loop: !0
                                };
                                new Typed(".element", e)
                            }
                        }(), n(".owl-carousel").owlCarousel({
                            loop: !0,
                            margin: 30,
                            stagePadding: 5,
                            nav: !1,
                            autoplay: !0,
                            dots: !0,
                            mouseDrag: !0,
                            touchDrag: !0,
                            smartSpeed: 700,
                            autoplayHoverPause: !0,
                            responsiveClass: !0,
                            rtl: !1,
                            responsive: {
                                0: {
                                    items: 1,
                                    nav: !1
                                },
                                992: {
                                    items: 2,
                                    nav: !1
                                }
                            }
                        }),
                        function() {
                            let t = n("#grid").isotope({
                                itemSelector: ".portofolio",
                                layoutMode: "fitRows"
                            });
                            n(".filter").on("click", "a", (function() {
                                let e = n(this).attr("data-filter");
                                t.isotope({
                                    filter: e
                                })
                            }))
                        }()
                }))
            }
        },
        e = {};

    function i(n) {
        var s = e[n];
        if (void 0 !== s) return s.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i), o.exports
    }
    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }), e
    }, i.d = (t, e) => {
        for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";
        i(135), i(123), i(878), i(169), i(9)
    })()
})();