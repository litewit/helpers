"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSubstring = void 0;
var toSubstring = function (str, length, endsWith) {
    if (length === void 0) { length = 0; }
    if (endsWith === void 0) { endsWith = ''; }
    return str && (str === null || str === void 0 ? void 0 : str.length) >= length ? str.slice(0, length - 1) + endsWith : str;
};
exports.toSubstring = toSubstring;
