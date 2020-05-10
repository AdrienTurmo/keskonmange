import {Component} from '@angular/core';
import {BouffeItem} from './bouffe-item';
import {ChooseForMeComponent} from './choose-for-me/choose-for-me.component';
import {BouffeControlPannelComponent} from './bouffe-control-pannel/bouffe-control-pannel.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ChooseForMeComponent, BouffeControlPannelComponent]
})
export class AppComponent {
  bouffeList: BouffeItem[];

  toggleWanted(bouffe: BouffeItem) {
    bouffe.isWanted = !bouffe.isWanted;
  }
}
