import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TheBouffeListComponent} from './the-bouffe-list/the-bouffe-list.component';

const routes: Routes = [
  {path: 'keskonmange', component: TheBouffeListComponent},
  {path: '', redirectTo: 'keskonmange', pathMatch: 'full'},
  {path: 'pizza', redirectTo: 'keskonmange', data: {pizzaOnly: 'true'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
