import {Component, OnInit} from '@angular/core';
import {BouffeItem} from './bouffe-item';
import {ChooseForMeComponent} from './choose-for-me/choose-for-me.component';
import {BouffeControlPannelComponent} from './bouffe-control-pannel/bouffe-control-pannel.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ChooseForMeComponent, BouffeControlPannelComponent]
})
export class AppComponent implements OnInit {
  bouffeList: BouffeItem[];

  ngOnInit(): void {
    this.bouffeList = [];
  }

  toggleWanted(bouffe: BouffeItem) {
    bouffe.isWanted = !bouffe.isWanted;
  }
}
