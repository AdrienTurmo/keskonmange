import {Component} from '@angular/core';
// @ts-ignore
import baseList from '../assets/baseList.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keskonmange-angular';
  list;

  constructor() {
    this.list = baseList.baseList.map(item => ({
      value: item,
      wanted: true
    }));
  }

  toto = 'burger';
  result: string;

  addToList() {
    this.list.push({
      value: this.toto,
      wanted: true
    });
  }

  toggleWanted(bouffe: any) {
    bouffe.isWanted = false;
  }

  spinTheWheel() {
    this.result = this.list[this.getRandomInt(this.list.length)].value;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
