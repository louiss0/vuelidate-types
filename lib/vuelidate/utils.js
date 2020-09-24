"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramToRef = exports.isPromise = exports.isObject = exports.isFunction = exports.unwrapObj = exports.unwrap = void 0;
var vue_1 = require("vue");
function unwrap(val) {
    return vue_1.isRef(val)
        ? val.value
        : val;
}
exports.unwrap = unwrap;
function unwrapObj(obj, ignoreKeys) {
    if (ignoreKeys === void 0) { ignoreKeys = []; }
    return Object.keys(obj).reduce(function (o, k) {
        if (ignoreKeys.includes(k))
            return o;
        o[k] = unwrap(obj[k]);
        return o;
    }, {});
}
exports.unwrapObj = unwrapObj;
function isFunction(val) {
    return typeof val === 'function';
}
exports.isFunction = isFunction;
function isObject(val) {
    return val !== null && (typeof val === 'object' || isFunction(val));
}
exports.isObject = isObject;
function isPromise(object) {
    return isObject(object) && isFunction(object.then);
}
exports.isPromise = isPromise;
function paramToRef(param) {
    if (vue_1.isRef(param)) {
        return param;
    }
    else if (typeof param === 'function') {
        return vue_1.computed(param);
    }
    else {
        return vue_1.ref(param);
    }
}
exports.paramToRef = paramToRef;
//# sourceMappingURL=utils.js.map