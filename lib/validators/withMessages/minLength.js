"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var minLength_1 = __importDefault(require("../raw/minLength"));
exports.default = (function (length) { return ({
    $validator: minLength_1.default(length),
    $message: function (_a) {
        var $params = _a.$params;
        return "This field should be at least " + $params.length + " long.";
    },
    $params: { length: length }
}); });
//# sourceMappingURL=minLength.js.map