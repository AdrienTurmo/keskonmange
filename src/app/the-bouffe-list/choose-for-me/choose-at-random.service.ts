import {Injectable} from '@angular/core';
import {BouffeItem} from '../../bouffe-item';

@Injectable({
  providedIn: 'root'
})
export class ChooseAtRandomService {

  chooseAtRandom(list: BouffeItem[]): string {
    const onlyChoosen = list
      .filter(item => item.isWanted)
      .map(item => item.value);

    return onlyChoosen[this.getRandomInt(onlyChoosen.length)];
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
