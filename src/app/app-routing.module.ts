import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)},
  {path: 'coin', loadChildren: () => import('./main/views/coin/coin.module').then(m => m.CoinModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
