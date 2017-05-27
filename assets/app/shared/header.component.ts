import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
                <header class="row">
                    <nav class="col-md-8 col-md-offset-2">
                        <ul class="nav nav-pills">
                          <li routerLinkActive="active"><a routerLink='messages'>Messenger</a></li>
                          <li routerLinkActive="active"><a routerLink='auth'>Authentication</a></li>
                        </ul>
                    </nav>
                </header>
    `
    
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}