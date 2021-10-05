import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CssItemMainComponent} from './css-item-main/css-item-main.component';
import {CssItemEditComponent} from '@views/css-item/css-item-edit/css-item-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: CssItemMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CssItemEditComponent,
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
export class CssItemRoutingModule {
}
