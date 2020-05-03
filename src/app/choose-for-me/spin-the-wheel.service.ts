import {Injectable} from '@angular/core';
import {BouffeItem} from '../bouffe-item';

@Injectable({
  providedIn: 'root'
})
export class SpinTheWheelService {

  static chooseForMe(list: BouffeItem[]): string {
    const onlyChoosen = list
      .filter(item => item.isWanted)
      .map(item => item.value);

    return onlyChoosen[this.getRandomInt(onlyChoosen.length)];
  }

  private static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}