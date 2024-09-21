'use client';
"use strict";
exports.__esModule = true;
exports.Providers = void 0;
var react_1 = require("next-auth/react");
var nextjs_toploader_1 = require("nextjs-toploader");
var react_2 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
exports.Providers = function (_a) {
    var children = _a.children;
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.SessionProvider, null, children),
        react_2["default"].createElement(react_hot_toast_1.Toaster, null),
        react_2["default"].createElement(nextjs_toploader_1["default"], null)));
};
