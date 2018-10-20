import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from "./Model/User";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs/Rx";
import {map} from "rxjs-compat/operator/map";
import { environment } from "src/environments/environment";

const ENV = environment;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user : User;
    private pathUser: string = `${ENV.host}/user`;

    test : Subject<string> = new Subject<string>();


    constructor(private router: Router, private http: HttpClient, public jwtHelper: JwtHelperService) {
    }

    goodBy(){
        this.test.next('GoodBy My Friend');
    }


    public getUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    }

    public setUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        let canAccess = !this.jwtHelper.isTokenExpired(token);
        console.log('canAccess', canAccess);
        return canAccess;

    }

    public loginUser(credentials)  : Observable<User>{
        return this.http.get<User>(this.pathUser, {params: credentials, observe: 'body'});
    }


    public logoutUser() {
        this.removeUserInLocalStorage();
        this.router.navigate(['login']);
    }

    private removeUserInLocalStorage(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
