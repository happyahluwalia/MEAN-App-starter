import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'my-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    constructor() { }

    ngOnInit() { 
        this.myForm = new FormGroup({
                firstName: new FormControl('Enter First Name', Validators.required),
                lastName: new FormControl('Enter Last Name', Validators.required),
                Email: new FormControl('Enter Email', [Validators.required,Validators.email]),
                Password: new FormControl('Enter Password', Validators.required)  
        })
    }
    onSubmit() {
        console.log(this.myForm);
        this.myForm.reset();
    }
}