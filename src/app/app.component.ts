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
  newBouffe = 'Burger';
  bouffeList: BouffeItem[];
  selectedList: string;
  bouffeListOptions = Object.keys(baseList);
  result: string;

  constructor() {
    this.selectedList = 'baseList';
    this.bouffeList = baseList.baseList.map(item => new BouffeItem(item, true));
  }

  newSelection() {
    console.log(baseList[this.selectedList]);
    console.log(this.selectedList);
    this.bouffeList = baseList[this.selectedList].map(item => new BouffeItem(item, true));
  }

  addToList() {
    this.bouffeList.push(new BouffeItem(this.newBouffe, true));
  }
}
