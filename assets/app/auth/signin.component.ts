import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
    selector: 'my-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    constructor() { }

    ngOnInit() { 
        this.myForm = new FormGroup({
                Email: new FormControl('Enter Email', [Validators.required,Validators.email]),
                Password: new FormControl('Enter Password', Validators.required)  
        })
    }
    onSubmit() {
        console.log(this.myForm);
        this.myForm.reset();
    }
}