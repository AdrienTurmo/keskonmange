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
    // let list: object[];
    // tslint:disable-next-line:only-arrow-functions
    this.list = baseList.baseList.map(function(item) {
      return {
        value: item,
        wanted: true
      };
    });
  }

  toto = 'burger';

  addToList() {
    this.list.push({
      value: this.toto,
      wanted: true
    });
    this.toto = '';
  }

  toggleWanted(bouffe: any) {
    bouffe.isWanted = false;
  }
}
