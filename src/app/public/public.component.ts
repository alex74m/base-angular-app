import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Test } from '../Model/Test';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  test : Test = {name : "Helloooo"};

  constructor(private authService : AuthService) { 
    this.authService.test.subscribe((data)=>{
      this.test = {name: data.name};
    });

  }

  ngOnInit() {
    this.authService.getTest().subscribe((data)=>{
      this.test = {name: data.name};
    })
  }

  goodBy(){
      this.authService.goodBy();
  }

  updateTest(newValTest : Test){
      this.authService.updateTest(newValTest).subscribe(res=>{
        console.log('res',res);
      });
  }

}
