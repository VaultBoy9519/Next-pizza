"use strict";
exports.__esModule = true;
exports.usePizzaOptions = void 0;
var react_1 = require("react");
var react_use_1 = require("react-use");
var lib_1 = require("../lib");
/**
 * Hook to manage pizza options state.
 * It returns object with current pizza size, type, selected ingredients, available sizes, current item id and functions to update them.
 * @param {ProductItem[]} items - list of all products
 * @returns {ReturnProps}
 */
exports.usePizzaOptions = function (items) {
    var _a;
    var _b = react_1["default"].useState(20), size = _b[0], setSize = _b[1];
    var _c = react_1["default"].useState(1), type = _c[0], setType = _c[1];
    var _d = react_use_1.useSet(new Set([])), selectedIngredients = _d[0], addIngredient = _d[1].toggle;
    var availableSizes = lib_1.getAvailablePizzaSizes(type, items);
    var currentItemId = (_a = items.find(function (item) { return item.pizzaType === type && item.size === size; })) === null || _a === void 0 ? void 0 : _a.id;
    react_1["default"].useEffect(function () {
        var isAvailableSize = availableSizes === null || availableSizes === void 0 ? void 0 : availableSizes.find(function (item) { return Number(item.value) === size && !item.disabled; });
        var availableSize = availableSizes === null || availableSizes === void 0 ? void 0 : availableSizes.find(function (item) { return !item.disabled; });
        if (!isAvailableSize && availableSize) {
            setSize(Number(availableSize.value));
        }
    }, [type]);
    return {
        size: size,
        type: type,
        selectedIngredients: selectedIngredients,
        availableSizes: availableSizes,
        currentItemId: currentItemId,
        setSize: setSize,
        setType: setType,
        addIngredient: addIngredient
    };
};
