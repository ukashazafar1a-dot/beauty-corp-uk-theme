(window.webpackJsonp = window.webpackJsonp || []).push([[0], [, , , , , , , , , , , , , , , , , function(t, e, n) {}
, , , , , , , , , , , , , , , , function(t, e, n) {
    n.p = theme.path
}
, , function(t, e, n) {}
, , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, , , , function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n(18),
    n(31),
    n(33),
    n(34),
    n(16),
    n(35);
    var r = n(8)
      , i = n.n(r)
      , a = n(4)
      , o = n.n(a)
      , c = n(5)
      , s = n.n(c)
      , u = n(1)
      , l = n.n(u)
      , d = n(9)
      , p = n.n(d)
      , f = n(10)
      , h = n.n(f)
      , v = n(3)
      , m = n.n(v)
      , g = (n(37),
    n(0))
      , y = n(7)
      , b = n.n(y);
    function w(t, e) {
        "string" == typeof t && (t = t.replace(".", ""));
        var n = ""
          , r = /\{\{\s*(\w+)\s*\}\}/
          , i = e || "${{amount}}";
        function a(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ","
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".";
            if (isNaN(t) || null == t)
                return 0;
            var i = (t = t.toFixed(e)).split(".");
            return i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1".concat(n)) + (i[1] ? r + i[1] : "")
        }
        switch (i.match(r)[1]) {
        case "amount":
            n = a(t, 2);
            break;
        case "amount_no_decimals":
            n = a(t, 0);
            break;
        case "amount_with_comma_separator":
            n = a(t, 2, ".", ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            n = a(t, 0, ".", ",")
        }
        return i.replace(r, n)
    }
    var O = n(12)
      , _ = n.n(O);
    function S(t, e) {
        if (null === e)
            return t;
        if ("master" === e)
            return j(t);
        var n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (n) {
            var r = t.split(n[0])
              , i = n[0];
            return j("".concat(r[0], "_").concat(e).concat(i))
        }
        return null
    }
    function j(t) {
        return t.replace(/http(s)?:/, "")
    }
    function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
    }
    function x(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? k(Object(n), !0).forEach(function(e) {
                i()(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    var q = function(t) {
        p()(n, t);
        var e = function(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = m()(t);
                if (e) {
                    var i = m()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return h()(this, n)
            }
        }(n);
        function n(t) {
            var r;
            o()(this, n),
            r = e.call(this, t);
            var i = t.data;
            return r.state = x({}, i.item),
            r.updateItem = r.updateItem.bind(l()(r)),
            r.removeItem = r.removeItem.bind(l()(r)),
            r
        }
        return s()(n, [{
            key: "componentWillReceiveProps",
            value: function(t) {
                var e = t.data;
                this.setState(x({}, e.item))
            }
        }, {
            key: "removeItem",
            value: function(t) {
                t.preventDefault(),
                this.updateItem(0)
            }
        }, {
            key: "updateItem",
            value: async function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this.props.data.routes
                  , r = this.state.id
                  , i = "".concat(n.cartChange, ".js")
                  , a = {
                    data: {
                        id: String(r),
                        quantity: t,
                        properties: e
                    },
                    url: i,
                    credentials: "same-origin",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                };
                try {
                    await b()(a),
                    this.props.action()
                } catch (t) {
                    t.response.data.status
                }
            }
        }, {
            key: "render",
            value: function() {
                var t = this
                  , e = this.props.data
                  , n = e.options
                  , r = (e.translations,
                this.state)
                  , i = r.id
                  , a = r.title
                  , o = r.image
                  , c = r.url
                  , s = r.stock
                  , u = r.quantity
                  , l = r.price
                  , d = r.attributes;
                return Object(g.c)("li", {
                    className: "cart-item",
                    key: i
                }, Object(g.c)("div", {
                    className: "cart-item__image u-aspect-ratio",
                    style: "--aspect-ratio: 1.0"
                }, Object(g.c)("a", {
                    href: c
                }, Object(g.c)("img", {
                    className: "lazy",
                    alt: o.alt,
                    "data-src": S(o.src, "{width}x"),
                    "data-sizes": "auto",
                    "data-widths": "[200,300,400]"
                }))), Object(g.c)("div", {
                    className: "cart-item__details"
                }, Object(g.c)("span", {
                    className: "cart-item__title"
                }, a), d.length ? Object(g.c)("ul", {
                    className: "cart-item__attributes u-nolist"
                }, d.map(function(t) {
                    var e = t.name
                      , n = t.value;
                    return Object(g.c)("li", null, e, ": ", n)
                })) : "", Object(g.c)("div", {
                    className: "cart-item__quantity"
                }, Object(g.c)("select", {
                    name: "update",
                    onChange: function(e) {
                        var n = e.target;
                        
                        return t.updateItem(n.value)
                    },
                    "aria-label": "Wähle deine Menge aus:"
                }, _()(Array(s)).map(function(t, e) {
                    return Object(g.c)("option", {
                        value: e + 1,
                        selected: e + 1 === u,
                        "aria-label": "Menge: ".concat(e + 1)
                    }, e + 1)
                })), Object(g.c)("i", {
                    className: "icon icon-dropdown"
                }))), Object(g.c)("div", {
                    className: "cart-item__price"
                }, l.unit.compareAt > l.unit.regular ? Object(g.c)(g.b, null, Object(g.c)("span", {
                    className: "price price--striked"
                }, w(l.unit.compareAt, n.moneyFormat)), Object(g.c)("span", {
                    className: "price price--sale"
                }, w(l.unit.regular, n.moneyFormat))) : Object(g.c)("span", {
                    className: "price"
                }, w(l.unit.regular, n.moneyFormat))), Object(g.c)("button", {
                    className: "cart-item__remove",
                    name: "remove",
                    onClick: function(e) {
                        return t.removeItem(e)
                    },
                    "aria-label": "".concat(a, " aus dem Warenkorb entfernen")
                }, Object(g.c)("i", {
                    className: "icon icon-close"
                })))
            }
        }]),
        n
    }(g.a);
    function E(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
    }
    var A = function(t) {
        p()(n, t);
        var e = function(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = m()(t);
                if (e) {
                    var i = m()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return h()(this, n)
            }
        }(n);
        function n() {
            var t;
            o()(this, n),
            t = e.call(this);
            var r = {
                moneyFormat: window.theme.currency.moneyWithCurrencyFormat
            };
            return t.state = {
                attributes: {},
                itemCount: 0,
                items: [],
                note: null,
                summary: {},
                translation: {},
                routes: {
                    cart: `${Shopify.locale == 'de' ? '' : '/en'}/cart`,
                    cartAdd: "/cart/add",
                    cartChange: "/cart/change",
                    cartClear: "/cart/clear"
                },
                options: r
            },
            t.getCart = t.getCart.bind(l()(t)),
            t.toggleCart = t.toggleCart.bind(l()(t)),
            t.addItem = t.addItem.bind(l()(t)),
            t
        }
        return s()(n, [{
            key: "componentDidMount",
            value: function() {
                var t = this;
                window.addEventListener("load", function() {
                    return t.getCart()
                });
                for (var e = document.querySelectorAll('a[href="/cart"]'), n = 0; n < e.length; n += 1)
                    e[n].addEventListener("click", function(e) {
                        e.preventDefault(),
                        t.toggleCart()
                    });
                document.addEventListener("cart:itemAdded", this.addItem.bind(this))
            }
        }, {
            key: "addItem",
            value: async function() {
                await this.getCart(),
                this.toggleCart()
            }
        }, {
            key: "getCart",
            value: async function() {
                var t = this
                  , e = this.state.routes
                  , n = "".concat(e.cart, "?view=json&timestamp=").concat(Date.now())
                  , r = sessionStorage.getItem("cart");
                return new Promise(async function(e) {
                    if (!r)
                        try {
                            var a = (await b.a.get(n)).data;
                            t.setState(function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? E(Object(n), !0).forEach(function(e) {
                                        i()(t, e, n[e])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    })
                                }
                                return t
                            }({}, a)),
                            e(a)
                        } catch (t) {
                            console.log(t)
                        }
                }
                )
            }
        }, {
            key: "toggleCart",
            value: function() {
                document.querySelector(".overlay").classList.toggle("active"),
                document.getElementById("cart").classList.toggle("-active"),
                document.getElementById("cart").classList.contains("-active") ? document.querySelector(".overlay").addEventListener("click", this.toggleCart.bind(this)) : document.querySelector(".overlay").removeEventListener("click", this.toggleCart.bind(this))
            }
        }, {
            key: "render",
            value: function() {
                var t = this
                  , e = this.state
                  , n = e.items
                  , r = e.itemCount
                  , i = e.summary
                  , a = e.translations
                  , o = e.routes
                  , c = e.options;
                return document.querySelector('a[href="/cart"]').setAttribute("data-item-count", r),
                Object(g.c)(g.b, null, Object(g.c)("div", {
                    className: "cart__header"
                }, Object(g.c)("i", {
                    className: "icon icon-cart"
                }), void 0 !== (null == a ? void 0 : a.title) ? Object(g.c)("p", null, a.title, Object(g.c)("span", null, "(", r, ")")) : "", Object(g.c)("i", {
                    className: "icon icon-close",
                    onClick: this.toggleCart
                })), n.length > 0 ? Object(g.c)("form", {
                    className: "cart__form cart-form",
                    action: o.cart,
                    method: "post",
                    novalidate: !0
                }, Object(g.c)("ul", {
                    className: "cart-form__list u-scrollable"
                }, n.map(function(e) {
                    return Object(g.c)(q, {
                        data: {
                            item: e,
                            translations: a,
                            routes: o,
                            options: c
                        },
                        action: t.getCart
                    })
                })), Object(g.c)("div", {
                    className: "cart-form__summary"
                }, Object(g.c)("div", {
                    className: "cart-shipping"
                }, Object(g.c)("span", null, a.shipping), Object(g.c)("span", null, a.calculateship)), i.savings > 0 ? Object(g.c)("div", {
                    className: "cart-savings"
                }, Object(g.c)("span", null, a.savings), Object(g.c)("span", null, w(i.savings, c.moneyFormat))) : "", Object(g.c)("div", {
                    className: "cart-total"
                }, Object(g.c)("span", null, a.total), Object(g.c)("span", null, w(i.total, c.moneyFormat))), Object(g.c)("button", {
                    className: "btn btn-primary rf-submit-to-cart",
                    name: "cart"
                }, a.button))) : Object(g.c)("div", {
                    className: "cart-empty"
                }, Object(g.c)("div", {
                    className: "cart-empty__text"
                }, "Dein Warenkorb ist leer."), Object(g.c)("a", {
                    href: "/collections/alle-produkte",
                    className: "btn btn-primary"
                }, "Haarbänder entdecken")))
            }
        }]),
        n
    }(g.a);
    function L(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
    }
    function P(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? L(Object(n), !0).forEach(function(e) {
                i()(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
//     Object(g.e)(Object(g.c)(A, null), document.getElementById("cart")),
    new (function() {
        function t() {
            var e = this
              , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o()(this, t);
            var r = n.selectors
              , i = void 0 === r ? {} : r
              , a = n.settings
              , c = void 0 === a ? {} : a;
            this.settings = Object.assign({
                enableHistoryState: !0
            }, c);
            this.selectors = Object.assign({
                form: ".product-form",
                optionInput: 'input[name^="option"]',
                propertyInput: 'input[name^="properties"]',
                quantityInput: 'input[name="quantity"]',
                submitButton: 'button[type="submit"]'
            }, i),
            this.$container = document.querySelector(".template-product"),
            this.$container && (this.firstTime = !0,
            this.$form = document.querySelector(this.selectors.form),
            this.$submitButton = this.$form.querySelector(this.selectors.submitButton),
            this.$optionInputs = this.$form.querySelectorAll(this.selectors.optionInput),
            this.$propertyInputs = this.$form.querySelectorAll(this.selectors.propertyInput),
            this.$quantityInput = this.$form.querySelector(this.selectors.quantityInput),
            document.querySelector(".product-option__list") && document.querySelector(".product-option__list").insertBefore(document.querySelector(".product-option-item input:checked").parentNode, document.querySelector(".product-option__list").firstChild),
            this.$form.addEventListener("submit", this._handleSubmit.bind(this)),
            window.addEventListener("load", function() {
                e._getProductData(product.handle)
            }))
        }
        return s()(t, [{
            key: "_handleSubmit",
            value: function() {
                event.preventDefault(),
                async function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (void 0 === t)
                        return console.error("Can not add item to cart: Missing product id");
                    var r = {
                        data: {
                            id: t,
                            quantity: e,
                            properties: n
                        },
                        url: "".concat(window.routes.cartAdd, ".js"),
                        credentials: "same-origin",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    };
                    try {
                        var i = (await b()(r)).data
                          , a = new CustomEvent("cart:itemAdded",{
                            detail: i
                        });
                        document.dispatchEvent(a)
                    } catch (t) {
                        var o = t.response;
                        return o.data.status,
                        o
                    }
                }(this.currentVariant.id, this.$quantityInput.value, {})
            }
        }, {
            key: "_getProductData",
            value: function(t) {
                var e = this;
                b.a.get("/products/".concat(t, ".js")).then(function(t) {
                    var n = t.data;
                    return e._handleProductFetch(n)
                })
            }
        }, {
            key: "_handleProductFetch",
            value: function(t) {
                var e = this;
                this.variants = t.variants,
                this.currentVariant = this._getVariantFromOptions(),
                this._buildImages(t),
                this.$optionInputs.forEach(function(t) {
                    t.addEventListener("change", e._onSelectChange.bind(e))
                })
            }
        }, {
            key: "hideSoldOutVariants",
            value: function(t) {
                for (var e = 0; e < t.length; e += 1)
                    if (!t[e].available) {
                        var n = document.querySelector('input[value="'.concat(t[e].title, '"]')).parentNode;
                        n.parentNode.removeChild(n)
                    }
            }
        }, {
            key: "_buildImages",
            value: function(t) {
                for (var e = [], n = null, r = 0; r < t.media.length; r++) {
                    for (var i = t.media[r], a = {
                        id: i.id,
                        type: "ALL"
                    }, o = !1, c = function(r) {
                        var c = t.variants[r]
                          , s = c.id
                          , u = c.title
                          , l = c.featured_media
                          , d = e.filter(function(t) {
                            return t.id === s
                        })[0]
                          , p = d || {
                            id: s,
                            title: u,
                            images: []
                        };
                        l && l.id === i.id && (a = P(P({}, a), {}, {
                            type: "FEATURED"
                        }),
                        p.images.push(a),
                        o = !0,
                        n = s),
                        n || p.images.push(a),
                        d || e.push(p)
                    }, s = 0; s < t.variants.length; s++)
                        c(s);
                    if (!o) {
                        var u = e.filter(function(t) {
                            return t.id === n
                        })[0];
                        u && (a = P(P({}, a), {}, {
                            type: "FEATURED"
                        }),
                        u.images.push(a))
                    }
                }
                this.variantsTemp = e,
                this._doImagesTemp()
            }
        }, {
            key: "_doImagesTemp",
            value: function() {
                for (var t = this, e = this.currentVariant, n = this.variantsTemp, r = document.querySelector(".product-gallery__container.swiper-container"), i = document.querySelectorAll(".product-image"), a = function(t) {
                    var r = i[t]
                      , a = Number(r.getAttribute("data-media-id"))
                      , o = n.filter(function(t) {
                        return t.id === e.id
                    })[0].images.filter(function(t) {
                        return t.id === a
                    })[0];
                    if (o) {
                        if ("ALL" === o.type) {
                            var c = r.parentNode
                              , s = r.cloneNode(!0);
                            c.removeChild(r),
                            c.appendChild(s),
                            s.classList.remove("skeleton"),
                            s.classList.remove("skeleton-temp")
                        }
                        r.classList.remove("u-hidden")
                    } else
                        r.classList.add("u-hidden");
                    r.classList.remove("skeleton"),
                    r.classList.remove("skeleton-temp")
                }, o = 0; o < i.length; o++)
                    a(o);
                r && r.swiper && "function" == typeof r.swiper.update && (r.swiper.update(),
                r.swiper.slideTo(0));
                var c = document.querySelectorAll(".product-gallery__thumbs .swiper-slide");
                if (this.firstTime)
                    for (var s = function(e) {
                        var n = c[e];
                        n.classList.contains("u-hidden"),
                        n.addEventListener("click", function(t) {
                            t.preventDefault();
                            var n = t.target.getAttribute("data-media-id");
                            document.querySelector('.product-gallery__container .product-image[data-media-id="'.concat(n)),
                            r.swiper.slideTo(e)
                        }),
                        t.firstTime = !1
                    }, u = 0; u < c.length; u++)
                        s(u)
            }
        }, {
            key: "_onSelectChange",
            value: function() {
                var t = this._getVariantFromOptions();
                this.currentVariant = t,
                this._updateMeta(t),
                this._updateSubmitButton(t),
                this._doImagesTemp(t),
                this.settings.enableHistoryState && this._updateHistoryState(t)
            }
        }, {
            key: "_updateMeta",
            value: function(t) {
                if (t && this.currentVariant) {
                    var e = event.target.dataset.option;
                    document.querySelector('legend[data-option="'.concat(e, '"]')).querySelector("span").innerText = t["option".concat(e)]
                }
            }
        }, {
            key: "_updateSubmitButton",
            value: function(t) {
                var e = this.$submitButton
                  , n = strings.product.form
                  , r = n.addToCart
                  , i = n.soldOut
                  , a = n.unavailable;
                t ? t.available ? (e.classList.remove("disabled"),
                e.removeAttribute("disabled"),
                e.innerText = r) : (e.classList.add("disabled"),
                e.setAttribute("disabled", !0),
                e.innerText = i) : (e.classList.add("disabled"),
                e.setAttribute("disabled", !0),
                e.innerText = a)
            }
        }, {
            key: "_updateHistoryState",
            value: function(t) {
                if (t) {
                    var e = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + t.id;
                    window.history.replaceState({
                        path: e
                    }, "", e)
                }
            }
        }, {
            key: "_getVariantFromOptions",
            value: function() {
                var t = this._getCurrentOptions()
                  , e = !1;
                return this.variants.forEach(function(n) {
                    var r = !0;
                    t.forEach(function(t) {
                        r && (r = n[t.index] === t.value)
                    }),
                    r && (e = n)
                }),
                e || null
            }
        }, {
            key: "_getCurrentOptions",
            value: function() {
                var t = Array.prototype.slice.call(this.$optionInputs).map(function(t) {
                    var e = t.getAttribute("type")
                      , n = {};
                    return "radio" === e || "checkbox" === e ? !!t.checked && (n.value = t.value,
                    n.index = t.getAttribute("name").replace("-", ""),
                    n) : (n.value = t.value,
                    n.index = t.getAttribute("name").replace("-", ""),
                    n)
                });
                return function(t) {
                    for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n; ) {
                        var a = t[e];
                        a && (i[r++] = a)
                    }
                    return i
                }(t)
            }
        }]),
        t
    }()),
    n(58);
    var C = n(2);
    C.c.use([C.a]),
    new C.c(".announcement-bar.swiper-container",{
        init: !1,
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: !1,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            init: function() {
                setTimeout(function() {
                    window.dispatchEvent(new Event("resize"))
                }, 0)
            }
        }
    }).init(),
    window.addEventListener("load", function() {
        return document.documentElement.style.setProperty("--announcement-bar-height", "".concat(document.getElementById("shopify-section-announcement-bar").offsetHeight, "px"))
    }),
    n(59);
    var D = n(13)
      , I = document.querySelector(".hamburger-menu")
      , N = document.querySelector(".nav-mobile")
      , R = document.querySelector(".nav-mobile__menu");
    I.addEventListener("click", function() {
        I.classList.contains("active") ? (Object(D.b)(R),
        I.classList.remove("active"),
        N.classList.remove("active")) : (Object(D.a)(R),
        I.classList.add("active"),
        N.classList.add("active"))
    }),
    window.addEventListener("load", function() {
        return document.documentElement.style.setProperty("--header-height", "".concat(document.getElementById("shopify-section-header").offsetHeight, "px"))
    }),
    n(60),
    n(61),
    n(62),
    n(63),
    n(64),
    n(65),
    n(66);
    var T = n(14)
      , $ = n.n(T)
      , z = (n(70),
    n(15))
      , B = n.n(z)
      , H = n(11)
      , F = n.n(H);
    function M(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }
    function V(t, e, n, r) {
        var i, a, o, c, s = null, u = -1;
        if (n) {
            if (0 === r)
                return null;
            -1 !== r && (u = r - 1)
        }
        if (null == t || null == e || !Array.isArray(e) || e.length < 1)
            s = null;
        else if (Array.isArray(t)) {
            for (s = [],
            i = 0; i < t.length; i++)
                a = e.slice(0),
                null !== (o = V(t[i], a, n, u - 1)) && s.push(o);
            0 === s.length && (s = null)
        } else if ("object" === F()(t))
            if (c = e[0],
            !t.hasOwnProperty(c) && n) {
                var l = Object.keys(t);
                for (s = [],
                i = 0; i < l.length; i++) {
                    var d = t[l[i]];
                    if (null != d)
                        if (Array.isArray(d))
                            d.forEach(function(t) {
                                var r = V(t, e, n, u);
                                null !== r && s.push(r)
                            });
                        else if ("Object" === d.constructor.name) {
                            var p = V(d, e, n, u);
                            null !== p && s.push(p)
                        }
                }
                0 === s.length ? s = null : 1 === s.length && (s = s[0])
            } else
                s = e.length < 2 ? t[c] : V(t[c], e.slice(1), n, u);
        return s
    }
    function J(t, e, n) {
        return void 0 !== t ? t : void 0 !== e ? e : n
    }
    function W(t, e) {
        var n = {};
        return t = t || {},
        n.negator = J(t._not, e.negator, !1),
        n.joinAnd = "OR" !== J(t._join, e.join, "AND"),
        n.text = J(t._text, e.text, !1),
        n.word = J(t._word, e.word, !1),
        n.regexp = J(t._regexp, e.regexp, !1),
        n.start = J(t._start, e.start, !1),
        n.end = J(t._end, e.end, !1),
        n.separator = t._separator || e.separator || ".",
        n.propertySearch = J(t._propertySearch, e.propertySearch, !1),
        n.propertySearchDepth = J(t._propertySearchDepth, e.propertySearchDepth, -1),
        n
    }
    var U = {};
    function X(t, e, n, r, i, a, o) {
        var c, s, u, l, d, p = !1;
        if (c = F()(t),
        null === t)
            p = null === e;
        else if (void 0 === t)
            p = void 0 === e;
        else if ("boolean" === c)
            p = e === t;
        else if ("number" === c || t instanceof Date)
            null != e && "object" === M(e) ? void 0 !== e.from || void 0 !== e.to || void 0 !== e.gte || void 0 !== e.lte ? (l = e.from || e.gte,
            d = e.to || e.lte,
            p = (void 0 === e.from && void 0 === e.gte || t >= l) && (void 0 === e.to && void 0 === e.lte || t <= d)) : void 0 === e.gt && void 0 === e.lt || (p = (void 0 === e.gt || t > e.gt) && (void 0 === e.lt || t < e.lt)) : p = t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : t === e;
        else if ("string" === c)
            "string" == typeof e && (e = e.toLowerCase()),
            t = t.toLowerCase(),
            n ? p = -1 !== t.indexOf(e) : i ? (s = function(t) {
                var e = t.match(/(\/?)(.+)\1([a-z]*)/i);
                return e[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(e[3]) ? RegExp(t) : new RegExp(e[2],e[3])
            }(e),
            p = t && null !== t.match(s)) : r ? (s = new RegExp("(\\s|^)" + e + "(?=\\s|$)","i"),
            p = t && null !== t.match(s)) : a ? (s = new RegExp("^" + e,"i"),
            p = t && null !== t.match(s)) : o ? (s = new RegExp(e + "$","i"),
            p = t && null !== t.match(s)) : null != e && "object" === M(e) ? void 0 !== e.from || void 0 !== e.to || void 0 !== e.gte || void 0 !== e.lte ? (l = e.from || e.gte,
            d = e.to || e.lte,
            p = (void 0 === e.from && void 0 === e.gte || t >= l) && (void 0 === e.to && void 0 === e.lte || t <= d)) : void 0 === e.gt && void 0 === e.lt || (p = (void 0 === e.gt || t > e.gt) && (void 0 === e.lt || t < e.lt)) : p = e === t;
        else if (void 0 !== t.length)
            for (u = 0; u < t.length && !(p = X(t[u], e, n, r, i, a, o)); u++)
                ;
        else
            "object" === c && (p = void 0 !== t[e]);
        return p
    }
    function Q(t, e) {
        return Z(t, e, W(e, U))
    }
    function Z(t, e, n) {
        var r, i, a, o, c, s;
        if (e = e || {},
        a = !!n.joinAnd,
        e.terms)
            for (i = 0; i < e.terms.length; i++) {
                if (o = Q(t, e.terms[i]),
                n.negator && (o = !o),
                n.joinAnd && !o) {
                    a = !1;
                    break
                }
                if (!n.joinAnd && o) {
                    a = !0;
                    break
                }
            }
        else
            for (r in e)
                if (e.hasOwnProperty(r) && 0 !== r.indexOf("_")) {
                    for (s = r.split(n.separator),
                    c = [].concat(e[r]),
                    i = 0; i < c.length && !(o = X(V(t, s, n.propertySearch, n.propertySearchDepth), c[i], n.text, n.word, n.regexp, n.start, n.end)); i++)
                        ;
                    if (n.negator && (o = !o),
                    n.joinAnd && !o) {
                        a = !1;
                        break
                    }
                    if (!n.joinAnd && o) {
                        a = !0;
                        break
                    }
                }
        return a
    }
    var G = function(t) {
        var e = t;
        e = (e = function(t) {
            var e = {
                ae: "ä",
                oe: "ö",
                ue: "ü",
                ss: "ß",
                "ä": "ae",
                "ö": "oe",
                "ü": "ue",
                "ß": "ss"
            }
              , n = /ä|ö|ü|ß/i.test(t) ? /ä|ö|ü|ß/gi : /ae|oe|aa|ss/gi;
            return t.replace(n, function(t) {
                return e[t]
            })
        }(e)).toLowerCase();
        for (var n = ['"', "'", "\\", "(", ")", "[", "]"], r = 0; r < n.length; r += 1)
            e = e.replace(n[r], "");
        return "-" === (e = e.replace(/\W+/g, "-")).charAt(e.length - 1) && (e = e.replace(/-+\z/, "")),
        "-" == e.charAt(0) && (e = e.replace(/\A-+/, "")),
        e
    };
    new (function() {
        function t(e) {
            o()(this, t),
            this.selectors = Object.assign({
                wrapper: ".product-finder",
                step: ".product-finder__step",
                checkbox: 'input[type="radio"]',
                startButton: ".product-finder__start.btn",
                nextButton: ".product-finder__next.btn"
            }, e),
            this.$wrapper = document.querySelector(this.selectors.wrapper),
            this.$wrapper && (this.terms = [],
            this.$steps = this.$wrapper.querySelectorAll(this.selectors.step),
            this.$wrapper.classList.add("active"),
            this.currentStep = 1,
            this.maxSteps = 5,
            this.initStep(this.currentStep))
        }
        return s()(t, [{
            key: "initStep",
            value: function(t, e) {
                var n = this
                  , r = this.$steps[t - 1];
                if (!r)
                    return console.log("Step is not defined");
                e && (B.a.center(r, 600),
                2 === t && b.a.get("/collections/all?view=json").then(function(t) {
                    var e = t.data;
                    return n.processProducts(e)
                }).catch(function(t) {
                    return console.log(t)
                })),
                document.querySelectorAll(".product-finder-navigation .step")[t - 1].classList.add("active"),
                t > 1 && document.querySelectorAll(".product-finder-navigation .step")[t - 2].classList.add("done");
                var i = r.querySelectorAll(this.selectors.checkbox)
                  , a = r.querySelector(this.selectors.nextButton);
                i.forEach(function(t) {
                    return t.addEventListener("change", function(t) {
                        return n.selectCheckbox(t, i)
                    })
                }),
                a.addEventListener("click", function(e) {
                    return n.nextStep(e, t)
                })
            }
        }, {
            key: "nextStep",
            value: function(t, e) {
                t.preventDefault();
                var n = this.$wrapper.querySelectorAll("fieldset")[e - 1];
                if (n.querySelectorAll("input:checked").length) {
                    var r = n.querySelector("input:checked").value;
                    if (this.terms.push({
                        guidedSelling: "".concat(e, "-").concat(G(r))
                    }),
                    e === this.maxSteps)
                        return document.querySelectorAll(".product-finder-navigation .step")[document.querySelectorAll(".product-finder-navigation .step").length - 1].classList.add("done"),
                        this.showResults();
                    this.$steps.forEach(function(t) {
                        return t.style.transform = "translateX(".concat(-100 * e, "%)")
                    }),
                    this.currentStep = e + 1,
                    this.initStep(this.currentStep, !0)
                }
            }
        }, {
            key: "showResults",
            value: function() {
                var t = this.terms
                  , e = function(t, e) {
                    var n, r = [], i = W(e, U);
                    if (t && t.length > 0)
                        for (n = 0; n < t.length; n++)
                            Z(t[n], e, i) && r.push(t[n]);
                    return r
                }(this.products, {
                    _join: "AND",
                    terms: t
                });
                this.$wrapper.classList.add("u-hidden"),
                e.length && this.renderItems(e)
            }
        }, {
            key: "selectCheckbox",
            value: function(t, e) {
                var n = t.target;
                this.deselectCheckbox(e),
                n.checked = !0
            }
        }, {
            key: "deselectCheckbox",
            value: function(t) {
                for (var e = 0; e < t.length; e += 1)
                    t[e].checked = !1
            }
        }, {
            key: "renderItems",
            value: function(t) {
                var e = window.theme.currency.moneyWithCurrencyFormat
                  , n = t.map(function(t) {
                    var n = t.id
                      , r = t.handle
                      , i = t.title
                      , a = t.price
                      , o = t.image;
                    console.log('Items>>>', t);
                    return '\n\t\t\t\t<div class="product-card" data-product-id="'.concat(n, '">\n\t\t\t\t\t<a class="product-card__link" href="/products/').concat(r, '">\n\t\t\t\t\t\t<div class="product-card__container">\n\t\t\t\t\t\t\t<div class="product-card__image u-aspect-ratio" style="--aspect-ratio: 1.0;">\n\t\t\t\t\t\t\t\t<img \n\t\t\t\t\t\t\t\t\tclass="lazy fade-in" \n\t\t\t\t\t\t\t\t\talt="').concat(o.alt, '"\n\t\t\t\t\t\t\t\t\tdata-src="').concat(S(o.src, "{width}x"), '" \t\n\t\t\t\t\t\t\t\t\tdata-sizes="auto"\n\t\t\t\t\t\t\t\t\tdata-widths="[200,300,400,600,800,1000,1200]"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t<div class="product-card__details">\n\t\t\t\t\t\t\t\t<span class="product-card__title u-nobreak">').concat(i, '</span>\n\t\t\t\t\t\t\t\t<span class="product-card__price">').concat(w(a.min, e), "</span><button class='btn btn-fullwidth product-card-add-to-cart product-card-add-to-cart--js' data-id='33911205298235'><p>Add to cart</p></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t")
                }).join("");
                document.querySelector(".product-finder-results").classList.add("active"),
                document.querySelector(".product-finder-results__list").innerHTML = n,
                document.querySelector(".product-finder-results__title").innerText = 1 === t.length ? "Dieses Haarband passt perfekt zu dir:" : "Diese ".concat(t.length, " Haarbänder passen perfekt zu dir:")
            }
        }, {
            key: "processProducts",
            value: function(t) {
                var e = this
                  , n = t.products;
                this.products = [],
                n.forEach(function(t) {
                    t.available && (t.tags.forEach(function(e) {
                        var n = e.split("gs:");
                        console.log('Tags>>', n);
                        if (2 === n.length) {
                            var r = $()(n, 2)
                              , i = (r[0],
                            r[1]);
                            t.guidedSelling || (t.guidedSelling = []),
                            t.guidedSelling.push(i)
                        }
                    }),
                    e.products.push(t))
                })
            }
        }]),
        t
    }()),
    n(17),
    n(71),
    C.c.use([C.b]),
    new C.c(".review-slider.swiper-container",{
        slidesPerView: "auto",
        spaceBetween: 0,
        autoHeight: 1,
        centeredSlides: !1,
        loop: !1,
        pagination: {
            el: ".swiper-pagination"
        },
        on: {
            init: function() {
                setTimeout(function() {
                    window.dispatchEvent(new Event("resize"))
                }, 0)
            }
        }
    }),
    n(72),
    C.c.use([C.b]);
    var K, Y = window.matchMedia("(min-width: 1008px)"), tt = function() {
        !0 === Y.matches ? K && "function" == typeof K.destroy && K.destroy(!0, !0) : K = new C.c(".card-slider.swiper-container",{
            slidesPerView: "auto",
            spaceBetween: 24,
            centeredSlides: !0,
            initialSlide: 0,
            loop: !1,
            pagination: {
                el: ".swiper-pagination"
            },
            on: {
                init: function() {
                    setTimeout(function() {
                        window.dispatchEvent(new Event("resize"))
                    }, 0)
                }
            }
        })
    };
    Y.addListener(tt),
    tt(),
    n(73),
    n(74),
    n(75),
    n(76);
    var et = n(30)
      , nt = (n.n(et),
    {});
    function rt(t, e, n) {
        return void 0 !== t ? t : void 0 !== e ? e : n
    }
    function it(t, e) {
        var n = {};
        return t = t || {},
        n.negator = rt(t._not, e.negator, !1),
        n.joinAnd = "OR" !== rt(t._join, e.join, "AND"),
        n.text = rt(t._text, e.text, !1),
        n.word = rt(t._word, e.word, !1),
        n.regexp = rt(t._regexp, e.regexp, !1),
        n.start = rt(t._start, e.start, !1),
        n.end = rt(t._end, e.end, !1),
        n.separator = t._separator || e.separator || ".",
        n.propertySearch = rt(t._propertySearch, e.propertySearch, !1),
        n.propertySearchDepth = rt(t._propertySearchDepth, e.propertySearchDepth, -1),
        n
    }
    function at(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }
    function ot(t, e, n, r) {
        var i, a, o, c, s = null, u = -1;
        if (n) {
            if (0 === r)
                return null;
            -1 !== r && (u = r - 1)
        }
        if (null == t || null == e || !Array.isArray(e) || e.length < 1)
            s = null;
        else if (Array.isArray(t)) {
            for (s = [],
            i = 0; i < t.length; i++)
                a = e.slice(0),
                null !== (o = ot(t[i], a, n, u - 1)) && s.push(o);
            0 === s.length && (s = null)
        } else if ("object" === F()(t))
            if (c = e[0],
            !t.hasOwnProperty(c) && n) {
                var l = Object.keys(t);
                for (s = [],
                i = 0; i < l.length; i++) {
                    var d = t[l[i]];
                    if (null != d)
                        if (Array.isArray(d))
                            d.forEach(function(t) {
                                var r = ot(t, e, n, u);
                                null !== r && s.push(r)
                            });
                        else if ("Object" === d.constructor.name) {
                            var p = ot(d, e, n, u);
                            null !== p && s.push(p)
                        }
                }
                0 === s.length ? s = null : 1 === s.length && (s = s[0])
            } else
                s = e.length < 2 ? t[c] : ot(t[c], e.slice(1), n, u);
        return s
    }
    function ct(t, e) {
        return ut(t, e, it(e, nt))
    }
    function st(t, e, n, r, i, a, o) {
        var c, s, u, l, d, p = !1;
        if (c = F()(t),
        null === t)
            p = null === e;
        else if (void 0 === t)
            p = void 0 === e;
        else if ("boolean" === c)
            p = e === t;
        else if ("number" === c || t instanceof Date)
            null != e && "object" === at(e) ? void 0 !== e.from || void 0 !== e.to || void 0 !== e.gte || void 0 !== e.lte ? (l = e.from || e.gte,
            d = e.to || e.lte,
            p = (void 0 === e.from && void 0 === e.gte || t >= l) && (void 0 === e.to && void 0 === e.lte || t <= d)) : void 0 === e.gt && void 0 === e.lt || (p = (void 0 === e.gt || t > e.gt) && (void 0 === e.lt || t < e.lt)) : p = t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : t === e;
        else if ("string" === c)
            "string" == typeof e && (e = e.toLowerCase()),
            t = t.toLowerCase(),
            n ? p = -1 !== t.indexOf(e) : i ? (s = regexParser(e),
            p = t && null !== t.match(s)) : r ? (s = new RegExp("(\\s|^)" + e + "(?=\\s|$)","i"),
            p = t && null !== t.match(s)) : a ? (s = new RegExp("^" + e,"i"),
            p = t && null !== t.match(s)) : o ? (s = new RegExp(e + "$","i"),
            p = t && null !== t.match(s)) : null != e && "object" === at(e) ? void 0 !== e.from || void 0 !== e.to || void 0 !== e.gte || void 0 !== e.lte ? (l = e.from || e.gte,
            d = e.to || e.lte,
            p = (void 0 === e.from && void 0 === e.gte || t >= l) && (void 0 === e.to && void 0 === e.lte || t <= d)) : void 0 === e.gt && void 0 === e.lt || (p = (void 0 === e.gt || t > e.gt) && (void 0 === e.lt || t < e.lt)) : p = e === t;
        else if (void 0 !== t.length)
            for (u = 0; u < t.length && !(p = st(t[u], e, n, r, i, a, o)); u++)
                ;
        else
            "object" === c && (p = void 0 !== t[e]);
        return p
    }
    function ut(t, e, n) {
        var r, i, a, o, c, s;
        if (e = function(t) {
            var e = t;
            for (var n in e)
                0 === e[n].length && delete e[n];
            return e
        }(e) || {},
        a = !!n.joinAnd,
        e.terms)
            for (i = 0; i < e.terms.length; i++) {
                if (o = ct(t, e.terms[i]),
                n.negator && (o = !o),
                n.joinAnd && !o) {
                    a = !1;
                    break
                }
                if (!n.joinAnd && o) {
                    a = !0;
                    break
                }
            }
        else
            for (r in e)
                if (e.hasOwnProperty(r) && 0 !== r.indexOf("_")) {
                    for (s = r.split(n.separator),
                    c = [].concat(e[r]),
                    i = 0; i < c.length && !(o = st(ot(t, s, n.propertySearch, n.propertySearchDepth), c[i], n.text, n.word, n.regexp, n.start, n.end)); i++)
                        ;
                    if (n.negator && (o = !o),
                    n.joinAnd && !o) {
                        a = !1;
                        break
                    }
                    if (!n.joinAnd && o) {
                        a = !0;
                        break
                    }
                }
        return a
    }
    function lt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
    }
    function dt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? lt(Object(n), !0).forEach(function(e) {
                i()(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    var pt = function(t) {
        p()(n, t);
        var e = function(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = m()(t);
                if (e) {
                    var i = m()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return h()(this, n)
            }
        }(n);
        function n() {
            var t;
            return o()(this, n),
            (t = e.call(this)).state = {
                id: null,
                handle: null,
                title: null,
                url: null,
                productsCount: 0,
                products: [],
                filter: [],
                query: {}
            },
            t.getProducts = t.getProducts.bind(l()(t)),
            t.resetQuery = t.resetQuery.bind(l()(t)),
            t.handleInput = t.handleInput.bind(l()(t)),
            t.findMatchingItems = t.findMatchingItems.bind(l()(t)),
            t.updateHistorySate = t.updateHistorySate.bind(l()(t)),
            t
        }
        return s()(n, [{
            key: "componentDidMount",
            value: function() {
                this.getProducts()
            }
        }, {
            key: "componentDidUpdate",
            value: function(t, e) {
                var n = this.state.products.filter(function(t) {
                    return t.available
                });
                localStorage.products_count = n.length
            }
        }, {
            key: "getProducts",
            value: async function() {
                var t, e, n = window.location.pathname, r = "".concat(n, "?view=json&timestamp=").concat(Date.now()), i = function(t) {
                    var e = localStorage.getItem(t);
                    if (!e)
                        return null;
                    var n = JSON.parse(e)
                      , r = n.expires
                      , i = n.data;
                    return (new Date).getTime() > r ? (localStorage.removeItem(t),
                    null) : i
                }(/(.*\/)?(\..*?|.*?)?(#.*$|\?.*$|$)/.exec(n)[2]);
                if (i)
                    this.setState(dt({}, i));
                else
                    try {
                        var a = (await b.a.get(r)).data;
                        await this.buildProducts(a.products),
                        this.setState(dt({}, a)),
                        t = a.handle,
                        0,
                        e = {
                            data: a,
                            expires: (new Date).getTime() + (0,
                            0)
                        },
                        localStorage.setItem(t, JSON.stringify(e))
                    } catch (t) {}
            }
        }, {
            key: "buildQueryGroups",
            value: function() {
                for (var t = this.state.filter, e = {}, n = 0; n < t.length; n += 1)
                    e[t[n].key] = [];
                this.setState({
                    query: e
                })
            }
        }, {
            key: "buildProducts",
            value: function(t) {
                return new Promise(function(e) {
                    for (var n = 0; n < t.length; n += 1)
                        for (var r = t[n].tags, i = 0; i < r.length; i += 1) {
                            var a = r[i].split("_");
                            if (2 === a.length) {
                                var o = $()(a, 2)
                                  , c = o[0]
                                  , s = o[1];
                                t[n][c] || (t[n][c] = []),
                                t[n][c].push(s)
                            }
                        }
                    e(t)
                }
                )
            }
        }, {
            key: "handleInput",
            value: function(t, e) {
                var n = t.split("_")
                  , r = $()(n, 2)
                  , i = r[0]
                  , a = r[1]
                  , o = {};
                if (e)
                    o[i] = [].concat(_()(this.state.query[i]), [a]);
                else {
                    var c = _()(this.state.query[i])
                      , s = c.indexOf(a);
                    -1 !== s && (c.splice(s, 1),
                    o[i] = c)
                }
                this.setState(function(t) {
                    return {
                        query: dt(dt({}, t.query), o)
                    }
                })
            }
        }, {
            key: "resetQuery",
            value: function(t) {
                for (var e = JSON.parse(JSON.stringify(this.state.query)), n = 0, r = Object.entries(e); n < r.length; n++) {
                    var i = $()(r[n], 2)
                      , a = i[0]
                      , o = i[1];
                    a === t && o.splice(0, o.length)
                }
                this.setState({
                    query: e
                })
            }
        }, {
            key: "findMatchingItems",
            value: function() {
                var t = function(t, e) {
                    var n = []
                      , r = it(e, {});
                    if (t && t.length > 0)
                        for (var i = 0; i < t.length; i++)
                            ut(t[i], e, r) && n.push(t[i]);
                    return n
                }(this.state.products, JSON.parse(JSON.stringify(this.state.query)));
                document.querySelectorAll(".product-card").forEach(function(t) {
                    t.parentNode.removeChild(t)
                }),
                Array.isArray(t) && t.length && this.renderItems(t)
            }
        }, {
            key: "renderItems",
            value: function(t) {
                var e = this
                  , n = t.filter(function(t) {
                    return t.available
                })
                  , r = window.theme.currency.moneyWithCurrencyFormat
                  , i = n.map(function(t) {
                    var n = t.id
                      , i = t.handle
                      , a = t.title
                      , o = t.price
                      , c = t.image
                      , s = t.options;
                    return '\n <div class="product-card" data-product-id="'.concat(n, '">\n <a class="product-card__link" href="/products/').concat(i, '">\n <div class="product-card__container">\n <div class="product-card__image u-aspect-ratio" style="--aspect-ratio: 1.0;">\n ').concat(null !== c.src ? '<img \n class="lazy fade-in" \n alt="'.concat(c.alt, '"\n data-src="').concat(S(c.src, "{width}x"), '"\n data-sizes="auto"\n data-widths="[200,300,400,600,800,1000,1200]"\n >') : "", '\n </div>\n \n <div class="product-card__details">\n <span class="product-card__title u-nobreak">').concat(a, '</span>\n <span class="product-card__price">').concat(w(o.min, r), "</span>\n ").concat(s && s[0] && "Color" == s[0].name ? e.renderColorSwatches(s) : "", "\n                </div>\n              </div>\n            </a>\n          </div>\n          ")
                }).join("");
                document.querySelector(".collection__products").innerHTML = i,
                document.querySelector("span[data-collection-count]").innerText = 1 === n.length ? "1 Produkt gefunden" : n.length + " Produkte gefunden",
                document.querySelector(".collection-filter__footer .btn").innerText = 1 === n.length ? "1 Ergebnis anzeigen" : n.length + " Ergebnisse anzeigen",
                this.updateHistorySate()
            }
        }, {
            key: "renderColorSwatches",
            value: function(t) {
                var e = t.indexOf("Color") + 1;
                return '\n\t\t\t<ul class="product-card__variants u-nolist">\n\t\t\t\t'.concat(t[e].values.slice(0, 4).map(function(n, r) {
                    return '\n\t\t\t\t\t<li class="swatch-'.concat(G(n), '">\n\t\t\t\t\t\t<span class="u-visually-hidden">').concat(n, "</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t").concat(3 === r && t[e].values.length > 4 ? '\n\t\t\t\t\t<li class="tooltip">\n\t\t\t\t\t\t+ '.concat(t[e].values.length - 4, '\n\t\t\t\t\t\t<span class="u-visually-hidden"> weitere Farben</span>\n\t\t\t\t\t</li>') : "", "\n\t\t\t\t")
                }).join(""), "\n\t\t\t</ul>\n\t\t")
            }
        }, {
            key: "updateHistorySate",
            value: function() {
                var t = JSON.parse(JSON.stringify(this.state.query));
                !function(t) {
                    for (var e in t)
                        0 === t[e].length && delete t[e]
                }(t);
                var e = Object.keys(t).map(function(e) {
                    return t[e].forEach(function(n, r) {
                        return t[e][r] = G(n)
                    }),
                    encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                }).join("&");
                e && (e = "?" + e),
                console.log(window.history.search),
                console.log(e);
                var n = window.location.protocol + "//" + window.location.host + window.location.pathname + e;
                window.history.replaceState({
                    path: n
                }, "", n)
            }
        }, {
            key: "render",
            value: function() {
                var t = this.state;
                t.filter,
                t.query;
                return ""
            }
        }]),
        n
    }(g.a);
    window.location.pathname.indexOf("/collections") > -1 && Object(g.e)(Object(g.c)(pt, null), document.getElementById("filter"));
    var ft = document.getElementById("sort-by")
      , ht = document.querySelector(".collection-filter button");
    document.querySelector(".template-collection") && (ft.addEventListener("change", function(t) {}),
    ht.addEventListener("click", function() {
        var t = document.querySelector(".collection__start");
        t.classList.add("active"),
        document.querySelector(".overlay").classList.add("active"),
        Object(D.a)(t),
        t.addEventListener("click", function(t) {
            var e = t.target;
            (e.classList.contains("collection__start") || e.classList.contains("btn-primary") || e.classList.contains("filter-close")) && function() {
                var t = document.querySelector(".collection__start");
                t.classList.remove("active"),
                document.querySelector(".overlay").classList.remove("active"),
                Object(D.b)(t)
            }()
        })
    })),
    n(77);
    var vt = document.querySelectorAll("[data-accordion-item]");
    document.querySelectorAll("[data-accordion-trigger]").forEach(function(t) {
        t.addEventListener("click", function(t) {
            var e = t.target.parentNode
              , n = e.classList.contains("active");
            vt.forEach(function(t) {
                t.classList.remove("active")
            }),
            n || (e.classList.add("active"),
            B.a.center(e, 600))
        })
    }),
    C.c.use([C.b]),
    window.location.pathname.indexOf("/products") > -1 && new C.c(".product-gallery__container.swiper-container",{
        grabCursor: !0,
        loop: !1,
        preloadImages: !1,
        zoom: {
            maxRatio: 5
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination"
        }
    }),
    n(78),
    n(79),
    n(80),
    n(81),
    n(82)
}
], [[83, 1, 2]]]);