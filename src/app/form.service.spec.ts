import { TestBed, inject } from '@angular/core/testing';

import { FormService } from './form.service';
import { Validators, FormBuilder } from '@angular/forms';

describe('FormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService, FormBuilder]
    });
  });

  it('should be created', inject([FormService], (service: FormService) => {
    expect(service).toBeTruthy();
  }));
});
