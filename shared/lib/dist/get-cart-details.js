"use strict";
exports.__esModule = true;
exports.getCartDetails = void 0;
var calc_cart_item_total_price_1 = require("./calc-cart-item-total-price");
exports.getCartDetails = function (data) {
    var items = data.items.map(function (item) { return ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        price: calc_cart_item_total_price_1.calcCartItemTotalPrice(item),
        pizzaSize: item.productItem.size,
        pizzaType: item.productItem.pizzaType,
        disabled: false,
        ingredients: item.ingredients.map(function (ingredient) { return ({
            name: ingredient.name,
            price: ingredient.price
        }); })
    }); });
    return {
        items: items,
        totalAmount: data.totalAmount
    };
};
