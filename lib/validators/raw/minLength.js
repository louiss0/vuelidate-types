"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
var common_1 = require("../utils/common");
exports.default = (function (length) { return function (value) { return !core_1.req(value) || core_1.len(value) >= common_1.unwrap(length); }; });
//# sourceMappingURL=minLength.js.map