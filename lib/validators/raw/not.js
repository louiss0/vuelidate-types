"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
exports.default = (function (validator) { return function (value, vm) {
    return !common_1.req(value) || !validator.call(this, value, vm);
}; });
//# sourceMappingURL=not.js.map