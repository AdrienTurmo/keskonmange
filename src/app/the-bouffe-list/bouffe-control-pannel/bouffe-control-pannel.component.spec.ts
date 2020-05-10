import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BouffeControlPannelComponent} from './bouffe-control-pannel.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {BouffeItem} from '../../bouffe-item';
import {FormsModule} from '@angular/forms';

describe('BouffeControlPannelComponent', () => {
  let component: BouffeControlPannelComponent;
  let fixture: ComponentFixture<BouffeControlPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouffeControlPannelComponent ],
      imports: [FormsModule, BrowserModule]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(BouffeControlPannelComponent);
      component = fixture.componentInstance;
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BouffeControlPannelComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it(`should set newBouffe to 'Burger`, () => {
    expect(component.newBouffe).toEqual('Burger');
  });

  it('should render new bouffe input', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('#new-bouffe').value).toContain('Burger');
    });
  });

  it('should add to the bouffe list', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const newBouffeInput = fixture.debugElement.query(By.css('#new-bouffe')).nativeElement;
      const newBouffeButton = fixture.debugElement.query(By.css('#new-bouffe-button')).nativeElement;

      newBouffeInput.value = 'Falafels';
      newBouffeInput.dispatchEvent(new Event('input'));
      newBouffeButton.dispatchEvent(new Event('click'));

      expect(component.bouffeList).toContain(new BouffeItem('Falafels', true));
    });
  });
});
