import { ErrorService } from './error.service';
import { Error } from './error.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    error: Error;
    display = 'none';
    constructor(private errorService: ErrorService) { }

    ngOnInit() {
        this.errorService.errorOccured
                .subscribe(
                    (error : Error) => {
                        this.error = error;
                        this.display = 'block';
                    }
                );
     }
    onErrorClose() {
        this.display = 'none';
    }
}