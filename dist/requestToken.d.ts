interface RequestTokenOptions {
    terminalId: string;
    merchantId: string;
    amount: number;
    orderId: string;
    returnUrl: string;
    signData: string;
}
export declare function requestToken(options: RequestTokenOptions): Promise<any>;
export {};
