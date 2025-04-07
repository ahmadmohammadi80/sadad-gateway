"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPayment = verifyPayment;
const axios_1 = __importDefault(require("axios"));
async function verifyPayment(options) {
    const url = "https://sadad.shaparak.ir/api/v0/Advice/Verify";
    const response = await axios_1.default.post(url, {
        Token: options.token,
        SignData: options.signData
    });
    return response.data;
}
