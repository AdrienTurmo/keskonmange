import {TestBed} from '@angular/core/testing';

import {SpinTheWheelService} from './spin-the-wheel.service';

describe('SpinTheWheelService', () => {
  let service: SpinTheWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinTheWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
