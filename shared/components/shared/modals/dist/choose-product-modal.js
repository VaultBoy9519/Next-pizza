'use client';
"use strict";
exports.__esModule = true;
exports.ChooseProductModal = void 0;
var dialog_1 = require("@/shared/components/ui/dialog");
var utils_1 = require("@/shared/lib/utils");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var product_form_1 = require("../product-form");
exports.ChooseProductModal = function (_a) {
    var product = _a.product, className = _a.className;
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement(dialog_1.Dialog, { open: Boolean(product), onOpenChange: function () { return router.back(); } },
        react_1["default"].createElement(dialog_1.DialogContent, { className: utils_1.cn('p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden', className) },
            react_1["default"].createElement(product_form_1.ProductForm, { product: product, endAction: function () { return router.back(); } }))));
};
