"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var or_1 = __importDefault(require("../raw/or"));
exports.default = (function () {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return ({
        $validator: or_1.default.apply(void 0, validators),
        $message: 'The value does not match any of the provided validators'
    });
});
//# sourceMappingURL=or.js.map