import {Component, Input} from '@angular/core';
import {BouffeItem} from '../bouffe-item';
import {ChooseAtRandomService} from './choose-at-random.service';

@Component({
  selector: 'app-choose-for-me',
  templateUrl: './choose-for-me.component.html',
  styleUrls: ['./choose-for-me.component.css'],
  providers: [ChooseAtRandomService]
})
export class ChooseForMeComponent {
  @Input() bouffeList: BouffeItem[];
  result: string;
  done: boolean;
  private spinTheWheelService = new ChooseAtRandomService();

  chooseForMe() {
    this.done = false;
    let numberOfTurns = 0;
    let interval;
    interval = setInterval(() => {
      if (numberOfTurns <= 20) {
        this.result = this.spinTheWheelService.chooseAtRandom(this.bouffeList);
        numberOfTurns++;
      } else {
        clearInterval(interval);
        this.done = true;
      }
    }, 25);
  }
}
