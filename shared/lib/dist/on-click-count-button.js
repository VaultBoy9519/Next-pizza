"use strict";
exports.__esModule = true;
exports.onClickCountButton = void 0;
exports.onClickCountButton = function (id, quantity, type, updateItemQuantity) {
    var newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
};
