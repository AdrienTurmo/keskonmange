import {TestBed} from '@angular/core/testing';

import {SpinTheWheelService} from './spin-the-wheel.service';
import {BouffeItem} from '../bouffe-item';

describe('SpinTheWheelService', () => {
  let service: SpinTheWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinTheWheelService);
  });

  it('should select the only wanted bouffe item', () => {
    const bouffeList = [new BouffeItem('Pizza', true), new BouffeItem('Brocolis', false)];

    expect(service.chooseForMe(bouffeList)).toBe('Pizza');
  });
});
