# Sadad Gateway

A lightweight Node.js library for integrating with the **Sadad (Sadad Gateway)** payment gateway, fully written in TypeScript.

> ⚠️ This package was developed based on the official Sadad documentation for educational and integration purposes. If you encounter any issues or bugs, please report them.

---

## 🔧 Features

- Supports `RequestToken` and `VerifyTransaction` operations
- Written in TypeScript
- Compatible with both JavaScript and TypeScript projects
- Easy integration with Express.js
- Clear error handling
- Dual language documentation (English & Persian)

---

## 📦 Installation

```bash
npm install sadad-gateway
```

> **Important:** This package requires the [`soap`](https://www.npmjs.com/package/soap) library as a peer dependency. Install it manually:

```bash
npm install soap
```

---

## 🚀 Usage

```ts
import { generateSignData, requestToken, verifyPayment } from "sadad-gateway";

const terminalId = "YOUR_TERMINAL_ID";
const merchantId = "YOUR_MERCHANT_ID";
const orderId = "123456";
const amount = 10000; // Amount in Rials
const returnUrl = "https://yoursite.com/callback";
const merchantKey = "YOUR_MERCHANT_KEY_FROM_SADAD";

// Step 1: Generate SignData
const signData = generateSignData(orderId + amount + terminalId, merchantKey);

// Step 2: Request Payment Token
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
  console.log("Redirect user to:", redirectUrl);
} else {
  console.error("Token request failed:", tokenRes.Description);
}

// Step 3: Verify Payment (on callback route)
const verifyRes = await verifyPayment({
  token: tokenRes.Token,
  signData
});

console.log("Verify result:", verifyRes);
```

---

## 📚 Documentation

More usage examples and detailed documentation are available on the [GitHub repository](https://github.com/ahmadmohammadi80/sadad-gateway.git).

---

## 🛠 Support & Feedback

If you encounter any issues or have feature suggestions, feel free to:

- Open an issue on [GitHub](https://github.com/ahmadmohammadi80/sadad-gateway.git)
- Or contact us directly via email:  
  📧 info@ahmadmohammadi.com

We appreciate your feedback and contributions! 💙

---

> ⚠️ **Disclaimer:** This is an **unofficial** developer tool and is not affiliated with or endorsed by Sadad Gateway Payment Company.