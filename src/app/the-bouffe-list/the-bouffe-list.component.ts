import {Component, OnInit} from '@angular/core';
import {ChooseForMeComponent} from './choose-for-me/choose-for-me.component';
import {BouffeControlPannelComponent} from './bouffe-control-pannel/bouffe-control-pannel.component';
import {BouffeItem} from '../bouffe-item';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-the-bouffe-list',
  templateUrl: './the-bouffe-list.component.html',
  styleUrls: ['./the-bouffe-list.component.css'],
  viewProviders: [ChooseForMeComponent, BouffeControlPannelComponent]
})
export class TheBouffeListComponent implements OnInit {
  bouffeList: BouffeItem[];
  pizzaOnly = false;

  constructor(private route: ActivatedRoute) {
    this.bouffeList = [];
  }

  ngOnInit(): void {
    this.pizzaOnly = !!this.route.snapshot.data.pizzaOnly;
    console.log(this.pizzaOnly);
  }

  toggleWanted(bouffe: BouffeItem) {
    bouffe.isWanted = !bouffe.isWanted;
  }
}
