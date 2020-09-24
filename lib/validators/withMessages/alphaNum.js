"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var alphaNum_1 = __importDefault(require("../raw/alphaNum"));
exports.default = {
    $validator: alphaNum_1.default,
    $message: 'The value must be alpha-numeric'
};
//# sourceMappingURL=alphaNum.js.map