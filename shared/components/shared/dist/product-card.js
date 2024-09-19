"use strict";
exports.__esModule = true;
exports.ProductCard = void 0;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var ui_1 = require("../ui");
var title_1 = require("./title");
exports.ProductCard = function (_a) {
    var id = _a.id, name = _a.name, price = _a.price, imageUrl = _a.imageUrl, ingredients = _a.ingredients, className = _a.className;
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement(link_1["default"], { href: "/product/" + id },
            react_1["default"].createElement("div", { className: 'flex justify-center p-6 bg-secondary rounded-lg h-[260px]' },
                react_1["default"].createElement("img", { className: 'w-[215px] h-[215px]', src: imageUrl, alt: name })),
            react_1["default"].createElement(title_1.Title, { text: name, size: 'sm', className: 'mb-1 mt-3 font-bold' }),
            react_1["default"].createElement("p", { className: 'text-sm text-gray-400' }, ingredients.map(function (ingredient) { return ingredient.name; }).join(', ')),
            react_1["default"].createElement("div", { className: 'flex justify-between items-center mt-4' },
                react_1["default"].createElement("span", { className: 'text-[20px]' },
                    "\u043E\u0442 ",
                    react_1["default"].createElement("b", null,
                        price,
                        " \u20BD")),
                react_1["default"].createElement(ui_1.Button, { variant: 'secondary', className: 'text-base font-bold' },
                    react_1["default"].createElement(lucide_react_1.Plus, { size: 20, className: 'mr-1' }),
                    "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")))));
};
