import { MessageService } from './message.service';

import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'my-message-list',
    template: ` 
                <my-message [message]="message" 
                        (editClicked)="message.content=$event; message.author=$event;"
                        *ngFor="let message of messages"></my-message>
              `
})

export class MessageListComponent implements OnInit {

    messages: Message[] = [ ];
    constructor(private messageService:MessageService) {}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.messages = this.messageService.getMessages();
        console.log('ng on init called');
    }

}