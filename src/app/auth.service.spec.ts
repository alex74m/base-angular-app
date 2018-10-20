import { TestBed, inject } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { AuthService } from './auth.service';
import { Router, RouterModule, ActivatedRoute, provideRoutes } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { appRoutes } from './app.module';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';

describe('AuthService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [JwtHelperService, HttpClient, HttpHandler, JWT_OPTIONS]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
