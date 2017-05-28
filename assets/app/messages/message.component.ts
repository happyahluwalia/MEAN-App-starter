import { MessageService } from './message.service';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Message } from "./message.model";

@Component({
    selector: 'my-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent{

    @Input() message : Message;
    @Output() editClicked = new EventEmitter<string>();
    constructor(private messageService:MessageService) {}

    onEdit() {
        this.editClicked.emit('Hey look here');
    }

     onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}