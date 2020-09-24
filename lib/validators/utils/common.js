"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAsync = exports.isPromise = exports.isTruthy = exports.normalizeValidatorObject = exports.unwrap = exports.isObject = exports.isFunction = void 0;
var vue_1 = require("vue");
function isFunction(val) {
    return typeof val === 'function';
}
exports.isFunction = isFunction;
function isObject(o) {
    return o !== null && typeof o === 'object' && !Array.isArray(o);
}
exports.isObject = isObject;
function unwrap(val) {
    return vue_1.unref(val);
}
exports.unwrap = unwrap;
function normalizeValidatorObject(validator) {
    return isFunction(validator.$validator)
        ? validator
        : {
            $validator: validator
        };
}
exports.normalizeValidatorObject = normalizeValidatorObject;
function isTruthy(prop) {
    prop = unwrap(prop);
    return Boolean(isFunction(prop) ? typeof prop === "function" && prop() : prop);
}
exports.isTruthy = isTruthy;
function isPromise(object) {
    return isObject(object) && isFunction(object.then);
}
exports.isPromise = isPromise;
function withAsync(validator) {
    var normalized = normalizeValidatorObject(validator);
    normalized.$async = true;
    return normalized;
}
exports.withAsync = withAsync;
//# sourceMappingURL=common.js.map