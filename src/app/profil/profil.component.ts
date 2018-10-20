import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../Model/User";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

    public user : User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
      this.user = this.authService.getUser();
  }
}
