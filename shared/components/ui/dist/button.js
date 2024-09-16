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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.buttonVariants = exports.Button = void 0;
var react_slot_1 = require("@radix-ui/react-slot");
var class_variance_authority_1 = require("class-variance-authority");
var React = require("react");
var utils_1 = require("@/shared/lib/utils");
var lucide_react_1 = require("lucide-react");
var buttonVariants = class_variance_authority_1.cva('inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500', {
    variants: {
        variant: {
            "default": 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-primary text-primary bg-transparent hover:bg-secondary',
            secondary: 'bg-secondary text-primary hover:bg-secondary/50',
            ghost: 'hover:bg-secondary hover:text-secondary-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            "default": 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
exports.buttonVariants = buttonVariants;
var Button = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, _b = _a.asChild, asChild = _b === void 0 ? false : _b, children = _a.children, disabled = _a.disabled, loading = _a.loading, props = __rest(_a, ["className", "variant", "size", "asChild", "children", "disabled", "loading"]);
    var Comp = asChild ? react_slot_1.Slot : 'button';
    return (React.createElement(Comp, __assign({ disabled: disabled || loading, className: utils_1.cn(buttonVariants({ variant: variant, size: size, className: className })), ref: ref }, props), !loading ? children : React.createElement(lucide_react_1.Loader, { className: 'w-5 h-5 animate-spin' })));
});
exports.Button = Button;
Button.displayName = 'Button';
