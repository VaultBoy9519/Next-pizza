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
                    React.createElement("div", { className: 'flex flex-col gap-20' },
                        React.createElement(shared_1.ProductsGroupList, { title: '\u041F\u0438\u0446\u0446\u044B', categoryId: 1, items: [
                                { id: 1, name: 'Пицца 1', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif', price: 100, items: [{ price: 100 }] },
                                { id: 2, name: 'Пицца 2', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEBEEDA4B0427DB077A5ADBD30D154.avif', price: 200, items: [{ price: 200 }] },
                                { id: 3, name: 'Пицца 3', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', price: 200, items: [{ price: 300 }] },
                                { id: 4, name: 'Пицца 4', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif', price: 200, items: [{ price: 400 }] },
                            ] }),
                        React.createElement(shared_1.ProductsGroupList, { title: '\u0417\u0430\u0432\u0442\u0440\u0430\u043A', categoryId: 2, items: [
                                { id: 1, name: 'Пицца 1', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif', price: 100, items: [{ price: 100 }] },
                                { id: 2, name: 'Пицца 2', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEBEEDA4B0427DB077A5ADBD30D154.avif', price: 200, items: [{ price: 200 }] },
                                { id: 3, name: 'Пицца 3', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', price: 200, items: [{ price: 300 }] },
                                { id: 4, name: 'Пицца 4', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif', price: 200, items: [{ price: 400 }] },
                            ] })))))));
}
exports["default"] = Home;
