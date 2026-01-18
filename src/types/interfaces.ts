export interface sendSmsPayload {
    phoneNumber: string;
    message: string;
}

export interface SmsGateway{
    sendSms(payload: sendSmsPayload): Promise<void>;
}

export interface Reminder{
    phoneNumber: string;
    message: string;
    sendDate: Date;
}
