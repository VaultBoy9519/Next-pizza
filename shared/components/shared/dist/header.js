'use client';
"use strict";
exports.__esModule = true;
exports.Header = void 0;
var utils_1 = require("@/shared/lib/utils");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var cart_button_1 = require("./cart-button");
var container_1 = require("./container");
var modals_1 = require("./modals");
var profile_button_1 = require("./profile-button");
var search_input_1 = require("./search-input");
exports.Header = function (_a) {
    var className = _a.className, _b = _a.hasSearch, hasSearch = _b === void 0 ? true : _b, _c = _a.hasCart, hasCart = _c === void 0 ? true : _c;
    var _d = react_1.useState(false), openAuthModal = _d[0], setOpenAuthModal = _d[1];
    var searchParams = navigation_1.useSearchParams();
    react_1.useEffect(function () {
        if (searchParams.has('paid')) {
            setTimeout(function () { return react_hot_toast_1["default"].success('Заказ успешно оплачен! Информация отправлена на почту.'); }, 500);
        }
    }, []);
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
                React.createElement(modals_1.AuthModal, { open: openAuthModal, onClose: function () { return setOpenAuthModal(false); } }),
                React.createElement(profile_button_1.ProfileButton, { onClickSignIn: function () { return setOpenAuthModal(true); } }),
                hasCart && (React.createElement("div", null,
                    React.createElement(cart_button_1.CartButton, null)))))));
};
