'use client';
"use strict";
exports.__esModule = true;
exports.CartDrawer = void 0;
var sheet_1 = require("@/shared/components/ui/sheet");
var lib_1 = require("@/shared/lib");
var utils_1 = require("@/shared/lib/utils");
var cart_1 = require("@/shared/services/cart");
var store_1 = require("@/shared/store");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var ui_1 = require("../ui");
var cart_drawer_item_1 = require("./cart-drawer-item");
exports.CartDrawer = function (_a) {
    var children = _a.children;
    var _b = store_1.useCartStore(function (state) { return [state.totalAmount, state.items, state.getCartItems, state.removeCartItem]; }), totalAmount = _b[0], items = _b[1], getCartItems = _b[2], removeCartItem = _b[3];
    console.log('🚀 ~ items:', items);
    react_1.useEffect(function () {
        getCartItems();
    }, []);
    var onClickCountButton = function (id, quantity, type) {
        var newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        cart_1.updateItemQuantity(id, newQuantity);
    };
    return (react_1["default"].createElement(sheet_1.Sheet, null,
        react_1["default"].createElement(sheet_1.SheetTrigger, { asChild: true }, children),
        react_1["default"].createElement(sheet_1.SheetContent, { className: 'flex flex-col justify-between pb-0 bg-[#F4F1EE]' },
            react_1["default"].createElement("div", { className: utils_1.cn('flex flex-col h-full justify-between') },
                react_1["default"].createElement(sheet_1.SheetHeader, null,
                    react_1["default"].createElement(sheet_1.SheetTitle, null,
                        "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 ",
                        react_1["default"].createElement("span", { className: 'font-bold' },
                            items.length,
                            " \u0442\u043E\u0432\u0430\u0440\u0430"))),
                react_1["default"].createElement("div", { className: '-mx-6 mt-5 overflow-auto flex-1' }, items.map(function (item) { return (react_1["default"].createElement("div", { key: item.id, className: 'mb-2' },
                    react_1["default"].createElement(cart_drawer_item_1.CartDrawerItem, { id: item.id, imageUrl: item.imageUrl, details: lib_1.getCartItemsDetails(item.ingredients, item.pizzaType, item.pizzaSize), disabled: item.disabled, name: item.name, price: item.price, quantity: item.quantity, onClickCountButton: function (type) { return onClickCountButton(item.id, item.quantity, type); }, onClickRemove: function () { return removeCartItem(item.id); } }))); })),
                react_1["default"].createElement(sheet_1.SheetFooter, { className: '-mx-6 bg-white p-8' },
                    react_1["default"].createElement("div", { className: 'w-full' },
                        react_1["default"].createElement("div", { className: 'flex mb-4' },
                            react_1["default"].createElement("span", { className: 'flex flex-1 text-lg text-neutral-500' },
                                "\u0418\u0442\u043E\u0433\u043E",
                                react_1["default"].createElement("div", { className: 'flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' })),
                            react_1["default"].createElement("span", { className: 'font-bold text-lg' },
                                totalAmount,
                                " \u20BD")),
                        react_1["default"].createElement(link_1["default"], { href: '/checkout' },
                            react_1["default"].createElement(ui_1.Button, { type: 'submit', className: 'w-full h-12 text-base' },
                                "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",
                                react_1["default"].createElement(lucide_react_1.ArrowRight, { className: 'w-5 ml-2' })))))))));
};
