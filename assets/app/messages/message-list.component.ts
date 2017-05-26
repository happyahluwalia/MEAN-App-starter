
import { Component } from '@angular/core';
import { Message } from './message.model';
@Component({
    selector: 'my-message-list',
    template: ` 
                <my-messages [message]="message" 
                        (editClicked)="message.content=$event; message.author=$event;"
                        *ngFor="let message of messages"></my-messages>
              `
})

export class MyMessageListComponent{

    messages: Message[] = [new Message('my first message','anonymous'),
                           new Message('my second message','anonymous'),
                           new Message('my third message','anonymous') ];
    constructor() {}
}