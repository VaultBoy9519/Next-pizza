"use strict";
exports.__esModule = true;
exports.calcCartItemTotalPrice = void 0;
exports.calcCartItemTotalPrice = function (item) {
    var ingredientsPrice = item.ingredients.reduce(function (acc, ingredient) { return acc + ingredient.price; }, 0);
    return (ingredientsPrice + item.productItem.price) * item.quantity;
};
