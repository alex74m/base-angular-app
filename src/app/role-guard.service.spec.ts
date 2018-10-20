import { TestBed, inject } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { RoleGuardService } from './role-guard.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

describe('RoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, HttpClient, HttpHandler, JwtHelperService],
      imports: [ RouterTestingModule ]
    });
  });

  it('should be created', inject([RoleGuardService], (service: RoleGuardService) => {
    expect(service).toBeTruthy();
  }));
});
