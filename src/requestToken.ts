import axios from "axios";

interface RequestTokenOptions {
  terminalId: string;
  merchantId: string;
  amount: number;
  orderId: string;
  returnUrl: string;
  signData: string;
}

export async function requestToken(options: RequestTokenOptions) {
  const url = "https://sadad.shaparak.ir/api/v0/Request/PaymentRequest";
  const response = await axios.post(url, {
    TerminalId: options.terminalId,
    MerchantId: options.merchantId,
    Amount: options.amount,
    OrderId: options.orderId,
    ReturnUrl: options.returnUrl,
    SignData: options.signData
  });
  return response.data;
}