function showLoading() {
    console.log("show loading"), $("#loading").show()
}

function hideLoading() {
    console.log("hide loading"), $("#loading").hide()
}! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Rails = t()
}(this, (function() {
    "use strict";
    const e = "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        t = {
            selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
            exclude: "form button"
        },
        n = "select[data-remote], input[data-remote], textarea[data-remote]",
        o = "form:not([data-turbo=true])",
        a = "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        i = "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        r = "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        s = "input[name][type=file]:not([disabled])",
        c = "a[data-disable-with], a[data-disable]",
        l = "button[data-remote][data-disable-with], button[data-remote][data-disable]";
    let d = null;
    const u = () => {
            const e = document.querySelector("meta[name=csp-nonce]");
            return d = e && e.content
        },
        p = () => d || u(),
        m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector,
        f = function(e, t) {
            return t.exclude ? m.call(e, t.selector) && !m.call(e, t.exclude) : m.call(e, t)
        },
        v = "_ujsData",
        b = (e, t) => e[v] ? e[v][t] : void 0,
        h = function(e, t, n) {
            return e[v] || (e[v] = {}), e[v][t] = n
        },
        y = e => Array.prototype.slice.call(document.querySelectorAll(e)),
        g = function(e) {
            var t = !1;
            do {
                if (e.isContentEditable) {
                    t = !0;
                    break
                }
                e = e.parentElement
            } while (e);
            return t
        },
        x = () => {
            const e = document.querySelector("meta[name=csrf-token]");
            return e && e.content
        },
        _ = () => {
            const e = document.querySelector("meta[name=csrf-param]");
            return e && e.content
        },
        $ = e => {
            const t = x();
            if (t) return e.setRequestHeader("X-CSRF-Token", t)
        },
        w = () => {
            const e = x(),
                t = _();
            if (e && t) return y('form input[name="' + t + '"]').forEach((t => t.value = e))
        },
        C = {
            "*": "*/*",
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        E = e => {
            e = k(e);
            var t = S(e, (function() {
                const n = j(null != t.response ? t.response : t.responseText, t.getResponseHeader("Content-Type"));
                return 2 === Math.floor(t.status / 100) ? "function" == typeof e.success && e.success(n, t.statusText, t) : "function" == typeof e.error && e.error(n, t.statusText, t), "function" == typeof e.complete ? e.complete(t, t.statusText) : void 0
            }));
            return !(e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : void 0)
        };
    var k = function(e) {
            return e.url = e.url || location.href, e.type = e.type.toUpperCase(), "GET" === e.type && e.data && (e.url.indexOf("?") < 0 ? e.url += "?" + e.data : e.url += "&" + e.data), e.dataType in C || (e.dataType = "*"), e.accept = C[e.dataType], "*" !== e.dataType && (e.accept += ", */*; q=0.01"), e
        },
        S = function(e, t) {
            const n = new XMLHttpRequest;
            return n.open(e.type, e.url, !0), n.setRequestHeader("Accept", e.accept), "string" == typeof e.data && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.crossDomain || (n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), $(n)), n.withCredentials = !!e.withCredentials, n.onreadystatechange = function() {
                if (n.readyState === XMLHttpRequest.DONE) return t(n)
            }, n
        },
        j = function(e, t) {
            if ("string" == typeof e && "string" == typeof t)
                if (t.match(/\bjson\b/)) try {
                    e = JSON.parse(e)
                } catch (e) {} else if (t.match(/\b(?:java|ecma)script\b/)) {
                    const t = document.createElement("script");
                    t.setAttribute("nonce", p()), t.text = e, document.head.appendChild(t).parentNode.removeChild(t)
                } else if (t.match(/\b(xml|html|svg)\b/)) {
                const n = new DOMParser;
                t = t.replace(/;.+/, "");
                try {
                    e = n.parseFromString(e, t)
                } catch (e) {}
            }
            return e
        };
    const q = e => e.href,
        L = function(e) {
            const t = document.createElement("a");
            t.href = location.href;
            const n = document.createElement("a");
            try {
                return n.href = e, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (e) {
                return !0
            }
        };
    let I, {
        CustomEvent: A
    } = window;
    "function" != typeof A && (A = function(e, t) {
        const n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }, A.prototype = window.Event.prototype, ({
        preventDefault: I
    } = A.prototype), A.prototype.preventDefault = function() {
        const e = I.call(this);
        return this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
            get: () => !0
        }), e
    });
    const N = (e, t, n) => {
            const o = new A(t, {
                bubbles: !0,
                cancelable: !0,
                detail: n
            });
            return e.dispatchEvent(o), !o.defaultPrevented
        },
        T = e => {
            N(e.target, "ujs:everythingStopped"), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
        },
        O = (e, t, n, o) => e.addEventListener(n, (function(e) {
            let {
                target: n
            } = e;
            for (; n instanceof Element && !f(n, t);) n = n.parentNode;
            n instanceof Element && !1 === o.call(n, e) && (e.preventDefault(), e.stopPropagation())
        })),
        D = e => Array.prototype.slice.call(e),
        M = (e, t) => {
            let n = [e];
            f(e, "form") && (n = D(e.elements));
            const o = [];
            return n.forEach((function(e) {
                e.name && !e.disabled && (f(e, "fieldset[disabled] *") || (f(e, "select") ? D(e.options).forEach((function(t) {
                    t.selected && o.push({
                        name: e.name,
                        value: t.value
                    })
                })) : (e.checked || -1 === ["radio", "checkbox", "submit"].indexOf(e.type)) && o.push({
                    name: e.name,
                    value: e.value
                })))
            })), t && o.push(t), o.map((function(e) {
                return e.name ? `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}` : e
            })).join("&")
        },
        R = (e, t) => f(e, "form") ? D(e.elements).filter((e => f(e, t))) : D(e.querySelectorAll(t)),
        B = e => function(t) {
            P(this, e) || T(t)
        };
    var P = function(e, t) {
        let n;
        const o = e.getAttribute("data-confirm");
        if (!o) return !0;
        let a = !1;
        if (N(e, "confirm")) {
            try {
                a = t.confirm(o, e)
            } catch (e) {}
            n = N(e, "confirm:complete", [a])
        }
        return a && n
    };
    const H = function(e) {
            this.disabled && T(e)
        },
        F = e => {
            let t;
            if (e instanceof Event) {
                if (Y(e)) return;
                t = e.target
            } else t = e;
            if (!g(t)) return f(t, c) ? X(t) : f(t, l) || f(t, r) ? W(t) : f(t, o) ? G(t) : void 0
        },
        V = e => {
            const t = e instanceof Event ? e.target : e;
            if (!g(t)) return f(t, c) ? U(t) : f(t, l) || f(t, i) ? Q(t) : f(t, o) ? z(t) : void 0
        };
    var U = function(e) {
            if (b(e, "ujs:disabled")) return;
            const t = e.getAttribute("data-disable-with");
            return null != t && (h(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t), e.addEventListener("click", T), h(e, "ujs:disabled", !0)
        },
        X = function(e) {
            const t = b(e, "ujs:enable-with");
            return null != t && (e.innerHTML = t, h(e, "ujs:enable-with", null)), e.removeEventListener("click", T), h(e, "ujs:disabled", null)
        },
        z = e => R(e, i).forEach(Q),
        Q = function(e) {
            if (b(e, "ujs:disabled")) return;
            const t = e.getAttribute("data-disable-with");
            return null != t && (f(e, "button") ? (h(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t) : (h(e, "ujs:enable-with", e.value), e.value = t)), e.disabled = !0, h(e, "ujs:disabled", !0)
        },
        G = e => R(e, r).forEach((e => W(e))),
        W = function(e) {
            const t = b(e, "ujs:enable-with");
            return null != t && (f(e, "button") ? e.innerHTML = t : e.value = t, h(e, "ujs:enable-with", null)), e.disabled = !1, h(e, "ujs:disabled", null)
        },
        Y = function(e) {
            const t = e.detail ? e.detail[0] : void 0;
            return t && t.getResponseHeader("X-Xhr-Redirect")
        };
    const K = e => function(t) {
            const n = this,
                o = n.getAttribute("data-method");
            if (!o) return;
            if (g(this)) return;
            const a = e.href(n),
                i = x(),
                r = _(),
                s = document.createElement("form");
            let c = `<input name='_method' value='${o}' type='hidden' />`;
            r && i && !L(a) && (c += `<input name='${r}' value='${i}' type='hidden' />`), c += '<input type="submit" />', s.method = "post", s.action = a, s.target = n.target, s.innerHTML = c, s.style.display = "none", document.body.appendChild(s), s.querySelector('[type="submit"]').click(), T(t)
        },
        J = function(e) {
            const t = e.getAttribute("data-remote");
            return null != t && "false" !== t
        },
        Z = e => function(a) {
            let i, r, s;
            const c = this;
            if (!J(c)) return !0;
            if (!N(c, "ajax:before")) return N(c, "ajax:stopped"), !1;
            if (g(c)) return N(c, "ajax:stopped"), !1;
            const l = c.getAttribute("data-with-credentials"),
                d = c.getAttribute("data-type") || "script";
            if (f(c, o)) {
                const e = b(c, "ujs:submit-button");
                r = b(c, "ujs:submit-button-formmethod") || c.getAttribute("method") || "get", s = b(c, "ujs:submit-button-formaction") || c.getAttribute("action") || location.href, "GET" === r.toUpperCase() && (s = s.replace(/\?.*$/, "")), "multipart/form-data" === c.enctype ? (i = new FormData(c), null != e && i.append(e.name, e.value)) : i = M(c, e), h(c, "ujs:submit-button", null), h(c, "ujs:submit-button-formmethod", null), h(c, "ujs:submit-button-formaction", null)
            } else f(c, t) || f(c, n) ? (r = c.getAttribute("data-method"), s = c.getAttribute("data-url"), i = M(c, c.getAttribute("data-params"))) : (r = c.getAttribute("data-method"), s = e.href(c), i = c.getAttribute("data-params"));
            E({
                type: r || "GET",
                url: s,
                data: i,
                dataType: d,
                beforeSend: (e, t) => N(c, "ajax:beforeSend", [e, t]) ? N(c, "ajax:send", [e]) : (N(c, "ajax:stopped"), !1),
                success: (...e) => N(c, "ajax:success", e),
                error: (...e) => N(c, "ajax:error", e),
                complete: (...e) => N(c, "ajax:complete", e),
                crossDomain: L(s),
                withCredentials: null != l && "false" !== l
            }), T(a)
        },
        ee = function() {
            const e = this,
                {
                    form: t
                } = e;
            if (t) return e.name && h(t, "ujs:submit-button", {
                name: e.name,
                value: e.value
            }), h(t, "ujs:formnovalidate-button", e.formNoValidate), h(t, "ujs:submit-button-formaction", e.getAttribute("formaction")), h(t, "ujs:submit-button-formmethod", e.getAttribute("formmethod"))
        },
        te = function(e) {
            const t = this,
                n = (t.getAttribute("data-method") || "GET").toUpperCase(),
                o = t.getAttribute("data-params"),
                a = (e.metaKey || e.ctrlKey) && "GET" === n && !o;
            (null != e.button && 0 !== e.button || a) && e.stopImmediatePropagation()
        },
        ne = {
            $: y,
            ajax: E,
            buttonClickSelector: t,
            buttonDisableSelector: l,
            confirm: e => window.confirm(e),
            cspNonce: p,
            csrfToken: x,
            csrfParam: _,
            CSRFProtection: $,
            delegate: O,
            disableElement: V,
            enableElement: F,
            fileInputSelector: s,
            fire: N,
            formElements: R,
            formEnableSelector: r,
            formDisableSelector: i,
            formInputClickSelector: a,
            formSubmitButtonClick: ee,
            formSubmitSelector: o,
            getData: b,
            handleDisabledElement: H,
            href: q,
            inputChangeSelector: n,
            isCrossDomain: L,
            linkClickSelector: e,
            linkDisableSelector: c,
            loadCSPNonce: u,
            matches: f,
            preventInsignificantClick: te,
            refreshCSRFTokens: w,
            serializeElement: M,
            setData: h,
            stopEverything: T
        },
        oe = B(ne);
    ne.handleConfirm = oe;
    const ae = K(ne);
    ne.handleMethod = ae;
    const ie = Z(ne);
    ne.handleRemote = ie;
    const re = function() {
        if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
        return window.addEventListener("pageshow", (function() {
            y(r).forEach((function(e) {
                b(e, "ujs:disabled") && F(e)
            })), y(c).forEach((function(e) {
                b(e, "ujs:disabled") && F(e)
            }))
        })), O(document, c, "ajax:complete", F), O(document, c, "ajax:stopped", F), O(document, l, "ajax:complete", F), O(document, l, "ajax:stopped", F), O(document, e, "click", te), O(document, e, "click", H), O(document, e, "click", oe), O(document, e, "click", V), O(document, e, "click", ie), O(document, e, "click", ae), O(document, t, "click", te), O(document, t, "click", H), O(document, t, "click", oe), O(document, t, "click", V), O(document, t, "click", ie), O(document, n, "change", H), O(document, n, "change", oe), O(document, n, "change", ie), O(document, o, "submit", H), O(document, o, "submit", oe), O(document, o, "submit", ie), O(document, o, "submit", (e => setTimeout((() => V(e)), 13))), O(document, o, "ajax:send", V), O(document, o, "ajax:complete", F), O(document, a, "click", te), O(document, a, "click", H), O(document, a, "click", oe), O(document, a, "click", ee), document.addEventListener("DOMContentLoaded", w), document.addEventListener("DOMContentLoaded", u), window._rails_loaded = !0
    };
    if (ne.start = re, "undefined" != typeof jQuery && jQuery && jQuery.ajax) {
        if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
        jQuery.rails = ne, jQuery.ajaxPrefilter((function(e, t, n) {
            if (!e.crossDomain) return $(n)
        }))
    }
    return "object" != typeof exports && "undefined" == typeof module && (window.Rails = ne, N(document, "rails:attachBindings") && re()), ne
})), document.addEventListener("turbo:load", (function() {
        let e = document.querySelector("html"),
            t = document.querySelector("body"),
            n = document.querySelector(".nav.desktop-hide"),
            o = n.querySelector(".nav__menu-list--bar"),
            a = n.querySelector(".desktop-hide .nav__menu-list-contain"),
            i = n.querySelector(".nav__close-area");
        o.addEventListener("click", (function() {
            o.classList.toggle("open"), a.classList.toggle("open"), e.classList.toggle("fixed-window"), t.classList.toggle("fixed-window")
        })), i.addEventListener("click", (function() {
            o.classList.remove("open"), a.classList.remove("open"), e.classList.remove("fixed-window"), t.classList.remove("fixed-window")
        })), n.addEventListener("click", (function(e) {
            function t(e) {
                e.classList.toggle("open")
            }
            let n = e.target.closest(".nav__submenu--first .nav__collapse--title span");
            if (n) return void t(n.parentNode);
            let o = e.target.closest(".nav__submenu-list.nav__collapse > .nav__collapse--title");
            if (o) return void t(o);
            let a = e.target.closest(".nav__menu-list-content > .nav__menu-list .nav__menu-list--title");
            a && t(a)
        }))
    })), document.addEventListener("turbo:load", (function() {
        let e = document.querySelector(".sidebar.tablet-hide");
        e && e.addEventListener("click", (function(e) {
            function t(e) {
                e.classList.toggle("open")
            }
            let n = e.target.closest(".nav__submenu--first .nav__collapse--title");
            if (n) return e.preventDefault(), void t(n);
            let o = e.target.closest(".nav__submenu-list.nav__collapse > .nav__collapse--title");
            o && t(o)
        }))
    })),
    function() {
        function e() {
            document.querySelector("aside.popup-banner") || ++o >= a && (n(), o = 0)
        }

        function t() {
            o = 0
        }

        function n() {
            $.ajax({
                url: "/popups/site_banner_popup?current_path=" + encodeURIComponent(window.location.pathname),
                headers: {
                    "X-Requested-With": "Turbo-Stream"
                },
                success: function(e) {
                    Turbo.renderStreamMessage(e)
                },
                error: function(e, t, n) {
                    console.error("Error fetching site banner popup:", n)
                }
            })
        }
        var o = 0,
            a = 180;
        setInterval(e, 1e3), document.addEventListener("mousemove", t), document.addEventListener("scroll", t), document.addEventListener("keydown", t), document.addEventListener("DOMContentLoaded", (function() {
            document.body.addEventListener("click", (function(e) {
                var t = e.target.closest("aside.popup-banner");
                t && e.target.classList.contains("icon--close") && t.contains(e.target) && t.remove(), t && e.target === t && t.remove()
            }))
        })), document.addEventListener("DOMContentLoaded", (function() {
            try {
                var e = localStorage.getItem("site_banner_popup_shown_time"),
                    t = (new Date).getTime();
                (!e || t - e > 288e5) && (setTimeout(n, 3e3), localStorage.setItem("site_banner_popup_shown_time", t))
            } catch (e) {
                console.error("Error setting site banner popup:", e)
            }
        }))
    }(),
    function() {
        var e;
        e = function(e) {
            var t, n;
            return t = !1, e((function() {
                var o;
                return o = (document.body || document.documentElement).style, t = void 0 !== o.animation || void 0 !== o.WebkitAnimation || void 0 !== o.MozAnimation || void 0 !== o.MsAnimation || void 0 !== o.OAnimation, e(window).bind("keyup.vex", (function(e) {
                    return 27 === e.keyCode ? n.closeByEscape() : void 0
                }))
            })), n = {
                globalID: 1,
                animationEndEvent: "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",
                baseClassNames: {
                    vex: "vex",
                    content: "vex-content",
                    overlay: "vex-overlay",
                    close: "vex-close",
                    closing: "vex-closing",
                    open: "vex-open"
                },
                defaultOptions: {
                    content: "",
                    showCloseButton: !0,
                    escapeButtonCloses: !0,
                    overlayClosesOnClick: !0,
                    appendLocation: "body",
                    className: "",
                    css: {},
                    overlayClassName: "",
                    overlayCSS: {},
                    contentClassName: "",
                    contentCSS: {},
                    closeClassName: "",
                    closeCSS: {}
                },
                open: function(t) {
                    return (t = e.extend({}, n.defaultOptions, t)).id = n.globalID, n.globalID += 1, t.$vex = e("<div>").addClass(n.baseClassNames.vex).addClass(t.className).css(t.css).data({
                        vex: t
                    }), t.$vexOverlay = e("<div>").addClass(n.baseClassNames.overlay).addClass(t.overlayClassName).css(t.overlayCSS).data({
                        vex: t
                    }), t.overlayClosesOnClick && t.$vexOverlay.bind("click.vex", (function(t) {
                        return t.target === this ? n.close(e(this).data().vex.id) : void 0
                    })), t.$vex.append(t.$vexOverlay), t.$vexContent = e("<div>").addClass(n.baseClassNames.content).addClass(t.contentClassName).css(t.contentCSS).append(t.content).data({
                        vex: t
                    }), t.$vex.append(t.$vexContent), t.showCloseButton && (t.$closeButton = e("<div>").addClass(n.baseClassNames.close).addClass(t.closeClassName).css(t.closeCSS).data({
                        vex: t
                    }).bind("click.vex", (function() {
                        return n.close(e(this).data().vex.id)
                    })), t.$vexContent.append(t.$closeButton)), e(t.appendLocation).append(t.$vex), n.setupBodyClassName(t.$vex), t.afterOpen && t.afterOpen(t.$vexContent, t), setTimeout((function() {
                        return t.$vexContent.trigger("vexOpen", t)
                    }), 0), t.$vexContent
                },
                getAllVexes: function() {
                    return e("." + n.baseClassNames.vex + ':not(".' + n.baseClassNames.closing + '") .' + n.baseClassNames.content)
                },
                getVexByID: function(t) {
                    return n.getAllVexes().filter((function() {
                        return e(this).data().vex.id === t
                    }))
                },
                close: function(e) {
                    var t;
                    if (!e) {
                        if (!(t = n.getAllVexes().last()).length) return !1;
                        e = t.data().vex.id
                    }
                    return n.closeByID(e)
                },
                closeAll: function() {
                    var t;
                    return !!(null != (t = n.getAllVexes().map((function() {
                        return e(this).data().vex.id
                    })).toArray()) ? t.length : void 0) && (e.each(t.reverse(), (function(e, t) {
                        return n.closeByID(t)
                    })), !0)
                },
                closeByID: function(o) {
                    var a, i, r, s, c;
                    return (i = n.getVexByID(o)).length ? (a = i.data().vex.$vex, c = e.extend({}, i.data().vex), r = function() {
                        return c.beforeClose ? c.beforeClose(i, c) : void 0
                    }, s = function() {
                        return i.trigger("vexClose", c), a.remove(), e("body").trigger("vexAfterClose", c), c.afterClose ? c.afterClose(i, c) : void 0
                    }, t ? (r(), a.unbind(n.animationEndEvent).bind(n.animationEndEvent, (function() {
                        return s()
                    })).addClass(n.baseClassNames.closing)) : (r(), s()), !0) : void 0
                },
                closeByEscape: function() {
                    var t, o;
                    return !!(null != (o = n.getAllVexes().map((function() {
                        return e(this).data().vex.id
                    })).toArray()) ? o.length : void 0) && (t = Math.max.apply(Math, o), !0 === n.getVexByID(t).data().vex.escapeButtonCloses && n.closeByID(t))
                },
                setupBodyClassName: function() {
                    return e("body").bind("vexOpen.vex", (function() {
                        return e("body").addClass(n.baseClassNames.open)
                    })).bind("vexAfterClose.vex", (function() {
                        return n.getAllVexes().length ? void 0 : e("body").removeClass(n.baseClassNames.open)
                    }))
                },
                hideLoading: function() {
                    return e(".vex-loading-spinner").remove()
                },
                showLoading: function() {
                    return n.hideLoading(), e("body").append('<div class="vex-loading-spinner ' + n.defaultOptions.className + '"></div>')
                }
            }
        }, "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : window.vex = e(jQuery)
    }.call(this),
    function() {
        var e;
        e = function(e, t) {
            var n, o;
            return null == t ? e.error("Vex is required to use vex.dialog") : (n = function(t) {
                var n;
                return n = {}, e.each(t.serializeArray(), (function() {
                    return n[this.name] ? (n[this.name].push || (n[this.name] = [n[this.name]]), n[this.name].push(this.value || "")) : n[this.name] = this.value || ""
                })), n
            }, (o = {}).buttons = {
                YES: {
                    text: "OK",
                    type: "submit",
                    className: "vex-dialog-button-primary"
                },
                NO: {
                    text: "Cancel",
                    type: "button",
                    className: "vex-dialog-button-secondary",
                    click: function(e) {
                        return e.data().vex.value = !1, t.close(e.data().vex.id)
                    }
                }
            }, o.defaultOptions = {
                callback: function() {},
                afterOpen: function() {},
                message: "Message",
                input: '<input name="vex" type="hidden" value="_vex-empty-value" />',
                value: !1,
                buttons: [o.buttons.YES, o.buttons.NO],
                showCloseButton: !1,
                onSubmit: function(a) {
                    var i, r;
                    return r = (i = e(this)).parent(), a.preventDefault(), a.stopPropagation(), r.data().vex.value = o.getFormValueOnSubmit(n(i)), t.close(r.data().vex.id)
                },
                focusFirstInput: !0
            }, o.defaultAlertOptions = {
                message: "Alert",
                buttons: [o.buttons.YES]
            }, o.defaultConfirmOptions = {
                message: "Confirm"
            }, o.open = function(n) {
                var a;
                return (n = e.extend({}, t.defaultOptions, o.defaultOptions, n)).content = o.buildDialogForm(n), n.beforeClose = function(e) {
                    return n.callback(e.data().vex.value)
                }, a = t.open(n), n.focusFirstInput && a.find('input[type="submit"], textarea, input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"]').first().focus(), a
            }, o.alert = function(t) {
                return "string" == typeof t && (t = {
                    message: t
                }), t = e.extend({}, o.defaultAlertOptions, t), o.open(t)
            }, o.confirm = function(t) {
                return "string" == typeof t ? e.error("dialog.confirm(options) requires options.callback.") : (t = e.extend({}, o.defaultConfirmOptions, t), o.open(t))
            }, o.prompt = function(t) {
                var n;
                return "string" == typeof t ? e.error("dialog.prompt(options) requires options.callback.") : (n = {
                    message: '<label for="vex">' + (t.label || "Prompt:") + "</label>",
                    input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + (t.placeholder || "") + '"  value="' + (t.value || "") + '" />'
                }, t = e.extend({}, n, t), o.open(t))
            }, o.buildDialogForm = function(t) {
                var n, a, i;
                return n = e('<form class="vex-dialog-form" />'), i = e('<div class="vex-dialog-message" />'), a = e('<div class="vex-dialog-input" />'), n.append(i.append(t.message)).append(a.append(t.input)).append(o.buttonsToDOM(t.buttons)).bind("submit.vex", t.onSubmit), n
            }, o.getFormValueOnSubmit = function(e) {
                return e.vex || "" === e.vex ? "_vex-empty-value" === e.vex || e.vex : e
            }, o.buttonsToDOM = function(n) {
                var o;
                return o = e('<div class="vex-dialog-buttons" />'), e.each(n, (function(a, i) {
                    return e('<input type="' + i.type + '" />').val(i.text).addClass(i.className + " vex-dialog-button " + (0 === a ? "vex-first " : "") + (a === n.length - 1 ? "vex-last " : "")).bind("click.vex", (function(n) {
                        return i.click ? i.click(e(this).parents("." + t.baseClassNames.content), n) : void 0
                    })).appendTo(o)
                })), o
            }, o)
        }, "function" == typeof define && define.amd ? define(["jquery", "vex"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), require("vex")) : window.vex.dialog = e(window.jQuery, window.vex)
    }.call(this), vex.defaultOptions.className = "vex-theme-plain", Turbo.session.drive = !1, document.addEventListener("turbo:before-fetch-request", (function(e) {
        console.log("turbo:before-fetch-request"), console.log("Fetching URL:", e.detail.url.href), e.detail.url.href.endsWith("wishlist") || e.detail.url.href.endsWith("loading=false") || showLoading()
    })), document.addEventListener("turbo:frame-render", (function() {
        console.log("turbo:frame-render"), hideLoading()
    })), document.addEventListener("turbo:submit-end", (function() {
        console.log("turbo:submit-end"), hideLoading()
    })), document.addEventListener("turbo:render", (function() {
        console.log("turbo:render"), hideLoading()
    })), document.addEventListener("turbo:load", (function() {
        function e() {
            $(".index .cards__content,.index .articles__content").addClass("owl-carousel"), $(".index .cards__content,.index .articles__content").owlCarousel({
                loop: !0,
                margin: 0,
                nav: !0,
                dots: !1,
                responsive: {
                    600: {
                        items: 3
                    }
                }
            })
        }

        function t() {
            var e = $(".index .cards__content,.index .articles__content");
            void 0 !== e.data("owl.carousel") && e.data("owl.carousel").destroy(), e.removeClass("owl-carousel")
        }

        function n() {
            this.classList.add("hide"), r.classList.add("open")
        }

        function o() {
            document.querySelector(".fixed-events__title.active").classList.remove("active"), this.classList.add("active")
        }
        let a = document.querySelector(".contact__btn");
        document.querySelector(".contact__content");
        a && a.addEventListener("click", (function() {
            window.open("https://m.me/winentaste.tw?openExternalBrowser=1")
        })), $((function() {
            $(".index__banner").owlCarousel({
                autoplay: !0,
                center: !0,
                loop: !0,
                margin: 0,
                nav: !0,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    1024: {
                        items: 3
                    }
                }
            })
        })), $(window).width() > 600 ? e() : t(), $(window).resize((function() {
            $(window).width() > 600 ? e() : t()
        }));
        let i = document.querySelector("#collection-btn"),
            r = document.querySelector(".collection__description");
        i && i.addEventListener("click", n), $((function() {
            $(".product__banner").owlCarousel({
                autoplay: !0,
                loop: !0,
                margin: 0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            })
        })), $((function() {
            $(".ad-slider.owl-carousel").owlCarousel({
                autoplay: !0,
                loop: !0,
                margin: 0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                items: 1
            })
        })), $((function() {
            function e() {
                !t && window.scrollY > n && ("true" != sessionStorage.getItem("magzine.article.ad") && ($(".article-ad").addClass("show"), t = !0), $(window).off("scroll", e))
            }
            var t = !1,
                n = .5 * $(document).height();
            e(), $(window).on("scroll", e), $(".article-ad .icon--close").click((function() {
                sessionStorage.setItem("magzine.article.ad", "true"), $(".article-ad").removeClass("show")
            }))
        }));
        let s = document.querySelectorAll(".fixed-events__title");
        s && s.forEach((function(e) {
            e.addEventListener("click", o)
        })), $((function() {
            $(".search__content").each((function() {
                let e = $(this),
                    t = e.find("input.search__input"),
                    n = e.find("a.btn");
                t.keypress((function(e) {
                    13 == e.keyCode && (location.href = "/products?query=" + encodeURIComponent(t.val()))
                })), n.click((function(e) {
                    e.preventDefault(), location.href = "/products?query=" + encodeURIComponent(t.val())
                }))
            }))
        })), $((function() {
            $("#popup").click((function(e) {
                "icons icon--close" === e.target.className && $("#popup").html(""), e.target.className.includes("close-popup") && $("#popup").html("")
            }))
        })), $((function() {
            $("#flash").click((function(e) {
                "icons icon--close" === e.target.className && $("#flash").html("")
            }))
        })), $((function() {
            function e(e, t) {
                let n = 1,
                    o = e.attr("max") || 24;
                console.log("max_quantity:", o);
                let a = parseInt(t);
                isNaN(a) || a < n ? e.each((function() {
                    $(this).val(n)
                })) : a > o ? e.each((function() {
                    $(this).val(o)
                })) : e.each((function() {
                    $(this).val(a)
                }))
            }

            function t(e, t) {
                console.log("contract_id:", t), console.log("quantity:", e), window.isLogin ? fetch("/cart_items", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "text/vnd.turbo-stream.html",
                        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
                    },
                    body: JSON.stringify({
                        cart_item: {
                            contract_id: t,
                            quantity: e
                        }
                    })
                }).then((e => e.text())).then((e => {
                    Turbo.renderStreamMessage(e)
                })) : (console.log("\u672a\u767b\u5165\uff0c\u8df3\u51fa\u767b\u5165\u756b\u9762"), Turbo.visit("/members/login", {
                    frame: "popup"
                }))
            }
            $(".products .sidebar-content .card .icons.icon--plus").parent().click((function() {
                console.log("\u5546\u54c1\u5217\u8868\u9801\u7684\u6578\u5b57\u6b04\u4f4d\u7684 + \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n + 1)
            })), $(".products .sidebar-content .card .icons.icon--minus").parent().click((function() {
                console.log("\u5546\u54c1\u5217\u8868\u9801\u7684\u6578\u5b57\u6b04\u4f4d\u7684 - \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n - 1)
            })), $(".products .sidebar-content .add-card__qty input").change((function() {
                console.log("\u5546\u54c1\u5217\u8868\u9801\u7684\u6578\u5b57\u6b04\u4f4d \u6539\u8b8a\u4e86");
                let t = $(this);
                e(t, t.val())
            })), $(".product-detail__head .icons.icon--plus,.fixed-area .icons.icon--plus").parent().click((function() {
                console.log("\u5546\u54c1\u5167\u9801\u7684\u6578\u5b57\u6b04\u4f4d\u7684 + \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e($(".product-detail .sidebar-content .product-qty input[type='text']"), n + 1)
            })), $(".box-discount-btn").click((function() {
                let n = parseInt($(this).data("quantity")),
                    o = $(this).data("contract-id"),
                    a = $(".product-detail .sidebar-content .product-qty input[type='text']"),
                    i = parseInt(a.first().val());
                e(a, i < 2 ? n : i + n), t(parseInt(a.first().val()), o)
            })), $(".product-detail__head .icons.icon--minus,.fixed-area .icons.icon--minus").parent().click((function() {
                console.log("\u5546\u54c1\u5167\u9801\u7684\u6578\u5b57\u6b04\u4f4d\u7684 - \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e($(".product-detail .sidebar-content .product-qty input[type='text']"), n - 1)
            })), $(".product-detail__head .add-card__qty input,.fixed-area .add-card__qty input").change((function() {
                console.log("\u5546\u54c1\u5167\u9801\u7684\u6578\u5b57\u6b04\u4f4d \u6539\u8b8a\u4e86");
                let t = $(this),
                    n = parseInt(t.val());
                e($(".product-detail .sidebar-content .product-qty input[type='text']"), n)
            })), $(".product-detail .more-product .icons.icon--plus").parent().click((function() {
                console.log("\u66f4\u591a\u5546\u54c1\u7684\u6578\u5b57\u6b04\u4f4d\u7684 + \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n + 1)
            })), $(".product-detail .more-product .icons.icon--minus").parent().click((function() {
                console.log("\u66f4\u591a\u5546\u54c1\u7684\u6578\u5b57\u6b04\u4f4d\u7684 - \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n - 1)
            })), $(".product-detail .more-product .add-card__qty input").change((function() {
                console.log("\u66f4\u591a\u5546\u54c1\u7684\u6578\u5b57\u6b04\u4f4d \u7528\u6236\u8f38\u5165\u6539\u8b8a");
                let t = $(this),
                    n = parseInt(t.val());
                e(t, n)
            })), $(".sidebar.tablet-hide .icons.icon--plus").parent().click((function() {
                console.log("\u5074\u908a\u6b04\u7684\u6578\u5b57\u6b04\u4f4d\u7684 + \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n + 1)
            })), $(".sidebar.tablet-hide .icons.icon--minus").parent().click((function() {
                console.log("\u5074\u908a\u6b04\u7684\u6578\u5b57\u6b04\u4f4d\u7684 - \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n - 1)
            })), $(".sidebar.tablet-hide .add-card__qty input").change((function() {
                console.log("\u5074\u908a\u6b04\u7684\u6578\u5b57\u6b04\u4f4d \u7528\u6236\u8f38\u5165\u6539\u8b8a");
                let t = $(this),
                    n = parseInt(t.val());
                e(t, n)
            })), $(".article-ad .icons.icon--plus").parent().click((function() {
                console.log("\u6587\u7ae0\u5167\u9801\u7684\u6578\u5b57\u6b04\u4f4d\u7684 + \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n + 1)
            })), $(".article-ad .icons.icon--minus").parent().click((function() {
                console.log("\u6587\u7ae0\u5167\u9801\u7684\u6578\u5b57\u6b04\u4f4d\u7684 - \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n - 1)
            })), $(".article-ad .add-card__qty input").change((function() {
                console.log("\u6587\u7ae0\u5167\u9801\u7684\u6578\u5b57\u6b04\u4f4d \u7528\u6236\u8f38\u5165\u6539\u8b8a");
                let t = $(this),
                    n = parseInt(t.val());
                e(t, n)
            })), $(".article .article .cards__content .icons.icon--plus").parent().click((function() {
                console.log("\u4f60\u6709\u8208\u8da3\u7684\u76f8\u95dc\u7522\u54c1\u6578\u5b57\u6b04\u4f4d\u7684 + \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n + 1)
            })), $(".article .article .cards__content .icons.icon--minus").parent().click((function() {
                console.log("\u4f60\u6709\u8208\u8da3\u7684\u76f8\u95dc\u7522\u54c1\u6578\u5b57\u6b04\u4f4d\u7684 - \u6309\u9215");
                let t = $(this).parents(".add-card__qty").find("input"),
                    n = parseInt(t.val());
                e(t, n - 1)
            })), $(".article .article .cards__content .add-card__qty input").change((function() {
                console.log("\u4f60\u6709\u8208\u8da3\u7684\u76f8\u95dc\u7522\u54c1\u6578\u5b57\u6b04\u4f4d \u7528\u6236\u8f38\u5165\u6539\u8b8a");
                let t = $(this),
                    n = parseInt(t.val());
                e(t, n)
            })), $(".products .sidebar-content .card__add-cart .icons.icon--cart").click((function() {
                console.log("\u5546\u54c1\u5217\u8868 \u52a0\u5165\u8cfc\u7269\u8eca");
                let e = $(this).parents(".card__add-cart").find("input");
                t(parseInt(e.val()), $(this).data("contract_id"))
            })), $(".product-detail .sidebar-content .product-qty>.btn-set>.btn.btn--red").click((function() {
                console.log("\u5546\u54c1\u5167\u9801 \u52a0\u5165\u8cfc\u7269\u8eca");
                let e = $(this).parents(".product-qty").find("input");
                t(parseInt(e.val()), $(this).data("contract_id"))
            })), $(".sidebar.tablet-hide .card__add-cart .icons.icon--cart").click((function() {
                console.log("\u5074\u908a\u6b04 \u52a0\u5165\u8cfc\u7269\u8eca");
                let e = $(this).parents(".card__add-cart").find("input");
                t(parseInt(e.val()), $(this).data("contract_id"))
            })), $(".article-ad .card__add-cart .icons.icon--cart").click((function() {
                console.log("\u6587\u7ae0\u5167\u9801 \u52a0\u5165\u8cfc\u7269\u8eca");
                let e = $(this).parents(".card__add-cart").find("input");
                t(parseInt(e.val()), $(this).data("contract_id"))
            })), $(".product-detail .more-product .card__add-cart .icons.icon--cart").click((function() {
                console.log("\u66f4\u591a\u5546\u54c1 \u52a0\u5165\u8cfc\u7269\u8eca");
                let e = $(this).parents(".card__add-cart").find("input");
                t(parseInt(e.val()), $(this).data("contract_id"))
            })), $(".article .article .cards__content .card__add-cart .icons.icon--cart").click((function() {
                console.log("\u76f8\u95dc\u5546\u54c1 \u52a0\u5165\u8cfc\u7269\u8eca");
                let e = $(this).parents(".card__add-cart").find("input");
                t(parseInt(e.val()), $(this).data("contract_id"))
            }))
        })), $((function() {
            $(".product-detail__img.small-img img").click((function() {
                $(".product-detail__img.small-img").removeClass("active"), $(this).parent().addClass("active");
                let e = $(this).parent().html();
                $(".product-detail__img.big-img").html(e)
            }))
        })), $((function() {
            "true" == new URL(location.href).searchParams.get("login") && $(".login").click()
        }))
    }));