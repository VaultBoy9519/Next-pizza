'use client';
"use strict";
exports.__esModule = true;
exports.CheckoutItem = void 0;
var utils_1 = require("@/shared/lib/utils");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var CartItemDetails = require("./index");
exports.CheckoutItem = function (_a) {
    var name = _a.name, price = _a.price, imageUrl = _a.imageUrl, quantity = _a.quantity, details = _a.details, className = _a.className, disabled = _a.disabled, onClickCountButton = _a.onClickCountButton, onClickRemove = _a.onClickRemove;
    return (react_1["default"].createElement("div", { className: utils_1.cn('flex items-center justify-between', {
            'opacity-50 pointer-events-none': disabled
        }, className) },
        react_1["default"].createElement("div", { className: 'flex items-center gap-5 flex-1' },
            react_1["default"].createElement(CartItemDetails.Image, { src: imageUrl }),
            react_1["default"].createElement(CartItemDetails.Info, { name: name, details: details, className: 'w-1/2' })),
        react_1["default"].createElement(CartItemDetails.Price, { value: price }),
        react_1["default"].createElement("div", { className: 'flex items-center gap-5 ml-20' },
            react_1["default"].createElement(CartItemDetails.CountButton, { onClick: onClickCountButton, value: quantity }),
            react_1["default"].createElement("button", { type: 'button', onClick: onClickRemove },
                react_1["default"].createElement(lucide_react_1.X, { className: 'text-gray-400 cursor-pointer hover:text-gray-600', size: 20 })))));
};
