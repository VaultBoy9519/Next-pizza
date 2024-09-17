"use strict";
exports.__esModule = true;
exports.useAvailablePizzaSize = void 0;
var react_1 = require("react");
exports.useAvailablePizzaSize = function (size, type, availableSizes) {
    react_1.useEffect(function () {
        var currentSize = availablePizzaSizes.find(function (item) { return Number(item.value) === size && !item.disabled; });
        var availableSize = availablePizzaSizes.find(function (item) { return !item.disabled; });
        if (!currentSize && availableSize)
            setSize(Number(availableSize.value));
    }, [type]);
};
