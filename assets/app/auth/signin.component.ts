import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-signin',
   template: `
                    <div class="col-md-8 col-md-offset-2">
                        <button class="btn btn-danger" (click)="onLogout()">Signin</button>
                        
                    </div>
                `
})
export class SigninComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    onLogout() {}
}