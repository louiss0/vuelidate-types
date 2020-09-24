"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ipAddress_1 = __importDefault(require("../raw/ipAddress"));
exports.default = {
    $validator: ipAddress_1.default,
    $message: 'The value is not a valid IP address'
};
//# sourceMappingURL=ipAddress.js.map