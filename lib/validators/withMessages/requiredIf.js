"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var requiredIf_1 = __importDefault(require("../raw/requiredIf"));
exports.default = (function (prop) { return ({
    $validator: requiredIf_1.default(prop),
    $message: 'The value is required'
}); });
//# sourceMappingURL=requiredIf.js.map