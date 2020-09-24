"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var and_1 = __importDefault(require("../raw/and"));
exports.default = (function () {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return ({
        $validator: and_1.default.apply(void 0, validators),
        $message: 'The value does not match all of the provided validators'
    });
});
//# sourceMappingURL=and.js.map