"use strict";
exports.__esModule = true;
exports.Header = void 0;
var utils_1 = require("@/shared/lib/utils");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var ui_1 = require("../ui");
var cart_button_1 = require("./cart-button");
var container_1 = require("./container");
var search_input_1 = require("./search-input");
exports.Header = function (_a) {
    var className = _a.className, _b = _a.hasSearch, hasSearch = _b === void 0 ? true : _b, _c = _a.hasCart, hasCart = _c === void 0 ? true : _c;
    return (React.createElement("div", { className: utils_1.cn('border-b', className) },
        React.createElement(container_1.Container, { className: 'flex items-center justify-between py-8' },
            React.createElement(link_1["default"], { href: '/' },
                React.createElement("div", { className: 'flex items-center gap-4' },
                    React.createElement(image_1["default"], { src: '/logo.png', alt: 'Logo', width: 35, height: 35 }),
                    React.createElement("div", null,
                        React.createElement("h1", { className: 'text-2xl uppercase font-black' }, "Next Pizza"),
                        React.createElement("p", { className: 'text-sm text-gray-400 leading-3' }, "\u0412\u043A\u0443\u0441\u043D\u0435\u0439 \u0443\u0436\u0435 \u043D\u0435\u043A\u0443\u0434\u0430")))),
            hasSearch && (React.createElement("div", { className: 'mx-10 flex-1' },
                React.createElement(search_input_1.SearchInput, null))),
            React.createElement("div", { className: 'flex items-center gap-3' },
                React.createElement(ui_1.Button, { variant: 'outline', className: 'flex items-center gap-1' },
                    React.createElement(lucide_react_1.User, { size: 16 }),
                    "\u0412\u043E\u0439\u0442\u0438"),
                hasCart && (React.createElement("div", null,
                    React.createElement(cart_button_1.CartButton, null)))))));
};
