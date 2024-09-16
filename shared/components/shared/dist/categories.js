'use client';
"use strict";
exports.__esModule = true;
exports.Categories = void 0;
var utils_1 = require("@/shared/lib/utils");
var category_1 = require("@/shared/store/category");
exports.Categories = function (_a) {
    var items = _a.items, className = _a.className;
    var categoryActiveId = category_1.useCategoryStore(function (state) { return state.activeId; });
    return (React.createElement("div", { className: utils_1.cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className) }, items.map(function (cat) { return (React.createElement("a", { key: cat.id, href: "/#" + cat.name, className: utils_1.cn('flex items-center font-bold h-11 rounded-2xl px-5', categoryActiveId === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary') },
        React.createElement("button", null, cat.name))); })));
};
