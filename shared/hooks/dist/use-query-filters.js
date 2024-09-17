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
exports.useQueryFilters = void 0;
var navigation_1 = require("next/navigation");
var qs_1 = require("qs");
var react_1 = require("react");
/**
 * Updates the current URL query string to reflect the current filter selection.
 *
 * @param filters The current filter values.
 */
exports.useQueryFilters = function (filters) {
    var router = navigation_1.useRouter();
    react_1.useEffect(function () {
        var params = __assign(__assign({}, filters.prices), { pizzaTypes: Array.from(filters.pizzaTypes), sizes: Array.from(filters.sizes), ingredients: Array.from(filters.selectedIngredients) });
        var query = qs_1["default"].stringify(params, { arrayFormat: 'comma' });
        router.push("?" + query, { scroll: false });
    }, [filters, router]);
};
