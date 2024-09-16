"use strict";
exports.__esModule = true;
exports.TopBar = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
var index_1 = require("./index");
exports.TopBar = function (_a) {
    var categories = _a.categories, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn('sticky top-0 bg-white z-10 py-5 shadow-lg shadow-black/5', className) },
        react_1["default"].createElement(index_1.Container, { className: 'flex items-center justify-between' },
            react_1["default"].createElement(index_1.Categories, { items: categories }),
            react_1["default"].createElement(index_1.SortPopup, null))));
};
