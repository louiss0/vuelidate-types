"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = __importDefault(require("../raw/email"));
exports.default = {
    $validator: email_1.default,
    $message: 'Value is not a valid email address'
};
//# sourceMappingURL=email.js.map