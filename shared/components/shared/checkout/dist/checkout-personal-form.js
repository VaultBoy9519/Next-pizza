"use strict";
exports.__esModule = true;
exports.CheckoutPersonalForm = void 0;
var react_1 = require("react");
var form_1 = require("../form");
var white_block_1 = require("../white-block");
exports.CheckoutPersonalForm = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { className: className, title: '2. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435' },
        react_1["default"].createElement("div", { className: 'grid grid-cols-2 gap-5' },
            react_1["default"].createElement(form_1.FormInput, { name: 'firstName', className: 'text-base', placeholder: '\u0418\u043C\u044F' }),
            react_1["default"].createElement(form_1.FormInput, { name: 'lastName', className: 'text-base', placeholder: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F' }),
            react_1["default"].createElement(form_1.FormInput, { name: 'email', className: 'text-base', placeholder: 'E-Mail' }),
            react_1["default"].createElement(form_1.FormInput, { name: 'phone', className: 'text-base', placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D' }))));
};
