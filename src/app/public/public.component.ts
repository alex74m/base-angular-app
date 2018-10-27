import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Test } from '../Model/Test';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  test : Test = {name : "<script>alert('ok')></script>"};

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

  goodBy(){
      this.authService.goodBy();
  }

  updateTest(newValTest : Test){
      this.authService.updateTest(newValTest).subscribe(res=>{
        console.log('res',res);
      });
  }

}
