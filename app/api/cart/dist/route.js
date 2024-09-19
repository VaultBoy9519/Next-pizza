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
exports.POST = exports.GET = void 0;
var prisma_client_1 = require("@/prisma/prisma-client");
var lib_1 = require("@/shared/lib");
var crypto_1 = require("crypto");
var server_1 = require("next/server");
function GET(req) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var token, userCart, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    token = (_a = req.cookies.get('cartToken')) === null || _a === void 0 ? void 0 : _a.value;
                    if (!token) {
                        return [2 /*return*/, server_1.NextResponse.json({ totalAmount: 0, items: [] })];
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.cart.findFirst({
                            where: {
                                OR: [
                                    {
                                        token: token
                                    },
                                ]
                            },
                            include: {
                                items: {
                                    orderBy: {
                                        createdAt: 'desc'
                                    },
                                    include: {
                                        productItem: {
                                            include: {
                                                product: true
                                            }
                                        },
                                        ingredients: true
                                    }
                                }
                            }
                        })];
                case 1:
                    userCart = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.json(userCart)];
                case 2:
                    error_1 = _b.sent();
                    console.log('[CART_GET] Server error', error_1);
                    return [2 /*return*/, server_1.NextResponse.json({ message: 'Не удалось получить корзину' }, { status: 500 })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.GET = GET;
function POST(req) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var token, userCart, data, findCartItem, updatedUserCart, response, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 9, , 10]);
                    token = (_a = req.cookies.get('cartToken')) === null || _a === void 0 ? void 0 : _a.value;
                    if (!token) {
                        token = crypto_1["default"].randomUUID();
                    }
                    console.log('🚀 ~ POST ~ token:', token);
                    return [4 /*yield*/, lib_1.findOrCreateCart(token)];
                case 1:
                    userCart = _c.sent();
                    return [4 /*yield*/, req.json()];
                case 2:
                    data = (_c.sent());
                    return [4 /*yield*/, prisma_client_1.prisma.cartItem.findFirst({
                            where: {
                                cartId: userCart.id,
                                productItemId: data.productItemId,
                                ingredients: {
                                    every: {
                                        id: { "in": data.ingredients }
                                    }
                                }
                            }
                        })];
                case 3:
                    findCartItem = _c.sent();
                    if (!findCartItem) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma_client_1.prisma.cartItem.update({
                            where: {
                                id: findCartItem.id
                            },
                            data: {
                                quantity: findCartItem.quantity + 1
                            }
                        })];
                case 4:
                    _c.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, prisma_client_1.prisma.cartItem.create({
                        data: {
                            cartId: userCart.id,
                            productItemId: data.productItemId,
                            quantity: 1,
                            ingredients: { connect: (_b = data.ingredients) === null || _b === void 0 ? void 0 : _b.map(function (id) { return ({ id: id }); }) }
                        }
                    })];
                case 6:
                    _c.sent();
                    _c.label = 7;
                case 7: return [4 /*yield*/, lib_1.updateCartTotalAmount(token)];
                case 8:
                    updatedUserCart = _c.sent();
                    response = server_1.NextResponse.json(updatedUserCart);
                    response.cookies.set('cartToken', token);
                    return [2 /*return*/, response];
                case 9:
                    e_1 = _c.sent();
                    console.log('[CART_POST] Server error', e_1);
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Something went wrong' }, { status: 500 })];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
