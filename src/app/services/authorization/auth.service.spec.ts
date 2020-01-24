import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [ HttpClientTestingModule]
    });
  });

  it('should be created', inject([HttpTestingController, AuthService, ], (httpMock: HttpTestingController, service: AuthService ) => {
    expect(service).toBeTruthy();
  }));
});
