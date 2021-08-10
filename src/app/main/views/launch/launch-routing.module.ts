import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchMainComponent} from './launch-main/launch-main.component';
import {LaunchEditComponent} from '@views/launch/launch-edit/launch-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: LaunchMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: LaunchEditComponent,
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
export class LaunchRoutingModule {
}
