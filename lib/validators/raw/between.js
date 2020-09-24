"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var common_2 = require("../utils/common");
exports.default = (function (min, max) {
    return function (value) {
        if (!common_1.req(value)) {
            return false;
        }
        else if (typeof value === "string" && (!/\s/.test(value))) {
            return false;
        }
        else if (value instanceof Date) {
            return false;
        }
        return +common_2.unwrap(min) <= +value && +common_2.unwrap(max) >= +value;
    };
});
//# sourceMappingURL=between.js.map