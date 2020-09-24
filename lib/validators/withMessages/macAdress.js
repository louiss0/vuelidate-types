"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var macAddress_1 = __importDefault(require("../raw/macAddress"));
exports.default = (function (separator) { return ({
    $validator: macAddress_1.default(separator),
    $message: 'The value is not a valid MAC Address'
}); });
//# sourceMappingURL=macAdress.js.map