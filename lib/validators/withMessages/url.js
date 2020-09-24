"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = __importDefault(require("../raw/url"));
exports.default = {
    $validator: url_1.default,
    $message: 'The value is not a valid URL address'
};
//# sourceMappingURL=url.js.map