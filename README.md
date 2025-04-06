# Sadad Gateway

درگاه پرداخت بانک سداد برای Node.js با پشتیبانی از TypeScript
این پکیچ برای تمرین طبق راهنمای درگاه نوشته شده است در صورتی که خطای دارد لطفا اطلاع دهید 
## نصب
```bash
npm install sadad-gateway
```

## استفاده
```ts
import { generateSignData, requestToken, verifyPayment } from "sadad-gateway";

const terminalId = "...";
const merchantId = "...";
const orderId = "123456";
const amount = 10000;
const returnUrl = "https://yoursite.com/callback";
const merchantKey = "کلید ارائه شده توسط سداد";

const signData = generateSignData(orderId + amount + terminalId, merchantKey);

const tokenRes = await requestToken({
  terminalId,
  merchantId,
  amount,
  orderId,
  returnUrl,
  signData
});

if (tokenRes.ResCode === 0) {
  const redirectUrl = `https://sadad.shaparak.ir/VPG/Purchase?Token=${tokenRes.Token}`;
  console.log("redirect user to:", redirectUrl);
}

// در مرحله بازگشت از درگاه:
const verifyRes = await verifyPayment({
  token: tokenRes.Token,
  signData
});
console.log("verify result:", verifyRes);
```
#   s a d a d - g a t e w a y  
 