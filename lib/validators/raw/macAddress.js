"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var common_2 = require("../utils/common");
exports.default = (function (separator) {
    if (separator === void 0) { separator = ':'; }
    return function (value) {
        separator = common_2.unwrap(separator);
        if (!common_1.req(value)) {
            return true;
        }
        if (typeof value !== 'string') {
            return false;
        }
        var parts = typeof separator === 'string' && separator !== ''
            ? value.split(separator)
            : value.length === 12 || value.length === 16
                ? value.match(/.{2}/g)
                : null;
        return (parts !== null &&
            (parts.length === 6 || parts.length === 8) &&
            parts.every(hexValid));
    };
});
var hexValid = function (hex) { return hex.toLowerCase().match(/^[0-9a-f]{2}$/); };
//# sourceMappingURL=macAddress.js.map