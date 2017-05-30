import { MessageService } from './message.service';
import { Component, Input } from '@angular/core';
import { Message } from "./message.model";

@Component({
    selector: 'my-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent{

    @Input() message : Message;
    constructor(private messageService:MessageService) {}

    onEdit() {
        this.messageService.editMessage(this.message);
    }

     onDelete() {
        this.messageService.deleteMessage(this.message)
                .subscribe(
                    result => console.log(result)
                )
    }
}