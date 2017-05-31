import { ErrorService } from './../error/error.service';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
* This class provides the AuthService service with methods to read names and add names.
*/
@Injectable()
export class AuthService {
/**
* Creates a new AuthServiceService with the injected Http.
* @param {Http} http - The injected Http.
* @constructor
*/
    constructor(private http: Http, private errorService: ErrorService) {}
/**
* Returns an Observable for the HTTP GET request for the JSON resource.
* @return {string[]} The Observable for the HTTP request.
*/
    saveUser(user: User) {
        let myHeader = new Headers({'Content-Type':'application/json'});
        let body = JSON.stringify(user);
        return this.http.post('http://localhost:3000/user', body, {headers : myHeader})
                            .map((res: Response) => res.json())
                            .catch((err:Response) => {
                                    this.errorService.handleError(err.json()); 
                                    return Observable.throw(err);
                                 });
    }

    signInUser(user: User){
       let myHeader = new Headers({'Content-Type': 'application/json'});
       let body = JSON.stringify(user);
       return this.http.post('http://localhost:3000/user/signin', body, {headers : myHeader})
                            .map((res: Response) => res.json())
                            //.catch(this.handleError);
                            .catch((err:Response) => {
                                 this.errorService.handleError(err.json()); 
                                 return Observable.throw(err);
                               });                            
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') != null
    }
}