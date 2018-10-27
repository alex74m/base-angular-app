import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userIsLogout : boolean = false;
  lastHost: string = '';
  constructor(private router: Router, private auth: AuthService){

  }

  ngOnInit(){
    console.log('refferrer',(document.referrer.split('/')[2]));
    console.log('lastLost', this.lastHost);
    //this.userIsLogout.subscribe(userIsLogout=>{
    //    if(userIsLogout){
    //      if(document.referrer.split('/')[2] != this.lastHost){
    //        this.router.navigate(['login']);
    //      }else{
    //        this.router.navigate(['public']);
    //      }
    //    }
    //});

    if(this.userIsLogout && document.referrer.split('/')[2] != this.lastHost){
      console.log('refferrer',(document.referrer.split('/')[2]));
      console.log('lastLost', this.lastHost);
        this.router.navigate(['login']);
    }
  }

  logoutUser(){
    this.auth.logoutUser().subscribe(res=>{
        if(res == 1){
          this.lastHost = document.location.host;
          console.log('lastLost1', this.lastHost);
          this.userIsLogout = true;
          window.location.href = "http://google.fr";
        }
    });
  }

}
