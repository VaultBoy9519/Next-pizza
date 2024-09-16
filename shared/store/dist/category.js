"use strict";
exports.__esModule = true;
exports.useCategoryStore = void 0;
var zustand_1 = require("zustand");
exports.useCategoryStore = zustand_1.create()(function (set) { return ({
    activeId: 1,
    setActiveId: function (activeId) { return set({ activeId: activeId }); }
}); });
