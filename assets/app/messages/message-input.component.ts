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
        
        const msg = new Message(form.value.content,'happy');
        console.log(msg);
        this.messageService.addMessage(msg)
             .subscribe(
                 data => console.log(data),
                 err => console.error(err)
             );
        form.reset();
    }

}