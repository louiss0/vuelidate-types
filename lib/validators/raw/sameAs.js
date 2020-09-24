"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../utils/common");
exports.default = (function (equalTo) { return function (value) { return common_1.unwrap(value) === common_1.unwrap(equalTo); }; });
//# sourceMappingURL=sameAs.js.map