import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Test } from '../Model/Test';
import { TestEnum} from '../Enum/test.enum';
import { LoginComponent } from '../login/login.component';
import { FormService } from '../form.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  test : Test = {name : "<script>alert('ok')></script>"};

  monenum : string = TestEnum.Proof;

  jokes : Array<Object> = [
    {
      setup: "What did the cheese say when it looked in the mirror?",
      punchline: "Hello-Me (Halloumi)",
      hide: true
    },
    {
      setup: "What kind of cheese do you use to disguise a small horse?",
      punchline: "Mask-a-pony (Mascarpone)",
      hide: true
    },
    {
      setup: "A kid threw a lump of cheddar at me",
      punchline: "I thought ‘That’s not very mature’",
      hide: true
    },
  ];

  /**
   * 
   * @param authService 
   */
  constructor(private authService : AuthService) { 
    this.authService.test.subscribe((data)=>{
      this.test = {name: data.name};
    });

  }

  ngOnInit() {
    this.authService.getTest().subscribe((data)=>{
      console.log('data',data);
      this.test = {name: data['test'].name};
    })
  }

  toggle(joke) {
    joke.hide = !joke.hide;
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
