"use strict";
exports.__esModule = true;
exports.CountButton = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
var count_icon_button_1 = require("./count-icon-button");
exports.CountButton = function (_a) {
    var className = _a.className, onClick = _a.onClick, _b = _a.value, value = _b === void 0 ? 1 : _b, _c = _a.size, size = _c === void 0 ? 'sm' : _c;
    return (react_1["default"].createElement("div", { className: utils_1.cn('inline-flex items-center justify-between gap-3', className) },
        react_1["default"].createElement(count_icon_button_1.CountIconButton, { onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick('minus'); }, disabled: value === 1, size: size, type: 'minus' }),
        react_1["default"].createElement("b", { className: size === 'sm' ? 'text-sm' : 'text-md' }, value),
        react_1["default"].createElement(count_icon_button_1.CountIconButton, { onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick('plus'); }, size: size, type: 'plus' })));
};
