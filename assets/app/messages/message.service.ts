import { Message } from './message.model';
import { Observable } from "rxjs/Observable";

import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class MessageService {
    private messages: Message[] = [];
    msgEdit = new EventEmitter<Message>();

    constructor(private http: Http) {}

    addMessage(message:Message) {
        
        let myMsg = JSON.stringify(message);
        let myHeader = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:3000/message' +'?token='+localStorage.getItem('token'),myMsg, {headers : myHeader} )
                .map(response => {
                         const result=   response.json();
                         const tmpMsg= new Message(result.obj.content, msg.user.firstName, result.obj._id, msg.user._id);
                         this.messages.push(tmpMsg);
                         return tmpMsg;
                    })
                .catch(err => Observable.throw(err));
        //console.log(this.messages);
    }

    getMessages() {
        //return Array.of(...this.messages);
       return this.http.get('http://localhost:3000/message' +'?token='+localStorage.getItem('token'))
                .map(response  => { 
                                console.log("Inside service");
                                const msgs = response.json().obj; 
                                let newMsg: Message[] = []
                                for (let msg of msgs) {
                                    newMsg.push(new Message(msg.content, msg.user.firstName, msg._id,  msg.user._id));
                                  }
                                  this.messages = newMsg;
                                 return newMsg; 
                            })
                .catch(err => Observable.throw(err));
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
                .catch(err => Observable.throw(err));
    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/'+message.messageId +'?token='+localStorage.getItem('token'))
                .map(response => response.json())
                .catch(err => Observable.throw(err));
    }    
}