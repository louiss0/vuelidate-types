"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decimal_1 = __importDefault(require("../raw/decimal"));
exports.default = {
    $validator: decimal_1.default,
    $message: 'Value must be decimal'
};
//# sourceMappingURL=decimal.js.map