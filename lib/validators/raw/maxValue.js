"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var common_2 = require("../utils/common");
exports.default = (function (max) {
    return function (value) {
        return !common_1.req(value) ||
            ((!/\s/.test(value) || value instanceof Date) && +value <= +common_2.unwrap(max));
    };
});
//# sourceMappingURL=maxValue.js.map