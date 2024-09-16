"use strict";
exports.__esModule = true;
exports.Container = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
exports.Container = function (_a) {
    var className = _a.className, children = _a.children;
    return react_1["default"].createElement("div", { className: utils_1.cn('mx-auto max-w-[1280px]', className) }, children);
};
