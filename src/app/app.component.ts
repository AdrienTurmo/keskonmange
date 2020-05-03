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
    this.rapidSpin(50, 20);
    this.rapidSpin(40, 40);
    this.rapidSpin(30, 100);
    this.rapidSpin(20, 200);
    this.rapidSpin(10, 400);
    this.rapidSpin(5, 500);
    this.rapidSpin(5, 700);
    this.rapidSpin(4, 1000);
  }

  private rapidSpin(maxTurn = 50, ms = 20) {
    let turn1;
    turn1 = 0;
    let spin1;
    spin1 = setInterval(() => {
      if (turn1 <= maxTurn) {
        this.result = this.spinTheWheelService.chooseForMe(this.list);
        turn1++;
      } else {
        clearInterval(spin1);
      }
    }, ms);
  }
}
