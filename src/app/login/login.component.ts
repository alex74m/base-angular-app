import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormService} from "../form.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from "../Model/User";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide = true;

    user : User;

    public loginForm: FormGroup;

    constructor(private router:Router, public formBuilderProvider: FormService, private authService : AuthService) {
        this.loginForm = this.formBuilderProvider.createLoginUserFormBuilderValidator();
    }

    ngOnInit() {
    }



    /**
     * Send login request to API Rest
     */
    public login(){

        this.authService.loginUser(this.loginForm.value)
            .subscribe((user) => {
                if(user && user.token){
                    localStorage.setItem('token', JSON.stringify(user.token));
                    localStorage.setItem('user', JSON.stringify(user));
                    this.router.navigate(['profil']);
                }
            });

    }
}
