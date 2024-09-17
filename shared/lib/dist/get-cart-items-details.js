"use strict";
exports.__esModule = true;
exports.getCartItemsDetails = void 0;
var pizza_1 = require("../constants/pizza");
/**
 * Generate a string of details about the pizza, given the type, size, and list of ingredients.
 * The string will be in the format: "typeName (size) см, ingredient1, ingredient2, ..."
 * If there are no ingredients, the string will only contain the type and size.
 *
 * @param {PizzaType} pizzaType - the type of pizza
 * @param {PizzaSize} pizzaSize - the size of the pizza
 * @param {Ingredient[]} ingredients - the list of ingredients
 * @returns {string} the string of details
 */
exports.getCartItemsDetails = function (pizzaType, pizzaSize, ingredients) {
    var details = [];
    if (pizzaSize && pizzaType) {
        var typeName = pizza_1.mapPizzaType[pizzaType];
        details.push(typeName + " (" + pizzaSize + ") \u0441\u043C");
    }
    if (ingredients) {
        details.push.apply(details, ingredients.map(function (ingredient) { return ingredient.name; }));
    }
    return details.join(', ');
};
