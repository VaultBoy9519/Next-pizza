"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CheckoutCart = void 0;
var lib_1 = require("@/shared/lib");
var cart_1 = require("@/shared/services/cart");
var react_1 = require("react");
var white_block_1 = require("../white-block");
var checkout_item_1 = require("./checkout-item");
var checkout_item_skeleton_1 = require("./checkout-item-skeleton");
exports.CheckoutCart = function (_a) {
    var items = _a.items, className = _a.className, updateItemQuantity = _a.updateItemQuantity, loading = _a.loading;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { className: className, title: '1. \u041A\u043E\u0440\u0437\u0438\u043D\u0430' },
        react_1["default"].createElement("div", { className: 'flex flex-col gap-5' }, loading && items.length === 0
            ? __spreadArrays(Array(4)).map(function (_, i) { return react_1["default"].createElement(checkout_item_skeleton_1.CheckoutItemSkeleton, { key: i }); })
            : items.map(function (item) { return (react_1["default"].createElement(checkout_item_1.CheckoutItem, { key: item.id, id: item.id, imageUrl: item.imageUrl, name: item.name, price: item.price, quantity: item.quantity, details: lib_1.getCartItemsDetails(item.ingredients, item.pizzaType, item.pizzaSize), disabled: item.disabled, onClickCountButton: function (type) { return lib_1.onClickCountButton(item.id, item.quantity, type, updateItemQuantity); }, onClickRemove: function () { return cart_1.removeCartItem(item.id); } })); }))));
};
