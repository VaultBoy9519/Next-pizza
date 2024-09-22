"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var shared_1 = require("@/shared/components/shared");
var react_1 = require("react");
exports.metadata = {
    title: 'Fast Food Store | Главная'
};
function HomeLayout(_a) {
    var children = _a.children, modal = _a.modal;
    return (React.createElement("main", { className: 'min-h-screen' },
        React.createElement(react_1.Suspense, null,
            React.createElement(shared_1.Header, null)),
        children,
        modal,
        React.createElement(shared_1.Footer, null)));
}
exports["default"] = HomeLayout;
