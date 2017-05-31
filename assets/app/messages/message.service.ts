import { ErrorService } from './../error/error.service';
import { Message } from './message.model';
import { Observable } from "rxjs/Observable";

import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class MessageService {
    private messages: Message[] = [];
    msgEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService: ErrorService) {}

    addMessage(message:Message) {
        
        let myMsg = JSON.stringify(message);
        let myHeader = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:3000/message' +'?token='+localStorage.getItem('token'),myMsg, {headers : myHeader} )
                .map(response => {
                         const result= response.json();
                         const tmpMsg= new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
                         this.messages.push(tmpMsg);
                         return tmpMsg;
                    })
                 .catch((error:Response) => {
                     console.log(error);
                            this.errorService.handleError(error.json()); 
                            return Observable.throw(error);
                     } );
    }

    getMessages() {
        //return Array.of(...this.messages);
       return this.http.get('http://localhost:3000/message' +'?token='+localStorage.getItem('token'))
                .map(response  => { 
                                const msgs = response.json().obj; 
                                let newMsg: Message[] = []
                                for (let msg of msgs) {
                                    newMsg.push(new Message(msg.content, msg.user.firstName, msg._id,  msg.user._id));
                                  }
                                  this.messages = newMsg;
                                 return newMsg; 
                            })
                    .catch((err:Response) => {
                            this.errorService.handleError(err.json()); 
                            return Observable.throw(err);
                         } );

        //return this.messages ;
    }

    editMessage(msg: Message){
        this.msgEdit.emit(msg);
    }
    
    updateMessage(message: Message) {
        let myMsg = JSON.stringify(message);
        let myHeader = new Headers({'Content-Type':'application/json'});
        return this.http.patch('http://localhost:3000/message/'+message.messageId +'?token='+localStorage.getItem('token'), myMsg, {headers : myHeader} )
                .map(response => response.json())
                .catch((err:Response) => {
                            this.errorService.handleError(err.json()); 
                            return Observable.throw(err);
                     } );

    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/'+message.messageId +'?token='+localStorage.getItem('token'))
                .map(response => response.json())
                .catch((err:Response) => {
                            this.errorService.handleError(err.json()); 
                            return Observable.throw(err);
                     } );

    }    
}