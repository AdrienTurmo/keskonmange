import {Component} from '@angular/core';
import {ChooseForMeComponent} from './the-bouffe-list/choose-for-me/choose-for-me.component';
import {BouffeControlPannelComponent} from './the-bouffe-list/bouffe-control-pannel/bouffe-control-pannel.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ChooseForMeComponent, BouffeControlPannelComponent]
})
export class AppComponent {
}
