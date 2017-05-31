import { authRouting } from './auth.routes';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LogoutComponent,
                   SigninComponent,
                   SignupComponent],
    imports: [ CommonModule, ReactiveFormsModule, authRouting ],
    providers: [],
    bootstrap: []
})
export class AuthModule {}