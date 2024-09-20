"use strict";
exports.__esModule = true;
exports.CheckoutAddressForm = void 0;
var react_1 = require("react");
var ui_1 = require("../../ui");
var white_block_1 = require("../white-block");
exports.CheckoutAddressForm = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { className: className, title: '3. \u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438' },
        react_1["default"].createElement("div", { className: 'flex flex-col gap-5' },
            react_1["default"].createElement(ui_1.Input, { name: 'firstName', className: 'text-base', placeholder: '\u0410\u0434\u0440\u0435\u0441' }),
            react_1["default"].createElement(ui_1.Textarea, { rows: 5, className: 'text-base', placeholder: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443' }))));
};
