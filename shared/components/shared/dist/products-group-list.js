'use client';
"use strict";
exports.__esModule = true;
exports.ProductsGroupList = void 0;
var utils_1 = require("@/shared/lib/utils");
var category_1 = require("@/shared/store/category");
var react_1 = require("react");
var react_use_1 = require("react-use");
var index_1 = require("./index");
exports.ProductsGroupList = function (_a) {
    var title = _a.title, items = _a.items, listClassName = _a.listClassName, categoryId = _a.categoryId, className = _a.className;
    var setActiveCategoryId = category_1.useCategoryStore(function (state) { return state.setActiveId; });
    var intersectionRef = react_1["default"].useRef(null);
    var intersection = react_use_1.useIntersection(intersectionRef, {
        threshold: 0.4
    });
    react_1["default"].useEffect(function () {
        if (intersection === null || intersection === void 0 ? void 0 : intersection.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection === null || intersection === void 0 ? void 0 : intersection.isIntersecting, title]);
    return (react_1["default"].createElement("div", { className: className, id: title, ref: intersectionRef },
        react_1["default"].createElement(index_1.Title, { text: title, size: 'lg', className: 'font-extrabold mb-5' }),
        react_1["default"].createElement("div", { className: utils_1.cn('grid grid-cols-3 gap-[50px]', listClassName) }, items.map(function (product) { return (react_1["default"].createElement(index_1.ProductCard, { key: product.id, id: product.id, name: product.name, imageUrl: product.imageUrl, price: product.items[0].price })); }))));
};
