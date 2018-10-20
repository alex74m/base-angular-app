import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { PostService } from '../providers/post.service';
import { MatDialog, MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      providers: [PostService, MatDialog, HttpClient, HttpHandler],
      imports: [
        MatCardModule, MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
