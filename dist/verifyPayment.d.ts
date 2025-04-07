interface VerifyPaymentOptions {
    token: string;
    signData: string;
}
export declare function verifyPayment(options: VerifyPaymentOptions): Promise<any>;
export {};
