import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BouffeControlPannelComponent} from './bouffe-control-pannel.component';

describe('BouffeControlPannelComponent', () => {
  let component: BouffeControlPannelComponent;
  let fixture: ComponentFixture<BouffeControlPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouffeControlPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouffeControlPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
