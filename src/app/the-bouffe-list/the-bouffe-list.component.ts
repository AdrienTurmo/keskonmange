import {Component, OnInit} from '@angular/core';
import {ChooseForMeComponent} from './choose-for-me/choose-for-me.component';
import {BouffeControlPannelComponent} from './bouffe-control-pannel/bouffe-control-pannel.component';
import {BouffeItem} from '../bouffe-item';

@Component({
  selector: 'app-the-bouffe-list',
  templateUrl: './the-bouffe-list.component.html',
  styleUrls: ['./the-bouffe-list.component.css'],
  viewProviders: [ChooseForMeComponent, BouffeControlPannelComponent]
})
export class TheBouffeListComponent implements OnInit {
  bouffeList: BouffeItem[];

  constructor() {
    this.bouffeList = [];
  }

  ngOnInit(): void {
  }

  toggleWanted(bouffe: BouffeItem) {
    bouffe.isWanted = !bouffe.isWanted;
  }
}
