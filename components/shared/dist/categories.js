"use strict";
exports.__esModule = true;
exports.Categories = void 0;
var utils_1 = require("@/lib/utils");
var cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
var activeIndex = 0;
exports.Categories = function (_a) {
    var className = _a.className;
    return (React.createElement("div", { className: utils_1.cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className) }, cats.map(function (cat, i) { return (React.createElement("a", { key: i, className: utils_1.cn('flex items-center font-bold h-11 rounded-2xl px-5', activeIndex === i && 'bg-white shadow-md shadow-gray-200 text-primary') },
        React.createElement("button", null, cat))); })));
};
