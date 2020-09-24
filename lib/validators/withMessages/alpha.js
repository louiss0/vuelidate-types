"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var alpha_1 = __importDefault(require("../raw/alpha"));
exports.default = {
    $validator: alpha_1.default,
    $message: 'The value is not alphabetical'
};
//# sourceMappingURL=alpha.js.map