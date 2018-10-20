import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { AuthService } from '../auth.service';
import { Router, provideRoutes, RouterModule } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginComponent } from '../login/login.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { appRoutes } from '../app.module';


describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      imports: [ RouterTestingModule,RouterModule.forRoot(
          appRoutes,
          {enableTracing: false} // <-- debugging purposes only
        )],
      providers: [AuthService, HttpClient, HttpHandler, JwtHelperService, JWT_OPTIONS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
