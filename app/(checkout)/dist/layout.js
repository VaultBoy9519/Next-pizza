"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var shared_1 = require("@/shared/components/shared");
var react_1 = require("react");
exports.metadata = {
    title: 'Next Pizza | Корзина'
};
function CheckoutLayout(_a) {
    var children = _a.children;
    return (React.createElement("main", { className: 'min-h-screen bg-[#F4F1EE]' },
        React.createElement(shared_1.Container, null,
            React.createElement(react_1.Suspense, null,
                React.createElement(shared_1.Header, { hasSearch: false, hasCart: false, className: 'border-b-gray-200' })),
            children)));
}
exports["default"] = CheckoutLayout;
