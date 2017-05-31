import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages.component';
import { MessageInputComponent } from './message-input.component';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [MessageComponent, 
                   MessageListComponent, 
                   MessageInputComponent,
                   MessagesComponent],
    imports: [ CommonModule, FormsModule ],
    providers: [MessageService]
})
export class MessageModule {}

