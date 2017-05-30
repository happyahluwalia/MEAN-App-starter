import { Message } from './message.model';
import { Observable } from "rxjs/Observable";

import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message:Message) {
        this.messages.push(message);
        let myMsg = JSON.stringify(message);
        let myHeader = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:3000/message',myMsg, {headers : myHeader} )
                .map(response => response.json())
                .catch(err => Observable.throw(err));
        //console.log(this.messages);
    }

    getMessages() {
        //return Array.of(...this.messages);
        return this.messages ;
    }
    
    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }    
}