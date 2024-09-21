"use strict";
exports.__esModule = true;
exports.OrderSuccessTemplate = void 0;
var React = require("react");
exports.OrderSuccessTemplate = function (_a) {
    var orderId = _a.orderId, items = _a.items;
    return (React.createElement("div", null,
        React.createElement("h1", null, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443!"),
        React.createElement("p", null,
            "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 #",
            orderId,
            " \u043E\u043F\u043B\u0430\u0447\u0435\u043D. \u0421\u043F\u0438\u0441\u043E\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432:"),
        React.createElement("hr", null),
        React.createElement("ul", null, items.map(function (item) { return (React.createElement("li", { key: item.id },
            item.productItem.product.name,
            " | ",
            item.productItem.price,
            " \u20BD \u0445 ",
            item.quantity,
            " \u0448\u0442. = ",
            item.productItem.price * item.quantity,
            " \u20BD")); }))));
};
