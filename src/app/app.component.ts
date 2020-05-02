import {Component} from '@angular/core';
// @ts-ignore
import baseList from '../assets/baseList.json';
import {SpinTheWheelService} from './spin-the-wheel.service';
import {BouffeItem} from './bouffe-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keskonmange-angular';
  list;
  spinTheWheelService = new SpinTheWheelService();

  constructor() {
    this.list = baseList.baseList.map(item => new BouffeItem(item, true));
  }

  toto = 'burger';
  result: string;

  addToList() {
    this.list.push(new BouffeItem(this.toto, true));
  }

  spinTheWheel() {
    this.result = this.spinTheWheelService.chooseForMe(this.list);
  }

}
