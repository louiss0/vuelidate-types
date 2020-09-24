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
exports.regex = exports.len = exports.req = void 0;
var common_1 = require("../utils/common");
exports.req = function (value) {
    value = common_1.unwrap(value);
    if (Array.isArray(value))
        return !!value.length;
    if (value === undefined || value === null) {
        return false;
    }
    if (value === false) {
        return true;
    }
    if (value instanceof Date) {
        return !isNaN(value.getTime());
    }
    if (typeof value === 'object') {
        for (var _ in value)
            return true;
        return false;
    }
    return !!String(value).length;
};
exports.len = function (value) {
    value = common_1.unwrap(value);
    if (Array.isArray(value))
        return value.length;
    if (typeof value === 'object') {
        return Object.keys(__assign({}, value)).length;
    }
    return String(value).length;
};
exports.regex = function (expr) { return function (value) {
    value = common_1.unwrap(value);
    return !exports.req(value) || expr.test(value);
}; };
//# sourceMappingURL=core.js.map