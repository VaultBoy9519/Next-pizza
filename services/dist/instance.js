"use strict";
exports.__esModule = true;
exports.axiosInstance = void 0;
var axios_1 = require("axios");
exports.axiosInstance = axios_1["default"].create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});
