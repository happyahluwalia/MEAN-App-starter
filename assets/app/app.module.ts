import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [AppComponent, 
                   MessageComponent, 
                   MessageListComponent, 
                   MessageInputComponent,
                   MessagesComponent,
                   AuthenticationComponent,
                   HeaderComponent,
                   LogoutComponent,
                   SigninComponent,
                   SignupComponent],
    providers: [MessageService],                   
    imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}