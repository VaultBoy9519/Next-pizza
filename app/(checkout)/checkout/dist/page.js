'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var actions_1 = require("@/app/actions");
var shared_1 = require("@/shared/components/shared");
var checkout_1 = require("@/shared/components/shared/checkout");
var checkout_form_schema_1 = require("@/shared/constants/checkout-form-schema");
var hooks_1 = require("@/shared/hooks");
var utils_1 = require("@/shared/lib/utils");
var zod_1 = require("@hookform/resolvers/zod");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_hot_toast_1 = require("react-hot-toast");
function CheckoutPage() {
    var _this = this;
    var _a = hooks_1.useCart(), totalAmount = _a.totalAmount, items = _a.items, updateItemQuantity = _a.updateItemQuantity, loading = _a.loading;
    var _b = react_1.useState(false), submitting = _b[0], setSubmitting = _b[1];
    var disabledFormClass = utils_1.cn({ 'opacity-40 pointer-events-none': loading && items.length === 0 });
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(checkout_form_schema_1.checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: ''
        }
    });
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var url, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setSubmitting(true);
                    return [4 /*yield*/, actions_1.createOrder(data)];
                case 1:
                    url = _a.sent();
                    react_hot_toast_1["default"].success('Заказ создан! Переход на страницу оплаты...', {
                        icon: '✅'
                    });
                    if (url) {
                        location.href = url;
                    }
                    return [3 /*break*/, 4];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    react_hot_toast_1["default"].error('Не удалось создать заказ', {
                        icon: '❌'
                    });
                    return [3 /*break*/, 4];
                case 3:
                    setSubmitting(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(shared_1.Container, { className: 'mt-10' },
        React.createElement(shared_1.Title, { text: '\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430', size: 'xl', className: 'font-extrabold mb-8 text-[36px]' }),
        React.createElement(react_hook_form_1.FormProvider, __assign({}, form),
            React.createElement("form", { onSubmit: form.handleSubmit(onSubmit) },
                React.createElement("div", { className: 'flex gap-10' },
                    React.createElement("div", { className: 'flex flex-col gap-10 flex-1 mb-20' },
                        React.createElement(checkout_1.CheckoutCart, { items: items, updateItemQuantity: updateItemQuantity, loading: loading }),
                        React.createElement(checkout_1.CheckoutPersonalForm, { className: disabledFormClass }),
                        React.createElement(checkout_1.CheckoutAddressForm, { className: disabledFormClass })),
                    React.createElement("div", { className: 'w-[450px]' },
                        React.createElement(checkout_1.CheckoutSidebar, { submitting: submitting, totalAmount: totalAmount, loading: loading })))))));
}
exports["default"] = CheckoutPage;
