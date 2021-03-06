"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
exports.default = (function (value) {
    if (!common_1.req(value)) {
        return true;
    }
    if (typeof value !== 'string') {
        return false;
    }
    var nibbles = value.split('.');
    return nibbles.length === 4 && nibbles.every(nibbleValid);
});
var nibbleValid = function (nibble) {
    if (nibble.length > 3 || nibble.length === 0) {
        return false;
    }
    if (nibble[0] === '0' && nibble !== '0') {
        return false;
    }
    if (!nibble.match(/^\d+$/)) {
        return false;
    }
    var numeric = +nibble | 0;
    return numeric >= 0 && numeric <= 255;
};
//# sourceMappingURL=ipAddress.js.map