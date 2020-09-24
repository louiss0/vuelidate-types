"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var between_1 = __importDefault(require("../raw/between"));
exports.default = (function (min, max) { return ({
    $validator: between_1.default(min, max),
    $message: function (_a) {
        var $params = _a.$params;
        return "The value must be between " + $params.min + " and " + $params.max;
    },
    $params: { min: min, max: max }
}); });
//# sourceMappingURL=between.js.map