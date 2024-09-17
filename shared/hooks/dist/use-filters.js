"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useFilters = void 0;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_use_1 = require("react-use");
/**
 * Hook to manage filters state.
 * It returns object with current sizes, pizza types, selected ingredients, prices and functions to update them.
 * @returns {ReturnProps}
 */
exports.useFilters = function () {
    var _a, _b, _c;
    var searchParams = navigation_1.useSearchParams();
    var _d = react_use_1.useSet(new Set(((_a = searchParams.get('ingredients')) === null || _a === void 0 ? void 0 : _a.split(',')) || [])), selectedIngredients = _d[0], setSelectedIngredients = _d[1].toggle;
    var _e = react_use_1.useSet(new Set(((_b = searchParams.get('sizes')) === null || _b === void 0 ? void 0 : _b.split(',')) || [])), sizes = _e[0], setSizes = _e[1].toggle;
    var _f = react_use_1.useSet(new Set(((_c = searchParams.get('pizzaTypes')) === null || _c === void 0 ? void 0 : _c.split(',')) || [])), pizzaTypes = _f[0], setPizzaTypes = _f[1].toggle;
    var _g = react_1.useState({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined
    }), prices = _g[0], setPrices = _g[1];
    var updatePrice = function (name, value) {
        setPrices(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    return { sizes: sizes, pizzaTypes: pizzaTypes, selectedIngredients: selectedIngredients, prices: prices, setPrices: updatePrice, setPizzaTypes: setPizzaTypes, setSizes: setSizes, setSelectedIngredients: setSelectedIngredients };
};
