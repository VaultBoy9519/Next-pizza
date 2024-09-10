'use client';
"use strict";
exports.__esModule = true;
exports.Filters = void 0;
var hooks_1 = require("@/hooks");
var react_1 = require("react");
var ui_1 = require("../ui");
var index_1 = require("./index");
exports.Filters = function (_a) {
    var className = _a.className;
    var _b = hooks_1.useIngredients(), ingredients = _b.ingredients, loading = _b.loading;
    var filters = hooks_1.useFilters();
    hooks_1.useQueryFilters(filters);
    var _c = filters.prices, priceFrom = _c.priceFrom, priceTo = _c.priceTo;
    var items = ingredients.map(function (item) { return ({ value: String(item.id), text: item.name }); });
    var updatePrices = function (prices) {
        console.log(prices, 999);
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement(index_1.Title, { text: 'Фильтрация', size: 'sm', className: 'mb-5 font-bold' }),
        react_1["default"].createElement(index_1.CheckboxFiltersGroup, { title: '\u0422\u0438\u043F \u0442\u0435\u0441\u0442\u0430', name: 'pizzaTypes', className: 'mb-5', onClickCheckbox: filters.setPizzaTypes, selected: filters.pizzaTypes, items: [
                { text: 'Тонкое', value: '1' },
                { text: 'Традиционное', value: '2' },
            ] }),
        react_1["default"].createElement(index_1.CheckboxFiltersGroup, { title: '\u0420\u0430\u0437\u043C\u0435\u0440\u044B', name: 'sizes', className: 'mb-5', onClickCheckbox: filters.setSizes, selected: filters.sizes, items: [
                { text: '20 см', value: '20' },
                { text: '30 см', value: '30' },
                { text: '40 см', value: '40' },
            ] }),
        react_1["default"].createElement("div", { className: 'mt-5 border-y border-y-neutral-100 py-6 pb-7' },
            react_1["default"].createElement("p", { className: 'font-bold mb-3' }, "\u0426\u0435\u043D\u0430 \u043E\u0442 \u0438 \u0434\u043E:"),
            react_1["default"].createElement("div", { className: 'flex gap-3 mb-5' },
                react_1["default"].createElement(ui_1.Input, { type: 'number', placeholder: '0', min: 0, max: 30000, onChange: function (e) { return filters.setPrices('priceFrom', Number(e.target.value)); }, value: String(priceFrom) }),
                react_1["default"].createElement(ui_1.Input, { type: 'number', placeholder: '30000', min: 100, max: 30000, onChange: function (e) { return filters.setPrices('priceTo', Number(e.target.value)); }, value: String(priceTo) })),
            react_1["default"].createElement(index_1.RangeSlider, { min: 0, max: 1000, step: 10, value: [filters.prices.priceFrom || 0, filters.prices.priceTo || 1000], onValueChange: updatePrices })),
        react_1["default"].createElement(index_1.CheckboxFiltersGroup, { title: 'Ингридиенты', className: 'mt-5', limit: 6, loading: loading, items: items, defaultItems: items.slice(0, 6), onClickCheckbox: filters.setSelectedIngredients, selected: filters.selectedIngredients })));
};
