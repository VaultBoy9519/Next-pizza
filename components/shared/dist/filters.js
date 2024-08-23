"use strict";
exports.__esModule = true;
exports.Filters = void 0;
var react_1 = require("react");
var ui_1 = require("../ui");
var index_1 = require("./index");
exports.Filters = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement(index_1.Title, { text: 'Фильтрация', size: 'sm', className: 'mb-5 font-bold' }),
        react_1["default"].createElement("div", { className: 'flex flex-col gap-4' },
            react_1["default"].createElement(index_1.FilterCheckbox, { text: 'Можно собирать', value: '1' }),
            react_1["default"].createElement(index_1.FilterCheckbox, { text: 'Новинки', value: '2' })),
        react_1["default"].createElement("div", { className: 'mt-5 border-y border-y-neutral-100 py-6 pb-7' },
            react_1["default"].createElement("p", { className: 'font-bold mb-3' }, "\u0426\u0435\u043D\u0430 \u043E\u0442 \u0438 \u0434\u043E:"),
            react_1["default"].createElement("div", { className: 'flex gap-3 mb-5' },
                react_1["default"].createElement(ui_1.Input, { type: 'number', placeholder: '0', min: 0, max: 30000, defaultValue: 0 }),
                react_1["default"].createElement(ui_1.Input, { type: 'number', placeholder: '30000', min: 100, max: 30000 })),
            react_1["default"].createElement(index_1.RangeSlider, { min: 0, max: 5000, step: 10, value: [0, 5000] })),
        react_1["default"].createElement(index_1.CheckboxFiltersGroup, { title: 'Ингридиенты', className: 'mt-5', limit: 6, items: [
                { text: 'Сырный соус', value: '3' },
                { text: 'Моцарелла', value: '4' },
                { text: 'Чеснок', value: '5' },
                { text: 'Соленые огурчики', value: '6' },
                { text: 'Сырный соус', value: '7' },
                { text: 'Моцарелла', value: '8' },
                { text: 'Чеснок', value: '9' },
                { text: 'Соленые огурчики', value: '10' },
            ], defaultItems: [
                { text: 'Сырный соус', value: '11' },
                { text: 'Моцарелла', value: '12' },
                { text: 'Чеснок', value: '13' },
                { text: 'Соленые огурчики', value: '14' },
            ] })));
};
