"use strict";
exports.__esModule = true;
exports.CartItemInfo = void 0;
var utils_1 = require("@/shared/lib/utils");
exports.CartItemInfo = function (_a) {
    var name = _a.name, details = _a.details, className = _a.className;
    return (React.createElement("div", null,
        React.createElement("div", { className: utils_1.cn('flex items-center justify-between', className) },
            React.createElement("h2", { className: "text-lg font-bold flex-1 leading-6" }, name)),
        details && React.createElement("p", { className: "text-xs text-gray-400 w-[90%]" }, details)));
};
