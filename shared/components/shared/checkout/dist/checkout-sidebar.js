"use strict";
exports.__esModule = true;
exports.CheckoutSidebar = void 0;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var ui_1 = require("../../ui");
var white_block_1 = require("../white-block");
var checkout_item_details_1 = require("./checkout-item-details");
var VAT = 15;
var DELIVERY_PRICE = 250;
exports.CheckoutSidebar = function (_a) {
    var totalAmount = _a.totalAmount, loading = _a.loading, submitting = _a.submitting;
    var vatPrice = (totalAmount * VAT) / 100;
    var deliveryPrice = totalAmount === 0 ? 0 : DELIVERY_PRICE;
    var fullPrice = vatPrice + totalAmount + deliveryPrice;
    var renderSkeleton = totalAmount === 0 && loading;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { className: 'p-6 sticky top-4' },
        react_1["default"].createElement("div", { className: 'flex flex-col gap-1' },
            react_1["default"].createElement("span", { className: 'text-xl' }, "\u0418\u0442\u043E\u0433\u043E:"),
            renderSkeleton ? react_1["default"].createElement(ui_1.Skeleton, { className: 'w-full h-10 w-48' }) : react_1["default"].createElement("span", { className: 'text-3xl font-extrabold' },
                fullPrice,
                " \u20BD")),
        react_1["default"].createElement(checkout_item_details_1.CheckoutItemDetails, { title: react_1["default"].createElement("div", { className: 'flex items-center' },
                react_1["default"].createElement(lucide_react_1.Package, { size: 18, className: 'mr-2 text-gray-300' }),
                "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u043E\u0432"), value: totalAmount + " \u20BD", loading: renderSkeleton }),
        react_1["default"].createElement(checkout_item_details_1.CheckoutItemDetails, { title: react_1["default"].createElement("div", { className: 'flex items-center' },
                react_1["default"].createElement(lucide_react_1.Percent, { size: 18, className: 'mr-2 text-gray-300' }),
                "\u041D\u0430\u043B\u043E\u0433"), value: vatPrice + " \u20BD", loading: renderSkeleton }),
        react_1["default"].createElement(checkout_item_details_1.CheckoutItemDetails, { title: react_1["default"].createElement("div", { className: 'flex items-center' },
                react_1["default"].createElement(lucide_react_1.Truck, { size: 18, className: 'mr-2 text-gray-300' }),
                "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"), value: deliveryPrice + " \u20BD", loading: renderSkeleton }),
        react_1["default"].createElement(ui_1.Button, { loading: renderSkeleton || submitting, type: 'submit', className: 'w-full h-14 rounded-2xl mt-6 text-base font-bold' },
            "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u043B\u0430\u0442\u0435",
            react_1["default"].createElement(lucide_react_1.ArrowRight, { className: 'w-5 ml-2' }))));
};
