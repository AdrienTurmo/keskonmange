import {Component} from '@angular/core';
import baseList from '../assets/baseList.json';
import {BouffeItem} from './bouffe-item';
import {ChooseForMeComponent} from './choose-for-me/choose-for-me.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ChooseForMeComponent]
})
export class AppComponent {
  bouffeList;
  newBouffe = 'Burger';
  result: string;

  constructor() {
    this.bouffeList = baseList.baseList.map(item => new BouffeItem(item, true));
  }

  addToList() {
    this.bouffeList.push(new BouffeItem(this.newBouffe, true));
  }
}
