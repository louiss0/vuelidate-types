"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var maxLength_1 = __importDefault(require("../raw/maxLength"));
exports.default = (function (max) { return ({
    $validator: maxLength_1.default(max),
    $message: function (_a) {
        var $params = _a.$params;
        return "The maximum length allowed is " + $params.max;
    },
    $params: { max: max }
}); });
//# sourceMappingURL=maxLength.js.map