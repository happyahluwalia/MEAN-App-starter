import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-messages',
    template: `<div class="row">  
                    <div class="class-md-8 col-md-offset-2">
                        <my-message-input></my-message-input>
                    </div>
                </div>
                <hr>
                <div class="row"> 
                    <div class="class-md-8 col-md-offset-2">
                        <my-message-list></my-message-list>
                    </div>
                </div>`
    
})
export class MessagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}