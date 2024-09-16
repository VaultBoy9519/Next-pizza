"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var shared_1 = require("@/shared/components/shared");
exports.metadata = {
    title: 'Next Pizza | Главная'
};
function HomeLayout(_a) {
    var children = _a.children, modal = _a.modal;
    return (React.createElement("main", { className: 'min-h-screen' },
        React.createElement(shared_1.Header, null),
        modal,
        children));
}
exports["default"] = HomeLayout;
