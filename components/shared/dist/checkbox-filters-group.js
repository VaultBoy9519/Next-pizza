'use client';
"use strict";
exports.__esModule = true;
exports.CheckboxFiltersGroup = void 0;
var react_1 = require("react");
var ui_1 = require("../ui");
var filter_checkbox_1 = require("./filter-checkbox");
exports.CheckboxFiltersGroup = function (_a) {
    var title = _a.title, items = _a.items, defaultItems = _a.defaultItems, limit = _a.limit, _b = _a.searchInputPlaceholder, searchInputPlaceholder = _b === void 0 ? 'Поиск...' : _b, onChange = _a.onChange, defaultValue = _a.defaultValue, className = _a.className, loading = _a.loading;
    var _c = react_1.useState(false), showAll = _c[0], setShowAll = _c[1];
    var _d = react_1.useState(''), searchValue = _d[0], setSearchValue = _d[1];
    var onChangeSearch = function (e) {
        setSearchValue(e.target.value);
    };
    if (loading) {
        return (React.createElement("div", { className: className },
            React.createElement("p", { className: 'font-bold mb-3' }, title),
            Array(limit)
                .fill(0)
                .map(function (_, index) { return React.createElement(ui_1.Skeleton, { key: index, className: 'h-6 mb-4 rounded-[8px]' }); }),
            React.createElement(ui_1.Skeleton, { className: 'w-28 h-6 mb-4 rounded-[8px]' })));
    }
    var list = showAll ? items.filter(function (item) { return item.text.toLowerCase().includes(searchValue.toLowerCase()); }) : defaultItems.slice(0, limit);
    return (React.createElement("div", { className: className },
        React.createElement("p", { className: 'font-bold mb-3' }, title),
        showAll && (React.createElement("div", { className: 'mb-5' },
            React.createElement(ui_1.Input, { onChange: onChangeSearch, placeholder: searchInputPlaceholder, className: 'bg-gray-50 border-none' }))),
        React.createElement("div", { className: 'flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar' }, list.map(function (item) { return (React.createElement(filter_checkbox_1.FilterCheckbox, { key: String(item.value), text: item.text, value: item.value, endAdornment: item.endAdornment, onCheckedChange: function (ids) { return console.log(ids); }, checked: false })); })),
        items.length > limit && (React.createElement("div", { className: showAll ? "border-t border-t-neutral-100 mt-4" : '' },
            React.createElement("button", { onClick: function () { return setShowAll(!showAll); }, className: 'text-primary mt-3' }, showAll ? 'Скрыть' : '+ Показать все')))));
};
