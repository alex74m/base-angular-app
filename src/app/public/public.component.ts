import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  test : string = 'hello';

  constructor(private authService : AuthService) { 
    this.authService.test.subscribe((val : string)=>{
      this.test = val;
    });

  }

  ngOnInit() {
  }

  goodBy(){
      this.authService.goodBy();
  }

}
