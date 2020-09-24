"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
function withMessage($message, $validator) {
    if (!common_1.isFunction($message) && typeof common_1.unwrap($message) !== 'string')
        throw new Error("[@vuelidate/validators]: First parameter to \"withMessage\" should be string or a function returning a string, provided " + typeof $message);
    if (!common_1.isObject($validator) && !common_1.isFunction($validator))
        throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
    var validatorObj = common_1.normalizeValidatorObject($validator);
    validatorObj.$message = $message;
    return validatorObj;
}
exports.default = withMessage;
//# sourceMappingURL=withMessage.js.map