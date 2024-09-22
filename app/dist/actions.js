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
exports.registerUser = exports.updateUserInfo = exports.createOrder = void 0;
var controllers_1 = require("@/prisma/controllers");
var prisma_client_1 = require("@/prisma/prisma-client");
var components_1 = require("@/shared/components");
var lib_1 = require("@/shared/lib");
var get_user_session_1 = require("@/shared/lib/get-user-session");
var client_1 = require("@prisma/client");
var bcrypt_1 = require("bcrypt");
var headers_1 = require("next/headers");
function createOrder(data) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cart, cookieStore, cartToken, userCart, order, paymentData, paymentUrl, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 8, , 9]);
                    cart = controllers_1.prismaControllers.cart;
                    cookieStore = headers_1.cookies();
                    cartToken = (_a = cookieStore.get('cartToken')) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartToken)
                        throw new Error('Cart token not found');
                    return [4 /*yield*/, cart.getByToken(cartToken)];
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
                    return [4 /*yield*/, cart.clearTotalAmount(userCart.id)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, cart.deleteAllProducts(userCart.id)];
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
                    return [4 /*yield*/, lib_1.sendEmail(data.email, "Fast Food Store: \u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 #" + order.id, components_1.PayOrderTemplate({ orderId: order.id, totalAmount: order.totalAmount, paymentUrl: paymentUrl }))];
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
function updateUserInfo(data) {
    return __awaiter(this, void 0, void 0, function () {
        var session, fullName, email, password, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, get_user_session_1.getUserSession()];
                case 1:
                    session = _a.sent();
                    if (!session)
                        throw new Error('Session not found');
                    fullName = data.fullName, email = data.email, password = data.password;
                    return [4 /*yield*/, prisma_client_1.prisma.user.update({
                            where: {
                                id: Number(session.id)
                            },
                            data: {
                                fullName: fullName,
                                email: email,
                                password: data.password && bcrypt_1.hashSync(password, 10)
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.log("[UpdateUserInfo] Server error", e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateUserInfo = updateUserInfo;
function registerUser(body) {
    return __awaiter(this, void 0, void 0, function () {
        var user, createdUser, code, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, prisma_client_1.prisma.user.findFirst({
                            where: {
                                email: body.email
                            }
                        })];
                case 1:
                    user = _a.sent();
                    if (user) {
                        if (!user.verified) {
                            throw new Error('Почта не подтверждена');
                        }
                        throw new Error('Пользователь уже существует');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.user.create({
                            data: {
                                fullName: body.fullName,
                                email: body.email,
                                password: bcrypt_1.hashSync(body.password, 10)
                            }
                        })];
                case 2:
                    createdUser = _a.sent();
                    code = Math.floor(100000 + Math.random() * 900000).toString();
                    return [4 /*yield*/, prisma_client_1.prisma.verificationCode.create({
                            data: {
                                code: code,
                                userId: createdUser.id
                            }
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, lib_1.sendEmail(createdUser.email, 'Fast Food Store / 📝 Подтверждение регистрации', components_1.VerificationUserTemplate({
                            code: code
                        }))];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log('Error [CREATE_USER]', err_1);
                    throw err_1;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.registerUser = registerUser;
