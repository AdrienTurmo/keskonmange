import {TestBed} from '@angular/core/testing';

import {ChooseAtRandomService} from './choose-at-random.service';
import {BouffeItem} from '../bouffe-item';

describe('ChooseAtRandomService', () => {
  let service: ChooseAtRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseAtRandomService);
  });

  it('should select the only wanted bouffe item', () => {
    const bouffeList = [new BouffeItem('Pizza', true), new BouffeItem('Brocolis', false)];

    expect(service.chooseAtRandom(bouffeList)).toBe('Pizza');
  });
});
