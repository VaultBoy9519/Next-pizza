"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var bcrypt_1 = require("bcrypt");
var constants_1 = require("./constants");
var prisma_client_1 = require("./prisma-client");
var randomDecimalNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};
var generateProductItem = function (_a) {
    var productId = _a.productId, pizzaType = _a.pizzaType, size = _a.size;
    return {
        productId: productId,
        price: randomDecimalNumber(190, 600),
        pizzaType: pizzaType,
        size: size
    };
};
function up() {
    return __awaiter(this, void 0, void 0, function () {
        var pizza1, pizza2, pizza3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.user.createMany({
                        data: [
                            {
                                fullName: 'User Test',
                                email: 'user@test.ru',
                                password: bcrypt_1.hashSync('111111', 10),
                                verified: new Date(),
                                role: 'USER'
                            },
                            {
                                fullName: 'Admin Admin',
                                email: 'admin@test.ru',
                                password: bcrypt_1.hashSync('111111', 10),
                                verified: new Date(),
                                role: 'ADMIN'
                            },
                        ]
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.category.createMany({ data: constants_1.categories })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.ingredient.createMany({ data: constants_1.ingredients })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.product.createMany({ data: constants_1.products })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.product.create({
                            data: {
                                name: 'Пепперони фреш',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
                                categoryId: 1,
                                ingredients: {
                                    connect: constants_1.ingredients.slice(0, 5)
                                }
                            }
                        })];
                case 5:
                    pizza1 = _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.product.create({
                            data: {
                                name: 'Сырная',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
                                categoryId: 1,
                                ingredients: {
                                    connect: constants_1.ingredients.slice(5, 10)
                                }
                            }
                        })];
                case 6:
                    pizza2 = _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.product.create({
                            data: {
                                name: 'Чоризо фреш',
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
                                categoryId: 1,
                                ingredients: {
                                    connect: constants_1.ingredients.slice(10, 40)
                                }
                            }
                        })];
                case 7:
                    pizza3 = _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.productItem.createMany({
                            data: [
                                // Пицца "Пепперони фреш"
                                generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
                                generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
                                generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),
                                // Пицца "Сырная"
                                generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
                                generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
                                generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
                                generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
                                generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
                                generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),
                                // Пицца "Чоризо фреш"
                                generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
                                generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
                                generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),
                                // Остальные продукты
                                generateProductItem({ productId: 1 }),
                                generateProductItem({ productId: 2 }),
                                generateProductItem({ productId: 3 }),
                                generateProductItem({ productId: 4 }),
                                generateProductItem({ productId: 5 }),
                                generateProductItem({ productId: 6 }),
                                generateProductItem({ productId: 7 }),
                                generateProductItem({ productId: 8 }),
                                generateProductItem({ productId: 9 }),
                                generateProductItem({ productId: 10 }),
                                generateProductItem({ productId: 11 }),
                                generateProductItem({ productId: 12 }),
                                generateProductItem({ productId: 13 }),
                                generateProductItem({ productId: 14 }),
                                generateProductItem({ productId: 15 }),
                                generateProductItem({ productId: 16 }),
                                generateProductItem({ productId: 17 }),
                            ]
                        })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.cart.createMany({
                            data: [
                                {
                                    userId: 1,
                                    totalAmount: 0,
                                    token: '11111'
                                },
                                {
                                    userId: 2,
                                    totalAmount: 0,
                                    token: '222222'
                                },
                            ]
                        })];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.cartItem.create({
                            data: {
                                productItemId: 1,
                                cartId: 1,
                                quantity: 2,
                                ingredients: {
                                    connect: [{ id: 1 }, { id: 2 }, { id: 3 }]
                                }
                            }
                        })];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function down() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE \"User\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"User\" RESTART IDENTITY CASCADE"])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE \"Category\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"Category\" RESTART IDENTITY CASCADE"])))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.$executeRaw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["TRUNCATE TABLE \"Cart\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"Cart\" RESTART IDENTITY CASCADE"])))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.$executeRaw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["TRUNCATE TABLE \"CartItem\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"CartItem\" RESTART IDENTITY CASCADE"])))];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.$executeRaw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["TRUNCATE TABLE \"Ingredient\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"Ingredient\" RESTART IDENTITY CASCADE"])))];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.$executeRaw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["TRUNCATE TABLE \"Product\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"Product\" RESTART IDENTITY CASCADE"])))];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.$executeRaw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["TRUNCATE TABLE \"ProductItem\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"ProductItem\" RESTART IDENTITY CASCADE"])))];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, down()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, up()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_client_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma_client_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
