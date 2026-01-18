import { Reminder, SmsGateway } from "./types/interfaces";
export class ReminderScheduler{
    private reminders: Reminder[] = [];
    private gateway: SmsGateway;
    constructor(gateway: SmsGateway){
        this.gateway = gateway;
    }
    schedule(reminder: Reminder): void{
        this.reminders.push(reminder);
        console.log(`Reminder scheduled for ${reminder.phoneNumber} with message ${reminder.message} on ${reminder.sendDate}`);
    }
}

