import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { NgForm } from '@angular/forms'

@Component({
    selector: 'my-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {
    msg: Message = null;
    ngOnInit(): void {
        this.messageService.msgEdit.subscribe(
            (message:Message) => this.msg = message
        );
    }
    constructor(private messageService: MessageService) { }
    
    onClear(form: NgForm) {
        this.msg = null;
        form.resetForm();
    }

    onSubmit(form:NgForm) {
        if(this.msg) {
            //if not null then update
            this.msg.content = form.value.content;
            this.messageService.updateMessage(this.msg)
                    .subscribe(
                        result => console.log(result)
                    );
            this.msg = null;
        } else {
            //else it is new so create
            const msg = new Message(form.value.content,'happy');
            this.messageService.addMessage(msg)
             .subscribe(
                 data => console.log(data),
                 err => console.error(err)
             );
        }
        
        form.reset();
    }

}