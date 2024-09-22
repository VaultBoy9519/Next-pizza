'use client';
"use strict";
exports.__esModule = true;
exports.CheckoutAddressForm = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var ui_1 = require("../../ui");
var error_text_1 = require("../error-text");
var white_block_1 = require("../white-block");
var address_input_1 = require("./address-input");
exports.CheckoutAddressForm = function (_a) {
    var className = _a.className;
    var control = react_hook_form_1.useFormContext().control;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { className: className, title: '3. \u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438' },
        react_1["default"].createElement("div", { className: 'flex flex-col gap-5' },
            react_1["default"].createElement(react_hook_form_1.Controller, { render: function (_a) {
                    var _b;
                    var field = _a.field, fieldState = _a.fieldState;
                    return (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(address_input_1.AddressInput, { onChange: field.onChange }),
                        ((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message) && react_1["default"].createElement(error_text_1.ErrorText, { text: fieldState.error.message })));
                }, name: 'address', control: control }),
            react_1["default"].createElement(ui_1.Textarea, { rows: 5, className: 'text-base', placeholder: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443' }))));
};
