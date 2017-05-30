import { User } from './user.model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'my-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    constructor(private authService: AuthService) { }

    ngOnInit() { 
        this.myForm = new FormGroup({
                firstName: new FormControl('Enter First Name', Validators.required),
                lastName: new FormControl('Enter Last Name', Validators.required),
                Email: new FormControl('Enter Email', [Validators.required,Validators.email]),
                Password: new FormControl('Enter Password', Validators.required)  
        })
    }
    onSubmit() {
        console.log(this.myForm.controls.Email.value);
        let user = new User(this.myForm.controls.Email.value, this.myForm.controls.Password.value,
                            this.myForm.controls.firstName.value, this.myForm.controls.lastName.value)
        this.authService.saveUser(user)
                    .subscribe(
                        data => console.log(data),
                        err => console.error(err)
                    )
        this.myForm.reset();
    }
}