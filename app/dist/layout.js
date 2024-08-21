"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var shared_1 = require("@/components/shared");
var google_1 = require("next/font/google");
require("./globals.css");
var nunito = google_1.Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900']
});
exports.metadata = {
    title: 'Next Pizza | Главная'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: 'en' },
        React.createElement("body", { className: nunito.className },
            React.createElement(shared_1.Header, null),
            React.createElement("main", { className: 'min-h-screen' }, children))));
}
exports["default"] = RootLayout;
