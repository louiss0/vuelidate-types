"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (validators.length > 0 &&
            validators.reduce(function (valid, fn) { return valid && fn.apply(fn, args); }, true));
    };
});
//# sourceMappingURL=and.js.map