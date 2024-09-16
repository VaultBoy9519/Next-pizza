"use strict";
exports.__esModule = true;
exports.PizzaImage = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
exports.PizzaImage = function (_a) {
    var src = _a.src, size = _a.size, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn('flex items-center justify-center flex-1 relative w-full', className) },
        react_1["default"].createElement("img", { src: src, alt: 'Logo', className: utils_1.cn('relative left-2 top-3 transition-all z-10 duration-300', {
                'w-[300px] h-[300px]': size === 20,
                'w-[400px] h-[400px]': size === 30,
                'w-[500px] h-[500px]': size === 40
            }) }),
        react_1["default"].createElement("div", { className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]' }),
        react_1["default"].createElement("div", { className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]' })));
};
