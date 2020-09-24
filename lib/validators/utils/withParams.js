"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
function withParams($params, $validator) {
    if (!common_1.isObject($params))
        throw new Error("[@vuelidate/validators]: First parameter to \"withParams\" should be an object, provided " + typeof $params);
    if (!common_1.isObject($validator) && !common_1.isFunction($validator))
        throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
    var validatorObj = common_1.normalizeValidatorObject($validator);
    validatorObj.$params = __assign(__assign({}, validatorObj.$params), $params);
    return validatorObj;
}
exports.default = withParams;
//# sourceMappingURL=withParams.js.map