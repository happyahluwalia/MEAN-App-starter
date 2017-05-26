import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Message } from "./message.model";

@Component({
    selector: 'my-messages',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent{

    @Input() message : Message;
    @Output() editClicked = new EventEmitter<string>();
    constructor() {}

    onEdit() {
        this.editClicked.emit('Hey look here');
    }
}