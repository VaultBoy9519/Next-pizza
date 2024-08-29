'use client';
"use strict";
exports.__esModule = true;
exports.SearchInput = void 0;
var utils_1 = require("@/lib/utils");
var api_client_1 = require("@/services/api-client");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var react_use_1 = require("react-use");
exports.SearchInput = function (_a) {
    var className = _a.className;
    var _b = react_1.useState(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = react_1.useState([]), products = _c[0], setProducts = _c[1];
    var ref = react_1.useRef(null);
    var _d = react_1.useState(false), focused = _d[0], setFocused = _d[1];
    react_use_1.useClickAway(ref, function () { return setFocused(false); });
    react_1.useEffect(function () {
        api_client_1.Api.products.search(searchQuery).then(function (items) { return setProducts(items); });
    }, [searchQuery]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        focused && react_1["default"].createElement("div", { className: 'fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' }),
        react_1["default"].createElement("div", { ref: ref, className: utils_1.cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className) },
            react_1["default"].createElement(lucide_react_1.Search, { className: 'absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' }),
            react_1["default"].createElement("input", { className: 'rounded-2xl outline-none w-full bg-gray-100 pl-11', type: 'text', placeholder: '\u041D\u0430\u0439\u0442\u0438 \u043F\u0438\u0446\u0446\u0443...', onFocus: function () { return setFocused(true); }, value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); } }),
            products.length > 0 && (react_1["default"].createElement("div", { className: utils_1.cn('absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30', focused && 'visible opacity-100 top-12') }, products.map(function (product) { return (react_1["default"].createElement(link_1["default"], { key: product.id, className: 'flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10', href: "/product/" + product.id },
                react_1["default"].createElement("img", { className: 'rounded-sm h-8 w-8', src: product.imageUrl, alt: product.name }),
                react_1["default"].createElement("span", null, product.name))); }))))));
};
