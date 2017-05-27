import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-signup',
    template: `
                    <div class="col-md-8 col-md-offset-2">
                        <button class="btn btn-danger" (click)="onLogout()">Sign Up</button>
                        
                    </div>
                `
})
export class SignupComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    onLogout() {}
}