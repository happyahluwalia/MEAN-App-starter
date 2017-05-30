import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
    selector: 'my-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { 
        this.myForm = new FormGroup({
                Email: new FormControl('Enter Email', [Validators.required,Validators.email]),
                Password: new FormControl('Enter Password', Validators.required)  
        })
    }
    onSubmit() {
        let user = new User(this.myForm.controls.Email.value, this.myForm.controls.Password.value;
        this.authService.signInUser(user)
            .subscribe(
                data => {
                           localStorage.setItem('token', data.token);
                            localStorage.setItem('userId', data.userId)
                            console.log(data);
                            this.router.navigateByUrl('/');
                        },
                err => { console.error(err);        }

            );
        this.myForm.reset();
    }
}