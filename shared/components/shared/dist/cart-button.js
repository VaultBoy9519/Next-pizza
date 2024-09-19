'use client';
"use strict";
exports.__esModule = true;
exports.CartButton = void 0;
var utils_1 = require("@/shared/lib/utils");
var store_1 = require("@/shared/store");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var ui_1 = require("../ui");
var cart_drawer_1 = require("./cart-drawer");
exports.CartButton = function (_a) {
    var className = _a.className;
    var _b = store_1.useCartStore(function (state) { return [state.totalAmount, state.items, state.loading]; }), totalAmount = _b[0], items = _b[1], loading = _b[2];
    return (react_1["default"].createElement(cart_drawer_1.CartDrawer, null,
        react_1["default"].createElement(ui_1.Button, { loading: loading, className: utils_1.cn('group relative', { 'w-[105px]': loading }, className) },
            react_1["default"].createElement("b", null,
                totalAmount,
                " \u0420"),
            react_1["default"].createElement("span", { className: 'h-full w-[1px] bg-white/30 mx-3' }),
            react_1["default"].createElement("div", { className: 'flex items-center gap-1 transition duration-300 group-hover:opacity-0' },
                react_1["default"].createElement(lucide_react_1.ShoppingCart, { className: 'h-4 w-4 relative', strokeWidth: 2 }),
                react_1["default"].createElement("b", null, items.length)),
            react_1["default"].createElement(lucide_react_1.ArrowRight, { className: 'w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' }))));
};
