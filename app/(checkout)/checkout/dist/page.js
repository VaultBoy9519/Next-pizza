'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var shared_1 = require("@/shared/components/shared");
var checkout_1 = require("@/shared/components/shared/checkout");
var checkout_form_schema_1 = require("@/shared/constants/checkout-form-schema");
var hooks_1 = require("@/shared/hooks");
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
function CheckoutPage() {
    var _a = hooks_1.useCart(), totalAmount = _a.totalAmount, items = _a.items, removeCartItem = _a.removeCartItem, updateItemQuantity = _a.updateItemQuantity;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(checkout_form_schema_1.checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: ''
        }
    });
    var onSubmit = function (data) {
        console.log(data);
    };
    return (React.createElement(shared_1.Container, { className: 'mt-10' },
        React.createElement(shared_1.Title, { text: '\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430', size: 'xl', className: 'font-extrabold mb-8 text-[36px]' }),
        React.createElement(react_hook_form_1.FormProvider, __assign({}, form),
            React.createElement("form", { onSubmit: form.handleSubmit(onSubmit) },
                React.createElement("div", { className: 'flex gap-10' },
                    React.createElement("div", { className: 'flex flex-col gap-10 flex-1 mb-20' },
                        React.createElement(checkout_1.CheckoutCart, { items: items, updateItemQuantity: updateItemQuantity }),
                        React.createElement(checkout_1.CheckoutPersonalForm, null),
                        React.createElement(checkout_1.CheckoutAddressForm, null)),
                    React.createElement("div", { className: 'w-[450px]' },
                        React.createElement(checkout_1.CheckoutSidebar, { totalAmount: totalAmount })))))));
}
exports["default"] = CheckoutPage;
