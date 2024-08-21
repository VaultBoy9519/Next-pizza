"use strict";
exports.__esModule = true;
exports.Header = void 0;
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var ui_1 = require("../ui");
var container_1 = require("./container");
exports.Header = function (className) {
    return (React.createElement("div", { className: utils_1.cn('border border-b', className) },
        React.createElement(container_1.Container, { className: 'flex items-center justify-between py-8' },
            React.createElement("div", { className: 'flex items-center gap-4' },
                React.createElement(image_1["default"], { src: '/logo.png', alt: 'Logo', width: 35, height: 35 }),
                React.createElement("div", null,
                    React.createElement("h1", { className: 'text-2xl uppercase font-black' }, "Next Pizza"),
                    React.createElement("p", { className: 'text-sm text-gray-400 leading-3' }, "\u0412\u043A\u0443\u0441\u043D\u0435\u0439 \u0443\u0436\u0435 \u043D\u0435\u043A\u0443\u0434\u0430"))),
            React.createElement("div", { className: 'flex items-center gap-3' },
                React.createElement(ui_1.Button, { variant: 'outline', className: 'flex items-center gap-1' },
                    React.createElement(lucide_react_1.User, { size: 16 }),
                    "\u0412\u043E\u0439\u0442\u0438"),
                React.createElement("div", null,
                    React.createElement(ui_1.Button, { className: 'group relative' },
                        React.createElement("b", null, "520 \u0420"),
                        React.createElement("span", { className: 'h-full w-[1px] bg-white/30 mx-3' }),
                        React.createElement("div", { className: 'flex items-center gap-1 transition duration-300 group-hover:opacity-0' },
                            React.createElement(lucide_react_1.ShoppingCart, { className: 'h-4 w-4 relative', strokeWidth: 2 }),
                            React.createElement("b", null, "3")),
                        React.createElement(lucide_react_1.ArrowRight, { className: 'w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' })))))));
};
