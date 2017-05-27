import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './shared/header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageService } from './messages/message.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, 
                   MessageComponent, 
                   MessageListComponent, 
                   MessageInputComponent,
                   MessagesComponent,
                   AuthenticationComponent,
                   HeaderComponent],
    providers: [MessageService],                   
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}