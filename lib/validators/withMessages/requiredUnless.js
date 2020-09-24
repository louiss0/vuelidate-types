"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var requiredUnless_1 = __importDefault(require("../raw/requiredUnless"));
exports.default = (function (prop) { return ({
    $validator: requiredUnless_1.default(prop),
    $message: 'The value is required'
}); });
//# sourceMappingURL=requiredUnless.js.map