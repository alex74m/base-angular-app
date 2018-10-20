import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { Router, provideRoutes } from '@angular/router';
import { FormService } from '../form.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfilComponent } from '../profil/profil.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        MatButtonModule,MatFormFieldModule,
        MatInputModule,
      ],
      providers: [AuthService, FormService, FormBuilder, FormGroup]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
