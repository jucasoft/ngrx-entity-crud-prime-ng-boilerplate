import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoinMainComponent} from './coin-main/coin-main.component';
import {CoinEditComponent} from '@views/coin/coin-edit/coin-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: CoinMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CoinEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoinRoutingModule {
}
