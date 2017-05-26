import { MessageComponent } from './messages/message.component';
import { MyMessageListComponent } from './messages/message-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent, MessageComponent, MyMessageListComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}