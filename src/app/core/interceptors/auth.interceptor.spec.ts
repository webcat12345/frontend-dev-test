import { TestBed, inject } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LocalStorageModule } from 'angular-2-local-storage';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInterceptor],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        LocalStorageModule.withConfig(),
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([AuthInterceptor], (service: AuthInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
