import crypto from "crypto";

export function generateSignData(data: string, key: string): string {
  const buffer = Buffer.from(data, "utf-8");
  const keyBuffer = Buffer.from(key, "base64");
  const sign = crypto.createHmac("sha1", keyBuffer).update(buffer).digest("base64");
  return sign;
}