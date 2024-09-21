'use server';
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
exports.createOrder = void 0;
var prisma_client_1 = require("@/prisma/prisma-client");
var components_1 = require("@/shared/components");
var lib_1 = require("@/shared/lib");
var client_1 = require("@prisma/client");
var headers_1 = require("next/headers");
function createOrder(data) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cookieStore, cartToken, userCart, order, paymentData, paymentUrl, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 8, , 9]);
                    cookieStore = headers_1.cookies();
                    cartToken = (_a = cookieStore.get('cartToken')) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartToken)
                        throw new Error('Cart token not found');
                    return [4 /*yield*/, prisma_client_1.prisma.cart.findFirst({
                            include: {
                                user: true,
                                items: {
                                    include: {
                                        ingredients: true,
                                        productItem: {
                                            include: {
                                                product: true
                                            }
                                        }
                                    }
                                }
                            },
                            where: {
                                token: cartToken
                            }
                        })];
                case 1:
                    userCart = _b.sent();
                    if (!userCart) {
                        throw new Error('Cart not found');
                    }
                    if ((userCart === null || userCart === void 0 ? void 0 : userCart.totalAmount) === 0) {
                        throw new Error('Cart is empty');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.order.create({
                            data: {
                                token: cartToken,
                                fullName: data.firstName + ' ' + data.lastName,
                                email: data.email,
                                phone: data.phone,
                                address: data.address,
                                comment: data.comment,
                                totalAmount: userCart.totalAmount,
                                status: client_1.OrderStatus.PENDING,
                                items: JSON.stringify(userCart.items)
                            }
                        })];
                case 2:
                    order = _b.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.cart.update({
                            where: { id: userCart.id },
                            data: {
                                totalAmount: 0
                            }
                        })];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.cartItem.deleteMany({
                            where: {
                                cartId: userCart.id
                            }
                        })];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, lib_1.createPayment({ amount: order.totalAmount, orderId: order.id, description: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 #" + order.id })];
                case 5:
                    paymentData = _b.sent();
                    if (!paymentData) {
                        throw new Error('Payment data not found');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.order.update({
                            where: { id: order.id },
                            data: {
                                paymentId: paymentData.id
                            }
                        })];
                case 6:
                    _b.sent();
                    paymentUrl = paymentData.confirmation.confirmation_url;
                    return [4 /*yield*/, lib_1.sendEmail(data.email, "Next Pizza: \u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 #" + order.id, components_1.PayOrderTemplate({ orderId: order.id, totalAmount: order.totalAmount, paymentUrl: paymentUrl }))];
                case 7:
                    _b.sent();
                    return [2 /*return*/, paymentUrl];
                case 8:
                    e_1 = _b.sent();
                    console.log("[CreateOrder] Server error", e_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.createOrder = createOrder;
