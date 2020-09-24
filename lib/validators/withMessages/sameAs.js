"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sameAs_1 = __importDefault(require("../raw/sameAs"));
exports.default = (function (equalTo, otherName) { return ({
    $validator: sameAs_1.default(equalTo),
    $message: function (_a) {
        var $params = _a.$params;
        return "The value must be equal to the " + otherName + " value.";
    },
    $params: { equalTo: equalTo, otherName: otherName }
}); });
//# sourceMappingURL=sameAs.js.map