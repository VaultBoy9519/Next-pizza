'use client';
"use strict";
exports.__esModule = true;
var shared_1 = require("@/shared/components/shared");
var checkout_1 = require("@/shared/components/shared/checkout");
var checkout_item_1 = require("@/shared/components/shared/checkout/checkout-item");
var ui_1 = require("@/shared/components/ui");
var hooks_1 = require("@/shared/hooks");
var lib_1 = require("@/shared/lib");
function CheckoutPage() {
    var _a = hooks_1.useCart(), totalAmount = _a.totalAmount, items = _a.items, removeCartItem = _a.removeCartItem, updateItemQuantity = _a.updateItemQuantity;
    return (React.createElement(shared_1.Container, { className: 'mt-10' },
        React.createElement(shared_1.Title, { text: '\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430', size: 'xl', className: 'font-extrabold mb-8 text-[36px]' }),
        React.createElement("div", { className: 'flex gap-10' },
            React.createElement("div", { className: 'flex flex-col gap-10 flex-1 mb-20' },
                React.createElement(shared_1.WhiteBlock, { title: '1. \u041A\u043E\u0440\u0437\u0438\u043D\u0430' },
                    React.createElement("div", { className: 'flex flex-col gap-5' }, items.map(function (item) { return (React.createElement(checkout_item_1.CheckoutItem, { key: item.id, id: item.id, imageUrl: item.imageUrl, name: item.name, price: item.price, quantity: item.quantity, details: lib_1.getCartItemsDetails(item.ingredients, item.pizzaType, item.pizzaSize), disabled: item.disabled, onClickCountButton: function (type) { return lib_1.onClickCountButton(item.id, item.quantity, type, updateItemQuantity); }, onClickRemove: function () { return removeCartItem(item.id); } })); }))),
                React.createElement(shared_1.WhiteBlock, { title: '2. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435' },
                    React.createElement("div", { className: 'grid grid-cols-2 gap-5' },
                        React.createElement(ui_1.Input, { name: 'firstName', className: 'text-base', placeholder: '\u0418\u043C\u044F' }),
                        React.createElement(ui_1.Input, { name: 'lastName', className: 'text-base', placeholder: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F' }),
                        React.createElement(ui_1.Input, { name: 'email', className: 'text-base', placeholder: 'E-Mail' }),
                        React.createElement(ui_1.Input, { name: 'phone', className: 'text-base', placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D' }))),
                React.createElement(shared_1.WhiteBlock, { title: '3. \u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438' },
                    React.createElement("div", { className: 'flex flex-col gap-5' },
                        React.createElement(ui_1.Input, { name: 'firstName', className: 'text-base', placeholder: '\u0410\u0434\u0440\u0435\u0441' }),
                        React.createElement(ui_1.Textarea, { rows: 5, className: 'text-base', placeholder: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443' })))),
            React.createElement("div", { className: 'w-[450px]' },
                React.createElement(checkout_1.CheckoutSidebar, { totalAmount: totalAmount })))));
}
exports["default"] = CheckoutPage;
