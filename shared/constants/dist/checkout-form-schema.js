"use strict";
exports.__esModule = true;
exports.checkoutFormSchema = void 0;
var zod_1 = require("zod");
exports.checkoutFormSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2)
});
