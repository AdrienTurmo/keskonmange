import {Component, Input, OnInit} from '@angular/core';
import {BouffeItem} from '../../bouffe-item';
import {ChooseAtRandomService} from './choose-at-random.service';

@Component({
  selector: 'app-choose-for-me',
  templateUrl: './choose-for-me.component.html',
  styleUrls: ['./choose-for-me.component.scss'],
  providers: [ChooseAtRandomService]
})
export class ChooseForMeComponent implements OnInit {
  @Input() bouffeList: BouffeItem[];
  result = 'Je Choisi';
  done: boolean;
  private spinTheWheelService = new ChooseAtRandomService();

  ngOnInit(): void {
    this.bouffeList = [];
  }

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
