"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
exports.default = (function (value) {
    if (typeof value === 'string') {
        return common_1.req(value.trim());
    }
    return common_1.req(value);
});
//# sourceMappingURL=required.js.map