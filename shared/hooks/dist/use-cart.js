"use strict";
exports.__esModule = true;
exports.useCart = void 0;
var react_1 = require("react");
var store_1 = require("../store");
exports.useCart = function () {
    var cartState = store_1.useCartStore(function (state) { return state; });
    react_1.useEffect(function () {
        cartState.getCartItems();
    }, []);
    return cartState;
};
