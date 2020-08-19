import { TestBed, inject } from '@angular/core/testing';

import { RouteGuardServiceService } from './route-guard-service.service';

describe('RouteGuardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuardServiceService]
    });
  });

  it('should be created', inject([RouteGuardServiceService], (service: RouteGuardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
