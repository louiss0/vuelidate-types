"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
exports.default = common_1.regex(emailRegex);
//# sourceMappingURL=email.js.map