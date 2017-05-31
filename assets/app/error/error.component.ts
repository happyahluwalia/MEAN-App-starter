import { Error } from './error.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    error: Error;
    display: 'none';
    constructor() { }

    ngOnInit() { }
    onErrorClose() {
        this.display = 'none';
    }
}