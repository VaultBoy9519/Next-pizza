'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    react_use_1.useDebounce(function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_client_1.Api.products.search(searchQuery)];
                case 1:
                    response = _a.sent();
                    setProducts(response);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, 250, [searchQuery]);
    var onClickItem = function () {
        setFocused(false);
        setSearchQuery('');
        setProducts([]);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        focused && react_1["default"].createElement("div", { className: 'fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' }),
        react_1["default"].createElement("div", { ref: ref, className: utils_1.cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className) },
            react_1["default"].createElement(lucide_react_1.Search, { className: 'absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' }),
            react_1["default"].createElement("input", { className: 'rounded-2xl outline-none w-full bg-gray-100 pl-11', type: 'text', placeholder: '\u041D\u0430\u0439\u0442\u0438 \u043F\u0438\u0446\u0446\u0443...', onFocus: function () { return setFocused(true); }, value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); } }),
            products.length > 0 && (react_1["default"].createElement("div", { className: utils_1.cn('absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30', focused && 'visible opacity-100 top-12') }, products.map(function (product) { return (react_1["default"].createElement(link_1["default"], { onClick: onClickItem, key: product.id, className: 'flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10', href: "/product/" + product.id },
                react_1["default"].createElement("img", { className: 'rounded-sm h-8 w-8', src: product.imageUrl, alt: product.name }),
                react_1["default"].createElement("span", null, product.name))); }))))));
};
