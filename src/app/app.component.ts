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
    this.selectedList = 'Basique';
    this.bouffeList = baseList.Basique.map(item => new BouffeItem(item, true));
  }

  newSelection() {
    this.bouffeList = baseList[this.selectedList].map(item => new BouffeItem(item, true));
  }

  addToList() {
    this.bouffeList.push(new BouffeItem(this.newBouffe, true));
    this.newBouffe = '';
  }

  allWanted() {
    this.bouffeList.forEach(bouffeItem => bouffeItem.isWanted = true);
  }

  allRejected() {
    this.bouffeList.forEach(bouffeItem => bouffeItem.isWanted = false);
  }

  toggleWanted(bouffe: BouffeItem) {
    bouffe.isWanted = !bouffe.isWanted;
  }
}
