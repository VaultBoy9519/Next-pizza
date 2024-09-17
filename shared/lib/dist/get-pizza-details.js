"use strict";
exports.__esModule = true;
exports.getPizzaDetails = void 0;
var pizza_1 = require("../constants/pizza");
var calc_total_pizza_price_1 = require("./calc-total-pizza-price");
/**
 * Calculate total price and text details for given pizza.
 *
 * @param type - type of pizza
 * @param size - size of pizza
 * @param items - list of all products
 * @param ingredients - list of all available ingredients
 * @param selectedIngredients - set of ids of selected ingredients
 * @returns object with `totalPrice` and `textDetails` properties
 */
exports.getPizzaDetails = function (type, size, items, ingredients, selectedIngredients) {
    var totalPrice = calc_total_pizza_price_1.calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
    var textDetails = size + " \u0441\u043C, " + pizza_1.mapPizzaType[type] + " \u043F\u0438\u0446\u0446\u0430";
    return {
        totalPrice: totalPrice,
        textDetails: textDetails
    };
};
