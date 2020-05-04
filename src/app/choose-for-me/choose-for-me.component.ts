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
  private spinTheWheelService = new ChooseAtRandomService();

  chooseForMe() {
    let numberOfTurns;
    numberOfTurns = 0;
    let interval;
    interval = setInterval(() => {
      if (numberOfTurns <= 10) {
        this.result = this.spinTheWheelService.chooseAtRandom(this.bouffeList);
        numberOfTurns++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
}
