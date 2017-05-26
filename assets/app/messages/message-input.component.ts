import {Component} from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { NgForm } from '@angular/forms'

@Component({
    selector: 'my-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
    constructor(private messageService: MessageService) {}

    onSubmit(form:NgForm) {
        console.log('here');
        this.messageService.addMessage(new Message(form.value.content, 'happy'));
        form.reset();
    }

}