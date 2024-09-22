"use strict";
exports.__esModule = true;
exports.ChooseProductForm = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
var ui_1 = require("../ui");
var title_1 = require("./title");
exports.ChooseProductForm = function (_a) {
    var name = _a.name, imageUrl = _a.imageUrl, loading = _a.loading, onSubmit = _a.onSubmit, price = _a.price, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn(className, 'flex flex-1') },
        react_1["default"].createElement("div", { className: 'flex items-center justify-center flex-1 relative w-full' },
            react_1["default"].createElement("img", { src: imageUrl, alt: name, className: 'relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]' })),
        react_1["default"].createElement("div", { className: 'w-[490px] bg-[#f7f6f5] p-7 relative rounded-lg' },
            react_1["default"].createElement(title_1.Title, { text: name, size: 'md', className: 'absolute font-extrabold mb-1' }),
            react_1["default"].createElement("div", { className: 'flex h-full justify-center items-center ' },
                react_1["default"].createElement(ui_1.Button, { onClick: function () { return onSubmit(); }, loading: loading, className: 'h-[55px] px-10 text-base rounded-[18px] w-full' },
                    "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0437\u0430 ",
                    price,
                    " \u20BD")))));
};
