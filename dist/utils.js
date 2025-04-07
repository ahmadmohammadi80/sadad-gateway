"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignData = generateSignData;
const crypto_1 = __importDefault(require("crypto"));
function generateSignData(data, key) {
    const buffer = Buffer.from(data, "utf-8");
    const keyBuffer = Buffer.from(key, "base64");
    const sign = crypto_1.default.createHmac("sha1", keyBuffer).update(buffer).digest("base64");
    return sign;
}
