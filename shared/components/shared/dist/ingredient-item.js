"use strict";
exports.__esModule = true;
exports.IngredientItem = void 0;
var utils_1 = require("@/shared/lib/utils");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
exports.IngredientItem = function (_a) {
    var className = _a.className, active = _a.active, price = _a.price, name = _a.name, imageUrl = _a.imageUrl, onClick = _a.onClick;
    return (react_1["default"].createElement("div", { className: utils_1.cn('flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white', { 'border border-primary': active }, className), onClick: onClick },
        active && react_1["default"].createElement(lucide_react_1.CircleCheck, { className: 'absolute top-2 right-2 text-primary' }),
        react_1["default"].createElement("img", { width: 110, height: 110, src: imageUrl }),
        react_1["default"].createElement("span", { className: 'text-xs mb-1' }, name),
        react_1["default"].createElement("span", { className: 'font-bold' },
            price,
            " \u20BD")));
};
