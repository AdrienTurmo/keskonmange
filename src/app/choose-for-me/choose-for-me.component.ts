import {Component, Input} from '@angular/core';
import {BouffeItem} from '../bouffe-item';
import {SpinTheWheelService} from './spin-the-wheel.service';

@Component({
  selector: 'app-choose-for-me',
  templateUrl: './choose-for-me.component.html',
  styleUrls: ['./choose-for-me.component.css'],
  providers: [SpinTheWheelService]
})
export class ChooseForMeComponent {
  @Input() bouffeList: BouffeItem[];
  result: string;
  private spinTheWheelService = new SpinTheWheelService();

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

  private rapidSpin(maxTurn: number , intervalInMs: number) {
    let numberOfTurns;
    numberOfTurns = 0;
    let interval;
    interval = setInterval(() => {
      if (numberOfTurns <= maxTurn) {
        this.result = this.spinTheWheelService.chooseForMe(this.bouffeList);
        numberOfTurns++;
      } else {
        clearInterval(interval);
      }
    }, intervalInMs);
  }

}
