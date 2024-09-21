"use strict";
exports.__esModule = true;
exports.AddressInput = void 0;
var react_1 = require("react");
var react_dadata_1 = require("react-dadata");
require("react-dadata/dist/react-dadata.css");
exports.AddressInput = function (_a) {
    var onChange = _a.onChange;
    return react_1["default"].createElement(react_dadata_1.AddressSuggestions, { token: process.env.NEXT_PUBLIC_DADATA_API_KEY, onChange: function (data) { return onChange === null || onChange === void 0 ? void 0 : onChange(data === null || data === void 0 ? void 0 : data.value); } });
};
