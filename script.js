var $jscomp = { scope: {}, findInternal: function(b, e, c) { b instanceof String && (b = String(b)); for (var a = b.length, g = 0; g < a; g++) { var d = b[g]; if (e.call(c, d, g, b)) return { i: g, v: d } } return { i: -1, v: void 0 } } };
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, e, c) { if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
    b != Array.prototype && b != Object.prototype && (b[e] = c.value) };
$jscomp.getGlobal = function(b) { return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b };
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(b, e, c, a) { if (e) { c = $jscomp.global;
        b = b.split("."); for (a = 0; a < b.length - 1; a++) { var g = b[a];
            g in c || (c[g] = {});
            c = c[g] } b = b[b.length - 1];
        a = c[b];
        e = e(a);
        e != a && null != e && $jscomp.defineProperty(c, b, { configurable: !0, writable: !0, value: e }) } };
$jscomp.polyfill("Array.prototype.find", function(b) { return b ? b : function(b, c) { return $jscomp.findInternal(this, b, c).v } }, "es6-impl", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() { $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) };
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(b) { return $jscomp.SYMBOL_PREFIX + (b || "") + $jscomp.symbolCounter_++ };
$jscomp.initSymbolIterator = function() { $jscomp.initSymbol(); var b = $jscomp.global.Symbol.iterator;
    b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, { configurable: !0, writable: !0, value: function() { return $jscomp.arrayIterator(this) } });
    $jscomp.initSymbolIterator = function() {} };
$jscomp.arrayIterator = function(b) { var e = 0; return $jscomp.iteratorPrototype(function() { return e < b.length ? { done: !1, value: b[e++] } : { done: !0 } }) };
$jscomp.iteratorPrototype = function(b) { $jscomp.initSymbolIterator();
    b = { next: b };
    b[$jscomp.global.Symbol.iterator] = function() { return this }; return b };
$jscomp.array = $jscomp.array || {};
$jscomp.iteratorFromArray = function(b, e) { $jscomp.initSymbolIterator();
    b instanceof String && (b += ""); var c = 0,
        a = { next: function() { if (c < b.length) { var g = c++; return { value: e(g, b[g]), done: !1 } } a.next = function() { return { done: !0, value: void 0 } }; return a.next() } };
    a[Symbol.iterator] = function() { return a }; return a };
$jscomp.polyfill("Array.prototype.keys", function(b) { return b ? b : function() { return $jscomp.iteratorFromArray(this, function(b) { return b }) } }, "es6-impl", "es3");
$jscomp.polyfill("Array.prototype.values", function(b) { return b ? b : function() { return $jscomp.iteratorFromArray(this, function(b, c) { return c }) } }, "es6", "es3");
jQuery.fn.extend({
    initSwitch: function(b) { return this.each(function() { var e = $(this);
            e.click(function(c) {
                (!b || b && b(!e.hasClass("checked"))) && e.toggleClass("checked");
                e.find("input").prop("checked", e.hasClass("checked"));
                c.stopPropagation();
                c.preventDefault() }) }) },
    Splash: function(b, e) {
        return this.each(function() {
            var c = $(this),
                a = c.data("splashParent"),
                g = function(a, b) { "back" == b.state.direction && m() },
                d = function(a) { 27 == a.keyCode && m() },
                k = function() {
                    $(document).on("keyup", d);
                    $(window).on("navigate", g);
                    a.on("click",
                        function(b) { a.children().first().is(b.target) && (b.stopPropagation(), m()) })
                },
                m = function() { $(window).off("navigate", g);
                    $(document).off("keyup", d);
                    a.off("click");
                    a.fadeOut(); if ("function" === typeof e.onclose) e.onclose() };
            if (b && "show" !== b) "hide" === b && a && m();
            else if (a || (c.wrap('<div class="splashScreenContainer"><div class="splashScreenContent"></div></div>').show(), a = c.parent().parent(), a.hide(), c.data("splashParent", a), k()), a.fadeIn(), "function" === typeof e.onopen) e.onopen()
        })
    }
});
var KEY_BOTID = "a",
    KEY_MARKETNAME = "c",
    KEY_MARKETNAME_FOREIGN = "d",
    KEY_FLAGS = "e",
    KEY_ASSETID = "f",
    KEY_CLASSID = "g",
    KEY_INSTANCEID = "h",
    KEY_VALUE = "i",
    KEY_BTCVALUE = "j",
    KEY_RARITYCOL = "k",
    KEY_NOTRADEREASON = "l",
    KEY_NOTRADEREASONBTC = "m",
    KEY_TYPE = "o",
    KEY_NAMECOLOR = "p",
    KEY_IMAGEID = "q",
    KEY_TRADELOCKSECONDS = "r",
    KEY_ISONSITEITEM = "s",
    KEY_ONSITEHISTORYID = "t",
    KEY_AMOUNT = "u",
    KEY_COMMODITYDATAS = "v",
    KEY_NAMETAG_CS = "a1",
    KEY_INSPECTCODE_CS = "b1",
    KEY_QUALITYTAG_CS = "c1",
    KEY_FLOATVALUE_CS = "d1",
    KEY_PAINTSEED_CS = "e1",
    KEY_STICKERS_CS =
    "f1",
    KEY_PAINTINDEX_CS = "g1",
    KEY_SCREENSHOT_PNG_ID_CS = "h1",
    KEY_GEMS_D2 = "a2",
    KEY_SLOT_D2 = "b2",
    KEY_HERO_D2 = "c2",
    KEY_RARITY_D2 = "d2",
    KEY_INSPECTCODE_TF2 = "a3",
    KEY_WIKILINKID_TF2 = "b3",
    KEY_EFFECT_TF2 = "c3",
    KEY_QUALITY_TF2 = "d3",
    KEY_CLASS_TF2 = "e3",
    SelectedBot = 0,
    SmartPick = !1,
    DoNotWithdrawTradeItems = !1,
    SelectedUserAppId = 0,
    SelectedBotAppId = 0,
    TradeStateBtc = !1,
    BotItemPriceFilterMax = 1;
Templates.item = '<div class="item"><div class="colorizer" style="background-color:#{' + KEY_RARITYCOL + '};"></div><div class="reservedOverlay"><div class="amountReservedCont"><i class="fa fa-hourglass-o"></i><span class="amountReserved"></span></div></div><div class="quantity_cont" style="display:none">X<span class="quantity">1</span></div><div class="pic"><img src="/steamItems/{' + KEY_IMAGEID + '}" alt="{' + KEY_MARKETNAME + '}"></div><div class="price"></div><object class="appIcon" data="/images/steam/appicons/{appid}.png" type="image/png"><img class="appIcon" src="/images/steam/appicons/{appid}.jpg"></object><div class="more"><span class="fa fa-plus gradTxt1"></span></div></div>';
Templates.itemtooltip = '<div><div class="itemdrop"><div class="itemnamesect" style="color:#{' + KEY_RARITYCOL + '};"></div></div></div>';
Templates.itemCSGO = '<div class="item csgo"><div class="colorizer" style="background-color:#{' + KEY_RARITYCOL + '};"></div><div class="reservedOverlay"><div class="amountReservedCont"><i class="fa fa-hourglass-o"></i><span class="amountReserved"></span></div></div><div class="quantity_cont" style="display:none">X<span class="quantity">1</span></div><div class="st" style="display:none">ST</div><div class="tag">{' + KEY_QUALITYTAG_CS + '}</div><div class="locktime"></div><div class="stickers"></div><div class="pic"><img src="/steamItems/{' +
    KEY_IMAGEID + '}" alt="{' + KEY_MARKETNAME + '}"></div><img class="appIcon" src="/images/steam/appicons/730.png"><div class="price"></div><div class="more"><span class="fa fa-plus"></span></div></div>';
Templates.itemtooltipCSGO = '<div><div class="itemdrop csgo"><div class="itemnamesect" style="color:#{' + KEY_RARITYCOL + '};"></div><div class="nametag"></div><div><div class="screenshot"><div class="contextActions context-screenshot"><a class="screenshotLink" target="_blank"><span class="fa fa-eye"></span> Screenshot</a></a></div><div class="container"><img></div></div></div><div class="floatval"></div><div class="row no-gutters floatprog"><div class="col col-auto floatleft {leftclass}">{lefttxt}</div><div class="col floatmid {midclass}">&nbsp;<div style="right:{percent}%;">&nbsp;</div></div><div class="col col-auto floatright {rightclass}">{righttxt}</div></div><div class="stickers"></div><div class="extras"><div class="contextActions context-bottom"><div class="price"></div></div><div class="locktimetxt" style="display:none;"></div></div></div></div>';
Templates.itemDota2 = '<div class="item dota2"><div class="colorizer" style="background-color:#{' + KEY_RARITYCOL + '};"></div><div class="reservedOverlay"><div class="amountReservedCont"><i class="fa fa-hourglass-o"></i><span class="amountReserved"></span></div></div><div class="quantity_cont" style="display:none">X<span class="quantity">1</span></div><div class="tag" style="color:#{' + KEY_RARITYCOL + '};">{' + KEY_RARITY_D2 + '}</div><div class="locktime"></div><div class="gems"></div><div class="pic"><img src="/steamItems/{' +
    KEY_IMAGEID + '}" alt="{' + KEY_MARKETNAME + '}"></div><img class="appIcon" src="/images/steam/appicons/570.png"><div class="price"></div><div class="more"><span class="fa fa-plus"></span></div></div>';
Templates.itemtooltipDota2 = '<div><div class="itemdrop dota2"><div class="itemnamesect" style="color:#{' + KEY_NAMECOLOR + '};"></div><div class="rarity" style="color:#{' + KEY_RARITYCOL + '};">{' + KEY_RARITY_D2 + '}</div><div class="detailsSection"></div><div class="gems"></div><div class="extras"><div class="contextActions context-bottom"><div class="price"></div></div><div class="locktimetxt" style="display:none;"></div></div></div></div>';
Templates.itemTF2 = '<div class="item tf2"><div class="colorizer" style="background-color:#{' + KEY_RARITYCOL + '};"></div><div class="reservedOverlay"><div class="amountReservedCont"><i class="fa fa-hourglass-o"></i><span class="amountReserved"></span></div></div><div class="quantity_cont" style="display:none">X<span class="quantity">1</span></div><div class="tag" style="color:#{' + KEY_RARITYCOL + '};">{' + KEY_QUALITY_TF2 + '}</div><div class="locktime"></div><div class="pic"><img src="/steamItems/{' + KEY_IMAGEID +
    '}" alt="{' + KEY_MARKETNAME + '}"></div><img class="appIcon" src="/images/steam/appicons/440.jpg"><div class="price"></div><div class="more"><span class="fa fa-plus"></span></div></div>';
Templates.itemtooltipTF2 = '<div><div class="itemdrop tf2"><div class="itemnamesect"></div><div class="rarity" style="color:#{' + KEY_RARITYCOL + '};">{' + KEY_QUALITY_TF2 + '}</div><div class="detailsSection"></div><div class="gems"></div><div class="extras"><div class="contextActions context-bottom"><div class="price"></div></div><div class="locktimetxt" style="display:none;"></div></div></div></div>';
Templates.itemPUBG = '<div class="item pubg"><div class="quantity_cont" style="display:none">X<span class="quantity">1</span></div><div class="pic"><img src="/steamItems/{' + KEY_IMAGEID + '}" alt="{' + KEY_MARKETNAME + '}"></div><img class="appIcon" src="/images/steam/appicons/578080.png"><div class="price"></div><div class="more"><span class="fa fa-plus"></span></div></div>';
Templates.itemtooltipPUBG = '<div><div class="itemdrop pubg"><div class="itemnamesect"></div></div></div>';
Templates.itemH1Z1 = '<div class="item csgo"><div class="colorizer" style="background-color:#{' + KEY_NAMECOLOR + '};"></div><div class="reservedOverlay"><div class="amountReservedCont"><i class="fa fa-hourglass-o"></i><span class="amountReserved"></span></div></div><div class="quantity_cont" style="display:none">X<span class="quantity">1</span></div><div class="locktime"></div><div class="pic"><img src="/steamItems/{' + KEY_IMAGEID + '}" alt="{' + KEY_MARKETNAME + '}"></div><img class="appIcon" src="/images/steam/appicons/433850.png"><div class="price"></div><div class="more"><span class="fa fa-plus"></span></div></div>';
Templates.itemtooltipH1Z1 = '<div><div class="itemdrop h1z1"><div class="itemnamesect"></div><div class="rarity" style="color:#{' + KEY_NAMECOLOR + '};">{' + KEY_TYPE + '}</div><div class="extras"><div class="contextActions context-bottom"><div class="price"></div></div><div class="locktimetxt" style="display:none;"></div></div></div></div>';
Templates.itemRust = '<div class="item rust"><div class="colorizer" style="background-color:#{' + KEY_NAMECOLOR + '};"></div><div class="reservedOverlay"><div class="amountReservedCont"><i class="fa fa-hourglass-o"></i><span class="amountReserved"></span></div></div><div class="quantity_cont" style="display:none">X<span class="quantity">1</span></div><div class="locktime"></div><div class="pic"><img src="/steamItems/{' + KEY_IMAGEID + '}" alt="{' + KEY_MARKETNAME + '}"></div><img class="appIcon" src="/images/steam/appicons/252490.png"><div class="price"></div><div class="more"><span class="fa fa-plus"></span></div></div>';
Templates.itemtooltipRust = '<div><div class="itemdrop rust"><div class="itemnamesect" style="color:#{' + KEY_NAMECOLOR + '};"></div><div class="extras"><div class="contextActions context-bottom"><div class="price"></div></div><div class="locktimetxt" style="display:none;"></div></div></div></div>';

function updateBalanceChange() { var b = useritems.getOfferValue().minus(botitems.getOfferValue()),
        e = new Decimal(Math.max(b, -g_balance));
    1 != Currency.rate && (e = e.times(Currency.rate));
    Elements.OfferBalanceChangeValue.text(toAccurateMoneyString(e.abs().toNumber()));
    0 <= b ? (Elements.OfferBalanceChangeValue.toggleClass("redtxt", !1), Elements.OfferBalanceChangeSign.text("+")) : (Elements.OfferBalanceChangeValue.toggleClass("redtxt", !0), Elements.OfferBalanceChangeSign.text("-")) }
var useritems = new ItemContainer;
useritems.AddValueChangeCallback(function(b, e) {
    var c = useritems.getOfferValue();
    c.minus(botitems.getOfferValue());
    1 != Currency.rate && (c = c.times(Currency.rate));
    Elements.UserOfferValueSkins.text(toAccurateMoneyString(c.toNumber()));
    updateBalanceChange();
    var a = useritems.getOfferValue().minus(botitems.getOfferValue()).plus(g_balance);
    0 < c && !SmartPick ? botitems.setVisualPriceFilter(a) : botitems.getOfferValue(!0) || botitems.ResetVisualPriceFilter();
    e || botitems.InvokeOfferValueCallbacks(!0);
    SmartPick && botitems.FilterByPrice(0,
        a)
});
useritems.AddValueChangeCallback(function(b) { Elements.WithdrawBtn.toggle(useritems.hasItemsInOffer()) });
var botitems = new ItemContainer;
botitems.AddValueChangeCallback(function(b, e) { var c = botitems.getOfferValue();
    1 != Currency.rate && (c = c.times(Currency.rate));
    updateBalanceChange();
    Elements.BotOfferValueSkins.text(toAccurateMoneyString(c.toNumber()));
    botitems.setVisualPriceFilter(useritems.getOfferValue().minus(botitems.getOfferValue()).plus(g_balance));
    e || useritems.InvokeOfferValueCallbacks(!0) });

function ItemContainer() {
    var b = {};
    this.getData = function() { return e };
    var e = [],
        c = {},
        a = 0;
    this.getHighestItemPrice = function() { return a };
    var g = !1;
    this.DisableStacks = function(f) { g = f };
    var d = 0;
    this.setStackingMethod = function(f) { d = f };
    this.getStackingMethod = function() { return d };
    var k = this,
        m = new Decimal(0);
    new Decimal(0);
    var n = !1,
        q = !1,
        w = !1,
        h = !1,
        y = !0;
    this.filterStattrak = function(f) { q = f };
    this.filterHasStickers = function(f) { w = f };
    this.filterAllowTradelock = function(f) { y = f };
    var u = [];
    this.AddValueChangeCallback = function(f) { u.push(f) };
    var x = !1,
        v = {},
        p = {};
    b.firstuntradable = null;
    var A = { 415: "ruby", 416: "sapphire", 417: "blackpearl", 418: "1", 419: "2", 420: "3", 421: "4", 568: "emerald", 569: "1", 570: "2", 571: "3", 572: "4", 618: "2", 619: "Sapphire" },
        B = [];
    this.addPendingNewItemsResponse = function(f) { B = B.concat(f) };
    this.applyPendingNewItems = function() {
        for (var f = e.length, a = 0; a < B.length; a++) $.each(B[a].items, function(f, a) { $.each(a, function(f, a) { a.isOnSiteItem = !0 }) }), this.AddItemsFromResponse(B[a].items);
        B = [];
        for (var b = Math.floor(Date.now() / 1E3), c = e.length,
                a = f; a < c; a++) e[a].stackIdPrefix = b, (f = z(!0, e[a], !1, !0)) && f.addClass("newLoadedItem")
    };
    var E = [],
        J = null,
        K = function() { for (var f = Date.now() / 1E3, a = !1, b = 0; b < E.length; b++) { var c = E[b],
                    e = c,
                    d = Math.ceil(1E4 * (c.decay.startPrice + c.decay.priceDelta * Math.min(1, Math.max(0, (f - c.decay.startTime) / (c.decay.endTime - c.decay.startTime))))) / 1E4;
                e.isInInv || C(d - e[KEY_VALUE], !0);
                e[KEY_VALUE] = d;
                G(e, !0, 2);
                c.isInInv || (a = !0) } a && k.InvokeOfferValueCallbacks() };
    this.resetDecayItems = function(f) {
        for (; E.length;) {
            var a = E.pop();
            a.element &&
                a.element.removeClass("hasPriceDecay");
            delete a.decay
        }
        for (a = 0; a < f.length; a++) { var b = f[a],
                l = ItemContainer.getUniqueItemKeyFromRaw(b.appid, b.assetid); if ("undefined" !== typeof c[l]) { for (var e = !1, l = c[l], d = 0; d < l.length; d++) { var g = Date.now() / 1E3,
                        h = l[d],
                        m = b.startPrice;
                    h.isInInv || C(m - h[KEY_VALUE], !0);
                    h[KEY_VALUE] = m;
                    G(h, !0, 2);
                    l[d].decay = { startTime: g, endTime: b.time + g, startPrice: b.startPrice, priceDelta: b.priceDelta };
                    E.push(l[d]);
                    l[d].isInInv || (e = !0);
                    l[d].element && l[d].element.addClass("hasPriceDecay") } e && k.InvokeOfferValueCallbacks() } }
    };
    this.EmptyOffer = function(f) { if (f) { for (a in p) this.moveWholeStack(!1, a); for (f = 0; f < e.length; f++) e[f].isInInv = !0;
            b.Offer.empty();
            C(-m) } else { for (var a in p) this.moveWholeStack(!1, a);
            b.Offer.children().each(function(f) { $(this).click() }) } };
    this.RemoveOfferItemsByAppId = function(f, a) { $.each(p, function(b, c) { var t = p[b][0].appid;
            (t == f && !a || t != f && a) && k.moveWholeStack(!1, b) });
        b.Offer.children().each(function(b, c) { c = $(c); var t = c.data("itemdata");
            (t.appid == f && !a || t.appid != f && a) && $(this).click() }) };
    this.DeleteAppIdItems =
        function(a) { this.RemoveOfferItemsByAppId(a); for (var f = 0; f < e.length; f++) { var b = e[f]; if (b.appid == a) { b.element && b.element.remove(); if (b.parentInStack) { var l = this.getItemStackIdFromData(b);
                        delete v[l] } b = ItemContainer.getUniqueItemKeyFromData(b);
                    e.splice(f, 1);
                    delete c[b];
                    f-- } } };
    this.EmptyInventory = function() { b.Inv.empty() };
    var L = function() { b.firstuntradable = null;
        H = !1;
        v = {};
        e.forEach(function(a) { if (!a.isInInv) return !0;
            a.isInStack = !1;
            a.parentInStack = null;
            a.element && $.contains(b.Inv[0], a.element[0]) && a.element.detach() }) };
    this.SortByField = function(a, b, c) { e.sort(function(f, c) { var t, l; "undefined" === typeof f[a] ? t = 1E4 : (t = parseFloat(f[a]), b && (t = -t)); "undefined" === typeof c[a] ? l = 1E4 : (l = parseFloat(c[a]), b && (l = -l));
            f.isOnSiteItem && (t -= 1E5);
            c.isOnSiteItem && (l -= 1E5); return t > l ? 1 : -1 });
        this.Populate() };
    var H = !1;
    this.setVisualPriceFilter = function(a) { useritems.getOfferValue(!0) || botitems.getOfferValue(!0) ? e.length && b.Inv.children().each(function(f, b) { k.setVisualPriceFilterForElement(a, b) }) : this.ResetVisualPriceFilter() };
    this.setVisualPriceFilterForElement =
        function(a, b) { H = !1;
            b = $(b);
            b.toggleClass("pricefilter", b.data("itemdata")[KEY_VALUE] > a) };
    this.ResetVisualPriceFilter = function() { H || (H = !0, b.Inv.children().toggleClass("pricefilter", !1)) };
    this.setItemsReservedByAppidAssetid = function(a) { for (var b = 0; b < a.length; b++) this.reservedStateUpdater.addItemChangedState(a[b].appid, a[b].assetid, a[b].amount);
        this.reservedStateUpdater.update() };
    this.reservedStateUpdater = function() {
        var a = [],
            b = {},
            t = {},
            l = function(a) { return a.appid + "_" + a[KEY_CLASSID] + "_" + a[KEY_INSTANCEID] },
            e = function(a, b) { var f = l(a);
                b ? t[f] = 1 : delete t[f] };
        return {
            addItemChangedState: function(f, c, t) { var l = f + "_" + c; "undefined" === typeof b[l] && (a.push({ appid: f, assetid: c, amountReserved: t }), b[l] = 1) },
            update: function() {
                for (var f = { invstacks: {}, offerstacks: {} }, t = 0; t < a.length; t++) {
                    var l = a[t],
                        d = c[l.appid + "_" + l.assetid];
                    if ("undefined" !== typeof d) {
                        var r = k.getItemStackIdFromData(d[0]),
                            g;
                        e(d[0], !1);
                        for (var D = d.length - 1; 0 <= D; D--) g = d[D], g.isReserved = !1, g.element && (g.element.find(".reservedCont").hide(), g.element.toggleClass("reserved-all",
                            !1)), (g.isInStack || g.parentInStack) && (g.isInInv ? v : p)[r][0].element.find(".reservedOverlay").hide(), g.isInInv ? f.invstacks[r] = 1 : f.offerstacks[r] = 1;
                        if (l.amountReserved)
                            for (e(d[0], !0), r = 0, D = d.length - 1; 0 <= D && !(++r > l.amountReserved); D--) g = d[D], g.isReserved = !0, g.parentInStack || g.element && g.element.toggleClass("reserved-all", !0)
                    }
                }
                Object.keys(f.invstacks).forEach(function(a) { k.reservedStateUpdater.updateStack(v, a) });
                Object.keys(f.offerstacks).forEach(function(a) { k.reservedStateUpdater.updateStack(p, a) });
                a = [];
                b = {}
            },
            updateStack: function(a, b) { if ("undefined" !== typeof a[b]) { var f = a[b],
                        c = l(f[0]); if (t[c]) { for (var c = f.length, e = 0, d = 0; d < c; d++) f[d].isReserved && e++;
                        f = f[0].element;
                        d = f.find(".reservedOverlay");
                        e >= c ? (f.toggleClass("reserved-all", !0), d.hide()) : (f.toggleClass("reserved-all", !1), e ? (d.find(".amountReserved").text(e + " / " + c), d.show()) : d.hide()) } } }
        }
    }();
    this.ResetFilterByAppId = function() { n = !1;
        this.Populate() };
    this.FilterByAppId = function(a) { n = a;
        this.Populate() };
    this.setOnSiteItemFilter = function(a) { h = a;
        this.Populate() };
    this.FilterByPrice = function(a, b) { for (var f = 0; f < e.length; f++) { var c = e[f][KEY_VALUE];
            e[f].hidden_price = c < a || c > b } this.Populate() };
    this.FilterByName = function(a) { for (var b = 0; b < e.length; b++) { var f = e[b],
                c = f[KEY_MARKETNAME].toLowerCase();
            f[KEY_MARKETNAME_FOREIGN] && (c += f[KEY_MARKETNAME_FOREIGN].toLowerCase()); var d = !0;
            $.each(a, function(a, b) { b = b.toLowerCase(); if (-1 == c.indexOf(b)) return d = !1 });
            f.hidden_name = !d } this.Populate() };
    this.FilterByField = function(a, b, c, l) {
        "undefined" === typeof c && (c = 0);
        c = Math.pow(2, c);
        l && M(a, b);
        for (l = 0; l < e.length; l++) e[l].filterFlags = e[l][a] != b ? e[l].filterFlags | 1 << c : e[l].filterFlags & ~(1 << c);
        this.Populate()
    };
    this.ResetFilterByField = function(a) { if ("undefined" === typeof a) e.forEach(function(a) { a.filterFlags = 0 });
        else { var b = Math.pow(2, a);
            e.forEach(function(a) { a.filterFlags &= ~(1 << b) }) } this.Populate() };
    var M = function(a, c) {
        b.Offer.children().each(function(b, f) {
            f = $(f);
            var d = f.data("itemdata");
            if (d[a] == c) return !0;
            var l = k.getItemStackIdFromElement(f);
            "undefined" !== typeof p[l] && d[KEY_ASSETID] ==
                p[l][0][KEY_ASSETID] ? k.moveStackByElement(f) : f.click()
        })
    };
    this.getTradeRequestData = function() {
        var a = [],
            c = {},
            d = function(b) { var f = b.appid.toString() + "_" + b[KEY_ASSETID].toString(); "undefined" !== typeof c[f] ? a[c[f]].amount++ : (c[f] = a.length, f = { appid: b.appid, assetid: b[KEY_ASSETID], amount: 1, isOnSiteItem: b.isOnSiteItem || 0 < b[KEY_TRADELOCKSECONDS] ? 1 : 0 }, b[KEY_ONSITEHISTORYID] && (f.onSiteItemId = b[KEY_ONSITEHISTORYID]), a.push(f)) };
        b.Offer.children().each(function(a) {
            a = $(this);
            a = a.data("itemdata");
            a.nostack ? d(a) :
                (a = k.getItemStackIdFromData(a), p[a].forEach(function(a) { d(a) }))
        });
        return a
    };
    this.hasItemsInOffer = function() { return !!b.Offer.children().length };
    this.setIsBotInv = function() { x = !0 };
    this.getIsBotInv = function() { return x };
    this.SetElements = function(a, c) {
        b.Inv = a;
        b.Offer = c;
        $(function() {
            b.Inv.add(b.Offer).on("click", ".item", function() {
                var a = $(this).data("itemdata"),
                    b = k.getItemStackIdFromData(a);
                if (g_IsAdmin || !(TradeStateBtc && a[KEY_NOTRADEREASONBTC] || !TradeStateBtc && a[KEY_NOTRADEREASON]) || !a.isInInv || a.isOnSiteItem) {
                    if (a.nostack) $(this).detach(),
                        z(!a.isInInv, a, !1, !a.isInInv);
                    else { var c = k.getFromStack(a.isInInv, b);
                        z(!a.isInInv, c, !1, !a.isInInv) } F(a.isInInv, b);
                    b = !1;
                    a.isInInv ? C(-a[KEY_VALUE]) : (C(a[KEY_VALUE]), x && (b = !0));
                    b && 1 == d && SelectBot(a[KEY_BOTID], !0)
                }
            }).on("mouseenter", ".item", function() {
                var a = $(this);
                a.hasClass("tooltipstered") || a.tooltipster({
                    animation: "fade",
                    delay: 0,
                    animationDuration: 0,
                    side: ["bottom", "top", "left", "right"],
                    contentCloning: !1,
                    content: "",
                    theme: ["tooltipster-item"],
                    maxWidth: 280,
                    minWidth: Math.min($(window).width(), 280),
                    functionBefore: function(b,
                        c) { ItemContainer.UpdateElementTooltip(a) }
                }).tooltipster("open")
            })
        })
    };
    this.AddItemsFromResponse = function(b) {
        var f = 0,
            d = null,
            l = function(a, c) {
                a.isInInv = !0;
                a.container = k;
                a.counter = f++;
                a.filterFlags = 0;
                a.appid = c;
                "undefined" === typeof a[KEY_NAMECOLOR] && (a[KEY_NAMECOLOR] = a[KEY_RARITYCOL]);
                "string" !== typeof a[KEY_MARKETNAME] && (a[KEY_MARKETNAME_FOREIGN] && (a[KEY_MARKETNAME_FOREIGN] = b[c][a[KEY_MARKETNAME]][KEY_MARKETNAME_FOREIGN]), a[KEY_MARKETNAME] = b[c][a[KEY_MARKETNAME]][KEY_MARKETNAME]);
                if ("Key" == a[KEY_TYPE] ||
                    440 == a.appid && "Mann Co. Supply Crate Key" == a[KEY_MARKETNAME]) a.isKey = !0;
                a.decay && (a.decay.startTime = Date.now() / 1E3, a.decay.endTime = a.decay.time + a.decay.startTime, a.decay.startPrice = a[KEY_VALUE], delete a.decay.time)
            },
            g;
        for (g in b)
            if (b.hasOwnProperty(g)) {
                g = parseInt(g);
                for (var h = b[g], m = 0; m < h.length; m++) {
                    if (h[m][KEY_FLAGS] & 2)
                        for (var n = h[m][KEY_COMMODITYDATAS], y = n.length - 1; 0 <= y; y--)
                            for (var u = 0; u < n[y][KEY_AMOUNT]; u++) {
                                var d = JSON.parse(JSON.stringify(h[m])),
                                    p;
                                for (p in n[y]) d[p] = n[y][p];
                                delete d[KEY_COMMODITYDATAS];
                                l(d, g);
                                e.push(d);
                                var q = ItemContainer.getUniqueItemKeyFromData(d);
                                c[q] || (c[q] = []);
                                c[q].push(d)
                            } else d = JSON.parse(JSON.stringify(h[m])), l(d, g), e.push(d), d.decay && E.push(d), q = ItemContainer.getUniqueItemKeyFromData(d), c[q] || (c[q] = []), c[q].push(d);
                    a < h[m][KEY_VALUE] && (a = h[m][KEY_VALUE])
                }
            } if (x) { var v = {};
            $.each(bots, function(a, b) { v[a] = 0 });
            $.each(this.getData(), function(a, b) { v[b[KEY_BOTID]]++ });
            $.each(v, function(a, b) { $("#botselect" + a).find(".itemcount").text(b) }) }
    };
    this.init = function(b) {
        e = [];
        c = {};
        a = 0;
        J || (J =
            setInterval(K, 800));
        var f = null;
        b && (f = this.AddItemsFromResponse(b));
        return f
    };
    this.Populate = function(a, c, d) {
        "undefined" === typeof this.scrolllistener && (this.resizelistener = this.scrollistener = null);
        "undefined" === typeof a && (a = 100);
        d || (d = 0);
        c || L();
        var f = d;
        d = 0;
        c && (d = b.Inv.children().length);
        for (; d < a && f < e.length;) {
            var r = null,
                r = e[f++];
            r.isInStack || !r.isInInv || 0 != r.filterFlags || r.hidden_name || n && r.appid != n || r.hidden_price || q && !(r[KEY_FLAGS] & 1) || w && !r[KEY_STICKERS_CS] || !y && r[KEY_TRADELOCKSECONDS] || 1 == h && !r.isOnSiteItem ||
                2 == h && r.isOnSiteItem || r.element && $.contains(b.Inv[0], r.element[0]) || (r = z(!0, r, g && !(r[KEY_FLAGS] & 2))) && d++
        }
        this.scrolllistener && b.Inv.off("scroll", this.scrolllistener);
        this.resizelistener && b.Inv.off("click", ".item", this.resizelistener);
        f < e.length && (this.scrolllistener = function(c) { b.Inv.scrollTop() >= b.Inv[0].scrollHeight - b.Inv.height() - 100 && k.Populate(Math.floor(1.3 * a), !0, f - 1) }, b.Inv.scroll(this.scrolllistener), this.resizelistener = function(b) { k.Populate(a, !0, f - 1) }, b.Inv.on("click", ".item", this.resizelistener));
        c || b.Inv.scrollTop(0)
    };
    this.UpdateItemsSellState = function() { b.Inv.find(".item").each(function(a, b) { b = $(b);
            I(b) });
        b.Offer.find(".item").each(function(a, b) { b = $(b);
            I(b) && b.click() }) };
    this.getOfferValue = function(a) { return a ? parseFloat(m) : m };
    this.Reset = function() { C(-m);
        b.Offer.add(b.Inventory).empty();
        v = {};
        p = {};
        e = [];
        c = {};
        E = [];
        b.firstuntradable = null };
    this.moveCountFromStack = function(a, b, c) {
        c = c ? c : 1E3;
        var f = a ? v : p;
        if (f[b]) {
            f = f[b];
            if (c >= f.length) return this.moveWholeStack(a, b);
            var d = $("<span>");
            f[0].element.after(d);
            f[0].element.detach();
            var e = 0;
            f.splice(0, c).forEach(function(b) { z(!a, b, !1, !a);
                e += b[KEY_VALUE] });
            z(a, f[0], !0, !1, d);
            d.remove();
            f[0].nostack = !1;
            f[0].isInStack = !1;
            F(a, b);
            C(a ? e : -e);
            F(!a, b)
        }
    };
    this.moveWholeStack = function(a, b) { var c = a ? v : p; if (c[b]) { var f = c[b];
            f[0].element.detach(); var d = 0;
            f.forEach(function(b) { z(!a, b, !1, !a);
                d += b[KEY_VALUE] });
            delete c[b];
            C(a ? d : -d);
            F(!a, b) } };
    var C = function(a, b) { m = m.plus(a.toFixed(4)); if (!b)
            for (var c = 0; c < u.length; c++) u[c](this) };
    this.InvokeOfferValueCallbacks = function(a) {
        for (var b =
                0; b < u.length; b++) u[b].apply(null, [this].concat(arguments))
    };
    var N = function(a, b) {
            if (a.element) return a.element;
            var c;
            switch (a.appid) {
                case 730:
                    c = Templates.itemCSGO; break;
                case 570:
                    c = Templates.itemDota2; break;
                case 433850:
                    c = Templates.itemH1Z1; break;
                case 440:
                    c = Templates.itemTF2; break;
                case 252490:
                    c = Templates.itemRust; break;
                default:
                    c = Templates.item } $.each(a, function(a, b) { c = replaceAll(c, "{" + a + "}", b) });
            var f = $(c);
            a.element = f;
            a.isInInv = b;
            f.data("itemdata", a);
            x ? G(a, !0) : I(f);
            a[KEY_TRADELOCKSECONDS] && f.find(".locktime").html('<i class="fa fa-lock"></i> ' +
                secondsToTxt(a[KEY_TRADELOCKSECONDS], 0, 1));
            if (730 == a.appid)
                if (a[KEY_FLAGS] & 1 && f.find(".st").show(), "object" == typeof a[KEY_STICKERS_CS] && a[KEY_STICKERS_CS].length)
                    for (var d = f.find(".stickers"), e = 0; e < a[KEY_STICKERS_CS].length; e++) { var g = "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/" + a[KEY_STICKERS_CS][e][1];
                        d.append($("<img>").attr("src", g)) } else "undefined" !== typeof a[KEY_PAINTINDEX_CS] && "string" === typeof A[a[KEY_PAINTINDEX_CS]] && (d = f.find(".stickers"), d.append($("<img>").attr("src",
                        "/images/design/phase_icons/" + A[a[KEY_PAINTINDEX_CS]] + ".png")));
                else if (570 == a.appid && "object" == typeof a[KEY_GEMS_D2] && a[KEY_GEMS_D2].length)
                for (d = f.find(".gems"), e = 0; e < a[KEY_GEMS_D2].length; e++) g = a[KEY_GEMS_D2][e][0] ? $("<img>").attr("src", "https://steamcdn-a.akamaihd.net/apps/570/icons/econ/" + a[KEY_GEMS_D2][e][0]).css("border-color", "#" + a[KEY_GEMS_D2][e][1] + "AA") : $("<span>"), d.append(g);
            a.isOnSiteItem && (f.append("<div class='onSiteIcon'><i class='fa fa-home'></i></div>"), f.addClass("onSiteItem"));
            a[KEY_FLAGS] & 8 && f.append("<div class='unwithdrawableAlert'></div>");
            a.decay && f.addClass("hasPriceDecay");
            return f
        },
        z = function(a, c, d, e, g) {
            var f = a ? v : p,
                h = k.getItemStackIdFromData(c);
            c.decay && (d = 1);
            c.isInInv = a;
            c.nostack = d;
            c.parentInStack = null;
            c.moreBtnEnabled && (c.element.find(".more").css("visibility", "hidden").off("click"), c.element.find(".quantity_cont").hide(), c.moreBtnEnabled = !1);
            730 == c.appid && (c[KEY_FLAGS] & 2 ? (c[KEY_NAMETAG_CS] = "", c[KEY_QUALITYTAG_CS] = "", c[KEY_STICKERS_CS] = []) : "undefined" === typeof c[KEY_QUALITYTAG_CS] &&
                (c[KEY_QUALITYTAG_CS] = ""));
            var l;
            if (l = !d) l = a ? v : p, l[h] ? (l[h].push(c), F(a, h), l = c.isInStack = !0) : l = void 0;
            if (!l) return (l = c.element ? c.element : null) || (l = N(c, a)), l.toggleClass("pricefilter", !!(x && a && (useritems.getOfferValue(!0) || botitems.getOfferValue(!0)) && useritems.getOfferValue() - botitems.getOfferValue() + g_balance < c[KEY_VALUE])), d || (f[h] = [c]), l.find(".reservedOverlay").hide(), "undefined" !== typeof c.isReserved && l.toggleClass("reserved-all", !!c.isReserved), g ? g.after(l) : (d = a ? b.Inv : b.Offer, e ? d.prepend(l) :
                c.isOnSiteItem ? d.append(l) : c[KEY_NOTRADEREASON] && 6 != c[KEY_NOTRADEREASON] && a ? b.firstuntradable ? b.firstuntradable.after(l) : (b.firstuntradable = l, d.append(l)) : b.firstuntradable && a ? b.firstuntradable.before(l) : d.append(l)), l
        };
    this.getFromStack = function(a, b, c) { var d = a ? v : p; if (d[b]) { var f = d[b]; if (c) return f[f.length - 1];
            c = f.shift();
            f.length ? (z(a, f[0], !0, !1, c.element), f[0].nostack = !1, f[0].isInStack = !1, F(a, b)) : delete d[b];
            c.element.detach();
            c.isInStack = !1; return c } };
    this.getStackSize = function(a, b) {
        return (a ? v :
            p)[b].length
    };
    var F = function(a, b) {
            var c = a ? v : p;
            if (c[b]) {
                var d = c[b],
                    f = d.length,
                    e = d[0].element;
                if (1 < f) {
                    if (!d[0].moreBtnEnabled) {
                        d[0].parentInStack = d;
                        d[0].moreBtnEnabled = !0;
                        var g = e.find(".more");
                        g.css("visibility", "visible");
                        e.find(".quantity_cont").show();
                        g.click(function(f) {
                            var e = d[0].element;
                            d[0].nostack = !0;
                            for (var g = e, k = d.length; 1 < k; k--) { var h = d.pop(),
                                    g = z(a, h, !0, !1, g);
                                h.isInStack = !1 } d[0].moreBtnEnabled = !1;
                            e.find(".more").css("visibility", "hidden").off("click");
                            e.find(".quantity_cont").hide();
                            z(a,
                                d[0], !0, !1, e);
                            delete c[b];
                            f.stopPropagation()
                        })
                    }
                    e.find(".quantity").text(f)
                } else 1 == f && (d[0].parentInStack = null, e.find(".more").css("visibility", "hidden").off("click"), e.find(".quantity_cont").hide());
                k.reservedStateUpdater.updateStack(v, b);
                k.reservedStateUpdater.updateStack(p, b)
            }
        },
        I = function(a, b, c) { a = a.data("itemdata"); return G(a, b, c) },
        G = function(a, b, c) {
            if (a.element) {
                var d = a.element,
                    f = a[KEY_VALUE],
                    e = null;
                b ? a = getCurrencyText(f, !0, !0, c) : (e = a[KEY_NOTRADEREASON]) ? (d.toggleClass("notrade", !0), a = 1 == e ?
                    "Too low price" : 2 == e || 3 == e || 4 == e ? "Unstable price" : 6 == e ? "Overstock" : "Not tradable") : (d.toggleClass("notrade", !1), a = getCurrencyText(f, !0, !0));
                (b = d.data("priceElement")) || (b = d.find(".price"), d.data("priceElement", b));
                !e && 10 <= a.length && b.toggleClass("price-small", !0);
                b.text(a);
                return !!e
            }
        };
    this.getItemStackIdFromData = function(a) {
        var b = 0 < a[KEY_TRADELOCKSECONDS] ? "_" + a[KEY_TRADELOCKSECONDS] : "",
            c = a.isOnSiteItem ? "_OS" : "",
            f = a.stackIdPrefix ? "_" + a.stackIdPrefix : "",
            e = a[KEY_FLAGS] & 8 ? "_d" : "";
        return "undefined" ===
            typeof a[KEY_BOTID] || 0 == d ? a.appid + "_" + a[KEY_CLASSID] + "_" + a[KEY_INSTANCEID] + b + c + e + f : a.appid + "_" + a[KEY_CLASSID] + "_" + a[KEY_INSTANCEID] + "_" + a[KEY_BOTID] + b + c + e + f
    };
    this.getItemStackIdFromElement = function(a) { return k.getItemStackIdFromData(a.data("itemdata")) };
    this.moveCountFromStackByElement = function(a, b) { var c = a.data("itemdata");
        c.container.getIsBotInv() ? $("#botofferinstructions").hide() : $("#userofferinstructions").hide();
        c.container.moveCountFromStack(c.isInInv, k.getItemStackIdFromData(c), b) };
    this.moveStackByElement =
        function(a) { a = a.data("itemdata");
            a.container.getIsBotInv() ? $("#botofferinstructions").hide() : $("#userofferinstructions").hide();
            a.container.moveWholeStack(a.isInInv, k.getItemStackIdFromData(a)) };
    this.getStackCountOfElement = function(a) { return a.data("itemdata").nostack ? 1 : a.data("itemdata").container.getStackSize(a.data("itemdata").isInInv, this.getItemStackIdFromElement(a)) }
}
ItemContainer.getUniqueItemKeyFromData = function(b) { return this.getUniqueItemKeyFromRaw(b.appid, b[KEY_ASSETID]) };
ItemContainer.getUniqueItemKeyFromRaw = function(b, e) { return b + "_" + e };
ItemContainer.UpdateElementTooltip = function(b, e) {
    var c, a = b.data("itemdata");
    switch (a.appid) {
        case 730:
            c = Templates.itemtooltipCSGO; break;
        case 570:
            c = Templates.itemtooltipDota2; break;
        case 433850:
            c = Templates.itemtooltipH1Z1; break;
        case 440:
            c = Templates.itemtooltipTF2; break;
        case 252490:
            c = Templates.itemtooltipRust; break;
        default:
            c = Templates.itemtooltip } $.each(a, function(a, b) { c = replaceAll(c, "{" + a + "}", b) });
    if (730 == a.appid) {
        var g = "string" == typeof a[KEY_FLOATVALUE_CS];
        if (g) {
            var d = parseFloat(a[KEY_FLOATVALUE_CS]),
                k, m, n, q, w, h;
            if (a[KEY_QUALITYTAG_CS]) { h = { BS: 1, WW: 2, FT: 3, MW: 4, FN: 5 } [a[KEY_QUALITYTAG_CS]];
                n = "hidden bs ww ft mw fn hidden".split(" ");
                w = " BS WW FT MW FN ".split(" "); var y = [1, 1, .45, .38, .15, .07, 0];
                k = n[h - 1];
                m = n[h];
                n = n[h + 1]; "hidden" !== n ? n += " round-r" : m += " round-r"; "hidden" !== k ? k += " round-l" : m += " round-l";
                q = w[h - 1];
                w = w[h + 1];
                h = 100 * (1 - (y[h] - d) / (y[h] - y[h + 1])) } else n = k = "hidden", m = "fn", h = 100 * (1 - d);
            c = c.replace("{leftclass}", k).replace("{midclass}", m).replace("{rightclass}", n).replace("{lefttxt}", q).replace("{righttxt}",
                w).replace("{percent}", h)
        }
    }
    k = $(c);
    if (730 == a.appid) {
        if ("object" == typeof a[KEY_STICKERS_CS] && a[KEY_STICKERS_CS].length)
            for (d = k.find(".stickers").show(), h = 0; h < a[KEY_STICKERS_CS].length; h++) m = "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/" + a[KEY_STICKERS_CS][h][1], d.append($("<div>").text(a[KEY_STICKERS_CS][h][0]).prepend($("<img>").attr("src", m)));
        g && (k.find(".floatval").text("Float: " + a[KEY_FLOATVALUE_CS]).show(), k.find(".floatprog").css({ display: "flex" }));
        if (a[KEY_SCREENSHOT_PNG_ID_CS]) {
            var u =
                k.find(".screenshot"),
                x = u.find("img");
            u.css("display", "block");
            x.attr("src", "/csgoScreenshot/" + a[KEY_SCREENSHOT_PNG_ID_CS] + ".png");
            var v = k.find(".screenshotLink")[0];
            u.mousemove(function(a) { if (a.target == v) x.removeAttr("style");
                else { var b = $(this).parent().offset(),
                        c = a.pageX - b.left;
                    a = a.pageY - b.top; var d = u.width(),
                        b = u.height(),
                        c = c / d * 1.3 - .15,
                        b = a / b * 1.3 - .15;
                    a = x[0].naturalWidth - u.width();
                    d = x[0].naturalHeight - u.height();
                    u.height() > x[0].naturalHeight && (b *= -1);
                    b *= d;
                    x.css("left", -(c * a)).css("top", -b) } }).mouseleave(function(a) { x.removeAttr("style") })
        }
    } else if (570 ==
        a.appid) {
        if (h = k.find(".detailsSection"), "string" === typeof a[KEY_TYPE] && ("Wearable" != a[KEY_TYPE] && "Bundle" != a[KEY_TYPE] || "string" !== typeof a[KEY_HERO_D2] || (g = $('<div><span>Used By::</span><span class="value"></span></div>'), g.find(".value").text(a[KEY_HERO_D2]), g.appendTo(h)), g = $('<div><span>Type:</span><span class="value"></span></div>'), g.find(".value").text(a[KEY_TYPE]), g.appendTo(h), "Wearable" === a[KEY_TYPE] && "string" === typeof a[KEY_SLOT_D2] && (g = $('<div><span>Slot:</span><span class="value"></span></div>'),
                g.find(".value").text(a[KEY_SLOT_D2]), g.appendTo(h)), h.show()), "object" == typeof a[KEY_GEMS_D2] && a[KEY_GEMS_D2].length)
            for (d = k.find(".gems"), h = 0; h < a[KEY_GEMS_D2].length; h++) g = $('<div class="row no-gutters"><div class="col col-auto">' + (a[KEY_GEMS_D2][h][0] ? '<img class="gemIcon" src="https://steamcdn-a.akamaihd.net/apps/570/icons/econ/' + a[KEY_GEMS_D2][h][0] + '" style="border-color:#' + a[KEY_GEMS_D2][h][1] + '">' : "<span class='gemIcon'></span>") + '</div><div class="col detailsArea"><span class="gemName" style="color:#' +
                a[KEY_GEMS_D2][h][3] + '"></span><br><span class="gemCategory"></span></div></div>'), g.find(".gemName").text(a[KEY_GEMS_D2][h][3]), g.find(".gemCategory").text(a[KEY_GEMS_D2][h][4]), d.append(g)
    } else 440 == a.appid && (h = k.find(".detailsSection"), "string" === typeof a[KEY_CLASS_TF2] && (g = $('<div><span>Class:</span><span class="value"></span></div>'), g.find(".value").text(a[KEY_CLASS_TF2]), g.appendTo(h), h.show()), "string" === typeof a[KEY_TYPE] && (g = $('<div><span>Type:</span><span class="value"></span></div>'),
        g.find(".value").text(a[KEY_TYPE]), g.appendTo(h), h.show()), "undefined" !== typeof a[KEY_EFFECT_TF2] && (h = k.find(".detailsSection"), h.append($("<span>").text(a[KEY_EFFECT_TF2][0]).css("color", "#" + a[KEY_EFFECT_TF2][1])), h.show()));
    a[KEY_VALUE] && 0 < a[KEY_VALUE] ? k.find(".price").text(getCurrencyText(a[KEY_VALUE], !0, !0, 0)) : k.find(".price").hide();
    h = a[KEY_MARKETNAME_FOREIGN] ? a[KEY_MARKETNAME_FOREIGN] + "<div class='eng'>" + a[KEY_MARKETNAME] + "</div>" : a[KEY_MARKETNAME];
    k.find(".itemnamesect").html(h);
    a[KEY_NAMETAG_CS] &&
        k.find(".nametag").show().text("Name tag: " + a[KEY_NAMETAG_CS]);
    a.extras && k.append(JSON.stringify(a.extras));
    a[KEY_FLAGS] & 8 && k.find(".extras").append("<span class='unwithdrawableText'>This item is unwithdrawable. You can trade it to the trade bot and contact the support to receive a 5% compensation (max $10) or you can wait and see if it becomes tradable.</span>");
    a[KEY_TRADELOCKSECONDS] && k.find(".locktimetxt").show().text("This item will be withdrawable in " + secondsToTxt(a[KEY_TRADELOCKSECONDS]));
    if (e) {
        var p = a.container;
        h = k.find(".context-bottom");
        g = a[KEY_ASSETID];
        m = a[KEY_BOTID] ? bots[a[KEY_BOTID].toString()] : g_steamID;
        var A = null;
        if (n = p.getStackCountOfElement(b)) d = $('<a class="moveLink"><i class="fa fa-plus"></i> Move: <input class="moveItemCount" value="1"> <i class="fa fa-arrow-right"></i></a>'), h.append(d), A = d.find(".moveItemCount"), A.val(n), d.click(function(c) {
            if (c.target == A[0]) return !0;
            c = A.val();
            p.getIsBotInv() && 1 == p.stackingMethod && SelectBot(a[KEY_BOTID]);
            0 < c && p.moveCountFromStackByElement(b,
                c);
            b.tooltipster("close")
        }), A.keyup(function(a) { 13 == a.keyCode && A.parent().click() });
        730 == a.appid && "undefined" !== typeof a[KEY_INSPECTCODE_CS] ? (d = "S" + m + "A" + g + "D" + a[KEY_INSPECTCODE_CS], n = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20" + d, a[KEY_SCREENSHOT_PNG_ID_CS] ? k.find(".screenshotLink").attr("href", "http://csgo.gallery/" + n) : (d = $("<a href='http://csgo.gallery/" + n + "' target='_blank'><i class='fa fa-eye'></i> Screenshot</a>"), h.append(d)), d = $("<a href='" + n + "'><i class='fa fa-eye'></i> Inspect</a>"),
            h.append(d)) : 440 == a.appid && ("undefined" !== typeof a[KEY_INSPECTCODE_TF2] && (d = "S" + m + "A" + g + "D" + a[KEY_INSPECTCODE_CS], d = $("<a href='steam://rungame/440/76561202255233023/+tf_econ_item_preview%20" + d + "'><i class='fa fa-eye'></i> Inspect</a>"), h.append(d)), "undefined" !== typeof a[KEY_WIKILINKID_TF2] && (d = "http://wiki.teamfortress.com/scripts/itemredirect.php?id=" + a[KEY_WIKILINKID_TF2], d = $("<a href='" + d + "' target='_blank'><i class='fa fa-eye'></i> \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 \u0432\u0438\u043a\u0438</a>"),
            h.append(d)));
        if ((730 == a.appid || 433850 == a.appid) && g_IsAdmin) { var B = "https://skinbaron.de/partner/Jambo#!?sort=CF" + (730 == a.appid && a[KEY_QUALITYTAG_CS] ? "&wf=" + { FN: 0, MW: 1, FT: 2, WW: 3, BS: 4 } [a[KEY_QUALITYTAG_CS]] : "") + "&str=" + encodeURIComponent(a[KEY_MARKETNAME].replace(/( \(.*\))/, "")),
                d = function() { window.open(B) },
                d = $("<a target='_blank'><i class='fa fa-search'></i> Search on SkinBaron</a>").click(d);
            h.append(d) } d = "http://steamcommunity.com/profiles/" + m + "/inventory/#" + a.appid + "_2_" + g;
        d = $("<a href='" + d + "' target='_blank'><i class='fa fa-steam'></i> View in inventory</a>");
        h.append(d);
        a[KEY_FLAGS] & 4 && (d = "http://steamcommunity.com/market/listings/" + a.appid + "/" + encodeURIComponent(a[KEY_MARKETNAME]), d = $("<a target='_blank'><i class='fa fa-steam'></i> View on Steam market</a>").attr("href", d), h.append(d));
        g_IsAdmin && (d = $("<a target='_blank'><i class='fa fa-info'></i> Item data</a>").click(function() { console.log(a) }), h.append(d));
        k.find(".contextActions").css("display", e ? "block" : "none")
    }
    h = b.tooltipster("status").open;
    b.tooltipster("content", k);
    h && setTimeout(function() { b.tooltipster("open") },
        0);
    e ? k.addClass("showContextMenu") : k.removeClass("showContextMenu");
    b.tooltipster("reposition")
};
$(function() { $(document).on("contextmenu", ".item", function(b) { b.preventDefault();
        b = $(this); var e = b.tooltipster("instance");
        e.close(); var c = { interactive: !1 };
        c.delay = e.option("delay");
        c.functionAfter = e.option("functionAfter");
        e.option("interactive", !0);
        e.option("delay", 150);
        e.option("functionAfter", function(a, b) { $.each(c, function(b, c) { a.option(b, c) }) });
        b.tooltipster("open");
        ItemContainer.UpdateElementTooltip(b, !0) }) });

function UpdateUserInventory(b, e) {
    g_steamID && (e ? useritems.DeleteAppIdItems(e) : useritems.Reset(), $("#usersortdefault").click(), e || Elements.UserInv.empty(), $("#userInvLoaderAnim").css("display", ""), $("#userInvNewItems").hide(), $.ajax({ url: "/ajax/userinventory?appid=" + e + (b ? "&noc" : "") }).done(function(b) {
        $("#userInvLoaderAnim").hide();
        b.success ? (e || useritems.init(), useritems.AddItemsFromResponse(b.response.steam), $.each(b.response.site.items, function(a, b) { $.each(b, function(a, b) { b.isOnSiteItem = !0 }) }), useritems.AddItemsFromResponse(b.response.site.items),
            $.each(b.response.site.reserved, function(a, b) { $.each(b, function(b, c) { useritems.reservedStateUpdater.addItemChangedState(a, b, c) }) }), useritems.reservedStateUpdater.update(), useritems.SortByField(KEY_VALUE, !0), useritems.Populate(500)) : toastr.error(b.error)
    }))
}

function UpdateBotInventory(b) {
    b ? botitems.DeleteAppIdItems(b) : botitems.Reset();
    $("#itemTypeDropdownList").find("li.selected").removeClass("selected");
    SelectBot(0);
    $("#botsortdefault").click();
    Elements.BotSearchInput.val("");
    b || Elements.BotInv.empty();
    $("#botinvextra").html('<div class="loader_block"><div class="loader">');
    $.ajax({ url: "/ajax/botsinventory?appid=" + b + (g_IsAdmin && "un" == windowHash ? "&un" : "") }).done(function(e) {
        $("#botinvextra").empty();
        e.success ? (b ? botitems.AddItemsFromResponse(e.response.items) :
            botitems.init(e.response.items), botitems.SortByField(KEY_VALUE, !0), botitems.Populate(500), BotItemPriceFilterMax = Math.ceil(botitems.getHighestItemPrice()), $("#priceslider").slider("values", [0, 1]), $("#pricefilter_min").val(0), $("#pricefilter_max").val(Math.round(BotItemPriceFilterMax * Currency.rate)), $.each(e.response.reserved, function(b, a) { $.each(a, function(a, c) { botitems.reservedStateUpdater.addItemChangedState(b, a, c) }) }), botitems.reservedStateUpdater.update()) : toastr.error(e.error)
    })
}

function setTradeWindowState(b) {
    $(".showOnTradeState" + setTradeWindowState.lastWindowID).hide();
    $(".showOnTradeState" + b).show();
    $(".hideOnTradeState" + setTradeWindowState.lastWindowID).show();
    $(".hideOnTradeState" + b).hide();
    TradeStateBtc = !1;
    3 == setTradeWindowState.lastWindowID && (useritems.setOnSiteItemFilter(0), $("#userGameSelector .selectAppAll").click());
    switch (b) {
        case 1:
            $("#usercol").toggleClass("col-6", !0).toggleClass("col-12", !1);
            pushHistoryStatePath("/");
            break;
        case 2:
            TradeStateBtc = !0;
            $("#usercol").toggleClass("col-6",
                !1).toggleClass("col-12", !0);
            pushHistoryStatePath("/bitcoin");
            break;
        case 3:
            DepositPage.init();
            $("#usercol").toggleClass("col-6", !1).toggleClass("col-12", !0);
            pushHistoryStatePath("/deposit_CSGO");
            useritems.RemoveOfferItemsByAppId(730, !0);
            $("#userGameSelector .selectApp730").click();
            useritems.setOnSiteItemFilter(2);
            var e = function(b) { b.stopPropagation();
                setTradeWindowState(1);
                $(window).off("popstate", e); return !1 };
            $(window).on("popstate", e)
    }
    setTradeWindowState.lastWindowID = b
}
setTradeWindowState.lastWindowID = 1;

function trade(b, e) {
    var c = { id: SelectedBot, u: useritems.getTradeRequestData() };
    b ? (c.balance = DepositPage.CSGODepositBalanceChange, c.holdSeconds = 3600 * parseInt($("#depositCSGOTimeSlider").slider("value"))) : (c.b = botitems.getTradeRequestData(), c.balance = useritems.getOfferValue().minus(botitems.getOfferValue()).toFixed(4), e && $.each(c.b, function(a) { c.b[a].isOnSiteItem = 1 }));
    TradesHandler.openTradesWindow(null, !0);
    TradesHandler.updateActive(function() { TradesHandler.openTradesWindow(null, !0) });
    $.ajax({
        url: "/ajax/trade",
        data: JSON.stringify(c)
    }).done(function(a) { a.success ? TradesHandler.openTradesWindow(a.response) : (toastr.error(a.error), $("#offerlistcontent").find(".generatingTrade").addClass("error").html(a.error.replace(/\n/g, "<br>"))); "undefined" !== typeof a.response && "undefined" !== typeof a.response.code && 1 == a.response.code && ($.arcticmodal("close"), $("#settings").arcticmodal()) })
}

function SelectBot(b, e) { SelectBot.botdrop || (SelectBot.botdrop = Elements.BotSelect.find(".drop")); if (b != SelectedBot) { var c = Elements.BotSelect.find(".active"),
            a = Elements.BotSelect.find("#botselect" + b).data("botidtxt");
        c.text(0 == b ? "All bots" : "Bot " + a);
        SelectBot.botdrop.is(":visible") && Elements.BotSelect.click();
        e || botitems.EmptyOffer(!0);
        b ? botitems.FilterByField(KEY_BOTID, b, 0, !0) : botitems.ResetFilterByField(0);
        SelectedBot = b } }
$(function() {
    (function() { var b = $("#tradeCountBadge"),
            a = function(a) { b.click(function() { TradesHandler.openTradesWindow(a.response) }); var c = TradesHandler.getActiveCount();
                c ? b.text(c).show() : b.text(c).hide() };
        TradesHandler.registerNewTradeCallback(a);
        a(TradesHandler.getActiveData()) })();
    Elements.UserInv = $("#userinventory");
    Elements.UserOfferInv = $("#userofferinv");
    Elements.UserOfferValueSkins = $("#userofferval");
    Elements.UserOfferBtcValue = $("#btcofferval");
    Elements.OfferBalanceChangeSign = $("#balanceChangeSign");
    Elements.OfferBalanceChangeValue = $("#balanceChangeIndicator");
    Elements.UserSearchInput = $("#usersearchinput");
    Elements.BotInv = $("#botinventory");
    Elements.BotOfferInv = $("#botofferinv");
    Elements.BotOfferValueSkins = $("#botofferval");
    Elements.BotSearchInput = $("#botsearchinput");
    Elements.BitcoinFreeFeeInfo = $("#btcfreefeeinfo");
    Elements.GetBitcoinsBtn = $("#getbtcbtn");
    Elements.OfferValueBTC = $("#offervalbtc");
    Elements.BotSelect = $("#botselect");
    Elements.UserGameSelector = $("#userGameSelector");
    Elements.BotGameSelector =
        $("#botGameSelector");
    Elements.WithdrawBtn = $("#withdrawbtn");
    Elements.WithdrawBtn.click(function() {
        var b = useritems.getTradeRequestData(),
            a = [],
            e = !1;
        $.each(b, function(b, c) { c.isOnSiteItem || (toastr.error("You can only withdraw items with the {icon} icon".replace("{icon}", '<i class="fa fa-home"></i>')), e = !0);
            0 < c[KEY_TRADELOCKSECONDS] && toastr.error("At least one of the bot's items isn't available for trading");
            a.push({ id: c.onSiteItemId, amount: c.amount }) });
        e || (TradesHandler.openTradesWindow(null, !0), TradesHandler.updateActive(function() {
            TradesHandler.openTradesWindow(null,
                !0)
        }), $.ajax({ url: "/ajax/withdrawSteam", data: JSON.stringify({ items: a }) }).done(function(a) { a.success ? TradesHandler.openTradesWindow(a.response) : (toastr.error(a.error), $("#offerlistcontent").find(".generatingTrade").addClass("error").html(a.error.replace(/\n/g, "<br>"))); "undefined" !== typeof a.response && "undefined" !== typeof a.response.code && 1 == a.response.code && ($.arcticmodal("close"), $("#settings").arcticmodal()) }))
    });
    Elements.UserGameSelector.find(".selectApp" + SelectedUserAppId).addClass("selected");
    Elements.UserGameSelector.children().click(function(b) { b = $(this);
        (SelectedUserAppId = parseInt(b.data("appid"))) ? useritems.FilterByAppId(SelectedUserAppId): useritems.ResetFilterByAppId();
        Elements.UserGameSelector.find(".selected").removeClass("selected");
        b.addClass("selected") });
    Elements.BotGameSelector.find(".selectApp" + SelectedBotAppId).addClass("selected");
    Elements.BotGameSelector.children().click(function(b) {
        b = $(this);
        (SelectedBotAppId = parseInt(b.data("appid"))) ? botitems.FilterByAppId(SelectedBotAppId):
            botitems.ResetFilterByAppId();
        Elements.BotGameSelector.find(".selected").removeClass("selected");
        b.addClass("selected")
    });
    $(function() { var b = $("#currencyDropdownLink"),
            a = $("#currencyDropdownList");
        b.initDropdown(a);
        a.find("a").click(function() { Cookies.set("currency", $(this).data("iso"), { domain: ".cs.deals", expires: 7 }); return !0 });
        $("#currencyIndicator").click(function() { b.click();
            b.get(0).scrollIntoView() }) });
    $(function() {
        var b = function() { botitems.FilterByName(Elements.BotSearchInput.val().split(" ")) },
            a;
        Elements.BotSearchInput.keyup(function(c) { 13 == c.which ? (b(), clearTimeout(a)) : (clearTimeout(a), a = setTimeout(function() { b() }, 300)) })
    });
    $(function() { var b = Elements.BotSelect.find(".drop");
        Elements.BotSelect.click(function(a) { Elements.BotSelect.toggleClass("active");
            b.is(":visible") ? b.slideUp(200) : b.slideDown(200);
            a.stopPropagation() }).find("td").click(function(a) { SelectBot(parseInt(this.dataset.botid));
            a.stopPropagation() }) });
    botitems.SetElements(Elements.BotInv, Elements.BotOfferInv);
    botitems.setIsBotInv();
    $("#botorder").initDropdown();
    $("#botrefresh").click(function() { UpdateBotInventory(SelectedBotAppId) });
    useritems.SetElements(Elements.UserInv, Elements.UserOfferInv);
    Elements.UserInv.on("click", ".item", function(b) { $("#userofferinstructions").hide();
        $(this).unbind(b) });
    Elements.BotInv.on("click", ".item", function(b) { $("#botofferinstructions").hide();
        $(this).unbind(b) });
    g_steamID && (UpdateUserInventory(!1, SelectedUserAppId), $("#userorder").initDropdown(), $(function() {
        var b = function() { useritems.FilterByName(Elements.UserSearchInput.val().split(" ")) },
            a;
        Elements.UserSearchInput.keyup(function(c) { 13 == c.which ? (b(), clearTimeout(a)) : (clearTimeout(a), a = setTimeout(function() { b() }, 300)) })
    }), $("#tradebtn").click(function() { trade(!1, DoNotWithdrawTradeItems) }), $("#userrefresh").click(function() { UpdateUserInventory(!0, SelectedUserAppId) }), RemoteCommand.addHandler(1, function() { $("#userrefresh").click() }));
    $("#storeTradeItems").initSwitch(function(b) { DoNotWithdrawTradeItems = b; return !0 });
    $("#smartpick").initSwitch(function(b) {
        (SmartPick = b) ? botitems.FilterByPrice(0,
            useritems.getOfferValue().minus(botitems.getOfferValue()).plus(g_balance)): botitems.FilterByPrice(0, 99999);
        return !0
    });
    $("#botlock").initSwitch(function(b) { botitems.setStackingMethod(b ? 1 : 0);
        $("#botselect").parent().toggle(b);
        b || SelectBot(0);
        botitems.Populate();
        Elements.BotSearchInput.val().length && botitems.FilterByName(Elements.BotSearchInput.val().split(" ")); return !0 });
    $("#filterTradelock").initSwitch(function(b) { botitems.filterAllowTradelock(b);
        botitems.Populate(); return !0 });
    $("#filterStattrak").initSwitch(function(b) {
        botitems.filterStattrak(b);
        botitems.Populate();
        return !0
    });
    $("#filterStickers").initSwitch(function(b) { botitems.filterHasStickers(b);
        botitems.Populate(); return !0 });
    Elements.ItemTypeFilterDropdownList = $("#itemTypeDropdownList");
    $("#itemTypeDropdown").click(function() { var b = $(this);
        b.hasClass("active") ? Elements.ItemTypeFilterDropdownList.slideUp(200) : Elements.ItemTypeFilterDropdownList.slideDown({ duration: 200, start: function() { $(this).css({ display: "flex" }) } });
        b.toggleClass("active") });
    var b = null;
    Elements.ItemTypeFilterDropdownList.find("li").click(function(c) {
        c =
            $(this);
        b && b.removeClass("selected");
        c.addClass("selected");
        b = c;
        c = $(this).data("type");
        "true" === c && (c = !0);
        var a = $(this).data("key") ? $(this).data("key") : KEY_TYPE;
        c ? botitems.FilterByField(a, c, 1) : botitems.ResetFilterByField(1)
    });
    $(function() {
        var b = $("#priceslider"),
            a = $("#pricefilter_min"),
            e = $("#pricefilter_max"),
            d = 0,
            k = 0;
        a.change(function(a) {
            a = $(this);
            0 == a.val().length ? a.val(0) : (d = parseInt(Math.min(k, Math.max(0, a.val() / Currency.rate))), a.val(Math.floor(d * Currency.rate)));
            b.slider("values", 0, d ? Math.sqrt(d) /
                Math.sqrt(BotItemPriceFilterMax) : 0);
            botitems.FilterByPrice(d, k)
        });
        e.change(function(a) { a = $(this); var c;
            0 == a.val().length ? (c = BotItemPriceFilterMax, a.val(c)) : (k = parseInt(Math.min(BotItemPriceFilterMax, Math.max(d, a.val() / Currency.rate))), a.val(Math.ceil(k * Currency.rate)));
            b.slider("values", 1, k ? Math.sqrt(k) / Math.sqrt(BotItemPriceFilterMax) : 0);
            botitems.FilterByPrice(d, k) });
        b.slider({
            range: !0,
            min: 0,
            max: 1,
            step: 1E-5,
            values: [0, 1],
            slide: function(b, c) {
                d = Math.round(Math.pow(c.values[0], 2) * BotItemPriceFilterMax);
                k = Math.round(Math.pow(c.values[1], 2) * BotItemPriceFilterMax);
                a.val(Math.floor(d * Currency.rate));
                e.val(Math.ceil(k * Currency.rate));
                this.timeout && clearTimeout(this.timeout);
                this.timeout = setTimeout(function() { botitems.FilterByPrice(d, k) }, 100)
            }
        })
    });
    $(function() {
        var b = $("#state_itemnameinput"),
            a = $("#state_checkbtn"),
            e = $("#state_error"),
            d = $("#state_itemtradabletxt"),
            k = $("#state_itemtradablebtctxt"),
            m = $("#state_itemnametext"),
            n = $("#state_suggestionlistcont"),
            q = function() {
                e.hide();
                $.ajax({
                    url: "/ajax/checkState",
                    data: { market_name: b.val() }
                }).done(function(a) {
                    a.error ? e.text("\u041e\u0448\u0438\u0431\u043a\u0430: " + a.error).show() : (a = a.response, m.text(a.market_name), d.toggleClass("tradable", a.istradable), d.toggleClass("untradable", !a.istradable), k.toggleClass("tradable", a.istradablebtc), k.toggleClass("untradable", !a.istradablebtc), d.html(a.tradabletxt + (a.istradable ? " <i class='fa fa-check'></i>" : " <i class='fa fa-times'></i>")), k.html(a.tradabletxtbtc + (a.istradablebtc ? " <i class='fa fa-check'></i>" : " <i class='fa fa-times'></i>")),
                        b.val(""))
                })
            },
            w = function() { n.empty().hide();
                $.ajax({ url: "/ajax/checkState", data: { s: b.val() } }).done(function(a) { if (a.length) { for (var b = $("<ul>"), c = 0; c < a.length; c++) b.append($("<li>").text(a[c]));
                        n.append(b).show() } }) };
        n.on("click", "li", function() { b.val($(this).text());
            n.hide() });
        a.click(q);
        var h = null;
        b.keypress(function(a) { 13 == a.which && q() }).keyup(function(a) { h && clearTimeout(h);
            4 <= b.val().length && (h = setTimeout(function() { w() }, 300)) })
    });
    var e = function() {
        var b = $("#footer"),
            a = $("#chatWindowParent"),
            e =
            $("#chatwindow"),
            d = e.find(".chatcontent"),
            k = $("#openchat"),
            m = 0,
            n = !1;
        this.resetWindowTop = function() { m = a.offset().top };
        this.updateSize = function() {
            m || this.resetWindowTop();
            window.scrollY > m ? (n || (e.toggleClass("sticky", !0), e.css("height", "auto"), n = !0), d.scrollTop(d[0].scrollHeight), e.css("bottom", Math.abs(Math.min(0, document.body.scrollHeight - window.scrollY - document.documentElement.clientHeight - b.height())))) : (n && (e.toggleClass("sticky", !1), e.css("bottom", "auto"), n = !1), e.height(window.scrollY - m + window.innerHeight),
                d.scrollTop(d[0].scrollHeight))
        };
        $(window).scroll(this.updateSize);
        $(window).resize(this.updateSize);
        this.updateSize();
        e.find(".close").click(function() { Cookies.set("chatClosed", "1", { domain: ".cs.deals" });
            a.hide(0, function() { k.show("slide", { direction: "left" }, 100) }) });
        k.click(function() { Cookies.set("chatClosed", "0", { domain: ".cs.deals" });
            k.hide("slide", { direction: "left", complete: function() { a.show("slide", { direction: "left" }, 200);
                    updateFunc() } }, 100) });
        return { updateSize: updateSize, resetWindowTop: resetWindowTop }
    }();
    $("#goToTradeBtn,#introArrowDownBtn").attr("href", "javascript:void(0)").click(function(b) { b.preventDefault();
        $("html,body").animate({ scrollTop: $("#tradeSkins").offset().top }, 700); return !1 });
    $("#closeIntroBtn").click(function() { $("#introScreen").hide();
        $("header").removeClass("transparent");
        e.resetWindowTop();
        e.updateSize();
        Cookies.set("hideIntro", 1, { domain: ".cs.deals", expires: 2 }) });
    UpdateBotInventory(SelectedBotAppId);
    subscribeWS("tradeBotInventoryEvents", function(b, a) {
        switch (a.event) {
            case "reserved":
                botitems.setItemsReservedByAppidAssetid(a.data);
                break;
            case "refreshDecayPrices":
                botitems.resetDecayItems(a.data)
        }
    });
    subscribeWS("userInventoryEvents", function(b, a) { switch (a.event) {
            case "reserved":
                useritems.setItemsReservedByAppidAssetid(a.data); break;
            case "newItems":
                useritems.addPendingNewItemsResponse(a.response), $("#userInvNewItems").show().click(function() { useritems.applyPendingNewItems();
                    $(this).hide().off("click") }) } });
    "/bitcoin" == window.location.pathname ? setTradeWindowState(2) : "/deposit_CSGO" == window.location.pathname && setTradeWindowState(3)
});
var DepositPage = function() {
        return {
            CSGODepositBalanceChange: 0,
            init: function() {
                if (!this.inited) {
                    var b = $("#CSGODepositWaitTime"),
                        e = $("#CSGODeposit_ExtraValueUSD"),
                        c = $("#CSGODeposit_ExtraValuePercent"),
                        a = $("#CSGODeposit_TotalValue"),
                        g = $("#depositCSGOTimeSlider"),
                        d = function(d, g) {
                            var k = g.value / 168 * (CSGODepositExtraPercentForValueFor7Days / 100),
                                m = useritems.getOfferValue().times(k),
                                w = m.times(Currency.rate);
                            e.text(w.toFixed(4, Decimal.ROUND_DOWN));
                            b.text(secondsToTxt(3600 * g.value, 2));
                            a.text(useritems.getOfferValue().times(Currency.rate).plus(w).toFixed(4,
                                Decimal.ROUND_DOWN));
                            c.text((100 * k).toFixed(4));
                            DepositPage.CSGODepositBalanceChange = useritems.getOfferValue().plus(m)
                        };
                    g.slider({ range: "min", min: 1, max: 168, step: 1, value: 168, slide: d });
                    d(null, { value: g.slider("value") });
                    useritems.AddValueChangeCallback(function() { d(null, { value: g.slider("value") }) });
                    this.inited = !0
                }
            }
        }
    }(),
    InvestmentModal = function() {
        var b = 0,
            e = 0,
            c = 0;
        return {
            show: function() { InvestmentModal.init();
                $("#investModal").arcticmodal() },
            init: function() {
                if (!this.inited) {
                    var a = $("#investment_Amount"),
                        g = $("#investment_TimeText"),
                        d = $("#investment_YearlyInterest"),
                        k = $("#investment_ExtraValue"),
                        m = $("#investment_TotalInterest"),
                        n = $("#investment_TotalValue"),
                        q = $("#investment_TimeSlider"),
                        w = $("#investButton"),
                        h = function(b, h) {
                            c = h.value;
                            g.text(secondsToTxt(3600 * c, 2));
                            e = Math.pow(c / (24 * investmentMaxDays), investmentInterestExponent) * investmentInterestPercent / 100;
                            var u = parseFloat(a.val()),
                                q = e * u;
                            k.text(getCurrencyText(q, !0, !1, 2, !0));
                            d.text((100 * (Math.pow(1 + e / c * 24, 365) - 1)).toFixed(2));
                            m.text((100 * e).toFixed(4));
                            n.text(getCurrencyText(u + q, !0, !1, 2, !0))
                        };
                    q.slider({ range: "min", min: 1, max: 24 * investmentMaxDays, step: 1, value: 24 * investmentMaxDays, slide: h });
                    h(null, { value: q.slider("value") });
                    a.keyup(function() { var c = a.val(),
                            d = c;
                        isNaN(c) && (d = c.replace(/[^0-9\.]/g, ""), 2 < d.split(".").length && (d = val.replace(/\.+$/, "")));
                        c != d && (c = d, a.val(d));
                        b = (parseFloat(c) / Currency.rate).toFixed(4);
                        h(null, { value: q.slider("value") }) });
                    a.trigger("keyup");
                    w.click(function() {
                        g_balance < b ? toastr.error("You can't afford this much") : 0 >= b || $.ajax({
                            url: "/ajax/investBalance",
                            data: { investAmount: b, verifyResult: (b * (1 + e)).toFixed(4), lengthHours: c }
                        }).done(function(a) { a.success ? TradesHandler.openTradesWindow(a.response) : toastr.error(a.error) })
                    });
                    this.inited = !0
                }
            }
        }
    }();

function InitInvestmentModal() {
    if (!InitInvestmentModal.inited) {
        $("#CSGODepositWaitTime");
        var b, e = $("#CSGODeposit_ExtraValueUSD"),
            c = $("#CSGODeposit_ExtraValuePercent"),
            a = $("#CSGODeposit_TotalValue"),
            g = $("#depositCSGOTimeSlider"),
            d = function(d, g) {
                var k = g.value / 168 * (CSGODepositExtraPercentForValueFor7Days / 100);
                b = useritems.getOfferValue().times(k);
                var m = b.times(Currency.rate);
                b = b.toFixed(4, Decimal.ROUND_DOWN);
                e.text(m.toFixed(4, Decimal.ROUND_DOWN));
                element_depositWaitTime.text(secondsToTxt(3600 * g.value,
                    2));
                a.text(useritems.getOfferValue().times(Currency.rate).plus(m).toFixed(4, Decimal.ROUND_DOWN));
                c.text((100 * k).toFixed(4))
            };
        g.slider({ min: 1, max: 168, step: 1, value: 168, slide: d });
        d(null, { value: g.slider("value") });
        useritems.AddValueChangeCallback(function() { d(null, { value: g.slider("value") }) });
        InitInvestmentModal.inited = !0
    }
}
window.onpopstate = function(b) { "/deposit_CSGO" == window.location.pathname ? setTradeWindowState(3) : "/bitcoin" == window.location.pathname ? setTradeWindowState(2) : "/" == window.location.pathname && setTradeWindowState(1) };

function toAccurateMoneyString(b) { return b.toLocaleString("en", { useGrouping: !1, minimumFractionDigits: 2, maximumFractionDigits: 4 }) };