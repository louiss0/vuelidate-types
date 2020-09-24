"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var not_1 = __importDefault(require("../raw/not"));
exports.default = (function (validator) { return ({
    $validator: not_1.default(validator),
    $message: "The value does not match the provided validator"
}); });
//# sourceMappingURL=not.js.map