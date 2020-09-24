"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var maxValue_1 = __importDefault(require("../raw/maxValue"));
exports.default = (function (max) { return ({
    $validator: maxValue_1.default(max),
    $message: function (_a) {
        var $params = _a.$params;
        return "The maximum value is " + $params.max;
    },
    $params: { max: max }
}); });
//# sourceMappingURL=maxValue.js.map