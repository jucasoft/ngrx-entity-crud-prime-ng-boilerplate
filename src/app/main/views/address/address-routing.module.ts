import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddressMainComponent} from './address-main/address-main.component';
import {AddressEditComponent} from '@views/address/address-edit/address-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: AddressMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: AddressEditComponent,
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
export class AddressRoutingModule {
}
