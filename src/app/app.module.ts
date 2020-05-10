import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ChooseForMeComponent} from './the-bouffe-list/choose-for-me/choose-for-me.component';
import {BouffeControlPannelComponent} from './the-bouffe-list/bouffe-control-pannel/bouffe-control-pannel.component';
import {AppRoutingModule} from './app-rooting.module';
import {TheBouffeListComponent} from './the-bouffe-list/the-bouffe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseForMeComponent,
    BouffeControlPannelComponent,
    TheBouffeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
