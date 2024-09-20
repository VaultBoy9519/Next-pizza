"use strict";
exports.__esModule = true;
exports.CheckoutCart = void 0;
var lib_1 = require("@/shared/lib");
var cart_1 = require("@/shared/services/cart");
var react_1 = require("react");
var white_block_1 = require("../white-block");
var checkout_item_1 = require("./checkout-item");
exports.CheckoutCart = function (_a) {
    var items = _a.items, className = _a.className, updateItemQuantity = _a.updateItemQuantity;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { className: className, title: '1. \u041A\u043E\u0440\u0437\u0438\u043D\u0430' },
        react_1["default"].createElement("div", { className: 'flex flex-col gap-5' }, items.map(function (item) { return (react_1["default"].createElement(checkout_item_1.CheckoutItem, { key: item.id, id: item.id, imageUrl: item.imageUrl, name: item.name, price: item.price, quantity: item.quantity, details: lib_1.getCartItemsDetails(item.ingredients, item.pizzaType, item.pizzaSize), disabled: item.disabled, onClickCountButton: function (type) { return lib_1.onClickCountButton(item.id, item.quantity, type, updateItemQuantity); }, onClickRemove: function () { return cart_1.removeCartItem(item.id); } })); }))));
};
