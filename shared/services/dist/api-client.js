"use strict";
exports.__esModule = true;
exports.Api = void 0;
var cart = require("./cart");
var ingredients = require("./ingredients");
var products = require("./products");
exports.Api = {
    products: products,
    ingredients: ingredients,
    cart: cart
};
