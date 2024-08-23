"use strict";
exports.__esModule = true;
exports.FilterCheckbox = void 0;
var react_1 = require("react");
var checkbox_1 = require("../ui/checkbox");
exports.FilterCheckbox = function (_a) {
    var text = _a.text, value = _a.value, endAdornment = _a.endAdornment, onCheckedChange = _a.onCheckedChange, checked = _a.checked, name = _a.name;
    return (react_1["default"].createElement("div", { className: 'flex items-center space-x-2' },
        react_1["default"].createElement(checkbox_1.Checkbox, { onCheckedChange: onCheckedChange, checked: checked, value: value, className: 'rounded-[8px] w-6 h-6', id: "checkbox-" + String(name) + "-" + String(value) }),
        react_1["default"].createElement("label", { htmlFor: "checkbox-" + String(name) + "-" + String(value), className: 'leading-none cursor-pointer flex-1' }, text),
        endAdornment));
};
