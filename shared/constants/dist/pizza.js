"use strict";
exports.__esModule = true;
exports.pizzaTypes = exports.pizzaSizes = exports.mapPizzaType = exports.mapPizzaSize = void 0;
exports.mapPizzaSize = {
    20: 'Маленькая',
    30: 'Средняя',
    40: 'Большая'
};
exports.mapPizzaType = {
    1: 'традиционная',
    2: 'тонкая'
};
exports.pizzaSizes = Object.entries(exports.mapPizzaSize).map(function (_a) {
    var value = _a[0], name = _a[1];
    return ({
        name: name,
        value: value
    });
});
exports.pizzaTypes = Object.entries(exports.mapPizzaType).map(function (_a) {
    var value = _a[0], name = _a[1];
    return ({
        name: name,
        value: value
    });
});
