"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
var components_1 = require("@/shared/components");
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
        React.createElement("head", null,
            React.createElement("link", { "data-rh": 'true', rel: 'icon', href: '/logo.png' })),
        React.createElement("body", { className: nunito.className },
            React.createElement(components_1.Providers, null, children))));
}
exports["default"] = RootLayout;
