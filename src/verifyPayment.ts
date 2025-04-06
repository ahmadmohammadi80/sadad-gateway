import axios from "axios";

interface VerifyPaymentOptions {
  token: string;
  signData: string;
}

export async function verifyPayment(options: VerifyPaymentOptions) {
  const url = "https://sadad.shaparak.ir/api/v0/Advice/Verify";
  const response = await axios.post(url, {
    Token: options.token,
    SignData: options.signData
  });
  return response.data;
}