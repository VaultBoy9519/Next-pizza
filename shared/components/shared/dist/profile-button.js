"use strict";
exports.__esModule = true;
exports.ProfileButton = void 0;
var lucide_react_1 = require("lucide-react");
var react_1 = require("next-auth/react");
var link_1 = require("next/link");
var react_2 = require("react");
var ui_1 = require("../ui");
exports.ProfileButton = function (_a) {
    var className = _a.className, onClickSignIn = _a.onClickSignIn;
    var session = react_1.useSession().data;
    console.log('🚀 ~ session:', session);
    return (react_2["default"].createElement("div", { className: className }, !session ? (react_2["default"].createElement(ui_1.Button, { onClick: onClickSignIn, variant: 'outline', className: 'flex items-center gap-1' },
        react_2["default"].createElement(lucide_react_1.User, { size: 16 }),
        "\u0412\u043E\u0439\u0442\u0438")) : (react_2["default"].createElement(link_1["default"], { href: '/profile' },
        react_2["default"].createElement(ui_1.Button, { variant: 'secondary', className: 'flex items-center gap-2' },
            react_2["default"].createElement(lucide_react_1.CircleUser, { size: 18 }),
            "\u041F\u0440\u043E\u0444\u0438\u043B\u044C")))));
};
