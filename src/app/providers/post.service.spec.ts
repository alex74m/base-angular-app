import { TestBed, inject } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
