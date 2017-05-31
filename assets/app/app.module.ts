import { MessageModule } from './messages/message.module';
import { ErrorService } from './error/error.service';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './shared/header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { AppComponent } from "./app.component";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [AppComponent, 
                   AuthenticationComponent,
                   HeaderComponent,
                   ErrorComponent],
    providers: [AuthService, ErrorService],                   
    imports: [MessageModule, BrowserModule, AppRoutingModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}