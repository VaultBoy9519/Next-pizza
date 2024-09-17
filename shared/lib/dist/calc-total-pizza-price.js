"use strict";
exports.__esModule = true;
exports.calcTotalPizzaPrice = void 0;
/**
 * Calculate total price of pizza based on its type, size, and ingredients.
 *
 * @param type - type of pizza
 * @param size - size of pizza
 * @param items - list of all products
 * @param ingredients - list of all available ingredients
 * @param selectedIngredients - set of ids of selected ingredients
 * @returns total price of pizza
 */
exports.calcTotalPizzaPrice = function (type, size, items, ingredients, selectedIngredients) {
    var _a;
    var pizzaPrice = ((_a = items.find(function (item) { return item.pizzaType === type && item.size === size; })) === null || _a === void 0 ? void 0 : _a.price) || 0;
    var totalIngredientsPrice = ingredients.filter(function (ingredient) { return selectedIngredients.has(ingredient.id); }).reduce(function (acc, ingredient) { return acc + ingredient.price; }, 0);
    var totalPrice = pizzaPrice + totalIngredientsPrice;
    return totalPrice;
};
