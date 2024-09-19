'use client';
"use strict";
exports.__esModule = true;
exports.ChooseProductModal = void 0;
var dialog_1 = require("@/shared/components/ui/dialog");
var utils_1 = require("@/shared/lib/utils");
var store_1 = require("@/shared/store");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var choose_pizza_form_1 = require("../choose-pizza-form");
var choose_product_form_1 = require("../choose-product-form");
exports.ChooseProductModal = function (_a) {
    var product = _a.product, className = _a.className;
    var router = navigation_1.useRouter();
    var _b = store_1.useCartStore(function (state) { return [state.addCartItem, state.loading]; }), addCartItem = _b[0], loading = _b[1];
    var firstItem = product.items[0];
    var isPizzaForm = Boolean(product.items[0].pizzaType);
    var onSubmit = function (productItemId, ingredients) {
        var itemId = productItemId !== null && productItemId !== void 0 ? productItemId : firstItem.id;
        try {
            addCartItem({
                productItemId: itemId,
                ingredients: ingredients
            });
            react_hot_toast_1["default"].success("\u0422\u043E\u0432\u0435\u0440 \"" + product.name + "\" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
            router.back();
        }
        catch (e) {
            react_hot_toast_1["default"].error('Не удалось добавить в корзину');
            console.error(e);
        }
    };
    var name = product.name, imageUrl = product.imageUrl;
    return (react_1["default"].createElement(dialog_1.Dialog, { open: Boolean(product), onOpenChange: function () { return router.back(); } },
        react_1["default"].createElement(dialog_1.DialogContent, { className: utils_1.cn('p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden', className) }, isPizzaForm ? (react_1["default"].createElement(choose_pizza_form_1.ChoosePizzaForm, { onClickAddCart: onSubmit, name: name, items: product.items, imageUrl: imageUrl, ingredients: product.ingredients, loading: loading })) : (react_1["default"].createElement(choose_product_form_1.ChooseProductForm, { onSubmit: onSubmit, name: name, price: firstItem.price, imageUrl: imageUrl, loading: loading })))));
};
