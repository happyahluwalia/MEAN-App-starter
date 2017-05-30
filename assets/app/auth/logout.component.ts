import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-logout',
    template: `
                    <div class="col-md-8 col-md-offset-2">
                        <button class="btn btn-danger" (click)="onLogout()">Logout</button>
                        
                    </div>
                `
})
export class LogoutComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }

    onLogout() {
        this.authService.logout();
    }
}