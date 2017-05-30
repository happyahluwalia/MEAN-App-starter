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
        this.messageService.getMessages()
                            .subscribe(
                                data => this.messages = data,
                                err => console.error(err)
                            );
        console.log('ng on init called');
    }

}