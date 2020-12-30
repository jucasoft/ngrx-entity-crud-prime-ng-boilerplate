import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserMainComponent} from './user-main/user-main.component';
import {UserEditComponent} from '@views/user/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: UserMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: UserEditComponent,
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
export class UserRoutingModule {
}
