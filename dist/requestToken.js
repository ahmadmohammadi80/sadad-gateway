"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestToken = requestToken;
const axios_1 = __importDefault(require("axios"));
async function requestToken(options) {
    const url = "https://sadad.shaparak.ir/api/v0/Request/PaymentRequest";
    const response = await axios_1.default.post(url, {
        TerminalId: options.terminalId,
        MerchantId: options.merchantId,
        Amount: options.amount,
        OrderId: options.orderId,
        ReturnUrl: options.returnUrl,
        SignData: options.signData
    });
    return response.data;
}
