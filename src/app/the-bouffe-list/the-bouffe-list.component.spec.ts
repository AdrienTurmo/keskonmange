import {async, TestBed} from '@angular/core/testing';

import {TheBouffeListComponent} from './the-bouffe-list.component';
import {AppComponent} from '../app.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
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
});

@Component({
  selector: 'app-choose-for-me',
  template: '<p>Mock Product Editor Component</p>'
})
class MockChooseForMeComponent {
  @Input() bouffeList;
}
