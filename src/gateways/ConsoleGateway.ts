import { sendSmsPayload, SmsGateway } from "../types/interfaces";
export class ConsoleGateway implements SmsGateway{
    async sendSms(payload: sendSmsPayload){
        console.log(`Sending message to: ${payload.phoneNumber} with message: ${payload.message}`)
    }
}