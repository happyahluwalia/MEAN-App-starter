import { SignupComponent } from './signup.component';
import { LogoutComponent } from './logout.component';
import { SigninComponent } from './signin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const Auth_Routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];

export const authRouting = RouterModule.forChild(Auth_Routes);
// export class AuthRoutingModule {}
