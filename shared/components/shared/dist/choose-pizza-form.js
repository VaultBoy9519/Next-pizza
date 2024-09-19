'use client';
"use strict";
exports.__esModule = true;
exports.ChoosePizzaForm = void 0;
var pizza_1 = require("@/shared/constants/pizza");
var hooks_1 = require("@/shared/hooks");
var lib_1 = require("@/shared/lib");
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
var ui_1 = require("../ui");
var group_variants_1 = require("./group-variants");
var ingredient_item_1 = require("./ingredient-item");
var pizza_image_1 = require("./pizza-image");
var title_1 = require("./title");
exports.ChoosePizzaForm = function (_a) {
    var name = _a.name, items = _a.items, imageUrl = _a.imageUrl, ingredients = _a.ingredients, loading = _a.loading, onClickAddCart = _a.onClickAddCart, className = _a.className;
    var _b = hooks_1.usePizzaOptions(items), size = _b.size, type = _b.type, selectedIngredients = _b.selectedIngredients, availableSizes = _b.availableSizes, currentItemId = _b.currentItemId, setSize = _b.setSize, setType = _b.setType, addIngredient = _b.addIngredient;
    var _c = lib_1.getPizzaDetails(type, size, items, ingredients, selectedIngredients), totalPrice = _c.totalPrice, textDetails = _c.textDetails;
    var onSubmit = function () {
        if (currentItemId)
            onClickAddCart(currentItemId, Array.from(selectedIngredients));
    };
    return (react_1["default"].createElement("div", { className: utils_1.cn(className, 'flex flex-1') },
        react_1["default"].createElement(pizza_image_1.PizzaImage, { src: imageUrl, size: size }),
        react_1["default"].createElement("div", { className: 'w-[490px] bg-[#f7f6f5] p-7' },
            react_1["default"].createElement(title_1.Title, { text: name, size: 'md', className: 'font-extrabold mb-1' }),
            react_1["default"].createElement("p", { className: 'text-gray-400' }, textDetails),
            react_1["default"].createElement("div", { className: 'flex flex-col gap-5 mt-5' },
                react_1["default"].createElement(group_variants_1.GroupVariants, { items: availableSizes, value: String(size), onClick: function (value) { return setSize(Number(value)); } }),
                react_1["default"].createElement(group_variants_1.GroupVariants, { items: pizza_1.pizzaTypes, value: String(type), onClick: function (value) { return setType(Number(value)); } })),
            react_1["default"].createElement("div", { className: 'bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5' },
                react_1["default"].createElement("div", { className: 'grid grid-cols-3 gap-3' }, ingredients.map(function (ingredient) { return (react_1["default"].createElement(ingredient_item_1.IngredientItem, { key: ingredient.id, name: ingredient.name, price: ingredient.price, imageUrl: ingredient.imageUrl, onClick: function () { return addIngredient(ingredient.id); }, active: selectedIngredients.has(ingredient.id) })); }))),
            react_1["default"].createElement(ui_1.Button, { onClick: function () { return onSubmit(); }, loading: loading, className: 'h-[55px] px-10 text-base rounded-[18px] w-full mt-10' },
                "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0437\u0430 ",
                totalPrice,
                " \u20BD"))));
};
