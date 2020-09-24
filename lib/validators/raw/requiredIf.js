"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var common_2 = require("../utils/common");
var validate = function (prop, val) { return prop ? common_1.req(val) : true; };
exports.default = (function (prop) { return function (value) {
    if (typeof prop !== 'function') {
        return validate(prop, value);
    }
    var result = prop();
    if (common_2.isPromise(result)) {
        return result.then(function (response) {
            return validate(response, value);
        });
    }
    return validate(result, value);
}; });
//# sourceMappingURL=requiredIf.js.map