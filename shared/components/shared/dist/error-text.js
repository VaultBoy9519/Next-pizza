"use strict";
exports.__esModule = true;
exports.ErrorText = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
exports.ErrorText = function (_a) {
    var text = _a.text, className = _a.className;
    return react_1["default"].createElement("p", { className: utils_1.cn('text-red-500 text-sm', className) }, text);
};
