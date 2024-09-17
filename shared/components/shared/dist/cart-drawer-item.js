"use strict";
exports.__esModule = true;
exports.CartDrawerItem = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var CartItem = require("./cart-item-details");
var count_button_1 = require("./count-button");
exports.CartDrawerItem = function (_a) {
    var imageUrl = _a.imageUrl, name = _a.name, price = _a.price, quantity = _a.quantity, details = _a.details, disabled = _a.disabled, onClickCountButton = _a.onClickCountButton, onClickRemove = _a.onClickRemove, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn('flex bg-white p-5 gap-6 mb-2', {
            'opacity-50 pointer-events-none': disabled
        }, className) },
        react_1["default"].createElement(CartItem.Image, { src: imageUrl }),
        react_1["default"].createElement("div", { className: 'flex-1' },
            react_1["default"].createElement(CartItem.Info, { name: name, details: details }),
            react_1["default"].createElement("hr", { className: 'my-3' }),
            react_1["default"].createElement("div", { className: 'flex items-center justify-between' },
                react_1["default"].createElement(count_button_1.CountButton, { onClick: onClickCountButton, value: quantity }),
                react_1["default"].createElement("div", { className: 'flex items-center gap-3' },
                    react_1["default"].createElement(CartItem.Price, { value: price }),
                    react_1["default"].createElement(lucide_react_1.Trash2Icon, { onClick: onClickRemove, className: 'text-gray-400 cursor-pointer hover:text-gray-600', size: 16 }))))));
};
