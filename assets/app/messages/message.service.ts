import { Message } from './message.model';

export class MessageService {

    private messages: Message[] = [];

    constructor() {}

    addMessage(message:Message) {
        this.messages.push(message);
        //console.log(this.messages);
    }

    getMessages() {
        //return Array.of(...this.messages);
        return this.messages ;
    }
    
    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }    
}