"use strict";
exports.__esModule = true;
var shared_1 = require("@/components/shared");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(shared_1.Container, { className: 'mt-10' },
            React.createElement(shared_1.Title, { text: '\u0412\u0441\u0435 \u043F\u0438\u0446\u0446\u044B', size: 'lg', className: 'font-extrabold' })),
        React.createElement(shared_1.TopBar, null),
        React.createElement(shared_1.Container, { className: 'pb-14 mt-10' },
            React.createElement("div", { className: 'flex gap-[60px]' },
                React.createElement("div", { className: 'w-[250px]' },
                    React.createElement(shared_1.Filters, null)),
                React.createElement("div", { className: 'flex-1' },
                    React.createElement("div", { className: 'flex flex-col gap-16' }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432"))))));
}
exports["default"] = Home;
