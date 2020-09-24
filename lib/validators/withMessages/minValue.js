"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var minValue_1 = __importDefault(require("../raw/minValue"));
exports.default = (function (min) { return ({
    $validator: minValue_1.default(min),
    $message: function (_a) {
        var $params = _a.$params;
        return "The minimum value allowed is " + $params.min;
    },
    $params: { min: min }
}); });
//# sourceMappingURL=minValue.js.map