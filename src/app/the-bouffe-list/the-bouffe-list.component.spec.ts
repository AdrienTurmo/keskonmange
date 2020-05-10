import {async, TestBed} from '@angular/core/testing';

import {TheBouffeListComponent} from './the-bouffe-list.component';
import {AppComponent} from '../app.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule, By} from '@angular/platform-browser';
import {BouffeItem} from '../bouffe-item';
import {Component, Input} from '@angular/core';

describe('TheBouffeListComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockChooseForMeComponent
      ],
      imports: [FormsModule, BrowserModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

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

@Component({
  selector: 'app-choose-for-me',
  template: '<p>Mock Product Editor Component</p>'
})
class MockChooseForMeComponent {
  @Input() bouffeList;
}
