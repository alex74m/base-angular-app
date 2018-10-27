import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

 //userIsLogout : BehaviorSubject<boolean>;

 //constructor(private auth: AuthService) { }

 //ngOnInit() {
 //    this.auth.logoutUser().subscribe(res=>{
 //        if(res == 1 ){

 //        }
 //    });
 //}



}
